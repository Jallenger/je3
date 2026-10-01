#!/usr/bin/env python3
"""Send the Agent Foundry brief + mockup write-up to Gemini models for review.

Usage:
    GEMINI_API_KEY=... python3 ask_gemini.py                 # uses the default targets below
    GEMINI_API_KEY=... python3 ask_gemini.py --list          # show available model IDs
    GEMINI_API_KEY=... python3 ask_gemini.py MODEL_ID [...]  # explicit model IDs

Targets are matched against the live model list, so the exact IDs don't need to be known in advance.
Responses are written next to this script as review_<model>.md.
"""
import json
import os
import re
import sys
import urllib.error
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
DOCS = os.path.dirname(HERE)
API = 'https://generativelanguage.googleapis.com/v1beta'

# (label, version, tier) used to find the model in the live list
TARGETS = [('Gemini 3.8 Flash', '3.8', 'flash'), ('Gemini 3.1 Pro', '3.1', 'pro')]

FILES = ['agent_foundry_build_spec_v3.1_lean.md', 'agent_foundry_game_ui_mockup.md']


def call(method, path, key, body=None):
    req = urllib.request.Request(API + path, method=method,
                                 headers={'x-goog-api-key': key, 'Content-Type': 'application/json'},
                                 data=json.dumps(body).encode() if body is not None else None)
    try:
        with urllib.request.urlopen(req, timeout=600) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit('HTTP %d from %s: %s' % (e.code, path, e.read().decode()[:600]))


def list_models(key):
    out, token = [], ''
    while True:
        res = call('GET', '/models?pageSize=200' + ('&pageToken=' + token if token else ''), key)
        out += [m for m in res.get('models', []) if 'generateContent' in m.get('supportedGenerationMethods', [])]
        token = res.get('nextPageToken')
        if not token:
            return out


def pick(models, version, tier):
    ids = [m['name'].split('/', 1)[1] for m in models]
    hits = [i for i in ids if version in i and tier in i.lower()]
    stable = [i for i in hits if not re.search(r'preview|exp|latest|lite|image|tts|audio|live', i)]
    return (stable or hits or [None])[0]


def main():
    key = os.environ.get('GEMINI_API_KEY')
    if not key:
        sys.exit('Set GEMINI_API_KEY first (see README.md in this folder).')
    models = list_models(key)
    if '--list' in sys.argv:
        print('\n'.join(sorted(m['name'].split('/', 1)[1] for m in models)))
        return
    explicit = [a for a in sys.argv[1:] if not a.startswith('-')]
    if explicit:
        chosen = [(m, m) for m in explicit]
    else:
        chosen = []
        for label, ver, tier in TARGETS:
            mid = pick(models, ver, tier)
            if not mid:
                print('No model matching %s found. Run with --list and pass the ID explicitly.' % label)
                continue
            chosen.append((label, mid))
    if not chosen:
        sys.exit(1)

    prompt = open(os.path.join(HERE, 'review_prompt.md')).read()
    parts = [{'text': prompt}]
    for f in FILES:
        parts.append({'text': '\n\n===== FILE: %s =====\n\n%s' % (f, open(os.path.join(DOCS, f)).read())})

    for label, mid in chosen:
        print('Asking %s (%s)...' % (label, mid), flush=True)
        res = call('POST', '/models/%s:generateContent' % mid, key,
                   {'contents': [{'role': 'user', 'parts': parts}],
                    'generationConfig': {'maxOutputTokens': 16384}})
        cands = res.get('candidates') or []
        text = ''.join(p.get('text', '') for c in cands[:1] for p in c.get('content', {}).get('parts', []))
        if not text:
            text = '_No text returned._\n\n```json\n%s\n```' % json.dumps(res, indent=2)[:4000]
        out = os.path.join(HERE, 'review_%s.md' % re.sub(r'[^A-Za-z0-9.-]+', '_', mid))
        usage = res.get('usageMetadata', {})
        with open(out, 'w') as fh:
            fh.write('# Review by %s (`%s`)\n\n_Tokens: in %s · out %s_\n\n%s\n' % (
                label, mid, usage.get('promptTokenCount', '?'), usage.get('candidatesTokenCount', '?'), text))
        print('  saved', os.path.relpath(out))


if __name__ == '__main__':
    main()

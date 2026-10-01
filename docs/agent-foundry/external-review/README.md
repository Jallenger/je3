# External review: Gemini

Sends the brief and the mockup write-up to **Gemini 3.8 Flash** and **Gemini 3.1 Pro**. Each model is asked to review the design and put forward its own world idea (see `review_prompt.md`).

## Run

1. Get a Gemini API key from Google AI Studio.
2. Make it available as the `GEMINI_API_KEY` environment variable. In Claude Code on the web, add it in the environment settings, then start a new session.
3. From the repo root:

```bash
python3 docs/agent-foundry/external-review/ask_gemini.py           # both models
python3 docs/agent-foundry/external-review/ask_gemini.py --list    # check available model IDs
```

Replies are saved here as `review_<model-id>.md`.

## What gets sent

`review_prompt.md`, `../agent_foundry_build_spec_v3.1_lean.md` and `../agent_foundry_game_ui_mockup.md`, nothing else. The documents contain only demo data, but treat whatever you send to a third-party API as shared with that provider.

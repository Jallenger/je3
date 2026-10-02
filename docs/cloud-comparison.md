# AWS vs Google Cloud vs Azure — should you move?

Written 2026-10-02. Figures come from vendor pages and third-party summaries found via web search; programs and prices change, and the third-party sources disagree in places (flagged below). Verify on the vendor site before applying or committing.

## Recommendation

**Stay on AWS. Apply for AWS Activate. Do not migrate.**

- Current spend is about $10/month. Even a $100k credit pool would not pay for the engineering time to move 13 CDK stacks, about 40 Lambdas, 12 DynamoDB tables and 13 CloudFront distributions.
- The stack is CDK, Lambda, DynamoDB, SQS, EventBridge and Step Functions. None of it ports; it would be a rewrite on Cloud Run/Firestore/Pub/Sub or Azure Functions/Cosmos DB.
- The one dependency worth protecting is Claude. AWS Bedrock and Google Vertex AI both serve Claude with Australian data residency; Microsoft Foundry did not offer regional residency guarantees as of the sources below.
- Credits are not runway. A credit pool only helps if you would otherwise be spending that much, and credits that expire can leave you locked into an architecture you cannot afford at full price.

Revisit if a funding round, a large credit offer, or a compliance requirement changes the picture.

## Startup programs

| | AWS Activate | Google for Startups Cloud | Microsoft for Startups Founders Hub |
|---|---|---|---|
| Self-serve tier | Founders: about $1,000 (up to $5,000 over time) plus Developer Support credits; bootstrapped, under 10 years, working website | Start: up to $2,000, 1 year, no funding needed | Ideate $1,000 (Build up to $5,000 after business verification); another source says $200 entry |
| Funded tier | Portfolio: $100,000 to $200,000 depending on source, via an Activate Provider (VC/accelerator), pre-Series B, apply within 12 months of funding | Scale: up to $200,000 over 2 years (100% year 1, 20% year 2); AI-first up to $350,000; requires institutional equity funding (SAFE counts, angels/grants do not) | Investor Network referral: $100,000 to $150,000 |
| AI tier | Up to $300,000 for frontier-model startups, not wrappers | See AI-first | Azure OpenAI access included |
| Age limit | Founded within 10 years | Within 3 years (10 for AI-first) | No Series C or later |
| Covers third-party models | Yes, including Anthropic on Bedrock | Covers Gemini on Vertex; I did not confirm Claude on Vertex | Not confirmed |
| Extras | Developer Support credits | 1 year Workspace Business Plus, startup engineers | Azure support, GitHub Enterprise seats, Visual Studio Enterprise, M365 Business Premium |

What to do:

1. Apply for the AWS Founders tier now; it is self-serve and costs nothing. Credits appear in Billing within hours of approval.
2. If any of your companies has outside investment or is in an accelerator, ask for an Activate Provider Org ID and apply for Portfolio.
3. I do not know the company structure, funding or age for Porchlight, Nuj, TradieRocket or the others, so I can't say which tier fits. Check which legal entity owns the AWS account.

Sources disagree on Portfolio size ($100k vs $200k) and Microsoft's entry tier ($1,000 vs $200); treat both as "check the live page".

## Service comparison for this stack

| Need | AWS (now) | Google Cloud | Azure | Verdict |
|---|---|---|---|---|
| Functions | Lambda, 1M requests + 400k GB-s free; arm64 | Cloud Functions 2M invocations; Cloud Run 2M requests | Functions, 1M executions | Roughly equal; no reason to move |
| Document DB | DynamoDB, 25 GB always free | Firestore | Cosmos DB, lifetime free 1,000 RU/s and 25 GB | Cosmos free tier is generous but your tables are tiny |
| Queues/events | SQS, EventBridge, Step Functions | Pub/Sub, Cloud Tasks, Workflows | Service Bus, Event Grid, Durable Functions | Equal |
| CDN/WAF/DNS | CloudFront, WAF, Route 53 | Cloud CDN, Armor, Cloud DNS | Front Door, WAF | Equal; WAF cost is a tuning issue, not a platform one |
| Claude | Bedrock, Australian residency | Vertex AI, Australian residency | Foundry; routed to Anthropic servers regardless of region at the time of the source | AWS or Google |
| IaC | CDK (already written) | Terraform/Config Connector | Bicep/Terraform | Switching means rewriting all IaC |
| Security basics | CloudTrail, GuardDuty, Access Analyzer | Cloud Audit Logs, SCC | Defender, Activity Log | Equal; use what you have |

Billing note from the sources: Lambda, Cloud Functions and Azure Functions bill wall-clock time; Cloudflare Workers bills CPU time and can be cheaper for I/O-heavy functions. Not a reason to move at this size, but a possible edge-function option.

## Where a second cloud could make sense

- **Google Workspace / Gemini credits:** if you want Gemini for some features, the Google program is the one with a large AI-specific tier. Run only that workload there; do not move the platform.
- **Microsoft 365 / GitHub:** Founders Hub bundles GitHub Enterprise seats and M365. That can be used without moving workloads, subject to program rules.

## Sources

- AWS: [Everything you need to know about AWS Activate credits](https://aws.amazon.com/aws-startups/learn/everything-you-need-to-know-about-aws-activate-credits/); [Activate tiers summary](https://guptadeepak.com/startup-offers/guides/aws-activate)
- Google: [Google Cloud startup FAQ](https://cloud.google.com/startup/faq?hl=en); [Google for Startups Cloud Program overview](https://guptadeepak.com/startup-offers/programs/google-for-startups-cloud)
- Microsoft: [Founders Hub overview](https://guptadeepak.com/startup-offers/guides/microsoft-for-startups); [Microsoft Q&A on eligibility](https://learn.microsoft.com/en-us/answers/a/12813777)
- Cross-program comparison: [Startup Cloud Credits Compared (2026)](https://hub.causo.ai/guides/startup-cloud-credits-compared-2026)
- Claude regional availability: [Anthropic data residency docs](https://platform.claude.com/docs/en/build-with-claude/data-residency); [Microsoft Q&A on Claude in Foundry](https://learn.microsoft.com/en-sg/answers/questions/5867930/timeline-for-claude-in-microsoft-foundry-to-run-on)
- Serverless and database free tiers: [Serverless Free Tier Comparison 2026](https://agentdeals.dev/serverless-free-tier-comparison-2026); [Cloud Free Tier Comparison 2026](https://agentdeals.dev/cloud-free-tier-comparison-2026)

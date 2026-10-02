# AWS account review — 617727107111

Reviewed 2026-10-02 with read-only CLI calls, followed by the small set of changes listed under "Applied". The repo that holds this file contains no application or CDK code, so this covers the live account only.

## Inventory

- **IaC:** 13 CloudFormation/CDK stacks. Main region ap-southeast-2; CloudFront certificates, WAF and the Billing stack are in us-east-1.
  - Stacks: Porchlight (Customer prod/staging, Serverless/Staging, Measurement-Staging, CampaignIntake-Staging, wilco), Nuj, TradieRocket-Measurement, BbqBible, CapacityPlannerWeb, PlimsolveDns, HeadroomAuthSandbox.
- **Compute/API:** about 40 Lambda functions, mostly arm64 on Node 22 or 24; 2 HTTP API Gateways; Step Functions (Nuj); EventBridge schedules for nightly exports and reconciliation.
- **Data:** 12 DynamoDB tables (all on-demand); 18 S3 buckets; SQS queues with dead-letter queues.
- **Edge/identity:** 13 CloudFront distributions, WAF, 3 Route 53 zones (porchlight.au, plimsolve.com.au, wilcoprojects.com.au), ACM, 3 Cognito user pools, SES, Secrets Manager (1 secret), KMS.
- **AI:** Bedrock — Claude Haiku 4.5, Sonnet 4.5/4.6, Opus 4.6.
- **Not used:** EC2, RDS, ECS/EKS, CodeBuild, CloudTrail, GuardDuty, Security Hub, AWS Organizations.
- **Spend (excluding credits/refunds):** about $10 in Sep 2026. Bedrock about $4.85, CloudWatch $1.60, WAF $1.59, Route 53 $1.51, KMS $0.41, Secrets Manager $0.40.
- **Guardrails already present:** root MFA on, no root access keys, two budgets ($20 each), one Cost Anomaly monitor, per-bucket S3 public access block on all 18 buckets (none public), versioning on the drafts buckets.

## Applied

| # | Change | Where | Notes |
|---|--------|-------|-------|
| 1 | 90-day retention on every CloudWatch log group that had none | ap-southeast-2 (23 groups), us-east-1 (2 groups) | Mostly CDK custom-resource Lambdas plus Nuj, probe and the Capacity Planner group. Oldest log is about 2 months, so nothing was dropped yet. |
| 2 | Point-in-time recovery on the 3 Nuj DynamoDB tables | ap-southeast-2 | All other tables already had it. |
| 3 | IAM Access Analyzer (`account-analyzer`, account scope) | ap-southeast-2 | Free. Check findings in the console. |
| 4 | GuardDuty detector `e6d07ecb06c5a80923cc273e82203a06`, 6-hour publishing | ap-southeast-2 | 30-day free trial, then usage-based. Enable in other regions only if you use them. |

All four are drift from the CDK templates (see "CDK follow-ups"). Redeploying the stacks will not revert 2; it may or may not touch 1.

## Pending — blocked or needs your decision

These were not applied. The auto-mode classifier blocked the batch that contained 1 and 2, and I did not retry it in pieces. The rest need a decision from you.

1. **CloudTrail.** No trail exists, so only 90 days of console event history is available. Create a multi-region management trail with log-file validation, delivered to a dedicated S3 bucket (block public access, SSE, versioning, lifecycle to Standard-IA at 90 days and expiry at 2 years, TLS-only policy). Cost is negligible for management events. Prefer defining it in CDK in a separate "Security" stack.
2. **Account-level S3 Block Public Access.** Not set. Every existing bucket already blocks public access individually and none is public, so enabling it should be a no-op today, but it protects future buckets. `aws s3control put-public-access-block --account-id 617727107111 --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true`
3. **Long-lived admin keys.** The only IAM user, `claude-code-admin`, has AdministratorAccess and two active access keys (created 2026-08-03 and 2026-10-02). Not touched, because deleting either could cut off whoever or whatever uses it. Move people to IAM Identity Center, move CI to GitHub Actions OIDC roles, give any remaining automation a least-privilege role, then delete the keys. There is no OIDC provider and no CodeBuild project, so deployments probably run from a laptop.
4. **Separate prod and staging accounts** via AWS Organizations (also needed for Identity Center and consolidated billing).
5. **WAF.** About $1.6/month, as much as everything else except Bedrock. Count web ACLs and rules per site; share an ACL where sensible.
6. **Secrets Manager and KMS.** Move static values to SSM Parameter Store (standard tier is free). Customer-managed KMS keys on DynamoDB drive most of the $0.41 KMS cost; keep them where you need key-level audit, otherwise use AWS-owned keys.
7. **Bedrock.** Add a Bedrock-specific budget alert (needs an alert address; I did not choose one). Use prompt caching, route simple tasks to Haiku, and use batch inference for nightly jobs.
8. **Observability.** Add Lambda Powertools plus X-Ray or CloudWatch Application Signals for the CloudFront to API Gateway to Lambda to DynamoDB/SQS path.
9. **S3 lifecycle rules** on the export and drafts buckets (expire noncurrent versions and incomplete multipart uploads, tier old exports).
10. **Lambda architecture.** `NujStack-ApiFunction` and `NujStack-SendPushFunction` are x86_64; switch to arm64 in CDK. CDK-managed custom-resource Lambdas stay x86_64 until CDK changes them.

## CDK follow-ups (to stop drift)

- Set `logRetention`/`logGroup` with `RetentionDays.THREE_MONTHS` on every Lambda, or add an Aspect in each app. Custom-resource providers need `logRetention` on the provider.
- `pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: true }` on the Nuj tables.
- `architecture: lambda.Architecture.ARM_64` on the two Nuj functions.
- Add a Security stack: CloudTrail, GuardDuty detector, Access Analyzer, account S3 block public access.

## Corrections to my first message

- The drafts buckets already have versioning, so no change was needed there.
- The Nuj tables were the only ones without point-in-time recovery; the rest were already enabled.

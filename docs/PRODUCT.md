# Product Direction: Public Intent Index

## The Product

`showme` is a portable public profile format. `findme` is a lightweight index and local search tool. The first market-facing skill, `find-love`, helps a person draft, publish, and discover a public adult dating intent.

The unifying abstraction is not "dating": it is a person or organization publishing an **intent** to meet, buy, collaborate, hire, or participate. Dating is the first entrance because the need is clear, personal, and painful; the same optional `intents` array will support later skills without splitting the registry.

## Lowest-Cost Architecture

```text
person + their AI -> showme/v1 profile.json -> GitHub PR -> CI -> public index.json
                                                                  |
other person + their AI <- datecli findme sync <- raw GitHub URL
```

- A person owns their local profile and decides every public target.
- GitHub is the identity anchor and PR queue; GitHub Actions deterministically rebuilds the index on merge.
- `datecli` downloads the index and filters locally. AI explains likely fit but does not make decisions or contact people autonomously.
- No server, database, login system, payment, crawler, or private-data ingestion is needed for the first launch.

## Product Sequence

### Now: `find-love`

Publish the skill on ClawHub and SkillHub, keep a single GitHub source repository, provide the guide, and recruit the first 10-30 public cards. Measure: published cards, valid PRs, index syncs, and voluntary introductions.

### Next: adjacent entry skills

Create `find-activity`, `find-business`, and `find-supplier` as thin instruction layers over the same `showme/v1` card and `intents.kind`. Do not create separate registries or accounts.

### Later: optional aggregation API

Add a small read-only API only when GitHub PR friction blocks growth. Store minimal public metadata plus the canonical profile URL. Registration should verify ownership and preserve an audit trail. Continue serving `index.json` so every existing agent remains compatible.

## Operating Rhythm

- On every merged PR: CI validates cards and rebuilds `index.json` automatically.
- Weekly: review open PRs, remove closed/spam cards, and publish one short onboarding example for a target community.
- Monthly: inspect which `kind`, city, and topic filters produce real introductions; improve only the most-used skill entry.

## Non-Negotiables

- Public profile data is opt-in, author-controlled, and removable.
- No automated account creation, publishing, messaging, or scraping without the person’s explicit approval.
- No minors, impersonation, coercive targeting, or private contact-data aggregation.
- The index is a discovery layer, not a promise of compatibility or a substitute for judgment and consent.

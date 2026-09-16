# Product Direction: Public Intent Index

## The Product

`showme` is a portable public profile format. `findme` is a lightweight index and local search tool. The first market-facing skill, `find-love`, helps a person draft, publish, and discover a public adult dating intent.

The unifying abstraction is an **intent**, but public contexts are separated. `showme-registry` is dating-only. Professional intents live in the independent [BossCLI Registry](https://github.com/dongsheng123132/bosscli-registry). The format is shared; the audience, data disclosure, contact method, search index, and site are not.

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

Create `find-activity` as a separate lifestyle/community entrance when it has enough demand. Create `find-work` under BossCLI first, covering job seeking, service offers, hiring, supplier sourcing, and collaboration; FDE AI delivery is its first highlighted category. Do not cross-index these public contexts.

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

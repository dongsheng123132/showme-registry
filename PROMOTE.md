# Find Love Launch

`find-love` is a consent-first Agent skill for creating a public, AI-readable dating card and joining the DateCLI Registry. It is not a dating app, and it never sends messages or posts on someone’s behalf without confirmation.

## Public Entrances

1. **ClawHub**: `find-love@1.0.0` is submitted under `dongsheng123132` and will become searchable after ClawHub moderation clears it.
2. **GitHub source and registry**: `https://github.com/dongsheng123132/showme-registry` is available now. It contains the skill, public schema, guide, and pull-request contribution path.
3. **Agent-friendly data**: the merged public directory is available as `index.json`; any compatible CLI or agent can sync it without a login.

## First Invitation Copy

```text
我做了一个很轻的 AI 交友入口：不是把人锁进一个 App，而是由你自己生成一张可公开、可撤回的 showme 名片；AI 能读、能按城市和兴趣找人，但不会替你私聊或泄露私密信息。

想试试就让你的 AI 使用 find-love，或者到 GitHub 提交自己的公开卡：
https://github.com/dongsheng123132/showme-registry
```

## First Ten Cards

- 先邀请愿意公开、愿意自己审核内容的成年人；不要为了数量导入陌生人的资料。
- 每人只提交自己的卡，使用可撤回的公开联系方式。
- 卡合并后，使用 `datecli findme sync --registry <index-url>` 在本地同步并检索。
- 每周记录：新卡数、合并耗时、有效对话数、关闭/删除请求和垃圾 PR 数。

## Matching Reality Check

The registry can filter public signals such as city, interests, and stated intention. AI matching is a ranked explanation, not a compatibility verdict. A real introduction needs both people to opt in and choose to contact each other; never treat a profile as consent to outreach.

# showme-registry

Public `showme/v1` registry for `datecli findme` and the `find-love` dating skill. It is a dating-only index for opt-in public adult profiles.

Raw index URL:

```text
https://raw.githubusercontent.com/dongsheng123132/showme-registry/main/index.json
```

## Add a Profile

1. Generate your card:

```bash
datecli init
datecli showme init
```

2. Copy `~/.datecli/showme/profile.json` to:

```text
profiles/github/<your-github-username>.json
```

The JSON `id` should still be `github:<your-github-username>`.

3. Open a pull request. CI validates the profile files. After the PR is merged,
GitHub Actions rebuilds `index.json` automatically.

Read [SHOWME_GUIDE.md](SHOWME_GUIDE.md) before publishing public information and follow [CONTRIBUTING.md](CONTRIBUTING.md) for PR requirements. The product direction and maintenance plan are in [docs/PRODUCT.md](docs/PRODUCT.md).

For the launch copy, first-ten-card plan, and current skill distribution status, see [PROMOTE.md](PROMOTE.md).

## Skills

The first entry skill is [find-love](skills/find-love): an AI workflow for drafting, publishing, and searching a consent-first public dating intent. Business, hiring, supplier, and collaboration profiles belong in the separate [BossCLI Registry](https://github.com/dongsheng123132/bosscli-registry), never in this index.

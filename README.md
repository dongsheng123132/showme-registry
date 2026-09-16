# showme-registry

Public `showme/v1` registry for `datecli findme`.

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


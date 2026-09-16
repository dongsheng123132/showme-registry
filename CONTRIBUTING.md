# Contributing a Public Profile

## Add a Card

1. Fork this repository and create a branch.
2. Generate and validate your local card:

   ```bash
   datecli init
   datecli showme init
   datecli showme validate ~/.datecli/showme/profile.json
   ```

3. Copy it to `profiles/github/<your-github-username>.json`.
4. Ensure `id` is `github:<your-github-username>` and all required `showme/v1` fields are present.
5. Open a pull request explaining that every field is public and submitted by its owner.

The action checks JSON shape and rebuilds `index.json` after merge. Index generation is deterministic and runs on every profile change; there is no manual or timed merge job to remember.

## Review Standard

Maintainers should reject cards that impersonate someone, expose clearly private or sensitive personal data, contain spam or fraud, target minors, or encourage harassment. The author can update or remove their own card through another PR.

# Showme Public Intent Guide

Showme is a small public card that describes **who you are** and **what connection you are looking for**. It is designed for people and AI agents to read, search, and compare. It is not a dating app account: you keep the source file, choose the platforms, and can update or close the request at any time.

## Start With Dating

The first public entrance is `find-love`: publish a respectful adult dating intent that can be found by city, interests, and relationship goal.

```bash
datecli init
datecli showme init
datecli showme validate ~/.datecli/showme/profile.json
datecli showme register --type github
```

The last command prints the profile path and pull-request steps. Add your card to `profiles/github/<your-github-username>.json` in this repository, then open a PR. GitHub Actions validates it and rebuilds `index.json` after merge.

No GitHub account yet? Create one at [GitHub signup](https://github.com/signup), choose a public username, then return to the command above. An AI assistant can guide the setup, but you should personally review account recovery settings and every public field before submitting.

## One Profile, Multiple Intentions

The common profile is `showme/v1`. Add an optional `intents` list when you want to state a request. The same person can publish more than one request without creating duplicate accounts.

| `kind` | Public request example |
| --- | --- |
| `dating` | Looking for a serious partner in Shenzhen |
| `activity` | Looking for weekend hiking or exhibition companions |
| `business` | Looking for introductions to enterprise AI events |
| `supplier` | Looking for a reliable small-batch manufacturing supplier |
| `collaboration` | Looking for an AI product co-builder |
| `hiring` | Looking for a contract frontend engineer |

See [the intent-card reference](skills/find-love/references/intent-card.md) for the portable JSON shape.

## What Becomes Public

Good public fields: preferred name, city, short bio, interests, skills, the request itself, and a dedicated contact method or public social profile.

Never place a home/work address, ID or financial information, passwords, private photos, private chat history, or a contact channel you do not want indexed in the card. For dating, use only voluntary adult-to-adult requests and keep boundaries clear.

## How Discovery Works

```text
your profile.json -> GitHub pull request -> CI validation -> index.json
                                                        -> datecli findme sync
                                                        -> local filters and AI analysis
```

The registry stores only public cards. It does not decide a match and it does not contact people for you. `datecli findme match` produces a comparison prompt; your AI can explain possible fit, shared topics, and gaps, while you decide whether to make contact.

## Publish Elsewhere

Host the same `profile.json` on a GitHub Pages or personal site, then write a platform-specific short introduction for a blog, community, or social post. Each platform has its own rules: publish only where you have an account and permission, and get explicit approval before any AI posts or messages on your behalf.

The registry remains the lightest shared index. It can later collect public profile URLs from approved sources, but it should never copy private platform data or require users to hand over passwords.

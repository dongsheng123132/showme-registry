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

## Keep Contexts Separate

This is a dating-only registry. Use the optional `intents` list with `kind: "dating"` here. Do not include job seeking, supplier, investment, hiring, or other commercial requests in this profile.

The JSON envelope is still portable `showme/v1`, but sharing a format does not mean sharing an audience. A person who also has business needs should create a separately reviewed business card in [BossCLI Registry](https://github.com/dongsheng123132/bosscli-registry), using a different disclosure and contact choice.

See [the dating intent-card reference](skills/find-love/references/intent-card.md) for the JSON shape.

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

The registry remains the lightest shared index. It can later collect public profile URLs from approved sources, but it should never copy private platform data or require users to hand over passwords. Professional public cards are collected separately by BossCLI.

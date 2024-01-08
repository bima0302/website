---
emoji: 🔐
title: How to Clone Your Private Repository From Github
date: '2022-03-23 00:00:00'
author: Bima Setyo
tags: github development
categories: development
---

In this blog post, I will show you how to clone a private repository from GitHub using different methods and tools. Whether you are using HTTPS or SSH, command line or GUI, Windows or Linux, you will find a solution that works for you.

If you want to clone a private repository from GitHub, you might encounter some challenges. Unlike public repositories, which are accessible to anyone, private repositories require authentication and permission to access. Let’s get started!

![GitHub Repository](1-github-repository.png)

## 1. How to clone your private repository?

You can clone a private repository from your account and you can also clone a private repository from organization if you’re its owner or member.

```bash
git clone https://<pat>@github.com/<your account or organization>/<repo>.git
```

To clone a private repository from your account or organization, you need to generate a PAT(Personal Access Token) on your Github account, and add it to the command above. Organization doesn’t have PAT generator. PAT is Personal Access Token.

## 2. How you generate a PAT on your Github account:

1. Go to “Settings”.

![Settings](1-settings.png)

2. Scroll down then go to “Developer settings”.

![Developer Settings](1-developer-settings.png)

3. Press “Personal access tokens” then press “Generate new token”.

![Generate New Token](1-generate-new-token.png)

4. Fill “Note” then check “repo”. "repo" is not checked, you cannot clone a private repository.

![Repo](1-repo.png)

5. Scroll down then press “Generate token”.

![Generate Token](1-generate-token.png)

6. Finally, a PAT is generated.

![PAT](1-pat.png)

## 3. The command with the PAT generated above to clone your private repository:

```bash
git clone https://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@github.com/<your account or organization>/<repo>.git
```

```toc

```

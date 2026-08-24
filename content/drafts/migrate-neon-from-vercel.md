---
title: Why we moved to Neon From Vercel Postgres
description: No backup and all the features even though it's using Neon itself.
date: 2024-05-22
status: draft # recovered from git (commit 20692b1^) — was never finished
toc: true
---

<!-- Recovered stub. The intro and one command existed; the outline below is a
     suggested completion based on the title/description. -->

When we first start Livechat AI, Vercel has a new shiny product called Vercel
Postgres. Our initial thought was let's use that since we are hosting the
platform on Vercel too. But things turned out awfully bad.

```bash
pg_dump -Fc -h old_host -U old_user old_db > db_backup.dump
```

<!-- Suggested outline to finish:
1. What went wrong with Vercel Postgres — the "no backup" story hinted in the
   description; which features were missing (branching? point-in-time restore?)
2. The irony: Vercel Postgres *is* Neon underneath — so going direct got the
   full feature set
3. The migration: pg_dump/pg_restore steps, connection-string swap, downtime (any?)
4. Results: cost, features gained, would-we-do-it-again
-->

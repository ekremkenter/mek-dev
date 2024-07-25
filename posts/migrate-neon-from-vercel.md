---
title: Why we moved to Neon From Vercel Postgres
description: No backup and all the features even though it's using Neon itself.
date: 2024-05-22
toc: true
---
# Why we moved to Neon From Vercel Postgres

When we first start Livechat AI, Vercel has a new shiny product called Vercel Postgres. Our initial thought was let's use that since we are hosting the platform on Vercel too. But things turned out awfully bad.

```bash
pg_dump -Fc -h old_host -U old_user old_db > db_backup.dump
```


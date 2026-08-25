---
title: Cheat Sheet
description: Terminal commands I reach for constantly
date: 2023-12-18
kind: note
toc: true
---
## Misc

### Stopping and Removing All Containers
```bash
docker ps -aq | xargs docker stop | xargs docker rm
```

### Kill Port 3000 🤷🏻
Because sometimes it's just not working
```bash
sudo kill -9 $(sudo lsof -t -i:3000)
```

### Cleaning Up node_modules in Specific Directory
When you have lots of npm projects in a directory, you can use this to clean up all the node_modules
```bash
 npx npkill -d <directory>
 npx npkill -d .
```

## Supabase

### Fetch changes from Production to Local
```bash
supabase db diff --linked --file sync
```

## Flutter

### Run Build Runner with Delete Conflicts
```bash
dart run build_runner build --delete-conflicting-outputs
```
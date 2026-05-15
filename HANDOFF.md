# Pony Charters — Chincoteague Island Adventures
## Site: https://pony.advancedmarketing.co

---

## Server Access

| Field | Value |
|---|---|
| **Server IP** | `212.28.184.24` |
| **SSH User** | `root` |
| **Root Password** | `JEsusCHrist` |
| **OS** | Ubuntu 24.04 LTS |

### SSH Command (from this terminal)
```bash
ssh -i "C:\Users\ADMIN\.ssh\id_contabo" root@212.28.184.24
```

### Fallback (password auth)
```bash
ssh root@212.28.184.24
# Password: JEsusCHrist
```

---

## Coolify

| Field | Value |
|---|---|
| **Dashboard** | https://coolify.advancedmarketing.co |
| **Login** | ben@advancedmarketing.co |
| **Password** | JEsusCHrist |
| **API Token** | `9|leesferry2026` |
| **App UUID** | `wmbyyrkstf2l0oswkgtj37ft` |
| **App Name** | chincoteague-site |

---

## GitHub Repo

| Field | Value |
|---|---|
| **Repo** | `bensblueprints/sr-chincoteague-island-cnknvy` |
| **Branch** | `v2-source` |
| **PAT** | see Obsidian vault → Coolify-Access-Handoff.md |

### Push changes (Coolify auto-deploys on push to v2-source)
```bash
git add -A
git commit -m "your message"
git push origin v2-source
```

---

## Stack
- Next.js (Dockerfile build)
- Deployed via Coolify on Contabo VPS
- Auto-deploys when you push to `v2-source`

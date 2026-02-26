# Mac mini Migration Plan

## Hardware Setup
1. Unbox Mac mini, connect Ethernet/Wi-Fi, keyboard, mouse, display.
2. Boot into macOS, complete setup (Apple ID, updates).
3. Install essentials: Homebrew, Git, Python3, Node.js, pipenv.

## Environment
1. Clone Goodwright repo to `~/Goodwright`.
2. Install dependencies (`npm install`, `pipenv install`).
3. Copy secure credentials (Stripe, BTCPay, Zoho, API keys).

## Local services
- Next.js dev server for the site.
- BTCPay CLI/Lightning tools if hosting locally.
- TTS/audio tooling (ffmpeg, ElevenLabs CLI).
- Data ingestion scripts (Python).

## Migration steps
1. Sync repo + docs from Pi to Mac mini.
2. Run builds/tests locally.
3. Move automation scripts (ingest, TTS) to Mac.
4. Secure Mac: firewall, SSH keys, backups.

## Post-migration
- Pi becomes backup node.
- Mac mini handles primary workloads (site dev, automation, media).

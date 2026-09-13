# Ostholm Rütter – Demo-Website (law4)

Fiktive deutsche Wirtschaftskanzlei. Layout-Muster: Struktur einer großen deutschen Kanzlei-Website (Hero-Panel mit animiertem Verlauf und News-Kacheln, Icon-Kacheln, Fokusthemen, Verantwortung-Tabs, Zähler, gestuftes Megamenü). Marke, Name, Logo, Farben, Schriften, Bilder und Texte sind eigenständig und vollständig erfunden.

- Next.js 16, App Router, Server-Rendering mit `next start`, Tailwind CSS 4, `motion`, `lucide-react`
- Schriften: Barlow Condensed (Headlines), Source Sans 3 (Text), Lora (Wortmarke)
- Bilder: Unsplash, lokal unter `public/images/`, Urheber in `credits.json`
- Deployment: Coolify (Dockerfile oder Nixpacks, `pnpm build` und `pnpm start`, kein Standalone-Output). Öffentliche URL über `NEXT_PUBLIC_SITE_URL` setzen.

```bash
pnpm install
pnpm dev
pnpm build   # statischer Export nach ./out
```

#!/bin/bash
# Lovable Cloud can't be officially disconnected once it was ever enabled on a project
# (confirmed limitation as of 2026 — see Lovable docs/community feedback). Because of this,
# opening this project in the Lovable editor for ANY reason (even unrelated work, like the
# email signature) can silently re-scaffold Supabase integration files and wire them into
# src/start.ts, even though this site intentionally runs a self-hosted backend (SQLite +
# Gmail API) with no Supabase, for DSGVO reasons documented in the Datenschutzerklärung.
#
# Run this after every `git pull` and before `bun install` / `bun run build`, both locally
# and on the server, to strip any Supabase leftovers before they reach production.
#
# Usage: bash scripts/strip-lovable-supabase.sh

set -e
cd "$(dirname "$0")/.."

CHANGED=0

if [ -d "src/integrations/supabase" ]; then
  echo "Найдено: src/integrations/supabase — удаляю"
  rm -rf src/integrations/supabase
  CHANGED=1
fi

if [ -d "supabase" ]; then
  echo "Найдено: supabase/ — удаляю"
  rm -rf supabase
  CHANGED=1
fi

if grep -q 'attachSupabaseAuth' src/start.ts 2>/dev/null; then
  echo "Найдено: attachSupabaseAuth в src/start.ts — убираю"
  sed -i.bak '/attachSupabaseAuth/d' src/start.ts
  sed -i.bak 's/functionMiddleware: \[\],*//' src/start.ts
  rm -f src/start.ts.bak
  CHANGED=1
fi

if grep -q '"@supabase/supabase-js"' package.json 2>/dev/null; then
  echo "Найдено: @supabase/supabase-js в package.json — убираю"
  sed -i.bak '/"@supabase\/supabase-js":/d' package.json
  rm -f package.json.bak
  CHANGED=1
fi

if [ "$CHANGED" = "1" ]; then
  echo ""
  echo "Supabase-артефакты удалены. Проверь git diff и закоммить изменения:"
  echo "  git diff --stat"
  echo "  git add -A && git commit -m 'Strip auto-reintroduced Supabase (Lovable Cloud)'"
else
  echo "Чисто — Supabase-артефактов не найдено."
fi

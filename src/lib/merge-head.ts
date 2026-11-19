// Merges two TanStack `head()` results (meta / links / scripts) without dropping anything from either.
// Used to add canonical links and JSON-LD (src/seo-schema.ts) to the existing per-route head() data.
type Tag = Record<string, unknown>;
type Head = { meta?: Tag[]; links?: Tag[]; scripts?: Tag[] };

export function mergeHead(base: Head, extra: Head): Required<Head> {
  return {
    meta: [...(base.meta ?? []), ...(extra.meta ?? [])],
    links: [...(base.links ?? []), ...(extra.links ?? [])],
    scripts: [...(base.scripts ?? []), ...(extra.scripts ?? [])],
  };
}

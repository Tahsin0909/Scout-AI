import { KeyRound } from "lucide-react";

export function MapTokenNotice() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-void px-6 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-trail/15 text-trail">
        <KeyRound className="h-5 w-5" />
      </span>
      <p className="max-w-sm font-display text-lg text-ink">Add a Mapbox token to render the map</p>
      <p className="max-w-sm text-sm text-muted">
        Set <code className="rounded bg-panel-2 px-1.5 py-0.5 font-mono text-xs text-trail">NEXT_PUBLIC_MAPBOX_TOKEN</code>{" "}
        in <code className="rounded bg-panel-2 px-1.5 py-0.5 font-mono text-xs text-trail">.env.local</code> (see{" "}
        <code className="rounded bg-panel-2 px-1.5 py-0.5 font-mono text-xs text-trail">.env.example</code>). The rest of
        this page — filters, search, and mock data — already works without it.
      </p>
    </div>
  );
}

import type { Rich } from "../types";

/** Rich text: Strings und { b } (fett). */
export function RichText({ parts }: { parts: Rich }) {
  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? <span key={i}>{p}</span> : <strong key={i}>{p.b}</strong>,
      )}
    </>
  );
}

/** [vor, <em>, nach] für Überschriften */
export function Em({ parts }: { parts: string[] }) {
  const [a = "", b = "", c = ""] = parts;
  return (
    <>
      {a}
      {b && <em>{b}</em>}
      {c}
    </>
  );
}

export function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

import type { ReactNode } from "react";

/** Text mit fetten Stellen: ["vorher ", { b: "fett" }, " nachher"] */
export type Rich = Array<string | { b: string }>;

export type Badge = { icon: string; label: string; value: string };
export type CtaStrip = { tag: string; h2: string; primary: string; secondary: string };

export type Slot = ReactNode;

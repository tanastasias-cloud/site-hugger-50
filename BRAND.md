# GetGrow Academy — Brand: Fonts & Colors

Source of truth: `src/styles.css` (design system block, `:root`).

## Fonts

Installed locally via `@fontsource` (no Google Fonts requests).

| Font | Role | Weights |
| --- | --- | --- |
| **Tenor Sans** | Headings (hero, audience "doors", manifesto), logo "GROW", nav items | 400 |
| **DM Sans** | Body text, captions, buttons, uppercase eyebrow labels | 300, 400, 500, 600, 300 italic |
| **Cormorant Garamond** | Section headings (`.sh-h2`), quotes, badges, italic accents, large numerals | 300, 400, 500, 300 italic, 400 italic |
| **Allura** (script) | Accent words in headings, "Get" in the logo, door numbers, founder name | 400 |

## Colors

| Variable | Value | Role |
| --- | --- | --- |
| `--forest` | `#1a2e26` | Dark green: headings, buttons, dark sections |
| `--green` | `#3d6b55` | Primary green: accents, links, hover |
| `--mint` | `#7fc4a0` | Light mint accent |
| `--sand` | `#c4a57a` | Sand accent (door numbers) |
| `--cream` | `#f5f0e8` | Cream background |
| `--paper` | `#f5f3ee` | Section background |
| `--sage` | `#f4f8f5` | Pale green section background |
| `--off` | `#fafafa` | Off-white background |
| `--white` | `#ffffff` | White |
| `--gg-text` | `#2a2a2a` | Body text |
| `--gg-muted` | `#888888` | Muted text |
| `--gg-border` | `rgba(61, 107, 85, 0.12)` | Borders |

## Notes

- Some neutrals and pale greens are hard-coded in CSS rather than variables (most often `#555`, `#666`, `#f0f0f0`, `#dde8e4`, `#c4d8d0`, `#a0b8b0`, `#e8f0ec`).
- The `oklch(...)` tokens in `styles.css` belong to shadcn/ui components (`src/components/ui`) and barely affect the public pages.

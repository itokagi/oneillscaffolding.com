---
name: "OSG"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#D9D9D9"
    shade-3: "#B3B4B3"
    shade-4: "#808381"
    shade-5: "#4D514F"
    shade-6: "#1B1F1D"
    shade-7: "#020704"
    white: "#FFFFFF"
  midnight:
    shade-1: "#E5E8EA"
    shade-2: "#CCD1D6"
    shade-3: "#4C5E6F"
    shade-4: "#001932"
    shade-5: "#001428"
    shade-6: "#000A14"
    shade-7: "#00070F"
  punch:
    shade-1: "#E5F6FD"
    shade-2: "#B3E3F7"
    shade-3: "#4DC0E6"
    shade-4: "#0099CE"
    shade-5: "#007BAA"
    shade-6: "#005D82"
    shade-7: "#003E5C"
  sea-green:
    shade-1: "#EAF3EE"
    shade-2: "#D5E7DD"
    shade-3: "#6CAD89"
    shade-4: "#2E8B57"
    shade-5: "#246F45"
    shade-6: "#123722"
    shade-7: "#0D291A"

typography:
  heading:
    fontFamily: "Poppins"
    fontWeight: 600
  body:
    fontFamily: "Hind"
    fontWeight: 400
  sizes:
    desktop:
      h1: 72px
      h2: 52px
      h3: 44px
      h4: 36px
      h5: 28px
      h6: 22px
      text-large: 22px
      text-medium: 18px
      text-regular: 16px
      text-small: 14px
      text-tiny: 12px
    mobile:
      h1: 44px
      h2: 40px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 12px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "bubble"
  buttonRadius: 6px
  tagRadius: 4px
  inputRadius: 6px

cards:
  style: "outlined"
  borderWidth: 1px
  dividerWidth: 1px
  radiusLarge: 8px
  radiusMedium: 8px
  radiusSmall: 8px

schemes:
  - name: "Scheme 1"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#020704"
    accentHex: "#001932"
    borderValue: "#02070426"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#F2F2F2"
    textHex: "#020704"
    accentHex: "#001932"
    borderValue: "#02070426"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "chromatic1-shade-1"
    backgroundHex: "#E5E8EA"
    foregroundHex: "#E5E8EA"
    textHex: "#020704"
    accentHex: "#001932"
    borderValue: "#02070426"
    useLogoVariant: light
    cssClass: "scheme-3"
  - name: "Scheme 4"
    background: "chromatic1-shade-4"
    backgroundHex: "#001932"
    foregroundHex: "#001932"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-4"
  - name: "Scheme 5"
    background: "chromatic2-shade-7"
    backgroundHex: "#431712"
    foregroundHex: "#431712"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-5"
  - name: "Scheme 6"
    background: "chromatic1-shade-6"
    backgroundHex: "#000A14"
    foregroundHex: "#000A14"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-6"
  - name: "Scheme 7"
    background: "neutral-shade-7"
    backgroundHex: "#020704"
    foregroundHex: "#020704"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-7"
  - name: "Scheme 8"
    background: "chromatic1-shade-5"
    backgroundHex: "#001428"
    foregroundHex: "#001428"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-8"
---

# OSG — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 3 chromatic palettes.

- **Neutral shades** range from shade-0 (white) to shade-7 (near-black)
- **Midnight** — primary shade: `#001932` — used for headings, dark sections, and brand anchoring
- **Punch** — primary shade: `#0099CE` — a cyan-blue used for all interactive accents, CTAs, and icon highlights
- **Sea Green** — primary shade: `#2E8B57` — used sparingly for positive/confirmation states

Use the CSS custom properties from `app/globals.css` for all colors (e.g. `--color-punch`, `--color-midnight`, `--color-neutral-darkest`).

## Typography

Headings use **Poppins** at weight 600. Body text uses **Hind** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are defined in `app/globals.css` as CSS custom properties (`--text-h1` through `--text-tiny`).

## UI Elements

UI style is **bubble** with button radius 6px (`--radius-button`). Cards use the **outlined** style with 1px border and 8px radius (`--radius-card`). Form inputs use `--radius-form`.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme sets background, text, accent, and border colors via CSS custom properties. **All sections default to `scheme-1` (white) unless a dark treatment is intentional.**

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | White (#FFFFFF) | #020704 | #001932 | light | `.scheme-1` |
| Scheme 2 | Neutral Lightest (#F2F2F2) | #020704 | #001932 | light | `.scheme-2` |
| Scheme 3 | Midnight Lightest (#E5E8EA) | #020704 | #001932 | light | `.scheme-3` |
| Scheme 4 | Midnight (#001932) | #ffffff | #ffffff | dark | `.scheme-4` |
| Scheme 5 | Punch Darkest (#431712) | #ffffff | #ffffff | dark | `.scheme-5` |
| Scheme 6 | Midnight Darker (#000A14) | #ffffff | #ffffff | dark | `.scheme-6` |
| Scheme 7 | Neutral Darkest (#020704) | #ffffff | #ffffff | dark | `.scheme-7` |
| Scheme 8 | Midnight Dark (#001428) | #ffffff | #ffffff | dark | `.scheme-8` |

Apply a scheme by adding its CSS class to the section element. All child elements automatically inherit the correct text, accent, and border colors.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm

## Component Patterns

### Contact / Inquiry Sections

- Section background: always `scheme-1` (white)
- Left panel (contact info): white, no card background. Use `bg-punch-lightest` circular badges for icons, `text-punch` for the icon itself, uppercase muted labels in `text-neutral`, and `group-hover:text-punch` on link text
- Right panel (form): white card with `border border-neutral-lighter`, `rounded-card`, and `shadow-sm`
- Form sections are separated by `border-t border-neutral-lighter` with an uppercase `text-neutral` section label
- Grouped option inputs (radio groups) use `bg-neutral-lightest border border-neutral-lighter rounded-form p-4`
- Terms row uses the same `bg-neutral-lightest` pill treatment as grouped inputs
- Submit button is full-width (`w-full`)

# BTC Website — Responsive Refactor Notes

## Visual direction
The shared visual direction is **Floating · Minimalist · Dynamic**. The existing green corporate identity, content, page structure, navigation interactions, catalog data, shopping cart, and language switcher are retained.

## Stylesheet structure
- `css/main.css` — foundations, navigation, shared components, and cart UI.
- `css/pages.css` — original page and section styles.
- `css/refresh.css` — visual refresh layer and final responsive rules. It is loaded after the two base stylesheets to make the cascade predictable.

All site pages and article detail pages load the three stylesheets in this order. Cache versions were updated for the two base stylesheets.

## Main responsive adjustments
- Fluid page gutters and content width.
- Floating navbar spacing and compact mobile sizing.
- Hero minimum height, content spacing below the fixed navbar, fluid typography, and mobile action layout.
- Featured product cards now use flexible height instead of fixed 460/480/510px heights.
- Product action buttons use border-box sizing, constrained grid columns, and smaller-screen stacking to prevent border overflow and inconsistent vertical placement.
- Desktop hero artwork continues behind the overlapping statistics panel; mobile keeps the hero clipped to the viewport section.

## Validation performed
- Parsed all three CSS files with PostCSS.
- Ran `node --check` on every JavaScript file in `js/`.
- Checked stylesheet references across top-level pages and article detail pages.
- Preserved the pre-existing local changes found in `css/pages.css`, `js/cart.js`, and `assets/icons/og-image.svg` while preparing the refactor.

## Device testing note
Responsive rules cover narrow phones (320px+), common mobile widths, tablets, laptops, and wide desktop screens. Final visual acceptance should still be checked in real browsers/devices, especially the hero, navigation menu, catalog cards, cart drawer, and language/search controls. Browser rendering can vary by operating system, browser engine, font availability, and viewport settings.

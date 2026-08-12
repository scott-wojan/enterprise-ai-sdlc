# Gate 6.5 Visual Direction and System

## Status

Selected for the isolated Gate 6 prototype on 12 August 2026.

## Direction

Use a restrained decision-brief visual system. The experience should feel like a clear working instrument for consequential enterprise decisions, not a marketing site, documentation viewer, dashboard, or wizard.

## Typography

- System sans-serif stack for dependable rendering and accessibility.
- Body: 15 to 16 pixels, 1.5 to 1.6 line height.
- Display: responsive 35 to 58 pixels on desktop and approximately 39 pixels on mobile.
- No decorative display type.
- Long text remains within a comfortable reading width.

## Color roles

- Base: warm off-white.
- Content surface: white only when a distinct interactive boundary is required.
- Primary ink: very dark green-black.
- Secondary text: muted green-gray.
- Governing action: deep green.
- Informational link: accessible blue.
- Warning and hard stop: dark red with a pale red surface.
- Keyboard focus: amber outline distinct from status color.

Color is never the only status signal.

## Layout and spacing

- Base page surface first. Do not wrap every section in a card.
- Use typography, alignment, spacing, then dividers before borders or elevation.
- Desktop content width is 960 pixels for focused work and 1180 pixels for readable leadership output.
- Mobile uses one column with 16-pixel outer margins.
- No permanent workspace sidebar in the validated slice.
- Journey context remains a restrained line above focused work.

## Component patterns

- Product header distinguishes Public guidance from Adoption workspace.
- Context line names initiative, increment, and local task.
- Fact group uses definition-list semantics and collapses to stacked rows on mobile.
- Focused work places guidance and examples before the response.
- Hard-stop result uses a causal block, not a dismissible warning card.
- Decision choices keep each option with its consequence.
- Primary action appears after the information needed to use it safely.
- Leadership output is read-only and begins with the recorded outcome.

## Interaction and accessibility

- Minimum 44-pixel target height for primary controls.
- Three-pixel visible keyboard focus outline.
- Native controls and semantic landmarks.
- Error summaries receive focus.
- New view main region receives focus.
- Dynamic restrictive outcomes are announced.
- Reduced-motion preference disables smooth motion.
- No essential hover behavior.

## Prohibited use

- giant desktop hero text;
- dense documentation landing pages;
- generic dashboard tiles;
- permanent mobile sidebars;
- detached result rails;
- page-completion percentages;
- one status that conflates journey, work, evidence, verification, decision, and authority;
- color-only hard stops;
- remediation presented as automatic restart;
- visual emphasis that frames local speed as overall success.

## Implementation reference

The isolated prototype tokens and patterns are implemented in `prototype/src/styles.css`. Gate 7 may replace the disposable technology but must preserve the approved semantics and interaction behavior.

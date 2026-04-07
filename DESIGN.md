# Design System Specification: Campus Maya Koleji

## 1. Overview & Creative North Star

This design system is built to transform the digital presence of Campus Maya Koleji into a world-class educational experience. It moves away from the typical "preschool template" and moves toward a high-end, editorial-inspired digital environment. 

### Creative North Star: "The Modern Atelier"
The "Modern Atelier" philosophy views the digital interface as a curated gallery of growth. It balances the playful curiosity of early childhood with the architectural rigor of a premier primary school. By utilizing intentional asymmetry, expansive negative space, and a sophisticated "tonal layering" approach, we create a sanctuary of learning that feels premium, trustworthy, and deeply intentional for parents.

**Key Design Pillars:**
*   **Architectural Softness:** High-end geometry (large radii) meets organic layout structures.
*   **Editorial Authority:** High-contrast typography scales that prioritize legibility and prestige.
*   **Atmospheric Depth:** A rejection of flat, bordered boxes in favor of light-drenched, layered surfaces.

---

## 2. Colors & Atmospheric Tone

The palette evolves the brand's core greens and neutrals into a sophisticated hierarchy that feels academic yet warm.

### The Palette (Material Design Convention)
*   **Primary (`#216156`):** The "Scholar Green." Used for authoritative brand presence.
*   **Secondary (`#7D5638`):** The "Earth Tone." Provides a grounded, organic warmth reminiscent of Montessori materials.
*   **Surface & Background (`#FCF9F8`):** An off-white "fine paper" base that reduces eye strain and feels more premium than pure white.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning or containment. We define boundaries through **Tonal Transitions**. To separate content, use a background shift (e.g., placing a `surface-container-low` section against a `surface` background). This creates a seamless, high-end editorial flow.

### Glass & Gradient Soul
To inject personality, main CTAs and Hero backgrounds should utilize subtle linear gradients transitioning from `primary` (#216156) to `primary-container` (#3D7A6E). 
*   **Glassmorphism:** For floating navigation or modal overlays, use semi-transparent `surface` colors with a `backdrop-blur` (20px-40px). This allows the natural colors of school life (photography) to bleed through the interface softly.

---

## 3. Typography: The Voice of Learning

We replace the playful 'Balsamiq' with a sophisticated pairing that speaks to both modern professionalism and warmth.

*   **Display & Headlines (Plus Jakarta Sans):** A clean, modern sans-serif with a geometric soul. The large x-height makes it approachable, while its crispness ensures a "corporate school" authority.
    *   *Usage:* Use `display-lg` for hero impact, utilizing tight letter-spacing (-0.02em) for a high-end editorial feel.
*   **Body & Titles (Work Sans):** Chosen for its exceptional readability. Its slightly wider apertures feel "friendly" and open, perfect for long-form educational philosophy content.
    *   *Usage:* `body-lg` should be the standard for parent communications to ensure a premium, effortless reading experience.

---

## 4. Elevation & Depth: Tonal Layering

Depth in this system is not "added"; it is "revealed" through the stacking of surfaces.

*   **The Layering Principle:** Treat the UI as sheets of fine paper. 
    *   *Base:* `surface`
    *   *Sectioning:* `surface-container-low`
    *   *Cards/Interactive:* `surface-container-lowest` (this "pops" white against the off-white background).
*   **Ambient Shadows:** If a shadow is required for a floating state (e.g., a primary button or a mobile menu), it must be extra-diffused. Use a blur of 30px-50px with an opacity of 4-6%. The shadow color should be a tinted version of `on-surface` (#1C1B1B) to simulate natural light.
*   **The "Ghost Border" Fallback:** For accessibility in form inputs, use the `outline-variant` token at **20% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** High-gloss `primary` to `primary-container` gradient. Roundedness: `full` (pill-shaped) for a friendly, modern touch.
*   **Secondary:** `surface-container-highest` background with `primary` text. No border.
*   **Tertiary:** Text-only with a subtle `secondary` underline that expands on hover.

### Cards & Content Blocks
*   **Rule:** Forbid divider lines. 
*   **Execution:** Use the `xl` (3rem) roundedness scale for card containers. Group related information using vertical whitespace (e.g., 64px spacing) rather than structural lines.

### Input Fields
*   **Style:** Minimalist. `surface-container-low` background with a `sm` (0.5rem) corner radius. The label uses `label-md` in `on-surface-variant`.
*   **Interaction:** On focus, the background transitions to `surface-container-lowest` with a 1px "Ghost Border" at 20% opacity.

### Educational Context Components
*   **The "Discovery Chip":** Small, pill-shaped tags using `tertiary-container` to categorize age groups (e.g., "Preschool," "Primary").
*   **The "Milestone Progress":** Soft, thick progress bars using `primary-fixed` as the track and `primary` as the indicator, with `full` roundedness.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use intentional asymmetry. Place a high-quality image of the school campus slightly off-grid to create a bespoke, non-template look.
*   **Do** lean into large corner radii (`xl` - 3rem) for image containers to maintain the "soft, child-friendly" touch.
*   **Do** use "Breathing Room." If you think a section needs more space, double the padding. Premium design thrives on white space.

### Don't:
*   **Don't** use black (#000000). Always use `on-surface` (#1C1B1B) for text to maintain a sophisticated, soft-touch professional feel.
*   **Don't** use standard drop shadows. If it looks like a "box shadow" from 2015, it is too heavy.
*   **Don't** use dividers or "HR" lines to separate news items or list entries. Use background color shifts (`surface-container` tiers).

---

## 7. Roundedness Scale Reference
*   **`sm` (0.5rem):** Inputs, small chips.
*   **`DEFAULT` (1rem):** Standard buttons, small cards.
*   **`lg` (2rem):** Main content cards, modals.
*   **`xl` (3rem):** Feature sections, hero images, primary containers.
*   **`full` (9999px):** Pills, action buttons.
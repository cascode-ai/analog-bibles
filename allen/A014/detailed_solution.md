# Detailed solution - A014

Photoresist is a light-sensitive polymer whose solubility in a developer changes where it is exposed to ultraviolet (UV) light. The two types differ only in the direction of that change, which decides whether the resist pattern copies or inverts the mask. Its use is the photolithography cycle that transfers each mask layer to the wafer.

### Step 1 — Positive versus negative resist

**Positive resist.** UV exposure breaks down the polymer and makes it soluble in the developer. After developing, the exposed resist is gone and resist remains where the photomask is opaque. The resist pattern is therefore a copy of the mask's opaque features.

**Negative resist.** UV exposure cross-links (polymerizes) the resist and makes it insoluble. The developer removes the unexposed resist, so resist remains where the mask is transparent. The resist pattern is the inverse, or negative, of the mask's opaque features.

| | Exposed regions | Resist remains under | Pattern relative to opaque mask features |
|---|---|---|---|
| Positive | become soluble | opaque areas | same |
| Negative | become insoluble | transparent areas | inverted |

Positive resist generally gives finer resolution, because negative resist swells as it absorbs developer, which blurs small features.

### Step 2 — How resist is used in photolithography

Each mask layer is transferred by the same sequence:

1. **Coat.** Spin a thin, uniform resist film onto the wafer, then soft-bake it to drive off solvent.
2. **Expose.** Shine UV light through the photomask, by contact, proximity or projection (step-and-repeat) printing, so the mask pattern is imaged onto the resist.
3. **Develop.** Dissolve the soluble regions, leaving the resist pattern; hard-bake it to make it more resistant.
4. **Process.** The remaining resist protects the areas under it while the uncovered areas are etched (removing the exposed film) or ion-implanted.
5. **Strip.** Remove the resist with solvents or plasma ashing.

The cycle is repeated for every mask layer of the process, aligned to the patterns already on the wafer. The resist is thus a temporary stencil: it never stays in the finished circuit, but it determines where each etch or implant acts.

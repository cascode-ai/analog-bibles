# Detailed solution - A095

The current gain of a 1:2 mirror is accurate when M2 is exactly twice M1 in every respect that affects the current: effective $W/L$, process gradients, orientation and parasitic resistances. Check each layout for unit matching, common centroid, identical orientation and whether it can be wired at all.

### Step 1 — What limits the ratio

The ideal gain is $(W/L)_2/(W/L)_1=2$. In practice:

- edge effects (lithographic and etch bias $\Delta W$, lateral diffusion $\Delta L$) do not scale with width, so two devices of different widths have $(W_2-\Delta W)/(W_1-\Delta W)\ne W_2/W_1$; contact and source/drain resistances also differ unless the devices are copies;
- linear gradients of $K'$, $V_T$ or oxide thickness across the layout shift devices placed at different positions;
- orientation-dependent effects (different lithographic bias in x and y, angled-implant shadowing, stress-dependent mobility) affect a rotated device differently.

A ratio built from identical unit devices, in the same orientation and arranged with a common centroid, cancels all three.

### Step 2 — Comparing the layouts

| Layout | Construction | Unit matched | Same orientation | Common centroid | Verdict |
|---|---|---|---|---|---|
| 1 | one 5/1 and one 10/1 device | no: ratio $(10-\Delta W)/(5-\Delta W)\ne2$ | yes | no | edge effects and gradients enter |
| 2 | two 5/1 units for M2; M1 rotated 90° | yes | no | yes | orientation effects differ between M1 and M2 |
| 3 | three fingers on one shared diffusion | yes | yes | yes | cannot be wired as the 1:2 mirror with M1 in the center (shared regions force both M1 terminals to GRD) |
| 4 | three separate, identical 5/1 units, M2A–M1–M2B | yes | yes | yes | most accurate |

### Step 3 — Why layout 4 is the most accurate

In layout 4, M2A, M1 and M2B are identical 5/1 transistors with the same shape, contacts, orientation and surroundings, so every edge effect, contact resistance and parasitic scales exactly with the number of units and the ratio is exactly 2. The placement M2A–M1–M2B is symmetric about M1, so the centroid of M2 coincides with that of M1, and a linear gradient along the row cancels to first order: if a parameter varies as $p_0+gx$ with M1 at $x=0$ and the M2 halves at $\pm d$, then the M2 average is $p_0=p_{M1}$. Layout 4 therefore has the most accurate current gain.

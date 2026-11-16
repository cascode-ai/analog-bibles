# Golden Solution - A092

## Reference answer

$I_{out} \approx 101.7\ \mu$A (about 1.7% high), because M1's source current has to travel through more n⁺ diffusion to reach the GRD contacts than M2's.

- Only source resistance matters. The gate draws no current (poly and gate-contact resistance drop nothing), the drain resistances do not affect saturated devices with equal $V_{DS}$, and the four GRD contacts (4 Ω each, 1 Ω in parallel) carry both currents in common, so they shift both sources equally.
- M1's source path (10 µm wide): from the channel edge down 5 µm (0.5 square), a 10 × 10 µm corner (0.5 square), 10 µm along the bottom strip (1 square) and about 2 µm more to the contact column (0.2 square): ≈ 2.2 squares × 35 Ω ≈ 77 Ω.
- M2's source path: from its channel edge straight down about 7 µm to the contacts, 10 µm wide: ≈ 0.7 square ≈ 24.5 Ω.
- Difference ΔR ≈ 52 Ω, so M1's source sits ≈ 5.2 mV higher than M2's at 100 µA.
- $\beta = K'W/L = 550\ \mu\mathrm{A/V^2}$, $V_{ON} = \sqrt{2\times100/550} = 0.603$ V. M1 sets $V_G - V_T = 0.603 + 100\ \mu\times77 = 0.6107$ V, measured from the common source-contact node (the ≈ 0.2 mV drop of $(I_{in}+I_{out})$ across the shared 1-Ω contacts is common to both devices and cancels). M2: $I_{out} = 275\ \mu\times(0.6107 - I_{out}\times24.5)^2$ → $I_{out} = 101.7\ \mu$A. Equivalently $\Delta I/I \approx g_m\Delta R = (2I/V_{ON})\Delta R = 0.0174$.
- A 2-D resistive-sheet calculation of the same geometry gives ≈ 84 Ω and ≈ 29 Ω, hence ≈ 101.8 µA, consistent with the square count.

## Grading notes

+2: $I_{out}$ = 101–103 µA, from the difference of the source-diffusion resistances (counted in squares, ΔR ≈ 40–65 Ω) and the gm·ΔR (or exact square-law) correction, with $I_{out} > I_{in}$. +1: correct mechanism and direction with a square count outside that range (result 100.5–104 µA). 0: correct mechanism and direction with a result of 104–108 µA (square count off by a factor of about 2–4), correct mechanism described with no numerical result, or a correct number reached partly from irrelevant drain/poly resistances. −2 (asserted as fact): $I_{out} < I_{in}$, an error attributed mainly to the polysilicon gate resistance or to drain contact resistance, $I_{out}$ = 100 µA claimed (no layout error), or a source-resistance difference of several hundred ohms giving $I_{out}$ above about 108 µA, typically from counting 1-µm grid cells as resistance squares (treating the 10-µm-wide diffusion as 1 µm wide, e.g. 15–30 squares and $I_{out}$ ≈ 118–125 µA): the square count is length/width of the current path, and such a count overstates the layout error by about an order of magnitude.

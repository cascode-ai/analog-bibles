# Golden Solution - R021

## Reference answer

$V_{GS} = 1$ V is fixed and the bulk acts as a back gate: as $V_{in}$ rises, $V_{SB} = 1 - V_{in}$ falls, $V_{TH}$ falls, $I_D$ rises and $V_{out} = V_{DD} - R_1I_D$ falls, increasingly fast. For $V_{in} > 1$ V the source–bulk junction is forward biased and above roughly 1.5–1.7 V the circuit no longer behaves as a MOSFET.
- $V_{TH} = 0.7 + 0.45(\sqrt{1.9 - V_{in}} - \sqrt{0.9})$: 0.893 V at $V_{in} = 0$, 0.806 V at 0.5 V, 0.70 V at 1 V, 0.56 V at 1.5 V.
- $I_D = \tfrac12\beta(1 - V_{TH})^2$ in saturation: 0.0057β, 0.019β, 0.045β, 0.098β at those points; $V_{out} = 3 - R_1I_D$ starts just below 3 V ($M_1$ barely on at $V_{in} = 0$) and falls with growing slope.
- If $R_1$ is large, $V_{out}$ can drop below $2 - V_{TH}$ (drain below gate minus $V_{TH}$), $M_1$ enters triode and the curve flattens.
- $V_{in} > 1$ V: $V_{SB} < 0$; once the forward bias reaches ~0.5–0.7 V a large bulk-to-source junction current flows (into the 1-V source) and the parasitic lateral npn (bulk = base, source = emitter, drain = collector) pulls extra current through $R_1$, so $V_{out}$ drops further; the square-law description is invalid there.

## Grading notes

+2: $V_{out}$ starts near $V_{DD}$ (M1 barely on, $V_{TH}$ ≈ 0.89 V at $V_{in} = 0$), decreases with growing slope because $V_{TH}$ falls as the bulk rises, possible triode flattening for large $R_1$, and the forward-biased source–bulk junction noted for $V_{in}$ above ≈ 1–1.5 V. Describing what happens beyond that point (junction current, parasitic npn pulling $V_{out}$ lower) is a plus, not required for +2. +1: correct MOS behaviour with the forward-bias issue mentioned only vaguely. 0: correct MOS behaviour but the body-effect formula extrapolated to $V_{in} = 3$ V with no mention of junction conduction. -2 (asserted as fact): $V_{out}$ independent of $V_{in}$, $V_{out}$ increasing with $V_{in}$, or $V_{in}$ treated as the gate input.

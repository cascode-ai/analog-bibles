# Golden Solution - A345

## Reference answer

Common-mode loop gain ≈ −109 V/V (≈ $-g_{m10}r_{ds9}$ = −112 V/V in the simplest estimate); negative feedback.

- Loop (common-mode half circuit): output CM change $v_c$ → gates of M10/M11 → current change $-g_{m10}v_c$ into node S (drains of M10, M11 = sources of M6, M7) → M7 acts as a common-gate stage (its gate is held by the first stage) → output node loaded by $r_{ds9}$.
- Values: $g_{m10} = \sqrt{2(50\ \mu)(10)(50\ \mu)} = 223.6\ \mu$S; $r_{ds10} = r_{ds7} = 1/(0.05\times50\ \mu) = 400$ kΩ; $r_{ds9} = 1/(0.04\times50\ \mu) = 500$ kΩ.
- Node S: the M7 path presents a conductance $G_7 = (g_{m7} + 1/r_{ds7})/(1 + r_{ds9}/r_{ds7}) = 226.1\ \mu/2.25 = 100.5\ \mu$S, against $g_{ds10} = 2.5\ \mu$S, so 97.6% of M10's current reaches the output.
- $LG = v_o/v_c = -g_{m10}r_{ds9}\,G_7/(g_{ds10} + G_7) = -111.8\times0.976 = -109$ V/V.

## Grading notes

+2: magnitude 98–123 V/V (−109, or the approximation $-g_{m10}r_{ds9}$ = −112) with the loop path through M10/M11 and the common-gate M6/M7 to the outputs loaded by the n-channel sinks, and the feedback identified as negative. +1: right magnitude with sign/polarity not addressed, or a slip ≤ 15%. 0: right path with the output resistance taken as $r_{ds7}\|r_{ds9}$ (≈ −50) or another clear modeling slip. −2 (asserted as fact): a loop gain from the first stage (M1–M5) path, positive feedback claimed, or a gain of order $(g_mr_{ds})^2$ or ≈ 1 for this saturated-model case.

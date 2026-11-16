# Golden Solution - R060

## Reference answer

Decreasing $V_D$ below 0: the drain becomes the lower-potential terminal and takes over the role of the source. Current reverses (flows from the grounded terminal to the drain terminal). The effective gate–source voltage $1.5 - V_D$ grows as $V_D$ falls and the device stays in triode ($|V_D| < 1.5 - V_D - V_{TH}$ always), so $|I_D|$ rises faster than linearly. At the same time the drain–substrate junction (n+ drain, p-substrate at 0 V) becomes forward biased. Once $V_D$ drops below about −0.5 to −0.7 V it conducts heavily, injecting large current from the substrate (minority carriers into the substrate, latch-up risk). The bulk "sees" a negative source voltage, which also lowers $V_{TH}$ of the reversed device.

Increasing $V_{sub}$ above 0: $V_{SB} = -V_{sub} < 0$, so the body effect works in reverse. $V_{TH}$ decreases (e.g., ≈ 0.64 V at $V_{sub} = 0.25$ V, 0.56 V at 0.5 V) and $I_D$ increases. The source–substrate junction (and the drain–substrate junction if $V_D < V_{sub}$) is forward biased; beyond roughly 0.5–0.7 V a large substrate current flows into the source. The parasitic lateral npn (source = emitter, substrate = base, drain = collector) turns on, so the drain current is no longer controlled by the gate; latch-up becomes possible.

## Grading notes

Two scenarios, equal weight. +2: (1) role reversal of source and drain with increasing reverse current (triode) and the forward-biased drain–substrate junction for $V_D \lesssim -0.6$ V; (2) $V_{TH}$ reduction (forward body bias) increasing $I_D$, then source/drain–substrate junction conduction (and parasitic bipolar/latch-up) beyond ≈ 0.6 V. +1: both scenarios right but one of the junction effects missing. 0: one scenario right, the other missing or wrong. -2 (asserted as fact): current claimed to stop (device "turns off") for negative $V_D$, $V_{TH}$ claimed to increase with positive $V_{sub}$, or junctions said to remain reverse biased.

# Golden Solution - R641

## Reference answer

$R_{min} = 2/g_{m1,2} \approx 546\ \Omega$.

Derivation:
- Each of $M_1$, $M_2$ carries $I_T/2 = 0.5$ mA: $g_{m1,2} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_T} = 3.66$ mS.
- A three-stage ring with one dominant pole per stage needs a low-frequency gain of 2 per stage; with $M_3$–$M_4$ off the gain is $g_{m1,2}R$.
- $g_{m1,2}R \ge 2$ → $R \ge 2/3.66\ \mathrm{mS} = 546\ \Omega$. This is the critical value (loop gain exactly 1); start-up with growing amplitude needs $R$ slightly above it. The output capacitance cancels from the condition in the one-pole-per-stage model.

## Grading notes

+2: R ≈ 546 Ω (±5%) from gain ≥ 2 per stage with $g_m$ at 0.5 mA per device. Calling 546 Ω the critical value and requiring $R > 546\ \Omega$ is the same answer. +1: correct method with a numerical slip. 0: correct condition without a number. -2 (asserted as fact): per-stage gain requirement 1 or $\sqrt2$ (giving 273 Ω or 386 Ω), $g_m$ computed with the full 1 mA in one device (386 Ω), or the cross-coupled pair included with an invented size.

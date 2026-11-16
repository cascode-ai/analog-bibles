# Golden Solution - A452

## Reference answer

Fast.

- All bits are converted at once (parallel conversion): one charge transfer per conversion, not N serial steps.
- The capacitors drive the op amp's summing node, a virtual ground, and are driven directly from $V_{REF}$ or ground; there are no floating high-impedance nodes, so parasitic capacitances do not change the output value (the summing-node parasitic $C_p$ only lowers β slightly).
- The speed is set by the op amp: feedback factor $\beta = C_X/(C_X + \sum C + C_p) \approx 2^NC/[2^NC + (2^N - 1)C] \approx 1/2$, so the closed-loop bandwidth is about GB/2, plus slew-rate limits for large steps and the switch RC time constants.

## Grading notes

+2: "fast" with the main reasons (parallel conversion; summing node at virtual ground with no floating nodes, so parasitic-insensitive) and the op amp's settling (β ≈ 1/2, GB, slew rate) named as the limit. +1: "fast" with only one generic reason. 0: a balanced discussion that does not commit, or a split conclusion ("fast in principle, slow in practice for large N"), that identifies the right factors. A caveat that the capacitance growing as $2^N$ raises the slew-current and switch-RC demands is physically correct and is not a false claim; nor is a remark that a summing-node parasitic slows settling by lowering β. −2 (asserted as fact): "slow" as the unconditional conclusion, e.g. because it needs N clock cycles, because conversion is serial, or because the capacitor array's RC constants make it inherently slow.

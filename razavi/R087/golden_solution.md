# Golden Solution - R087

## Reference answer

The design is not unique; it must satisfy two constraints:
- Swing: $V_{DD} - V_{ov1} - |V_{ov2}| = 2.2$ V → $V_{ov1} + |V_{ov2}| = 0.8$ V.
- Gain: $g_{m1}(r_{O1}\|r_{O2}) = \dfrac{2I_D}{V_{ov1}}\cdot\dfrac{1}{(\lambda_1+\lambda_2)I_D} = \dfrac{2}{V_{ov1}(\lambda_1+\lambda_2)} = 100$, with $\lambda_1 = 0.05\ \mu\mathrm{m}/L_1$, $\lambda_2 = 0.1\ \mu\mathrm{m}/L_2$ (V⁻¹). With $L_1 = L_2 = L$: $L = 7.5\ \mu\mathrm{m/V} \times V_{ov1}$.

Example with equal overdrives of 0.4 V: $L = 3$ μm; $(W/L)_1 = 2(1\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 0.16) = 93.3$ → $W_1 \approx 280$ μm; $(W/L)_2 = 2(1\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2} \times 0.16) = 325.5$ → $W_2 \approx 977$ μm. Check: $g_{m1} = 5$ mS, $r_{O1} = 60$ kΩ, $r_{O2} = 30$ kΩ, gain $= 5\ \mathrm{mS} \times 20\ \mathrm{k\Omega} = 100$.
Another valid choice: $V_{ov1} = 0.2$ V, $|V_{ov2}| = 0.6$ V, $L = 1.5$ μm, $(W/L)_1 = 373$ ($W_1 \approx 560$ μm), $(W/L)_2 = 145$ ($W_2 \approx 217$ μm).

## Grading notes

Any design is acceptable if it meets both constraints; check it: overdrives from the chosen W/L at 1 mA must add to ≈ 0.8 V, and $g_{m1}(r_{O1}\|r_{O2})$ with λ scaled as $1/L$ must be ≈ 100 (±10%). +2: a complete design (W and L of both devices) meeting both constraints, with the assumption used to pick one solution stated. +1: correct constraints and a design within ±20% of one target, or W/L ratios right but the lengths (hence widths) left open while the gain constraint is correctly formulated. 0: only the swing constraint used correctly. -2 (asserted as fact): λ not scaled with L (so the claimed design cannot reach a gain of 100), $V_{TH}$ included in the swing budget, the PMOS sized with $\mu_nC_{ox}$, or a claim that the design is unique without justification and with a wrong design.

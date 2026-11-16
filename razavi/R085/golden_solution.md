# Golden Solution - R085

## Reference answer

$(W/L)_2 \approx 5.16$ (e.g., 2.6/0.5); $A_v \approx -10.4$.

- $M_1$ carries 1 mA: $V_{ov1} = \sqrt{2(1\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2} \times 40)} = 0.611$ V; edge of triode: $V_{out} = V_{ov1} = 0.611$ V ($V_{in}$ = 1.311 V).
- $M_2$ carries $I_1 - I_S = 0.25$ mA with $|V_{GS2}| = 3 - 0.611 = 2.389$ V, $|V_{ov2}| = 1.589$ V: $(W/L)_2 = 2(0.25\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2} \times 1.589^2) \approx 5.16$.
- $g_{m1} = 2I_1/V_{ov1} = 3.27$ mS, $g_{m2} = 2(0.25\ \mathrm{mA})/1.589 = 0.315$ mS; with λ = 0 the ideal source $I_S$ adds no conductance: $A_v = -g_{m1}/g_{m2} \approx -10.4$. No body effect (PMOS source at its bulk).

## Grading notes

+2: $(W/L)_2$ ≈ 5.2 (±4%) and gain ≈ −10.4 (±4%). +1: one slip in an otherwise correct solution. 0: one of the two results right with the other wrong by a slip. -2 (asserted as fact): $M_2$ assumed to carry 1 mA or 0.75 mA, the edge condition taken as $V_{out} = V_{TH}$ or $V_{out} = V_{in}$, $\mu_nC_{ox}$ used for $M_2$, or a gain from $g_{m2}$ evaluated at the wrong current.

# Golden Solution - R134

## Reference answer

$V_{in} \approx 1.25$ V ($V_{out} = V_b + |V_{THP}| = 0.8$ V, $I_D \approx 0.82$ mA); $A_v \approx -g_{m1}(r_{O1}\|r_{O2}) \approx -12$.

- $M_2$ saturation edge: $V_{SD2} = V_{SG2} - |V_{THP}| = 2.2$ V → $V_{out} = 0.8$ V; current $\tfrac12(38.4\ \mu\mathrm{A/V^2})(8.8)(2.2\ \mathrm{V})^2 = 0.818$ mA.
- $M_1$ carries the same current: overdrive $\sqrt{2(0.818\ \mathrm{mA})/(5.36\ \mathrm{mA/V^2})} = 0.552$ V < 0.8 V, so $M_1$ is saturated; $V_{in} = 1.252$ V.
- Both devices saturated: $A_v = -g_{m1}(r_{O1}\|r_{O2})$ with $g_{m1} = 2.96$ mS, $r_{O1} = 1/(0.1 \times 0.818\ \mathrm{mA}) = 12.2$ kΩ, $r_{O2} = 6.1$ kΩ → ≈ −12.1 (unbounded if λ = 0; far above the gain of 5 at the 0.5-mA design point).

## Grading notes

+2: $V_{out} = 0.8$ V, $I_D$ ≈ 0.82 mA, $V_{in}$ ≈ 1.25 V (±0.03 V), gain ≈ −12 (±10%). +1: correct operating point with the gain only stated as very large / unbounded for λ = 0, or one slip. 0: operating point right but gain computed with a triode resistance for $M_2$. -2 (asserted as fact): edge condition written as $V_{out} = V_b - |V_{THP}|$ or $V_{SD2} = V_{SG2}$, $M_1$ claimed in triode there, or gain of about 5.

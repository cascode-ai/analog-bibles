# Golden Solution - grsim-08-14

## Reference answer

Hand analysis (square law, $\lambda = 0$):
- Bias: $M_3$ carries ≈ 1 mA ($V_{SG3} \approx 2.0$ V), so $I_{D1} = V_{SG3}/4.35\text{k} \approx 0.46$ mA; $V_{GS1} = 1 + \sqrt{0.46/3} = 1.39$ V, tail current $(6 - 1.39)/5\text{k} = 0.92$ mA, so $I_{D2} \approx 0.46$ mA — the 4.35-kΩ value balances the pair. Solved consistently: $I_{D1} = 0.460$ mA, $I_{D2} = 0.462$ mA, $I_{D3} = 1.00$ mA, $V_o \approx +8$ mV.
- $g_{m1} \approx g_{m2} \approx 2.35$ mS, $g_{m3} = 2.0$ mS.
- Two-port (series-shunt, $f = 1/11$): $a \approx 41$, $T \approx 3.8$, $A = a/(1+T) \approx 8.7$; exact small-signal nodal analysis gives $v_o/v_i \approx 9.3$ (the low loop gain plus the finite tail make the effective ideal gain ≈ $11[1 + 1/(g_{m2}\cdot5\text{k})] \approx 11.9$).
- $Z_{in} = \infty$ (MOS gate); $Z_{out} \approx (6\text{k}\|11\text{k})/(1+T) \approx 0.82$ kΩ (exact ≈ 0.87 kΩ).
- Large-signal: slope ≈ 9.3 around zero; negative limit −3.9 V (passive divider) when $M_3$ cuts off, reached at $v_i \approx -0.45$ V; on the positive side $M_3$ enters the triode region above $V_o \approx 4.5$ V and the output flattens below +6 V.
- Distortion for 0.5 V p-p input (output ≈ 2.3 V peak): much larger than in the bipolar version because the loop gain is only ≈ 4; a square-law large-signal calculation gives HD2 ≈ 2% and HD3 ≈ 0.25%.

## Grading notes

A correct simulation shows: dc output within tens of mV of zero with $I_{D1} \approx I_{D2} \approx 0.46$ mA and $I_{D3} \approx 1.0$ mA; small-signal gain ≈ 9.2–9.3 (two-port hand estimate 8.7 acceptable for the hand part); loop gain ≈ 3.5–4; output resistance ≈ 0.8–0.9 kΩ; infinite (gate) input resistance; transfer characteristic flat at ≈ −3.9 V for $v_i \lesssim -0.45$ V, roughly linear through zero, flattening above ≈ +4.5 V; HD2 ≈ 1.5–2.5% and HD3 ≈ 0.15–0.4%. A simulation with λ ≠ 0 or a nonzero γ contradicts the stated models.

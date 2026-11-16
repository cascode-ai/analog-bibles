# Golden Solution - G082

## Reference answer

Without leakage $R_o \approx 367$ MΩ. At $V_{OUT} = 2$ V the leakage resistance is ≈ 4×10¹² Ω, negligible, so $R_o \approx 367$ MΩ. At $V_{OUT} = 3$ V the leakage resistance is ≈ 104 MΩ and $R_o \approx 81$ MΩ: substrate leakage dominates.

- Bias: $V_{ov} = \sqrt{2I/(k'W/L)} = \sqrt{2(100\ \mu)/(194\ \mu\times121.95)} = 0.092$ V, $g_m = 2I/V_{ov} = 2.18$ mS, $r_o = 1/(\lambda I) = 410$ kΩ.
- Cascode: $R_o = r_{o2}(1 + g_{m2}r_{o1}) + r_{o1} \approx 366.7$ MΩ.
- $V_{DS1} = V_{GS3} + V_{GS4} - V_{GS2} \approx V_{GS} = V_t + V_{ov} = 0.692$ V, so $V_{DS2} = V_{OUT} - 0.692$ V and $V_{DS2} - V_{DS(\text{act})} = V_{DS2} - V_{ov}$ = 1.216 V (2 V) and 2.216 V (3 V).
- $I_{DB2} = 5(1.216)(100\ \mu\mathrm{A})e^{-30/1.216} \approx 1.2\times10^{-14}$ A; at 3 V: $5(2.216)(100\ \mu\mathrm{A})e^{-30/2.216} \approx 1.46\times10^{-9}$ A.
- $g_{db} = \partial I_{DB}/\partial V_D = \dfrac{I_{DB}}{V_{DS}-V_{DS(\text{act})}}\left(\dfrac{K_2}{V_{DS}-V_{DS(\text{act})}} + 1\right)$ (≈ $K_2I_{DB}/(V_{DS}-V_{DS(\text{act})})^2$): $2.5\times10^{-13}$ S at 2 V ($r_{db} \approx 4\times10^{12}$ Ω) and $9.6\times10^{-9}$ S at 3 V ($r_{db} \approx 104$ MΩ, or 112 MΩ with the approximate form).
- $r_{db}$ goes from the output node to the grounded substrate, directly in parallel with the cascode resistance: $R_o$ = 367 MΩ at 2 V; $367\|104 \approx 81$ MΩ (≈ 86 MΩ with the approximation) at 3 V. The leakage of $M_1$ is negligible ($V_{DS1} - V_{ov} = 0.6$ V gives $e^{-50}$) and is in any case shielded by the cascode.

## Grading notes

+2: cascode $R_o$ ≈ 367 MΩ (±5 %; $g_mr_o^2$ approximation fine), leakage negligible at 2 V (r_db of order 10¹² Ω), r_db ≈ 100–115 MΩ at 3 V placed in parallel with the output, total ≈ 78–88 MΩ, and the conclusion that leakage dominates at 3 V. +1: correct method with one numerical slip that leaves the conclusions unchanged (e.g. $V_{DS(\text{act})}$ omitted, changing r_db at 3 V by tens of percent; or $g_m$ computed with the drawn $L$ = 1 µm instead of $L_{\text{eff}}$, giving ≈ 332 MΩ at 2 V and ≈ 86 MΩ at 3 V). 0: correct cascode resistance but the leakage handled correctly at only one voltage, or the leakage conductance not derived. -2 (asserted as fact): leakage resistance added in series with the output resistance, the exponent sign wrong so that leakage is huge at both voltages, leakage applied only to $M_1$ and claimed to dominate, or the cascode resistance taken as a single $r_o$ (410 kΩ).

# Golden Solution - R240

## Reference answer

$V_{out}$ can range from ≈ 0.53 V to ≈ 2.64 V, a swing of about 2.1 V peak-to-peak (≈ 0.60–2.64 V, 2.04 V, if the body effect is neglected).

- Upper limit ($M_4$ saturated): $|V_{GS4}-V_{TH4}| = \sqrt{2(0.25\ \mathrm{m})/(38.4\ \mu\times100)} = 0.361$ V → $V_{out,max} = 3 - 0.361 = 2.64$ V.
- Lower limit ($M_2$ saturated): $V_{out} \ge V_{in,CM} - V_{TH2}$. Overdrive of $M_{1,2}$ = $\sqrt{2(0.25\ \mathrm{m})/(134\ \mu\times100)} = 0.193$ V; $V_P = 1.3 - 0.193 - V_{TH}(V_P)$ → $V_{TH} = 0.773$ V, $V_P = 0.334$ V. $V_{out,min} = 1.3 - 0.773 = 0.527$ V.
- Swing: $2.64 - 0.53 \approx 2.1$ V.

## Grading notes

+2: lower limit ≈ 0.53 V (body effect; 0.50–0.56 V) and upper limit ≈ 2.64 V (2.62–2.66 V), swing ≈ 2.1 V. +1: body effect neglected (lower limit 0.6 V, swing ≈ 2.04 V) with the rest right, or one limit slipped. 0: saturation conditions right, one limit within tolerance and the other wrong, e.g. because its overdrive was computed with a wrong current (such as 0.5 mA per device). Reading $M_1$'s drain as tied to the $M_3$/$I_1$ node (in the figure it goes to $V_{DD}$), so that $M_3$/$M_4$ or $M_2$ is assigned a current other than 0.25 mA, is a misread connection: 0 only if one limit is still within tolerance, otherwise -2. -2 (asserted as fact): limits from cutoff instead of saturation (e.g., $V_{out,min} = V_P$ or $V_{out,max} = V_{DD} - |V_{TH}|$), PMOS data used for $M_2$, both limits wrong because of wrong device currents (misread connection or wrong current split), or a swing larger than 2.5 V.

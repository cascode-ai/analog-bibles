# Golden Solution - R214

## Reference answer

Each output can swing between ≈ 0.71 V and ≈ 2.49 V: ≈ 1.78 V peak-to-peak single-ended, ≈ 3.57 V peak-to-peak differential (without body effect: 0.8 V to 2.49 V, 1.69 V and 3.38 V).
- Upper limit ($M_3$ saturated): $V_{DD} - |V_{GS3} - V_{TH3}|$ with $|V_{GS3} - V_{TH3}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\times100)} = 0.510$ V, i.e. 2.49 V.
- Lower limit ($M_1$ saturated): $V_{in,CM} - V_{TH1}$. Overdrive of $M_1$ 0.273 V; $V_P = 1.5 - 0.273 - V_{TH1}$ with $V_{TH1} = 0.7 + 0.45(\sqrt{0.9+V_P} - \sqrt{0.9})$ gives $V_P \approx 0.434$ V, $V_{TH1} \approx 0.793$ V, so 1.5 − 0.793 = 0.707 V.
- Swing: 2.49 − 0.71 = 1.78 V per output (output CM level held at the midpoint ≈ 1.6 V), 3.57 V pp differential.

## Grading notes

+2: limits ≈ 0.71 V and ≈ 2.49 V with body effect, giving ≈ 1.78 V pp single-ended or ≈ 3.57 V pp differential (either stated clearly). +1: body effect neglected (0.8 V lower limit, 1.69/3.38 V) with the rest right, or one slip. 0: correct limit expressions without numbers. -2 (asserted as fact): upper limit $V_{DD}$ or $V_{DD} - |V_{THP}|$, lower limit $V_{in,CM} - V_{GS1}$ (≈ 0.43 V) or the tail headroom, or PMOS overdrive computed with $\mu_nC_{ox}$.

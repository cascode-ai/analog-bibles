# Golden Solution - R443

## Reference answer

$V_{out}$ can range from ≈ 0.98 V to ≈ 2.49 V, a swing of ≈ 1.51 V.

- Lower end: $M_2$ saturated needs $V_{out} \ge V_{G2} - V_{TH2} = V_X + V_{OD2}$, with $V_X = V_{GS3} = 0.786$ V (100 μA in $M_3$) and $V_{OD2} = 0.193$ V → 0.98 V. (The body effect raises $V_{G2}$ and $V_{TH2}$ equally, so it cancels here.)
- Upper end: the PMOS source of $I_2$ (W/L = 100, 0.5 mA) needs $|V_{OD}| = \sqrt{2(0.5\ \mathrm{m})/(38.4\ \mu \cdot 100)} = 0.510$ V → $V_{out} \le 2.49$ V.
- Swing ≈ 2.49 − 0.98 = 1.51 V p-p ($= V_{DD} - |V_{ODP}| - V_{GS3} - V_{OD2}$).

## Grading notes

+2: ≈ 1.51 V (1.45–1.55 V) with limits ≈ 0.98 V ($V_{GS3} + V_{OD2}$) and ≈ 2.49 V ($V_{DD} - |V_{ODP2}|$). +1: right expression with a W/L slip (e.g., 1.39 V with W/L = 100 for M1–M3). 0: one limit right. -2 (asserted as fact): lower limit taken as $V_{OD1} + V_{OD2}$ (as in a plain cascode with X free), lower limit at $V_{G2} - V_{TH2}$ evaluated with a wrong $V_{G2}$ from treating X as set by $V_{in}$, or upper limit $V_{DD} - |V_{GSP}|$.

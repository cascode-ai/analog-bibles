# Golden Solution - R255

## Reference answer

$V_X$ rises slowly (diode-like) with $I_{REF}$, while $V_Y$, in the usual case $g_mR_2 > 1$ ($g_m = \beta(V_X - 0.7)$), falls roughly linearly; if $\beta R_2(V_X - 0.7) < 1$ at $I_{REF} = 0$, $V_Y$ first rises and peaks where $\beta R_2(V_X - 0.7) = 1$ (or keeps rising until $M_1$ leaves saturation). At $I_{REF} = 0$ the circuit already conducts ($V_Y > V_X > V_{TH}$). They cross where $V_{DD} - R_1I_{REF} = V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$ ($R_2$ then carries no current). For larger $I_{REF}$, $V_Y < V_X$, and once $V_Y < V_X - 0.7$ V, $M_1$ enters triode and $V_Y$ flattens, approaching $1/(\beta R_2)$ ($M_1$'s on-resistance dividing against $R_2$; near zero when $\beta R_2$ is large).

- KCL (with $M_1$ saturated, $I_{D1} = I_{D2}$): $I_{D2} = I_{REF} + (V_Y-V_X)/R_2$ and $(V_{DD}-V_Y)/R_1 = I_{REF} + 2(V_Y-V_X)/R_2$.
- $I_{REF} = 0$: current flows from $V_{DD}$ through $R_1$ and $R_2$ into the diode $M_2$, and $M_1$ copies it; $V_X$ slightly above 0.7 V, $V_Y$ between $V_X$ and $V_{DD}$.
- As $I_{REF}$ grows, $V_X$ rises as $V_{GS}$ of $M_2$; while $M_1$ is saturated, $dV_Y/dI_{REF} = -R_1(R_2 - 1/g_m)/(2R_1 + R_2 + 1/g_m)$, ≈ $-R_1R_2/(R_2+2R_1)$ for $g_mR_2 \gg 1$. So $V_Y$ falls when $g_mR_2 > 1$ and rises when $g_mR_2 < 1$ (e.g. β = 1 mA/V², $R_1$ = 2 kΩ, $R_2$ = 0.5 kΩ: $V_Y$ goes from 1.68 V at $I_{REF} = 0$ to 1.96 V at 3 mA, while $V_X$ crosses it near 0.6 mA).
- Example (W/L = 10/0.5, $R_1 = R_2$ = 10 kΩ): $I_{REF}$ = 0 → $V_X$ ≈ 0.93 V, $V_Y$ ≈ 1.62 V; crossing at ≈ 190 μA (≈ 1.08 V); 400 μA → 1.19 V, 0.47 V (M1 in triode); 1 mA → 1.51 V, 0.22 V.

## Grading notes

+2: nonzero current at $I_{REF} = 0$ (through $R_1$–$R_2$), $V_X$ slowly rising, $V_Y$ falling (the usual case $g_mR_2 > 1$; a correct parameter-dependent trend, with $V_Y$ first rising when $\beta R_2(V_X - 0.7) < 1$, is equally right), crossing where $V_{DD} - R_1I_{REF} = V_{GS}(I_{REF})$ (stated, or clearly implied by $V_Y > V_X$ at $I_{REF} = 0$ and $V_Y < V_X$ at the triode boundary), and $M_1$ entering triode at large $I_{REF}$ so $V_Y$ levels off at a low value (→ $1/(\beta R_2)$). +1: correct trends and crossing but the triode flattening missing. 0: $V_X$ right but $V_Y$ taken as $V_{DD} - R_1I_{REF}$ (ignoring $R_2$) without the crossing. -2 (asserted as fact): $V_Y$ increasing with $I_{REF}$ as the general behavior (without the $g_mR_2 < 1$ condition), $V_X = V_Y$ for all $I_{REF}$, or zero current and $V_X$ undefined at $I_{REF} = 0$.

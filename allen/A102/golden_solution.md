# Golden Solution - A102

## Reference answer

$r_{out} = R \,\Big\|\, \dfrac{R_1 + R_2}{1 + g_mR_2 + g_{ds}(R_1 + R_2)} \;\approx\; \dfrac{1}{g_m}\left(1 + \dfrac{R_1}{R_2}\right) = \dfrac{1}{g_m}\dfrac{V_{REF}}{V_{GS}}$

- Apply $v_{out}$. The gate signal is $v_g = v_{out}R_2/(R_1 + R_2)$ (no gate current).
- Current drawn: $g_mv_g + g_{ds}v_{out} + v_{out}/(R_1 + R_2) + v_{out}/R$, giving the expression above.
- For $g_mR_2 \gg 1$ and large $r_{ds}$: $r_{out} \approx (R_1 + R_2)/(g_mR_2) = (1/g_m)(1 + R_1/R_2)$, the diode resistance $1/g_m$ multiplied by $V_{REF}/V_{GS}$; $R$ in parallel is usually negligible.

## Grading notes

+2: an expression equivalent to $R\|(R_1 + R_2)/[1 + g_mR_2 + g_{ds}(R_1 + R_2)]$, simplified to ≈ $(1/g_m)(1 + R_1/R_2)$. +1: the multiplier form right with $R$ or $g_{ds}$ omitted. 0: $r_{out} \approx 1/g_m$ without the $(1 + R_1/R_2)$ factor. −2 (asserted as fact): $r_{out} \approx r_{ds}$, $R_1 + R_2$ or $R$, or the divider ratio inverted ($1 + R_2/R_1$).

# Golden Solution - R563

## Reference answer

$R_3 = R_2/K$, and $\dfrac{R_2}{R_1}\ln(nK) \approx 17.2$ for zero TC. Then $I_{C1} = KI_{C2}$, $I_{C2} = V_T\ln(nK)/R_1$, $|I_{D4}| = \dfrac{1}{R_2}\left[|V_{BE1}| + \dfrac{R_2}{R_1}V_T\ln(nK)\right]$ and $V_{BG} = \dfrac{R_4}{R_2}\left[|V_{BE1}| + \dfrac{R_2}{R_1}V_T\ln(nK)\right]$.
- $V_X \approx V_Y \approx |V_{BE1}|$. At $X$: $K|I_{D4}| = I_{C1} + |V_{BE1}|/R_3$. At $Y$: $|I_{D4}| = I_{C2} + |V_{BE1}|/R_2$.
- For $|V_{BE1}| - |V_{BE2}|$ to be PTAT, the collector-current ratio must be temperature-independent. $I_{C1} = KI_{C2}$ requires $K|V_{BE1}|/R_2 = |V_{BE1}|/R_3$, i.e. $R_3 = R_2/K$. (Otherwise $I_{C1}/I_{C2}$ contains a CTAT component.)
- Then the current-density ratio is $nK$: $|V_{BE1}| - |V_{BE2}| = V_T\ln(nK) = I_{C2}R_1$. Zero TC of $|I_{D4}|$ (hence $V_{BG}$) needs $(R_2/R_1)\ln(nK) \approx 17.2$. The larger density ratio also lowers the sensitivity to the op-amp offset.

## Grading notes

+2: $R_3 = R_2/K$ with the reason (collector currents in the fixed ratio $K$, so that $\Delta V_{BE} = V_T\ln(nK)$ is PTAT) and the zero-TC condition $(R_2/R_1)\ln(nK) \approx 17.2$. +1: $R_3 = R_2/K$ with a correct reason but the zero-TC condition missing, or written with $\ln n$ instead of $\ln(nK)$. 0: only the zero-TC condition, without the $R_2$–$R_3$ relation. -2 (asserted as fact): $R_3 = KR_2$ (inverted), $R_2 = R_3$ retained as the requirement, or a claim that the ratio $K$ requires no change of the resistors.

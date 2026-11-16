# Golden Solution - R320

## Reference answer

$$C_{in} \approx \frac{C_{GS}}{1 + g_mR_S} + C_{GD}\left(1 + \frac{g_mR_D}{1 + g_mR_S}\right)$$
- The source follows the gate with gain $A_S = \dfrac{g_mR_S}{1 + g_mR_S}$, so by Miller's theorem $C_{GS}$ appears at the gate as $C_{GS}(1 - A_S) = C_{GS}/(1 + g_mR_S)$ (bootstrapping, as in a source follower).
- The gain from gate to drain is $-g_mR_D/(1 + g_mR_S)$, so $C_{GD}$ is Miller-multiplied by $1 + g_mR_D/(1 + g_mR_S)$.
- Low-frequency gains are used (Miller approximation). With the body effect the $C_{GS}$ term would become $C_{GS}(1 + g_{mb}R_S)/[1 + (g_m + g_{mb})R_S]$.

## Grading notes

+2: both terms: $C_{GS}$ reduced by $1 + g_mR_S$ (bootstrapping) and $C_{GD}$ multiplied by $1 + g_mR_D/(1 + g_mR_S)$. +1: $C_{GS}$ term right but $C_{GD}$ term with the undegenerated gain $1 + g_mR_D$, or $C_{GD}$ term omitted with an explicit statement that only $C_{GS}$ is considered. 0: only qualitative statement that $C_{GS}$ is reduced. -2 (asserted as fact): $C_{GS}$ multiplied by $1 + g_mR_S$ (increased), $C_{GS}$ claimed unaffected by degeneration, or $C_{GD}$ divided by the gain.

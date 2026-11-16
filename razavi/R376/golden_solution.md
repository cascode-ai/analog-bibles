# Golden Solution - R376

## Reference answer

$$V_{n,in} = \frac{g_mR_FV_{n,M1} - V_{n,RF}}{g_mR_F - 1},\qquad I_{n,in} = \frac{g_m(V_{n,M1} - V_{n,RF})}{g_mR_F - 1}$$
Both contain the same two sources, so they are strongly correlated (not independent). Their PSDs: $\overline{V_{n,in}^2} = \dfrac{4kT\gamma g_mR_F^2 + 4kTR_F}{(g_mR_F - 1)^2} = \dfrac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}$ and $\overline{I_{n,in}^2} = \dfrac{4kT\gamma g_m + 4kTR_Fg_m^2}{(g_mR_F - 1)^2}$; cross-spectrum $\overline{V_{n,in}I_{n,in}^*} = \dfrac{4kTg_mR_F(1+\gamma)}{(g_mR_F - 1)^2}$.

- $V_{n,in}$ (input shorted, $V_G = 0$): noisy circuit $V_{out} = V_{n,RF} - g_mR_FV_{n,M1}$; noiseless gain $V_{out}/V_G = 1 - g_mR_F$. Equate.
- $I_{n,in}$ (input open): noisy circuit has no current in $R_F$ and $g_m(V_G + V_{n,M1}) = 0$, so $V_{out} = V_{n,RF} - V_{n,M1}$; noiseless transimpedance $V_{out}/I_{in} = (1 - g_mR_F)/g_m$. Equate.

## Grading notes

+2: both expressions in terms of $V_{n,M1}$ and $V_{n,RF}$ consistent with the stated polarities (an overall sign flip applied to both together is fine), the observation that they are correlated, and the correct PSDs. +1: correct PSDs and correlation remark, but the voltage expressions with a sign inconsistency between the two. 0: only the PSDs (powers) without the voltage-domain expressions or without addressing correlation; or one of $V_{n,in}$, $I_{n,in}$ right (with its PSD) and the other wrong. An answer that explicitly places $V_{n,in}$ at the MOS gate inside the $R_F$ loop ($v_{GS} = V_G + V_{n,in}$) instead of the placement given, and consistently derives that placement's exact pair $V_{n,in} = V_{n,M1} - V_{n,RF}/(g_mR_F)$, $I_{n,in} = -V_{n,RF}/R_F$ (with cross-spectrum $4kT/(g_mR_F)$), also scores 0. -2 (asserted as fact): $V_{n,in}$ and $I_{n,in}$ declared uncorrelated, both expressions wrong (e.g., the $-1$ in $g_mR_F - 1$ dropped in both while presented as exact), or the in-loop pair above presented as the sources between $R_S$ and the gate node.

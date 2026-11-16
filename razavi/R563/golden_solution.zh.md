$R_3 = R_2/K$，并且为实现零 TC 需要 $\dfrac{R_2}{R_1}\ln(nK) \approx 17.2$。于是 $I_{C1} = KI_{C2}$，$I_{C2} = V_T\ln(nK)/R_1$，$|I_{D4}| = \dfrac{1}{R_2}\left[|V_{BE1}| + \dfrac{R_2}{R_1}V_T\ln(nK)\right]$，$V_{BG} = \dfrac{R_4}{R_2}\left[|V_{BE1}| + \dfrac{R_2}{R_1}V_T\ln(nK)\right]$。
- $V_X \approx V_Y \approx |V_{BE1}|$。在 $X$ 处：$K|I_{D4}| = I_{C1} + |V_{BE1}|/R_3$。在 $Y$ 处：$|I_{D4}| = I_{C2} + |V_{BE1}|/R_2$。
- 要使 $|V_{BE1}| - |V_{BE2}|$ 与绝对温度成正比（PTAT），集电极电流之比必须与温度无关。$I_{C1} = KI_{C2}$ 要求 $K|V_{BE1}|/R_2 = |V_{BE1}|/R_3$，即 $R_3 = R_2/K$。否则 $I_{C1}/I_{C2}$ 中会含有与绝对温度互补（CTAT）的分量。
- 于是电流密度之比为 $nK$：$|V_{BE1}| - |V_{BE2}| = V_T\ln(nK) = I_{C2}R_1$。要使 $|I_{D4}|$（从而 $V_{BG}$）的 TC 为零，需要 $(R_2/R_1)\ln(nK) \approx 17.2$。更大的密度比还能降低对运放失调电压（offset voltage）的敏感度。

$$C_{in} \approx \frac{C_{GS}}{1 + g_mR_S} + C_{GD}\left(1 + \frac{g_mR_D}{1 + g_mR_S}\right)$$
- 源极以增益 $A_S = \dfrac{g_mR_S}{1 + g_mR_S}$ 跟随栅极，因此由密勒定理（Miller's theorem），$C_{GS}$ 在栅极处表现为 $C_{GS}(1 - A_S) = C_{GS}/(1 + g_mR_S)$（与源极跟随器一样的自举作用）。
- 从栅极到漏极的增益为 $-g_mR_D/(1 + g_mR_S)$，因此 $C_{GD}$ 经密勒效应（Miller effect）倍增 $1 + g_mR_D/(1 + g_mR_S)$ 倍。
- 这里使用的是低频增益，即采用密勒近似（Miller approximation）。若计入体效应，$C_{GS}$ 项将变为 $C_{GS}(1 + g_{mb}R_S)/[1 + (g_m + g_{mb})R_S]$。

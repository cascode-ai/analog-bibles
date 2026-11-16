线性区（$V_{DS} < V_{OD}$），由 $I_D = \mu C_{ox}\frac{W}{L}\left[V_{OD}V_{DS} - \tfrac12 V_{DS}^2\right]$ 得：
- $g_m = \partial I_D/\partial V_{GS} = \mu C_{ox}\frac{W}{L}V_{DS}$
- $r_O = (\partial I_D/\partial V_{DS})^{-1} = \dfrac{1}{\mu C_{ox}\frac{W}{L}(V_{GS} - V_{TH} - V_{DS})}$
- $g_m r_O = \dfrac{V_{DS}}{V_{OD} - V_{DS}}$

饱和区（$V_{DS} \ge V_{OD}$），由 $I_D = \tfrac12\mu C_{ox}\frac{W}{L}V_{OD}^2(1+\lambda V_{DS})$ 得：$g_m = \mu C_{ox}\frac{W}{L}V_{OD}(1+\lambda V_{DS}) \approx 2I_D/V_{OD}$，$r_O \approx 1/(\lambda I_D)$，其中 $I_D \approx \tfrac12\mu C_{ox}\frac{W}{L}V_{OD}^2$，$g_m r_O \approx 2/(\lambda V_{OD})$（若保留 $1+\lambda V_{DS}$，则再乘以该因子）。

随 $V_{DS}$ 变化的曲线：
- $g_m$：从 $V_{DS} = 0$ 时的 0 线性上升到 $V_{DS} = V_{OD}$ 时的 $\mu C_{ox}(W/L)V_{OD}$，此后几乎保持不变（随 $1+\lambda V_{DS}$ 略有上升）。
- $r_O$：在 $V_{DS} = 0$ 时等于导通电阻（on-resistance）$1/[\mu C_{ox}(W/L)V_{OD}]$，接近饱和边缘时按 $1/(V_{OD} - V_{DS})$ 上升；在饱和区大致保持在 $1/(\lambda I_D)$，比导通电阻大得多。（纯线性区公式在 $V_{DS} = V_{OD}$ 处发散；若在线性区方程中也保留 λ，$r_O$ 就会连续地衔接到饱和区的值。）
- $g_m r_O$：在 $V_{DS} = 0$ 时为零，在线性区的大部分范围内都很小（$V_{DS}$ 较小时 ≈ $V_{DS}/V_{OD}$），在到达 $V_{DS} = V_{OD}$ 之前的最后几十毫伏内急剧上升，然后在饱和区保持在 ≈ $2/(\lambda V_{OD})$。示例：$V_{OD} = 0.5$ V，λ = 0.1 V⁻¹：在进入线性区 50 mV 处，$g_m r_O$ = 9，而在饱和区为 40。器件一进入线性区，本征增益（intrinsic gain）就急剧下降。

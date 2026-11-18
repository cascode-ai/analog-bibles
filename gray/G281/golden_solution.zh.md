令 $Z_e = (R_o + r_\pi)/(\beta_0+1)$（$\beta_0 = 100$ 时为 150.5 Ω）：$\mathcal{R} = a_v\dfrac{(\beta_0+1)R_i}{(\beta_0+1)R_i + R_o + r_\pi} \approx 999.85$，$v_o/v_i \approx 0.9990$，$R_{in} = (R_i + Z_e)(1+\mathcal R) \approx 1.0$ GΩ，$R_{out} = (Z_e\|R_i)/(1+\mathcal R) \approx 0.150$ Ω。

- $\mathcal{R}$（$v_i = 0$，因此 $R_i$ 从输出端接地）：测试电压 $v_t$ 经 $R_o$ 加到基极；以 $R_i$ 为负载的射极跟随器（emitter follower）给出 $v_o = v_t(\beta_0+1)R_i/[(\beta_0+1)R_i + R_o + r_\pi]$；$v_x = -v_o$，所以 $\mathcal{R} = 999.85$。
- $A_\infty = 1$；$d$（$a_v = 0$）：$v_i$ 经 $R_i$ 加到 $Z_e$ 上：$d = Z_e/(R_i + Z_e) = 1.5\times10^{-4}$。
- $A = 999.85/1000.85 + 1.5\times10^{-4}/1000.85 = 0.99900$。
- $R_{in}$：$R(a_v{=}0) = R_i + Z_e$；$\mathcal{R}$（短路）= 999.85，$\mathcal{R}$（开路）= 0 → 1001 MΩ。
- $R_{out}$：$R(a_v{=}0) = Z_e\|R_i = 150.5$ Ω；$\mathcal{R}$（短路）= 0，$\mathcal{R}$（开路）= 999.85 → 0.150 Ω。

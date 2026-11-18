$R_o \approx 2.5\times10^3\ \mathrm{V}/I_{TAIL}$（100 µA 时 ≈ 25 MΩ）；$v_o/v_i \approx +4.6\times10^4$ 到 $4.8\times10^4$，与 $I_{TAIL}$ 无关。

- 每个晶体管流过 $I_{TAIL}/2$；$g_m = I_{TAIL}/(2V_T)$，$r_{o,npn} = 2V_{An}/I_{TAIL}$，$r_{o,pnp} = 2V_{Ap}/I_{TAIL}$。
- 向下看进 $Q_4$（叠接在 $Q_2$ 上的共基管，其基极经电池接交流地）：$R_{down} \approx \beta_nr_{o4} = 2\beta_nV_{An}/I_{TAIL} = 52{,}000\ \mathrm{V}/I_{TAIL}$（100 µA 时为 520 MΩ）。
- 向上看进 $Q_6$：$Q_5$–$Q_8$ 构成共射共基电流镜（cascode current mirror）；$Q_6$ 的基极电流经二极管 $Q_5$ 返回到电流镜输入管 $Q_7$，再被镜像到 $Q_6$ 的发射极，因此（与双极型共射共基电流镜相同）$R_{up} \approx r_{o6}(1 + \beta_p/2) \approx \beta_pr_{o6}/2 = 2600\ \mathrm{V}/I_{TAIL}$（100 µA 时为 26 MΩ）。
- $R_o = R_{down}\|R_{up} \approx 2.48\times10^3\ \mathrm{V}/I_{TAIL}$（100 µA 时为 24.8 MΩ；完整小信号分析为 24.9 MΩ）。
- $v_o/v_i = g_{m1}R_o \approx (I_{TAIL}/2V_T)(2476\ \mathrm{V}/I_{TAIL}) = 1238/V_T \approx 4.8\times10^4$（计入电流镜的基极电流误差时 ≈ $4.6\times10^4$）。
- 传输特性（$V_{SUP}$ = 2.5 V）：极其陡峭（全摆幅只需约 30 µV 输入），中心位于一个小的正输入附近（由 pnp 基极电流引起的系统失调）；输出上限由 $Q_6$ 饱和决定（略高于 $Q_6$ 的基极电位 $V_{SUP} - 2|V_{BE}| \approx 1.1$ V，即 ≈ 1.4–1.6 V），下限由 $Q_4$ 饱和决定（≈ 0.1 V，因为其基极比 $Q_1$/$Q_2$ 的发射极高 1.3 V）。

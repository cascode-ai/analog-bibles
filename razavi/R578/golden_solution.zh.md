≈ 0.71 ns（0.7 ns）。这只比单独使用 NMOS（0.73 ns）快 ≈ 3%。PMOS 在 $V_{out}$ 下降到约 $|V_{THP}|$ 时停止导通：考虑体效应（body effect）时该值 ≈ 1.1 V，不考虑时为 0.8 V；这发生在 ≈ 0.12 ns 之后。此后直到 1 mV 的放电全部由处于线性区（triode region）的 NMOS 单独完成，时间常数为 $C_H/[\beta_n(V_{DD} - V_{THN})]$ = 81 ps。

- NMOS：源极是接地的输入端（无体效应）；当 $V_{out}$ > 2.3 V 时它饱和，电流为 14.2 mA，此后进入线性区，$\beta_n = 5.36$ mA/V²。
- PMOS：源极在 $V_{out}$ 一侧（电位较高的端口），栅极接 0，因此 $V_{SG} = V_{SD} = V_{out}$，只要导通就处于饱和区：$|I| = \tfrac12(38.4\ \mu\mathrm{A/V^2} \times 120)(V_{out} - |V_{THP}|)^2 = 2.30\ \mathrm{mA/V^2}\,(V_{out} - |V_{THP}|)^2$。其中 $|V_{THP}| = 0.8 + 0.4(\sqrt{3.8 - V_{out}} - \sqrt{0.8})$ 从 $V_{out}$ = 3 V 时的 0.8 V 上升到 ≈ 1.10 V，此时 PMOS 截止。
- 对 $C_H\,dV_{out}/dt = -(I_N + I_P)$ 进行数值积分：在 ≈ 0.12 ns 时达到 1.1 V，在 ≈ 0.709 ns 时达到 1 mV（若忽略 PMOS 的体效应则为 0.704 ns）。从 1.1 V 往下，衰减过程就是只有 NMOS 的线性区放电。
- 只用 $R_{on,N}$ = 81 Ω 做简单的线性估计，得到 $\tau\ln(3000)$ ≈ 0.65 ns。在整个瞬态过程中使用并联组合 $R_{on,N} \parallel R_{on,P}$ 是错误的，因为在 $V_{in} = 0$ 附近 PMOS 是截止的。

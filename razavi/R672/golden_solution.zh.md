仍为 ≈ 50 Ω。输入阻抗表达式中的每个小信号（small-signal）参数在理想按比例缩小下都（一阶近似地）保持不变。唯一的偏差是体效应不能完全按比例缩小所引起的轻微上升。
- $R_{in} = \dfrac{r_{O1} + r_{O2}}{1 + (g_{m1}+g_{mb1})r_{O1}}$，其中 $r_{O2}$ 是电流源负载的输出电阻（output resistance）。
- $g_m$：不变，因为 $\mu(\alpha C_{ox})(W/L)(V_{GS}-V_{TH})/\alpha = \mu C_{ox}(W/L)(V_{GS}-V_{TH})$。
- $r_O = 1/(\lambda I_D)$：$\lambda = (\Delta L/L)/V_{DS}$ 增大到 α 倍（ΔL 和 L 都缩小 α 倍，而 $V_{DS}$ 减小 α 倍），$I_D$ 减小 α 倍。因此 $r_{O1}$ 和 $r_{O2}$ 都不变。
- $g_{mb} = \eta g_m$，其中 $\eta = C_d/C_{ox} = \gamma/(2\sqrt{2\phi_F + V_{SB}})$。在理想理论中，耗尽层电容和 $C_{ox}$ 都增大到 α 倍，因此 η 和 $g_{mb}$ 不变，得到 $R_{in}$ = 50 Ω。
- 修正：$\gamma = \sqrt{2q\epsilon_{si}N_{sub}}/C_{ox}$ 减小 √α 倍，$V_{SB}$ 减小 α 倍，但 $2\phi_F$ 不按比例缩小。因此 η 减小的倍数介于 1 与 √α 之间，$g_{mb}$ 略有下降，$R_{in}$ 略高于 50 Ω：高出百分之几，例如在 α = 2、$g_{mb} \approx 0.2g_m$ 时为 ≈ 52–53 Ω。

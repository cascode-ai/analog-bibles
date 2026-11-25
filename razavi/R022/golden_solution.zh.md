对称 NMOS 的输出端被电阻拉到 2 V 以下，因此输出端是源极，栅极和漏极均为 2 V。取 $\lambda=0$，且忽略结电流时，

$$\frac{V_{out}}{R_1}=\frac{\beta}{2}[2\,\mathrm V-V_{out}-V_{TH}(V_{out}-V_{in})]^2,$$

$$V_{TH}(V_{SB})=0.7\,\mathrm V+\gamma[\sqrt{0.9\,\mathrm V+V_{SB}}-\sqrt{0.9\,\mathrm V}],\quad\beta=\mu_n C_{ox}W/L.$$

取过驱动为正的根；因 $V_{DS}=V_{GS}$，该导通分支处于饱和区。抬高衬底降低阈值，使 $V_{out}$ 上升，斜率为 $g_{mb}/(g_m+g_{mb}+1/R_1)$，介于 0 与 1 之间。初始输出取决于 $\beta R_1$：$10\,\mathrm{V^{-1}}$ 时为 0.758 V，$100\,\mathrm{V^{-1}}$ 时为 0.972 V，轻载极限为 1.092 V。

当 $V_{in}>V_{out}$ 时源体结正偏。该结及随后衬底与 2 V 端之间的结电流需要额外参数；题给数据不能唯一确定到 $V_{in}=3$ V 的后续曲线，也不能推出固定 0.7 V 钳位。

![答案曲线：transfer](/q/R022/solution-transfer.zh.svg)

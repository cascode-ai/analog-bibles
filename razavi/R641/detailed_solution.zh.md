# 详细步骤 - R641

**思路。** 全部 $I_T$ 都被导向 $M_1$–$M_2$ 时，交叉耦合对截止，每级就是一个普通的电阻负载差分对（differential pair），在其输出端有一个主极点。三级环形振荡器只有在每级低频增益至少为 2 时才会振荡，因此计算该偏置下的 $g_{m1,2}$，并求解 $g_{m1,2}R \ge 2$。

### 第 1 步 — $M_1$ 和 $M_2$ 的跨导（transconductance）

$M_6$ 截止时 $I_1 = 0$：$M_3$–$M_4$ 不流过电流，$g_m = 0$，从小信号电路中消失，且 $I_{SS} = I_T = 1$ mA。在振荡边缘摆幅极小，因此每个输入晶体管流过一半的尾电流（tail current）：

$$I_{D1} = I_{D2} = \frac{I_T}{2} = 0.5\ \mathrm{mA}.$$

取 $(W/L)_{1,2} = 50/0.5 = 100$：

$$g_{m1,2} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_D} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

等价地，$g_{m1,2} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_T}$。过驱动电压（overdrive voltage）为 $V_{ov} = 2I_D/g_m = 1\ \mathrm{mA}/3.66\ \mathrm{mS} = 0.27$ V。

### 第 2 步 — 单级的小信号模型（small-signal model）

对于差分信号，P 是虚地（virtual ground），因此每一侧都是一个驱动 $R$ 和输出节点电容 $C$（下一级的栅极电容加上结电容）的共源级（common-source stage）。$\lambda = 0$ 时：

$$\frac{v_{out}}{v_{in}} = -\frac{g_{m1,2}R}{1 + sRC} = -\frac{A_0}{1 + s/\omega_0}, \qquad A_0 = g_{m1,2}R, \qquad \omega_0 = \frac{1}{RC}.$$

### 第 3 步 — 三级环形振荡器的振荡条件

三个相同的级给出

$$H(s) = -\frac{A_0^3}{(1 + s/\omega_0)^3}.$$

三次反相在直流时提供 180°，因此极点必须再提供 180°，每个 60°：

$$\tan^{-1}\frac{\omega_{osc}}{\omega_0} = 60^\circ \quad\Longrightarrow\quad \omega_{osc} = \sqrt3\,\omega_0 .$$

此时每级的增益为 $A_0/\sqrt{1 + 3} = A_0/2$，因此环路增益为 $A_0^3/8$，且

$$\frac{A_0^3}{8} \ge 1 \quad\Longrightarrow\quad A_0 \ge 2 .$$

$C$ 从条件中消去；它只决定频率。

### 第 4 步 — 最小 $R$

$$g_{m1,2}R \ge 2 \quad\Longrightarrow\quad R \ge \frac{2}{g_{m1,2}} = \frac{2}{3.66\times10^{-3}\ \mathrm{S}} = 546\ \Omega .$$

当 $R = 546\ \Omega$ 时，$\sqrt3\,\omega_0$ 处的环路增益恰好为 1（临界值）；实际中 $R$ 要取得略大一些，使振荡能够起振并增长。

| $R$ | $A_0 = g_{m1,2}R$ | $A_0^3/8$ | 行为 |
|---|---|---|---|
| 400 Ω | 1.46 | 0.39 | 不振荡 |
| 546 Ω | 2.00 | 1.00 | 处于振荡边缘 |
| 700 Ω | 2.56 | 2.10 | 振荡 |

### 结果

全部 $I_T$ 流过 $M_1$–$M_2$（每管 0.5 mA）时，$g_{m1,2} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_T} = 3.66$ mS。三级环形振荡器要求每级低频增益至少为 2，因此

$$R_{min} = \frac{2}{g_{m1,2}} \approx 546\ \Omega .$$

**常见错误。** 要求每级增益为 1（或 $\sqrt2$），得到 273 Ω（或 386 Ω）。在三个极点提供 180° 相移的频率处，每个极点都已使级增益减半。

**常见错误。** 按一个晶体管流过全部 1 mA 来计算 $g_m$，$g_m = \sqrt{2\mu_nC_{ox}(W/L)(1\ \mathrm{mA})} = 5.18$ mS，得到 386 Ω。平衡时尾电流平均分配，每个器件 0.5 mA。

**常见错误。** 用某个假设的尺寸把交叉耦合对计入。在这种情况下 $M_3$–$M_4$ 不流过电流，其跨导为零。

# 详细步骤 - R635

**思路。** **起振：** 在振荡边缘摆幅极小，因此差分对处于平衡，每个晶体管的电流为 $I_{SS}/2$；环路由两个反相的调谐级构成，每级在谐振时的增益为 $g_mR_P$，振荡要求 $g_mR_P \ge 1$。**线性区极限：** 在稳态下，差分对把全部尾电流（tail current）来回切换，因此每个谐振回路都由方波电流驱动，其基波决定电压幅度。由于交叉耦合，一个漏极恰好在其栅极最高时达到最低，而饱和条件把这一差值限制在 $V_{TH}$ 以内。

### 第 1 步 — 平衡时的小信号跨导（transconductance）

把 $M_1$ 和 $M_2$ 的公共源极节点记为 P；$R_P$ 为每个谐振回路在谐振时的电阻，$\omega_0 = 1/\sqrt{L_PC_P}$。在振荡边缘，每个晶体管的电流为 $I_{D1} = I_{D2} = I_{SS}/2$，因此

$$g_m = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}\frac{I_{SS}}{2}} = \sqrt{\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_{SS}} .$$

对于差分信号，P 是虚地（virtual ground），因此每个晶体管都是源极接地的共源级（common-source stage），体效应不改变小信号增益。

### 第 2 步 — 起振条件：$g_mR_P \ge 1$

在 $M_1$ 的栅极处断开环路，并在 $\omega_0$ 处加一个小信号 $v_t$，此时每个谐振回路就是 $R_P$。依次在 X 和 Y 应用 KCL（$M_2$ 的栅极接 X）：

$$v_X = -g_mR_P\,v_t, \qquad v_Y = -g_mR_P\,v_X = (g_mR_P)^2\,v_t .$$

$v_Y$ 返回到 $M_1$ 的栅极，因此谐振时的环路增益（loop gain）为 $(g_mR_P)^2$，相位为零（两次反相），满足巴克豪森判据（Barkhausen criteria）中的相位条件。幅值条件要求

$$(g_mR_P)^2 \ge 1 \quad\Longrightarrow\quad g_mR_P \ge 1 .$$

等价地说，交叉耦合对在 X 与 Y 之间呈现 $-2/g_m$，与谐振回路的 $2R_P$ 相并联，振荡要求 $2/g_m \le 2R_P$。

### 第 3 步 — 最小尾电流

代入第 1 步的 $g_m$ 并两边平方：

$$\sqrt{\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_{SS}}\;R_P \ge 1 \quad\Longrightarrow\quad \mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_{SS}R_P^2 \ge 1 ,$$

$$I_{SS,min} = \frac{1}{\mu_nC_{ox}(W/L)_{1,2}R_P^2} = \frac{1}{(134\ \mu\mathrm{A/V^2})(W/L)_{1,2}R_P^2} = \frac{7.46\times10^3\ \mathrm{A\,\Omega^2}}{(W/L)_{1,2}R_P^2}.$$

### 第 4 步 — 差分对完全切换时的振荡幅度

超过起振条件后，幅度不断增长，直到差分对每半个周期都切换全部尾电流，因此每个漏极电流近似为在 0 与 $I_{SS}$ 之间变化的方波：

$$I_{D1}(t) \approx \frac{I_{SS}}{2} + \frac{2I_{SS}}{\pi}\cos\omega_0t + (\text{odd harmonics}),$$

这是因为峰峰值为 $I_{SS}$ 的方波，其基波为 $\tfrac4\pi\cdot\tfrac{I_{SS}}{2} = \tfrac{2}{\pi}I_{SS}$。直流部分流过 $L_P$ 而没有压降（漏极以 $V_{DD}$ 为中心），基波看到的是 $R_P$，谐波看到的谐振回路阻抗则小得多，可以忽略。设单端幅度为 $A$，则

$$V_X(t) \approx V_{DD} - A\cos\omega_0t, \qquad V_Y(t) \approx V_{DD} + A\cos\omega_0t, \qquad A \approx \frac{2}{\pi}I_{SS}R_P ,$$

差分幅度为 $2A = (4/\pi)I_{SS}R_P$。

### 第 5 步 — $M_1$ 不进入线性区的条件

$M_1$ 的**栅极接 Y**，**漏极接 X**，因此它保持饱和的条件为

$$V_{DS1} \ge V_{GS1} - V_{TH} \quad\Longleftrightarrow\quad V_X - V_P \ge V_Y - V_P - V_{TH} \quad\Longleftrightarrow\quad V_Y - V_X \le V_{TH} .$$

最坏的时刻是 $M_1$ 导通最强时：其栅极电压最高，$V_Y = V_{DD} + A$，而漏极电压最低，$V_X = V_{DD} - A$，因此 $V_Y - V_X = 2A$。于是

$$2A \le V_{TH} \quad\Longrightarrow\quad \frac{4}{\pi}I_{SS}R_P \le V_{TH} \quad\Longrightarrow\quad I_{SS} \le \frac{\pi V_{TH}}{4R_P} ,$$

由对称性，半个周期后 $M_2$ 也满足同样的条件。

### 第 6 步 — 阈值电压的数值

**不计体效应时**，$V_{TH} = V_{TH0} = 0.7$ V：

$$I_{SS,max} \approx \frac{\pi(0.7\ \mathrm{V})}{4R_P} = \frac{0.55\ \mathrm{V}}{R_P}.$$

**计入体效应时。** 衬底接地，栅极以 $V_{DD} = 3$ V 为中心，因此源极位于 $V_P \approx V_{DD} - V_{GS}$，过驱动电压（overdrive voltage）较小时约为 2 V。取 $V_{SB} \approx 2$ V：

$$
\begin{aligned}
V_{TH} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right)\\
&= 0.7 + 0.45\left(\sqrt{0.9 + 2} - \sqrt{0.9}\right)\ \mathrm{V}\\
&= 0.7 + 0.45\,(1.703 - 0.949)\ \mathrm{V} = 0.7 + 0.34\ \mathrm{V} \approx 1.04\ \mathrm{V}.
\end{aligned}
$$

（一致性检查：$V_P = 3 - 1.04 \approx 1.96$ V，接近假设的 2 V。）于是

$$I_{SS,max} \approx \frac{\pi(1.04\ \mathrm{V})}{4R_P} \approx \frac{0.8\ \mathrm{V}}{R_P}.$$

阈值电压较高时，漏极降到比栅极低一个阈值电压之前允许的摆幅也就大一些。

### 第 7 步 — 说明与示例

- **设计窗口**要求 $I_{SS,min} < I_{SS,max}$，即 $(W/L)_{1,2}R_P > 4/(\pi V_{TH}\mu_nC_{ox})$，$V_{TH} = 0.7$ V 时约为 13.6 kΩ。例如，取 $(W/L)_{1,2} = 100$，$R_P = 500\ \Omega$：$I_{SS,min} = 7.46\times10^3/(100\times500^2) = 0.30$ mA，$I_{SS,max} \approx 0.55/500 = 1.1$ mA（计入体效应时约为 1.6 mA）。
- **精度。** 幅度 $(2/\pi)I_{SS}R_P$ 假设差分对完全切换（差分摆幅远大于 $\sqrt2\,(V_{GS} - V_{TH})_{eq}$）；不完全切换时摆幅更小，因此这一上限是偏安全的。若较粗略地把单端峰值摆幅取为 $I_{SS}R_P$，则得到 $I_{SS} \le V_{TH}/(2R_P)$。

### 结果

**最小值（起振）：** 平衡时 $g_m = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_{SS}}$，谐振时的环路增益为 $(g_mR_P)^2 \ge 1$，因此

$$I_{SS,min} = \frac{1}{\mu_nC_{ox}(W/L)_{1,2}R_P^2} \approx \frac{7.46\times10^3\ \mathrm{A\,\Omega^2}}{(W/L)_{1,2}R_P^2}.$$

**最大值（不进入线性区）：** 完全切换时，每个漏极在 $V_{DD}$ 附近的摆幅为 $A \approx (2/\pi)I_{SS}R_P$，而 $M_1$ 只有在 $V_Y - V_X = 2A \le V_{TH}$ 时才保持饱和：

$$I_{SS,max} \approx \frac{\pi V_{TH}}{4R_P} \approx \frac{0.55\ \mathrm{V}}{R_P}\ (V_{TH} = 0.7\ \mathrm{V}),\quad\text{or}\quad \approx \frac{0.8\ \mathrm{V}}{R_P}\ \text{with the body effect}\ (V_{TH} \approx 1.04\ \mathrm{V}).$$

**常见错误。** 套用其他振荡器的起振条件，例如三级环形振荡器（ring oscillator）的 $g_mR_P \ge 2$。交叉耦合对是两个反相级，谐振时相移为零，因此 $(g_mR_P)^2 = 1$ 就足够了。

**常见错误。** 按一个晶体管承载全部尾电流来计算 $g_m$，这会使最小电流只有正确值的一半。在振荡边缘，差分对处于平衡，每个器件的电流为 $I_{SS}/2$。

**常见错误。** 检查线性区条件时把栅极看作固定在 $V_{DD}$，即只要求 $A \le V_{TH}$。$M_1$ 的栅极由 Y 驱动，恰好在 X 下降 $A$ 时上升 $A$，因此栅漏电压差会达到 $2A$。

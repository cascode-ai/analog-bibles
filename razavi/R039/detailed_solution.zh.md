# 详细步骤 - R039

**思路。** 用电流 $I_{in}$ 驱动饱和 MOSFET 小信号模型的栅极，使源极、漏极和衬底保持为交流地，求出漏极电流 $I_{out}$，再求 $|I_{out}/I_{in}| = 1$ 时的频率。

### 第 1 步 — 测试电路以及流过信号电流的元件

栅极由小信号电流 $I_{in}$ 驱动；源极、漏极和衬底都接交流地，输出为漏极电流 $I_{out}$。模型包含 $g_mV_{gs}$、$g_{mb}V_{bs}$、$r_O$、$C_{GS}$、$C_{GD}$、$C_{SB}$ 和 $C_{DB}$；$C_{GB}$ 被忽略，因为在饱和区沟道把衬底与栅极屏蔽开。图中节点 0 是源极和衬底共用的交流地，漏极节点 `d` 经 0 V 电压源 `VD` 回到地，该电压源中的电流就是 $I_{out}$。

<!-- diagram: diagram-01.cir -->

由于 $V_s = V_d = V_b = 0$，元件 $C_{SB}$、$C_{DB}$ 和 $r_O$ 两端的电压为零，且 $g_{mb}V_{bs} = 0$，因此它们都不流过信号电流。这就是结电容不出现在 $f_T$ 中的原因。只剩下 $C_{GS}$、$C_{GD}$ 和 $g_mV_{gs}$，而栅极是唯一电压未知的节点。

### 第 2 步 — 栅极的 KCL：求 $V_{gs}$

由于 $V_s = V_d = 0$，$C_{GD}$ 两端的电压也是 $V_{gs}$，它在栅极处相当于第二个接地电容，与 $C_{GS}$ 并联。在栅极列 KCL：

$$I_{in} = j\omega C_{GS}V_{gs} + j\omega C_{GD}V_{gs} = j\omega\,(C_{GS} + C_{GD})\,V_{gs} \quad\Longrightarrow\quad V_{gs} = \frac{I_{in}}{j\omega\,(C_{GS} + C_{GD})} .$$

### 第 3 步 — 漏极的 KCL：求 $I_{out}$

在漏极，$I_{out}$（来自交流地连接）和 $C_{GD}$ 中的电流 $j\omega C_{GD}V_{gs}$ 流入，$g_mV_{gs}$ 流出并流向源极：

$$I_{out} + j\omega C_{GD}V_{gs} = g_mV_{gs} \quad\Longrightarrow\quad I_{out} = (g_m - j\omega C_{GD})\,V_{gs} .$$

第二项是经 $C_{GD}$ 从栅极流到漏极的前馈电流。在 $\omega = \omega_T \approx g_m/(C_{GS} + C_{GD})$ 处，它的大小为

$$\omega_TC_{GD} \approx g_m\,\frac{C_{GD}}{C_{GS} + C_{GD}} \ll g_m \qquad (C_{GD} \ll C_{GS}),$$

并且它与 $g_mV_{gs}$ 的相位相差 $90^\circ$，因此对 $|I_{out}|$ 的影响更小。采用这一标准近似（在第 5 步中验证）：

$$I_{out} \approx g_mV_{gs} .$$

### 第 4 步 — 电流增益与单位增益频率（unity-gain frequency）

代入第 2 步求得的 $V_{gs}$：

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})}, \qquad \left|\frac{I_{out}}{I_{in}}\right| = \frac{g_m}{\omega\,(C_{GS} + C_{GD})} .$$

增益按 $1/\omega$ 下降（−20 dB/十倍频程），并在下述频率处等于 1：

$$\omega_T = \frac{g_m}{C_{GS} + C_{GD}}, \qquad f_T = \frac{\omega_T}{2\pi} = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} ,$$

这正是所要证明的结果。

### 第 5 步 — 验证被忽略的前馈项

精确保留 $I_{out} = (g_m - j\omega C_{GD})V_{gs}$：

$$\frac{I_{out}}{I_{in}} = \frac{g_m - j\omega C_{GD}}{j\omega\,(C_{GS} + C_{GD})}, \qquad \left|\frac{I_{out}}{I_{in}}\right|^2 = \frac{g_m^2 + \omega^2C_{GD}^2}{\omega^2\,(C_{GS} + C_{GD})^2} .$$

令其等于 1：

$$
\begin{aligned}
g_m^2 + \omega_T^2C_{GD}^2 &= \omega_T^2\,(C_{GS} + C_{GD})^2\\
g_m^2 &= \omega_T^2\left[(C_{GS} + C_{GD})^2 - C_{GD}^2\right]\\
\omega_T &= \frac{g_m}{\sqrt{(C_{GS} + C_{GD})^2 - C_{GD}^2}} .
\end{aligned}
$$

与第 4 步相比，唯一的变化是根号下的 $C_{GD}^2$ 项。对于典型值 $C_{GD} = 0.2\,C_{GS}$：

$$\frac{C_{GD}^2}{(C_{GS} + C_{GD})^2} = \frac{0.04}{1.44} = 0.028, \qquad \frac{1}{\sqrt{1 - 0.028}} = 1.014,$$

因此精确的 $f_T$ 只比 $g_m/[2\pi(C_{GS} + C_{GD})]$ 高约 1.4 %，忽略前馈电流是完全合理的。

### 结果

当栅极由电流驱动，而源极、漏极和衬底都接交流地时，结电容、$r_O$ 和 $g_{mb}$ 都不流过信号电流，$I_{in}$ 全部用于给 $C_{GS} + C_{GD}$ 充电，且 $I_{out} \approx g_mV_{gs}$：

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})} \quad\Longrightarrow\quad f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} .$$

仅有的近似是饱和区中 $C_{GB} \approx 0$，以及忽略了很小的前馈电流 $j\omega C_{GD}V_{gs}$（影响约为 1 %）。

**常见错误。** 把 $C_{DB}$ 或 $C_{SB}$ 加到分母中。在 $f_T$ 测试中，每个结电容的两端都处于交流地，因此其中没有信号电流流过；只有在漏极电压会变化的实际电路中，它们才起作用。

**常见错误。** 只用 $C_{GS}$。漏极接交流地时，从栅极看进去 $C_{GD}$ 与 $C_{GS}$ 并联，输入电流必须同时给两者充电。

**常见错误。** 用电压增益来“证明”这一结果，例如用带负载的共源级（common-source stage）的电压增益。$f_T$ 是由漏极接交流地时的**电流**增益定义的；电压增益取决于负载，得不到这个公式。

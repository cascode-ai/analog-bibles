# 详细步骤 - R485

**思路。** 根据偏置点求出节点 X（$M_2$ 的高阻漏极）和节点 Y（源极跟随器的输出端）的对地电阻，分别乘以各自的电容即得极点。设低频增益为 $A_0$，单位增益反馈下的环路增益（loop gain）为 $A_0/[(1 + s/\omega_X)(1 + s/\omega_Y)]$；求出其幅值为 1 的频率，并读出该处的相位裕度。

### 第 1 步 — 反馈极性与小信号参数

把 $M_1$ 和 $M_2$ 的公共源极节点记为 P。抬高 $M_2$ 的栅极电压会使其漏极电流相对于 $M_3$ 的固定电流增大，于是 X 和跟随器输出 Y 都下降：$M_2$ 的栅极是**反相**输入端，把 $V_{out}$（节点 Y）接到它上面就构成 $\beta = 1$ 的负反馈。

$I_{D1} = I_{D2} = I_{D3} = I_{SS}/2 = 0.25$ mA，$I_{D4} = I_1 = 0.5$ mA，所有器件的 $W/L = 50/0.5 = 100$：

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = \sqrt{6.70\times10^{-6}}\ \mathrm{A/V} = 2.59\ \mathrm{mS},\\
g_{m4} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.
\end{aligned}
$$

由 $r_O = 1/(\lambda I_D)$：

$$
\begin{aligned}
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega.
\end{aligned}
$$

### 第 2 步 — 节点 X 的电阻

两个输入都接交流地时，X 向上看到 $r_{O3}$，向下看到 $M_2$ 的漏极。从 P 看去，$M_1$（栅极和漏极都接交流地）相当于一个二极管连接（diode-connected）的器件，$R_S = (1/g_{m1}) \parallel r_{O1} = r_{O1}/(1 + g_{m1}r_{O1})$；理想的尾电流源对此没有影响。注入 X 的测试电流 $I_t$ 经 $M_2$ 流到 P，再经 $R_S$ 流到地。

<!-- diagram: diagram-01.cir -->

$V_P = I_tR_S$，$V_{GS2} = 0 - V_P = -I_tR_S$，因此

$$
\begin{aligned}
I_t &= g_{m2}V_{GS2} + \frac{V_X - V_P}{r_{O2}} = -g_{m2}I_tR_S + \frac{V_X - I_tR_S}{r_{O2}}\\
V_X &= I_t\left[r_{O2} + (1 + g_{m2}r_{O2})R_S\right].
\end{aligned}
$$

对于相同的器件，$(1 + g_{m2}r_{O2})R_S = r_{O1} = r_{O2}$，因此

$$R_{down} = r_{O2} + r_{O2} = 2r_{O2} = 80\ \mathrm{k}\Omega ,$$

$$R_X = R_{down} \parallel r_{O3} = \frac{80\times20}{80 + 20}\ \mathrm{k}\Omega = 16\ \mathrm{k}\Omega .$$

### 第 3 步 — 节点 Y 的电阻与增益

**节点 Y** 是跟随器 $M_4$ 的源极，偏置电流源 $I_1$ 为理想电流源：

$$R_Y = \frac{1}{g_{m4}} \parallel r_{O4} = 273\ \Omega \parallel 20\ \mathrm{k}\Omega = \frac{273\times20\,000}{20\,273}\ \Omega = 269.5\ \Omega .$$

**第一级跨导（transconductance）。** 把 X 对交流地短路时，差分对是对称的，P 为虚地（virtual ground），$M_2$ 的漏极电流变化量为 $g_{m2}V_{in}/2$：

$$G_m = \frac{g_{m2}}{2} = \frac{2.59\ \mathrm{mS}}{2} = 1.294\ \mathrm{mS}.$$

（精确地说，此处带源极负反馈的器件给出 $G_m = g_{m2}/[1 + (g_{m2} + 1/r_{O2})R_S] = g_{m2}/2$。）

**增益：**

$$
\begin{aligned}
A_1 &= G_mR_X = (1.294\ \mathrm{mS})(16\ \mathrm{k}\Omega) = 20.7,\\
A_{v4} &= \frac{g_{m4}r_{O4}}{1 + g_{m4}r_{O4}} = \frac{(3.66\ \mathrm{mS})(20\ \mathrm{k}\Omega)}{1 + 73.2} = \frac{73.2}{74.2} = 0.987,\\
A_0 &= A_1A_{v4} = 20.7\times0.987 = 20.4 .
\end{aligned}
$$

### 第 4 步 — 两个极点

$$
\begin{aligned}
\omega_X &= \frac{1}{R_XC_X} = \frac{1}{(16\ \mathrm{k}\Omega)(0.5\ \mathrm{pF})} = \frac{1}{8\ \mathrm{ns}} = 1.25\times10^8\ \mathrm{rad/s}\quad(\approx 20\ \mathrm{MHz}),\\
\omega_Y &= \frac{1}{R_YC_Y} = \frac{1}{(269.5\ \Omega)(0.5\ \mathrm{pF})} = \frac{1}{0.135\ \mathrm{ns}} = 7.42\times10^9\ \mathrm{rad/s}\quad(\approx 1.18\ \mathrm{GHz}).
\end{aligned}
$$

X 处是主极点（dominant pole）；Y 处的极点约高 60 倍。

### 第 5 步 — 单位增益反馈下的增益交点（gain crossover）

当 $\beta = 1$ 时，

$$H(j\omega) = \frac{A_0}{(1 + j\omega/\omega_X)(1 + j\omega/\omega_Y)}, \qquad |H(j\omega_u)| = 1 .$$

由于 $\omega_u \gg \omega_X$，$\sqrt{1 + (\omega/\omega_X)^2} \approx \omega/\omega_X$，交点位于下式附近：

$$\mathrm{GBW} = A_0\,\omega_X = 20.4\times1.25\times10^8 = 2.55\times10^9\ \mathrm{rad/s}.$$

Y 处的极点使幅值再除以 $\sqrt{1 + (\omega_u/\omega_Y)^2}$，因此 $\omega_u \approx \mathrm{GBW}/\sqrt{1 + (\omega_u/\omega_Y)^2}$。从 $\omega_u = 2.55\times10^9$ 开始迭代：

$$\omega_u \approx \frac{2.55\times10^9}{\sqrt{1 + (2.55/7.42)^2}} = \frac{2.55\times10^9}{1.058} = 2.41\times10^9\ \mathrm{rad/s},$$

再迭代一次（使用 X 极点的精确因子）即收敛到 $\omega_u = 2.42\times10^9$ rad/s。验证：

$$|H| = \frac{20.4}{\sqrt{1 + 19.39^2}\,\sqrt{1 + 0.327^2}} = \frac{20.4}{19.42\times1.052} = \frac{20.4}{20.43} = 1.00 .\ \checkmark$$

### 第 6 步 — 相位裕度

$$
\begin{aligned}
\tan^{-1}\frac{\omega_u}{\omega_X} &= \tan^{-1}\frac{2.42\times10^9}{1.25\times10^8} = \tan^{-1}(19.4) = 87.0°,\\
\tan^{-1}\frac{\omega_u}{\omega_Y} &= \tan^{-1}\frac{2.42\times10^9}{7.42\times10^9} = \tan^{-1}(0.327) = 18.1°,\\
\angle H(j\omega_u) &= -(87.0° + 18.1°) = -105.1°,\\
\mathrm{PM} &= 180° - 105.1° = 74.9° \approx 75° .
\end{aligned}
$$

由于 $A_0$ 只有约 20，主极点只贡献 87°，而不是完整的 90°。若采用较粗略的 $R_X \approx r_{O2} \parallel r_{O3} = 13.3$ kΩ，则 $\omega_X = 1.5\times10^8$ rad/s，$A_0 = 17$，但 GBW（从而 $\omega_u$）几乎不变，PM ≈ 75.5°：裕度主要由 $\omega_Y/\mathrm{GBW}$ 决定。

### 结果

- $\omega_X = 1/(R_XC_X) \approx 1.25\times10^8$ rad/s（≈ 20 MHz），其中 $R_X = 2r_{O2} \parallel r_{O3} = 16$ kΩ。
- $\omega_Y = 1/(R_YC_Y) \approx 7.4\times10^9$ rad/s（≈ 1.18 GHz），其中 $R_Y = (1/g_{m4}) \parallel r_{O4} \approx 270\ \Omega$。
- $A_0 = (g_m/2)R_X\,A_{v4} \approx 20.4$；单位增益交点位于 $\omega_u \approx 2.42\times10^9$ rad/s。
- **相位裕度 ≈ 75°。**

**常见错误。** 第一级取 $G_m = g_m$。只有一半的差分输入电压加在 $M_2$ 的栅源之间，因此 $G_m = g_m/2$；若用 $g_m$，$A_0$ 和 GBW 都会加倍，交点被推向 $\omega_Y$，得到约 61° 的 PM。

**常见错误。** 取 $R_Y = r_{O4}$（20 kΩ）而不是 $(1/g_{m4}) \parallel r_{O4}$，这会把 Y 处的极点放到 $10^8$ rad/s 附近。跟随器的源极是低阻节点，约为 $1/g_{m4}$；正如 X 是高阻节点（几十 kΩ），而不是 $1/g_m$。

**常见错误。** 弄错反馈的符号。$M_2$ 的栅极是反相输入端（抬高它会使 X 和 Y 下降），因此把 $V_{out}$ 接到它上面构成 $\beta = 1$ 的负反馈。

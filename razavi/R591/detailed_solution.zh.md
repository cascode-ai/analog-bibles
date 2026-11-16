# 详细步骤 - R591

**思路。** 采用差分半边电路。放大模式下 $C_1$ 的左极板处于恒定的 $V_{CM}$，因此就建立响应而言，$C_1$ 是一个从栅极接到交流地的电容，而 $C_3$ 把输出反馈到栅极。把晶体管表示为 $g_{m1}$ 加上输出电阻（output resistance）$R_0$，电路只有一个极点；令输入为零，在栅极和输出节点列基尔霍夫电流定律（KCL）方程即可求出。

### 第 1 步 — 半边电路及其元件

对于差分信号，尾节点 P 是交流地，因此每一侧都是一个共源级（common-source stage）。把 $M_1$ 的栅极记为 X。放大模式下：

- X 经 $C_1 = 2$ pF 接到交流地（其左极板保持在 $V_{CM}$；从 $V_{in}$ 到 $V_{CM}$ 的阶跃只是触发了暂态过程），并经 $C_3 = 0.5$ pF 接到输出。
- 输出端有 $M_1$ 吸取到地的电流 $g_{m1}v_X$、接地的 $R_0 = r_{O1}\parallel r_{O3}$ 以及 $C_3$ 的另一端，没有其他电容。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 小信号参数

每个晶体管的电流为 $I_D = I_{SS}/2 = 0.5$ mA，且 $W/L = 50/0.5 = 100$：

$$
\begin{aligned}
G_m = g_{m1} &= \sqrt{2\mu_nC_{ox}(W/L)I_D} = \sqrt{2(134\times10^{-6})(100)(0.5\times10^{-3})}\ \mathrm{S} = 3.66\ \mathrm{mS},\\
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1)(0.5\times10^{-3})}\ \Omega = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2)(0.5\times10^{-3})}\ \Omega = 10\ \mathrm{k}\Omega,\\
R_0 &= r_{O1}\parallel r_{O3} = \frac{20\times10}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega,\qquad \frac{1}{R_0} = 0.150\ \mathrm{mS}.
\end{aligned}
$$

开环增益（open-loop gain）为 $G_mR_0 = 3.66\ \mathrm{mS}\times6.67\ \mathrm{k}\Omega = 24.4$。

### 第 3 步 — 自然响应的节点方程

令输入为零，在 X 点应用 KCL，得

$$sC_1V_X + sC_3(V_X - V_{out}) = 0\quad\Longrightarrow\quad V_X = \frac{C_3}{C_1 + C_3}\,V_{out} = \beta\,V_{out},$$

其中 $\beta = C_3/(C_1 + C_3)$ 是反馈系数（feedback factor）。在输出端应用 KCL（经 $M_1$、$R_0$ 和 $C_3$ 流出的电流）：

$$G_mV_X + \frac{V_{out}}{R_0} + sC_3(V_{out} - V_X) = 0 .$$

### 第 4 步 — 求极点

代入 $V_X = \beta V_{out}$：

$$
\begin{aligned}
G_m\beta V_{out} + \frac{V_{out}}{R_0} + sC_3(1 - \beta)V_{out} &= 0\\
s\,C_3(1 - \beta) &= -\left(G_m\beta + \frac{1}{R_0}\right).
\end{aligned}
$$

由于 $C_3(1 - \beta) = C_3\cdot\dfrac{C_1}{C_1 + C_3} = \dfrac{C_1C_3}{C_1 + C_3}$，即 $C_1$ 与 $C_3$ 的串联值，单极点位于 $s = -1/\tau$，其中

$$\tau = \frac{C_1C_3/(C_1 + C_3)}{1/R_0 + G_mC_3/(C_1 + C_3)} .$$

输出节点看到的是 $C_3$ 与 $C_1$ 的串联，以及 $R_0$ 与 $1/(G_m\beta)$ 的并联：通过反馈，$v_{out}$ 使栅极电压为 $\beta v_{out}$，晶体管随之吸取电流 $G_m\beta v_{out}$。

### 第 5 步 — 数值计算

$$
\begin{aligned}
\beta &= \frac{0.5}{2 + 0.5} = 0.2,\\
\frac{C_1C_3}{C_1 + C_3} &= \frac{(2)(0.5)}{2.5}\ \mathrm{pF} = 0.4\ \mathrm{pF},\\
G_m\beta &= 3.66\ \mathrm{mS}\times0.2 = 0.732\ \mathrm{mS},\\
\frac{1}{R_0} + G_m\beta &= 0.150 + 0.732 = 0.882\ \mathrm{mS},\\
\tau &= \frac{0.4\times10^{-12}\ \mathrm{F}}{0.882\times10^{-3}\ \mathrm{S}} = 0.453\times10^{-9}\ \mathrm{s} = 0.45\ \mathrm{ns}.
\end{aligned}
$$

### 第 6 步 — 与大环路增益近似的比较

若 $G_m\beta \gg 1/R_0$（环路增益 $G_mR_0\beta \gg 1$），$1/R_0$ 项可以略去：

$$\tau \approx \frac{C_1C_3/(C_1 + C_3)}{G_mC_3/(C_1 + C_3)} = \frac{C_1}{G_m} = \frac{2\ \mathrm{pF}}{3.66\ \mathrm{mS}} = 0.546\ \mathrm{ns}.$$

而这里环路增益只有 $G_mR_0\beta = 24.4\times0.2 = 4.9$，因此 $1/R_0 = 0.15$ mS 约为 $G_m\beta = 0.73$ mS 的 20 %，不能忽略：它使响应加快约 20 %（0.45 ns 而不是 0.55 ns）。代价是很大的静态误差：输出最终比标称增益 $C_1/C_3 = 4$ 所对应的值低约 $1/(1 + 4.9) \approx 17\ \%$。

### 结果

$$\tau = \frac{C_1C_3/(C_1 + C_3)}{1/(r_{O1}\parallel r_{O3}) + g_{m1}C_3/(C_1 + C_3)} = \frac{0.4\ \mathrm{pF}}{0.15\ \mathrm{mS} + 0.732\ \mathrm{mS}} \approx 0.45\ \mathrm{ns}$$

（若忽略有限的输出电阻，则约为 0.55 ns，即 $C_1/g_{m1}$；但由于环路增益只有约 5，这一近似在此并不好）。

**常见错误。** 用错误的元件构成“RC”：$R_0C_3$（3.3 ns）或 $R_0(C_1 + C_3)$（17 ns）忽略了反馈，而反馈使 $M_1$ 在输出端看起来像一个小电阻 $1/(g_{m1}\beta)$；$C_3/g_{m1}$（0.14 ns）则忽略了只有比例为 $\beta$ 的输出能到达栅极。

**常见错误。** 把 $C_1$ 放在输出端，或者把它的左极板当作浮空。该极板由 $V_{CM}$（交流地）驱动，因此 $C_1$ 是从 X 接到地的，输出端只能经过 $C_3$、以串联的方式看到它。

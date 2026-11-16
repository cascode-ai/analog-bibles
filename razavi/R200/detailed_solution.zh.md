# 详细步骤 - R200

**思路。** PMOS 的栅极接到节点 N，即跨接在两个输出端之间的电阻串 $R_1$–$R_2$ 的中点。对差分信号而言，两个输出等量反向变化，因此 N 不动：它是交流地。于是 $M_3$ 和 $M_4$ 相当于电流源（$r_{O3}$），每个输出端看到的是接到交流地的 $R_1$。由半边电路（half circuit）可得增益；完整的三节点分析可以验证这一结果，并证明 $v_N = 0$。

### 第 1 步 — 半边电路与基尔霍夫电流定律（KCL）

把左输出端（$M_1$、$M_3$ 的漏极）记为 X，右输出端记为 Y，$R_1$ 与 $R_2$ 的连接点（即 PMOS 的栅极）记为 N，$M_1$、$M_2$ 的公共源极节点记为 P。施加 $v_{in1} = +v_d/2$、$v_{in2} = -v_d/2$，其中 $v_d = v_{in1} - v_{in2}$；由对称性 $v_Y = -v_X$，P 是虚地（virtual ground）。栅极不吸取电流，因此 $R_1$ 和 $R_2$ 中的电流相等：

$$\frac{v_X - v_N}{R_1} = \frac{v_N - v_Y}{R_1}\quad\Longrightarrow\quad v_N = \frac{v_X + v_Y}{2} = 0 .$$

因此 $M_3$ 的栅极（N）和源极（$V_{DD}$）都处于交流地，它只呈现 $r_{O3}$；而 $R_1$ 从 X 接到交流地节点 N，因此它整个相当于从 X 接地。节点 X 处有被 $M_1$ 抽走的 $g_{m1}v_d/2$，以及接地的 $r_{O1}$、$r_{O3}$ 和 $R_1$：

<!-- diagram: diagram-01.cir -->

X 点的 KCL：

$$g_{m1}\frac{v_d}{2} + \frac{v_X}{r_{O1}} + \frac{v_X}{r_{O3}} + \frac{v_X}{R_1} = 0 \quad\Longrightarrow\quad v_X = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel R_1\right)\frac{v_d}{2}.$$

由 $v_{out} = v_X - v_Y = 2v_X$ 得：

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel R_1\right).$$

### 第 2 步 — 完整分析（验证 $v_N = 0$）

把 $v_N$ 作为未知量保留。$M_3$ 从漏极流向源极（即流出 X）的电流为 $g_{m3}v_{gs3} + v_{ds3}/r_{O3}$，其中 $v_{gs3} = v_N$，$v_{ds3} = v_X$。令 $v_P = 0$：

- X 点的 KCL：$\;g_{m1}\dfrac{v_d}{2} + \dfrac{v_X}{r_{O1}} + g_{m3}v_N + \dfrac{v_X}{r_{O3}} + \dfrac{v_X - v_N}{R_1} = 0$
- Y 点的 KCL：$\;-g_{m1}\dfrac{v_d}{2} + \dfrac{v_Y}{r_{O1}} + g_{m3}v_N + \dfrac{v_Y}{r_{O3}} + \dfrac{v_Y - v_N}{R_1} = 0$
- N 点的 KCL：$\;\dfrac{v_N - v_X}{R_1} + \dfrac{v_N - v_Y}{R_1} = 0 \;\Rightarrow\; v_N = \dfrac{v_X + v_Y}{2}$

将 X 和 Y 的方程**相加**：

$$(v_X + v_Y)\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{1}{R_1}\right) + 2g_{m3}v_N - \frac{2v_N}{R_1} = 0 ,$$

再利用 $2v_N = v_X + v_Y$：

$$(v_X + v_Y)\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + g_{m3}\right) = 0\quad\Longrightarrow\quad v_X + v_Y = 0,\quad v_N = 0 .$$

用 X 的方程**减去** Y 的方程（$g_{m3}v_N$ 项相互抵消）：

$$
\begin{aligned}
g_{m1}v_d + (v_X - v_Y)\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{1}{R_1}\right) &= 0\\
\frac{v_X - v_Y}{v_d} &= -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{1}{R_1}} ,
\end{aligned}
$$

与第 1 步一致。“相加”所得的方程还表明，对于**共模**（common-mode）信号，负载呈现很大的电导 $g_{m3}$，就像二极管连接（diode-connected）器件一样：电阻串检测输出共模电平（common-mode level）并将其反馈到 PMOS 的栅极，因此负载自己确定输出共模电平，而差模增益由 $R_1$ 决定。

### 第 3 步 — 比较与数值

如果两个输出端之间直接只接一个电阻 $R_1$，每边看到的是 $R_1/2$；这里两个输出端之间接的是 $R_1 + R_2 = 2R_1$，因此每边看到的是 $R_1$。

**数值感受：** 取 $g_{m1} = 1$ mS，$r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$，$R_1 = 10\ \mathrm{k}\Omega$：

$$
\begin{aligned}
r_{O1}\parallel r_{O3}\parallel R_1 &= \frac{1}{\frac{1}{50} + \frac{1}{50} + \frac{1}{10}}\ \mathrm{k}\Omega = \frac{1}{0.14}\ \mathrm{k}\Omega = 7.14\ \mathrm{k}\Omega,\\
A_v &= -(1\ \mathrm{mS})(7.14\ \mathrm{k}\Omega) = -7.1 .
\end{aligned}
$$

### 结果

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel R_1\right).$$

$M_3$、$M_4$ 的栅极接到 $R_1$–$R_2$ 的中点，该点对差分信号而言保持不动（交流地）。因此 $M_3$、$M_4$ 相当于电流源（$r_{O3}$），每个输出端看到的是接到交流地的 $R_1$。

**常见错误。** 把 $M_3$/$M_4$ 当作二极管连接器件，把 $1/g_{m3}$ 计入差分负载。它们的栅极接在 N 点，而 N 对差分信号是固定的，因此 $g_{m3}$ 只对共模起作用。

**常见错误。** 类比于两个输出端之间只接单个电阻的情形，每边取 $R_1/2$。这里 $R_1$ 是从输出端接到虚地节点 N，因此每边的负载是整个 $R_1$。

**常见错误。** 把 $R_1$ 与负载串联，或者漏掉某个 $r_O$。$r_{O1}$、$r_{O3}$ 和 $R_1$ 都是从 X 接到交流地，彼此并联。

# 详细步骤 - R316

**思路。** 对差分信号而言，尾节点是虚地，因此只需分析一个半边电路：$M_1$ 驱动二极管连接的 PMOS 管 $M_3$（节点 X），$M_5$ 以增益 $K = 2$ 镜像 $M_3$ 的电流，再由 $M_5$ 驱动输出端，输出端的负载是实现 $R_D$ 的二极管连接 NFET。由于输入端接理想电压源，$M_1$ 的栅极是交流地，没有输入极点，只剩下 X 和输出端两个节点。先计算偏置、各 $g_m$ 和电容，按每个节点一个极点进行估算，然后精确求解双节点电路，并求出零点。

### 第 1 步 — 偏置电流与跨导（transconductance）

$I_{SS} = 100\ \mu$A 平均分配，因此 $M_1$ 和 $M_3$ 中流过 50 µA。$M_5$ 与 $M_3$ 的 $V_{GS}$ 相同，宽度是其 $K = 2$ 倍，因此流过 $2\times50 = 100\ \mu$A，与之串联的二极管 NFET 也流过同样的电流。

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(50\ \mu\mathrm{A})} = \sqrt{1.34\times10^{-6}} = 1.16\ \mathrm{mS},\\
g_{m3} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(20)(50\ \mu\mathrm{A})} = \sqrt{7.68\times10^{-8}} = 0.277\ \mathrm{mS}\quad(1/g_{m3} = 3.61\ \mathrm{k\Omega}),\\
g_{m5} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(40)(100\ \mu\mathrm{A})} = \sqrt{3.07\times10^{-7}} = 0.554\ \mathrm{mS} = Kg_{m3},\\
g_{mD} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm{A})} = \sqrt{2.68\times10^{-6}} = 1.64\ \mathrm{mS}.
\end{aligned}
$$

不计沟道长度调制时，二极管 NFET 相当于电阻 $1/g_{mD}$：

$$R_D = \frac{1}{g_{mD}} = 611\ \Omega, \qquad g_{m5}R_D = \frac{0.554}{1.64} = 0.339 .$$

### 第 2 步 — 低频增益

$M_1$ 从 X 吸取电流 $g_{m1}v_{in}/2$，而二极管 $M_3$ 在 X 点呈现 $1/g_{m3}$，因此 $v_X = -g_{m1}(v_{in}/2)/g_{m3}$；$M_5$ 把 $v_X$ 转换为流入 $R_D$ 的电流 $-g_{m5}v_X$：

$$v_{out1} = -g_{m5}R_Dv_X = \frac{g_{m5}}{g_{m3}}\,g_{m1}R_D\,\frac{v_{in}}{2} = Kg_{m1}R_D\,\frac{v_{in}}{2}.$$

另一半边电路给出相反的输出，因此差模增益（differential gain）为

$$|A_v| = Kg_{m1}R_D = \frac{2g_{m1}}{g_{mD}} = \frac{2(1.16)}{1.64} = 1.41 .$$

### 第 3 步 — 器件电容

在饱和区（saturation region），$C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$，$C_{GD} = WC_{ov}$；$C_{DB} = WEC_j + 2(W + E)C_{jsw}$，其中 $C_{jsw} = 0.0035\ \mathrm{fF/\mu m}$（NMOS）或 $0.0032\ \mathrm{fF/\mu m}$（PMOS）。

| 器件 | $W$（µm） | $C_{GS}$（fF） | $C_{GD}$（fF） | $C_{DB}$（fF） |
|---|---|---|---|---|
| $M_1$（NMOS） | 50 | $64 + 20 = 84.0$ | 20.0 | $42.0 + 0.36 = 42.4$ |
| $M_3$（PMOS） | 10 | $12.8 + 3 = 15.8$ | 3.0（短路） | $14.1 + 0.07 = 14.2$ |
| $M_5$（PMOS） | 20 | $25.6 + 6 = 31.6$ | 6.0 | $28.2 + 0.14 = 28.3$ |
| 二极管 NFET | 50 | 84.0 | 20.0（短路） | 42.4 |

例如，$C_{GS3} = \tfrac23(10)(0.5)(3.84) + (10)(0.3) = 12.8 + 3.0 = 15.8$ fF，$C_{DB5} = (20)(1.5)(0.94) + 2(21.5)(0.0032) = 28.2 + 0.14 = 28.3$ fF。

### 第 4 步 — 各电容分别位于哪个节点

$V_{DD}$、地、尾节点以及 $M_1$ 的栅极（接理想电压源）都是交流地。

**节点 X**（$M_1$ 的漏极；$M_3$、$M_5$ 的栅极；$M_3$ 的漏极）：$C_{GS3}$、$C_{GS5}$ 和 $C_{DB3}$ 接到 $V_{DD}$，$C_{DB1}$ 接地，$C_{GD1}$ 接到 $M_1$ 的栅极（交流地）；$C_{GD3}$ 被短路；$C_{GD5}$ 跨接在 X 与输出端之间。

$$C_{Xg} = 15.8 + 31.6 + 14.2 + 42.4 + 20.0 = 123.9\ \mathrm{fF}\ \text{(grounded part)}.$$

**输出节点**（$M_5$ 的漏极；二极管 NFET 的栅极和漏极）：$C_{DB5}$ 接到 $V_{DD}$，二极管 NFET 的 $C_{GS,D}$ 和 $C_{DB,D}$ 接地；其 $C_{GD}$ 被短路。

$$C_{Yg} = 28.3 + 84.0 + 42.4 = 154.7\ \mathrm{fF}\ \text{(grounded part)}.$$

### 第 5 步 — 极点估算（每个节点一个）

**节点 X。** 电阻为 $1/g_{m3}$；$C_{GD5}$ 经密勒效应倍增 $1 + g_{m5}R_D = 1.34$ 倍（从 X 到输出端的增益只有 $-0.339$）：

$$C_X = 123.9 + 1.34(6.0) = 132\ \mathrm{fF},\qquad \omega_X = \frac{g_{m3}}{C_X} = \frac{0.277\ \mathrm{mS}}{132\ \mathrm{fF}} = 2.1\times10^{9}\ \mathrm{rad/s}\ \ (0.33\ \mathrm{GHz}).$$

**输出节点。** 电阻为 $R_D = 1/g_{mD}$，$C_{GD5}$ 按一倍计入：

$$C_{out}\approx154.7 + 6.0 = 161\ \mathrm{fF},\qquad \omega_{out} = \frac{g_{mD}}{C_{out}} = \frac{1.64\ \mathrm{mS}}{161\ \mathrm{fF}} = 1.0\times10^{10}\ \mathrm{rad/s}\ \ (1.6\ \mathrm{GHz}).$$

（若在输出端对 $C_{GD5}$ 取约 4 倍的密勒因子，结果也只改变约 10 %；第 6 步将确定准确值。）

X 点的电阻 $1/g_{m3} = 3.6\ \mathrm{k\Omega}$ 很大（这是一个窄而小电流的 PMOS 二极管），而输出端只有 611 Ω，因此 **X 点的电流镜极点是主极点**；由于 $M_5$ 的增益只有 0.34，$C_{GD5}$ 的密勒效应很小。

### 第 6 步 — 双节点电路的精确解

<!-- diagram: diagram-01.cir -->

令 $v_1 = v_{in}/2$，并把跨接的 $C_{GD5}$ 计入各节点的总电容：$C_X = C_{Xg} + C_{GD5} = 129.9$ fF，$C_Y = C_{Yg} + C_{GD5} = 160.7$ fF。对 X 点和输出端列基尔霍夫电流定律（KCL）方程，其中在 X 点 $M_3$ 吸取 $g_{m3}V_X$、$M_1$ 吸取 $g_{m1}v_1$，在输出端 $M_5$ 向 $V_{DD}$ 方向吸取 $g_{m5}V_X$、二极管 NFET 吸取 $g_{mD}V_{out}$：

$$(g_{m3} + C_Xs)V_X - C_{GD5}s\,V_{out} = -g_{m1}v_1 ,$$

$$(g_{m5} - C_{GD5}s)V_X + (g_{mD} + C_Ys)V_{out} = 0 .$$

极点是如下行列式的根：

$$D(s) = (g_{m3} + C_Xs)(g_{mD} + C_Ys) + C_{GD5}s\,(g_{m5} - C_{GD5}s) = as^2 + bs + c,$$

$$
\begin{aligned}
a &= C_XC_Y - C_{GD5}^2 = (129.9)(160.7) - 36\ \mathrm{fF^2} = 2.084\times10^{-26}\ \mathrm{F^2},\\
b &= g_{m3}C_Y + g_{mD}C_X + g_{m5}C_{GD5} = (4.45 + 21.27 + 0.33)\times10^{-17} = 2.606\times10^{-16}\ \mathrm{S\,F},\\
c &= g_{m3}g_{mD} = (0.277\ \mathrm{mS})(1.64\ \mathrm{mS}) = 4.537\times10^{-7}\ \mathrm{S^2}.
\end{aligned}
$$

$$
\begin{aligned}
s_{1,2} &= \frac{-b\pm\sqrt{b^2 - 4ac}}{2a} = \frac{-2.606\times10^{-16}\pm\sqrt{6.790\times10^{-32} - 3.783\times10^{-32}}}{4.169\times10^{-26}}\\
&= \frac{-2.606\times10^{-16}\pm1.734\times10^{-16}}{4.169\times10^{-26}},\\
|s_1| &= 2.09\times10^{9}\ \mathrm{rad/s}\ (0.333\ \mathrm{GHz}), \qquad |s_2| = 1.04\times10^{10}\ \mathrm{rad/s}\ (1.66\ \mathrm{GHz}),
\end{aligned}
$$

与第 5 步的逐节点估算结果非常接近。

### 第 7 步 — 零点

由克拉默法则（Cramer's rule），

$$V_{out} = \frac{g_{m1}v_1\,(g_{m5} - C_{GD5}s)}{D(s)} .$$

**由 $C_{GD5}$ 产生的零点：** 从 X 经 $C_{GD5}$ 的前馈（feedforward）电流在下式处与 $M_5$ 的电流相抵消：

$$s_{z1} = +\frac{g_{m5}}{C_{GD5}} = \frac{0.554\ \mathrm{mS}}{6.0\ \mathrm{fF}} = +9.2\times10^{10}\ \mathrm{rad/s}\ \ (15\ \mathrm{GHz}).$$

**由 $C_{GD1}$ 产生的零点：** $C_{GD1}$ 也把输入前馈到 X，因此注入 X 的驱动电流为 $(g_{m1} - C_{GD1}s)v_1$，而不是 $g_{m1}v_1$：

$$s_{z2} = +\frac{g_{m1}}{C_{GD1}} = \frac{1.16\ \mathrm{mS}}{20\ \mathrm{fF}} = +5.8\times10^{10}\ \mathrm{rad/s}\ \ (9.2\ \mathrm{GHz}).$$

两者都是右半平面零点，远高于两个极点。完整的半边电路传递函数为

$$\frac{V_{out1}}{v_{in}/2} = \frac{(g_{m1} - C_{GD1}s)(g_{m5} - C_{GD5}s)}{(g_{m3} + C_Xs)(g_{mD} + C_Ys) + C_{GD5}s(g_{m5} - C_{GD5}s)},$$

其直流值 $g_{m1}g_{m5}/(g_{m3}g_{mD}) = 1.41$ 与第 2 步一致。

### 结果

- 低频差模增益：$Kg_{m1}R_D = 2g_{m1}/g_{mD}\approx1.41$，其中 $R_D = 1/g_{mD} = 611\ \Omega$。
- **极点：** 电流镜节点 X，$\omega_X\approx g_{m3}/C_X\approx2.1\times10^9$ rad/s（≈ 0.33 GHz），为主极点；输出节点，$\omega_{out}\approx g_{mD}/C_{out}\approx1.0\times10^{10}$ rad/s（≈ 1.6 GHz）。双节点精确解给出 $2.09\times10^9$ rad/s（0.333 GHz）和 $1.04\times10^{10}$ rad/s（1.66 GHz）。
- **零点：** 右半平面零点位于 $g_{m5}/C_{GD5}\approx9.2\times10^{10}$ rad/s（≈ 15 GHz）和 $g_{m1}/C_{GD1}\approx5.8\times10^{10}$ rad/s（≈ 9 GHz）。
- 没有输入极点，因为放大器由理想电压源驱动。

**常见错误。** 加上一个输入极点。栅极由理想电压源驱动时，$C_{GS1}$ 不产生极点，而 $C_{GD1}$ 相当于 X 点的一个接地电容外加一条前馈通路（产生位于 $g_{m1}/C_{GD1}$ 的零点）。

**常见错误。** 使用 $r_O$ 类型的电阻，例如取 NFET 的 $R_D = r_O$，或在电流镜节点取 $r_O$。两个节点的负载都是二极管连接器件，因此它们的电阻分别为 $1/g_{mD} = 611\ \Omega$ 和 $1/g_{m3} = 3.6\ \mathrm{k\Omega}$。

**常见错误。** 把 $C_{GD5}$ 产生的零点放在左半平面。$C_{GD5}$ 把信号从 X 不反相地传到输出端，而 $M_5$ 使其反相，因此二者在 $s = +g_{m5}/C_{GD5}$ 处相互抵消。

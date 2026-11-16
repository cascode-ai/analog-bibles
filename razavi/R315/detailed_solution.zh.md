# 详细步骤 - R315

**思路。** 将输出端对交流地短路，计算电路其余部分注入该短路线的电流，并求出使其为零的 $s$。然后用完整的传递函数验证该零点。

### 第 1 步 — 支路方程

$M_4$（源极接 $V_{DD}$，栅极接 E）把电流 $g_{mP}V_E$ 从输出端送到交流地，即向输出端**注入** $-g_{mP}V_E$。在戴维南支路中，从输出端出发，依次经过 $V_X = g_{mN}r_{ON}V_{in}$ 的“+”端和“−”端，再经过 $R_X = 2r_{ON}$ 到达 E；设 $I_X$ **从输出端流向 E**。沿该支路应用基尔霍夫电压定律（KVL）：

$$V_E = V_{out} - V_X - I_XR_X . \qquad (1)$$

### 第 2 步 — 短路输出端并分析节点 E

当 $V_{out} = 0$ 时，$C_L$ 和 $r_{OP}$ 中没有电流。

<!-- diagram: diagram-01.cir -->

节点 E 对地接有 $1/g_{mP}$ 和 $C_E$（$M_4$ 的栅极不吸取电流），因此

$$Z_E = \frac{1}{g_{mP} + C_Es}, \qquad I_X = \frac{V_E}{Z_E}. \qquad (2)$$

令 $V_{out} = 0$，联立求解式 (1) 和式 (2)：

$$
\begin{aligned}
V_E &= -V_X - R_X\frac{V_E}{Z_E}\\
V_E\left(1 + \frac{R_X}{Z_E}\right) &= -V_X\\
V_E &= -V_X\,\frac{Z_E}{Z_E + R_X},\qquad I_X = \frac{V_E}{Z_E} = -\frac{V_X}{Z_E + R_X}.
\end{aligned}
$$

$V_X$ 驱动串联组合 $R_X + Z_E$，E 点得到 $-V_X$ 经分压后的部分。

### 第 3 步 — 流入短路线的电流

$M_4$ 注入 $-g_{mP}V_E$，支路注入 $-I_X$（$I_X$ 是**流出**输出端的）：

$$
\begin{aligned}
I_{short} &= -g_{mP}V_E - I_X\\
&= g_{mP}V_X\,\frac{Z_E}{Z_E + R_X} + \frac{V_X}{Z_E + R_X}\\
&= V_X\,\frac{g_{mP}Z_E + 1}{Z_E + R_X}.
\end{aligned}
$$

### 第 4 步 — 令短路电流为零

对于 $V_X\ne0$，$I_{short} = 0$ 要求

$$g_{mP}Z_E + 1 = 0\quad\Longleftrightarrow\quad\frac{g_{mP}}{g_{mP} + C_Es} = -1 ,$$

$$
\begin{aligned}
g_{mP} &= -g_{mP} - C_Es\\
C_Es &= -2g_{mP}\\
s_z &= -\frac{2g_{mP}}{C_E}.
\end{aligned}
$$

该零点为负实数：它是一个**左半平面零点**，频率为电流镜极点频率 $\omega_E = g_{mP}/C_E$ 的两倍。

信号经两条相加的通路到达输出端：一条是直接经过该支路的**快通路**，它对 $I_{short}$ 的贡献为 $V_X/(Z_E + R_X)$；另一条是**慢通路**，同一支路电流在 $Z_E$ 上产生 $V_E$，再由 $M_4$ 复制，其贡献是前者的 $g_{mP}Z_E = 1/(1 + s/\omega_E)$ 倍。总和正比于 $1 + \dfrac{1}{1 + s/\omega_E}$，当 $1 + s/\omega_E = -1$，即 $s = -2\omega_E$ 时为零。在低频时，电流镜使输出电流加倍；在高频时，$C_E$ 使电流镜通路失效。

### 第 5 步 — 用完整的传递函数验证

保留 $V_{out}$，并令 $Y_E = g_{mP} + C_Es$，$Y_L = C_Ls + 1/r_{OP}$。由式 (1) 和式 (2)，$V_E(1 + R_XY_E) = V_{out} - V_X$。对输出端列基尔霍夫电流定律（KCL）方程，来自 $M_4$ 和支路的电流都流入 $Y_L$：

$$-g_{mP}V_E - I_X = Y_LV_{out}\quad\Longrightarrow\quad -(g_{mP} + Y_E)V_E = Y_LV_{out}.$$

代入 $V_E = (V_{out} - V_X)/(1 + R_XY_E)$：

$$
\begin{aligned}
-(g_{mP} + Y_E)(V_{out} - V_X) &= Y_L(1 + R_XY_E)V_{out}\\
\frac{V_{out}}{V_X} &= \frac{g_{mP} + Y_E}{Y_L(1 + R_XY_E) + g_{mP} + Y_E} = \frac{2g_{mP} + C_Es}{Y_L(1 + R_XY_E) + 2g_{mP} + C_Es}.
\end{aligned}
$$

分子 $2g_{mP} + C_Es$ 在 $s = -2g_{mP}/C_E$ 处为零，证实了短路法的结果；又因 $V_X = g_{mN}r_{ON}V_{in}$，所以 $V_{out}/V_{in}$ 具有相同的零点。

### 结果

$$s_z = -\frac{2g_{mP}}{C_E}$$

该零点位于左半平面，其幅值是电流镜极点 $g_{mP}/C_E$ 的两倍。它的产生是因为经 $R_X$ 的直接通路和经 $M_4$ 的电流镜通路在输出端相加，而二者之和正比于 $1 + 1/(1 + sC_E/g_{mP})$，在 $s = -2g_{mP}/C_E$ 处为零。

**常见错误。** 把零点放在右半平面，就像共源级（common-source stage）的前馈（feedforward）零点 $+g_m/C_{GD}$ 那样。这里两条通路在低频时以**相同**的符号相加，因此只有在电流镜通路的响应为负实数的地方，即在负实数 $s$ 处，二者才会相互抵消。

**常见错误。** 给出位于 $g_{mP}/C_E$（电流镜极点）或 $1/(R_XC_E)$ 的零点。条件 $g_{mP}Z_E = -1$ 给出 $2g_{mP}/C_E$；$R_X$ 被消去，因为两部分贡献都由同一支路电流 $V_X/(Z_E + R_X)$ 承载。

**常见错误。** 漏掉短路线中的支路电流 $-I_X$。若只有 $M_4$ 的电流 $-g_{mP}V_E$，则对于有限的 $s$，短路电流永远不会为零，从而错误地得出没有零点的结论。

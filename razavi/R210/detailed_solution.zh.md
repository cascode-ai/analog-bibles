# 详细步骤 - R210

**思路。** 寄生电阻 $R_P$ 从 $M_1$ 的漏极（节点 X）接到公共源极节点 P，破坏了对称性，因此不能使用半边电路（half circuit）。写出整个电路的小信号方程：各晶体管电流、P 点的基尔霍夫电流定律（KCL）方程（理想尾电流源不提供信号电流）以及两个漏极处的 KCL 方程；对一般输入求解一次，即可读出差模增益和共模增益。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的漏极记为 X，$M_2$ 的漏极记为 Y，公共源极节点记为 P，则 $V_{out} = V_X - V_Y$。栅极电压相等时，$M_1$ 和 $M_2$ 的 $V_{GS}$ 和漏极电流都相同（$R_P$ 只是额外增加了一个从 X 流向 P 的直流电流），因此两者的 $g_m$ 相同。取 $V_{DD}$ 为交流地：

- $M_1$：$i_1 = g_m(v_{in1} - v_P)$，从 X 流向 P；
- $M_2$：$i_2 = g_m(v_{in2} - v_P)$，从 Y 流向 P；
- $R_P$：$i_{RP} = (v_X - v_P)/R_P$，从 X 流向 P；
- $M_3$（$\lambda = 0$）：理想电流源，信号电流为零；
- $R_D$：分别从 X 和 Y 接到交流地。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 电路方程

对 P 点（没有电流经 $M_3$ 流出）、X 点和 Y 点列 KCL：

$$i_1 + i_2 + i_{RP} = 0 , \tag{1}$$

$$-\frac{v_X}{R_D} = i_1 + i_{RP}\quad\Longrightarrow\quad v_X = -R_D(i_1 + i_{RP}), \tag{2}$$

$$v_Y = -R_Di_2 . \tag{3}$$

由 (1)，$i_1 + i_{RP} = -i_2$，因此 (2) 变为 $v_X = +R_Di_2$，再结合 (3) 得

$$v_X = -v_Y = R_Di_2, \qquad v_{out} = v_X - v_Y = 2R_Di_2 :$$

输出总是纯差分的，并且只由 $i_2$ 决定。

### 第 3 步 — 求解 $i_2$

令 $u_1 = v_{in1} - v_P$，$u_2 = v_{in2} - v_P$，则 $i_1 = g_mu_1$，$i_2 = g_mu_2$，且 $u_1 - u_2 = v_{in1} - v_{in2} \equiv v_d$。分别由定义和 (1) 写出 $R_P$ 中的电流：

$$\frac{v_X - v_P}{R_P} = -(i_1 + i_2)\quad\Longrightarrow\quad v_X - v_P = -R_Pg_m(u_1 + u_2).$$

代入 $v_X = R_Dg_mu_2$ 和 $v_P = v_{in2} - u_2$：

$$
\begin{aligned}
R_Dg_mu_2 - v_{in2} + u_2 &= -R_Pg_m(u_1 + u_2)\\
u_2\left(1 + g_mR_D + g_mR_P\right) + g_mR_Pu_1 &= v_{in2}.
\end{aligned}
$$

利用 $u_1 = u_2 + v_d$：

$$
\begin{aligned}
u_2\left(1 + g_mR_D + 2g_mR_P\right) + g_mR_Pv_d &= v_{in2}\\
u_2 &= \frac{v_{in2} - g_mR_Pv_d}{1 + g_mR_D + 2g_mR_P},
\end{aligned}
$$

因此

$$v_{out} = 2R_Dg_mu_2 = \frac{2g_mR_D\left(v_{in2} - g_mR_Pv_d\right)}{1 + g_mR_D + 2g_mR_P}.$$

### 第 4 步 — 分解为差模和共模部分

令 $v_{in1} = v_{CM} + v_d/2$，$v_{in2} = v_{CM} - v_d/2$，则 $v_{in2} - g_mR_Pv_d = v_{CM} - v_d\left(\tfrac12 + g_mR_P\right)$，于是

$$v_{out} = \frac{2g_mR_D}{1 + g_mR_D + 2g_mR_P}\,v_{CM} - \frac{g_mR_D(1 + 2g_mR_P)}{1 + g_mR_D + 2g_mR_P}\,v_d .$$

**差模增益：**

$$A_{DM} = \frac{v_{out}}{v_d} = -g_mR_D\,\frac{1 + 2g_mR_P}{1 + g_mR_D + 2g_mR_P} \approx -g_mR_D\quad(\text{for } 2g_mR_P \gg g_mR_D).$$

**共模增益**（从共模输入到差分输出）：

$$A_{CM} = \frac{v_{out}}{v_{CM}} = \frac{2g_mR_D}{1 + g_mR_D + 2g_mR_P} \approx \frac{R_D}{R_P}\quad(\text{large } R_P).$$

**CMRR：**

$$\mathrm{CMRR} = \left|\frac{A_{DM}}{A_{CM}}\right| = \frac{g_mR_D(1 + 2g_mR_P)}{2g_mR_D} = \frac{1 + 2g_mR_P}{2} \approx g_mR_P .$$

### 第 5 步 — 物理机理（共模）

对于纯共模输入，$u_1 = u_2 = u$，$i_1 = i_2 = g_mu$，因此 P 点的 KCL 迫使 $i_{RP} = -2g_mu$：为了保持总尾电流不变，多出的电流必须经只接在 X 上的 $R_P$ 返回。于是 $v_Y = -R_Dg_mu$，$v_X = -R_D(g_mu - 2g_mu) = +R_Dg_mu$：两个输出朝**相反**方向变化，即使尾电流源是理想的也会出现差分输出，而输出共模电平保持不变。当 $R_P \to \infty$ 时，$A_{CM} \to 0$，$\mathrm{CMRR} \to \infty$，$A_{DM} \to -g_mR_D$，即无缺陷时的值。

**数值感受：** 取 $g_m = 1$ mS，$R_D = 5\ \mathrm{k}\Omega$，$R_P = 500\ \mathrm{k}\Omega$：

$$
\begin{aligned}
1 + g_mR_D + 2g_mR_P &= 1 + 5 + 1000 = 1006,\\
A_{DM} &= -5\times\frac{1001}{1006} = -4.98,\\
A_{CM} &= \frac{10}{1006} = 0.0099,\\
\mathrm{CMRR} &= \frac{1001}{2} \approx 500\ (54\ \mathrm{dB}).
\end{aligned}
$$

### 结果

$$A_{DM} = -g_mR_D\,\frac{1 + 2g_mR_P}{1 + g_mR_D + 2g_mR_P} \approx -g_mR_D,$$

$$A_{CM} = \frac{V_{out}}{V_{in,CM}} = \frac{2g_mR_D}{1 + g_mR_D + 2g_mR_P} \approx \frac{R_D}{R_P},$$

$$\mathrm{CMRR} = \frac{1 + 2g_mR_P}{2} \approx g_mR_P .$$

$R_P$ 把尾节点与一个输出端连在一起：使 $V_P$ 变化的共模输入会驱动一个流过 $R_P$ 的电流，而这个电流只从一侧抽取，因此即使尾电流源是理想的，共模也会转换为差模。

**常见错误。** 以尾电流源是理想的为由，认为 $A_{CM} = 0$。理想尾电流源只固定流入 P 的电流之**和**；$R_P$ 是第三条通路，其电流只取自 X。

**常见错误。** 把 $R_P$ 当作与 $R_D$ 并联的负载。它的下端接在 P 上，而 P 随输入变化：对差分信号而言 P 几乎不动，因此 $R_P$ 对增益几乎没有影响；但对共模信号而言，它造成了共模到差模的转换。

**常见错误。** 只取一个漏极的摆幅，使 $A_{DM}$ 减半。两个漏极都在摆动，因此 $A_{DM} \approx -g_mR_D$，而不是 $-g_mR_D/2$。

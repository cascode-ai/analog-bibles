# 详细步骤 - R279

**思路。** 当 $\Delta V$ 很小时，电路是线性的，且唯一的电容是输出端的 $C_L$，因此输出的响应是一个单极点系统：它从平衡时的直流值开始（电容电压不能突变），终止于原值加上（增益 × 输入阶跃），两者之间以 $\tau = R_{out}C_L$ 按指数规律变化。先由偏置点求出初始值，再精确推导五管放大器的增益和 $R_{out}$，并在 $g_mr_O \gg 1$ 时化简。

### 第 1 步 — 初始值

阶跃之前，$V_{in} = V_1$，电路处于平衡：每一侧都流过 $I_{SS}/2$，由对称性，$M_4$ 的 $V_{SD}$ 与二极管连接（diode-connected）的 $M_3$ 相同，因此 $V_{out} = V_X$：

$$V_{out}(0^-) = V_{DD} - |V_{GS3}| = V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\mu_pC_{ox}(W/L)_3}},$$

其中 $|V_{THP}| = 0.8$ V。$C_L$ 两端的电压不能突变，因此

$$V_{out}(0^+) = V_{out}(0^-) .$$

内部节点（X、P）没有电容，会立即调整；只有输出是慢变的。

### 第 2 步 — 单极点响应

从 $C_L$ 看进去，线性化后的电路是诺顿电流源 $G_mv_{in}$ 与 $R_{out}$ 并联，因此

$$C_L\frac{dv_{out}}{dt} + \frac{v_{out}}{R_{out}} = G_mv_{in} \quad\Longrightarrow\quad v_{out}(t) = -G_mR_{out}\,\Delta V\left(1 - e^{-t/\tau}\right), \qquad \tau = R_{out}C_L,$$

其中输入阶跃为 $v_{in} = -\Delta V$，$G_mR_{out} = A_v$ 是从 $V_{in}$ 到 $V_{out}$ 的直流小信号增益。

<!-- diagram: diagram-01.cir -->

### 第 3 步 — 输出电阻 $R_{out}$

记号：$g_N = g_{m1} = g_{m2}$，$g_P = g_{m3} = g_{m4}$，$g_{oN} = 1/r_{O1,2}$，$g_{oP} = 1/r_{O3,4}$。把两个栅极都接交流地，并在输出端加测试电压 $v_t$，它提供电流 $i_t$。各支路电流为：

$$
\begin{aligned}
i_1 &= -g_Nv_P + g_{oN}(v_X - v_P) && (M_1:\ \text{X} \to \text{P}),\\
i_2 &= -g_Nv_P + g_{oN}(v_t - v_P) && (M_2:\ \text{out} \to \text{P}),\\
i_3 &= (g_P + g_{oP})\,v_X && (M_3 \text{ diode}:\ \text{X} \to \text{ac ground}),\\
i_4 &= g_Pv_X + g_{oP}v_t && (M_4:\ \text{out} \to \text{ac ground}).
\end{aligned}
$$

基尔霍夫电流定律（KCL）：在 X，$i_1 + i_3 = 0$；在 P，由于尾电流源（tail current source）是理想的，$i_1 + i_2 = 0$；在输出端，$i_t = i_2 + i_4$。由前两式得 $i_2 = i_3$。

由 $i_1 = -i_3$：

$$(g_N + g_{oN})v_P = (g_{oN} + g_P + g_{oP})v_X .$$

由 $i_2 = i_3$，再代入上一行：

$$g_{oN}v_t = (g_P + g_{oP})v_X + (g_N + g_{oN})v_P = (2g_P + 2g_{oP} + g_{oN})v_X \quad\Longrightarrow\quad v_X = \frac{g_{oN}\,v_t}{2g_P + 2g_{oP} + g_{oN}} .$$

于是 $i_t = i_3 + i_4 = (2g_P + g_{oP})v_X + g_{oP}v_t$，因此

$$\frac{i_t}{v_t} = \frac{g_{oN}(2g_P + g_{oP}) + g_{oP}(2g_P + 2g_{oP} + g_{oN})}{2g_P + 2g_{oP} + g_{oN}} = \frac{2(g_{oN} + g_{oP})(g_P + g_{oP})}{2g_P + 2g_{oP} + g_{oN}} ,$$

$$R_{out} = \frac{g_{oN} + 2g_P + 2g_{oP}}{2(g_{oN} + g_{oP})(g_P + g_{oP})} \approx \frac{1}{g_{oN} + g_{oP}} = r_{O2}\,\|\,r_{O4} \quad (g_P \gg g_o).$$

### 第 4 步 — 增益

现在用 $v_{in}$ 驱动 $M_1$ 的栅极（$M_2$ 的栅极接交流地），输出开路。各支路电流与第 3 步相同，只是 $i_1 = g_N(v_{in} - v_P) + g_{oN}(v_X - v_P)$，输出电压为 $v_{out}$。在 X、P 和输出节点列 KCL，得 $i_1 = -i_3$，$i_2 = i_3$，$i_4 = -i_2 = -i_3$。

由 $i_4 = -i_3$：$g_Pv_X + g_{oP}v_{out} = -(g_P + g_{oP})v_X$，因此

$$v_X = -\frac{g_{oP}}{2g_P + g_{oP}}\,v_{out}.$$

由 $i_2 = i_3$ 和 $i_1 = -i_3$ 分别解出 $(g_N + g_{oN})v_P$：

$$g_{oN}v_{out} - (g_P + g_{oP})v_X = g_Nv_{in} + (g_{oN} + g_P + g_{oP})v_X \quad\Longrightarrow\quad g_{oN}v_{out} = g_Nv_{in} + (g_{oN} + 2g_P + 2g_{oP})v_X .$$

代入 $v_X$ 并合并 $v_{out}$ 项（分子与第 3 步中的组合相同）：

$$v_{out}\,\frac{g_{oN}(2g_P + g_{oP}) + g_{oP}(g_{oN} + 2g_P + 2g_{oP})}{2g_P + g_{oP}} = g_Nv_{in} \quad\Longrightarrow\quad v_{out}\,\frac{2(g_{oN} + g_{oP})(g_P + g_{oP})}{2g_P + g_{oP}} = g_Nv_{in},$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_N(2g_P + g_{oP})}{2(g_{oN} + g_{oP})(g_P + g_{oP})} = g_{m1}(r_{O2}\|r_{O4})\,\frac{2g_{m4}r_{O4} + 1}{2(g_{m4}r_{O4} + 1)} \approx g_{m1}(r_{O2}\|r_{O4}).$$

由于尾电流源是理想的，共模（common-mode）增益为零，因此只驱动一个输入与施加差模输入 $v_d = v_{in}$ 的结果相同。增益为正：$M_1$ 的电流被镜像到输出端，因此输出与输入的变化方向相同。（两者相除，得 $G_m = A_v/R_{out} = g_N(2g_P + g_{oP})/(g_{oN} + 2g_P + 2g_{oP}) \approx g_{m1}$。）

用偏置量表示，$g_{m1} = \sqrt{\mu_nC_{ox}(W/L)_1I_{SS}}$，$r_O = 1/(\lambda I_{SS}/2)$，因此

$$r_{O2}\|r_{O4} = \frac{2}{(\lambda_n + \lambda_p)I_{SS}} .$$

### 第 5 步 — 终值与完整波形

$V_{in}$ **下降** $\Delta V$，因此输出下降 $A_v\Delta V$：

$$V_{out}(\infty) = V_{out}(0) - g_{m1}(r_{O2}\|r_{O4})\,\Delta V,$$

$$V_{out}(t) = V_{DD} - |V_{GS3}| - g_{m1}(r_{O2}\|r_{O4})\,\Delta V\left(1 - e^{-t/\tau}\right), \qquad \tau = (r_{O2}\|r_{O4})\,C_L .$$

### 第 6 步 — 数值示例

$I_{SS} = 200\ \mu\mathrm{A}$，NMOS 的 $W/L = 10/0.5$（$\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$），PMOS 的 $W/L = 20/0.5$（$\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$），$\lambda_n = 0.1$，$\lambda_p = 0.2\ \mathrm{V^{-1}}$，$V_{DD} = 3$ V，$C_L = 1$ pF，$\Delta V = 10$ mV：

$$
\begin{aligned}
g_{m1} &= \sqrt{(134\ \mu\mathrm{A/V^2})(20)(200\ \mu\mathrm{A})} = 0.732\ \mathrm{mS}, \qquad g_{m4} = \sqrt{(38.4\ \mu\mathrm{A/V^2})(40)(200\ \mu\mathrm{A})} = 0.554\ \mathrm{mS},\\
r_{O2} &= \frac{1}{(0.1)(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega, \qquad r_{O4} = \frac{1}{(0.2)(100\ \mu\mathrm{A})} = 50\ \mathrm{k}\Omega, \qquad r_{O2}\|r_{O4} = 33.3\ \mathrm{k}\Omega,\\
V_{out}(0) &= 3 - 0.8 - \sqrt{200\ \mu\mathrm{A}/1.536\ \mathrm{mA/V^2}} = 2.2 - 0.361 = 1.839\ \mathrm{V},\\
A_v &= (0.732\ \mathrm{mS})(33.3\ \mathrm{k}\Omega)\frac{2(27.7) + 1}{2(28.7)} = 24.4\times0.983 = 24.0,\\
V_{out}(\infty) &= 1.839 - 24.0\times0.010 = 1.599\ \mathrm{V},\\
\tau &= (33.3\ \mathrm{k}\Omega)(1\ \mathrm{pF}) = 33\ \mathrm{ns}\ \ (\text{exact formula: } 33.6\ \mathrm{ns}).
\end{aligned}
$$

### 结果

- **初始值：** $V_{out}(0) = V_{DD} - |V_{GS3}| = V_{DD} - |V_{THP}| - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$。输入相等时电路平衡，$V_{out} = V_X$，$C_L$ 使 $V_{out}$ 在 $t = 0^+$ 时保持连续。
- **终值：** $V_{out}(\infty) = V_{out}(0) - g_{m1}(r_{O2}\|r_{O4})\Delta V$（更精确地，还要乘以 $\frac{2g_{m4}r_{O4} + 1}{2(g_{m4}r_{O4} + 1)}$）。输出下降，因为 $M_1$ 的栅极电压下降了。
- **时间常数：** $\tau = (r_{O2}\|r_{O4})C_L$，即五管放大器的输出电阻乘以 $C_L$（精确值为 $\tau = C_L(g_{o2} + 2g_{m4} + 2g_{o4})/[2(g_{o2} + g_{o4})(g_{m4} + g_{o4})]$），因此
$$V_{out}(t) = V_{out}(0) - g_{m1}(r_{O2}\|r_{O4})\,\Delta V\left(1 - e^{-t/\tau}\right),$$
其中 $g_{m1} = \sqrt{\mu_nC_{ox}(W/L)_1I_{SS}}$，$r_{O2}\|r_{O4} = 2/[(\lambda_n + \lambda_p)I_{SS}]$。

**常见错误。** 采用 $\tau = C_L/g_m$。输出端没有二极管连接的晶体管，因此 $C_L$ 看到的电阻是 $r_{O2}\|r_{O4}$，而不是 $1/g_m$。

**常见错误。** 只取 $r_{O4}$，或者只用一半的增益 $(g_{m1}/2)(r_{O2}\|r_{O4})$。采用有源电流镜（active current mirror）时，单端输出得到全部差分电流 $g_{m1}v_{in}$（一半直接经 $M_2$，另一半经电流镜），而且 $r_{O2}$ 和 $r_{O4}$ 都是输出端的负载。

**常见错误。** 让 $V_{out}$ 在 $t = 0$ 时跳变。唯一的电容 $C_L$ 就接在输出端，因此输出电压是连续的。

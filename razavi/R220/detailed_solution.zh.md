# 详细步骤 - R220

**思路。** 使用叠加原理。只有左侧输入作用时，$M_1$ 是以从 $M_2$ 源极看进去的电阻作为源极负反馈的共源（CS）级，$M_2$ 是由节点 P 驱动的共栅（CG）级。求出这种情况下的 $v_X$ 和 $v_Y$，再由对称性得到右侧输入的贡献，二者相加。$r_O$ 为有限值，$\gamma = 0$。

### 第 1 步 — 建立小信号电路

由对称性，每个晶体管的电流都是 $I_{SS}/2$，因此二者的 $g_m$ 相同，且 $r_O = 1/(\lambda I_{SS}/2)$。在小信号电路中，$V_{DD}$ 为交流地，理想尾电流源相当于开路，因此 $M_1$ 的电流只能经 P 点流入 $M_2$。

把 $V_{in1}$ 的小信号值简记为 $v_{in}$：$M_1$ 的栅极加 $+v_{in}$，$M_2$ 的栅极加 $-v_{in}$，差分输入为 $2v_{in}$。由叠加原理，

$$v_X = v_X\big|_{\text{left only}} + v_X\big|_{\text{right only}}, \qquad v_Y = v_Y\big|_{\text{left only}} + v_Y\big|_{\text{right only}} .$$

第 2–6 步只考虑**左侧输入单独作用**：$M_1$ 的栅极加 $+v_{in}$，$M_2$ 的栅极接交流地。

### 第 2 步 — 从 $M_2$ 源极看进去的电阻

$M_2$ 的栅极接地、漏极接 $R_D$，它在 P 点呈现电阻 $R_S$。在 P 点加测试电压 $v_t$；电流 $i_t$ 流入 $M_2$ 的源极，向上流过 $M_2$，从 Y 点流出，再经 $R_D$ 流到 $V_{DD}$。

<!-- diagram: diagram-01.cir -->

于是 $v_Y = i_tR_D$，$v_{gs2} = -v_t$。按从源极到漏极的方向计算，受控源贡献的电流为 $-g_mv_{gs2} = g_mv_t$，$r_O$ 贡献的电流为 $(v_t - v_Y)/r_O$：

$$i_t = g_mv_t + \frac{v_t - v_Y}{r_O} = g_mv_t + \frac{v_t - i_tR_D}{r_O} .$$

两边乘以 $r_O$，得 $i_tr_O = g_mr_Ov_t + v_t - i_tR_D$，因此 $i_t(r_O + R_D) = v_t(1 + g_mr_O)$，且

$$R_S = \frac{v_t}{i_t} = \frac{R_D + r_O}{1 + g_mr_O} .$$

当 $r_O \to \infty$ 时，它趋于 $1/g_m$。$r_O$ 为有限值时，它与漏极负载有关，因为经 $r_O$ 流入的电流也必须流过 $R_D$，从而抬高 $v_Y$：$R_D = 0$ 时它等于 $r_O/(1 + g_mr_O) = (1/g_m)\|r_O$，略小于 $1/g_m$；而在通常的 $g_mR_D > 1$ 情况下，它大于 $1/g_m$。

### 第 3 步 — 把 $M_1$ 看作带源极负反馈的共源级：求 $v_X$

从 $M_1$ 看，P 点经 $R_S$ 接地，因此 $M_1$ 是漏极电阻为 $R_D$、源极电阻为 $R_S$ 的共源级。

<!-- diagram: diagram-02.cir -->

设 $I$ 为 $M_1$ 中从漏极 X 流向源极 P 的小信号电流。则 $v_X = -IR_D$，$v_P = IR_S$，$v_{gs1} = v_{in} - IR_S$，并且

$$I = g_mv_{gs1} + \frac{v_X - v_P}{r_O} = g_m(v_{in} - IR_S) + \frac{-IR_D - IR_S}{r_O} .$$

两边乘以 $r_O$，得 $Ir_O = g_mr_Ov_{in} - g_mr_OR_SI - IR_D - IR_S$，因此 $I\left[R_D + r_O + (1 + g_mr_O)R_S\right] = g_mr_Ov_{in}$，且

$$I = \frac{g_mr_O\,v_{in}}{R_D + r_O + (1 + g_mr_O)R_S}, \qquad \frac{v_X}{v_{in}} = -\frac{g_mr_OR_D}{R_D + r_O + (1 + g_mr_O)R_S} .$$

**代入第 2 步的 $R_S$**：

$$(1 + g_mr_O)R_S = (1 + g_mr_O)\frac{R_D + r_O}{1 + g_mr_O} = R_D + r_O .$$

分母变为 $2(R_D + r_O)$，因此

$$\frac{v_X}{v_{in}}\bigg|_{\text{left only}} = -\frac{g_mr_OR_D}{2(R_D + r_O)} = -\frac12\,g_m\frac{R_Dr_O}{R_D + r_O} = -\frac12\,g_m(R_D\|r_O) .$$

$M_2$ 提供的源极负反馈使 $M_1$ 的增益减半：$M_2$ 的源极在 P 点分走了一半输入电压。

### 第 4 步 — 在 P 点看到的 $M_1$ 的戴维南等效电路

为了把 $M_2$ 当作共栅级处理，把 $M_1$（栅极加 $v_{in}$，漏极接 $R_D$）替换为 $V_T$ 与 $R_T$ 的串联。

**开路电压。** 将 P 与 $M_2$ 断开，则 $I = 0$，$v_X = 0$，于是 $M_1$ 的电流方程给出

$$
\begin{aligned}
0 &= g_m(v_{in} - v_P) + \frac{0 - v_P}{r_O},\\
0 &= g_mr_Ov_{in} - g_mr_Ov_P - v_P,\\
v_P(1 + g_mr_O) &= g_mr_Ov_{in},\\
V_T &= \frac{g_mr_O}{1 + g_mr_O}\,v_{in} .
\end{aligned}
$$

**戴维南电阻。** 令 $v_{in} = 0$，$M_1$ 的栅极接地、漏极接 $R_D$，与第 2 步中的 $M_2$ 完全相同，因此

$$R_T = \frac{R_D + r_O}{1 + g_mr_O} = R_S .$$

### 第 5 步 — 把 $M_2$ 看作共栅级：求 $v_Y$

$M_2$ 的栅极接地，源极由 $V_T$ 经 $R_T$ 驱动，漏极接 $R_D$。

<!-- diagram: diagram-03.cir -->

设 $I'$ 为从 $V_T$ 经 $R_T$ 流入 $M_2$ 源极、向上流过 $M_2$、再从 Y 点经 $R_D$ 流到交流地的电流：

$$v_P = V_T - I'R_T, \qquad v_Y = +I'R_D, \qquad v_{gs2} = -v_P .$$

$M_2$ 从漏极到源极的电流为 $-I'$：

$$-I' = g_mv_{gs2} + \frac{v_Y - v_P}{r_O} = -g_m(V_T - I'R_T) + \frac{I'R_D - V_T + I'R_T}{r_O} .$$

两边乘以 $r_O$，得 $-I'r_O = -g_mr_OV_T + g_mr_OR_TI' + I'R_D - V_T + I'R_T$，合并同类项：

$$(1 + g_mr_O)V_T = I'\left[R_D + r_O + (1 + g_mr_O)R_T\right] ,$$

$$\frac{v_Y}{V_T} = \frac{I'R_D}{V_T} = \frac{(1 + g_mr_O)R_D}{R_D + r_O + (1 + g_mr_O)R_T} .$$

**代入 $R_T$：** 同样有 $(1 + g_mr_O)R_T = R_D + r_O$，因此

$$\frac{v_Y}{V_T} = \frac{(1 + g_mr_O)R_D}{2(R_D + r_O)} .$$

**以 $v_{in}$ 表示**，代入第 4 步的 $V_T$：

$$\frac{v_Y}{v_{in}}\bigg|_{\text{left only}} = \frac{(1 + g_mr_O)R_D}{2(R_D + r_O)}\cdot\frac{g_mr_O}{1 + g_mr_O} = \frac{g_mr_OR_D}{2(R_D + r_O)} = +\frac12\,g_m(R_D\|r_O) .$$

### 第 6 步 — 左侧输入单独作用时的一致性检验

- **电流连续性。** 由第 5 步，$I' = \dfrac{(1 + g_mr_O)V_T}{2(R_D + r_O)} = \dfrac{g_mr_Ov_{in}}{2(R_D + r_O)}$，它等于第 3 步中的 $I$：尾电流源开路，向下流过 $M_1$ 的电流全部向上流过 $M_2$。因此 $v_Y = +IR_D = -v_X$。
- **节点 P。** $v_P = IR_S = \dfrac{g_mr_Ov_{in}}{2(R_D + r_O)}\cdot\dfrac{R_D + r_O}{1 + g_mr_O} = \dfrac{g_mr_O}{2(1 + g_mr_O)}v_{in} = \dfrac{V_T}{2}$：只有一个输入作用时，P 点的变化约为输入的一半。
- **$r_O \to \infty$ 的极限。** $v_X/v_{in} \to -g_mR_D/2$，这正是单边驱动差分对的已知结果。

### 第 7 步 — 右侧输入单独作用及总结果

$M_2$ 的栅极加 $-v_{in}$、$M_1$ 的栅极接交流地时，电路是第 2–5 步的镜像（$M_2$ 是带源极负反馈的共源级，$M_1$ 是共栅级）。将 $X \leftrightarrow Y$ 互换，并把 $v_{in}$ 换成 $-v_{in}$：

$$
\begin{aligned}
v_Y\big|_{\text{right only}} &= -\frac12 g_m(R_D\|r_O)\,(-v_{in}) = +\frac12 g_m(R_D\|r_O)\,v_{in},\\
v_X\big|_{\text{right only}} &= +\frac12 g_m(R_D\|r_O)\,(-v_{in}) = -\frac12 g_m(R_D\|r_O)\,v_{in},\\
v_P\big|_{\text{right only}} &= -\frac{V_T}{2} .
\end{aligned}
$$

把两部分贡献相加：

$$
\begin{aligned}
v_X &= -\tfrac12 g_m(R_D\|r_O)v_{in} - \tfrac12 g_m(R_D\|r_O)v_{in} = -g_m(R_D\|r_O)\,v_{in},\\
v_Y &= +\tfrac12 g_m(R_D\|r_O)v_{in} + \tfrac12 g_m(R_D\|r_O)v_{in} = +g_m(R_D\|r_O)\,v_{in},\\
v_P &= \tfrac{V_T}{2} - \tfrac{V_T}{2} = 0 .
\end{aligned}
$$

所以 $v_X - v_Y = -2g_m(R_D\|r_O)\,v_{in}$，且

$$\frac{v_X - v_Y}{2v_{in}} = \frac{-2g_m(R_D\|r_O)\,v_{in}}{2v_{in}} = -g_m(R_D\|r_O) .$$

这里 $v_P = 0$ 是计算得出的，而不是事先假设的：它正是半边电路法默认成立的“虚地”。

### 结果

$$\frac{V_X - V_Y}{2V_{in1}} = -g_m(R_D\|r_O) = -\frac{g_mr_OR_D}{R_D + r_O},$$

与半边电路法的结果相同。中间结果为：

- 从 $M_2$ 源极看进去的电阻：$R_S = \dfrac{R_D + r_O}{1 + g_mr_O}$；
- 左侧输入单独作用：$v_X/v_{in} = -\tfrac12 g_m(R_D\|r_O)$（带源极负反馈的共源级），$v_Y/v_{in} = +\tfrac12 g_m(R_D\|r_O)$（由 $V_T = \frac{g_mr_O}{1 + g_mr_O}v_{in}$ 串联 $R_T = R_S$ 驱动的共栅级）；
- 右侧输入再贡献同样大小的量，得到 $v_X - v_Y = -2g_m(R_D\|r_O)V_{in1}$。

**常见错误。** 把从 $M_2$ 源极看进去的电阻取为 $1/g_m$。$\lambda \neq 0$ 时，它等于 $(R_D + r_O)/(1 + g_mr_O)$；若取 $1/g_m$，则 $(1 + g_mr_O)R_S$ 不再等于 $R_D + r_O$，结果也无法化简为 $-g_m(R_D\|r_O)$。

**常见错误。** 只算了左侧输入就停下，把 $g_m(R_D\|r_O)/2$ 当作差分增益。右侧输入会贡献同样大小的量，而且增益是相对于完整的差分输入 $2V_{in1}$ 定义的。

**常见错误。** 一开始就假设 P 是虚地，而这正是题目所排除的半边电路捷径。每次只有一个输入作用时，P 点变化 $\pm V_T/2$；只有两者之和才为零。

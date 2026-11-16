# 详细步骤 - R323

**思路。** 对差分信号采用半边电路：尾节点是虚地，栅极接固定偏置的 PMOS 负载简化为它们的输出电阻（output resistance）。于是每个半边都是一个共源级，信号源电阻为 $R_S$，负载为 $R_L = r_{O1}\parallel r_{O3}$，电容为 $C_{GS1}$、$C_{GD1}$，输出电容为 $C_L$。由栅极和输出端的基尔霍夫电流定律（KCL）推导其传递函数，再将其与差模增益（differential gain）联系起来。

### 第 1 步 — 简化为半边电路

<!-- diagram: diagram-01.cir -->

把尾节点记为 P。对差分输入，$V_{in1} = +V_{in}/2$，$V_{in2} = -V_{in}/2$，一侧的每个信号都是另一侧对应信号的相反数：

- **P** 接收大小相等、方向相反的信号电流，而理想尾电流源不吸收任何信号电流，因此 P 是**交流地**（$C_{SB1}$、$C_{SB2}$ 以及任何尾节点电容都不流过差分信号）。
- **$M_3$、$M_4$** 的 $v_{gs3} = 0$（栅极接 $V_b$，源极接 $V_{DD}$），因此每个都只是从输出端到交流地的 $r_{O3}$。

因此每个半边都是这样一个 $M_1$：源极处于交流地，栅极（节点 **A**）经 $R_S$ 由 $V_{in}/2$ 驱动，漏极的负载为 $C_L$ 和

$$R_L = r_{O1}\parallel r_{O3} = \frac{r_{O1}r_{O3}}{r_{O1} + r_{O3}}.$$

### 第 2 步 — 半边电路的小信号模型（small-signal model）

<!-- diagram: diagram-02.cir -->

节点 A 经 $R_S$ 接到信号源 $V_{in}/2$，经 $C_{GS1}$ 接地，经 $C_{GD1}$ 接到输出端；输出端有接地的 $g_{m1}V_A$、$R_L$ 和 $C_L$，并经 $C_{GD1}$ 接到 A。记半边电路的输入为 $v_i = V_{in}/2$，输出为 $V_o = V_{out1}$。

### 第 3 步 — 两个节点的 KCL

在 A 点（以流出电流为正），两边乘以 $R_S$：

$$\frac{V_A - v_i}{R_S} + C_{GS1}s\,V_A + C_{GD1}s\,(V_A - V_o) = 0 ,$$

$$V_A\left[1 + R_S(C_{GS1} + C_{GD1})s\right] - R_SC_{GD1}s\,V_o = v_i . \qquad (1)$$

在输出端（以流出电流为正）：

$$C_{GD1}s\,(V_o - V_A) + g_{m1}V_A + \frac{V_o}{R_L} + C_Ls\,V_o = 0 ,$$

$$V_A\,(g_{m1} - C_{GD1}s) = -V_o\left[\frac{1}{R_L} + (C_{GD1} + C_L)s\right]\quad\Longrightarrow\quad V_A = -V_o\,\frac{1 + R_L(C_{GD1} + C_L)s}{R_L(g_{m1} - C_{GD1}s)} . \qquad (2)$$

### 第 4 步 — 消去 $V_A$

把式 (2) 代入式 (1)，两边同乘以 $R_L(g_{m1} - C_{GD1}s)$：

$$-V_o\Big\{\left[1 + R_L(C_{GD1} + C_L)s\right]\left[1 + R_S(C_{GS1} + C_{GD1})s\right] + R_SR_LC_{GD1}s\,(g_{m1} - C_{GD1}s)\Big\} = v_i\,R_L(g_{m1} - C_{GD1}s).$$

花括号展开为

$$
\begin{aligned}
D(s) &= 1 + \left[R_L(C_{GD1} + C_L) + R_S(C_{GS1} + C_{GD1}) + g_{m1}R_SR_LC_{GD1}\right]s\\
&\quad + R_SR_L\left[(C_{GD1} + C_L)(C_{GS1} + C_{GD1}) - C_{GD1}^2\right]s^2 ,
\end{aligned}
$$

其中 $s^2$ 项方括号内的 $C_{GD1}^2$ 项相互抵消：

$$(C_{GD1} + C_L)(C_{GS1} + C_{GD1}) - C_{GD1}^2 = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L\equiv\xi .$$

把 $s$ 项系数重新整理为 $R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)$：

$$\frac{V_o}{v_i} = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + \left[R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)\right]s + 1}.$$

### 第 5 步 — 由半边电路得到差模增益

$V_{out1} = (V_o/v_i)\cdot V_{in}/2$，$V_{out2} = -V_{out1}$，因此 $V_{out} = V_{out1} - V_{out2} = 2V_{out1} = (V_o/v_i)\,V_{in}$：差分传递函数与半边电路的传递函数相同，

$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + \left[R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)\right]s + 1},$$

$$R_L = r_{O1}\parallel r_{O3}, \qquad \xi = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L .$$

### 第 6 步 — 增益、零点与极点

**直流增益：** $-g_{m1}(r_{O1}\parallel r_{O3})$。

**零点：** $s_z = +g_{m1}/C_{GD1}$，位于右半平面：$C_{GD1}$ 不反相地传递信号，而晶体管使信号反相，二者在一个正实数 $s$ 处相互抵消。

**极点。** 记 $a = R_SR_L\xi$，$b$ 为 $s$ 项系数；当两个极点相距较远时：

$$\omega_{p1}\approx\frac{1}{b} = \frac{1}{R_L(C_L + C_{GD1}) + R_S\left[(1 + g_{m1}R_L)C_{GD1} + C_{GS1}\right]},\qquad \omega_{p2}\approx\frac{b}{a} = \frac{R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)}{R_SR_L\,\xi}.$$

由于 $R_L = r_{O1}\parallel r_{O3}$ 很大，**输出极点通常是主极点**；当 $C_L$ 在 $b$ 中占主导时，

$$\omega_{p1}\approx\frac{1}{(r_{O1}\parallel r_{O3})C_L}.$$

若按每个节点一个极点在输入端进行估算，就要把 $C_{GD1}$ 乘以很大的 $1 + g_{m1}R_L$；但从 A 到输出端的增益在较低的输出极点处就开始下降，因此在输入节点起作用的频率处，实际的密勒因子要小得多。这种估算偏悲观，应使用上面的精确二次式。

### 结果

$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD1}s - g_{m1})R_L}{R_SR_L\xi s^2 + \left[R_S(1 + g_{m1}R_L)C_{GD1} + R_SC_{GS1} + R_L(C_{GD1} + C_L)\right]s + 1}$$

其中 $R_L = r_{O1}\parallel r_{O3}$，$\xi = C_{GS1}C_{GD1} + C_{GS1}C_L + C_{GD1}C_L$（对每个半边电路的 $V_{out1}/V_{in1}$，同样的表达式也成立）。直流增益为 $-g_{m1}(r_{O1}\parallel r_{O3})$，在 $g_{m1}/C_{GD1}$ 处有一个右半平面零点，主极点通常是输出极点；当 $C_L$ 占主导时，它为 $\approx 1/\{R_L(C_L + C_{GD1}) + R_S[(1 + g_{m1}R_L)C_{GD1} + C_{GS1}]\}\approx1/[(r_{O1}\parallel r_{O3})C_L]$。

**常见错误。** 把负载取为 $1/g_{m3}$，好像 $M_3$ 是二极管连接（diode-connected）的，或者只取 $r_{O3}$。$M_3$ 的栅极接固定偏置，它只贡献 $r_{O3}$，并与 $r_{O1}$ 并联。

**常见错误。** 对差分输入，把尾节点当作会变化的节点，即当作源极负反馈（source degeneration）。两个半边向 P 注入大小相等、方向相反的电流，因此 P 是交流地，在半边电路中 $C_{GS1}$ 接在栅极与地之间。

**常见错误。** 写出左半平面零点（分子为 $C_{GD1}s + g_{m1}$），或给出一阶结果（只有输出极点或只有密勒输入极点）。$C_{GD1}$ 耦合 A 与输出端，因此响应是二阶的，并带有一个右半平面零点。

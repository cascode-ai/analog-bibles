# 详细步骤 - R296

**思路。** 该电路由两个级联的共源级（common-source stage，简称 CS 级）构成，负载均为理想电流源。把每个节点与一个极点相关联：求出该节点对交流地的电阻和总电容，其中每个栅漏电容都用密勒定理（Miller's theorem）按低频增益拆分到它所跨接的两个节点上，然后取 $\omega = 1/(RC)$。最后检验其精度，并在密勒图像不够准确之处给出更好的估计。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的栅极称为节点 **A**，其漏极称为节点 **X**。$V_{DD}$ 为交流地，理想电流源相当于开路，于是：

- **节点 A：** $R_S$ 接到输入信号源，$C_{GS1}$ 接地，$C_{GD1}$ 接到 X。
- **节点 X：** $g_{m1}V_A$、$r_{O1}$、$C_{DB1}$ 和 $C_{GS2}$ 接地，$C_{GD2}$ 接到输出端。
- **输出节点：** $g_{m2}V_X$、$r_{O2}$ 和 $C_{DB2}$ 接地。

$C_{SB1}$ 和 $C_{SB2}$ 连接的是接地的源极和接地的衬底，因此不起作用。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 节点电阻、增益与密勒拆分

将电容开路、输入信号源置零：

- **节点 A：** 栅极不吸取电流，因此 $R_A = R_S$。
- **节点 X：** $I_1$ 是理想的，$M_2$ 的栅极开路，因此 $R_X = r_{O1}$。
- **输出端：** $I_2$ 是理想的，因此 $R_{out} = r_{O2}$。

低频增益为

$$A_1 = \frac{V_X}{V_A} = -g_{m1}r_{O1}, \qquad A_2 = \frac{V_{out}}{V_X} = -g_{m2}r_{O2}.$$

密勒定理把跨接在节点 1 与节点 2 之间（增益为 $A_v$）的电容 $C$ 替换为节点 1 处的 $C(1 - A_v)$ 和节点 2 处的 $C(1 - 1/A_v)$：

$$C_{GD1}\ \to\ (1 + g_{m1}r_{O1})\,C_{GD1}\ \text{at A}, \qquad C_{GD1}\left(1 + \frac{1}{g_{m1}r_{O1}}\right)\ \text{at X},$$

$$C_{GD2}\ \to\ (1 + g_{m2}r_{O2})\,C_{GD2}\ \text{at X}, \qquad C_{GD2}\left(1 + \frac{1}{g_{m2}r_{O2}}\right)\ \text{at the output}.$$

### 第 3 步 — 输入极点

$$C_A = C_{GS1} + (1 + g_{m1}r_{O1})\,C_{GD1},$$

$$\omega_{in} \approx \frac{1}{R_AC_A} = \frac{1}{R_S\left[C_{GS1} + (1 + g_{m1}r_{O1})\,C_{GD1}\right]}.$$

### 第 4 步 — 节点 X 处的极点

节点 X 上的电容包括 $C_{DB1}$、$C_{GS2}$、$C_{GD1}$ 折算到 X 侧的部分，以及 $C_{GD2}$ 很大的密勒部分：

$$C_X^{tot} = C_{GD1}\left(1 + \frac{1}{g_{m1}r_{O1}}\right) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})\,C_{GD2},$$

$$\omega_X \approx \frac{1}{r_{O1}\left[C_{GD1}\left(1 + \dfrac{1}{g_{m1}r_{O1}}\right) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})\,C_{GD2}\right]}.$$

节点 X 的电阻最大（$r_{O1}$，而 $R_S$ 通常小得多），又有很大的密勒电容，因此它通常给出**主极点**。

### 第 5 步 — 输出极点

$$\omega_{out} \approx \frac{1}{r_{O2}\left[C_{DB2} + C_{GD2}\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)\right]} \approx \frac{1}{r_{O2}(C_{DB2} + C_{GD2})},$$

其中最后一个表达式利用了 $g_{m2}r_{O2}\gg1$，本征增益（intrinsic gain）通常为 10–100。

### 第 6 步 — 这些估算有多准确？

两处密勒增益都是很大的本征增益 $g_mr_O$，它们在相当低的频率处就开始下降，因此这些估算较为粗略。$\omega_{out}$ 的估算最不可靠：$C_{GD2}$ 在 X 与输出端之间形成强耦合，引起**极点分裂**（pole splitting）。

**对 X 点极点和输出极点的更好估计。** 把第二级看作由 $r_{O1}$ 驱动的 CS 级，其输入端对地电容为 $C_X \approx C_{DB1} + C_{GS2} + C_{GD1}$，输出端对地电容为 $C_{out} = C_{DB2}$。其传递函数的分母为

$$D(s) = r_{O1}r_{O2}\,\xi\,s^2 + \left[r_{O1}(1 + g_{m2}r_{O2})C_{GD2} + r_{O1}C_X + r_{O2}(C_{GD2} + C_{out})\right]s + 1,$$

$$\xi = C_XC_{GD2} + C_XC_{out} + C_{GD2}C_{out}.$$

当两个根相距很远时，较低的根等于 $s$ 项系数的倒数：

$$\omega_X \approx \frac{1}{r_{O1}\left[(1 + g_{m2}r_{O2})C_{GD2} + C_X\right] + r_{O2}(C_{GD2} + C_{out})},$$

即在第 4 步密勒结果的时间常数中再加上一项 $r_{O2}(C_{GD2} + C_{out})$。较高的根等于 $s$ 项系数除以 $s^2$ 项系数；当密勒项 $r_{O1}g_{m2}r_{O2}C_{GD2}$ 占主导时，

$$\omega_{out} \approx \frac{r_{O1}g_{m2}r_{O2}C_{GD2}}{r_{O1}r_{O2}\,\xi} = \frac{g_{m2}C_{GD2}}{C_XC_{GD2} + C_XC_{out} + C_{GD2}C_{out}}.$$

$r_{O2}$ 消失了：在高频时，$C_{GD2}$ 实际上把 $M_2$ 接成了二极管连接（diode-connected）形式，输出电阻降到约 $1/g_{m2}$。因此实际的输出极点比第 5 步得到的 $1/[r_{O2}(C_{DB2} + C_{GD2})]$ **高**得多，而 X 点极点则被推向更低的频率。

**零点。** 每个栅漏电容还提供了一条前馈（feedforward）通路，分别产生位于 $s = +g_{m1}/C_{GD1}$ 和 $s = +g_{m2}/C_{GD2}$ 的右半平面零点。

### 结果

把每个节点与一个极点相关联（密勒近似，$A_1 = -g_{m1}r_{O1}$，$A_2 = -g_{m2}r_{O2}$）：

$$\omega_{in} \approx \frac{1}{R_S\left[C_{GS1} + (1 + g_{m1}r_{O1})C_{GD1}\right]}$$

$$\omega_X \approx \frac{1}{r_{O1}\left[C_{GD1}\left(1 + \dfrac{1}{g_{m1}r_{O1}}\right) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})C_{GD2}\right]}$$

$$\omega_{out} \approx \frac{1}{r_{O2}\left[C_{DB2} + C_{GD2}\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)\right]} \approx \frac{1}{r_{O2}(C_{DB2} + C_{GD2})}$$

节点 X 通常对应主极点。由于 $C_{GD2}$ 使 X 点极点与输出极点分裂，更准确的输出极点为 $\omega_{out}\approx g_{m2}C_{GD2}/\left[C_XC_{out} + (C_X + C_{out})C_{GD2}\right]$，其中 $C_X \approx C_{DB1} + C_{GS2} + C_{GD1}$，$C_{out} = C_{DB2}$。电路还有位于 $g_{m1}/C_{GD1}$ 和 $g_{m2}/C_{GD2}$ 的右半平面零点。

**常见错误。** 用错节点电阻，例如在节点 X 取 $1/g_{m2}$，或在输入端取 $R_S\parallel r_{O1}$。$M_2$ 的栅极开路且 $I_1$ 是理想的，因此 X 点只看到 $r_{O1}$；$M_1$ 的栅极不吸取电流，因此 A 点只看到 $R_S$。

**常见错误。** 忘记 $C_{GD2}$ 在 X 点或 $C_{GD1}$ 在输入端的密勒倍增。二者各自跨接在增益为 $-g_mr_O$ 的反相级两端，折算到该级输入端时要乘以 $1 + g_mr_O$，通常是该节点上最大的电容。

**常见错误。** 把密勒估算当作精确结果。它们忽略了极点分裂，尤其会低估输出极点，因为在高频时 $C_{GD2}$ 使输出电阻从 $r_{O2}$ 降到约 $1/g_{m2}$。

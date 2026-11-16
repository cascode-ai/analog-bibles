# 详细步骤 - R447

**思路。** 在 $V_E$ 处（$M_3$/$M_4$ 的栅极）断开共模反馈环路，注入测试电压 $v_E$，并沿环路追踪一周：它使 $M_3$ 和 $M_4$ 的电流变化 $g_{m3}v_E$，共模输出电阻把这些电流变为共模输出电压，分压器检测该电压，误差放大器再把它送回 $V_E$。环路增益就是这些增益的乘积，用共模半边电路（half circuit）求解。

### 第 1 步 — 环路及其极性

若 $V_E$ 升高，$M_3$ 和 $M_4$ 吸收更多电流，两个输出端都下降，误差放大器随之降低 $V_E$：这是**负反馈**。用测试电压 $v_E$ 代替误差放大器的输出来驱动 $M_3$/$M_4$ 的栅极，以此计算环路增益的大小 $T$；在低频下这些栅极不吸取电流，因此断开环路不会改变负载情况。$V_{in}$ 保持为零，$V_{REF}$ 为交流地。

### 第 2 步 — 为什么用共模半边电路，以及为什么 $R_1$、$R_2$ 不起作用

$v_E$ 以相同方式驱动 $M_3$ 和 $M_4$，因此 $v_{out1} = v_{out2} = v_{out,CM}$。

- **$R_1$、$R_2$：** 分压器的两端同步变化，中间抽头只接一个栅极，因此其中没有小信号电流流过；它们不对输出端构成负载，检测到的电压为 $(v_{out1} + v_{out2})/2 = v_{out,CM}$。
- **输入对管：** 理想尾电流源（tail current source）$I_{SS}$ 固定了 $I_{D1} + I_{D2}$，对称性又使两者相等，因此对于共模变化，$M_1$ 和 $M_2$ **不**流过小信号电流，$r_{O1}$ 也不对折叠节点构成负载，折叠节点只看到 $r_{OP}$。（在这里使用差模值 $r_{OP}\parallel r_{O1}$ 是一种常用且略为保守的近似。）

### 第 3 步 — 共模半边电路的小信号模型（small-signal model）

把 $M_3$ 的漏极（NMOS 共源共栅管的源极）记为 A，把折叠节点（顶部 PMOS 管的漏极、PMOS 共源共栅管的源极）记为 F；$V_{DD}$、所有偏置栅极以及所有衬底（bulk）都是交流地。

- $M_3$：从 A 流向地的 $g_{m3}v_E$，并接有 $r_{O3}$。
- NMOS 共源共栅管：从 out 流向 A 的 $(g_{mNC} + g_{mbNC})(-v_A)$，out 与 A 之间接有 $r_{ONC}$。
- PMOS 共源共栅管：从 F 流向 out 的 $(g_{mPC} + g_{mbPC})v_F$，F 与 out 之间接有 $r_{OPC}$。
- 顶部 PMOS 电流源：从 F 接到地的 $r_{OP}$（$M_1$ 的漏极也接在 F 上，但不流过共模电流）。

<!-- diagram: diagram-01.cir -->

因此，输出端由一个以 $v_E$ 为输入的跨导驱动，其负载为向下看进 NMOS 共源共栅结构的电阻与向上看进 PMOS 共源共栅结构的电阻的并联。

### 第 4 步 — 向下看的电阻：$M_3$ 之上的 NMOS 共源共栅管

令 $v_E = 0$，向输出端注入测试电流 $i_t$，则 $v_A = i_tr_{O3}$，流过共源共栅管的电流为

$$
\begin{aligned}
i_t &= (g_{mNC} + g_{mbNC})(-v_A) + \frac{v_t - v_A}{r_{ONC}}\\
v_t &= i_t\left[(g_{mNC} + g_{mbNC})r_{ONC}r_{O3} + r_{ONC} + r_{O3}\right],
\end{aligned}
$$

因此，由于 $(g_{mNC} + g_{mbNC})r_{ONC} \gg 1$，

$$R_{down} = (g_{mNC} + g_{mbNC})r_{ONC}r_{O3} + r_{ONC} + r_{O3} \approx (g_{mNC} + g_{mbNC})r_{ONC}r_{O3}.$$

### 第 5 步 — 向上看的电阻：折叠节点之上的 PMOS 共源共栅管

PMOS 共源共栅管以 F 处的电阻作为源极负反馈（source degeneration）电阻，对于共模变化该电阻为 $r_{OP}$，因此用同样的推导得

$$R_{up} = (g_{mPC} + g_{mbPC})r_{OPC}r_{OP} + r_{OPC} + r_{OP} \approx (g_{mPC} + g_{mbPC})r_{OPC}r_{OP},$$

每一侧的共模输出电阻为

$$R_{out,CM} = R_{down}\parallel R_{up} \approx \left[(g_{mNC} + g_{mbNC})r_{ONC}r_{O3}\right]\parallel\left[(g_{mPC} + g_{mbPC})r_{OPC}r_{OP}\right].$$

（若采用第 2 步中的近似，$r_{OP}$ 变为 $r_{OP}\parallel r_{O1}$。）

### 第 6 步 — 从 $v_E$ 到 $v_{out,CM}$

把输出端短路到交流地，对节点 A 列 KCL 方程，可得 $M_3$ 的电流中到达输出端的比例：

$$
\begin{aligned}
g_{m3}v_E + \frac{v_A}{r_{O3}} &= -\left(g_{mNC} + g_{mbNC} + \frac{1}{r_{ONC}}\right)v_A\\
v_A &= -\frac{g_{m3}v_E}{g_{mNC} + g_{mbNC} + 1/r_{ONC} + 1/r_{O3}} .
\end{aligned}
$$

从输出端抽出的短路电流为 $(g_{mNC} + g_{mbNC} + 1/r_{ONC})(-v_A)$，因此

$$G_{m,CM} = g_{m3}\,\frac{g_{mNC} + g_{mbNC} + 1/r_{ONC}}{g_{mNC} + g_{mbNC} + 1/r_{ONC} + 1/r_{O3}} \approx g_{m3},$$

这是因为共源共栅管源极的电阻约为 $1/(g_{mNC} + g_{mbNC})$，远小于 $r_{O3}$。该电流是从输出节点**抽出**的，因此

$$v_{out,CM} = -G_{m,CM}R_{out,CM}\,v_E \approx -g_{m3}R_{out,CM}\,v_E .$$

### 第 7 步 — 误差放大器

其“−”输入端接 $V_{REF}$（交流地），因此其差分输入就是加在同相输入端的 $v_{out,CM}$。以有源电流镜为负载的差分对，其短路输出电流（short-circuit output current）为 $g_{mE}v_{out,CM}$，输出电阻为 $r_{OE1}\parallel r_{OE3}$，因此

$$v_E' = +A_E\,v_{out,CM}, \qquad A_E = g_{mE}(r_{OE1}\parallel r_{OE3}),$$

由于它只驱动 $M_3$/$M_4$ 的栅极，在低频下没有负载效应。

### 第 8 步 — 环路增益

返回到断开点的电压为

$$
\begin{aligned}
v_E' &= A_E\,v_{out,CM}\\
&= A_E\left(-g_{m3}R_{out,CM}\,v_E\right)\\
\frac{v_E'}{v_E} &= -A_E\,g_{m3}\,R_{out,CM} .
\end{aligned}
$$

负号证实了这是负反馈，环路增益的大小为

$$T = g_{mE}(r_{OE1}\parallel r_{OE3})\cdot g_{m3}\cdot\left\{\left[(g_{mNC} + g_{mbNC})r_{ONC}r_{O3}\right]\parallel\left[(g_{mPC} + g_{mbPC})r_{OPC}r_{OP}\right]\right\}.$$

运放的差模增益为 $A_{DM} \approx g_{m1}R_{out}$，其输出电阻几乎相同，因此 $T \approx A_E\,(g_{m3}/g_{m1})\,A_{DM}$：大致等于运放增益与误差放大器增益的乘积，这就是共模电平被保持在非常接近 $V_{REF}$ 的原因。

### 结果

$$T \approx g_{mE}(r_{OE1}\parallel r_{OE3})\cdot g_{m3}\cdot R_{out,CM},$$

$$R_{out,CM} = \left[(g_{mNC} + g_{mbNC})r_{ONC}r_{O3}\right]\parallel\left[(g_{mPC} + g_{mbPC})r_{OPC}r_{OP}\right],$$

反馈为负反馈（$V_{out,CM}\uparrow \Rightarrow V_E\uparrow \Rightarrow$ 输出 $\downarrow$）。对于共模变化，$R_1$ 和 $R_2$ 中没有电流，不对输出端构成负载。对于共模变化，输入对管不流过电流（理想 $I_{SS}$），因此折叠节点看到的是 $r_{OP}$；在这里写成差模值 $r_{OP}\parallel r_{O1}$ 是一种常用且可以接受的近似。

**常见错误。** 让 $R_1$ 和 $R_2$ 对输出端构成负载，例如写成 $R_{out}\parallel(R_1 + R_2)/2$ 或 $R_1\parallel R_2$。对于共模变化，分压器中没有电流（但它对差模输出确实构成负载，这就是需要大电阻的原因）。

**常见错误。** 把共模反馈的环路增益当作运放的差模增益。信号经 $g_{m3}$（而不是 $g_{m1}$）进入环路，且环路中还包含 $A_E$。

**常见错误。** 只用 $r_{O3}$（或只用一条共源共栅支路）作为输出电阻。输出端同时受下方 NMOS 共源共栅结构和上方 PMOS 共源共栅结构的负载作用，两者是并联关系。

# 详细步骤 - R448

**思路。** 在尾电流管 $M_T$ 的栅极处断开共模反馈环路，加测试电压 $v_E$，并沿环路追踪一周。尾电流的变化量 $g_{mT}v_E$ 在 $M_1$ 和 $M_2$ 之间平均分配，并在折叠节点处被减去，因此每个输出端的电流变化 $g_{mT}v_E/2$；共模输出电阻把它变为 $v_{out,CM}$，分压器检测该电压，误差放大器再把它送回 $V_E$。全程使用共模半边电路（half circuit）。

### 第 1 步 — 环路及其极性

若 $V_{out,CM}$ 升高，$V_E$ 随之升高，$M_T$ 导通更强，$M_1$、$M_2$ 各自从折叠节点抽走更多电流。顶部的 PMOS 电流源提供固定电流，因此经 $M_5$、$M_6$ 向下流入输出端的电流**减小**，而底部的 NMOS 电流源仍吸收固定电流：输出下降，因此反馈为**负反馈**。为求环路增益的大小 $T$，用 $v_E$ 驱动 $M_T$ 的栅极（它不吸取电流，因此不构成任何负载），并令差分输入为零，$V_{REF}$ 为交流地。

### 第 2 步 — 共模半边电路

$v_E$ 对两半电路的作用相同，因此 $v_{out1} = v_{out2} = v_{out,CM}$。每一半电路分得共用尾电流管电流的一半，即 $g_{mT}v_E/2$，以及其输出电阻的两倍，即 $2r_{OT}$。$R_1$、$R_2$ 的两端同步变化，抽头只接一个栅极，因此分压器中没有电流，不对输出端构成负载，并能准确检测 $v_{out,CM}$。

把尾电流节点记为 P，折叠节点记为 F，底部 NMOS 电流源的漏极（NMOS 共源共栅管的源极）记为 B：

- 尾电流管的一半：从 P 流向地的 $(g_{mT}/2)v_E$，与 $2r_{OT}$ 并联。
- $M_1$（栅极接交流地）：从 F 流向 P 的 $(g_{m1} + g_{mb1})(-v_P)$，F 与 P 之间接有 $r_{O1}$。
- 顶部 PMOS 电流源：从 F 接到地的 $r_{OP}$。
- PMOS 共源共栅管 $M_5$：从 F 流向 out 的 $(g_{m5} + g_{mb5})v_F$，F 与 out 之间接有 $r_{O5}$。
- NMOS 共源共栅管：从 out 流向 B 的 $(g_{mNC} + g_{mbNC})(-v_B)$，out 与 B 之间接有 $r_{ONC}$。
- 底部 NMOS 电流源：从 B 接到地的 $r_{ONS}$。

<!-- diagram: diagram-01.cir -->

### 第 3 步 — 到达每个输出端的电流：短路跨导（short-circuit transconductance）

将输出端短路到交流地。

**从尾电流管到 $M_1$。** 此时 F 看进 $M_5$ 的源极，这是一个低阻抗，因此 $v_F \approx 0$。对节点 P 列 KCL 方程（向下流过 $M_1$ 的电流 = 经尾电流管的一半流出的电流）：

$$
\begin{aligned}
-(g_{m1} + g_{mb1} + 1/r_{O1})\,v_P &= \frac{g_{mT}}{2}v_E + \frac{v_P}{2r_{OT}}\\
v_P &= -\frac{(g_{mT}/2)\,v_E}{g_{m1} + g_{mb1} + 1/r_{O1} + 1/(2r_{OT})}\\
i_1 &= -(g_{m1} + g_{mb1} + 1/r_{O1})\,v_P \approx \frac{g_{mT}}{2}v_E .
\end{aligned}
$$

$M_1$ 的源极只呈现约 $1/g_{m1} \ll 2r_{OT}$ 的阻抗，因此尾电流的变化量基本上全部流过 $M_1$。

**从 $M_1$ 到输出端。** $i_1$ 是从 F **抽出**的。对节点 F 列 KCL 方程，其中 $r_{OP}$ 提供电流 $-v_F/r_{OP}$，$M_5$ 向短路的输出端输送电流 $(g_{m5} + g_{mb5} + 1/r_{O5})v_F$：

$$
\begin{aligned}
-\frac{v_F}{r_{OP}} &= i_1 + (g_{m5} + g_{mb5} + 1/r_{O5})\,v_F\\
v_F &= -\frac{i_1}{g_{m5} + g_{mb5} + 1/r_{O5} + 1/r_{OP}}\\
i_5 &= (g_{m5} + g_{mb5} + 1/r_{O5})\,v_F \approx -i_1 .
\end{aligned}
$$

由于 $1/(g_{m5} + g_{mb5}) \ll r_{OP}$，$i_1$ 几乎全部取自经 $M_5$ 流入输出端的电流。因此

$$G_{m,CM} \approx \frac{g_{mT}}{2}, \qquad \text{current into each output} = -\frac{g_{mT}}{2}v_E .$$

### 第 4 步 — 每一侧的共模输出电阻

**向下看**（底部电流源之上的 NMOS 共源共栅管）：测试电流 $i_t$ 使 $v_B = i_tr_{ONS}$，并且

$$
\begin{aligned}
i_t &= (g_{mNC} + g_{mbNC})(-v_B) + \frac{v_t - v_B}{r_{ONC}}\\
v_t &= i_t\left[(g_{mNC} + g_{mbNC})r_{ONC}r_{ONS} + r_{ONC} + r_{ONS}\right],\\
R_{down} &\approx (g_{mNC} + g_{mbNC})r_{ONC}r_{ONS} .
\end{aligned}
$$

**向上看**，此时 $M_5$ 以 F 处的电阻 $R_F$ 作为源极负反馈（source degeneration）电阻：

$$R_{up} = (g_{m5} + g_{mb5})r_{O5}R_F + r_{O5} + R_F \approx (g_{m5} + g_{mb5})r_{O5}R_F .$$

**对于共模变化，F 点的负载是什么？** 除了 $r_{OP}$ 之外，还有 $M_1$ 的漏极，在共模半边电路中该管以 $2r_{OT}$ 作为源极负反馈电阻：

$$R_{M1,CM} \approx (g_{m1} + g_{mb1})r_{O1}(2r_{OT}) \approx 2g_{m1}r_{O1}r_{OT},$$

这一阻抗极大（对理想尾电流源为无穷大）。因此 $R_F \approx r_{OP}$，并且

$$R_{out,CM} = R_{up}\parallel R_{down} \approx \left[(g_{m5} + g_{mb5})r_{O5}r_{OP}\right]\parallel\left[(g_{mNC} + g_{mbNC})r_{ONC}r_{ONS}\right].$$

（把 $R_F$ 写成差模值 $r_{OP}\parallel r_{O1}$ 是一种常用且略为保守的近似。）

### 第 5 步 — 从 $v_E$ 到 $v_{out,CM}$ 再返回

$$v_{out,CM} = -\frac{g_{mT}}{2}R_{out,CM}\,v_E .$$

误差放大器（以有源电流镜为负载的差分对）的短路输出电流（short-circuit output current）为 $g_{mE}v_{id}$，输出电阻为 $r_{OE1}\parallel r_{OE3}$，因此 $A_E = g_{mE}(r_{OE1}\parallel r_{OE3})$。$v_{out,CM}$ 接在“+”输入端，$V_{REF}$ 为交流地：

$$v_E' = A_E\,v_{out,CM} = -A_E\,\frac{g_{mT}}{2}R_{out,CM}\,v_E .$$

### 第 6 步 — 环路增益

$$\frac{v_E'}{v_E} = -g_{mE}(r_{OE1}\parallel r_{OE3})\cdot\frac{g_{mT}}{2}\cdot R_{out,CM} .$$

负号证实了这是负反馈，并且

$$T = g_{mE}(r_{OE1}\parallel r_{OE3})\cdot\frac{g_{mT}}{2}\cdot R_{out,CM}.$$

如果 $V_E$ 改为驱动底部的 NMOS 电流源（如在使用 $M_3$/$M_4$ 的相关电路中那样），每个输出端将得到完整的 $g_{m3}v_E$；而这里尾电流由两半电路共享，因此出现因子 $1/2$。

### 结果

$$T \approx g_{mE}(r_{OE1}\parallel r_{OE3})\cdot\frac{g_{mT}}{2}\cdot R_{out,CM},$$

$$R_{out,CM} = \left[(g_{m5} + g_{mb5})r_{O5}r_{OP}\right]\parallel\left[(g_{mNC} + g_{mbNC})r_{ONC}r_{ONS}\right],$$

反馈为负反馈（$V_{out,CM}\uparrow \Rightarrow$ 尾电流 $\uparrow \Rightarrow$ 流入输出端的电流减小 $\Rightarrow$ 输出 $\downarrow$）。对于共模变化，$M_1$ 的漏极呈现的阻抗为 $\approx 2g_{m1}r_{O1}r_{OT}$（对理想尾电流源为无穷大），因此 $r_{O1}$ 不对折叠节点构成负载；$r_{OP}\parallel r_{O1}$ 是一种可以接受的近似。$R_1$ 和 $R_2$ 中没有共模电流。

**常见错误。** 每一侧用 $g_{mT}$ 而不是 $g_{mT}/2$。尾电流的变化量由 $M_1$ 和 $M_2$ 平均分担。

**常见错误。** 认为“差分对抑制共模信号，所以尾电流不会影响输出共模电平（common-mode level）”。尾电流的变化并不是共模**输入电压**：它直接改变两个漏极电流，从而改变折叠到输出端的电流。

**常见错误。** 在共模环路中让 $R_1$、$R_2$ 对输出端构成负载。对于共模变化，分压器中没有电流流过。

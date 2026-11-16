# 详细步骤 - R510

**思路。** 低频增益为 $G_mR_{out}$，其中 $G_m$ 为短路跨导，$R_{out}$ 为输出电阻。在差分输入下，两个尾节点都是虚地（virtual ground）。主通路（经过 $M_2$）和辅助通路（经过 $M_A$ 和 $M_7$）向同一个折叠节点 P 注入电流，二者的电流相加。

### 第 1 步 — 差分激励与信号通路

在 $M_1$ 和 $M_A$ 的栅极加 $+V_{in}/2$，在 $M_2$ 和 $M_B$ 的栅极加 $-V_{in}/2$，因此 $V_{in} = V_{G1} - V_{G2}$；每个差分对的源极节点都是虚地。取 $V_{out} = v_{left} - v_{right}$，即 $M_5$ 的漏极电压减去 $M_6$ 的漏极电压。由对称性，$v_{right} = -v_{left}$，因此 $V_{out} = 2v_{left}$。

左侧输出由 P 点馈送，P 点从 $M_2$（栅极为 $-V_{in}/2$）和 $M_7$ 接收信号，后者的栅极 X 由 $M_A$（栅极为 $+V_{in}/2$）驱动。在小信号模型（small-signal model）中：
- 在 X 点：$g_{mA}(V_{in}/2)$ 从 X 流向地，与 $r_{OA}$ 并联；理想的 $I_1$ 相当于开路，$M_7$ 的栅极不吸取电流；
- 在 P 点：$M_7$（源极接 $V_{DD}$，即交流地）提供 $g_{m7}v_X$，$M_2$ 提供 $g_{m1}(-V_{in}/2)$，另有 $r_{O7}$ 和 $r_{O2}$ 接地；
- 从 P 到输出端：$M_5$ 作为共栅级（common-gate stage），即 $g_{m5}v_{gs5}$ 与 $r_{O5}$ 并联，其负载为下方的共源共栅结构，即一个接地电阻 $R_{down}$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 辅助通路：节点 X 的电压

$M_A$ 的漏极电流 $g_{mA}(V_{in}/2)$ 从 X 流出，而 X 点上唯一的其他元件是 $r_{OA}$（因为 $I_1$ 是理想的）。在 X 点应用基尔霍夫电流定律（KCL）：

$$\frac{v_X}{r_{OA}} + g_{mA}\frac{V_{in}}{2} = 0
\quad\Longrightarrow\quad
v_X = -g_{mA}r_{OA}\,\frac{V_{in}}{2}.$$

X 是带理想负载的共源级（common-source stage）的输出端，因此具有完整的本征增益 $g_{mA}r_{OA}$（以及造成该极点的高阻抗）。

$M_7$ 的源极接交流地，栅极接 X，因此它从源极流向漏极、即**流入** P 的小信号电流为

$$i_7 = g_{m7}\,v_{sg7} = g_{m7}\,(0 - v_X) = g_{m7}g_{mA}r_{OA}\,\frac{V_{in}}{2}.$$

X 下降，所以 $|V_{GS7}|$ 增大，$M_7$ 向 P 注入**更多**电流。

### 第 3 步 — 主通路：$M_2$ 的电流

$M_2$ 的栅极为 $-V_{in}/2$，源极为虚地，因此它从 P **抽取**的电流的变化量为

$$i_{d2} = g_{m2}\left(-\frac{V_{in}}{2}\right) = -g_{m1}\frac{V_{in}}{2}\qquad (g_{m2} = g_{m1}\ \text{by symmetry}),$$

这等效于向 P 注入 $+g_{m1}V_{in}/2$。注入 P 的总信号电流为

$$i_{inj} = i_7 - i_{d2} = \frac{V_{in}}{2}\left(g_{m1} + g_{m7}g_{mA}r_{OA}\right).$$

两条通路的作用**相加**：$M_2$ 从 P 抽走的电流减少，同时 $M_7$ 向 P 注入的电流增加。

### 第 4 步 — 短路跨导 $G_m$

将左侧输出端短接到交流地。$M_5$ 的漏极和栅极都接地，因此从 P 经 $M_5$ 流出的电流为

$$i_5 = g_{m5}v_P + \frac{v_P}{r_{O5}} = \left(g_{m5} + \frac{1}{r_{O5}}\right)v_P ,$$

在 P 点列 KCL 得

$$i_{inj} = \frac{v_P}{r_{O2}\parallel r_{O7}} + \left(g_{m5} + \frac{1}{r_{O5}}\right)v_P .$$

解得

$$
\begin{aligned}
v_P &= \frac{i_{inj}}{g_{m5} + 1/r_{O5} + 1/(r_{O2}\parallel r_{O7})},\\
i_5 &= i_{inj}\,\frac{g_{m5} + 1/r_{O5}}{g_{m5} + 1/r_{O5} + 1/(r_{O2}\parallel r_{O7})} \approx i_{inj},
\end{aligned}
$$

这是因为 $g_{m5}(r_{O2}\parallel r_{O7}) \gg 1$：共源共栅管的源极（$\approx 1/g_{m5}$）几乎吸收了全部折叠电流。因此

$$i_{out,sc} = G_m\frac{V_{in}}{2},\qquad G_m = g_{m1} + g_{m7}g_{mA}r_{OA}.$$

### 第 5 步 — 输出电阻 $R_{out}$

输入为零时，$M_A$ 不向 X 注入电流，因此 $v_X = 0$，$M_7$ 仅相当于 $r_{O7}$；$M_2$ 相当于 $r_{O2}$。从 $M_5$ 的漏极向上看，这是一个源极接 $R_S = r_{O2}\parallel r_{O7}$ 的共源共栅结构：

$$R_{up} = (1 + g_{m5}r_{O5})(r_{O2}\parallel r_{O7}) + r_{O5} \approx g_{m5}r_{O5}\,(r_{O2}\parallel r_{O7}).$$

从 $M_3$ 的漏极向下看（叠在 $M_9$ 之上的共源共栅结构，$R_S = r_{O9}$）：

$$R_{down} = (1 + g_{m3}r_{O3})\,r_{O9} + r_{O3} \approx g_{m3}r_{O3}r_{O9}.$$

因此

$$R_{out} = R_{up}\parallel R_{down} \approx \left[g_{m5}r_{O5}(r_{O2}\parallel r_{O7})\right]\parallel\left[g_{m3}r_{O3}r_{O9}\right].$$

右侧输出的电阻值相同，只需用 $M_6$、$M_1$、$M_8$、$M_4$、$M_{10}$ 分别代替 $M_5$、$M_2$、$M_7$、$M_3$、$M_9$。

### 第 6 步 — 电压增益

每个输出端都相当于一个诺顿电流源 $\pm G_mV_{in}/2$ 驱动 $R_{out}$：

$$v_{left} = G_mR_{out}\,\frac{V_{in}}{2},\qquad v_{right} = -G_mR_{out}\,\frac{V_{in}}{2},\qquad V_{out} = v_{left} - v_{right} = G_mR_{out}V_{in},$$

$$\boxed{A_v = \frac{V_{out}}{V_{in}} \approx \left(g_{m1} + g_{m7}g_{mA}r_{OA}\right)\left\{\left[g_{m5}r_{O5}(r_{O2}\parallel r_{O7})\right]\parallel\left[g_{m3}r_{O3}r_{O9}\right]\right\}.}$$

没有灰色部分时，增益为 $g_{m1}R_{out}$，因此辅助通路使增益乘以

$$\frac{g_{m1} + g_{m7}g_{mA}r_{OA}}{g_{m1}} = 1 + \frac{g_{m7}}{g_{m1}}\,g_{mA}r_{OA}.$$

若 $g_{m7}$ 与 $g_{m1}$ 相当，这大致相当于多出一个本征增益 $g_{mA}r_{OA}$（例如 $\approx 20$–$50$）：辅助通路相当于在跨导器 $M_7$ 前面加了一级共源前置放大器（带理想负载的 $M_A$）。代价是高阻抗节点 X，它会增加一个低频极点。

### 结果

$$A_v = \frac{V_{out}}{V_{in}} \approx \left(g_{m1} + g_{m7}g_{mA}r_{OA}\right)R_{out},\qquad R_{out} \approx \left[g_{m5}r_{O5}\,(r_{O2}\parallel r_{O7})\right]\parallel\left[g_{m3}r_{O3}\,r_{O9}\right]$$

这是差分输出的结果，另一侧对称。短路跨导 $G_m = g_{m1} + g_{m7}g_{mA}r_{OA}$ 综合了主通路（$M_2$ 在 P 点导引电流）和辅助通路（$M_A$ 在 X 点放大，再由 $M_7$ 把 $v_X$ 转换为 P 点的电流）；两部分贡献相加。单端输出（一个输出端对地）的增益为该值的一半。

**常见错误。** 把两条通路的作用相减。抬高 $M_A$ 的栅极会**降低** X，从而**增大** $M_7$ 流入 P 的电流；同时 $M_2$（以相反极性驱动）从 P 抽走的电流**减少**。两者都把电流推入共源共栅管 $M_5$，因此相加。

**常见错误。** 把 X 点的电阻取为 $r_{OA}\parallel r_{O,I1}$，即认为电流源电阻为有限值。题目已忽略 $I_1$ 和 $I_2$ 的沟道长度调制，因此 X 点只看到 $r_{OA}$；如果把 $r_{OA}$ 也去掉，$v_X$ 和增益都会变为无穷大。

**常见错误。** 看错连接关系，例如让 $M_7$ 馈入节点 Q，或让 $M_1$ 驱动节点 P。$M_7$ 和 $M_2$ 都作用于 P（P 馈入 $M_5$）；$M_8$ 和 $M_1$ 都作用于 Q（Q 馈入 $M_6$）。

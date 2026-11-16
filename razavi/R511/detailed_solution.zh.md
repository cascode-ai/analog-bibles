# 详细步骤 - R511

**思路。** 在差分半边电路中，两个尾节点都是虚地（virtual ground）。逐个节点跟踪信号：先是 X，再是 P，最后是输出端。辅助通路经过慢节点 X，而主通路不经过；在 P 点把“快”“慢”两路电流相加就产生一个零点。P 点和输出端另外贡献两个极点，先由基尔霍夫电流定律（KCL）求出，再利用二者相距很远这一点把它们分开。

### 第 1 步 — 半边电路、节点电容与小信号模型

每个节点都有一个对地电容：X 和 Y 处为 $C_X$，P 和 Q 处为 $C_P$，每个输出端为 $C_L$。在 $M_1$、$M_A$ 的栅极加 $+V_{in}/2$，在 $M_2$、$M_B$ 的栅极加 $-V_{in}/2$；两侧变化方向相反，因此 $V_{out} = v_{left} - v_{right} = 2v_{left}$。左侧输出由 P 点馈送，$M_2$（主通路）和 $M_7$（辅助通路，受 X 控制）向 P 注入电流。

左半边的小信号模型（small-signal model）：
- **节点 X：** $g_{mA}V_{in}/2$ 从 X 抽出，与 $r_{OA}$ 和 $C_X$ 并联（理想的 $I_1$ 为开路；$M_7$ 的栅极不吸取电流）；
- **节点 P：** $g_{m7}v_X$ 从 P 抽出（等效于注入 $-g_{m7}v_X$，因为 $M_7$ 的源极处于交流地），$M_2$ 抽出 $g_{m1}(-V_{in}/2)$，另有电导 $G_P = 1/(r_{O2}\parallel r_{O7})$ 和 $C_P$；
- **P 到输出端：** $M_5$ 作为共栅（common-gate）器件，$g_{m5}v_P$ 从 P 流向输出端，与 $r_{O5}$ 并联（电导 $g_{O5} = 1/r_{O5}$）；
- **输出节点：** 下方的共源共栅（cascode）结构 $R_{down} = (1 + g_{m3}r_{O3})r_{O9} + r_{O3}$（电导 $G_D = 1/R_{down}$），以及 $C_L$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 节点 X：慢通路

在 X 点列 KCL：

$$v_X\left(\frac{1}{r_{OA}} + sC_X\right) + g_{mA}\frac{V_{in}}{2} = 0
\quad\Longrightarrow\quad
v_X = -\frac{g_{mA}\,V_{in}/2}{1/r_{OA} + sC_X} = -\frac{g_{mA}r_{OA}}{1 + sr_{OA}C_X}\cdot\frac{V_{in}}{2}.$$

因此节点 X 贡献一个极点

$$\omega_X = \frac{1}{r_{OA}C_X},$$

它的频率很低，因为 X 点的电阻是完整的 $r_{OA}$。$M_7$ 流入 P 的电流为

$$i_7 = g_{m7}\,v_{sg7} = -g_{m7}v_X = \frac{g_{m7}g_{mA}r_{OA}}{1 + sr_{OA}C_X}\cdot\frac{V_{in}}{2}.$$

### 第 3 步 — 注入 P 的电流：零点

$M_2$ 从 P 抽走的电流**减少** $g_{m1}V_{in}/2$，即注入 $+g_{m1}V_{in}/2$，且不经过任何内部节点（“快”通路）。注入的总电流为

$$
\begin{aligned}
i_{inj}(s) &= \frac{V_{in}}{2}\left[g_{m1} + \frac{g_{m7}g_{mA}r_{OA}}{1 + sr_{OA}C_X}\right]
= \frac{V_{in}}{2}\cdot\frac{g_{m1}(1 + sr_{OA}C_X) + g_{m7}g_{mA}r_{OA}}{1 + sr_{OA}C_X}\\
&= \frac{V_{in}}{2}\cdot\frac{(g_{m1} + g_{m7}g_{mA}r_{OA}) + s\,g_{m1}r_{OA}C_X}{1 + sr_{OA}C_X}
= \frac{V_{in}}{2}\,G_{m0}\,\frac{1 + s/\omega_z}{1 + s/\omega_X},
\end{aligned}
$$

其中低频跨导 $G_{m0} = g_{m1} + g_{m7}g_{mA}r_{OA}$，且

$$\omega_z = \frac{g_{m1} + g_{m7}g_{mA}r_{OA}}{g_{m1}\,r_{OA}C_X} = \omega_X\left(1 + \frac{g_{m7}g_{mA}r_{OA}}{g_{m1}}\right).$$

零点位于左半平面：高于 $\omega_X$ 后，辅助通路的作用逐渐消失，跨导从 $G_{m0}$ 下降到 $g_{m1}$，并在 $\omega_z = \omega_X\,G_{m0}/g_{m1}$ 处趋于平坦。

### 第 4 步 — 节点 P 与输出节点（精确 KCL）

设 $v_o$ 为左侧输出电压。在输出端和 P 点列 KCL：

$$g_{m5}v_P + g_{O5}(v_P - v_o) = v_o\,(G_D + sC_L), \tag{1}$$

$$i_{inj} = v_P\,(G_P + sC_P) + g_{m5}v_P + g_{O5}(v_P - v_o). \tag{2}$$

由式 (1) 得 $v_P = v_o\,\dfrac{G_D + g_{O5} + sC_L}{g_{m5} + g_{O5}}$。代入式 (2)：

$$i_{inj} = v_o\left[\frac{(G_D + g_{O5} + sC_L)(G_P + g_{m5} + g_{O5} + sC_P)}{g_{m5} + g_{O5}} - g_{O5}\right],$$

于是

$$\frac{v_o}{i_{inj}} = \frac{g_{m5} + g_{O5}}{D(s)},$$

$$D(s) = C_LC_P\,s^2 + \left[C_L(G_P + g_{m5} + g_{O5}) + C_P(G_D + g_{O5})\right]s + G_D(G_P + g_{m5} + g_{O5}) + g_{O5}G_P .$$

P 点与输出端构成一个耦合的二阶系统。在 $s = 0$ 时，除以 $(G_P + g_{m5} + g_{O5})$，并利用 $1/R_{up} = g_{O5}G_P/(G_P + g_{m5} + g_{O5})$，即 $R_{up} = (1 + g_{m5}r_{O5})(r_{O2}\parallel r_{O7}) + r_{O5}$ 的倒数，得

$$\frac{v_o}{i_{inj}}\Big|_{s=0} = \frac{g_{m5} + g_{O5}}{G_P + g_{m5} + g_{O5}}\cdot\frac{1}{G_D + 1/R_{up}} \approx R_{up}\parallel R_{down} = R_{out},$$

这是因为 $g_{m5} \gg G_P$：结果正是我们熟悉的折叠式共源共栅输出电阻。

### 第 5 步 — 分离两个极点

$D(s)$ 的两个根相距很远（$g_{m5}/C_P$ 很快，而 $1/(R_{out}C_L)$ 中含有非常大的 $R_{out}$），因此对 $D = as^2 + bs + c$ 而言，两个根近似为 $c/b$ 和 $b/a$。由于 $G_D, g_{O5} \ll g_{m5}$，$b$ 中的 $C_P(G_D + g_{O5})$ 项可以忽略，于是

$$\omega_{out} \approx \frac{G_D(G_P + g_{m5} + g_{O5}) + g_{O5}G_P}{C_L(G_P + g_{m5} + g_{O5})} = \frac{G_D + 1/R_{up}}{C_L} = \frac{1}{R_{out}C_L},$$

$$\omega_P \approx \frac{C_L(G_P + g_{m5} + g_{O5})}{C_LC_P} = \frac{g_{m5} + g_{O5} + G_P}{C_P} \approx \frac{g_{m5}}{C_P}.$$

因此

$$\frac{v_o}{i_{inj}} \approx \frac{R_{out}}{(1 + s/\omega_P)(1 + s/\omega_{out})}.$$

### 第 6 步 — 总传递函数

将 $V_{out} = 2v_o$ 与第 3 步和第 5 步的结果结合：

$$\boxed{\frac{V_{out}}{V_{in}}(s) = \frac{(g_{m1} + g_{m7}g_{mA}r_{OA})\,R_{out}\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_X}\right)\left(1 + \dfrac{s}{\omega_P}\right)\left(1 + \dfrac{s}{\omega_{out}}\right)}}$$

其中
- $\omega_X = \dfrac{1}{r_{OA}C_X}$（节点 X 和 Y；对差分半边电路只算一个极点），
- $\omega_P \approx \dfrac{g_{m5}}{C_P}$（节点 P 和 Q），
- $\omega_{out} = \dfrac{1}{R_{out}C_L}$，$R_{out} \approx [g_{m5}r_{O5}(r_{O2}\parallel r_{O7})]\parallel[g_{m3}r_{O3}r_{O9}]$，
- 左半平面零点 $\omega_z = \dfrac{g_{m1} + g_{m7}g_{mA}r_{OA}}{g_{m1}r_{OA}C_X} = \omega_X\left(1 + \dfrac{g_{m7}g_{mA}r_{OA}}{g_{m1}}\right)$。

若 $r_O$ 为有限值且两个极点相距不远，则用第 4 步的 $D(s)/D(0)$ 代替 $(1 + s/\omega_P)(1 + s/\omega_{out})$；X 点极点和零点不变。单端输出的增益为其一半，极点和零点相同。

### 第 7 步 — 零点能否抵消某个极点？

**不能抵消 X/Y 极点。** 比值

$$\frac{\omega_z}{\omega_X} = 1 + \frac{g_{m7}g_{mA}r_{OA}}{g_{m1}}$$

恰好就是增益提升因子：只要辅助通路起作用，它就大于 1；如果增益提升有实际意义，它会大得多（例如 $\approx 30$）。若输出极点是主极点（$\omega_{out} < \omega_X$），则在 $\omega_X$ 与 $\omega_z$ 之间幅值以 40 dB/dec 下降，相位在该区间趋向 $-180^\circ$：这正是题目中提到的相位裕度恶化。

**输出极点：可以，通过设计实现。** 选择 $C_X$（例如在 X 和 Y 处额外加电容），使 $\omega_z = \omega_{out}$：

$$\frac{g_{m1}r_{OA}C_X}{g_{m1} + g_{m7}g_{mA}r_{OA}} = R_{out}C_L
\quad\Longrightarrow\quad
C_X = \frac{(g_{m1} + g_{m7}g_{mA}r_{OA})\,R_{out}C_L}{g_{m1}r_{OA}} .$$

于是

$$\frac{V_{out}}{V_{in}} = \frac{G_{m0}R_{out}}{(1 + s/\omega_X)(1 + s/\omega_P)} ,$$

X 成为主极点；若 $\omega_P$ 远高于它，单位增益带宽为

$$\omega_u \approx G_{m0}R_{out}\,\omega_X = \frac{G_{m0}R_{out}}{r_{OA}C_X} = \frac{G_{m0}R_{out}\,g_{m1}}{G_{m0}R_{out}C_L} = \frac{g_{m1}}{C_L},$$

与普通的折叠式共源共栅相同，而直流增益提高了增益提升因子倍。

**折叠节点极点：原则上可以。** 令 $\omega_z = g_{m5}/C_P$，需要 $C_X = G_{m0}C_P/(g_{m1}g_{m5}r_{OA})$。更一般地，精确条件是 $\omega_z$ 与 $D(s)$ 的某个根重合。

**实际上**，这些对消要匹配的是互不相关节点的时间常数（$r_{OA}C_X$ 对 $R_{out}C_L$ 或 $C_P/g_{m5}$），而它们随工艺、温度和负载变化时彼此跟踪得很差。对消并不完美，会留下一个靠得很近的**零极点对**，即阶跃响应（step response）中一个缓慢建立的分量。

### 结果

$$\frac{V_{out}}{V_{in}}(s) = \frac{(g_{m1} + g_{m7}g_{mA}r_{OA})R_{out}\left(1 + s/\omega_z\right)}{\left(1 + s/\omega_X\right)\left(1 + s/\omega_P\right)\left(1 + s/\omega_{out}\right)},$$

$$\omega_X = \frac{1}{r_{OA}C_X},\quad \omega_P \approx \frac{g_{m5}}{C_P},\quad \omega_{out} = \frac{1}{R_{out}C_L},\quad \omega_z = \frac{g_{m1} + g_{m7}g_{mA}r_{OA}}{g_{m1}r_{OA}C_X} = \omega_X\left(1 + \frac{g_{m7}g_{mA}r_{OA}}{g_{m1}}\right)\ \text{(LHP)}.$$

- 零点**永远不能**抵消 X/Y 极点：它总是比该极点高出增益提升因子 $1 + g_{m7}g_{mA}r_{OA}/g_{m1}$ 倍。
- 通过选择 $C_X = G_{m0}R_{out}C_L/(g_{m1}r_{OA})$，**可以**把零点放在输出极点上（此时 X 成为主极点，$\omega_u \approx g_{m1}/C_L$）；原则上也可以放在折叠节点极点上。
- 这种对消在实际中只是近似的，会留下一个零极点对（缓慢建立）。

**常见错误。** 把零点放在右半平面。两条通路在 P 点以相同符号相加，其中一路经节点 X 低通滤波，这种“快加慢”的组合总是给出左半平面零点。

**常见错误。** 把 X 点极点写成 $g_{mA}/C_X$，好像 X 是一个二极管连接（diode-connected）的节点。X 点的负载只有 $r_{OA}$（$I_1$ 是理想的），因此 $\omega_X = 1/(r_{OA}C_X)$，频率很低。

**常见错误。** 声称零点能抵消 X 点极点，“因为它们来自同一个节点”。二者之比就是增益提升因子，而要使电路有用，该因子必须很大。

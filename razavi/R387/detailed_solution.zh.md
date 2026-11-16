# 详细步骤 - R387

**思路。** 无反馈时，共栅（common-gate）器件 $M_1$ 的输入电阻为 $1/g_{m1}$。分压器 $C_1$/$C_2$ 把输出电压的一半反馈到 $M_2$ 的栅极，该管的漏极电流也从输入节点流出，使输入电阻降低 $1 + g_{m2}R_D/2$ 倍。用测试源推导 $R_{in}$，用公共偏置电流表示两个跨导（transconductance），再求解 $R_{in} = 50\ \Omega$。

### 第 1 步 — 偏置电流

把 $M_2$ 的栅极记为节点 P。$M_2$ 的漏极电流除了经过 $M_1$ 和 $R_D$ 之外没有其他直流通路，因此两个器件**串联**，共用同一个偏置电流 $I_{D1} = I_{D2} = I$，这是唯一的未知量。

### 第 2 步 — 有反馈时的输入电阻

在输入端施加测试电压 $V_x$。$M_1$ 的栅极接交流地，因此 $v_{gs1} = -V_x$，$M_1$ 中有电流 $g_{m1}V_x$ 从输入端向上流到输出端；$R_D$ 接在 out 与交流地之间（不含 $r_O$，无体效应）；$C_1$ 接在 out 与 P 之间，$C_2$ 接在 P 与地之间；$M_2$ 从输入端向地吸取电流 $g_{m2}V_P$。

<!-- diagram: diagram-01.cir -->

低频时分压器吸取的电流可以忽略，因此 $g_{m1}V_x$ 流过 $R_D$，而 P 点电压（栅极无电流）由分压器决定：

$$V_{out} = g_{m1}R_D\,V_x, \qquad V_P = \frac{C_1}{C_1 + C_2}V_{out} = \frac12V_{out} = \frac{g_{m1}R_D}{2}V_x \qquad (C_1 = C_2).$$

对输入节点应用基尔霍夫电流定律（KCL），测试电流经 $M_1$ 和 $M_2$ 流出：

$$
\begin{aligned}
I_x &= g_{m1}V_x + g_{m2}V_P\\
&= g_{m1}V_x + g_{m2}\frac{g_{m1}R_D}{2}V_x\\
&= g_{m1}V_x\left(1 + \frac{g_{m2}R_D}{2}\right),
\end{aligned}
$$

$$R_{in} = \frac{V_x}{I_x} = \frac{1}{g_{m1}}\cdot\frac{1}{1 + g_{m2}R_D\dfrac{C_1}{C_1 + C_2}} = \frac{1}{g_{m1}\left(1 + g_{m2}R_D/2\right)}.$$

输入电压升高会使输出电压和 P 点电压升高，从而使 $M_2$ 从输入端吸取更多电流：并联反馈（shunt feedback）使 $1/g_{m1}$ 被除以 $1 + g_{m2}R_D/2$。

### 第 3 步 — 用偏置电流表示跨导

由 $(W/L)_1 = 50/0.5 = 100$、$(W/L)_2 = 100/0.5 = 200$ 和 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$ 得（$I$ 以 A 为单位，$g_m$ 以 S 为单位）

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,(134\times10^{-6})(100)\,I} = \sqrt{0.0268\,I} = 0.1637\sqrt{I},\\
g_{m2} &= \sqrt{2\,(134\times10^{-6})(200)\,I} = \sqrt{0.0536\,I} = 0.2315\sqrt{I}.
\end{aligned}
$$

### 第 4 步 — 求解 $R_{in} = 50\ \Omega$

条件为 $g_{m1}(1 + g_{m2}R_D/2) = 1/(50\ \Omega) = 0.02$ S，其中 $R_D/2 = 1\ \mathrm{k}\Omega$。令 $x = \sqrt{I}$：

$$
\begin{aligned}
0.1637\,x\,(1 + 0.2315\,x\times1000) &= 0.02\\
0.1637\,x\,(1 + 231.5\,x) &= 0.02\\
37.90\,x^2 + 0.1637\,x - 0.02 &= 0 .
\end{aligned}
$$

取正根：

$$
\begin{aligned}
x &= \frac{-0.1637 + \sqrt{0.1637^2 + 4(37.90)(0.02)}}{2(37.90)} = \frac{-0.1637 + \sqrt{0.0268 + 3.032}}{75.80}\\
&= \frac{-0.1637 + 1.749}{75.80} = \frac{1.585}{75.80} = 0.02091\ \sqrt{\mathrm{A}},
\end{aligned}
$$

$$I = x^2 = (0.02091)^2 = 4.37\times10^{-4}\ \mathrm{A} = 0.437\ \mathrm{mA}.$$

### 第 5 步 — 验证

$$
\begin{aligned}
g_{m1} &= 0.1637\times0.02091 = 3.42\ \mathrm{mS}, \qquad \frac{1}{g_{m1}} = 292\ \Omega,\\
g_{m2} &= 0.2315\times0.02091 = 4.84\ \mathrm{mS}, \qquad \frac{g_{m2}R_D}{2} = 4.84\times10^{-3}\times1000 = 4.84,\\
R_{in} &= \frac{292\ \Omega}{1 + 4.84} = \frac{292}{5.84}\ \Omega = 50.0\ \Omega\ \checkmark
\end{aligned}
$$

过驱动电压（$V_{ov} = 2I/g_m$）：$V_{ov1} = 0.874\ \mathrm{mA}/3.42\ \mathrm{mS} = 0.26$ V，$V_{ov2} = 0.874\ \mathrm{mA}/4.84\ \mathrm{mS} = 0.18$ V，都是合理的数值；$R_D$ 上的直流压降为 $IR_D = 0.87$ V。

若无反馈，要使 $1/g_{m1} = 50\ \Omega$ 就需要 $g_{m1} = 20$ mS，即 $I = (0.02)^2/0.0268 \approx 15$ mA：反馈使电流节省约 34 倍。

### 结果

$$R_{in} = \frac{1}{g_{m1}\left(1 + g_{m2}R_D\,\dfrac{C_1}{C_1 + C_2}\right)} = \frac{1}{g_{m1}(1 + g_{m2}\cdot1\ \mathrm{k}\Omega)} = 50\ \Omega \;\Rightarrow\; I_{D1} = I_{D2} \approx 0.44\ \mathrm{mA}\ (0.437\ \mathrm{mA}),$$

其中 $g_{m1} \approx 3.42$ mS，$g_{m2} \approx 4.84$ mS，环路增益 $g_{m2}R_D/2 \approx 4.84$。

**常见错误。** 忽略反馈，令 $1/g_{m1} = 50\ \Omega$，得到约 15 mA。

**常见错误。** 漏掉分压因子 $C_1/(C_1 + C_2) = 1/2$，即使用 $1 + g_{m2}R_D$，得到约 0.23 mA。实际上只有一半的 $V_{out}$ 到达 $M_2$ 的栅极。

**常见错误。** 给 $M_1$ 和 $M_2$ 指定不同的偏置电流，或者声称反馈会提高 $R_{in}$。两个器件是串联的，而且输入电压升高时，$M_2$ 的额外电流会**流出**输入节点。

# 详细步骤 - R417

**思路。** 把每个晶体管的沟道热噪声（channel thermal noise）建模为漏源之间的电流。两个噪声电流都流入同一个输出节点，因此把它们的功率相加，换算成输出电压，再除以电压增益的平方。

### 第 1 步 — 噪声模型

$$\overline{I_{n1}^2} = 4kT\gamma g_{m1},\qquad \overline{I_{n2}^2} = 4kT\gamma g_{m2}\qquad(\mathrm{A^2/Hz}),$$

两者互不相关，因此功率相加。$V_{DD}$ 和地都是交流地，因此两个噪声电流都接在输出节点与交流地之间，而该节点的输出电阻为 $R_0 = r_{O1}\parallel r_{O2}$。$r_{O1}$ 和 $r_{O2}$ 是晶体管模型的一部分，而不是实际的电阻，因此它们本身不产生噪声。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 输出噪声

输入接交流地时，两个受控源都不起作用，总噪声电流流过 $R_0$：

$$
\begin{aligned}
\overline{I_{n,out}^2} &= \overline{I_{n1}^2} + \overline{I_{n2}^2} = 4kT\gamma\,(g_{m1} + g_{m2}),\\
\overline{V_{n,out}^2} &= \overline{I_{n,out}^2}\,R_0^2 = 4kT\gamma\,(g_{m1} + g_{m2})\,(r_{O1}\parallel r_{O2})^2 .
\end{aligned}
$$

### 第 3 步 — 电压增益

$M_1$ 从输出节点抽取 $g_{m1}v_{in}$；$M_2$ 的 $v_{SG}$ 变化 $-v_{in}$，它向输出节点送入的电流**减少** $g_{m2}v_{in}$。对输出端列基尔霍夫电流定律（KCL）：

$$
\begin{aligned}
(g_{m1} + g_{m2})\,v_{in} + \frac{v_{out}}{R_0} &= 0\\
A_v = \frac{v_{out}}{v_{in}} &= -(g_{m1} + g_{m2})\,(r_{O1}\parallel r_{O2}) .
\end{aligned}
$$

### 第 4 步 — 将噪声折算到输入端

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2} = \frac{4kT\gamma\,(g_{m1} + g_{m2})\,R_0^2}{(g_{m1} + g_{m2})^2R_0^2}\\
&= \frac{4kT\gamma}{g_{m1} + g_{m2}} .
\end{aligned}
$$

$R_0$ 被约去，因此有限的输出电阻不影响结果。当 $\gamma = 2/3$ 时：

$$\overline{V_{n,in}^2} = \frac{8kT}{3\,(g_{m1} + g_{m2})} .$$

反相器的表现就像一个跨导为 $g_{m1} + g_{m2}$、沟道噪声为 $4kT\gamma(g_{m1} + g_{m2})$ 的单个晶体管：PMOS 增加了噪声，但也放大了信号，因此结果具有单器件的形式 $4kT\gamma/g_m$。

### 第 5 步 — 逐个器件折算加以验证

$M_1$ 的噪声电流等效于一个**只与 $M_1$ 的栅极**串联的 $\overline{V^2} = 4kT\gamma/g_{m1}$。该噪声源在输出端产生 $g_{m1}V$，而真正的输入电压产生 $(g_{m1} + g_{m2})V$，因此折算到公共输入端时，$M_1$ 的贡献要乘以 $[g_{m1}/(g_{m1} + g_{m2})]^2$：

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{M_1} &= \frac{4kT\gamma}{g_{m1}}\cdot\frac{g_{m1}^2}{(g_{m1} + g_{m2})^2} = \frac{4kT\gamma\,g_{m1}}{(g_{m1} + g_{m2})^2},\\
\overline{V_{n,in}^2}\Big|_{M_2} &= \frac{4kT\gamma\,g_{m2}}{(g_{m1} + g_{m2})^2},\\
\text{sum} &= \frac{4kT\gamma\,(g_{m1} + g_{m2})}{(g_{m1} + g_{m2})^2} = \frac{4kT\gamma}{g_{m1} + g_{m2}},
\end{aligned}
$$

结果相同。

### 第 6 步 — 数量级估计（示例）

对于 $(W/L)_{1,2} = 50/0.5$、偏置在 3 V 反相器开关阈值（switching threshold）的情形（$I_D \approx 1.83$ mA，$g_{m1} \approx 7.0$ mS，$g_{m2} \approx 3.75$ mS，因此 $g_{m1} + g_{m2} \approx 10.8$ mS），取 $T = 300$ K，$\gamma = 2/3$：

$$
\begin{aligned}
4kT\gamma &= 4(1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K})(2/3) = 1.104\times10^{-20}\ \mathrm{J},\\
\overline{V_{n,in}^2} &= \frac{1.104\times10^{-20}}{10.76\times10^{-3}}\ \mathrm{V^2/Hz} = 1.03\times10^{-18}\ \mathrm{V^2/Hz},
\end{aligned}
$$

即约 1.0 nV/√Hz。

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT\gamma\,(g_{m1} + g_{m2})}{(g_{m1} + g_{m2})^2} = \frac{4kT\gamma}{g_{m1} + g_{m2}}\qquad\left(= \frac{8kT}{3(g_{m1} + g_{m2})}\ \text{for}\ \gamma = \tfrac23\right),$$

与 $r_{O1}$ 和 $r_{O2}$ 无关。

**常见错误。** 把两个器件折算到各自栅极的噪声直接相加，得到 $4kT\gamma/g_{m1} + 4kT\gamma/g_{m2}$。每一项都是把噪声电流折算到**它自己的**栅极，但输入同时驱动两个栅极，因此公共输入端的增益要用 $g_{m1} + g_{m2}$。

**常见错误。** 把 $M_2$ 当作无源负载，只用 $g_{m1}$ 折算，得到 $4kT\gamma(g_{m1} + g_{m2})/g_{m1}^2$。

**常见错误。** 为输出电阻加上热噪声项 $4kT/r_O$。输出电阻描述的是沟道长度调制（channel-length modulation），而不是实际的电阻。

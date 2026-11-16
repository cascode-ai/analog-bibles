# 详细步骤 - R199

**思路。** 采用差分半边电路（half circuit）：尾节点 P 和跨接在两个输出端之间的 $R_1$ 的中点都是虚地，因此每个输出端看到的是 $M_1$（带有 $r_{O1}$ 的跨导器）、PMOS 电流源 $M_3$（$r_{O3}$）和半个 $R_1$，三者并联。对输出端应用基尔霍夫电流定律（KCL）即可得到增益，再用直接的双节点分析验证因子 $R_1/2$。

### 第 1 步 — 半边电路模型与 KCL

把左输出端（$M_1$、$M_3$ 的漏极）记为 X，右输出端记为 Y，$M_1$、$M_2$ 的公共源极节点记为 P，并施加 $v_{in1} = +v_d/2$、$v_{in2} = -v_d/2$，其中 $v_d = v_{in1} - v_{in2}$。由对称性 $v_Y = -v_X$，因此 P 是虚地，$R_1$ 的中点也是虚地，于是从每个输出端到交流地相当于接了 $R_1/2$。$M_3$ 的栅极（$V_{b2}$）和源极（$V_{DD}$）都处于交流地，因此只剩下 $r_{O3}$。这样，节点 X 处有被 $M_1$ 抽走的 $g_{m1}v_d/2$，以及接地的 $r_{O1}$、$r_{O3}$ 和 $R_1/2$：

<!-- diagram: diagram-01.cir -->

X 点的 KCL：

$$g_{m1}\frac{v_d}{2} + \frac{v_X}{r_{O1}} + \frac{v_X}{r_{O3}} + \frac{v_X}{R_1/2} = 0 .$$

求解：

$$
\begin{aligned}
v_X\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{2}{R_1}\right) &= -g_{m1}\frac{v_d}{2}\\
v_X &= -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel\frac{R_1}{2}\right)\frac{v_d}{2}.
\end{aligned}
$$

由 $v_{out} = v_X - v_Y = 2v_X$ 得：

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\parallel\frac{R_1}{2}\right).$$

### 第 2 步 — 用直接的双节点分析验证

令 $v_P = 0$，$G_o = 1/r_{O1} + 1/r_{O3}$（每个输出端到交流地的电导，不含 $R_1$），对 X 点和 Y 点列 KCL：

$$g_{m1}\frac{v_d}{2} + G_o v_X + \frac{v_X - v_Y}{R_1} = 0, \qquad -g_{m1}\frac{v_d}{2} + G_o v_Y + \frac{v_Y - v_X}{R_1} = 0 .$$

第一式减去第二式：

$$
\begin{aligned}
g_{m1}v_d + G_o(v_X - v_Y) + \frac{2}{R_1}(v_X - v_Y) &= 0\\
\frac{v_X - v_Y}{v_d} &= -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{2}{R_1}} ,
\end{aligned}
$$

与第 1 步的结果相同。$R_1$ 中的电流 $(v_X - v_Y)/R_1 = 2v_X/R_1$ 是 $R_1$ 从 X 接地时所吸取电流的两倍，这就是它对每边相当于 $R_1/2$ 的原因。

### 第 3 步 — 物理解释

没有 $R_1$ 时，电流源负载会给出很高的增益 $g_{m1}(r_{O1}\parallel r_{O3})$；$R_1$ 则设定了一个更低但更确定的增益：若 $R_1/2 \ll r_{O1}\parallel r_{O3}$，则 $A_v \approx -g_{m1}R_1/2$。对共模信号而言，$R_1$ 中没有电流，因此它**不能**确定输出共模电平（common-mode level），这一级仍然需要共模反馈（common-mode feedback）。

**数值感受：** 取 $g_{m1} = 1$ mS，$r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$，$R_1 = 10\ \mathrm{k}\Omega$：

$$
\begin{aligned}
r_{O1}\parallel r_{O3}\parallel\frac{R_1}{2} &= \frac{1}{\frac{1}{50} + \frac{1}{50} + \frac{1}{5}}\ \mathrm{k}\Omega = \frac{1}{0.24}\ \mathrm{k}\Omega = 4.17\ \mathrm{k}\Omega,\\
A_v &= -(1\ \mathrm{mS})(4.17\ \mathrm{k}\Omega) = -4.17 .
\end{aligned}
$$

### 结果

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -g_{m1}\left(r_{O1}\,\Big\|\,r_{O3}\,\Big\|\,\frac{R_1}{2}\right).$$

$M_3$ 和 $M_4$（栅极接 $V_{b2}$）是输出电阻为 $r_{O3}$ 的电流源；对差分信号而言，$R_1$ 的中点是虚地，因此每个输出端看到的是 $R_1/2$。

**常见错误。** 用 $R_1$ 代替 $R_1/2$。跨接在两个反向摆动节点之间的电阻，其中点是虚地，因此每个半边电路只看到它的一半。

**常见错误。** 把 $M_3$/$M_4$ 当作二极管连接（diode-connected）器件，在负载中计入 $1/g_{m3}$。它们的栅极接固定偏置 $V_{b2}$，因此只贡献 $r_{O3}$。

**常见错误。** 忽略 $R_1$，或者把它与负载串联。它跨接在两个输出端之间，因此在半边电路中它是与 $r_{O1}$、$r_{O3}$ 并联的 $R_1/2$。

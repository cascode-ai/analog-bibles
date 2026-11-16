# 详细步骤 - R283

**思路。** $C_{in}$ 把理想输入源耦合到节点 X，因此它与 X 处看到的小信号电阻 $R_X$ 构成一个高通滤波器，转折频率为 $1/(R_XC_{in})$。X 是一个带反馈电阻 $R_F$ 的反相放大器的输入，因此 $R_F$ 看起来被环路增益（loop gain）减小了（这就是作用在电阻上的密勒效应）。我们还要验证电路的其余部分不会引入其他的频率依赖。

### 第 1 步 — $C_1$ 短路时的小信号模型（small-signal model）

$C_1$ 短路时，$M_2$ 的源极处于交流地，因此**两个晶体管都对 $v_X$ 作出响应**，它们的漏极电流在输出端相加：这是一个互补共源级。$M_1$ 和 $M_2$ 各自从输出端向交流地吸取 $g_mv_X$ 的电流，$r_{O1}$ 和 $r_{O2}$ 也接在输出端；理想的 $I_1$ 没有小信号电流，栅极也不取电流。令 $G = g_{m1} + g_{m2}$，$R_o = r_{O1}\|r_{O2}$，则输出节点等效为一个向地吸取的电流 $Gv_X$ 与 $R_o$ 并联，$R_F$ 再把它连回 X。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 从 X 看进去的电阻

在 X 处施加测试电压 $v_X$（去掉 $C_{in}$）；它提供的电流 $i_X$ 经 $R_F$ 流向输出端：

$$i_X = \frac{v_X - v_{out}}{R_F}. \tag{1}$$

输出节点的基尔霍夫电流定律（KCL）方程：

$$i_X = Gv_X + \frac{v_{out}}{R_o} \quad\Longrightarrow\quad v_{out} = R_o\,(i_X - Gv_X). \tag{2}$$

把 (2) 代入 (1)：

$$
\begin{aligned}
i_XR_F &= v_X - R_oi_X + GR_ov_X\\
i_X(R_F + R_o) &= v_X(1 + GR_o)\\
R_X = \frac{v_X}{i_X} &= \frac{R_F + r_{O1}\|r_{O2}}{1 + (g_{m1} + g_{m2})(r_{O1}\|r_{O2})} .
\end{aligned}
$$

令 $A_0 = (g_{m1} + g_{m2})(r_{O1}\|r_{O2})$ 为开环增益（open-loop gain）的大小，则 X 升高 $v_X$ 会使输出下降约 $A_0v_X$，因此 $R_F$ 中的电流是其远端接地时的 $(1 + A_0)$ 倍：从 X 看进去，它就像 $R_F/(1 + A_0)$。

### 第 3 步 — 高通转折频率

由理想源驱动的 $C_{in}$ 看到的是到交流地的 $R_X$：

$$\frac{V_X}{V_{in}}(s) = \frac{R_X}{R_X + \dfrac{1}{sC_{in}}} = \frac{sR_XC_{in}}{1 + sR_XC_{in}},$$

这是一个一阶高通，转折频率为 $\omega = 1/(R_XC_{in})$。

**$V_{out}/V_X$ 与频率无关。** 由 (1) 和 (2) 消去 $i_X$：

$$v_{out}\left(1 + \frac{R_o}{R_F}\right) = v_XR_o\left(\frac{1}{R_F} - G\right) \quad\Longrightarrow\quad \frac{v_{out}}{v_X} = \frac{(1 - GR_F)R_o}{R_F + R_o},$$

这是一个常数，因此 $V_{out}/V_{in}$ 具有相同的转折频率：

$$\omega_{corner} = \frac{1}{R_XC_{in}} = \frac{1 + (g_{m1} + g_{m2})(r_{O1}\|r_{O2})}{(R_F + r_{O1}\|r_{O2})\,C_{in}}, \qquad f_{corner} = \frac{\omega_{corner}}{2\pi}.$$

当 $R_F \gg r_{O1}\|r_{O2}$ 时：

$$f_{corner} \approx \frac{1 + A_0}{2\pi R_FC_{in}} .$$

### 第 4 步 — 数值示例

取 $g_{m1} = g_{m2} = 1$ mS，$r_{O1} = r_{O2} = 50\ \mathrm{k}\Omega$，$R_F = 1\ \mathrm{M}\Omega$，$C_{in} = 10$ pF：

$$
\begin{aligned}
R_o &= 50\ \|\ 50 = 25\ \mathrm{k}\Omega, \qquad A_0 = (2\ \mathrm{mS})(25\ \mathrm{k}\Omega) = 50,\\
R_X &= \frac{1000 + 25}{1 + 50}\ \mathrm{k}\Omega = 20.1\ \mathrm{k}\Omega,\\
f_{corner} &= \frac{1}{2\pi(20.1\ \mathrm{k}\Omega)(10\ \mathrm{pF})} = 792\ \mathrm{kHz}.
\end{aligned}
$$

简单估计的 $1/(2\pi R_FC_{in}) = 15.9$ kHz 偏低了约 50 倍。

### 结果

$$\omega_{corner} = \frac{1 + (g_{m1} + g_{m2})(r_{O1}\|r_{O2})}{(R_F + r_{O1}\|r_{O2})\,C_{in}}, \qquad f_{corner} = \frac{1 + A_0}{2\pi(R_F + r_{O1}\|r_{O2})C_{in}} \approx \frac{1 + A_0}{2\pi R_FC_{in}}\ \ (R_F \gg r_{O1}\|r_{O2}),$$

其中 $A_0 = (g_{m1} + g_{m2})(r_{O1}\|r_{O2})$。$C_{in}$ 看到的是 X 处的电阻，即被密勒效应减小了的 $R_F$：$R_X = (R_F + r_{O1}\|r_{O2})/(1 + A_0)$。

**常见错误。** 用 $1/(R_FC_{in})$ 作为转折频率。$R_F$ 接到反相放大器的输出端而不是地，因此它在 X 处呈现的电阻约缩小 $1 + A_0$ 倍，转折频率也相应升高。

**常见错误。** 只用 $g_{m1}$。$C_1$ 把 $M_2$ 的源极短接到交流地，$M_2$ 就成为由同一栅极电压驱动的第二个共源器件，其跨导与 $M_1$ 的跨导相加。

**常见错误。** 对 $C_{in}$ 本身做密勒倍增（Miller multiplication），或者把频率除以增益。$C_{in}$ 与输入串联，而不是反馈元件；放大器改变的是它所看到的电阻，从而使转折频率升高。

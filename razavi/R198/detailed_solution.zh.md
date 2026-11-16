# 详细步骤 - R198

**思路。** 在差分半边电路中，尾节点 P 是虚地，因此每一边都是一个共源级（common-source stage）：$M_1$ 以 PMOS 电流源 $M_3$ 为负载。$M_3$ 带有由 $R_1$ 构成的**源极负反馈**，而且其源极不在衬底电位上，因此它的输出电阻必须计入体效应。增益等于 $-g_{m1}$ 乘以 $r_{O1}$ 与该输出电阻的并联值。

### 第 1 步 — 差分半边电路

把左输出端（$M_1$、$M_3$ 的漏极）记为 X，右输出端记为 Y，$M_1$、$M_2$ 的公共源极节点记为 P。对于 $v_{in1} = +v_d/2$、$v_{in2} = -v_d/2$，由对称性得 $v_Y = -v_X$，P 是**虚地**，因此每半边都是一个共源放大器：

- $M_1$：栅极为 $v_d/2$，源极和衬底都处于交流地，因此 $v_{bs1} = 0$，体效应不起作用；
- 负载：$M_3$ 的漏极，其栅极（$V_{b2}$）和衬底（$V_{DD}$）都处于交流地，源极经 $R_1$ 接到交流地。

半边电路的增益为

$$\frac{v_X}{v_d/2} = -g_{m1}\left(r_{O1}\parallel R_{out3}\right),$$

其中 $R_{out3}$ 是从 $M_3$ 漏极看进去的电阻。

### 第 2 步 — 带源极负反馈的 PMOS 的输出电阻（计入体效应）

在 $M_3$ 的漏极加测试电压 $v_x$，流入的电流为 $i_x$。PMOS 模型中有从漏极流向源极的 $g_{m3}v_{gs3}$ 和 $g_{mb3}v_{bs3}$，以及跨接在漏源之间的 $r_{O3}$；源极节点 $s_3$ 经 $R_1$ 接到交流地。

<!-- diagram: diagram-01.cir -->

栅极没有电流流入，因此全部 $i_x$ 都经 $R_1$ 流出；由于栅极和衬底处于交流地，

$$v_{s3} = i_xR_1, \qquad v_{gs3} = v_{bs3} = -i_xR_1 .$$

对漏极应用基尔霍夫电流定律（KCL）：

$$i_x = g_{m3}v_{gs3} + g_{mb3}v_{bs3} + \frac{v_x - v_{s3}}{r_{O3}} = -(g_{m3} + g_{mb3})R_1i_x + \frac{v_x - v_{s3}}{r_{O3}} .$$

解出 $v_x$：

$$
\begin{aligned}
v_x - v_{s3} &= i_xr_{O3}\left[1 + (g_{m3} + g_{mb3})R_1\right]\\
v_x &= i_xR_1 + i_xr_{O3}\left[1 + (g_{m3} + g_{mb3})R_1\right],
\end{aligned}
$$

因此

$$R_{out3} = \frac{v_x}{i_x} = R_1 + r_{O3} + (g_{m3} + g_{mb3})\,r_{O3}R_1 .$$

体效应之所以出现，是因为 $M_3$ 的衬底接 $V_{DD}$，而其源极位于 $V_{DD} - I_DR_1$ 并随信号变化，因此 $v_{bs3} \ne 0$ 使负反馈因子中的 $g_{m3}$ 增加了 $g_{mb3}$。

### 第 3 步 — 差模增益

节点 X 看到的是 $r_{O1}$ 与 $R_{out3}$ 的并联，因此 $v_X = -g_{m1}(r_{O1}\parallel R_{out3})\,v_d/2$；由 $v_Y = -v_X$ 得 $v_{out} = 2v_X$，于是

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_{m1}\left\{r_{O1}\,\Big\|\,\left[R_1 + r_{O3} + (g_{m3} + g_{mb3})r_{O3}R_1\right]\right\}.$$

**近似。** 通常 $(g_{m3} + g_{mb3})R_1 \gg 1$ 且 $r_{O3} \gg R_1$，因此 $R_{out3} \approx (g_{m3} + g_{mb3})r_{O3}R_1$，并且

$$A_v \approx -g_{m1}\left\{r_{O1}\parallel\left[(g_{m3} + g_{mb3})r_{O3}R_1\right]\right\}.$$

当 $R_{out3} \gg r_{O1}$ 时，增益趋近输入器件的本征增益（intrinsic gain）$g_{m1}r_{O1}$。

**数值感受：** 取 $g_{m1} = 1$ mS，$r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$，$g_{m3} = 1$ mS，$g_{mb3} = 0.2$ mS，$R_1 = 2\ \mathrm{k}\Omega$：

$$
\begin{aligned}
R_{out3} &= 2 + 50 + (1.2\ \mathrm{mS})(50\ \mathrm{k}\Omega)(2\ \mathrm{k}\Omega) = 2 + 50 + 120 = 172\ \mathrm{k}\Omega,\\
r_{O1}\parallel R_{out3} &= \frac{50\times172}{50 + 172}\ \mathrm{k}\Omega = 38.7\ \mathrm{k}\Omega,\\
A_v &= -(1\ \mathrm{mS})(38.7\ \mathrm{k}\Omega) = -38.7,
\end{aligned}
$$

而没有源极负反馈时为 $-(1\ \mathrm{mS})(25\ \mathrm{k}\Omega) = -25$。

### 结果

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -g_{m1}\left\{r_{O1}\,\Big\|\,\left[R_1 + r_{O3} + (g_{m3} + g_{mb3})r_{O3}R_1\right]\right\} \approx -g_{m1}\left\{r_{O1}\parallel\left[(g_{m3} + g_{mb3})r_{O3}R_1\right]\right\}.$$

$M_3$（栅极接固定电压 $V_{b2}$）是一个由 $R_1$ 构成源极负反馈的 PMOS 电流源；由于其源极电位低于接在 $V_{DD}$ 上的衬底，它的输出电阻中包含体效应。P 是虚地，因此半边电路增益 $-g_{m1}(r_{O1}\parallel R_{out3})$ 就是差模增益。

**常见错误。** 把 $R_1$ 当作从输出端接到 $V_{DD}$ 的负载电阻，从而得到约 $g_{m1}R_1$ 的增益。$R_1$ 位于 $M_3$ 的**源极**，源极负反馈会把其漏极处的电阻**提高**到远大于 $R_1$。

**常见错误。** 漏掉 $g_{mb3}$。PMOS 的衬底接 $V_{DD}$，而其源极随 $i_xR_1$ 变化，因此 $v_{bs3} \ne 0$。

**常见错误。** 漏掉单独的“$+R_1$”项，或者取 $R_{out3} = r_{O3}$（完全忽略源极负反馈）。另外也不存在 $1/g_{m3}$ 项：$M_3$/$M_4$ 不是二极管连接（diode-connected）的。

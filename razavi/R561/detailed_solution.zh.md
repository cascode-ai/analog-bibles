# 详细步骤 - R561

**思路。** 起作用的噪声源有五个：$M_3$、$M_4$、$M_5$ 的漏极噪声电流，以及 $R_1$ 和 $R_2$ 的热噪声。理想运放调节公共栅极电压，使 $v_X = v_Y$，对噪声也是如此。求出这一约束所产生的栅极驱动电流，经 $M_5$（按电流镜比例 $K$ 放大）将其传到输出端，再加上输出支路自身的噪声，最后把功率相加。

### 第 1 步 — 小信号噪声模型

- **PMOS 器件。** 公共栅极的变化量为 $v_g$。$M_3$ 和 $M_4$ 相同，因此各自向其漏极节点注入相同的栅极驱动电流 $g \equiv -g_{m4}v_g$。$M_5$ 的宽度是它们的 $K = 4.45$ 倍，过驱动电压（overdrive voltage）相同，因此 $g_{m5} = Kg_{m4}$，其栅极驱动电流为 $Kg$。每个 PMOS 还向其漏极节点注入漏极噪声电流 $i_3$、$i_4$、$i_5$，$\overline{i_n^2} = 4kT\gamma g_m$；由于 $\lambda = 0$，没有 $r_O$。
- **双极型晶体管。** $Q_1$ 和 $Q_2$ 等效为 $r = 1/g_m$，$Q_3$ 等效为 $r_3$；忽略它们自身的噪声。
- **电阻。** $R_1$ 和 $R_2$，各自带有串联噪声电压 $\overline{v_R^2} = 4kTR$。
- **运放。** 理想且无噪声，因此迫使 $v_X = v_Y$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 小信号参数

$$
\begin{aligned}
g_{m3} = g_{m4} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(50\ \mu\mathrm{A})} = \sqrt{3.84\times10^{-7}}\ \mathrm{S} = 0.620\ \mathrm{mS},\\
g_{m5} &= Kg_{m4} = 4.45\times0.620\ \mathrm{mS} = 2.76\ \mathrm{mS}.
\end{aligned}
$$

（$M_5$ 的 $W/L = 445$，流过 222.5 μA；$\sqrt{2(38.4)(445)(222.5)}\ \mu\mathrm{S}$ 给出同样的 2.76 mS。）300 K 时 $V_T = 25.85$ mV：

$$
\begin{aligned}
r &= \frac{V_T}{I_{C1,2}} = \frac{25.85\ \mathrm{mV}}{50\ \mu\mathrm{A}} = 517\ \Omega\quad(Q_1, Q_2),\\
r_3 &= \frac{V_T}{I_{C3}} = \frac{25.85\ \mathrm{mV}}{222.5\ \mu\mathrm{A}} = 116\ \Omega\quad(Q_3).
\end{aligned}
$$

由 $4kT = 4(1.38\times10^{-23})(300) = 1.657\times10^{-20}$ J 及 $\gamma = 2/3$：

$$
\begin{aligned}
\overline{i_3^2} = \overline{i_4^2} &= 4kT\gamma g_{m4} = (1.657\times10^{-20})(0.667)(0.620\times10^{-3}) = 6.85\times10^{-24}\ \mathrm{A^2/Hz},\\
\overline{i_5^2} &= 4kT\gamma g_{m5} = (1.657\times10^{-20})(0.667)(2.76\times10^{-3}) = 3.05\times10^{-23}\ \mathrm{A^2/Hz},\\
\overline{v_{R1}^2} &= 4kTR_1 = 1.657\times10^{-17}\ \mathrm{V^2/Hz},\\
\overline{v_{R2}^2} &= 4kTR_2 = 3.31\times10^{-17}\ \mathrm{V^2/Hz}.
\end{aligned}
$$

### 第 3 步 — 环路：运放产生多大的栅极驱动电流？

在 X 处，电流 $g + i_3$ 流入 $r$；在 Y 处，电流 $g + i_4$ 先流过 $R_1$（与 $v_{R1}$ 串联），再流过 $r$：

$$v_X = (g + i_3)\,r, \qquad v_Y = (g + i_4)(R_1 + r) + v_{R1}.$$

令 $v_X = v_Y$：

$$(g + i_3)\,r = (g + i_4)(R_1 + r) + v_{R1},$$

$$
\begin{aligned}
g\,r - g(R_1 + r) &= i_4(R_1 + r) + v_{R1} - i_3r\\
-g\,R_1 &= i_4(R_1 + r) + v_{R1} - i_3r\\
g &= \frac{i_3\,r - i_4(R_1 + r) - v_{R1}}{R_1}.
\end{aligned}
$$

环路调节栅极电压，直到 X 与 Y 之间的任何不平衡都由 $R_1$ 承担，因此 $g$ 等于不平衡电压除以 $R_1$，这与直流的与绝对温度成正比（PTAT）电流等于 $V_T\ln n/R_1$ 完全类似。

### 第 4 步 — 输出

$M_5$ 把 $Kg + i_5$ 送入 $R_2$（带有 $v_{R2}$）与 $r_3$ 的串联支路：

$$v_{out} = (Kg + i_5)(R_2 + r_3) + v_{R2}.$$

代入 $g$：

$$v_{out} = (R_2 + r_3)\left[\frac{K r}{R_1}\,i_3 - \frac{K(R_1 + r)}{R_1}\,i_4 - \frac{K}{R_1}\,v_{R1} + i_5\right] + v_{R2}.$$

五个噪声源互不相关，因此它们的功率相加：

$$\overline{v_{out}^2} = (R_2 + r_3)^2\left[K^2\left(\frac{r}{R_1}\right)^2\overline{i_3^2} + K^2\left(\frac{R_1 + r}{R_1}\right)^2\overline{i_4^2} + \frac{K^2}{R_1^2}\overline{v_{R1}^2} + \overline{i_5^2}\right] + \overline{v_{R2}^2}.$$

### 第 5 步 — 传输系数

由 $R_2 + r_3 = 2116\ \Omega$，$K = 4.45$，$R_1 = 1$ kΩ，$r = 517\ \Omega$：

$$
\begin{aligned}
\frac{K(R_2 + r_3)}{R_1} &= \frac{4.45\times2116}{1000} = 9.42 &&(\text{for } v_{R1}),\\
\frac{K(R_2 + r_3)(R_1 + r)}{R_1} &= 9.42\times1517\ \Omega = 14.29\ \mathrm{k}\Omega &&(\text{for } i_4),\\
\frac{K(R_2 + r_3)\,r}{R_1} &= 9.42\times517\ \Omega = 4.87\ \mathrm{k}\Omega &&(\text{for } i_3),\\
R_2 + r_3 &= 2.12\ \mathrm{k}\Omega &&(\text{for } i_5),\\
1 &&&(\text{for } v_{R2}).
\end{aligned}
$$

### 第 6 步 — 各项贡献：均方根（rms）密度 = 传输系数 × 噪声源的均方根值

各噪声源的均方根值为 $\sqrt{\overline{i_{3,4}^2}} = 2.62$ pA/√Hz，$\sqrt{\overline{i_5^2}} = 5.52$ pA/√Hz，$\sqrt{\overline{v_{R1}^2}} = 4.07$ nV/√Hz，$\sqrt{\overline{v_{R2}^2}} = 5.76$ nV/√Hz。

$$
\begin{aligned}
R_1:&\quad 9.42\times4.07\ \mathrm{nV/\sqrt{Hz}} = 38.3\ \mathrm{nV/\sqrt{Hz}},\\
M_4:&\quad (14.29\ \mathrm{k}\Omega)(2.62\ \mathrm{pA/\sqrt{Hz}}) = 37.4\ \mathrm{nV/\sqrt{Hz}},\\
M_3:&\quad (4.87\ \mathrm{k}\Omega)(2.62\ \mathrm{pA/\sqrt{Hz}}) = 12.7\ \mathrm{nV/\sqrt{Hz}},\\
M_5:&\quad (2.12\ \mathrm{k}\Omega)(5.52\ \mathrm{pA/\sqrt{Hz}}) = 11.7\ \mathrm{nV/\sqrt{Hz}},\\
R_2:&\quad 5.8\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

### 第 7 步 — 总噪声

$$
\begin{aligned}
\overline{v_{out}^2} &= \left(38.3^2 + 37.4^2 + 12.7^2 + 11.7^2 + 5.8^2\right)\ (\mathrm{nV})^2/\mathrm{Hz}\\
&= (1469 + 1397 + 162 + 136 + 33)\ (\mathrm{nV})^2/\mathrm{Hz}\\
&= 3198\ (\mathrm{nV})^2/\mathrm{Hz} \approx 3.2\times10^{-15}\ \mathrm{V^2/Hz},
\end{aligned}
$$

$$\sqrt{\overline{v_{out}^2}} \approx 56.5\ \mathrm{nV/\sqrt{Hz}}.$$

- $R_1$ 和 $M_4$ 占主导：它们的噪声直接表现为 X–Y 之间的不平衡，并被放大 $K(R_2 + r_3)/R_1 \approx 9.4$ 倍，这与放大 PTAT 电压的因子相同（运放失调也会被同样放大）。
- $M_3$ 的噪声只以 X 处的小电阻加权（517 Ω，而 Y 处为 1517 Ω）；$M_5$ 和 $R_2$ 在输出端直接叠加，不经过环路增益。两者都是次要的。
- 若（错误地）把双极型晶体管的电阻设为零，$M_3$ 的贡献将消失，$M_4$ 的传输系数将减小为 $KR_2 = 8.9$ kΩ，结果约为 45 nV/√Hz。

### 结果

$$\overline{V_{n,out}^2} \approx 3.2\times10^{-15}\ \mathrm{V^2/Hz}, \qquad \sqrt{\overline{V_{n,out}^2}} \approx 56\ \mathrm{nV/\sqrt{Hz}}.$$

它由下式得到

$$\overline{v_{out}^2} = (R_2 + r_3)^2\left[K^2\left(\frac{r}{R_1}\right)^2\overline{i_3^2} + K^2\left(\frac{R_1 + r}{R_1}\right)^2\overline{i_4^2} + K^2\frac{4kT}{R_1} + \overline{i_5^2}\right] + 4kTR_2,$$

其中 $\overline{i_{3,4}^2} = 4kT\gamma g_{m4}$，$\overline{i_5^2} = 4kT\gamma g_{m5}$，$g_{m4} = 0.62$ mS，$g_{m5} = 2.76$ mS，$r = 517\ \Omega$，$r_3 = 116\ \Omega$，$K = 4.45$。各项贡献为：$R_1$ 38.3，$M_4$ 37.4，$M_3$ 12.7，$M_5$ 11.7，$R_2$ 5.8 nV/√Hz。

**常见错误。** 把 PMOS 的栅极当作交流地，从而只有 $M_5$ 和 $R_2$ 有贡献（约 13 nV/√Hz）。运放驱动栅极以抵消 X–Y 之间的任何不平衡，因此 $M_3$、$M_4$ 和 $R_1$ 的噪声会到达栅极，并经 $M_5$ 到达输出端。

**常见错误。** 忘记电流镜比例 $K$。$M_5$ 复制由环路设定的电流并乘以 $K = 4.45$；漏掉它会使三个主要贡献的均方根值被低估 4.45 倍。

**常见错误。** 忽略双极型晶体管的小信号电阻。它们各为 517 Ω，与 $R_1 = 1$ kΩ 相比不可忽略；忽略它们会使结果降到约 45 nV/√Hz。

# 详细步骤 - R441

**思路。** 该电路是共源级 $M_1$ 加上一个调节型（增益提升型）共源共栅结构：$M_3$ 检测 X 并驱动共源共栅管 $M_2$ 的栅极。把每个晶体管的热噪声建模为漏源之间的电流 $4kT\gamma g_m$，求出每个噪声源产生的短路输出电流（short-circuit output current），再除以该级的短路跨导（short-circuit transconductance）$G_m$；各个互不相关的噪声功率直接相加。

### 第 1 步 — 反馈环路与噪声源

把 $M_3$ 的漏极（$M_2$ 的栅极）记为节点 G。若 X 升高，$M_3$ 会把 G 拉低，从而减小 $V_{GS2}$，把 X 推回去。这一局部反馈使 X 几乎保持不变，并使输出电阻（output resistance）大约增大到原来的 $(1 + A_3)$ 倍，其中

$$A_3 = g_{m3}(r_{O3}\parallel r_{OP1})$$

是辅助放大器的增益。各个互不相关的噪声电流（每个都接在相应晶体管的漏极与源极之间）为

$$
\overline{I_{n1}^2} = 4kT\gamma g_{m1},\quad
\overline{I_{n2}^2} = 4kT\gamma g_{m2},\quad
\overline{I_{n3}^2} = 4kT\gamma g_{m3},\quad
\overline{I_{nP1}^2} = 4kT\gamma g_{mP1},\quad
\overline{I_{nP2}^2} = 4kT\gamma g_{mP2},
$$

其中 $\gamma = 2/3$。

### 第 2 步 — 小信号模型（small-signal model）

把 $V_{DD}$ 和所有偏置点都视为交流地：

- $M_1$：$g_{m1}v_{in}$、$r_{O1}$ 和 $I_{n1}$，均从 X 接到地。
- $M_3$：$g_{m3}v_X$、$r_{O3}$ 和 $I_{n3}$，均从 G 接到地；$M_{P1}$ 增加一个从 G 接到地的 $r_{OP1}$，并向 G 注入 $I_{nP1}$。
- $M_2$：衬底（bulk）接地；从 out 流向 X 的 $g_{m2}(v_G - v_X) - g_{mb2}v_X$，接在 out 与 X 之间的 $r_{O2}$，以及从 out 流向 X 的 $I_{n2}$。
- $M_{P2}$：从 out 接到地的 $r_{OP2}$，以及注入 out 的 $I_{nP2}$。

<!-- diagram: diagram-01.cir -->

每个噪声源看到的输出电阻都相同，因此把输出端短路到交流地后，每个噪声源的输入参考噪声就等于它产生的短路输出电流除以 $G_m$。不计噪声时，对节点 G 列 KCL 方程得 $v_G = -A_3v_X$，因此 $M_2$ 中从 out 流向 X 的电流为 $-Kv_X$，其中

$$K = g_{m2}(1 + A_3) + g_{mb2} + \frac{1}{r_{O2}} \approx g_{m2}(1 + A_3)$$

是输出端接地时向上看进 $M_2$ 源极的电导。

### 第 3 步 — 该级的短路跨导 $G_m$

输出端短路时，对节点 X 列 KCL 方程（从 $M_2$ 流入的电流 = 经 $M_1$ 和 $r_{O1}$ 流出的电流）：

$$
\begin{aligned}
-Kv_X &= g_{m1}v_{in} + \frac{v_X}{r_{O1}}\\
v_X &= -\frac{g_{m1}v_{in}}{K + 1/r_{O1}} .
\end{aligned}
$$

短路输出电流向下流过 $M_2$：

$$
\begin{aligned}
i_{out} &= -Kv_X = \frac{K}{K + 1/r_{O1}}\,g_{m1}v_{in}\\
G_m &= \frac{i_{out}}{v_{in}} = g_{m1}\,\frac{Kr_{O1}}{1 + Kr_{O1}} \approx g_{m1},
\end{aligned}
$$

这是因为 $Kr_{O1} \approx g_{m2}r_{O1}(1 + A_3) \gg 1$：X 点非常“硬”，$M_1$ 的信号电流基本上全部到达输出端。

### 第 4 步 — $M_1$ 的噪声

$I_{n1}$ 与 $g_{m1}v_{in}$ 并联，因此它等效于 $v_{in} = I_{n1}/g_{m1}$：

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}} .$$

### 第 5 步 — 输出电流源 $M_{P2}$ 的噪声

输出端短路时，$I_{nP2}$ 全部流入短路线，因此

$$\overline{V_{n,in}^2}\Big|_{M_{P2}} = \frac{\overline{I_{nP2}^2}}{G_m^2} \approx \frac{4kT\gamma g_{mP2}}{g_{m1}^2} .$$

这里除以的是 $g_{m1}^2$，而不是 $g_{mP2}^2$：输入端必须通过 $M_1$ 产生一个相等的电流才能模拟它。

### 第 6 步 — 共源共栅管 $M_2$ 的噪声

输出端短路且 $v_{in} = 0$ 时，$I_{n2}$ 从 out 流向 X，而到达 X 的全部电流都经 $r_{O1}$ 流出：

$$
\begin{aligned}
-Kv_X + I_{n2} &= \frac{v_X}{r_{O1}}\\
v_X &= \frac{I_{n2}}{K + 1/r_{O1}} .
\end{aligned}
$$

短路输出电流就是流过 $M_2$ 的电流，它等于 $v_X/r_{O1}$：

$$i_{out} = \frac{v_X}{r_{O1}} = \frac{I_{n2}}{1 + Kr_{O1}} .$$

除以 $G_m = g_{m1}Kr_{O1}/(1 + Kr_{O1})$：

$$
\begin{aligned}
V_{n,in}\Big|_{M_2} &= \frac{I_{n2}}{g_{m1}Kr_{O1}}\\
\overline{V_{n,in}^2}\Big|_{M_2} &= \frac{4kT\gamma g_{m2}}{(g_{m1}Kr_{O1})^2} \approx \frac{4kT\gamma}{g_{m2}\left[g_{m1}r_{O1}(1 + A_3)\right]^2} .
\end{aligned}
$$

与 $M_1$ 的噪声项相比，这一项多了一个很小的因子 $g_{m1}/\{g_{m2}[g_{m1}r_{O1}(1 + A_3)]^2\}$：源极接有大电阻（$r_{O1}$，局部反馈又使它看起来更大）作为负反馈的共源共栅管，其噪声电流大部分只在自身内部循环。

### 第 7 步 — 辅助放大器（$M_3$ 和 $M_{P1}$）的噪声

$M_3$ 和 $M_{P1}$ 的噪声电流都作用在节点 G 上；由于互不相关，它们合成为一个注入 G 的净电流 $I_{nG}$，且 $\overline{I_{nG}^2} = 4kT\gamma(g_{m3} + g_{mP1})$。令 $R_G = r_{O3}\parallel r_{OP1}$，对节点 G 列 KCL 方程得

$$
\begin{aligned}
I_{nG} &= g_{m3}v_X + \frac{v_G}{R_G}\\
v_G &= I_{nG}R_G - A_3v_X ,
\end{aligned}
$$

再对节点 X 列 KCL 方程（输出端短路，$v_{in} = 0$）：

$$
\begin{aligned}
g_{m2}(v_G - v_X) - \left(g_{mb2} + \frac{1}{r_{O2}}\right)v_X &= \frac{v_X}{r_{O1}}\\
g_{m2}I_{nG}R_G &= \left(K + \frac{1}{r_{O1}}\right)v_X\\
v_X &= \frac{g_{m2}R_G\,I_{nG}}{K + 1/r_{O1}} \approx \frac{R_G\,I_{nG}}{1 + A_3} \approx \frac{I_{nG}}{g_{m3}} .
\end{aligned}
$$

短路输出电流仍为 $v_X/r_{O1}$；与第 6 步一样除以 $G_m$：

$$V_{n,in}\Big|_{M_3,M_{P1}} = \frac{g_{m2}R_G\,I_{nG}}{g_{m1}r_{O1}K} \approx \frac{R_G\,I_{nG}}{(1 + A_3)\,g_{m1}r_{O1}} \approx \frac{I_{nG}}{g_{m3}\,g_{m1}r_{O1}}\quad(A_3 \gg 1),$$

因此

$$\overline{V_{n,in}^2}\Big|_{M_3,M_{P1}} \approx \frac{4kT\gamma}{(g_{m1}r_{O1})^2}\left(\frac{1}{g_{m3}} + \frac{g_{mP1}}{g_{m3}^2}\right).$$

环路使 X 跟随一个 $\approx I_{nG}/g_{m3}$ 的电压，但 X 处的电压只能通过 $r_{O1}$ 改变输出电流，比输入端通过 $g_{m1}$ 产生的作用弱 $g_{m1}r_{O1}$ 倍；因此这部分贡献被抑制了 $(g_{m1}r_{O1})^2$ 倍，典型值为 $10^3$–$10^4$。

### 第 8 步 — 总输入参考噪声

将互不相关的噪声功率相加：

$$
\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\gamma g_{mP2}}{g_{m1}^2}
+ \underbrace{\frac{4kT\gamma}{g_{m2}\left[g_{m1}r_{O1}(1 + A_3)\right]^2}}_{M_2,\ \text{negligible}}
+ \underbrace{\frac{4kT\gamma}{(g_{m1}r_{O1})^2}\left(\frac{1}{g_{m3}} + \frac{g_{mP1}}{g_{m3}^2}\right)}_{M_3,\,M_{P1},\ \text{negligible}} .
$$

略去两个被抑制的项（除非 $g_{m3}$ 极小，否则这样做成立），并代入 $\gamma = 2/3$：

$$\overline{V_{n,in}^2} \approx 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{mP2}}{g_{m1}^2}\right) = \frac{8kT}{3}\left(\frac{1}{g_{m1}} + \frac{g_{mP2}}{g_{m1}^2}\right).$$

增益提升并不改变主要噪声：它与以 PMOS 电流源为负载的普通共源级相同。在高频下，X 处的电容会让更多的共源共栅管噪声和辅助放大器噪声通过，但本题求的是低频值。

### 结果

$$\overline{V_{n,in}^2} \approx 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{mP2}}{g_{m1}^2}\right), \qquad \gamma = \frac23 .$$

$M_1$ 和输出电流源 $M_{P2}$ 起主导作用。共源共栅管 $M_2$ 的噪声被抑制了 $[g_{m1}r_{O1}(1 + A_3)]^2 g_{m2}/g_{m1}$ 倍，辅助放大器（$M_3$、$M_{P1}$）的噪声被抑制了 $(g_{m1}r_{O1})^2$ 倍，因此两者在低频下都可以忽略。

**常见错误。** 像差分对（differential pair）那样使用 $8kT\gamma$（或把结果加倍）。这个单端级只有一个输入晶体管，因此系数是 $4kT\gamma$。

**常见错误。** 把负载噪声折合为 $4kT\gamma/g_{mP2}$。输入端只能通过 $g_{m1}$ 重现 $M_{P2}$ 注入输出端的电流，因此它折合到输入端为 $4kT\gamma g_{mP2}/g_{m1}^2$。

**常见错误。** 以为“辅助放大器位于信号通路中”，就把 $M_3$ 和 $M_{P1}$ 的噪声以单位权重计入输入端。它们的噪声只是使 X 移动，而 X 只能通过 $1/r_{O1}$ 改变输出电流，比输入端通过 $g_{m1}$ 产生的作用弱 $g_{m1}r_{O1}$ 倍。

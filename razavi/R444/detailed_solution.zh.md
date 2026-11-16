# 详细步骤 - R444

**思路。** 该级由共源放大器（common-source amplifier）$M_1$ 和增益提升型的调节型共源共栅（regulated cascode）管 $M_2$ 构成，后者的栅极由辅助放大器 $M_3$（负载为 $I_1$）驱动。其增益为 $-G_mR_{out}$，其中 $R_{out}$ 是调节型共源共栅结构的电阻与 PMOS 负载 $I_2$ 的并联。先求出小信号参数，说明 PMOS 负载决定了 $R_{out}$，再把每个晶体管的漏极噪声电流折合到输入端。

### 第 1 步 — 偏置电流与工作点

把 $M_3$ 的漏极（$M_2$ 的栅极）记为节点 G。由于栅极不吸取电流，

$$I_{D1} = I_{D2} = I_2 = 0.5\ \mathrm{mA}, \qquad I_{D3} = I_1 = 100\ \mu\mathrm{A}.$$

所有 NMOS 器件的 $W/L = 100/0.5 = 200$；PMOS 电流源的 $W/L = 50/0.5 = 100$。经过 $M_3$ 的反馈环路把 X 保持在使 $M_3$ 流过 $I_1$ 的栅源电压上：

$$V_X = V_{GS3} = 0.7\ \mathrm{V} + \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(200)}} = 0.7 + 0.086 = 0.786\ \mathrm{V}.$$

因此 $V_{SB2} = 0.786$ V，这使 $M_2$ 存在体效应（body effect）。

### 第 2 步 — 小信号参数

**主通路（$M_1$、$M_2$；0.5 mA）：**

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{S} = 5.18\ \mathrm{mS},\\
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .
\end{aligned}
$$

**$M_2$ 的体跨导（body transconductance）** $g_{mb2} = \eta g_{m2}$，其中 $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$：

$$
\eta_2 = \frac{0.45}{2\sqrt{0.9 + 0.786}} = \frac{0.45}{2\times1.2986} = 0.173, \qquad g_{mb2} = 0.173\times5.18\ \mathrm{mS} = 0.90\ \mathrm{mS}.
$$

**辅助放大器（$M_3$，负载为 $I_1$；100 μA）：**

$$
\begin{aligned}
g_{m3} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(200)(100\ \mu\mathrm{A})} = \sqrt{5.36\times10^{-6}}\ \mathrm{S} = 2.32\ \mathrm{mS},\\
r_{O3} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega,\\
r_{OP1} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 50\ \mathrm{k}\Omega,\\
A_3 &= g_{m3}(r_{O3}\parallel r_{OP1}) = (2.32\ \mathrm{mS})(33.3\ \mathrm{k}\Omega) = 77.2 .
\end{aligned}
$$

**输出负载（PMOS 电流源 $I_2$；0.5 mA）：**

$$
\begin{aligned}
r_{OP2} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
g_{mP2} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{3.84\times10^{-6}}\ \mathrm{S} = 1.96\ \mathrm{mS}.
\end{aligned}
$$

### 第 3 步 — 向下看进 $M_2$ 漏极的电阻

令 $v_{in} = 0$：$r_{O1}$ 从 X 接到地；$M_3$ 等效为从 G 流向地的电流 $g_{m3}v_X$，并接有 $r_{O3}\parallel r_{OP1}$；$M_2$ 等效为从输出端流向 X 的电流 $g_{m2}(v_G - v_X) - g_{mb2}v_X$，并与 $r_{O2}$ 并联。注入 $M_2$ 漏极的测试电流 $i_t$ 继续流过 $r_{O1}$，因此 $v_X = i_tr_{O1}$；对节点 G 列 KCL 方程得 $v_G = -A_3v_X$。于是流过 $M_2$ 的电流为

$$
\begin{aligned}
i_t &= g_{m2}(v_G - v_X) - g_{mb2}v_X + \frac{v_t - v_X}{r_{O2}}\\
v_t &= i_t\left\{\left[g_{m2}(1 + A_3) + g_{mb2}\right]r_{O2}r_{O1} + r_{O1} + r_{O2}\right\},
\end{aligned}
$$

因此

$$
\begin{aligned}
R_{up} &= \left[g_{m2}(1 + A_3) + g_{mb2}\right]r_{O2}r_{O1} + r_{O1} + r_{O2}\\
&= \left[(5.18\ \mathrm{mS})(78.2) + 0.90\ \mathrm{mS}\right](20\ \mathrm{k}\Omega)(20\ \mathrm{k}\Omega) + 40\ \mathrm{k}\Omega\\
&= (0.406\ \mathrm{S})(4\times10^8\ \Omega^2) + 40\ \mathrm{k}\Omega\\
&\approx 162\ \mathrm{M}\Omega ,
\end{aligned}
$$

即普通共源共栅电阻乘以约 $1 + A_3 \approx 78$。

### 第 4 步 — 输出电阻（output resistance）与电压增益

$$R_{out} = R_{up}\parallel r_{OP2} = \frac{(162\ \mathrm{M}\Omega)(10\ \mathrm{k}\Omega)}{162\ \mathrm{M}\Omega + 10\ \mathrm{k}\Omega} \approx 10\ \mathrm{k}\Omega .$$

<!-- diagram: diagram-01.cir -->

短路跨导（short-circuit transconductance）为 $G_m = g_{m1}Kr_{O1}/(1 + Kr_{O1})$，其中 $K = g_{m2}(1 + A_3) + g_{mb2} + 1/r_{O2} = 0.406$ S；由于 $Kr_{O1} \approx 8100 \gg 1$，$G_m = 0.9999\,g_{m1} \approx g_{m1}$。因此

$$
\begin{aligned}
A_v &= -G_mR_{out} \approx -g_{m1}(R_{up}\parallel r_{OP2}) \approx -g_{m1}r_{OP2}\\
&= -(5.18\ \mathrm{mS})(10\ \mathrm{k}\Omega)\\
&\approx -52 ,
\end{aligned}
$$

与任何共源级一样，增益为负。162 MΩ 的调节型共源共栅电阻被 10 kΩ 的 PMOS 负载白白浪费了：除非负载也采用共源共栅结构，否则增益与以 PMOS 为负载的普通共源级相同。

### 第 5 步 — 输入参考噪声：主要噪声源

每个漏极噪声电流 $\overline{I_n^2} = 4kT\cdot\tfrac23g_m$ 折合到输入端的方法是：用它引起的短路输出电流（short-circuit output current）除以 $G_m \approx g_{m1}$。

- **$M_1$。** 其噪声电流与 $g_{m1}v_{in}$ 并联，因此等效于输入端的 $I_{n1}/g_{m1}$：
$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\cdot\tfrac23g_{m1}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23}{g_{m1}} .$$
- **PMOS 电流源 $I_2$。** 其噪声电流直接流入输出端，输入端必须通过 $g_{m1}$ 提供这一电流：
$$\overline{V_{n,in}^2}\Big|_{P2} = \frac{4kT\cdot\tfrac23g_{mP2}}{g_{m1}^2} .$$

### 第 6 步 — 输入参考噪声：可忽略的噪声源

- **$M_2$。** 输出端短路时，只有 $I_{n2}/(1 + Kr_{O1})$ 到达输出端，折合到输入端为 $I_{n2}/(g_{m1}Kr_{O1})$。其权重为
$$\frac{g_{m2}}{(g_{m1}Kr_{O1})^2} = \frac{5.18\ \mathrm{mS}}{(5.18\ \mathrm{mS}\times0.406\ \mathrm{S}\times20\ \mathrm{k}\Omega)^2} \approx 3\times10^{-6}\ \Omega,$$
而 $M_1$ 的权重为 193 Ω。
- **$M_3$ 和 PMOS 电流源 $I_1$。** 它们的噪声电流注入 G，使 X 移动约 $I_{nG}/g_{m3}$。X 处的电压只能通过 $1/r_{O1}$ 改变输出电流，因此折合到输入端时要除以 $g_{m1}r_{O1} = 5.18\ \mathrm{mS}\times20\ \mathrm{k}\Omega = 104$。取 $g_{mP1} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm{A})} = 0.88$ mS：
$$\frac{1}{(g_{m1}r_{O1})^2}\left(\frac{1}{g_{m3}} + \frac{g_{mP1}}{g_{m3}^2}\right) = \frac{1}{104^2}\left(432\ \Omega + 164\ \Omega\right) \approx 0.055\ \Omega .$$

与主要噪声项的 266 Ω 相比，两者都可以忽略。

### 第 7 步 — 噪声的数值

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{5.18\ \mathrm{mS}} = 193\ \Omega,\\
\frac{g_{mP2}}{g_{m1}^2} &= \frac{1.96\times10^{-3}\ \mathrm{S}}{26.8\times10^{-6}\ \mathrm{S^2}} = 73\ \Omega,\\
4kT\cdot\tfrac23 &= 4\,(1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K})\left(\tfrac23\right) = 1.104\times10^{-20}\ \mathrm{J},\\
\overline{V_{n,in}^2} &= (1.104\times10^{-20}\ \mathrm{J})(193\ \Omega + 73\ \Omega) = (1.104\times10^{-20})(266)\ \mathrm{V^2/Hz}\\
&= 2.94\times10^{-18}\ \mathrm{V^2/Hz},
\end{aligned}
$$

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{2.94\times10^{-18}}\ \mathrm{V/\sqrt{Hz}} = 1.71\ \mathrm{nV/\sqrt{Hz}} .$$

（保留全部五个噪声源的精确节点分析给出的结果在三位有效数字内同样为 1.71 nV/√Hz。）

### 结果

- **增益：** $A_v \approx -g_{m1}(r_{OP2}\parallel R_{up}) \approx -g_{m1}r_{OP2} = -(5.18\ \mathrm{mS})(10\ \mathrm{k}\Omega) \approx -52$。调节型共源共栅电阻（$\approx 162$ MΩ）无关紧要，因为 PMOS 负载（10 kΩ）起主导作用。
- **噪声：** $\overline{V_{n,in}^2} \approx 4kT\cdot\tfrac23\left(\dfrac{1}{g_{m1}} + \dfrac{g_{mP2}}{g_{m1}^2}\right) = 1.104\times10^{-20}\times(193 + 73)\ \approx 2.9\times10^{-18}\ \mathrm{V^2/Hz}$，即约 **1.7 nV/√Hz**。$M_2$、$M_3$ 和 $I_1$ 的贡献可以忽略。

**常见错误。** 把增益写成 $g_{m1}R_{up}$（数十万）。输出电阻是 $R_{up}\parallel r_{OP2}$，由 10 kΩ 的 PMOS 负载决定。

**常见错误。** 只用 $r_{O1}$ 计算增益（$g_{m1}r_{O1} \approx 104$）。共源共栅管使输出端与 $r_{O1}$ 隔离；输出电阻由负载决定。

**常见错误。** 以为小电流的辅助放大器（$M_3$、$I_1$）主导噪声。它的噪声出现在 X 处，折合到输入端时要除以 $(g_{m1}r_{O1})^2 \approx 10^4$。

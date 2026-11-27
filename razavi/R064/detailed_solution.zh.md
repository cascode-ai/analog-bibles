# 详细步骤 - R064

思路： 两个电路都是共源级（common-source stage，CS），其二极管连接的负载 $M_2$ 相当于一个小电阻。对于 NMOS 负载，必须计入 $M_2$ 的体效应（其源极在输出端，衬底接地），这需要知道直流输出电压；PMOS 负载的源极和衬底都接 $V_{DD}$，没有体效应。偏置和跨导采用不含沟道长度调制因子的饱和区平方律。计算增益时计入小信号输出电阻 $r_O\approx1/(\lambda I_D)$，并列出 $\lambda=0$ 时的估算。

### 第 1 步 — $M_1$ 的偏置与跨导（transconductance）

两个电路都有 $I_{D1} = I_{D2} = 0.5$ mA，$(W/L)_1 = 50/0.5 = 100$：

$$g_{m1} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_1I_{D1}} = \sqrt{2(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

$$V_{ov1} = \frac{2I_{D1}}{g_{m1}} = \frac{2(0.5\ \mathrm{mA})}{3.66\ \mathrm{mS}} = 0.273\ \mathrm{V},$$

因此只要 $V_{out} > 0.273$ V（下面将验证），$M_1$ 就处于饱和区。其输出电阻（output resistance）为 $r_{O1} = 1/(\lambda_nI_D) = 1/[(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})] = 20\ \mathrm{k}\Omega$。

### 第 2 步 — 第 1 部分（NMOS 负载）：$M_2$ 的跨导与输出电压

$M_2$ 的 $(W/L)_2 = 10/0.5 = 20$，栅极和漏极接 $V_{DD}$，源极在输出端，衬底接地：

$$g_{m2} = \sqrt{2(134\times10^{-6})(20)(0.5\times10^{-3})}\ \mathrm{A/V} = \sqrt{2.68\times10^{-6}}\ \mathrm{A/V} = 1.637\ \mathrm{mS},$$

$$V_{ov2} = \frac{2I_{D2}}{g_{m2}} = \frac{1\ \mathrm{mA}}{1.637\ \mathrm{mS}} = 0.611\ \mathrm{V}.$$

直流输出电压： $V_{out} = V_{DD} - V_{GS2} = 3 - V_{TH2} - 0.611$，其中体效应对应于 $V_{SB2} = V_{out}$：

$$V_{TH2}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB2}}-\sqrt{2|\phi_F|}\right).$$

代入题给参数，以下迭代中的电压数值均以伏特计。初值取 $V_{out}=1.5\ \mathrm{V}$。

$$
\begin{aligned}
V_{TH2} &= 0.7 + 0.45(\sqrt{2.4} - 0.9487) = 0.7 + 0.45(1.5492 - 0.9487) = 0.970\ \mathrm{V} &\Rightarrow\ V_{out} &= 3 - 0.970 - 0.611 = 1.419\ \mathrm{V},\\
V_{TH2} &= 0.7 + 0.45(\sqrt{2.319} - 0.9487) = 0.7 + 0.45(1.5228 - 0.9487) = 0.958\ \mathrm{V} &\Rightarrow\ V_{out} &= 3 - 0.958 - 0.611 = 1.431\ \mathrm{V},\\
V_{TH2} &= 0.7 + 0.45(\sqrt{2.331} - 0.9487) = 0.960\ \mathrm{V} &\Rightarrow\ V_{out} &= 1.429\ \mathrm{V}.
\end{aligned}
$$

因此 $V_{out} \approx 1.43$ V $> 0.273$ V，且 $V_{TH2} \approx 0.96$ V：$M_1$ 处于饱和区，且已导通的二极管连接负载满足 $V_{DS2}=V_{GS2}\ge V_{ov2}$，也处于饱和区。

体跨导（body transconductance）：

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB2}}} = \frac{0.45}{2\sqrt{0.9 + 1.429}} = \frac{0.45}{2(1.526)} = 0.147, \qquad g_{mb2} = \eta\,g_{m2} = 0.147\times1.637\ \mathrm{mS} = 0.241\ \mathrm{mS}.$$

### 第 3 步 — 第 1 部分：小信号模型（small-signal model）与增益

$V_{DD}$ 是交流地，因此 $M_2$ 的栅极和漏极对信号而言接地，其源极就是输出节点：$v_{gs2} = 0 - v_{out}$，$v_{bs2} = 0 - v_{out}$。

<!-- diagram: diagram-01.cir -->

在输出节点列 KCL，以流出节点的电流为正方向。$M_1$ 向地吸取 $g_{m1}v_{in} + v_{out}/r_{O1}$。$M_2$ 向输出端注入 $g_{m2}(-v_{out}) + g_{mb2}(-v_{out}) + (0 - v_{out})/r_{O2}$，因此有 $(g_{m2} + g_{mb2} + 1/r_{O2})v_{out}$ 流向 $M_2$：

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \left(g_{m2} + g_{mb2} + \frac{1}{r_{O2}}\right)v_{out} = 0 \quad\Longrightarrow\quad A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m2} + g_{mb2} + 1/r_{O1} + 1/r_{O2}} .$$

忽略沟道长度调制（$r_{O1}, r_{O2} \to \infty$）：

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{mb2}} = -\frac{g_{m1}}{g_{m2}}\cdot\frac{1}{1 + \eta} .$$

两者都是电流相同的 NMOS 器件，因此 $g_{m1}/g_{m2} = \sqrt{(W/L)_1/(W/L)_2} = \sqrt{100/20} = \sqrt5 = 2.236$：

$$A_v = -\frac{2.236}{1.147} = -1.95 .$$

若没有体效应，增益将为 $-2.24$；$M_2$ 的体效应使增益损失约 13 %。

计入 $r_O$（$r_{O1} = r_{O2} = 20\ \mathrm{k}\Omega$，因此 $1/r_{O1} + 1/r_{O2} = 0.1$ mS）：

$$A_v = -\frac{3.66\ \mathrm{mS}}{(1.637 + 0.241 + 0.100)\ \mathrm{mS}} = -\frac{3.66}{1.978} = -1.85 .$$

### 第 4 步 — 第 2 部分（PMOS 负载）：跨导与偏置

现在 $M_2$ 是 PMOS，源极和衬底接 $V_{DD}$，栅极与漏极（即输出端）相连。由于 $V_{SB} = 0$，没有体效应：

$$g_{m2} = \sqrt{2\mu_pC_{ox}\left(\frac{W}{L}\right)_2I_{D2}} = \sqrt{2(38.4\times10^{-6})(20)(0.5\times10^{-3})}\ \mathrm{A/V} = \sqrt{7.68\times10^{-7}}\ \mathrm{A/V} = 0.876\ \mathrm{mS},$$

$$|V_{ov2}| = \frac{2I_{D2}}{g_{m2}} = \frac{1\ \mathrm{mA}}{0.876\ \mathrm{mS}} = 1.141\ \mathrm{V}, \qquad V_{SG2} = 0.8 + 1.141 = 1.941\ \mathrm{V},$$

$$V_{out} = V_{DD} - V_{SG2} = 3 - 1.941 = 1.06\ \mathrm{V} > 0.273\ \mathrm{V},$$

因此 $M_1$ 仍处于饱和区。二极管连接的 PMOS 已导通，且 $V_{SD2}=V_{SG2}\ge |V_{ov2}|$，也处于饱和区。由于 $\mu_pC_{ox}$ 比 $\mu_nC_{ox}$ 小 3.5 倍，PMOS 负载需要很大的过驱动电压。

### 第 5 步 — 第 2 部分：小信号模型与增益

$M_2$ 的源极处于交流地，栅极和漏极都是输出节点，因此 $v_{sg2} = v_{sd2} = 0 - v_{out}$。它从源极流向漏极的电流 $g_{m2}v_{sg2} + v_{sd2}/r_{O2} = -(g_{m2} + 1/r_{O2})v_{out}$ 流入输出端：$M_2$ 相当于一个接到交流地的电阻 $1/g_{m2}\parallel r_{O2}$。

<!-- diagram: diagram-02.cir -->

在输出节点列 KCL：

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \left(g_{m2} + \frac{1}{r_{O2}}\right)v_{out} = 0 \quad\Longrightarrow\quad A_v = -\frac{g_{m1}}{g_{m2} + 1/r_{O1} + 1/r_{O2}} .$$

忽略沟道长度调制：

$$A_v = -\frac{g_{m1}}{g_{m2}} = -\sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} = -\frac{3.66\ \mathrm{mS}}{0.876\ \mathrm{mS}} = -4.18 .$$

（验证：$\sqrt{(134\times100)/(38.4\times20)} = \sqrt{13400/768} = \sqrt{17.45} = 4.18$。）

计入 $r_O$（$r_{O1} = 20\ \mathrm{k}\Omega$；$r_{O2} = 1/[(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})] = 10\ \mathrm{k}\Omega$，因此 $1/r_{O1} + 1/r_{O2} = 0.05 + 0.1 = 0.15$ mS）：

$$A_v = -\frac{3.66\ \mathrm{mS}}{(0.876 + 0.150)\ \mathrm{mS}} = -\frac{3.66}{1.026} = -3.57 .$$

### 第 6 步 — 比较

| 负载 | 负载电阻（$\lambda=0$） | $A_v$（$\lambda=0$） | 计入 $r_O$ 时的 $A_v$ |
|---|---|---|---|
| NMOS 二极管，$(W/L)_2 = 20$ | $1/(g_{m2} + g_{mb2}) = 532\ \Omega$ | −1.95 | −1.85 |
| PMOS 二极管，$(W/L)_2 = 20$ | $1/g_{m2} = 1.14\ \mathrm{k}\Omega$ | −4.18 | −3.57 |

在相同尺寸和电流下，PMOS 负载的增益约为两倍，因为其较低的迁移率（mobility）使 $g_{m2}$ 较小（$1/g_{m2}$ 较大），而且没有体效应。代价是 $V_{SG2}$ 较大，使输出摆幅（output swing）减小。

### 结果

- NMOS 二极管负载： $A_v = -\dfrac{g_{m1}}{g_{m2} + g_{mb2}} = -\dfrac{\sqrt{(W/L)_1/(W/L)_2}}{1 + \eta} = -\dfrac{2.236}{1.147} \approx -1.95$，其中 $g_{m1} = 3.66$ mS，$g_{m2} = 1.64$ mS，$V_{out} \approx 1.43$ V，$\eta \approx 0.147$（若计入 $r_{O1} = r_{O2} = 20\ \mathrm{k}\Omega$，则 ≈ −1.85；若忽略体效应，则为 −2.24）。
- PMOS 二极管负载： $A_v = -\dfrac{g_{m1}}{g_{m2}} = -\sqrt{\dfrac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} \approx -4.18$，其中 $g_{m2} = 0.876$ mS，没有体效应（计入 $r_{O1} = 20\ \mathrm{k}\Omega$、$r_{O2} = 10\ \mathrm{k}\Omega$ 时 ≈ −3.57）。

常见错误： 使用宽长比（aspect ratio）之比而不开平方，例如 NMOS 负载得到 $-100/20 = -5$，PMOS 负载得到 $-\mu_n(W/L)_1/[\mu_p(W/L)_2] \approx -17.4$。在电流相等时 $g_m \propto \sqrt{\mu C_{ox}W/L}$，因此增益是这些比值的平方根。

常见错误： 忽略 NMOS 负载的体效应，或者给 PMOS 负载加上体效应。NMOS 负载的源极就是输出端（比接地的衬底高 1.43 V），因此 $g_{mb2}$ 与 $g_{m2}$ 相加，使增益降低；而 PMOS 负载的源极和衬底都接 $V_{DD}$。

常见错误： 对 PMOS 器件使用 $\mu_nC_{ox}$，这会使第二个电路的增益为 $-2.24$；应当使用 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$。

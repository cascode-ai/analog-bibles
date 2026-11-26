# 详细步骤 - R041

**思路：** 用平方律写出 $g_m$，并把栅极电容写成沟道面积 $WL$ 所对应的电容；在 $f_T = g_m/[2\pi(C_{GD} + C_{GS})]$ 中 $W$ 与 $C_{ox}$ 相互抵消，只剩下迁移率（mobility）、过驱动电压（overdrive voltage）和 $L^2$。然后在偏置电流固定、电压余度不断减小的条件下解释这一结果。

### 第 1 步 — 用几何尺寸表示跨导（transconductance）和栅极电容

采用平方律 $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$，并忽略沟道长度调制（channel-length modulation），有

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac12\,\mu_nC_{ox}\frac{W}{L}\cdot 2\,(V_{GS} - V_{TH}) = \mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH}) .$$

栅极、氧化层和沟道构成面积为 $WL$ 的平行板电容器，其电容由 $C_{GS}$ 和 $C_{GD}$ 分摊。忽略交叠电容，

$$C_{GS} + C_{GD} \approx WLC_{ox} .$$

这正是题中公式所依据的近似；第 3 步将讨论饱和区中更细致的电容分配。

### 第 2 步 — 写出 $f_T$ 并化简

$$f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} = \frac{\mu_nC_{ox}\dfrac{W}{L}\,(V_{GS} - V_{TH})}{2\pi\,WLC_{ox}} = \frac{\mu_n\,(V_{GS} - V_{TH})}{2\pi\,L\cdot L} = \frac{\mu_n}{2\pi}\,\frac{V_{GS} - V_{TH}}{L^2} .$$

$W$ 与 $C_{ox}$ 能够抵消，是因为 $g_m$ 和栅极电容都分别与它们成正比：加宽器件会使两者按相同比例增大。沟道越长，$g_m$ 越小（$\propto 1/L$），电容越大（$\propto L$），因此出现 $L^2$。从物理上看，$L^2/[\mu_n(V_{GS} - V_{TH})]$ 与电子穿过沟道所需的时间同一量级，因此 $f_T$ 大致是载流子渡越时间（transit time）的倒数，这就是“transit frequency”这一名称的由来。

### 第 3 步 — 饱和区电容分配的影响（标度关系不变）

在饱和区，沟道在漏端夹断，因此栅-沟道电容几乎全部出现在栅极与源极之间：

$$C_{GS} = \tfrac23\,WLC_{ox} + WC_{ov}, \qquad C_{GD} = WC_{ov},$$

其中 $C_{ov}$ 是单位宽度的交叠电容。忽略交叠电容时，$C_{GS} + C_{GD} = \tfrac23\,WLC_{ox}$，同样的抵消给出

$$f_T = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{2\pi\cdot\tfrac23\,WLC_{ox}} = \frac32\cdot\frac{\mu_n}{2\pi}\,\frac{V_{GS} - V_{TH}}{L^2} .$$

只有常数改变了，从 1 变为 3/2；而对 $\mu_n$、过驱动电压和 $L^2$ 的依赖关系（这正是本题的要点）完全相同。把总栅极电容取为 $WLC_{ox}$，也粗略地计入了 $\tfrac23$ 这一数值所忽略的交叠电容和边缘电容（fringing capacitance）。

### 第 4 步 — 与最小漏源电压的联系

令 $V_{ov} = V_{GS} - V_{TH}$，饱和要求 $V_{DS} \ge V_{ov}$，因此

$$V_{DS,min} = V_{ov} .$$

低电源电压要求较小的 $V_{ov}$。在偏置电流 $I_D$ 固定且 $L$ 固定时，由平方律得到宽度

$$W = \frac{2\,I_D\,L}{\mu_nC_{ox}\,V_{ov}^2} ,$$

因此 $W$ 必须按 $1/V_{ov}^2$ 增大（即题目中所说的“增大宽度”）。于是

$$
\begin{aligned}
C_{GS} + C_{GD} &\approx WLC_{ox} = \frac{2\,I_D\,L^2}{\mu_n\,V_{ov}^2} \qquad(\propto 1/V_{ov}^2),\\
g_m &= \mu_nC_{ox}\frac{W}{L}V_{ov} = \frac{2\,I_D}{V_{ov}} \qquad(\propto 1/V_{ov}),\\
f_T &= \frac{g_m}{2\pi\,WLC_{ox}} = \frac{2I_D/V_{ov}}{2\pi\cdot 2I_DL^2/(\mu_nV_{ov}^2)} = \frac{\mu_n\,V_{ov}}{2\pi L^2} .
\end{aligned}
$$

电容比跨导增长得更快，因此 $f_T$ 与过驱动电压成正比地下降。在 $I_D$ 和 $L$ 固定时：

| $V_{ov} = V_{DS,min}$ | 相对 $W$ | 相对 $g_m$ | 相对 $C_{GS}+C_{GD}$ | 相对 $f_T$ |
|---|---|---|---|---|
| 0.4 V | 1 | 1 | 1 | 1 |
| 0.2 V | 4 | 2 | 4 | 1/2 |
| 0.1 V | 16 | 4 | 16 | 1/4 |

数值示例： 取 $\mu_n \approx 350\ \mathrm{cm^2/(V\cdot s)} = 0.035\ \mathrm{m^2/(V\cdot s)}$ 和 $L = 0.5\ \mu\mathrm{m}$：

$$f_T = \frac{(0.035\ \mathrm{m^2/(V\,s)})(0.2\ \mathrm{V})}{2\pi\,(0.5\times10^{-6}\ \mathrm{m})^2} = \frac{7\times10^{-3}}{1.571\times10^{-12}}\ \mathrm{Hz} = 4.5\ \mathrm{GHz}$$

这是 $V_{ov} = 0.2$ V 时的结果；在 $V_{ov} = 0.1$ V 时只有 2.2 GHz。恢复速度的唯一其他途径是缩短 $L$，这就是低电压设计倾向于采用最小沟道长度的原因。

### 结果

$$f_T = \frac{g_m}{2\pi(C_{GD} + C_{GS})} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{2\pi\,WLC_{ox}} = \frac{\mu_n}{2\pi}\,\frac{V_{GS} - V_{TH}}{L^2},$$

这里用了平方律的 $g_m$ 和总栅极电容 $C_{GS} + C_{GD} \approx WLC_{ox}$（若取 $C_{GS} = \tfrac23WLC_{ox}$、$C_{GD} \approx 0$，常数变为 3/2，标度关系不变）。由于 $V_{DS,min} = V_{GS} - V_{TH}$，在电流恒定时降低电压余度会迫使 $W \propto 1/V_{ov}^2$，从而 $f_T$ 与 $V_{GS} - V_{TH}$ 成正比地下降。

**常见错误：** 忘记栅极电容本身与 $L$ 成正比，从而得出 $f_T \propto 1/L$。$g_m \propto 1/L$ 和 $C \propto L$ 的作用方向相同，因此得到 $1/L^2$。

**常见错误：** 认为过驱动电压越小，$g_m = 2I_D/V_{ov}$ 越大，因此 $f_T$ 越高。在电流固定时，额外的 $g_m$ 来自更宽的器件，而其电容按 $1/V_{ov}^2$ 增长，比 $g_m$ 更快，因此 $f_T$ 下降。

**常见错误：** 没有把栅极电容与 $W$ 和 $L$ 联系起来（或者留下了多余的 $W$ 或 $C_{ox}$）。结果的关键在于 $C_{GS} + C_{GD} \propto WLC_{ox}$，这样 $W$ 与 $C_{ox}$ 才能恰好抵消。

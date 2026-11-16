# 详细步骤 - R140

**思路。** 带共源共栅负载的共源共栅级，其输出可以从两个 NMOS 过驱动电压之和（相对于地）摆动到 $V_{DD}$ 减去两个 PMOS 过驱动电压之和，因此 1.9 V 的摆幅确定了过驱动电压之和；而相同的 $W/L$ 和电流通过迁移率（mobility）之比确定了它们的比值。由过驱动电压可以求出 $W/L$、使各器件在摆幅两端恰好处于饱和区（saturation region）边缘的偏置电压，以及增益 $g_{m1}R_{out}$。

### 第 1 步 — 摆幅预算

四个晶体管的电流都是 0.5 mA：$M_1$ 为输入管；$M_2$ 为 NMOS 共源共栅管，栅极接 $V_{b1}$；$M_3$ 为 PMOS 共源共栅管，栅极接 $V_{b2}$；$M_4$ 为 PMOS 电流源（current source），栅极接 $V_{b3}$。最优偏置应使：

- 在**最低输出**处，$M_1$ 和 $M_2$ 位于线性区（triode region）边缘：$V_{out,min} = V_{ov1} + V_{ov2}$；
- 在**最高输出**处，$M_3$ 和 $M_4$ 位于边缘：$V_{out,max} = V_{DD} - |V_{ov3}| - |V_{ov4}|$。

阈值电压（threshold voltage）不出现在这里，因为饱和只要求 $V_{DS} \ge V_{ov}$。两个 NMOS 的过驱动电压相同，记为 $V_{ov,n}$，两个 PMOS 的过驱动电压也相同，记为 $|V_{ov,p}|$（$W/L$ 相同、电流相同、$\gamma = 0$）：

$$\text{swing} = V_{DD} - 2V_{ov,n} - 2|V_{ov,p}| = 1.9\ \mathrm{V},$$

$$2(V_{ov,n} + |V_{ov,p}|) = 3 - 1.9 = 1.1\ \mathrm{V}\quad\Longrightarrow\quad V_{ov,n} + |V_{ov,p}| = 0.55\ \mathrm{V}.$$

### 第 2 步 — 过驱动电压之比

在电流和 $W/L$ 都相同的条件下，

$$I_D = \tfrac12\mu_nC_{ox}\frac WL V_{ov,n}^2 = \tfrac12\mu_pC_{ox}\frac WL |V_{ov,p}|^2\quad\Longrightarrow\quad \frac{|V_{ov,p}|}{V_{ov,n}} = \sqrt{\frac{\mu_nC_{ox}}{\mu_pC_{ox}}} = \sqrt{\frac{134}{38.4}} = \sqrt{3.490} = 1.868 .$$

### 第 3 步 — 过驱动电压与 $W/L$

$$
\begin{aligned}
V_{ov,n}(1 + 1.868) &= 0.55\ \mathrm{V}\\
V_{ov,n} &= \frac{0.55}{2.868}\ \mathrm{V} = 0.1918\ \mathrm{V},\\
|V_{ov,p}| &= 0.55 - 0.1918 = 0.3582\ \mathrm{V},
\end{aligned}
$$

$$\frac WL = \frac{2I_D}{\mu_nC_{ox}V_{ov,n}^2} = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.1918\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(0.03678\ \mathrm{V^2})} = \frac{1000}{4.928} \approx 203 .$$

用 PMOS 验证：$1\ \mathrm{mA}/[(38.4\ \mu\mathrm{A/V^2})(0.3582\ \mathrm{V})^2] = 1000/4.928 = 203$ ✓。若 $L = 0.5$ μm，四个器件都有 $W \approx 101$ μm。

### 第 4 步 — 偏置电压

**$V_{b1}$（$M_2$ 的栅极）。** 在最低输出处，$M_1$ 恰好位于其边缘，$V_X = V_{ov1} = V_{ov,n}$（$X$ 为 $M_1$ 的漏极）：

$$V_{b1} = V_X + V_{GS2} = V_{ov,n} + (V_{TH,n} + V_{ov,n}) = 0.7 + 2(0.1918) = 1.084\ \mathrm{V},$$

于是当 $V_{out} = V_X + V_{ov2} = 2V_{ov,n} = 0.384$ V 时，$M_2$ 位于其边缘。

**$V_{b3}$（$M_4$ 的栅极）：**

$$V_{b3} = V_{DD} - |V_{GS4}| = V_{DD} - (|V_{TH,p}| + |V_{ov,p}|) = 3 - (0.8 + 0.3582) = 1.842\ \mathrm{V}.$$

**$V_{b2}$（$M_3$ 的栅极）。** 在最高输出处，$M_4$ 位于其边缘，因此 $M_4$ 与 $M_3$ 之间的节点 $Y$ 的电压为 $V_Y = V_{DD} - |V_{ov4}| = 3 - 0.3582 = 2.642$ V，且

$$V_{b2} = V_Y - |V_{GS3}| = (3 - 0.3582) - (0.8 + 0.3582) = 1.484\ \mathrm{V}.$$

**范围验证：**

$$
\begin{aligned}
V_{out,min} &= 2(0.1918) = 0.384\ \mathrm{V},\\
V_{out,max} &= V_Y - |V_{ov3}| = 2.642 - 0.358 = 2.284\ \mathrm{V},\\
\text{swing} &= 2.284 - 0.384 = 1.900\ \mathrm{V}\ \checkmark
\end{aligned}
$$

### 第 5 步 — 小信号参数（$L = 0.5$ μm）

$$g_{m,n} = \frac{2(0.5\ \mathrm{mA})}{0.1918\ \mathrm{V}} = 5.21\ \mathrm{mS},\qquad g_{m,p} = \frac{2(0.5\ \mathrm{mA})}{0.3582\ \mathrm{V}} = 2.79\ \mathrm{mS},$$

$$r_{O,n} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad r_{O,p} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.$$

### 第 6 步 — 输出电阻（output resistance）与增益

$$R_{down} = r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2} \approx g_{m2}r_{O2}r_{O1} = (5.21\ \mathrm{mS})(20\ \mathrm{k\Omega})(20\ \mathrm{k\Omega}) = 2.09\ \mathrm{M\Omega},$$

$$R_{up} = r_{O3} + r_{O4} + g_{m3}r_{O3}r_{O4} \approx g_{m3}r_{O3}r_{O4} = (2.79\ \mathrm{mS})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega}) = 279\ \mathrm{k\Omega},$$

$$R_{out} = R_{down}\parallel R_{up} \approx \frac{(2.09)(0.279)}{2.09 + 0.279}\ \mathrm{M\Omega} = 246\ \mathrm{k\Omega}.$$

共源共栅结构基本上把 $M_1$ 的全部信号电流都送到输出端（$G_m \approx g_{m1}$），因此

$$|A_v| \approx g_{m1}R_{out} = (5.21\ \mathrm{mS})(246\ \mathrm{k\Omega}) \approx 1.28\times10^3 .$$

保留各小项（$R_{down} = 2.13$ MΩ，$R_{up} = 299$ kΩ，$R_{out} = 262$ kΩ，$G_m = 0.99g_{m1}$）则得到约 $1.35\times10^3$。无论哪种算法，

$$A_v \approx -1.3\times10^3 .$$

PMOS 一侧（279 kΩ）限制了 $R_{out}$：它的 $r_O$ 只有 NMOS 的一半，而且由于其过驱动电压较大，$g_m$ 也较低。

### 结果

- $V_{ov,n} = 0.192$ V，$|V_{ov,p}| = 0.358$ V，因此四个器件的 $W/L \approx 203$（例如 $L = 0.5$ μm 时 $W \approx 101$ μm）。
- $V_{b1} \approx 1.08$ V（$M_2$ 的栅极），$V_{b2} \approx 1.48$ V（$M_3$ 的栅极），$V_{b3} \approx 1.84$ V（$M_4$ 的栅极）。输出范围为 0.38–2.28 V。
- 电压增益：$|A_v| \approx g_{m1}[(g_{m2}r_{O2}r_{O1})\parallel(g_{m3}r_{O3}r_{O4})] \approx 1.3\times10^3$（反相）。

**常见错误。** 假设 NMOS 和 PMOS 的过驱动电压相等（各为 0.275 V）。在 $W/L$ 和电流都相同时，PMOS 的过驱动电压必须是 NMOS 的 $\sqrt{\mu_n/\mu_p} = 1.87$ 倍。

**常见错误。** 把阈值电压计入摆幅预算，例如 $V_{out,min} = V_{GS1} + V_{GS2}$。饱和只要求 $V_{DS} \ge V_{GS} - V_{TH}$；阈值电压只出现在栅极偏置电压中。

**常见错误。** 在 $V_{b1}$ 或 $V_{b2}$ 中漏掉下方（或上方）器件的过驱动电压。$V_{b1} = V_{ov1} + V_{GS2}$，$V_{b2} = V_{DD} - |V_{ov4}| - |V_{GS3}|$；若只用 $V_{GS2}$ 或 $V_{DD} - |V_{GS3}|$，就会使 $M_1$ 或 $M_4$ 处于线性区。

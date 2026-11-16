# 详细步骤 - R486

**思路。** 计算节点 X 和节点 Y 的小信号电阻以及低频增益 $A_0$：X 为高阻节点，对应主极点；Y 为源极跟随器（source follower）的输出端，对应次极点（non-dominant pole）。单位增益反馈下的环路增益（loop gain）为 $A_0/[(1 + s/\omega_X)(1 + s/\omega_Y)]$。60° 的相位裕度要求增益交点（gain crossover）处的总相位为 $-120°$；结合 $|H| = 1$，即可确定允许的最低 $\omega_Y = 1/(R_YC_Y)$，也就是最大的 $C_Y$。

### 第 1 步 — 反馈极性与小信号参数

把 $M_1$ 和 $M_2$ 的公共源极节点记为 P。抬高 $M_2$ 的栅极电压会使其电流增大，于是 X 和 Y 都下降：$M_2$ 的栅极是反相输入端，单位增益反馈把 Y 接到它上面（负反馈，$\beta = 1$）。

取 $I_{D1,2,3} = 0.25$ mA，$I_{D4} = I_1 = 0.5$ mA，所有器件的 $W/L = 100$：

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},\\
g_{m4} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .
\end{aligned}
$$

### 第 2 步 — X 和 Y 处的电阻

**节点 X**（输入接交流地）。向上看：$r_{O3}$。向下看：$M_2$ 的漏极，其源极看到的是 $M_1$ 的源极（$M_1$ 的栅极和漏极都接交流地），即 $R_S = (1/g_{m1}) \parallel r_{O1} = r_{O1}/(1 + g_{m1}r_{O1})$。

<!-- diagram: diagram-01.cir -->

对于注入 X 的测试电流 $I_t$：$V_P = I_tR_S$，$V_{GS2} = -I_tR_S$，且

$$
\begin{aligned}
I_t &= -g_{m2}I_tR_S + \frac{V_X - I_tR_S}{r_{O2}}\\
V_X &= I_t\left[r_{O2} + (1 + g_{m2}r_{O2})R_S\right] = I_t\,(r_{O2} + r_{O1}) = I_t\cdot 2r_{O2},
\end{aligned}
$$

其中利用了相同器件下的 $(1 + g_{m2}r_{O2})R_S = r_{O1}$。因此

$$R_X = 2r_{O2} \parallel r_{O3} = 80\ \mathrm{k}\Omega \parallel 20\ \mathrm{k}\Omega = 16\ \mathrm{k}\Omega .$$

**节点 Y**（跟随器输出端，$I_1$ 为理想电流源）：

$$R_Y = \frac{1}{g_{m4}} \parallel r_{O4} = 273\ \Omega \parallel 20\ \mathrm{k}\Omega = 269.5\ \Omega .$$

### 第 3 步 — 增益、主极点与增益带宽积（gain-bandwidth product）

差分输入电压只有一半加在 $M_2$ 上，因为对于短路电流而言 P 是虚地（virtual ground），因此 $G_m = g_{m2}/2 = 1.294$ mS。跟随器的增益为 $A_{v4} = g_{m4}r_{O4}/(1 + g_{m4}r_{O4}) = 73.2/74.2 = 0.987$，于是

$$A_0 = G_mR_XA_{v4} = (1.294\ \mathrm{mS})(16\ \mathrm{k}\Omega)(0.987) = 20.4 .$$

取 $C_X = 0.5$ pF：

$$\omega_X = \frac{1}{R_XC_X} = \frac{1}{(16\ \mathrm{k}\Omega)(0.5\ \mathrm{pF})} = 1.25\times10^8\ \mathrm{rad/s},$$

并且 $\mathrm{GBW} = A_0\,\omega_X = 20.4\times1.25\times10^8 = 2.55\times10^9$ rad/s。更大的 $C_Y$ 会使 $\omega_Y = 1/(R_YC_Y)$ 向交点下移，减小相位裕度。

### 第 4 步 — PM = 60° 的条件

当 $\beta = 1$ 时，

$$H(j\omega) = \frac{A_0}{(1 + j\omega/\omega_X)(1 + j\omega/\omega_Y)} .$$

PM = 60° 意味着交点 $\omega_u$ 处的相位为 $-120°$，同时 $|H(j\omega_u)| = 1$：

$$\tan^{-1}\frac{\omega_u}{\omega_X} + \tan^{-1}\frac{\omega_u}{\omega_Y} = 120°, \qquad \sqrt{1 + \frac{\omega_u^2}{\omega_X^2}}\,\sqrt{1 + \frac{\omega_u^2}{\omega_Y^2}} = A_0 = 20.4 .$$

**快速估算（把主极点的相移取为恰好 90°）。** 此时 $\tan^{-1}(\omega_u/\omega_Y) = 30°$，即 $\omega_Y = \sqrt3\,\omega_u$，幅值条件变为 $(\mathrm{GBW}/\omega_u)/\sqrt{1 + 1/3} = 1$：

$$\omega_u = \frac{\sqrt3}{2}\,\mathrm{GBW} = 2.21\times10^9\ \mathrm{rad/s}, \qquad \omega_Y = \sqrt3\,\omega_u = 1.5\,\mathrm{GBW} = 3.83\times10^9\ \mathrm{rad/s}.$$

这将给出 $C_Y = 1/(269.5\ \Omega\times3.83\times10^9) = 0.97$ pF。但由于 $A_0$ 只有约 20，主极点在交点处贡献的相移明显小于 90°，给第二个极点留下了更多余地，因此需要求解精确条件。

### 第 5 步 — 迭代求精确解

先猜一个 $\omega_u$；由相位条件得 $\omega_Y = \omega_u/\tan\left[120° - \tan^{-1}(\omega_u/\omega_X)\right]$；再检验是否满足 $|H| = 1$：

| $\omega_u$ (rad/s) | $\tan^{-1}(\omega_u/\omega_X)$ | 留给 Y 的相位 | $\omega_Y$ (rad/s) | $\sqrt{1 + (\omega_u/\omega_X)^2}$ | $\sqrt{1 + (\omega_u/\omega_Y)^2}$ | $\lvert H\rvert$ |
|---|---|---|---|---|---|---|
| $2.00\times10^9$ | 86.42° | 33.58° | $3.01\times10^9$ | 16.03 | 1.200 | 1.06 |
| $2.10\times10^9$ | 86.59° | 33.41° | $3.18\times10^9$ | 16.83 | 1.198 | 1.01 |
| $2.13\times10^9$ | 86.64° | 33.36° | $3.23\times10^9$ | 17.07 | 1.197 | 1.00 |
| $2.20\times10^9$ | 86.75° | 33.25° | $3.36\times10^9$ | 17.63 | 1.196 | 0.97 |

对收敛的那一行，$|H| = 20.4/(17.07\times1.197) = 20.4/20.43 = 1.00$。✓

因此 $\omega_u \approx 2.13\times10^9$ rad/s，Y 处的极点最低可降到

$$\omega_Y \approx 3.23\times10^9\ \mathrm{rad/s}:$$

此时主极点贡献 86.6°，允许 Y 处的极点贡献 33.4°（而不是 30°）。

### 第 6 步 — 最大 $C_Y$

$$C_{Y,max} = \frac{1}{R_Y\,\omega_Y} = \frac{1}{(269.5\ \Omega)(3.23\times10^9\ \mathrm{rad/s})} = 1.15\times10^{-12}\ \mathrm{F} = 1.15\ \mathrm{pF}.$$

作为对比，$C_Y = 0.5$ pF 时 PM ≈ 75°，因此上限确实高于 0.5 pF。（若采用较粗略的 $R_X = r_{O2} \parallel r_{O3} = 13.3$ kΩ，同样的步骤给出 1.19 pF。）

**极大的 $C_Y$。** 第 4 步的两个条件对两个极点是对称的，因此还有一个以 Y 为**主**极点的第二个解：$\omega_Y \approx 4.8\times10^6$ rad/s（$C_Y \approx 770$ pF），交点位于 $8.2\times10^7$ rad/s。严格来说，$C_Y \lesssim 1.15$ pF 或 $C_Y \gtrsim 770$ pF 时 PM ≥ 60°；以 X 为主极点（这是预期的设计，也是 $C_Y$ 从小值开始增大时首先遇到的极限）时，答案为 1.15 pF。

### 结果

$$C_{Y,max} \approx 1.15\ \mathrm{pF},$$

该结果基于 $R_X = 16$ kΩ（$\omega_X = 1.25\times10^8$ rad/s）、$A_0 \approx 20.4$、$R_Y \approx 270\ \Omega$：PM = 60° 要求 $\omega_Y \approx 3.2\times10^9$ rad/s，交点位于 $\omega_u \approx 2.13\times10^9$ rad/s。（把主极点的相移视为恰好 90°，会得到略为保守的值 ≈ 0.97 pF。）

**常见错误。** 对差分对（differential pair）取 $G_m = g_m$。输入在 $M_1$ 与 $M_2$ 之间分配，因此流入 X 的电流为 $(g_m/2)V_{in}$；$G_m$ 加倍会使 GBW 加倍，允许的 $C_Y$ 大约减半。

**常见错误。** 取 $R_Y = r_{O4}$。跟随器的输出端是低阻节点，$(1/g_{m4}) \parallel r_{O4} \approx 270\ \Omega$；若用 $r_{O4} = 20$ kΩ，Y 处的极点本身就已远低于交点，算出的“最大”$C_Y$ 会小得荒谬（远小于给定的 $C_X$ 值 0.5 pF）。

**常见错误。** 认为低于某个极大值（几百 pF）的所有 $C_Y$ 都可以接受。在约 1.15 pF 与 770 pF 之间，裕度**低于** 60°；大 $C_Y$ 的解之所以存在，只是因为此时 Y 变成了主极点。

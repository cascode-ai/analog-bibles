# 详细步骤 - R073

思路： 本征增益 $g_mr_O$ 是单个晶体管所能提供的最大电压增益，即只以自身 $r_O$ 为负载的共源级（common-source stage）增益 $-g_mr_O$ 的幅度。对每个器件计算 $g_m = \sqrt{2\mu C_{ox}(W/L)|I_D|}$ 和 $r_O = 1/(\lambda|I_D|)$，对较长的器件按 $1/L$ 缩放 $\lambda$。

### 第 1 步 — $W/L = 50/0.5$：跨导（transconductance）

两个器件都有 $W/L = 100$，$|I_D| = 0.5$ mA。

NMOS：

$$g_{m,n} = \sqrt{2(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

PMOS：

$$g_{m,p} = \sqrt{2(38.4\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{3.84\times10^{-6}}\ \mathrm{A/V} = 1.96\ \mathrm{mS}.$$

PMOS 的 $g_m$ 较低，因为其空穴迁移率（mobility）较低：$g_{m,p}/g_{m,n} = \sqrt{38.4/134} = 0.535$。

### 第 2 步 — $W/L = 50/0.5$：输出电阻（output resistance）与本征增益

在 $L = 0.5\ \mu$m 时，直接使用给定的 $\lambda$ 值。

NMOS（$\lambda_n = 0.1\ \mathrm{V^{-1}}$）：

$$r_{O,n} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 20\ \mathrm{k}\Omega, \qquad g_{m,n}r_{O,n} = (3.66\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 73.2 .$$

PMOS（$\lambda_p = 0.2\ \mathrm{V^{-1}}$）：

$$r_{O,p} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 10\ \mathrm{k}\Omega, \qquad g_{m,p}r_{O,p} = (1.96\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 19.6 .$$

PMOS 在两方面都较差：$g_m$ 较低，$r_O$ 也较低（$\lambda$ 较大）。

### 第 3 步 — $W/L = 100/1$：哪些量发生变化

跨导： $g_m$ 只通过 $W/L$ 依赖于 $W$ 和 $L$，而这一比值仍为 $100/1 = 100$，因此在相同电流下它不变：

$$g_{m,n} = 3.66\ \mathrm{mS}, \qquad g_{m,p} = 1.96\ \mathrm{mS}.$$

沟道长度调制： 由 $\lambda(L) = \lambda(0.5\ \mu\mathrm{m})\times(0.5\ \mu\mathrm{m})/L$，$L$ 从 0.5 µm 加倍到 1 µm 使 $\lambda$ 减半：

$$\lambda_n = 0.1\times\frac{0.5}{1}\ \mathrm{V^{-1}} = 0.05\ \mathrm{V^{-1}}, \qquad \lambda_p = 0.2\times\frac{0.5}{1}\ \mathrm{V^{-1}} = 0.1\ \mathrm{V^{-1}}.$$

输出电阻加倍：

$$r_{O,n} = \frac{1}{(0.05)(0.5\times10^{-3})}\ \Omega = 40\ \mathrm{k}\Omega, \qquad r_{O,p} = \frac{1}{(0.1)(0.5\times10^{-3})}\ \Omega = 20\ \mathrm{k}\Omega.$$

本征增益加倍：

$$g_{m,n}r_{O,n} = (3.66\ \mathrm{mS})(40\ \mathrm{k}\Omega) = 146.4, \qquad g_{m,p}r_{O,p} = (1.96\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 39.2 .$$

### 第 4 步 — 解释

令 $\lambda = \lambda_0L_0/L$，其中 $\lambda_0$ 为 $L_0 = 0.5\ \mu$m 时的值：

$$g_mr_O = \frac{\sqrt{2\mu C_{ox}(W/L)|I_D|}}{\lambda|I_D|} = \frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu C_{ox}(W/L)}{|I_D|}} .$$

在 $W/L$ 和电流固定时，本征增益与 $L$ 成正比，因此 $W$ 和 $L$ 同时加倍会使它加倍。代价是栅面积 $WL$ 增大为四倍（100 µm² 对 25 µm²），因此栅极电容也增大为四倍，速度降低。

### 结果

| 器件 | $W/L$ | $g_m$ | $\lambda$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|---|---|
| NMOS | 50/0.5 | 3.66 mS | 0.1 V⁻¹ | 20 kΩ | ≈ 73 |
| PMOS | 50/0.5 | 1.96 mS | 0.2 V⁻¹ | 10 kΩ | ≈ 19.6 |
| NMOS | 100/1 | 3.66 mS | 0.05 V⁻¹ | 40 kΩ | ≈ 146 |
| PMOS | 100/1 | 1.96 mS | 0.1 V⁻¹ | 20 kΩ | ≈ 39.2 |

从 50/0.5 变为 100/1 时，$g_m$ 保持不变（$W/L$ 相同），$r_O$ 加倍（$\lambda$ 减半），因此本征增益加倍。

常见错误： 对 1 µm 的器件仍沿用 0.5 µm 时的 $\lambda$ 值，使 100/1 的结果与 50/0.5 的相同。由于 $\lambda \propto 1/L$，$L$ 加倍使 $\lambda$ 减半，$r_O$ 加倍。

常见错误： 认为由于 $W$ 和 $L$ 都加倍，增益变为四倍；或者认为由于器件更长，增益减半。$g_m$ 只取决于 $W/L$（不变），而 $r_O$ 与 $L$ 成正比（加倍），因此增益恰好加倍。

常见错误： 使用错误的公式，例如 $r_O = \lambda/I_D$ 或 $g_m = \mu C_{ox}(W/L)I_D$，或者把 NMOS 和 PMOS 的 $\lambda$ 与 $\mu C_{ox}$ 弄混。PMOS 的 $\mu C_{ox}$ 较小且 $\lambda$ 较大，这就是其本征增益只有 NMOS 的四分之一左右的原因。

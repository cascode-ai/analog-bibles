# 详细步骤 - R458

**思路。** 第二级是以 PMOS 电流源（current source）$M_6$ 为负载的共源放大器（common-source amplifier）$M_5$，因此 $A_2 = g_{m5}(r_{O5}\parallel r_{O6})$。用偏置电流和过驱动电压表示时，电流会被约去，增益只由过驱动电压和 $\lambda_n + \lambda_p$ 决定；因此 $A_2 = 20$ 确定了过驱动电压，再由平方律（square law）得到两个宽长比（aspect ratio）。

### 第 1 步 — 用过驱动电压表示增益

两个器件都流过 $I_D = 1$ mA，$M_6$（栅极和源极都接交流地）只贡献 $r_{O6}$，因此

$$A_2 = \left|\frac{v_{out}}{v_y}\right| = g_{m5}(r_{O5}\parallel r_{O6}).$$

利用

$$g_{m5} = \frac{2I_D}{V_{ov5}}, \qquad r_{O5} = \frac{1}{\lambda_nI_D}, \qquad r_{O6} = \frac{1}{\lambda_pI_D},$$

$$r_{O5}\parallel r_{O6} = \frac{1}{1/r_{O5} + 1/r_{O6}} = \frac{1}{\lambda_nI_D + \lambda_pI_D} = \frac{1}{(\lambda_n + \lambda_p)I_D} ,$$

$$
\begin{aligned}
A_2 &= \frac{2I_D}{V_{ov5}}\cdot\frac{1}{(\lambda_n + \lambda_p)I_D}\\
&= \frac{2}{V_{ov5}(\lambda_n + \lambda_p)} .
\end{aligned}
$$

电流被约去：增大 $I_D$ 会使 $g_{m5}$ 增大，但两个 $r_O$ 按相同比例减小，因此增益指标确定了 $M_5$ 的过驱动电压。

### 第 2 步 — 求解过驱动电压

$$
\begin{aligned}
20 &= \frac{2}{V_{ov5}\,(0.1\ \mathrm{V^{-1}} + 0.2\ \mathrm{V^{-1}})}\\
V_{ov5} &= \frac{2}{20\times0.3\ \mathrm{V^{-1}}}\\
&= \frac{2}{6}\ \mathrm{V} = 0.333\ \mathrm{V}.
\end{aligned}
$$

题目要求过驱动电压相等，因此 $|V_{ov6}| = 0.333$ V；这并不影响增益，因为 $M_6$ 的跨导（transconductance）不起作用，但这样能使输出的电压余度（headroom）在两管之间平均分配。

### 第 3 步 — 宽长比

利用 $W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$，且 $V_{ov}^2 = (1/3\ \mathrm{V})^2 = 0.111\ \mathrm{V^2}$：

**$M_5$（NMOS）：**

$$
\begin{aligned}
\left(\frac{W}{L}\right)_5 &= \frac{2\,(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.111\ \mathrm{V^2})}\\
&= \frac{2\times10^{-3}}{1.489\times10^{-5}}\\
&= 134 ,
\end{aligned}
$$

因此 $W_5 = 134\times0.5\ \mu\mathrm{m} \approx 67\ \mu\mathrm{m}$。

**$M_6$（PMOS）：**

$$
\begin{aligned}
\left(\frac{W}{L}\right)_6 &= \frac{2\,(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.111\ \mathrm{V^2})}\\
&= \frac{2\times10^{-3}}{4.267\times10^{-6}}\\
&= 469 ,
\end{aligned}
$$

因此 $W_6 = 469\times0.5\ \mu\mathrm{m} \approx 234\ \mu\mathrm{m}$。

### 第 4 步 — 验证与推论

- $g_{m5} = 2(1\ \mathrm{mA})/(0.333\ \mathrm{V}) = 6$ mS；$r_{O5} = 10\ \mathrm{k}\Omega$，$r_{O6} = 5\ \mathrm{k}\Omega$，$r_{O5}\parallel r_{O6} = 3.33\ \mathrm{k}\Omega$；$A_2 = 6\ \mathrm{mS}\times3.33\ \mathrm{k}\Omega = 20$。✓
- 输出摆幅（output swing）：从 $V_{ov5}$ 到 $V_{DD} - |V_{ov6}|$，即峰峰值为 $3 - 2(0.333) = 2.33$ V。
- 更大的增益需要**更小**的过驱动电压（器件更宽、电容更大、摆幅更大）；更小的增益则允许采用更小的器件。

### 结果

$$V_{ov5} = |V_{ov6}| = \frac{2}{A_2(\lambda_n + \lambda_p)} = \frac{2}{20\times0.3} = \frac13\ \mathrm{V},$$

$$\left(\frac{W}{L}\right)_5 = \frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(1/3\ \mathrm{V})^2} \approx 134, \qquad \left(\frac{W}{L}\right)_6 = \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(1/3\ \mathrm{V})^2} \approx 469,$$

即取 $L = 0.5\ \mu\mathrm{m}$ 时，$W_5 \approx 67\ \mu\mathrm{m}$，$W_6 \approx 234\ \mu\mathrm{m}$。

**常见错误。** 把增益写成 $g_{m5}r_{O5}$，这会得到 $V_{ov} = 2/(20\times0.1) = 1$ V，器件太小，达不到 20 的增益；输出端的负载是 $r_{O5}\parallel r_{O6}$。

**常见错误。** 用 $\mu_nC_{ox}$ 来确定 PMOS 管 $M_6$ 的尺寸，得到 $(W/L)_6 = 134$。它实际需要 $134/38.4 \approx 3.5$ 倍的宽度。

**常见错误。** 以为增益不约束尺寸，“因为 $g_m$ 和 $r_O$ 都随电流按比例变化”。电流确实会被约去，但 $A_2 = 2/[V_{ov}(\lambda_n + \lambda_p)]$ 确定了 $V_{ov}$，而在电流固定的情况下，这也就确定了 $W/L$。

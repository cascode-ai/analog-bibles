# 详细步骤 - R455

**思路。** 输出级是以 PMOS 电流源（current source）$M_6$ 为负载的共源放大器（common-source amplifier）$M_5$（栅极接 Y），因此其增益为 $g_{m5}$ 乘以 $r_{O5}\parallel r_{O6}$。由偏置电流和过驱动电压求出 $g_{m5}$，再由 $\lambda$ 求出两个输出电阻（output resistance）。

### 第 1 步 — 工作范围与小信号模型（small-signal model）

两个器件都流过 $I_D = 1$ mA。$V_{out} \ge V_{ov5} = 0.25$ V 时 $M_5$ 处于饱和区（saturation region），$V_{DD} - V_{out} \ge |V_{ov6}| = 0.25$ V 即 $V_{out} \le 2.75$ V 时 $M_6$ 处于饱和区，因此只要输出直流电平在 0.25 V 与 2.75 V 之间（例如电源中点 1.5 V），下面求得的增益都成立；超出这一范围，增益就会急剧下降。

在小信号模型中，$M_5$ 是从输出端流向地的电流 $g_{m5}v_y$，并与 $r_{O5}$ 并联。$M_6$ 的栅极和源极都接交流地，因此 $v_{gs6} = 0$，只剩下 $r_{O6}$：$M_6$ 只是负载，而不是放大器件。

### 第 2 步 — $M_5$ 的跨导（transconductance）

$$g_{m5} = \frac{2I_{D5}}{V_{ov5}} = \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS}.$$

用 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ 验证：

$$g_{m5} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(239)(1\ \mathrm{mA})} = \sqrt{64.1\times10^{-6}}\ \mathrm{S} = 8.0\ \mathrm{mS}. \checkmark$$

### 第 3 步 — 输出电阻

$$
\begin{aligned}
r_{O5} &= \frac{1}{\lambda_nI_{D5}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O6} &= \frac{1}{\lambda_pI_{D6}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,
\end{aligned}
$$

$$r_{O5}\parallel r_{O6} = \frac{(10\ \mathrm{k}\Omega)(5\ \mathrm{k}\Omega)}{10\ \mathrm{k}\Omega + 5\ \mathrm{k}\Omega} = 3.33\ \mathrm{k}\Omega .$$

### 第 4 步 — 输出节点的 KCL 与增益

$$
\begin{aligned}
g_{m5}v_y + \frac{v_{out}}{r_{O5}} + \frac{v_{out}}{r_{O6}} &= 0\\
A_2 = \frac{v_{out}}{v_y} &= -g_{m5}(r_{O5}\parallel r_{O6}),
\end{aligned}
$$

$$A_2 = -(8\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = -26.7 .$$

该级是反相的：Y 升高时 $M_5$ 吸收更多电流，把输出拉低。

### 第 5 步 — 简洁形式

利用 $g_{m5} = 2I_D/V_{ov}$ 和 $r_O = 1/(\lambda I_D)$：

$$|A_2| = \frac{2I_D}{V_{ov}}\cdot\frac{1}{I_D(\lambda_n + \lambda_p)} = \frac{2}{V_{ov}(\lambda_n + \lambda_p)} = \frac{2}{(0.25\ \mathrm{V})(0.3\ \mathrm{V^{-1}})} = 26.7 .$$

电流被约去，因此增益由过驱动电压和 $\lambda$ 决定：为获得大摆幅而采用的 0.25 V 小过驱动电压有利于提高增益，而较大的 $\lambda$ 值则会降低增益。

### 结果

$$A_2 = -g_{m5}(r_{O5}\parallel r_{O6}) = -(8\ \mathrm{mS})(10\ \mathrm{k}\Omega\parallel5\ \mathrm{k}\Omega) \approx -26.7,$$

即增益的大小约为 26.7（反相）。

**常见错误。** 只用 $r_{O5}$（增益 80）或只用 $r_{O6}$（增益 40）；输出端的负载是两者的并联。

**常见错误。** 把两个 $\lambda$ 值弄反。这里增益碰巧不变，因为只有 $\lambda_n + \lambda_p$ 起作用，但在单独用到各个 $r_O$ 的地方（例如计算极点时），结果就会出错。

**常见错误。** 像推挽级（push-pull stage）那样把 $g_{m6}$ 加到 $g_{m5}$ 上。$M_6$ 的栅极接固定偏置 $V_b$，因此它只贡献 $r_{O6}$。

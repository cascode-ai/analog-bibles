# 详细步骤 - R423

**思路。** 在差分摆幅的峰值处，一个输出处于最高值，其 PMOS 负载进入线性区 50 mV；另一个输出处于最低值，其所有器件都饱和。由线性区电流方程求出处于线性区的 PMOS 的小信号电阻，得到每个输出端的电阻，再把两个不相等的半边电路增益合成为差分增益。

### 第 1 步 — 标称设计

每个器件的电流为 0.5 mA：

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad r_{O3} = r_{O4} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
|V_{OD3}| &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = 0.510\ \mathrm{V}.
\end{aligned}
$$

所有器件都饱和、P 为虚地（virtual ground）时：

$$|A_{v0}| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k\Omega}) = 24.4 .$$

### 第 2 步 — 进入线性区 50 mV 的 PMOS

在 $V_{out1}$ 的高峰值处：

$$|V_{DS3}| = |V_{OD3}| - 0.05\ \mathrm{V} = 0.510 - 0.050 = 0.460\ \mathrm{V},$$

因此每个输出都比标称情况多上升 50 mV，使差分摆幅增加 $2\times50$ mV = 100 mV。

取 $\beta_p = \mu_pC_{ox}W/L = 3.84\ \mathrm{mA/V^2}$，且 $|V_{OD3}|$ 不变（$V_b$ 固定），线性区电流为

$$|I_{D3}| = \beta_p\left[|V_{OD3}|\,|V_{DS3}| - \tfrac12|V_{DS3}|^2\right] = 3.84\left[(0.510)(0.460) - \tfrac12(0.460)^2\right]\ \mathrm{mA} = 3.84\times0.1288\ \mathrm{mA} = 0.495\ \mathrm{mA},$$

几乎没有变化，因此 $g_{m1}$ 仍为 3.66 mS，误差在 0.5 % 以内。对 $|V_{DS}|$ 求导：

$$
\begin{aligned}
\frac{1}{R_{on3}} &= \frac{\partial|I_{D3}|}{\partial|V_{DS3}|} = \beta_p\big(|V_{OD3}| - |V_{DS3}|\big) = (3.84\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.192\ \mathrm{mS},\\
R_{on3} &= 5.21\ \mathrm{k\Omega}.
\end{aligned}
$$

仅仅进入线性区 50 mV，$M_3$ 的输出电阻就从 $r_{O3} = 10\ \mathrm{k\Omega}$ 降到约 5.2 kΩ。（这里在线性区忽略了 $\lambda$；见第 5 步。）

### 第 3 步 — 每一侧的电阻与半边电路增益

**第 1 侧**（输出处于高峰值，$M_3$ 处于线性区）：

$$
\begin{aligned}
R_1 &= r_{O1}\parallel R_{on3} = \frac{20\times5.21}{20 + 5.21}\ \mathrm{k\Omega} = 4.13\ \mathrm{k\Omega},\\
g_{m1}R_1 &= (3.66\ \mathrm{mS})(4.13\ \mathrm{k\Omega}) = 15.1 .
\end{aligned}
$$

**第 2 侧**（输出处于低峰值，$M_2$ 和 $M_4$ 饱和）：

$$
\begin{aligned}
R_2 &= r_{O2}\parallel r_{O4} = 6.67\ \mathrm{k\Omega},\\
g_{m1}R_2 &= 24.4 .
\end{aligned}
$$

### 第 4 步 — 峰值处的差分增益

尾电流源为理想时，P（在很好的近似下）保持为交流地，每个晶体管的电流为 $\pm g_{m1}v_d/2$：

$$v_{out1} = -g_{m1}R_1\,\frac{v_d}{2},\qquad v_{out2} = +g_{m1}R_2\,\frac{v_d}{2} ,$$

$$
\begin{aligned}
|A_v| = \frac{|v_{out1} - v_{out2}|}{v_d} &= g_{m1}\,\frac{R_1 + R_2}{2}\\
&= (3.66\ \mathrm{mS})\times\frac{4.13 + 6.67}{2}\ \mathrm{k\Omega} = (3.66\ \mathrm{mS})(5.40\ \mathrm{k\Omega}) = 19.8 ,
\end{aligned}
$$

即两个半边电路增益（15.1 和 24.4）的**平均值**。负载不相等时，P 点约变化 $v_d$ 的 4 %，而且 $r_{O1}$、$r_{O2}$ 接回 P，因此对 $V_{out1}$、$V_{out2}$ 和 P 做完整的节点求解，结果略大一些，约为 20.2。无论哪种算法，峰值处的增益都**约为 20，比标称值 24.4 低约 17–19 %**。

### 第 5 步 — 关于在线性区保留 $\lambda$ 的说明

把线性区方程乘以 $(1 + \lambda|V_{DS}|)$，输出电导约增加 $\lambda|I_D| = (0.2)(0.495\ \mathrm{mA}) \approx 0.1$ mS。于是 $1/R_{on3} \approx 0.29$–0.31 mS，$R_{on3} \approx 3.2$–3.4 kΩ，线性区一侧的半边电路增益约为 10–11，差分增益约为 17–18。结论相同：仅仅为了多出 100 mV 的摆幅，增益就损失了相当一部分。

### 结果

在峰值处，$M_3$（或 $M_4$）的 $|V_{DS}| = 0.46$ V，其线性区输出电阻为 $R_{on3} = 1/[\mu_pC_{ox}(W/L)(50\ \mathrm{mV})] \approx 5.2\ \mathrm{k\Omega}$。于是线性区一侧的 $R_1 = r_{O1}\parallel R_{on3} = 4.13\ \mathrm{k\Omega}$，半边电路增益只有约 15，而另一侧仍为 24.4。峰值处的差分增益为

$$|A_v| = g_{m1}\,\frac{R_1 + R_2}{2} \approx 3.66\ \mathrm{mS}\times5.40\ \mathrm{k\Omega} \approx 19.8\ \ (\approx 20.2\ \text{from an exact nodal solution}),$$

即约为 20，而不是标称值 24.4：为了多得 100 mV 的差分摆幅，增益下降了约 17–19 %。

**常见错误。** 认为器件“只是稍微”进入线性区，增益就不会变化。即使离边缘只有 50 mV，$\beta_p(|V_{OD}| - |V_{DS}|)$ 与 $\lambda I_D$ 相比也不算小：$R_{on3}$ 约为 $r_{O3}$ 的一半。

**常见错误。** 用完整的过驱动电压（overdrive voltage）计算 $R_{on3}$，得到 $1/(\beta_p|V_{OD3}|) \approx 0.5\ \mathrm{k\Omega}$。那是 $V_{DS} = 0$ 时的深线性区（deep triode region）值；这里的电导是 $\beta_p\times(50\ \mathrm{mV})$。

**常见错误。** 只给出线性区一侧的半边电路增益（≈ 15）。另一侧仍处于饱和，因此差分增益是两者的平均值，约为 20。

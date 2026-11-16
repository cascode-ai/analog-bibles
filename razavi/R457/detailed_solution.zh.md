# 详细步骤 - R457

**思路。** $A_v = A_1A_2$，而输出级已经确定，因此 $A_2$ 已知，$A_1 = 500/A_2$。第一级是以 NMOS 电流镜（current mirror）为负载的 PMOS 差分对（differential pair），其增益为 $g_{m1}(r_{O2}\parallel r_{O4})$；电流（以及各 $r_O$）已经确定，由此可定出 $g_{m1}$，再由平方律（square law）得到 $(W/L)_1$。

### 第 1 步 — 偏置电流与输出级增益

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}, \qquad I_{D5} = I_{D6} = 1\ \mathrm{mA}.$$

$M_5$ 在 1 mA 下的 $V_{ov5} = 0.25$ V，因此

$$g_{m5} = \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS},$$

$$
\begin{aligned}
r_{O5} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega \quad\text{(NMOS)},\\
r_{O6} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega \quad\text{(PMOS)},\\
r_{O5}\parallel r_{O6} &= \frac{10\times5}{10 + 5}\ \mathrm{k}\Omega = 3.33\ \mathrm{k}\Omega ,
\end{aligned}
$$

共源级（common-source stage）增益的大小为

$$A_2 = g_{m5}(r_{O5}\parallel r_{O6}) = (8\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 26.7 .$$

### 第 2 步 — 第一级所需的增益

$$
\begin{aligned}
A_v &= A_1A_2 = 500\\
A_1 &= \frac{500}{A_2} = \frac{500}{26.67} = 18.75 .
\end{aligned}
$$

### 第 3 步 — 第一级增益表达式与所需的 $g_{m1}$

采用电流镜负载时，Y 处的短路电流为 $g_{m1}v_{in}$，Y 看到的电阻为 $r_{O2}\parallel r_{O4}$，因此

$$A_1 = g_{m1}(r_{O2}\parallel r_{O4}),$$

其中 $M_2$ 是 **PMOS** 输入器件，$M_4$ 是 **NMOS** 电流镜器件：

$$
\begin{aligned}
r_{O2} &= \frac{1}{\lambda_pI_{D2}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{\lambda_nI_{D4}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O2}\parallel r_{O4} &= \frac{10\times20}{10 + 20}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega .
\end{aligned}
$$

因此

$$g_{m1} = \frac{A_1}{r_{O2}\parallel r_{O4}} = \frac{18.75}{6.67\ \mathrm{k}\Omega} = 2.81\ \mathrm{mS}.$$

### 第 4 步 — $M_1$、$M_2$ 的宽长比

由 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$，并采用 PMOS 的 $\mu_pC_{ox}$：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{1,2} &= \frac{g_{m1}^2}{2\mu_pC_{ox}I_{D1}}\\
&= \frac{(2.81\times10^{-3}\ \mathrm{S})^2}{2\,(38.4\times10^{-6}\ \mathrm{A/V^2})(0.5\times10^{-3}\ \mathrm{A})}\\
&= \frac{7.91\times10^{-6}}{3.84\times10^{-8}}\\
&= 206 .
\end{aligned}
$$

取 $L = 0.5\ \mu\mathrm{m}$：$W_{1,2} = 206\times0.5\ \mu\mathrm{m} \approx 103\ \mu\mathrm{m}$。

**过驱动电压检查。** $|V_{ov1}| = 2I_D/g_{m1} = 2(0.5\ \mathrm{mA})/2.81\ \mathrm{mS} = 0.36$ V，因此 $|V_{GS1}| = 0.8 + 0.36 = 1.16$ V，是一个合理的值。$M_1$、$M_2$ 的漏极位于 $V_X = V_{GS3} = 0.95$ V，因此输入共模电平（common-mode level）低至约 $0.95 - 0.8 = 0.15$ V 时，差分对仍保持在饱和区（saturation region）。

### 结果

$$A_2 = 26.7 \;\Rightarrow\; A_1 = 18.75 \;\Rightarrow\; g_{m1} = \frac{18.75}{10\ \mathrm{k}\Omega\parallel20\ \mathrm{k}\Omega} = 2.81\ \mathrm{mS} \;\Rightarrow\; \left(\frac{W}{L}\right)_{1,2} = \frac{g_{m1}^2}{2\mu_pC_{ox}I_D} \approx 206,$$

即取 $L = 0.5\ \mu\mathrm{m}$ 时 $W_{1,2} \approx 103\ \mu\mathrm{m}$（过驱动电压约为 0.36 V）。

**常见错误。** 要求第一级单独提供 500 的增益。输出级已经提供了 26.7，因此第一级只需要 18.75。

**常见错误。** 对 PMOS 输入对管使用 $\mu_nC_{ox}$，这会得到 $W/L \approx 59$，远不足以提供所需的 $g_{m1}$。

**常见错误。** 在第一级中把两个 $\lambda$ 值弄反。这里并联值碰巧相同（6.67 kΩ），但每个 $r_O$ 都必须使用各自器件的 $\lambda$。

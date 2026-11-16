# 详细步骤 - R370

**思路。** 忽略沟道长度调制和体效应时，跟随器的输出电阻为 $1/g_{m1}$，因此 100 Ω 的指标确定了 $g_{m1}$；$I_D$ 也已确定，由 $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$ 即可求出 $(W/L)_1$。

### 第 1 步 — 输出电阻与所需的 $g_{m1}$

把输入端接地，并在输出端施加测试电压 $v_x$。此时 $v_{gs1} = -v_x$，而 $M_2$（栅极接固定的 $V_b$，$\lambda = 0$）中没有小信号电流。

<!-- diagram: diagram-01.cir -->

对输出节点应用基尔霍夫电流定律（KCL）：

$$i_x + g_{m1}(-v_x) = 0 \quad\Longrightarrow\quad i_x = g_{m1}v_x, \qquad R_{out} = \frac{v_x}{i_x} = \frac{1}{g_{m1}}.$$

输出电压升高 $v_x$，$V_{GS1}$ 就减小 $v_x$，因此要得到低输出电阻，就需要大的 $g_{m1}$。令 $R_{out} = 100\ \Omega$：

$$g_{m1} = \frac{1}{R_{out}} = \frac{1}{100\ \Omega} = 10\ \mathrm{mS} = 1\times10^{-2}\ \mathrm{A/V}.$$

### 第 2 步 — 由 $g_m$ 和 $I_D$ 求宽长比（aspect ratio）

$I_D = 0.1$ mA 已确定，利用 $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$：

$$\frac{W}{L} = \frac{g_m^2}{2\mu_nC_{ox}I_D}.$$

$$
\begin{aligned}
g_{m1}^2 &= (1\times10^{-2}\ \mathrm{A/V})^2 = 1\times10^{-4}\ \mathrm{A^2/V^2},\\
2\mu_nC_{ox}I_D &= 2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.1\times10^{-3}\ \mathrm{A}) = 2.68\times10^{-8}\ \mathrm{A^2/V^2},\\
\left(\frac{W}{L}\right)_1 &= \frac{1\times10^{-4}}{2.68\times10^{-8}} = 3731 \approx 3.7\times10^{3}.
\end{aligned}
$$

取 $L = 0.5\ \mu$m，则 $W \approx 3731\times0.5\ \mu\mathrm{m} \approx 1.87$ mm，这是一个极宽的器件。

### 第 3 步 — 工作点检验

$$V_{ov1} = \frac{2I_D}{g_{m1}} = \frac{2\times0.1\times10^{-3}\ \mathrm{A}}{1\times10^{-2}\ \mathrm{A/V}} = 0.02\ \mathrm{V} = 20\ \mathrm{mV}.$$

（验证：$\tfrac12(134\ \mu\mathrm{A/V^2})(3731)(0.02\ \mathrm{V})^2 = 0.1$ mA ✓。）

20 mV 远低于平方律较为适用的 0.1–0.2 V 范围；器件实际上会工作在亚阈值区附近或亚阈值区内。在亚阈值区，$g_m/I_D$ 饱和于约 $1/(\zeta V_T)$，即约 25–30 V⁻¹（其中 $V_T = kT/q \approx 26$ mV，$\zeta \approx 1.3$–1.5），而该设计需要 $g_m/I_D = 10\ \mathrm{mS}/0.1\ \mathrm{mA} = 100\ \mathrm{V^{-1}}$。因此平方律估算偏于乐观：在实际工艺中，0.1 mA 的电流不足以实现 100 Ω，需要更大的电流。在题目要求的平方律模型下，答案为 $(W/L)_1 \approx 3.7\times10^3$。

若计入体效应，输出电阻将变为 $1/(g_{m1} + g_{mb1})$，因此稍小一些的 $W/L$ 就足够了。

### 结果

$$R_{out} = \frac{1}{g_{m1}} = 100\ \Omega \;\Rightarrow\; g_{m1} = 10\ \mathrm{mS}, \qquad \left(\frac{W}{L}\right)_1 = \frac{g_{m1}^2}{2\mu_nC_{ox}I_D} = \frac{(10^{-2})^2}{2(134\times10^{-6})(10^{-4})} \approx 3.7\times10^{3},$$

例如取 $L = 0.5\ \mu$m 时 $W \approx 1.87$ mm。过驱动电压只有 20 mV，因此器件实际上会接近亚阈值区，平方律的结果偏于乐观。

**常见错误。** 把输出电阻当作 $r_O$（或 $r_O \parallel r_{O2}$）。在 $M_1$ 的源极，起主导作用的是 $1/g_{m1}$；而 $\lambda = 0$ 时 $r_O$ 各项均为无穷大。

**常见错误。** 凭空假设一个过驱动电压（例如 0.2 V），再用 $g_m = \mu_nC_{ox}(W/L)V_{ov}$ 计算。$g_m$ 和 $I_D$ 都已给定时，过驱动电压随之确定为 $2I_D/g_m$。取 0.2 V 的过驱动电压会得到 $W/L = 10\ \mathrm{mS}/(134\ \mu\mathrm{A/V^2}\times0.2\ \mathrm{V}) = 373$，小了十倍：在实际的 0.1 mA 电流下，该器件只能提供 $\sqrt{2(134\ \mu)(373)(0.1\ \mathrm{m})} = 3.2$ mS，即 $R_{out} \approx 316\ \Omega$。

**常见错误。** 漏掉 $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$ 中的因子 2，使结果加倍，约为 7460。

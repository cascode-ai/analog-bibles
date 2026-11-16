# 详细步骤 - R365

**思路。** 在输入端开路的条件下求共栅（CG）级的输入参考噪声电流，即输出噪声除以跨阻（transimpedance）$R_D$ 的平方；令 $M_2$ 与 $R_D$ 贡献的均方根值之比为 1/5，解出 $g_{m2}$，再在 $I_D = 0.5$ mA 下将其换算为 $(W/L)_2$。

### 第 1 步 — 输入参考噪声电流：哪些噪声源有贡献

$C_0$ 使 $M_2$ 的栅极成为干净的交流地，因此 $M_2$ 只贡献其沟道噪声 $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$，从输入节点流向地。其他噪声源为：$M_1$ 的 $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$，位于漏源之间；$R_D$ 的 $\overline{I_{nD}^2} = 4kT/R_D$，与该电阻并联。

输入端开路时，$M_1$ 的栅极为交流地，因此 $v_{gs1} = -v_{in}$。在 out 与 in 之间流动的是 $g_{m1}v_{gs1}$ 和 $I_{n1}$（从 $M_1$ 的漏极流向源极）；从 in 流向地的只有 $I_{n2}$（$M_2$ 的栅极为交流地，且由于 $\lambda = 0$，它没有 $r_O$）；$R_D$ 和 $I_{nD}$ 连接在 out 与地之间。

<!-- diagram: diagram-01.cir -->

**对输入节点应用基尔霍夫电流定律（KCL）。** $M_1$ 的沟道电流流入该节点，$I_{n2}$ 从该节点流出：

$$g_{m1}v_{gs1} + I_{n1} = I_{n2}.$$

因此，流过 $M_1$ 的总电流（也就是到达 $R_D$ 的电流）等于 $I_{n2}$，**与 $I_{n1}$ 的大小无关**。

- **$M_1$ 的噪声没有贡献。** 当 $I_{n2} = 0$ 时，源极节点电压变化 $I_{n1}/g_{m1}$，使受控电流恰好抵消 $I_{n1}$。
- **$M_2$ 的噪声电流全部经 $M_1$ 流入 $R_D$。** 它所在的位置正是施加输入电流的位置，因此它本身就已经是输入参考量。

**输出节点。** $I_{n2}$ 经 $M_1$ 从输出节点被抽走，$I_{nD}$ 则与 $R_D$ 并联流动：

$$v_{out} = -R_D\,(I_{n2} + I_{nD}), \qquad \overline{V_{n,out}^2} = R_D^2\left(4kT\gamma g_{m2} + \frac{4kT}{R_D}\right).$$

共栅级的电流增益为 1，因此跨阻为 $|v_{out}/i_{in}| = R_D$。除以 $R_D^2$：

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} + 4kT\gamma g_{m2},$$

其中 $4kT/R_D$ 来自负载，$4kT\gamma g_{m2}$ 来自偏置晶体管 $M_2$。

### 第 2 步 — 对均方根值施加 1/5 的比例

这个比例针对的是噪声**电流**（均方根值），而不是它的平方：

$$\sqrt{4kT\gamma g_{m2}} = \frac15\sqrt{\frac{4kT}{R_D}} \quad\Longrightarrow\quad 4kT\gamma g_{m2} = \frac{1}{25}\cdot\frac{4kT}{R_D} \quad\Longrightarrow\quad g_{m2} = \frac{1}{25\gamma R_D}.$$

代入数值：

$$g_{m2} = \frac{1}{25\times\tfrac23\times1000\ \Omega} = \frac{1}{16\,667\ \Omega} = 60\ \mu\mathrm{S}.$$

$(W/L)_1$ 并未出现：$M_1$ 不影响输入参考噪声电流。

### 第 3 步 — 将 $g_{m2}$ 换算为 $(W/L)_2$

$g_{m2}$ 和 $I_{D2}$ 都已确定，因此利用 $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$：

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_{D2}}.$$

$$
\begin{aligned}
g_{m2}^2 &= (60\times10^{-6}\ \mathrm{S})^2 = 3.6\times10^{-9}\ \mathrm{S^2},\\
2\mu_nC_{ox}I_{D2} &= 2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.5\times10^{-3}\ \mathrm{A}) = 1.34\times10^{-7}\ \mathrm{A^2/V^2},\\
\left(\frac{W}{L}\right)_2 &= \frac{3.6\times10^{-9}}{1.34\times10^{-7}} = 0.0269 .
\end{aligned}
$$

例如取 $W = 0.5\ \mu$m，$L = 0.5/0.0269\ \mu\mathrm{m} \approx 18.6\ \mu$m：这是一个又长又窄的器件，也是实现低 $g_m$ 电流源的常用做法。

### 第 4 步 — 数值核对与可行性检验

**噪声数值。** 取 $4kT = 1.656\times10^{-20}$ J：

$$
\begin{aligned}
\frac{4kT}{R_D} &= \frac{1.656\times10^{-20}}{1000} = 1.656\times10^{-23}\ \mathrm{A^2/Hz} \;\Rightarrow\; 4.07\ \mathrm{pA/\sqrt{Hz}},\\
4kT\gamma g_{m2} &= (1.656\times10^{-20})\left(\tfrac23\right)(60\times10^{-6}) = 6.62\times10^{-25}\ \mathrm{A^2/Hz} \;\Rightarrow\; 0.814\ \mathrm{pA/\sqrt{Hz}}.
\end{aligned}
$$

确实有 $0.814/4.07 = 1/5$。总噪声为 $\sqrt{1.656\times10^{-23} + 6.62\times10^{-25}} = 4.15$ pA/√Hz。

**可行性。** 要以如此小的 $g_m$ 通过 0.5 mA 的电流，所需的过驱动电压为

$$V_{ov2} = \frac{2I_{D2}}{g_{m2}} = \frac{2\times0.5\ \mathrm{mA}}{60\ \mu\mathrm{S}} = 16.7\ \mathrm{V}.$$

$M_2$ 需要 $V_{GS2} \approx V_{TH} + 16.7$ V 且 $V_{DS2} \ge 16.7$ V 才能保持在饱和区（saturation region），远超任何实际的电源电压，因此对于平方律器件，在 $I_D = 0.5$ mA 下该指标**无法实现**。原因在于：$M_2$ 的噪声为 $4kT\gamma\cdot2I_D/V_{ov}$，而 $R_D$ 的噪声为 $4kT/R_D = 4kTI_D/(I_DR_D)$；由于 $I_DR_D = 0.5$ V，只有当 $V_{ov2}$ 是 0.5 V 的许多倍时，$M_2$ 的噪声才会远低于 $R_D$ 的噪声。取一个仍然可行的 $V_{ov2} = 1$ V，得到 $g_{m2} = 1$ mS，均方根比值为 $\sqrt{\gamma g_{m2}R_D} = \sqrt{0.667} = 0.82$，与 0.2 相去甚远。

### 结果

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} + 4kT\gamma g_{m2}, \qquad \sqrt{4kT\gamma g_{m2}} = \frac15\sqrt{\frac{4kT}{R_D}} \;\Rightarrow\; g_{m2} = \frac{1}{25\gamma R_D} = 60\ \mu\mathrm{S},$$

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_D} = \frac{(60\ \mu\mathrm{S})^2}{2(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{mA})} \approx 0.027$$

（例如 $W = 0.5\ \mu$m，$L \approx 18.6\ \mu$m）。这需要过驱动电压 $V_{GS2} - V_{TH} = 2I_D/g_{m2} \approx 16.7$ V，因此在 0.5 mA 下该要求实际上无法满足。

**常见错误。** 把 1/5 这个比例用在噪声**功率**上，得到 $g_{m2} = 1/(5\gamma R_D) = 300\ \mu$S 和 $(W/L)_2 = 0.67$。均方根值之比为 1/5，对应的功率之比为 $1/5^2 = 1/25$。

**常见错误。** 把 $M_1$ 的噪声计入输入参考噪声电流。输入端开路时，$M_1$ 的沟道电流被强制等于 $I_{n2}$，它自身的噪声电流根本不会到达 $R_D$。

**常见错误。** 凭空假设一个过驱动电压（例如 $V_{ov} = 0.2$ V），再用 $g_m = \mu_nC_{ox}(W/L)V_{ov}$ 计算。$g_{m2}$ 和 $I_{D2}$ 都已确定时，过驱动电压随之确定为 $2I_D/g_{m2}$。

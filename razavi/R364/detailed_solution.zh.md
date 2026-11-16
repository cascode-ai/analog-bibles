# 详细步骤 - R364

**思路。** 共栅（CG）级的输入阻抗很低（$\approx 1/g_m$），因此该级需要**同时**用输入参考噪声电压和输入参考噪声电流来描述：前者在输入端短路时求得，等于输出噪声除以电压增益的平方；后者在输入端开路时求得，等于输出噪声除以跨阻（transimpedance）的平方。

### 第 1 步 — 噪声源

$M_1$ 的栅极接交流地，源极为输入端，$R_D = 1\ \mathrm{k}\Omega$ 为漏极负载。偏置电流源无噪声，因此噪声源只有两个：$M_1$ 的沟道噪声 $\overline{I_{n1}^2} = 4kT\gamma g_m$，位于漏源之间；$R_D$ 的噪声 $\overline{I_{nD}^2} = 4kT/R_D$，与该电阻并联。公共因子为

$$4kT = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K}) = 1.656\times10^{-20}\ \mathrm{J}.$$

### 第 2 步 — 小信号参数

由 $W/L = 50/0.5 = 100$（忽略沟道长度调制和体效应）得：

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{2.68\times10^{-5}\ \mathrm{A^2/V^2}} = 5.177\ \mathrm{mS},$$

$$V_{ov} = \frac{2I_D}{g_m} = \frac{2\times1\ \mathrm{mA}}{5.177\ \mathrm{mS}} = 0.386\ \mathrm{V},$$

并假设漏极电压足够高，使器件处于饱和区（saturation region）；$R_D$ 上的直流压降为 $I_DR_D = 1$ V。后面会用到以下几个量：

$$
\begin{aligned}
\frac{1}{g_m} &= \frac{1}{5.177\ \mathrm{mS}} = 193.2\ \Omega,\\
\frac{\gamma}{g_m} &= \frac{2}{3}\times193.2\ \Omega = 128.8\ \Omega,\\
g_mR_D &= (5.177\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 5.177.
\end{aligned}
$$

### 第 3 步 — 输入参考噪声电压（输入端短路）

源极接地时 $v_{gs} = 0$，两个噪声电流都直接流入 $R_D$（由于 $\lambda = 0$，不存在 $r_O$）；它们的功率相加：

$$\overline{V_{n,out}^2} = 4kT\gamma g_m R_D^2 + \frac{4kT}{R_D}R_D^2 = 4kT\gamma g_mR_D^2 + 4kTR_D .$$

共栅级的电压增益为 $A_v = g_mR_D$（栅极接地时 $v_{gs} = -v_{in}$，$v_{out} = -g_mR_Dv_{gs} = g_mR_Dv_{in}$）。除以增益的平方：

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_mR_D^2 + 4kTR_D}{g_m^2R_D^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right).$$

数值计算：

$$\frac{1}{g_m^2R_D} = \frac{1}{(2.68\times10^{-5}\ \mathrm{S^2})(1000\ \Omega)} = \frac{1}{0.0268\ \mathrm{S}} = 37.3\ \Omega ,$$

$$
\begin{aligned}
\overline{V_{n,in}^2} &= (1.656\times10^{-20}\ \mathrm{J})\,(128.8\ \Omega + 37.3\ \Omega) = (1.656\times10^{-20})(166.1)\ \mathrm{V^2/Hz} = 2.75\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= \sqrt{2.75\times10^{-18}}\ \mathrm{V/\sqrt{Hz}} = 1.66\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

晶体管贡献了 $128.8/166.1 = 78\%$ 的噪声功率，负载贡献了 22 %，这是因为共栅级的增益 $g_mR_D \approx 5.2$ 并不大。

### 第 4 步 — 输入参考噪声电流（输入端开路）

输入端开路时，源极节点只与 $M_1$ 相连（偏置电流源的阻抗为无穷大）；栅极接交流地，因此 $v_{gs} = -v_s$；$R_D$ 与 $I_{nD}$ 把漏极连到交流地。$g_mv_{gs}$ 和 $I_{n1}$ 都从漏极流向源极。

<!-- diagram: diagram-01.cir -->

**$M_1$ 的贡献。** 对开路的源极节点应用基尔霍夫电流定律（KCL），沟道总电流必须为零：

$$g_mv_{gs} + I_{n1} = 0 \quad\Longrightarrow\quad v_{gs} = -\frac{I_{n1}}{g_m}.$$

源极电压变化 $v_s = I_{n1}/g_m$，使受控源恰好抵消噪声电流，因此 **$M_1$ 不产生输出噪声**：它的噪声电流在器件外部没有闭合通路。

**$R_D$ 的贡献。** 它的噪声电流全部流过 $R_D$：

$$\overline{V_{n,out}^2}\Big|_{\text{open}} = \frac{4kT}{R_D}R_D^2 = 4kTR_D .$$

共栅级的电流增益为 1，因此跨阻为 $v_{out}/i_{in} = R_D$，于是

$$\overline{I_{n,in}^2} = \frac{4kTR_D}{R_D^2} = \frac{4kT}{R_D} = \frac{1.656\times10^{-20}\ \mathrm{J}}{1000\ \Omega} = 1.656\times10^{-23}\ \mathrm{A^2/Hz},$$

$$\sqrt{\overline{I_{n,in}^2}} = \sqrt{1.656\times10^{-23}}\ \mathrm{A/\sqrt{Hz}} = 4.07\ \mathrm{pA/\sqrt{Hz}}.$$

输入参考噪声电流就是 $R_D$ 的噪声电流，经由单位电流增益传递到输入端。

### 第 5 步 — 自洽性检验

输入端短路时，输出噪声为

$$\overline{V_{n,out}^2} = 4kT(\gamma g_mR_D^2 + R_D) = (1.656\times10^{-20})\left(\tfrac23\times5.177\times10^{-3}\times10^{6} + 1000\right) = (1.656\times10^{-20})(3451 + 1000) = 7.37\times10^{-17}\ \mathrm{V^2/Hz}.$$

除以 $(g_mR_D)^2 = 5.177^2 = 26.8$ 得到 $2.75\times10^{-18}\ \mathrm{V^2/Hz}$，与第 3 步一致。若信号源内阻 $R_{src}$ 为有限值，输入噪声电流有一部分会流入 $R_{src}$，因此输入参考噪声电压和电流两者缺一不可。

### 结果

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 2.75\times10^{-18}\ \mathrm{V^2/Hz} \quad\Longrightarrow\quad \sqrt{\overline{V_{n,in}^2}} \approx 1.66\ \mathrm{nV/\sqrt{Hz}},$$

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} = 1.66\times10^{-23}\ \mathrm{A^2/Hz} \quad\Longrightarrow\quad \sqrt{\overline{I_{n,in}^2}} \approx 4.07\ \mathrm{pA/\sqrt{Hz}},$$

其中 $g_m = 5.18$ mS。（若计入体效应，电压噪声表达式中的 $g_m$ 应换成 $g_m + g_{mb}$，结果略低。）

**常见错误。** 在输入参考噪声电流中保留 $M_1$ 的噪声，即用**总**输出噪声（$7.37\times10^{-17}\ \mathrm{V^2/Hz}$）除以 $R_D^2$，得到约 8.6 pA/√Hz。输入端开路时，$M_1$ 的噪声电流会自行抵消（第 4 步）。

**常见错误。** 在输入参考噪声电压中略去 $R_D$ 项，得到 $\sqrt{4kT\gamma/g_m} \approx 1.46$ nV/√Hz。增益仅为 $g_mR_D \approx 5.2$，折算到输入端的负载噪声（$4kT/(g_m^2R_D)$，相当于 37 Ω 的等效电阻）不可忽略。

**常见错误。** 把该级当作共源放大器（common-source amplifier）来分析，只给出噪声电压。共栅级的输入端是低阻抗的源极，因此输入噪声电流是描述其噪声性能不可缺少的部分。

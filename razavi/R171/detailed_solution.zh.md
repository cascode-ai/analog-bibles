# 详细步骤 - R171

**思路。** 1 mV 的阈值失配使两个输入器件的过驱动电压（overdrive voltage）略有不同，因而 $g_{m1} \neq g_{m2}$。在保持 $g_{m1} \neq g_{m2}$ 和有限尾电阻 $R_{SS}$ 的条件下，分别对差模输入和共模输入求解小信号电路，然后取两个增益之比。

### 第 1 步 — 偏置量

**尾电流源。** NMOS 电流源流过 $I_{SS} = 1$ mA，因此

$$R_{SS} = r_O = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

**输入对。** $\beta = \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$，每个器件约流过 0.5 mA：

$$V_{ov} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V}, \qquad g_m = \beta V_{ov} = 3.66\ \mathrm{mS}.$$

**失配。** 两个器件的 $V_{GS}$ 相同（栅极电压相同，源极节点公共），因此它们的过驱动电压相差 $\Delta V_{TH} = 1$ mV；由 $g_m = \beta V_{ov}$：

$$\Delta g_m = g_{m1} - g_{m2} = \beta\Delta V_{TH} = (13.4\ \mathrm{mA/V^2})(1\ \mathrm{mV}) = 13.4\ \mu\mathrm{S}, \qquad \frac{g_m}{\Delta g_m} = \frac{V_{ov}}{\Delta V_{TH}} = 273 .$$

### 第 2 步 — 小信号模型

每个晶体管都是从其漏极（$X$ 或 $Y$）到 $P$ 的电流源 $g_{mk}v_{gsk}$（忽略沟道长度调制和体效应）；$R_{SS}$ 把 $P$ 接地，相等的负载 $R_D = 2$ kΩ 把 $X$ 和 $Y$ 接到交流地。

<!-- diagram: diagram-01.cir -->

$P$ 点的 KCL：$v_P = (i_1 + i_2)R_{SS}$，其中 $i_1 = g_{m1}(v_{in1} - v_P)$，$i_2 = g_{m2}(v_{in2} - v_P)$。差分输出为 $v_X - v_Y = -R_D(i_1 - i_2)$。

### 第 3 步 — 共模输入 → 差分输出

令 $v_{in1} = v_{in2} = v_{cm}$：

$$
\begin{aligned}
v_P &= (g_{m1} + g_{m2})(v_{cm} - v_P)R_{SS}\\
v_{cm} - v_P &= \frac{v_{cm}}{1 + (g_{m1} + g_{m2})R_{SS}}\\
i_1 - i_2 &= (g_{m1} - g_{m2})(v_{cm} - v_P) = \frac{\Delta g_m\,v_{cm}}{1 + (g_{m1} + g_{m2})R_{SS}}\\
|A_{CM-DM}| &= \frac{\Delta g_mR_D}{1 + (g_{m1} + g_{m2})R_{SS}} .
\end{aligned}
$$

### 第 4 步 — 差分输入 → 差分输出

令 $v_{in1} = +v_d/2$，$v_{in2} = -v_d/2$。由于 $g_{m1} \neq g_{m2}$，两个电流在 $P$ 点不能完全抵消：

$$
\begin{aligned}
i_1 + i_2 &= \Delta g_m\frac{v_d}{2} - (g_{m1} + g_{m2})v_P = \frac{v_P}{R_{SS}}\\
v_P &= \frac{\Delta g_m R_{SS}}{1 + (g_{m1} + g_{m2})R_{SS}}\cdot\frac{v_d}{2},\\
i_1 - i_2 &= (g_{m1} + g_{m2})\frac{v_d}{2} - \Delta g_m v_P\\
&= \frac{v_d}{2}\cdot\frac{(g_{m1} + g_{m2})\left[1 + (g_{m1} + g_{m2})R_{SS}\right] - \Delta g_m^2R_{SS}}{1 + (g_{m1} + g_{m2})R_{SS}} .
\end{aligned}
$$

由于 $(g_{m1} + g_{m2})^2 - (g_{m1} - g_{m2})^2 = 4g_{m1}g_{m2}$，分子化简为 $g_{m1} + g_{m2} + 4g_{m1}g_{m2}R_{SS}$，于是

$$|A_{DM}| = \frac{R_D\left(g_{m1} + g_{m2} + 4g_{m1}g_{m2}R_{SS}\right)}{2\left[1 + (g_{m1} + g_{m2})R_{SS}\right]} \approx g_mR_D = 7.32 .$$

### 第 5 步 — 共模抑制比

两个增益相除，$R_D$ 和公共分母都被消去：

$$\mathrm{CMRR} = \frac{|A_{DM}|}{|A_{CM-DM}|} = \frac{g_{m1} + g_{m2} + 4g_{m1}g_{m2}R_{SS}}{2\Delta g_m} .$$

由于 $g_{m1} \approx g_{m2} \approx g_m$（两者只相差 0.37 %）：

$$\mathrm{CMRR} \approx \frac{2g_m + 4g_m^2R_{SS}}{2\Delta g_m} = \frac{g_m}{\Delta g_m}\left(1 + 2g_mR_{SS}\right).$$

数值计算：

$$
\begin{aligned}
1 + 2g_mR_{SS} &= 1 + 2(3.66\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 74.2,\\
\mathrm{CMRR} &= 273\times 74.2 \approx 2.03\times10^4,\\
20\log_{10}(20{,}300) &\approx 86.1\ \mathrm{dB}.
\end{aligned}
$$

（等价地：$A_{CM-DM} = (13.4\ \mu\mathrm{S})(2\ \mathrm{k}\Omega)/74.2 = 3.61\times10^{-4}$，而 $7.32/3.61\times10^{-4} = 2.03\times10^4$。）

与负载失配的情形一样，共模抑制比是两个因子的乘积：相对失配的倒数 $g_m/\Delta g_m = V_{ov}/\Delta V_{TH} = 273$，以及尾电流源对共模的负反馈（degeneration）因子 $1 + 2g_mR_{SS} = 74$。较大的过驱动电压使差分对对给定的阈值失配不那么敏感，而更好的尾电流源可以提高第二个因子。

### 结果

$$\mathrm{CMRR} = \frac{g_{m1} + g_{m2} + 4g_{m1}g_{m2}R_{SS}}{2\Delta g_m} \approx \frac{g_m}{\Delta g_m}\left(1 + 2g_mR_{SS}\right) = 273\times 74.2 \approx 20{,}300\quad(\approx 86.1\ \mathrm{dB}),$$

其中 $g_m = 3.66$ mS，$\Delta g_m = 13.4\ \mu$S，$R_{SS} = 10$ kΩ。

**常见错误。** 止步于 CMRR $= g_m/\Delta g_m = 273$，即把尾节点当作交流地。尾电流源对共模电流有 $1 + 2g_mR_{SS} = 74$ 倍的负反馈衰减，这一因子是共模抑制比的一部分。

**常见错误。** 在比值中使用**对称**差分对的共模增益 $R_D/(2R_{SS})$。该增益描述的是输出共模电平；把共模输入转换成差分输出的是**失配** $\Delta g_m$。

**常见错误。** 把 $\Delta g_m$ 算错，例如由 $\Delta g_m/g_m = \Delta V_{TH}/V_{GS}$ 或 $2\Delta V_{TH}/V_{ov}$ 得到。$V_{GS}$ 相等时过驱动电压恰好相差 $\Delta V_{TH}$，因此 $\Delta g_m/g_m = \Delta V_{TH}/V_{ov}$。

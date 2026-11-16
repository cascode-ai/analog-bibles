# 详细步骤 - R552

**思路。** 用 $\mu$ 和尾电流 $I_{SS}$ 表示增益，并令其对温度的导数为零，由此得到所需的 $I_{SS}(T)$。然后采用电流与 $\mu$ 成反比的偏置电路（恒定 $g_m$ 偏置，或称“β 倍增器”偏置），并把该电流镜像到尾电流源。

### 第 1 步 — $I_{SS}$ 所需的温度特性

差分对的每个晶体管流过 $I_{SS}/2$，因此

$$A_v = g_mR_D = R_D\sqrt{2\mu C_{ox}\frac{W}{L}\cdot\frac{I_{SS}}{2}} = R_D\sqrt{\mu C_{ox}\frac{W}{L}I_{SS}} .$$

只有 $\mu$ 和 $I_{SS}$ 依赖于 $T$，因此增益的相对 TC 为

$$\frac{1}{A_v}\frac{\partial A_v}{\partial T} = \frac12\cdot\frac{1}{\mu}\frac{\partial\mu}{\partial T} + \frac12\cdot\frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T}.$$

令其为零：

$$\frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T} = -\frac{1}{\mu}\frac{\partial\mu}{\partial T},$$

即 $\mu I_{SS}$ 必须为常数：**$I_{SS} \propto 1/\mu$**。由于 $\mu = \mu_0(T/T_0)^{-3/2}$，$(1/\mu)\,\partial\mu/\partial T = -3/(2T)$，因此

$$\frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T} = +\frac{3}{2T}, \qquad I_{SS} \propto \frac{1}{\mu} \propto T^{3/2}.$$

在 $T = 300$ K 时，所需的 TC 为

$$\frac{1.5}{300\ \mathrm{K}} = 5\times10^{-3}\ \mathrm{K^{-1}} = +0.5\ \%/\mathrm{K}.$$

尾电流必须随温度**升高**，以补偿迁移率的下降；而且 $\propto T^{3/2}$ 的电流能使增益在**所有**温度下都保持恒定，而不仅仅是在 300 K。若尾电流恒定，300 K 时增益的 TC 将为 $\tfrac12(-1.5/T) = -0.75/T = -0.25\ \%/\mathrm{K}$：在 100 K 的范围内增益约损失 25 %。

### 第 2 步 — 与 $1/\mu$ 成正比的电流：恒定 $g_m$ 偏置

采用下图左侧所示的自偏置（self-biased）电路。它包括：二极管连接（diode-connected）的 $M_1$（$(W/L)_N$，栅极和漏极接节点 N，源极接地）；$M_2$（$K(W/L)_N$，$K > 1$，栅极接 N，源极经 $R_S$ 接地，漏极接节点 P）；以及相同的 PMOS 器件 $M_3$（在 P 处二极管连接）和 $M_4$（漏极接 N），二者构成 1:1 电流镜，迫使 $I_{D1} = I_{D2} = I$。

<!-- diagram: diagram-01.cir -->

沿栅极回路列 KVL 得 $V_{GS1} = V_{GS2} + IR_S$。忽略体效应（body effect）和沟道长度调制（channel-length modulation），采用平方律时，$V_{TH}$ 相互抵消：

$$\sqrt{\frac{2I}{\mu_nC_{ox}(W/L)_N}}\left(1 - \frac{1}{\sqrt K}\right) = IR_S .$$

两边除以 $\sqrt I$ 再平方：

$$I = \frac{2}{\mu_nC_{ox}(W/L)_N}\cdot\frac{1}{R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 .$$

式中除 $\mu_n$ 外都是固定的（$R_S$ 暂时视为与温度无关），因此

$$I \propto \frac{1}{\mu_n} \propto T^{3/2},$$

这正是所需的特性：当 $\mu_n$ 下降时，环路会增大电流，使 $M_1$ 和 $M_2$ 的过驱动电压（overdrive voltage）之差仍为同样的 $IR_S$。

### 第 3 步 — 把电流镜像到尾电流源并检验增益

$M_9$（栅极接 N，源极接地）按比例 $M = (W/L)_9/(W/L)_N$ 复制 $M_1$ 的电流，并作为差分对 $M_5$、$M_6$ 的尾电流源：

$$I_{SS} = M\,I = \frac{2M}{\mu_nC_{ox}(W/L)_NR_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 .$$

对于宽长比（aspect ratio）为 $(W/L)_P$、流过 $I_{SS}/2$ 的差分对晶体管：

$$
\begin{aligned}
g_m &= \sqrt{\mu_nC_{ox}(W/L)_P\,I_{SS}}\\
&= \sqrt{\mu_nC_{ox}(W/L)_P\cdot\frac{2M}{\mu_nC_{ox}(W/L)_NR_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2}\\
&= \frac{1}{R_S}\left(1 - \frac{1}{\sqrt K}\right)\sqrt{\frac{2M(W/L)_P}{(W/L)_N}} .
\end{aligned}
$$

$\mu_nC_{ox}$ 被约去，于是

$$A_v = g_mR_D = \left(1 - \frac{1}{\sqrt K}\right)\sqrt{\frac{2M(W/L)_P}{(W/L)_N}}\cdot\frac{R_D}{R_S}$$

它只取决于器件尺寸比和电阻比，因此（在一阶近似下）**TC 为零**。例如，若差分对器件与 $M_1$ 尺寸相同且 $M = 2$（差分对的每个器件流过 $I$），则 $g_m = 2(1 - 1/\sqrt K)/R_S$，这就是熟悉的“恒定 $g_m$”结果。

### 第 4 步 — 实际考虑

- **电阻的 TC。** 用与 $R_D$ 相同的材料制作 $R_S$（并采用相同的版图形式），可使 $R_D/R_S$ 保持恒定，因此即使实际电阻存在漂移，增益仍与温度无关。
- **阈值电压。** 第 2 步中 $V_{TH}$ 已经抵消，因此它的漂移不会产生影响（$M_2$ 的体效应除外）。
- **启动。** 这个自偏置环路同样存在零电流状态，需要启动电路（start-up circuit）。
- **更粗略的替代方案。** PTAT 电流（$\propto T$，TC $= 1/T = +0.33\ \%/\mathrm{K}$）只能部分跟踪：增益的 TC 变为 $\tfrac12(-1.5 + 1)/T = -0.25/T = -0.083\ \%/\mathrm{K}$，为恒定电流情况的三分之一。再加上一个超线性分量（例如 PTAT²）可以使它更接近 $T^{3/2}$。

### 结果

要使 $g_mR_D = R_D\sqrt{\mu C_{ox}(W/L)I_{SS}}$ 的 TC 为零，就要求 $\mu I_{SS}$ = 常数，因此

$$I_{SS} \propto \frac{1}{\mu} \propto T^{3/2}, \qquad \frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T} = \frac{1.5}{T} \approx +0.5\ \%/\mathrm{K}\ \text{at 300 K}.$$

**电路：** 恒定 $g_m$ 偏置（β 倍增器），其中 $M_1$ 为 $(W/L)_N$，$M_2$ 为 $K(W/L)_N$ 且源极接 $R_S$，另有一个由相同 PMOS 构成的电流镜。它产生 $I = \dfrac{2}{\mu_nC_{ox}(W/L)_NR_S^2}\left(1 - \dfrac{1}{\sqrt K}\right)^2 \propto 1/\mu_n$，该电流被镜像到尾电流源。于是差分对的 $g_m$ 等于（常数）$/R_S$，$g_mR_D \propto R_D/R_S$。若 $R_S$ 的 TC 为零，则增益 TC 为零；即使电阻有 TC，只要 $R_S$ 与 $R_D$ 采用同一种材料，增益 TC 同样为零。PTAT 电流是一种更粗略的近似（它给出的是 $T$ 而不是 $T^{3/2}$）。

**常见错误。** 认为 $g_m$ 与 $\mu I_{SS}$ 成正比，或者把平方根处理错，得出 $I_{SS} \propto T^{3/4}$。对平方律器件，$g_m \propto \sqrt{\mu I_D}$，要使它保持恒定，需要 $I_D \propto 1/\mu = T^{3/2}$。

**常见错误。** 提出用由带隙基准（bandgap reference）导出的零 TC 尾电流。若 $I_{SS}$ 恒定，增益仍会以约 0.25 %/K 的速率下降；电流必须随温度**升高**。

**常见错误。** 所用恒定 $g_m$ 偏置电路的 NMOS 器件与差分对器件类型不同，或其 $R_S$ 与 $R_D$ 材料不同。要抵消 $\mu_n$，偏置器件与差分对器件必须具有相同的迁移率；要抵消电阻漂移，电阻必须相互匹配。

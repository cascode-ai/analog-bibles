# 详细步骤 - R242

**思路。** CMRR 为 $|A_{DM}/A_{CM}|$。即使完全匹配，这个五管放大器的单端输出也会对共模（common-mode，CM）输入作出响应：共模输入通过 $M_5$ 的有限输出电阻（output resistance）改变尾电流（tail current），而输出跟随节点 F 变化。按 $G_mR_{out}$ 计算 $A_{DM}$，并通过合并对称的两半边电路来计算 $A_{CM}$。由于题目给出了 $\gamma$，这里计入 $M_1$、$M_2$ 的体效应；同时也给出不计体效应时的结果。

### 第 1 步 — 偏置与小信号参数

所有器件的 $W/L = 50/0.5 = 100$；$M_5$ 流过 0.5 mA，每条支路流过 0.25 mA。

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},\\
g_{m3} = g_{m4} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = 1.39\ \mathrm{mS} ,
\end{aligned}
$$

$$
\begin{aligned}
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O3} = r_{O4} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
R_{SS} = r_{O5} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega ,
\end{aligned}
$$

其中 $r_{O5}$ 使用 NMOS 的 $\lambda$ 和**全部**尾电流。

**$M_1$、$M_2$ 的体效应。** 由 $V_{ov1} = \sqrt{2(0.25\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.193$ V，节点 P 满足 $V_P = 1.5 - 0.193 - V_{TH}(V_P)$，其中 $V_{TH} = 0.7 + 0.45(\sqrt{0.9 + V_P} - 0.9487)$。令 $u = \sqrt{0.9 + V_P}$：

$$u^2 + 0.45u - (0.9 + 1.5 - 0.193 - 0.7 + 0.4269) = u^2 + 0.45u - 1.9337 = 0 \;\Rightarrow\; u = \frac{-0.45 + \sqrt{0.2025 + 7.7350}}{2} = 1.184,$$

$$V_P = u^2 - 0.9 = 0.501\ \mathrm{V}, \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_P}} = \frac{0.45}{2(1.184)} = 0.190, \qquad g_{mb1} = \eta g_{m1} = 0.190\times2.59\ \mathrm{mS} = 0.49\ \mathrm{mS} .$$

### 第 2 步 — 差分增益

对差分输入，P 点基本上是交流地，电流镜（current mirror）在输出端把 $M_1$ 的信号电流叠加到 $M_2$ 的信号电流上（$G_m = g_{m1}$），且 $R_{out} \approx r_{O2}\|r_{O4}$：

$$A_{DM} \approx g_{m1}(r_{O2}\|r_{O4}) = (2.59\ \mathrm{mS})\left(\frac{40\times20}{40 + 20}\ \mathrm{k}\Omega\right) = (2.59\ \mathrm{mS})(13.3\ \mathrm{k}\Omega) = 34.5 .$$

### 第 3 步 — 共模增益：合并两半边电路

对共模输入，匹配的两条支路电流相等，因此 $M_3$ 和 $M_4$ 的 $V_{SG}$、电流和 $V_{SD}$ 都相等：**$V_{out} = V_F$**，可以把 F 和 out 连在一起。于是 $M_1 \| M_2$ 相当于一个器件（$2g_{m1}$，$2g_{mb1}$，$r_{O1}/2$），$M_3 \| M_4$ 是一个二极管负载 $\frac{1}{2g_{m3}}\big\|\frac{r_{O3}}{2}$，而 $M_5$ 是从 P 接到地的 $R_{SS} = r_{O5}$：这就是一个带源极负反馈（source degeneration）的共源级（common-source stage）。

<!-- diagram: diagram-01.cir -->

忽略远大于负载 $1/(2g_{m3}) = 0.36\ \mathrm{k}\Omega$ 的 $r_{O1}/2$，并取 $v_{gs} = v_{CM} - v_P$，$v_{bs} = -v_P$：

$$i = 2g_{m1}(v_{CM} - v_P) - 2g_{mb1}v_P .$$

对 P 点应用基尔霍夫电流定律（KCL），得 $v_P = iR_{SS}$，因此

$$
\begin{aligned}
i &= 2g_{m1}v_{CM} - 2(g_{m1} + g_{mb1})R_{SS}\,i,\\
i\left[1 + 2(g_{m1} + g_{mb1})R_{SS}\right] &= 2g_{m1}v_{CM},\\
i &= \frac{2g_{m1}}{1 + 2(g_{m1} + g_{mb1})R_{SS}}\,v_{CM} .
\end{aligned}
$$

这一电流流过合并后的二极管负载，其电阻 $\approx 1/(2g_{m3})$（因为 $r_{O3}/2 = 10\ \mathrm{k}\Omega \gg 0.36\ \mathrm{k}\Omega$）：

$$A_{CM} = \frac{v_{out}}{v_{CM}} = -\frac{i}{2g_{m3}\,v_{CM}} = -\frac{g_{m1}/g_{m3}}{1 + 2(g_{m1} + g_{mb1})R_{SS}} .$$

数值计算：

$$
\begin{aligned}
2g_{m1}R_{SS} &= 2(2.59\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 103.5,\\
2(g_{m1} + g_{mb1})R_{SS} &= 2(3.08\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 123.2,\\
\frac{g_{m1}}{g_{m3}} &= \frac{2.59}{1.39} = 1.87 ,
\end{aligned}
$$

$$A_{CM} = -\frac{1.87}{1 + 123.2} = -0.0150 \quad(\text{with body effect}), \qquad A_{CM} = -\frac{1.87}{1 + 103.5} = -0.0179 \quad(\text{without}).$$

输出是单端的，跟随 F 点变化，而只要尾电流变化，F 点就会移动；只有很强的负反馈 $2g_{m1}R_{SS} \approx 100$ 才使 $A_{CM}$ 保持很小。

### 第 4 步 — CMRR

$$\mathrm{CMRR} = \left|\frac{A_{DM}}{A_{CM}}\right| = \frac{g_{m1}(r_{O1}\|r_{O3})}{\dfrac{g_{m1}/g_{m3}}{1 + 2(g_{m1} + g_{mb1})R_{SS}}} = \left[1 + 2(g_{m1} + g_{mb1})r_{O5}\right]g_{m3}(r_{O1}\|r_{O3}) ,$$

其中

$$g_{m3}(r_{O1}\|r_{O3}) = (1.39\ \mathrm{mS})(13.3\ \mathrm{k}\Omega) = 18.5 .$$

**计入体效应：**

$$\mathrm{CMRR} = 124.2\times18.5 = 2.3\times10^3, \qquad 20\log_{10}(2295) = 67.2\ \mathrm{dB} .$$

**不计体效应**（$g_{mb1} = 0$）：

$$\mathrm{CMRR} = (1 + 2g_{m1}r_{O5})\,g_{m3}(r_{O1}\|r_{O3}) = 104.5\times18.5 = 1.93\times10^3, \qquad 65.7\ \mathrm{dB} .$$

精确的节点分析（计入所有 $r_O$）给出 $A_{DM} = 33.9$，$A_{CM} = -0.0144$（计入体效应）或 $-0.0171$（不计体效应），即 CMRR ≈ $2.36\times10^3$（67.4 dB）或 $1.99\times10^3$（66.0 dB），与简单公式的结果相差约 3 % 以内。

### 结果

$$\mathrm{CMRR} \approx \left[1 + 2g_{m1,2}r_{O5}\right]g_{m3,4}\,(r_{O1,2}\|r_{O3,4}) = 104.5\times18.5 \approx 1.9\times10^3\ (\approx 66\ \mathrm{dB})$$

以上为忽略体效应时的结果。计入 $M_1$、$M_2$ 的体效应（$V_P \approx 0.50$ V，$g_{mb1} \approx 0.19g_{m1}$）后，尾电流项中的 $g_{m1}$ 换成 $g_{m1} + g_{mb1}$，得到 $124\times18.5 \approx 2.3\times10^3$（≈ 67 dB）。其中用到 $A_{DM} \approx g_{m1}(r_{O1}\|r_{O3}) = 34.5$ 和 $A_{CM} \approx -\dfrac{g_{m1}/g_{m3}}{1 + 2(g_{m1} + g_{mb1})r_{O5}}$，$g_{m1} = 2.59$ mS，$g_{m3} = 1.39$ mS，$r_{O1}\|r_{O3} = 13.3\ \mathrm{k}\Omega$，$r_{O5} = 20\ \mathrm{k}\Omega$。

**常见错误。** 因为电路完全匹配，就断言 CMRR 为无穷大。这只对**全差分**（fully differential）输出成立；这里的单端输出跟随 F 点，而只要尾电流变化，F 点就会移动。

**常见错误。** 用每条支路的电流（0.25 mA，得到 40 kΩ）或 PMOS 的 $\lambda$ 来计算 $r_{O5}$。$M_5$ 是流过 0.5 mA 的 NMOS，因此 $r_{O5} = 1/(0.1\times0.5\ \mathrm{mA}) = 20\ \mathrm{k}\Omega$。

**常见错误。** 用 $g_mR_{SS}$ 或 $g_mR_{SS}/2$ 作为负反馈因子。合并后的输入器件跨导（transconductance）为 $2g_{m1}$，并看到完整的 $R_{SS}$，因此该因子为 $1 + 2g_{m1}R_{SS}$（计入体效应时再加上 $2g_{mb1}R_{SS}$）。

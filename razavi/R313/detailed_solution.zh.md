# 详细步骤 - R313

**思路。** 计算 $g_m$ 和器件电容，并把它们归并为 $C_S$（源极节点）和 $C_D$（漏极节点）。当 $\lambda = 0$ 且栅极处于交流地时，没有电容跨接在共栅（CG）级的输入与输出之间，因此由两个节点的基尔霍夫电流定律（KCL）可得到精确因式分解的传递函数，每个节点对应一个极点。然后分析由相同元件构成的共源（CS）级（其 $C_{GD}$ 跨接在输入与输出之间，产生密勒效应），并进行比较。

### 第 1 步 — 跨导（transconductance）与器件电容

由 $W/L = 50/0.5 = 100$ 得：

$$g_m = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}, \qquad \frac{1}{g_m} = 193\ \Omega .$$

在饱和区（saturation region），$C_{GS}$ 等于 $\tfrac23WLC_{ox}$ 加上交叠电容 $WC_{ov}$，而 $C_{GD}$ 只有交叠电容：

$$C_{GS} = \tfrac23(50)(0.5)(3.84)\ \mathrm{fF} + (50)(0.4)\ \mathrm{fF} = 64 + 20 = 84\ \mathrm{fF}, \qquad C_{GD} = (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF}.$$

源区和漏区的面积为 $W\times E = 50\times1.5\ \mu\mathrm{m}^2$，周长为 $2(W + E) = 103\ \mu$m，且 $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m} = 0.0035\ \mathrm{fF/\mu m}$：

$$C_{SB} = C_{DB} = (75\ \mu\mathrm{m^2})(0.56\ \mathrm{fF/\mu m^2}) + (103\ \mu\mathrm{m})(0.0035\ \mathrm{fF/\mu m}) = 42.0 + 0.36 = 42.4\ \mathrm{fF}.$$

### 第 2 步 — 共栅级的传递函数

栅极接 $V_b$（交流地），衬底（bulk）接地，因此 $C_{GS}$ 和 $C_{SB}$ 是源极的负载，$C_{GD}$ 和 $C_{DB}$ 是漏极的负载：

$$C_S = C_{GS} + C_{SB} = 84 + 42.4 = 126.4\ \mathrm{fF}, \qquad C_D = C_{GD} + C_{DB} = 20 + 42.4 = 62.4\ \mathrm{fF}.$$

没有电容连接源极与漏极，因此**没有密勒效应**。晶体管从漏极（输出端）向源极 S 输送电流 $g_mv_{gs} = g_m(0 - V_S) = -g_mV_S$，它与 $V_{out}$ 无关（$\lambda = 0$，无体效应）。S 点和输出端的 KCL：

$$\frac{V_{in} - V_S}{R_S} - g_mV_S = C_Ss\,V_S\quad\Longrightarrow\quad V_{in} = V_S\left(1 + g_mR_S + R_SC_Ss\right),$$

$$-\frac{V_{out}}{R_D} = C_Ds\,V_{out} - g_mV_S\quad\Longrightarrow\quad V_{out} = \frac{g_mR_D}{1 + R_DC_Ds}\,V_S .$$

联立得：

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{\left(1 + g_mR_S + R_SC_Ss\right)\left(1 + R_DC_Ds\right)} = \frac{g_mR_D}{1 + g_mR_S}\cdot\frac{1}{\left(1 + \dfrac{s}{\omega_{in}}\right)\left(1 + \dfrac{s}{\omega_{out}}\right)}.$$

由于输出从不反馈到输入，这两个极点是**精确的**。

### 第 3 步 — 共栅级的数值

**低频增益：**

$$A_0 = \frac{g_mR_D}{1 + g_mR_S} = \frac{(5.18\ \mathrm{mS})(2\ \mathrm{k\Omega})}{1 + (5.18\ \mathrm{mS})(1\ \mathrm{k\Omega})} = \frac{10.35}{6.18} = 1.68 .$$

$R_S$ 与输入电阻 $1/g_m = 193\ \Omega$ 构成分压器，只把 $V_{in}$ 的 $1/6.18$ 传到源极。

**输入极点**（源极看到 $R_S\parallel(1/g_m)$）：

$$\omega_{in} = \frac{1 + g_mR_S}{R_SC_S} = \frac{g_m + 1/R_S}{C_S} = \frac{6.18\ \mathrm{mS}}{126.4\ \mathrm{fF}} = 4.89\times10^{10}\ \mathrm{rad/s}\quad(f = 7.8\ \mathrm{GHz}).$$

**输出极点**（主极点）：

$$\omega_{out} = \frac{1}{R_DC_D} = \frac{1}{(2\ \mathrm{k\Omega})(62.4\ \mathrm{fF})} = 8.02\times10^{9}\ \mathrm{rad/s}\quad(f = 1.28\ \mathrm{GHz}).$$

### 第 4 步 — 用于比较的共源级

此时 $R_S$ 与栅极串联，源极接地，这就去掉了 $C_{SB}$。剩下的电容为 $C_{GS} = 84$ fF（栅极到地）、$C_{GD} = 20$ fF（栅极到漏极，**跨接在输入与输出之间**）和 $C_{DB} = 42.4$ fF（漏极到地）。

<!-- diagram: diagram-01.cir -->

由栅极和漏极的 KCL 可得标准的共源级结果

$$\frac{V_{out}}{V_{in}} = \frac{(C_{GD}s - g_m)R_D}{R_SR_D\xi s^2 + \left[R_S(1 + g_mR_D)C_{GD} + R_SC_{GS} + R_D(C_{GD} + C_{DB})\right]s + 1},$$

其中 $\xi = C_{GS}C_{GD} + C_{GS}C_{DB} + C_{GD}C_{DB}$。

**增益：** $A_0 = -g_mR_D = -(5.18\ \mathrm{mS})(2\ \mathrm{k\Omega}) = -10.4$。

**各系数：**

$$
\begin{aligned}
\xi &= (84)(20) + (84)(42.4) + (20)(42.4)\ \mathrm{fF^2} = 1680 + 3558 + 847 = 6085\ \mathrm{fF^2},\\
R_SR_D\xi &= (1\ \mathrm{k\Omega})(2\ \mathrm{k\Omega})(6.085\times10^{-27}\ \mathrm{F^2}) = 1.217\times10^{-20}\ \mathrm{s^2},\\
R_S(1 + g_mR_D)C_{GD} &= (1\ \mathrm{k\Omega})(11.35)(20\ \mathrm{fF}) = 227\ \mathrm{ps},\\
R_SC_{GS} &= (1\ \mathrm{k\Omega})(84\ \mathrm{fF}) = 84\ \mathrm{ps},\\
R_D(C_{GD} + C_{DB}) &= (2\ \mathrm{k\Omega})(62.4\ \mathrm{fF}) = 125\ \mathrm{ps},\\
\text{sum} &= 436\ \mathrm{ps}.
\end{aligned}
$$

**极点**（$1.217\times10^{-20}s^2 + 4.36\times10^{-10}s + 1 = 0$ 的根）：

$$
\begin{aligned}
s_{1,2} &= \frac{-4.36\times10^{-10}\pm\sqrt{(4.36\times10^{-10})^2 - 4(1.217\times10^{-20})}}{2(1.217\times10^{-20})}\\
&= \frac{-4.36\times10^{-10}\pm\sqrt{1.413\times10^{-19}}}{2.434\times10^{-20}} = \frac{-4.36\times10^{-10}\pm3.76\times10^{-10}}{2.434\times10^{-20}},\\
|s_1| &= 2.46\times10^{9}\ \mathrm{rad/s}\ (0.39\ \mathrm{GHz}), \qquad |s_2| = 3.33\times10^{10}\ \mathrm{rad/s}\ (5.3\ \mathrm{GHz}).
\end{aligned}
$$

**零点：** $s_z = +g_m/C_{GD} = 5.18\ \mathrm{mS}/20\ \mathrm{fF} = 2.59\times10^{11}$ rad/s（41 GHz），位于右半平面。

主极点主要由 $R_S(1 + g_mR_D)C_{GD}$ 决定：$C_{GD}$ 经密勒效应被放大 $1 + g_mR_D = 11.4$ 倍。

### 第 5 步 — 比较

| | 共栅级 | 共源级 |
|---|---|---|
| 低频增益 | $+1.68$ | $-10.4$ |
| 主极点 | 1.28 GHz（输出） | 0.39 GHz（密勒，输入） |
| 第二极点 | 7.8 GHz（输入） | 5.3 GHz |
| 零点 | 无 | 右半平面，41 GHz |
| 增益 × 主极点频率 | ≈ 2.1 GHz | ≈ 4.1 GHz |

- **增益。** 共源级的增益大 $1 + g_mR_S = 6.2$ 倍，因为共栅级很低的输入电阻 $1/g_m$ 对信号源电阻形成了负载。
- **带宽。** 由于没有密勒倍增，共栅级的最低极点（1.28 GHz）比共源级的主极点（0.39 GHz）高约 3.3 倍。
- **总体而言。** 共栅级以增益换取带宽；在本例中它的增益带宽积实际上更低，因此它的吸引力在于宽带宽以及同相、低输入阻抗的特性，而不在于增益本身。

若计入体效应，共栅级增益（分子和分母）以及输入极点中的 $g_m$ 都将变为 $g_m + g_{mb}$，使增益略有提高，输入极点提高得更明显；但题目要求忽略体效应。

### 结果

**共栅级**（$g_m = 5.18$ mS，$C_S = C_{GS} + C_{SB} = 126.4$ fF，$C_D = C_{GD} + C_{DB} = 62.4$ fF）：

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{1 + g_mR_S}\cdot\frac{1}{(1 + s/\omega_{in})(1 + s/\omega_{out})},$$

- 低频增益 $g_mR_D/(1 + g_mR_S)\approx1.68$；
- 输入极点 $\omega_{in} = (g_m + 1/R_S)/C_S\approx4.9\times10^{10}$ rad/s（≈ 7.8 GHz）；
- 输出极点 $\omega_{out} = 1/(R_DC_D)\approx8.0\times10^{9}$ rad/s（≈ 1.28 GHz）；当 $\lambda = 0$ 时两者都是精确的。

**用相同元件构成的共源级：** 增益 $-g_mR_D\approx-10.4$（约大 6.2 倍）；极点 ≈ $2.5\times10^9$ rad/s（0.39 GHz）和 ≈ $3.3\times10^{10}$ rad/s（5.3 GHz），另有一个位于 $g_m/C_{GD}\approx41$ GHz 的右半平面零点。由于 $C_{GD}$ 经密勒倍增，共源级的主极点约低 3 倍；共栅级以牺牲增益换取带宽。

**常见错误。** 只用 $R_S$ 计算输入极点，得到 $1/(R_SC_S)\approx1.26$ GHz。源极还看到与 $R_S$ 并联的 $1/g_m = 193\ \Omega$，因此极点为 $(g_m + 1/R_S)/C_S$，高出六倍以上。

**常见错误。** 把共栅级增益写成 $g_mR_D = 10.4$，忽略了 $R_S$ 与很低的输入电阻 $1/g_m$ 构成的分压器；增益应为 $g_mR_D/(1 + g_mR_S)$。

**常见错误。** 对共栅级应用密勒倍增，或漏掉结电容。在共栅级中，$C_{GD}$ 接到交流接地的栅极上，只是简单地计入 $C_D$；若略去 $C_{SB}$ 和 $C_{DB}$，极点将位于 11.7 GHz 和 4 GHz 附近，明显偏高。

# 详细步骤 - R291

**思路。** 用小信号等效电路代替 PMOS 电流源（一个电阻 $r_{O2}$ 加上它挂在输出节点上的电容），于是电路成为标准的共源级，其漏极电阻为 $R_{out} = r_{O1}\parallel r_{O2}$，输出端总电容为 $C_{out}$。然后在两个节点列基尔霍夫电流定律（KCL）方程，得到精确的二阶传递函数，并代入器件参数求出其极点和零点。

### 第 1 步 — PMOS 负载给电路增加了什么

$V_{DD}$、$M_2$ 栅极上的偏置电压以及接 $V_{DD}$ 的 $M_2$ 衬底（bulk）都是交流地。因此 $v_{gs2} = 0$，$M_2$ 的沟道只剩下从输出到交流地的 $r_{O2}$；$C_{GD2}$（接到交流接地的栅极）和 $C_{DB2}$（接到衬底）都是**从输出到地的电容**。$C_{GS2}$ 位于两个交流地之间，不起作用；$M_1$ 的 $C_{SB1}$ 也一样（其源极和衬底都接地）。因此该电路就是图中的共源级，只是用

$$R_{out} = r_{O1}\parallel r_{O2}, \qquad C_{out} = C_{DB1} + C_{DB2} + C_{GD2}$$

分别代替漏极电阻和 $C_{DB}$。

### 第 2 步 — 偏置点与小信号参数

由 $(W/L)_1 = 50/0.5 = 100$ 得：

$$g_{m1} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}.$$

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
r_{O2} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k\Omega},\\
R_{out} &= r_{O1}\parallel r_{O2} = \frac{(10)(5)}{10 + 5}\ \mathrm{k\Omega} = 3.33\ \mathrm{k\Omega}.
\end{aligned}
$$

**验证 $M_2$。** 由 $(W/L)_2 = 162.8/0.5 = 325.6$ 和 $V_{ov2} = 0.4$ V，

$$I_{D2} = \tfrac12\mu_pC_{ox}\left(\tfrac{W}{L}\right)_2V_{ov2}^2 = \tfrac12(38.4\ \mu\mathrm{A/V^2})(325.6)(0.4\ \mathrm{V})^2 = 1.00\ \mathrm{mA},$$

因此 $M_2$ 确实提供了 $M_1$ 所吸取的 1 mA。

**低频增益：**

$$A_0 = -g_{m1}R_{out} = -(5.18\ \mathrm{mS})(3.33\ \mathrm{k\Omega}) = -17.3 .$$

### 第 3 步 — $M_1$ 的电容

在饱和区中，$C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$，$C_{GD} = WC_{ov}$，其中 $C_{ov}$ 为单位宽度的交叠电容：

$$
\begin{aligned}
\tfrac23W_1LC_{ox} &= \tfrac23(50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = \tfrac23(96\ \mathrm{fF}) = 64\ \mathrm{fF},\\
W_1C_{ov} &= (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF},\\
C_{GS1} &= 64 + 20 = 84\ \mathrm{fF},\\
C_{GD1} &= 20\ \mathrm{fF}.
\end{aligned}
$$

零偏漏结电容为 $C_{DB} = WEC_j + 2(W + E)C_{jsw}$，其中 $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m} = 3.5\times10^{-18}\ \mathrm{F/\mu m} = 0.0035\ \mathrm{fF/\mu m}$：

$$
\begin{aligned}
W_1EC_{j} &= (50)(1.5)\ \mu\mathrm{m^2}\times0.56\ \mathrm{fF/\mu m^2} = 42.0\ \mathrm{fF},\\
2(W_1 + E)C_{jsw} &= 2(51.5\ \mu\mathrm{m})(0.0035\ \mathrm{fF/\mu m}) = 0.36\ \mathrm{fF},\\
C_{DB1} &= 42.0 + 0.36 = 42.4\ \mathrm{fF}.
\end{aligned}
$$

### 第 4 步 — $M_2$ 的电容与输出端总电容

$W_2 = 162.8\ \mu$m，PMOS 的侧壁电容值为 $0.32\times10^{-11}\ \mathrm{F/m} = 0.0032\ \mathrm{fF/\mu m}$。$M_2$ 处于饱和区，因此 $C_{GD2}$ 只有交叠电容：

$$
\begin{aligned}
W_2EC_{j} &= (162.8)(1.5)\ \mu\mathrm{m^2}\times0.94\ \mathrm{fF/\mu m^2} = 244.2\times0.94 = 229.5\ \mathrm{fF},\\
2(W_2 + E)C_{jsw} &= 2(164.3\ \mu\mathrm{m})(0.0032\ \mathrm{fF/\mu m}) = 1.05\ \mathrm{fF},\\
C_{DB2} &= 229.5 + 1.05 = 230.6\ \mathrm{fF},\\
C_{GD2} &= W_2C_{ov,p} = (162.8\ \mu\mathrm{m})(0.3\ \mathrm{fF/\mu m}) = 48.8\ \mathrm{fF}.
\end{aligned}
$$

**从输出节点到地的总电容：**

$$C_{out} = C_{DB1} + C_{DB2} + C_{GD2} = 42.4 + 230.6 + 48.8 = 321.8\ \mathrm{fF}\approx 322\ \mathrm{fF}.$$

负载器件比 $M_1$ 宽三倍多（PMOS 要以仅 0.4 V 的过驱动电压流过 1 mA，就需要很大的 $W/L$），因此它的电容在输出节点上占主导：$C_{out}$ 是 $C_{DB1}$ 本身的 7.6 倍。

### 第 5 步 — 小信号模型（small-signal model）与传递函数

<!-- diagram: diagram-01.cir -->

节点 $X$（$M_1$ 的栅极）经 $R_S$ 接 $V_{in}$，经 $C_{GS1}$ 接地，经 $C_{GD1}$ 接输出；输出节点上接有到地的 $g_{m1}V_X$、$R_{out}$ 和 $C_{out}$，以及接回 $X$ 的 $C_{GD1}$。以下记 $C_{GS} \equiv C_{GS1}$，$C_{GD} \equiv C_{GD1}$，$g_m \equiv g_{m1}$。

**节点 $X$ 的 KCL**（以流出 $X$ 的电流为正），乘以 $R_S$：

$$\frac{V_X - V_{in}}{R_S} + V_XC_{GS}s + (V_X - V_{out})C_{GD}s = 0 \quad\Longrightarrow\quad V_X\left[1 + R_S(C_{GS} + C_{GD})s\right] - V_{out}R_SC_{GD}s = V_{in}. \qquad (1)$$

**输出节点的 KCL**（以流出该节点的电流为正）：

$$(V_{out} - V_X)C_{GD}s + g_mV_X + \frac{V_{out}}{R_{out}} + V_{out}C_{out}s = 0 ,$$

$$V_X(g_m - C_{GD}s) = -V_{out}\left[\frac{1}{R_{out}} + (C_{GD} + C_{out})s\right] \quad\Longrightarrow\quad V_X = -V_{out}\,\frac{1 + R_{out}(C_{GD} + C_{out})s}{R_{out}(g_m - C_{GD}s)}. \qquad (2)$$

**消去 $V_X$。** 把 (2) 代入 (1)，两边同乘以 $R_{out}(g_m - C_{GD}s)$：

$$-V_{out}\Big\{\left[1 + R_{out}(C_{GD} + C_{out})s\right]\left[1 + R_S(C_{GS} + C_{GD})s\right] + R_SR_{out}C_{GD}s\,(g_m - C_{GD}s)\Big\} = V_{in}R_{out}(g_m - C_{GD}s).$$

展开花括号 $D(s)$：

$$
\begin{aligned}
D(s) &= 1 + \left[R_{out}(C_{GD} + C_{out}) + R_S(C_{GS} + C_{GD}) + g_mR_SR_{out}C_{GD}\right]s\\
&\quad + R_SR_{out}\left[(C_{GD} + C_{out})(C_{GS} + C_{GD}) - C_{GD}^2\right]s^2 ,
\end{aligned}
$$

其中 $C_{GD}^2$ 项相互抵消：

$$(C_{GD} + C_{out})(C_{GS} + C_{GD}) - C_{GD}^2 = C_{GS}C_{GD} + C_{GS}C_{out} + C_{GD}C_{out} \equiv \xi .$$

把 $s$ 的系数整理为 $R_S(1 + g_mR_{out})C_{GD} + R_SC_{GS} + R_{out}(C_{GD} + C_{out})$：

$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD}s - g_m)\,R_{out}}{R_SR_{out}\,\xi\,s^2 + \left[R_S(1 + g_mR_{out})C_{GD} + R_SC_{GS} + R_{out}(C_{GD} + C_{out})\right]s + 1},$$

在 $s = 0$ 时它给出 $-g_mR_{out}$，与第 2 步一致。

### 第 6 步 — 分母系数的数值

**$s^2$ 的系数。**

$$
\begin{aligned}
\xi &= (84)(20) + (84)(321.8) + (20)(321.8)\ \mathrm{fF^2}\\
&= 1680 + 27\,031 + 6436\ \mathrm{fF^2} = 35\,147\ \mathrm{fF^2} = 3.51\times10^{-26}\ \mathrm{F^2},\\
R_SR_{out}\,\xi &= (1\ \mathrm{k\Omega})(3.33\ \mathrm{k\Omega})(3.51\times10^{-26}\ \mathrm{F^2}) = 1.17\times10^{-19}\ \mathrm{s^2}.
\end{aligned}
$$

**$s$ 的系数**（$g_mR_{out} = 17.26$）：

$$
\begin{aligned}
R_S(1 + g_mR_{out})C_{GD} &= (1\ \mathrm{k\Omega})(18.26)(20\ \mathrm{fF}) = 0.365\ \mathrm{ns},\\
R_SC_{GS} &= (1\ \mathrm{k\Omega})(84\ \mathrm{fF}) = 0.084\ \mathrm{ns},\\
R_{out}(C_{GD} + C_{out}) &= (3.33\ \mathrm{k\Omega})(341.8\ \mathrm{fF}) = 1.139\ \mathrm{ns},\\
\text{sum} &= 1.588\ \mathrm{ns} = 1.59\times10^{-9}\ \mathrm{s}.
\end{aligned}
$$

因此

$$D(s) = 1.17\times10^{-19}s^2 + 1.59\times10^{-9}s + 1 .$$

第一项（$0.365$ ns）是从输入端看到的经密勒倍增（Miller multiplication）的 $C_{GD1}$，第三项（$1.139$ ns）是输出节点的时间常数，由于负载电容很大，它是较慢的那一个。

### 第 7 步 — 极点

令 $a = 1.1716\times10^{-19}\ \mathrm{s^2}$，$b = 1.5885\times10^{-9}\ \mathrm{s}$：

$$
\begin{aligned}
s_{1,2} &= \frac{-b \pm \sqrt{b^2 - 4a}}{2a},\\
b^2 &= 2.523\times10^{-18}\ \mathrm{s^2}, \qquad 4a = 0.469\times10^{-18}\ \mathrm{s^2},\\
\sqrt{b^2 - 4a} &= \sqrt{2.054\times10^{-18}}\ \mathrm{s} = 1.433\times10^{-9}\ \mathrm{s},\\
s_1 &= \frac{(-1.5885 + 1.4333)\times10^{-9}}{2.343\times10^{-19}} = -6.6\times10^{8}\ \mathrm{rad/s},\\
s_2 &= \frac{(-1.5885 - 1.4333)\times10^{-9}}{2.343\times10^{-19}} = -1.29\times10^{10}\ \mathrm{rad/s}.
\end{aligned}
$$

换算成赫兹：

$$f_{p1} = \frac{6.62\times10^8}{2\pi} \approx 105\ \mathrm{MHz}, \qquad f_{p2} = \frac{1.29\times10^{10}}{2\pi} \approx 2.05\ \mathrm{GHz}.$$

两个极点只相差约 20 倍，因此主极点（dominant pole）的简便估算 $\omega_{p1}\approx 1/b = 6.3\times10^8$ rad/s、$\omega_{p2}\approx b/a = 1.36\times10^{10}$ rad/s 有约 5 % 的误差；这就是要精确求解二次方程的原因。

### 第 8 步 — 零点

分子 $(C_{GD1}s - g_{m1})R_{out}$ 在下式处为零：

$$s_z = +\frac{g_{m1}}{C_{GD1}} = \frac{5.18\times10^{-3}\ \mathrm{S}}{20\times10^{-15}\ \mathrm{F}} = +2.59\times10^{11}\ \mathrm{rad/s}, \qquad f_z = \frac{2.59\times10^{11}}{2\pi} \approx 41\ \mathrm{GHz},$$

它位于**右半平面**：在该频率处，经 $C_{GD1}$ 的未反相前馈电流 $C_{GD1}sV_X$ 恰好抵消反相的晶体管电流 $g_{m1}V_X$，没有信号电流到达输出节点。

### 第 9 步 — 理想电流源的情形（$\lambda = 0$）

若忽略沟道长度调制，则 $R_{out}\to\infty$。将分子和分母同除以 $R_{out}$，并令 $R_{out}\to\infty$：

$$\frac{V_{out}}{V_{in}} = \frac{C_{GD}s - g_m}{R_S\,\xi\,s^2 + \left[R_Sg_mC_{GD} + C_{GD} + C_{out}\right]s}.$$

常数项消失了，因此一个极点位于**原点**（输出节点把电流积分到电容上，没有电阻性通路）。另一个极点为

$$
\begin{aligned}
|s_2| &= \frac{R_Sg_mC_{GD} + C_{GD} + C_{out}}{R_S\,\xi}\\
&= \frac{(103.5 + 20 + 321.8)\ \mathrm{fF}}{(1\ \mathrm{k\Omega})(3.51\times10^{-26}\ \mathrm{F^2})} = 1.27\times10^{10}\ \mathrm{rad/s}\ \ (\approx 2.0\ \mathrm{GHz}),
\end{aligned}
$$

其中 $R_Sg_mC_{GD} = (1\ \mathrm{k\Omega})(5.18\ \mathrm{mS})(20\ \mathrm{fF}) = 103.5$ fF。零点不变。不过，在给定的 $\lambda$ 值下，$R_{out} = 3.33\ \mathrm{k\Omega}$ 是有限的，应采用第 7–8 步的结果。

### 结果

取 $g_{m1} = 5.18$ mS，$R_{out} = r_{O1}\parallel r_{O2} = 3.33\ \mathrm{k\Omega}$，$C_{GS1} = 84$ fF，$C_{GD1} = 20$ fF，$C_{out} = C_{DB1} + C_{DB2} + C_{GD2} = 42.4 + 230.6 + 48.8 \approx 322$ fF：

$$\frac{V_{out}}{V_{in}} = \frac{(C_{GD1}s - g_{m1})R_{out}}{1.17\times10^{-19}s^2 + 1.59\times10^{-9}s + 1}, \qquad A_0 = -g_{m1}R_{out} \approx -17 .$$

- **极点：** $\omega_{p1} \approx 6.6\times10^8$ rad/s（$f \approx 105$ MHz）和 $\omega_{p2} \approx 1.29\times10^{10}$ rad/s（$f \approx 2.05$ GHz），都在左半平面。
- **零点：** $s_z = +g_{m1}/C_{GD1} \approx +2.59\times10^{11}$ rad/s（$\approx 41$ GHz），在右半平面。
- 若忽略 $\lambda$（理想电流源）：一个极点位于原点，另一个位于 $\approx 1.27\times10^{10}$ rad/s（$\approx 2.0$ GHz），零点不变。

**常见错误。** 漏掉 PMOS 负载的电容。由于 $M_2$ 很宽，$C_{DB2}$ 和 $C_{GD2}$（合计约 280 fF）远大于 $C_{DB1}$；去掉它们后，输出端只剩 42 fF，预测出的极点约为 255 MHz 和 4.9 GHz，偏高两倍以上。

**常见错误。** 把零点放在左半平面，或者完全忽略 $C_{GD1}$ 的前馈作用。分子是 $C_{GD1}s - g_{m1}$ 而不是 $C_{GD1}s + g_{m1}$，因此零点位于 $s = +g_{m1}/C_{GD1}$。

**常见错误。** 使用错误的输出电阻，例如固定的漏极电阻或 $1/g_{m2}$。$M_2$ 的栅极接固定偏置，因此它不是二极管连接（diode-connected）的；它只呈现 $r_{O2}$，并与 $r_{O1}$ 并联。

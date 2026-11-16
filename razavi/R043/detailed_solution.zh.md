# 详细步骤 - R043

**思路。** 在饱和区，$C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$，$C_{GD} = WC_{ov}$，$C_{GB} \approx 0$；结电容由折叠版图（layout）中每个源/漏（S/D）区的面积和周长求得。然后由平方律（square law）求出 $g_m$，得到 $f_T = g_m/[2\pi(C_{GS} + C_{GD})]$。

### 第 1 步 — 饱和区的栅极电容

取 $C_{ox} = 3.84\ \mathrm{fF/\mu m^2}$（与 $\varepsilon_{ox}/t_{ox} = 3.9\times8.854\times10^{-12}/(9\times10^{-9}) = 3.84\times10^{-3}\ \mathrm{F/m^2}$ 一致），单位宽度的交叠电容 $C_{ov} = 0.4\ \mathrm{fF/\mu m}$：

$$WLC_{ox} = (50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = 25\ \mu\mathrm{m^2}\times3.84\ \mathrm{fF/\mu m^2} = 96.0\ \mathrm{fF},$$

$$WC_{ov} = (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF}.$$

在饱和区，沟道在漏端附近夹断，因此沟道电荷由源端控制：

$$
\begin{aligned}
C_{GS} &= \tfrac23\,WLC_{ox} + WC_{ov} = \tfrac23(96.0\ \mathrm{fF}) + 20\ \mathrm{fF} = 64.0 + 20 = 84.0\ \mathrm{fF},\\
C_{GD} &= WC_{ov} = 20\ \mathrm{fF}.
\end{aligned}
$$

反型层把衬底与栅极屏蔽开，因此 $C_{GB} \approx 0$；栅指末端很小的边缘电容（fringing capacitance）忽略不计。

### 第 2 步 — 漏-衬底结电容（中间的一个区域）

由于 $1\ \mathrm{F/m} = 10^{15}\ \mathrm{fF}/10^{6}\ \mu\mathrm{m} = 10^{9}\ \mathrm{fF/\mu m}$，单位周长的侧壁电容为

$$C_{jsw} = 0.35\times10^{-11}\times10^{9}\ \mathrm{fF/\mu m} = 0.0035\ \mathrm{fF/\mu m}.$$

漏极是中间唯一的一个区域，大小为 $W/2$ × $E$。先算底面部分，再算侧壁部分（四条边都计入）：

$$A_D = \frac{W}{2}E = (25\ \mu\mathrm{m})(1.5\ \mu\mathrm{m}) = 37.5\ \mu\mathrm{m^2}, \qquad A_DC_j = 37.5\times0.56\ \mathrm{fF} = 21.0\ \mathrm{fF},$$

$$P_D = 2\left(\frac{W}{2} + E\right) = 2(25 + 1.5)\ \mu\mathrm{m} = 53\ \mu\mathrm{m}, \qquad P_DC_{jsw} = 53\times0.0035\ \mathrm{fF} = 0.19\ \mathrm{fF}.$$

总电容（零偏置值）：

$$C_{DB} = A_DC_j + P_DC_{jsw} = 21.0 + 0.19 = 21.2\ \mathrm{fF}.$$

若器件不折叠，漏区为 $W\times E$，则 $C_{DB} = 50\times1.5\times0.56 + 2(50 + 1.5)\times0.0035 = 42.0 + 0.36 = 42.4$ fF：折叠使漏极电容减半，这正是折叠的目的。

### 第 3 步 — 源-衬底结电容（外侧的两个区域）

源区有**两个**，每个都是 $W/2$ × $E$：

$$A_S = 2\cdot\frac{W}{2}E = WE = (50\ \mu\mathrm{m})(1.5\ \mu\mathrm{m}) = 75\ \mu\mathrm{m^2}, \qquad A_SC_j = 75\times0.56\ \mathrm{fF} = 42.0\ \mathrm{fF},$$

$$P_S = 2\times2\left(\frac{W}{2} + E\right) = 4(26.5)\ \mu\mathrm{m} = 106\ \mu\mathrm{m}, \qquad P_SC_{jsw} = 106\times0.0035\ \mathrm{fF} = 0.37\ \mathrm{fF},$$

$$C_{SB} = A_SC_j + P_SC_{jsw} = 42.0 + 0.37 = 42.4\ \mathrm{fF}.$$

由于 $C_{jsw}$ 很小，侧壁项不到 1 %，可以略去。

### 第 4 步 — $I_D = 1$ mA 时的跨导（transconductance）

由 $W/L = 50/0.5 = 100$：

$$g_m = \sqrt{2\,\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(1\times10^{-3}\ \mathrm{A})} = \sqrt{2.68\times10^{-5}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}.$$

过驱动电压为

$$V_{ov} = \frac{2I_D}{g_m} = \frac{2\times1\ \mathrm{mA}}{5.18\ \mathrm{mS}} = 0.386\ \mathrm{V},$$

这是正常的强反型（strong inversion）取值；只要 $V_{DS} \ge 0.39$ V，器件就处于饱和区，这与题目的假设一致。

### 第 5 步 — 特征频率（transit frequency）

源极、漏极和衬底都接交流地时，$C_{DB}$ 和 $C_{SB}$ 中没有信号电流，因此只有 $C_{GS}$ 和 $C_{GD}$ 构成栅极的负载：

$$C_{GS} + C_{GD} = 84.0 + 20 = 104.0\ \mathrm{fF},$$

$$f_T = \frac{g_m}{2\pi(C_{GS} + C_{GD})} = \frac{5.18\times10^{-3}\ \mathrm{S}}{2\pi\times104.0\times10^{-15}\ \mathrm{F}} = \frac{5.18\times10^{-3}}{6.53\times10^{-13}}\ \mathrm{Hz} = 7.9\ \mathrm{GHz}.$$

### 结果

| 电容 | 表达式 | 数值 |
|---|---|---|
| $C_{GS}$ | $\tfrac23WLC_{ox} + WC_{ov}$ | 84.0 fF |
| $C_{GD}$ | $WC_{ov}$ | 20 fF |
| $C_{GB}$ | 被沟道屏蔽 | ≈ 0 |
| $C_{DB}$ | 一个 $\tfrac{W}{2}\times E$ 区域 | 21.2 fF（底面 21.0 + 侧壁 0.19） |
| $C_{SB}$ | 两个 $\tfrac{W}{2}\times E$ 区域 | 42.4 fF（底面 42.0 + 侧壁 0.37） |

当 $I_D = 1$ mA 时 $g_m = 5.18$ mS，因此

$$f_T = \frac{g_m}{2\pi(C_{GS} + C_{GD})} \approx 7.9\ \mathrm{GHz}.$$

**常见错误。** 把外侧两个区域的面积算作漏区（42 fF）。在折叠版图中，漏区是两个栅指共用的中间那一个区域；把这一点弄反，就完全失去了折叠的好处。

**常见错误。** 漏掉交叠电容：这时 $C_{GD} = 0$，$C_{GS} = 64$ fF，$f_T \approx 12.9$ GHz，偏高 60 % 以上。只用 $C_{GS}$ 会得到 9.8 GHz，但漏极接交流地时 $C_{GD}$ 与 $C_{GS}$ 并联。

**常见错误。** 把 $C_{DB}$ 或 $C_{SB}$ 加到 $f_T$ 的分母中。源极和漏极接交流地时，结电容中没有信号电流。

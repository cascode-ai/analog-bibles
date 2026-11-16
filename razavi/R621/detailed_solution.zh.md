# 详细步骤 - R621

**思路。** 写出一个带源极负反馈的晶体管的平方律电流，其栅源电压通过 $R_S$ 依赖于自身的漏极电流。对两侧之间可能不同的每个量（$\mu_nC_{ox}$、$W/L$、$V_{TH}$、$R_S$）求全微分；这时 $\Delta I_D$ 出现在等式两边，合并后便得到因子 $1/(1 + g_mR_S)$。

### 第 1 步 — 单侧的方程

两个栅极接同一偏置电压 $V_b$；由于 $\lambda = 0$，漏极电压无关紧要。从栅极到地应用基尔霍夫电压定律（KVL）得

$$V_b = V_{GS} + I_DR_S \quad\Longrightarrow\quad V_{GS} = V_b - I_DR_S ,$$

因此

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2 = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_b - I_DR_S - V_{TH}\right)^2 .$$

$I_D$ 出现在等式两边：电流决定 $R_S$ 上的压降，而该压降又决定 $V_{GS}$。这种**负反馈**正是源极负反馈起作用的原因。

### 第 2 步 — 失配与偏导数

定义

$$\Delta I_D = I_{D1} - I_{D2},\quad \Delta(\mu_nC_{ox}),\quad \Delta(W/L),\quad \Delta V_{TH} = V_{TH1} - V_{TH2},\quad \Delta R_S = R_{S1} - R_{S2},$$

它们都是相对于共同的标称值而言的；$V_b$ 为两侧共用，因此 $\Delta V_b = 0$。失配很小，只保留一阶项（全微分）即可。平方律的偏导数为

$$
\begin{aligned}
\frac{\partial I_D}{\partial(\mu_nC_{ox})} &= \frac12\frac{W}{L}(V_{GS} - V_{TH})^2 = \frac{I_D}{\mu_nC_{ox}},\\
\frac{\partial I_D}{\partial(W/L)} &= \frac12\mu_nC_{ox}(V_{GS} - V_{TH})^2 = \frac{I_D}{W/L},\\
\frac{\partial I_D}{\partial V_{GS}} &= \mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = g_m,\\
\frac{\partial I_D}{\partial V_{TH}} &= -\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = -g_m ,
\end{aligned}
$$

其中 $g_m$ 是晶体管本身的跨导（transconductance），而不是带源极负反馈的整级电路的跨导。

### 第 3 步 — 全微分（包括经 $R_S$ 的反馈）

$$\Delta I_D = \frac{I_D}{\mu_nC_{ox}}\Delta(\mu_nC_{ox}) + \frac{I_D}{W/L}\Delta(W/L) + g_m\,\Delta V_{GS} - g_m\,\Delta V_{TH} .$$

$V_{GS} = V_b - I_DR_S$ 不是独立变量；由 $\Delta V_b = 0$ 和乘积求导法则，

$$\Delta V_{GS} = -\Delta(I_DR_S) = -R_S\,\Delta I_D - I_D\,\Delta R_S .$$

第一项是反馈（电流增大会使 $V_{GS}$ 降低）；第二项是电阻失配引起的误差。代入得

$$\Delta I_D = I_D\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + I_D\frac{\Delta(W/L)}{W/L} - g_mR_S\,\Delta I_D - g_mI_D\,\Delta R_S - g_m\,\Delta V_{TH} .$$

### 第 4 步 — 求解 $\Delta I_D/I_D$

把含 $\Delta I_D$ 的项移到左边并提取公因子：

$$\Delta I_D\,(1 + g_mR_S) = I_D\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + I_D\frac{\Delta(W/L)}{W/L} - g_m\,\Delta V_{TH} - g_mI_D\,\Delta R_S .$$

两边除以 $I_D(1 + g_mR_S)$：

$$\frac{\Delta I_D}{I_D} = \frac{1}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{g_m}{I_D}\Delta V_{TH} - g_m\,\Delta R_S\right].$$

由平方律，

$$\frac{g_m}{I_D} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{\tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2} = \frac{2}{V_{GS} - V_{TH}} ,$$

因此

$$\boxed{\frac{\Delta I_D}{I_D} = \frac{1}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{2\,\Delta V_{TH}}{V_{GS} - V_{TH}} - g_m\,\Delta R_S\right]}$$

这正是要证明的结果。当 $R_S = 0$ 时，它退化为熟悉的无源极负反馈时的失配 $\Delta(\mu_nC_{ox})/\mu_nC_{ox} + \Delta(W/L)/(W/L) - 2\Delta V_{TH}/(V_{GS} - V_{TH})$。

### 第 5 步 — 用小信号误差模型交叉验证

把每种失配建模为作用在标称晶体管上的一个小误差源：

- 与栅极串联的 $-\Delta V_{TH}$（阈值升高相当于栅极电压降低）；
- 从漏极流向源极、与 $g_mv_{gs}$ 并联的电流 $I_D[\Delta(\mu_nC_{ox})/\mu_nC_{ox} + \Delta(W/L)/(W/L)]$；
- 与 $R_S$ 串联的 $I_D\Delta R_S$（多出的电阻流过全部偏置电流）；
- 漏极保持在固定电压（$\lambda = 0$）。

<!-- diagram: diagram-01.cir -->

电压源形式的误差看到的是带源极负反馈的等效跨导 $G_m = g_m/(1 + g_mR_S)$。电流源形式的误差也被同一因子除：它抬高源极电压，使 $v_{gs}$ 降低，从而抵消掉自身的 $g_mR_S/(1 + g_mR_S)$ 部分。求和得

$$\Delta I_D = \frac{I_D}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L}\right] - \frac{g_m}{1 + g_mR_S}\left(\Delta V_{TH} + I_D\,\Delta R_S\right),$$

与第 4 步的结果相同。

### 第 6 步 — 解释：源极负反馈何时有用？

**晶体管失配**（$\mu_nC_{ox}$、$W/L$、$V_{TH}$）被除以 $1 + g_mR_S$。要明显减小失配，需要 $g_mR_S > 1$，即 $R_S > 1/g_m$：$g_mR_S = 1$ 只能使失配减半，而 $g_mR_S = 4$ 可使其减小到五分之一。

**电阻项**为

$$\frac{g_m\,\Delta R_S}{1 + g_mR_S} = \frac{g_mR_S}{1 + g_mR_S}\cdot\frac{\Delta R_S}{R_S} \;\to\; \frac{\Delta R_S}{R_S}\quad\text{for } g_mR_S \gg 1 .$$

源极负反馈很强时，电流主要由电阻决定，$I_D \approx (V_b - V_{GS})/R_S$，因此电流的匹配趋近于电阻的匹配。只有当电阻的匹配优于晶体管时，源极负反馈才值得采用。

**数值示例。** 取 $V_{GS} - V_{TH} = 0.2$ V，$\Delta V_{TH} = 2$ mV，$\Delta R_S/R_S = 0.1\%$。

- 无源极负反馈时：$2\Delta V_{TH}/(V_{GS} - V_{TH}) = 2(2\ \mathrm{mV})/(0.2\ \mathrm{V}) = 2\%$。
- $g_mR_S = 4$ 时：晶体管部分变为 $2\%/5 = 0.4\%$，电阻部分为 $(4/5)(0.1\%) = 0.08\%$，最坏情况下合计约 0.5 %。

**代价。** 利用 $g_m = 2I_D/(V_{GS} - V_{TH})$，电阻上的压降为 $I_DR_S = (g_mR_S)(V_{GS} - V_{TH})/2$；在上例中，要占用 $4\times0.2/2 = 0.4$ V 的电压余度。

### 结果

对 $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_b - I_DR_S - V_{TH})^2$ 求全微分，反馈项 $-g_mR_S\Delta I_D$ 移到等式左边后产生因子 $1 + g_mR_S$，而 $-g_mI_D\Delta R_S$ 项反映电阻失配。利用 $g_m/I_D = 2/(V_{GS} - V_{TH})$：

$$\frac{\Delta I_D}{I_D} = \frac{1}{1 + g_mR_S}\left[\frac{\Delta(\mu_nC_{ox})}{\mu_nC_{ox}} + \frac{\Delta(W/L)}{W/L} - \frac{2\,\Delta V_{TH}}{V_{GS} - V_{TH}} - g_m\,\Delta R_S\right].$$

晶体管失配被 $1 + g_mR_S$ 抑制，只有当 $R_S > 1/g_m$ 时这一作用才显著。当 $g_mR_S$ 很大时，电阻项趋于 $\Delta R_S/R_S$，因此只有当电阻的匹配优于晶体管时，源极负反馈才有帮助，其代价是 $I_DR_S$ 的电压余度。

**常见错误。** 求微分时把 $V_{GS}$ 当作固定值，即漏掉 $-R_S\Delta I_D$。没有这一反馈项，因子 $1/(1 + g_mR_S)$ 就不可能出现。

**常见错误。** 忘记电阻失配本身的贡献 $-g_mI_D\Delta R_S$，或除以 $(1 + g_mR_S)^2$。失配通过 $\Delta(I_DR_S) = R_S\Delta I_D + I_D\Delta R_S$ 线性地进入 $V_{GS}$，而反馈对每个误差项只除一次。

**常见错误。** 认为任意程度的源极负反馈都能大大改善匹配。当 $g_mR_S \ll 1$ 时改善可以忽略；当 $g_mR_S \gg 1$ 时，电流失配受限于 $\Delta R_S/R_S$。

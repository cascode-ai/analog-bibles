# 详细步骤 - R141

**思路。** 把输入回路关系 $V_{GS} = V_{in} - I_DR_S$ 与增量关系 $\Delta I_D = g_m\Delta V_{GS}$ 结合起来，把 $\Delta V_{GS}$ 表示为 $\Delta V_{in}$ 的一部分。然后加以解释：非线性器件上的摆幅变小了，而输入到电流的关系变为由线性电阻 $R_S$ 主导。最后用一个数值例子定量说明这种改善。

### 第 1 步 — 求解 $\Delta V_{GS}$

对给定关系取增量（$R_S$ 为常数），并利用 $\Delta I_D = g_m\Delta V_{GS}$，其中 $g_m = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$（$\lambda = \gamma = 0$）：

$$\Delta V_{GS} = \Delta V_{in} - R_S\,\Delta I_D = \Delta V_{in} - g_mR_S\,\Delta V_{GS},$$

$$\Delta V_{GS}\,(1 + g_mR_S) = \Delta V_{in},$$

$$\boxed{\ \Delta V_{GS} = \frac{\Delta V_{in}}{1 + g_mR_S}\ }$$

它随 $g_mR_S$ 增大而**减小**：$g_mR_S = 0$ 时，晶体管承受全部输入变化；$g_mR_S = 1$ 时，承受一半；$g_mR_S = 9$ 时，只承受十分之一。其余部分落在电阻上：

$$\Delta V_{R_S} = R_S\Delta I_D = \Delta V_{in} - \Delta V_{GS} = \frac{g_mR_S}{1 + g_mR_S}\,\Delta V_{in}.$$

### 第 2 步 — 由此得到的电流与增益

$$\Delta I_D = g_m\Delta V_{GS} = \frac{g_m}{1 + g_mR_S}\,\Delta V_{in} \equiv G_m\Delta V_{in},$$

$$\Delta V_{out} = -R_D\,\Delta I_D\quad\Longrightarrow\quad A_v = -\frac{g_mR_D}{1 + g_mR_S}.$$

当 $g_mR_S \gg 1$ 时：$G_m \to 1/R_S$，$A_v \to -R_D/R_S$，即**两个电阻之比**，与晶体管无关。

### 第 3 步 — 为什么这意味着线性度更好

唯一的非线性元件是晶体管，其 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ 随信号而变化。源极负反馈（source degeneration）从三个等价的方面改善线性度。

1. **非线性器件上的摆幅更小。** 只有 $\Delta V_{in}/(1 + g_mR_S)$ 落在栅源之间。平方律的失真项按 $\Delta V_{GS}^2$ 增长，因此把 $\Delta V_{GS}$ 缩小 $1 + g_mR_S$ 倍，失真会缩小得更多。

2. **电流由电阻决定。** 在大信号（large-signal）下，输入回路满足
$$V_{in} - V_{TH} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} + I_DR_S ,$$
即一个平方根项加一个线性项。$R_S$ 越大，$I_DR_S$ 越占主导，$I_D \approx (V_{in} - V_{TH})/R_S$ 就成为 $V_{in}$ 的线性函数。

3. **等效跨导（transconductance）几乎不变。** 对 $G_m = g_m/(1 + g_mR_S)$ 求微分，
$$\frac{dG_m}{G_m} = \frac{1}{1 + g_mR_S}\cdot\frac{dg_m}{g_m},$$
因此 $g_m$ 的相对变化只会使 $G_m$ 以及增益 $A_v = -G_mR_D$ 产生小 $(1 + g_mR_S)$ 倍的相对变化。

这是一种局部负反馈：$R_S$ 检测电流，并从驱动电压中减去 $I_DR_S$，用增益换取线性度，增益按环路增益（loop gain）$1 + g_mR_S$ 降低。

### 第 4 步 — 数值示例

取 $\mu_nC_{ox}(W/L) = 13.4\ \mathrm{mA/V^2}$（例如 $W/L = 50/0.5$），电流在 0.25–1 mA 之间变化（4:1），$R_S = 1$ kΩ：

| $I_D$ | $g_m$ | $g_mR_S$ | $G_m$ |
|---|---|---|---|
| 0.25 mA | 2.59 mS | 2.59 | 0.721 mS |
| 0.50 mA | 3.66 mS | 3.66 | 0.785 mS |
| 1.00 mA | 5.18 mS | 5.18 | 0.838 mS |

若没有源极负反馈，增量增益在此范围内将变化 **100 %**（2.59 → 5.18 mS）；取 $R_S = 1$ kΩ 时，它只变化 **16 %**（0.721 → 0.838 mS），已接近 $1/R_S = 1$ mS。更大的 $R_S$ 会使其更加平坦，但代价是增益更低。

### 结果

$$\Delta V_{GS} = \frac{\Delta V_{in}}{1 + g_mR_S},$$

它随 $g_mR_S$ 增大而减小：源极负反馈越强，输入中落在非线性晶体管栅源之间的比例就越小。$\Delta V_{in}$ 的大部分落在线性电阻上，因此 $\Delta I_D = g_m\Delta V_{in}/(1 + g_mR_S) \to \Delta V_{in}/R_S$，$A_v \to -R_D/R_S$。电流以及由此得到的 $V_{out} = V_{DD} - I_DR_D$ 由电阻而不是由平方律决定，因此该级变得更加线性。（计入体效应时，$\Delta V_{GS} = \Delta V_{in}(1 + g_{mb}R_S)/[1 + (g_m + g_{mb})R_S]$，趋势相同。）

**常见错误。** 写成 $\Delta V_{GS} = \Delta V_{in}(1 + g_mR_S)$，即弄错了反馈的符号。$V_{in}$ 升高会使 $I_D$ 和源极电压升高，这会**阻碍** $V_{GS}$ 的增大。

**常见错误。** 因为源极负反馈降低了增益，就断定它使线性度变差。余下的特性由线性的 $R_S$ 和 $R_D$ 决定；晶体管只承担信号的 $1/(1 + g_mR_S)$。

**常见错误。** 混淆 $g_m$ 与 $G_m$。器件的 $g_m$ 仍随电流变化；变得几乎恒定的是决定增益的 $G_m = g_m/(1 + g_mR_S)$。

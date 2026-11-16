# 详细步骤 - R331

**思路。** 栅极、漏极和衬底都接交流地，唯一未知的节点电压是源极电压 $V_S$。在源极列一个基尔霍夫电流定律（KCL）方程即可求出 $V_S$，而输出电流等于流过 $Z_S$ 的电流。

### 第 1 步 — 端电压与小信号模型（small-signal model）

以下各量均为小信号值。$V_G = V_D = 0$，NMOS 的衬底接地（$V_B = 0$），源极电压为 $V_S$，因此

$$V_{GS} = V_{BS} = V_{DS} = -V_S .$$

以漏极流向源极为正方向，$M_1$ 在漏极与源极之间有四条并联支路：$g_mV_{GS}$、$g_{mb}V_{BS}$、流过电流 $V_{DS}/r_O$ 的 $r_O$，以及噪声电流 $I_n$。$Z_S$ 接在源极与地之间，漏极短路线把 $I_{n,out1}$ 从交流地送入漏极。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 流过器件的电流

把四条支路的电流相加，并代入端电压：

$$
\begin{aligned}
I_{DS} &= g_mV_{GS} + g_{mb}V_{BS} + \frac{V_{DS}}{r_O} + I_n\\
&= g_m(-V_S) + g_{mb}(-V_S) + \frac{-V_S}{r_O} + I_n\\
&= I_n - V_S\left(g_m + g_{mb} + \frac{1}{r_O}\right).
\end{aligned}
$$

### 第 3 步 — KCL 方程及其求解

栅极没有电流，因此器件电流只能经 $Z_S$ 离开源极，也只能经短路线流入漏极：

$$I_{DS} = \frac{V_S}{Z_S}, \qquad I_{n,out1} = I_{DS}.$$

令 $I_{DS}$ 的两个表达式相等，并合并含 $V_S$ 的项：

$$
\begin{aligned}
\frac{V_S}{Z_S} &= I_n - V_S\left(g_m + g_{mb} + \frac{1}{r_O}\right)\\
V_S\left(\frac{1}{Z_S} + g_m + g_{mb} + \frac{1}{r_O}\right) &= I_n\\
V_S &= \frac{I_nZ_S}{1 + Z_S\left(g_m + g_{mb} + 1/r_O\right)} .
\end{aligned}
$$

因此

$$I_{n,out1} = \frac{V_S}{Z_S} = \frac{I_n}{Z_S\left(g_m + g_{mb} + 1/r_O\right) + 1}. \qquad\blacksquare$$

### 第 4 步 — 分流观点与极限情况

从源极看进去，栅极、漏极和衬底都接地的晶体管相当于一个对地电导 $g_m + g_{mb} + 1/r_O$。注入源极节点的 $I_n$ 在该电导与 $Z_S$ 之间分流，只有流过 $Z_S$ 的那部分也会流过漏极短路线：

$$I_{n,out1} = I_n\,\frac{1/Z_S}{1/Z_S + g_m + g_{mb} + 1/r_O} = \frac{I_n}{1 + Z_S(g_m + g_{mb} + 1/r_O)},$$

结果相同。从物理上看，噪声电流使 $V_S$ 升高，从而使 $V_{GS}$、$V_{BS}$ 和 $V_{DS}$ 降低，于是器件自身的电流与噪声相抵，使 $I_n$ 的大部分经晶体管自身返回。

- $Z_S = 0$：$I_{n,out1} = I_n$，即熟悉的共源级（common-source stage）结果。
- $g_{mb} = 0$，$r_O \to \infty$：$I_{n,out1} = I_n/(1 + g_mZ_S)$，即标准的源极负反馈因子。
- $Z_S \to \infty$：$I_{n,out1} \to 0$；噪声电流只能在器件内部自行环流。

### 结果

由 $V_{GS} = V_{BS} = V_{DS} = -V_S$，源极的 KCL 给出

$$I_n - V_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) = \frac{V_S}{Z_S}\quad\Longrightarrow\quad V_S = \frac{I_nZ_S}{1 + Z_S(g_m + g_{mb} + 1/r_O)},$$

又因为漏极短路电流等于流过 $Z_S$ 的电流，

$$I_{n,out1} = \frac{V_S}{Z_S} = \frac{I_n}{Z_S\left(g_m + g_{mb} + 1/r_O\right) + 1}.$$

**常见错误。** 写成 $V_{DS} = +V_S$ 或 $V_{GS} = +V_S$。漏极和栅极都接交流地，所以它们都等于 $0 - V_S = -V_S$；三项中哪怕只错一项，分母也会改变（例如变成 $1 + Z_S(g_m + g_{mb} - 1/r_O)$）。

**常见错误。** 只证明了 $g_{mb} = 0$、$r_O = \infty$ 的情形，即 $I_n/(1 + g_mZ_S)$，就断言一般情形也成立。体效应和 $r_O$ 各自增加了一条依赖于 $V_S$ 的支路，必须出现在 KCL 方程中。

**常见错误。** 因为噪声源接在漏极上，就认为输出电流就是 $I_n$。这只在 $Z_S = 0$ 时成立；有源极负反馈时，只有比例为 $1/[1 + Z_S(g_m + g_{mb} + 1/r_O)]$ 的部分到达漏极短路线。

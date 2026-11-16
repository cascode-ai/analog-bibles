# 详细步骤 - R378

**思路。** 对每种表示方法，在含 $C_{GS}$、$g_{mb}$、$r_O$ 和 $Z_1$ 的小信号模型（small-signal model）中，对栅极和源极节点列 KCL，解出源极电压，并求出沟道电流，即流过漏极短路线的电流。使两个结果一致所需的 $V_n$ 表明引理是否仍然成立：若它依赖于 $Z_1$、$Z_S$ 或频率，引理就不成立。

### 第 1 步 — 小信号模型与符号

漏极接交流地，衬底接地，因此从 D 流向 S 的沟道电流（即漏极短路线中的电流）为

$$I_{ch} = g_mv_{gs} - g_{mb}V_S - \frac{V_S}{r_O}\ (+\,I_n \text{ in [Fig. 1] only}), \qquad v_{gs} = V_G - V_S .$$

为简化代数运算，定义

$$a \equiv g_{mb} + \frac{1}{r_O}, \qquad C \equiv C_{GS}, \qquad s = j\omega,$$

于是 $I_{ch} = g_mv_{gs} - aV_S\ (+\,I_n)$。在 [图 1] 中，$Z_1$ 接在 G 与交流地之间；在 [图 2] 中，$V_n$ 和 $Z_1$ 串联在地与 G 之间。

**源极节点的 KCL 方程（两图通用）。** 沟道电流和 $C_{GS}$ 电流都流入 S，并经 $Z_S$ 流出：

$$I_{ch} + sC\,v_{gs} = \frac{V_S}{Z_S}. \tag{1}$$

<!-- diagram: diagram-01.cir -->

### 第 2 步 — [图 1]：栅极电压

对 G 列 KCL（与它相连的只有 $Z_1$ 和 $C_{GS}$）：

$$
\begin{aligned}
\frac{V_G}{Z_1} + sC\,(V_G - V_S) &= 0\\
V_G\,(1 + sCZ_1) &= sCZ_1V_S\\
V_G &= \frac{sCZ_1}{1 + sCZ_1}\,V_S ,
\end{aligned}
$$

$$v_{gs} = V_G - V_S = V_S\,\frac{sCZ_1 - (1 + sCZ_1)}{1 + sCZ_1} = -\frac{V_S}{1 + sCZ_1}.$$

栅极通过 $C_{GS}$ 部分地跟随源极，因此 $|v_{gs}| < |V_S|$。

### 第 3 步 — [图 1]：源极电压与输出电流

把 $I_{ch} = g_mv_{gs} - aV_S + I_n$ 和 $v_{gs}$ 代入式 (1)：

$$
\begin{aligned}
(g_m + sC)\,v_{gs} - aV_S + I_n &= \frac{V_S}{Z_S}\\
-\frac{(g_m + sC)V_S}{1 + sCZ_1} - aV_S + I_n &= \frac{V_S}{Z_S}\\
I_n &= V_S\left[\frac{1}{Z_S} + a + \frac{g_m + sC}{1 + sCZ_1}\right].
\end{aligned}
$$

乘以 $Z_S(1 + sCZ_1)$：

$$I_nZ_S(1 + sCZ_1) = V_S\left[(1 + sCZ_1)(1 + aZ_S) + (g_m + sC)Z_S\right] \equiv V_S\,D,$$

$$
\begin{aligned}
D &= 1 + aZ_S + sCZ_1 + sCaZ_1Z_S + g_mZ_S + sCZ_S\\
&= 1 + Z_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) + sC_{GS}\left[Z_1 + Z_S + Z_1Z_S\left(g_{mb} + \frac{1}{r_O}\right)\right],
\end{aligned}
$$

因此 $V_S = I_nZ_S(1 + sCZ_1)/D$。由式 (1)，$I_{ch} = V_S/Z_S - sC\,v_{gs}$：

$$
\begin{aligned}
I_{n,out1} = I_{ch} &= \frac{V_S}{Z_S} + \frac{sC\,V_S}{1 + sCZ_1} = V_S\,\frac{1 + sCZ_1 + sCZ_S}{Z_S(1 + sCZ_1)}\\
&= \frac{I_nZ_S(1 + sCZ_1)}{D}\cdot\frac{1 + sC(Z_1 + Z_S)}{Z_S(1 + sCZ_1)}\\
&= \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{D}.
\end{aligned}
$$

### 第 4 步 — [图 2]：栅极、源极与输出

<!-- diagram: diagram-02.cir -->

**栅极。** 经 $Z_1$ 流入 G 的电流等于经 $C_{GS}$ 流向 S 的电流：

$$\frac{V_n - V_G}{Z_1} = sC\,(V_G - V_S) \quad\Longrightarrow\quad V_n - V_G = sCZ_1\,v_{gs}.$$

利用 $V_G = v_{gs} + V_S$：

$$
\begin{aligned}
V_n - V_S - v_{gs} &= sCZ_1\,v_{gs}\\
v_{gs} &= \frac{V_n - V_S}{1 + sCZ_1}.
\end{aligned}
$$

**源极。** 此时 $I_{ch} = g_mv_{gs} - aV_S$，式 (1) 变为

$$
\begin{aligned}
(g_m + sC)\,v_{gs} &= V_S\left(a + \frac{1}{Z_S}\right)\\
\frac{(g_m + sC)(V_n - V_S)}{1 + sCZ_1} &= \frac{V_S(1 + aZ_S)}{Z_S}.
\end{aligned}
$$

乘以 $Z_S(1 + sCZ_1)$ 并合并 $V_S$ 项：

$$
\begin{aligned}
(g_m + sC)Z_S\,(V_n - V_S) &= V_S\,(1 + aZ_S)(1 + sCZ_1)\\
(g_m + sC)Z_S\,V_n &= V_S\left[(1 + aZ_S)(1 + sCZ_1) + (g_m + sC)Z_S\right] = V_S\,D,
\end{aligned}
$$

其中的 $D$ 与第 3 步**相同**，因此 $V_S = (g_m + sC)Z_SV_n/D$。利用 $D - (g_m + sC)Z_S = (1 + aZ_S)(1 + sCZ_1)$：

$$V_n - V_S = V_n\,\frac{D - (g_m + sC)Z_S}{D} = V_n\,\frac{(1 + aZ_S)(1 + sCZ_1)}{D}, \qquad v_{gs} = \frac{V_n(1 + aZ_S)}{D}.$$

**输出电流：**

$$
\begin{aligned}
I_{n,out2} = g_mv_{gs} - aV_S &= \frac{V_n}{D}\left[g_m(1 + aZ_S) - a(g_m + sC)Z_S\right]\\
&= \frac{V_n}{D}\left[g_m + g_maZ_S - ag_mZ_S - asCZ_S\right]\\
&= \frac{V_n\left[g_m - sC_{GS}Z_S\left(g_{mb} + \dfrac{1}{r_O}\right)\right]}{D}.
\end{aligned}
$$

### 第 5 步 — 低频检验

当 $s \to 0$ 时，$D \to 1 + Z_S(g_m + g_{mb} + 1/r_O)$，且

$$I_{n,out1} \to \frac{I_n}{1 + Z_S(g_m + g_{mb} + 1/r_O)}, \qquad I_{n,out2} \to \frac{g_mV_n}{1 + Z_S(g_m + g_{mb} + 1/r_O)},$$

这正是题中给出的表达式；当 $V_n = I_n/g_m$ 时，两者对任意 $Z_S$（以及任意 $Z_1$，此时其中没有电流）都一致：这就是引理。

### 第 6 步 — 计入 $C_{GS}$ 和 $Z_1$ 后引理是否成立？

两者的分母相同，因此 $I_{n,out1} = I_{n,out2}$ 要求

$$V_n = I_n\,\frac{1 + sC_{GS}(Z_1 + Z_S)}{g_m - sC_{GS}Z_S\left(g_{mb} + 1/r_O\right)}.$$

它取决于 $Z_1$、$Z_S$ 和频率，因此**对于任意的 $Z_1$ 和 $Z_S$，不存在一个固定的栅极等效电压（无论是 $I_n/g_m$ 还是其他值）能与沟道噪声电流等效。引理一般不成立。** 引理只在以下情况下重新成立：

- 当 $Z_1 = Z_S = 0$ 时严格成立：此时 $I_{n,out1} = I_n$，$I_{n,out2} = g_mV_n$；
- 当 $|sC_{GS}(Z_1 + Z_S)| \ll 1$ 且 $|sC_{GS}Z_S(g_{mb} + 1/r_O)| \ll g_m$，即在低频下或栅极、源极阻抗较小时近似成立。

**物理原因。** 在 [图 2] 中，$V_n$ 驱动电流经 $Z_1$ 和 $C_{GS}$ 流入源极节点；而在 [图 1] 中，栅极网络只通过 $V_S$ 被间接激励。一旦 $C_{GS}$ 中有电流，单个栅极电压源就无法同时再现沟道电流和栅极电流。

**补充：修正这种表示方法。** 严格的栅极等效模型需要第二个完全相关的噪声源：一个从源极注入 $Z_1$ 外端（节点 G′，位于 $Z_1$ 与 $V_n$ 之间）的电流 $I_g = sC_{GS}I_n/g_m$。在 $g_{mb} = 0$、$r_O \to \infty$ 的条件下，对 G′ 列 KCL（$V_{G'}/Z_1 = I_g - sCv_{gs}$），对 S 列 KCL（$V_S = Z_S[(g_m + sC)v_{gs} - I_g]$），并利用 $v_{gs} = V_{G'} + V_n - V_S$，得到

$$v_{gs}\left[1 + g_mZ_S + sC(Z_1 + Z_S)\right] = V_n + (Z_1 + Z_S)I_g,$$

因此取 $V_n = I_n/g_m$ 时 $g_mv_{gs} = I_n[1 + sC(Z_1 + Z_S)]/D$：对任意 $Z_1$、$Z_S$ 都恰好等于 $I_{n,out1}$。

### 结果

令

$$D = 1 + Z_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) + sC_{GS}\left[Z_1 + Z_S + Z_1Z_S\left(g_{mb} + \frac{1}{r_O}\right)\right],$$

$$I_{n,out1} = \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{D}, \qquad I_{n,out2} = \frac{V_n\left[g_m - sC_{GS}Z_S\left(g_{mb} + \dfrac{1}{r_O}\right)\right]}{D}.$$

等效要求 $V_n = I_n[1 + sC_{GS}(Z_1 + Z_S)]/[g_m - sC_{GS}Z_S(g_{mb} + 1/r_O)]$，它取决于 $Z_1$、$Z_S$ 和频率。**引理一般不成立**；它在 $Z_1 = Z_S = 0$ 时严格成立，在 $|sC_{GS}(Z_1 + Z_S)| \ll 1$ 时近似成立。严格的栅极等效模型需要增加一个相关的栅极噪声电流。

（当 $g_{mb} = 0$、$r_O \to \infty$ 时：$I_{n,out1} = I_n[1 + sC_{GS}(Z_1 + Z_S)]/[1 + g_mZ_S + sC_{GS}(Z_1 + Z_S)]$，$I_{n,out2} = g_mV_n/[1 + g_mZ_S + sC_{GS}(Z_1 + Z_S)]$。）

**常见错误。** 以“噪声总可以通过除以 $g_m$ 折算到栅极”为由，声称引理仍然成立。这只在没有电流流入栅极时才成立；有了 $C_{GS}$ 以及有限的 $Z_1$ 或 $Z_S$，所需的 $V_n$ 就会依赖于阻抗和频率。

**常见错误。** 在源极节点的 KCL 方程中漏掉 $C_{GS}$ 的电流。略去 $sC_{GS}v_{gs}$ 会得到错误的 $D$，并掩盖两个分子之间的差别。

**常见错误。** 因为分母相同就断定 $C_{GS}$ 没有影响。两个分子并不相同：$I_n$ 乘以 $1 + sC_{GS}(Z_1 + Z_S)$，而 $V_n$ 乘以 $g_m - sC_{GS}Z_S(g_{mb} + 1/r_O)$。

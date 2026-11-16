# 详细步骤 - R379

**思路。** 去掉 $Z_L$，把从漏极看进去的其余电路用其戴维南等效电路代替；如果两种表示方法给出相同的戴维南电压和阻抗，那么对**任意** $Z_L$ 它们给出的输出噪声都相同。关闭噪声源后两个电路完全相同，因此阻抗自然相等，问题归结为比较两者的漏极开路电压。

### 第 1 步 — 小信号模型（small-signal model）

节点：栅极 G、源极 S、漏极 D（在 [图 2] 中还有 $V_n$ 与 $Z_1$ 之间的节点）。记 $C = C_{GS}$，$s = j\omega$。

- $Z_1$ 接在 G 与交流地之间（[图 1]），或者 $V_n$ 与 $Z_1$ 串联在交流地与 G 之间（[图 2]）；
- $C_{GS}$ 接在 G 与 S 之间；$Z_S$ 接在 S 与地之间；
- 沟道从 D 到 S，流过的电流为 $g_mv_{gs} + g_{mb}v_{bs} + v_{ds}/r_O$（在 [图 1] 中还要加上 $I_n$），其中 $v_{gs} = V_G - V_S$，$v_{bs} = -V_S$（衬底接地），$v_{ds} = V_D - V_S$。

<!-- diagram: diagram-01.cir -->

用 $V_{Thev}$ 和 $Z_{Thev}$ 表示从 $Z_L$ 看进去的网络，则输出为 $V_{n,out} = V_{Thev}\,Z_L/(Z_L + Z_{Thev})$。

### 第 2 步 — 戴维南阻抗（两者相同）

令 $I_n = 0$、$V_n = 0$，两个电路都化为同一个无源网络（栅极经 $Z_1$ 接地），因此 $Z_{Thev1} = Z_{Thev2}$。为求该阻抗，向漏极注入测试电流 $I_x$，它经沟道流到 S。对 G 列基尔霍夫电流定律（KCL）方程：

$$\frac{V_G}{Z_1} + sC\,(V_G - V_S) = 0 \;\Rightarrow\; V_G = \frac{sCZ_1}{1 + sCZ_1}V_S, \qquad v_{gs} = -\frac{V_S}{1 + sCZ_1}.$$

对 S 列 KCL（沟道电流和电容电流流入，$Z_S$ 电流流出）：

$$
\begin{aligned}
I_x + sC\,v_{gs} &= \frac{V_S}{Z_S}\\
I_x &= V_S\left[\frac{1}{Z_S} + \frac{sC}{1 + sCZ_1}\right] = V_S\,\frac{1 + sC(Z_1 + Z_S)}{Z_S(1 + sCZ_1)}.
\end{aligned}
$$

由沟道方程 $I_x = g_mv_{gs} - g_{mb}V_S + (V_D - V_S)/r_O$ 得：

$$V_D = V_S + r_O\left(I_x - g_mv_{gs} + g_{mb}V_S\right) = r_OI_x + V_S\left[(1 + g_{mb}r_O) + \frac{g_mr_O}{1 + sCZ_1}\right].$$

代入 $V_S$ 并除以 $I_x$：

$$Z_{Thev} = r_O + Z_S\,\frac{(1 + g_{mb}r_O)(1 + sCZ_1) + g_mr_O}{1 + sC(Z_1 + Z_S)} = \frac{r_O\,D}{1 + sC(Z_1 + Z_S)},$$

$$D = 1 + Z_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) + sC\left[Z_1 + Z_S + Z_1Z_S\left(g_{mb} + \frac{1}{r_O}\right)\right].$$

在 $s = 0$ 时，它就是熟悉的 $r_O + (g_m + g_{mb})r_OZ_S + Z_S$。

### 第 3 步 — [图 1] 的戴维南电压

漏极开路时，沟道**总**电流（包括 $I_n$）为零，因此回路 $Z_1$ – $C_{GS}$ – $Z_S$ 既没有电流注入，也不含源。设 $i$ 为回路电流（G → S，流经 $C_{GS}$），则 $V_G = -Z_1i$，$V_S = Z_Si$，$v_{gs} = i/(sC)$，由基尔霍夫电压定律（KVL）得

$$\frac{i}{sC} = V_G - V_S = -(Z_1 + Z_S)\,i \;\Rightarrow\; i\left[1 + sC(Z_1 + Z_S)\right] = 0 \;\Rightarrow\; i = 0 .$$

因此 $V_G = V_S = 0$，$v_{gs} = 0$，再由沟道电流为零得

$$
\begin{aligned}
g_m\cdot0 - g_{mb}\cdot0 + \frac{V_D - 0}{r_O} + I_n &= 0\\
V_{Thev1} = V_D &= -I_nr_O .
\end{aligned}
$$

噪声电流只是在 $r_O$ 中循环；$C_{GS}$ 不起作用。

### 第 4 步 — [图 2] 的戴维南电压

沟道电流同样为零，但此时栅极回路中含有 $V_n$。从地出发，经 $V_n$、$Z_1$、$C_{GS}$ 和 $Z_S$ 列 KVL：

$$
\begin{aligned}
V_n &= i\,Z_1 + \frac{i}{sC} + i\,Z_S\\
i &= \frac{sC\,V_n}{1 + sC(Z_1 + Z_S)},
\end{aligned}
$$

$$v_{gs} = \frac{i}{sC} = \frac{V_n}{1 + sC(Z_1 + Z_S)}, \qquad V_S = Z_Si = \frac{sCZ_S\,V_n}{1 + sC(Z_1 + Z_S)}.$$

沟道电流为零：

$$
\begin{aligned}
g_mv_{gs} - g_{mb}V_S + \frac{V_D - V_S}{r_O} &= 0\\
V_D &= V_S + r_O\left(g_{mb}V_S - g_mv_{gs}\right) = V_S\,(1 + g_{mb}r_O) - g_mr_O\,v_{gs},
\end{aligned}
$$

$$V_{Thev2} = V_n\,\frac{-g_mr_O + sCZ_S\,(1 + g_{mb}r_O)}{1 + sC(Z_1 + Z_S)}.$$

### 第 5 步 — 比较：引理是否成立？

由于阻抗相等，两个电路对任意 $Z_L$ 等效的充要条件是 $V_{Thev1} = V_{Thev2}$：

$$-I_nr_O = V_n\,\frac{-g_mr_O + sCZ_S(1 + g_{mb}r_O)}{1 + sC(Z_1 + Z_S)} ,$$

$$V_n = \frac{I_nr_O\left[1 + sC(Z_1 + Z_S)\right]}{g_mr_O - sCZ_S(1 + g_{mb}r_O)} = \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{g_m - sC_{GS}Z_S\left(g_{mb} + 1/r_O\right)} .$$

在 $s = 0$ 时，$V_{Thev2} = -g_mr_OV_n$，条件变为 $V_n = I_n/g_m$，即原来的引理。

**计入 $C_{GS}$ 和 $Z_1$ 后**，所需的 $V_n$ 取决于 $Z_1$、$Z_S$ 和频率，因此**引理一般不成立**。只有当 $|sC_{GS}(Z_1 + Z_S)| \ll 1$ 且 $|sC_{GS}Z_S(g_{mb} + 1/r_O)| \ll g_m$，即在低频下或栅极、源极阻抗较小时，引理才重新成立（$Z_1 = Z_S = 0$ 时严格成立）。

**物理原因。** 漏极开路时，$I_n$ 无法驱动栅极回路；但与栅极串联的电压会推动电流流过 $Z_1$、$C_{GS}$ 和 $Z_S$，这既会减小 $v_{gs}$（乘以因子 $1/[1 + sC(Z_1 + Z_S)]$），又会抬高 $V_S$（通过 $g_{mb}$ 和 $r_O$ 起作用）。严格的栅极等效模型还需要在栅极处增加第二个相关的噪声电流。

### 结果

戴维南阻抗：相等，$Z_{Thev} = r_OD/[1 + sC_{GS}(Z_1 + Z_S)]$（关闭噪声源后两个电路完全相同）。戴维南电压：

$$V_{Thev1} = -I_nr_O, \qquad V_{Thev2} = V_n\,\frac{-g_mr_O + sC_{GS}Z_S(1 + g_{mb}r_O)}{1 + sC_{GS}(Z_1 + Z_S)}.$$

等效要求

$$V_n = \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{g_m - sC_{GS}Z_S\left(g_{mb} + 1/r_O\right)},$$

它取决于 $Z_1$、$Z_S$ 和频率。**引理一般不成立**；只有当 $|sC_{GS}(Z_1 + Z_S)| \ll 1$（低频或源阻抗较小）时，它才简化为 $V_n = I_n/g_m$。

**常见错误。** 断言 $C_{GS}$ 因为同时出现在两个电路中而相互抵消。这正是戴维南**阻抗**相等的原因，但只有电压源表示法会驱动电流流过该电容，因此戴维南**电压**不同。

**常见错误。** 断定两个戴维南阻抗不同。把 $I_n$ 开路或把 $V_n$ 短路后，两图剩下的是完全相同的无源网络。

**常见错误。** 体效应（body effect）处理不当：$g_{mb}v_{bs}$ 与 $g_mv_{gs}$ 一样从漏极流向源极，其中 $v_{bs} = -V_S$。方向或符号弄错会改变 $V_{Thev2}$ 中的 $(1 + g_{mb}r_O)$ 因子。

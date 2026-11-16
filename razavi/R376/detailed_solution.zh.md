# 详细步骤 - R376

**思路。** 在两种极端情况下，使含噪声电路与“无噪声电路加 $V_{n,in}$ 和 $I_{n,in}$”等效：输入端短路（只有 $V_{n,in}$ 起作用）和输入端开路（只有 $I_{n,in}$ 起作用）。在每种情况下令两者的输出相等，并把噪声电压当作带符号的量处理。两个结果包含相同的物理噪声源，因此是相关的；再计算它们的功率谱密度和互谱。

### 第 1 步 — 无噪声放大器

把 $V_{n,in}$ 靠 $R_S$ 一侧的节点记为 A，则 $V_G = V_A + V_{n,in}$。$I_1$ 是理想的且 $\lambda = 0$，因此在输出节点只有 $M_1$ 和 $R_F$ 中有小信号电流。

<!-- diagram: diagram-01.cir -->

无噪声时，流过 $M_1$ 的电流必须全部经 $R_F$ 提供：

$$g_mV_G + \frac{V_{out} - V_G}{R_F} = 0 \quad\Longrightarrow\quad V_{out} = (1 - g_mR_F)\,V_G .$$

因此从 G 流入 $R_F$ 的电流为 $g_mV_G$：G 点的输入阻抗为 $1/g_m$。

输入端短路时，G 点电压被钳定为 $V_{n,in}$，$I_{n,in}$ 流入短路线；输入端开路时，$V_{n,in}$ 中没有电流。因此每种测试只保留一个噪声源。

### 第 2 步 — 由输入端短路测试求 $V_{n,in}$

**含噪声电路**（$V_G = 0$）。对输出节点应用基尔霍夫电流定律（KCL）：

$$
\begin{aligned}
g_m(0 + V_{n,M1}) + \frac{V_{out} - 0 - V_{n,RF}}{R_F} &= 0\\
V_{out} - V_{n,RF} &= -g_mR_FV_{n,M1}\\
V_{out} &= V_{n,RF} - g_mR_FV_{n,M1}.
\end{aligned}
$$

**含 $V_{n,in}$ 的无噪声电路。** $V_A = 0$，因此 $V_G = V_{n,in}$，$V_{out} = (1 - g_mR_F)\,V_{n,in}$。令两者相等：

$$
\begin{aligned}
(1 - g_mR_F)\,V_{n,in} &= V_{n,RF} - g_mR_FV_{n,M1}\\
V_{n,in} &= \frac{V_{n,RF} - g_mR_FV_{n,M1}}{1 - g_mR_F} = \frac{g_mR_FV_{n,M1} - V_{n,RF}}{g_mR_F - 1}.
\end{aligned}
$$

### 第 3 步 — 由输入端开路测试求 $I_{n,in}$

**含噪声电路。** 与 G 相连的只有 $R_F$，而栅极不吸取电流，因此 **$R_F$ 中没有电流**：

$$V_{out} - V_G - V_{n,RF} = 0 \quad\Longrightarrow\quad V_{out} = V_G + V_{n,RF}.$$

于是输出节点的 KCL 迫使 $M_1$ 的电流为零：

$$g_m(V_G + V_{n,M1}) = 0 \quad\Longrightarrow\quad V_G = -V_{n,M1}, \qquad V_{out} = V_{n,RF} - V_{n,M1}.$$

**含 $I_{n,in}$ 的无噪声电路。** 注入的电流经 $R_F$ 流向输出端，因此

$$\frac{V_{out} - V_G}{R_F} = -I_{n,in} \quad\Longrightarrow\quad V_G = V_{out} + R_FI_{n,in},$$

并经 $M_1$ 流出：

$$
\begin{aligned}
g_mV_G &= I_{n,in}\\
g_m(V_{out} + R_FI_{n,in}) &= I_{n,in}\\
V_{out} &= \frac{1 - g_mR_F}{g_m}\,I_{n,in}.
\end{aligned}
$$

令两者相等：

$$
\begin{aligned}
\frac{1 - g_mR_F}{g_m}\,I_{n,in} &= V_{n,RF} - V_{n,M1}\\
I_{n,in} &= \frac{g_m(V_{n,RF} - V_{n,M1})}{1 - g_mR_F} = \frac{g_m(V_{n,M1} - V_{n,RF})}{g_mR_F - 1}.
\end{aligned}
$$

### 第 4 步 — 功率谱密度

$V_{n,M1}$ 与 $V_{n,RF}$ 相互独立，因此它们之间的交叉项为零。

**电压**（最后一种形式由分子分母同除以 $R_F^2$ 得到）：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{g_m^2R_F^2\,\overline{V_{n,M1}^2} + \overline{V_{n,RF}^2}}{(g_mR_F - 1)^2}
= \frac{g_m^2R_F^2\cdot\dfrac{4kT\gamma}{g_m} + 4kTR_F}{(g_mR_F - 1)^2}\\
&= \frac{4kT\gamma g_mR_F^2 + 4kTR_F}{(g_mR_F - 1)^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}.
\end{aligned}
$$

**电流：**

$$\overline{I_{n,in}^2} = \frac{g_m^2\left(\overline{V_{n,M1}^2} + \overline{V_{n,RF}^2}\right)}{(g_mR_F - 1)^2} = \frac{g_m^2\left(\dfrac{4kT\gamma}{g_m} + 4kTR_F\right)}{(g_mR_F - 1)^2} = \frac{4kT\gamma g_m + 4kTR_Fg_m^2}{(g_mR_F - 1)^2}.$$

### 第 5 步 — $V_{n,in}$ 与 $I_{n,in}$ 之间的相关性

两者由**相同**的两个噪声源构成，因此是**相关**的。在互谱中只剩下 $|V_{n,M1}|^2$ 和 $|V_{n,RF}|^2$ 两类乘积项：

$$
\begin{aligned}
\overline{V_{n,in}I_{n,in}^*} &= \frac{g_m\left[g_mR_F\,\overline{V_{n,M1}^2} + \overline{V_{n,RF}^2}\right]}{(g_mR_F - 1)^2}
= \frac{g_m\left[g_mR_F\cdot\dfrac{4kT\gamma}{g_m} + 4kTR_F\right]}{(g_mR_F - 1)^2}\\
&= \frac{4kTg_mR_F\,(1 + \gamma)}{(g_mR_F - 1)^2}.
\end{aligned}
$$

例如，当 $g_mR_F = 10$、$\gamma = 2/3$ 时，相关系数 $\overline{V_{n,in}I_{n,in}^*}/\sqrt{\overline{V_{n,in}^2}\,\overline{I_{n,in}^2}}$ 为 $\sqrt{10}(1.667)/\sqrt{(7.667)(10.667)} \approx 0.58$：远不为零。

**用信号源内阻进行检验。** 让含两个等效噪声源的无噪声放大器（输入阻抗为 $1/g_m$）由 $R_S$ 驱动，对 G 点列 KCL 得 $V_G = (V_{n,in} + R_SI_{n,in})/(1 + g_mR_S)$。代入第 2 步和第 3 步的结果：

$$V_{n,in} + R_SI_{n,in} = \frac{g_m(R_F + R_S)V_{n,M1} - (1 + g_mR_S)V_{n,RF}}{g_mR_F - 1},$$

$$V_{out} = (1 - g_mR_F)V_G = V_{n,RF} - \frac{g_m(R_S + R_F)}{1 + g_mR_S}V_{n,M1},$$

这与直接分析含噪声电路得到的输出噪声完全相同（其中 $g_mV_{n,M1}$ 即 $M_1$ 的噪声电流）。若只把 $\overline{V_{n,in}^2} + R_S^2\overline{I_{n,in}^2}$ 相加而不计交叉项 $2R_S\overline{V_{n,in}I_{n,in}^*}$，就会低估噪声（当 $g_mR_F = 10$、$g_mR_S = 1$ 时，功率约低 28 %）。

### 结果

$$V_{n,in} = \frac{g_mR_FV_{n,M1} - V_{n,RF}}{g_mR_F - 1}, \qquad I_{n,in} = \frac{g_m(V_{n,M1} - V_{n,RF})}{g_mR_F - 1}.$$

两者都包含 $V_{n,M1}$ 和 $V_{n,RF}$，因此是**强相关**的，而不是相互独立的。它们的功率谱密度为：

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_mR_F^2 + 4kTR_F}{(g_mR_F - 1)^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}, \qquad \overline{I_{n,in}^2} = \frac{4kT\gamma g_m + 4kTR_Fg_m^2}{(g_mR_F - 1)^2},$$

互谱为 $\overline{V_{n,in}I_{n,in}^*} = 4kTg_mR_F(1 + \gamma)/(g_mR_F - 1)^2$。

**常见错误。** 把 $V_{n,in}$ 和 $I_{n,in}$ 当作相互独立的量。信号源内阻为有限值时，必须计入交叉项 $2R_S\overline{V_{n,in}I_{n,in}^*}$。

**常见错误。** 漏掉 $g_mR_F - 1$ 中的 $-1$。它来自经 $R_F$ 的前馈（feedforward）电流（无噪声增益为 $1 - g_mR_F$，而不是 $-g_mR_F$），在 $g_mR_F$ 不大时影响显著。

**常见错误。** 把 $V_{n,in}$ 放在 $R_F$ 环路之内的 MOS 栅极处，这是另一种表示方法，得到的是另一对等效噪声源（$V_{n,in} = V_{n,M1} - V_{n,RF}/(g_mR_F)$，$I_{n,in} = -V_{n,RF}/R_F$）。另外，只改变两个结果之一的符号会改变互谱。

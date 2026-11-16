# 详细步骤 - R219

**思路。** 写出每个器件的小信号漏极电流，其中计入体跨导（body-effect transconductance）$g_{mb}$；利用尾电流固定这一条件，对 P 点应用基尔霍夫电流定律（KCL），求出 $V_P$ 的变化量；然后分别用从 P 点看进去的每半边电路的戴维南等效电路和大信号（large-signal）分析来验证这一结果。

### 第 1 步 — 相同的 $V_{SB}$、偏置点和小信号模型（small-signal model）

两个源极都接在节点 P，两个衬底都接地，因此

$$V_{SB1} = V_P - 0 = V_P, \qquad V_{SB2} = V_P - 0 = V_P .$$

**两个器件的 $V_{SB}$ 始终相同**：无论 $V_P$ 如何变化，它对两个阈值电压（threshold voltage）的改变量都完全相同。因此，在偏置点（$V_{in1} = V_{in2} = V_0$），两个器件的 $V_{GS}$、$V_{TH}$ 和电流都相同，$I_1 = I_2 = I_T/2$，并且具有相同的

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}\cdot\frac{I_T}{2}}, \qquad g_{mb} = \eta\,g_m, \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} .$$

每个器件都等效为 $g_mv_{gs}$ 与 $g_{mb}v_{bs}$ 两个受控源并联，方向都是从漏极流向源极。与无体效应时的结论一样，取 $\lambda = 0$，因此漏极可视为交流地，理想尾电流源相当于开路。衬底接地时，控制电压为

$$
\begin{aligned}
v_{gs1} &= \Delta V_{in1} - \Delta V_P, & v_{bs1} &= 0 - \Delta V_P = -\Delta V_P,\\
v_{gs2} &= \Delta V_{in2} - \Delta V_P, & v_{bs2} &= 0 - \Delta V_P = -\Delta V_P .
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

唯一的未知节点是 P，与它相连的只有这四个受控源，别无其他元件。

### 第 2 步 — 对节点 P 列 KCL

把每个器件的两个受控源电流相加：

$$
\begin{aligned}
\Delta I_1 &= g_m(\Delta V_{in1} - \Delta V_P) + g_{mb}(-\Delta V_P) = g_m\Delta V_{in1} - (g_m + g_{mb})\Delta V_P,\\
\Delta I_2 &= g_m(\Delta V_{in2} - \Delta V_P) + g_{mb}(-\Delta V_P) = g_m\Delta V_{in2} - (g_m + g_{mb})\Delta V_P .
\end{aligned}
$$

尾电流源使 $I_1 + I_2 = I_T$ 保持不变，因此 $\Delta I_1 + \Delta I_2 = 0$。代入并合并同类项：

$$g_m(\Delta V_{in1} + \Delta V_{in2}) = 2(g_m + g_{mb})\Delta V_P \quad\Longrightarrow\quad \Delta V_P = \frac{g_m}{2(g_m + g_{mb})}\,(\Delta V_{in1} + \Delta V_{in2}) .$$

### 第 3 步 — 施加差分输入

取 $\Delta V_{in1} = +\Delta V_{in}$、$\Delta V_{in2} = -\Delta V_{in}$，则 $\Delta V_{in1} + \Delta V_{in2} = \Delta V_{in} - \Delta V_{in} = 0$。由于 $2(g_m + g_{mb}) \neq 0$，

$$\boxed{\Delta V_P = 0}$$

**即使存在体效应也是如此。** 于是

$$
\begin{aligned}
v_{bs1} &= v_{bs2} = -\Delta V_P = 0,\\
\Delta V_1 &= \Delta V_{in1} - \Delta V_P = +\Delta V_{in},\\
\Delta V_2 &= \Delta V_{in2} - \Delta V_P = -\Delta V_{in},\\
\Delta I_1 &= g_m\Delta V_{in}, \qquad \Delta I_2 = -g_m\Delta V_{in} .
\end{aligned}
$$

体效应受控源上没有信号（$g_{mb}v_{bs} = 0$），因此 $g_{mb}$ 不会出现在差分响应中。体效应只能通过 $V_{SB} = V_P$ 起作用；而一个器件增加的电流恰好等于另一个器件减少的电流，P 点电压没有理由变化。

### 第 4 步 — 用戴维南等效电路得到同样的结果

提出公因子 $(g_m + g_{mb})$，

$$\Delta I_1 = (g_m + g_{mb})\left[\frac{g_m}{g_m + g_{mb}}\Delta V_{in1} - \Delta V_P\right],$$

因此从 P 看进去，$D_1$ 就是我们熟悉的源极跟随器（source follower）等效电路：电压源 $V_{th1}$ 串联电阻 $R_{th}$，其中

$$V_{th1} = \frac{g_m}{g_m + g_{mb}}\,\Delta V_{in1}, \qquad R_{th} = \frac{1}{g_m + g_{mb}} .$$

同理，$D_2$ 等效为 $V_{th2} = \frac{g_m}{g_m + g_{mb}}\Delta V_{in2}$ 串联一个**相同的** $R_{th}$。尾电流源开路，对 P 点列 KCL 得

$$\frac{V_{th1} - \Delta V_P}{R_{th}} + \frac{V_{th2} - \Delta V_P}{R_{th}} = 0 \;\Longrightarrow\; \Delta V_P = \frac{V_{th1} + V_{th2}}{2} ,$$

当两边输入反相，即 $V_{th2} = -V_{th1}$ 时，该式为零。体效应使两个等效电压源和两个等效电阻都减小，但**两边减小的程度完全相同**，因此中点保持不动。

### 第 5 步 — 大信号验证（为什么要求“电路保持线性”）

按平方律（square law），$I_{1,2} = \tfrac12 k(V_{in1,2} - V_P - V_{TH})^2$，其中 $k = \mu_nC_{ox}W/L$，两个器件的阈值电压是同一个 $V_{TH}(V_P)$。令 $x = V_0 - V_P - V_{TH}(V_P)$，

$$
\begin{aligned}
I_1 + I_2 &= \tfrac12 k(x + \Delta V_{in})^2 + \tfrac12 k(x - \Delta V_{in})^2\\
&= k\left(x^2 + \Delta V_{in}^2\right) = I_T,\\
x &= \sqrt{I_T/k - \Delta V_{in}^2} .
\end{aligned}
$$

$V_P + V_{TH}(V_P)$ 随 $V_P$ 单调增大，因此 $x$ 唯一地确定了 $V_P$，而 $V_P$ 只取决于 $\Delta V_{in}^2$。所以无论有无体效应，$V_P$ 都**没有一阶（线性）变化**；只有当 $\Delta V_{in}$ 较大时它才会发生二阶变化，而这已超出题目所假设的线性范围。

### 第 6 步 — 体效应在什么情况下才会起作用

- **共模输入。** 当 $\Delta V_{in1} = \Delta V_{in2} = \Delta V_{CM}$ 时，由第 2 步得 $\Delta V_P = \dfrac{g_m}{g_m + g_{mb}}\Delta V_{CM}$：P 点以源极跟随器的增益（小于一）跟随输入；而没有体效应时，它会完全跟随输入。
- **对称性被破坏。** 如果两个衬底的接法不同（例如一个衬底接自身源极，另一个接地），两管的阈值电压、偏置电流和 $g_m$ 都会不同，差分输入就会使 P 点移动。两个衬底都接地时，对称性得以保持。

### 结果

**是的，该结论仍然成立。** 两个器件共用同一个源极节点和同一个衬底节点，因此它们的 $V_{SB} = V_P$ 始终相同，阈值电压、偏置电流、$g_m$ 和 $g_{mb}$ 也都相同。小信号分析给出

$$\Delta V_P = \frac{g_m}{2(g_m + g_{mb})}(\Delta V_{in1} + \Delta V_{in2}),$$

当 $\Delta V_{in1} = -\Delta V_{in2}$ 时该式为零。等价地，从 P 看进去，每半边电路都是电压源 $\frac{g_m}{g_m + g_{mb}}V_{in}$ 串联电阻 $\frac{1}{g_m + g_{mb}}$；两边电阻相等、电压源反相，因此 P 点电压不变。体效应只改变对共模输入的响应：$\Delta V_P = \frac{g_m}{g_m + g_{mb}}\Delta V_{CM}$。

**常见错误。** 回答“不成立，因为阈值电压取决于 $V_P$”。同一个 $V_P$ 同时决定**两个**阈值电压，而在差分输入下 $V_P$ 并不变化，因此 $v_{bs} = 0$，$g_{mb}$ 受控源上没有信号。

**常见错误。** 只说“由对称性可知”，却不检查衬底的接法。这里对称性成立，是因为两个衬底都接地、两个源极都接在 P 点；如果其中一个衬底接到自身源极，对称性就不再成立。

**常见错误。** 误用 $v_{bs} = +\Delta V_P$，或者只在其中一个器件中漏掉 $g_{mb}$。符号错误不会改变差分结果，但会使共模下的 $\Delta V_P$ 大于 $\Delta V_{CM}$，这对跟随器来说是不可能的。

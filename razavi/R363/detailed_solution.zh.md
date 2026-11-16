# 详细步骤 - R363

**思路。** 把所有热噪声折算到输入端。$M_1$ 的噪声由 $I_D$ 和 $(W/L)_1$ 决定，因此只有负载（带 $R_S$ 的 $M_2$）的噪声电流可以改变。求出该噪声电流随 $R_S$ 变化的函数，加上电压余度（headroom）约束 $V_H = I_DR_S + |V_{GS2} - V_{TH2}|$，再求最小值。

### 第 1 步 — 需要最小化的量

每个噪声源最终都表现为流入输出节点的电流，在那里它与信号电流看到同一个电阻 $R_{out}$，因此除以增益 $g_{m1}R_{out}$ 得

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n,out}^2}\,R_{out}^2}{g_{m1}^2R_{out}^2} = \frac{\overline{I_{n,out}^2}}{g_{m1}^2},$$

无论 $R_{out}$ 为何值（$\lambda = 0$ 时它非常大）该式都成立。输出噪声电流由 $M_1$ 的沟道噪声 $4kT\gamma g_{m1}$ 以及与之不相关的、来自 $M_2$ 和 $R_S$ 的负载噪声电流 $\overline{I_{n,L}^2}$ 组成：

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + \overline{I_{n,L}^2}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{\overline{I_{n,L}^2}}{g_{m1}^2}.$$

由于 $g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_D}$ 与 $R_S$ 无关，**使 $\overline{V_{n,in}^2}$ 最小就是使 $\overline{I_{n,L}^2}$ 最小。**

### 第 2 步 — 带负反馈的负载送出的噪声电流

把输出短接到交流地，并把 $M_2$ 的源极记为 S，其电压为 $v_s$；由于栅极接交流地，$v_{sg} = v_s$。$R_S$ 接在交流地（$V_{DD}$）与 S 之间，与其噪声电压（$\overline{v_{nR}^2} = 4kTR_S$）串联；$M_2$ 从 S 流向漏极的电流为 $g_{m2}v_s$ 加上其沟道噪声 $i_{n2}$（$\overline{i_{n2}^2} = 4kT\gamma g_{m2}$），没有 $r_O$，也没有 $g_{mb}$。负载噪声电流就是从漏极流入短路输出端的电流 $i_{out}$。

<!-- diagram: diagram-01.cir -->

**（a）只有 $M_2$ 的噪声**（$v_{nR} = 0$）。S 点的基尔霍夫电流定律（KCL）：

$$
\begin{aligned}
\frac{0 - v_s}{R_S} &= g_{m2}v_s + i_{n2}\\
-v_s\left(\frac{1}{R_S} + g_{m2}\right) &= i_{n2}\\
v_s &= -\frac{i_{n2}R_S}{1 + g_{m2}R_S},
\end{aligned}
$$

$$
\begin{aligned}
i_{out} &= g_{m2}v_s + i_{n2}\\
&= i_{n2}\left(1 - \frac{g_{m2}R_S}{1 + g_{m2}R_S}\right)\\
&= \frac{i_{n2}}{1 + g_{m2}R_S}.
\end{aligned}
$$

源极负反馈抑制了 $M_2$ 的噪声：$i_{n2}$ 把 S 点电压拉低，使 $v_{sg}$ 减小，从而受控源抵消了其中的大部分。

**（b）只有 $R_S$ 的噪声**（$i_{n2} = 0$）。S 点的 KCL：

$$
\begin{aligned}
\frac{v_{nR} - v_s}{R_S} &= g_{m2}v_s\\
v_{nR} &= v_s\,(1 + g_{m2}R_S)\\
v_s &= \frac{v_{nR}}{1 + g_{m2}R_S},
\end{aligned}
$$

$$i_{out} = g_{m2}v_s = \frac{g_{m2}\,v_{nR}}{1 + g_{m2}R_S}.$$

**（c）总负载噪声**（各噪声源互不相关）：

$$
\begin{aligned}
\overline{I_{n,L}^2} &= \frac{\overline{i_{n2}^2}}{(1 + g_{m2}R_S)^2} + \frac{g_{m2}^2\,\overline{v_{nR}^2}}{(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\gamma g_{m2} + g_{m2}^2\cdot4kTR_S}{(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{(1 + g_{m2}R_S)^2}.
\end{aligned}
$$

当 $R_S = 0$ 时它为 $4kT\gamma g_{m2}$（普通电流源）；当 $g_{m2}R_S \gg 1$ 时它为 $4kTg_{m2}^2R_S/(g_{m2}R_S)^2 = 4kT/R_S$（只剩电阻）。这个表达式似乎在说“把 $R_S$ 取大”，但在 $I_D$ 固定时，更大的 $R_S$ 会占用电压余度，迫使过驱动电压减小，从而使 $g_{m2}$ **增大**；必须把这种耦合考虑进去。

### 第 3 步 — 加上电压余度约束

摆幅确定了

$$V_H = I_DR_S + |V_{ov2}|, \qquad |V_{ov2}| = |V_{GS2} - V_{TH2}| .$$

定义电阻两端的电压

$$x = I_DR_S, \qquad 0 \le x < V_H,$$

于是留给 $M_2$ 的过驱动电压为

$$|V_{ov2}| = V_H - x ,$$

由平方律得

$$g_{m2} = \frac{2I_D}{|V_{ov2}|} = \frac{2I_D}{V_H - x},$$

其中 $(W/L)_2 = 2I_D/[\mu_pC_{ox}(V_H - x)^2]$ 可以自由选取，以便在该过驱动电压下流过 $I_D$。$\overline{I_{n,L}^2}$ 的各组成部分为：

$$
\begin{aligned}
g_{m2}R_S &= \frac{2I_D}{V_H - x}\cdot\frac{x}{I_D} = \frac{2x}{V_H - x},\\
1 + g_{m2}R_S &= \frac{V_H - x + 2x}{V_H - x} = \frac{V_H + x}{V_H - x},\\
\gamma g_{m2} &= \frac{2\gamma I_D}{V_H - x},\\
g_{m2}^2R_S &= g_{m2}\,(g_{m2}R_S) = \frac{2I_D}{V_H - x}\cdot\frac{2x}{V_H - x} = \frac{4I_Dx}{(V_H - x)^2}.
\end{aligned}
$$

通分为公分母 $(V_H - x)^2$，

$$\gamma g_{m2} + g_{m2}^2R_S = \frac{2\gamma I_D(V_H - x) + 4I_Dx}{(V_H - x)^2} = \frac{2I_D\left[\gamma(V_H - x) + 2x\right]}{(V_H - x)^2},$$

再除以 $(1 + g_{m2}R_S)^2 = (V_H + x)^2/(V_H - x)^2$，因子 $(V_H - x)^2$ 被约去：

$$\frac{\gamma g_{m2} + g_{m2}^2R_S}{(1 + g_{m2}R_S)^2} = \frac{2I_D\left[\gamma(V_H - x) + 2x\right]}{(V_H + x)^2}.$$

利用 $\gamma(V_H - x) + 2x = \gamma V_H + (2 - \gamma)x$：

$$\overline{I_{n,L}^2} = 8kTI_D\,\frac{\gamma V_H + (2 - \gamma)x}{(V_H + x)^2},$$

它是单一设计变量 $x = I_DR_S$ 的函数。

### 第 4 步 — 对 $x$ 求最小值

令

$$f(x) = \frac{\gamma V_H + (2 - \gamma)x}{(V_H + x)^2}.$$

由商的求导法则：

$$
\begin{aligned}
f'(x) &= \frac{(2 - \gamma)(V_H + x)^2 - 2(V_H + x)\left[\gamma V_H + (2 - \gamma)x\right]}{(V_H + x)^4}\\
&= \frac{(2 - \gamma)(V_H + x) - 2\gamma V_H - 2(2 - \gamma)x}{(V_H + x)^3}\\
&= \frac{(2 - \gamma)V_H - 2\gamma V_H + (2 - \gamma)x - 2(2 - \gamma)x}{(V_H + x)^3}\\
&= \frac{(2 - 3\gamma)V_H - (2 - \gamma)x}{(V_H + x)^3}.
\end{aligned}
$$

当 $\gamma = 2/3$ 时，$2 - 3\gamma = 0$，$2 - \gamma = 4/3$，因此

$$f'(x) = -\frac{\tfrac43\,x}{(V_H + x)^3} < 0 \quad\text{for all } x > 0 .$$

导数只在 $x = 0$ 处为零（曲线在起点处是平的），因此负载噪声**随 $R_S$ 的增大而单调减小**：不存在内部极小值，最佳选择是允许的最大 $x$，即 $x \to V_H$。

**数值验证**：令 $u = x/V_H$，$\gamma = 2/3$，则 $f = \dfrac{\tfrac23 + \tfrac43u}{(1 + u)^2}\cdot\dfrac{1}{V_H}$：

| $u = I_DR_S/V_H$ | $\lvert V_{ov2}\rvert$ | $V_H f(x)$ | $\overline{I_{n,L}^2}$（以 $8kTI_D/V_H$ 为单位） |
|---|---|---|---|
| 0 | $V_H$ | $0.667/1 = 0.667$ | 0.667 |
| 0.25 | $0.75V_H$ | $1.000/1.5625 = 0.640$ | 0.640 |
| 0.50 | $0.50V_H$ | $1.333/2.25 = 0.593$ | 0.593 |
| 0.75 | $0.25V_H$ | $1.667/3.0625 = 0.544$ | 0.544 |
| 1（极限） | $\to 0$ | $2.000/4 = 0.500$ | 0.500 |

### 第 5 步 — 两个端点及其物理原因

**$R_S = 0$**（$x = 0$，全部电压余度都用作过驱动电压）：$g_{m2} = 2I_D/V_H$，且

$$\overline{I_{n,L}^2}\Big|_{R_S = 0} = 8kT\gamma\frac{I_D}{V_H} = 4kT\gamma\cdot\frac{2I_D}{V_H}.$$

**$R_S \to V_H/I_D$**（$x \to V_H$，$M_2$ 的过驱动电压趋于零）：

$$\overline{I_{n,L}^2}\Big|_{x \to V_H} = 8kTI_D\frac{\gamma V_H + (2 - \gamma)V_H}{(2V_H)^2} = 8kTI_D\frac{2V_H}{4V_H^2} = \frac{4kTI_D}{V_H} = \frac{4kT}{R_S}.$$

两者之比为

$$\frac{8kT\gamma I_D/V_H}{4kTI_D/V_H} = 2\gamma = 2\times\frac23 = \frac43 ,$$

因此把全部电压余度都分配给 $R_S$，可使负载噪声电流缩小 4/3 倍。原因在于：在承载电流 $I$、两端电压为 $V$ 的条件下，电阻的噪声电流为 $4kT/R = 4kT\,I/V$，而过驱动电压为 $V$ 的饱和 MOSFET 的噪声电流为 $4kT\gamma g_m = 4kT\gamma\cdot 2I/V$，是前者的 $2\gamma > 1$ 倍。

实际上，当 $x \to V_H$ 时 $(W/L)_2 = 2I_D/[\mu_pC_{ox}(V_H - x)^2]$ 会无限增大，因此给 $M_2$ 取实际可行的最小过驱动电压，即采用一个接近强反型（strong inversion）边缘的宽器件，而 $V_H$ 的其余部分都加在 $R_S$ 上，此时 $V_b = V_{DD} - I_DR_S - |V_{TH2}| - |V_{ov2}|$。（当 $\gamma < 2/3$ 时会出现驻点 $x = (2 - 3\gamma)V_H/(2 - \gamma)$，但 $f'$ 在该点由正变负，因此它是噪声的**极大值**；最小值仍在端点上。）

### 结果

计入电压余度约束（$x = I_DR_S$，$|V_{ov2}| = V_H - x$）后，负载噪声电流为

$$\overline{I_{n,L}^2} = \frac{4kT(\gamma g_{m2} + g_{m2}^2R_S)}{(1 + g_{m2}R_S)^2} = 8kTI_D\,\frac{\gamma(V_H - x) + 2x}{(V_H + x)^2},$$

且 $\overline{V_{n,in}^2} = 4kT\gamma/g_{m1} + \overline{I_{n,L}^2}/g_{m1}^2$。当 $\gamma = 2/3$ 时其导数 $\propto -x \le 0$，因此噪声**随 $R_S$ 单调减小**。在电压余度允许的范围内把 $R_S$ 取得尽可能大，即可使输入参考噪声最小：

$$R_S \to \frac{V_H}{I_D},$$

同时使 $M_2$ 的过驱动电压在实际可行的范围内尽可能小（采用很宽的 $M_2$）。此时负载噪声趋于 $4kT/R_S = 4kTI_D/V_H$，而 $R_S = 0$ 时为 $8kT\gamma I_D/V_H$：改善了 $2\gamma = 4/3$ 倍。

**常见错误。** 在 $g_{m2}$ 保持不变的情况下优化 $\overline{I_{n,L}^2}$。当 $I_D$ 和 $V_H$ 固定时，$g_{m2} = 2I_D/(V_H - I_DR_S)$ 随 $R_S$ 增大而增大；忽略这一点会得出错误的结论，例如存在内部最优点（$R_S = 1/g_{m2}$），或者“应使 $R_S$ 为无穷大”。

**常见错误。** 因为电阻会引入自身的噪声，就断定 $R_S = 0$ 最好。它确实引入了 $4kTR_S$，但其负反馈作用把 $M_2$ 的噪声除以了 $(1 + g_{m2}R_S)^2$；而且只要 $2\gamma > 1$，在电流和电压相同时，电阻（$4kTI/V$）的噪声就比饱和 MOSFET（$8kT\gamma I/V$）的更小。

**常见错误。** 认为 $M_1$ 的噪声占主导，所以 $R_S$ 无关紧要。负载项 $\overline{I_{n,L}^2}/g_{m1}^2$ 与 $4kT\gamma/g_{m1}$ 同数量级，而且恰恰是 $R_S$ 所能控制的部分。

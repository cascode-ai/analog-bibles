# 详细步骤 - R307

**思路。** 在极低频时 $C_1$ 和 $C_2$ 相当于开路；在极高频时相当于短路。对每种极限情况，判断 $M_1$、$M_3$、$R_1$ 和 $R_2$ 变成了什么，再在节点 X（$M_2$ 的源极）和输出端列基尔霍夫电流定律（KCL）方程求增益。这两个电容使 $M_1$ 从二极管变为电流源，并使 $M_3$ 从电流源变为由信号驱动的第二个跨导器。

### 第 1 步 — 极低频：电路变成什么

把 $M_2$ 的源极（$M_1$ 的漏极）称为节点 X，$M_1$ 的栅极称为 G1，$M_3$ 的栅极称为 G3；$V_{DD}$、$V_b$ 和地都是交流地。$C_1$ 和 $C_2$ 开路时，$R_1$ 和 $R_2$ 中没有电流，因此：

- **G1** 的电压等于 X 点电压：$M_1$ 为**二极管连接**，从 X 到地的电阻为
$$R_X = \frac{1}{g_{m1}}\parallel r_{O1} = \frac{r_{O1}}{1 + g_{m1}r_{O1}}.$$
- **G3** 的电压等于 $V_b$，即交流地：$M_3$ 是输出电阻为 $r_{O3}$ 的**电流源**。

因此 $M_2$ 是一个以 $R_X$ 为源极负反馈电阻、以 $r_{O3}$ 为负载的共源级。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 极低频：增益

令 $i_2 = g_{m2}(V_{in} - V_X) + (V_{out} - V_X)/r_{O2}$ 为从输出端经 $M_2$ 和 $r_{O2}$ 流向 X 的电流。输出端的 KCL（经 $r_{O3}$ 流入的电流为 $-V_{out}/r_{O3}$）和 X 点的 KCL：

$$i_2 = -\frac{V_{out}}{r_{O3}} , \qquad (1)$$

$$i_2 = \frac{V_X}{R_X}\quad\Longrightarrow\quad V_X = -\frac{R_X}{r_{O3}}V_{out}. \qquad (2)$$

展开式 (1) 并代入式 (2)：

$$
\begin{aligned}
g_{m2}V_{in} - g_{m2}V_X + \frac{V_{out}}{r_{O2}} - \frac{V_X}{r_{O2}} &= -\frac{V_{out}}{r_{O3}}\\
g_{m2}V_{in} + V_{out}\left(\frac{1}{r_{O2}} + \frac{1}{r_{O3}}\right) &= V_X\left(g_{m2} + \frac{1}{r_{O2}}\right) = -\frac{R_X}{r_{O3}}\left(g_{m2} + \frac{1}{r_{O2}}\right)V_{out}.
\end{aligned}
$$

合并 $V_{out}$ 项，并在两边同乘以 $r_{O2}r_{O3}$：

$$g_{m2}r_{O2}r_{O3}V_{in} = -V_{out}\left[r_{O3} + r_{O2} + (1 + g_{m2}r_{O2})R_X\right],$$

$$A_{v,low} = -\frac{g_{m2}r_{O2}r_{O3}}{r_{O2} + r_{O3} + (1 + g_{m2}r_{O2})R_X}.$$

代入 $R_X = r_{O1}/(1 + g_{m1}r_{O1})$，并将分子、分母同乘以 $(1 + g_{m1}r_{O1})$：

$$A_{v,low} = -\frac{g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})}{r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}(r_{O2} + r_{O3}) + g_{m2}r_{O1}r_{O2}}.$$

利用 $R_X\approx1/g_{m1}$ 和 $g_{m2}r_{O2}\gg1$，将第一种形式的分子、分母同除以 $r_{O2}$：

$$A_{v,low}\approx -\frac{g_{m2}r_{O3}}{1 + \dfrac{g_{m2}}{g_{m1}} + \dfrac{r_{O3}}{r_{O2}}}\ \approx\ -\frac{g_{m1}g_{m2}}{g_{m1} + g_{m2}}\,r_{O3}\quad(r_{O2}\gg r_{O3}).$$

二极管连接的 $M_1$ 对 $M_2$ 形成很强的源极负反馈：当 $g_{m1} = g_{m2}$ 时，等效跨导（transconductance）减半。

### 第 3 步 — 极高频：电路变成什么

$C_1$ 和 $C_2$ 短路时：

- **$C_1$ 把 G1 接地。** $M_1$ 是**电流源**（从 X 到地的电阻为 $r_{O1}$），$R_1$ 此时接在 X 与交流地之间，**成为 X 点的负载**。
- **$C_2$ 把 G3 与 X 短接。** $M_3$ 变为由 $V_X$ 驱动的**跨导器**，从输出端向交流地吸取电流 $g_{m3}V_X$，并与 $r_{O3}$ 并联。$R_2$ 此时接在 X 与 $V_b$ 之间，**也成为 X 点的负载**。

从 X 到地的总电阻为

$$R_X' = r_{O1}\parallel R_1\parallel R_2 .$$

<!-- diagram: diagram-02.cir -->

### 第 4 步 — 极高频：增益

$i_2$ 的定义同前。输出端的 KCL（经 $M_2$ 的 $i_2$ 和经 $M_3$ 的 $g_{m3}V_X + V_{out}/r_{O3}$ 都从该节点流出）和 X 点的 KCL（$M_3$ 的栅极不吸取电流）：

$$i_2 + g_{m3}V_X + \frac{V_{out}}{r_{O3}} = 0 , \qquad (3)$$

$$i_2 = \frac{V_X}{R_X'} . \qquad (4)$$

把式 (4) 代入式 (3)：

$$V_{out} = -r_{O3}\left(g_{m3} + \frac{1}{R_X'}\right)V_X\quad\Longrightarrow\quad V_X = -\frac{V_{out}}{r_{O3}\left(g_{m3} + 1/R_X'\right)}. \qquad (5)$$

展开式 (4)：

$$g_{m2}(V_{in} - V_X) + \frac{V_{out} - V_X}{r_{O2}} = \frac{V_X}{R_X'}\quad\Longrightarrow\quad g_{m2}V_{in} + \frac{V_{out}}{r_{O2}} = V_X\left(g_{m2} + \frac{1}{r_{O2}} + \frac{1}{R_X'}\right).$$

代入式 (5)，并在两边同乘以 $r_{O3}(g_{m3} + 1/R_X')$：

$$
\begin{aligned}
g_{m2}r_{O3}\left(g_{m3} + \tfrac{1}{R_X'}\right)V_{in} + \frac{r_{O3}}{r_{O2}}\left(g_{m3} + \tfrac{1}{R_X'}\right)V_{out} &= -\left(g_{m2} + \tfrac{1}{r_{O2}} + \tfrac{1}{R_X'}\right)V_{out}\\
A_{v,high} &= -\frac{g_{m2}r_{O3}\left(g_{m3} + 1/R_X'\right)}{g_{m2} + 1/R_X' + 1/r_{O2} + (r_{O3}/r_{O2})\left(g_{m3} + 1/R_X'\right)}.
\end{aligned}
$$

当 $r_{O2}\to\infty$ 时，将分子、分母同乘以 $R_X'$：

$$A_{v,high}\approx -g_{m2}r_{O3}\,\frac{1 + g_{m3}R_X'}{1 + g_{m2}R_X'} ,$$

若还有 $g_{m2}R_X'\gg1$ 和 $g_{m3}R_X'\gg1$，则

$$A_{v,high}\approx -g_{m3}r_{O3}.$$

由于 X 点有很大的电阻 $R_X'$，$M_2$ 几乎相当于一个源极跟随器（source follower），X 跟踪 $V_{in}$ 变化。$V_X$ 经 $C_2$ 驱动 $M_3$ 的栅极，因此当 $V_{in}$ 升高时，$M_2$ 更强地下拉输出端，**同时** $M_3$ 向输出端注入的电流减小：这种推挽作用使 $M_3$ 成为高频时增益的主要来源。

### 第 5 步 — 两种极限情况的比较

当各跨导相近（$g_{m1}\approx g_{m2}\approx g_{m3} = g_m$）且 $r_{O2}\gg r_{O3}$ 时，低频增益约为 $-\tfrac12g_mr_{O3}$（二极管 $M_1$ 引起的源极负反馈），而高频增益趋于 $-g_mr_{O3}$（经 $M_3$ 的推挽作用）。因此增益随频率**升高**，在这种情况下最多升高约 2 倍；确切的比值取决于器件参数，如果 $g_{m3}$ 远小于 $g_{m1}$、$g_{m2}$，增益甚至可能下降。

### 结果

**极低频**（$C_1$、$C_2$ 开路；$M_1$ 经 $R_1$ 接成二极管连接，$R_X = (1/g_{m1})\parallel r_{O1}$；$M_3$ 为电流源）：

$$A_{v,low} = -\frac{g_{m2}r_{O2}r_{O3}}{r_{O2} + r_{O3} + (1 + g_{m2}r_{O2})R_X} = -\frac{g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})}{r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}(r_{O2} + r_{O3}) + g_{m2}r_{O1}r_{O2}}$$

$$\approx -\frac{g_{m2}r_{O3}}{1 + g_{m2}/g_{m1} + r_{O3}/r_{O2}}\approx -\frac{g_{m1}g_{m2}}{g_{m1} + g_{m2}}r_{O3}\quad(r_{O2}\gg r_{O3}).$$

**极高频**（$C_1$、$C_2$ 短路；$M_1$ 为电流源，$R_1$ 和 $R_2$ 成为 X 点的负载，$M_3$ 由 $V_X$ 驱动；$R_X' = r_{O1}\parallel R_1\parallel R_2$）：

$$A_{v,high} = -\frac{g_{m2}r_{O3}\left(g_{m3} + 1/R_X'\right)}{g_{m2} + 1/R_X' + 1/r_{O2} + (r_{O3}/r_{O2})\left(g_{m3} + 1/R_X'\right)}\approx -g_{m2}r_{O3}\,\frac{1 + g_{m3}R_X'}{1 + g_{m2}R_X'},$$

当 $g_{m2}R_X'\gg1$ 时它趋于 $-g_{m3}r_{O3}$。

**常见错误。** 在低频时把 $M_1$ 当作电流源。$C_1$ 开路时，$R_1$ 中没有电流，因此 $M_1$ 的栅极跟随其漏极：它是二极管连接的，对 $M_2$ 提供约 $1/g_{m1}$ 的源极负反馈。

**常见错误。** 在高频时漏掉 $M_3$ 的跨导。$C_2$ 把 $M_3$ 的栅极接到 X（而不是输出端），因此 $M_3$ 由 $V_X\approx V_{in}$ 驱动，贡献 $g_{m3}$；若把 $C_2$ 看成接到输出端，就会错误地把 $M_3$ 当作二极管连接。

**常见错误。** 忘记在高频时 $R_1$ 和 $R_2$ 是 X 点的负载。在直流时它们中没有电流，但一旦 $C_1$ 和 $C_2$ 短路，二者都把 X 接到交流地，并出现在 $R_X' = r_{O1}\parallel R_1\parallel R_2$ 中。

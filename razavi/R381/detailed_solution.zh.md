# 详细步骤 - R381

**思路。** 输入参考噪声电流是这样一个电流：把它注入无噪声电路的开路输入端，产生的输出与噪声源产生的输出相同。因此求同一电路（输入端开路）的两个传递函数：从 $V_{n1}$ 到 $V_{out}$，以及从输入电流到 $V_{out}$（即跨阻）；两者之比就是 $M_1$ 的贡献，再将其与 $M_2$ 和 $M_3$ 的贡献比较。

### 第 1 步 — 输入端开路时的小信号电路

把输入节点记为 X。由于栅极处于交流地，$M_3$ 相当于从 $V_{out}$ 到交流地的 $r_{O3}$（另加其噪声电流 $4kT\gamma g_{m3}$），$M_2$ 相当于从 X 到地的 $r_{O2}$（另加 $4kT\gamma g_{m2}$）。$M_1$ 的沟道中从 out 流向 X 的电流为

$$I = g_{m1}(V_{n1} - V_X) - g_{mb1}V_X + \frac{V_{out} - V_X}{r_{O1}}$$

（衬底接地，$v_{bs} = -V_X$）。可以向 X 注入测试电流 $I_{in}$。令 $G \equiv g_{m1} + g_{mb1}$。

<!-- diagram: diagram-01.cir -->

对两个节点应用基尔霍夫电流定律（KCL）：

$$\text{X:}\quad I_{in} + I = \frac{V_X}{r_{O2}}, \qquad\qquad \text{out:}\quad -\frac{V_{out}}{r_{O3}} = I .$$

### 第 2 步 — 由 $V_{n1}$ 产生的输出（$I_{in} = 0$）

把 $V_X = Ir_{O2}$ 和 $V_{out} = -Ir_{O3}$ 代入沟道方程（再乘以 $r_{O1}$）：

$$
\begin{aligned}
I &= g_{m1}V_{n1} - G\,Ir_{O2} - \frac{Ir_{O3} + Ir_{O2}}{r_{O1}}\\
I\,\left[r_{O1} + Gr_{O1}r_{O2} + r_{O2} + r_{O3}\right] &= g_{m1}r_{O1}V_{n1}.
\end{aligned}
$$

记公共分母为

$$\Delta = r_{O1} + r_{O2} + r_{O3} + (g_{m1} + g_{mb1})\,r_{O1}r_{O2},$$

则 $I = g_{m1}r_{O1}V_{n1}/\Delta$，且

$$V_{out}\big|_{V_{n1}} = -\frac{g_{m1}r_{O1}r_{O3}}{\Delta}\,V_{n1},$$

该值很小，因为 $V_{n1}$ 看到的是一个由 $r_{O2}$ 构成强源极负反馈（source degeneration）的共源级（common-source stage）。

### 第 3 步 — 跨阻（$V_{n1} = 0$，电流 $I_{in}$ 注入 X）

此时 $I = -V_{out}/r_{O3}$，$V_X = r_{O2}(I_{in} + I) = r_{O2}I_{in} - r_{O2}V_{out}/r_{O3}$。$V_{n1} = 0$ 时的沟道方程

$$-\frac{V_{out}}{r_{O3}} = -GV_X + \frac{V_{out} - V_X}{r_{O1}},$$

乘以 $r_{O1}$ 后得

$$
\begin{aligned}
-\frac{r_{O1}}{r_{O3}}V_{out} &= -Gr_{O1}V_X + V_{out} - V_X\\
V_X\,(1 + Gr_{O1}) &= V_{out}\left(1 + \frac{r_{O1}}{r_{O3}}\right)\\
V_X &= V_{out}\,\frac{r_{O1} + r_{O3}}{r_{O3}(1 + Gr_{O1})}.
\end{aligned}
$$

令 $V_X$ 的两个表达式相等：

$$V_{out}\,\frac{r_{O1} + r_{O3}}{r_{O3}(1 + Gr_{O1})} + \frac{r_{O2}}{r_{O3}}V_{out} = r_{O2}I_{in}.$$

乘以 $r_{O3}(1 + Gr_{O1})$：

$$
\begin{aligned}
V_{out}\left[r_{O1} + r_{O3} + r_{O2}(1 + Gr_{O1})\right] &= r_{O2}r_{O3}(1 + Gr_{O1})\,I_{in}\\
R_T \equiv \frac{V_{out}}{I_{in}} &= \frac{\left[(g_{m1} + g_{mb1})r_{O1} + 1\right]r_{O2}r_{O3}}{\Delta},
\end{aligned}
$$

这里用到了 $r_{O1} + r_{O3} + r_{O2} + Gr_{O1}r_{O2} = \Delta$。当 $g_mr_O \gg 1$（且 $r_{O3}$ 不比 $g_mr_O\,r_{O2}$ 大很多）时，$\Delta \approx Gr_{O1}r_{O2}$，$R_T \approx r_{O3}$：共栅级几乎把全部输入电流都传递到输出端。

### 第 4 步 — $M_1$ 的输入参考噪声电流

用第 2 步的结果除以 $R_T$（$\Delta$ 和 $r_{O3}$ 被约去）：

$$I_{n,in}\big|_{M_1} = \frac{V_{out}|_{V_{n1}}}{R_T} = -\frac{g_{m1}r_{O1}}{r_{O2}\left[(g_{m1} + g_{mb1})r_{O1} + 1\right]}\,V_{n1}.$$

当 $(g_{m1} + g_{mb1})r_{O1} \gg 1$ 时：

$$|I_{n,in}|_{M_1} \approx \frac{g_{m1}}{g_{m1} + g_{mb1}}\cdot\frac{V_{n1}}{r_{O2}}.$$

代入 $\overline{V_{n1}^2} = 4kT\gamma/g_{m1}$：

$$\overline{I_{n,in}^2}\Big|_{M_1} \approx \left(\frac{g_{m1}}{g_{m1} + g_{mb1}}\right)^2\frac{4kT\gamma}{g_{m1}r_{O2}^2} \approx \frac{4kT\gamma}{g_{m1}r_{O2}^2}.$$

### 第 5 步 — $M_2$ 和 $M_3$ 的贡献

**$M_2$。** 其噪声电流在 X 与地之间流动，与输入端并联，因此折算到输入端的系数恰好为 1：

$$\overline{I_{n,in}^2}\Big|_{M_2} = 4kT\gamma g_{m2}.$$

**$M_3$。** $I_{n3}$ 注入输出端，在那里看到的是 $r_{O3}\parallel R_{down}$，其中 $R_{down} = r_{O1} + r_{O2} + Gr_{O1}r_{O2}$ 为从 $M_1$ 漏极看进去的电阻。输入电流乘以短路电流增益 $\alpha = (1 + Gr_{O1})r_{O2}/R_{down}$（非常接近 1）后到达输出端，而且确实有 $R_T = \alpha\,(r_{O3}\parallel R_{down})$。因此 $I_{n3}$ 折算到输入端为 $I_{n3}/\alpha \approx I_{n3}$：

$$\overline{I_{n,in}^2}\Big|_{M_3} \approx 4kT\gamma g_{m3}.$$

### 第 6 步 — 比较

$$\frac{\overline{I_{n,in}^2}|_{M_1}}{\overline{I_{n,in}^2}|_{M_2}} \approx \frac{4kT\gamma/(g_{m1}r_{O2}^2)}{4kT\gamma g_{m2}} = \frac{1}{(g_{m1}r_{O2})(g_{m2}r_{O2})} \sim \frac{1}{(g_mr_O)^2}.$$

若 $g_{m1}r_{O2} \approx g_{m2}r_{O2} \approx 50$，该比值约为 $1/2500$，与 $M_3$ 相比也类似。**$M_1$ 的贡献可以忽略**；噪声电流由 $M_2$ 和 $M_3$ 决定。$M_1$ 的噪声几乎到不了输出端（增益为 $r_{O3}/r_{O2}$ 的量级），而输入电流几乎无衰减地通过（跨阻 $\approx r_{O3}$）；当 $r_{O2} \to \infty$ 时，$M_1$ 的贡献完全消失。

### 结果

$$I_{n,in}\big|_{M_1} = \frac{g_{m1}r_{O1}}{r_{O2}\left[(g_{m1} + g_{mb1})r_{O1} + 1\right]}\,V_{n1} \approx \frac{g_{m1}}{g_{m1} + g_{mb1}}\cdot\frac{V_{n1}}{r_{O2}}, \qquad \overline{I_{n,in}^2}\Big|_{M_1} \approx \frac{4kT\gamma}{g_{m1}r_{O2}^2}$$

（不计因子 $[g_{m1}/(g_{m1} + g_{mb1})]^2$），它由 $V_{out} = -g_{m1}r_{O1}r_{O3}V_{n1}/\Delta$ 和跨阻 $R_T = [(g_{m1} + g_{mb1})r_{O1} + 1]r_{O2}r_{O3}/\Delta \approx r_{O3}$ 求得，其中 $\Delta = r_{O1} + r_{O2} + r_{O3} + (g_{m1} + g_{mb1})r_{O1}r_{O2}$。

$M_2$ 贡献 $4kT\gamma g_{m2}$，$M_3$ 贡献约 $4kT\gamma g_{m3}$，因此 $M_1$ 的贡献要小约 $(g_{m1}r_{O2})(g_{m2}r_{O2}) \sim (g_mr_O)^2$ 倍：**可以忽略**。

**常见错误。** 把 $M_1$ 的噪声折算为 $g_{m1}V_{n1}$（即 $4kT\gamma g_{m1}$），仿佛其源极接地。输入端开路时，源极接有 $r_{O2}$ 构成的源极负反馈，折算后的电流只有 $\approx V_{n1}/r_{O2}$。

**常见错误。** 声称 $M_1$ 的贡献与 $M_2$ 相当。两者之比为 $1/(g_mr_O)^2$ 量级；决定共栅级输入噪声电流的是电流源，而不是输入晶体管。

**常见错误。** 把跨阻取为 $r_{O3}\parallel r_{O2}$ 或 $r_{O2}$。输入电流流过 $M_1$（电流增益 ≈ 1），基本上是在 $r_{O3}$ 上产生电压。

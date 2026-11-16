# 详细步骤 - R116

**思路。** $M_2$ 是一个共源级，以二极管连接的 PMOS $M_3$ 作为漏极负载，以二极管连接的 NMOS $M_1$ 作为源极负反馈。把每个二极管连接器件替换为它的小信号电阻，然后求解 $r_{O2}$ 为有限值时带源极负反馈的共源级。

### 第 1 步 — 小信号模型（small-signal model）

二极管连接晶体管满足 $v_{gs} = v_{ds}$，因此它就是电阻 $\frac{1}{g_m}\parallel r_O$。$V_{DD}$ 为交流地，且 $\gamma = 0$：

$$R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3} = \frac{r_{O3}}{1 + g_{m3}r_{O3}}\quad(\text{from out to ac ground}),$$

$$R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1} = \frac{r_{O1}}{1 + g_{m1}r_{O1}}\quad(\text{from } S \text{ to ground}),$$

其中 $S$ 为 $M_2$ 的源极。$M_2$ 的 $v_{gs2} = v_{in} - v_S$：受控源 $g_{m2}(v_{in} - v_S)$ 从 out（漏极）流向 $S$，$r_{O2}$ 接在 out 与 $S$ 之间。

<!-- diagram: diagram-01.cir -->

电路只有一条通路，因此同一小信号电流 $i$ **向下**流过 $R_D$、$M_2$ 和 $R_S$。

### 第 2 步 — 电流 $i$ 的方程

**源极节点：** $v_S = iR_S$。

**输出节点。** 电流 $i$ 经由上端接交流地的 $R_D$ 提供：

$$i = -\frac{v_{out}}{R_D}\quad\Longrightarrow\quad v_{out} = -iR_D.$$

**晶体管 $M_2$**（受控源电流加上 $r_{O2}$ 中的电流）：

$$i = g_{m2}(v_{in} - v_S) + \frac{v_{out} - v_S}{r_{O2}}.$$

### 第 3 步 — 求解增益

代入 $v_S = iR_S$ 和 $v_{out} = -iR_D$：

$$i = g_{m2}v_{in} - g_{m2}R_S\,i + \frac{-iR_D - iR_S}{r_{O2}}.$$

合并含 $i$ 的项，再乘以 $r_{O2}$：

$$i\left(1 + g_{m2}R_S + \frac{R_D + R_S}{r_{O2}}\right) = g_{m2}v_{in},$$

$$i\,(r_{O2} + g_{m2}r_{O2}R_S + R_D + R_S) = g_{m2}r_{O2}\,v_{in},$$

$$i = \frac{g_{m2}r_{O2}}{R_D + r_{O2} + R_S + g_{m2}r_{O2}R_S}\,v_{in}.$$

由 $v_{out} = -iR_D$ 得：

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m2}r_{O2}R_D}{R_D + r_{O2} + R_S + g_{m2}r_{O2}R_S},\qquad R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3},\quad R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1}.$$

**验证。** 当 $R_S = 0$ 时，上式变为 $-g_{m2}r_{O2}R_D/(R_D + r_{O2}) = -g_{m2}(r_{O2}\parallel R_D)$，即普通共源级的增益。✓

### 第 4 步 — 完全展开形式（选读）

代入 $R_D = r_{O3}/(1 + g_{m3}r_{O3})$ 和 $R_S = r_{O1}/(1 + g_{m1}r_{O1})$，并将分子和分母同乘 $(1 + g_{m3}r_{O3})(1 + g_{m1}r_{O1})$。分子变为

$$-g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1}),$$

分母逐项变为

$$
\begin{aligned}
R_D(\dots) &\to r_{O3}(1 + g_{m1}r_{O1}) = r_{O3} + g_{m1}r_{O1}r_{O3},\\
r_{O2}(\dots) &\to r_{O2}(1 + g_{m3}r_{O3})(1 + g_{m1}r_{O1}) = r_{O2} + g_{m1}r_{O1}r_{O2} + g_{m3}r_{O2}r_{O3} + g_{m1}g_{m3}r_{O1}r_{O2}r_{O3},\\
R_S(1 + g_{m2}r_{O2})(\dots) &\to r_{O1}(1 + g_{m2}r_{O2})(1 + g_{m3}r_{O3}) = r_{O1} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + g_{m2}g_{m3}r_{O1}r_{O2}r_{O3}.
\end{aligned}
$$

求和得

$$A_v = -\frac{g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})}{D},$$

$$D = r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}r_{O2} + g_{m1}r_{O1}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + g_{m3}r_{O2}r_{O3} + (g_{m1} + g_{m2})g_{m3}r_{O1}r_{O2}r_{O3}.$$

### 第 5 步 — 大 $r_O$ 近似与直观理解

若每个器件都满足 $g_mr_O \gg 1$，则 $R_D \approx 1/g_{m3}$，$R_S \approx 1/g_{m1}$，且 $R_D + R_S$ 相对于 $r_{O2}$ 可以忽略。将第 3 步结果的分子和分母同除以 $r_{O2}$，并略去 $(R_D + R_S)/r_{O2}$：

$$A_v \approx -\frac{g_{m2}R_D}{1 + g_{m2}R_S} \approx -\frac{g_{m2}/g_{m3}}{1 + g_{m2}/g_{m1}} = -\frac{g_{m1}g_{m2}}{g_{m3}(g_{m1} + g_{m2})}.$$

**直观理解。** 输入端看到的是 $1/g_{m2}$（从 $M_2$ 源极看进去）与 $1/g_{m1}$ 的串联，因此信号电流为 $v_{in}/(1/g_{m2} + 1/g_{m1})$，它流过负载 $1/g_{m3}$ 产生输出电压。源极负反馈使二极管负载下的增益 $-g_{m2}/g_{m3}$ 降低了 $1 + g_{m2}/g_{m1}$ 倍；当 $g_{m1} = g_{m2} = g_{m3}$ 时，增益仅约为 $-1/2$。

### 结果

$$A_v = -\frac{g_{m2}r_{O2}R_D}{R_D + r_{O2} + R_S + g_{m2}r_{O2}R_S},\qquad R_D = \frac{1}{g_{m3}}\,\Big\|\,r_{O3},\quad R_S = \frac{1}{g_{m1}}\,\Big\|\,r_{O1},$$

等价地，$A_v = -g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})/D$，其中 $D$ 见第 4 步。当 $r_O$ 很大时：

$$A_v \approx -\frac{g_{m1}g_{m2}}{g_{m3}(g_{m1} + g_{m2})}.$$

**常见错误。** 忽略 $M_1$ 引入的源极负反馈，写成 $A_v \approx -g_{m2}/g_{m3}$。$M_2$ 的源极接在 $1/g_{m1}$ 上，它与 $1/g_{m2}$ 相当，会使增益降低 $1 + g_{m2}/g_{m1}$ 倍（各 $g_m$ 相等时为 2 倍）。

**常见错误。** 把二极管连接器件仅用 $r_O$ 代替，仿佛它们是电流源（current source）。由于 $v_{gs} = v_{ds}$，每个器件都是一个小电阻 $\frac{1}{g_m}\parallel r_O$。

**常见错误。** 得出正增益，或者把输出取在 $M_2$ 的源极。输出端是漏极：$v_{in}$ 升高时，流过 $M_3$ 的电流增大，因此 $v_{out}$ 下降。

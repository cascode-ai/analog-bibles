# 详细步骤 - R304

**思路。** $M_1$ 和 $M_2$ 构成一个 CMOS 反相器，输入为公共栅极（节点 A），输出为公共漏极（输出端）。当 $\lambda = 0$ 时，它只是一个跨导（transconductance）$g_m = g_{m1} + g_{m2}$，没有输出电阻。在 A 点和输出端列 KCL 方程，推导出完整的传递函数，再取 $s\to0$ 和 $s\to\infty$ 的极限。

### 第 1 步 — 小信号模型（small-signal model）

把公共栅极节点记为 A；两个晶体管都处于饱和区，A 偏置在反相器的翻转点（trip point）附近。地和 $V_{DD}$ 都是交流地，因此两个晶体管都有 $v_{gs} = V_A$：$M_1$ 从输出端向交流地吸取 $g_{m1}V_A$，$M_2$ 从输出端向交流地吸取 $g_{m2}V_A$（A 升高时，$M_1$ 下拉更强，$M_2$ 上拉更弱）。由于没有 $r_O$，反相器就是一个单一的跨导

$$g_m = g_{m1} + g_{m2}$$

它从输出端吸取 $g_mV_A$，输出端没有电阻。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 同一电流流过 $C_1$、$C_2$ 和晶体管

栅极不吸取电流，因此 A 点的 KCL 给出

$$(V_{in} - V_A)\,C_1s = (V_A - V_{out})\,C_2s . \qquad (1)$$

在输出端，流过 $C_2$ 的电流只能经晶体管流出（没有 $r_O$，也没有接其他元件）：

$$(V_A - V_{out})\,C_2s = g_mV_A . \qquad (2)$$

因此，同一个电流 $g_mV_A$ 依次串联流过 $C_1$、$C_2$ 和晶体管。

### 第 3 步 — 求解 $V_A$ 和 $V_{out}$

由式 (1) 和式 (2)，流过 $C_1$ 的电流等于 $g_mV_A$：

$$
\begin{aligned}
(V_{in} - V_A)\,C_1s &= g_mV_A\\
V_{in}C_1s &= V_A(C_1s + g_m)\\
V_A &= V_{in}\,\frac{C_1s}{C_1s + g_m}.
\end{aligned}
$$

由式 (2)，$C_2$ 两端的电压为 $g_mV_A/(C_2s)$，因此

$$V_{out} = V_A - \frac{g_mV_A}{C_2s} = V_A\,\frac{C_2s - g_m}{C_2s}.$$

代入 $V_A$：

$$
\begin{aligned}
V_{out} &= V_{in}\,\frac{C_1s}{C_1s + g_m}\cdot\frac{C_2s - g_m}{C_2s}\\
\frac{V_{out}}{V_{in}}(s) &= \frac{C_1}{C_2}\cdot\frac{C_2s - g_m}{C_1s + g_m}, \qquad g_m = g_{m1} + g_{m2},
\end{aligned}
$$

其极点位于 $s = -g_m/C_1$（左半平面），零点位于 $s = +g_m/C_2$（右半平面）；该零点来自经 $C_2$ 的前馈（feedforward）。

### 第 4 步 — 极低频

当 $s\to0$ 时，$C_2s - g_m\to -g_m$，$C_1s + g_m\to g_m$：

$$\frac{V_{out}}{V_{in}}\bigg|_{s\to0} = \frac{C_1}{C_2}\cdot\frac{-g_m}{g_m} = -\frac{C_1}{C_2}.$$

当 $\lambda = 0$ 时，反相器的增益为无穷大，而 $C_2$ 在其周围闭合了一个负反馈环路，因此 A 是**虚地**（$V_A = V_{in}C_1s/(C_1s + g_m)\to0$）。输入电流 $V_{in}C_1s$ 流过 $C_2$，得到 $V_{out} = -V_{in}C_1s/(C_2s) = -(C_1/C_2)V_{in}$，即 $-Z_{C2}/Z_{C1}$。

### 第 5 步 — 极高频

当 $s\to\infty$ 时，$C_2s - g_m\to C_2s$，$C_1s + g_m\to C_1s$：

$$\frac{V_{out}}{V_{in}}\bigg|_{s\to\infty} = \frac{C_1}{C_2}\cdot\frac{C_2s}{C_1s} = +1 .$$

串联电流至多等于有限的晶体管电流 $g_mV_A$，它在极小的阻抗 $1/(Cs)$ 上产生的压降可以忽略。由于输出端没有其他负载，电容把输入直接传到输出：$V_{out} = V_A = V_{in}$。

### 第 6 步 — 两个极限之间的过渡

令 $s = j\omega$，

$$\left|\frac{V_{out}}{V_{in}}\right| = \frac{C_1}{C_2}\sqrt{\frac{g_m^2 + C_2^2\omega^2}{g_m^2 + C_1^2\omega^2}},$$

它从 $C_1/C_2$（$\omega\ll g_m/C_1, g_m/C_2$ 时）变化到 1（$\omega\gg g_m/C_1, g_m/C_2$ 时），而相位从 $180^\circ$（反相）变化到 $0^\circ$。例如，当 $C_1 = 2C_2$ 时，增益从低频的 $-2$ 变为高频的 $+1$。当 $C_1 = C_2$ 时，幅值在所有频率下都恰好为 1：这是一个只有相位变化的全通网络（all-pass network）。

### 结果

$$\frac{V_{out}}{V_{in}}(s) = \frac{C_1}{C_2}\cdot\frac{C_2s - (g_{m1} + g_{m2})}{C_1s + (g_{m1} + g_{m2})}$$

- **极低频：** $V_{out}/V_{in} = -C_1/C_2$（由于 $\lambda = 0$ 时反相器增益为无穷大，节点 A 是虚地）。
- **极高频：** $V_{out}/V_{in} = +1$（与电容电流相比，晶体管电流可以忽略，且输出端没有其他负载）。

**常见错误。** 把反相器的开环增益（open-loop gain）$-(g_{m1} + g_{m2})r_O$ 或“无穷大”当作低频增益。$C_2$ 在反相器周围构成负反馈，因此当开环增益为无穷大时，闭环增益（closed-loop gain）等于电容之比 $-C_1/C_2$。

**常见错误。** 认为高频增益为 0（输出被短路）、$C_1/(C_1 + C_2)$（对地的电容分压）或 $-1$。输出端到地之间没有电容，因此 $C_2$ 中唯一的电流就是有限的晶体管电流，于是 $V_{out}$ 跟随 $V_A$，后者又跟随 $V_{in}$：增益为 $+1$。

**常见错误。** 把 $M_2$ 当作无源的电流源（current source）负载（只保留 $g_{m1}$）。它的栅极接节点 A，因此它贡献 $g_{m2}$；当 $\lambda = 0$ 时，这不改变两个极限值，但决定了极点和零点：$-(g_{m1} + g_{m2})/C_1$ 和 $+(g_{m1} + g_{m2})/C_2$。

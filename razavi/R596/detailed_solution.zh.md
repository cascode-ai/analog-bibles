# 详细步骤 - R596

**思路。** 稳态时共模环路必须使 $M_5$ 恰好流过 PMOS 负载提供的电流，而该电流由 $V_b$ 固定，因此 $V_{GS5} = V_X$ 不能永久改变。$S_1$ 断开后 X 浮空，因此注入的电荷 $\Delta q$ 必须留在与 X 相连的电容上。两者结合，电荷只能存储在 $C_1$ 和 $C_2$ 上，从而使输出共模电平移动；计入环路增益（loop gain）的电荷守恒方程证实了这一点。

### 第 1 步 — 共模环路保持什么不变

负载管 $M_3$、$M_4$（栅极接固定的 $V_b$）提供 $I_{D3} + I_{D4}$，稳态时这些电流必须全部流过 $M_1$、$M_2$ 和尾电流管：

$$I_{D5} = I_{D3} + I_{D4}.$$

$I_{D5}$ 由 $V_{GS5} = V_X$ 决定，因此稳定之后 $V_X$ 必须回到注入之前的值。否则电流失配会不断给输出节点充电，环路会一直移动输出，直到 $V_X$ 恢复。

### 第 2 步 — 注入的电荷去了哪里

$S_1$ 断开后，X 只与 $C_1$（接 $V_{out1}$）、$C_2$（接 $V_{out2}$）和 $C_{GS5}$（接地）相连，因此其总电荷只改变 $\Delta q$。由于 $C_1 = C_2$，差模输出变化没有贡献，只有共模变化进入方程：

$$C_1(\Delta V_X - \Delta V_{out,CM}) + C_2(\Delta V_X - \Delta V_{out,CM}) + C_{GS5}\,\Delta V_X = \Delta q,$$

即

$$(C_1 + C_2)(\Delta V_X - \Delta V_{out,CM}) + C_{GS5}\,\Delta V_X = \Delta q .$$

### 第 3 步 — 由上述两点得出稳态结果

稳定后 $\Delta V_X = 0$（第 1 步）：

$$
\begin{aligned}
(C_1 + C_2)(0 - \Delta V_{out,CM}) + 0 &= \Delta q\\
\Delta V_{out,CM} &= -\frac{\Delta q}{C_1 + C_2}.
\end{aligned}
$$

电荷不能停留在 $C_{GS5}$ 上（否则会改变 $V_X$），因此它位于 $C_1$ 和 $C_2$ 上，使它们存储的电压改变 $\Delta q/(C_1 + C_2)$，移动的是输出而不是 X。

**符号。** $S_1$ 是 NMOS 开关，注入的是电子，$\Delta q < 0$，因此输出共模电平**升高**：

$$\Delta V_{out,CM} = +\frac{|\Delta q|}{C_1 + C_2},$$

当 $C_1 = C_2 = C$ 时即为 $|\Delta q|/(2C)$。

### 第 4 步 — 计入有限的环路增益

$\Delta V_X$ 的变化使尾电流改变 $g_{m5}\Delta V_X$，这一电流由 $M_1$、$M_2$ 从输出节点吸取——对共模信号而言它们是共栅级（common-gate stage）——而输出节点的共模电阻由 $r_{O3}$ 和 $r_{O4}$ 决定：

$$\Delta V_{out,CM} = -A_{CM}\,\Delta V_X, \qquad A_{CM} \approx g_{m5}\,(r_{O3}\parallel r_{O4}).$$

<!-- diagram: diagram-01.cir -->

代入第 2 步的电荷方程：

$$
\begin{aligned}
(C_1 + C_2)(\Delta V_X + A_{CM}\Delta V_X) + C_{GS5}\,\Delta V_X &= \Delta q\\
\Delta V_X\left[(C_1 + C_2)(1 + A_{CM}) + C_{GS5}\right] &= \Delta q\\
\Delta V_X &= \frac{\Delta q}{(C_1 + C_2)(1 + A_{CM}) + C_{GS5}},\\
\Delta V_{out,CM} = -A_{CM}\,\Delta V_X &= -\frac{\Delta q}{(C_1 + C_2)\,\dfrac{1 + A_{CM}}{A_{CM}} + \dfrac{C_{GS5}}{A_{CM}}}.
\end{aligned}
$$

当环路增益很大时（$A_{CM} \gg 1$ 且 $A_{CM}(C_1 + C_2) \gg C_{GS5}$）：

$$\Delta V_X \approx \frac{\Delta q}{A_{CM}(C_1 + C_2)} \approx 0, \qquad \Delta V_{out,CM} \approx -\frac{\Delta q}{C_1 + C_2},$$

这与第 3 步一致；$M_5$ 栅极上的残余变化比输出的移动小 $A_{CM}$ 倍。

### 第 5 步 — 暂态过程

1. **$S_1$ 刚断开时**，环路尚未响应，输出还没有移动，因此 X 跳变约
$$\Delta V_X(0^+) \approx \frac{\Delta q}{C_1 + C_2 + C_{GS5}}$$
（对于电子而言是向下跳变）。
2. **环路响应。** 降低的 $V_X$ 使 $I_{D5}$ 小于负载电流；多余的负载电流把两个输出向上充电，而输出又通过 $C_1$ 和 $C_2$ 把 X 拉回上方。
3. **建立。** 当 $V_X$ 再次使 $I_{D5} = I_{D3} + I_{D4}$ 时，输出停止移动，此时它们已升高 $|\Delta q|/(C_1 + C_2)$。

栅极电压的跳变是暂时的；持久的影响是输出共模电平的移动。

### 结果

电路稳定之后：

- **$M_5$ 的栅极：** 基本**不变**。共模环路使 $V_{GS5}$ 恢复，因为 $M_5$ 必须再次流过由 $V_b$ 设定的负载电流；只剩下很小的残余 $\Delta V_X = \Delta q/[(C_1 + C_2)(1 + A_{CM}) + C_{GS5}] \approx 0$，其中 $A_{CM} \approx g_{m5}(r_{O3}\parallel r_{O4})$。
- **输出共模电平：**
$$\Delta V_{out,CM} \approx -\frac{\Delta q}{C_1 + C_2}\quad\left(= -\frac{\Delta q}{2C}\ \text{for}\ C_1 = C_2 = C\right).$$
对于 NMOS 开关，$\Delta q$ 为负（电子），因此输出共模电平**升高** $|\Delta q|/(C_1 + C_2)$。

**常见错误。** 认为 $M_5$ 的栅极永久移动了 $\Delta q/(C_1 + C_2)$，而输出共模电平保持不变。那样会在负载电流固定的情况下改变尾电流，这不可能是稳态。

**常见错误。** 答成 $\Delta q/C_{GS5}$（电荷最终并不在 $C_{GS5}$ 上）或 $A_{CM}\Delta q/(C_1 + C_2)$（环路抑制的是 X 处的变化，而不是放大输出的移动）。$\Delta q/(C_1 + C_2 + C_{GS5})$ 只是环路响应之前 X 的初始跳变。

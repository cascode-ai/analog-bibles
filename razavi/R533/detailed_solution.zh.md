# 详细步骤 - R533

**思路。** 在单端半边电路中，零点就是输入不为零而输出为零时的频率。在输出端的 KCL 中令 $V_{out} = 0$，一行即可求出零点；再由 X 点和输出端的 KCL 求出完整的闭环传递函数，以验证零点及其所在的半平面。

### 第 1 步 — 半边电路与模型

输入经 $C_1$ 驱动 X，$C_2$ 连接 X 与输出端，输出节点上接有运放的 $G_mV_X$（流向地，因此运放是反相的：低频时 $V_{out}/V_X = -G_mR_{out}$）、$R_{out}$ 和 $C_L$。运放输入端不吸取电流。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 由提示（$V_{out} = 0$）求零点

当 $V_{out} = 0$ 时，$R_{out}$ 和 $C_L$ 中没有电流，经 $C_2$ 流入的电流为 $sC_2(V_X - V_{out}) = sC_2V_X$，而电流源抽走 $G_mV_X$。输出端的 KCL：

$$sC_2V_X = G_mV_X .$$

由于 $V_X \ne 0$（在 $V_{out} = 0$ 时，X 点的 KCL 给出 $V_X = V_{in}\,C_1/(C_1 + C_2)$），

$$s_z = +\frac{G_m}{C_2} ,$$

这是一个位于 $\omega_z = G_m/C_2$ 的**正实数**（右半平面）零点。X 点的信号经两条路径到达输出端：一条经过运放，运放从输出端**抽走** $G_mV_X$；另一条直接经过 $C_2$，它向输出端**注入** $sC_2V_X$；在 $s = G_m/C_2$ 处二者相互抵消。零点位置只取决于 $G_m$ 和 $C_2$，与 $C_1$、$C_L$ 或 $R_{out}$ 无关。

### 第 3 步 — 完整传递函数：X 点的 KCL

$$(V_{in} - V_X)\,sC_1 = (V_X - V_{out})\,sC_2
\quad\Longrightarrow\quad V_X(C_1 + C_2) = C_1V_{in} + C_2V_{out}\quad\Longrightarrow\quad V_X = \frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}. \tag{1}$$

### 第 4 步 — 完整传递函数：输出端的 KCL

经 $C_2$ 流入的电流从电流源、$R_{out}$ 和 $C_L$ 流出：

$$(V_X - V_{out})\,sC_2 = G_mV_X + V_{out}\left(\frac{1}{R_{out}} + sC_L\right)
\quad\Longrightarrow\quad
V_X\,(sC_2 - G_m) = V_{out}\left(\frac{1}{R_{out}} + sC_L + sC_2\right). \tag{2}$$

### 第 5 步 — 联立求解

将式 (1) 代入式 (2)，并两边乘以 $(C_1 + C_2)$：

$$(C_1V_{in} + C_2V_{out})(sC_2 - G_m) = V_{out}(C_1 + C_2)\left(\frac{1}{R_{out}} + sC_L + sC_2\right),$$

$$C_1V_{in}(sC_2 - G_m) = V_{out}\left[(C_1 + C_2)\left(\frac{1}{R_{out}} + sC_L + sC_2\right) - C_2(sC_2 - G_m)\right].$$

方括号中的 $sC_2^2$ 项相消：

$$
\begin{aligned}
[\ldots] &= \frac{C_1 + C_2}{R_{out}} + s(C_1 + C_2)C_L + sC_1C_2 + sC_2^2 - sC_2^2 + G_mC_2\\
&= G_mC_2 + \frac{C_1 + C_2}{R_{out}} + s\left[C_L(C_1 + C_2) + C_1C_2\right].
\end{aligned}
$$

因此

$$\boxed{\frac{V_{out}}{V_{in}} = -\frac{C_1\,(G_m - sC_2)}{G_mC_2 + \dfrac{C_1 + C_2}{R_{out}} + s\left[C_L(C_1 + C_2) + C_1C_2\right]}}$$

### 第 6 步 — 读出零点、直流增益和极点

**零点：** 由 $G_m - sC_2 = 0$ 得 $s_z = +G_m/C_2$，与第 2 步一致；分子因子为 $(1 - s/\omega_z)$，即右半平面零点。

**直流增益：** 在 $s = 0$ 时，分子分母同除以 $G_mC_2$，

$$\frac{V_{out}}{V_{in}}\bigg|_{s=0} = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{C_1 + C_2}{C_2\,G_mR_{out}}} \approx -\frac{C_1}{C_2},$$

这就是电容放大器的增益，因运放增益 $G_mR_{out}$ 有限而略有减小。

**极点：** $s_p = -\dfrac{G_mC_2 + (C_1 + C_2)/R_{out}}{C_L(C_1 + C_2) + C_1C_2} \approx -\dfrac{G_m\,\beta}{C_L + C_1C_2/(C_1 + C_2)}$，其中 $\beta = C_2/(C_1 + C_2)$。忽略很小的 $1/R_{out}$ 项，

$$\left|\frac{s_z}{s_p}\right| \approx \frac{G_m}{C_2}\cdot\frac{C_L(C_1 + C_2) + C_1C_2}{G_mC_2} = \frac{C_L(C_1 + C_2) + C_1C_2}{C_2^2},$$

它很大（例如 $C_1 = 4C_2$、$C_L = C_2$ 时为 9），因此零点远高于闭环带宽（closed-loop bandwidth），在那里它会增加相位滞后。X 点的运放输入电容会改变式 (1) 和极点，但不会改变第 2 步中输出节点的条件，因此零点仍位于 $G_m/C_2$。

### 结果

闭环传递函数有一个**右半平面零点**，位于

$$s_z = +\frac{G_m}{C_2},\qquad \omega_z = \frac{G_m}{C_2},$$

与 $C_1$、$C_L$ 和 $R_{out}$ 无关。在该频率处，经 $C_2$ 的前馈电流 $sC_2V_X$ 恰好等于运放的电流 $G_mV_X$，因此没有电流留给 $R_{out}$ 和 $C_L$，$V_{out} = 0$。完整结果为

$$\frac{V_{out}}{V_{in}} = -\frac{C_1(G_m - sC_2)}{G_mC_2 + (C_1 + C_2)/R_{out} + s\left[C_L(C_1 + C_2) + C_1C_2\right]} .$$

**常见错误。** 把零点放在左半平面。经 $C_2$ 的前馈通路是同相的，而运放通路是反相的，因此二者在一个**正**实数 $s$ 处抵消：分子为 $G_m - sC_2$。

**常见错误。** 得到 $G_m/(C_1 + C_2)$、$G_m/C_L$ 或 $G_m/C_1$。只有 $C_2$ 直接连接 X 与输出端；在零点处 $C_L$ 中没有电流，而 $C_1$ 只决定 $V_X$。

**常见错误。** 因为运放模型本身没有零点，就回答“没有零点”。零点是由跨接在运放输入端与输出端之间的反馈电容产生的。

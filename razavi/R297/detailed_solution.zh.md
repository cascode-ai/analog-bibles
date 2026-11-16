# 详细步骤 - R297

**思路。** 该电路由共栅（CG）级 $M_1$ 后接共源（common-source，CS）级 $M_2$ 构成，两级的负载都是理想电流源，且 $\lambda = 0$。把每个电容放到它所在的节点上，然后在输入节点、X 和输出节点列基尔霍夫电流定律（KCL）方程并精确求解。由于 $\lambda = 0$，输入节点与电路其余部分解耦，因此其极点是精确的。X 和输出节点都没有到地的电阻性通路，因此“每个节点一个极点”的方法在这里失效：精确解给出一个位于原点的极点和一个有限的、经过分裂的极点。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 的源极称为节点 **S**，其漏极称为节点 **X**。$M_1$ 的栅极（$V_b$）、地和 $V_{DD}$ 都是交流地，衬底接地，因此 $C_{GS1}$ 和 $C_{SB1}$ 是 S 的负载；$C_{GD1}$、$C_{DB1}$ 和 $C_{GS2}$ 是 X 的负载；$C_{GD2}$ **跨接**在 X 与输出端之间；$C_{DB2}$ 是输出端的负载；$C_{SB2}$（两端都接地）不起作用：

$$C_S = C_{GS1} + C_{SB1}, \qquad C_X = C_{GD1} + C_{DB1} + C_{GS2}.$$

$M_1$ 的栅极和衬底都处于交流地，因此 $v_{gs1} = v_{bs1} = -V_S$，且

$$i_{d1} = g_{m1}v_{gs1} + g_{mb1}v_{bs1} = -(g_{m1} + g_{mb1})V_S .$$

**注入 X 点**的电流为 $I = -i_{d1} = (g_{m1} + g_{mb1})V_S$，由于 $\lambda = 0$，它与 $V_X$ 无关。$I_1$、$I_2$ 开路且没有 $r_O$，因此 X 点只看到 $C_X$ 和 $C_{GD2}$，输出端看到 $g_{m2}V_X$、$C_{DB2}$ 和 $C_{GD2}$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 输入极点（精确）

S 点的 KCL：

$$\frac{V_{in} - V_S}{R_S} = V_SC_Ss + (g_{m1} + g_{mb1})V_S .$$

两边乘以 $R_S$ 并合并 $V_S$ 项：

$$V_{in} = V_S\left[1 + (g_{m1} + g_{mb1})R_S + R_SC_Ss\right],\qquad \frac{V_S}{V_{in}} = \frac{1}{1 + (g_{m1} + g_{mb1})R_S + R_SC_Ss},$$

它只有一个极点：

$$\omega_{in} = \frac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})} = \frac{1}{\left(R_S\parallel\dfrac{1}{g_{m1} + g_{mb1}}\right)(C_{GS1} + C_{SB1})}.$$

该结果是精确的，因为 $\lambda = 0$ 时，X 点和输出端的任何信号都不会反馈到 S。S 点看到的是 $R_S$ 与共栅输入电阻 $1/(g_{m1} + g_{mb1})$ 的并联。

### 第 3 步 — X 点与输出端的 KCL

在 X 点，$I_1$ 是理想的，$M_1$ 没有 $r_O$，$M_2$ 的栅极开路，因此 $R_X = \infty$；在输出端，$I_2$ 是理想的，$M_2$ 没有 $r_O$，因此 $R_{out} = \infty$。若机械地套用“每个节点一个极点”，会在原点得到**两个**极点；但 $C_{GD2}$ 是跨接在 $M_2$ 两端的反馈电容，它把两个节点耦合在一起，因此必须联立求解。

**输出端的 KCL**（以流出节点的电流为正）：

$$(V_{out} - V_X)C_{GD2}s + g_{m2}V_X + V_{out}C_{DB2}s = 0,$$

$$V_{out}(C_{GD2} + C_{DB2})s = V_X(C_{GD2}s - g_{m2}),\qquad V_{out} = V_X\,\frac{C_{GD2}s - g_{m2}}{(C_{GD2} + C_{DB2})s}. \qquad (1)$$

**X 点的 KCL**（$I$ 流入，由电容将其带走）：

$$I = V_XC_Xs + (V_X - V_{out})C_{GD2}s = V_X(C_X + C_{GD2})s - V_{out}C_{GD2}s .$$

代入式 (1)，并约去最后一项中的一个因子 $s$：

$$I = V_X\left[(C_X + C_{GD2})s - \frac{C_{GD2}(C_{GD2}s - g_{m2})}{C_{GD2} + C_{DB2}}\right].$$

两边乘以 $(C_{GD2} + C_{DB2})$ 并展开：

$$
\begin{aligned}
I\,(C_{GD2} + C_{DB2}) &= V_X\left[(C_X + C_{GD2})(C_{GD2} + C_{DB2})s - C_{GD2}^2s + g_{m2}C_{GD2}\right]\\
&= V_X\left[(C_XC_{GD2} + C_XC_{DB2} + C_{GD2}^2 + C_{GD2}C_{DB2} - C_{GD2}^2)s + g_{m2}C_{GD2}\right]\\
&= V_X\left[\xi s + g_{m2}C_{GD2}\right],
\end{aligned}
$$

其中

$$\xi = C_XC_{GD2} + C_XC_{DB2} + C_{GD2}C_{DB2}.$$

因此

$$V_X = I\,\frac{C_{GD2} + C_{DB2}}{\xi s + g_{m2}C_{GD2}}.$$

代入式 (1)，因子 $(C_{GD2} + C_{DB2})$ 被约去：

$$\frac{V_{out}}{I} = \frac{C_{GD2}s - g_{m2}}{s\left(\xi s + g_{m2}C_{GD2}\right)} = -\frac{g_{m2} - C_{GD2}s}{s\left[g_{m2}C_{GD2} + \xi s\right]}.$$

### 第 4 步 — 完整的传递函数、极点与零点

把 $V_{out}/I$ 乘以由第 2 步得到的 $I/V_{in} = (g_{m1} + g_{mb1})\,V_S/V_{in}$：

$$\frac{V_{out}}{V_{in}} = \frac{-(g_{m1} + g_{mb1})(g_{m2} - C_{GD2}s)}{\left[1 + (g_{m1} + g_{mb1})R_S + R_S(C_{GS1} + C_{SB1})s\right]\,s\,\left[g_{m2}C_{GD2} + (C_XC_{DB2} + C_XC_{GD2} + C_{GD2}C_{DB2})s\right]}.$$

分母的根为：

1. **输入极点：** $\omega_{in} = \dfrac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})}$。
2. **一个位于原点的极点**，$s = 0$。
3. **一个有限极点**，来自第二个方括号：
$$\omega_2 = \frac{g_{m2}C_{GD2}}{C_XC_{DB2} + (C_X + C_{DB2})C_{GD2}}, \qquad C_X = C_{GD1} + C_{DB1} + C_{GS2}.$$

分子给出一个位于 $s = +g_{m2}/C_{GD2}$ 的**右半平面零点**（right-half-plane zero），它来自经 $C_{GD2}$ 的前馈（feedforward）。

### 第 5 步 — 结果解读

**原点处只有一个极点。** 跨接了 $C_{GD2}$ 的 $M_2$ 构成**密勒积分器**：电流 $I$ 经 $C_{GD2}$ 流入输出端，而 $V_X$ 稳定在使 $M_2$ 恰好吸收这一电流的有限值上。低频时，

$$\frac{V_{out}}{V_{in}} \approx -\frac{g_{m1} + g_{mb1}}{1 + (g_{m1} + g_{mb1})R_S}\cdot\frac{1}{C_{GD2}s},$$

即只积分一次。

**有限极点是“分裂”出来的极点。** $\omega_2$ 中含有 $g_{m2}$，却不含输出电阻：在高频时，$C_{GD2}$ 实际上把 $M_2$ 接成二极管连接（diode-connected）形式，这与具有大密勒电容的 CS 级相同。

**什么会使原点处的极点移动。** 只要 X 或输出端中有一个缺少到地的电阻性通路，该极点就一直位于 $s = 0$。若 $r_O$ 有限（λ ≠ 0），两个节点都有了电阻性通路，直流增益变为有限值，该极点就移到一个很低但非零的频率处。

### 结果

$$\omega_{in} = \frac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})},\qquad \omega = 0,\qquad \omega_2 = \frac{g_{m2}C_{GD2}}{C_XC_{DB2} + (C_X + C_{DB2})C_{GD2}},$$

其中 $C_X = C_{GD1} + C_{DB1} + C_{GS2}$；另有一个位于 $+g_{m2}/C_{GD2}$ 的右半平面零点。精确的传递函数为

$$\frac{V_{out}}{V_{in}} = \frac{-(g_{m1} + g_{mb1})(g_{m2} - C_{GD2}s)}{\left[1 + (g_{m1} + g_{mb1})R_S + R_S(C_{GS1} + C_{SB1})s\right]s\left[g_{m2}C_{GD2} + (C_XC_{DB2} + C_XC_{GD2} + C_{GD2}C_{DB2})s\right]}.$$

**常见错误。** 把输入电阻只取为 $R_S$，或取为 $R_S + 1/g_{m1}$。S 点到地有两条通路：一条经 $R_S$，另一条进入共栅输入端 $1/(g_{m1} + g_{mb1})$，二者是**并联**的；因此输入极点中出现因子 $1 + (g_{m1} + g_{mb1})R_S$。

**常见错误。** 因为 X 和输出端对地电阻都是无穷大，就断言原点处有两个极点。跨接在 $M_2$ 两端的 $C_{GD2}$ 使这两个节点构成密勒积分器，只积分一次；第二个极点是有限的。

**常见错误。** 把 $M_1$ 当作共源级。它的栅极接固定偏置 $V_b$，信号从源极输入，因此它是共栅级，输入阻抗低，电流增益为同相。

# 详细步骤 - R557

**思路。** 记下第一个相位结束时的节点电压和电容电荷。开关切换后，反相输入端节点变为浮空，其电荷守恒，同时理想运放使它保持等于 $V_X$。在该节点应用电荷守恒，就能用 $V_X$ 的阶跃（即电流从 $I_1$ 增加到 $I_1 + I_2$ 时 $V_{EB}$ 的变化）表示输出的阶跃。

### 第 1 步 — 第一个相位结束时的状态（$S_1$ 导通，$S_2$ 断开）

把运放的反相输入端节点称为 N；它经 $C_2$ 接地，并经 $C_1$ 和 $S_1$ 两者接到 $V_{out}$。$Q_1$ 只流过 $I_1$，因此

$$V_X = V_{EB}(I_1) = V_T\ln\frac{I_1}{I_S},$$

并且运放是单位增益跟随器（unity-gain follower）：$V_N = V_{out} = V_X = V_{EB}(I_1)$。$C_1$ 被短路（$V_{C1} = 0$），$C_2$ 上保持 $V_{EB}(I_1)$，因此 N 处各极板上的总电荷为

$$Q_N = C_2(V_N - 0) + C_1(V_N - V_{out}) = C_2V_{EB}(I_1) + 0 .$$

### 第 2 步 — $S_2$ 导通时 $V_X$ 的阶跃

此时 $Q_1$ 流过 $I_1 + I_2$，因此

$$V_X' = V_{EB}(I_1 + I_2) = V_T\ln\frac{I_1 + I_2}{I_S},$$

$$
\begin{aligned}
\Delta V_{EB} = V_X' - V_X &= V_T\ln\frac{I_1 + I_2}{I_S} - V_T\ln\frac{I_1}{I_S}\\
&= V_T\ln\frac{I_1 + I_2}{I_1}\\
&= V_T\ln\left(1 + \frac{I_2}{I_1}\right).
\end{aligned}
$$

这一与绝对温度成正比（PTAT）的电压只取决于 $V_T$ 和电流比；它取代了两个晶体管之间的 $\Delta V_{BE}$，“单结”之名即由此而来。

### 第 3 步 — 节点 N 处的电荷守恒

此时运放经 $C_1$ 构成负反馈，使 $V_N' = V_X'$，因此 N 阶跃上升 $\Delta V_{EB}$。$S_1$ 断开后，N 只与两个电容极板和运放输入端相连，因此 $Q_N$ **守恒**（忽略电荷注入）。设新的输出为 $V_{out}'$：

$$Q_N' = C_2V_X' + C_1(V_X' - V_{out}') = C_2V_{EB}(I_1).$$

减去用同样方式写出的第一相位电荷 $C_2V_X + C_1(V_X - V_{out})$（其中 $V_X = V_{out}$），并记 $\Delta V_{out} = V_{out}' - V_{out}$：

$$
\begin{aligned}
C_2\,\Delta V_{EB} + C_1\left(\Delta V_{EB} - \Delta V_{out}\right) &= 0\\
C_1\,\Delta V_{out} &= (C_1 + C_2)\,\Delta V_{EB}\\
\Delta V_{out} &= \left(1 + \frac{C_2}{C_1}\right)\Delta V_{EB}.
\end{aligned}
$$

代入第 2 步的 $\Delta V_{EB}$：

$$\Delta V_{out} = \left(1 + \frac{C_2}{C_1}\right)V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

两个因子都为正，因此**输出升高**。

### 第 4 步 — 解释与新的输出电平

$S_1$ 断开时，运放、$C_1$（从输出端到 − 输入端）和 $C_2$（从 − 输入端到地）构成一个同相放大器，对**变化量**的增益为 $1 + Z_{C1}/Z_{C2} = 1 + C_2/C_1$。它的输入是 X 处的阶跃 $\Delta V_{EB}$；原有的直流电平 $V_{EB}(I_1)$ 被 $C_2$“记住”，不会被放大。新的输出为

$$
\begin{aligned}
V_{out}' &= V_{out} + \Delta V_{out}\\
&= V_{EB}(I_1) + \Delta V_{EB} + \frac{C_2}{C_1}\Delta V_{EB}\\
&= V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right):
\end{aligned}
$$

这是一个只用单个晶体管得到的带隙电压：具有负温度系数（temperature coefficient）的 $V_{EB}$ 加上按比例放大的 PTAT 项。取 $\partial V_{EB}/\partial T \approx -1.5$ mV/K、$k/q \approx 0.087$ mV/K，零温度系数要求 $(C_2/C_1)\ln(1 + I_2/I_1) \approx 17.2$。

**示例数值**（题目中未给出）：取 $I_2 = 7I_1$、$C_2 = 8C_1$，300 K 时，

$$
\begin{aligned}
\Delta V_{EB} &= (25.85\ \mathrm{mV})\ln 8 = (25.85\ \mathrm{mV})(2.079) = 53.8\ \mathrm{mV},\\
\Delta V_{out} &= (1 + 8)(53.8\ \mathrm{mV}) = 484\ \mathrm{mV}.
\end{aligned}
$$

### 结果

$$\Delta V_{out} = \left(1 + \frac{C_2}{C_1}\right)V_T\ln\left(1 + \frac{I_2}{I_1}\right) \quad\text{(an increase)},$$

新的输出为

$$V_{out} = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

$S_2$ 导通时，$Q_1$ 流过 $I_1 + I_2$，因此 $V_X$ 升高 $\Delta V_{EB} = V_T\ln[(I_1 + I_2)/I_1]$。运放使节点 N 保持等于 $V_X$，而 $S_1$ 断开时 N 浮空，因此其电荷守恒：$C_2\Delta V_{EB} + C_1(\Delta V_{EB} - \Delta V_{out}) = 0$。由此得到同相增益 $1 + C_2/C_1$。

**常见错误。** 回答 $(C_2/C_1)\Delta V_{EB}$，这只是叠加在新 $V_{EB}$ 之上的额外项。输出还会跟随 X 本身的 $\Delta V_{EB}$ 阶跃，因此总变化量为 $(1 + C_2/C_1)\Delta V_{EB}$。

**常见错误。** 把该级当作增益为 $-C_2/C_1$ 的反相放大器，或者使用 $C_1/C_2$。阶跃加在**同相**输入端（X），而 $C_2$ 从反相输入端接地，因此增益为 $+(1 + C_2/C_1)$，反馈电容 $C_1$ 在分母上。

**常见错误。** 写成 $\Delta V_{EB} = V_T\ln(I_2/I_1)$。晶体管电流从 $I_1$ 变为 $I_1 + I_2$，因此比值为 $1 + I_2/I_1$。

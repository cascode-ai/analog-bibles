# 详细步骤 - R559

**思路。** 在运放反相输入端应用电荷守恒，求出任意电流比下相位 2 的输出。然后代入实际比值 $I_2/I_1 = r + \epsilon$，并把对数展开到 $\epsilon$ 的一阶项，从而把标称输出与误差分开。

### 第 1 步 — 任意电流比下相位 2 的输出

把运放的反相输入端节点称为 N；它经 $C_2$ 接地，并经 $C_1$ 和 $S_1$ 两者接到 $V_{out}$。

在相位 1，$Q_1$ 只流过 $I_1$，因此 $V_X = V_{EB}(I_1) = V_T\ln(I_1/I_S)$，跟随器使 $V_N = V_{out} = V_{EB}(I_1)$。$C_1$ 被短路，$C_2$ 存储 $V_{EB}(I_1)$，因此 N 上保持的电荷为 $Q_N = C_2V_{EB}(I_1)$。

在相位 2，$Q_1$ 流过 $I_1 + I_2$：

$$V_X' = V_{EB}(I_1 + I_2) = V_T\ln\frac{I_1 + I_2}{I_S},$$

$$V_X' - V_{EB}(I_1) = V_T\ln\frac{I_1 + I_2}{I_S} - V_T\ln\frac{I_1}{I_S} = V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

$I_S$ 被约去，但电流**比值**不会被约去，因此 $I_2/I_1$ 的任何误差都会直接进入这个 PTAT 阶跃。运放保持 $V_N' = V_X'$，而 $S_1$ 断开时 N 没有直流通路，因此其电荷守恒：

$$C_2V_X' + C_1\left(V_X' - V_{out}'\right) = C_2V_{EB}(I_1),$$

$$
\begin{aligned}
C_1V_{out}' &= C_2V_X' + C_1V_X' - C_2V_{EB}(I_1)\\
V_{out}' &= V_X' + \frac{C_2}{C_1}\left[V_X' - V_{EB}(I_1)\right]\\
&= V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).
\end{aligned}
$$

### 第 2 步 — 代入实际的电流比

由 $I_2 = (r + \epsilon)I_1$ 得 $I_1 + I_2 = I_1(1 + r + \epsilon)$，$1 + I_2/I_1 = 1 + r + \epsilon$，因此精确地有

$$V_{out} = V_T\ln\frac{I_1(1 + r + \epsilon)}{I_S} + \frac{C_2}{C_1}V_T\ln(1 + r + \epsilon).$$

比值误差出现了**两次**：一次在结电压中（晶体管流过的电流略有不同），另一次在被放大的 PTAT 项中。

### 第 3 步 — 关于 $\epsilon$ 的一阶展开

$$\ln(1 + r + \epsilon) = \ln\left[(1 + r)\left(1 + \frac{\epsilon}{1 + r}\right)\right] = \ln(1 + r) + \ln\left(1 + \frac{\epsilon}{1 + r}\right) \approx \ln(1 + r) + \frac{\epsilon}{1 + r}$$

这在 $|\epsilon| \ll 1 + r$ 时成立。把它用于两项：

$$
\begin{aligned}
V_{out} &\approx \left[V_T\ln\frac{I_1(1 + r)}{I_S} + V_T\frac{\epsilon}{1 + r}\right] + \frac{C_2}{C_1}\left[V_T\ln(1 + r) + V_T\frac{\epsilon}{1 + r}\right]\\
&= \underbrace{V_{EB}[I_1(1 + r)] + \frac{C_2}{C_1}V_T\ln(1 + r)}_{V_{out,nom}} + \underbrace{V_T\frac{\epsilon}{1 + r}}_{\text{change of }V_{EB}} + \underbrace{\frac{C_2}{C_1}V_T\frac{\epsilon}{1 + r}}_{\text{change of PTAT term}},
\end{aligned}
$$

$$V_{out} \approx V_{out,nom} + \left(1 + \frac{C_2}{C_1}\right)\frac{V_T\,\epsilon}{1 + r}.$$

X 处的阶跃 $\Delta V_{EB}$ 改变了 $V_T\epsilon/(1 + r)$，而开关电容（switched-capacitor）级把这一阶跃放大 $1 + C_2/C_1$ 倍。由于 $C_2/C_1$ 很大（零 TC 设计中约为 8），误差主要来自 PTAT 部分。

### 第 4 步 — 误差的大小与温度特性

**例。** 取 $r = 7$，零 TC 所需的比值 $C_2/C_1 \approx 17.4/\ln 8 \approx 8.4$，1 % 的绝对误差 $\epsilon = 0.01$，$T = 300$ K（$V_T = 25.85$ mV）：

$$
\begin{aligned}
\frac{V_T\,\epsilon}{1 + r} &= \frac{(25.85\ \mathrm{mV})(0.01)}{8} = 0.0323\ \mathrm{mV},\\
\Delta V_{out} &= (1 + 8.4)(0.0323\ \mathrm{mV}) = 0.30\ \mathrm{mV}.
\end{aligned}
$$

其中 0.27 mV 来自被放大的 PTAT 项，0.03 mV 来自 $V_{EB}$ 的变化：约为 1.2 V 基准电压的 250 ppm。

**对 TC 的影响。** 该误差与 $V_T$ 成正比（PTAT），因此它附加了

$$\frac{\partial(\Delta V_{out})}{\partial T} = \left(1 + \frac{C_2}{C_1}\right)\frac{k}{q}\cdot\frac{\epsilon}{1 + r} = 9.4\times(86.17\ \mu\mathrm{V/K})\times\frac{0.01}{8} \approx 1.0\ \mu\mathrm{V/K}.$$

考虑到带隙基准在室温附近约 −0.7 μV/K² 的曲率（curvature），这一残余斜率会使零 TC 温度偏移约 1–2 K。

### 结果

$$V_{out} = V_T\ln\frac{I_1(1 + r + \epsilon)}{I_S} + \frac{C_2}{C_1}V_T\ln(1 + r + \epsilon) \approx V_{out,nom} + \left(1 + \frac{C_2}{C_1}\right)\frac{V_T\,\epsilon}{1 + r},$$

其中 $V_{out,nom} = V_{EB}[I_1(1 + r)] + (C_2/C_1)V_T\ln(1 + r)$。

误差主要来自被 $C_2/C_1$ 放大的那一项；例如 $r = 7$、$C_2/C_1 \approx 8.4$、$\epsilon = 0.01$ 时约为 0.3 mV。该误差是 PTAT 的，因此还会附加大小为 $(1 + C_2/C_1)(k/q)\epsilon/(1 + r)$ 的 TC，并使零 TC 温度发生偏移。

**常见错误。** 声称由于两个相位使用同一个结，比值误差会被抵消。单个晶体管消除了双晶体管带隙基准中的**面积**失配（mismatch），$I_S$ 被约去；但 PTAT 电压是由**电流比**决定的，因此 $I_2/I_1$ 的误差会直接进入 $\Delta V_{EB}$ 并被放大。

**常见错误。** 只保留被 $C_2/C_1$ 放大的部分，而忘记 $V_{EB}(I_1 + I_2)$ 本身也改变了 $V_T\epsilon/(1 + r)$。总的因子是 $1 + C_2/C_1$。

**常见错误。** 线性化时用错分母，例如写成 $\ln(1 + r + \epsilon) \approx \ln(1 + r) + \epsilon/r$，或者把 $\epsilon$ 或 $V_T\epsilon$ 直接加到 $V_{out}$ 上。对数的自变量是 $1 + r + \epsilon$，因此相对变化量为 $\epsilon/(1 + r)$。

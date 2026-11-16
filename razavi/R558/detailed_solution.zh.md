# 详细步骤 - R558

**思路。** 在运放反相输入端应用电荷守恒，求出相位 2 的输出：它等于一个 $V_{EB}$ 加上按电容比放大的 PTAT 项 $V_T\ln(1 + I_2/I_1)$。令其对温度的导数为零，就确定了电容比与电流比对数的乘积，并说明电流必须具备哪些性质。

### 第 1 步 — 相位 2 的输出

把运放的反相输入端节点称为 N；它经 $C_2$ 接地，并经 $C_1$ 和 $S_1$ 两者接到 $V_{out}$。

在相位 1，$Q_1$ 只流过 $I_1$，因此 $V_X = V_{EB}(I_1) = V_T\ln(I_1/I_S)$；$S_1$ 使运放成为跟随器，所以 $V_N = V_{out} = V_{EB}(I_1)$。$C_1$ 被短路，$C_2$ 上保持 $V_{EB}(I_1)$，因此 N 处的电荷为 $Q_N = C_2V_{EB}(I_1)$。

在相位 2，$Q_1$ 流过 $I_1 + I_2$，因此 $V_X$ 升高

$$\Delta V_{EB} = V_T\ln\frac{I_1 + I_2}{I_S} - V_T\ln\frac{I_1}{I_S} = V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

运放（经 $C_1$ 反馈）使 $V_N = V_X$，因此 N 升高 $\Delta V_{EB}$；$S_1$ 断开时其电荷守恒（忽略电荷注入）：

$$
\begin{aligned}
C_2\,\Delta V_{EB} + C_1\left(\Delta V_{EB} - \Delta V_{out}\right) &= 0\\
\Delta V_{out} &= \left(1 + \frac{C_2}{C_1}\right)\Delta V_{EB}.
\end{aligned}
$$

把它加到 $V_{EB}(I_1)$ 上，并利用 $V_{EB}(I_1) + \Delta V_{EB} = V_{EB}(I_1 + I_2)$：

$$V_{out,2} = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right):$$

即一个与绝对温度互补（CTAT）的结电压加上电容比乘以 PTAT 电压，这是用单个结构成的带隙基准。

### 第 2 步 — 温度导数与零 TC 条件

$V_{EB}(I_1 + I_2)$ 的 TC 约为 −1.5 mV/K，$V_T$ 的 TC 为 $k/q = 86.17\ \mu$V/K。$C_2/C_1$（采用相同的层）几乎与温度无关，而 $I_2/I_1$ **必须**与温度无关（见第 3 步）。因此

$$\frac{\partial V_{out,2}}{\partial T} = \frac{\partial V_{EB}}{\partial T} + \frac{C_2}{C_1}\cdot\frac{k}{q}\ln\left(1 + \frac{I_2}{I_1}\right).$$

取 $\partial V_{EB}/\partial T = -1.5$ mV/K，令其为零：

$$\frac{C_2}{C_1}\cdot\frac{k}{q}\ln\left(1 + \frac{I_2}{I_1}\right) = 1.5\ \mathrm{mV/K},$$

$$\frac{C_2}{C_1}\ln\left(1 + \frac{I_2}{I_1}\right) = \frac{1.5\times10^{-3}\ \mathrm{V/K}}{8.617\times10^{-5}\ \mathrm{V/K}} \approx 17.4 .$$

只有乘积起作用，因此其中一个比值可以自由选择。**例如：** 取 $I_2 = 7I_1$，用由八个相同单位晶体管构成的电流镜（一个用于 $I_1$，七个用于 $I_2$）很容易实现：

$$
\begin{aligned}
\ln\left(1 + \frac{I_2}{I_1}\right) &= \ln 8 = 2.079,\\
\frac{C_2}{C_1} &= \frac{17.4}{2.079} = 8.37 \approx 8.4 .
\end{aligned}
$$

300 K 时（$V_T = 25.85$ mV）的输出电平为

$$
\begin{aligned}
\frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right) &= 17.4\times25.85\ \mathrm{mV} = 0.45\ \mathrm{V},\\
V_{out,2} &\approx V_{EB} + 0.45\ \mathrm{V} \approx 0.75 + 0.45 = 1.2\ \mathrm{V},
\end{aligned}
$$

这正是熟悉的带隙电压值，接近 $E_g/q$。

### 第 3 步 — 对电流和电容的要求

1. **$I_2/I_1$ 必须与温度无关**，这样 PTAT 项才严格与 $T$ 成正比。两个电流都应通过电流镜从同一个基准导出，使比值由几何尺寸决定（例如 7:1 的单位晶体管）。
2. **电流的绝对值并不决定 PTAT 项。** 它们只决定 $V_{EB}$ 的工作点（其数值，并在较小程度上影响其 TC）。若电流为 PTAT 电流，$V_{EB}$ 的 TC 会略微不那么负（约相差 $k/q$），因此要相应地微调乘积 17.4，通常在仿真中完成。
3. **电容比。** 用单位电容构成 $C_2$ 和 $C_1$，使比值精确，并能随温度和工艺相互跟踪。较大的比值（≈ 8.4）也决定了运放必须精确提供的增益 $1 + C_2/C_1$。

**等价形式。** $V_{out,2} = V_{EB}(I_1) + (1 + C_2/C_1)V_T\ln(1 + I_2/I_1)$，相应条件为 $(1 + C_2/C_1)(k/q)\ln(1 + I_2/I_1) = -\partial V_{EB}(I_1)/\partial T$。这与前面的结果是一致的，因为较低的 $V_{EB}(I_1)$ 的 TC 要负 $(k/q)\ln(1 + I_2/I_1) \approx 0.18$ mV/K。若把 −1.5 mV/K 用于 $V_{EB}(I_1)$，在相同电流比下会得到 $C_2/C_1 \approx 7.4$ 而不是 8.4；“$S_1$ 断开时零 TC”指的是相位 2 的结电压 $V_{EB}(I_1 + I_2)$。

**时序。** 零 TC 电压只在相位 2 存在（在相位 1，输出回到 $V_{EB}(I_1)$），因此要在相位 2 结束时对输出采样。

### 结果

在相位 2，

$$V_{out} = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

选取

$$\frac{C_2}{C_1}\frac{k}{q}\ln\left(1 + \frac{I_2}{I_1}\right) = 1.5\ \mathrm{mV/K}, \qquad\text{i.e.}\qquad \frac{C_2}{C_1}\ln\left(1 + \frac{I_2}{I_1}\right) \approx 17.4\quad (k/q = 86.17\ \mu\mathrm{V/K}).$$

例如：$I_2 = 7I_1$（$\ln 8 = 2.08$），$C_2 \approx 8.4C_1$，得到 $V_{out} \approx V_{EB} + 17.4V_T \approx V_{EB} + 0.45\ \mathrm{V} \approx 1.2$ V。比值 $I_2/I_1$ 必须与温度无关（两个电流都从同一个基准镜像得到），这样第二项才严格为 PTAT。电容比精确，且几乎与温度无关。电流的绝对值只决定 $V_{EB}$ 的工作点。

**常见错误。** 把 PTAT 项写成 $V_T\ln(I_2/I_1)$，好像 $I_2$ 取代了 $I_1$。在相位 2，两个电流源都向 $Q_1$ 供电，因此对数项为 $\ln(1 + I_2/I_1)$；当 $I_2 = 7I_1$ 时，得到的是 $\ln 7 = 1.95$ 而不是 $\ln 8 = 2.08$，PTAT 项有 6 % 的误差。

**常见错误。** 把电容比弄反，即取 $C_1/C_2 \approx 8.4$。这样 PTAT 项会小约 70 倍，输出仍然具有很强的 CTAT 特性；$C_2$ 必须是较大的那个，因为施加在 $\Delta V_{EB}$ 上的增益是 $1 + C_2/C_1$。

**常见错误。** 让电流比随温度漂移（例如一个电流来自 PTAT 电流源，另一个来自电阻），或者认为电流的绝对值决定 PTAT 项。起作用的只是**比值**，而且它必须恒定。

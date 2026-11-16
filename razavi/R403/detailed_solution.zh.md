# 详细步骤 - R403

**思路。** 把放大器建模为电压源 $A(s)(V_+ - V_-)$ 与 $R_0$ 的串联。分压器 $R_1$–$R_2$ 对 $V_{out}$ 采样，并把 $\beta V_{out}$ 送回反相输入端（并联检测），因此 $Z_{out}$ 等于 $R_0$ 除以 $1 + \beta A(s)$。由于 $A(s)$ 随频率升高而下降，这种减小作用逐渐消失，$|Z_{out}|$ 从一个较小的值上升到 $R_0$。

### 第 1 步 — 模型与反馈系数（feedback factor）

放大器是一个理想电压源 $A(s)(V_+ - V_-)$ 与 $R_0$ 的串联，其中 $A(s) = A_0/(1 + s/\omega_0)$。其输入端不取电流，因此 $R_1$ 和 $R_2$ 构成一个空载的分压器：

$$V_- = \beta V_{out}, \qquad \beta = \frac{R_2}{R_1 + R_2} .$$

### 第 2 步 — 测试源与输出端的基尔霍夫电流定律（KCL）

令 $V_{in} = 0$（于是 $V_+ = 0$），在输出端加 $V_X$，求它提供的电流 $I_X$；$Z_{out} = V_X/I_X$。

<!-- diagram: diagram-01.cir -->

内部电压源产生 $A(s)(0 - \beta V_X) = -\beta A(s)V_X$，因此流过 $R_0$ 的电流为

$$I_{R_0} = \frac{V_X - (-\beta A V_X)}{R_0} = \frac{V_X\,(1 + \beta A)}{R_0} .$$

分压器取电流 $V_X/(R_1 + R_2)$。对输出端列 KCL：

$$I_X = \frac{V_X\,(1 + \beta A)}{R_0} + \frac{V_X}{R_1 + R_2}, \qquad Z_{out} = \frac{V_X}{I_X} = \frac{R_0}{1 + \beta A(s)}\ \Big\|\ (R_1 + R_2) .$$

$R_0$ 两端的电压是 $V_X$ 的 $(1 + \beta A)$ 倍，因此输出端看起来“硬”了 $(1 + \beta A)$ 倍。在大多数实际情况下 $R_1 + R_2 \gg R_0/(1 + \beta A)$，分压器本身的负载效应可以忽略：

$$Z_{out}(s) \approx \frac{R_0}{1 + \beta A(s)} .$$

### 第 3 步 — 代入 $A(s)$ 的频率特性

$$
\begin{aligned}
1 + \beta A(s) &= 1 + \frac{\beta A_0}{1 + s/\omega_0} = \frac{1 + s/\omega_0 + \beta A_0}{1 + s/\omega_0},\\[4pt]
Z_{out}(s) &= R_0\,\frac{1 + s/\omega_0}{1 + \beta A_0 + s/\omega_0}.
\end{aligned}
$$

分子分母同除以 $(1 + \beta A_0)$：

$$Z_{out}(s) = \frac{R_0}{1 + \beta A_0}\cdot\frac{1 + s/\omega_0}{1 + \dfrac{s}{(1 + \beta A_0)\,\omega_0}} .$$

因此 $Z_{out}$ 具有：

- 低频值 $R_0/(1 + \beta A_0)$；
- 位于 $\omega_z = \omega_0$ 的**零点**（即放大器的开环极点）；
- 位于 $\omega_p = (1 + \beta A_0)\,\omega_0$ 的**极点**，即闭环带宽；
- 高频值 $\lim_{s\to\infty} Z_{out} = R_0$。

**计入分压器。** 把两个并联导纳通分合并，并利用 $(R_1 + R_2)\beta = R_2$：

$$Z_{out} = \frac{R_0(R_1 + R_2)(1 + s/\omega_0)}{(R_0 + R_1 + R_2)(1 + s/\omega_0) + A_0R_2},$$

它从低频时的 $R_0(R_1 + R_2)/(R_0 + R_1 + R_2 + A_0R_2)$ 变化到高频时的 $R_0\parallel(R_1 + R_2)$，曲线形状相同。

### 第 4 步 — $|Z_{out}|$ 的曲线

$$|Z_{out}(j\omega)| = R_0\,\frac{\sqrt{1 + (\omega/\omega_0)^2}}{\sqrt{(1 + \beta A_0)^2 + (\omega/\omega_0)^2}} .$$

在双对数坐标中：

- **$\omega \ll \omega_0$：** 平坦，等于 $R_0/(1 + \beta A_0)$。
- **$\omega_0 \ll \omega \ll (1 + \beta A_0)\omega_0$：** $|Z_{out}| \approx R_0\,\omega/[(1 + \beta A_0)\omega_0]$，以 **+20 dB/十倍频程**的斜率上升。
- **$\omega \gg (1 + \beta A_0)\omega_0$：** 平坦，等于 $R_0$。

以 $1 + \beta A_0 = 100$ 为例：

| $\omega/\omega_0$ | $\lvert Z_{out}\rvert/R_0$ | 说明 |
|---|---|---|
| 0.1 | 0.0100 | 低频平台 $1/(1 + \beta A_0)$ |
| 1 | 0.0141 | 零点：比平台高 3 dB |
| 10 | 0.100 | 以 +20 dB/dec 上升 |
| 100 | 0.707 | 极点 $(1 + \beta A_0)\omega_0$：比 $R_0$ 低 3 dB |
| 1000 | 0.995 | 高频平台 $R_0$ |

### 第 5 步 — 解释：$Z_{out}$ 为何上升（感性特性）

$Z_{out}$ 是被环路增益 $\beta A(s)$ 降低的。在 $\omega_0$ 以上，环路增益以 20 dB/十倍频程的速率下降，因此反馈对输出电压的稳定作用越来越弱，$Z_{out}$ 以相同的速率上升。在 $\omega \approx (1 + \beta A_0)\omega_0$ 附近，环路增益降到 1 左右，$Z_{out}$ 回到开环值 $R_0$。

与频率成正比增大的阻抗是**感性**的：

$$\frac{1}{Z_{out}} = \frac{1 + \beta A}{R_0} = \frac{1}{R_0} + \frac{\beta A_0}{R_0(1 + s/\omega_0)} = \frac{1}{R_0} + \frac{1}{\dfrac{R_0}{\beta A_0} + s\dfrac{R_0}{\beta A_0\omega_0}} ,$$

因此

$$Z_{out} = R_0\ \Big\|\ \left(\frac{R_0}{\beta A_0} + sL\right), \qquad L = \frac{R_0}{\beta A_0\,\omega_0},$$

即 $R_0$ 与“$R_0/(\beta A_0)$ 串联电感 $L$”这一支路相并联。若接容性（capacitive）负载，这种感性输出可能产生谐振。

### 结果

忽略 $R_1 + R_2$ 所取的电流，令 $\beta = R_2/(R_1 + R_2)$：

$$Z_{out}(s) = \frac{R_0}{1 + \beta A(s)} = R_0\,\frac{1 + s/\omega_0}{1 + \beta A_0 + s/\omega_0} = \frac{R_0}{1 + \beta A_0}\cdot\frac{1 + s/\omega_0}{1 + s/[(1 + \beta A_0)\omega_0]} .$$

$|Z_{out}|$ 在 $\omega_0$ 处的零点以下平坦，等于 $R_0/(1 + \beta A_0)$；然后以 +20 dB/dec 上升，直到 $(1 + \beta A_0)\omega_0$ 处的极点；在此之上平坦，等于 $R_0$。等价地，$Z_{out} = R_0\parallel[R_0/(\beta A_0) + sL]$，其中 $L = R_0/(\beta A_0\omega_0)$。这种上升是因为降低 $Z_{out}$ 的环路增益 $\beta A(s)$ 随频率升高而下降。计入分压器时，$Z_{out} = \dfrac{R_0(R_1 + R_2)(1 + s/\omega_0)}{(R_0 + R_1 + R_2)(1 + s/\omega_0) + A_0R_2}$，其曲线形状相同，最终趋于 $R_0\parallel(R_1 + R_2)$。

**常见错误。** 认为 $Z_{out}$ 在 $\omega_0$ 处有一个**极点**，并把 $|Z_{out}|$ 画成随频率下降。放大器的极点位于 $1 + \beta A$ 的分母中，因而位于 $Z_{out}$ 的**分子**中：它变成了零点。

**常见错误。** 认为反馈会提高输出阻抗。并联检测使输出阻抗除以 $1 + \beta A$；频率升高只会削弱这种降低作用，因此 $Z_{out}$ 永远不会超过 $R_0$。

**常见错误。** 把极点放在 $\beta A_0\omega_0$，或者用 $A_0$ 代替 $\beta A_0$。极点位于环路增益 $\beta A$ 降到 1 左右的地方，即 $(1 + \beta A_0)\omega_0$。

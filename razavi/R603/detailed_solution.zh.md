# 详细步骤 - R603

**思路。** 在 $I$ 和 $R_D$ 固定时，$W/L$ 只通过过驱动电压 $V_{ov}$ 和 $g_m$ 起作用。把失真和输入参考热噪声用 $V_{ov}$ 和 $g_m$ 表示，代入它们对 $W/L$ 的依赖关系，得到每条曲线的形状，再把两者结合起来，揭示它们与功耗之间的折中。

### 第 1 步 — 恒定电流下 $V_{ov}$ 和 $g_m$ 与 $W/L$ 的关系

由 $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$：

$$V_{ov} = \sqrt{\frac{2I}{\mu_nC_{ox}W/L}} \;\propto\; (W/L)^{-1/2},$$

$$g_m = \sqrt{2\mu_nC_{ox}(W/L)\,I} = \frac{2I}{V_{ov}} \;\propto\; (W/L)^{1/2}.$$

较宽的器件以较小的过驱动电压和较大的 $g_m$ 承载同样的电流。功耗 $P = V_{DD}I$ 和直流输出电平 $V_{DD} - IR_D$ 都与 $W/L$ 无关。

### 第 2 步 — 失真随 $W/L$ 的变化

令 $V_{GS} = V_{GS0} + V_m\cos\omega t$，

$$
\begin{aligned}
I_D &= \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V_{ov} + V_m\cos\omega t)^2\\
&= \tfrac12\mu_nC_{ox}\tfrac{W}{L}\left[V_{ov}^2 + 2V_{ov}V_m\cos\omega t + \tfrac12V_m^2 + \tfrac12V_m^2\cos2\omega t\right].
\end{aligned}
$$

基波（fundamental）为 $\mu_nC_{ox}(W/L)V_{ov}V_m$，二次谐波（second harmonic）为 $\tfrac14\mu_nC_{ox}(W/L)V_m^2$，没有高于 $2\omega$ 的分量，而输出 $V_{DD} - R_DI_D$ 具有相同的比值：

$$\mathrm{THD} = \mathrm{HD2} = \frac{\tfrac14V_m^2}{V_{ov}V_m} = \frac{V_m}{4V_{ov}} = \frac{V_m}{4}\sqrt{\frac{\mu_nC_{ox}W/L}{2I}} \;\propto\; \sqrt{W/L}.$$

**曲线：** THD 从原点开始按 $\sqrt{W/L}$ 上升（向下凹）；把 $W/L$ 加倍会使它乘以 $\sqrt2 = 1.41$。该公式在 $V_m < V_{ov}$ 时成立；超过这一范围，器件在周期的一部分时间内会截止。

### 第 3 步 — 输入参考热噪声随 $W/L$ 的变化

输出节点经 $R_D$ 接交流地，其上有 $M_0$ 的沟道噪声 $\overline{I_{n,M}^2} = 4kT\gamma g_m$（$\gamma = 2/3$）以及 $R_D$ 的噪声 $\overline{I_{n,R}^2} = 4kT/R_D$；这里忽略了沟道长度调制（channel-length modulation）。

<!-- diagram: diagram-01.cir -->

两者互不相关，且都流过 $R_D$：

$$\overline{V_{n,out}^2} = \left(4kT\gamma g_m + \frac{4kT}{R_D}\right)R_D^2.$$

除以 $A_v^2 = (g_mR_D)^2$：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\left(4kT\gamma g_m + 4kT/R_D\right)R_D^2}{g_m^2R_D^2}\\
&= 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 4kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right).
\end{aligned}
$$

由于 $g_m \propto (W/L)^{1/2}$ 且 $R_D$ 固定：

- 晶体管项 $\dfrac{2}{3g_m} \propto (W/L)^{-1/2}$；
- 电阻项 $\dfrac{1}{g_m^2R_D} \propto (W/L)^{-1}$。

**曲线：** 噪声 PSD 随 $W/L$ 单调下降。当晶体管项占主导时（$g_mR_D \gg 3/2$），PSD 按 $(W/L)^{-1/2}$ 下降，均方根噪声按 $(W/L)^{-1/4}$ 下降。

### 第 4 步 — 两条曲线的并列比较

以初始设计 $(W/L)_0$ 为基准归一化：

| $W/L \,/\, (W/L)_0$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| THD（∝ $\sqrt{W/L}$） | 0.50 | 0.71 | 1 | 1.41 | 2.0 |
| 噪声 PSD，晶体管项（∝ $(W/L)^{-1/2}$） | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| 噪声 PSD，电阻项（∝ $(W/L)^{-1}$） | 4.0 | 2.0 | 1 | 0.50 | 0.25 |
| 功耗（$V_{DD}I$） | 1 | 1 | 1 | 1 | 1 |

随着 $W/L$ 增大，THD 上升，噪声下降，而功耗保持不变。

**极端情况。** 当 $W/L$ 很大时，器件进入弱反型（weak inversion）区，此时 $g_m \to I/(\zeta V_T)$ 不再增大，失真趋于 $V_m/(4\zeta V_T)$，其中 $\zeta V_T$ 为亚阈值斜率因子（subthreshold slope factor）与热电压（thermal voltage）的乘积，因此两条曲线都趋于平坦。当 $W/L$ 很小时，大的过驱动电压会侵占维持饱和（$V_{DS} \ge V_{ov}$）所需的电压余量（headroom），并引入平方律之外的速度饱和（velocity saturation）效应。

### 第 5 步 — 噪声、线性度与功耗之间的折中

把晶体管噪声项与失真相乘，并利用 $g_mV_{ov} = 2I$：

$$\overline{V_{n,in}^2}\Big|_{M_0}\times\mathrm{HD2} = \frac{4kT\gamma}{g_m}\cdot\frac{V_m}{4V_{ov}} = \frac{kT\gamma V_m}{g_mV_{ov}} = \frac{kT\gamma V_m}{2I} = \frac{kTV_m}{3I}\quad(\gamma = \tfrac23).$$

该乘积**与 $W/L$ 无关**。在给定电流（功耗 $V_{DD}I$）下，$W/L$ 只是让设计点沿这条曲线移动：较大的 $W/L$ 噪声较低但失真较大，较小的 $W/L$ 则相反。要**同时**改善两者，就需要更大的 $I$，即**更大的功耗**。电阻项进一步促使人们采用大的 $g_m$，但不改变这一结论。

### 结果

在 $I$ 恒定（因而功耗恒定）时，增大 $W/L$ 会降低过驱动电压 $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$，并提高 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$：

- **THD** $= \mathrm{HD2} = V_m/(4V_{ov}) = \tfrac{V_m}{4}\sqrt{\mu_nC_{ox}(W/L)/(2I)}$ **按 $\sqrt{W/L}$ 上升**；
- **输入参考噪声** $\overline{V_{n,in}^2} = 4kT\left[2/(3g_m) + 1/(g_m^2R_D)\right]$ **下降**：晶体管项按 $(W/L)^{-1/2}$ 下降（均方根值 $\propto (W/L)^{-1/4}$），电阻项按 $(W/L)^{-1}$ 下降。

折中关系：在给定功耗下，$W/L$（即过驱动电压）在噪声与线性度之间进行折中，因为 $\overline{V_{n,in}^2}\cdot\mathrm{HD2} = kTV_m/(3I)$ 由电流决定；要同时降低两者，就需要更大的电流，从而需要更大的功耗。

**常见错误。** 认为更宽的晶体管增益更高，因而线性度更好。在电流固定时，它的过驱动电压**更小**，因此同样的输入摆幅占 $V_{ov}$ 的比例更大，失真随之增大。

**常见错误。** 认为噪声随 $W/L$ 增大，或者功耗随 $W/L$ 变化。在 $I$ 固定时，$g_m$ 按 $\sqrt{W/L}$ 增大，输入参考噪声下降；功耗只由 $I$ 决定。

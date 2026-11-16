$f_T$ 与 $R_G$ 无关，因为栅极由电流驱动，并且每一段的比值 $g_m/C$ 都相同。
- 第 $k$ 段的跨导（transconductance）为 $g_m/n$，对交流地的栅极电容为 $C/n$（其中 $C = C_{GS} + C_{GD}$），栅极节点电压为 $V_k$；栅极电阻 $R_G/n$ 只是把各段串联起来（梯形网络），或把每个栅极连到公共输入端。输入电流没有其他通路。
- KCL：输入电流 $I_{in}$ 最终必然全部流入电容。无论电阻取何值，都有 $I_{in} = \sum_k j\omega(C/n)V_k$，因此 $\sum_k V_k = nI_{in}/(j\omega C)$。
- 漏极电流（各漏极并联，接交流地）：$I_{out} = \sum_k (g_m/n)V_k = (g_m/n)\cdot nI_{in}/(j\omega C) = g_mI_{in}/(j\omega C)$。
- 因此 $|I_{out}/I_{in}| = g_m/[\omega(C_{GS} + C_{GD})]$，$f_T = g_m/[2\pi(C_{GS} + C_{GD})]$，与 $R_G$ 和 $n$ 都无关。（当栅极由电压源驱动时，$R_G$ 确实有影响，例如对 $f_{max}$ 和噪声，但对基于电流增益定义的 $f_T$ 没有影响。）

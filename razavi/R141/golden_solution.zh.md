$\Delta V_{GS} = \dfrac{\Delta V_{in}}{1 + g_mR_S}$，它随 $g_mR_S$ 增大而减小；$\Delta V_{in}$ 的大部分落在 $R_S$ 上，而不是落在非线性（nonlinear）器件的栅源之间。

- $\Delta I_D = g_m\Delta V_{GS}$，且 $\Delta V_{GS} = \Delta V_{in} - R_S\Delta I_D$ → $\Delta V_{GS}(1 + g_mR_S) = \Delta V_{in}$。
- 线性度：$I_D(V_{GS})$ 的平方律（square law）非线性只受到缩小了的摆幅 $\Delta V_{in}/(1 + g_mR_S)$ 的激励，而当 $g_mR_S \gg 1$ 时，$\Delta I_D = g_m\Delta V_{in}/(1 + g_mR_S) \to \Delta V_{in}/R_S$：电流以及由此得到的 $V_{out} = V_{DD} - I_DR_D$ 由线性电阻决定。等价地说，$G_m = g_m/(1 + g_mR_S)$ 随信号幅度的变化远小于 $g_m$，增益趋近于 $-R_D/R_S$。
- （计入体效应时：$\Delta V_{GS} = \Delta V_{in}(1 + g_{mb}R_S)/[1 + (g_m + g_{mb})R_S]$，趋势相同。）

证明（小信号、线性工作）：
- 设 $V_1$、$V_2$ 分别为 $D_1$、$D_2$ 的控制电压（栅源电压）。由对称性，两管偏置电流相等，因而具有相同的跨导（transconductance）$g_m$。于是 $\Delta I_1 = g_m\Delta V_1$，$\Delta I_2 = g_m\Delta V_2$，其中 $\Delta V_1 = \Delta V_{in1} - \Delta V_P$，$\Delta V_2 = \Delta V_{in2} - \Delta V_P$。
- 接入电阻后，对 P 点应用基尔霍夫电流定律（KCL）：$\Delta I_1 + \Delta I_2 = \Delta V_P/R_T$。
- 代入得 $g_m(\Delta V_{in1} + \Delta V_{in2}) - 2g_m\Delta V_P = \Delta V_P/R_T$，即 $\Delta V_P\,(1/R_T + 2g_m) = g_m(\Delta V_{in1} + \Delta V_{in2})$。
- 对差分输入，$\Delta V_{in1} + \Delta V_{in2} = 0$，因此 $\Delta V_P = 0$（因为 $1/R_T + 2g_m \ne 0$）。从而 $\Delta V_1 = \Delta V_{in}$，$\Delta V_2 = -\Delta V_{in}$，$\Delta I_1 = -\Delta I_2$。
- 等价地：从 P 看进去，每半边电路都是一个戴维南（Thevenin）等效电压源 $\pm\Delta V_{in}$ 串联 $1/g_m$；两边电阻相等、电压源反相，因此无论 P 与地之间接的是什么（电流源或 $R_T$），P 点的变化都为零。这一结论要求电路对称且为小信号（$g_m$ 相等）；对于共模（common-mode）输入，$V_P$ 会变化 $\dfrac{2g_mR_T}{1 + 2g_mR_T}\Delta V_{CM}$。

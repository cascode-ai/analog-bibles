成立。两个源极位于同一节点 P，两个衬底都接地，因此两个器件的 $V_{SB}$ 始终相同；体效应对两边的作用完全相同。
- 小信号分析：$\Delta I_1 = g_m(\Delta V_{in1} - \Delta V_P) - g_{mb}\Delta V_P$，$\Delta I_2 = g_m(\Delta V_{in2} - \Delta V_P) - g_{mb}\Delta V_P$，尾电流源迫使 $\Delta I_1 + \Delta I_2 = 0$，由此得 $g_m(\Delta V_{in1} + \Delta V_{in2}) = 2(g_m + g_{mb})\Delta V_P$。当 $\Delta V_{in1} = -\Delta V_{in2}$ 时，$\Delta V_P = 0$。
- 用戴维南等效电路（Thevenin equivalent）来看：每半边电路都相当于电压源 $\dfrac{g_m}{g_m + g_{mb}}V_{in}$ 串联电阻 $\dfrac{1}{g_m + g_{mb}}$；两边电阻相等、电压源反相，因此 P 点电压保持不变。
- 只有两种情况下体效应才会产生影响：输入为共模（common-mode）输入，此时 $\Delta V_P = g_mv_{CM}/(g_m + g_{mb})$；或者两个器件的体效应系数（body-effect coefficient）不同。

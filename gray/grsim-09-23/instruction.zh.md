[图 2] 的电路用于产生加在 [图 1] 运放（电源为 ±5 V，偏置电流 20 μA，宽长比以 μm/μm 为单位如图所示，$C_c$ = 5 pF）中 $M_9$ 栅极上的电压。$M_9$ 工作在线性区（triode region），作为与补偿电容串联的电阻。计算将右半平面零点（right-half-plane zero）移到无穷远所需的 $M_9$ 的 $W/L$。用 SPICE 检验你的结果。

工艺参数：$k'_n = 60.4$ μA/V²，$k'_p = 30.2$ μA/V²（$C_{ox}$ = 0.863 fF/μm²），$V_{tn} = 0.7$ V，$V_{tp} = -0.7$ V，$L_d = 0.3$ μm，饱和区器件的 $X_d = 1$ μm（$L_{\text{eff}} = L_{\text{drwn}} - 2L_d - X_d$；对于 $V_{DS} ≈ 0$ 的线性区器件，取 $L_{\text{eff}} = L_{\text{drwn}} - 2L_d$），$dX_d/dV_{DS}$ = 0.2 μm/V（n），0.1 μm/V（p），$\lambda = (dX_d/dV_{DS})/L_{\text{eff}}$，NMOS 衬底掺杂 $10^{15}$ cm⁻³，NMOS 衬底接 −5 V，交叠电容 0.35 fF/μm。

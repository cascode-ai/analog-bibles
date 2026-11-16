$\Delta V_{out} = \left(1 + \dfrac{C_2}{C_1}\right)V_T\ln\left(1 + \dfrac{I_2}{I_1}\right)$（增加）。新的输出为 $V_{out} = V_{EB}(I_1 + I_2) + \dfrac{C_2}{C_1}V_T\ln\left(1 + \dfrac{I_2}{I_1}\right)$。
- $S_2$ 导通时，$Q_1$ 流过 $I_1 + I_2$，因此 $V_X$ 升高 $\Delta V_{EB} = V_T\ln[(I_1 + I_2)/I_1]$。
- 运放使其反相输入端（$C_2$ 的上极板、$C_1$ 的左极板）保持等于 $V_X$。$S_1$ 断开时该节点浮空，因此其电荷守恒：$C_2\Delta V_{EB} + C_1(\Delta V_{EB} - \Delta V_{out}) = 0$，由此得 $\Delta V_{out} = (1 + C_2/C_1)\Delta V_{EB}$，即同相增益。

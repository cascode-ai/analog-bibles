输出先向上跳变 $\Delta V\,\dfrac{C_F}{C_F + C_L}$，然后以 $\tau = R_{out}(C_F + C_L)$ 向 $-A\Delta V$ 衰减；这一跳变表明在 $+A/(R_{out}C_F)$ 处存在一个右半平面零点（right-half-plane zero）。
- 在 $t = 0^+$ 时，有限的 $R_{out}$ 无法提供改变电容电压所需的冲激电流，因此 X 处的阶跃只能经 $C_F$ 耦合到 Y，而该电容与 $C_L$ 构成电容分压器（capacitive divider）：同样的电荷 $\Delta Q$ 经 $C_F$ 流入 $C_L$，$C_F(\Delta V - \Delta V_Y) = C_L\Delta V_Y$，由此得 $\Delta V_Y = \Delta V\,C_F/(C_F + C_L)$。
- 随后，放大器经 $R_{out}$ 输出的电流给两个电容充电，把 Y 拉低到 $-A\Delta V$。
- 经 $C_F$ 的直接同相前馈（feedforward）与反相主通路相对抗，意味着存在一个右半平面零点，仍位于 $A/(R_{out}C_F)$（与 $C_L$ 无关）；$C_L$ 只是减小跳变并使衰减变慢。

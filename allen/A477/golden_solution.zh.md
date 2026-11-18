$v_{OUT}(\phi_2) = V_{REF}\left(\frac{b_0}{2} + \frac{b_1}{4}\right) + \frac{V_{REF}}{k}\left(\frac{b_2}{2} + \frac{b_3}{4}\right)$（$k = 4$ 时为理想 4 位 DAC）。
当 $k = 2$ 时：$v_{OUT} = V_{REF}\left(\frac{b_0}{2} + \frac{b_1}{4} + \frac{b_2}{4} + \frac{b_3}{8}\right)$；INL $= +3$ LSB 和 0 LSB；DNL $= +1$ LSB 和 $-3$ LSB；该转换器不单调。

推导：
- $\phi_1$：上方 2 位 DAC 中 $C/2$ 和 $C/4$ 电容的左极板接 $V_{REF}$（下方 DAC 的接 $V_{REF}/k$），右极板接地，反馈电容 $C$ 被短路（$v_{OUT} = 0$）。
- $\phi_2$：左极板接地，总线接到虚地。位开关闭合的电容，其两端电压由 $V_{ref,i}$（所在 DAC 的参考电压，$V_{REF}$ 或 $V_{REF}/k$）变为 0 V，向反馈电容转移电荷 $C_i V_{ref,i}$，其极性使输出为正：$v_{OUT} = \sum b_i (C_i/C)V_{ref,i}$，即 $\frac{1}{2}b_0 V_{REF} + \frac{1}{4}b_1 V_{REF} + \frac{1}{2}b_2\frac{V_{REF}}{k} + \frac{1}{4}b_3\frac{V_{REF}}{k}$。
- $k = 2$（1 LSB $= V_{REF}/16$，码 $= 4m + n$）：输出 $= 4m + 2n$ LSB，误差 $= n$ = 0 … +3 LSB；组内台阶为 2 LSB（DNL +1），在 0011→0100、0111→1000、1011→1100 处台阶为 −2 LSB（DNL −3）；输出在这些地方下降，因此不单调。

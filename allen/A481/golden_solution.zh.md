$v_X = \frac{2}{5}V_{Analog} - \frac{2}{5}V_1 + \frac{V_2}{10} - \frac{V_{REF}}{40} = \frac{2}{5}\left[V_{Analog} - V_1 + \frac{V_2}{4} - \frac{V_{REF}}{16}\right]$。
当 $ABCD = 1011$ 时：$V_1 = 0.75V_{REF}$，$V_2 = V_{REF}$，$v_X = (0.32 - 0.30 + 0.10 - 0.025)V_{REF} = +0.095V_{REF} > 0$，因此比较器输出（$v_X$ 接其反相输入端）为低。

推导：
- 电阻串的抽头：$V_{REF}$、$\frac34V_{REF}$、$\frac12V_{REF}$、$\frac14V_{REF}$。$V_1 = (2A + B + 1)V_{REF}/4$（$A$ 选择上面一对抽头，$B$/$\bar B$ 选择其中的抽头）；$V_2 = (2C + D + 1)V_{REF}/4$ 同理。由 $\phi_1$ 切换的 $C/4$ 电容接到 $V_{REF}/4$ 抽头。
- $\phi_1$：$v_X = 0$（运放处于单位增益反馈）。各左极板：$V_{Analog}$ 电容 $C$ 接 0，$V_1$ 电容 $C$ 接 $V_1$，$C/4$ 接 $V_{REF}/4$，$V_2$ 电容 $C/4$ 接 0。
- $\phi_2$：各左极板分别接 $V_{Analog}$、0、0、$V_2$；$v_X$ 处的总电容为 $2.5C$。电荷守恒：$v_X = \frac{C V_{Analog} - C V_1 - \frac{C}{4}\cdot\frac{V_{REF}}{4} + \frac{C}{4}V_2}{2.5C}$。
- $A = 1$、$B = 0$ 为 $V_1$ 选择 $\frac34V_{REF}$ 抽头；$C = D = 1$ 为 $V_2$ 选择 $V_{REF}$。

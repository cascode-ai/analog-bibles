$V_{OS,tot} = \dfrac{V_{OS}}{1+A_v}\left(1 + \dfrac{2C_{in}}{C}\right) \approx \dfrac{V_{OS}}{A_v}\cdot\dfrac{C + 2C_{in}}{C}$。
- 失调消除模式：$V_{out} = V_{XY}$ 且 $V_{out} = -A_v(V_{XY} - V_{OS})$，因此 $V_{XY} = \dfrac{A_v}{1+A_v}V_{OS}$ 被存储在 $C_1$、$C_2$（以及 $C_{in}$）上。
- 放大模式：$X$ 和 $Y$ 浮空。差分输入 $V_{in}$ 经 $C_1$ 与 $C_2$ 的串联组合（$C/2$）与 $C_{in}$ 分压后到达 $X$–$Y$：$\Delta V_{XY} = V_{in}\dfrac{C/2}{C/2 + C_{in}} = V_{in}\dfrac{C}{C + 2C_{in}}$，叠加在存储的 $V_{XY}$ 上。
- $V_{out} = -A_v\left[V_{XY} - V_{OS}\right] = -A_v\left[-\dfrac{V_{OS}}{1+A_v} + V_{in}\dfrac{C}{C+2C_{in}}\right]$；当 $V_{in} = \dfrac{V_{OS}}{1+A_v}\cdot\dfrac{C + 2C_{in}}{C}$ 时 $V_{out} = 0$。
- 残余失调增大为 $1 + 2C_{in}/C$ 倍，因为输入信号被电容分压器衰减，而 $X$–$Y$ 处的残余误差则没有被衰减。

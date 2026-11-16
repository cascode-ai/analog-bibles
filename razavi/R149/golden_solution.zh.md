每个时钟边沿约 0.27 V（273 mV）：$\Delta V_X = 3\ \mathrm{V}\times\dfrac{10\ \mathrm{fF}}{10\ \mathrm{fF}+100\ \mathrm{fF}} \approx 0.27$ V。
- 在快速的时钟边沿期间，负载电阻和 $M_1$ 来不及改变该节点的电压，因此线间电容和 100 fF 的节点电容构成电容分压器（capacitive divider）：时钟上升沿时 $V_X$ 向上跳变，下降沿时向下跳变。
- 随后每个毛刺以该节点的时间常数 $(R_D\|r_{O1})\times 110$ fF 衰减，形成尖峰状的波形。

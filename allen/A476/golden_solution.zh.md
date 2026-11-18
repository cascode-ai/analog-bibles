$f_{clock} \approx 285$–$288$ kHz（$T \approx 3.5$ µs）。

推导：
- 运放：$A_0 = 10^4$，$f_a = 100$ Hz → $GB = 1$ MHz（$\omega_{GB} = 6.28\times10^6$ rad/s）。
- A1：输入电容 $C + C/2 + C/4 + C/8 = 15C/8$，反馈电容 $2C$ → $\beta_1 = \frac{2}{2 + 15/8} = \frac{16}{31} = 0.516$；闭环带宽（closed-loop bandwidth）$\omega_{a}(1 + A_0\beta_1) = 3.24\times10^6$ rad/s，$\tau_1 = 0.308$ µs。
- A2：输入电容 $15C/8 + C/8 = 2C$，反馈电容 $2C$ → $\beta_2 = 0.5$；$\tau_2 = 1/(3.14\times10^6) = 0.318$ µs。
- ENOB = 7 位 → 建立误差必须小于 7 位转换器的 ½ LSB，即满量程的 $2^{-8}$：$e^{-t/\tau} \le 1/256$ → $t = \tau\ln 256 = 5.545\tau$。$t_1 = 1.71$ µs，$t_2 = 1.76$ µs，$T = 3.47$ µs → $f_{clock} = 288$ kHz。
- 若计入每级的静态增益误差 $1/(1 + A_0\beta) \approx 2\times10^{-4}$（剩余 $e^{-t/\tau} \le 0.0037$），则 $T \approx 3.51$ µs，$f_{clock} \approx 285$ kHz。仅有限直流增益引起的误差（≈0.02%）远低于 7 位的限值，因此建立过程起主导作用。

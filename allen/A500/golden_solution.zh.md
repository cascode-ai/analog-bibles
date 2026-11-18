N = 8 位。

- 可用的建立时间（settling time）：$T = 1/f_s = 1\ \mu$s，因此 $t\cdot BW = 2\pi \times 10^6 \times 10^{-6} = 2\pi$。
- 满量程阶跃的剩余误差：$V_{REF}$ 的 $e^{-2\pi} = 1.87\times10^{-3}$。
- 要求：$e^{-2\pi} \le 2^{-(N+1)}$ → $2^{N+1} \le 535.5$ → $N + 1 \le 9.06$ → $N = 8$（8 位时 ½ LSB = $1.95\times10^{-3}V_{REF}$ ≥ $1.87\times10^{-3}V_{REF}$；9 位时 ½ LSB = $0.98\times10^{-3}V_{REF}$，太小）。

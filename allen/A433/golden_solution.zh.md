$T \approx 1.05$ µs。

- 闭环带宽（closed-loop bandwidth）$\omega_H = \beta\cdot GB$，其中 $\beta = 1/(1 + D)$；最坏情况是从 0000 到 1111 的阶跃：$\beta = 16/31$，$\omega_H = 2\pi(10^6)(16/31) = 3.24\times10^6$ rad/s，终值为 $15V_{REF}/16$。
- $\dfrac{15}{16}V_{REF}e^{-\omega_H T} \le \dfrac{V_{REF}}{32}$ → $T = \ln(30)/\omega_H = 1.049$ µs（若误差以 $V_{REF}$ 为参照，则 $\ln 32/\omega_H$ = 1.07 µs）。

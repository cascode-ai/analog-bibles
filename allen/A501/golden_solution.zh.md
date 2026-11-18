N = 9 位。

- 最坏情况误差：$\Delta V = \left|\dfrac{dv_{in}}{dt}\right|_{max}\Delta t = \omega V_p \Delta t = 2\pi(10^6)(0.5V_{REF})(200\times10^{-12}) = 6.28\times10^{-4}V_{REF}$。
- 要求：$6.28\times10^{-4}V_{REF} \le V_{REF}/2^{N+1}$ → $2^{N+1} \le 1592$ → $N + 1 \le 10.6$ → $N = 9$（9 位时 ½ LSB = $9.8\times10^{-4}V_{REF}$；10 位时为 $4.9\times10^{-4}V_{REF}$，小于该误差）。

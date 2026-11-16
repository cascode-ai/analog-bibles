$V_{out}(t) = V_0\dfrac{A_0}{1 + A_0}\left[1 - e^{-t/\tau}\right]u(t)$，其中 $\tau = \dfrac{1}{(1 + A_0)\omega_{p1}} = \dfrac{1}{495 \times 3.66\times10^6} \approx 0.55$ ns。
- 当 $\omega_z = \omega_{p2}$ 时，$H_{open} = A_0/(1 + s/\omega_{p1})$，$H_{closed} = \dfrac{A_0/(1 + A_0)}{1 + s/[(1 + A_0)\omega_{p1}]}$：只有一个位于 1.81×10⁹ rad/s（≈ 288 MHz）的极点。
- 终值为 0.998 $V_0$（静态误差 0.2%）。单一指数，没有过冲。建立到终值的 1% 以内所需的建立时间（settling time）为 4.6τ ≈ 2.5 ns；建立到 0.1% 以内为 6.9τ ≈ 3.8 ns。

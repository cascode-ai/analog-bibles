$f_B \approx 32.7$ kHz（过采样率 ≈ 153）。

- $|NTF| = (2\sin(\pi f/f_s))^2$；带内噪声 $n_0^2 = \dfrac{\Delta^2}{12}\dfrac{2}{f_s}\int_0^{f_B}16\sin^4\dfrac{\pi f}{f_s}df \approx \dfrac{\Delta^2}{12}\dfrac{\pi^4}{5}\left(\dfrac{2f_B}{f_s}\right)^5$。
- 要求 $n_0^2 \le \Delta^2/(12\cdot 2^{32})$：$(2f_B/f_s)^5 \le 5/(\pi^4 2^{32}) = 1.20\times10^{-11}$。
- 因此 $2f_B/f_s \le 6.54\times10^{-3}$（M ≈ 153），$f_B \le 32.7$ kHz。

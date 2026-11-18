$f_B \approx 43$ kHz（过采样率 ≈ 116）。

- $n_0^2 = \int_0^{f_B}|N(f)|^2 df = \dfrac{4V_{REF}^2}{12}\dfrac{2}{f_s}\int_0^{f_B}\sin^4\dfrac{\pi f}{f_s}df \approx \dfrac{V_{REF}^2}{12}\cdot\dfrac{8\pi^4}{5}\left(\dfrac{f_B}{f_s}\right)^5$（小角度近似）。
- 要求 $n_0^2 \le V_{REF}^2/(12\cdot 2^{32})$：$(f_B/f_s)^5 \le 5/(8\pi^4 2^{32}) = 1.49\times10^{-12}$。
- 因此 $f_B/f_s \le 4.31\times10^{-3}$，$f_B \le 43.1$ kHz。

# Golden Solution - A550

## Reference answer

$f_B \approx 43$ kHz (oversampling ratio ≈ 116).

- $n_0^2 = \int_0^{f_B}|N(f)|^2 df = \dfrac{4V_{REF}^2}{12}\dfrac{2}{f_s}\int_0^{f_B}\sin^4\dfrac{\pi f}{f_s}df \approx \dfrac{V_{REF}^2}{12}\cdot\dfrac{8\pi^4}{5}\left(\dfrac{f_B}{f_s}\right)^5$ (small-angle approximation).
- Requirement $n_0^2 \le V_{REF}^2/(12\cdot 2^{32})$: $(f_B/f_s)^5 \le 5/(8\pi^4 2^{32}) = 1.49\times10^{-12}$.
- So $f_B/f_s \le 4.31\times10^{-3}$ and $f_B \le 43.1$ kHz.

## Grading notes

+2: $f_B$ ≈ 43 kHz (±5 %) from integrating $|N(f)|^2$ and applying the stated criterion. +1: within ±15 % through an approximation slip, or the correct integral with an arithmetic error in the 5th root. 0: correct integration but compared with one full LSB ($V_{REF}/2^{16}$) instead of the stated criterion, giving ≈ 71 kHz, with the reasoning shown. −2 (asserted as fact): integrating $|N|$ instead of $|N|^2$, a first-order (cubic) dependence, or a result off by an order of magnitude.

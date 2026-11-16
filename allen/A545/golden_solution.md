# Golden Solution - A545

## Reference answer

$f_B \approx 18.8$ kHz (oversampling ratio $f_s/2f_B \approx 266$).

- In-band noise power: $n_0^2 = \int_0^{f_B}|N(f)|^2df = \dfrac{16\Delta^2}{12}\dfrac{2}{f_s}\int_0^{f_B}\sin^4\dfrac{\pi f}{f_s}\,df$.
- For $f_B \ll f_s$, $\sin x \approx x$: $n_0^2 \approx \dfrac{\Delta^2}{12}\dfrac{\pi^4}{5}\left(\dfrac{2f_B}{f_s}\right)^5$.
- Requirement $n_0^2 \le \Delta^2/(12\cdot 2^{36})$: $(2f_B/f_s)^5 \le 5/(\pi^4 2^{36}) = 7.47\times10^{-13}$, so $2f_B/f_s \le 3.76\times10^{-3}$ and $f_B \le 18.8$ kHz.
- Assumptions: linearized white-noise model, ideal brick-wall decimation filter, $\sin x \approx x$ in band (exact integration gives the same value to < 0.1 %).

## Grading notes

+2: $f_B$ ≈ 18.8 kHz (±5 %), from integrating $|N(f)|^2$ over 0…$f_B$ with the small-angle approximation (or exactly) and applying the stated 18-bit criterion; assumptions stated. +1: correct method and result within ±15 %, or the correct integral expression with a slip in the 5th root. 0: correct integration but a different noise criterion than the one stated (e.g., $n_0 \le \Delta/2^{18}$, giving ≈ 31 kHz), with the reasoning shown. −2 (asserted as fact): integration of $|N(f)|$ instead of $|N(f)|^2$, a first-order noise formula, or a bandwidth in the MHz range.

# Golden Solution - A553

## Reference answer

$f_B \approx 32.7$ kHz (oversampling ratio ≈ 153).

- $|NTF| = (2\sin(\pi f/f_s))^2$; in-band noise $n_0^2 = \dfrac{\Delta^2}{12}\dfrac{2}{f_s}\int_0^{f_B}16\sin^4\dfrac{\pi f}{f_s}df \approx \dfrac{\Delta^2}{12}\dfrac{\pi^4}{5}\left(\dfrac{2f_B}{f_s}\right)^5$.
- Requirement $n_0^2 \le \Delta^2/(12\cdot 2^{32})$: $(2f_B/f_s)^5 \le 5/(\pi^4 2^{32}) = 1.20\times10^{-11}$.
- So $2f_B/f_s \le 6.54\times10^{-3}$ (M ≈ 153) and $f_B \le 32.7$ kHz.

## Grading notes

+2: $f_B$ ≈ 32.7 kHz (±5 %), equivalently M ≈ 153, from the second-order in-band noise and the stated criterion. +1: within ±15 % through an approximation slip. 0: M ≈ 153 correct but $f_B$ taken as $f_s/M$ (≈ 65 kHz), or correct integration with a different criterion than stated (rms noise ≤ Δ/2^16 gives ≈ 54 kHz; a third-order NTF gives a different value), reasoning shown. −2 (asserted as fact): the given NTF read as $(1 - z^{-1})^{-2}$ (noise amplified at low frequency) and a bandwidth derived from it, or a first-order noise formula.

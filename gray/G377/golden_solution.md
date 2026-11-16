# Golden Solution - G377

## Reference answer

$f \approx 133$ kHz.

- $C_{ox} = 3.45\times10^{-11}/8\times10^{-9} = 4.31\times10^{-3}$ F/m², $C_{gs} = \frac{2}{3}\times4.31\text{ fF}/\mu\text{m}^2\times25\ \mu\text{m}^2 = 71.9$ fF.
- $2qI_G = 1.6\times10^{-35}$ A²/Hz.
- $\omega^2 = \dfrac{2qI_G}{\frac{16}{15}kTC_{gs}^2} = \dfrac{1.6\times10^{-35}}{4.43\times10^{-21}\times5.17\times10^{-27}} = 6.99\times10^{11}$ s⁻² → $\omega = 8.36\times10^5$ rad/s → $f = 133$ kHz.

## Grading notes

+2: 125–140 kHz. +1: a slip under 10% (e.g., $kT$ at 290 K). 0: right setup with ω/f confusion (836 k reported as Hz) or a $C_{gs}$ slip (e.g., $C_{ox}WL$ without 2/3, giving ≈ 89 kHz). −2 (asserted as fact): the induced gate noise taken as independent of frequency, $C_{gs}$ off by orders of magnitude, or the claim that the two can never be equal.

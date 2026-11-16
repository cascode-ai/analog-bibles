# Golden Solution - G378

## Reference answer

$f_{BW} \approx 230$ kHz ($=\sqrt3$ times the 133-kHz frequency at which the spectral densities are equal).

- Shot: $\int_0^{f_{BW}}2qI_G\,df = 2qI_Gf_{BW}$.
- Coupled: $\int_0^{f_{BW}}\frac{16}{15}kT(2\pi f)^2C_{gs}^2\,df = \frac{16}{15}kT(2\pi)^2C_{gs}^2\frac{f_{BW}^3}{3}$.
- Equal: $f_{BW}^2 = \dfrac{3\cdot2qI_G}{\frac{16}{15}kT(2\pi)^2C_{gs}^2} = 3f_0^2$ with $f_0 = 133$ kHz ($C_{gs} = 71.9$ fF, $2qI_G = 1.6\times10^{-35}$ A²/Hz) → $f_{BW} = 230.6$ kHz.

## Grading notes

+2: 220–240 kHz with the $f^3/3$ integral. +1: correct method with a slip under 10%. 0: right integrals but an algebra slip (e.g., $f_{BW} = 3f_0$ or $f_0/\sqrt3$). −2 (asserted as fact): the coupled noise integrated as white (giving $f_0$), or the claim that the totals are equal at the spot-density crossover.

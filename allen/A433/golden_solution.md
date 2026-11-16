# Golden Solution - A433

## Reference answer

$T \approx 1.05$ µs.

- Closed-loop bandwidth $\omega_H = \beta\cdot GB$ with $\beta = 1/(1 + D)$; the worst case is the step from 0000 to 1111: $\beta = 16/31$, $\omega_H = 2\pi(10^6)(16/31) = 3.24\times10^6$ rad/s, final value $15V_{REF}/16$.
- $\dfrac{15}{16}V_{REF}e^{-\omega_H T} \le \dfrac{V_{REF}}{32}$ → $T = \ln(30)/\omega_H = 1.049$ µs (with the error referred to $V_{REF}$, $\ln 32/\omega_H$ = 1.07 µs).

## Grading notes

+2: 1.0–1.1 µs obtained with β = 16/31 (worst code) and a 0.5-LSB settling criterion. +1: correct method and β, with a slightly different but stated settling criterion, or β ≈ 1/2 used as an explicit approximation. 0: right approach with an arithmetic slip. −2 (asserted as fact): β = 1 (≈ 0.54 µs), GB in hertz used as rad/s (≈ 6.6 µs), or a time based on one time constant.

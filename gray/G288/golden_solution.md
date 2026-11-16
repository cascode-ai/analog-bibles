# Golden Solution - G288

## Reference answer

Loop gain $T(j\omega) = \dfrac{10}{(1+jx)(1+jx/2)(1+jx/4)}$ with $x$ = frequency in MHz ($T_0 = a_0 f = 200 \times 0.05 = 10$).

Key points of the Nyquist plot (polar plot of $T(j\omega)$ for $\omega$ from 0 to ∞):
- $x = 0$: $T = 10\angle 0°$ (starts on the positive real axis).
- 0.5 MHz: $8.6\angle -47.7°$; 1 MHz: $6.1\angle -85.6°$.
- Crosses the negative imaginary axis at 1.07 MHz with $T = -j5.82$.
- 2 MHz: $2.83\angle -135°$; 3 MHz: $1.40\angle -164.7°$.
- $|T| = 1$ at 3.54 MHz, where the phase is $-176.3°$ (phase margin ≈ 3.7°).
- Crosses the negative real axis at $f_{180} = \sqrt{14}$ MHz = 3.74 MHz with $T = -0.889$.
- 5 MHz: $0.455\angle -198°$; then spirals into the origin, approaching it from the $+j$ side with phase → $-270°$.

Stability: the open-loop poles are all in the left half-plane, and the locus crosses the negative real axis at $-0.889$, to the right of the critical point $-1$, so $-1$ is not encircled and the feedback amplifier is stable. It is only marginally stable: gain margin $1/0.889$ = 1.0 dB and phase margin ≈ 3.7°, so the closed-loop response would be strongly peaked and ringing.

Derivation of the real-axis crossing: with $s$ normalized to $2\pi \times 1$ MHz, the denominator is $(s+1)(s+2)(s+4)/8 = (s^3 + 7s^2 + 14s + 8)/8$. At $s = j\omega$ the imaginary part $\omega(14 - \omega^2)$ vanishes at $\omega = \sqrt{14}$, where the real part is $8 - 7 \times 14 = -90$, so $T = 10 \times 8/(-90) = -0.889$.

## Grading notes

+2: correct Nyquist shape (starts at 10 on the positive real axis, passes through the third and second quadrants clockwise and ends at the origin from the $-270°$ direction), the negative-real-axis crossing at ≈ −0.89 (±0.03) near 3.7 MHz, and the conclusion "stable because −1 is not encircled", noting the small margins. Notation slips that change no value (e.g. ω and f, or rad/s and Hz, mixed in a label or in the normalisation of an optional Routh check while the numbers are computed consistently) are trivial and do not lower +2. +1: correct crossing value and conclusion with a sketchy or partly wrong shape, or crossing value off by a slip (but still > −1) with a sound argument. 0: correct method but a slip that puts the crossing beyond −1 while the reasoning is otherwise right, or conclusion right with no supporting calculation. −2 (asserted as fact): "unstable", a crossing beyond −1 from a wrong formula, or stability judged from $T_0 > 1$ alone.

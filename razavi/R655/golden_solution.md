# Golden Solution - R655

## Reference answer

- For ζ < 1 the poles are $s_{1,2} = -\zeta\omega_n \pm j\omega_n\sqrt{1 - \zeta^2}$, with $\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO}$ and $\zeta\omega_n = \omega_{LPF}/2$.
- Their distance from the origin is $|s_1| = \sqrt{\zeta^2\omega_n^2 + \omega_n^2(1 - \zeta^2)} = \omega_n$. (Equivalently, the product of the poles is $\omega_n^2$ and their sum is $-2\zeta\omega_n$.)
- φ is measured from the negative real axis, so $\cos\varphi = |\mathrm{Re}\,s_1|/|s_1| = \zeta\omega_n/\omega_n = \zeta$.
- Consequence: on the locus the real part stays at $-\omega_{LPF}/2$ while $|s| = \omega_n$ grows with $K_{PD}K_{VCO}$. So φ → 90° and ζ → 0 as the gain increases, and ζ = 1 at φ = 0 (the break-away point $-\omega_{LPF}/2$, where $K_{PD}K_{VCO} = \omega_{LPF}/4$).

## Grading notes

+2: shows that $|s| = \omega_n$ and Re s = $-\zeta\omega_n$, hence cos φ = ζ; any equivalent geometric or algebraic argument counts. +1: correct argument with a minor notational slip (e.g., the angle measured from the positive real axis but the magnitudes handled correctly). 0: the result only asserted, or only checked numerically. -2 (asserted as fact): $|s| = \zeta\omega_n$, or $\cos\varphi = \sqrt{1 - \zeta^2}$ presented as the proof's outcome.

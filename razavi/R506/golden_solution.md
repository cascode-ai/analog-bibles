# Golden Solution - R506

## Reference answer

$A = A_0/(1 + A_0)$, $\omega_{pB} \approx (1 + A_0)\omega_{p1}$, $\omega_{pA} \approx \omega_{p2}$ (≈ $\omega_z$). For an input step $V_0u(t)$:
$$V_{out}(t) = AV_0\left[1 - K_Ae^{-\omega_{pA}t} - K_Be^{-\omega_{pB}t}\right],\quad K_A = \frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}},\ K_B = \frac{1 - \omega_{pB}/\omega_z}{1 - \omega_{pB}/\omega_{pA}},$$
with $K_A + K_B = 1$ (so $V_{out}(0^+) = 0$). For $\omega_{pB} \gg \omega_{pA}, \omega_z$: $V_{out}(t) \approx AV_0\left[1 - \dfrac{\omega_{pA}}{\omega_z}e^{-(1 + A_0)\omega_{p1}t} - \left(1 - \dfrac{\omega_{pA}}{\omega_z}\right)e^{-\omega_{pA}t}\right]$.
- Dividing the denominator by $1 + A_0$: $b/(1 + A_0)$ with $b = 1/\omega_{p1} + 1/\omega_{p2} + A_0/\omega_z \approx 1/\omega_{p1} + (1 + A_0)/\omega_{p2}$. Since $\omega_{p2} \ll (1 + A_0)\omega_{p1}$, the second term dominates and $\omega_{pA} = (1 + A_0)/b \approx \omega_{p2}$. Also $\omega_{pB} = b\,\omega_{p1}\omega_{p2} \approx (1 + A_0)\omega_{p1}$, and the two are widely spaced.
- Partial fractions of $H_{closed}(s)V_0/s$ give the residues above.
- Exact cancellation ($\omega_z = \omega_{p2}$, hence $\omega_{pA} = \omega_z$): $K_A = 0$, $K_B = 1$, and $V_{out} = AV_0[1 - e^{-(1 + A_0)\omega_{p1}t}]$, a single time constant with no overshoot.

## Grading notes

+2: $A = A_0/(1 + A_0)$, $\omega_{pB} \approx (1 + A_0)\omega_{p1}$, $\omega_{pA} \approx \omega_{p2}$ (or ≈ $\omega_z$), and a step response with two exponentials from partial fractions that reduces to a single exponential for exact cancellation. +1: poles and gain right, step response with one residue wrong or unsimplified. 0: only the factored form, no step response. -2 (asserted as fact): $\omega_{pB} \approx \omega_{p1}$ or $A = A_0$, overshoot/ringing claimed for the doublet case, or a step response with nonzero $V_{out}(0^+)$.

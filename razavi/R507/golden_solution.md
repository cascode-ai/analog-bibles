# Golden Solution - R507

## Reference answer

The closed-loop pole near the doublet sits at $\omega_{pA} \approx \omega_z\left[1 - \dfrac{\omega_z}{(1 + A_0)\omega_{p1}}\left(1 - \dfrac{\omega_z}{\omega_{p2}}\right)\right]$, very close to the zero. Its term in the step response (input step $V_0$) is
$$-AV_0\frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}}e^{-\omega_{pA}t} \approx -AV_0\frac{\omega_z}{(1 + A_0)\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right)e^{-\omega_zt},$$
with $A = A_0/(1 + A_0)$ and $\omega_{pB} \approx (1 + A_0)\omega_{p1}$. Its amplitude is proportional to $1 - \omega_z/\omega_{p2}$ (zero for exact cancellation), and it decays with time constant ≈ $1/\omega_z$ (≈ $1/\omega_{p2}$), slower than the main exponential, whose time constant is $1/[(1 + A_0)\omega_{p1}]$: a slow-settling tail.
- Denominator $D(s) = (1 + s/\omega_{p1})(1 + s/\omega_{p2}) + A_0(1 + s/\omega_z)$. At $s = -\omega_z$: $D(-\omega_z) = (1 - \omega_z/\omega_{p1})(1 - \omega_z/\omega_{p2}) \approx -(\omega_z/\omega_{p1})(1 - \omega_z/\omega_{p2})$. Also $D'(-\omega_z) \approx A_0/\omega_z$ (because $A_0\omega_{p1} \gg \omega_z$). One Newton step gives $\omega_{pA}$ above.
- Hence $1 - \omega_{pA}/\omega_z \approx \dfrac{\omega_z}{(1 + A_0)\omega_{p1}}(1 - \omega_z/\omega_{p2})$. The residue at $-\omega_{pA}$ of $H_{closed}V_0/s$ gives the term shown.
- Simply setting $\omega_{pA} = \omega_{p2}$ in the residue gives an amplitude $1 - \omega_{p2}/\omega_z \approx -(1 - \omega_z/\omega_{p2})$: the same dependence on the mismatch, but larger by ≈ $(1 + A_0)\omega_{p1}/\omega_{p2}$, because in reality the closed-loop pole migrates to the zero. Example: $A_0$ = 1000, $\omega_{p1}$ = 10⁶, $\omega_{p2}$ = 10⁸, $\omega_z$ = 1.1×10⁸ rad/s gives a tail of ≈ +1.4% of the final value (the approximate formula gives 1.1%), not 10%.

## Grading notes

+2: shows that the residue at the closed-loop pole near the zero is proportional to $1 - \omega_z/\omega_{p2}$ (vanishing for exact cancellation) and that this term decays with a time constant ≈ $1/\omega_z$ (≈ $1/\omega_{p2}$). The accurate coefficient (≈ $\omega_z/[(1 + A_0)\omega_{p1}]$) earns full credit; leaving the constant general is also fine if no false claim is made about it. +1: derivation that substitutes $\omega_{pA} = \omega_{p2}$ and asserts that the tail amplitude equals about $|1 - \omega_z/\omega_{p2}|$ itself (unit coefficient), otherwise sound. 0: restates the claim with little derivation. -2 (asserted as fact): tail amplitude independent of the mismatch, its time constant given as $1/[(1 + A_0)\omega_{p1}]$, or a claim that the doublet causes overshoot/ringing.

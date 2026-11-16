# Golden Solution - R504

## Reference answer

With unity-gain feedback, $H_{closed} = H_{open}/(1 + H_{open})$. Multiplying numerator and denominator by $(1 + s/\omega_{p1})(1 + s/\omega_{p2})$:
$$H_{closed} = \frac{A_0(1 + s/\omega_z)}{(1 + s/\omega_{p1})(1 + s/\omega_{p2}) + A_0(1 + s/\omega_z)}.$$
Expanding $(1 + s/\omega_{p1})(1 + s/\omega_{p2}) = 1 + s(1/\omega_{p1} + 1/\omega_{p2}) + s^2/(\omega_{p1}\omega_{p2})$ and adding $A_0 + A_0s/\omega_z$ gives the denominator $s^2/(\omega_{p1}\omega_{p2}) + (1/\omega_{p1} + 1/\omega_{p2} + A_0/\omega_z)s + A_0 + 1$. Check: for $\omega_z = \omega_{p2}$ the factor $(1 + s/\omega_{p2})$ cancels and $H_{closed} = A_0/(1 + A_0 + s/\omega_{p1})$, a single pole at $(1 + A_0)\omega_{p1}$.

## Grading notes

+2: correct use of $H/(1 + H)$ and clean algebra to the stated form. +1: correct but with a skipped step or a minor notational slip. 0: setup right, algebra incomplete. -2 (asserted as fact): uses $H/(1 - H)$ or $1/(1 + H)$, or reaches a different denominator and claims it matches.

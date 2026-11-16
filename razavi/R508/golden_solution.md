# Golden Solution - R508

## Reference answer

$V_{out}(t) = V_0\dfrac{A_0}{1 + A_0}\left[1 - e^{-t/\tau}\right]u(t)$ with $\tau = \dfrac{1}{(1 + A_0)\omega_{p1}} = \dfrac{1}{495 \times 3.66\times10^6} \approx 0.55$ ns.
- With $\omega_z = \omega_{p2}$, $H_{open} = A_0/(1 + s/\omega_{p1})$ and $H_{closed} = \dfrac{A_0/(1 + A_0)}{1 + s/[(1 + A_0)\omega_{p1}]}$: a single pole at 1.81×10⁹ rad/s (≈ 288 MHz).
- Final value 0.998 $V_0$ (0.2% static error). Single exponential, no overshoot. Settling to 1% of the final value takes 4.6τ ≈ 2.5 ns; to 0.1%, 6.9τ ≈ 3.8 ns.

## Grading notes

+2: single-exponential response, τ = 0.5–0.6 ns, final value $A_0V_0/(1 + A_0)$. +1: correct form with the final value taken as $V_0$ (static error ignored), or a small slip in τ. 0: right form with τ wrong by a slip. -2 (asserted as fact): overshoot or ringing, τ = $1/\omega_{p1}$ or $1/\omega_{p2}$, or a two-exponential response for perfect cancellation.

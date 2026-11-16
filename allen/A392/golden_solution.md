# Golden Solution - A392

## Reference answer

About 0.46 µs; the final value is $\dfrac{A_0}{1+A_0}V_{OS} = 0.999\,V_{OS}$.
- In unity-gain feedback the single-pole comparator gives $v_{out}(s)/V_{OS} = \dfrac{A_0}{1+A_0}\cdot\dfrac{1}{1+s/[\omega_p(1+A_0)]}$.
- Closed-loop pole: $\omega_p(1+A_0) = 10^4\times1001 = 1.001\times10^7$ rad/s, $\tau = 99.9$ ns.
- 99 % of the final value: $t = \tau\ln 100 = 4.6\tau \approx 0.46\ \mu$s.
- Final value: $1000/1001\,V_{OS} = 0.999\,V_{OS}$ (finite gain leaves a residual of $V_{OS}/1001$).
(Assumes the comparator output can drive $C_{AZ}$ without slewing and that $C_{AZ}$ does not change the dominant pole.)

## Grading notes

+2: closed-loop time constant ≈ 0.1 µs, $t_{99\%}$ ≈ 0.46 µs (0.44–0.48 µs), and final value $A_0V_{OS}/(1+A_0) \approx 0.999V_{OS}$. +1: correct time with the final value given as exactly $V_{OS}$ (finite-gain error missed), or the right final value with a slip in the time. 0: one of the two results right. −2 (asserted as fact): open-loop time constant used (τ = 100 µs, t ≈ 460 µs), final value claimed to be $A_0V_{OS}$ or $V_{OS}/A_0$, or the capacitor claimed to charge to zero.

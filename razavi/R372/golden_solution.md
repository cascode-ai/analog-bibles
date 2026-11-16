# Golden Solution - R372

## Reference answer

$$\overline{V_{n,in}^2}(\omega) = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right) + \left(\frac{\omega C_X}{g_{m1}}\right)^2 4kT\left(\frac{\gamma}{g_{m2}} + \frac{1}{g_{m2}^2R_D}\right)$$

- KCL at X: $-g_{m2}V_X + I_{n2} = g_{m1}V_{in} + I_{n1} + sC_XV_X$, so the current through $M_2$ into the output is $I_2 = \dfrac{g_{m2}(g_{m1}V_{in} + I_{n1}) + sC_XI_{n2}}{g_{m2} + sC_X}$ and $V_{out} = -R_DI_2 + R_DI_{n,RD}$.
- Signal gain: $-g_{m1}R_D\dfrac{g_{m2}}{g_{m2} + sC_X}$ ($C_X$ steals signal current at high frequency).
- Referred to the input: $V_{n,eq} = \dfrac{I_{n1}}{g_{m1}} + \dfrac{sC_X}{g_{m1}g_{m2}}I_{n2} - \dfrac{g_{m2} + sC_X}{g_{m1}g_{m2}}I_{n,RD}$, giving the expression above (with $s = j\omega$).
- At low frequency this is the CS result and $M_2$ contributes nothing; at high frequency $M_2$'s noise grows as $\omega^2$ and $R_D$'s referred noise rises as well.

## Grading notes

+2: expression equivalent to the reference: $M_1$ term unchanged, $M_2$ term $4kT\gamma\omega^2C_X^2/(g_{m1}^2g_{m2})$, and the $R_D$ term multiplied by $1 + \omega^2C_X^2/g_{m2}^2$. +1: $M_2$ term right but the frequency-dependent increase of the $R_D$ term missed (or vice versa). 0: only the qualitative statement that $M_2$'s noise appears at high frequency, with an incomplete expression. -2 (asserted as fact): $M_2$'s noise claimed negligible at all frequencies, $C_X$ said to reduce the noise, or the output noise not divided by the reduced (frequency-dependent) gain while presented as exact.

# Golden Solution - R382

## Reference answer

$$\overline{V_{n,out,tot}^2} = A_0^2\,kTR_S\,\omega_0\quad(\mathrm{V^2}),\qquad V_{n,out,rms} = A_0\sqrt{kTR_S\omega_0}$$

- No input current, so the full noise voltage of $R_S$ appears at the amplifier input: $S_{out}(f) = \dfrac{4kTR_SA_0^2}{1 + (2\pi f/\omega_0)^2}$.
- $\displaystyle\int_0^\infty \frac{df}{1 + (2\pi f/\omega_0)^2} = \frac{\omega_0}{2\pi}\cdot\frac{\pi}{2} = \frac{\omega_0}{4}$ (noise bandwidth $\pi f_0/2$ with $f_0 = \omega_0/2\pi$).
- Total: $4kTR_SA_0^2\cdot\omega_0/4 = A_0^2kTR_S\omega_0$ (equivalently $2\pi A_0^2kTR_Sf_0$ with $f_0 = \omega_0/2\pi$).

## Grading notes

+2: $A_0^2kTR_S\omega_0$ (or $2\pi A_0^2kTR_Sf_0$) with the correct one-sided integration. +1: correct integral setup with a factor-of-2 or 2π slip in the final value. 0: correct output PSD without the integral evaluated. -2 (asserted as fact): result independent of $R_S$ (e.g., $kT/C$-type answer with no capacitor given), the gain not squared, or the noise taken as $4kT/R_S$ voltage.

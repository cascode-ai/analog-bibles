# Golden Solution - R383

## Reference answer

With $R_0 = R_D\|r_O$:
$$S_{out}(f) = \frac{4kT\left[(\gamma g_m + 1/R_D)R_0^2 + R_P\right]}{1 + [2\pi f(R_0 + R_P)C_L]^2},\qquad \overline{V_{n,out,tot}^2} = \frac{kT}{C_L}\cdot\frac{(\gamma g_m + 1/R_D)R_0^2 + R_P}{R_0 + R_P}$$

- At the drain, the noise currents of $M_1$ and $R_D$ flow into $R_0$, giving a Thevenin noise voltage $4kT(\gamma g_m + 1/R_D)R_0^2$ behind $R_0$. $R_P$ adds $4kTR_P$ in series. The total series resistance $R_0 + R_P$ drives $C_L$: a single pole at $1/[2\pi(R_0+R_P)C_L]$.
- Integration: $\int_0^\infty \dfrac{df}{1 + (2\pi f\tau)^2} = \dfrac{1}{4\tau}$ with $\tau = (R_0 + R_P)C_L$.
- Checks: if $M_1$ were noiseless and $r_O \to \infty$ ($R_0 = R_D$), the result is $kT/C_L$; the transistor term $\gamma g_mR_0^2/(R_0+R_P)$ can make it exceed $kT/C_L$.

## Grading notes

+2: correct PSD (both Thevenin terms and $R_P$, pole with $R_0 + R_P$, $R_0 = R_D\|r_O$) and the integrated value equivalent to the reference. +1: correct with $r_O$ omitted (using $R_D$ only) and stated, or a factor slip in the integral. 0: correct PSD without the integral, or the integral right but one noise source missing. -2 (asserted as fact): total noise claimed to be exactly $kT/C_L$ regardless of the transistor, the pole placed at $1/(2\pi R_PC_L)$ or $1/(2\pi R_0C_L)$ alone, or $r_O$ treated as a noise source.

# Detailed solution - R383

**Approach.** Seen from its drain, the common-source stage is a noise voltage behind $R_0 = R_D\parallel r_O$. Adding $R_P$ and its noise gives a series RC network driving $C_L$, so the output PSD is the total series noise voltage times a single-pole low-pass response, and integrating it gives the total output noise.

### Step 1 — Noise sources

Call the drain node X. With the input at ac ground, $g_mv_{gs} = 0$, and X sees $R_D$ to ac ground (noise current $\overline{I_{nD}^2} = 4kT/R_D$), the **noiseless** $r_O$ to ground, and $M_1$'s channel noise $\overline{I_{n1}^2} = 4kT\gamma g_m$ to ground. $R_P$ runs from X to the output with series noise $\overline{V_{nP}^2} = 4kTR_P$, and $C_L$ connects the output to ground.

### Step 2 — Thévenin equivalent at the drain

With $R_P$ disconnected, both noise currents flow into

$$R_0 = R_D\parallel r_O = \frac{R_Dr_O}{R_D + r_O},$$

so the open-circuit noise voltage at X is

$$\overline{V_{n,Th}^2} = \left(\overline{I_{n1}^2} + \overline{I_{nD}^2}\right)R_0^2 = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 ,$$

behind a Thévenin resistance $R_0$.

### Step 3 — The output network

From ground to the output: $V_{n,Th}$, $R_0$, then $R_P$ with its series noise $V_{nP}$, and $C_L$ back to ground.

<!-- diagram: diagram-01.cir -->

The two uncorrelated noise voltages in the same loop combine into one source driving $R_0 + R_P$ into $C_L$:

$$\overline{V_{n,tot}^2} = 4kT\left[\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 + R_P\right],$$

$$\frac{V_{out}}{V_{n,tot}} = \frac{1/(sC_L)}{R_0 + R_P + 1/(sC_L)} = \frac{1}{1 + s(R_0 + R_P)C_L}.$$

With $\tau = (R_0 + R_P)C_L$, the single pole is at $f_p = 1/(2\pi\tau)$, set by the *total* resistance $R_0 + R_P$.

### Step 4 — Output noise spectrum

$$S_{out}(f) = \frac{\overline{V_{n,tot}^2}}{1 + (2\pi f\tau)^2} = \frac{4kT\left[\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P\right]}{1 + \left[2\pi f(R_0 + R_P)C_L\right]^2},$$

flat up to $f_p$ and falling as $1/f^2$ above.

### Step 5 — Total integrated noise

With $x = 2\pi f\tau$:

$$\int_0^\infty\frac{df}{1 + (2\pi f\tau)^2} = \frac{1}{2\pi\tau}\int_0^\infty\frac{dx}{1 + x^2} = \frac{1}{2\pi\tau}\cdot\frac{\pi}{2} = \frac{1}{4\tau},$$

so

$$
\begin{aligned}
\overline{V_{n,out,tot}^2} = \int_0^\infty S_{out}(f)\,df &= \frac{4kT\left[\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P\right]}{4(R_0 + R_P)C_L}\\
&= \frac{kT}{C_L}\cdot\frac{\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P}{R_0 + R_P}.
\end{aligned}
$$

### Step 6 — Checks and interpretation

**Purely resistive check.** With a noiseless $M_1$ ($\gamma = 0$) and $r_O \to \infty$ ($R_0 = R_D$):

$$\frac{(1/R_D)R_D^2 + R_P}{R_D + R_P} = \frac{R_D + R_P}{R_D + R_P} = 1 \;\Rightarrow\; \overline{V_{n,out,tot}^2} = \frac{kT}{C_L},$$

the classic result for resistors driving a capacitor.

**Effect of $r_O$.** With $\gamma = 0$ but finite $r_O$, the factor is $(R_0^2/R_D + R_P)/(R_0 + R_P) < 1$: $r_O$ lowers the resistance without adding noise.

**Effect of the transistor.** The term $\gamma g_mR_0^2/(R_0 + R_P)$ can push the total well above $kT/C_L$, since the transistor noise is scaled by $R_0^2$ while the bandwidth is set by $R_0 + R_P$. For example, with $r_O = R_D$ ($R_0 = R_D/2$), $g_mR_0 = 10$, $R_P = R_0$ and $\gamma = 2/3$, the factor is $(6.67 + 0.5 + 1)R_0/(2R_0) \approx 4.1$, i.e. about $4.1\,kT/C_L$.

### Result

With $R_0 = R_D\parallel r_O$:

$$S_{out}(f) = \frac{4kT\left[\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P\right]}{1 + \left[2\pi f(R_0 + R_P)C_L\right]^2},$$

$$\overline{V_{n,out,tot}^2} = \frac{kT}{C_L}\cdot\frac{\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P}{R_0 + R_P}.$$

The drain behaves as a noise voltage $4kT(\gamma g_m + 1/R_D)R_0^2$ behind $R_0$, $R_P$ adds $4kTR_P$, and $R_0 + R_P$ with $C_L$ sets a single pole. For a noiseless transistor with $r_O \to \infty$ the total reduces to $kT/C_L$.

**Common mistake.** Asserting that the total is always $kT/C_L$. That holds only for passive resistors in thermal equilibrium; the transistor's noise is not tied to the resistance that sets the bandwidth, and the noiseless $r_O$ breaks the balance too.

**Common mistake.** Placing the pole at $1/(2\pi R_PC_L)$ or $1/(2\pi R_0C_L)$. $C_L$ charges through $R_0 + R_P$, so $\tau = (R_0 + R_P)C_L$.

**Common mistake.** Treating $r_O$ as a resistor with noise $4kT/r_O$. The transistor's noise is fully described by $4kT\gamma g_m$.

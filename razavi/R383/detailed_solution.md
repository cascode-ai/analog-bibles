# Detailed solution - R383

**Approach.** Replace the common-source stage, as seen from its drain, by a Thévenin equivalent: a noise voltage in series with the drain resistance $R_0 = R_D\parallel r_O$. Adding $R_P$ (with its own noise voltage) gives a simple series RC network driving $C_L$. The output PSD is the total series noise voltage times the squared magnitude of a single-pole low-pass response, and integrating it over frequency gives the total output noise.

### Step 1 — Noise sources and the small-signal model

Reading the figure: $M_1$ is a common-source device (gate = $V_{in}$, source grounded) with load $R_D$ to $V_{DD}$. Its drain, node X, connects through the series resistor $R_P$ to the output node, and $C_L$ connects the output to ground.

For the noise analysis the input is set to zero ($V_{in}$ at AC ground), so the controlled source $g_mv_{gs}$ of $M_1$ is zero. What remains at node X:

- $R_D$ from X to AC ground ($V_{DD}$), with noise current $\overline{I_{nD}^2} = 4kT/R_D$;
- $M_1$'s output resistance $r_O$ from X to ground. It models channel-length modulation and is **noiseless**;
- $M_1$'s channel noise current $\overline{I_{n1}^2} = 4kT\gamma g_m$ from X to ground.

Further:

- $R_P$ from X to the output, with noise voltage $\overline{V_{nP}^2} = 4kTR_P$ in series;
- $C_L$ from the output to ground (all other capacitances neglected).

Here $k$ is Boltzmann's constant, $T$ the absolute temperature, $\gamma$ the channel-noise coefficient and $g_m$ the transconductance of $M_1$.

### Step 2 — Thévenin equivalent at the drain

With $R_P$ disconnected, the two noise currents at X flow into the parallel resistance

$$R_0 = R_D\parallel r_O = \frac{R_Dr_O}{R_D + r_O}.$$

They are uncorrelated, so the open-circuit noise voltage at X has PSD

$$\overline{V_{n,Th}^2} = \left(\overline{I_{n1}^2} + \overline{I_{nD}^2}\right)R_0^2 = 4kT\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 .$$

The Thévenin resistance (all sources off) is $R_0$. So, seen from $R_P$, the stage is a noise voltage $V_{n,Th}$ in series with $R_0$.

### Step 3 — The output network

**The redrawn circuit in words.** Going from ground to the output: the source $V_{n,Th}$, then $R_0$, then $R_P$ with its series noise $V_{nP}$, and finally $C_L$ from the output back to ground.

<!-- diagram: diagram-01.cir -->

Both noise voltages are in series in the same loop, so they can be added into a single source $V_{n,tot} = V_{n,Th} + V_{nP}$ driving the series resistance $R_0 + R_P$ into $C_L$. Since they are uncorrelated:

$$\overline{V_{n,tot}^2} = 4kT\left[\left(\gamma g_m + \frac{1}{R_D}\right)R_0^2 + R_P\right].$$

**Transfer function.** The resistance $R_0 + R_P$ and $C_L$ form a voltage divider:

$$\frac{V_{out}}{V_{n,tot}} = \frac{1/(sC_L)}{R_0 + R_P + 1/(sC_L)} = \frac{1}{1 + s(R_0 + R_P)C_L}.$$

Define the time constant $\tau = (R_0 + R_P)C_L$. The single pole is at $f_p = 1/(2\pi\tau)$. Note that it is set by the *total* resistance $R_0 + R_P$, not by $R_P$ alone.

### Step 4 — Output noise spectrum

$$S_{out}(f) = \frac{\overline{V_{n,tot}^2}}{1 + (2\pi f\tau)^2} = \frac{4kT\left[\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P\right]}{1 + \left[2\pi f(R_0 + R_P)C_L\right]^2}.$$

It is flat at $4kT[(\gamma g_m + 1/R_D)R_0^2 + R_P]$ up to $f_p$ and falls as $1/f^2$ above.

### Step 5 — Total integrated noise

$$\overline{V_{n,out,tot}^2} = \int_0^\infty S_{out}(f)\,df = \overline{V_{n,tot}^2}\int_0^\infty\frac{df}{1 + (2\pi f\tau)^2}.$$

With $x = 2\pi f\tau$, $df = dx/(2\pi\tau)$:

$$\int_0^\infty\frac{df}{1 + (2\pi f\tau)^2} = \frac{1}{2\pi\tau}\int_0^\infty\frac{dx}{1 + x^2} = \frac{1}{2\pi\tau}\cdot\frac{\pi}{2} = \frac{1}{4\tau}.$$

Therefore

$$
\begin{aligned}
\overline{V_{n,out,tot}^2} &= \frac{4kT\left[\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P\right]}{4(R_0 + R_P)C_L}\\
&= \frac{kT}{C_L}\cdot\frac{\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P}{R_0 + R_P}.
\end{aligned}
$$

### Step 6 — Checks and interpretation

**Purely resistive check.** If $M_1$ were noiseless ($\gamma = 0$) and $r_O \to \infty$ ($R_0 = R_D$):

$$\frac{(1/R_D)R_D^2 + R_P}{R_D + R_P} = \frac{R_D + R_P}{R_D + R_P} = 1 \;\Rightarrow\; \overline{V_{n,out,tot}^2} = \frac{kT}{C_L},$$

the classic result for any network of resistors at temperature $T$ driving a capacitor: a larger resistance raises the noise density but narrows the bandwidth by the same factor.

**Effect of $r_O$.** With $\gamma = 0$ but finite $r_O$, the factor becomes $(R_0^2/R_D + R_P)/(R_0 + R_P) < 1$, because $r_O$ lowers the resistance (and hence the bandwidth limit) without adding noise of its own.

**Effect of the transistor.** The term $\gamma g_mR_0^2/(R_0 + R_P)$ can push the total well above $kT/C_L$, since the transistor's noise is amplified by $R_0$ while the bandwidth is set by $R_0 + R_P$. For example, with $r_O = R_D$ ($R_0 = R_D/2$), $g_mR_0 = 10$, $R_P = R_0$ and $\gamma = 2/3$, the factor is $(6.67 + 0.5 + 1)R_0/(2R_0) \approx 4.1$, i.e. about $4.1\,kT/C_L$.

### Result

With $R_0 = R_D\parallel r_O$:

$$S_{out}(f) = \frac{4kT\left[\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P\right]}{1 + \left[2\pi f(R_0 + R_P)C_L\right]^2},$$

$$\overline{V_{n,out,tot}^2} = \frac{kT}{C_L}\cdot\frac{\left(\gamma g_m + 1/R_D\right)R_0^2 + R_P}{R_0 + R_P}.$$

The drain behaves as a noise voltage $4kT(\gamma g_m + 1/R_D)R_0^2$ behind $R_0$, $R_P$ adds $4kTR_P$, and the total series resistance $R_0 + R_P$ with $C_L$ sets a single pole. For a noiseless transistor with $r_O \to \infty$ the total reduces to $kT/C_L$.

**Common mistake.** Asserting that the total is always $kT/C_L$. That holds only for networks of passive resistors in thermal equilibrium. The transistor's noise ($\gamma g_m$) is not tied to the resistance that sets the bandwidth, and the noiseless $r_O$ breaks the balance too.

**Common mistake.** Placing the pole at $1/(2\pi R_PC_L)$ or $1/(2\pi R_0C_L)$. The capacitor is charged through the series combination of the drain resistance and $R_P$, so $\tau = (R_0 + R_P)C_L$.

**Common mistake.** Treating $r_O$ as a resistor with noise $4kT/r_O$. $r_O$ only describes the dependence of the drain current on $V_{DS}$; the transistor's noise is fully described by $4kT\gamma g_m$.

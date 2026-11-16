# Detailed solution - R654

**Approach.** Derive the closed-loop transfer function of the type I PLL, read off $\omega_n$ and $\zeta$, note that $\zeta \propto 1/\sqrt{K_{VCO}}$, and translate $1 \le \zeta \le 1.5$ into a range of $K_{VCO}$.

### Step 1 — Closed-loop transfer function

With the phase detector $K_{PD}$, the filter $1/(1 + s/\omega_{LPF})$ and the VCO $K_{VCO}/s$ in the loop,

$$H_{open}(s) = K_{PD}\cdot\frac{1}{1 + s/\omega_{LPF}}\cdot\frac{K_{VCO}}{s} = \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF})},$$

with poles at $s = 0$ (VCO) and $s = -\omega_{LPF}$ (filter). With unity feedback, $H = H_{open}/(1 + H_{open})$; multiplying the numerator and denominator by $s(1 + s/\omega_{LPF})$, and then by $\omega_{LPF}$:

$$H(s) = \frac{K_{PD}K_{VCO}}{\dfrac{s^2}{\omega_{LPF}} + s + K_{PD}K_{VCO}} = \frac{\omega_{LPF}K_{PD}K_{VCO}}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} .$$

### Step 2 — Natural frequency and damping ratio

Matching the denominator to $s^2 + 2\zeta\omega_ns + \omega_n^2$:

$$\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO} \quad\Rightarrow\quad \omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}} ,$$

$$
\begin{aligned}
2\zeta\omega_n &= \omega_{LPF}\\
\zeta &= \frac{\omega_{LPF}}{2\omega_n} = \frac{\omega_{LPF}}{2\sqrt{\omega_{LPF}K_{PD}K_{VCO}}} = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} .
\end{aligned}
$$

With $K_{PD}$ and $\omega_{LPF}$ fixed,

$$\zeta \propto \frac{1}{\sqrt{K_{VCO}}} .$$

Since $\zeta\omega_n = \omega_{LPF}/2$ is fixed by the filter, a larger loop gain raises $\omega_n$ and must lower $\zeta$: on the root locus the poles meet at $-\omega_{LPF}/2$ ($\zeta = 1$) and then split into an ever less damped complex pair.

### Step 3 — Solve for $K_{VCO}$ at the two limits

Squaring and solving for $K_{VCO}$:

$$
\begin{aligned}
\zeta^2 &= \frac{\omega_{LPF}}{4K_{PD}K_{VCO}}\\
K_{VCO} &= \frac{\omega_{LPF}}{4\zeta^2K_{PD}} .
\end{aligned}
$$

**Upper limit of $K_{VCO}$** (smallest damping allowed, $\zeta = 1$):

$$K_{VCO,max} = \frac{\omega_{LPF}}{4\,(1)^2K_{PD}} = \frac{\omega_{LPF}}{4K_{PD}} .$$

**Lower limit of $K_{VCO}$** (largest damping allowed, $\zeta = 1.5$):

$$K_{VCO,min} = \frac{\omega_{LPF}}{4\,(1.5)^2K_{PD}} = \frac{\omega_{LPF}}{4\times2.25\,K_{PD}} = \frac{\omega_{LPF}}{9K_{PD}} .$$

The *largest* $K_{VCO}$ gives the *smallest* $\zeta$.

### Step 4 — Allowed variation

$$\frac{K_{VCO,max}}{K_{VCO,min}} = \frac{\omega_{LPF}/(4K_{PD})}{\omega_{LPF}/(9K_{PD})} = \frac94 = 2.25 = \left(\frac{1.5}{1}\right)^2 .$$

Because $\zeta \propto K_{VCO}^{-1/2}$, a 1.5:1 range in $\zeta$ needs a $1.5^2:1$ range in $K_{VCO}$. Across the range (with $K_{min} = K_{VCO,min}$ and $\zeta = 1.5\sqrt{K_{min}/K_{VCO}}$):

| $K_{VCO}/K_{min}$ | $\zeta$ | $\omega_n/\omega_{n,min}$ |
|---|---|---|
| 1.00 | 1.50 | 1.00 |
| 1.50 | $1.5/\sqrt{1.5} = 1.22$ | 1.22 |
| 2.00 | $1.5/\sqrt{2} = 1.06$ | 1.41 |
| 2.25 | $1.5/1.5 = 1.00$ | 1.50 |

**As percentages** (the reference point must be stated):

- *About the centre of the range.* The midpoint is $(K_{min} + 2.25K_{min})/2 = 1.625K_{min}$ and the half-width is $(2.25K_{min} - K_{min})/2 = 0.625K_{min}$, so the allowed variation is
$$\pm\frac{0.625}{1.625} = \pm0.385 \approx \pm38\ \%.$$
- *Relative to the $\zeta = 1$ value.* $K_{VCO}$ may drop to $4/9 = 0.444$ of $K_{VCO,max}$, a decrease of about 56 %.
- *Relative to the $\zeta = 1.5$ value.* $K_{VCO}$ may rise to $2.25$ times $K_{VCO,min}$, an increase of 125 %.

$\omega_n \propto \sqrt{K_{VCO}}$ changes by a factor $\sqrt{2.25} = 1.5$ across this range, but the question constrains only $\zeta$.

### Result

$$\zeta = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} \propto \frac{1}{\sqrt{K_{VCO}}}$$

so $1 \le \zeta \le 1.5$ requires

$$\frac{\omega_{LPF}}{9K_{PD}} \le K_{VCO} \le \frac{\omega_{LPF}}{4K_{PD}}, \qquad \frac{K_{VCO,max}}{K_{VCO,min}} = 2.25 .$$

$K_{VCO}$ can vary by a factor of 2.25 across the tuning range, i.e. about $\pm38\ \%$ around the centre value (a 56 % drop from the $\zeta = 1$ value, or a 125 % rise from the $\zeta = 1.5$ value).

**Common mistake.** Taking $\zeta$ proportional to $K_{VCO}$ (or to $\sqrt{K_{VCO}}$). The first gives a tolerable ratio of only 1.5, and both get the direction wrong: from $2\zeta\omega_n = \omega_{LPF}$ and $\omega_n \propto \sqrt{K_{VCO}}$, $\zeta \propto 1/\sqrt{K_{VCO}}$.

**Common mistake.** Assuming $\zeta$ does not depend on $K_{VCO}$ because it "only sets the bandwidth". In this type I PLL $\zeta\omega_n$ is fixed at $\omega_{LPF}/2$, so damping and bandwidth cannot be set independently.

**Common mistake.** Quoting "125 %" and "56 %" as if both were a symmetric ±tolerance. The ratio is 2.25, which is ±38 % about the midpoint.

# Detailed solution - R654

**Approach.** Derive the closed-loop transfer function of the type I PLL in the linear phase-domain model, read off the natural frequency $\omega_n$ and the damping ratio $\zeta$, and note that $\zeta \propto 1/\sqrt{K_{VCO}}$. Then translate the allowed range $1 \le \zeta \le 1.5$ into an allowed range of $K_{VCO}$.

### Step 1 — Open-loop transfer function

In the locked state the PLL is described by the excess phases of the input and output, $\Phi_{in}(s)$ and $\Phi_{out}(s)$. The three blocks are:

- **phase detector:** $V_{PD} = K_{PD}(\Phi_{in} - \Phi_{out})$, with gain $K_{PD}$ in V/rad;
- **low-pass filter:** $V_{cont} = V_{PD}/(1 + s/\omega_{LPF})$;
- **VCO:** its frequency changes by $K_{VCO}V_{cont}$, and phase is the integral of frequency, so $\Phi_{out} = (K_{VCO}/s)\,V_{cont}$.

Going once around the loop, from the phase error $\Phi_{in} - \Phi_{out}$ to $\Phi_{out}$, gives the open-loop transfer function

$$H_{open}(s) = K_{PD}\cdot\frac{1}{1 + s/\omega_{LPF}}\cdot\frac{K_{VCO}}{s} = \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF})}.$$

It has a pole at the origin (from the VCO) and one at $-\omega_{LPF}$ (from the filter). One integrator in the loop makes this a **type I** PLL.

### Step 2 — Closed-loop transfer function

With unity feedback, $\Phi_{out} = H_{open}(\Phi_{in} - \Phi_{out})$, so

$$
\begin{aligned}
\Phi_{out}\,(1 + H_{open}) &= H_{open}\,\Phi_{in}\\
H(s) = \frac{\Phi_{out}}{\Phi_{in}} &= \frac{H_{open}}{1 + H_{open}} .
\end{aligned}
$$

Substitute $H_{open}$ and multiply the numerator and denominator by $s(1 + s/\omega_{LPF})$:

$$H(s) = \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF}) + K_{PD}K_{VCO}} = \frac{K_{PD}K_{VCO}}{\dfrac{s^2}{\omega_{LPF}} + s + K_{PD}K_{VCO}} .$$

Multiply the numerator and denominator by $\omega_{LPF}$ to make the $s^2$ coefficient equal to 1:

$$H(s) = \frac{\omega_{LPF}K_{PD}K_{VCO}}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} .$$

### Step 3 — Natural frequency and damping ratio

Compare the denominator with the standard second-order form $s^2 + 2\zeta\omega_ns + \omega_n^2$, where $\omega_n$ is the natural frequency and $\zeta$ the damping ratio. Matching the constant terms:

$$\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO} \quad\Rightarrow\quad \omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}} .$$

Matching the $s$ terms:

$$
\begin{aligned}
2\zeta\omega_n &= \omega_{LPF}\\
\zeta &= \frac{\omega_{LPF}}{2\omega_n} = \frac{\omega_{LPF}}{2\sqrt{\omega_{LPF}K_{PD}K_{VCO}}}\\
\zeta &= \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} .
\end{aligned}
$$

With $K_{PD}$ and $\omega_{LPF}$ fixed,

$$\zeta \propto \frac{1}{\sqrt{K_{VCO}}} .$$

**Intuition.** A larger $K_{VCO}$ means a larger loop gain. On the root locus, the two open-loop poles (at $0$ and $-\omega_{LPF}$) move toward each other as the gain increases, meet at $-\omega_{LPF}/2$ (critical damping, $\zeta = 1$), and then split into a complex pair with less and less damping. In a type I PLL the product $\zeta\omega_n = \omega_{LPF}/2$ is fixed by the filter, so any increase in $\omega_n$ must come with a decrease in $\zeta$.

### Step 4 — Solve for $K_{VCO}$ at the two limits

Square the expression for $\zeta$ and solve for $K_{VCO}$:

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

Note the direction: the *largest* $K_{VCO}$ gives the *smallest* $\zeta$.

### Step 5 — Allowed variation

The ratio of the extremes is

$$\frac{K_{VCO,max}}{K_{VCO,min}} = \frac{\omega_{LPF}/(4K_{PD})}{\omega_{LPF}/(9K_{PD})} = \frac94 = 2.25 = \left(\frac{1.5}{1}\right)^2 .$$

The square appears because $\zeta$ depends on the square root of $K_{VCO}$: a 1.5:1 range in $\zeta$ needs a $1.5^2:1$ range in $K_{VCO}$.

A few points across the range (with $K_{min} = K_{VCO,min}$, using $\zeta = 1.5\sqrt{K_{min}/K_{VCO}}$):

| $K_{VCO}/K_{min}$ | $\zeta$ | $\omega_n/\omega_{n,min}$ |
|---|---|---|
| 1.00 | 1.50 | 1.00 |
| 1.50 | $1.5/\sqrt{1.5} = 1.22$ | 1.22 |
| 2.00 | $1.5/\sqrt{2} = 1.06$ | 1.41 |
| 2.25 | $1.5/1.5 = 1.00$ | 1.50 |

**Expressed as percentages** (any clear reference point will do):

- *About the centre of the range.* The midpoint is $(K_{min} + 2.25K_{min})/2 = 1.625K_{min}$ and the half-width is $(2.25K_{min} - K_{min})/2 = 0.625K_{min}$. The allowed variation is
$$\pm\frac{0.625}{1.625} = \pm0.385 \approx \pm38\ \%.$$
- *Relative to the $\zeta = 1$ value.* $K_{VCO}$ may drop to $4/9 = 0.444$ of $K_{VCO,max}$, a decrease of about 56 %.
- *Relative to the $\zeta = 1.5$ value.* $K_{VCO}$ may rise to $2.25$ times $K_{VCO,min}$, an increase of 125 %.

The natural frequency changes along with $K_{VCO}$ ($\omega_n \propto \sqrt{K_{VCO}}$), by a factor $\sqrt{2.25} = 1.5$ across this range, but the question constrains only $\zeta$.

### Result

$$\zeta = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} \propto \frac{1}{\sqrt{K_{VCO}}}$$

so $1 \le \zeta \le 1.5$ requires

$$\frac{\omega_{LPF}}{9K_{PD}} \le K_{VCO} \le \frac{\omega_{LPF}}{4K_{PD}}, \qquad \frac{K_{VCO,max}}{K_{VCO,min}} = 2.25 .$$

$K_{VCO}$ can vary by a factor of 2.25 across the tuning range, i.e. about $\pm38\ \%$ around the centre value (a 56 % drop from the $\zeta = 1$ value, or a 125 % rise from the $\zeta = 1.5$ value).

**Common mistake.** Taking $\zeta$ proportional to $K_{VCO}$ (or to $\sqrt{K_{VCO}}$). Both give a tolerable ratio of only 1.5, and the first also gets the direction wrong. From $2\zeta\omega_n = \omega_{LPF}$ and $\omega_n \propto \sqrt{K_{VCO}}$, it follows that $\zeta \propto 1/\sqrt{K_{VCO}}$: more loop gain means *less* damping.

**Common mistake.** Assuming $\zeta$ does not depend on $K_{VCO}$ because it "only sets the bandwidth". In a type I PLL with a simple RC filter, $\zeta\omega_n$ is fixed at $\omega_{LPF}/2$, so the damping and the bandwidth cannot be set independently; that is one of the main weaknesses of this architecture.

**Common mistake.** Converting the range to a percentage inconsistently, for example quoting "125 %" and "56 %" as if both were a symmetric ±tolerance. State the reference point: the ratio is 2.25, which is ±38 % about the midpoint.

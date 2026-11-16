# Detailed solution - R645

**Approach.** The oscillation frequency is $f = 1/(2\pi\sqrt{LC_{tot}})$ with $C_{tot} = C_{var} + C_1$. It is lowest when the varactor capacitance is largest ($V_R = 0$) and highest when it is smallest ($V_R = 2$ V); evaluate the varactor at both ends and take the ratio of the two frequencies.

### Step 1 — Varactor capacitance at the two ends of the control range

$C_1$ is in parallel with the varactor, so $C_{tot}(V_R) = C_0/(1 + V_R/\phi_B)^m + C_1$, and the capacitance falls as the reverse bias rises.

**At $V_R = 0$:**

$$C_{var}(0) = \frac{C_0}{(1 + 0)^{0.35}} = C_0 .$$

**At $V_R = 2$ V:**

$$
\begin{aligned}
1 + \frac{V_R}{\phi_B} &= 1 + \frac{2\ \mathrm{V}}{0.7\ \mathrm{V}} = 1 + 2.857 = 3.857,\\
(3.857)^{0.35} &= e^{0.35\ln3.857} = e^{0.35\times1.3499} = e^{0.4725} = 1.604,\\
C_{var}(2\ \mathrm{V}) &= \frac{C_0}{1.604} = 0.624\,C_0 \approx 0.62\,C_0 .
\end{aligned}
$$

The varactor alone changes by only $1/0.624 = 1.60$ over the 2-V range, because $m = 0.35$ makes it a weak function of voltage.

### Step 2 — Minimum and maximum frequencies and the tuning ratio

$C_1$ is present at both ends:

$$f_{min} = \frac{1}{2\pi\sqrt{L\,(C_0 + C_1)}}, \qquad f_{max} = \frac{1}{2\pi\sqrt{L\,(0.624\,C_0 + C_1)}}.$$

Dividing, and then dividing numerator and denominator by $C_0$:

$$\frac{f_{max}}{f_{min}} = \sqrt{\frac{C_0 + C_1}{0.624\,C_0 + C_1}} = \sqrt{\frac{1 + C_1/C_0}{0.624 + C_1/C_0}} .$$

The tuning range, as a fraction of $f_{min}$, is

$$\frac{f_{max} - f_{min}}{f_{min}} = \sqrt{\frac{1 + C_1/C_0}{0.624 + C_1/C_0}} - 1 .$$

Because $f \propto 1/\sqrt{C}$, a 1.6-times change in capacitance gives at most a $\sqrt{1.6} \approx 1.27$-times change in frequency.

### Step 3 — Numerical values

| $C_1/C_0$ | $f_{max}/f_{min}$ | $(f_{max} - f_{min})/f_{min}$ | Range relative to the centre frequency |
|---|---|---|---|
| 0 | 1.266 | 26.6 % (≈ 27 %) | 23.5 % |
| 0.25 | 1.196 | 19.6 % | 17.9 % |
| 0.5 | 1.155 | 15.5 % | 14.4 % |
| 1 | 1.110 | 11.0 % | 10.4 % |
| 2 | 1.069 | 6.9 % | 6.7 % |
| 5 | 1.033 | 3.3 % | 3.2 % |

(The last column is $(f_{max} - f_{min})/[(f_{max} + f_{min})/2]$, another common way of quoting the tuning range.)

**Large fixed capacitance.** With $x = C_1/C_0 \gg 1$, $\sqrt{(1 + x)/(0.624 + x)} = \sqrt{1 + 0.376/(0.624 + x)} \approx 1 + 0.188/x$, so

$$\frac{f_{max} - f_{min}}{f_{min}} \approx 0.19\,\frac{C_0}{C_1} .$$

For example, $C_1 = 5C_0$ leaves only about 3.8 % by this approximation (3.3 % exactly).

$C_1$ does not vary with $V_R$ but is part of the total at both ends, so it dilutes the relative change of the total capacitance. Fixed parasitics always shrink the tuning range, which is why the varactor must be a large fraction of the tank capacitance.

### Result

With $C_{var}(2\ \mathrm{V}) = C_0/(1 + 2/0.7)^{0.35} \approx 0.62\,C_0$:

$$\frac{f_{max}}{f_{min}} = \sqrt{\frac{C_0 + C_1}{0.62\,C_0 + C_1}} = \sqrt{\frac{1 + C_1/C_0}{0.62 + C_1/C_0}},$$

i.e. a tuning range of $\sqrt{(1 + C_1/C_0)/(0.62 + C_1/C_0)} - 1$: about 27 % for $C_1 = 0$, 19.6 % for $C_1/C_0 = 0.25$, 15.5 % for 0.5, 11 % for 1, 6.9 % for 2, and approximately $0.19\,C_0/C_1$ for $C_1 \gg C_0$. The fixed capacitance always reduces the range.

**Common mistake.** Forgetting the square root and quoting the capacitance ratio as the frequency ratio (e.g. a 60 % range for $C_1 = 0$). The frequency varies as $1/\sqrt{C}$.

**Common mistake.** Adding $C_1$ at only one end of the range, or placing it in series with the varactor. It is a constant capacitance in parallel, so it appears in both $f_{min}$ and $f_{max}$.

**Common mistake.** Claiming that $C_1$ widens the range because it "adds capacitance". Adding the same amount to both the maximum and the minimum total capacitance *reduces* their ratio.

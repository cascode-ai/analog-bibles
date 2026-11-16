# Detailed solution - R645

**Approach.** The oscillation frequency is set by the tank inductance and the total tank capacitance, $f = 1/(2\pi\sqrt{LC_{tot}})$, with $C_{tot} = C_{var} + C_1$. The frequency is lowest when the varactor capacitance is largest ($V_R = 0$) and highest when it is smallest ($V_R = 2$ V). We evaluate the varactor capacitance at both ends and take the ratio of the two frequencies.

### Step 1 — Total tank capacitance

The varactor and the inductor's own capacitance $C_1$ are in parallel, and there is no other capacitance, so

$$C_{tot}(V_R) = C_{var}(V_R) + C_1, \qquad C_{var}(V_R) = \frac{C_0}{(1 + V_R/\phi_B)^m}.$$

Here $C_0$ is the zero-bias varactor capacitance, $V_R$ the reverse bias, $\phi_B = 0.7$ V the junction built-in potential, and $m = 0.35$ the grading coefficient. A larger reverse bias widens the depletion region, so the junction capacitance falls as $V_R$ rises.

The oscillation frequency of an LC oscillator is the tank's resonance frequency:

$$f_{osc} = \frac{1}{2\pi\sqrt{L\,C_{tot}}}.$$

### Step 2 — Varactor capacitance at the two ends of the control range

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

The varactor alone changes by only a factor of $1/0.624 = 1.60$ over the 2-V range, because $m = 0.35$ makes the capacitance a weak function of voltage.

### Step 3 — Minimum and maximum frequencies

The largest capacitance (at $V_R = 0$) gives the lowest frequency:

$$f_{min} = \frac{1}{2\pi\sqrt{L\,(C_0 + C_1)}}.$$

The smallest capacitance (at $V_R = 2$ V) gives the highest frequency:

$$f_{max} = \frac{1}{2\pi\sqrt{L\,(0.624\,C_0 + C_1)}}.$$

$C_1$ is present at both ends: it is a fixed capacitance that does not change with $V_R$.

### Step 4 — Tuning ratio

Divide. $L$ and $2\pi$ cancel:

$$\frac{f_{max}}{f_{min}} = \sqrt{\frac{C_0 + C_1}{0.624\,C_0 + C_1}} .$$

Divide numerator and denominator by $C_0$ to express it in terms of $C_1/C_0$:

$$\frac{f_{max}}{f_{min}} = \sqrt{\frac{1 + C_1/C_0}{0.624 + C_1/C_0}} .$$

The tuning range, expressed as a fraction of $f_{min}$, is

$$\frac{f_{max} - f_{min}}{f_{min}} = \sqrt{\frac{1 + C_1/C_0}{0.624 + C_1/C_0}} - 1 .$$

The frequency depends on the square root of the capacitance, so a 1.6-times change in capacitance gives at most a $\sqrt{1.6} \approx 1.27$-times change in frequency.

### Step 5 — Numerical values

| $C_1/C_0$ | $f_{max}/f_{min}$ | $(f_{max} - f_{min})/f_{min}$ | Range relative to the centre frequency |
|---|---|---|---|
| 0 | 1.266 | 26.6 % (≈ 27 %) | 23.5 % |
| 0.25 | 1.196 | 19.6 % | 17.9 % |
| 0.5 | 1.155 | 15.5 % | 14.4 % |
| 1 | 1.110 | 11.0 % | 10.4 % |
| 2 | 1.069 | 6.9 % | 6.7 % |
| 5 | 1.033 | 3.3 % | 3.2 % |

(The last column is $(f_{max} - f_{min})/[(f_{max} + f_{min})/2]$, another common way of quoting the tuning range.)

**Large fixed capacitance.** For $C_1 \gg C_0$, expand the square root, $\sqrt{(1 + x)/(0.624 + x)} = \sqrt{1 + 0.376/(0.624 + x)} \approx 1 + 0.188/x$, with $x = C_1/C_0$. So

$$\frac{f_{max} - f_{min}}{f_{min}} \approx 0.19\,\frac{C_0}{C_1} .$$

For example, $C_1 = 5C_0$ leaves only about 3.8 % by this approximation (3.3 % exactly).

**Interpretation.** The fixed capacitance $C_1$ does not vary with $V_R$, but it is part of the total at both ends of the range. It therefore dilutes the relative change of the total capacitance. Fixed parasitics (inductor, transistor and wiring capacitances) always shrink the tuning range, which is why the varactor must be a large fraction of the total tank capacitance.

### Result

With $C_{var}(2\ \mathrm{V}) = C_0/(1 + 2/0.7)^{0.35} \approx 0.62\,C_0$:

$$\frac{f_{max}}{f_{min}} = \sqrt{\frac{C_0 + C_1}{0.62\,C_0 + C_1}} = \sqrt{\frac{1 + C_1/C_0}{0.62 + C_1/C_0}},$$

i.e. a tuning range of $\sqrt{(1 + C_1/C_0)/(0.62 + C_1/C_0)} - 1$: about 27 % for $C_1 = 0$, 19.6 % for $C_1/C_0 = 0.25$, 15.5 % for 0.5, 11 % for 1, 6.9 % for 2, and approximately $0.19\,C_0/C_1$ for $C_1 \gg C_0$. The fixed capacitance always reduces the range.

**Common mistake.** Forgetting the square root and quoting the capacitance ratio as the frequency ratio (e.g. a 60 % range for $C_1 = 0$). The frequency varies as $1/\sqrt{C}$.

**Common mistake.** Adding $C_1$ at only one end of the range, or placing it in series with the varactor. $C_1$ is a constant capacitance in parallel with the varactor, so it appears in both $f_{min}$ and $f_{max}$.

**Common mistake.** Claiming that $C_1$ widens the range because it "adds capacitance". A constant capacitance increases both the maximum and the minimum total capacitance by the same amount, which *reduces* their ratio.

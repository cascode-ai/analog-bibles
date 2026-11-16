# Detailed solution - R613

**Approach.** Write the drain current with the gate voltage equal to the bias plus the sinusoid, factor out the bias current $I$, and expand the exponential in a Taylor series. Converting the powers of $\cos\omega t$ into harmonics with the standard identities gives each harmonic amplitude. The output voltage is $V_{DD} - R_DI_D$, so each output harmonic is $R_D$ times the corresponding current harmonic.

### Step 1 — Normalize the drain current to the bias current

With $V_{GS} = V_{GS0} + V_m\cos\omega t$:

$$I_D = I_0\exp\!\left(\frac{V_{GS0} + V_m\cos\omega t}{\zeta V_T}\right) = \underbrace{I_0\exp\!\left(\frac{V_{GS0}}{\zeta V_T}\right)}_{=\,I}\cdot\exp\!\left(\frac{V_m}{\zeta V_T}\cos\omega t\right).$$

Here $V_T = kT/q$ is the thermal voltage (about 26 mV at room temperature) and $\zeta > 1$ is the subthreshold slope factor. The first factor is the bias current $I$. Define the normalized input amplitude

$$u = \frac{V_m}{\zeta V_T} \ll 1,$$

so that

$$I_D = I\,e^{u\cos\omega t}.$$

The exponential's "scale" is $\zeta V_T$ (a few tens of mV), which plays the role that the overdrive $V_{GS} - V_{TH}$ plays in strong inversion.

### Step 2 — Taylor expansion

$$e^{u\cos\theta} = 1 + u\cos\theta + \frac{u^2}{2}\cos^2\theta + \frac{u^3}{6}\cos^3\theta + \frac{u^4}{24}\cos^4\theta + \dots$$

Convert powers of cosine into harmonics:

$$
\begin{aligned}
\cos^2\theta &= \tfrac12 + \tfrac12\cos2\theta,\\
\cos^3\theta &= \tfrac34\cos\theta + \tfrac14\cos3\theta,\\
\cos^4\theta &= \tfrac38 + \tfrac12\cos2\theta + \tfrac18\cos4\theta .
\end{aligned}
$$

### Step 3 — Collect each harmonic

| component | contributions | amplitude (× $I$) |
|---|---|---|
| DC | $1 + \tfrac{u^2}{2}\cdot\tfrac12 + \tfrac{u^4}{24}\cdot\tfrac38$ | $1 + \dfrac{u^2}{4} + \dfrac{u^4}{64}$ |
| fundamental | $u + \tfrac{u^3}{6}\cdot\tfrac34$ | $u + \dfrac{u^3}{8}$ |
| 2nd harmonic | $\tfrac{u^2}{2}\cdot\tfrac12 + \tfrac{u^4}{24}\cdot\tfrac12$ | $\dfrac{u^2}{4} + \dfrac{u^4}{48}$ |
| 3rd harmonic | $\tfrac{u^3}{6}\cdot\tfrac14$ | $\dfrac{u^3}{24}$ |
| 4th harmonic | $\tfrac{u^4}{24}\cdot\tfrac18$ | $\dfrac{u^4}{192}$ |

Keeping the leading term of each (valid for $u \ll 1$):

$$
\begin{aligned}
\text{fundamental:}&\quad I_{1} = Iu = \frac{I\,V_m}{\zeta V_T},\\
\text{2nd harmonic:}&\quad I_{2} = \frac{Iu^2}{4} = \frac{I\,V_m^2}{4\zeta^2V_T^2},\\
\text{3rd harmonic:}&\quad I_{3} = \frac{Iu^3}{24} = \frac{I\,V_m^3}{24\zeta^3V_T^3}.
\end{aligned}
$$

**General term.** The exact expansion is $e^{u\cos\theta} = I_0(u) + 2\sum_{n\ge1}I_n(u)\cos n\theta$, where $I_n$ is the modified Bessel function of the first kind (not to be confused with currents). For small $u$, $I_n(u) \approx (u/2)^n/n!$, so the $n$-th harmonic of the drain current is

$$I_{n\text{th}} = 2I\,I_n(u) \approx \frac{I\,u^n}{2^{n-1}\,n!},$$

which reproduces $Iu$, $Iu^2/4$, $Iu^3/24$, $Iu^4/192$, …

**DC shift.** The average current rises to $I(1 + u^2/4)$: the exponential is convex, so positive half-cycles add more current than negative half-cycles remove.

### Step 4 — Distortion ratios

$$\mathrm{HD2} = \frac{I_2}{I_1} = \frac{u}{4} = \frac{V_m}{4\zeta V_T}, \qquad \mathrm{HD3} = \frac{I_3}{I_1} = \frac{u^2}{24} = \frac{V_m^2}{24\zeta^2V_T^2}.$$

Unlike the square law (which stops at the second harmonic), the exponential produces **all** harmonics, each smaller than the previous one by roughly a factor $u/(2n)$.

**Example.** With $\zeta = 1.5$, $V_T = 26$ mV ($\zeta V_T = 39$ mV) and $V_m = 5$ mV: $u = 0.128$, HD2 $= 3.2\ \%$ and HD3 $= 0.068\ \%$ (an exact numerical evaluation gives the same values). In strong inversion with $V_{ov} = 0.4$ V the same input would give HD2 $= 5/(4\times400) = 0.3\ \%$. The subthreshold device is about ten times more nonlinear, because its "overdrive" $\zeta V_T$ is so small.

### Step 5 — Output voltage

The output is $V_{out} = V_{DD} - R_DI_D$ (the transistor is assumed to remain in its subthreshold saturation region, $V_{DS} \gtrsim 4V_T$). Every AC component of $I_D$ is multiplied by $-R_D$:

$$
\begin{aligned}
V_{out,1} &= R_DIu = \frac{R_DI\,V_m}{\zeta V_T} = g_mR_D\,V_m, \qquad g_m = \frac{I}{\zeta V_T},\\
V_{out,2} &= \frac{R_DIu^2}{4} = \frac{R_DI\,V_m^2}{4\zeta^2V_T^2},\\
V_{out,3} &= \frac{R_DIu^3}{24} = \frac{R_DI\,V_m^3}{24\zeta^3V_T^3},\\
V_{out,n} &\approx \frac{R_DI\,u^n}{2^{n-1}n!}\quad(\text{exactly } 2R_DI\,I_n(u)),
\end{aligned}
$$

with the fundamental inverted (180° from the input). The output DC level drops by $R_DIu^2/4$. Because the conversion from current to voltage is linear, HD2 and HD3 at the output are the same as for the current.

### Result

With $u = V_m/(\zeta V_T)$, $I_D = I\exp(u\cos\omega t)$ and, to leading order in $u$:

- fundamental: $\dfrac{IV_m}{\zeta V_T}$ (more exactly $I(u + u^3/8)$);
- second harmonic: $\dfrac{IV_m^2}{4\zeta^2V_T^2}$, so $\mathrm{HD2} = \dfrac{V_m}{4\zeta V_T}$;
- third harmonic: $\dfrac{IV_m^3}{24\zeta^3V_T^3}$, so $\mathrm{HD3} = \dfrac{V_m^2}{24\zeta^2V_T^2}$;
- $n$-th harmonic: $\approx Iu^n/(2^{n-1}n!)$, exactly $2I\,I_n(u)$ (modified Bessel functions).

The output voltage $V_{DD} - R_DI_D$ has each amplitude multiplied by $R_D$ (fundamental $g_mR_DV_m$ with $g_m = I/(\zeta V_T)$), and the DC current rises to $I(1 + u^2/4)$.

**Common mistake.** Claiming that the stage has no even harmonics. That is true only for a symmetric differential pair; a single exponential device is not odd-symmetric, and its second harmonic is the largest distortion term.

**Common mistake.** Coefficient slips in the expansion, e.g. HD2 $= V_m/(2\zeta V_T)$ from forgetting the $\tfrac12$ in $\cos^2\theta = \tfrac12(1 + \cos2\theta)$, or HD3 $= V_m^2/(6\zeta^2V_T^2)$ from forgetting the $\tfrac14$ in $\cos^3\theta$. Using square-law results (only a second harmonic, $V_m/(4V_{ov})$) is also wrong here: the subthreshold characteristic is exponential, so all harmonics are present and the relevant voltage scale is $\zeta V_T$, not the overdrive.

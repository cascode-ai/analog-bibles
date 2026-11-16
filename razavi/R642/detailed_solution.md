# Detailed solution - R642

**Approach.** The specification $g_{m3,4}R = 0.5$ fixes the transconductance $M_3$ and $M_4$ must have at a drain current of $I_T/2$; inverting the square-law relation $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ then gives the aspect ratio.

### Step 1 — Role of $M_3$–$M_4$ and the required transconductance

The cross-coupled pair presents $-1/g_{m3,4}$ per half circuit in parallel with $R$; steering current into it raises the stage gain and lowers its pole, which tunes the oscillator. With $g_{m3,4}R = 0.5 < 1$ the net load stays positive, so the stage does not latch:

$$R \parallel \left(-\frac{1}{g_{m3,4}}\right) = \frac{R}{1 - g_{m3,4}R} = 2R .$$

With $R = 546\ \Omega$:

$$g_{m3,4} = \frac{0.5}{R} = \frac{0.5}{546\ \Omega} = 0.916\ \mathrm{mS}.$$

### Step 2 — Aspect ratio from the square law

The condition applies when all of $I_T$ is steered to the cross-coupled pair and splits equally:

$$I_{D3} = I_{D4} = \frac{I_T}{2} = 0.5\ \mathrm{mA}.$$

Inverting $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$:

$$\left(\frac{W}{L}\right)_{3,4} = \frac{g_{m3,4}^2}{2\mu_nC_{ox}I_D},$$

$$
\begin{aligned}
g_{m3,4}^2 &= (0.916\times10^{-3}\ \mathrm{S})^2 = 8.39\times10^{-7}\ \mathrm{S^2},\\
2\mu_nC_{ox}I_D &= 2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.5\times10^{-3}\ \mathrm{A}) = 1.34\times10^{-7}\ \mathrm{A^2/V^2},\\
\left(\frac{W}{L}\right)_{3,4} &= \frac{8.39\times10^{-7}}{1.34\times10^{-7}} = 6.26 \approx 6.25 .
\end{aligned}
$$

With $L = 0.5\ \mu$m this is $W \approx 3.1\ \mu$m.

### Step 3 — Check by scaling from $M_1$–$M_2$

$R = 546\ \Omega$ makes $g_{m1,2}R = 2$ with $(W/L)_{1,2} = 100$ at 0.5 mA per device. A quarter of that transconductance at the same current, since $g_m \propto \sqrt{W/L}$, needs one sixteenth of the aspect ratio:

$$\left(\frac{W}{L}\right)_{3,4} = \frac{100}{16} = 6.25 . \ \checkmark$$

The corresponding overdrive is $V_{ov} = 2I_D/g_m = 1\ \mathrm{mA}/0.916\ \mathrm{mS} = 1.09$ V, much larger than that of $M_1$–$M_2$ (0.27 V).

### Result

$$\left(\frac{W}{L}\right)_{3,4} = \frac{(0.5/R)^2}{2\mu_nC_{ox}(I_T/2)} = \frac{(0.916\ \mathrm{mS})^2}{2(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{mA})} \approx 6.25,$$

for example $W \approx 3.1\ \mu$m with $L = 0.5\ \mu$m (one sixteenth of the aspect ratio of $M_1$–$M_2$).

**Common mistake.** Using the full $I_T = 1$ mA per device, which gives $(W/L)_{3,4} = 8.39\times10^{-7}/(2.68\times10^{-7}) \approx 3.1$. The condition is specified for each of $M_3$ and $M_4$ carrying $I_T/2$.

**Common mistake.** Using a wrong transconductance formula, such as $g_m = \mu_nC_{ox}(W/L)I_D$, or assuming an overdrive the problem does not give. Only the given current is needed in $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$.

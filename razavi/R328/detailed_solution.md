# Detailed solution - R328

**Approach.** Model the channel noise of $M_1$ and the noise of the load resistor as current sources at the output node, divide the output noise PSD by the squared gain, and integrate the white input-referred PSD over the 100-MHz bandwidth.

### Step 1 — Small-signal parameters

$$\frac{W}{L} = \frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 100 .$$

$$
\begin{aligned}
g_m &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}\\
&= \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(1\ \mathrm{mA})}\\
&= \sqrt{2.68\times10^{-5}\ \mathrm{A^2/V^2}}\\
&= 5.177\times10^{-3}\ \mathrm{S} = 5.18\ \mathrm{mS}.
\end{aligned}
$$

The overdrive is $V_{ov} = 2I_D/g_m = (2\times1\ \mathrm{mA})/(5.177\ \mathrm{mS}) = 0.386$ V. The drain sits at $V_{DD} - I_DR_D = V_{DD} - 2$ V, so $M_1$ is saturated if $V_{DD} - 2\ \mathrm{V} > 0.386$ V, which we assume for the unspecified supply.

No $\lambda$ is given, so take $r_O \to \infty$ (Step 3 shows that $r_O$ would not change the answer):

$$|A_v| = g_mR_D = (5.177\ \mathrm{mS})(2\ \mathrm{k\Omega}) = 10.35 .$$

### Step 2 — Noise sources and the output noise PSD

There are two independent thermal noise sources:

- the channel noise of $M_1$, a drain–source current with $\overline{I_{n,M1}^2} = 4kT\gamma g_m$;
- the noise of $R_D$, in Norton form a current in parallel with $R_D$ with $\overline{I_{n,R}^2} = 4kT/R_D$ (equivalently a series voltage of PSD $4kTR_D$).

With $v_{in} = 0$ the dependent source $g_mv_{gs}$ is zero and $V_{DD}$ is an ac ground, so both noise currents flow from the output node to ground through the same resistance $R_D$.

<!-- diagram: diagram-01.cir -->

The sources are uncorrelated, so their powers add:

$$
\begin{aligned}
\overline{V_{n,out}^2} &= \left(\overline{I_{n,M1}^2} + \overline{I_{n,R}^2}\right)R_D^2\\
&= \left(4kT\gamma g_m + \frac{4kT}{R_D}\right)R_D^2\\
&= 4kT\gamma g_mR_D^2 + 4kTR_D .
\end{aligned}
$$

### Step 3 — Referring the noise to the input

Divide by the squared gain:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2}\\
&= \frac{4kT\gamma g_mR_D^2 + 4kTR_D}{g_m^2R_D^2}\\
&= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D}.
\end{aligned}
$$

Both noise-current PSDs are simply divided by $g_m^2$: a noise current at the drain is indistinguishable from the current $g_mv_{in}$ that an input voltage produces. A larger $R_D$ makes the load term *smaller*, because the gain grows as $R_D$ while the resistor's noise voltage grows only as $\sqrt{R_D}$.

- **$r_O$ does not matter.** With a noiseless $r_O$, the output PSD becomes $(4kT\gamma g_m + 4kT/R_D)(R_D\parallel r_O)^2$ and the gain $g_m(R_D\parallel r_O)$, so $(R_D\parallel r_O)^2$ cancels and $\overline{V_{n,in}^2}$ is unchanged.
- **The input-referred PSD is flat.** Signal and noise currents flow at the same output node, so any output capacitance filters them identically, and the filtering cancels in the division by the gain.

### Step 4 — Numerical value of the PSD

$$4kT = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K}) = 1.656\times10^{-20}\ \mathrm{J}.$$

Each term written as an equivalent resistance (times $4kT$, it gives V²/Hz):

$$
\begin{aligned}
\frac{\gamma}{g_m} &= \frac{2/3}{5.177\times10^{-3}\ \mathrm{S}} = 128.8\ \Omega,\\
\frac{1}{g_m^2R_D} &= \frac{1}{(2.68\times10^{-5}\ \mathrm{S^2})\times(2000\ \Omega)} = \frac{1}{0.0536\ \mathrm{S}} = 18.66\ \Omega,\\
\text{sum} &= 128.8 + 18.66 = 147.4\ \Omega .
\end{aligned}
$$

$$\overline{V_{n,in}^2} = (1.656\times10^{-20}\ \mathrm{J})\times(147.4\ \Omega) = 2.44\times10^{-18}\ \mathrm{V^2/Hz}.$$

The stage is as noisy as a single 147-Ω resistor at its input. The transistor supplies $128.8/147.4 = 87\%$ of the noise power and the load $18.66/147.4 = 13\%$. The rms noise density is

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{2.44\times10^{-18}\ \mathrm{V^2/Hz}} = 1.56\times10^{-9}\ \mathrm{V/\sqrt{Hz}} = 1.56\ \mathrm{nV/\sqrt{Hz}}.$$

### Step 5 — Integrating over the 100-MHz bandwidth

The input-referred PSD is white, so its integral over $B = 100\ \mathrm{MHz} = 10^8$ Hz is the PSD times the bandwidth:

$$
\begin{aligned}
\overline{V_{n,in,tot}^2} &= \int_0^{B}\overline{V_{n,in}^2}\,df = \overline{V_{n,in}^2}\times B\\
&= (2.44\times10^{-18}\ \mathrm{V^2/Hz})\times(10^{8}\ \mathrm{Hz})\\
&= 2.44\times10^{-10}\ \mathrm{V^2},
\end{aligned}
$$

$$V_{n,in,rms} = \sqrt{2.44\times10^{-10}\ \mathrm{V^2}} = 1.56\times10^{-5}\ \mathrm{V} \approx 15.6\ \mu\mathrm{V}.$$

Equivalently, $1.56\ \mathrm{nV/\sqrt{Hz}}\times\sqrt{10^8\ \mathrm{Hz}} = 1.56\ \mathrm{nV}\times10^4 = 15.6\ \mu\mathrm{V}$.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 1.656\times10^{-20}\,(128.8 + 18.7)\ \mathrm{V^2/Hz} \approx 2.44\times10^{-18}\ \mathrm{V^2/Hz}\ \ (\approx 1.56\ \mathrm{nV/\sqrt{Hz}}),$$

with $g_m = 5.18$ mS. Over a 100-MHz bandwidth the total input-referred thermal noise is

$$V_{n,in,rms} = \sqrt{2.44\times10^{-18}\times10^{8}}\ \mathrm{V} \approx \mathbf{15.6\ \mu V\ rms}.$$

$M_1$ contributes about 87 % of the noise power and $R_D$ about 13 %. The result does not depend on $r_O$. (With $\gamma = 1$ instead of the given $2/3$ it would be about 18.7 μV rms.)

**Common mistake.** Adding the resistor noise $4kTR_D$ directly to the input-referred noise. It appears at the output, so it must be divided by $A_v^2 = (g_mR_D)^2$, giving $4kT/(g_m^2R_D)$; undivided, the load term alone would be $3.3\times10^{-17}\ \mathrm{V^2/Hz}$, more than 13 times the correct total, and the answer would come out near 59 μV.

**Common mistake.** Keeping only the transistor term $4kT\gamma/g_m$, which gives $\sqrt{1.656\times10^{-20}\times128.8\times10^8} \approx 14.6\ \mu$V, about 7 % low.

**Common mistake.** Reporting the mean-square value $2.44\times10^{-10}\ \mathrm{V^2}$ as a voltage, or multiplying the bandwidth by $2\pi$. The PSD is per hertz, so it is multiplied by the bandwidth in hertz, $10^8$ Hz.

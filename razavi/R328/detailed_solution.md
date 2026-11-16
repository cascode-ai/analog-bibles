# Detailed solution - R328

**Approach.** The stage has two thermal noise sources: the channel noise of the transistor and the noise of the load resistor. Both can be modelled as current sources that dump noise current into the output node. We compute the output noise power spectral density (PSD), divide it by the squared voltage gain to refer it to the input, and then integrate the (white) input-referred PSD over the 100-MHz bandwidth.

### Step 1 — The circuit and its small-signal parameters

The common-source (CS) stage consists of NMOS $M_1$ with its source grounded and its gate driven by $V_{in}$; its drain is connected to $V_{DD}$ through the load resistor $R_D = 2\ \mathrm{k\Omega}$, and the output is taken at the drain.

**Aspect ratio:**

$$\frac{W}{L} = \frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 100 .$$

**Transconductance.** For a saturated device obeying the square law, $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, where $V_{ov} = V_{GS} - V_{TH}$ is the overdrive voltage. Eliminating $V_{ov}$ from $g_m = \mu_nC_{ox}(W/L)V_{ov}$ gives

$$
\begin{aligned}
g_m &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}\\
&= \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(1\ \mathrm{mA})}\\
&= \sqrt{2.68\times10^{-5}\ \mathrm{A^2/V^2}}\\
&= 5.177\times10^{-3}\ \mathrm{S} = 5.18\ \mathrm{mS}.
\end{aligned}
$$

For reference, the overdrive is $V_{ov} = 2I_D/g_m = (2\times1\ \mathrm{mA})/(5.177\ \mathrm{mS}) = 0.386$ V. The drain sits at $V_{DD} - I_DR_D = V_{DD} - 2$ V, so the transistor is saturated as long as $V_{DD} - 2\ \mathrm{V} > 0.386$ V; we assume the (unspecified) supply satisfies this.

**Voltage gain.** No $\lambda$ is given, so we neglect channel-length modulation ($r_O \to \infty$; Step 3 shows that $r_O$ would not change the answer anyway):

$$|A_v| = g_mR_D = (5.177\ \mathrm{mS})(2\ \mathrm{k\Omega}) = 10.35 .$$

### Step 2 — Noise sources and the output noise PSD

There are two independent thermal noise sources:

- **Channel noise of $M_1$:** a current source between drain and source with PSD
$$\overline{I_{n,M1}^2} = 4kT\gamma g_m ,$$
where $k = 1.38\times10^{-23}$ J/K is Boltzmann's constant, $T = 300$ K is the absolute temperature and $\gamma = 2/3$ is the channel-noise coefficient.
- **Thermal noise of $R_D$:** in Norton form, a current source in parallel with $R_D$ with PSD
$$\overline{I_{n,R}^2} = \frac{4kT}{R_D} .$$
(This is equivalent to a series voltage source of PSD $4kTR_D$.)

**Small-signal model with the input grounded.** To find the output noise we set $v_{in} = 0$. The circuit then has one node of interest, the output (drain). Connected between the output and ground are: the dependent source $g_mv_{gs}$, which is now zero because $v_{gs} = 0$; the resistor $R_D$ (its upper end goes to $V_{DD}$, which is an AC ground); and the two noise current sources. Both noise currents therefore flow through the same resistance $R_D$.

<!-- diagram: diagram-01.cir -->

The two sources are physically unrelated, hence **uncorrelated**, so their powers (not their amplitudes) add. The output noise voltage PSD is

$$
\begin{aligned}
\overline{V_{n,out}^2} &= \left(\overline{I_{n,M1}^2} + \overline{I_{n,R}^2}\right)R_D^2\\
&= \left(4kT\gamma g_m + \frac{4kT}{R_D}\right)R_D^2\\
&= 4kT\gamma g_mR_D^2 + 4kTR_D .
\end{aligned}
$$

### Step 3 — Referring the noise to the input

The input-referred noise voltage is the single voltage source which, placed in series with the gate of a noiseless copy of the stage, produces the same output noise. It is found by dividing the output PSD by the squared gain:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2}\\
&= \frac{4kT\gamma g_mR_D^2 + 4kTR_D}{g_m^2R_D^2}\\
&= \frac{4kT\gamma g_mR_D^2}{g_m^2R_D^2} + \frac{4kTR_D}{g_m^2R_D^2}\\
&= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D}.
\end{aligned}
$$

**Interpretation.** The transistor term $4kT\gamma/g_m$ is the channel noise current divided by $g_m^2$. The load term is the resistor noise current $4kT/R_D$ divided by $g_m^2$ as well: a noise current at the drain is indistinguishable from the current $g_mv_{in}$ that an input voltage would produce. A larger $R_D$ makes the load term *smaller*, because the gain grows as $R_D$ while the resistor's noise voltage grows only as $\sqrt{R_D}$.

**Why $r_O$ does not matter.** If channel-length modulation were included, the output resistance would become $R_D\parallel r_O$ in both $\overline{V_{n,out}^2}$ and $A_v$. With $r_O$ itself noiseless (its physics is already contained in the channel-noise model), the output PSD becomes $(4kT\gamma g_m + 4kT/R_D)(R_D\parallel r_O)^2$ and the gain becomes $g_m(R_D\parallel r_O)$, so $(R_D\parallel r_O)^2$ cancels and $\overline{V_{n,in}^2}$ is unchanged.

**Why the input-referred PSD is flat.** The signal current $g_mv_{in}$ and both noise currents are injected into the same output node. Any output capacitance therefore filters signal and noise identically, and the filtering cancels when we divide by the gain. The input-referred PSD stays white across the band.

### Step 4 — Numerical value of the PSD

The common factor:

$$4kT = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K}) = 1.656\times10^{-20}\ \mathrm{J}.$$

(Multiplied by a resistance in ohms this gives V²/Hz.)

Each term written as an equivalent resistance:

$$
\begin{aligned}
\frac{\gamma}{g_m} &= \frac{2/3}{5.177\times10^{-3}\ \mathrm{S}} = 128.8\ \Omega,\\
\frac{1}{g_m^2R_D} &= \frac{1}{(2.68\times10^{-5}\ \mathrm{S^2})\times(2000\ \Omega)} = \frac{1}{0.0536\ \mathrm{S}} = 18.66\ \Omega,\\
\text{sum} &= 128.8 + 18.66 = 147.4\ \Omega .
\end{aligned}
$$

(We used $g_m^2 = 2.68\times10^{-5}\ \mathrm{S^2}$ from Step 1.)

The input-referred PSD:

$$\overline{V_{n,in}^2} = (1.656\times10^{-20}\ \mathrm{J})\times(147.4\ \Omega) = 2.44\times10^{-18}\ \mathrm{V^2/Hz}.$$

The stage is therefore as noisy as a single 147-Ω resistor at its input. The transistor supplies $128.8/147.4 = 87\%$ of the noise power and the load $18.66/147.4 = 13\%$.

The rms noise density is

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{2.44\times10^{-18}\ \mathrm{V^2/Hz}} = 1.56\times10^{-9}\ \mathrm{V/\sqrt{Hz}} = 1.56\ \mathrm{nV/\sqrt{Hz}}.$$

### Step 5 — Integrating over the 100-MHz bandwidth

The total mean-square noise is the integral of the PSD over the band. Thermal noise is white and, as shown in Step 3, the input-referred PSD stays flat, so the integral is just the PSD times the bandwidth $B = 100\ \mathrm{MHz} = 10^8$ Hz:

$$
\begin{aligned}
\overline{V_{n,in,tot}^2} &= \int_0^{B}\overline{V_{n,in}^2}\,df = \overline{V_{n,in}^2}\times B\\
&= (2.44\times10^{-18}\ \mathrm{V^2/Hz})\times(10^{8}\ \mathrm{Hz})\\
&= 2.44\times10^{-10}\ \mathrm{V^2}.
\end{aligned}
$$

The rms noise voltage is the square root:

$$V_{n,in,rms} = \sqrt{2.44\times10^{-10}\ \mathrm{V^2}} = 1.56\times10^{-5}\ \mathrm{V} \approx 15.6\ \mu\mathrm{V}.$$

Equivalently, $1.56\ \mathrm{nV/\sqrt{Hz}}\times\sqrt{10^8\ \mathrm{Hz}} = 1.56\ \mathrm{nV}\times10^4 = 15.6\ \mu\mathrm{V}$.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 1.656\times10^{-20}\,(128.8 + 18.7)\ \mathrm{V^2/Hz} \approx 2.44\times10^{-18}\ \mathrm{V^2/Hz}\ \ (\approx 1.56\ \mathrm{nV/\sqrt{Hz}}),$$

with $g_m = 5.18$ mS. Over a 100-MHz bandwidth the total input-referred thermal noise is

$$V_{n,in,rms} = \sqrt{2.44\times10^{-18}\times10^{8}}\ \mathrm{V} \approx \mathbf{15.6\ \mu V\ rms}.$$

$M_1$ contributes about 87 % of the noise power and $R_D$ about 13 %. The result does not depend on $r_O$. (With $\gamma = 1$ instead of the given $2/3$ it would be about 18.7 μV rms.)

**Common mistake.** Adding the resistor noise $4kTR_D$ directly to the input-referred noise. The resistor's noise appears at the *output*, so it must be divided by $A_v^2 = (g_mR_D)^2$ like every other output quantity, which turns $4kTR_D$ into $4kT/(g_m^2R_D)$. Without that division the load term would be $3.3\times10^{-17}\ \mathrm{V^2/Hz}$, larger than the correct total by more than a factor of 13, and the answer would come out near 59 μV.

**Common mistake.** Keeping only the transistor term $4kT\gamma/g_m$. This gives $\sqrt{1.656\times10^{-20}\times128.8\times10^8} \approx 14.6\ \mu$V, about 7 % low. The load resistor is a genuine thermal noise source and must be included.

**Common mistake.** Slips in the integration: reporting the mean-square value $2.44\times10^{-10}\ \mathrm{V^2}$ as if it were a voltage (forgetting the square root), or multiplying the bandwidth by $2\pi$. The PSD is given per hertz, so it is multiplied by the bandwidth in hertz, $10^8$ Hz, not by an angular frequency.

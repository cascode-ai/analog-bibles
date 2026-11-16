# Detailed solution - R359

**Approach.** The only noise source is the channel thermal noise of $M_1$; the current-source load $I_1$ is ideal and noiseless. With the gate at ac ground, the noise current has one path: the transistor's own output resistance $r_O$. We compute $g_m$ and $r_O$, form the output noise PSD $4kT\gamma g_mr_O^2$, and integrate it over the 50-MHz bandwidth (the PSD is flat because capacitances are neglected).

### Step 1 — Small-signal parameters

**Aspect ratio:**

$$\frac{W}{L} = \frac{50}{0.5} = 100.$$

**Transconductance** from the square law, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$:

$$
\begin{aligned}
g_m &= \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(0.05\ \mathrm{mA})}\\
&= \sqrt{1.34\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 1.158\times10^{-3}\ \mathrm{S} = 1.158\ \mathrm{mS}.
\end{aligned}
$$

(The corresponding overdrive is $V_{ov} = 2I_D/g_m = 0.1\ \mathrm{mA}/1.158\ \mathrm{mS} = 86$ mV, so $M_1$ is saturated as long as its drain stays above about 86 mV. The drain voltage is not given, so we use the plain square law without the small correction factor $1 + \lambda V_{DS}$ in $g_m$.)

**Output resistance** from channel-length modulation, $r_O = 1/(\lambda I_D)$, where $\lambda$ is the channel-length modulation coefficient:

$$r_O = \frac{1}{(0.1\ \mathrm{V^{-1}})\times(0.05\ \mathrm{mA})} = \frac{1}{5\times10^{-6}\ \mathrm{A/V}} = 200\ \mathrm{k\Omega}.$$

### Step 2 — Where the noise current flows

**Small-signal model with the noise source.** The gate is at ac ground, so $v_{gs} = 0$ and the dependent source $g_mv_{gs}$ is zero. At the output node (the drain) we have:

- the channel noise current $I_n$, with $\overline{I_n^2} = 4kT\gamma g_m$, between drain and ground. Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient;
- the output resistance $r_O$, between drain and ground;
- the ideal current source $I_1$, which has infinite impedance and carries no ac current.

The noise current therefore flows entirely through $r_O$:

$$V_{n,out} = I_nr_O \quad\Longrightarrow\quad \overline{V_{n,out}^2} = 4kT\gamma g_m\,r_O^2 .$$

$r_O$ is **not** an extra noise source. It models how the channel current depends on $V_{DS}$, and the noise of the channel is already fully described by $4kT\gamma g_m$.

### Step 3 — Numerical value of the output PSD

The common factor:

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

The product $g_mr_O^2$:

$$g_mr_O^2 = (1.158\times10^{-3}\ \mathrm{S})\times(2\times10^{5}\ \Omega)^2 = (1.158\times10^{-3})\times(4\times10^{10})\ \Omega = 4.63\times10^{7}\ \Omega.$$

The output PSD:

$$\overline{V_{n,out}^2} = (1.104\times10^{-20}\ \mathrm{J})\times(4.63\times10^{7}\ \Omega) = 5.11\times10^{-13}\ \mathrm{V^2/Hz}.$$

As an rms density this is $\sqrt{5.11\times10^{-13}} = 7.15\times10^{-7}\ \mathrm{V/\sqrt{Hz}} \approx 715\ \mathrm{nV/\sqrt{Hz}}$.

### Step 4 — Integrating over 50 MHz

With all capacitances neglected, the PSD is flat (white), so the integral over the band is the PSD times the bandwidth $B = 50\ \mathrm{MHz} = 5\times10^7$ Hz:

$$
\begin{aligned}
\overline{V_{n,out,tot}^2} &= \overline{V_{n,out}^2}\times B = (5.11\times10^{-13}\ \mathrm{V^2/Hz})\times(5\times10^{7}\ \mathrm{Hz})\\
&= 2.56\times10^{-5}\ \mathrm{V^2}.
\end{aligned}
$$

The rms value is the square root:

$$V_{n,out,rms} = \sqrt{2.56\times10^{-5}\ \mathrm{V^2}} = 5.06\times10^{-3}\ \mathrm{V} \approx 5.1\ \mathrm{mV}.$$

### Step 5 — Interpretation

- The output noise is large because the noise current flows into the very high resistance $r_O = 200\ \mathrm{k\Omega}$. A load with finite impedance would shunt it, so an ideal current-source load gives the **largest output noise this transistor can produce** at this bias.
- Referred to the input, the picture is ordinary: the intrinsic gain is $g_mr_O = 1.158\ \mathrm{mS}\times200\ \mathrm{k\Omega} = 232$, and $\overline{V_{n,out}^2}/(g_mr_O)^2 = 4kT\gamma/g_m = 9.5\times10^{-18}\ \mathrm{V^2/Hz}$ (about 3.1 nV/√Hz). The problem, however, asks for the noise at the **output**.
- In a real circuit the output capacitance would limit the bandwidth. With capacitances neglected, the noise stays flat up to 50 MHz.

### Result

$$g_m = 1.158\ \mathrm{mS},\qquad r_O = 200\ \mathrm{k\Omega},\qquad \overline{V_{n,out}^2} = 4kT\gamma g_mr_O^2 \approx 5.1\times10^{-13}\ \mathrm{V^2/Hz}\ (\approx 715\ \mathrm{nV/\sqrt{Hz}}),$$

$$V_{n,out,rms} = \sqrt{5.11\times10^{-13}\times5\times10^{7}}\ \mathrm{V} \approx \mathbf{5.1\ mV\ rms}$$

in a 50-MHz bandwidth. (With $\gamma = 1$ it would be about 6.2 mV rms.)

**Common mistake.** Treating $r_O$ as an additional noise source of $4kT/r_O$. The output resistance is not a separate physical resistor; it describes channel-length modulation of the same channel whose noise is already $4kT\gamma g_m$. Adding $4kT/r_O$ would count the channel noise twice.

**Common mistake.** Reporting the input-referred noise ($\approx 3.1\ \mathrm{nV/\sqrt{Hz}}$, about 22 μV rms in 50 MHz) instead of the output noise, or computing the output noise with a load resistor that does not exist. The load here is an ideal current source, so the only resistance at the output is $r_O$.

**Common mistake.** Slips in the integration: forgetting the square root (quoting $2.56\times10^{-5}$ as volts), or multiplying by $2\pi\times50$ MHz. The PSD is per hertz, so it is multiplied by the bandwidth in hertz.

# Detailed solution - R359

**Approach.** The only noise source is the channel noise of $M_1$; with the gate at ac ground and the ideal load $I_1$, its noise current can flow only through $r_O$. Compute $g_m$ and $r_O$, form the output PSD $4kT\gamma g_mr_O^2$, and integrate it over the 50-MHz bandwidth (it is flat, since capacitances are neglected).

### Step 1 — Small-signal parameters

$$\frac{W}{L} = \frac{50}{0.5} = 100.$$

$$
\begin{aligned}
g_m &= \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(0.05\ \mathrm{mA})}\\
&= \sqrt{1.34\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 1.158\times10^{-3}\ \mathrm{S} = 1.158\ \mathrm{mS}.
\end{aligned}
$$

The overdrive is $V_{ov} = 2I_D/g_m = 0.1\ \mathrm{mA}/1.158\ \mathrm{mS} = 86$ mV, so $M_1$ is saturated if its drain stays above about 86 mV. The drain voltage is not given, so the factor $1 + \lambda V_{DS}$ in $g_m$ is ignored.

$$r_O = \frac{1}{(0.1\ \mathrm{V^{-1}})\times(0.05\ \mathrm{mA})} = \frac{1}{5\times10^{-6}\ \mathrm{A/V}} = 200\ \mathrm{k\Omega}.$$

### Step 2 — Where the noise current flows

With the gate at ac ground, $g_mv_{gs} = 0$. The noise current $I_n$, $\overline{I_n^2} = 4kT\gamma g_m$, flows between drain and ground in parallel with $r_O$, and $I_1$ carries no ac current, so all of $I_n$ flows through $r_O$:

$$V_{n,out} = I_nr_O \quad\Longrightarrow\quad \overline{V_{n,out}^2} = 4kT\gamma g_m\,r_O^2 .$$

$r_O$ is **not** an extra noise source: it models channel-length modulation of the same channel whose noise is already $4kT\gamma g_m$.

### Step 3 — Numerical value of the output PSD

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J},$$

$$g_mr_O^2 = (1.158\times10^{-3}\ \mathrm{S})\times(2\times10^{5}\ \Omega)^2 = (1.158\times10^{-3})\times(4\times10^{10})\ \Omega = 4.63\times10^{7}\ \Omega,$$

$$\overline{V_{n,out}^2} = (1.104\times10^{-20}\ \mathrm{J})\times(4.63\times10^{7}\ \Omega) = 5.11\times10^{-13}\ \mathrm{V^2/Hz},$$

i.e. an rms density of $\sqrt{5.11\times10^{-13}} = 7.15\times10^{-7}\ \mathrm{V/\sqrt{Hz}} \approx 715\ \mathrm{nV/\sqrt{Hz}}$.

### Step 4 — Integrating over 50 MHz

The PSD is white, so the integral is the PSD times $B = 50\ \mathrm{MHz} = 5\times10^7$ Hz:

$$
\begin{aligned}
\overline{V_{n,out,tot}^2} &= \overline{V_{n,out}^2}\times B = (5.11\times10^{-13}\ \mathrm{V^2/Hz})\times(5\times10^{7}\ \mathrm{Hz})\\
&= 2.56\times10^{-5}\ \mathrm{V^2},
\end{aligned}
$$

$$V_{n,out,rms} = \sqrt{2.56\times10^{-5}\ \mathrm{V^2}} = 5.06\times10^{-3}\ \mathrm{V} \approx 5.1\ \mathrm{mV}.$$

### Step 5 — Interpretation

The output noise is large because the noise current flows into the very high $r_O = 200\ \mathrm{k\Omega}$; any finite load would shunt it, so this is the **largest output noise this transistor can produce** at this bias. Referred to the input, through the intrinsic gain $g_mr_O = 1.158\ \mathrm{mS}\times200\ \mathrm{k\Omega} = 232$, it is the ordinary $\overline{V_{n,out}^2}/(g_mr_O)^2 = 4kT\gamma/g_m = 9.5\times10^{-18}\ \mathrm{V^2/Hz}$ (about 3.1 nV/√Hz), but the problem asks for the **output** noise. In a real circuit the output capacitance would limit the bandwidth.

### Result

$$g_m = 1.158\ \mathrm{mS},\qquad r_O = 200\ \mathrm{k\Omega},\qquad \overline{V_{n,out}^2} = 4kT\gamma g_mr_O^2 \approx 5.1\times10^{-13}\ \mathrm{V^2/Hz}\ (\approx 715\ \mathrm{nV/\sqrt{Hz}}),$$

$$V_{n,out,rms} = \sqrt{5.11\times10^{-13}\times5\times10^{7}}\ \mathrm{V} \approx \mathbf{5.1\ mV\ rms}$$

in a 50-MHz bandwidth. (With $\gamma = 1$ it would be about 6.2 mV rms.)

**Common mistake.** Adding a noise source $4kT/r_O$. The output resistance is not a separate physical resistor, and adding its "noise" would count the channel noise twice.

**Common mistake.** Reporting the input-referred noise ($\approx 3.1\ \mathrm{nV/\sqrt{Hz}}$, about 22 μV rms in 50 MHz) instead of the output noise, or using a load resistor that does not exist; the only resistance at the output is $r_O$.

**Common mistake.** Forgetting the square root (quoting $2.56\times10^{-5}$ as volts), or multiplying by $2\pi\times50$ MHz. The PSD is per hertz, so it is multiplied by the bandwidth in hertz.

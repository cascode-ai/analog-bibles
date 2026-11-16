# Detailed solution - R364

**Approach.** A common-gate (CG) stage has a low input impedance ($\approx 1/g_m$), so its noise must be represented by *both* an input-referred noise voltage and an input-referred noise current. We find the voltage by shorting the input to ground and dividing the output noise by the voltage gain, and the current by leaving the input open and dividing the output noise by the transimpedance.

### Step 1 — The circuit and the noise sources

The stage is an NMOS $M_1$ with:

- its **gate** at a fixed bias voltage (AC ground);
- its **source** as the input, fed by the signal and by a bias current source that sets $I_D = 1$ mA;
- its **drain** as the output, connected to $V_{DD}$ through the load resistor $R_D = 1\ \mathrm{k}\Omega$.

The noise sources are (the bias current source is taken as noiseless):

- the channel thermal noise of $M_1$, a current between drain and source with $\overline{I_{n1}^2} = 4kT\gamma g_m$;
- the thermal noise of $R_D$, a current in parallel with it, $\overline{I_{nD}^2} = 4kT/R_D$ (equivalently a series voltage $4kTR_D$).

Here $k = 1.38\times10^{-23}$ J/K is Boltzmann's constant, $T = 300$ K, $\gamma = 2/3$ is the channel-noise coefficient and $g_m$ is the transconductance. The common factor is

$$4kT = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K}) = 1.656\times10^{-20}\ \mathrm{J}.$$

**Why two input-referred sources?** A circuit's noise is represented by a voltage source $\overline{V_{n,in}^2}$ in series with the input and a current source $\overline{I_{n,in}^2}$ in parallel with it. If the stage is driven by a voltage source (zero source impedance) only $\overline{V_{n,in}^2}$ matters; if it is driven by a current source (infinite source impedance) only $\overline{I_{n,in}^2}$ matters. Because the CG input impedance is low, the driving source can be anywhere between these extremes, so both are needed. Each is found from the matching extreme:

- input **shorted** → find $\overline{V_{n,in}^2}$;
- input **open** → find $\overline{I_{n,in}^2}$.

### Step 2 — Small-signal parameters

All quantities follow from the square law in saturation (channel-length modulation and body effect neglected). With $W/L = 50/0.5 = 100$:

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{2.68\times10^{-5}\ \mathrm{A^2/V^2}} = 5.177\ \mathrm{mS}.$$

The overdrive voltage $V_{ov} = V_{GS} - V_{TH}$ is

$$V_{ov} = \frac{2I_D}{g_m} = \frac{2\times1\ \mathrm{mA}}{5.177\ \mathrm{mS}} = 0.386\ \mathrm{V},$$

a normal strong-inversion value; the drain is assumed to sit high enough for saturation (the dc drop across $R_D$ is $I_DR_D = 1$ V).

Useful quantities for later:

$$
\begin{aligned}
\frac{1}{g_m} &= \frac{1}{5.177\ \mathrm{mS}} = 193.2\ \Omega,\\
\frac{\gamma}{g_m} &= \frac{2}{3}\times193.2\ \Omega = 128.8\ \Omega,\\
g_mR_D &= (5.177\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 5.177.
\end{aligned}
$$

### Step 3 — Input-referred noise voltage (input shorted)

**Small-signal model in words.** Short the source (input) to ground. Then $v_{gs} = 0$, so the controlled source $g_mv_{gs}$ is zero. The drain node sees $R_D$ to AC ground (no $r_O$, since $\lambda = 0$). Both noise currents, $I_{n1}$ (through the transistor, from drain to the grounded source) and $I_{nD}$ (across $R_D$), flow directly into $R_D$.

**Output noise voltage.** Each noise current is converted to voltage by $R_D$, and the two powers add:

$$\overline{V_{n,out}^2} = 4kT\gamma g_m R_D^2 + \frac{4kT}{R_D}R_D^2 = 4kT\gamma g_mR_D^2 + 4kTR_D .$$

**Voltage gain.** A small voltage $v_{in}$ applied at the source, with the gate grounded, gives $v_{gs} = -v_{in}$. KCL at the drain: the current leaving through $R_D$ plus the current leaving through the transistor (drain to source, $g_mv_{gs}$) must be zero:

$$
\begin{aligned}
\frac{v_{out}}{R_D} + g_mv_{gs} &= 0\\
v_{out} &= -g_mR_Dv_{gs} = g_mR_Dv_{in},
\end{aligned}
\qquad A_v = g_mR_D .
$$

**Divide by the gain squared:**

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma g_mR_D^2 + 4kTR_D}{g_m^2R_D^2}\\
&= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D}\\
&= 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right).
\end{aligned}
$$

**Numbers.** The second term in the bracket is

$$\frac{1}{g_m^2R_D} = \frac{1}{(2.68\times10^{-5}\ \mathrm{S^2})(1000\ \Omega)} = \frac{1}{0.0268\ \mathrm{S}} = 37.3\ \Omega .$$

So

$$
\begin{aligned}
\overline{V_{n,in}^2} &= (1.656\times10^{-20}\ \mathrm{J})\,(128.8\ \Omega + 37.3\ \Omega)\\
&= (1.656\times10^{-20})(166.1)\ \mathrm{V^2/Hz}\\
&= 2.75\times10^{-18}\ \mathrm{V^2/Hz},
\end{aligned}
$$

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{2.75\times10^{-18}}\ \mathrm{V/\sqrt{Hz}} = 1.66\ \mathrm{nV/\sqrt{Hz}}.$$

The transistor contributes $128.8/166.1 = 78\%$ of the power; the load contributes 22 % because the CG gain $g_mR_D \approx 5.2$ is modest.

### Step 4 — Input-referred noise current (input open)

**Small-signal model in words.** Now leave the source node open: it connects only to the transistor (the ideal bias current source has infinite impedance and no noise). The gate is at AC ground, so $v_{gs} = -v_s$, where $v_s$ is the source voltage. Between drain (node out) and source (node in) we have the controlled current $g_mv_{gs}$ and the noise current $I_{n1}$, both flowing from drain to source. $R_D$ and its noise current $I_{nD}$ connect the drain to AC ground.

<!-- diagram: diagram-01.cir -->

**Contribution of $M_1$.** KCL at the open source node: the only current into it is the total channel current, so that current must be zero:

$$g_mv_{gs} + I_{n1} = 0 \quad\Longrightarrow\quad v_{gs} = -\frac{I_{n1}}{g_m}.$$

The source simply moves by $v_s = I_{n1}/g_m$, so that the controlled source cancels the noise current exactly. No net current reaches the drain, so **$M_1$ produces no output noise** with the input open. Physically, a transistor's noise current needs a closed path from drain to source outside the device, and an open source node does not provide one.

**Contribution of $R_D$.** Its noise current flows entirely in $R_D$ (the drain branch carries zero current), giving

$$\overline{V_{n,out}^2}\Big|_{\text{open}} = \frac{4kT}{R_D}R_D^2 = 4kTR_D .$$

**Transimpedance.** A signal current $i_{in}$ injected into the source node has nowhere to go but through the channel to the drain (the current gain of a CG stage is 1), and then through $R_D$:

$$v_{out} = i_{in}R_D, \qquad \frac{v_{out}}{i_{in}} = R_D .$$

**Divide by the transimpedance squared:**

$$\overline{I_{n,in}^2} = \frac{4kTR_D}{R_D^2} = \frac{4kT}{R_D}.$$

The input-referred current is simply the noise current of $R_D$, carried unchanged to the input by the unity current gain.

**Numbers:**

$$\overline{I_{n,in}^2} = \frac{1.656\times10^{-20}\ \mathrm{J}}{1000\ \Omega} = 1.656\times10^{-23}\ \mathrm{A^2/Hz},$$

$$\sqrt{\overline{I_{n,in}^2}} = \sqrt{1.656\times10^{-23}}\ \mathrm{A/\sqrt{Hz}} = 4.07\ \mathrm{pA/\sqrt{Hz}}.$$

### Step 5 — Consistency check

With the input shorted, the output noise is

$$\overline{V_{n,out}^2} = 4kT(\gamma g_mR_D^2 + R_D) = (1.656\times10^{-20})\left(\tfrac23\times5.177\times10^{-3}\times10^{6} + 1000\right) = (1.656\times10^{-20})(3451 + 1000) = 7.37\times10^{-17}\ \mathrm{V^2/Hz}.$$

Dividing by $(g_mR_D)^2 = 5.177^2 = 26.8$ gives $2.75\times10^{-18}\ \mathrm{V^2/Hz}$, matching Step 3.

If the stage is driven from a source resistance $R_{src}$, the input current source flows partly into $R_{src}$, so both sources matter. Neither one alone describes the stage.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 2.75\times10^{-18}\ \mathrm{V^2/Hz} \quad\Longrightarrow\quad \sqrt{\overline{V_{n,in}^2}} \approx 1.66\ \mathrm{nV/\sqrt{Hz}},$$

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} = 1.66\times10^{-23}\ \mathrm{A^2/Hz} \quad\Longrightarrow\quad \sqrt{\overline{I_{n,in}^2}} \approx 4.07\ \mathrm{pA/\sqrt{Hz}},$$

with $g_m = 5.18$ mS. (Including the body effect would replace $g_m$ by $g_m + g_{mb}$ in the voltage, lowering it slightly.)

**Common mistake.** Keeping $M_1$'s noise in the input-referred current, i.e. dividing the *total* output noise ($7.37\times10^{-17}\ \mathrm{V^2/Hz}$) by $R_D^2$, which gives about 8.6 pA/√Hz. With the input open, $M_1$'s noise current has no path outside the transistor and cancels itself (Step 4), so only $R_D$ contributes.

**Common mistake.** Dropping the $R_D$ term from the input-referred voltage, which gives $\sqrt{4kT\gamma/g_m} \approx 1.46$ nV/√Hz. The CG gain is only $g_mR_D \approx 5.2$, so the load noise referred to the input ($4kT/(g_m^2R_D)$, 37 Ω equivalent) is not negligible.

**Common mistake.** Analyzing the stage as a common-source amplifier and quoting only an input-referred voltage. In a CS stage the input is a high-impedance gate and the input noise current is negligible at low frequency; in a CG stage the input is the low-impedance source, and the noise current is an essential part of the description.

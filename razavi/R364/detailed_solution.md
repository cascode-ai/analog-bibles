# Detailed solution - R364

**Approach.** The common-gate (CG) input impedance is low ($\approx 1/g_m$), so the stage needs *both* an input-referred noise voltage (input shorted, output noise divided by the voltage gain squared) and an input-referred noise current (input open, output noise divided by the transimpedance squared).

### Step 1 — Noise sources

The gate of $M_1$ is at ac ground, the source is the input and $R_D = 1\ \mathrm{k}\Omega$ is the drain load. The bias current source is noiseless, so the noise sources are the channel noise of $M_1$, $\overline{I_{n1}^2} = 4kT\gamma g_m$ between drain and source, and the noise of $R_D$, $\overline{I_{nD}^2} = 4kT/R_D$ in parallel with it. The common factor is

$$4kT = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K}) = 1.656\times10^{-20}\ \mathrm{J}.$$

### Step 2 — Small-signal parameters

With $W/L = 50/0.5 = 100$ (channel-length modulation and body effect neglected):

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{2.68\times10^{-5}\ \mathrm{A^2/V^2}} = 5.177\ \mathrm{mS},$$

$$V_{ov} = \frac{2I_D}{g_m} = \frac{2\times1\ \mathrm{mA}}{5.177\ \mathrm{mS}} = 0.386\ \mathrm{V},$$

and the drain is assumed high enough for saturation (the dc drop across $R_D$ is $I_DR_D = 1$ V). For later:

$$
\begin{aligned}
\frac{1}{g_m} &= \frac{1}{5.177\ \mathrm{mS}} = 193.2\ \Omega,\\
\frac{\gamma}{g_m} &= \frac{2}{3}\times193.2\ \Omega = 128.8\ \Omega,\\
g_mR_D &= (5.177\ \mathrm{mS})(1\ \mathrm{k}\Omega) = 5.177.
\end{aligned}
$$

### Step 3 — Input-referred noise voltage (input shorted)

With the source grounded, $v_{gs} = 0$ and both noise currents flow straight into $R_D$ (no $r_O$, since $\lambda = 0$); their powers add:

$$\overline{V_{n,out}^2} = 4kT\gamma g_m R_D^2 + \frac{4kT}{R_D}R_D^2 = 4kT\gamma g_mR_D^2 + 4kTR_D .$$

The CG voltage gain is $A_v = g_mR_D$ (with the gate grounded, $v_{gs} = -v_{in}$ and $v_{out} = -g_mR_Dv_{gs} = g_mR_Dv_{in}$). Dividing by its square:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_mR_D^2 + 4kTR_D}{g_m^2R_D^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right).$$

Numerically,

$$\frac{1}{g_m^2R_D} = \frac{1}{(2.68\times10^{-5}\ \mathrm{S^2})(1000\ \Omega)} = \frac{1}{0.0268\ \mathrm{S}} = 37.3\ \Omega ,$$

$$
\begin{aligned}
\overline{V_{n,in}^2} &= (1.656\times10^{-20}\ \mathrm{J})\,(128.8\ \Omega + 37.3\ \Omega) = (1.656\times10^{-20})(166.1)\ \mathrm{V^2/Hz} = 2.75\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= \sqrt{2.75\times10^{-18}}\ \mathrm{V/\sqrt{Hz}} = 1.66\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

The transistor contributes $128.8/166.1 = 78\%$ of the power and the load 22 %, because the CG gain $g_mR_D \approx 5.2$ is modest.

### Step 4 — Input-referred noise current (input open)

With the input open, the source node connects only to $M_1$ (the bias source has infinite impedance), the gate is at ac ground so $v_{gs} = -v_s$, and $R_D$ with $I_{nD}$ connects the drain to ac ground. $g_mv_{gs}$ and $I_{n1}$ both flow from drain to source.

<!-- diagram: diagram-01.cir -->

**Contribution of $M_1$.** KCL at the open source node forces the total channel current to zero:

$$g_mv_{gs} + I_{n1} = 0 \quad\Longrightarrow\quad v_{gs} = -\frac{I_{n1}}{g_m}.$$

The source moves by $v_s = I_{n1}/g_m$, so the controlled source cancels the noise current exactly and **$M_1$ produces no output noise**: its noise current has no closed path outside the device.

**Contribution of $R_D$.** Its noise current flows entirely in $R_D$:

$$\overline{V_{n,out}^2}\Big|_{\text{open}} = \frac{4kT}{R_D}R_D^2 = 4kTR_D .$$

The CG current gain is 1, so the transimpedance is $v_{out}/i_{in} = R_D$ and

$$\overline{I_{n,in}^2} = \frac{4kTR_D}{R_D^2} = \frac{4kT}{R_D} = \frac{1.656\times10^{-20}\ \mathrm{J}}{1000\ \Omega} = 1.656\times10^{-23}\ \mathrm{A^2/Hz},$$

$$\sqrt{\overline{I_{n,in}^2}} = \sqrt{1.656\times10^{-23}}\ \mathrm{A/\sqrt{Hz}} = 4.07\ \mathrm{pA/\sqrt{Hz}}.$$

The input-referred current is just the noise current of $R_D$, carried to the input by the unity current gain.

### Step 5 — Consistency check

With the input shorted, the output noise is

$$\overline{V_{n,out}^2} = 4kT(\gamma g_mR_D^2 + R_D) = (1.656\times10^{-20})\left(\tfrac23\times5.177\times10^{-3}\times10^{6} + 1000\right) = (1.656\times10^{-20})(3451 + 1000) = 7.37\times10^{-17}\ \mathrm{V^2/Hz}.$$

Dividing by $(g_mR_D)^2 = 5.177^2 = 26.8$ gives $2.75\times10^{-18}\ \mathrm{V^2/Hz}$, matching Step 3. With a finite source resistance $R_{src}$, part of the input noise current flows into $R_{src}$, so both sources are needed.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 2.75\times10^{-18}\ \mathrm{V^2/Hz} \quad\Longrightarrow\quad \sqrt{\overline{V_{n,in}^2}} \approx 1.66\ \mathrm{nV/\sqrt{Hz}},$$

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} = 1.66\times10^{-23}\ \mathrm{A^2/Hz} \quad\Longrightarrow\quad \sqrt{\overline{I_{n,in}^2}} \approx 4.07\ \mathrm{pA/\sqrt{Hz}},$$

with $g_m = 5.18$ mS. (Including the body effect would replace $g_m$ by $g_m + g_{mb}$ in the voltage, lowering it slightly.)

**Common mistake.** Keeping $M_1$'s noise in the input-referred current, i.e. dividing the *total* output noise ($7.37\times10^{-17}\ \mathrm{V^2/Hz}$) by $R_D^2$, which gives about 8.6 pA/√Hz. With the input open, $M_1$'s noise current cancels itself (Step 4).

**Common mistake.** Dropping the $R_D$ term from the input-referred voltage, which gives $\sqrt{4kT\gamma/g_m} \approx 1.46$ nV/√Hz. With a gain of only $g_mR_D \approx 5.2$, the referred load noise ($4kT/(g_m^2R_D)$, 37 Ω equivalent) is not negligible.

**Common mistake.** Analyzing the stage as a common-source amplifier and quoting only a noise voltage. The CG input is the low-impedance source, so the input noise current is an essential part of the description.

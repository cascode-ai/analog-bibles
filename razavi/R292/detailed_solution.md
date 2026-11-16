# Detailed solution - R292

**Approach.** Find the output impedance $Z_{out}(s)$ of the follower with its gate tied to ground through $R_S$, using a model with only $g_m$ and $C_{GS}$. Then rewrite $Z_{out}(s)$ as an equivalent network of two resistors and one inductor, and evaluate the inductance.

### Step 1 — Small-signal parameters

With $W/L = 50/0.5 = 100$ and $I_D = 1$ mA:

$$g_m = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}, \qquad \frac{1}{g_m} = \frac{1}{5.18\ \mathrm{mS}} = 193\ \Omega .$$

In saturation, $C_{GS}$ is the intrinsic $\tfrac23WLC_{ox}$ plus the overlap $WC_{ov}$ ($C_{ov} = 0.4$ fF/μm):

$$
\begin{aligned}
\tfrac23WLC_{ox} &= \tfrac23(50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = \tfrac23(96\ \mathrm{fF}) = 64\ \mathrm{fF},\\
WC_{ov} &= (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF},\\
C_{GS} &= 64 + 20 = 84\ \mathrm{fF}.
\end{aligned}
$$

### Step 2 — Deriving $Z_{out}(s)$

Set $V_{in} = 0$, so the gate G is tied to ground through $R_S$, and drive the output (the source) with a test voltage $V_X$ that delivers $I_X$. The drain is at ac ground; $C_{GD}$, the junction capacitances, $r_O$ and the body effect are neglected.

<!-- diagram: diagram-01.cir -->

$R_S$ and $C_{GS}$ are in series between the output and ground, so they carry the same current $I_1$, flowing from the output toward G:

$$I_1 = \frac{V_X}{R_S + \dfrac{1}{C_{GS}s}}, \qquad V_{GS} = V_G - V_X = -\frac{I_1}{C_{GS}s}.$$

KCL at the output, with $g_mV_{GS}$ flowing from the drain into the output node:

$$
\begin{aligned}
I_X + g_mV_{GS} &= I_1\\
I_X &= I_1 - g_mV_{GS} = I_1 + \frac{g_m}{C_{GS}s}I_1 = I_1\left(1 + \frac{g_m}{C_{GS}s}\right).
\end{aligned}
$$

Dividing $V_X = I_1\left(R_S + \dfrac{1}{C_{GS}s}\right)$ by $I_X$, then multiplying numerator and denominator by $C_{GS}s$:

$$Z_{out} = \frac{V_X}{I_X} = \frac{R_S + \dfrac{1}{C_{GS}s}}{1 + \dfrac{g_m}{C_{GS}s}} = \frac{R_SC_{GS}s + 1}{C_{GS}s + g_m}.$$

At low frequency ($s\to0$, $C_{GS}$ open) $Z_{out}\to 1/g_m = 193\ \Omega$; at high frequency ($s\to\infty$, $C_{GS}$ a short) $Z_{out}\to R_S = 10\ \mathrm{k\Omega}$. Since $R_S > 1/g_m$, $|Z_{out}|$ **rises** with frequency: the output is **inductive**. Physically, $V_{GS}$ can change only as $C_{GS}$ charges through $R_S$, so the transistor's corrective current lags the output voltage.

### Step 3 — Equivalent R–L network

Subtract the low-frequency value $1/g_m$ (the last line divides numerator and denominator by $g_m^2$):

$$
\begin{aligned}
Z_{out} - \frac{1}{g_m} &= \frac{R_SC_{GS}s + 1}{C_{GS}s + g_m} - \frac{1}{g_m}\\
&= \frac{g_m(R_SC_{GS}s + 1) - (C_{GS}s + g_m)}{g_m(C_{GS}s + g_m)}\\
&= \frac{(g_mR_S - 1)\,C_{GS}s}{g_m(C_{GS}s + g_m)}\\
&= \frac{\left(R_S - \dfrac{1}{g_m}\right)\dfrac{C_{GS}}{g_m}s}{1 + \dfrac{C_{GS}}{g_m}s}.
\end{aligned}
$$

A resistor $R_1$ in parallel with an inductor $L$ gives

$$R_1\parallel Ls = \frac{R_1Ls}{R_1 + Ls} = \frac{R_1\,\dfrac{L}{R_1}s}{1 + \dfrac{L}{R_1}s},$$

which is identical if

$$R_1 = R_S - \frac{1}{g_m}, \qquad \frac{L}{R_1} = \frac{C_{GS}}{g_m}\ \Longrightarrow\ L = \frac{C_{GS}}{g_m}\left(R_S - \frac{1}{g_m}\right).$$

So, **exactly**, the output is a resistor $R_2 = 1/g_m$ in series with $R_1 = R_S - 1/g_m$ in parallel with the inductor $L$.

<!-- diagram: diagram-02.cir -->

### Step 4 — Numerical values

$$
\begin{aligned}
R_2 &= \frac{1}{g_m} = 193\ \Omega,\\
R_1 &= R_S - \frac{1}{g_m} = 10\,000 - 193 = 9807\ \Omega,\\
\frac{C_{GS}}{g_m} &= \frac{84\times10^{-15}\ \mathrm{F}}{5.18\times10^{-3}\ \mathrm{S}} = 1.62\times10^{-11}\ \mathrm{s},\\
L &= \frac{C_{GS}}{g_m}R_1 = (1.62\times10^{-11}\ \mathrm{s})(9807\ \Omega) = 1.59\times10^{-7}\ \mathrm{H} \approx 159\ \mathrm{nH}.
\end{aligned}
$$

**Where the output is inductive.** $|Z_{out}|$ starts to rise when $\omega L$ becomes comparable with $R_2$, around $\omega \approx 1/(R_SC_{GS}) = 1.19\times10^9$ rad/s (190 MHz), and saturates at $R_S$ once $\omega L$ exceeds $R_1$, around $\omega \approx g_m/C_{GS} = 6.2\times10^{10}$ rad/s (9.8 GHz). Values of $Z_{out}(j\omega)$:

| $f$ | $\lvert Z_{out}\rvert$ | phase |
|---|---|---|
| 10 MHz | 193 Ω | +3° |
| 100 MHz | 218 Ω | +27° |
| 1 GHz | 1.03 kΩ | +73° |
| 10 GHz | 7.14 kΩ | +43° |
| 100 GHz | 9.95 kΩ | +5° |

The positive phase confirms the inductive character.

**Other forms.** The same $Z_{out}$ can be written as $R_S\parallel(R_x + sL')$ with $R_x = R_S/(g_mR_S - 1) \approx 197\ \Omega$ and $L' = R_S^2C_{GS}/(g_mR_S - 1) \approx 165$ nH. With the approximation $R_S\gg 1/g_m$, all forms reduce to $L \approx R_SC_{GS}/g_m = 162$ nH. All are within 4 % of 159 nH.

**If the overlap capacitance is left out** ($C_{GS} = 64$ fF), the same formula gives $L = (64/84)\times159\ \mathrm{nH} \approx 121$ nH.

### Result

$$Z_{out}(s) = \frac{1 + R_SC_{GS}s}{g_m + C_{GS}s} = \frac{1}{g_m} + \left(R_S - \frac{1}{g_m}\right)\parallel sL, \qquad L = \frac{C_{GS}}{g_m}\left(R_S - \frac{1}{g_m}\right).$$

With $g_m = 5.18$ mS ($1/g_m = 193\ \Omega$) and $C_{GS} = 84$ fF:

$$L \approx 1.59\times10^{-7}\ \mathrm{H} \approx 159\ \mathrm{nH}$$

(about 121 nH if the overlap capacitance is excluded from $C_{GS}$). The inductor sits in parallel with $R_1 = 9.81\ \mathrm{k\Omega}$, and the combination is in series with $1/g_m = 193\ \Omega$.

**Common mistake.** Writing $L = R_SC_{GS}$ (units of seconds, not henries) or $L = C_{GS}/g_m^2$ (no $R_S$). Without $R_S$ the gate is at ac ground and $Z_{out} = 1/(g_m + C_{GS}s)$ is capacitive; the inductance is the time constant $C_{GS}/g_m$ times the resistance $R_S - 1/g_m$.

**Common mistake.** Using the full $WLC_{ox}$ (plus overlap), the triode-region value, for $C_{GS}$. In saturation $C_{GS} = 84$ fF, not 116 fF; the larger value would overestimate $L$ by almost 40 %.

**Common mistake.** Calling the output capacitive because the only reactive element is a capacitor. The follower's output is inductive when $R_S > 1/g_m$, as here ($10\ \mathrm{k\Omega}\gg 193\ \Omega$), and capacitive when $R_S < 1/g_m$.

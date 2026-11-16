# Detailed solution - R292

**Approach.** Find the output impedance $Z_{out}(s)$ of the source follower with its input grounded through the source resistance $R_S$, using a small-signal model that contains only $g_m$ and $C_{GS}$. Then rewrite $Z_{out}(s)$ as an equivalent passive network made of two resistors and one inductor, and evaluate that inductance with the device values.

### Step 1 — Small-signal parameters

**Transconductance** from the square-law saturation current, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, with $W/L = 50/0.5 = 100$ and $I_D = 1$ mA:

$$g_m = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.18\ \mathrm{mS},$$

$$\frac{1}{g_m} = \frac{1}{5.18\ \mathrm{mS}} = 193\ \Omega .$$

**Gate–source capacitance.** The follower's transistor is in saturation, so the channel is pinched off at the drain end and the channel charge is controlled from the source side. The intrinsic part is $\tfrac23WLC_{ox}$, and the gate–source overlap adds $WC_{ov}$ ($C_{ov}$ = overlap capacitance per unit width):

$$
\begin{aligned}
\tfrac23WLC_{ox} &= \tfrac23(50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = \tfrac23(96\ \mathrm{fF}) = 64\ \mathrm{fF},\\
WC_{ov} &= (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF},\\
C_{GS} &= 64 + 20 = 84\ \mathrm{fF}.
\end{aligned}
$$

### Step 2 — The small-signal model for the output impedance

To find the impedance seen at the output, set the input source to zero ($V_{in} = 0$), so the gate is connected to ground through $R_S$, and apply a test voltage $V_X$ at the output (the source of the transistor), drawing a test current $I_X$ into it.

<!-- diagram: diagram-01.cir -->

The model has:

- the resistance $R_S$ from the gate node G to ground;
- the capacitance $C_{GS}$ from G to the output (source) node;
- a voltage-controlled current source $g_mV_{GS}$ flowing from the drain into the output node. The drain is at $V_{DD}$, an ac ground.

$C_{GD}$, the junction capacitances, $r_O$ and the body effect are all neglected, as the problem states.

### Step 3 — Deriving $Z_{out}(s)$

$R_S$ and $C_{GS}$ are in series between the output and ground, so they carry the same current, $I_1$:

$$I_1 = \frac{V_X}{R_S + \dfrac{1}{C_{GS}s}} .$$

**Gate–source voltage.** The voltage across $C_{GS}$, measured from gate to source, is the drop from G to the output, which is the negative of the drop $I_1/(C_{GS}s)$ that $I_1$ produces flowing from the output to G:

$$V_{GS} = V_G - V_X = -\frac{I_1}{C_{GS}s}.$$

**KCL at the output node.** Current enters through the test source ($I_X$) and through the transistor ($g_mV_{GS}$); it leaves through the $C_{GS}$–$R_S$ branch ($I_1$):

$$I_X + g_mV_{GS} = I_1 .$$

Substitute $V_{GS}$:

$$
\begin{aligned}
I_X &= I_1 - g_mV_{GS}\\
&= I_1 + \frac{g_m}{C_{GS}s}I_1\\
&= I_1\left(1 + \frac{g_m}{C_{GS}s}\right).
\end{aligned}
$$

**The impedance.** Divide $V_X = I_1\left(R_S + \dfrac{1}{C_{GS}s}\right)$ by $I_X$:

$$Z_{out} = \frac{V_X}{I_X} = \frac{R_S + \dfrac{1}{C_{GS}s}}{1 + \dfrac{g_m}{C_{GS}s}} .$$

Multiply numerator and denominator by $C_{GS}s$:

$$Z_{out}(s) = \frac{R_SC_{GS}s + 1}{C_{GS}s + g_m}.$$

**Limits.**

- At low frequency ($s\to0$): $Z_{out}\to 1/g_m = 193\ \Omega$. $C_{GS}$ is open, the gate does not move, and the follower behaves like a diode-connected device.
- At high frequency ($s\to\infty$): $Z_{out}\to R_S = 10\ \mathrm{k\Omega}$. $C_{GS}$ is a short, so the output is connected straight to $R_S$.

Since $R_S > 1/g_m$, $|Z_{out}|$ **rises** with frequency. An impedance that grows with frequency is **inductive**.

**Why it is inductive.** When the output is pulled down quickly, $C_{GS}$ initially holds $V_{GS}$ almost constant. The extra gate–source voltage that would let the transistor respond can only build up as $C_{GS}$ charges through $R_S$. The transistor's corrective current therefore lags the output voltage, which is the behaviour of an inductor.

### Step 4 — Equivalent R–L network

Subtract the low-frequency value $1/g_m$ and simplify, to see what is "added" at higher frequencies:

$$
\begin{aligned}
Z_{out} - \frac{1}{g_m} &= \frac{R_SC_{GS}s + 1}{C_{GS}s + g_m} - \frac{1}{g_m}\\
&= \frac{g_m(R_SC_{GS}s + 1) - (C_{GS}s + g_m)}{g_m(C_{GS}s + g_m)}\\
&= \frac{(g_mR_S - 1)\,C_{GS}s}{g_m(C_{GS}s + g_m)}\\
&= \frac{\left(R_S - \dfrac{1}{g_m}\right)\dfrac{C_{GS}}{g_m}s}{1 + \dfrac{C_{GS}}{g_m}s}.
\end{aligned}
$$

(The last line divides numerator and denominator by $g_m^2$.)

Compare this with a resistor $R_1$ in parallel with an inductor $L$:

$$R_1\parallel Ls = \frac{R_1Ls}{R_1 + Ls} = \frac{R_1\,\dfrac{L}{R_1}s}{1 + \dfrac{L}{R_1}s}.$$

The two expressions are identical if

$$R_1 = R_S - \frac{1}{g_m}, \qquad \frac{L}{R_1} = \frac{C_{GS}}{g_m}\ \Longrightarrow\ L = \frac{C_{GS}}{g_m}\left(R_S - \frac{1}{g_m}\right).$$

So, **exactly**, the output looks like a resistor $R_2 = 1/g_m$ in series with the parallel combination of $R_1 = R_S - 1/g_m$ and the inductor $L$.

<!-- diagram: diagram-02.cir -->

### Step 5 — Numerical values

$$
\begin{aligned}
R_2 &= \frac{1}{g_m} = 193\ \Omega,\\
R_1 &= R_S - \frac{1}{g_m} = 10\,000 - 193 = 9807\ \Omega,\\
\frac{C_{GS}}{g_m} &= \frac{84\times10^{-15}\ \mathrm{F}}{5.18\times10^{-3}\ \mathrm{S}} = 1.62\times10^{-11}\ \mathrm{s},\\
L &= \frac{C_{GS}}{g_m}R_1 = (1.62\times10^{-11}\ \mathrm{s})(9807\ \Omega) = 1.59\times10^{-7}\ \mathrm{H} \approx 159\ \mathrm{nH}.
\end{aligned}
$$

**Where the output is inductive.** $|Z_{out}|$ starts to rise when $\omega L$ becomes comparable with $R_2$, around $\omega \approx 1/(R_SC_{GS}) = 1.19\times10^9$ rad/s (190 MHz). It saturates at $R_S$ when $\omega L$ exceeds $R_1$, around $\omega \approx g_m/C_{GS} = 6.2\times10^{10}$ rad/s (9.8 GHz). Values of $Z_{out}(j\omega)$:

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

**Common mistake.** Writing $L = R_SC_{GS}$ or $L = C_{GS}/g_m^2$. The first has units of seconds, not henries, and the second has no dependence on $R_S$. Without $R_S$ the gate is tied to an ac ground and there is no inductive behaviour at all: $Z_{out} = 1/(g_m + C_{GS}s)$ is capacitive. The inductance is the product of the time constant $C_{GS}/g_m$ and the resistance $R_S - 1/g_m$.

**Common mistake.** Using the full $WLC_{ox}$ (plus overlap) for $C_{GS}$. That is the triode-region value. In saturation only $\tfrac23WLC_{ox}$ appears between gate and source, so $C_{GS} = 84$ fF, not 116 fF. The larger value would overestimate $L$ by almost 40 %.

**Common mistake.** Concluding that the output is capacitive because a capacitor is the only reactive element. Whether the follower's output is inductive or capacitive depends on whether $R_S$ is larger or smaller than $1/g_m$. Here $R_S = 10\ \mathrm{k\Omega}\gg 193\ \Omega$, so $|Z_{out}|$ rises with frequency.

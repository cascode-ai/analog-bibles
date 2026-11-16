# Detailed solution - R592

**Approach.** Compute the gate–source capacitance of $M_1$ in saturation. It sits between the gate X and the tail node, an AC ground for differential signals, so it simply adds to $C_1$. Then repeat the single-pole analysis of the half circuit (KCL at the gate and at the output, input zeroed) with $C_1 + C_{GS}$ in place of $C_1$.

### Step 1 — Gate–source capacitance of $M_1$

In saturation, $C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$. With $W = 50\ \mu$m, $L = 0.5\ \mu$m, $C_{ox} = 3.84\ \mathrm{fF/\mu m^2}$ and $C_{ov} = 0.4\ \mathrm{fF/\mu m}$:

$$
\begin{aligned}
WLC_{ox} &= (50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = 96\ \mathrm{fF},\\
\tfrac23WLC_{ox} &= \tfrac23\times96\ \mathrm{fF} = 64\ \mathrm{fF},\\
WC_{ov} &= (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF},\\
C_{GS} &= 64 + 20 = 84\ \mathrm{fF}.
\end{aligned}
$$

### Step 2 — Where $C_{GS}$ sits in the half circuit

The source of $M_1$ is the tail node P, an AC ground for differential signals. So $C_{GS}$ connects the gate X to AC ground, in parallel with $C_1$ (whose left plate is held at $V_{CM}$ during amplification):

$$C_A = C_1 + C_{GS} = 2\ \mathrm{pF} + 0.084\ \mathrm{pF} = 2.084\ \mathrm{pF}.$$

The half circuit has $C_A$ from X to ground and $C_3 = 0.5$ pF from X to the output; at the output, $M_1$ draws $g_{m1}v_X$, with $R_0 = r_{O1}\parallel r_{O3}$ to ground and no other capacitance.

<!-- diagram: diagram-01.cir -->

### Step 3 — Small-signal parameters

Each transistor carries $I_D = I_{SS}/2 = 0.5$ mA, with $W/L = 100$:

$$
\begin{aligned}
G_m = g_{m1} &= \sqrt{2(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = 3.66\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\qquad r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
R_0 &= r_{O1}\parallel r_{O3} = 6.67\ \mathrm{k}\Omega,\qquad \frac{1}{R_0} = 0.150\ \mathrm{mS}.
\end{aligned}
$$

### Step 4 — Pole of the half circuit

With the input zeroed, KCL at X gives

$$sC_AV_X + sC_3(V_X - V_{out}) = 0\quad\Longrightarrow\quad V_X = \frac{C_3}{C_A + C_3}\,V_{out} = \beta\,V_{out},$$

with the feedback factor $\beta = C_3/(C_A + C_3)$, and KCL at the output gives

$$G_mV_X + \frac{V_{out}}{R_0} + sC_3(V_{out} - V_X) = 0 .$$

Substitute $V_X = \beta V_{out}$ and use $C_3(1 - \beta) = C_AC_3/(C_A + C_3)$:

$$
\begin{aligned}
\left(G_m\beta + \frac{1}{R_0}\right)V_{out} + s\,\frac{C_AC_3}{C_A + C_3}\,V_{out} &= 0\\
\tau &= \frac{C_AC_3/(C_A + C_3)}{1/R_0 + G_mC_3/(C_A + C_3)} .
\end{aligned}
$$

The output sees $C_3$ in series with $C_A$, discharged through $R_0$ in parallel with the feedback-generated resistance $1/(G_m\beta)$.

### Step 5 — Numbers

$$
\begin{aligned}
C_A + C_3 &= 2.084 + 0.5 = 2.584\ \mathrm{pF},\\
\beta &= \frac{0.5}{2.584} = 0.1935,\\
\frac{C_AC_3}{C_A + C_3} &= \frac{(2.084)(0.5)}{2.584}\ \mathrm{pF} = 0.403\ \mathrm{pF},\\
G_m\beta &= 3.66\ \mathrm{mS}\times0.1935 = 0.708\ \mathrm{mS},\\
\frac{1}{R_0} + G_m\beta &= 0.150 + 0.708 = 0.858\ \mathrm{mS},\\
\tau &= \frac{0.403\times10^{-12}\ \mathrm{F}}{0.858\times10^{-3}\ \mathrm{S}} = 0.470\ \mathrm{ns}.
\end{aligned}
$$

Without the overlap term ($C_{GS} = 64$ fF), the same steps give $\beta = 0.1950$, a series capacitance of 0.4025 pF and $\tau = 0.466$ ns, practically the same.

### Step 6 — Comparison with the case without $C_{GS}$

Without $C_{GS}$ ($C_A = C_1 = 2$ pF): $\beta = 0.2$, series capacitance 0.4 pF, $G_m\beta = 0.732$ mS, and

$$\tau_0 = \frac{0.4\ \mathrm{pF}}{0.150\ \mathrm{mS} + 0.732\ \mathrm{mS}} = 0.453\ \mathrm{ns}.$$

So $C_{GS}$ lengthens the time constant by $0.470/0.453 - 1 \approx 4\ \%$, a small effect because $C_{GS}$ (84 fF) is only about 4 % of $C_1$. It enlarges the series capacitance slightly (0.400 → 0.403 pF) and, more importantly, dilutes the feedback factor (0.200 → 0.1935), so $G_m\beta$ falls from 0.732 to 0.708 mS.

The large-loop-gain approximation ($1/R_0$ neglected) would give $(C_1 + C_{GS})/G_m = 2.084\ \mathrm{pF}/3.66\ \mathrm{mS} = 0.569$ ns, against 0.546 ns without $C_{GS}$; with a loop gain of only about 5, the $1/R_0$ term must be kept.

### Result

$C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = 64 + 20 = 84$ fF, connected from the gate to the AC-grounded tail node, i.e. in parallel with $C_1$. Then

$$\tau = \frac{C_3(C_1 + C_{GS})/(C_1 + C_{GS} + C_3)}{1/(r_{O1}\parallel r_{O3}) + g_{m1}C_3/(C_1 + C_{GS} + C_3)} = \frac{0.403\ \mathrm{pF}}{0.150\ \mathrm{mS} + 0.708\ \mathrm{mS}} \approx 0.47\ \mathrm{ns},$$

about 4 % longer than the 0.453 ns obtained without $C_{GS}$ (0.466 ns if the overlap is not included).

**Common mistake.** Treating $C_{GS}$ as a Miller capacitance from gate to output, or as a capacitor across $C_3$. The source of $M_1$ is the tail node, an AC ground for the differential half circuit, so $C_{GS}$ goes from the gate to ground, in parallel with $C_1$ (it is $C_{GD}$, neglected here, that would parallel $C_3$).

**Common mistake.** Concluding that the extra capacitance makes the circuit faster: capacitance added at the summing node reduces the feedback factor and increases $\tau$. A related slip is a units error: with $W$, $L$ in µm and $C_{ox}$ in fF/µm², $C_{GS}$ comes out directly in fF, tens of femtofarads, not picofarads.

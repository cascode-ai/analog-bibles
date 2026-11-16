# Detailed solution - R534

**Approach.** The loop transmission is the op amp's gain times the feedback factor β(s) of the network around the inverting input. Writing β(s) with impedances shows that $C_F$ puts a factor $(1 + sR_2C_F)$ in its numerator (a zero); choose $C_F$ so that this zero lands on the network's pole.

### Step 1 — Loop transmission and the feedback network

Let $R_2 = 100\ \mathrm{k\Omega}$ (output to the inverting input X) and $R_1 = 50\ \mathrm{k\Omega}$ (X to ground). With $V_{out} = -A(s)V_X$ and $V_X = \beta(s)V_{out}$, the loop transmission is

$$T(s) = -A(s)\,\beta(s).$$

$A(s)$ contains the op amp's own poles, including the one formed with $C_L$, and does not depend on $C_F$ (the 25-fF capacitor found below adds negligible loading next to the 1-pF $C_L$). Everything $C_F$ changes is in

$$Z_2 = R_2\parallel\frac{1}{sC_F} = \frac{R_2}{1 + sR_2C_F},\qquad Z_1 = R_1\parallel\frac{1}{sC_{in}} = \frac{R_1}{1 + sR_1C_{in}} .$$

<!-- diagram: diagram-01.cir -->

### Step 2 — Derive β(s)

The network is a voltage divider:

$$\beta(s) = \frac{V_X}{V_{out}} = \frac{Z_1}{Z_1 + Z_2} = \frac{\dfrac{R_1}{1 + sR_1C_{in}}}{\dfrac{R_1}{1 + sR_1C_{in}} + \dfrac{R_2}{1 + sR_2C_F}} = \frac{R_1(1 + sR_2C_F)}{R_1(1 + sR_2C_F) + R_2(1 + sR_1C_{in})} .$$

The denominator is $R_1 + sR_1R_2C_F + R_2 + sR_1R_2C_{in} = (R_1 + R_2) + sR_1R_2(C_{in} + C_F)$, so

$$\boxed{\beta(s) = \frac{R_1\,(1 + sR_2C_F)}{(R_1 + R_2) + sR_1R_2\,(C_{in} + C_F)}}$$

### Step 3 — Proof that $C_F$ introduces a zero

The numerator factor $(1 + sR_2C_F)$ vanishes at

$$s_z = -\frac{1}{R_2C_F},\qquad \omega_z = \frac{1}{R_2C_F} ,$$

a left-half-plane zero of β(s), and hence of $T = -A\beta$; with $C_F = 0$ there is none. The network's pole is at

$$\omega_p = \frac{R_1 + R_2}{R_1R_2\,(C_{in} + C_F)} = \frac{1}{(R_1\parallel R_2)(C_{in} + C_F)} ,$$

which without $C_F$ is the pole created by $C_{in}$:

$$
\begin{aligned}
R_1\parallel R_2 &= \frac{50\times100}{50 + 100}\ \mathrm{k\Omega} = 33.3\ \mathrm{k\Omega},\\
\omega_p &= \frac{1}{33.3\ \mathrm{k\Omega}\times50\ \mathrm{fF}} = \frac{1}{1.67\ \mathrm{ns}} = 6.0\times10^8\ \mathrm{rad/s}\quad(f_p = 95\ \mathrm{MHz}).
\end{aligned}
$$

$C_{in}$ shunts the lower leg at high frequencies, so β falls (a pole that costs phase margin); $C_F$ bypasses $R_2$, so more of $V_{out}$ gets through (a zero that can offset it).

### Step 4 — Choose $C_F$ to cancel the pole

$$\frac{1}{R_2C_F} = \frac{R_1 + R_2}{R_1R_2(C_{in} + C_F)}
\quad\Longrightarrow\quad
R_1R_2(C_{in} + C_F) = R_2C_F(R_1 + R_2)
\quad\Longrightarrow\quad
R_1C_{in} + R_1C_F = R_1C_F + R_2C_F ,$$

i.e. $R_1C_{in} = R_2C_F$:

$$C_F = \frac{R_1}{R_2}\,C_{in} = \frac{50\ \mathrm{k\Omega}}{100\ \mathrm{k\Omega}}\times50\ \mathrm{fF} = 25\ \mathrm{fF}.$$

### Step 5 — Check

With $C_F = 25$ fF:

$$
\begin{aligned}
R_2C_F &= 100\ \mathrm{k\Omega}\times25\ \mathrm{fF} = 2.5\ \mathrm{ns},\qquad R_1C_{in} = 50\ \mathrm{k\Omega}\times50\ \mathrm{fF} = 2.5\ \mathrm{ns},\\
\omega_z &= \frac{1}{2.5\ \mathrm{ns}} = 4.0\times10^8\ \mathrm{rad/s}\quad(64\ \mathrm{MHz}),\\
\omega_p &= \frac{1}{33.3\ \mathrm{k\Omega}\times(50 + 25)\ \mathrm{fF}} = \frac{1}{2.5\ \mathrm{ns}} = 4.0\times10^8\ \mathrm{rad/s}.\ \checkmark
\end{aligned}
$$

The pole moved down from 95 MHz to 64 MHz because $C_F$ also adds to the node capacitance, but the zero landed exactly on it. With $R_2C_F = R_1C_{in}$,

$$\beta(s) = \frac{R_1(1 + sR_2C_F)}{(R_1 + R_2)(1 + sR_2C_F)} = \frac{R_1}{R_1 + R_2} = \frac13$$

at **all** frequencies: a *compensated divider*, whose resistive ratio $R_1/(R_1 + R_2)$ equals its capacitive ratio $C_F/(C_F + C_{in}) = 25/75 = 1/3$, as in a compensated oscilloscope probe.

### Result

With $C_F$ across the feedback resistor,

$$\beta(s) = \frac{R_1(1 + sR_2C_F)}{(R_1 + R_2) + sR_1R_2(C_{in} + C_F)},$$

so $C_F$ introduces a left-half-plane zero at $\omega_z = 1/(R_2C_F)$ in the loop transmission $-A(s)\beta(s)$. The pole of the network is at $(R_1 + R_2)/[R_1R_2(C_{in} + C_F)]$ (≈ 95 MHz without $C_F$). Making them coincide requires $R_2C_F = R_1C_{in}$:

$$C_F = \frac{R_1}{R_2}C_{in} = \frac{50\ \mathrm{k\Omega}}{100\ \mathrm{k\Omega}}\times50\ \mathrm{fF} = 25\ \mathrm{fF}.$$

Both then sit at about 64 MHz and cancel, and $\beta = 1/3$ at all frequencies.

**Common mistake.** Inverting the ratio and getting $C_F = (R_2/R_1)C_{in} = 100$ fF. The condition is equal time constants, $R_2C_F = R_1C_{in}$: the capacitor across the *larger* resistor must be the *smaller* one.

**Common mistake.** Choosing $C_F = C_{in} = 50$ fF "to match the input capacitance". That is right only for $R_1 = R_2$; the capacitors must split in the same ratio as the resistors.

**Common mistake.** Writing the zero as $1/[(R_1\parallel R_2)C_F]$ (that combination belongs to the pole), or taking 50 kΩ as the feedback resistor. The zero comes from the feedback branch alone: $\omega_z = 1/(R_2C_F)$ with $R_2 = 100\ \mathrm{k\Omega}$.

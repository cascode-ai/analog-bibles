# Detailed solution - R534

**Approach.** The loop transmission is the product of the op amp's gain and the feedback factor β(s) of the network formed by the resistors and capacitors around the inverting input. Write β(s) with impedances, show that $C_F$ puts a factor $(1 + sR_2C_F)$ in its numerator (a zero), and choose $C_F$ so that this zero lands exactly on the pole of the network.

### Step 1 — Loop transmission and the feedback network

Name the elements: $R_2 = 100\ \mathrm{k\Omega}$ is the feedback resistor (output to inverting input), $R_1 = 50\ \mathrm{k\Omega}$ goes from the inverting input to ground (the input source is set to zero), $C_{in} \approx 50$ fF is the op amp input capacitance at that node, and $C_L = 1$ pF loads the output. Call the inverting input node X.

Break the loop at the op amp: the op amp produces $V_{out} = -A(s)V_X$, and the network returns $V_X = \beta(s)V_{out}$ to its input. The loop transmission is therefore

$$T(s) = -A(s)\,\beta(s).$$

$A(s)$ includes the op amp's own poles, including the one formed with $C_L$; it does not depend on $C_F$. (The 25-fF capacitor found below adds negligible loading next to the 1-pF $C_L$.) Everything that $C_F$ changes is in $\beta(s)$.

**Network impedances.** From the output to X: $R_2$ in parallel with $C_F$. From X to ground: $R_1$ in parallel with $C_{in}$.

$$Z_2 = R_2\parallel\frac{1}{sC_F} = \frac{R_2}{1 + sR_2C_F},\qquad Z_1 = R_1\parallel\frac{1}{sC_{in}} = \frac{R_1}{1 + sR_1C_{in}} .$$

<!-- diagram: diagram-01.cir -->

### Step 2 — Derive β(s)

The network is a voltage divider (the op amp input draws no current other than through $C_{in}$, which is already in $Z_1$):

$$\beta(s) = \frac{V_X}{V_{out}} = \frac{Z_1}{Z_1 + Z_2} = \frac{\dfrac{R_1}{1 + sR_1C_{in}}}{\dfrac{R_1}{1 + sR_1C_{in}} + \dfrac{R_2}{1 + sR_2C_F}} .$$

Multiply numerator and denominator by $(1 + sR_1C_{in})(1 + sR_2C_F)$:

$$\beta(s) = \frac{R_1(1 + sR_2C_F)}{R_1(1 + sR_2C_F) + R_2(1 + sR_1C_{in})} .$$

Expand the denominator:

$$R_1 + sR_1R_2C_F + R_2 + sR_1R_2C_{in} = (R_1 + R_2) + sR_1R_2(C_{in} + C_F).$$

So

$$\boxed{\beta(s) = \frac{R_1\,(1 + sR_2C_F)}{(R_1 + R_2) + sR_1R_2\,(C_{in} + C_F)}}$$

### Step 3 — Proof that $C_F$ introduces a zero

The numerator contains the factor $(1 + sR_2C_F)$, which vanishes at

$$s_z = -\frac{1}{R_2C_F},\qquad \omega_z = \frac{1}{R_2C_F} .$$

This is a left-half-plane zero of β(s), and hence of the loop transmission $T = -A\beta$. Without $C_F$ ($C_F = 0$) the factor is 1 and there is no zero.

**Pole of the network.** The denominator gives

$$\omega_p = \frac{R_1 + R_2}{R_1R_2\,(C_{in} + C_F)} = \frac{1}{(R_1\parallel R_2)(C_{in} + C_F)} .$$

**Without $C_F$** this is the pole created by $C_{in}$:

$$
\begin{aligned}
R_1\parallel R_2 &= \frac{50\times100}{50 + 100}\ \mathrm{k\Omega} = 33.3\ \mathrm{k\Omega},\\
\omega_p &= \frac{1}{33.3\ \mathrm{k\Omega}\times50\ \mathrm{fF}} = \frac{1}{1.67\ \mathrm{ns}} = 6.0\times10^8\ \mathrm{rad/s}\quad(f_p = 95\ \mathrm{MHz}).
\end{aligned}
$$

**Physical picture.** $C_{in}$ shunts the lower leg at high frequencies, so less of $V_{out}$ is returned and β falls. That is an extra pole in the loop, which costs phase margin. $C_F$ bypasses $R_2$ at high frequencies, so *more* of $V_{out}$ gets through as frequency rises. This is a zero, and it can offset the falling β.

### Step 4 — Choose $C_F$ to cancel the pole

Set $\omega_z = \omega_p$:

$$\frac{1}{R_2C_F} = \frac{R_1 + R_2}{R_1R_2(C_{in} + C_F)} .$$

Cross-multiply:

$$R_1R_2(C_{in} + C_F) = R_2C_F(R_1 + R_2).$$

Divide by $R_2$ and expand:

$$R_1C_{in} + R_1C_F = R_1C_F + R_2C_F \quad\Longrightarrow\quad R_1C_{in} = R_2C_F .$$

Therefore

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

The pole moved down from 95 MHz to 64 MHz because $C_F$ also adds to the node capacitance, but the zero moved onto it exactly. With $R_2C_F = R_1C_{in}$, β(s) reduces to

$$\beta(s) = \frac{R_1(1 + sR_2C_F)}{(R_1 + R_2)(1 + sR_2C_F)} = \frac{R_1}{R_1 + R_2} = \frac13$$

at **all** frequencies. This is a *compensated divider*: the resistive divider ratio $R_1/(R_1 + R_2)$ equals the capacitive divider ratio $C_F/(C_F + C_{in}) = 25/75 = 1/3$, exactly as in a compensated oscilloscope probe.

### Result

With $C_F$ across the feedback resistor,

$$\beta(s) = \frac{R_1(1 + sR_2C_F)}{(R_1 + R_2) + sR_1R_2(C_{in} + C_F)},$$

so $C_F$ introduces a left-half-plane zero at $\omega_z = 1/(R_2C_F)$ in the loop transmission $-A(s)\beta(s)$. The pole of the network is at $(R_1 + R_2)/[R_1R_2(C_{in} + C_F)]$ (≈ 95 MHz without $C_F$). Making them coincide requires $R_2C_F = R_1C_{in}$:

$$C_F = \frac{R_1}{R_2}C_{in} = \frac{50\ \mathrm{k\Omega}}{100\ \mathrm{k\Omega}}\times50\ \mathrm{fF} = 25\ \mathrm{fF}.$$

Both then sit at about 64 MHz and cancel, and $\beta = 1/3$ at all frequencies.

**Common mistake.** Inverting the ratio and getting $C_F = (R_2/R_1)C_{in} = 100$ fF. The condition is equal time constants, $R_2C_F = R_1C_{in}$. The capacitor across the *larger* resistor must be the *smaller* one.

**Common mistake.** Choosing $C_F = C_{in} = 50$ fF "to match the input capacitance". That would only be right for $R_1 = R_2$. In general the two capacitors must split in the same ratio as the resistors.

**Common mistake.** Writing the zero as $1/[(R_1\parallel R_2)C_F]$ (that combination belongs to the pole), or swapping the resistors (taking 50 kΩ as the feedback resistor). The zero comes from the feedback branch alone: $Z_2 = R_2/(1 + sR_2C_F)$, so $\omega_z = 1/(R_2C_F)$ with $R_2 = 100\ \mathrm{k\Omega}$.

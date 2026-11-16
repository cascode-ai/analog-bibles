# Detailed solution - R699

**Approach.** Model $M_1$ as its gate capacitance $C$ in series with the channel's equivalent series resistance $R_S$. Node X then sees $L_b$ to the supply, the $R_S$–$C$ branch to ground, and the digital circuit as a current source. Derive $V_X/I_{DD}$, read the damping factor from its second-order denominator and set it to 1; a larger $L_b$ lowers the damping, so the critical value is the maximum.

### Step 1 — Bias point and capacitance of $M_1$

The inductor carries no DC voltage, so the gate (node X) sits at $V_{DD} = 3$ V; source, drain and bulk are grounded, so $V_{GS} = 3$ V, $V_{DS} = 0$, $V_{SB} = 0$ and $V_{TH} = V_{TH0} = 0.7$ V:

$$V_{ov} = V_{GS} - V_{TH} = 3 - 0.7 = 2.3\ \mathrm{V} > 0 .$$

The channel is strongly inverted and $M_1$ is in deep triode (uniform channel), so its gate–channel capacitance is the full oxide capacitance:

$$C = WLC_{ox} = (100\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = (50\ \mu\mathrm{m^2})(3.84\ \mathrm{fF/\mu m^2}) = 192\ \mathrm{fF}.$$

### Step 2 — Series resistance of the MOS capacitor

The source-to-drain channel resistance in deep triode is

$$R_{tot} = \frac{1}{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})} = \frac{1}{(134\ \mu\mathrm{A/V^2})(200)(2.3\ \mathrm{V})} = \frac{1}{0.06164\ \mathrm{A/V}} = 16.2\ \Omega .$$

The capacitor current enters the channel uniformly along its length and leaves through both grounded ends, so in each half it falls linearly from $I/2$ at the contact to zero at the centre. The power dissipated is

$$P = 2\int_0^{L/2}\left[\frac{I}{L}\left(\frac{L}{2} - x\right)\right]^2\frac{R_{tot}}{L}\,dx = 2\cdot\frac{I^2R_{tot}}{L^3}\cdot\frac{(L/2)^3}{3} = \frac{I^2R_{tot}}{12},$$

and equating $P = I^2R_S$ gives

$$R_S = \frac{R_{tot}}{12} = \frac{16.2\ \Omega}{12} = 1.35\ \Omega .$$

(A cruder lumped estimate, with all the charge entering at the centre of the channel, gives $R_S \approx (R_{tot}/2)\parallel(R_{tot}/2) = R_{tot}/4 = 4.06\ \Omega$.)

### Step 3 — Equivalent circuit at node X

$V_{DD}$ is ac ground, so $L_b$ connects X to ac ground; $M_1$ is $R_S$ in series with $C$ from X to ground; the digital circuit is a current source $I_{DD}$ drawing current out of X.

<!-- diagram: diagram-01.cir -->

### Step 4 — Transfer function $V_X/I_{DD}$

KCL at node X, with the $R_S$–$C$ branch admittance $1/(R_S + 1/sC) = sC/(1 + sR_SC)$:

$$\frac{V_X}{sL_b} + \frac{V_X}{R_S + \dfrac{1}{sC}} + I_{DD} = 0 \quad\Longrightarrow\quad V_X\left[\frac{1}{sL_b} + \frac{sC}{1 + sR_SC}\right] = -I_{DD}.$$

Over the common denominator $sL_b(1 + sR_SC)$:

$$\frac{1}{sL_b} + \frac{sC}{1 + sR_SC} = \frac{(1 + sR_SC) + s^2L_bC}{sL_b(1 + sR_SC)} ,$$

so

$$\frac{V_X}{I_{DD}}(s) = -\frac{sL_b(1 + sR_SC)}{s^2L_bC + sR_SC + 1}.$$

### Step 5 — Damping factor and the critical condition

Dividing the denominator by $L_bC$ and matching it to $s^2 + 2\zeta\omega_ns + \omega_n^2$:

$$s^2 + \frac{R_S}{L_b}s + \frac{1}{L_bC}, \qquad \omega_n = \frac{1}{\sqrt{L_bC}}, \qquad 2\zeta\omega_n = \frac{R_S}{L_b},$$

$$\zeta = \frac{R_S}{2L_b\omega_n} = \frac{R_S}{2L_b}\sqrt{L_bC} = \frac{R_S}{2}\sqrt{\frac{C}{L_b}} .$$

Since $\zeta \propto 1/\sqrt{L_b}$, increasing $L_b$ reduces the damping, and the largest $L_b$ without ringing has $\zeta = 1$:

$$1 = \frac{R_S}{2}\sqrt{\frac{C}{L_b}} \;\Longrightarrow\; \sqrt{\frac{L_b}{C}} = \frac{R_S}{2} \;\Longrightarrow\; L_{b,max} = \frac{R_S^2C}{4},$$

i.e. the loop resistance must be at least $2\sqrt{L_b/C}$, twice the characteristic impedance of the $L_b$–$C$ tank.

### Step 6 — Numerical value

With $R_S = R_{tot}/12 = 1.35\ \Omega$:

$$R_S^2 = (1.352\ \Omega)^2 = 1.828\ \Omega^2,$$

$$L_{b,max} = \frac{(1.828\ \Omega^2)(192\times10^{-15}\ \mathrm{F})}{4} = \frac{3.51\times10^{-13}}{4}\ \mathrm{H} = 8.8\times10^{-14}\ \mathrm{H} \approx 0.088\ \mathrm{pH}.$$

With the lumped estimate $R_S = R_{tot}/4 = 4.06\ \Omega$:

$$L_{b,max} = \frac{(4.06\ \Omega)^2(192\ \mathrm{fF})}{4} = \frac{(16.45)(192\times10^{-15})}{4}\ \mathrm{H} = 7.9\times10^{-13}\ \mathrm{H} \approx 0.79\ \mathrm{pH}.$$

**Interpretation.** A bond wire or package lead has about 1 nH, roughly $10^4$ times more than either value, so a single $100/0.5$ MOS capacitor, with its tiny capacitance and very small series resistance, cannot critically damp a realistic supply inductance. In practice decoupling uses far larger capacitance, and damping often relies on deliberately added series resistance.

**Model scope.** At the resulting resonance, $\omega_n = 1/\sqrt{L_bC} \approx 7.7\times10^{12}$ rad/s, the product $\omega_nR_{tot}C \approx 24$ is not small, so the channel no longer behaves as a simple low-frequency $R_S$ in series with $C$. The lumped number is the intended answer; the conclusion that one such device cannot damp a real bond wire holds regardless.

### Result

$$L_{b,max} = \frac{R_S^2C}{4} \approx 0.088\ \mathrm{pH},$$

with $C = WLC_{ox} = 192$ fF and $R_S = R_{tot}/12 = 1.35\ \Omega$ ($R_{tot} = 16.2\ \Omega$ for $V_{GS} - V_{TH} = 2.3$ V). Using the cruder lumped ESR $R_{tot}/4 = 4.06\ \Omega$ gives $L_{b,max} \approx 0.79$ pH. Either way the value is orders of magnitude below a realistic bond-wire inductance.

**Common mistake.** Using the parallel-RLC damping formula (e.g. $L_b = 4R_S^2C$) or forgetting the factor 4. $R_S$ is in **series** with $C$ in the $L_b$–$C$ loop, so $\zeta = (R_S/2)\sqrt{C/L_b}$ and $L_b = R_S^2C/4$.

**Common mistake.** Taking the full source-to-drain resistance $R_{tot} = 16.2\ \Omega$ as the series resistance, which gives about 12.6 pH. The gate current leaves through both grounded ends of a distributed channel, so the ESR is only $R_{tot}/12$ (or $R_{tot}/4$ in the lumped estimate).

**Common mistake.** Treating the MOS capacitor as lossless. With $R_S = 0$, $\zeta = 0$ and the node always rings; the critical value of $L_b$ exists only because of the channel resistance.

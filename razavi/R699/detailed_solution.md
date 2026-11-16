# Detailed solution - R699

**Approach.** Model $M_1$ as a MOS capacitor: its gate capacitance $C$ in series with an equivalent series resistance $R_S$ coming from the channel. Node X then sees the inductor $L_b$ to the supply, the series $R_S$–$C$ branch to ground, and the digital circuit as a current source. We derive the transfer function $V_X/I_{DD}$, read the damping factor from its second-order denominator, and set it equal to 1. A larger $L_b$ lowers the damping, so the critical value is the maximum.

### Step 1 — Bias point and capacitance of $M_1$

The gate of $M_1$ is node X. The inductor carries no DC voltage, so the DC level of X is $V_{DD} = 3$ V. Source, drain and bulk are grounded, so

$$V_{GS} = 3\ \mathrm{V},\qquad V_{DS} = 0,\qquad V_{SB} = 0 \;\Rightarrow\; V_{TH} = V_{TH0} = 0.7\ \mathrm{V}.$$

The overdrive voltage is

$$V_{ov} = V_{GS} - V_{TH} = 3 - 0.7 = 2.3\ \mathrm{V} > 0,$$

so the channel is strongly inverted and $M_1$ is in deep triode (uniform channel). Its gate–channel capacitance is the full oxide capacitance:

$$C = WLC_{ox} = (100\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = (50\ \mu\mathrm{m^2})(3.84\ \mathrm{fF/\mu m^2}) = 192\ \mathrm{fF}.$$

### Step 2 — Series resistance of the MOS capacitor

**Source-to-drain channel resistance** (deep triode):

$$R_{tot} = \frac{1}{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})} = \frac{1}{(134\ \mu\mathrm{A/V^2})(200)(2.3\ \mathrm{V})} = \frac{1}{0.06164\ \mathrm{A/V}} = 16.2\ \Omega .$$

**Equivalent series resistance.** The capacitor current enters the channel through the oxide uniformly along the length and leaves through both grounded ends (source and drain). In each half, the current falls linearly from $I/2$ at the contact to zero at the centre. The power dissipated is

$$P = 2\int_0^{L/2}\left[\frac{I}{L}\left(\frac{L}{2} - x\right)\right]^2\frac{R_{tot}}{L}\,dx = 2\cdot\frac{I^2R_{tot}}{L^3}\cdot\frac{(L/2)^3}{3} = \frac{I^2R_{tot}}{12},$$

and equating $P = I^2R_S$ gives

$$R_S = \frac{R_{tot}}{12} = \frac{16.2\ \Omega}{12} = 1.35\ \Omega .$$

(A cruder lumped estimate, which assumes all the charge enters at the centre of the channel, gives $R_S \approx (R_{tot}/2)\parallel(R_{tot}/2) = R_{tot}/4 = 4.06\ \Omega$.)

### Step 3 — Equivalent circuit at node X

For small signals and transients:

- $V_{DD}$ is an ideal supply, i.e. AC ground, so $L_b$ connects X to AC ground;
- $M_1$ is $R_S$ in series with $C$, from X to ground;
- the digital circuit is a current source $I_{DD}$ drawing current out of X.

<!-- diagram: diagram-01.cir -->

### Step 4 — Transfer function $V_X/I_{DD}$

**KCL at node X** (currents leaving X through the inductor, through the $R_S$–$C$ branch, and into the digital circuit sum to zero):

$$\frac{V_X}{sL_b} + \frac{V_X}{R_S + \dfrac{1}{sC}} + I_{DD} = 0 .$$

Simplify the admittance of the $R_S$–$C$ branch by multiplying numerator and denominator by $sC$:

$$\frac{1}{R_S + \dfrac{1}{sC}} = \frac{sC}{1 + sR_SC}.$$

So

$$V_X\left[\frac{1}{sL_b} + \frac{sC}{1 + sR_SC}\right] = -I_{DD}.$$

Combine over the common denominator $sL_b(1 + sR_SC)$:

$$\frac{1}{sL_b} + \frac{sC}{1 + sR_SC} = \frac{(1 + sR_SC) + s^2L_bC}{sL_b(1 + sR_SC)} .$$

Therefore

$$\frac{V_X}{I_{DD}}(s) = -\frac{sL_b(1 + sR_SC)}{s^2L_bC + sR_SC + 1}.$$

### Step 5 — Damping factor and the critical condition

The natural response is set by the denominator. Divide it by $L_bC$ to put it in the standard form $s^2 + 2\zeta\omega_ns + \omega_n^2$:

$$s^2 + \frac{R_S}{L_b}s + \frac{1}{L_bC}.$$

Match the coefficients:

$$\omega_n = \frac{1}{\sqrt{L_bC}}, \qquad 2\zeta\omega_n = \frac{R_S}{L_b}.$$

Solve for the damping factor $\zeta$:

$$\zeta = \frac{R_S}{2L_b\omega_n} = \frac{R_S}{2L_b}\sqrt{L_bC} = \frac{R_S}{2}\sqrt{\frac{C}{L_b}} .$$

- $\zeta > 1$: overdamped, no ringing;
- $\zeta = 1$: critically damped;
- $\zeta < 1$: underdamped, the node rings after each current step.

Since $\zeta \propto 1/\sqrt{L_b}$, increasing $L_b$ reduces the damping. The largest $L_b$ that still avoids ringing is the one with $\zeta = 1$:

$$1 = \frac{R_S}{2}\sqrt{\frac{C}{L_b}} \;\Longrightarrow\; \sqrt{\frac{L_b}{C}} = \frac{R_S}{2} \;\Longrightarrow\; L_{b,max} = \frac{R_S^2C}{4}.$$

Physically, damping requires the resistance in the resonant loop to be at least $2\sqrt{L_b/C}$, twice the characteristic impedance of the $L_b$–$C$ tank.

### Step 6 — Numerical value

With $R_S = R_{tot}/12 = 1.35\ \Omega$:

$$R_S^2 = (1.352\ \Omega)^2 = 1.828\ \Omega^2,$$

$$L_{b,max} = \frac{(1.828\ \Omega^2)(192\times10^{-15}\ \mathrm{F})}{4} = \frac{3.51\times10^{-13}}{4}\ \mathrm{H} = 8.8\times10^{-14}\ \mathrm{H} \approx 0.088\ \mathrm{pH}.$$

With the lumped estimate $R_S = R_{tot}/4 = 4.06\ \Omega$:

$$L_{b,max} = \frac{(4.06\ \Omega)^2(192\ \mathrm{fF})}{4} = \frac{(16.45)(192\times10^{-15})}{4}\ \mathrm{H} = 7.9\times10^{-13}\ \mathrm{H} \approx 0.79\ \mathrm{pH}.$$

**Interpretation.** A bond wire or package lead has an inductance of order 1 nH, i.e. about $10^4$ times larger than either value. A single $100/0.5$ MOS capacitor therefore cannot critically damp a realistic supply inductance: its capacitance is tiny and its series resistance very small. In practice, decoupling uses far larger capacitance, and damping often relies on deliberately added series resistance.

**Model scope.** The lumped model uses the low-frequency ESR. At the resulting resonance, $\omega_n = 1/\sqrt{L_bC} \approx 7.7\times10^{12}$ rad/s, the product $\omega_nR_{tot}C \approx 24$ is not small, so the channel no longer behaves as a simple $R_S$ in series with $C$ there. The lumped number is the intended answer; the conclusion that one such device cannot damp a real bond wire holds regardless.

### Result

$$L_{b,max} = \frac{R_S^2C}{4} \approx 0.088\ \mathrm{pH},$$

with $C = WLC_{ox} = 192$ fF and $R_S = R_{tot}/12 = 1.35\ \Omega$ ($R_{tot} = 16.2\ \Omega$ for $V_{GS} - V_{TH} = 2.3$ V). Using the cruder lumped ESR $R_{tot}/4 = 4.06\ \Omega$ gives $L_{b,max} \approx 0.79$ pH. Either way the value is orders of magnitude below a realistic bond-wire inductance.

**Common mistake.** Using the parallel-RLC damping formula (e.g. $L_b = 4R_S^2C$) or forgetting the factor 4. Here $R_S$ is in **series** with $C$ in the $L_b$–$C$ loop, so the denominator is $s^2L_bC + sR_SC + 1$ and $\zeta = (R_S/2)\sqrt{C/L_b}$, giving $L_b = R_S^2C/4$.

**Common mistake.** Taking the full source-to-drain resistance $R_{tot} = 16.2\ \Omega$ as the series resistance, which gives about 12.6 pH. The gate current leaves through both grounded ends of a distributed channel, so the effective ESR is only $R_{tot}/12$ (or $R_{tot}/4$ in the lumped estimate).

**Common mistake.** Treating the MOS capacitor as lossless. With $R_S = 0$ there is no damping at all ($\zeta = 0$) and the node always rings; the critical value of $L_b$ exists only because of the channel resistance.

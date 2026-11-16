# Detailed solution - R313

**Approach.** Compute $g_m$ and the device capacitances and lump them into $C_S$ (source node) and $C_D$ (drain node). With $\lambda = 0$ and the gate at ac ground, no capacitor bridges the common-gate (CG) stage's input and output, so KCL at the two nodes gives an exactly factored transfer function, one pole per node. Then analyse the common-source (CS) stage built from the same parts, whose $C_{GD}$ bridges input and output (Miller effect), and compare.

### Step 1 — Transconductance and device capacitances

With $W/L = 50/0.5 = 100$:

$$g_m = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}, \qquad \frac{1}{g_m} = 193\ \Omega .$$

In saturation, $C_{GS}$ is $\tfrac23WLC_{ox}$ plus the overlap $WC_{ov}$, and $C_{GD}$ is the overlap only:

$$C_{GS} = \tfrac23(50)(0.5)(3.84)\ \mathrm{fF} + (50)(0.4)\ \mathrm{fF} = 64 + 20 = 84\ \mathrm{fF}, \qquad C_{GD} = (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF}.$$

The source and drain regions are $W\times E = 50\times1.5\ \mu\mathrm{m}^2$ with perimeter $2(W + E) = 103\ \mu$m, and $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m} = 0.0035\ \mathrm{fF/\mu m}$:

$$C_{SB} = C_{DB} = (75\ \mu\mathrm{m^2})(0.56\ \mathrm{fF/\mu m^2}) + (103\ \mu\mathrm{m})(0.0035\ \mathrm{fF/\mu m}) = 42.0 + 0.36 = 42.4\ \mathrm{fF}.$$

### Step 2 — Transfer function of the CG stage

The gate is at $V_b$ (ac ground) and the bulk is grounded, so $C_{GS}$ and $C_{SB}$ load the source and $C_{GD}$ and $C_{DB}$ load the drain:

$$C_S = C_{GS} + C_{SB} = 84 + 42.4 = 126.4\ \mathrm{fF}, \qquad C_D = C_{GD} + C_{DB} = 20 + 42.4 = 62.4\ \mathrm{fF}.$$

No capacitance connects the source to the drain, so there is **no Miller effect**. The transistor carries $g_mv_{gs} = g_m(0 - V_S) = -g_mV_S$ from the drain (output) to the source S, independent of $V_{out}$ ($\lambda = 0$, no body effect). KCL at S and at the output:

$$\frac{V_{in} - V_S}{R_S} - g_mV_S = C_Ss\,V_S\quad\Longrightarrow\quad V_{in} = V_S\left(1 + g_mR_S + R_SC_Ss\right),$$

$$-\frac{V_{out}}{R_D} = C_Ds\,V_{out} - g_mV_S\quad\Longrightarrow\quad V_{out} = \frac{g_mR_D}{1 + R_DC_Ds}\,V_S .$$

Combining:

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{\left(1 + g_mR_S + R_SC_Ss\right)\left(1 + R_DC_Ds\right)} = \frac{g_mR_D}{1 + g_mR_S}\cdot\frac{1}{\left(1 + \dfrac{s}{\omega_{in}}\right)\left(1 + \dfrac{s}{\omega_{out}}\right)}.$$

Since the output never feeds back to the input, the two poles are **exact**.

### Step 3 — CG numbers

**Low-frequency gain:**

$$A_0 = \frac{g_mR_D}{1 + g_mR_S} = \frac{(5.18\ \mathrm{mS})(2\ \mathrm{k\Omega})}{1 + (5.18\ \mathrm{mS})(1\ \mathrm{k\Omega})} = \frac{10.35}{6.18} = 1.68 .$$

$R_S$ and the input resistance $1/g_m = 193\ \Omega$ form a divider that passes only $1/6.18$ of $V_{in}$ to the source.

**Input pole** (the source sees $R_S\parallel(1/g_m)$):

$$\omega_{in} = \frac{1 + g_mR_S}{R_SC_S} = \frac{g_m + 1/R_S}{C_S} = \frac{6.18\ \mathrm{mS}}{126.4\ \mathrm{fF}} = 4.89\times10^{10}\ \mathrm{rad/s}\quad(f = 7.8\ \mathrm{GHz}).$$

**Output pole** (the dominant one):

$$\omega_{out} = \frac{1}{R_DC_D} = \frac{1}{(2\ \mathrm{k\Omega})(62.4\ \mathrm{fF})} = 8.02\times10^{9}\ \mathrm{rad/s}\quad(f = 1.28\ \mathrm{GHz}).$$

### Step 4 — The comparison CS stage

Now $R_S$ is in series with the gate and the source is grounded, which removes $C_{SB}$. The remaining capacitances are $C_{GS} = 84$ fF (gate to ground), $C_{GD} = 20$ fF (gate to drain, **bridging input and output**) and $C_{DB} = 42.4$ fF (drain to ground).

<!-- diagram: diagram-01.cir -->

KCL at the gate and drain gives the standard CS result

$$\frac{V_{out}}{V_{in}} = \frac{(C_{GD}s - g_m)R_D}{R_SR_D\xi s^2 + \left[R_S(1 + g_mR_D)C_{GD} + R_SC_{GS} + R_D(C_{GD} + C_{DB})\right]s + 1},$$

with $\xi = C_{GS}C_{GD} + C_{GS}C_{DB} + C_{GD}C_{DB}$.

**Gain:** $A_0 = -g_mR_D = -(5.18\ \mathrm{mS})(2\ \mathrm{k\Omega}) = -10.4$.

**Coefficients:**

$$
\begin{aligned}
\xi &= (84)(20) + (84)(42.4) + (20)(42.4)\ \mathrm{fF^2} = 1680 + 3558 + 847 = 6085\ \mathrm{fF^2},\\
R_SR_D\xi &= (1\ \mathrm{k\Omega})(2\ \mathrm{k\Omega})(6.085\times10^{-27}\ \mathrm{F^2}) = 1.217\times10^{-20}\ \mathrm{s^2},\\
R_S(1 + g_mR_D)C_{GD} &= (1\ \mathrm{k\Omega})(11.35)(20\ \mathrm{fF}) = 227\ \mathrm{ps},\\
R_SC_{GS} &= (1\ \mathrm{k\Omega})(84\ \mathrm{fF}) = 84\ \mathrm{ps},\\
R_D(C_{GD} + C_{DB}) &= (2\ \mathrm{k\Omega})(62.4\ \mathrm{fF}) = 125\ \mathrm{ps},\\
\text{sum} &= 436\ \mathrm{ps}.
\end{aligned}
$$

**Poles** (roots of $1.217\times10^{-20}s^2 + 4.36\times10^{-10}s + 1 = 0$):

$$
\begin{aligned}
s_{1,2} &= \frac{-4.36\times10^{-10}\pm\sqrt{(4.36\times10^{-10})^2 - 4(1.217\times10^{-20})}}{2(1.217\times10^{-20})}\\
&= \frac{-4.36\times10^{-10}\pm\sqrt{1.413\times10^{-19}}}{2.434\times10^{-20}} = \frac{-4.36\times10^{-10}\pm3.76\times10^{-10}}{2.434\times10^{-20}},\\
|s_1| &= 2.46\times10^{9}\ \mathrm{rad/s}\ (0.39\ \mathrm{GHz}), \qquad |s_2| = 3.33\times10^{10}\ \mathrm{rad/s}\ (5.3\ \mathrm{GHz}).
\end{aligned}
$$

**Zero:** $s_z = +g_m/C_{GD} = 5.18\ \mathrm{mS}/20\ \mathrm{fF} = 2.59\times10^{11}$ rad/s (41 GHz), in the right half plane.

The dominant pole is set mainly by $R_S(1 + g_mR_D)C_{GD}$: $C_{GD}$ is Miller-multiplied by $1 + g_mR_D = 11.4$.

### Step 5 — Comparison

| | CG stage | CS stage |
|---|---|---|
| Low-frequency gain | $+1.68$ | $-10.4$ |
| Dominant pole | 1.28 GHz (output) | 0.39 GHz (Miller, input) |
| Second pole | 7.8 GHz (input) | 5.3 GHz |
| Zero | none | RHP, 41 GHz |
| Gain × dominant-pole frequency | ≈ 2.1 GHz | ≈ 4.1 GHz |

- **Gain.** The CS gain is larger by the factor $1 + g_mR_S = 6.2$, because the CG stage's low input resistance $1/g_m$ loads the source resistance.
- **Bandwidth.** Without Miller multiplication, the CG stage's lowest pole (1.28 GHz) is about 3.3 times higher than the CS stage's dominant pole (0.39 GHz).
- **Overall.** The CG stage trades gain for bandwidth; here its gain–bandwidth product is actually lower, so it is attractive for its wide bandwidth and non-inverting, low-input-impedance behaviour, not for raw gain.

With the body effect, $g_m$ would become $g_m + g_{mb}$ in the CG gain (numerator and denominator) and in the input pole, raising the gain slightly and the input pole more noticeably; the problem asks us to neglect it.

### Result

**CG stage** ($g_m = 5.18$ mS, $C_S = C_{GS} + C_{SB} = 126.4$ fF, $C_D = C_{GD} + C_{DB} = 62.4$ fF):

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{1 + g_mR_S}\cdot\frac{1}{(1 + s/\omega_{in})(1 + s/\omega_{out})},$$

- low-frequency gain $g_mR_D/(1 + g_mR_S)\approx1.68$;
- input pole $\omega_{in} = (g_m + 1/R_S)/C_S\approx4.9\times10^{10}$ rad/s (≈ 7.8 GHz);
- output pole $\omega_{out} = 1/(R_DC_D)\approx8.0\times10^{9}$ rad/s (≈ 1.28 GHz); both exact for $\lambda = 0$.

**CS stage with the same parts:** gain $-g_mR_D\approx-10.4$ (about 6.2 times larger); poles ≈ $2.5\times10^9$ rad/s (0.39 GHz) and ≈ $3.3\times10^{10}$ rad/s (5.3 GHz), with a right-half-plane zero at $g_m/C_{GD}\approx41$ GHz. The CS dominant pole is about 3 times lower because of the Miller-multiplied $C_{GD}$; the CG stage gives up gain for bandwidth.

**Common mistake.** Computing the input pole with $R_S$ alone, $1/(R_SC_S)\approx1.26$ GHz. The source also sees $1/g_m = 193\ \Omega$ in parallel with $R_S$, so the pole is $(g_m + 1/R_S)/C_S$, more than six times higher.

**Common mistake.** Quoting the CG gain as $g_mR_D = 10.4$, ignoring the divider formed by $R_S$ and the low input resistance $1/g_m$; the gain is $g_mR_D/(1 + g_mR_S)$.

**Common mistake.** Applying Miller multiplication to the CG stage, or omitting the junction capacitances. In the CG stage $C_{GD}$ goes to the ac-grounded gate and simply adds to $C_D$; dropping $C_{SB}$ and $C_{DB}$ would put the poles near 11.7 GHz and 4 GHz, far too high.

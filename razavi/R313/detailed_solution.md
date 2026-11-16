# Detailed solution - R313

**Approach.** Compute $g_m$ and the device capacitances, and lump them into $C_S$ (source node) and $C_D$ (drain node). With $\lambda = 0$ and the gate at ac ground, the common-gate (CG) stage has no capacitor bridging its input and output, so KCL at the two nodes gives an exactly factored transfer function: one pole per node. We then analyse the common-source (CS) stage built from the same parts, whose $C_{GD}$ bridges input and output (Miller effect), and compare gains and poles.

### Step 1 — Transconductance

Square-law saturation, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, with $W/L = 50/0.5 = 100$:

$$g_m = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}, \qquad \frac{1}{g_m} = 193\ \Omega .$$

### Step 2 — Device capacitances

**Gate–source** (saturation: $\tfrac23WLC_{ox}$ plus overlap $WC_{ov}$):

$$C_{GS} = \tfrac23(50)(0.5)(3.84)\ \mathrm{fF} + (50)(0.4)\ \mathrm{fF} = 64 + 20 = 84\ \mathrm{fF}.$$

**Gate–drain** (saturation: overlap only):

$$C_{GD} = (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF}.$$

**Junctions.** Source and drain regions are both $W\times E = 50\times1.5\ \mu\mathrm{m}^2$, with perimeter $2(W + E) = 103\ \mu$m; $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m} = 0.0035\ \mathrm{fF/\mu m}$:

$$C_{SB} = C_{DB} = (75\ \mu\mathrm{m^2})(0.56\ \mathrm{fF/\mu m^2}) + (103\ \mu\mathrm{m})(0.0035\ \mathrm{fF/\mu m}) = 42.0 + 0.36 = 42.4\ \mathrm{fF}.$$

### Step 3 — Node capacitances of the CG stage

The gate is at $V_b$, an ac ground, and the bulk is grounded. Hence:

- $C_{GS}$ (source to gate) and $C_{SB}$ (source to bulk) both go from the source to ac ground:
$$C_S = C_{GS} + C_{SB} = 84 + 42.4 = 126.4\ \mathrm{fF}.$$
- $C_{GD}$ (drain to gate) and $C_{DB}$ (drain to bulk) both go from the drain to ac ground:
$$C_D = C_{GD} + C_{DB} = 20 + 42.4 = 62.4\ \mathrm{fF}.$$

No capacitance connects the source node to the drain node, so there is **no Miller effect** in the CG stage.

### Step 4 — Transfer function of the CG stage

**Model.** Node S (source): $R_S$ to $V_{in}$, $C_S$ to ground. The transistor carries $g_mv_{gs} = g_m(0 - V_S) = -g_mV_S$ from the drain (output) to S. Output node: $R_D$ to ac ground, $C_D$ to ground. $\lambda = 0$ and no body effect, so the transistor current depends only on $V_S$.

**KCL at S** (current in through $R_S$ and from the transistor; out through $C_S$):

$$\frac{V_{in} - V_S}{R_S} - g_mV_S = C_Ss\,V_S\quad\Longrightarrow\quad V_{in} = V_S\left(1 + g_mR_S + R_SC_Ss\right).$$

**KCL at the output** (current from $R_D$; out through $C_D$ and through the transistor):

$$-\frac{V_{out}}{R_D} = C_Ds\,V_{out} - g_mV_S\quad\Longrightarrow\quad V_{out} = \frac{g_mR_D}{1 + R_DC_Ds}\,V_S .$$

**Combine:**

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{\left(1 + g_mR_S + R_SC_Ss\right)\left(1 + R_DC_Ds\right)} = \frac{g_mR_D}{1 + g_mR_S}\cdot\frac{1}{\left(1 + \dfrac{s}{\omega_{in}}\right)\left(1 + \dfrac{s}{\omega_{out}}\right)}.$$

Because $\lambda = 0$, the output never feeds back to the input, so the two poles below are **exact**.

### Step 5 — CG numbers

**Low-frequency gain:**

$$A_0 = \frac{g_mR_D}{1 + g_mR_S} = \frac{(5.18\ \mathrm{mS})(2\ \mathrm{k\Omega})}{1 + (5.18\ \mathrm{mS})(1\ \mathrm{k\Omega})} = \frac{10.35}{6.18} = 1.68 .$$

The input resistance of the CG stage is only $1/g_m = 193\ \Omega$, so $R_S$ and $1/g_m$ form a divider that passes only $1/6.18$ of $V_{in}$ to the source.

**Input pole.** The resistance at the source is $R_S\parallel(1/g_m)$:

$$\omega_{in} = \frac{1 + g_mR_S}{R_SC_S} = \frac{g_m + 1/R_S}{C_S} = \frac{6.18\ \mathrm{mS}}{126.4\ \mathrm{fF}} = 4.89\times10^{10}\ \mathrm{rad/s}\quad(f = 7.8\ \mathrm{GHz}).$$

**Output pole:**

$$\omega_{out} = \frac{1}{R_DC_D} = \frac{1}{(2\ \mathrm{k\Omega})(62.4\ \mathrm{fF})} = 8.02\times10^{9}\ \mathrm{rad/s}\quad(f = 1.28\ \mathrm{GHz}).$$

The output pole is the dominant one.

### Step 6 — The comparison CS stage

Now $R_S$ is in series with the gate, the source is grounded, and $R_D$ is the drain load. Grounding the source removes $C_{SB}$. The remaining capacitances are $C_{GS} = 84$ fF (gate to ground), $C_{GD} = 20$ fF (gate to drain, **bridging input and output**) and $C_{DB} = 42.4$ fF (drain to ground).

<!-- diagram: diagram-01.cir -->

This is the standard CS circuit; KCL at the gate and drain gives (the same derivation as for any CS stage with these elements)

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

The dominant pole is dominated by the term $R_S(1 + g_mR_D)C_{GD}$: $C_{GD}$ is Miller-multiplied by $1 + g_mR_D = 11.4$.

### Step 7 — Comparison

| | CG stage | CS stage |
|---|---|---|
| Low-frequency gain | $+1.68$ | $-10.4$ |
| Dominant pole | 1.28 GHz (output) | 0.39 GHz (Miller, input) |
| Second pole | 7.8 GHz (input) | 5.3 GHz |
| Zero | none | RHP, 41 GHz |
| Gain × dominant-pole frequency | ≈ 2.1 GHz | ≈ 4.1 GHz |

- **Gain.** The CS gain is larger by the factor $1 + g_mR_S = 6.2$, because the CG stage's low input resistance $1/g_m$ loads the source resistance.
- **Bandwidth.** The CG stage has no Miller multiplication; its lowest pole (1.28 GHz) is about 3.3 times higher than the CS stage's dominant pole (0.39 GHz).
- **Overall.** The CG stage trades gain for bandwidth; in this example its gain–bandwidth product is actually lower than the CS stage's, so the CG is attractive for its wide bandwidth and non-inverting, low-input-impedance behaviour, not for raw gain.

If the body effect were included, $g_m$ would be replaced by $g_m + g_{mb}$ in the CG gain (numerator and denominator) and in the input pole, raising both slightly; the problem asks us to neglect it.

### Result

**CG stage** ($g_m = 5.18$ mS, $C_S = C_{GS} + C_{SB} = 126.4$ fF, $C_D = C_{GD} + C_{DB} = 62.4$ fF):

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{1 + g_mR_S}\cdot\frac{1}{(1 + s/\omega_{in})(1 + s/\omega_{out})},$$

- low-frequency gain $g_mR_D/(1 + g_mR_S)\approx1.68$;
- input pole $\omega_{in} = (g_m + 1/R_S)/C_S\approx4.9\times10^{10}$ rad/s (≈ 7.8 GHz);
- output pole $\omega_{out} = 1/(R_DC_D)\approx8.0\times10^{9}$ rad/s (≈ 1.28 GHz); both exact for $\lambda = 0$.

**CS stage with the same parts:** gain $-g_mR_D\approx-10.4$ (about 6.2 times larger); poles ≈ $2.5\times10^9$ rad/s (0.39 GHz) and ≈ $3.3\times10^{10}$ rad/s (5.3 GHz), with a right-half-plane zero at $g_m/C_{GD}\approx41$ GHz. The CS dominant pole is about 3 times lower because of the Miller-multiplied $C_{GD}$; the CG stage gives up gain for bandwidth.

**Common mistake.** Computing the input pole with $R_S$ alone, $1/(R_SC_S)\approx1.26$ GHz. The source node also sees the CG input resistance $1/g_m = 193\ \Omega$ in parallel with $R_S$, so the pole is $(g_m + 1/R_S)/C_S$, more than six times higher.

**Common mistake.** Quoting the CG gain as $g_mR_D = 10.4$. That ignores the divider formed by $R_S$ and the low input resistance $1/g_m$; the correct gain is $g_mR_D/(1 + g_mR_S)$.

**Common mistake.** Applying Miller multiplication to the CG stage, or omitting the junction capacitances. In the CG stage $C_{GD}$ goes from the drain to the ac-grounded gate, so it simply adds to $C_D$. Dropping $C_{SB}$ and $C_{DB}$ would put the poles near 11.7 GHz and 4 GHz, far too high.

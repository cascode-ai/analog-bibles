# Detailed solution - R316

**Approach.** For differential signals the tail node is a virtual ground, so we analyse one half circuit: $M_1$ drives the diode-connected PMOS $M_3$ (node X), $M_3$ is mirrored by $M_5$ (with gain $K = 2$), and $M_5$ drives the output node loaded by the diode-connected NFET that implements $R_D$. Because the input is an ideal voltage source, the gate of $M_1$ is an ac ground for pole calculations and there is no input pole. That leaves two nodes, X and the output. We compute the bias currents, transconductances and capacitances, estimate one pole per node, then solve the two-node circuit exactly and find the zeros.

### Step 1 — Bias currents and transconductances

**Currents.** $I_{SS} = 100\ \mu$A splits equally, so $M_1$ and $M_3$ carry 50 µA. $M_5$ has the same $V_{GS}$ as $M_3$ and is $K = 2$ times wider, so it carries $2\times50 = 100\ \mu$A, and so does the diode NFET in series with it.

**Transconductances** (square law, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$):

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(50\ \mu\mathrm{A})} = \sqrt{1.34\times10^{-6}} = 1.16\ \mathrm{mS},\\
g_{m3} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(20)(50\ \mu\mathrm{A})} = \sqrt{7.68\times10^{-8}} = 0.277\ \mathrm{mS}\quad(1/g_{m3} = 3.61\ \mathrm{k\Omega}),\\
g_{m5} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(40)(100\ \mu\mathrm{A})} = \sqrt{3.07\times10^{-7}} = 0.554\ \mathrm{mS} = Kg_{m3},\\
g_{mD} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm{A})} = \sqrt{2.68\times10^{-6}} = 1.64\ \mathrm{mS}.
\end{aligned}
$$

**Load resistance.** With channel-length modulation neglected, a diode-connected NFET is a resistance $1/g_{mD}$:

$$R_D = \frac{1}{g_{mD}} = 611\ \Omega, \qquad g_{m5}R_D = \frac{0.554}{1.64} = 0.339 .$$

### Step 2 — Low-frequency gain

$M_1$ draws $g_{m1}v_{in}/2$ from X, where the diode $M_3$ presents $1/g_{m3}$: $v_X = -g_{m1}(v_{in}/2)/g_{m3}$. $M_5$ converts $v_X$ into an output current $-g_{m5}v_X$ flowing into $R_D$:

$$v_{out1} = -g_{m5}R_Dv_X = \frac{g_{m5}}{g_{m3}}\,g_{m1}R_D\,\frac{v_{in}}{2} = Kg_{m1}R_D\,\frac{v_{in}}{2}.$$

The other half gives the opposite, so the differential gain is

$$|A_v| = Kg_{m1}R_D = \frac{2g_{m1}}{g_{mD}} = \frac{2(1.16)}{1.64} = 1.41 .$$

### Step 3 — Device capacitances

All devices are saturated: $C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$ and $C_{GD} = WC_{ov}$. Junctions: $C_{DB} = WEC_j + 2(W + E)C_{jsw}$, with $C_{jsw} = 0.0035\ \mathrm{fF/\mu m}$ (NMOS) or $0.0032\ \mathrm{fF/\mu m}$ (PMOS).

| Device | $W$ (µm) | $C_{GS}$ (fF) | $C_{GD}$ (fF) | $C_{DB}$ (fF) |
|---|---|---|---|---|
| $M_1$ (NMOS) | 50 | $64 + 20 = 84.0$ | 20.0 | $42.0 + 0.36 = 42.4$ |
| $M_3$ (PMOS) | 10 | $12.8 + 3 = 15.8$ | 3.0 (shorted) | $14.1 + 0.07 = 14.2$ |
| $M_5$ (PMOS) | 20 | $25.6 + 6 = 31.6$ | 6.0 | $28.2 + 0.14 = 28.3$ |
| Diode NFET | 50 | 84.0 | 20.0 (shorted) | 42.4 |

For example, $C_{GS3} = \tfrac23(10)(0.5)(3.84) + (10)(0.3) = 12.8 + 3.0 = 15.8$ fF and $C_{DB5} = (20)(1.5)(0.94) + 2(21.5)(0.0032) = 28.2 + 0.14 = 28.3$ fF.

### Step 4 — Which capacitances sit at which node

$V_{DD}$, ground, the tail node (differential virtual ground) and the gate of $M_1$ (driven by an ideal voltage source) are all ac grounds for pole calculations.

**Node X** (drain of $M_1$, gates of $M_3$, $M_5$, drain of $M_3$):

- $C_{GS3}$, $C_{GS5}$: X to $V_{DD}$; $C_{DB3}$: X to the PMOS bulk ($V_{DD}$); $C_{DB1}$: X to ground; $C_{GD1}$: X to the gate of $M_1$ (ac ground).
- $C_{GD3}$ is shorted (gate and drain of $M_3$ are both X).
- $C_{GD5}$ bridges X and the output.

$$C_{Xg} = 15.8 + 31.6 + 14.2 + 42.4 + 20.0 = 123.9\ \mathrm{fF}\ \text{(grounded part)}.$$

**Output node** (drain of $M_5$, gate and drain of the diode NFET):

- $C_{DB5}$: to $V_{DD}$; $C_{GS,D}$ and $C_{DB,D}$ of the diode NFET: to ground. Its $C_{GD}$ is shorted.

$$C_{Yg} = 28.3 + 84.0 + 42.4 = 154.7\ \mathrm{fF}\ \text{(grounded part)}.$$

### Step 5 — Pole estimates, one per node

**Node X.** Resistance $1/g_{m3}$ (the diode). $C_{GD5}$ is Miller-multiplied by $1 + g_{m5}R_D = 1.34$ (the gain from X to the output is only $-0.339$):

$$C_X = 123.9 + 1.34(6.0) = 132\ \mathrm{fF},\qquad \omega_X = \frac{g_{m3}}{C_X} = \frac{0.277\ \mathrm{mS}}{132\ \mathrm{fF}} = 2.1\times10^{9}\ \mathrm{rad/s}\ \ (0.33\ \mathrm{GHz}).$$

**Output node.** Resistance $R_D = 1/g_{mD}$. Counting $C_{GD5}$ once:

$$C_{out}\approx154.7 + 6.0 = 161\ \mathrm{fF},\qquad \omega_{out} = \frac{g_{mD}}{C_{out}} = \frac{1.64\ \mathrm{mS}}{161\ \mathrm{fF}} = 1.0\times10^{10}\ \mathrm{rad/s}\ \ (1.6\ \mathrm{GHz}).$$

($C_{GD5}$ is so small that applying a Miller factor of about 4 to it at the output would change this estimate by only about 10 %; the exact solution in Step 6 settles the value.)

**Which pole dominates.** X has the large resistance $1/g_{m3} = 3.6\ \mathrm{k\Omega}$ (a narrow, low-current PMOS diode), whereas the output has only 611 Ω. So the **mirror pole at X is dominant**. Because $M_5$'s gain is only 0.34, the Miller effect of $C_{GD5}$ is minor.

### Step 6 — Exact two-node solution

<!-- diagram: diagram-01.cir -->

Let $v_1 = v_{in}/2$. Put the bridging $C_{GD5}$ into the node totals: $C_X = C_{Xg} + C_{GD5} = 129.9$ fF and $C_Y = C_{Yg} + C_{GD5} = 160.7$ fF.

**KCL at X** ($M_3$ draws $g_{m3}V_X$, $M_1$ draws $g_{m1}v_1$, plus capacitor currents):

$$(g_{m3} + C_Xs)V_X - C_{GD5}s\,V_{out} = -g_{m1}v_1 .$$

**KCL at the output** ($M_5$ draws $g_{m5}V_X$ from the output toward $V_{DD}$, the diode NFET draws $g_{mD}V_{out}$):

$$(g_{m5} - C_{GD5}s)V_X + (g_{mD} + C_Ys)V_{out} = 0 .$$

**Determinant** (its roots are the poles):

$$D(s) = (g_{m3} + C_Xs)(g_{mD} + C_Ys) + C_{GD5}s\,(g_{m5} - C_{GD5}s).$$

Expand into $as^2 + bs + c$:

$$
\begin{aligned}
a &= C_XC_Y - C_{GD5}^2 = (129.9)(160.7) - 36\ \mathrm{fF^2} = 2.084\times10^{-26}\ \mathrm{F^2},\\
b &= g_{m3}C_Y + g_{mD}C_X + g_{m5}C_{GD5} = (4.45 + 21.27 + 0.33)\times10^{-17} = 2.606\times10^{-16}\ \mathrm{S\,F},\\
c &= g_{m3}g_{mD} = (0.277\ \mathrm{mS})(1.64\ \mathrm{mS}) = 4.537\times10^{-7}\ \mathrm{S^2}.
\end{aligned}
$$

Roots:

$$
\begin{aligned}
s_{1,2} &= \frac{-b\pm\sqrt{b^2 - 4ac}}{2a} = \frac{-2.606\times10^{-16}\pm\sqrt{6.790\times10^{-32} - 3.783\times10^{-32}}}{4.169\times10^{-26}}\\
&= \frac{-2.606\times10^{-16}\pm1.734\times10^{-16}}{4.169\times10^{-26}},\\
|s_1| &= 2.09\times10^{9}\ \mathrm{rad/s}\ (0.333\ \mathrm{GHz}), \qquad |s_2| = 1.04\times10^{10}\ \mathrm{rad/s}\ (1.66\ \mathrm{GHz}).
\end{aligned}
$$

These agree closely with the node estimates of Step 5.

### Step 7 — The zeros

Solve the two KCL equations for $V_{out}$ (Cramer's rule):

$$V_{out} = \frac{g_{m1}v_1\,(g_{m5} - C_{GD5}s)}{D(s)} .$$

**Zero from $C_{GD5}$:** feedforward from X to the output through $C_{GD5}$ cancels $M_5$'s current at

$$s_{z1} = +\frac{g_{m5}}{C_{GD5}} = \frac{0.554\ \mathrm{mS}}{6.0\ \mathrm{fF}} = +9.2\times10^{10}\ \mathrm{rad/s}\ \ (15\ \mathrm{GHz}).$$

**Zero from $C_{GD1}$:** $C_{GD1}$ also carries a feedforward current from the input to X, so the drive into X is $(g_{m1} - C_{GD1}s)v_1$ instead of $g_{m1}v_1$:

$$s_{z2} = +\frac{g_{m1}}{C_{GD1}} = \frac{1.16\ \mathrm{mS}}{20\ \mathrm{fF}} = +5.8\times10^{10}\ \mathrm{rad/s}\ \ (9.2\ \mathrm{GHz}).$$

Both are right-half-plane zeros, far above the two poles. The complete half-circuit transfer function is

$$\frac{V_{out1}}{v_{in}/2} = \frac{(g_{m1} - C_{GD1}s)(g_{m5} - C_{GD5}s)}{(g_{m3} + C_Xs)(g_{mD} + C_Ys) + C_{GD5}s(g_{m5} - C_{GD5}s)},$$

whose dc value $g_{m1}g_{m5}/(g_{m3}g_{mD}) = 1.41$ matches Step 2.

### Result

- Low-frequency differential gain: $Kg_{m1}R_D = 2g_{m1}/g_{mD}\approx1.41$, with $R_D = 1/g_{mD} = 611\ \Omega$.
- **Poles:** mirror node X, $\omega_X\approx g_{m3}/C_X\approx2.1\times10^9$ rad/s (≈ 0.33 GHz), dominant; output node, $\omega_{out}\approx g_{mD}/C_{out}\approx1.0\times10^{10}$ rad/s (≈ 1.6 GHz). The exact two-node solution gives $2.09\times10^9$ rad/s (0.333 GHz) and $1.04\times10^{10}$ rad/s (1.66 GHz).
- **Zeros:** right-half-plane zeros at $g_{m5}/C_{GD5}\approx9.2\times10^{10}$ rad/s (≈ 15 GHz) and $g_{m1}/C_{GD1}\approx5.8\times10^{10}$ rad/s (≈ 9 GHz).
- No input pole, because the amplifier is driven by an ideal voltage source.

**Common mistake.** Adding an input pole. With an ideal voltage source at the gates, $C_{GS1}$ is driven directly and creates no pole; $C_{GD1}$ acts as a grounded capacitance at X plus a feedforward path (the zero at $g_{m1}/C_{GD1}$).

**Common mistake.** Using $r_O$-type resistances: taking $R_D$ as $r_O$ of the NFET or $1/(\lambda I)$, or the mirror-node resistance as $r_O$. Both nodes are loaded by diode-connected devices, so their resistances are $1/g_{mD} = 611\ \Omega$ and $1/g_{m3} = 3.6\ \mathrm{k\Omega}$.

**Common mistake.** Computing $C_{GD}$ with a triode-like split (e.g. $\tfrac12WLC_{ox} + WC_{ov}$). In saturation $C_{GD}$ is only the overlap capacitance; the larger value would make $C_{GD5}$ and $C_{GD1}$ several times too big and put the zeros 3–4 times too low.

**Common mistake.** Placing the $C_{GD5}$ zero in the left half plane. The capacitor passes the signal from X to the output without inversion, while $M_5$ inverts it; they cancel at $s = +g_{m5}/C_{GD5}$.

# Detailed solution - G160

The second stage has a single-ended input and output, so it multiplies the differential and the common-mode outputs of the first stage by the same gain; the CMRR is therefore that of the first stage. Find the first stage's differential gain and its common-mode gain, which comes from the finite output resistance $r_{o5}$ of the tail source, and take their ratio. Body effect is neglected.

### Step 1 — CMRR is set by the first stage

With $A_{v2}$ the gain of the second stage,

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=\left|\frac{A_{dm1}A_{v2}}{A_{cm1}A_{v2}}\right|=\left|\frac{A_{dm1}}{A_{cm1}}\right|,\qquad A_{dm1}=g_{m1}\left(r_{o2}\parallel r_{o4}\right),
$$

where the mirror adds the two half-circuit current changes, so the first stage's transconductance is the full $g_{m1}$.

### Step 2 — Common-mode gain of the first stage

Apply $v_{ic}$ to both gates. The common source node follows the gates, so the tail current changes by about $v_{ic}/r_{o5}$ (for $g_{m1}r_{o5}\gg1$), and each side carries

$$
i\approx\frac{v_{ic}}{2r_{o5}} .
$$

This current flows into the diode-connected $M_3$, whose small-signal resistance is $1/g_{m3}\parallel r_{o3}\approx1/g_{m3}$, so the diode node moves by $v_{d3}\approx-i/g_{m3}$. With perfect matching, the output node at the same voltage as the diode node makes the two halves identical, so all currents balance there:

$$
v_{o1}=v_{d3}\approx-\frac{i}{g_{m3}}\ \Rightarrow\ A_{cm1}=\frac{v_{o1}}{v_{ic}}\approx-\frac{1}{2g_{m3}r_{o5}} .
$$

The mirror cancels the equal current changes of the two sides; only this small residue, set by the finite resistance $1/g_{m3}$ of the diode, reaches the output.

### Step 3 — CMRR in small-signal parameters

$$
\mathrm{CMRR}=\frac{g_{m1}\left(r_{o2}\parallel r_{o4}\right)}{1/\left(2g_{m3}r_{o5}\right)}=\left(2g_{m1}r_{o5}\right)g_{m3}\left(r_{o1}\parallel r_{o3}\right),
$$

using $r_{o1}=r_{o2}$ and $r_{o3}=r_{o4}$ for matched devices.

### Step 4 — In terms of overdrive and Early voltages

Substitute $g_m=2|I_D|/|V_{ov}|$ and $r_o=|V_A|/|I_D|$, with $I_{D5}=2I_{D1}$ and $|I_{D3}|=I_{D1}$:

$$
2g_{m1}r_{o5}=2\cdot\frac{2I_{D1}}{V_{ov1}}\cdot\frac{V_{A5}}{2I_{D1}}=\frac{2V_{A5}}{V_{ov1}},\qquad
g_{m3}\left(r_{o1}\parallel r_{o3}\right)=\frac{2}{|V_{ov3}|}\cdot\frac{V_{A1}|V_{A3}|}{V_{A1}+|V_{A3}|},
$$
$$
\mathrm{CMRR}\simeq\frac{2V_{A5}}{V_{ov1}}\cdot\frac{2}{|V_{ov3}|}\cdot\frac{V_{A1}|V_{A3}|}{V_{A1}+|V_{A3}|}.
$$

The CMRR is a product of two $g_mr_o$-type factors and therefore large. Small overdrives and long channels raise it, and a tail source with higher output resistance (for example a cascode) raises it further at the cost of common-mode input range. Including body effect in $M_1$, $M_2$ would replace $2g_{m1}r_{o5}$ by $2(g_{m1}+g_{mb1})r_{o5}$, slightly increasing the CMRR.

# Detailed solution - G087

This is the actively loaded MOS pair, now with source degeneration $R_S=2\ \mathrm{k\Omega}$ on both mirror devices. Write the gain as $v_o/v_i=G_mR_o$. Equal degeneration on $M_3$ and $M_4$ keeps the mirror gain at 1, so $G_m=g_{m1}$ as before. The output resistance of $M_4$ is multiplied by $1+g_{m4}R_S$, which raises $R_o$ and the gain.

### Step 1 — Bias and small-signal parameters

Every transistor carries $I_D=50\ \mu\mathrm A$. Using the square law with the effective lengths,

$$
g_{m1}=\sqrt{2k'_n\frac{W_n}{L_{\text{eff},n}}I_D}=\sqrt{2(126.6\ \mu\mathrm{A/V^2})\frac{50}{0.76}(50\ \mu\mathrm A)}=0.913\ \mathrm{mA/V},
$$

$$
g_{m4}=\sqrt{2k'_p\frac{W_p}{L_{\text{eff},p}}I_D}=\sqrt{2(57.6\ \mu\mathrm{A/V^2})\frac{100}{0.64}(50\ \mu\mathrm A)}=0.949\ \mathrm{mA/V},
$$

$$
r_{o2}=\frac1{\lambda_nI_D}=190\ \mathrm{k\Omega},\qquad r_{o4}=\frac1{\lambda_pI_D}=320\ \mathrm{k\Omega}.
$$

The resistors drop only 0.1 V each, so the bias of the PMOS devices barely changes.

### Step 2 — Output resistance of the degenerated load $M_4$

The gate of $M_4$ is held at the low-impedance diode node. Its source sees $R_S$ to the supply (ac ground). For a MOS transistor with source degeneration, a test current $i$ into the drain raises the source by $iR_S$, which reduces $v_{gs}$ by the same amount and adds $g_{m4}iR_S$ to the current through $r_{o4}$:

$$
R_{o4}=r_{o4}(1+g_{m4}R_S)+R_S=(320\ \mathrm{k\Omega})\left[1+(0.949\ \mathrm{mA/V})(2\ \mathrm{k\Omega})\right]+2\ \mathrm{k\Omega}=929\ \mathrm{k\Omega}.
$$

### Step 3 — Output resistance of the stage

As in the undegenerated pair, the test current entering $M_2$ travels through $M_1$ and $M_3$ and is mirrored back by $M_4$. The $M_2$ side therefore contributes $r_{o2}$, in parallel with the load:

$$
R_o\approx r_{o2}\,\|\,R_{o4}=190\ \mathrm{k\Omega}\,\|\,929\ \mathrm{k\Omega}=158\ \mathrm{k\Omega}.
$$

### Step 4 — Voltage gain

With the output shorted, the mirror (gain 1 because $M_3$ and $M_4$ are degenerated equally) returns $i_{d1}=g_{m1}v_i/2$, and $M_2$ draws $g_{m1}v_i/2$ less, so $G_m=g_{m1}$:

$$
\frac{v_o}{v_i}=g_{m1}R_o=(0.913\ \mathrm{mA/V})(158\ \mathrm{k\Omega})=+144 .
$$

A full nodal solution of the small-signal circuit gives $R_o=159\ \mathrm{k\Omega}$ and $v_o/v_i=143.7$. Without the source resistors the values are 119 kΩ and 109. Degeneration nearly triples the PMOS output resistance, but $r_{o2}=190\ \mathrm{k\Omega}$ now limits $R_o$, so the gain rises only by about 32 %.

# Detailed solution - G044

Use the effective channel length in the square-law expressions for $g_m$, $g_{mb}$ and $r_o$; take the gate capacitances from the channel charge in the active region plus the overlaps; and evaluate the source and drain junction capacitances from their area and field-oxide periphery at the reverse biases $V_{SB}=1$ V and $V_{DB}=V_{DS}+V_{SB}=3$ V.

### Step 1 — Effective length

$$
L_{\text{eff}}=L_{\text{drwn}}-2L_d=1\ \mu\mathrm m-2(0.09\ \mu\mathrm m)=0.82\ \mu\mathrm m,\qquad \frac W{L_{\text{eff}}}=\frac{10}{0.82}=12.2 .
$$

### Step 2 — $g_m$, $g_{mb}$ and $r_o$

From $I_D=\tfrac12k'(W/L)V_{ov}^2$, $g_m=k'(W/L)V_{ov}=\sqrt{2k'(W/L)I_D}$:

$$
g_m=\sqrt{2(194\ \mu\mathrm{A/V^2})(12.2)(20\ \mu\mathrm A)}=308\ \mu\mathrm{A/V},\qquad V_{ov}=\frac{2I_D}{g_m}=0.13\ \mathrm V
$$

(315 µA/V if the factor $1+\lambda V_{DS}$ is kept). The body transconductance is $g_{mb}=\chi g_m$ with $\chi=\partial V_t/\partial V_{SB}$:

$$
\chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.094\ \mathrm{V^{1/2}}}{2\sqrt{1.66\ \mathrm V}}=0.036,\qquad g_{mb}=(0.036)(308\ \mu\mathrm{A/V})=11.2\ \mu\mathrm{A/V}.
$$

For the output resistance,

$$
\lambda=\frac{dX_d/dV_{DS}}{L_{\text{eff}}}=\frac{0.02\ \mu\mathrm m/\mathrm V}{0.82\ \mu\mathrm m}=0.0244\ \mathrm{V^{-1}},\qquad r_o=\frac1{\lambda I_D}=\frac1{(0.0244\ \mathrm{V^{-1}})(20\ \mu\mathrm A)}=2.05\ \mathrm{M\Omega}
$$

(2.15 MΩ with $(1+\lambda V_{DS})/(\lambda I_D)$).

### Step 3 — Gate capacitances

In the active region the channel charge gives $\tfrac23WL_{\text{eff}}C_{ox}$ to $C_{gs}$ and nothing to $C_{gd}$; each side adds the overlap $WC_{ol}=(10\ \mu\mathrm m)(0.35\ \mathrm{fF/\mu m})=3.5$ fF:

$$
C_{gs}=\frac23(10\ \mu\mathrm m)(0.82\ \mu\mathrm m)(4.32\ \mathrm{fF/\mu m^2})+3.5\ \mathrm{fF}=23.6+3.5=27.1\ \mathrm{fF},\qquad C_{gd}=3.5\ \mathrm{fF}.
$$

### Step 4 — Junction capacitances

Each diffusion has a bottom area of $1\times10=10\ \mu$m², giving $C_{j0}A=2.0$ fF, and a field-oxide periphery of $10+1+1=12\ \mu$m (the edge under the gate is not counted), giving $C_{jsw0}P=14.4$ fF. With the grading coefficients 0.5 and 0.4,

$$
C=\frac{C_{j0}A}{(1+V_R/\psi_0)^{0.5}}+\frac{C_{jsw0}P}{(1+V_R/\psi_0)^{0.4}} .
$$

For the source at $V_{SB}=1$ V, $1+1/0.7=2.43$:

$$
C_{sb}=\frac{2.0\ \mathrm{fF}}{2.43^{0.5}}+\frac{14.4\ \mathrm{fF}}{2.43^{0.4}}=1.28+10.1=11.4\ \mathrm{fF}.
$$

For the drain at $V_{DB}=3$ V, $1+3/0.7=5.29$: $C_{db}=0.87+7.4=8.3$ fF. Counting the full 22-µm perimeter instead gives 19.8 fF and 14.4 fF. The depletion capacitance between the channel and the substrate (about 1 fF) is neglected.

### Step 5 — Summary

| Parameter | Value |
|---|---|
| $g_m$ | 308 µA/V |
| $g_{mb}$ | 11.2 µA/V |
| $r_o$ | 2.05 MΩ |
| $C_{gs}$ | 27.1 fF |
| $C_{gd}$ | 3.5 fF |
| $C_{sb}$ | 11.4 fF |
| $C_{db}$ | 8.3 fF |

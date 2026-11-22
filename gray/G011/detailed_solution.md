# Detailed solution - G011

Compute each element of the hybrid-π model from the bias point: the intrinsic elements $g_m$, $r_\pi$, $r_o$ and $r_\mu$ from $I_C$; the base-charging capacitance from $\tau_F$; and the junction capacitances from their bias voltages. Then add the ohmic resistances $r_b$, $r_c$ and $r_{ex}$ between the internal nodes and the terminals.

### Step 1 — Transconductance and input resistance

In the forward-active region $I_C=I_Se^{V_{BE}/V_T}$, so

$$
g_m=\frac{dI_C}{dV_{BE}}=\frac{I_C}{V_T}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{100}{38.5\ \mathrm{mA/V}}=2.6\ \mathrm{k\Omega}.
$$

### Step 2 — Output resistance and collector–base resistance

The Early effect gives $r_o=V_A/I_C$. The given parameter is $\eta=V_T/V_A$, so $V_A=V_T/\eta=26$ V and

$$
r_o=\frac1{\eta g_m}=\frac{V_A}{I_C}=\frac{26\ \mathrm V}{1\ \mathrm{mA}}=26\ \mathrm{k\Omega},\qquad
r_\mu=5\beta_0r_o=5(100)(26\ \mathrm{k\Omega})=13\ \mathrm{M\Omega}.
$$

$r_\mu$ models the base-width modulation of the base recombination current; it is so large that it is usually negligible.

### Step 3 — Emitter–base capacitance $C_\pi$

$C_\pi$ is the sum of the base-charging (diffusion) capacitance and the forward-biased emitter–base depletion capacitance. The stored base charge is $Q_F=\tau_FI_C$, so

$$
C_b=\frac{dQ_F}{dV_{BE}}=\tau_Fg_m=(15\ \mathrm{ps})(38.5\ \mathrm{mA/V})=0.577\ \mathrm{pF},
$$
$$
C_\pi=C_b+C_{je}\approx0.577\ \mathrm{pF}+2(20\ \mathrm{fF})=0.617\ \mathrm{pF}.
$$

### Step 4 — Reverse-biased junction capacitances

The collector–base and collector–substrate junctions are reverse biased by $V_{CB}=1$ V and $V_{CS}=2$ V, so with $C=C_0/(1+V_R/\psi_0)^{1/2}$:

$$
\begin{aligned}
C_\mu&=\frac{10\ \mathrm{fF}}{\sqrt{1+1\ \mathrm V/0.55\ \mathrm V}}=\frac{10\ \mathrm{fF}}{1.679}=5.96\ \mathrm{fF},\\
C_{cs}&=\frac{20\ \mathrm{fF}}{\sqrt{1+2\ \mathrm V/0.55\ \mathrm V}}=\frac{20\ \mathrm{fF}}{2.153}=9.29\ \mathrm{fF}.
\end{aligned}
$$

### Step 5 — Assemble the equivalent circuit

The intrinsic transistor sits between internal nodes B′, E′ and C′; the parasitic resistances connect these to the terminals B, E and C:

- $r_b=200\ \Omega$ from the base terminal B to the internal base B′;
- $r_\pi\parallel C_\pi$ from B′ to the internal emitter E′; the voltage across them is $v_1$;
- $r_\mu\parallel C_\mu$ from B′ to the internal collector C′ (the collector–base junction);
- the controlled source $g_mv_1$ and $r_o$ from C′ to E′;
- $r_{ex}=4\ \Omega$ from E′ to the emitter terminal E;
- $r_c=100\ \Omega$ from C′ to the collector terminal C;
- $C_{cs}$ from C′ to the substrate, which is an ac ground.

<!-- diagram: diagram-01.cir -->

| Element | Value |
|---|---|
| $g_m$ | 38.5 mA/V |
| $r_\pi$ | 2.6 kΩ |
| $r_o$ | 26 kΩ |
| $r_\mu$ | 13 MΩ |
| $C_\pi$ | 0.617 pF ($C_b=0.577$ pF, $C_{je}=40$ fF) |
| $C_\mu$ | 6.0 fF |
| $C_{cs}$ | 9.3 fF |
| $r_b$, $r_c$, $r_{ex}$ | 200 Ω, 100 Ω, 4 Ω |

$C_{cs}$ is drawn at C′ because the collector–substrate junction lies under the collector region; connecting it at the terminal C instead changes little here, since $r_cC_{cs}\approx0.93$ ps.

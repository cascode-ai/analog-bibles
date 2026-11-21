# Detailed solution - G013

The measurements give the model parameters only indirectly. Extract the forward transit time $\tau_F$ and the emitter–base depletion capacitance $C_{je}$ from the two $f_T$ points, the Early voltage from $r_o$, and the zero-bias junction capacitances from the 10-V values. Then evaluate every element of the hybrid-π model at the three currents and the new junction voltages.

### Step 1 — $\tau_F$ and $C_{je}$ from the two $f_T$ measurements

With $C_\pi=\tau_Fg_m+C_{je}$ and $f_T=g_m/[2\pi(C_\pi+C_\mu)]$, the transit time $\tau_T=1/(2\pi f_T)$ is linear in $1/g_m$:

$$
\tau_T=\frac1{2\pi f_T}=\tau_F+\frac{C_{je}+C_\mu}{g_m}.
$$

Both measurements are at $V_{CB}=10$ V, so $C_{je}+C_\mu$ is the same in both. With $1/g_m=V_T/I_C=26\ \Omega$ at 1 mA and $2.6\ \Omega$ at 10 mA:

$$
\begin{aligned}
\tau_T(1\ \mathrm{mA})&=\frac1{2\pi(600\ \mathrm{MHz})}=265.3\ \mathrm{ps},\qquad
\tau_T(10\ \mathrm{mA})=\frac1{2\pi(1\ \mathrm{GHz})}=159.2\ \mathrm{ps},\\
C_{je}+C_\mu&=\frac{(265.3-159.2)\ \mathrm{ps}}{(26-2.6)\ \Omega}=4.53\ \mathrm{pF},\qquad
\tau_F=159.2\ \mathrm{ps}-(2.6\ \Omega)(4.53\ \mathrm{pF})=147.4\ \mathrm{ps}.
\end{aligned}
$$

Subtracting $C_\mu(10\ \mathrm V)=0.15$ pF gives $C_{je}=4.38$ pF, taken as constant in forward bias.

### Step 2 — Early voltage and junction capacitances at the new bias

From $r_o=V_A/I_C$, $V_A=(50\ \mathrm{k\Omega})(1\ \mathrm{mA})=50$ V. The reverse-biased capacitances follow $C=C_0/(1+V_R/\psi_0)^{1/2}$; first recover $C_0$ from the 10-V data, using $\sqrt{1+10/0.55}=4.380$:

$$
\begin{aligned}
C_{\mu0}&=(0.15\ \mathrm{pF})(4.380)=0.657\ \mathrm{pF},&\quad C_\mu(2\ \mathrm V)&=\frac{0.657\ \mathrm{pF}}{\sqrt{1+2/0.55}}=\frac{0.657\ \mathrm{pF}}{2.153}=0.305\ \mathrm{pF},\\
C_{cs0}&=(1\ \mathrm{pF})(4.380)=4.38\ \mathrm{pF},&\quad C_{cs}(15\ \mathrm V)&=\frac{4.38\ \mathrm{pF}}{\sqrt{1+15/0.55}}=\frac{4.38\ \mathrm{pF}}{5.317}=0.824\ \mathrm{pF}.
\end{aligned}
$$

These two values, and $r_b=r_c=100\ \Omega$, are the same at all three currents.

### Step 3 — Current-dependent elements

$g_m=I_C/V_T$, $r_\pi=\beta_0/g_m$, $r_o=V_A/I_C$, $r_\mu=5\beta_0r_o$ and $C_\pi=\tau_Fg_m+C_{je}$. At $I_C=1$ mA:

$$
g_m=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mA/V},\quad r_\pi=2.6\ \mathrm{k\Omega},\quad r_o=50\ \mathrm{k\Omega},\quad r_\mu=25\ \mathrm{M\Omega},
$$
$$
C_\pi=(147.4\ \mathrm{ps})(38.5\ \mathrm{mA/V})+4.38\ \mathrm{pF}=5.67\ \mathrm{pF}+4.38\ \mathrm{pF}=10.05\ \mathrm{pF}.
$$

| $I_C$ | $g_m$ | $r_\pi$ | $r_o$ | $r_\mu$ | $C_\pi=\tau_Fg_m+C_{je}$ |
|---|---|---|---|---|---|
| 0.1 mA | 3.85 mA/V | 26 kΩ | 500 kΩ | 250 MΩ | 0.57 + 4.38 = 4.95 pF |
| 1 mA | 38.5 mA/V | 2.6 kΩ | 50 kΩ | 25 MΩ | 5.67 + 4.38 = 10.05 pF |
| 5 mA | 192 mA/V | 520 Ω | 10 kΩ | 5 MΩ | 28.3 + 4.38 = 32.7 pF |

At low current the depletion capacitance dominates $C_\pi$; at 5 mA the base-charging term does.

### Step 4 — The equivalent circuit

The same topology applies at all three currents; only the values of Step 3 change. No emitter resistance is given, so $r_{ex}$ is taken as zero:

- $r_b=100\ \Omega$ from B to the internal base B′;
- $r_\pi\parallel C_\pi$ from B′ to the emitter E, with voltage $v_1$;
- $r_\mu\parallel C_\mu$ ($C_\mu=0.305$ pF) from B′ to the internal collector C′;
- $g_mv_1$ and $r_o$ from C′ to E;
- $r_c=100\ \Omega$ from C′ to C;
- $C_{cs}=0.824$ pF from C′ to the substrate (ac ground).

<!-- diagram: diagram-01.cir -->

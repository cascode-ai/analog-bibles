# Detailed solution - G018

The 50-MHz gain measurement fixes $f_T$ at 1 mA, and with the known $\tau_F$ this yields the emitter–base depletion capacitance $C_{je}$. Since $C_{je}$, $C_\mu$ and $C_{cs}$ do not change with current at fixed junction voltages, only the current-dependent elements need to be recomputed at 2 mA.

### Step 1 — $f_T$ at 1 mA from the gain measurement

The short-circuit current gain has a single pole, $|\beta(jf)|=\beta_0/\sqrt{1+(f/f_\beta)^2}$ with $f_T=\beta_0f_\beta$. A gain of 9 at 50 MHz is far below $\beta_0=100$, so the point lies on the −20 dB/decade slope where $|\beta|\approx f_T/f$:

$$
f_T\approx|\beta|f=9(50\ \mathrm{MHz})=450\ \mathrm{MHz}.
$$

Solving the exact single-pole form, $(f/f_\beta)^2=(100/9)^2-1=122.5$, gives $f_\beta=4.52$ MHz and $f_T=452$ MHz, essentially the same.

### Step 2 — Extract $C_{je}$

From the hybrid-π model, $1/(2\pi f_T)=\tau_F+(C_{je}+C_\mu)/g_m$, with $1/g_m=V_T/I_C=26\ \Omega$ at 1 mA:

$$
\tau_T=\frac1{2\pi(450\ \mathrm{MHz})}=353.7\ \mathrm{ps},\qquad
C_{je}+C_\mu=\frac{353.7\ \mathrm{ps}-250\ \mathrm{ps}}{26\ \Omega}=3.99\ \mathrm{pF},\qquad
C_{je}=3.99\ \mathrm{pF}-0.6\ \mathrm{pF}=3.39\ \mathrm{pF}.
$$

(With $f_T=452$ MHz, $C_{je}=3.33$ pF.)

### Step 3 — Elements at $I_C=2$ mA

$$
\begin{aligned}
g_m&=\frac{I_C}{V_T}=\frac{2\ \mathrm{mA}}{26\ \mathrm{mV}}=76.9\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{100}{76.9\ \mathrm{mA/V}}=1.3\ \mathrm{k\Omega},\qquad
r_o=\frac{V_A}{I_C}=\frac{40\ \mathrm V}{2\ \mathrm{mA}}=20\ \mathrm{k\Omega},\\
C_b&=\tau_Fg_m=(0.25\ \mathrm{ns})(76.9\ \mathrm{mA/V})=19.2\ \mathrm{pF},\qquad
C_\pi=C_b+C_{je}=19.2\ \mathrm{pF}+3.39\ \mathrm{pF}=22.6\ \mathrm{pF}.
\end{aligned}
$$

$C_\mu=0.6$ pF, $C_{cs}=2$ pF, $r_b=150\ \Omega$ and $r_c=150\ \Omega$ are unchanged. No values are given for $r_\mu$ or $r_{ex}$, so $r_\mu$ is treated as an open circuit and $r_{ex}$ as zero. As a check, $f_T=g_m/[2\pi(C_\pi+C_\mu)]=527$ MHz at 2 mA, higher than at 1 mA because the depletion term matters less.

### Step 4 — The equivalent circuit

- $r_b=150\ \Omega$ from the base terminal B to the internal base B′;
- $r_\pi=1.3$ kΩ in parallel with $C_\pi=22.6$ pF from B′ to the emitter E; the voltage across them is $v_1$;
- $C_\mu=0.6$ pF from B′ to the internal collector C′;
- the source $g_mv_1$ ($g_m=76.9$ mA/V) and $r_o=20$ kΩ from C′ to E;
- $r_c=150\ \Omega$ from C′ to the collector terminal C;
- $C_{cs}=2$ pF from C′ to the substrate (ac ground).

<!-- diagram: diagram-01.cir -->

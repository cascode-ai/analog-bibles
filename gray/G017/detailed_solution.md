# Detailed solution - G017

Treat the composite device as two identical transistors in parallel, each carrying half the total current. Elements set by the bias current are computed per device at $I_C/2$ and then combined in parallel; elements set by geometry (junction area, ohmic paths) simply add as parallel capacitors or parallel resistors.

### Step 1 — Current-dependent elements are unchanged

Each half-device has the same $\beta_0$, $V_A$ and $\tau_F$ as the original and carries $I_C/2$, so

$$
g_{m,1}=\frac{I_C/2}{V_T}=\frac{g_m}2,\qquad r_{\pi,1}=\frac{\beta_0}{g_{m,1}}=2r_\pi,\qquad r_{o,1}=\frac{V_A}{I_C/2}=2r_o,\qquad r_{\mu,1}=5\beta_0r_{o,1}=2r_\mu .
$$

Placing the two in parallel (their terminals are tied together) gives transconductances that add and resistances that halve:

$$
g_m'=2g_{m,1}=g_m,\qquad r_\pi'=\frac{2r_\pi}2=r_\pi,\qquad r_o'=r_o,\qquad r_\mu'=r_\mu .
$$

The base-charging capacitance is $C_{b,1}=\tau_Fg_{m,1}=C_b/2$ per device, so $C_b'=C_b$: the total stored base charge $\tau_FI_C$ depends only on the total current. These quantities depend only on $I_C$, not on area.

### Step 2 — Area-dependent capacitances double

Depletion capacitances are proportional to junction area. Each half-device has the same junction capacitance as the original at the same junction voltages, and capacitors in parallel add:

$$
C_{je}'=2C_{je},\qquad C_\mu'=2C_\mu,\qquad C_{cs}'=2C_{cs},\qquad C_\pi'=C_b+2C_{je}.
$$

### Step 3 — Ohmic parasitic resistances halve

The base, collector and emitter series resistances of the two devices are in parallel:

$$
r_b'=\frac{r_b}2,\qquad r_c'=\frac{r_c}2,\qquad r_{ex}'=\frac{r_{ex}}2 .
$$

### Step 4 — Summary and consequences

| Unchanged | Doubled | Halved |
|---|---|---|
| $g_m$, $r_\pi$, $r_o$, $r_\mu$, $C_b$ | $C_{je}$, $C_\mu$, $C_{cs}$ | $r_b$, $r_c$, $r_{ex}$ |

Because $1/(2\pi f_T)=\tau_F+(C_{je}+C_\mu)/g_m$, the doubled depletion capacitances lower $f_T$ at low currents, where that term dominates, and leave it nearly unchanged at high currents. At dc, $I_S$ doubles, so $V_{BE}$ falls by $V_T\ln2\approx18$ mV. To second order, the halved current density can change $\beta$ and $\tau_F$ slightly through reduced high-level injection.

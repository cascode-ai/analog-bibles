# Detailed solution - G189

Use the symmetry of the pair. For differential signals the common-source node is an ac ground, so the tail impedance drops out; for common-mode signals each half carries half of the tail current, so each half-circuit sees twice the tail impedance in its source. Each half-circuit is a common-source stage with $R_S$ at the gate and $R_L$ at the drain.

### Step 1 — Device parameters

Each transistor carries $I_{SS}/2=0.5$ mA. With $W/L_{\text{eff}}=62.5$,

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}\frac{I_{SS}}2}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

### Step 2 — Differential-mode gain

The DM half-circuit is a grounded-source stage driven by $v_{id}/2$, so $v_{od}=v_{o1}-v_{o2}=-g_mR_Lv_{id}$:

$$
A_{dm}(0)=-g_mR_L=-(1.94\ \mathrm{mA/V})(3\ \mathrm{k\Omega})=-5.81\quad(15.3\ \mathrm{dB}).
$$

Its pole, from the Miller approximation at the gate, is

$$
\omega_{p,dm}=\frac1{R_S[C_{gs}+C_{gd}(1+g_mR_L)]}=\frac1{(5\ \mathrm{k\Omega})(74.7\ \mathrm{fF}+14\ \mathrm{fF}\times6.81)}=1.18\times10^9\ \mathrm{rad/s}\;(187\ \mathrm{MHz}),
$$

so $|A_{dm}|$ stays at 15.3 dB over 10 kHz–20 MHz (it is down only 0.05 dB at 20 MHz).

### Step 3 — Common-mode gain

The tail impedance is $Z_T=R_T\parallel(1/sC_T)$. In the CM half-circuit the source sees $2Z_T=2R_T\parallel\bigl(1/(sC_T/2)\bigr)$. A degenerated common-source stage has gain $-g_mR_L/(1+g_m\cdot2Z_T)$, so

$$
A_{cm}(s)=-\frac{g_mR_L}{1+g_m\dfrac{2R_T}{1+sR_TC_T}}\approx-\frac{R_L}{2Z_T}=-\frac{R_L}{2R_T}(1+sR_TC_T),
$$

where the approximation uses $2g_mZ_T\gg1$ ($2g_mR_T=1162$). The gate capacitances act only far above 100 MHz and are neglected here.

- Low frequency: $|A_{cm}|=R_L/(2R_T)=3\ \mathrm{k\Omega}/600\ \mathrm{k\Omega}=0.0050$ (−46 dB).
- Zero: $f_z=1/(2\pi R_TC_T)=1/[2\pi(300\ \mathrm{k\Omega})(2\ \mathrm{pF})]=265$ kHz. Above it $C_T$ shunts $R_T$ and $|A_{cm}|$ rises at +20 dB/decade.

### Step 4 — Common-mode rejection ratio

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=\left|1+\frac{2g_mR_T}{1+sR_TC_T}\right|\approx\frac{2g_mR_T}{|1+sR_TC_T|},
$$

equal to $2(1.94\ \mathrm{mA/V})(300\ \mathrm{k\Omega})=1162$ (61.3 dB) at low frequency and falling at −20 dB/decade above 265 kHz.

| $f$ | 10 kHz | 265 kHz | 1 MHz | 10 MHz | 20 MHz |
|---|---|---|---|---|---|
| $\lvert A_{dm}\rvert$ (dB) | 15.3 | 15.3 | 15.3 | 15.3 | 15.2 |
| $\lvert A_{cm}\rvert$ (dB) | −46.0 | −43.1 | −34.3 | −14.6 | −8.6 |
| CMRR (dB) | 61.3 | 58.4 | 49.6 | 29.9 | 23.8 |

These values come from the full half-circuit models (including $C_{gs}$ and $C_{gd}$); the approximate expressions above reproduce them to within about 0.5 dB.

![Magnitudes in dB versus log frequency: flat 15.3-dB differential gain, common-mode gain rising from −46 dB above the 265-kHz zero, and CMRR falling from 61.3 dB](/q/G189/solution-curves.svg)

### Step 5 — Behaviour over the band

Over 10 kHz–20 MHz the differential gain is flat because its only pole is near 190 MHz. The common-mode gain is set by the tail impedance: it is flat at −46 dB while $R_T$ dominates and rises at +20 dB/decade once $C_T$ takes over above 265 kHz, reaching about −8.6 dB at 20 MHz. The CMRR, their ratio, therefore falls from 61.3 dB at −20 dB/decade above 265 kHz to about 24 dB at 20 MHz. The tail capacitance, not $R_T$, limits the high-frequency CMRR.

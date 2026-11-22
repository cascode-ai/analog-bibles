# Detailed solution - G188

Set $v_i=0$ and drive the drain with a test voltage $v_x$. With $v_i=0$ the gate sees $R_S$ to ground in parallel with $C_{gs}$ (the source is grounded), and $C_{gd}$ connects the gate to the drain, where the $g_m$ source also acts. Since $\lambda=0$ and $C_{db}=0$, these are the only paths: the MOS version of the bipolar analysis, with $R_S$ in place of $(R_S+r_b)\parallel r_\pi$.

### Step 1 — Device parameters

With $W/L_{\text{eff}}=100/1.6=62.5$ and the square law,

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},\qquad g_mR_S=19.4,
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

### Step 2 — Output impedance

Let $Z_1=R_S\parallel(1/sC_{gs})$. The test current flows through $C_{gd}$ into $Z_1$, so the gate voltage is $v_{gs}=v_x\,sC_{gd}Z_1/(1+sC_{gd}Z_1)$, and the drain current is $v_{gs}/Z_1+g_mv_{gs}$:

$$
Y_o=\frac{sC_{gd}(1+g_mZ_1)}{1+sC_{gd}Z_1}.
$$

Substituting $Z_1=R_S/(1+sR_SC_{gs})$ and inverting,

$$
Z_o(s)=\frac{1+sR_S(C_{gs}+C_{gd})}{sC_{gd}\,(1+g_mR_S+sR_SC_{gs})} .
$$

### Step 3 — Equivalent circuit and break frequencies

Splitting $Y_o$ as for the bipolar stage gives a capacitor $C_\infty$ in parallel with a series $R_x$–$C_x$ branch:

$$
C_\infty=\frac{C_{gd}C_{gs}}{C_{gs}+C_{gd}}=11.8\ \mathrm{fF},\qquad
C_x=C_{gd}\Bigl[1+g_mR_S-\frac{C_{gs}}{C_{gs}+C_{gd}}\Bigr]=273\ \mathrm{fF},
$$
$$
R_x=\frac{R_S(C_{gs}+C_{gd})}{C_x}\approx\frac{C_{gs}+C_{gd}}{g_mC_{gd}}=3.2\ \mathrm{k\Omega}.
$$

<!-- diagram: diagram-01.cir -->

The drain node connects to ground through $C_\infty$, and in parallel through $R_x$ in series with $C_x$. At low frequency the impedance is the Miller-type capacitance

$$
C_\infty+C_x=C_{gd}(1+g_mR_S)=(14\ \mathrm{fF})(20.4)=285\ \mathrm{fF}.
$$

The zero is at $1/[R_S(C_{gs}+C_{gd})]=1.13\times10^9$ rad/s (180 MHz) and the pole at $(1+g_mR_S)/(R_SC_{gs})=2.7\times10^{10}$ rad/s (4.3 GHz), both above 100 MHz.

### Step 4 — Magnitude from 1 kHz to 100 MHz

Below the zero, $|Z_o|\approx1/(2\pi f\cdot285\ \mathrm{fF})$; at 1 kHz this is $1/[2\pi(10^3\ \mathrm{Hz})(285\ \mathrm{fF})]=558$ MΩ.

| $f$ | 1 kHz | 100 kHz | 1 MHz | 10 MHz | 100 MHz |
|---|---|---|---|---|---|
| $\lvert Z_o\rvert$ | 558 MΩ | 5.58 MΩ | 558 kΩ | 55.9 kΩ | 6.39 kΩ |

![Output impedance magnitude of the common-source stage: a −20 dB/decade line of a 285-fF capacitance from 558 MΩ at 1 kHz to 6.4 kΩ at 100 MHz](/q/G188/solution-curves.svg)

Over the whole range $|Z_o|$ is essentially that of the 285-fF capacitor, a −20 dB/decade line. At 100 MHz the exact value, 6.4 kΩ, lies slightly above the 5.6-kΩ asymptote because the curve begins to bend toward the 3.2-kΩ plateau that sets in above the 180-MHz zero. Compared with the bipolar stage, the MOS stage has no $r_\pi$ and a much smaller $C_{gd}$, so the resistive plateau lies above the plotted range.

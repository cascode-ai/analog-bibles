# Detailed solution - G333

The return ratio for the transistor's $g_m$ generator is found by replacing $g_mv_{gs}$ with an independent current $g_mv_t$ and computing the $v_{gs}$ that returns through the 20-kΩ feedback resistor. The input current source is open in the small-signal circuit, so the gate is driven only through $R_F$ and $C_{gd}$. First compute the small-signal parameters, then write $\mathscr{R}(s)$ as the drain impedance times the gate divider, and evaluate it at the four frequencies.

### Step 1 — Small-signal parameters

The gate and drain are at the same dc voltage, since no dc current flows in $R_F$, so the transistor is saturated at $I_D=0.5$ mA. With $W/L_{\text{eff}}=50/0.6=83.3$:
$$
V_{ov}=\sqrt{\frac{2I_D}{k'_n(W/L_{\text{eff}})}}=\sqrt{\frac{2(0.5\ \mathrm{mA})}{(194\ \mu\mathrm{A/V^2})(83.3)}}=0.249\ \mathrm V,\qquad
g_m=\frac{2I_D}{V_{ov}}=4.02\ \mathrm{mA/V},
$$
$$
\lambda=\frac{0.02\ \mu\mathrm{m/V}}{0.6\ \mu\mathrm m}=0.0333\ \mathrm{V^{-1}},\qquad r_o=\frac1{\lambda I_D}=60\ \mathrm{k\Omega},\qquad g_mr_o=241 .
$$
The capacitances are
$$
C_{gs}=\tfrac23(50)(0.6)(4.32\ \mathrm{fF})+(0.35\ \mathrm{fF})(50)=86.4+17.5=104\ \mathrm{fF},\qquad C_{gd}=17.5\ \mathrm{fF},\qquad C_L=2\ \mathrm{pF}.
$$

### Step 2 — Return ratio expression

Inject $g_mv_t$ out of the drain. The drain node sees $r_o$, $C_L$, and the series path through $Z_F=R_F\|(1/sC_{gd})$ and $C_{gs}$ to ground, so
$$
v_d=-g_mv_t\,Z_d,\qquad Z_d=r_o\,\Big\|\,\frac1{sC_L}\,\Big\|\,\left(Z_F+\frac1{sC_{gs}}\right).
$$
The gate is the midpoint of the divider formed by $Z_F$ and $C_{gs}$:
$$
\frac{v_g}{v_d}=\frac{1/(sC_{gs})}{Z_F+1/(sC_{gs})}=\frac{1+sR_FC_{gd}}{1+sR_F(C_{gs}+C_{gd})} .
$$
The returned variable is $v_{gs}=v_g$, and $\mathscr{R}=-v_g/v_t$:
$$
\mathscr{R}(s)=g_m\,Z_d(s)\,\frac{1+sR_FC_{gd}}{1+sR_F(C_{gs}+C_{gd})} .
$$

### Step 3 — Low-frequency value, poles and zero

At dc, $Z_d=r_o$ (the gate branch is open through $C_{gs}$) and the divider equals 1, so $\mathscr{R}_0=g_mr_o=241$ (47.6 dB). The resistor does not reduce the low-frequency loop gain, because no dc current flows into the gate. Collecting $\mathscr{R}(s)$ into a ratio of polynomials gives:

- a dominant pole at 1.26 MHz, set by $r_o$ and the 2-pF load: $1/(2\pi r_oC_L)=1.33$ MHz, lowered slightly by the gate branch;
- a second pole at 68.5 MHz, mainly $R_F$ with $C_{gs}$, modified by $C_L$;
- a left-half-plane zero at $1/(2\pi R_FC_{gd})=455$ MHz, from feedforward through $C_{gd}$.

### Step 4 — Values at the four frequencies

Evaluating the expression of Step 2 at $s=j2\pi f$:

| $f$ | $\lvert\mathscr{R}\rvert$ | $\angle\mathscr{R}$ |
|---|---|---|
| 1 kHz | 241 | $-0.05^\circ$ |
| 100 kHz | 240.5 | $-4.6^\circ$ |
| 10 MHz | 29.8 | $-89.9^\circ$ |
| 1 GHz | 0.050 | $-110.5^\circ$ |

At 10 MHz the response is between the two poles, so the phase is close to $-90^\circ$ and $|\mathscr{R}|\approx241\times1.26/10$. At 1 GHz both poles contribute nearly $-180^\circ$, but the 455-MHz zero gives back about $+66^\circ$, which leaves $-110^\circ$.

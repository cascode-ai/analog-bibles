# Detailed solution - G334

The return ratio for the $g_m$ generator follows from replacing $g_mv_{gs}$ with an independent current $g_mv_t$ and computing the returned gate voltage. Its form is the drain impedance times the gate divider, which gives two poles and one zero. Build the Bode plot from these, find where $|\mathscr{R}|=1$, and read the phase there. The phase never reaches $-180^\circ$, so the gain margin is infinite.

### Step 1 — Small-signal parameters

The gate and drain share the same dc voltage, so the transistor is saturated at $I_D=0.5$ mA. With $W/L_{\text{eff}}=83.3$:
$$
V_{ov}=\sqrt{\frac{2I_D}{k'_n(W/L_{\text{eff}})}}=0.249\ \mathrm V,\qquad g_m=\frac{2I_D}{V_{ov}}=4.02\ \mathrm{mA/V},\qquad
r_o=\frac{1}{\lambda I_D}=\frac{1}{(0.0333\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})}=60\ \mathrm{k\Omega},
$$
$$
C_{gs}=\tfrac23(50)(0.6)(4.32\ \mathrm{fF})+(0.35\ \mathrm{fF})(50)=104\ \mathrm{fF},\qquad C_{gd}=17.5\ \mathrm{fF}.
$$

### Step 2 — Return ratio

The input current source is open. With $g_mv_t$ drawn out of the drain, the drain voltage is $-g_mv_tZ_d$, where the drain sees $r_o$, $C_L=2$ pF, and the series path $Z_F=R_F\|(1/sC_{gd})$ plus $C_{gs}$. The gate is the midpoint of the $Z_F$–$C_{gs}$ divider, and $\mathscr{R}=-v_{gs}/v_t$:
$$
\mathscr{R}(s)=g_m\,Z_d(s)\,\frac{1+sR_FC_{gd}}{1+sR_F(C_{gs}+C_{gd})},\qquad
Z_d=r_o\,\Big\|\,\frac1{sC_L}\,\Big\|\,\left(Z_F+\frac1{sC_{gs}}\right).
$$

### Step 3 — Bode-plot break points

- dc value: $\mathscr{R}_0=g_mr_o=241$, or 47.6 dB.
- First pole at 1.26 MHz, set by $r_o$ and $C_L$ ($1/(2\pi r_oC_L)=1.33$ MHz, lowered slightly by the gate branch).
- Second pole at 68.5 MHz, mainly $R_F$ with $C_{gs}$, modified by $C_L$.
- Left-half-plane zero at $1/(2\pi R_FC_{gd})=455$ MHz.

The magnitude is flat to about 1 MHz, falls at $-20$ dB/dec up to about 70 MHz, at $-40$ dB/dec beyond that, and returns to $-20$ dB/dec above the zero. The phase goes from $0^\circ$ toward $-90^\circ$ around 1–10 MHz and dips to a minimum of $-137^\circ$ near 180 MHz. It then climbs back toward $-90^\circ$, as the zero cancels the second pole's lag.

![Bode magnitude of the return ratio: 47.6 dB to about 1 MHz, −20 dB/dec to 68.5 MHz, −40 dB/dec, crossing 0 dB at 140 MHz, back to −20 dB/dec above the 455-MHz zero](/q/G334/solution-magnitude.svg)

![Bode phase of the return ratio: from 0° through −90° near 10 MHz to a minimum of about −137° near 180 MHz and back toward −90°; phase margin 44° at 140 MHz](/q/G334/solution-phase.svg)

### Step 4 — Unity-gain frequency and margins

Solving $|\mathscr{R}(j2\pi f_c)|=1$ numerically gives
$$
f_c=140\ \mathrm{MHz},\qquad \angle\mathscr{R}(j2\pi f_c)=-136.3^\circ,\qquad \mathrm{PM}=180^\circ-136.3^\circ=44^\circ .
$$
As a check from the asymptotes: between the poles, $|\mathscr{R}|\approx241\times1.26\ \mathrm{MHz}/f$, which is 4.4 at 68.5 MHz. Falling at $-40$ dB/dec, it reaches 1 near $68.5\ \mathrm{MHz}\times\sqrt{4.4}=144$ MHz.

The phase of $\mathscr{R}(j\omega)$ stays above $-137^\circ$ at all frequencies, so it never reaches $-180^\circ$. There is no phase-crossover frequency, and the gain margin is infinite.

### Step 5 — Role of $C_{gd}$

$C_{gd}$ in parallel with $R_F$ creates the 455-MHz zero, which adds phase lead near the crossover. Repeating the calculation with $C_{gd}=0$ gives $f_c=147$ MHz and a phase margin of only about 29°. The feedforward through $C_{gd}$ therefore improves the margin by about 15°.

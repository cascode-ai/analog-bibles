# Detailed solution - A282

Model the op amp by its two high-impedance nodes, the first-stage output $V_1$ and the output $V_{out}$, and write their node equations three times: for the differential input, for a ripple $v_{dd}$ on $V_{DD}$, and for a ripple $v_{ss}$ on $V_{SS}$. All three transfer functions share one denominator, so in the ratio PSRR the op-amp poles cancel and only the numerators remain. Their roots are the breakpoints of the sketch. All devices are saturated; $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$.

### Step 1 — Small-signal parameters

With M1, M2 at 15 µA (3/1) and M6, M7 at 95 µA (M6 94/1):

$$
\begin{aligned}
g_{mI}&=g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(3)(15\ \mu\mathrm A)}=99.5\ \mu\mathrm S,\qquad
g_{mII}=g_{m6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(94)(95\ \mu\mathrm A)}=945\ \mu\mathrm S,\\
G_I&=g_{ds2}+g_{ds4}=(0.04+0.05)(15\ \mu\mathrm A)=1.35\ \mu\mathrm S,\qquad
g_{ds6}=4.75\ \mu\mathrm S,\quad g_{ds7}=3.8\ \mu\mathrm S,\quad G_{II}=8.55\ \mu\mathrm S .
\end{aligned}
$$

So $A_v(0)=g_{mI}g_{mII}/(G_IG_{II})=8.1\times10^3$ (78 dB), $GB=g_{mI}/C_c=33.2$ Mrad/s (5.3 MHz) and $|p_2|=g_{mII}/C_L=94.5$ Mrad/s (15 MHz).

### Step 2 — Differential gain

KCL at $V_1$ and $V_{out}$ with a differential input $v_{id}$:

$$
g_{mI}v_{id}+(G_I+sC_c)V_1-sC_cV_{out}=0,\qquad (g_{mII}-sC_c)V_1+(G_{II}+sC_c+sC_L)V_{out}=0,
$$
$$
A_v(s)=\frac{g_{mI}(g_{mII}-sC_c)}{D(s)},\qquad D(s)=G_IG_{II}+s[C_c(g_{mII}+G_I+G_{II})+C_LG_I]+s^2C_cC_L .
$$

### Step 3 — Gain from $V_{DD}$ and PSRR⁺

With the bias $V_{GS}$ of M5 and M7 fixed, a $V_{DD}$ ripple enters in two ways. The p-channel mirror M3–M4 is referenced to $V_{DD}$, so the ripple drives node $V_1$ through the conductance $G_I$; M6's source moves with $V_{DD}$, so M6 injects $(g_{mII}+g_{ds6})v_{dd}$ into the output:

$$
G_Iv_{dd}=(G_I+sC_c)V_1-sC_cV_{out},\qquad (g_{mII}+g_{ds6})v_{dd}=(g_{mII}-sC_c)V_1+(G_{II}+sC_c+sC_L)V_{out},
$$
$$
A_{dd}(s)=\frac{G_Ig_{ds6}+sC_c(g_{mII}+g_{ds6}+G_I)}{D(s)} .
$$

Dividing, and using $g_{mII}\gg g_{ds6},G_I$:

$$
PSRR^+=\frac{A_v}{A_{dd}}\approx\frac{g_{mI}g_{mII}}{G_Ig_{ds6}}\cdot\frac{1-sC_c/g_{mII}}{1+s\,g_{mII}C_c/(G_Ig_{ds6})} .
$$

| Feature | Expression | Value |
|---|---|---|
| Low-frequency value | $g_{mI}g_{mII}/(G_Ig_{ds6})$ | $1.47\times10^4$ (83 dB) |
| Pole | $G_Ig_{ds6}/(g_{mII}C_c)$ | 2.26 krad/s (360 Hz) |
| Crossing 0 dB | dc value × pole $=g_{mI}/C_c$ | $GB$ = 5.3 MHz |
| RHP zero (slope break) | $g_{mII}/C_c$ | 315 Mrad/s (50 MHz) |
| High-frequency level | $g_{mI}/g_{mII}$ | −20 dB |

PSRR⁺ falls at only 360 Hz because M6's gate follows $V_{DD}$ through the mirror and $C_c$ couples that gate directly to the output; above 50 MHz the supply gain even exceeds the differential gain.

### Step 4 — Gain from $V_{SS}$ and PSRR⁻

With $V_{GS7}$ fixed, the $V_{SS}$ ripple reaches the output only through $g_{ds7}$ and $C_{gd7}$; node $V_1$ receives no direct injection in this two-node model:

$$
0=(G_I+sC_c)V_1-sC_cV_{out},\qquad (g_{ds7}+sC_{gd7})v_{ss}=(g_{mII}-sC_c)V_1+(G_{II}+sC_c+sC_L)V_{out},
$$
$$
A_{ss}(s)=\frac{(g_{ds7}+sC_{gd7})(G_I+sC_c)}{D(s)},\qquad
PSRR^-=\frac{g_{mI}g_{mII}}{G_Ig_{ds7}}\cdot\frac{1-sC_c/g_{mII}}{(1+sC_c/G_I)(1+sC_{gd7}/g_{ds7})} .
$$

($C_{gd7}$ is added to $C_L$ in $D$, a negligible change.)

| Feature | Expression | Value |
|---|---|---|
| Low-frequency value | $g_{mI}g_{mII}/(G_Ig_{ds7})$ | $1.83\times10^4$ (85 dB) |
| Pole | $G_I/C_c$ | $4.5\times10^5$ rad/s (72 kHz) |
| At $GB$ | — | 48 dB |
| RHP zero (slope break) | $g_{mII}/C_c$ | 50 MHz |
| Pole | $g_{ds7}/C_{gd7}$ | $3.8\times10^8$ rad/s (60 MHz) |

Between 50 MHz and 60 MHz the curve is flat (about 28 dB); above 60 MHz it falls again at −20 dB/decade (about 4 dB at 1 GHz).

### Step 5 — Sketch

![Bode magnitude of PSRR+ and PSRR− from 10 Hz to 10 GHz: PSRR+ 83 dB with a pole at 360 Hz, 0 dB at GB and a floor near −20 dB above 50 MHz; PSRR− 85 dB with a pole at 72 kHz, 48 dB at GB, flat between 50 and 60 MHz and falling above](/q/A282/solution-curves.svg)

PSRR⁻ is far better than PSRR⁺ above a few hundred hertz.

Two remarks bound this result. First, the book often measures PSRR with the op amp as a unity-gain follower, which gives $(1+A_v)/A_{supply}$; below $GB$ that equals the ratio above, but above $GB$ its numerator has the follower's closed-loop poles near $GB$ and $|p_2|$, so that measurement keeps PSRR⁺ near 0 dB up to about 15 MHz and makes PSRR⁻ level off near 48 dB; this high-frequency shape belongs to the follower test, not to the ratio defined here. Second, the two-node model ignores the tail device M5: its $g_{ds5}$ also injects the $V_{SS}$ ripple, and in this ratio-matched design that path nearly cancels the $g_{ds7}$ injection, so a complete analysis gives a much higher low-frequency PSRR⁻ (of order 100–120 dB); above about 70 kHz the curve is essentially the one shown.

# Detailed solution - A283

Find the bias currents, then the small-signal parameters, then the supply-to-output gains from the two-node model (first-stage output $V_1$, output $V_{out}$). PSRR is evaluated with the textbook measurement: the op amp connected as a unity-gain follower with the input grounded, so that $PSRR=v_{supply}/v_{out}=(1+A_v)/A_{supply}$. The bias $V_{GS}$ of M5 and M7 is held fixed with respect to $V_{SS}$, as stated. All devices are saturated; $g_m=\sqrt{2K'(W/L)I_D}$, $g_{ds}=\lambda I_D$.

### Step 1 — Bias currents

The diode-connected M9 (p, 1/1) and M8 (n, 1/1) share the 3-V supply and carry the same current:

$$
0.7+\sqrt{\frac{2I_8}{50\ \mu\mathrm{A/V^2}}}+0.7+\sqrt{\frac{2I_8}{110\ \mu\mathrm{A/V^2}}}=3\ \mathrm V
\;\Rightarrow\;
\left(0.200+0.135\right)\sqrt{I_8/\mu\mathrm A}=1.6\;\Rightarrow\;I_8=22.8\ \mu\mathrm A .
$$

M5 (2/1) and M7 (10/1) mirror M8: $I_5=2I_8=45.7$ µA and $I_7=I_6=10I_8=228$ µA.

### Step 2 — Small-signal parameters

$$
\begin{aligned}
g_{mI}&=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(22.8\ \mu\mathrm A)}=224\ \mu\mathrm S,\qquad
g_{mII}=\sqrt{2(50\ \mu\mathrm{A/V^2})(100)(228\ \mu\mathrm A)}=1.51\ \mathrm{mS},\\
G_I&=(0.04+0.05)(22.8\ \mu\mathrm A)=2.06\ \mu\mathrm S,\qquad g_{ds6}=11.4\ \mu\mathrm S,\qquad g_{ds7}=9.13\ \mu\mathrm S,
\end{aligned}
$$

with $C_{gd7}=C_{GDO}W_7=(220\ \mathrm{pF/m})(10\ \mu\mathrm m)=2.2$ fF and $A_v(0)=g_{mI}g_{mII}/[G_I(g_{ds6}+g_{ds7})]=8.0\times10^3$.

### Step 3 — Supply gains and the follower PSRR

KCL at $V_1$ and $V_{out}$ (as for any two-stage op amp with Miller capacitor $C_c$) gives a common denominator
$D(s)=G_IG_{II}+s[C_c(g_{mII}+G_I+G_{II})+C_LG_I]+s^2C_cC_L$ and

$$
A_v=\frac{g_{mI}(g_{mII}-sC_c)}{D},\qquad
A_{dd}=\frac{G_Ig_{ds6}+sC_c(g_{mII}+g_{ds6}+G_I)}{D},\qquad
A_{ss}=\frac{(g_{ds7}+sC_{gd7})(G_I+sC_c)}{D}.
$$

For $V_{DD}$ the ripple enters through the mirror (conductance $G_I$ at $V_1$) and through M6's source ($g_{mII}+g_{ds6}$); for $V_{SS}$, with $V_{GS7}$ fixed, only through $g_{ds7}$ and $C_{gd7}$. In the follower, $v_{out}=A_{supply}v_{supply}-A_vv_{out}$, so

$$
PSRR=\frac{1+A_v}{A_{supply}},\qquad D+g_{mI}(g_{mII}-sC_c)\approx g_{mI}g_{mII}\left(1+\frac{sC_c}{g_{mI}}\right)\left(1+\frac{sC_L}{g_{mII}}\right).
$$

The two factors are the follower's closed-loop poles near $GB$ and $|p_2|$, which become zeros of PSRR.

### Step 4 — PSRR⁺

$$
PSRR^+=\frac{g_{mI}g_{mII}}{G_Ig_{ds6}}\cdot\frac{(1+sC_c/g_{mI})(1+sC_L/g_{mII})}{1+s\,g_{mII}C_c/(G_Ig_{ds6})}
$$

| Item | Expression | Value |
|---|---|---|
| PSRR⁺(0) | $g_{mI}g_{mII}/(G_Ig_{ds6})$ | $1.44\times10^4$ (83 dB) |
| Zero | $-g_{mI}/C_c$ | $-4.48\times10^7$ rad/s (−7.1 MHz) |
| Zero | $-g_{mII}/C_L$ | $-7.55\times10^7$ rad/s (−12.0 MHz) |
| Pole | $-G_Ig_{ds6}/(g_{mII}C_c)$ | $-3.1\times10^3$ rad/s (−494 Hz) |

### Step 5 — PSRR⁻

$$
PSRR^-=\frac{g_{mI}g_{mII}}{G_Ig_{ds7}}\cdot\frac{(1+sC_c/g_{mI})(1+sC_L/g_{mII})}{(1+sC_c/G_I)(1+sC_{gd7}/g_{ds7})}
$$

| Item | Expression | Value |
|---|---|---|
| PSRR⁻(0) | $g_{mI}g_{mII}/(G_Ig_{ds7})$ | $1.80\times10^4$ (85 dB) |
| Zeros | $-g_{mI}/C_c$, $-g_{mII}/C_L$ | −7.1 MHz, −12.0 MHz |
| Pole | $-G_I/C_c$ | $-4.1\times10^5$ rad/s (−65 kHz) |
| Pole | $-g_{ds7}/C_{gd7}$ | $-4.1\times10^9$ rad/s (≈ −660 MHz, negligible) |

### Step 6 — Remarks on the definition and the model

Solved exactly, the two zeros form a complex pair, the roots of $s^2C_cC_L+sC_c(g_{mII}-g_{mI})+g_{mI}g_{mII}=0$: $(-3.2\pm j4.9)\times10^7$ rad/s, magnitude $\sqrt{g_{mI}g_{mII}/(C_cC_L)}=5.8\times10^7$ rad/s. If PSRR is instead defined as the open-loop ratio $A_v/A_{supply}$, the common denominator cancels and the two zeros are replaced by the RHP zero of $A_v$ at $+g_{mII}/C_c=+3.0\times10^8$ rad/s (+48 MHz); the low-frequency values and the poles are the same.

The model omits the tail transistor M5. Its $g_{ds5}$ also injects the $V_{SS}$ ripple, which the first stage and M6 carry to the output in opposition to the $g_{ds7}$ path; in this ratio-matched design the two nearly cancel, so a full analysis gives a much larger PSRR⁻(0) (≈ 110–125 dB) with its pole moved down into the kHz range, while the curve above a few hundred kilohertz is unchanged.

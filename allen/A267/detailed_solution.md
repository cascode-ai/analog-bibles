# Detailed solution - A267

Follow the standard two-stage procedure with every device type complemented: choose $C_c$ from the phase-margin rule, check the slew rate with the given $I_5$, size the input pair from GB, size M6 from $g_{m6}\ge10g_{m1}$, size the mirror for balance, size M5 and M7 for the currents, and then check every specification. All lengths are 1 µm, so each aspect ratio $S=W/L$ equals the width in micrometres. The square law gives $g_m=\sqrt{2K'SI_D}$ and $V_{ov}=\sqrt{2I_D/(K'S)}$.

### Step 1 — $C_c$ and the slew rate

For a 60° margin the output pole must be at least $2.2\,GB$ while the zero is at $10\,GB$. With $g_{m6}=10g_{m1}$ this requires $C_c\ge0.22C_L=2.2$ pF; choose $C_c=3$ pF. The first-stage slew rate is

$$
SR=\frac{I_5}{C_c}=\frac{30\ \mu\mathrm A}{3\ \mathrm{pF}}=10\ \mathrm{V/\mu s},
$$

exactly at the limit (the output stage is checked in Step 6).

### Step 2 — Input pair (p-channel) from GB

$$
g_{m1}=GB\cdot C_c=2\pi(5\ \mathrm{MHz})(3\ \mathrm{pF})=94.2\ \mu\mathrm S,\qquad
S_1=S_2=\frac{g_{m1}^2}{2K'_P(I_5/2)}=\frac{(94.2\ \mu\mathrm S)^2}{2(50\ \mu\mathrm{A/V^2})(15\ \mu\mathrm A)}=5.9\approx6 .
$$

### Step 3 — Output transistor (n-channel) M6

$$
g_{m6}\ge10g_{m1}=942\ \mu\mathrm S,\qquad
S_6=\frac{g_{m6}^2}{2K'_NI_6}=\frac{(942\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(95\ \mu\mathrm A)}=42.5\approx43 .
$$

### Step 4 — Mirror load M3–M4

For zero systematic offset the gate of M6 should sit at the mirror voltage, $V_{GS3}=V_{GS6}$, i.e. equal current per unit aspect ratio:

$$
S_3=S_4=S_6\frac{I_5/2}{I_6}=43\cdot\frac{15\ \mu\mathrm A}{95\ \mu\mathrm A}=6.7\approx7 .
$$

Mirror-pole check, with $C_{gs3}\approx0.67W_3L_3C_{ox}$ and $g_{m3}=\sqrt{2(110\ \mu\mathrm{A/V^2})(7)(15\ \mu\mathrm A)}=152\ \mu\mathrm S$:

$$
\frac{g_{m3}}{2C_{gs3}}=\frac{152\ \mu\mathrm S}{2(0.67)(7\ \mu\mathrm m^2)(2.47\ \mathrm{fF/\mu m^2})}=6.6\times10^{9}\ \mathrm{rad/s}\gg10\,GB=3.1\times10^8\ \mathrm{rad/s}.
$$

### Step 5 — Input common-mode range and M5, M7

**Lower limit.** M1 stays saturated while its drain (at $V_{SS}+V_{GS3}$) is no more than $|V_{TP1}|$ above its gate. With worst-case thresholds,

$$
V_{in}(\min)=V_{SS}+V_{GS3}(\max)-|V_{TP1}|(\min)=-2.5+\Big(0.85+\sqrt{\tfrac{2(15\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(7)}}\Big)-0.55=-2.0\ \mathrm V,
$$

which meets the $-1$ V specification with margin.

**Upper limit.** M5 stays saturated while $V_{in}\le V_{DD}-V_{SD5}(\mathrm{sat})-V_{SG1}$, with

$$
V_{SG1}=|V_{TP1}|+\sqrt{\frac{2(15\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(6)}}=|V_{TP1}|+0.316\ \mathrm V .
$$

Even with $V_{SD5}(\mathrm{sat})\to0$ the worst case gives $V_{in}(\max)\le2.5-0.85-0.316=1.33$ V, and for any size and threshold $V_{in}(\max)<V_{DD}-|V_{TP}|(\min)=1.95$ V. Reaching $+2$ V would require $V_{SD5}(\mathrm{sat})+V_{SG1}\le0.5$ V, less than the threshold alone. **The +2 V upper ICMR limit cannot be met by any p-channel-input design on a 2.5-V supply.** Choosing $V_{SD5}(\mathrm{sat})=0.2$ V:

$$
S_5=\frac{2I_5}{K'_P(0.2\ \mathrm V)^2}=\frac{2(30\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.04\ \mathrm{V^2})}=30,
\qquad V_{in}(\max)=2.5-0.2-0.85-0.316=1.13\ \mathrm V
$$

(worst case; 1.28 V with nominal thresholds). M7 shares M5's gate voltage, so $S_7=S_5I_6/I_5=30\cdot95/30=95$.

### Step 6 — Checks of the remaining specifications

With the rounded sizes, $g_{m1}=94.9\ \mu\mathrm S$ and $g_{m6}=948\ \mu\mathrm S$.

- Output swing: $V_{out}(\max)=2.5-\sqrt{2(95\ \mu\mathrm A)/[(50\ \mu\mathrm{A/V^2})(95)]}=2.3$ V and $V_{out}(\min)=-2.5+\sqrt{2(95\ \mu\mathrm A)/[(110\ \mu\mathrm{A/V^2})(43)]}=-2.3$ V, beyond ±2 V. ✓
- Gain:
$$
A_v=\frac{g_{m1}}{(\lambda_P+\lambda_N)I_5/2}\cdot\frac{g_{m6}}{(\lambda_N+\lambda_P)I_6}=\frac{94.9\ \mu\mathrm S}{(0.09)(15\ \mu\mathrm A)}\cdot\frac{948\ \mu\mathrm S}{(0.09)(95\ \mu\mathrm A)}\approx7.8\times10^3>5000 .\ ✓
$$
- Phase margin: $|p_2|=g_{m6}/C_L=3.0\,GB$, $z=g_{m6}/C_c=10\,GB$, so $\Phi_M\approx90°-\arctan(1/3)-\arctan(0.1)=66°$. ✓
- Power: $P_{diss}=(5\ \mathrm V)(30+95)\ \mu\mathrm A=0.63\ \mathrm{mW}\le2$ mW. ✓
- Slew rate: $I_5/C_c=10$ V/µs is only at the limit, and for rising output edges M6 turns off and the fixed $I_7=95\ \mu\mathrm A$ must charge both $C_L$ and $C_c$, giving about $I_7/(C_L+C_c)=7.3$ V/µs. The SR > 10 V/µs specification is therefore not strictly met with $I_7=95\ \mu\mathrm A$.

### Step 7 — Design summary

| Device | $W$ (µm), $L=1$ µm | Current |
|---|---|---|
| M1, M2 (p) | 6 | 15 µA |
| M3, M4 (n) | 7 | 15 µA |
| M5 (p) | 30 | 30 µA |
| M6 (n) | 43 | 95 µA |
| M7 (p) | 95 | 95 µA |
| $C_c$ | 3 pF | — |

The design meets the gain, GB, phase-margin, output-swing, power and lower-ICMR specifications. It cannot meet the +2 V upper ICMR limit (about +1.13 V worst case), and its slew rate is limited to about 7.3 V/µs on rising output edges.

# Detailed solution - A268

Size the bias branch first, because $R_B$ fixes the reference current and every other current is a mirror ratio of it. Then use minimum devices for the signal path, check the gain against the specification, and finally set $C_c$, $R_z$, the load limit and the slew rate from the resulting $g_{m1}$ and $g_{m6}$. All transistors are in saturation with $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$; write $S=W/L$. Channel-length modulation is neglected in the dc currents and kept only in $g_{ds}=\lambda I_D$.

### Step 1 — Reference current from $R_B$ and M8

M8 is diode-connected, so $V_{DS8}=V_{GS8}$ and it is always saturated. With L = 2 µm and the smallest width, $S_8=1$. The resistor carries the M8 current across the remaining supply voltage:

$$
I_8=\frac{V_{DD}-V_{SS}-V_{GS8}}{R_B},\qquad V_{GS8}=V_{TN}+\sqrt{\frac{2I_8}{K'_NS_8}}.
$$

Solving the two equations simultaneously:

$$
I_8=\frac{5\ \mathrm V-0.7\ \mathrm V-\sqrt{2I_8/(110\ \mu\mathrm{A/V^2})}}{100\ \mathrm{k\Omega}}
\;\Rightarrow\; I_8=35.0\ \mu\mathrm A,\quad V_{GS8}=1.50\ \mathrm V.
$$

Even an infinitely wide M8 ($V_{GS8}\to0.7$ V) gives only 43 µA, so $I_8<50$ µA for any M8, and M5 and M7 must have larger aspect ratios than M8.

### Step 2 — Mirror ratios for M5 and M7

M5 and M7 share $V_{GS8}$, so in saturation their currents scale with $S$:

$$
S_5=S_8\frac{I_5}{I_8}=\frac{50\ \mu\mathrm A}{35.0\ \mu\mathrm A}=1.43,\qquad
S_7=S_8\frac{I_7}{I_8}=\frac{100\ \mu\mathrm A}{35.0\ \mu\mathrm A}=2.86 .
$$

With L = 2 µm: $W_5\approx2.9$ µm and $W_7\approx5.7$ µm. (Keeping $W_5=2$ µm and lengthening M8 instead is equally valid; only the ratios matter.)

### Step 3 — Input pair and mirror load at minimum size

Take $S_1=S_2=1$ and $S_3=S_4=1$ (2 µm/2 µm). Each input device carries $I_5/2=25$ µA:

$$
g_{m1}=\sqrt{2K'_NS_1I_1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(1)(25\ \mu\mathrm A)}=74.2\ \mu\mathrm S,
$$
$$
V_{SG3}=|V_{TP}|+\sqrt{\frac{2I_3}{K'_PS_3}}=0.7\ \mathrm V+\sqrt{\frac{2(25\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(1)}}=1.7\ \mathrm V.
$$

### Step 4 — Output transistor from the balance condition

With zero differential input the mirror forces $V_{SD4}=V_{SD3}$, so $V_{SG6}=V_{SD4}=V_{SG4}$. For M6 to carry exactly $I_7$ at this gate voltage (no systematic offset), its current density must equal that of M4:

$$
\frac{I_6}{S_6}=\frac{I_4}{S_4}\;\Rightarrow\; S_6=S_4\frac{I_7}{I_4}=1\cdot\frac{100\ \mu\mathrm A}{25\ \mu\mathrm A}=4\quad(8\ \mu\mathrm m/2\ \mu\mathrm m),
$$
$$
g_{m6}=\sqrt{2K'_PS_6I_6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(4)(100\ \mu\mathrm A)}=200\ \mu\mathrm S .
$$

The design is summarized below (all L = 2 µm):

| Device | M1, M2 | M3, M4 | M5 | M6 | M7 | M8 |
|---|---|---|---|---|---|---|
| W (µm) | 2 | 2 | 2.9 | 8 | 5.7 | 2 |
| $I_D$ (µA) | 25 | 25 | 50 | 100 | 100 | 35.0 |

### Step 5 — Low-frequency gain

Each stage's gain is its transconductance times the resistance at its output node, where the two drains in parallel give $g_{ds}=\lambda I_D$ each:

$$
A_v=\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{g_{m6}}{g_{ds6}+g_{ds7}}
=\frac{74.2\ \mu\mathrm S}{(0.01+0.01)(25\ \mu\mathrm A)}\cdot\frac{200\ \mu\mathrm S}{(0.01+0.01)(100\ \mu\mathrm A)}
=148\times100=1.48\times10^4 .
$$

This exceeds 4000. Because the devices are already minimum size, the gain cannot be lowered to exactly 4000 without non-minimum lengths; the specification is met as a lower bound.

### Step 6 — Compensation capacitor and nulling resistor

The unity-gain frequency of the Miller-compensated op amp is $GB=g_{m1}/C_c$ in rad/s, so with GB = $2\pi(1\ \mathrm{MHz})$:

$$
C_c=\frac{g_{m1}}{2\pi\,GB}=\frac{74.2\ \mu\mathrm S}{2\pi(10^6\ \mathrm{Hz})}=11.8\ \mathrm{pF}.
$$

With $R_z$ in series with $C_c$, the zero is at $z=1/[C_c(1/g_{m6}-R_z)]$. Choosing

$$
R_z=\frac1{g_{m6}}=\frac1{200\ \mu\mathrm S}=5\ \mathrm{k\Omega}
$$

moves the zero to infinity; a slightly larger $R_z$ places it in the left half-plane.

### Step 7 — Maximum load capacitance

With the zero removed, the phase margin is set by the output pole $|p_2|\approx g_{m6}/C_L$ alone: $\Phi_M=90^\circ-\arctan(GB/|p_2|)$. A 60° margin requires $|p_2|\ge\tan60^\circ\,GB=1.73\,GB$:

$$
C_L\le\frac{g_{m6}}{1.73(2\pi)(10^6\ \mathrm{Hz})}=\frac{200\ \mu\mathrm S}{1.087\times10^{7}\ \mathrm{s^{-1}}}=18.4\ \mathrm{pF}.
$$

For a 45° margin ($|p_2|\ge GB$) the limit is $g_{m6}/GB=31.8$ pF.

### Step 8 — Slew rate and swing check

During slewing the tail current $I_5$ charges $C_c$ alone, so

$$
SR=\frac{I_5}{C_c}=\frac{50\ \mu\mathrm A}{11.8\ \mathrm{pF}}=4.2\ \mathrm{V/\mu s}.
$$

On a falling output edge into $C_L=18.4$ pF the output sink limits the rate to about $I_7/(C_L+C_c)=100\ \mu\mathrm A/30.2\ \mathrm{pF}=3.3$ V/µs, so the internal value 4.2 V/µs is the op amp's slew rate for light loads.

All devices are saturated at zero common-mode input. The ranges, from the saturation limits of M5, M1, M6 and M7, are

$$
\begin{aligned}
V_{ic,\min}&=V_{SS}+V_{GS1}+V_{DS5,\mathrm{sat}}=-2.5+1.374+0.798=-0.33\ \mathrm V,\\
V_{ic,\max}&=V_{DD}-V_{SG3}+V_{TN}=2.5-1.7+0.7=1.5\ \mathrm V,\\
V_{out}&\in[V_{SS}+V_{DS7,\mathrm{sat}},\ V_{DD}-V_{SD6,\mathrm{sat}}]=[-1.70,\ 1.5]\ \mathrm V.
\end{aligned}
$$

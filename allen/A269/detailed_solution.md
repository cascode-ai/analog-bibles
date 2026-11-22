# Detailed solution - A269

The input pair is fixed (2/2), so $g_{m1}$ follows from the doubled tail current and sets $C_c$ through the GB specification. The gain specification then gives the minimum $g_{m6}$; M3/M4 and M6 are sized together so that $V_{SG6}=V_{SG4}$ (no systematic offset), and M5 and M7 are mirror ratios of the M8 reference current. All devices are in saturation with $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$, $S=W/L$, and $g_{ds}=\lambda I_D$ with $\lambda=0.01\ \mathrm{V^{-1}}$ at L = 2 µm.

### Step 1 — Input transconductance and $C_c$

Each input transistor carries $I_5/2=50$ µA:

$$
g_{m1}=\sqrt{2K'_NS_1I_1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=104.9\ \mu\mathrm S .
$$

The Miller-compensated op amp has $GB=g_{m1}/C_c$ in rad/s, so for 1 MHz

$$
C_c=\frac{g_{m1}}{2\pi(10^6\ \mathrm{Hz})}=\frac{104.9\ \mu\mathrm S}{6.283\times10^6\ \mathrm{s^{-1}}}=16.7\ \mathrm{pF}.
$$

### Step 2 — Required second-stage transconductance

The low-frequency gain is the product of the two stage gains, each $g_m$ divided by the sum of the output conductances at that node:

$$
A_v=\frac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})},\qquad
\begin{aligned}
g_{ds2}+g_{ds4}&=(0.01+0.01)(50\ \mu\mathrm A)=1\ \mu\mathrm S,\\
g_{ds6}+g_{ds7}&=(0.01+0.01)(200\ \mu\mathrm A)=4\ \mu\mathrm S.
\end{aligned}
$$

$A_v\ge5000$ requires

$$
g_{m6}\ge\frac{5000(1\ \mu\mathrm S)(4\ \mu\mathrm S)}{104.9\ \mu\mathrm S}=191\ \mu\mathrm S .
$$

### Step 3 — Mirror load M3, M4 and output device M6

With zero differential input, $V_{SG6}=V_{SD4}=V_{SG4}$. For M6 to carry exactly $I_7$ at that gate voltage, M6 and M4 must have equal current densities, $S_6/S_4=I_6/I_4=200/50=4$. Choose $W_3=W_4=4$ µm, $L_3=L_4=2$ µm ($S_4=2$):

$$
V_{SG3}=|V_{TP}|+\sqrt{\frac{2I_3}{K'_PS_3}}=0.7\ \mathrm V+\sqrt{\frac{2(50\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(2)}}=1.7\ \mathrm V,
$$
$$
S_6=4S_4=8\ (16/2),\qquad
g_{m6}=\sqrt{2K'_PS_6I_6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(8)(200\ \mu\mathrm A)}=400\ \mu\mathrm S .
$$

This exceeds 191 µS, so

$$
A_v=\frac{(104.9\ \mu\mathrm S)(400\ \mu\mathrm S)}{(1\ \mu\mathrm S)(4\ \mu\mathrm S)}=1.05\times10^4\ge5000 .
$$

Lowering the gain to exactly 5000 would need $S_4<1$ (L > 2 µm), so the minimum-size choice meets the specification as a lower bound.

### Step 4 — Bias branch and tail transistor M5

Take M8 = 4/2 ($S_8=2$). $R_B$ carries the M8 current across the remaining supply voltage:

$$
I_8=\frac{V_{DD}-V_{SS}-V_{GS8}}{R_B},\quad V_{GS8}=V_{TN}+\sqrt{\frac{2I_8}{K'_NS_8}}
\;\Rightarrow\; I_8=37.2\ \mu\mathrm A,\quad V_{GS8}=1.28\ \mathrm V .
$$

M5 and M7 share $V_{GS8}$, so their aspect ratios scale with the current:

$$
S_5=S_8\frac{I_5}{I_8}=2\cdot\frac{100\ \mu\mathrm A}{37.2\ \mu\mathrm A}=5.38\ (W_5\approx10.8\ \mu\mathrm m,\ L_5=2\ \mu\mathrm m),\qquad
S_7=2\cdot\frac{200\ \mu\mathrm A}{37.2\ \mu\mathrm A}=10.8\ (\approx21.5/2).
$$

| Device | M1, M2 | M3, M4 | M5 | M6 | M7 | M8 |
|---|---|---|---|---|---|---|
| W/L (µm/µm) | 2/2 | 4/2 | 10.8/2 | 16/2 | 21.5/2 | 4/2 |
| $I_D$ (µA) | 50 | 50 | 100 | 200 | 200 | 37.2 |

### Step 5 — Saturation check at zero common-mode input

With both gates at 0 V, the common source sits at $-V_{GS1}$:

$$
V_{GS1}=0.7+\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(1)}}=1.65\ \mathrm V,\qquad
V_{DS5}=-1.65-(-2.5)=0.85\ \mathrm V>V_{DS5,\mathrm{sat}}=0.58\ \mathrm V .
$$

The drain of M1 is at $V_{DD}-V_{SG3}=0.8$ V, so $V_{DS1}=2.45$ V exceeds $V_{GS1}-V_{TN}=0.95$ V. M3, M4 and M8 are diode-connected (or balanced to one) and saturated. The output may swing from $V_{SS}+V_{DS7,\mathrm{sat}}=-2.5+0.58=-1.92$ V to $V_{DD}-V_{SD6,\mathrm{sat}}=2.5-1.0=1.5$ V with M6 and M7 saturated.

### Step 6 — Nulling resistor

The zero of the compensation branch is at $z=1/[C_c(1/g_{m6}-R_z)]$; setting

$$
R_z=\frac1{g_{m6}}=\frac1{400\ \mu\mathrm S}=2.5\ \mathrm{k\Omega}
$$

moves it to infinity and cancels the RHP-zero effect.

### Step 7 — Load capacitance and slew rate

Without the zero, $\Phi_M=90^\circ-\arctan(GB/|p_2|)$ with $|p_2|\approx g_{m6}/C_L$. A 60° margin needs $|p_2|\ge1.73\,GB$:

$$
C_L\le\frac{g_{m6}}{1.73(2\pi)(10^6\ \mathrm{Hz})}=\frac{400\ \mu\mathrm S}{1.087\times10^7\ \mathrm{s^{-1}}}=36.8\ \mathrm{pF}
$$

(64 pF for a 45° margin). During slewing the tail current charges $C_c$:

$$
SR=\frac{I_5}{C_c}=\frac{100\ \mu\mathrm A}{16.7\ \mathrm{pF}}=6.0\ \mathrm{V/\mu s}.
$$

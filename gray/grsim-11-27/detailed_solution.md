# Detailed solution - grsim-11-27

Build the stage in SPICE at the given operating point, run a `.noise` analysis with the differential input as the source, and use the per-device contributions that the simulator reports, referred to the input by dividing by the squared gain. The white-noise run checks the hand analysis. Then base-current flicker noise with a 1-kHz corner is added, and the same breakdown at 1 Hz shows which device dominates. A short hand calculation explains the result: the flicker current of a degenerated transistor whose base is at a low-impedance bias reaches its collector almost undivided.

### Step 1 — Simulation setup

The circuit is built as drawn, with $V_{CC}=3$ V, $V_{EE}=0$ and both inputs at a common-mode level of 0.3 V. $\text{Bias}_1=2.140$ V and $\text{Bias}_{CM}=0.843$ V are ideal (noiseless, low-impedance) sources. Nodes 9 and 10 are held at 1.5 V by zero-volt current sensors, so the noise output is the short-circuit differential current $i_o$, converted to a voltage by noiseless CCVSs. The models are Gummel–Poon with IS $=10^{-16}$ A, BF $=10$, RB $=200\ \Omega$ (pnp) and BF $=40$, RB $=400\ \Omega$ (npn), at a temperature giving $4kT=1.66\times10^{-20}$ V·C. $Q_{11}$ is given an area of 2.5 so that the 33-kΩ tail branch delivers $I_{C3}=I_{C4}=3\ \mu$A. The resulting operating point is $I_{C3}=3.01\ \mu$A, $I_{C9}=6.01\ \mu$A, $I_{C13}=6.02\ \mu$A, $I_{B13}=0.60\ \mu$A, $I_{B9}=0.15\ \mu$A, and the simulated $G_{m1}=94.8\ \mu$A/V, close to the 97 µA/V of the hand analysis.

```spice
* grsim-11-27 bipolar input stage noise
VCC vcc 0 3
VB1 bias1 0 2.140
VBCM biascm 0 0.843
VINP inp 0 dc 0.3 ac 1
VINN inn 0 dc 0.3
R11 vcc e11 33k
Q11 t bias1 e11 qp 2.5
Q3 c3 inn t qp
Q4 c4 inp t qp
R13 vcc e13 33k
R14 vcc e14 33k
Q13 n9 bias1 e13 qp
Q14 n10 bias1 e14 qp
Q9 n9 biascm c3 qn
Q10 n10 biascm c4 qn
R9 c3 0 22k
R10 c4 0 22k
V9 n9 o9 0
V10 n10 o10 0
VO9 o9 0 1.5
VO10 o10 0 1.5
H9 a 0 V9 1
H10 b 0 V10 1
.model qp pnp is=1e-16 bf=10 rb=200 kf=3.2e-16 af=1
.model qn npn is=1e-16 bf=40 rb=400 kf=3.2e-16 af=1
.temp 27.4
.noise v(a,b) VINP dec 1 1 1e5 1
.end
```

For the white-noise run KF $=0$. For the input noise current, the input is driven by an ac current source, with the 0.3-V bias fed through a 1-GH inductor.

### Step 2 — White noise: check of the hand analysis

With KF $=0$, the simulated equivalent input noise voltage is flat at

$$
\frac{\overline{v_i^2}}{\Delta f}=4.05\times10^{-16}\ \mathrm{V^2/Hz}=4kT(24.4\ \mathrm{k\Omega})\quad(20\ \mathrm{nV/\sqrt{Hz}}).
$$

| Contribution (input-referred) | SPICE | Hand estimate |
|---|---|---|
| $Q_3$, $Q_4$ | $4kT(9.1\ \mathrm{k\Omega})$ | $4kT(9\ \mathrm{k\Omega})$ |
| $Q_9$, $Q_{10}$, $Q_{13}$, $Q_{14}$ and $R_9$, $R_{10}$, $R_{13}$, $R_{14}$ | $4kT(15.3\ \mathrm{k\Omega})$ | $4kT(13\ \mathrm{k\Omega})$ |
| $Q_{11}$, $R_{11}$ (common mode) | $\approx0$ | 0 |
| Total | $4kT(24.4\ \mathrm{k\Omega})$ | $4kT(22\ \mathrm{k\Omega})$ |

The input pair agrees closely. The load devices come out about 2 kΩ higher because the hand analysis drops their base-current shot noise. That noise flows into the 33-kΩ and 22-kΩ emitter resistors and, like the flicker noise in Step 4, reaches the collector almost undivided. Estimated this way, it adds about $4kT(1.7\ \mathrm{k\Omega})$ for $Q_{13}$/$Q_{14}$ and $4kT(0.4\ \mathrm{k\Omega})$ for $Q_9$/$Q_{10}$. The simulated white input noise current is $1.06\times10^{-25}$ A²/Hz, close to $2qI_B=9.6\times10^{-26}$ A²/Hz. The hand analysis is therefore confirmed within about 10%.

### Step 3 — Flicker-noise coefficient

The base-current noise is $\overline{i_b^2}/\Delta f=2qI_B+K_1I_B/f$. The corner, where the two terms are equal, is $f_c=K_1/2q$, so a 1-kHz corner for every transistor requires

$$
K_1=2q(1\ \mathrm{kHz})=2(1.6\times10^{-19}\ \mathrm C)(10^3\ \mathrm{s^{-1}})=3.2\times10^{-16}\ \mathrm A,
\qquad
\frac{\overline{i_b^2}}{\Delta f}=2qI_B\left(1+\frac{1000\ \mathrm{Hz}}{f}\right).
$$

At 1 Hz every base-current noise source is 1001 times its shot noise. In SPICE this is KF $=3.2\times10^{-16}$ with AF $=1$.

### Step 4 — How base-current noise reaches the output

Consider $Q_{13}$: base at an ac ground, emitter resistor $R_{13}$ to $V_{CC}$, collector at node 9. Its base-current noise $i_n$ flows from the internal base into the emitter node. KCL there, with $v_{be}=-v_e$, gives

$$
v_e=\frac{i_nR_{13}}{1+(g_m+g_\pi)R_{13}},\qquad
\frac{i_c}{i_n}=\frac{g_mR_{13}}{1+(1+1/\beta)g_mR_{13}}.
$$

With $1/g_{m13}=26\ \mathrm{mV}/6\ \mu\mathrm A=4.3$ kΩ, $g_mR_{13}=7.6$ and $\beta=10$, $i_c/i_n=0.81$: most of the base-current noise appears in the output. Because the pnp $\beta$ is low, $I_{B13}=0.6\ \mu$A is large. The same holds for the cascode $Q_9$, with $g_mR_9=5.1$, $\beta=40$ and $i_c/i_n=0.82$, but $I_{B9}=0.15\ \mu$A is four times smaller. In contrast, the base-current noise of $Q_3$/$Q_4$ only flows in $r_b$ when the inputs are shorted.

### Step 5 — Contributions at 1 Hz

Referring each pair of devices (both sides add in mean square) through $G_{m1}=97\ \mu$A/V:

$$
\begin{aligned}
Q_{13},Q_{14}:&\quad\frac{2\cdot2q(0.6\ \mu\mathrm A)(1001)(0.81)^2}{(97\ \mu\mathrm A/\mathrm V)^2}=\frac{2(1.92\times10^{-22})(0.66)}{9.41\times10^{-9}}=2.7\times10^{-14}\ \mathrm{V^2/Hz},\\
Q_9,Q_{10}:&\quad\frac{2\cdot2q(0.15\ \mu\mathrm A)(1001)(0.82)^2}{(97\ \mu\mathrm A/\mathrm V)^2}=6.8\times10^{-15}\ \mathrm{V^2/Hz},\\
Q_3,Q_4:&\quad2\cdot2q(0.3\ \mu\mathrm A)(1001)\,r_b^2=2(9.6\times10^{-23})(200\ \Omega)^2=7.7\times10^{-18}\ \mathrm{V^2/Hz}.
\end{aligned}
$$

The simulated breakdown at 1 Hz, with the simulator's own $G_{m1}$:

| Device | Input-referred at 1 Hz (V²/Hz) | Share |
|---|---|---|
| $Q_{13}$, $Q_{14}$ | $2.87\times10^{-14}$ | 79% |
| $Q_9$, $Q_{10}$ | $7.47\times10^{-15}$ | 20% |
| $Q_3$, $Q_4$ (flicker part $7.7\times10^{-18}$) | $1.6\times10^{-16}$ | 0.4% |
| Resistors | $1.9\times10^{-16}$ | 0.5% |
| Total | $3.65\times10^{-14}$ | (190 nV/√Hz) |

The total at 1 Hz is about 90 times the white level.

### Step 6 — Dominant device at 1 Hz

The pnp active-load current sources $Q_{13}$ and $Q_{14}$ dominate the equivalent input noise voltage at 1 Hz, with about 80% of $3.7\times10^{-14}$ V²/Hz. Their low $\beta$ gives a large base current, and its flicker noise reaches the output almost undivided because the base sits at a low-impedance bias and the 33-kΩ emitter resistor forces the noise current into the collector. The npn cascodes $Q_9$/$Q_{10}$ come second (about 20%), and the input pair contributes less than 1%.

The input noise current at 1 Hz is set by the base-current flicker noise of $Q_3$/$Q_4$: $2q(0.3\ \mu\mathrm A)(1001)=9.6\times10^{-23}$ A²/Hz by hand and $8.9\times10^{-23}$ A²/Hz simulated.

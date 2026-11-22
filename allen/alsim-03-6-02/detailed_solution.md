# Detailed solution - alsim-03-6-02

The circuit is a common-source stage, M1, loaded by the p-channel mirror M2–M3 whose reference current is set by M3 and R. Sweep $v_{IN}$ from 0 to 5 V in ngspice with the nominal level-1 models, then repeat with each parameter raised by 10%. A square-law analysis of the transition point, where both M1 and M2 are saturated, explains the curve and the shifts.

### Step 1 — Simulation deck

The nominal deck sweeps VIN in 1-mV steps and records $v_{OUT}=V(2)$; the slope is the numerical derivative:

```spice
* alsim-03-6-02 nominal
M1 2 1 0 0 NCH W=1U L=1U
M2 2 3 4 4 PCH W=1U L=1U
M3 3 3 4 4 PCH W=1U L=1U
R1 3 0 50K
VIN 1 0 DC 0
VDD 4 0 DC 5
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U LAMBDA=0.04
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U LAMBDA=0.05
.control
dc VIN 0 5 1m
let g = deriv(v(2))
meas dc vx when v(2)=2.5
.endc
.END
```

For part (b) one model value at a time is changed: `KP=121U` (n), `KP=55U` (p), `VTO=0.77` (n) or `VTO=-0.77` (p). The bulks sit at the sources, so GAMMA is irrelevant.

### Step 2 — Bias of the mirror

M3 is diode connected and saturated, so $V_{SD3}=V_{SG3}$ and

$$
\frac{5-V_{SG3}}{50\ \mathrm{k\Omega}}=\frac{K'_P}{2}\frac WL(V_{SG3}-0.7)^2(1+0.05V_{SG3})
\;\Rightarrow\;
V_{SG3}=2.138\ \mathrm V,\quad I_{REF}=57.2\ \mu\mathrm A .
$$

M2 has the same $V_{SG}$; in saturation it carries $I_{D2}=(25\ \mu\mathrm{A/V^2})(1.438\ \mathrm V)^2\,[1+0.05(5-v_{OUT})]$.

### Step 3 — Regions along the sweep

- $v_{IN}<0.7$ V: M1 is off, no current flows in M2, and $v_{OUT}=5$ V.
- Just above 0.7 V: M1 is saturated but sinks far less than the mirror current, so M2 is in nonsaturation with a small $V_{SD2}$ and $v_{OUT}$ stays near 5 V (4.92 V at 1 V, 4.25 V at 1.5 V).
- Transition: both devices saturated; the output swings fast because the two current sources only differ through $\lambda$.
- Above the transition, M1 enters nonsaturation and $v_{OUT}$ falls slowly towards 0 (0.55 V at 2 V, 0.14 V at 5 V).

### Step 4 — Transition point and gain

With both saturated, equate the currents at $v_{OUT}=2.5$ V:

$$
(55\ \mu\mathrm{A/V^2})(v_{IN}-0.7)^2(1+0.04\cdot2.5)=(25\ \mu\mathrm{A/V^2})(1.438)^2(1+0.05\cdot2.5)=58.2\ \mu\mathrm A ,
$$

so $v_{IN}-0.7=0.981$ V and $v_{IN}=1.681$ V. The small-signal gain there is $-g_{m1}/(g_{ds1}+g_{ds2})$:

$$
\begin{aligned}
g_{m1}&=K'_N\frac WL(v_{IN}-0.7)(1+\lambda_Nv_{OUT})=(110\ \mu\mathrm{A/V^2})(0.981)(1.1)=118.6\ \mu\mathrm S,\\
g_{ds1}&=\lambda_N\frac{K'_N}{2}(0.981)^2=2.12\ \mu\mathrm S,\qquad g_{ds2}=\lambda_P\frac{K'_P}{2}(1.438)^2=2.59\ \mu\mathrm S,\\
A_v&=-\frac{118.6}{2.12+2.59}=-25.2 .
\end{aligned}
$$

### Step 5 — Nominal simulated curve (part a)

![ngspice transfer curve vOUT versus vIN from 0 to 5 V with the nominal parameters, marking M1 turn-on at 0.7 V and the 2.5 V point at vIN = 1.68 V](/q/alsim-03-6-02/solution-transfer.svg)

| $v_{IN}$ | 1.0 V | 1.5 V | 1.681 V | 2.0 V | 3.0 V | 5.0 V |
|---|---|---|---|---|---|---|
| $v_{OUT}$ (ngspice) | 4.92 V | 4.25 V | 2.50 V | 0.55 V | 0.27 V | 0.14 V |

The curve is inverting, flat at 5 V below 0.7 V, falls gradually, crosses 2.5 V at $v_{IN}=1.681$ V with slope −25.2 (matching Step 4), and reaches its steepest slope of −26.0 at $v_{IN}=1.641$ V. The two bends of the curve are where M2 enters saturation ($v_{OUT}=5-1.438=3.56$ V) and where M1 leaves it ($v_{OUT}=v_{IN}-0.7\approx1.0$ V).

### Step 6 — Parameter variations (part b)

Each +10% change moves the curve sideways with almost no change of shape:

| Parameter changed | $I_{REF}$ | $v_{IN}$ at $v_{OUT}=2.5$ V | Shift |
|---|---|---|---|
| nominal | 57.2 µA | 1.681 V | — |
| $K'_N$ = 121 µA/V² | 57.2 µA | 1.635 V | −0.046 V |
| $K'_P$ = 55 µA/V² | 58.3 µA | 1.691 V | +0.010 V |
| $V_{TN}$ = 0.77 V | 57.2 µA | 1.751 V | +0.070 V |
| $\lvert V_{TP}\rvert$ = 0.77 V | 56.1 µA | 1.670 V | −0.011 V |

![Transfer curves in the transition region for the nominal parameters and for each parameter raised by 10%, with the 2.5 V crossings marked](/q/alsim-03-6-02/solution-corners.svg)

These shifts follow from Step 4. The transition needs $(v_{IN}-V_{TN})^2\propto I_{D2}/K'_N$:
- raising $K'_N$ by 10% shrinks the overdrive by $1/\sqrt{1.1}$, from 0.981 to 0.935 V;
- raising $V_{TN}$ adds its 70 mV directly;
- the p-channel parameters act only through the mirror current. In the diode, a larger $K'_P$ lowers $V_{SG3}$, so $I_{REF}$ rises by just 1.9%, and a larger $|V_{TP}|$ lowers it by 2%. The overdrive of M1 moves by half of that fraction, about 10 mV.

The n-channel parameters therefore dominate the switching point, while the self-biased reference makes the circuit insensitive to the p-channel parameters.

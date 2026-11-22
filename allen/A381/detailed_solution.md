# Detailed solution - A381

With $C_c$ removed the op amp is an open-loop two-stage comparator. Each output edge is the sum of two slewing intervals: $v_{o1}$ slews on $C_I$ with the first-stage current until it crosses the trip point of the second stage, then $v_{out}$ slews on $C_{II}$ with the net M6–M7 current until it crosses 0 V. The steady states before each input edge set the starting voltages.

### Step 1 — Trip point of the second stage

The second stage trips when M6, in saturation, carries the 95 µA sunk by M7. With $I_D=\tfrac12K'_P(W/L)(V_{SG}-|V_{TP}|)^2$ and $K'_P(W/L)_6=(50\ \mu\mathrm{A/V^2})(94)=4700\ \mu\mathrm{A/V^2}$:

$$
V_{SG6}=|V_{TP}|+\sqrt{\frac{2I_7}{K'_P(W/L)_6}}
=0.7\ \mathrm V+\sqrt{\frac{2(95\ \mu\mathrm A)}{4700\ \mu\mathrm{A/V^2}}}
=0.7\ \mathrm V+0.2011\ \mathrm V=0.901\ \mathrm V,
$$
$$
V_{TRP2}=V_{DD}-V_{SG6}=2.5-0.901=1.599\ \mathrm V .
$$

### Step 2 — Steady states before each edge

A 2.5-V differential input steers the whole tail current $I_{SS}=30\ \mu$A to one side, since full steering needs only $\sqrt{2I_{SS}/(K'_N(W/L)_1)}=0.43$ V.

- **$t<0.2\ \mu$s, $v_{G2}=-2.5$ V.** M1 carries 30 µA, M4 mirrors it into the first-stage output and M2 is off, so $v_{o1}$ rises until M4 leaves saturation: $v_{o1}=V_{DD}=2.5$ V. M6 is off and M7 holds $v_{out}=V_{SS}=-2.5$ V.
- **$0.2<t<0.4\ \mu$s, $v_{G2}=+2.5$ V.** M2 pulls $v_{o1}$ down, and it does not reach $V_{SS}$. As $v_{o1}$ falls, M2 enters the triode region and drags the tail node down with it; once the tail falls to about $-1$ V, M1 (gate at 0 V) turns on and the mirror M3–M4 feeds current back into $v_{o1}$. Equilibrium requires $I_{D4}=I_{D2}$, and $I_{D4}=I_{D1}$, $I_{D1}+I_{D2}=I_{SS}$, so $I_{D1}=I_{D2}=15\ \mu$A. M1 is saturated:

$$
V_{GS1}=V_{TN}+\sqrt{\frac{2(15\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(3)}}=0.7+0.3015=1.0015\ \mathrm V,
\qquad V_{tail}=-1.0015\ \mathrm V .
$$

M2, with $V_{GS2}=3.50$ V, is in deep triode: $V_{DS2}\approx15/(330\cdot2.80)\ \mathrm V=0.016$ V, so $v_{o1}=-0.985\ \mathrm V\approx-1.0$ V. M6 then has $V_{SG6}=3.485$ V and supplies 95 µA in triode with $V_{SD6}\approx95/(4700\cdot2.785)\ \mathrm V=0.007$ V, so $v_{out}=2.493$ V.

### Step 3 — Rising output (input edge at 0.2 µs)

**First stage.** M1 and the mirror turn off and M2 discharges $C_I$ with 30 µA from 2.5 V to $V_{TRP2}$:

$$
t_1=\frac{C_I\,\Delta V}{I_{SS}}=\frac{(0.2\ \mathrm{pF})(2.5-1.599)\ \mathrm V}{30\ \mu\mathrm A}=6.0\ \mathrm{ns}.
$$

The 30-µA discharge continues past the trip point (M1 stays off until the tail node nears $-0.7$ V), so $v_{o1}$ keeps falling at $S=I_{SS}/C_I=150\ \mathrm{V/\mu s}$.

**Second stage.** The slewing current is $I_6-I_7$, and M6's overdrive ramps up from its trip value $V_{ov0}=0.2011$ V. Taking $t=0$ at the trip crossing and M6 in saturation,

$$
I_6(t)=\tfrac12K'_P(W/L)_6\,(V_{ov0}+St)^2 ,
$$
$$
\int_0^{t_2}\bigl(I_6-I_7\bigr)\,dt
=\frac{K'_P(W/L)_6}{6S}\Bigl[(V_{ov0}+St_2)^3-V_{ov0}^3\Bigr]-I_7t_2
=C_{II}(2.5\ \mathrm V)=12.5\ \mathrm{pC},
$$

with $K'_P(W/L)_6/(6S)=(4700\ \mu\mathrm{A/V^2})/(900\ \mathrm{V/\mu s})=5.22\ \mathrm{pC/V^3}$. The root is $t_2=7.76$ ns. At that moment $v_{o1}=1.599-0.150\times7.76=0.44$ V (still above the $-1$-V floor) and $I_6=4.4$ mA; $V_{SD6}\ge2.5\ \mathrm V>V_{ov6}=1.37$ V, so M6 stays saturated. Hence

$$
t_{PLH}=6.0+7.76=13.8\ \mathrm{ns}.
$$

Simpler constant-current estimates bracket this: $I_6$ at $v_{o1}$ midway between 1.599 V and $-1.0$ V (5.3 mA) gives $t_2\approx2.4$ ns ($t_{PLH}\approx8.4$ ns), which overstates the gate drive actually reached in that time.

### Step 4 — Falling output (input edge at 0.4 µs)

**First stage.** M2 turns off; M1 takes the 30 µA and M4 charges $C_I$ from the low level $-0.985$ V to $V_{TRP2}$:

$$
t_1=\frac{(0.2\ \mathrm{pF})(1.599+0.985)\ \mathrm V}{30\ \mu\mathrm A}=17.2\ \mathrm{ns}.
$$

**Second stage.** Above $V_{TRP2}$, M6 turns off and only M7's fixed 95 µA discharges $C_{II}$:

$$
t_2=\frac{C_{II}\,\Delta V}{I_7}=\frac{(5\ \mathrm{pF})(2.493\ \mathrm V)}{95\ \mu\mathrm A}=131.2\ \mathrm{ns},
\qquad t_{PHL}=17.2+131.2=148.4\ \mathrm{ns}.
$$

### Step 5 — Comparator propagation delay and check

$$
t_p=\frac{t_{PLH}+t_{PHL}}2=\frac{13.8+148.4}2\ \mathrm{ns}=81.1\ \mathrm{ns}.
$$

| Edge | First stage | Second stage | Total |
|---|---|---|---|
| Rising output | 6.0 ns | 7.76 ns | 13.8 ns |
| Falling output | 17.2 ns | 131.2 ns | 148.4 ns |

The average is dominated by the falling output, where the 5-pF load is discharged by M7's 95-µA bias current alone; the op amp's output stage was sized for that bias, not for comparator speed. A level-1 ngspice transient of the circuit (same parameters, only $C_I$ and $C_{II}$) gives $t_{PLH}=6.06+7.71=13.8$ ns, $t_{PHL}=17.3+131.8=149.1$ ns and a low $v_{o1}$ of $-0.985$ V, in agreement with the analysis.

# Detailed solution - A380

Each edge is split into two slewing intervals: first $v_{o1}$ slews on $C_I$ with the constant current the first stage can deliver, until it crosses the trip point of the second stage; then $v_{out}$ slews on $C_{II}$ with the net current of M6 and M7, until it crosses 0 V. The steady states before each input edge fix where each slew starts.

### Step 1 — Trip point of the second stage

The second stage trips when M6, in saturation, carries exactly the 234 µA sunk by M7. With $I_D=\tfrac12K'_P(W/L)(V_{SG}-|V_{TP}|)^2$ and $K'_P(W/L)_6=(50\ \mu\mathrm{A/V^2})(38)=1900\ \mu\mathrm{A/V^2}$:

$$
V_{SG6}=|V_{TP}|+\sqrt{\frac{2I_7}{K'_P(W/L)_6}}
=0.7\ \mathrm V+\sqrt{\frac{2(234\ \mu\mathrm A)}{1900\ \mu\mathrm{A/V^2}}}
=0.7\ \mathrm V+0.4963\ \mathrm V=1.196\ \mathrm V,
$$
$$
V_{TRP2}=V_{DD}-V_{SG6}=2.5-1.196=1.304\ \mathrm V .
$$

When $v_{o1}$ is above 1.304 V, M7 wins and $v_{out}$ falls; below it, M6 wins and $v_{out}$ rises.

### Step 2 — Steady states before each edge

The tail current $I_{SS}=30\ \mu$A (M5 mirrors M8 at equal $W/L$) is steered completely by a 2.5-V input difference, since full steering needs only $|v_{G1}-v_{G2}|\ge\sqrt{2I_{SS}/(K'_N(W/L)_1)}=\sqrt{2(30\ \mu\mathrm A)/(330\ \mu\mathrm{A/V^2})}=0.43$ V.

- **$t<0.2\ \mu$s, $v_{G1}=-2.5$ V.** M1 is off, so M3 and its mirror M4 carry no current. M2 sinks current from $C_I$ with nothing to replace it, so $v_{o1}$ falls until M2 and M5 leave saturation and the current reaches zero: $v_{o1}=V_{SS}=-2.5$ V. M6 then has $V_{SG6}=5$ V and sits in the triode region supplying 234 µA; from $I_7=K'_P(W/L)_6[(V_{SG6}-|V_{TP}|)V_{SD}-V_{SD}^2/2]$, $V_{SD6}\approx234/(1900\cdot4.3)\ \mathrm V=0.029$ V, so $v_{out}=2.471$ V.
- **$0.2<t<0.4\ \mu$s, $v_{G1}=+2.5$ V.** M1 takes all 30 µA, M4 sources 30 µA into $C_I$ and M2 is off, so $v_{o1}$ rises until M4 leaves saturation: $v_{o1}=V_{DD}=2.5$ V. M6 is off and M7 pulls the output to $v_{out}=V_{SS}=-2.5$ V.

### Step 3 — Falling output (input edge at 0.2 µs)

**First stage.** M4 charges $C_I$ with the mirrored 30 µA from $-2.5$ V up to $V_{TRP2}$:

$$
t_{1}=\frac{C_I\,\Delta V}{I_{SS}}=\frac{(0.2\ \mathrm{pF})(1.304+2.5)\ \mathrm V}{30\ \mu\mathrm A}=25.4\ \mathrm{ns}.
$$

**Second stage.** Once $v_{o1}$ passes $V_{TRP2}$, M6 turns off and only M7 is left; its current is fixed at 234 µA, so

$$
t_{2}=\frac{C_{II}\,\Delta V}{I_7}=\frac{(5\ \mathrm{pF})(2.471\ \mathrm V)}{234\ \mu\mathrm A}=52.8\ \mathrm{ns},
\qquad t_{PHL}=t_1+t_2=78.2\ \mathrm{ns}.
$$

The output stage dominates because its sink current is fixed while its load is 25 times larger than $C_I$.

### Step 4 — Rising output (input edge at 0.4 µs)

**First stage.** M1 and the mirror turn off, and M2 discharges $C_I$ with 30 µA from 2.5 V down to $V_{TRP2}$:

$$
t_{1}=\frac{(0.2\ \mathrm{pF})(2.5-1.304)\ \mathrm V}{30\ \mu\mathrm A}=7.98\ \mathrm{ns}.
$$

**Second stage.** Now the slewing current is $I_6-I_7$, and $I_6$ is not constant: $v_{o1}$ keeps falling at the first-stage slew rate $S=I_{SS}/C_I=150\ \mathrm{V/\mu s}$, so M6's overdrive ramps up from its trip value $V_{ov0}=0.4963$ V. Taking $t=0$ at the trip crossing, M6 in saturation gives

$$
I_6(t)=\tfrac12K'_P(W/L)_6\,(V_{ov0}+St)^2 .
$$

The output reaches 0 V when the net charge delivered equals $C_{II}\Delta V$:

$$
\int_0^{t_2}\bigl(I_6-I_7\bigr)\,dt
=\frac{K'_P(W/L)_6}{6S}\Bigl[(V_{ov0}+St_2)^3-V_{ov0}^3\Bigr]-I_7t_2
=C_{II}(2.5\ \mathrm V)=12.5\ \mathrm{pC}.
$$

With $K'_P(W/L)_6/(6S)=(1900\ \mu\mathrm{A/V^2})/(900\ \mathrm{V/\mu s})=2.11\ \mathrm{pC/V^3}$, the numerical root is $t_2=9.50$ ns. At that moment $V_{ov6}=0.4963+0.150\times9.50=1.92$ V, i.e. $v_{o1}=-0.12$ V and $I_6=3.5$ mA; $V_{SD6}\ge2.5\ \mathrm V>V_{ov6}$ throughout, so M6 stays saturated as assumed. Hence

$$
t_{PLH}=7.98+9.50=17.5\ \mathrm{ns}.
$$

A cruder estimate that evaluates $I_6$ with $v_{o1}$ halfway between 1.304 V and $-2.5$ V ($I_6\approx5.5$ mA, $t_2\approx2.4$ ns) assumes far more gate drive than is reached: in 9.5 ns $v_{o1}$ falls only 1.4 V, and in 2.4 ns only 0.36 V.

### Step 5 — Comparator propagation delay and check

$$
t_p=\frac{t_{PHL}+t_{PLH}}2=\frac{78.2+17.5}2\ \mathrm{ns}=47.8\ \mathrm{ns}\approx48\ \mathrm{ns}.
$$

| Edge | First stage | Second stage | Total |
|---|---|---|---|
| Falling output | 25.4 ns | 52.8 ns | 78.2 ns |
| Rising output | 7.98 ns | 9.50 ns | 17.5 ns |

The falling output is slow because $v_{o1}$ starts from $V_{SS}$, a 3.8-V swing on $C_I$, and because the output then slews with only 234 µA.

A level-1 ngspice transient of the full circuit (same $K'$, $V_T$, no capacitances other than $C_I$, $C_{II}$) gives $t_{PLH}=8.0+9.3=17.4$ ns, confirming Step 4, and $t_{PHL}=16.2+51.1=67.3$ ns. The shorter first-stage time on the falling-output edge comes from an effect outside the slewing model: while $v_{o1}<-0.7$ V, M2 (gate at 0 V) conducts in reverse from the raised tail node into $C_I$ and pulls $v_{o1}$ up faster than 30 µA alone.

# Detailed solution - grsim-10-11

In a translinear loop, the sum of $V_{BE}=V_T\ln(I_C/I_S)$ around a closed path with equal numbers of junctions in each direction gives a product of currents, independent of $V_T$ and $I_S$. The law $I_o=KI_i^{3/2}$ is equivalent to $I_o^2I_B=I_i^3$ with a fixed current $I_B$: three junctions carry $I_i$ on one side of the loop, and on the other side two carry $I_o$ and one carries $I_B$. The design is built around that loop, the bias current is chosen to give $I_o=100\ \mu$A at $I_i=100\ \mu$A, and the bias conditions are checked. ngspice then verifies the law and shows the effects of $\beta$, $r_b$ and $r_e$.

### Step 1 — Required law

$$
I_o^2I_B=I_i^3\ \Rightarrow\ I_o=\frac{I_i^{3/2}}{\sqrt{I_B}},\qquad K=\frac{1}{\sqrt{I_B}} .
$$

$I_o=100\ \mu$A at $I_i=100\ \mu$A requires $I_B=100\ \mu$A, i.e. $K=100\ \mathrm{A^{-1/2}}$.

### Step 2 — Circuit

All transistors are identical npn devices.

<!-- diagram: diagram-01.cir -->

- **Input stack.** $Q_1$, $Q_2$, $Q_3$ are diode-connected and stacked from the input node $x$ to ground; $I_i$ flows into $x$. The input node sits at $3V_{BE}\approx2.33$ V, which satisfies the input bias requirement ($\ge V_{BE}$).
- **Follower.** $Q_4$ has its base at $x$, its collector at $V_{CC}$, and its emitter (node $w$) loaded by the current sink $I_B$. The sink is the mirror $Q_7$ (diode) and $Q_8$, fed from $V_{CC}$ through $R_B$. For 100 µA, $R_B=(5-0.78)\ \mathrm{V}/100\ \mu\mathrm{A}\approx42$ kΩ.
- **Output.** $Q_5$ has its base at $w$ and its emitter into the diode-connected $Q_6$ to ground; $I_o$ is $Q_5$'s collector current.

Around the loop from ground up the stack to $x$, then down through $Q_4$, $Q_5$, $Q_6$ back to ground:

$$
V_{BE1}+V_{BE2}+V_{BE3}=V_{BE4}+V_{BE5}+V_{BE6}\ \Rightarrow\ \frac{I_i^3}{I_S^3}=\frac{I_BI_o^2}{I_S^3}\ \Rightarrow\ I_o=\frac{I_i^{3/2}}{\sqrt{I_B}} .
$$

$I_S$ cancels because each side has three junctions.

**Output bias.** At balance every junction carries 100 µA and $V_{BE}=(26\ \mathrm{mV})\ln(100\ \mu\mathrm{A}/10^{-17}\ \mathrm{A})=0.778$ V. Node $w$ (the base of $Q_5$) is at $2V_{BE}=1.556$ V, so with the output held at $2V_{BE}$, $Q_5$ has $V_{CB}\approx0$ and stays forward active. A lower output voltage would saturate it. The whole circuit needs only about 2.3 V, well within 5 V.

### Step 3 — Expected errors from finite $\beta$

- **Low currents.** $Q_4$'s base current ($\approx I_B/\beta=1\ \mu$A) is taken from $I_i$, which matters when $I_i$ is small (10 % at 10 µA).
- **High currents.** $Q_5$'s base current $I_o/\beta$ is supplied by $Q_4$ in addition to $I_B$, so $Q_4$ carries $I_B+I_o/\beta$, and $I_o\propto1/\sqrt{I_{C4}}$ falls.

With $\beta=100$ these give 2.68 / 15.5 / 97.1 / 499 / 2766 µA at $I_i$ = 10 / 30 / 100 / 300 / 1000 µA, compared with the ideal 3.16 / 16.4 / 100 / 520 / 3162 µA. Reducing $I_B$ to about 94.2 µA ($R_B\approx44$ kΩ) restores $I_o=100\ \mu$A at the design point.

### Step 4 — Expected effect of $r_b$ and $r_e$

With ohmic resistances, each junction drop rises by about $I_C(r_e+r_b/\beta)=I_C(2+2)\ \Omega$. At 100 µA all six junctions carry nearly the same current, so these drops cancel around the loop. At $I_i=1$ mA, however, the three input junctions add about $3(1\ \mathrm{mA})(4\ \Omega)=12$ mV, while $Q_5$ and $Q_6$ carry about 2.4 mA and add about $2(2.4\ \mathrm{mA})(4\ \Omega)=19$ mV. The net 7–8 mV extra on the output side lowers $I_o$ by about $e^{-7.7\ \mathrm{mV}/(2V_T)}\approx0.86$, i.e. by about 13 %. At low currents the drops are negligible.

### Step 5 — SPICE verification

```spice
* grsim-10-11 translinear Io = Ii^(3/2)/sqrt(IB)
.options temp=28.57 tnom=28.57
.model qn npn is=1e-17 bf=100
* for the last case: .model qn npn is=1e-17 bf=100 rb=200 re=2
VCC vcc 0 5
Ii vcc x 100u
Q1 x x n2 qn
Q2 n2 n2 n3 qn
Q3 n3 n3 0 qn
Q4 vcc x w qn
Q5 o w n6 qn
Q6 n6 n6 0 qn
Q8 w g7 0 qn
Q7 g7 g7 0 qn
RB vcc g7 43.95k
Vo o 0 1.556
.dc Ii 10u 1m 10u
.end
```

The output is held at $2V_{BE}=1.556$ V by `Vo`, whose current is $I_o$.

| $I_i$ (µA) | 10 | 30 | 100 | 300 | 1000 |
|---|---|---|---|---|---|
| Ideal law | 3.16 | 16.4 | 100 | 520 | 3162 |
| $\beta=10^6$ (sim) | 3.15 | 16.4 | 99.7 | 518 | 3154 |
| $\beta=100$, $R_B=42$ kΩ (sim) | 2.70 | 15.6 | 97.8 | 503 | 2780 |
| $\beta=100$, $R_B=43.95$ kΩ (sim) | 2.78 | 16.0 | 100.0 | 514 | 2824 |
| … plus $r_b=200\ \Omega$, $r_e=2\ \Omega$ (sim) | 2.77 | 15.9 | 100.0 | 505 | 2449 |

The operating point confirms the bias: input node 2.33 V, $Q_5$'s base at 1.556 V, and $Q_6$ at 0.778 V.

![Log-log plot of Io versus Ii from 10 µA to 1 mA: the simulated curve with β = 100, trimmed IB and rb, re lies on the slope-1.5 ideal line around 100 µA and falls slightly below it at both ends](/q/grsim-10-11/solution-law.svg)

![Io as a percentage of the ideal law versus log Ii: the untrimmed β = 100 curve peaks at about 98 %; the trimmed curve reaches 100 % near 100 µA and falls to about 88 % at 10 µA and 89 % at 1 mA; with rb and re the high-current end drops to 77 %](/q/grsim-10-11/solution-error.svg)

The simulation confirms the 3/2-power law over the two decades. With ideal $\beta$, $I_o$ is within 0.3 % of the law everywhere. With $\beta=100$:

- $I_o$ is 2.2 % low at the design point until $I_B$ is trimmed to 94.2 µA.
- The error then grows at both ends, as predicted in Step 3: about 12 % at 10 µA (input base current) and 11 % at 1 mA (output base current).
- Adding $r_b$ and $r_e$ changes nothing near 100 µA, where the ohmic drops cancel, but lowers $I_o$ by a further 13 % at 1 mA (2449 versus 2824 µA), in agreement with Step 4.

The circuit is therefore accurate over about a decade around the balanced point.

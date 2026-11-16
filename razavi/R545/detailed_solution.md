# Detailed solution - R545

**Approach.** At power-on every transistor is off, so the two internal nodes see only parasitic capacitances. List them (PMOS bulks at $V_{DD}$, NMOS bulks at ground), use charge conservation to find how far each node jumps when $V_{DD}$ steps up, and check whether either jump turns a transistor on. Once any device conducts, the loop's positive feedback finishes the start-up.

### Step 1 — The degenerate state and what the supply step must do

Call the gate/drain node of $M_1$ **N** (gates of $M_1$, $M_2$; drains of $M_1$, $M_4$) and the gate/drain node of $M_3$ **P** (gates of $M_3$, $M_4$; drains of $M_3$, $M_2$). The loop has two self-consistent states:

1. The desired state, in which (neglecting body effect and channel-length modulation)
$$I_{out} = I_{REF} = \frac{2}{\mu_nC_{ox}(W/L)_N}\cdot\frac{1}{R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 .$$
2. The **degenerate state**, with zero current in every branch: $V_N \le V_{THN}$ and $V_{DD} - V_P \le |V_{THP}|$. Zero current satisfies every KCL equation, so nothing forces the circuit out of it.

Before power-on every node is at 0 V. If $V_{DD}$ rises quickly by $\Delta V$ (its final value), the circuit leaves the zero-current state only if, right after the step, **either**

- (a) $V_N > V_{THN}$: $M_1$ and $M_2$ turn on; **or**
- (b) $V_{SG3,4} = V_{DD} - V_P > |V_{THP}|$: $M_3$ and $M_4$ turn on.

Because the n-wells jump with $V_{DD}$ while the p-substrate stays at ground, every junction or gate–bulk capacitance of a **PMOS** is a capacitor to $V_{DD}$, and every one of an **NMOS** is a capacitor to ground.

### Step 2 — Capacitances at nodes N and P

With all devices off, N is connected only through these capacitances ($C_{GD1}$ is shorted by the diode connection):

| Capacitance | From N to | Physical origin | Effect of the $V_{DD}$ step |
|---|---|---|---|
| $C_{GS1}$, $C_{GB1}$ | ground | gate of $M_1$ over its source and substrate | holds N down |
| $C_{DB1}$ | ground | n+ drain of $M_1$ in the p-substrate | holds N down |
| $C_{GS2}$, $C_{GB2}$ | ground (source of $M_2$ is grounded through $R_S$) | gate of $M_2$ | holds N down |
| $C_{DB4}$ | $V_{DD}$ | p+ drain of $M_4$ inside the n-well at $V_{DD}$ | **lifts N** |
| $C_{GD4}$ | P | overlap of $M_4$'s gate (at P) with its drain (at N) | lifts N if P rises |
| $C_{GD2}$ | P | overlap of $M_2$'s gate (at N) with its drain (at P) | lifts N if P rises |

and P through these:

| Capacitance | From P to | Physical origin | Effect of the $V_{DD}$ step |
|---|---|---|---|
| $C_{GS3}$, $C_{GS4}$ | $V_{DD}$ | gates of $M_3$, $M_4$ over their sources at $V_{DD}$ | P follows $V_{DD}$, keeps $M_3$, $M_4$ **off** |
| $C_{GB3}$, $C_{GB4}$ | $V_{DD}$ | gates over the n-well | same |
| $C_{DB3}$ | $V_{DD}$ | p+ drain of $M_3$ in the n-well | same |
| $C_{DB2}$ | ground | n+ drain of $M_2$ in the p-substrate | **makes P lag** $V_{DD}$ |
| $C_{GD2}$, $C_{GD4}$ | N | gate–drain overlaps | pull P down if N stays low |

**Key observation.** The diode-connected devices put their large capacitances where they keep the circuit *off*: $M_1$ ties N to ground, and $M_3$ ties P to $V_{DD}$, so $V_{SG3}$ stays near zero. Start-up must come from the "crossed" parasitics of the mirror devices: the **drain–well junction $C_{DB4}$ of $M_4$**, which couples $V_{DD}$ directly into N; the **drain–substrate junction $C_{DB2}$ of $M_2$**, which ties P to ground; and the **gate–drain overlaps $C_{GD2}$ and $C_{GD4}$**, which link N and P.

### Step 3 — How far the nodes jump: charge conservation

Group the capacitances into five lumps:

$$
\begin{aligned}
C_{NV} &= C_{DB4} &&\text{(N to } V_{DD}),\\
C_{NG} &= C_{GS1} + C_{GB1} + C_{DB1} + C_{GS2} + C_{GB2} &&\text{(N to ground)},\\
C_X &= C_{GD2} + C_{GD4} &&\text{(N to P)},\\
C_{PV} &= C_{GS3} + C_{GS4} + C_{GB3} + C_{GB4} + C_{DB3} &&\text{(P to } V_{DD}),\\
C_{PG} &= C_{DB2} &&\text{(P to ground)}.
\end{aligned}
$$

During a fast step they form a capacitor bridge: N connects to $V_{DD}$ through $C_{NV}$ and to ground through $C_{NG}$, P connects to $V_{DD}$ through $C_{PV}$ and to ground through $C_{PG}$, and $C_X$ links N and P.

<!-- diagram: diagram-01.cir -->

Assume the step is fast compared with any leakage or subthreshold current, so no charge leaves N or P. With the nodes rising by $\Delta V_N$ and $\Delta V_P$, the net charge change at each node is zero:

$$
\begin{aligned}
\text{node N:}\quad & C_{NV}(\Delta V_N - \Delta V) + C_{NG}\,\Delta V_N + C_X(\Delta V_N - \Delta V_P) = 0,\\
\text{node P:}\quad & C_{PV}(\Delta V_P - \Delta V) + C_{PG}\,\Delta V_P + C_X(\Delta V_P - \Delta V_N) = 0 .
\end{aligned}
$$

With the total node capacitances $\Sigma_N = C_{NV} + C_{NG} + C_X$ and $\Sigma_P = C_{PV} + C_{PG} + C_X$:

$$
\begin{aligned}
\Sigma_N\,\Delta V_N - C_X\,\Delta V_P &= C_{NV}\,\Delta V,\\
-C_X\,\Delta V_N + \Sigma_P\,\Delta V_P &= C_{PV}\,\Delta V .
\end{aligned}
$$

With the determinant $D = \Sigma_N\Sigma_P - C_X^2$, Cramer's rule gives

$$
\begin{aligned}
\Delta V_N &= \Delta V\,\frac{C_{NV}\Sigma_P + C_XC_{PV}}{D},\\
\Delta V_P &= \Delta V\,\frac{C_{PV}\Sigma_N + C_XC_{NV}}{D}.
\end{aligned}
$$

For the PMOS devices the quantity that matters is $V_{SG3,4} = \Delta V - \Delta V_P$:

$$
\begin{aligned}
\Delta V - \Delta V_P &= \Delta V\,\frac{D - C_{PV}\Sigma_N - C_XC_{NV}}{D}\\
&= \Delta V\,\frac{\Sigma_N(C_{PG} + C_X) - C_X^2 - C_XC_{NV}}{D}\\
&= \Delta V\,\frac{C_{PG}\Sigma_N + C_XC_{NG}}{D},
\end{aligned}
$$

using $\Sigma_P - C_{PV} = C_{PG} + C_X$ in the second line and $\Sigma_N C_X - C_X^2 - C_XC_{NV} = C_XC_{NG}$ in the third.

- $\Delta V_N$ grows with $C_{NV} = C_{DB4}$ and with $C_XC_{PV}$: P follows the supply and drags N up through the overlaps $C_{GD2}$, $C_{GD4}$. If $\Delta V_N > V_{THN}$, condition (a) is met.
- $V_{SG3,4}$ grows with $C_{PG} = C_{DB2}$ and with $C_XC_{NG}$: N, held low by its capacitance to ground, holds P down through the overlaps. If $\Delta V - \Delta V_P > |V_{THP}|$, condition (b) is met.
- If $C_{NV}$, $C_X$ and $C_{PG}$ were all zero, then $\Delta V_N = 0$ and $\Delta V_P = \Delta V$, and the circuit stays off.

### Step 4 — An illustrative example

No device sizes are given, so these values only show orders of magnitude: $\Delta V = 3$ V, $V_{THN} \approx |V_{THP}| \approx 0.7$ V, $C_{NV} = 10$ fF, $C_{NG} = 100$ fF, $C_X = 5$ fF and $C_{PV} = 60$ fF.

**Case 1: $C_{PG} = 10$ fF.**

$$
\begin{aligned}
\Sigma_N &= 10 + 100 + 5 = 115\ \mathrm{fF}, \qquad \Sigma_P = 60 + 10 + 5 = 75\ \mathrm{fF},\\
D &= (115)(75) - 5^2 = 8600\ \mathrm{fF^2},\\
\Delta V_N &= 3\ \mathrm{V}\times\frac{(10)(75) + (5)(60)}{8600} = 3\ \mathrm{V}\times\frac{1050}{8600} = 0.37\ \mathrm{V} < V_{THN},\\
V_{SG3,4} &= 3\ \mathrm{V}\times\frac{(10)(115) + (5)(100)}{8600} = 3\ \mathrm{V}\times\frac{1650}{8600} = 0.58\ \mathrm{V} < |V_{THP}|.
\end{aligned}
$$

Neither condition is met, so this circuit stays off.

**Case 2: $C_{PG} = 30$ fF** (for example a wider $M_2$, i.e. a larger $K$, with a larger drain area).

$$
\begin{aligned}
\Sigma_P &= 60 + 30 + 5 = 95\ \mathrm{fF}, \qquad D = (115)(95) - 25 = 10900\ \mathrm{fF^2},\\
V_{SG3,4} &= 3\ \mathrm{V}\times\frac{(30)(115) + (5)(100)}{10900} = 3\ \mathrm{V}\times\frac{3950}{10900} = 1.09\ \mathrm{V} > |V_{THP}|.
\end{aligned}
$$

Now $M_3$ and $M_4$ turn on for a moment and $M_4$ pumps charge into N. Whether a given layout starts thus depends on capacitance *ratios*, which is why the behaviour is "sometimes".

### Step 5 — Positive feedback completes the start-up

Once a kick makes current flow ($M_4$ injecting current into N in case (b), or $M_2$ drawing current out of P in case (a)), it circulates:

1. Current into N raises $V_N$, so $M_1$ and $M_2$ conduct.
2. At small currents the drop across $R_S$ is negligible, so $M_2$, $K$ times wider than $M_1$ at the same $V_{GS}$, carries about $K$ times the current of $M_1$ and pulls it out of P.
3. $M_3$ conducts this current, and $M_4$ copies it (1:1) back into N.

The current is multiplied by about $K > 1$ per trip around the loop, so it grows. As it grows, the drop $I_{out}R_S$ degenerates $M_2$ and the multiplication falls, until the loop returns exactly the current it received, $I_{out} = I_{REF}$: the desired operating point of Step 1. There the loop gain is below one, so this point is stable.

### Step 6 — Why this start-up cannot be relied on

Step 3 assumes a step fast enough that no charge leaks away. The coupling current through a capacitor is $i = C\,dV_{DD}/dt$; for a slow supply ramp, for example 3 V in 1 ms through a 50-fF capacitor,

$$i = (50\ \mathrm{fF})\times\frac{3\ \mathrm{V}}{1\ \mathrm{ms}} = 150\ \mathrm{pA},$$

which is comparable to the leakage and subthreshold currents. These (through the diode-connected $M_1$ and $M_3$ above all) pull N back toward ground and P back toward $V_{DD}$ while the supply rises, so no kick develops. The outcome also changes with process corners, temperature and layout, so a real design still needs an explicit start-up circuit, verified by a slow dc sweep of $V_{DD}$ in simulation.

### Result

At power-on all four transistors are off, and nodes N (gates of $M_1$, $M_2$; drains of $M_1$, $M_4$) and P (gates of $M_3$, $M_4$; drains of $M_2$, $M_3$) are set by capacitive division:

- **Paths that lift N toward $V_{DD}$:** the drain–n-well junction capacitance $C_{DB4}$ of $M_4$ (its p+ drain sits in the well tied to $V_{DD}$), and the gate–drain overlaps $C_{GD4}$ and $C_{GD2}$ from node P, which rises with the supply. If these dominate N's capacitance to ground ($C_{GS1}$, $C_{GB1}$, $C_{DB1}$, $C_{GS2}$, $C_{GB2}$), N jumps above $V_{THN}$, $M_1$ and $M_2$ conduct, and $M_2$ pulls P down.
- **Paths that hold P below $V_{DD}$:** the drain–substrate junction capacitance $C_{DB2}$ of $M_2$ (to ground) and the overlaps $C_{GD2}$, $C_{GD4}$ to the low node N. They compete with $C_{GS3}$, $C_{GS4}$, $C_{GB3,4}$ and $C_{DB3}$, which tie P to $V_{DD}$ and keep $M_3$, $M_4$ off. If the ground-referred part is large enough, $|V_{GS3,4}| > |V_{THP}|$ momentarily and $M_4$ injects current into N.
- Either kick starts the positive-feedback loop (current gain about $K$ at low current), which then settles at the intended operating point.
- The mechanism depends on the supply ramp rate and on capacitance ratios, so it is unreliable. An explicit start-up circuit is still required.

**Common mistake.** Saying that $C_{GS3}$ and $C_{GS4}$ couple the $V_{DD}$ step to the PMOS gates and so turn $M_3$ and $M_4$ on. They connect the gates to the *sources* at $V_{DD}$, so they keep $V_{SG3,4} \approx 0$ and act *against* start-up; only ground-referred capacitance at P ($C_{DB2}$, or $C_{GD2,4}$ toward the low node N) can create a gate–source voltage on $M_3$ and $M_4$.

**Common mistake.** Getting the bulk connections wrong. The drain junction of $M_4$ couples N to $V_{DD}$ (the n-well is tied to $V_{DD}$), while that of $M_2$ couples P to ground (the p-substrate is grounded); swapping them reverses the conclusion.

**Common mistake.** Concluding either that the circuit "can never start without a start-up device" or that capacitive coupling guarantees start-up. The degenerate state is a valid solution, but a fast supply edge can kick the loop out of it; the kick depends on ramp rate, layout and process, so it is real but unreliable.

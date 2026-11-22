# Detailed solution - A377

In dc steady state no current flows into the capacitance at $v_{o1}$, so KCL there forces the mirror output current $i_4$ to equal the current $i_2$ of M2. The mirror copies $i_1$ as long as M4 is saturated. Whichever input device would carry more current therefore drives $v_{o1}$ toward a rail until a device leaves saturation and the currents balance. The output stage then follows: M6 is off when $v_{o1}$ is high, so M7 pulls $v_{out}$ to $V_{SS}$; M6 is strongly on (active region) when $v_{o1}$ is low, giving $v_{out}$ near $V_{DD}$.

### Step 1 — Useful values

With the square law and the device sizes of [Fig. 1]:

$$
V_{SD4}(\mathrm{sat})\big|_{15\ \mu\mathrm A}=\sqrt{\frac{2(15\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(4.5)}}=0.37\ \mathrm V,
\qquad
V_{GS1}\big|_{15\ \mu\mathrm A}=0.7+\sqrt{\frac{2(15\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(3)}}=1.00\ \mathrm V,
$$

and $V_{DS2}(\mathrm{sat})=0.30$ V. When M6 is on in the active region with M7 sinking $I_7=234\ \mu$A, the output high level is

$$
v_{out}=V_{DD}-V_{ov6}\Bigl[1-\sqrt{1-\frac{2I_7}{\beta_6V_{ov6}^2}}\Bigr],\qquad V_{ov6}=V_{DD}-v_{o1}-|V_{TP}|,\quad\beta_6=1900\ \mu\mathrm{A/V^2}.
$$

For $v_{o1}=-1.0$ V: $V_{ov6}=2.8$ V and $v_{out}=2.5-2.8\,[1-\sqrt{1-0.0314}]=2.46$ V; for $v_{o1}=-0.7$ V, 2.45 V.

### Step 2 — M1 carries more than M2: $v_{o1}$ high, $v_{out}$ low

This covers (1), (2), (7) and (8). M4 copies $i_1>i_2$ into the $v_{o1}$ node, more than M2 sinks, so $v_{o1}$ rises until M4 leaves saturation and its current drops to $i_2$; if $i_2=0$, $v_{o1}$ rises to $V_{DD}$. In both cases

$$
V_{DD}-V_{SD4}(\mathrm{sat})<v_{o1}\le V_{DD}\quad(2.13\text{–}2.5\ \mathrm V),
$$

so $V_{SG6}<0.37\ \mathrm V<|V_{TP}|$, M6 is off and M7 pulls the output to $v_{out}=V_{SS}=-2.5$ V.

### Step 3 — M2 would carry more than M1: $v_{o1}$ low, $v_{out}$ high

This covers (3), (5) and (6). $v_{o1}$ falls until M2 enters the triode region. In steady state $i_2=i_4=i_1$, and with $i_1+i_2=I_{SS}$ both carry 15 µA. The common source sits one $V_{GS}(15\ \mu\mathrm A)=1.0$ V below the lower of the two gates (0 V), i.e. at $V_S\approx-1.0$ V, and M2 in triode puts $v_{o1}$ just above it:

$$
V_S<v_{o1}<V_S+V_{DS2}(\mathrm{sat})\quad(\approx-1.0\ \text{to}\ -0.7\ \mathrm V),\qquad v_{out}\approx2.45\ \mathrm V .
$$

In (6), with $V_{G1}=0$ fixed, M1 pins the source node at about −1.0 V however high $v_{G2}$ goes (M5 stays saturated), and M2 is in deep triode carrying 15 µA, so $v_{o1}\approx-1.0$ V and $v_{out}\approx2.46$ V; the state $i_1=0$, $i_2=I_{SS}$ exists only during the transient.

### Step 4 — M1 cut off: condition (4)

With $v_{G1}=V_{SS}$, M1 is off, so $i_1=0$ and the mirror delivers nothing to $v_{o1}$. The capacitance at $v_{o1}$ discharges through M2 and M5 until M5 leaves saturation and the current stops: $v_{o1}\to V_{SS}\approx-2.5$ V. Then $V_{ov6}=4.3$ V and

$$
v_{out}=2.5-4.3\Bigl[1-\sqrt{1-\frac{468\ \mu\mathrm A}{(1900\ \mu\mathrm{A/V^2})(18.49\ \mathrm{V^2})}}\Bigr]\approx2.47\ \mathrm V .
$$

(An ideal 30 µA tail source has no dc solution here; the physical limit is that M5 loses its current.)

### Step 5 — Summary

| Condition | $v_{o1}$ | $v_{out}$ |
|---|---|---|
| (1) $v_{G1}$ slightly above $V_{G2}$ | 2.13–2.5 V | −2.5 V |
| (2) $v_{G1}\gg V_{G2}$ | ≈ 2.5 V | −2.5 V |
| (3) $v_{G1}$ slightly below $V_{G2}$ | ≈ −1.0 to −0.7 V | ≈ 2.45 V |
| (4) $v_{G1}\ll V_{G2}$ | → −2.5 V | ≈ 2.47 V |
| (5) $v_{G2}$ slightly above $V_{G1}$ | ≈ −1.0 to −0.7 V | ≈ 2.45 V |
| (6) $v_{G2}\gg V_{G1}$ | ≈ −1.0 V | ≈ 2.46 V |
| (7) $v_{G2}$ slightly below $V_{G1}$ | 2.13–2.5 V | −2.5 V |
| (8) $v_{G2}\ll V_{G1}$ | ≈ 2.5 V | −2.5 V |

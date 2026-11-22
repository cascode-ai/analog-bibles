# Detailed solution - A364

A regular n-channel pair works only for common-mode inputs about $V_T+2V_{ON}$ above ground, while a depletion pair ($V_T=-1$ V) works from below ground up to about $V_{DD}-V_{ON}-1$ V. With small saturation voltages the two ranges overlap and together cover 0–2 V. To keep the total transconductance constant, a single tail current is steered to whichever pair is in its range; the two pairs, both n-channel, are recombined by tying their drains together at the folding nodes of a folded cascode, which produces the single-ended signal for the second stage. The body effect is neglected in the sizing and discussed at the end.

### Step 1 — ICMR of each pair

With current-source loads holding the drains at $V_{DD}-V_{SD}(\mathrm{sat})_{load}$, the limits of an n-channel pair are

$$
v_{icm}(\min)=V_{DS}(\mathrm{sat})_{sink}+V_T+V_{ON,in},\qquad
v_{icm}(\max)=V_{DD}-V_{SD}(\mathrm{sat})_{load}+V_T .
$$

Choose 0.08 V for all three saturation voltages. Then:

| Pair | $v_{icm}(\min)$ | $v_{icm}(\max)$ |
|---|---|---|
| Regular ($V_T=0.7$ V) | $0.08+0.7+0.08=0.86$ V | $2-0.08+0.7=2.62$ V |
| Depletion ($V_T=-1$ V) | $0.08-1+0.08=-0.84$ V | $2-0.08-1=0.92$ V |

The regular pair covers 0.86 V to beyond the upper rail, the depletion pair from below ground to 0.92 V; they overlap between 0.86 and 0.92 V. Covering 0–2 V requires the depletion pair's upper limit to reach the regular pair's lower limit, $V_{DD}-V_{SD}(\mathrm{sat})_{load}+V_{T,dep}\ge V_{DS}(\mathrm{sat})_{sink}+V_{T,reg}+V_{ON,in}$, i.e.

$$
V_{ON,in}+V_{DS}(\mathrm{sat})_{sink}+V_{SD}(\mathrm{sat})_{load}\le V_{DD}+V_{T,dep}-V_{T,reg}=0.3\ \mathrm V,
$$

which the choice $3\times0.08=0.24$ V satisfies.

### Step 2 — Device sizes

Use a tail current $I_T=20\ \mu$A, i.e. 10 µA per input device when a pair is active. With $W/L=2I_D/(K'V_{ON}^2)$ and $V_{ON}=0.08$ V:

| Device | Current | W/L |
|---|---|---|
| Input devices of both pairs | 10 µA | $2(10)/[(110)(0.0064)]\approx28$ |
| Tail sink M5 | 20 µA | ≈ 57 |
| Steering transistor MB | 20 µA | ≈ 57 |
| p-channel folding sources M3, M4 | 20 µA | $2(20)/[(50)(0.0064)]=125$ |

The transconductance of the active pair is

$$
g_{m(eq)}=\sqrt{K'_N(W/L)I_T}=\sqrt{(110\ \mu\mathrm{A/V^2})(28)(20\ \mu\mathrm A)}\approx248\ \mu\mathrm S .
$$

### Step 3 — Steering the tail current for constant $g_m$

M5 sinks $I_T$ from the common-source node of the regular pair. That node is also the source of a regular n-channel steering transistor MB, whose gate is held at $V_{REF}\approx0.9$ V (inside the overlap) and whose drain is the common-source node of the depletion pair; MB is the depletion pair's current sink.

- For $v_{icm}\gtrsim V_{REF}+0.1$ V the regular pair's gates are higher than MB's gate, so the regular pair takes all of $I_T$, MB is off, and the depletion pair carries no current.
- For $v_{icm}\lesssim V_{REF}-0.1$ V MB takes all of $I_T$ and feeds it to the depletion pair; the regular pair is off.

Exactly one pair carries the constant $I_T$, so $g_{m(eq)}\approx248\ \mu$S everywhere except in the ±0.1 V transition, where both pairs conduct and $g_{m(eq)}$ rises by at most $\sqrt2$ (both at $I_T/2$). A larger MB narrows the transition. Checks: with MB carrying $I_T$, the tail node is at $V_{REF}-(0.7+0.08)=0.12\ \mathrm V>V_{DS5}(\mathrm{sat})$; MB's drain is at $v_{icm}-V_{GS,dep}=v_{icm}+0.92$ V, so MB stays saturated.

### Step 4 — Recombining the drain currents

Tie the drains of corresponding devices together: regular M1 with depletion MD1 at node A, and M2 with MD2 at node B. Both pairs are n-channel and driven by the same inputs, so their signal currents add in phase. Nodes A and B are the folding nodes of a folded cascode:

- p-channel current sources M3, M4 (20 µA each) from $V_{DD}$;
- p-channel cascodes M6, M7 (10 µA each), gates biased at about $V_{DD}-0.08\ \mathrm V-V_{SG6}$;
- an n-channel cascode current mirror M8–M11 that converts the two branch currents into a single-ended output at the drain of M7/M9, which drives the gate of the common-source second stage (current-source load, Miller compensation).

<!-- diagram: diagram-01.cir -->

The folding nodes sit at $V_{DD}-0.08=1.92$ V, which the depletion pair needs: its drains must stay at least $v_{icm}+1$ V high, up to $v_{icm}=0.92$ V. Because the total tail current is constant, the cascode branch currents do not change with $v_{icm}$. A diode-connected current-mirror load would not work: it would hold the drains near $V_{DD}-|V_{TP}|-V_{ON}\approx1.2$ V and cut the depletion pair's range to $v_{icm}\lesssim0.2$ V.

### Step 5 — Effect of the body effect

With the bulk at ground, the body effect raises the regular pair's lower limit by only about 0.02 V. For the depletion devices, whose sources rise to about 1.6 V at high $v_{icm}$, the threshold becomes about −0.74 V, which extends their upper limit to about 1.2 V and widens the overlap. The design therefore still covers 0–2 V.

# Detailed solution - A224

For each circuit find the input that pushes the output highest, then use the fact that the two series transistors of an unloaded follower carry the same current. Either both conduct and their square-law currents are equated, or one is cut off and the other must settle at zero current. Channel-length modulation is neglected in this large-signal calculation; $\beta_N=K'_N(W/L)=2\beta_P$.

### Step 1 — n-channel followers (Circuits 1, 3, 5)

An n-channel follower's output rises with $v_{in}$, so take $v_{in}=V_{DD}$. M1 then has $V_{GS1}=V_{DD}-v_o$ and $V_{DS1}=V_{DD}-v_o\ge V_{GS1}-V_T$, so it is saturated and the output stays at least $V_T$ below $V_{DD}$.

- **Circuit 1** (n-channel diode M2 to ground, $V_{GS2}=v_o$): equal currents in identical devices require equal gate–source voltages, $V_{DD}-v_o=v_o$, so $v_o(\max)=V_{DD}/2$.
- **Circuit 3** (p-channel M2 with source at the output and gate and drain at ground, $V_{SG2}=v_o$):
$$
\frac{\beta_N}{2}(V_{DD}-v_o-V_T)^2=\frac{\beta_P}{2}(v_o-V_T)^2
\;\Rightarrow\;\sqrt2\,(V_{DD}-v_o-V_T)=v_o-V_T,
$$
$$
v_o(\max)=\frac{\sqrt2\,V_{DD}-(\sqrt2-1)V_T}{1+\sqrt2}\approx0.586V_{DD}-0.172V_T .
$$
- **Circuit 5** (n-channel sink M2 carrying $I$): M1 must carry $I$, so $V_{GS1}=V_T+\sqrt{2I/\beta_N}$ and $v_o(\max)=V_{DD}-V_T-\sqrt{2I/\beta_N}$.

### Step 2 — p-channel followers (Circuits 2, 4, 6)

A p-channel follower's output rises as $v_{in}$ rises, and for $v_{in}$ near $V_{DD}$ the follower turns off ($V_{SG}=v_o-v_{in}<V_T$). The unloaded output then has no path for current, so the pull-up device must come to zero current:

- **Circuit 2** (p-channel diode M2 from $V_{DD}$, $V_{SG2}=V_{DD}-v_o$): its current vanishes when $V_{SG2}=V_T$, so $v_o(\max)=V_{DD}-V_T$.
- **Circuit 4** (n-channel M2 with gate and drain at $V_{DD}$, source at the output, $V_{GS2}=V_{DD}-v_o$): likewise $v_o(\max)=V_{DD}-V_T$.
- **Circuit 6** (p-channel current source M1 with gate at $V_{BP}$; the follower is M2): M1 has a fixed $V_{SG1}=V_{DD}-V_{BP}>V_T$, so it stays on. Its current can only reach zero with $V_{SD1}=0$ (deep triode), so $v_o(\max)=V_{DD}$.

### Step 3 — Comparison

| Circuit | $v_o(\max)$ |
|---|---|
| 1 | $V_{DD}/2$ |
| 2 | $V_{DD}-V_T$ |
| 3 | $\approx0.586V_{DD}-0.172V_T$ |
| 4 | $V_{DD}-V_T$ |
| 5 | $V_{DD}-V_T-\sqrt{2I/\beta_N}$ |
| 6 | $V_{DD}$ |

Every n-channel follower loses at least one threshold at the top. Among the p-channel followers, a diode-type pull-up stops conducting one threshold below the rail, but a current source with fixed gate drive can pull all the way up. Hence **Circuit 6** has the highest $v_o(\max)=V_{DD}$, followed by Circuits 2 and 4 at $V_{DD}-V_T$.

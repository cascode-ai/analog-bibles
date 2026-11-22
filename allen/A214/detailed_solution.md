# Detailed solution - A214

During a negative slew the n-channel follower cannot pull its source down: it turns off, and only the sink and the resistor can discharge $C_L$. Evaluate that discharge current at $v_{OUT}=0$.

### Step 1 — M1 turns off for a large negative step

A large negative input step (for the fastest fall, $v_{IN}\to-2.5$ V) arrives while $C_L$ still holds $v_{OUT}=0$, so

$$
V_{GS1}=v_{IN}-v_{OUT}=-2.5\ \mathrm V<V_T,
$$

and M1 carries no current. Any step that makes $v_{IN}<v_{OUT}+V_T$ has the same effect: an n-channel source follower can only source current into the load, never sink it.

### Step 2 — Discharge current and slew rate

KCL at the output with $i_{D1}=0$, the sink drawing $I_Q=200\ \mu\mathrm A$ out of the node and the resistor carrying $v_{OUT}/R_L$ to ground:

$$
C_L\frac{dv_{OUT}}{dt}=i_{D1}-I_Q-\frac{v_{OUT}}{R_L}=0-200\ \mu\mathrm A-0.
$$

The resistor term vanishes at $v_{OUT}=0$. Hence

$$
SR^-=-\frac{I_Q}{C_L}=-\frac{200\ \mu\mathrm A}{50\ \mathrm{pF}}=-4\times10^{6}\ \mathrm{V/s}=-4\ \mathrm{V/\mu s}.
$$

The magnitude is only about 1/90 of the positive slew rate, because the fall is limited by the fixed 200-µA sink rather than by the large drive current of M1. (Below 0 V the resistor current $v_{OUT}/R_L$ flows into the node and slows the fall further.)

# Detailed solution - A273

A falling output can be limited in two places: inside, where the first stage can pull at most the tail current $I_5$ out of $C_c$, and at the output, where M6 is cut off and the sink M7 must discharge $C_L$ while also supplying the current that flows through $C_c$. The negative slew rate is the smaller of the two rates.

### Step 1 — Internal (compensation-capacitor) limit

For a large input step, all of $I_5$ is steered to one side of the pair. The current available to change the voltage across $C_c$ is then $I_5$, and since the M6 gate node moves little, the output slope is

$$
SR_{int}=\frac{I_5}{C_c}=\frac{45.7\ \mu\mathrm A}{5\ \mathrm{pF}}=9.1\ \mathrm{V/\mu s}.
$$

### Step 2 — Output-stage limit

On a falling edge, the M6 gate rises and M6 turns off. M7 sinks its fixed $I_7$ from the output node, which feeds both $C_L$ and $C_c$; the current through $C_c$ is at most $I_5$ (it is supplied by the first stage). KCL at the output gives

$$
C_L\frac{dv_{out}}{dt}=-(I_7-I_5)\;\Rightarrow\;
SR_{out}=\frac{I_7-I_5}{C_L}=\frac{(228-45.7)\ \mu\mathrm A}{20\ \mathrm{pF}}=9.1\ \mathrm{V/\mu s}.
$$

Equivalently, if the first-stage node is held fixed, M7 discharges $C_L+C_c$ in parallel: $I_7/(C_L+C_c)=228\ \mu\mathrm A/25\ \mathrm{pF}=9.1$ V/µs. Both forms reach the internal limit at the same condition, $I_7=I_5(1+C_L/C_c)$.

### Step 3 — Negative slew rate

Here $I_7=5I_5$ and $C_L=4C_c$, so that condition holds exactly and the two limits coincide:

$$
SR^-=\min\!\left[\frac{I_5}{C_c},\ \frac{I_7-I_5}{C_L}\right]=9.1\ \mathrm{V/\mu s}.
$$

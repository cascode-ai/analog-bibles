# Detailed solution - G411

In steady state the switched capacitor $C_1$ transfers no net charge to $C_2$, which fixes the dc voltage across $C_2$ at the value $C_1$ is charged to in phase $\phi_1$. This gives a relation among $V_{CM}$, $V_{CSBIAS}$, $V_{OC}$ and $V_{cmc}$; the large CMC gain then makes $V_{cmc}$ essentially constant, so a change in $V_{CSBIAS}$ appears directly in $V_{OC}$. By symmetry, consider one half (top capacitors).

### Step 1 — Charge on $C_1$ in each phase

In $\phi_1$, $S_1$ and $S_2$ connect $C_1$ between $V_{CM}$ and $V_{CSBIAS}$:

$$
Q_{1,\phi_1}=C_1\left(V_{CM}-V_{CSBIAS}\right).
$$

In $\phi_2$, $S_4$ and $S_5$ connect $C_1$ in parallel with $C_2$, between $V_{o1}$ and $V_{cmc}$. $C_2$ is permanently across the same nodes, so at the end of $\phi_2$ both capacitors hold the same voltage $V_{o1}-V_{cmc}$:

$$
Q_{1,\phi_2}=C_1\left(V_{o1}-V_{cmc}\right).
$$

### Step 2 — Steady-state charge balance

In steady state $C_2$'s voltage no longer changes from cycle to cycle, so $C_1$ arrives in $\phi_2$ with the same voltage it leaves with and transfers no charge: $Q_{1,\phi_1}=Q_{1,\phi_2}$. Combining with the bottom half (which gives the same equation with $V_{o2}$) and averaging over the two halves, $V_{o1}$ and $V_{o2}$ are replaced by $V_{OC}$:

$$
V_{CM}-V_{CSBIAS}=V_{OC}-V_{cmc}
\;\Rightarrow\;
V_{OC}=V_{CM}-V_{CSBIAS}+V_{cmc}.
$$

The capacitor values do not enter the steady-state result; $C_1/C_2$ affects only how fast it is reached.

### Step 3 — The CMC voltage the op amp needs

With $V_{CSBIAS}=-1$ V and $V_{OC}=V_{CM}=0.5$ V:

$$
V_{cmc}=V_{OC}-V_{CM}+V_{CSBIAS}=0.5\ \mathrm V-0.5\ \mathrm V-1\ \mathrm V=-1\ \mathrm V.
$$

This is the value at which the op amp's CM control balances its bias currents. Because $v_{oc}=a_{cmc}v_{cmc}$ with $|a_{cmc}|\gg1$, any appreciable change of $V_{OC}$ needs only a tiny change of $V_{cmc}$; so for any $V_{OC}$ inside the output range, $V_{cmc}\approx-1$ V.

### Step 4 — New output CM level

With $V_{CSBIAS}=-1.1$ V and $V_{cmc}\approx-1$ V:

$$
V_{OC}=V_{CM}-V_{CSBIAS}+V_{cmc}=0.5\ \mathrm V-(-1.1\ \mathrm V)+(-1\ \mathrm V)=0.6\ \mathrm V.
$$

The 0.1-V change in $V_{CSBIAS}$ appears one-for-one as a 0.1-V shift of the output CM level. $V_{CSBIAS}$ must therefore equal the CMC bias the op amp needs ($V_{cmc}$) for $V_{OC}$ to equal $V_{CM}$.

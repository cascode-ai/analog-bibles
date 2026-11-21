# Detailed solution - G134

Trace each extreme back to the device that runs out of headroom or drive. On the negative side, $Q_{17}$ pulls $V_1$ down until it saturates, and two pnp emitter followers ($Q_{23}$, then $Q_{20}$) each add one $V_{BE}$. On the positive side, $Q_{13A}$ pulls the base of $Q_{14}$ up until it saturates, but it can deliver at most 0.2 mA of base current, which limits the current $Q_{14}$ can source into a heavy load.

### Step 1 — Negative limit

Raising $V_i$ turns $Q_{17}$ on and lowers $V_1$. $Q_{23}$ is a pnp emitter follower ($V_2=V_1+|V_{BE23}|$), and $Q_{20}$ is the pnp output follower ($V_o=V_2+|V_{BE20}|$), while $Q_{14}$ turns off. The lowest $V_1$ is reached when $Q_{17}$ saturates:

$$
V_o^-=-V_{CC}+V_{CE17(\text{sat})}+|V_{BE23}|+|V_{BE20}|=-15\ \mathrm V+0.2\ \mathrm V+0.7\ \mathrm V+0.7\ \mathrm V=-13.4\ \mathrm V.
$$

Neither follower saturates: $|V_{CE23}|=-14.1-(-15)=0.9$ V and $|V_{CE20}|=1.6$ V. Base drive is not a limit on this side either, since $Q_{23}$ sinks whatever base current $Q_{20}$ needs (at most $67\ \mathrm{mA}/50=1.3$ mA for 200 Ω) and $Q_{17}$ in turn sinks $Q_{23}$'s small base current. So $V_o^-=-13.4$ V for all three loads.

### Step 2 — Positive limit: headroom

Lowering $V_i$ turns $Q_{17}$ off, so $V_1$ rises and $Q_{23}$ turns off; the current of $Q_{13A}$ then goes into the base of $Q_{14}$. The base of $Q_{14}$ can rise only until $Q_{13A}$ saturates:

$$
V_o^+=V_{CC}-|V_{CE13A(\text{sat})}|-V_{BE14}=15\ \mathrm V-0.2\ \mathrm V-0.7\ \mathrm V=14.1\ \mathrm V.
$$

### Step 3 — Positive limit: drive current

$Q_{13A}$ is a current source of 0.2 mA. Even with the diode string and $Q_{23}$ carrying nothing, at most this current reaches the base of $Q_{14}$, so the largest current $Q_{14}$ can source into the load (with $Q_{20}$ off) is its emitter current

$$
I_{o,\max}=(\beta_F+1)(0.2\ \mathrm{mA})=(201)(0.2\ \mathrm{mA})=40.2\ \mathrm{mA}.
$$

The positive limit is the lower of the headroom limit and $I_{o,\max}R_L$:

| $R_L$ | Current needed at 14.1 V | Drive limit reached? | $V_o^+$ | $V_o^-$ |
|---|---|---|---|---|
| 10 kΩ | 1.41 mA | no | +14.1 V | −13.4 V |
| 1 kΩ | 14.1 mA | no | +14.1 V | −13.4 V |
| 200 Ω | 70.5 mA | yes | $(40.2\ \mathrm{mA})(200\ \Omega)=+8.0$ V | −13.4 V |

For 200 Ω the output stops rising at about 8.0 V because $Q_{14}$ runs out of base current, well before $Q_{13A}$ saturates. Refining each junction drop with $I_S=10^{-14}$ A and $V_T\approx26$ mV at the actual currents shifts these limits by up to about 0.1 V (for example about +14.13 V and −13.52 V for 10 kΩ), without changing the conclusions.

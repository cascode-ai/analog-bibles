# Detailed solution - G139

On each side, follow the drive path from the input to the output and find the first device that saturates or runs out of current. The positive side is the npn follower $Q_2$, driven by the pnp current source $Q_7$; the negative side is the composite pnp $Q_3$–$Q_4$ (pnp $Q_3$ driving the npn power device $Q_4$), driven by $Q_1$.

### Step 1 — Positive limit

Lowering $V_i$ reduces the current of $Q_1$, so the current of $Q_7$ raises the base of $Q_2$, and $Q_2$ follows as an emitter follower ($Q_3$ and $Q_4$ are off). The base of $Q_2$ can rise until $Q_7$ saturates:

$$
V_{B2,\max}=V_{CC}-V_{CE7(\text{sat})}=15\ \mathrm V-0.2\ \mathrm V=14.8\ \mathrm V,\qquad V_o^+=14.8\ \mathrm V-V_{BE(\text{on})}=14.1\ \mathrm V .
$$

Drive check: at $V_o=14.1$ V, $Q_2$ supplies 14.1 mA and needs a base current of $14.1\ \mathrm{mA}/151=93\ \mu$A, less than the 0.15 mA of $Q_7$. So the current source is not the limit, and $Q_7$ can indeed be driven into saturation. $Q_2$ itself cannot saturate, since its collector is at $V_{CC}$ and $V_{CE2}=0.9$ V.

### Step 2 — Negative limit

Raising $V_i$ turns $Q_1$ on harder and pulls down the base of $Q_3$. In the composite device the emitter of $Q_3$ is the output, and its collector feeds the base of $Q_4$, and the collector of $Q_4$ is also the output; together they act as a pnp follower with $V_o=V_{B3}+|V_{BE3}|$. The base of $Q_3$ goes down until $Q_1$ saturates:

$$
V_{B3,\min}=-V_{CC}+V_{CE1(\text{sat})}=-14.8\ \mathrm V,\qquad V_o^-=-14.8\ \mathrm V+0.7\ \mathrm V=-14.1\ \mathrm V .
$$

The composite device has its own saturation limit. The base of $Q_4$ sits at $-V_{CC}+V_{BE4}=-14.3$ V, and $Q_3$ saturates when the emitter of $Q_3$ is only $|V_{CE3(\text{sat})}|$ above that:

$$
V_o\ge-V_{CC}+V_{BE4}+|V_{CE3(\text{sat})}|=-15\ \mathrm V+0.7\ \mathrm V+0.2\ \mathrm V=-14.1\ \mathrm V,
$$

the same value, so both conditions coincide. Drive is ample: $Q_4$ needs $14.1\ \mathrm{mA}/150=94\ \mu$A of base current, supplied by $Q_3$; the base current of $Q_3$ is only about 3 µA, which $Q_1$ easily sinks.

### Step 3 — Result

For $R_L=1\ \mathrm{k\Omega}$, **$V_o^+=+14.1$ V** (set by saturation of $Q_7$) and **$V_o^-=-14.1$ V** (set by saturation of $Q_1$, coinciding with saturation of the $Q_3$–$Q_4$ composite). The swing is symmetric even though the negative half uses a composite pnp: one $V_{BE}$ plus one $V_{CE(\text{sat})}$ is lost from each supply.

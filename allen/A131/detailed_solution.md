# Detailed solution - A131

With $v_{IN}$ and the bias voltages at ac ground, each output conductance is the load's conductance plus the two $g_{ds}$ terms. The lowest output resistance belongs to the load with the largest conductance. That is a load whose source moves with the output, made from the device with the larger transconductance; a source-follower load adds its body transconductance on top of $g_m$.

### Step 1 — Common device parameters

With equal $W/L$ and current and $K'_N=2K'_P$:

$$
g_{mN}=\sqrt2\,g_{mP},\qquad g_{dsN}=g_{dsP}=\lambda I\ll g_m,\qquad \eta=\frac{g_{mbs}}{g_m}.
$$

### Step 2 — Output conductance of each inverter

Reading [Fig. 1]:

| Circuit | Load as seen from the output | $G_{out}=1/R_{out}$ |
|---|---|---|
| 1 | n-channel M2, gate and drain at $V_{DD}$, source at output, bulk at ground | $g_{mN}(1+\eta_N)+2\lambda I$ |
| 2 | p-channel M1, gate and drain at ground, source at output, bulk at $V_{DD}$ | $g_{mP}(1+\eta_P)+2\lambda I$ |
| 3 | diode-connected p-channel, source at its bulk | $g_{mP}+2\lambda I$ |
| 4 | diode-connected n-channel, source at its bulk | $g_{mN}+2\lambda I$ |
| 5, 6 | current source (gate at $V_{BP}$ or $V_{BN}$) | $2\lambda I$ |

In circuit 1 the output drives the source of M2 while its gate (at $V_{DD}$) and bulk (at ground) stay fixed, so a test voltage changes both $v_{gs}$ and $v_{bs}$, giving $g_{mN}+g_{mbsN}$. In circuit 4 the diode-connected load has its source tied to its bulk, so there is no $g_{mbs}$ term.

### Step 3 — Comparison

- Circuits 5 and 6 have the highest resistance, and circuits 2 and 3 use the weaker p-channel load.
- Circuit 1 versus circuit 4: both have n-channel loads of the same size and current, and circuit 1 adds $g_{mbsN}$, so $G_1>G_4$. Without the body effect the two would tie.
- Circuit 1 versus circuit 2: circuit 2 would have the larger conductance only if $1+\eta_P>\sqrt2(1+\eta_N)$, i.e. $\eta_P>0.41+1.41\,\eta_N$. That requires an abnormally large p-channel body effect; typical $\eta$ is 0.1–0.3.

### Step 4 — Lowest output resistance

For normal body-effect factors, circuit 1 has the lowest output resistance:

$$
R_{out,1}\approx\frac1{g_{mN}+g_{mbsN}+2\lambda I},
$$

just below circuit 4's $1/(g_{mN}+2\lambda I)$. The problem gives no $\gamma$, so this ranking assumes normal values; only an unusually large $\eta_P$ would let circuit 2 take its place.

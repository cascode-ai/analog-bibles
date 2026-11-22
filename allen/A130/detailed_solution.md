# Detailed solution - A130

The output resistance is found with $v_{IN}$ at ac ground, so the input transistor contributes only its $g_{ds}$. What distinguishes the circuits is the load: a load whose gate moves with the output (diode or source follower) contributes a transconductance-sized conductance, while a load with its gate on a dc bias contributes only its $g_{ds}$.

### Step 1 — Common device parameters

With equal $W/L$ and current, $g_{mN}=\sqrt2\,g_{mP}$ and $g_{dsN}=g_{dsP}=\lambda I\ll g_m$.

### Step 2 — Output conductance of each inverter

Reading [Fig. 1], with $v_{IN}$ and the bias voltages at ac ground:

| Circuit | Load | $G_{out}=1/R_{out}$ |
|---|---|---|
| 1 | n-channel, gate and drain at $V_{DD}$, source at output | $g_{mN}+g_{mbsN}+2\lambda I$ |
| 2 | p-channel, gate and drain at ground, source at output | $g_{mP}+g_{mbsP}+2\lambda I$ |
| 3 | diode-connected p-channel | $g_{mP}+2\lambda I$ |
| 4 | diode-connected n-channel | $g_{mN}+2\lambda I$ |
| 5 | p-channel, gate at $V_{BP}$ | $g_{ds1}+g_{ds2}=2\lambda I$ |
| 6 | n-channel, gate at $V_{BN}$ | $g_{ds1}+g_{ds2}=2\lambda I$ |

### Step 3 — Highest output resistance

In circuits 5 and 6 the load is a current source, so the output sees only the two drain resistances in parallel:

$$
R_{out,5}=R_{out,6}=\frac{1}{g_{ds1}+g_{ds2}}=\frac{1}{(\lambda_N+\lambda_P)I}=\frac1{2\lambda I}.
$$

In circuits 1–4 the load presents roughly $1/g_m$ (or $1/(g_m+g_{mbs})$), lower by the factor $g_m/(2\lambda I)$, typically about two orders of magnitude.

Circuits 5 and 6 have the highest output resistance, and the two are equal: $R_{out}$ depends only on $\lambda$ and the current, which are the same for both. The difference in $K'$ changes the input transconductance and hence the gain, but not the output resistance.

# Detailed solution - G093

In the peaking source, $I_{IN}$ flows through $R$ between the gate and the drain of $M_1$. The gate of $M_2$, tied to the drain of $M_1$, therefore sits $I_{IN}R$ below the gate of $M_1$. In weak inversion the drain current is exponential in $V_{GS}$, so this fixed voltage step divides the current by a fixed factor. Solve for $R$ from that factor. Then find the smallest $W/L$ that keeps both devices in weak inversion at their currents.

### Step 1 — Relation between the two currents

$M_1$'s gate is at the top of $R$, and its drain (and $M_2$'s gate) at the bottom; both sources are grounded. KVL gives

$$
V_{GS2}=V_{GS1}-I_{IN}R .
$$

$M_1$ carries $I_{IN}$, because the gate draws no current. For identical devices in weak inversion, $I_D=(W/L)I_t\exp[(V_{GS}-V_t)/(nV_T)]$. Dividing the two currents cancels $(W/L)I_t$ and $V_t$:

$$
\frac{I_{OUT}}{I_{IN}}=\exp\!\left(\frac{V_{GS2}-V_{GS1}}{nV_T}\right)=\exp\!\left(-\frac{I_{IN}R}{nV_T}\right).
$$

### Step 2 — Required $R$

$$
R=\frac{nV_T}{I_{IN}}\ln\frac{I_{IN}}{I_{OUT}}=\frac{(1.5)(26\ \mathrm{mV})}{1\ \mu\mathrm A}\ln10=(39\ \mathrm{k\Omega})(2.303)=89.8\ \mathrm{k\Omega}.
$$

The resistor drops $I_{IN}R=89.8$ mV, which is $nV_T\ln10$, the gate-voltage change for one decade of weak-inversion current. $M_1$ has $V_{DS1}=V_{GS2}$, roughly a threshold voltage, which is far above $3V_T=78$ mV, so the exponential law applies to both devices.

### Step 3 — Minimum $W/L$

Inverting the weak-inversion law gives the overdrive for a current $I_D$:

$$
V_{GS}-V_t=nV_T\ln\frac{I_D}{(W/L)I_t}<0\quad\Longleftrightarrow\quad\frac WL>\frac{I_D}{I_t}.
$$

| Device | $I_D$ | Required $W/L$ |
|---|---|---|
| $M_1$ | 1 µA | $>10$ |
| $M_2$ | 0.1 µA | $>1$ |

The transistors are identical, so the larger current sets the limit:

$$
\left(\frac WL\right)_{\min}=\frac{I_{IN}}{I_t}=\frac{1\ \mu\mathrm A}{0.1\ \mu\mathrm A}=10 .
$$

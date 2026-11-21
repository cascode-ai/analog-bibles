# Detailed solution - G066

Replace both transistors by hybrid-π models with $r_o$ (no $r_b$, $r_\mu$), apply a test voltage $v_x$ at the common collector with the base of $Q_1$ at ac ground, and solve for the one internal node $b_2$ (emitter of $Q_1$ = base of $Q_2$). The bias current $I_{\text{BIAS}}$ enters only through the collector current of $Q_1$, which sets $g_{m1}$, $r_{\pi1}$ and $r_{o1}$.

### Step 1 — Bias of $Q_1$ as a function of $I_{\text{BIAS}}$

The emitter of $Q_1$ supplies both the ideal current source and the base current of $Q_2$, $I_{C2}/\beta_F$. Hence

$$
I_{E1}=I_{\text{BIAS}}+\frac{I_{C2}}{\beta_F},\qquad
I_{C1}=\frac{\beta_0}{\beta_0+1}\left(I_{\text{BIAS}}+\frac{I_{C2}}{\beta_F}\right).
$$

Each device then has $g_m=I_C/V_T$, $r_\pi=\beta_0/g_m$ and $r_o=V_A/I_C$. Define $n=I_{C2}/I_{C1}$, so that $r_{\pi1}=nr_{\pi2}$ and $r_{o1}=nr_{o2}$.

### Step 2 — Node equation at $b_2$

Let $v$ be the voltage of node $b_2$. Since the base of $Q_1$ is grounded, $v_{be1}=-v$ and $v_{be2}=v$. The current that $Q_1$ delivers into node $b_2$ is the sum of its controlled source, its base current through $r_{\pi1}$ and the current through $r_{o1}$; it leaves through $r_{\pi2}$ (the ideal current source carries no signal):

$$
-g_{m1}v-\frac{v}{r_{\pi1}}+\frac{v_x-v}{r_{o1}}=\frac{v}{r_{\pi2}}
\quad\Rightarrow\quad
v=\frac{v_x/r_{o1}}{1/r_{o1}+1/r_{\pi1}+1/r_{\pi2}+g_{m1}} .
$$

### Step 3 — Test current and general result

The test current is the sum of both collector currents:

$$
i_x=\left[-g_{m1}v+\frac{v_x-v}{r_{o1}}\right]+g_{m2}v+\frac{v_x}{r_{o2}} .
$$

By Step 2 the bracket equals $v(1/r_{\pi1}+1/r_{\pi2})$, so $i_x=v_x/r_{o2}+v\,(1/r_{\pi1}+1/r_{\pi2}+g_{m2})$. Substituting $v$ and multiplying through by $r_{\pi1}r_{\pi2}$:

$$
\frac1{r_o^c}=\frac1{r_{o2}}+\frac{r_{\pi1}+r_{\pi2}+g_{m2}r_{\pi1}r_{\pi2}}{r_{o1}\left(r_{\pi1}+r_{\pi2}+g_{m1}r_{\pi1}r_{\pi2}\right)+r_{\pi1}r_{\pi2}} .
$$

With $g_mr_\pi=\beta_0$ and $r_{\pi1}r_{\pi2}\ll r_{o1}(\cdots)$,

$$
\frac1{r_o^c}\approx\frac1{r_{o2}}+\frac{(\beta_0+1)r_{\pi1}+r_{\pi2}}{r_{o1}\left[r_{\pi1}+(\beta_0+1)r_{\pi2}\right]},
\qquad
r_o^c\approx r_{o2}\,\Big\|\,r_{o2}\,\frac{n(n+\beta_0+1)}{(\beta_0+1)n+1}.
$$

The second branch is not simply $r_{o1}$: the current through $r_{o1}$ arrives at $b_2$ and divides between the emitter of $Q_1$ (resistance about $r_{\pi1}/(\beta_0+1)$) and the base of $Q_2$ ($r_{\pi2}$), and the part entering $Q_2$ is multiplied by $\beta_0$.

### Step 4 — $I_{\text{BIAS}}=1$ mA

$I_{C1}=(200/201)(1\ \mathrm{mA}+5\ \mu\mathrm A)=1.00$ mA, so $n=1$ and both devices have $g_m=38.5$ mA/V, $r_\pi=5.2\ \mathrm{k\Omega}$, $r_o=130\ \mathrm{V}/1\ \mathrm{mA}=130\ \mathrm{k\Omega}$. The factor $n(n+\beta_0+1)/[(\beta_0+1)n+1]=202/202=1$, so the second branch equals $r_{o1}$:

$$
r_o^c\approx r_{o1}\,\|\,r_{o2}=130\ \mathrm{k\Omega}\,\|\,130\ \mathrm{k\Omega}=65.0\ \mathrm{k\Omega}.
$$

### Step 5 — $I_{\text{BIAS}}=0$

Now $Q_1$ carries only the base current of $Q_2$:

$$
I_{C1}=\frac{200}{201}\cdot\frac{1\ \mathrm{mA}}{200}=4.975\ \mu\mathrm A,\qquad
r_{\pi1}=\frac{\beta_0V_T}{I_{C1}}=1.045\ \mathrm{M\Omega},\qquad
r_{o1}=\frac{130\ \mathrm V}{4.975\ \mu\mathrm A}=26.13\ \mathrm{M\Omega},
$$

so $n=\beta_0+1=201$, $r_{\pi1}=(\beta_0+1)r_{\pi2}$. The resistance looking into the emitter of $Q_1$ then equals $r_{\pi2}$, so the $r_{o1}$ current splits in half, and the half entering $Q_2$ is multiplied by $\beta_0$. The second branch is

$$
r_{o2}\,\frac{201(201+201)}{201\times201+1}=1.9999\,r_{o2}=260\ \mathrm{k\Omega},
\qquad
r_o^c\approx130\ \mathrm{k\Omega}\,\|\,260\ \mathrm{k\Omega}=86.7\ \mathrm{k\Omega}\approx\tfrac23r_{o2}.
$$

The exact expression of Step 3 gives the same values to three digits.

### Step 6 — Dependence on $I_{\text{BIAS}}$

Evaluating the exact expression for other bias currents (with $I_{C2}=1$ mA):

| $I_{\text{BIAS}}$ | $I_{C1}$ | $r_{o1}$ | second branch | $r_o^c$ |
|---|---|---|---|---|
| 0 | 4.98 µA | 26.1 MΩ | 260 kΩ | 86.7 kΩ |
| 10 µA | 14.9 µA | 8.71 MΩ | 173 kΩ | 74.3 kΩ |
| 100 µA | 104 µA | 1.24 MΩ | 136 kΩ | 66.5 kΩ |
| 1 mA | 1.00 mA | 130 kΩ | 130 kΩ | 65.0 kΩ |
| 10 mA | 9.96 mA | 13.1 kΩ | 124 kΩ | 63.5 kΩ |

$r_o^c$ falls monotonically with $I_{\text{BIAS}}$: from about $\tfrac23r_{o2}=86.7\ \mathrm{k\Omega}$ at $I_{\text{BIAS}}=0$ to $r_{o1}\|r_{o2}=65\ \mathrm{k\Omega}$ when $I_{C1}=I_{C2}$, and only slowly below that, because the second branch stays close to $r_{o2}$ until $I_{C1}$ approaches $(\beta_0+1)I_{C2}$. It never exceeds $r_{o2}$, since the path through $r_{o1}$ always adds a conducting branch in parallel with $r_{o2}$.

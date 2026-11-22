# Detailed solution - G119

For each limiting load, write $V_{ce1}$ and $I_{c1}$ as the output moves, which gives the load line, and find where it ends: at saturation, cutoff, or the drive limit of the base current. The largest product $I_{c1}V_{ce1}$ on the line is the maximum instantaneous dissipation; the hyperbolas $I_c=P/V_{ce}$ show it graphically.

### Step 1 — Quiescent point and relations for $Q_1$

With $R_1=R_2=0$, the mirror sets $I_Q=(V_{CC}-V_{BE(\text{on})})/R_3=14.3\ \mathrm V/5\ \mathrm{k\Omega}=2.86$ mA in $Q_2$. The collector of $Q_1$ is at $V_{CC}$ and its emitter at $V_o$, so

$$
V_{ce1}=V_{CC}-V_o,\qquad I_{c1}=I_Q+\frac{V_o}{R_L},
$$

the second from KCL at the output with base currents neglected. At rest $V_o=0$: the quiescent point is $(15\ \mathrm V,\ 2.86\ \mathrm{mA})$. The driver can supply at most $0.3$ mA, so $I_{c1}\le\beta_F(0.3\ \mathrm{mA})=30$ mA.

### Step 2 — $R_L=0$: vertical load line

A short holds $V_o=0$ whatever the input, so $V_{ce1}=V_{CC}=15$ V for all currents: the load line is **vertical at 15 V**. The short absorbs any difference between $I_{c1}$ and $I_Q$, so $I_{c1}$ ranges from 0 ($Q_1$ cut off, the short supplies $I_Q$ to $Q_2$) up to the drive limit of 30 mA. The dissipation $15\ \mathrm V\times I_{c1}$ grows along the whole line, so the maximum is at the top:

$$
P_{\max}=(15\ \mathrm V)(30\ \mathrm{mA})=0.45\ \mathrm W.
$$

The line crosses the 0.1, 0.2 and 0.3 W hyperbolas at $I_c=P/15\ \mathrm V=6.67$, 13.3 and 20 mA and ends above all three.

### Step 3 — $R_L\to\infty$: horizontal load line

With no load current, $I_{c1}=I_Q=2.86$ mA for every $V_o$: the load line is **horizontal at 2.86 mA**. It ends where a transistor saturates:

- $Q_1$ saturates at $V_{ce1}=0.2$ V ($V_o=14.8$ V);
- $Q_2$ saturates at $V_o=-V_{CC}+0.2\ \mathrm V=-14.8$ V, i.e. $V_{ce1}=2V_{CC}-V_{CE(\text{sat})}=29.8$ V.

The dissipation $I_QV_{ce1}$ is largest at the right end:

$$
P_{\max}=(29.8\ \mathrm V)(2.86\ \mathrm{mA})=85\ \mathrm{mW}.
$$

This lies below the 0.1 W hyperbola, which reaches 2.86 mA only at $V_{ce}=35$ V.

### Step 4 — Hyperbolas and the drawing

Points on $I_c=P/V_{ce}$ used for the drawing:

| $P_c$ | Points ($V_{ce}$, $I_c$) |
|---|---|
| 0.1 W | (3.33 V, 30 mA), (5 V, 20 mA), (10 V, 10 mA), (20 V, 5 mA) |
| 0.2 W | (6.67 V, 30 mA), (10 V, 20 mA), (20 V, 10 mA), (30 V, 6.67 mA) |
| 0.3 W | (10 V, 30 mA), (15 V, 20 mA), (30 V, 10 mA) |

![Q1 load lines: vertical at 15 V for RL = 0 up to 30 mA, horizontal at 2.86 mA for RL infinite from 0.2 V to 29.8 V, with 0.1, 0.2 and 0.3 W hyperbolas](/q/G119/solution-curves.svg)

The maximum possible instantaneous dissipation in $Q_1$ is **0.45 W for $R_L=0$** (limited only by the base drive) and **about 85 mW for $R_L\to\infty$** (about $2V_{CC}I_Q$). A shorted output is therefore the dangerous case for the output transistor.

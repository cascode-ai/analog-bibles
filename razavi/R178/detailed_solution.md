# Detailed solution - R178

**Approach.** With the tail node a virtual ground, the gain is that of one half circuit, where $M_1$ sees the diode $M_3$ ($1/g_{m3}$), the current source $M_5$ ($r_{O5}$) and its own $r_{O1}$. The key point is that $M_3$ carries only 20 % of $M_1$'s current, so $g_{m3}$ must be evaluated at 0.1 mA, which makes $1/g_{m3}$ larger and raises the gain.

### Step 1 — Branch currents

Each input device carries $I_{SS}/2 = 0.5$ mA, supplied at node $X$ by $M_5$ and $M_3$ together:

$$I_{D1} = I_{D5} + I_{D3} \quad\Longrightarrow\quad I_{D3} = 0.5\ \mathrm{mA} - 0.8(0.5\ \mathrm{mA}) = 0.5 - 0.4 = 0.1\ \mathrm{mA},$$

and likewise on the right side ($M_2$, $M_4$, $M_6$).

### Step 2 — Small-signal parameters

All transistors have $W/L = 50/0.5 = 100$.

**Input device** $M_1$ (NMOS, 0.5 mA):

$$g_{m1} = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_{D1}} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{S} = 3.66\ \mathrm{mS}.$$

**Diode load** $M_3$ (PMOS, **0.1 mA**):

$$g_{m3} = \sqrt{2\mu_pC_{ox}\frac{W}{L}I_{D3}} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.1\ \mathrm{mA})} = \sqrt{0.768\times10^{-6}}\ \mathrm{S} = 0.876\ \mathrm{mS}, \qquad \frac{1}{g_{m3}} = 1.14\ \mathrm{k}\Omega .$$

**Output resistances:**

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.1\ \mathrm{mA})} = 50\ \mathrm{k}\Omega,\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.4\ \mathrm{mA})} = 12.5\ \mathrm{k}\Omega .
\end{aligned}
$$

### Step 3 — Half-circuit small-signal model

With $P$ at ac ground and $v_{in}/2$ on the gate of $M_1$, node $X$ sees:

- $M_1$: a current source $g_{m1}v_{in}/2$ from $X$ to ground, in parallel with $r_{O1}$;
- $M_3$: diode-connected, drawing $g_{m3}v_X$, in parallel with $r_{O3}$;
- $M_5$: gate at $V_b$ and source at $V_{DD}$, both ac grounds, so only $r_{O5}$.

<!-- diagram: diagram-01.cir -->

KCL at $X$:

$$
\begin{aligned}
g_{m1}\frac{v_{in}}{2} + v_X\left(\frac{1}{r_{O1}} + g_{m3} + \frac{1}{r_{O3}} + \frac{1}{r_{O5}}\right) &= 0\\
v_X &= -g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\parallel r_{O5}\right)\frac{v_{in}}{2} .
\end{aligned}
$$

With $v_Y = -v_X$ by symmetry,

$$|A_v| = \left|\frac{v_X - v_Y}{v_{in}}\right| = g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\parallel r_{O5}\right).$$

### Step 4 — Numerical gain

**Neglecting channel-length modulation:**

$$|A_v| = \frac{g_{m1}}{g_{m3}} = \frac{3.66\ \mathrm{mS}}{0.876\ \mathrm{mS}} = 4.18 .$$

**Including the output resistances:**

$$
\begin{aligned}
g_{m3} + \frac{1}{r_{O1}} + \frac{1}{r_{O3}} + \frac{1}{r_{O5}} &= 0.876 + 0.050 + 0.020 + 0.080 = 1.026\ \mathrm{mS},\\
\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\parallel r_{O5} &= \frac{1}{1.026\ \mathrm{mS}} = 0.974\ \mathrm{k}\Omega,\\
|A_v| &= (3.66\ \mathrm{mS})(0.974\ \mathrm{k}\Omega) = 3.57 .
\end{aligned}
$$

$r_{O5}$ is the largest of the parasitic conductances here, because $M_5$ carries 0.4 mA; leaving it out would give about 3.9.

### Step 5 — Why the current sources help

Without $M_5$ and $M_6$, the same diode loads would carry the full 0.5 mA:

$$g_{m3} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 1.96\ \mathrm{mS}, \qquad |A_v| = \frac{3.66}{1.96} = 1.87 .$$

Diverting 80 % of the current through $M_5$ cuts the diode current by a factor of 5, so $g_{m3} \propto \sqrt{I_{D3}}$ drops by $\sqrt5$ and the gain rises by $\sqrt5 = 2.24$ (from 1.87 to 4.18), while $g_{m1}$ is unchanged. The smaller diode current also lowers its $|V_{GS}|$, leaving more output headroom.

### Result

$$|A_v| = g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\parallel r_{O5}\right),$$

with $g_{m1} = 3.66$ mS and $g_{m3} = 0.876$ mS (at 0.1 mA). This gives $|A_v| = g_{m1}/g_{m3} \approx 4.2$ with $\lambda = 0$, or about **3.6** including $r_{O1} = 20$ kΩ, $r_{O3} = 50$ kΩ and $r_{O5} = 12.5$ kΩ.

**Common mistake.** Evaluating $g_{m3}$ at 0.5 mA, as if the diode carried all of $M_1$'s current, which gives a gain of about 1.9. $M_5$ supplies 0.4 mA, leaving only 0.1 mA for $M_3$.

**Common mistake.** Claiming the gain is 5 times the plain diode-load gain (≈ 9.3) because the diode current is 5 times smaller. For a fixed $W/L$, $g_{m3}$ scales with the *square root* of the current, so the gain improves by $\sqrt5$.

**Common mistake.** Adding $M_5$'s $g_m$ to $g_{m3}$. $M_5$'s gate is at the fixed bias $V_b$, not at $X$, so it contributes only $r_{O5}$.

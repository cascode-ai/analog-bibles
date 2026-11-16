# Detailed solution - R238

**Approach.** With the drain of $M_3$ at $V_X$, the output branch is an exact copy of the reference branch, so $I_{out} = I_{REF}$ even with channel-length modulation. Raising that drain by 1 V changes the current by $\Delta V/R_{out}$, where $R_{out}$ is the output resistance of the cascode $M_3$–$M_2$. Derive $R_{out}$ (including the body effect of $M_3$), evaluate it, and compare with a simple mirror.

### Step 1 — The nominal current

$M_3$ (60/0.5, gate at $V_b$) on $M_2$ (20/0.5, gate at X) mirrors $M_0$ on $M_1$ with the same sizes and gate voltages. If the drain of $M_3$ is at $V_X$, the drain voltage of $M_0$, the two branches satisfy identical equations, so $V_B = V_A$ and

$$I_{out,nom} = I_{REF} = 100\ \mu\mathrm{A},$$

with no channel-length-modulation error, since every device sees the same $V_{DS}$ as its counterpart.

### Step 2 — Output resistance of the cascode

$V_X$ and $V_b$ do not move with the output, so both gates are at ac ground. $M_2$ ($v_{gs2} = 0$) is just $r_{O2}$ from B to ground; $M_3$ has $v_{gs3} = -v_B$ and, with its bulk grounded, $v_{bs3} = -v_B$. A test voltage $v_t$ at the drain D of $M_3$ drives $i_t$ into the drain.

<!-- diagram: diagram-01.cir -->

All of $i_t$ flows through $r_{O2}$, so $v_B = i_tr_{O2}$, and the current through $M_3$ is

$$i_t = g_{m3}(-v_B) + g_{mb3}(-v_B) + \frac{v_t - v_B}{r_{O3}} = -(g_{m3} + g_{mb3})r_{O2}i_t + \frac{v_t - i_tr_{O2}}{r_{O3}} .$$

Multiplying by $r_{O3}$ and collecting $i_t$:

$$
\begin{aligned}
i_tr_{O3} &= -(g_{m3} + g_{mb3})r_{O3}r_{O2}i_t + v_t - i_tr_{O2},\\
v_t &= i_t\left[r_{O3} + r_{O2} + (g_{m3} + g_{mb3})r_{O3}r_{O2}\right] ,
\end{aligned}
$$

$$R_{out} = \frac{v_t}{i_t} = \left[1 + (g_{m3} + g_{mb3})r_{O3}\right]r_{O2} + r_{O3} .$$

$M_3$ holds B nearly fixed: any rise of $v_B$ reduces $v_{gs3}$ and pinches off the extra current, boosting $r_{O2}$ by about $(g_{m3} + g_{mb3})r_{O3}$.

### Step 3 — Small-signal parameters

With $W/L = 120$ and $I_D = 100\ \mu$A,

$$g_{m3} = \sqrt{2(134\ \mu\mathrm{A/V^2})(120)(100\ \mu\mathrm{A})} = \sqrt{3.216\times10^{-6}}\ \mathrm{A/V} = 1.79\ \mathrm{mS} ,$$

$$r_{O2} = r_{O3} = \frac{1}{(0.1\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega, \qquad g_{m3}r_{O3} = 179 .$$

$g_{mb3} = \eta g_{m3}$ with $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB3}})$, where the source of $M_3$ is at $V_B = V_A$, about 0.19 V to 0.78 V depending on $V_b$. For a low-voltage design $V_b$ is near the bottom of its range, $V_B \approx 0.2$ V:

$$\eta = \frac{0.45}{2\sqrt{0.9 + 0.2}} = \frac{0.45}{2(1.049)} = 0.215, \qquad g_{mb3} = 0.215\times1.79\ \mathrm{mS} = 0.385\ \mathrm{mS}$$

(at $V_B = 0.78$ V, $\eta = 0.174$, which changes the result by only a few percent).

### Step 4 — Numerical output resistance

Without body effect:

$$R_{out} = (1 + 179.3)(100\ \mathrm{k}\Omega) + 100\ \mathrm{k}\Omega = 18.03\ \mathrm{M}\Omega + 0.1\ \mathrm{M}\Omega = 18.1\ \mathrm{M}\Omega .$$

With body effect:

$$(g_{m3} + g_{mb3})r_{O3} = (1.79 + 0.385)\ \mathrm{mS}\times100\ \mathrm{k}\Omega = 217.8, \qquad R_{out} = (1 + 217.8)(100\ \mathrm{k}\Omega) + 100\ \mathrm{k}\Omega = 22.0\ \mathrm{M}\Omega .$$

The body effect *helps*: with the bulk fixed, a rise of B also reduces the current through the back gate.

### Step 5 — Deviation of $I_{out}$

$$\Delta I_{out} \approx \frac{\Delta V}{R_{out}} = \frac{1\ \mathrm{V}}{22.0\ \mathrm{M}\Omega} = 45\ \mathrm{nA} \quad\left(\text{or } \frac{1\ \mathrm{V}}{18.1\ \mathrm{M}\Omega} = 55\ \mathrm{nA} \text{ without } g_{mb}\right) ,$$

$$\frac{\Delta I_{out}}{I_{out}} \approx \frac{45\ \mathrm{nA}}{100\ \mu\mathrm{A}} = 0.045\ \% \quad(0.055\ \%\ \text{without } g_{mb}) ,$$

an *increase* (higher drain voltage, more current). Node B moves by only $\Delta V_B = \Delta I_{out}\,r_{O2} = 45\ \mathrm{nA}\times100\ \mathrm{k}\Omega = 4.5$ mV, about $1/218$ of the 1-V step.

**Large-signal check.** Solving the full square-law equations with $(1 + \lambda V_{DS})$ and the body effect, for $V_b$ anywhere in its allowed range, gives $\Delta I_{out} \approx 38$–40 nA, slightly less because in that model $r_O = (1 + \lambda V_{DS})/(\lambda I_D)$ and $g_m$ are a little larger; the order of magnitude is the same.

**Simple mirror.** Without the cascode, 1 V across $M_2$ would change its current by about $\lambda\Delta V\cdot I_D = (0.1)(1)(100\ \mu\mathrm{A}) = 10\ \mu$A (10 %): the cascode reduces this by a factor of about 200.

### Result

Nominal: $I_{out} = I_{REF} = 100\ \mu$A (exact when the drain of $M_3$ is at $V_X$). With the drain 1 V higher:

$$\Delta I_{out} \approx \frac{1\ \mathrm{V}}{R_{out}}, \qquad R_{out} = \left[1 + (g_{m3} + g_{mb3})r_{O3}\right]r_{O2} + r_{O3} \approx 18\text{–}22\ \mathrm{M}\Omega,$$

with $g_{m3} = 1.79$ mS, $g_{mb3} \approx 0.39$ mS and $r_{O2} = r_{O3} = 100\ \mathrm{k}\Omega$. So $I_{out}$ rises by **about 0.045–0.055 μA (≈ 0.05 %)**; an exact large-signal solution gives about 0.04 μA.

**Common mistake.** Treating the output as a simple mirror, $\Delta I = \lambda\Delta V\cdot I_D = 10\ \mu$A (10 %). The 1-V change appears across $M_3$; $M_2$ sees only a few millivolts.

**Common mistake.** Claiming the deviation is exactly zero because "the cascode holds node B fixed." The shielding ($\approx g_mr_O \approx 200$) is strong but finite.

**Common mistake.** Scaling the nominal current by $(W/L)_3/(W/L)_2 = 3$ (300 μA). The current is set by $M_2$, which matches $M_1$; $M_3$ only shields it.

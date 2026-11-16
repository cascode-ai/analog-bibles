# Detailed solution - R238

**Approach.** When the drain of $M_3$ sits at $V_X$, the output branch is an exact copy of the reference branch, so $I_{out} = I_{REF}$ even with channel-length modulation. Raising that drain by 1 V changes the current by $\Delta V/R_{out}$, where $R_{out}$ is the small-signal output resistance of the cascode $M_3$–$M_2$. We derive $R_{out}$ (including the body effect of $M_3$), evaluate it, and compare with a simple mirror.

### Step 1 — The nominal current

The reference branch is $M_0$ (gate at $V_b$, $W/L = 60/0.5$) on top of $M_1$ (gate at X, $W/L = 20/0.5$). The output branch is $M_3$ (gate at $V_b$, 60/0.5) on top of $M_2$ (gate at X, 20/0.5). The corresponding devices have the same sizes and gate voltages.

If the drain of $M_3$ is at $V_X$, which is the drain voltage of $M_0$, the two branches satisfy identical equations. Their solutions are identical too: $V_B = V_A$ and

$$I_{out,nom} = I_{REF} = 100\ \mu\mathrm{A},$$

with no error from channel-length modulation, because every device sees the same $V_{DS}$ as its counterpart.

### Step 2 — Output resistance of the cascode

When the output voltage moves, the gate voltages $V_X$ (set by the reference branch) and $V_b$ (a fixed bias) do not move: **both gates are at ac ground**.

**Small-signal model.**

- $M_2$ has $v_{gs2} = 0$, so it is just $r_{O2}$ from node B to ground.
- $M_3$ has $v_{gs3} = 0 - v_B = -v_B$ and, since its bulk is grounded, $v_{bs3} = -v_B$. It is modelled by the sources $g_{m3}v_{gs3}$ and $g_{mb3}v_{bs3}$ from drain to source, in parallel with $r_{O3}$.
- A test voltage $v_t$ at the drain D of $M_3$ drives a current $i_t$ into the drain.

<!-- diagram: diagram-01.cir -->

**Node B.** All of $i_t$ flows through $r_{O2}$, so $v_B = i_tr_{O2}$.

**Current through $M_3$** (drain to source):

$$i_t = g_{m3}(-v_B) + g_{mb3}(-v_B) + \frac{v_t - v_B}{r_{O3}} .$$

**Substitute** $v_B = i_tr_{O2}$:

$$i_t = -(g_{m3} + g_{mb3})r_{O2}i_t + \frac{v_t - i_tr_{O2}}{r_{O3}} .$$

**Multiply by $r_{O3}$** and collect $i_t$:

$$
\begin{aligned}
i_tr_{O3} &= -(g_{m3} + g_{mb3})r_{O3}r_{O2}i_t + v_t - i_tr_{O2},\\
v_t &= i_t\left[r_{O3} + r_{O2} + (g_{m3} + g_{mb3})r_{O3}r_{O2}\right] .
\end{aligned}
$$

$$R_{out} = \frac{v_t}{i_t} = \left[1 + (g_{m3} + g_{mb3})r_{O3}\right]r_{O2} + r_{O3} .$$

**Intuition.** Without $M_3$, the full output change would appear across $r_{O2}$. $M_3$ holds node B nearly fixed: any rise of $v_B$ reduces its $v_{gs3}$ and pinches off the extra current. This boosts the resistance by about $(g_{m3} + g_{mb3})r_{O3}$.

### Step 3 — Small-signal parameters

**Transconductance of $M_3$** ($W/L = 120$, $I_D = 100\ \mu$A):

$$g_{m3} = \sqrt{2(134\ \mu\mathrm{A/V^2})(120)(100\ \mu\mathrm{A})} = \sqrt{3.216\times10^{-6}}\ \mathrm{A/V} = 1.79\ \mathrm{mS} .$$

**Output resistances** ($r_O = 1/(\lambda I_D)$, same current in both):

$$r_{O2} = r_{O3} = \frac{1}{(0.1\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega, \qquad g_{m3}r_{O3} = 179 .$$

**Body transconductance.** $g_{mb3} = \eta g_{m3}$ with $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB3}})$. The source of $M_3$ is at $V_B = V_A$, which depends on where $V_b$ lies in its allowed range (about 0.19 V to 0.78 V). For a low-voltage design $V_b$ is near the bottom of the range, $V_B \approx 0.2$ V:

$$\eta = \frac{0.45}{2\sqrt{0.9 + 0.2}} = \frac{0.45}{2(1.049)} = 0.215, \qquad g_{mb3} = 0.215\times1.79\ \mathrm{mS} = 0.385\ \mathrm{mS} .$$

(At the top of the range, $V_B = 0.78$ V, $\eta = 0.174$; the result changes by only a few percent.)

### Step 4 — Numerical output resistance

**Without body effect:**

$$R_{out} = (1 + 179.3)(100\ \mathrm{k}\Omega) + 100\ \mathrm{k}\Omega = 18.03\ \mathrm{M}\Omega + 0.1\ \mathrm{M}\Omega = 18.1\ \mathrm{M}\Omega .$$

**With body effect:**

$$(g_{m3} + g_{mb3})r_{O3} = (1.79 + 0.385)\ \mathrm{mS}\times100\ \mathrm{k}\Omega = 217.8,$$

$$R_{out} = (1 + 217.8)(100\ \mathrm{k}\Omega) + 100\ \mathrm{k}\Omega = 22.0\ \mathrm{M}\Omega .$$

The body effect *helps* here: the bulk of $M_3$ is fixed, so when B rises the back gate also reduces the current, adding to the shielding.

### Step 5 — Deviation of $I_{out}$

$$\Delta I_{out} \approx \frac{\Delta V}{R_{out}} = \frac{1\ \mathrm{V}}{22.0\ \mathrm{M}\Omega} = 45\ \mathrm{nA} \quad\left(\text{or } \frac{1\ \mathrm{V}}{18.1\ \mathrm{M}\Omega} = 55\ \mathrm{nA} \text{ without } g_{mb}\right) .$$

Relative to the nominal 100 μA:

$$\frac{\Delta I_{out}}{I_{out}} \approx \frac{45\ \mathrm{nA}}{100\ \mu\mathrm{A}} = 0.045\ \% \quad(0.055\ \%\ \text{without } g_{mb}) .$$

The current *increases* (higher drain voltage, more current).

**Internal check.** Node B moves by $\Delta V_B = \Delta I_{out}\,r_{O2} = 45\ \mathrm{nA}\times100\ \mathrm{k}\Omega = 4.5$ mV, about $1/218$ of the 1-V step. $M_2$ sees only this tiny $V_{DS}$ change, which is why its current barely changes.

**Large-signal check.** Solving the full square-law equations with the factor $(1 + \lambda V_{DS})$ and the body effect, for $V_b$ anywhere in its allowed range, gives $\Delta I_{out} \approx 38$–40 nA. This is slightly less, because in that model the incremental $r_O = (1 + \lambda V_{DS})/(\lambda I_D)$ and $g_m$ are a little larger than the simple estimates. The order of magnitude, a few hundredths of a percent, is the same.

**Comparison with a simple mirror.** Without the cascode, a 1-V change across $M_2$ would change its current by about $\lambda\Delta V\cdot I_D = (0.1)(1)(100\ \mu\mathrm{A}) = 10\ \mu$A (10 %). The cascode reduces this by a factor of about 200.

### Result

Nominal: $I_{out} = I_{REF} = 100\ \mu$A (exact when the drain of $M_3$ is at $V_X$). With the drain 1 V higher:

$$\Delta I_{out} \approx \frac{1\ \mathrm{V}}{R_{out}}, \qquad R_{out} = \left[1 + (g_{m3} + g_{mb3})r_{O3}\right]r_{O2} + r_{O3} \approx 18\text{–}22\ \mathrm{M}\Omega,$$

with $g_{m3} = 1.79$ mS, $g_{mb3} \approx 0.39$ mS and $r_{O2} = r_{O3} = 100\ \mathrm{k}\Omega$. So $I_{out}$ rises by **about 0.045–0.055 μA (≈ 0.05 %)**; an exact large-signal solution gives about 0.04 μA.

**Common mistake.** Treating the output as a simple mirror and using $\Delta I = \lambda\Delta V\cdot I_D = 10\ \mu$A (10 %). The 1-V change appears across $M_3$, not across $M_2$. $M_2$ sees only a few millivolts.

**Common mistake.** Claiming the deviation is exactly zero because "the cascode holds node B fixed." The shielding is strong but finite ($\approx g_mr_O \approx 200$). A small change remains, and it is what defines the finite $R_{out}$.

**Common mistake.** Using the reference current scaled by the size ratio $(W/L)_3/(W/L)_2 = 3$ as the nominal current (300 μA). The output current is set by $M_2$, which has the same size and $V_{GS}$ as $M_1$. $M_3$ only shields it, so the nominal current is 100 μA.

# Detailed solution - R441

**Approach.** The circuit is a common-source (CS) stage $M_1$ with a *regulated* (gain-boosted) cascode: $M_3$ senses the voltage at X and drives the gate of the cascode device $M_2$. We model every transistor's thermal noise as a drain-source current of density $4kT\gamma g_m$, compute the short-circuit output current that each noise source produces (output shorted to AC ground), and divide by the stage's short-circuit transconductance $G_m$. This refers each source to the input; the powers of the uncorrelated sources add.

### Step 1 — The topology and the noise sources

Reading the figure:

- $M_1$: input transistor, gate at $V_{in}$, source grounded, drain at node X.
- $M_2$: cascode transistor, source at X, drain at $V_{out}$. Its gate is not at a fixed bias: it is driven by node G (our name for the drain of $M_3$).
- $M_3$: auxiliary CS amplifier, gate at X, source grounded, drain at G, loaded by the current source $I_1$.
- $I_1$ and $I_2$ are PMOS current sources $M_{P1}$ (load of $M_3$) and $M_{P2}$ (load of the output).

If X rises, $M_3$ pulls G down, which lowers $V_{GS2}$ and pushes X back. This local negative feedback holds X almost constant and multiplies the output resistance by roughly $(1 + A_3)$, where

$$A_3 = g_{m3}(r_{O3}\parallel r_{OP1})$$

is the gain of the auxiliary amplifier.

**Noise sources** (all uncorrelated, densities in A²/Hz):

$$
\overline{I_{n1}^2} = 4kT\gamma g_{m1},\quad
\overline{I_{n2}^2} = 4kT\gamma g_{m2},\quad
\overline{I_{n3}^2} = 4kT\gamma g_{m3},\quad
\overline{I_{nP1}^2} = 4kT\gamma g_{mP1},\quad
\overline{I_{nP2}^2} = 4kT\gamma g_{mP2},
$$

with $k$ Boltzmann's constant, $T$ the absolute temperature and $\gamma = 2/3$. Each is a current between the drain and source of its transistor.

### Step 2 — Small-signal model

Nodes: in, X, G, out, and ground (which stands for $V_{DD}$ and all bias points).

- $M_1$: dependent current $g_{m1}v_{in}$ from X to ground, $r_{O1}$ from X to ground, noise $I_{n1}$ from X to ground.
- $M_3$: dependent current $g_{m3}v_X$ from G to ground, $r_{O3}$ from G to ground, noise $I_{n3}$ from G to ground.
- $M_{P1}$: $r_{OP1}$ from G to ground, noise $I_{nP1}$ injected into G.
- $M_2$: dependent current $g_{m2}(v_G - v_X) - g_{mb2}v_X$ from out to X ($g_{mb2}$ is its body transconductance, bulk at ground), $r_{O2}$ between out and X, noise $I_{n2}$ from out to X.
- $M_{P2}$: $r_{OP2}$ from out to ground, noise $I_{nP2}$ injected into out.

<!-- diagram: diagram-01.cir -->

For the input-referred noise we short the output to AC ground and work with **short-circuit output currents**. Every source sees the same output resistance, so the ratio (output noise)/(gain) equals (short-circuit noise current)/$G_m$. Define for brevity

$$K = g_{m2}(1 + A_3) + g_{mb2} + \frac{1}{r_{O2}} \approx g_{m2}(1 + A_3),$$

the effective conductance seen looking up into the source of $M_2$ when the output is grounded. KCL at G with no noise gives $v_G = -A_3v_X$, so the current of $M_2$ from out to X becomes $-[g_{m2}(1 + A_3) + g_{mb2} + 1/r_{O2}]v_X = -Kv_X$.

### Step 3 — Short-circuit transconductance $G_m$ of the stage

Apply $v_{in}$ with the output shorted. KCL at X: the current arriving from $M_2$ equals the current leaving through $M_1$ and $r_{O1}$:

$$
\begin{aligned}
-Kv_X &= g_{m1}v_{in} + \frac{v_X}{r_{O1}}\\
v_X &= -\frac{g_{m1}v_{in}}{K + 1/r_{O1}} .
\end{aligned}
$$

The short-circuit output current is the current flowing down through $M_2$:

$$
\begin{aligned}
i_{out} &= -Kv_X = \frac{K}{K + 1/r_{O1}}\,g_{m1}v_{in}\\
G_m &= \frac{i_{out}}{v_{in}} = g_{m1}\,\frac{Kr_{O1}}{1 + Kr_{O1}} \approx g_{m1}.
\end{aligned}
$$

The approximation holds because $Kr_{O1} \approx g_{m2}r_{O1}(1 + A_3) \gg 1$: node X is so stiff that essentially all of $M_1$'s signal current goes up through $M_2$ to the output.

### Step 4 — Noise of $M_1$

$I_{n1}$ flows from X to ground, exactly in parallel with the controlled source $g_{m1}v_{in}$. A noise current $I_{n1}$ therefore has the same effect as an input voltage $v_{in} = I_{n1}/g_{m1}$. The input-referred contribution is

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}} .$$

### Step 5 — Noise of the output current source $M_{P2}$

With the output shorted, $I_{nP2}$ flows entirely into the short, so its short-circuit output current is $I_{nP2}$ itself. Dividing by $G_m \approx g_{m1}$:

$$\overline{V_{n,in}^2}\Big|_{M_{P2}} = \frac{\overline{I_{nP2}^2}}{G_m^2} \approx \frac{4kT\gamma g_{mP2}}{g_{m1}^2} .$$

It is divided by $g_{m1}^2$, not $g_{mP2}^2$: the input must produce, through $M_1$, a current equal to the load's noise current to mimic it.

### Step 6 — Noise of the cascode device $M_2$

Short the output and set $v_{in} = 0$. $I_{n2}$ flows from out to X inside $M_2$. KCL at X (all current arriving through $M_2$ leaves through $r_{O1}$):

$$
\begin{aligned}
-Kv_X + I_{n2} &= \frac{v_X}{r_{O1}}\\
v_X &= \frac{I_{n2}}{K + 1/r_{O1}} .
\end{aligned}
$$

The short-circuit output current is the current through $M_2$, which equals $v_X/r_{O1}$:

$$i_{out} = \frac{v_X}{r_{O1}} = \frac{I_{n2}}{1 + Kr_{O1}} .$$

Dividing by $G_m = g_{m1}Kr_{O1}/(1 + Kr_{O1})$:

$$
\begin{aligned}
V_{n,in}\Big|_{M_2} &= \frac{I_{n2}}{g_{m1}Kr_{O1}}\\
\overline{V_{n,in}^2}\Big|_{M_2} &= \frac{4kT\gamma g_{m2}}{(g_{m1}Kr_{O1})^2} \approx \frac{4kT\gamma}{g_{m2}\left[g_{m1}r_{O1}(1 + A_3)\right]^2} .
\end{aligned}
$$

Compared with $M_1$'s term this carries an extra factor $g_{m1}/\{g_{m2}[g_{m1}r_{O1}(1 + A_3)]^2\}$, a very small number. **Intuition:** a cascode device degenerated by a large resistance ($r_{O1}$, made to look even larger by the local feedback) behaves like a current source in series with another current source; its own noise current mostly circulates inside it and barely reaches the output.

### Step 7 — Noise of the auxiliary amplifier ($M_3$ and $M_{P1}$)

$I_{n3}$ and $I_{nP1}$ both flow into node G; call their sum $I_{nG}$, with $\overline{I_{nG}^2} = 4kT\gamma(g_{m3} + g_{mP1})$. Let $R_G = r_{O3}\parallel r_{OP1}$. KCL at G:

$$
\begin{aligned}
I_{nG} &= g_{m3}v_X + \frac{v_G}{R_G}\\
v_G &= I_{nG}R_G - A_3v_X .
\end{aligned}
$$

KCL at X (output shorted, $v_{in} = 0$):

$$
\begin{aligned}
g_{m2}(v_G - v_X) - \left(g_{mb2} + \frac{1}{r_{O2}}\right)v_X &= \frac{v_X}{r_{O1}}\\
g_{m2}I_{nG}R_G &= \left(K + \frac{1}{r_{O1}}\right)v_X\\
v_X &= \frac{g_{m2}R_G\,I_{nG}}{K + 1/r_{O1}} \approx \frac{R_G\,I_{nG}}{1 + A_3} \approx \frac{I_{nG}}{g_{m3}} .
\end{aligned}
$$

The short-circuit output current is again $v_X/r_{O1}$. Dividing by $G_m$ (same algebra as in Step 6):

$$V_{n,in}\Big|_{M_3,M_{P1}} = \frac{g_{m2}R_G\,I_{nG}}{g_{m1}r_{O1}K} \approx \frac{R_G\,I_{nG}}{(1 + A_3)\,g_{m1}r_{O1}} \approx \frac{I_{nG}}{g_{m3}\,g_{m1}r_{O1}}\quad(A_3 \gg 1),$$

so

$$\overline{V_{n,in}^2}\Big|_{M_3,M_{P1}} \approx \frac{4kT\gamma}{(g_{m1}r_{O1})^2}\left(\frac{1}{g_{m3}} + \frac{g_{mP1}}{g_{m3}^2}\right).$$

**Intuition.** The auxiliary amplifier's noise acts like a voltage $\approx I_{nG}/g_{m3}$ in series with the gate of $M_3$. The feedback loop makes X follow that voltage. But a voltage at X changes the output current only through $r_{O1}$, which is a factor $g_{m1}r_{O1}$ weaker than the input's effect through $g_{m1}$. So the contribution is suppressed by $(g_{m1}r_{O1})^2$, typically $10^3$–$10^4$.

### Step 8 — Total input-referred noise

Adding the uncorrelated powers:

$$
\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\gamma g_{mP2}}{g_{m1}^2}
+ \underbrace{\frac{4kT\gamma}{g_{m2}\left[g_{m1}r_{O1}(1 + A_3)\right]^2}}_{M_2,\ \text{negligible}}
+ \underbrace{\frac{4kT\gamma}{(g_{m1}r_{O1})^2}\left(\frac{1}{g_{m3}} + \frac{g_{mP1}}{g_{m3}^2}\right)}_{M_3,\,M_{P1},\ \text{negligible}} .
$$

Dropping the two suppressed terms (valid unless $g_{m3}$ is extremely small) and inserting $\gamma = 2/3$:

$$\overline{V_{n,in}^2} \approx 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{mP2}}{g_{m1}^2}\right) = \frac{8kT}{3}\left(\frac{1}{g_{m1}} + \frac{g_{mP2}}{g_{m1}^2}\right).$$

The gain boosting does not change the dominant noise: it is the same as for a plain CS stage with a PMOS current-source load. At high frequencies the capacitance at X would let more of the cascode and auxiliary-amplifier noise through, but the question asks for the low-frequency value.

### Result

$$\overline{V_{n,in}^2} \approx 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{mP2}}{g_{m1}^2}\right), \qquad \gamma = \frac23 .$$

$M_1$ and the output current source $M_{P2}$ dominate. The cascode $M_2$ is suppressed by $[g_{m1}r_{O1}(1 + A_3)]^2 g_{m2}/g_{m1}$, and the auxiliary amplifier ($M_3$, $M_{P1}$) by $(g_{m1}r_{O1})^2$, so both are negligible at low frequencies.

**Common mistake.** Using $8kT\gamma$ (or doubling the result) as for a differential pair. This is a single-ended stage with one input transistor, so the factor is $4kT\gamma$.

**Common mistake.** Referring the load noise as $4kT\gamma/g_{mP2}$. The noise current of $M_{P2}$ is injected at the output, and the input reproduces it only through $g_{m1}$, so it refers to the input as $4kT\gamma g_{mP2}/g_{m1}^2$.

**Common mistake.** Assuming the noise of $M_3$ and $M_{P1}$ appears directly at the input with unity weight because "the auxiliary amplifier is in the signal path". Its noise moves node X, and a voltage at X changes the output current only through $1/r_{O1}$, which is $g_{m1}r_{O1}$ times weaker than the input's effect through $g_{m1}$.

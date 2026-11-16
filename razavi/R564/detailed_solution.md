# Detailed solution - R564

**Approach.** Treat every noise source as a small signal. The very-high-gain op amp adjusts the common PMOS gate so that the voltage difference between X and Y equals its own input noise. Writing the node voltages of X and Y in terms of their small-signal impedances and solving that constraint gives the gate-driven current $g$. $M_5$ copies $g$ into $R_4$ and adds its own noise. Finally the powers of all the independent sources are added.

### Step 1 — Circuit, noise sources and node impedances

Reading the figure:

- $M_3$, $M_4$ and $M_5$ are identical PMOS devices with sources at $V_{DD}$ and a common gate driven by the op amp $A_1$ (− input at X, + input at Y).
- **Node X** (drain of $M_3$) connects to ground through $R_3$ and through $Q_1$, a diode-connected pnp, i.e. the small-signal resistance $1/g_{m1}$.
- **Node Y** (drain of $M_4$) connects to ground through $R_2$, and through $R_1$ in series with $Q_2$ ($1/g_{m2}$).
- **Output** $V_{BG}$ (drain of $M_5$) connects to ground through $R_4$.

The small-signal impedances from X and Y to ground (PMOS $r_O$ neglected) are

$$Z_X = R_3 \parallel \frac{1}{g_{m1}}, \qquad Z_Y = R_2 \parallel \left(R_1 + \frac{1}{g_{m2}}\right).$$

**Noise sources** (all mutually uncorrelated):

| Source | Model | Spectral density |
|---|---|---|
| $M_3$, $M_4$, $M_5$ | drain currents $i_3$, $i_4$, $i_5$ into X, Y, $V_{BG}$ | $\overline{i_n^2} = 4kT\gamma g_{mP} + \dfrac{K_Pg_{mP}^2}{C_{ox}WLf}$ each |
| $R_2$, $R_3$, $R_4$ | Norton currents $i_{R2}$, $i_{R3}$, $i_{R4}$ in parallel | $4kT/R$ |
| $R_1$ | Thévenin voltage $v_{R1}$ in series with $R_1$ | $4kTR_1$ |
| Op amp | input-referred voltage $v_n$ | $\overline{V_{n,op}^2}$ |

The first term of $\overline{i_n^2}$ is channel thermal noise and the second is flicker ($1/f$) noise.

### Step 2 — Small-signal model and the op-amp constraint

Let $g$ be the current pushed into each drain by the common gate-voltage change (the same for all three identical PMOS devices). The network then has three controlled currents $g$ into X, Y and $V_{BG}$, the noise currents listed above, and the node impedances $Z_X$, $Z_Y$ and $R_4$.

<!-- diagram: diagram-01.cir -->

Because the op-amp gain is very large, its output (the gate) takes whatever value makes its *effective* differential input zero. With the input-referred noise $v_n$ in series with an input, that means

$$v_X - v_Y = v_n .$$

(The sign convention for $v_n$ does not matter, because only its power enters the result.)

### Step 3 — Node voltages at X and Y

**Node X.** All currents entering X flow into $Z_X$ (Ohm's law):

$$v_X = \left(g + i_3 + i_{R3}\right)Z_X .$$

**Node Y.** The source $v_{R1}$ sits in series with the branch $R_1 + 1/g_{m2}$. By a Thévenin-to-Norton conversion, it is equivalent to a current $v_{R1}/(R_1 + 1/g_{m2})$ injected into Y in parallel with that branch. Hence

$$v_Y = Z_Y\left[g + i_4 + i_{R2} + \frac{v_{R1}}{R_1 + 1/g_{m2}}\right].$$

### Step 4 — Solve for the gate-driven current $g$

Substitute both into $v_X - v_Y = v_n$:

$$\left(g + i_3 + i_{R3}\right)Z_X - Z_Y\left[g + i_4 + i_{R2} + \frac{v_{R1}}{R_1 + 1/g_{m2}}\right] = v_n .$$

Collect the terms in $g$:

$$g\,(Z_X - Z_Y) = v_n - (i_3 + i_{R3})Z_X + (i_4 + i_{R2})Z_Y + \frac{Z_Y\,v_{R1}}{R_1 + 1/g_{m2}} .$$

Divide by $Z_X - Z_Y = -(Z_Y - Z_X)$:

$$g = \frac{(i_3 + i_{R3})Z_X - (i_4 + i_{R2})Z_Y - \dfrac{Z_Y\,v_{R1}}{R_1 + 1/g_{m2}} - v_n}{Z_Y - Z_X}.$$

The denominator $Z_Y - Z_X$ is the same quantity that decides whether the loop's negative feedback (through Y) beats its positive feedback (through X). In a stable design $Z_Y > Z_X$.

### Step 5 — Output voltage and its spectral density

$M_5$ delivers $g + i_5$ into $V_{BG}$, and $R_4$'s noise current adds there:

$$v_{BG} = R_4\left(g + i_5 + i_{R4}\right).$$

Substitute $g$ and add the powers of the independent sources (cross terms average to zero, and signs disappear when squaring):

$$\boxed{\overline{V_{n,BG}^2} = R_4^2\left\{\frac{Z_X^2\left(\overline{i_n^2} + \dfrac{4kT}{R_3}\right) + Z_Y^2\left(\overline{i_n^2} + \dfrac{4kT}{R_2}\right) + \left(\dfrac{Z_Y}{R_1 + 1/g_{m2}}\right)^2 4kTR_1 + \overline{V_{n,op}^2}}{(Z_Y - Z_X)^2} + \overline{i_n^2} + \frac{4kT}{R_4}\right\}}$$

The last term gives $R_4^2\cdot4kT/R_4 = 4kTR_4$, the usual noise of $R_4$.

### Step 6 — Transfer gains of the individual sources

| Source | Gain to $V_{BG}$ |
|---|---|
| Op amp $v_n$ | $\dfrac{R_4}{Z_Y - Z_X}$ |
| $M_4$ (and $R_2$, as a current) | $\dfrac{R_4Z_Y}{Z_Y - Z_X}$ |
| $M_3$ (and $R_3$, as a current) | $\dfrac{R_4Z_X}{Z_Y - Z_X}$ |
| $R_1$ (as a voltage) | $\dfrac{R_4}{Z_Y - Z_X}\cdot\dfrac{Z_Y}{R_1 + 1/g_{m2}}$ |
| $M_5$, $R_4$ (as currents) | $R_4$ |

**Interpretation.** Noise currents at X or Y create a voltage imbalance between the op-amp inputs. The loop must cancel it by changing the gate current $g$, and it can do so only through the *difference* in the two node impedances. So each imbalance is divided by $Z_Y - Z_X$, and the resulting current is copied to $R_4$. The PMOS noise is **not** suppressed by the loop; it is transferred, and partly amplified.

### Step 7 — Special case: bipolar transistors as ideal voltage sources

If $1/g_{m1}, 1/g_{m2} \to 0$, then $Z_X \to 0$ and $Z_Y \to R_2 \parallel R_1$:

- the $M_3$ and $R_3$ terms vanish (X is pinned by $Q_1$);
- $M_4$'s noise and $R_2$'s noise current pass with gain $R_4$;
- $v_{R1}$ gives $(R_4/R_1)^2\cdot4kTR_1 = R_4^2\cdot4kT/R_1$;
- the op-amp noise has gain $R_4/(R_1 \parallel R_2)$.

Combine $4kT/R_1 + 4kT/R_2 = 4kT/(R_1 \parallel R_2)$:

$$\overline{V_{n,BG}^2} \approx 2R_4^2\,\overline{i_n^2} + \left(\frac{R_4}{R_1 \parallel R_2}\right)^2\left[\overline{V_{n,op}^2} + 4kT(R_1 \parallel R_2)\right] + 4kTR_4 .$$

The op-amp noise is amplified by $R_4/(R_1 \parallel R_2)$, which can be well above unity.

### Step 8 — Typical magnitudes

In the usual design $R_2 = R_3$ with equal collector currents, so $g_{m1} = g_{m2} = g_m$. Then $g_mR_1 = \ln n$ (from $I_CR_1 = V_T\ln n$) and, for zero TC, $g_mR_2 = (R_2/R_1)\ln n \approx 17.2$. For $n = 8$ ($\ln n = 2.08$):

$$
\begin{aligned}
Z_X &= \frac{1}{g_m}\cdot\frac{17.2\times1}{17.2 + 1} = \frac{0.945}{g_m},\\
Z_Y &= \frac{1}{g_m}\cdot\frac{17.2\times3.08}{17.2 + 3.08} = \frac{2.61}{g_m},\\
Z_Y - Z_X &= \frac{1.67}{g_m}.
\end{aligned}
$$

Resulting gains:

- $M_4$: $R_4\times2.61/1.67 = 1.57R_4$;
- $M_3$: $R_4\times0.945/1.67 = 0.57R_4$;
- $M_5$: $R_4$;
- op amp: $R_4g_m/1.67 = 0.60\,g_mR_4$, which is large because $g_mR_4$ is typically of the order of 10.

So the op-amp noise and the PMOS noise (especially $M_4$'s) typically dominate. At low frequencies the PMOS flicker term $K_Pg_{mP}^2/(C_{ox}WLf)$ dominates $\overline{i_n^2}$, so large-area PMOS devices (large $WL$) are needed. A large $R_4$ (a high output level) raises every term, and a bypass capacitor at $V_{BG}$ helps only at high frequencies. Note also that keeping $1/g_m$ matters: $M_4$'s gain is $1.57R_4$ rather than the $R_4$ of the simplified model.

### Result

With $Z_X = R_3 \parallel (1/g_{m1})$ and $Z_Y = R_2 \parallel (R_1 + 1/g_{m2})$ (normally $Z_Y > Z_X$):

$$\overline{V_{n,BG}^2} = R_4^2\left\{\frac{Z_X^2\left(\overline{i_n^2} + \frac{4kT}{R_3}\right) + Z_Y^2\left(\overline{i_n^2} + \frac{4kT}{R_2}\right) + \left(\frac{Z_Y}{R_1 + 1/g_{m2}}\right)^2 4kTR_1 + \overline{V_{n,op}^2}}{(Z_Y - Z_X)^2} + \overline{i_n^2} + \frac{4kT}{R_4}\right\},$$

with $\overline{i_n^2} = 4kT\gamma g_{mP} + K_Pg_{mP}^2/(C_{ox}WLf)$.

If the bipolar transistors are treated as fixed voltage sources ($1/g_m \to 0$), this reduces to

$$\overline{V_{n,BG}^2} \approx 2R_4^2\,\overline{i_n^2} + \left(\frac{R_4}{R_1 \parallel R_2}\right)^2\left[\overline{V_{n,op}^2} + 4kT(R_1 \parallel R_2)\right] + 4kTR_4,$$

so the op-amp noise is amplified by $R_4/(R_1 \parallel R_2)$. For a typical design ($n = 8$, zero TC), $M_4$'s noise reaches the output with gain about $1.57R_4$, $M_3$'s with $0.57R_4$, $M_5$'s with $R_4$, and the op-amp noise with about $0.6g_mR_4$.

**Common mistake.** Assuming the op-amp noise appears at the output with unity gain, as in a follower. The op amp does not drive $V_{BG}$ directly. Its noise must be cancelled by a change of the PMOS current, which is then converted to voltage by $R_4$, giving a gain of $R_4/(Z_Y - Z_X)$ (or $R_4/(R_1 \parallel R_2)$ in the simplified model).

**Common mistake.** Claiming that the feedback loop suppresses the noise of $M_3$ and $M_4$. The loop forces $v_X - v_Y = v_n$, not $g = 0$. It cancels the *voltage* imbalance by changing the current, and that changed current is exactly what $M_5$ copies to the output.

**Common mistake.** Adding the contributions as voltages, or letting the noise of $M_3$ and $M_4$ "cancel" because they enter with opposite signs. The sources are independent, so their powers add, and the signs in the expression for $g$ do not matter.

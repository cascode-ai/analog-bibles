# Detailed solution - R379

**Approach.** Remove $Z_L$ and describe what remains, as seen from the drain, by its Thévenin equivalent: an open-circuit (Thévenin) voltage in series with a Thévenin impedance. If the two representations give the same Thévenin voltage and impedance, they produce the same output noise for *every* $Z_L$. With the noise sources off the two circuits are identical, so their Thévenin impedances are equal automatically; the question reduces to comparing the two open-circuit drain voltages.

### Step 1 — The circuits and the small-signal model

Reading the figures: $M_1$ is a common-source stage with load $Z_L$ (to $V_{DD}$, removed for the Thévenin analysis) and degeneration $Z_S$ (source to ground). The input terminal is at AC ground through the noiseless impedance $Z_1$ in series with the gate. In [Fig. 1] the noise is a current $I_n$ from drain to source; in [Fig. 2] it is a voltage $V_n$ in series with the gate (between $Z_1$ and the gate).

**Small-signal model in words.** Nodes: gate G, source S, drain D (and, in [Fig. 2], the node between $V_n$ and $Z_1$). Elements:

- $Z_1$ from G to AC ground ([Fig. 1]), or $V_n$ and $Z_1$ in series from AC ground to G ([Fig. 2]);
- $C_{GS}$ from G to S; $Z_S$ from S to ground;
- the channel from D to S, carrying $g_mv_{gs} + g_{mb}v_{bs} + v_{ds}/r_O$ (plus $I_n$ in [Fig. 1]). Here $v_{gs} = V_G - V_S$, $v_{bs} = -V_S$ (bulk grounded) and $v_{ds} = V_D - V_S$; $g_m$ is the transconductance, $g_{mb}$ the body transconductance and $r_O$ the output resistance.

Write $C = C_{GS}$ and $s = j\omega$.

<!-- diagram: diagram-01.cir -->

**Why Thévenin equivalents are enough.** Seen from $Z_L$, each circuit is a linear two-terminal network (drain to AC ground) with an internal source. Replacing it by $V_{Thev}$ in series with $Z_{Thev}$ gives the output $V_{n,out} = V_{Thev}\,Z_L/(Z_L + Z_{Thev})$. If $V_{Thev}$ and $Z_{Thev}$ agree, the outputs agree for any $Z_L$.

### Step 2 — Thévenin impedance (the same for both)

With the noise sources set to zero ($I_n = 0$, $V_n = 0$), the two circuits are *identical*: in both, the gate is connected to ground through $Z_1$. Hence $Z_{Thev1} = Z_{Thev2}$. For completeness, we compute it.

Inject a test current $I_x$ into the drain. It flows through the channel to S. KCL at G (current through $Z_1$ plus current through $C_{GS}$ is zero):

$$\frac{V_G}{Z_1} + sC\,(V_G - V_S) = 0 \;\Rightarrow\; V_G = \frac{sCZ_1}{1 + sCZ_1}V_S, \qquad v_{gs} = -\frac{V_S}{1 + sCZ_1}.$$

KCL at S (channel current $I_x$ plus capacitor current arrive, current through $Z_S$ leaves):

$$
\begin{aligned}
I_x + sC\,v_{gs} &= \frac{V_S}{Z_S}\\
I_x &= V_S\left[\frac{1}{Z_S} + \frac{sC}{1 + sCZ_1}\right] = V_S\,\frac{1 + sC(Z_1 + Z_S)}{Z_S(1 + sCZ_1)}.
\end{aligned}
$$

Channel equation: $I_x = g_mv_{gs} - g_{mb}V_S + (V_D - V_S)/r_O$, so

$$V_D = V_S + r_O\left(I_x - g_mv_{gs} + g_{mb}V_S\right) = r_OI_x + V_S\left[(1 + g_{mb}r_O) + \frac{g_mr_O}{1 + sCZ_1}\right].$$

Substituting $V_S$ and dividing by $I_x$:

$$Z_{Thev} = r_O + Z_S\,\frac{(1 + g_{mb}r_O)(1 + sCZ_1) + g_mr_O}{1 + sC(Z_1 + Z_S)} = \frac{r_O\,D}{1 + sC(Z_1 + Z_S)},$$

where

$$D = 1 + Z_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) + sC\left[Z_1 + Z_S + Z_1Z_S\left(g_{mb} + \frac{1}{r_O}\right)\right].$$

At $s = 0$ this is the familiar $r_O + (g_m + g_{mb})r_OZ_S + Z_S$.

### Step 3 — Thévenin voltage of [Fig. 1]

With the drain open, nothing but the channel connects to D, so the **total** current through the channel (including $I_n$) is zero.

**The gate loop.** Then the loop $Z_1$ – $C_{GS}$ – $Z_S$ receives no current from the channel and contains no source. Let $i$ be the current flowing in it (G → S through $C_{GS}$). Then $V_G = -Z_1i$, $V_S = Z_Si$ and $v_{gs} = i/(sC)$. KVL around the loop:

$$\frac{i}{sC} = V_G - V_S = -(Z_1 + Z_S)\,i \;\Rightarrow\; i\left[1 + sC(Z_1 + Z_S)\right] = 0 \;\Rightarrow\; i = 0 .$$

So $V_G = V_S = 0$ and $v_{gs} = 0$.

**Zero channel current:**

$$
\begin{aligned}
g_m\cdot0 - g_{mb}\cdot0 + \frac{V_D - 0}{r_O} + I_n &= 0\\
V_{Thev1} = V_D &= -I_nr_O .
\end{aligned}
$$

The noise current simply circulates through $r_O$; $C_{GS}$ plays no role.

### Step 4 — Thévenin voltage of [Fig. 2]

Again the channel carries zero current (drain open). But now the gate loop contains the source $V_n$: going from ground through $V_n$, $Z_1$, $C_{GS}$ and $Z_S$ back to ground, KVL gives

$$
\begin{aligned}
V_n &= i\,Z_1 + \frac{i}{sC} + i\,Z_S\\
i &= \frac{sC\,V_n}{1 + sC(Z_1 + Z_S)}.
\end{aligned}
$$

Hence

$$v_{gs} = \frac{i}{sC} = \frac{V_n}{1 + sC(Z_1 + Z_S)}, \qquad V_S = Z_Si = \frac{sCZ_S\,V_n}{1 + sC(Z_1 + Z_S)}.$$

**Zero channel current:**

$$
\begin{aligned}
g_mv_{gs} - g_{mb}V_S + \frac{V_D - V_S}{r_O} &= 0\\
V_D &= V_S + r_O\left(g_{mb}V_S - g_mv_{gs}\right)\\
V_D &= V_S\,(1 + g_{mb}r_O) - g_mr_O\,v_{gs}.
\end{aligned}
$$

Substitute $v_{gs}$ and $V_S$:

$$V_{Thev2} = V_n\,\frac{-g_mr_O + sCZ_S\,(1 + g_{mb}r_O)}{1 + sC(Z_1 + Z_S)}.$$

### Step 5 — Comparison: does the lemma hold?

The Thévenin impedances are equal (Step 2), so the two circuits are equivalent for every $Z_L$ if and only if $V_{Thev1} = V_{Thev2}$:

$$-I_nr_O = V_n\,\frac{-g_mr_O + sCZ_S(1 + g_{mb}r_O)}{1 + sC(Z_1 + Z_S)} .$$

Solve for $V_n$ and divide numerator and denominator by $r_O$:

$$V_n = \frac{I_nr_O\left[1 + sC(Z_1 + Z_S)\right]}{g_mr_O - sCZ_S(1 + g_{mb}r_O)} = \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{g_m - sC_{GS}Z_S\left(g_{mb} + 1/r_O\right)} .$$

**Low-frequency check.** At $s = 0$: $V_{Thev2} = -g_mr_OV_n$ and the condition becomes $V_n = I_n/g_m$, which is the original lemma.

**With $C_{GS}$ and $Z_1$** the required $V_n$ depends on $Z_1$, on $Z_S$ and on frequency. A gate-referred voltage $V_n = I_n/g_m$ is no longer equivalent to the drain noise current for arbitrary impedances: **the lemma does not hold in general**. It is recovered only when $|sC_{GS}(Z_1 + Z_S)| \ll 1$ and $|sC_{GS}Z_S(g_{mb} + 1/r_O)| \ll g_m$, i.e. at low frequencies or for small gate and source impedances (exactly for $Z_1 = Z_S = 0$).

**Physical reason.** With the drain open, the drain–source current source $I_n$ cannot drive the gate loop, so it leaves $V_G = V_S = 0$. The voltage source in series with the gate, however, pushes a current through $Z_1$, $C_{GS}$ and $Z_S$. That current both reduces $v_{gs}$ (by the divider $1/[1 + sC(Z_1 + Z_S)]$) and raises $V_S$ (which acts through $g_{mb}$ and $r_O$). To make the gate-referred model exact, a second, correlated noise current at the gate would be needed.

### Result

Thévenin impedances: equal, $Z_{Thev} = r_OD/[1 + sC_{GS}(Z_1 + Z_S)]$ (with the noise off the circuits are identical). Thévenin voltages:

$$V_{Thev1} = -I_nr_O, \qquad V_{Thev2} = V_n\,\frac{-g_mr_O + sC_{GS}Z_S(1 + g_{mb}r_O)}{1 + sC_{GS}(Z_1 + Z_S)}.$$

Equivalence requires

$$V_n = \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{g_m - sC_{GS}Z_S\left(g_{mb} + 1/r_O\right)},$$

which depends on $Z_1$, $Z_S$ and frequency. **The lemma does not hold in general**; it reduces to $V_n = I_n/g_m$ only when $|sC_{GS}(Z_1 + Z_S)| \ll 1$ (low frequencies or small source impedances).

**Common mistake.** Asserting that $C_{GS}$ cancels out because it is "inside" both circuits. It is in both, and that is why the Thévenin *impedances* are equal; but only the voltage-source representation drives current through it, so the Thévenin *voltages* differ.

**Common mistake.** Concluding that the Thévenin impedances differ. Setting $I_n = 0$ or $V_n = 0$ (a current source opened, a voltage source shorted) leaves exactly the same passive network in both figures.

**Common mistake.** Mishandling the body effect: the $g_{mb}v_{bs}$ source flows from drain to source like $g_mv_{gs}$, with $v_{bs} = -V_S$. Sending it from the bulk or giving it the wrong sign changes the $(1 + g_{mb}r_O)$ factor in $V_{Thev2}$.

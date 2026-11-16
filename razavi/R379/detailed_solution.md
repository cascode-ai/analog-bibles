# Detailed solution - R379

**Approach.** Remove $Z_L$ and replace what remains, seen from the drain, by its Thévenin equivalent; if both representations give the same Thévenin voltage and impedance, they give the same output noise for *every* $Z_L$. With the noise sources off the two circuits are identical, so the impedances agree automatically and the question reduces to comparing the open-circuit drain voltages.

### Step 1 — The small-signal model

Nodes: gate G, source S, drain D (and, in [Fig. 2], the node between $V_n$ and $Z_1$). Write $C = C_{GS}$ and $s = j\omega$.

- $Z_1$ from G to ac ground ([Fig. 1]), or $V_n$ and $Z_1$ in series from ac ground to G ([Fig. 2]);
- $C_{GS}$ from G to S; $Z_S$ from S to ground;
- the channel from D to S, carrying $g_mv_{gs} + g_{mb}v_{bs} + v_{ds}/r_O$ (plus $I_n$ in [Fig. 1]), with $v_{gs} = V_G - V_S$, $v_{bs} = -V_S$ (bulk grounded) and $v_{ds} = V_D - V_S$.

<!-- diagram: diagram-01.cir -->

With $V_{Thev}$ and $Z_{Thev}$ for the network seen by $Z_L$, the output is $V_{n,out} = V_{Thev}\,Z_L/(Z_L + Z_{Thev})$.

### Step 2 — Thévenin impedance (the same for both)

With $I_n = 0$ and $V_n = 0$ both circuits reduce to the same noise-free network (gate to ground through $Z_1$), so $Z_{Thev1} = Z_{Thev2}$. To compute it, inject a test current $I_x$ into the drain; it flows through the channel to S. KCL at G:

$$\frac{V_G}{Z_1} + sC\,(V_G - V_S) = 0 \;\Rightarrow\; V_G = \frac{sCZ_1}{1 + sCZ_1}V_S, \qquad v_{gs} = -\frac{V_S}{1 + sCZ_1}.$$

KCL at S (channel and capacitor currents arrive, $Z_S$ current leaves):

$$
\begin{aligned}
I_x + sC\,v_{gs} &= \frac{V_S}{Z_S}\\
I_x &= V_S\left[\frac{1}{Z_S} + \frac{sC}{1 + sCZ_1}\right] = V_S\,\frac{1 + sC(Z_1 + Z_S)}{Z_S(1 + sCZ_1)}.
\end{aligned}
$$

From the channel equation $I_x = g_mv_{gs} - g_{mb}V_S + (V_D - V_S)/r_O$:

$$V_D = V_S + r_O\left(I_x - g_mv_{gs} + g_{mb}V_S\right) = r_OI_x + V_S\left[(1 + g_{mb}r_O) + \frac{g_mr_O}{1 + sCZ_1}\right].$$

Substituting $V_S$ and dividing by $I_x$:

$$Z_{Thev} = r_O + Z_S\,\frac{(1 + g_{mb}r_O)(1 + sCZ_1) + g_mr_O}{1 + sC(Z_1 + Z_S)} = \frac{r_O\,D}{1 + sC(Z_1 + Z_S)},$$

$$D = 1 + Z_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) + sC\left[Z_1 + Z_S + Z_1Z_S\left(g_{mb} + \frac{1}{r_O}\right)\right].$$

At $s = 0$ this is the familiar $r_O + (g_m + g_{mb})r_OZ_S + Z_S$.

### Step 3 — Thévenin voltage of [Fig. 1]

With the drain open, the **total** channel current (including $I_n$) is zero, so the loop $Z_1$ – $C_{GS}$ – $Z_S$ receives no current and contains no source. With $i$ the loop current (G → S through $C_{GS}$), $V_G = -Z_1i$, $V_S = Z_Si$ and $v_{gs} = i/(sC)$, and KVL gives

$$\frac{i}{sC} = V_G - V_S = -(Z_1 + Z_S)\,i \;\Rightarrow\; i\left[1 + sC(Z_1 + Z_S)\right] = 0 \;\Rightarrow\; i = 0 .$$

So $V_G = V_S = 0$, $v_{gs} = 0$, and zero channel current gives

$$
\begin{aligned}
g_m\cdot0 - g_{mb}\cdot0 + \frac{V_D - 0}{r_O} + I_n &= 0\\
V_{Thev1} = V_D &= -I_nr_O .
\end{aligned}
$$

The noise current simply circulates through $r_O$; $C_{GS}$ plays no role.

### Step 4 — Thévenin voltage of [Fig. 2]

The channel again carries zero current, but now the gate loop contains $V_n$. KVL from ground through $V_n$, $Z_1$, $C_{GS}$ and $Z_S$:

$$
\begin{aligned}
V_n &= i\,Z_1 + \frac{i}{sC} + i\,Z_S\\
i &= \frac{sC\,V_n}{1 + sC(Z_1 + Z_S)},
\end{aligned}
$$

$$v_{gs} = \frac{i}{sC} = \frac{V_n}{1 + sC(Z_1 + Z_S)}, \qquad V_S = Z_Si = \frac{sCZ_S\,V_n}{1 + sC(Z_1 + Z_S)}.$$

Zero channel current:

$$
\begin{aligned}
g_mv_{gs} - g_{mb}V_S + \frac{V_D - V_S}{r_O} &= 0\\
V_D &= V_S + r_O\left(g_{mb}V_S - g_mv_{gs}\right) = V_S\,(1 + g_{mb}r_O) - g_mr_O\,v_{gs},
\end{aligned}
$$

$$V_{Thev2} = V_n\,\frac{-g_mr_O + sCZ_S\,(1 + g_{mb}r_O)}{1 + sC(Z_1 + Z_S)}.$$

### Step 5 — Comparison: does the lemma hold?

With equal impedances, the circuits are equivalent for every $Z_L$ if and only if $V_{Thev1} = V_{Thev2}$:

$$-I_nr_O = V_n\,\frac{-g_mr_O + sCZ_S(1 + g_{mb}r_O)}{1 + sC(Z_1 + Z_S)} ,$$

$$V_n = \frac{I_nr_O\left[1 + sC(Z_1 + Z_S)\right]}{g_mr_O - sCZ_S(1 + g_{mb}r_O)} = \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{g_m - sC_{GS}Z_S\left(g_{mb} + 1/r_O\right)} .$$

At $s = 0$, $V_{Thev2} = -g_mr_OV_n$ and the condition is $V_n = I_n/g_m$, the original lemma.

**With $C_{GS}$ and $Z_1$** the required $V_n$ depends on $Z_1$, $Z_S$ and frequency, so **the lemma does not hold in general**. It is recovered only when $|sC_{GS}(Z_1 + Z_S)| \ll 1$ and $|sC_{GS}Z_S(g_{mb} + 1/r_O)| \ll g_m$, i.e. at low frequencies or for small gate and source impedances (exactly for $Z_1 = Z_S = 0$).

**Physical reason.** With the drain open, $I_n$ cannot drive the gate loop, but a voltage in series with the gate pushes a current through $Z_1$, $C_{GS}$ and $Z_S$, which both reduces $v_{gs}$ (by $1/[1 + sC(Z_1 + Z_S)]$) and raises $V_S$ (acting through $g_{mb}$ and $r_O$). An exact gate-referred model would need a second, correlated noise current at the gate.

### Result

Thévenin impedances: equal, $Z_{Thev} = r_OD/[1 + sC_{GS}(Z_1 + Z_S)]$ (with the noise off the circuits are identical). Thévenin voltages:

$$V_{Thev1} = -I_nr_O, \qquad V_{Thev2} = V_n\,\frac{-g_mr_O + sC_{GS}Z_S(1 + g_{mb}r_O)}{1 + sC_{GS}(Z_1 + Z_S)}.$$

Equivalence requires

$$V_n = \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{g_m - sC_{GS}Z_S\left(g_{mb} + 1/r_O\right)},$$

which depends on $Z_1$, $Z_S$ and frequency. **The lemma does not hold in general**; it reduces to $V_n = I_n/g_m$ only when $|sC_{GS}(Z_1 + Z_S)| \ll 1$ (low frequencies or small source impedances).

**Common mistake.** Asserting that $C_{GS}$ cancels because it is in both circuits. That is why the Thévenin *impedances* are equal, but only the voltage-source representation drives current through it, so the Thévenin *voltages* differ.

**Common mistake.** Concluding that the Thévenin impedances differ. Opening $I_n$ or shorting $V_n$ leaves exactly the same noise-free network in both figures.

**Common mistake.** Mishandling the body effect: $g_{mb}v_{bs}$ flows from drain to source like $g_mv_{gs}$, with $v_{bs} = -V_S$. A wrong direction or sign changes the $(1 + g_{mb}r_O)$ factor in $V_{Thev2}$.

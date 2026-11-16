# Detailed solution - R378

**Approach.** Write the small-signal model of the degenerated transistor including $C_{GS}$, $g_{mb}$, $r_O$ and the gate impedance $Z_1$. For each representation, apply KCL at the gate node and at the source node, solve for the source voltage, and then find the channel current, which is the current through the drain short. Comparing the two results shows what $V_n$ would have to be for them to agree; if that depends on $Z_1$, $Z_S$ or frequency, the lemma fails.

### Step 1 — Small-signal model and notation

Common to both figures: the drain D is shorted to AC ground, and the current in that short ($I_{n,out}$) equals the channel current flowing from drain to source. The source S connects to ground through $Z_S$, the bulk is at ground, and the gate–source capacitance $C_{GS}$ connects the gate G to S. Other capacitances are neglected.

**The channel** (from D to S) carries:

- $g_mv_{gs}$, where $v_{gs} = V_G - V_S$ and $g_m$ is the transconductance;
- $g_{mb}v_{bs} = -g_{mb}V_S$, since the bulk is grounded ($g_{mb}$ is the body transconductance);
- $v_{ds}/r_O = -V_S/r_O$, since the drain is grounded ($r_O$ is the output resistance);
- in [Fig. 1] only, the noise current $I_n$.

To shorten the algebra define

$$a \equiv g_{mb} + \frac{1}{r_O}, \qquad C \equiv C_{GS}, \qquad s = j\omega,$$

so the channel current is $I_{ch} = g_mv_{gs} - aV_S\ (+\,I_n)$.

**Gate network.** In [Fig. 1], $Z_1$ connects G to AC ground. In [Fig. 2], the noise voltage $V_n$ and $Z_1$ are in series between ground and G.

**Source node KCL (both figures).** The channel current and the $C_{GS}$ current both arrive at S and leave through $Z_S$:

$$I_{ch} + sC\,v_{gs} = \frac{V_S}{Z_S}. \tag{1}$$

<!-- diagram: diagram-01.cir -->

### Step 2 — [Fig. 1]: gate voltage

KCL at G: the current through $Z_1$ to ground plus the current through $C_{GS}$ to S is zero (the gate has no other connection):

$$
\begin{aligned}
\frac{V_G}{Z_1} + sC\,(V_G - V_S) &= 0\\
V_G\,(1 + sCZ_1) &= sCZ_1V_S\\
V_G &= \frac{sCZ_1}{1 + sCZ_1}\,V_S .
\end{aligned}
$$

So

$$v_{gs} = V_G - V_S = V_S\,\frac{sCZ_1 - (1 + sCZ_1)}{1 + sCZ_1} = -\frac{V_S}{1 + sCZ_1}.$$

When the source moves, the gate follows partly through $C_{GS}$, so $v_{gs}$ is smaller than $-V_S$.

### Step 3 — [Fig. 1]: source voltage and output current

Insert $I_{ch} = g_mv_{gs} - aV_S + I_n$ and $v_{gs}$ into (1):

$$
\begin{aligned}
(g_m + sC)\,v_{gs} - aV_S + I_n &= \frac{V_S}{Z_S}\\
-\frac{(g_m + sC)V_S}{1 + sCZ_1} - aV_S + I_n &= \frac{V_S}{Z_S}\\
I_n &= V_S\left[\frac{1}{Z_S} + a + \frac{g_m + sC}{1 + sCZ_1}\right].
\end{aligned}
$$

Multiply both sides by $Z_S(1 + sCZ_1)$:

$$I_nZ_S(1 + sCZ_1) = V_S\left[(1 + sCZ_1)(1 + aZ_S) + (g_m + sC)Z_S\right] \equiv V_S\,D,$$

where, expanding,

$$
\begin{aligned}
D &= 1 + aZ_S + sCZ_1 + sCaZ_1Z_S + g_mZ_S + sCZ_S\\
&= 1 + Z_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) + sC_{GS}\left[Z_1 + Z_S + Z_1Z_S\left(g_{mb} + \frac{1}{r_O}\right)\right].
\end{aligned}
$$

Hence

$$V_S = \frac{I_nZ_S(1 + sCZ_1)}{D}.$$

**Output current.** From (1), $I_{ch} = V_S/Z_S - sC\,v_{gs}$:

$$
\begin{aligned}
I_{n,out1} = I_{ch} &= \frac{V_S}{Z_S} + \frac{sC\,V_S}{1 + sCZ_1} = V_S\,\frac{1 + sCZ_1 + sCZ_S}{Z_S(1 + sCZ_1)}\\
&= \frac{I_nZ_S(1 + sCZ_1)}{D}\cdot\frac{1 + sC(Z_1 + Z_S)}{Z_S(1 + sCZ_1)}\\
&= \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{D}.
\end{aligned}
$$

### Step 4 — [Fig. 2]: gate, source and output

<!-- diagram: diagram-02.cir -->

**Gate.** The same current flows through $V_n$, $Z_1$ and $C_{GS}$. The current through $Z_1$ into G equals the current through $C_{GS}$ from G to S:

$$\frac{V_n - V_G}{Z_1} = sC\,(V_G - V_S) \quad\Longrightarrow\quad V_n - V_G = sCZ_1\,v_{gs}.$$

Write $V_G = v_{gs} + V_S$:

$$
\begin{aligned}
V_n - V_S - v_{gs} &= sCZ_1\,v_{gs}\\
v_{gs} &= \frac{V_n - V_S}{1 + sCZ_1}.
\end{aligned}
$$

**Source.** Now $I_{ch} = g_mv_{gs} - aV_S$ (no $I_n$). Equation (1) becomes

$$
\begin{aligned}
(g_m + sC)\,v_{gs} &= V_S\left(a + \frac{1}{Z_S}\right)\\
\frac{(g_m + sC)(V_n - V_S)}{1 + sCZ_1} &= \frac{V_S(1 + aZ_S)}{Z_S}.
\end{aligned}
$$

Multiply by $Z_S(1 + sCZ_1)$ and collect $V_S$:

$$
\begin{aligned}
(g_m + sC)Z_S\,(V_n - V_S) &= V_S\,(1 + aZ_S)(1 + sCZ_1)\\
(g_m + sC)Z_S\,V_n &= V_S\left[(1 + aZ_S)(1 + sCZ_1) + (g_m + sC)Z_S\right] = V_S\,D,
\end{aligned}
$$

with the **same** $D$ as in Step 3. So $V_S = (g_m + sC)Z_SV_n/D$.

**Gate–source voltage.** Using $D - (g_m + sC)Z_S = (1 + aZ_S)(1 + sCZ_1)$:

$$V_n - V_S = V_n\,\frac{D - (g_m + sC)Z_S}{D} = V_n\,\frac{(1 + aZ_S)(1 + sCZ_1)}{D}, \qquad v_{gs} = \frac{V_n(1 + aZ_S)}{D}.$$

**Output current:**

$$
\begin{aligned}
I_{n,out2} = g_mv_{gs} - aV_S &= \frac{V_n}{D}\left[g_m(1 + aZ_S) - a(g_m + sC)Z_S\right]\\
&= \frac{V_n}{D}\left[g_m + g_maZ_S - ag_mZ_S - asCZ_S\right]\\
&= \frac{V_n\left[g_m - sC_{GS}Z_S\left(g_{mb} + \dfrac{1}{r_O}\right)\right]}{D}.
\end{aligned}
$$

### Step 5 — Check at low frequency

For $s \to 0$, $D \to 1 + Z_S(g_m + g_{mb} + 1/r_O)$ and

$$I_{n,out1} \to \frac{I_n}{1 + Z_S(g_m + g_{mb} + 1/r_O)}, \qquad I_{n,out2} \to \frac{g_mV_n}{1 + Z_S(g_m + g_{mb} + 1/r_O)},$$

the expressions given in the problem. They agree for any $Z_S$ (and any $Z_1$, which then carries no current) when $V_n = I_n/g_m$: the lemma.

### Step 6 — Does the lemma hold with $C_{GS}$ and $Z_1$?

Setting $I_{n,out1} = I_{n,out2}$ (the denominators are identical) requires

$$V_n = I_n\,\frac{1 + sC_{GS}(Z_1 + Z_S)}{g_m - sC_{GS}Z_S\left(g_{mb} + 1/r_O\right)}.$$

This ratio depends on $Z_1$, on $Z_S$ and on frequency, so **no single gate-referred voltage $V_n = I_n/g_m$ (or any fixed $V_n$) is equivalent to the channel noise current for arbitrary $Z_1$ and $Z_S$. The lemma does not hold in general.**

It is recovered:

- exactly when $Z_1 = Z_S = 0$: then $I_{n,out1} = I_n$ and $I_{n,out2} = g_mV_n$;
- approximately when $|sC_{GS}(Z_1 + Z_S)| \ll 1$ and $|sC_{GS}Z_S(g_{mb} + 1/r_O)| \ll g_m$, i.e. at low frequencies or with small gate and source impedances.

**Physical reason.** In [Fig. 2], the voltage $V_n$ in series with the gate drives a current through $Z_1$ and $C_{GS}$ into the source node. In [Fig. 1] the noise current flows only from drain to source, and the gate network is excited only indirectly through $V_S$. Once $C_{GS}$ conducts, the gate is no longer an open circuit, and a single voltage source cannot reproduce both the channel current and the gate current.

**Remark: repairing the representation.** An exact gate-referred model needs a second, fully correlated noise source: a current $I_g = sC_{GS}I_n/g_m$ injected from the source into the outer end of $Z_1$ (node G′, between $Z_1$ and $V_n$). For $g_{mb} = 0$ and $r_O \to \infty$, repeating Step 4 with this source gives (KCL at G′: $V_{G'}/Z_1 = I_g - sCv_{gs}$; at S: $V_S = Z_S[(g_m + sC)v_{gs} - I_g]$; and $v_{gs} = V_{G'} + V_n - V_S$)

$$v_{gs}\left[1 + g_mZ_S + sC(Z_1 + Z_S)\right] = V_n + (Z_1 + Z_S)I_g,$$

so $g_mv_{gs} = I_n[1 + sC(Z_1 + Z_S)]/D$ with $V_n = I_n/g_m$: exactly $I_{n,out1}$, for any $Z_1$, $Z_S$.

### Result

With

$$D = 1 + Z_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) + sC_{GS}\left[Z_1 + Z_S + Z_1Z_S\left(g_{mb} + \frac{1}{r_O}\right)\right],$$

$$I_{n,out1} = \frac{I_n\left[1 + sC_{GS}(Z_1 + Z_S)\right]}{D}, \qquad I_{n,out2} = \frac{V_n\left[g_m - sC_{GS}Z_S\left(g_{mb} + \dfrac{1}{r_O}\right)\right]}{D}.$$

Equivalence would require $V_n = I_n[1 + sC_{GS}(Z_1 + Z_S)]/[g_m - sC_{GS}Z_S(g_{mb} + 1/r_O)]$, which depends on $Z_1$, $Z_S$ and frequency. **The lemma does not hold in general**; it holds exactly for $Z_1 = Z_S = 0$ and approximately when $|sC_{GS}(Z_1 + Z_S)| \ll 1$. An exact gate-referred model needs an additional, correlated gate noise current.

(For $g_{mb} = 0$ and $r_O \to \infty$: $I_{n,out1} = I_n[1 + sC_{GS}(Z_1 + Z_S)]/[1 + g_mZ_S + sC_{GS}(Z_1 + Z_S)]$ and $I_{n,out2} = g_mV_n/[1 + g_mZ_S + sC_{GS}(Z_1 + Z_S)]$.)

**Common mistake.** Declaring that the lemma still holds because "noise can always be referred to the gate by dividing by $g_m$". The division by $g_m$ refers the noise correctly only when no current flows into the gate. With $C_{GS}$ and a finite $Z_1$ or $Z_S$, the gate draws current, and the required $V_n$ becomes $Z$- and frequency-dependent.

**Common mistake.** Forgetting the $C_{GS}$ current in the source-node KCL. Both the channel current and the capacitor current enter the source node and leave through $Z_S$; dropping the $sC_{GS}v_{gs}$ term gives the wrong $D$ and hides the difference between the two numerators.

**Common mistake.** Concluding that $C_{GS}$ has no effect because the two denominators are identical. The denominators are the same, but the numerators differ: $1 + sC_{GS}(Z_1 + Z_S)$ multiplies $I_n$, while $V_n$ is multiplied by $g_m - sC_{GS}Z_S(g_{mb} + 1/r_O)$.

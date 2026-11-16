# Detailed solution - R118

**Approach.** $M_2$ is a common-source (CS) stage whose source is "degenerated" by the NMOS current source $M_1$ and whose load is the PMOS current source $M_3$. A transistor with its gate at a dc bias and its source at a supply is, in small-signal terms, just its output resistance $r_O$. We replace $M_1$ and $M_3$ accordingly and solve the degenerated CS stage exactly.

### Step 1 — Reading the circuit

From the figure:

- $M_3$: PMOS, source at $V_{DD}$, gate at the dc bias $V_{b1}$, drain at $V_{out}$. It is a **current-source load**.
- $M_2$: NMOS, gate at $V_{in}$, drain at $V_{out}$, source at an internal node we call $S$.
- $M_1$: NMOS, gate at the dc bias $V_{b2}$, source at ground, drain at $S$. It is a **current source** in the source of $M_2$.

The output is at the drain of $M_2$, so the stage is an inverting CS amplifier with source degeneration.

The problem gives $\gamma = 0$ (no body effect for $M_2$) and $\lambda \neq 0$. Here $g_{mi}$ is the transconductance of $M_i$, $r_{Oi} \approx 1/(\lambda I_D)$ its output resistance due to channel-length modulation, and lower-case symbols are small-signal quantities.

### Step 2 — The current sources become resistors

$V_{b1}$, $V_{b2}$, $V_{DD}$ and ground are all constant, i.e. **ac grounds**.

- **$M_1$**: gate at ac ground and source at ground, so $v_{gs1} = 0$ and its controlled source $g_{m1}v_{gs1}$ is zero. What remains is $r_{O1}$ from $S$ to ground.
- **$M_3$**: gate and source both at ac ground, so $v_{gs3} = 0$. What remains is $r_{O3}$ from out to ac ground.

So $g_{m1}$ and $g_{m3}$ do not appear in the answer. Define the degeneration and load resistances

$$R_S = r_{O1},\qquad R_D = r_{O3}.$$

### Step 3 — Small-signal model

The unknown node voltages are $v_{out}$ and $v_S$:

- $r_{O3}$ from out to ac ground;
- **$M_2$**: $v_{gs2} = v_{in} - v_S$; a current source $g_{m2}(v_{in} - v_S)$ from out (drain) to $S$ (source), with $r_{O2}$ between out and $S$;
- $r_{O1}$ from $S$ to ground.

<!-- diagram: diagram-01.cir -->

The same small-signal current $i$ flows down through $r_{O3}$, $M_2$ and $r_{O1}$ (there is a single path). Take $i$ positive downward.

### Step 4 — Equations

**Source node** (Ohm's law on $r_{O1}$):

$$v_S = i\,r_{O1}.$$

**Output node.** The current $i$ flows down through $r_{O3}$ from ac ground to the output, so $i = (0 - v_{out})/r_{O3}$:

$$v_{out} = -i\,r_{O3}.$$

**Transistor $M_2$** (drain-to-source current = controlled source + current in $r_{O2}$):

$$i = g_{m2}(v_{in} - v_S) + \frac{v_{out} - v_S}{r_{O2}}.$$

### Step 5 — Solve for the gain

Substitute $v_S = ir_{O1}$ and $v_{out} = -ir_{O3}$:

$$i = g_{m2}v_{in} - g_{m2}r_{O1}\,i + \frac{-ir_{O3} - ir_{O1}}{r_{O2}}.$$

Move the terms in $i$ to the left:

$$i\left(1 + g_{m2}r_{O1} + \frac{r_{O3} + r_{O1}}{r_{O2}}\right) = g_{m2}v_{in}.$$

Multiply by $r_{O2}$:

$$i\,(r_{O2} + g_{m2}r_{O1}r_{O2} + r_{O3} + r_{O1}) = g_{m2}r_{O2}\,v_{in},$$

$$i = \frac{g_{m2}r_{O2}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}\,v_{in}.$$

With $v_{out} = -ir_{O3}$:

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m2}r_{O2}r_{O3}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}.$$

This is the general degenerated-CS result $A_v = -g_mr_OR_D/(R_D + r_O + R_S + g_mr_OR_S)$ with $R_S = r_{O1}$ and $R_D = r_{O3}$.

### Step 6 — How large is it?

Assume $g_{m2}r_{O2} \gg 1$ and resistances $r_{O1}, r_{O2}, r_{O3}$ of the same order. Compare the denominator terms:

- $g_{m2}r_{O1}r_{O2} = (g_{m2}r_{O2})\,r_{O1}$ is larger than $r_{O1}$ by the intrinsic gain $g_{m2}r_{O2}$;
- it is also much larger than $r_{O2}$ and $r_{O3}$, because $g_{m2}r_{O1} \gg 1$.

So the denominator is approximately $g_{m2}r_{O1}r_{O2}$, and

$$A_v \approx -\frac{g_{m2}r_{O2}r_{O3}}{g_{m2}r_{O1}r_{O2}} = -\frac{r_{O3}}{r_{O1}}.$$

If $M_1$ and $M_3$ have similar output resistances, **the gain is only about $-1$**.

**Intuition.** Two views give the same answer:

1. *Fixed current.* $M_1$ is a current source, so it forces the current through $M_2$ to stay (almost) constant. A CS stage produces output voltage only by changing its current, so the gain must be small. The only current change allowed is the one that flows in $r_{O1}$: $v_S$ follows $v_{in}$ (the $v_{gs2}$ of $M_2$ barely changes), giving $i \approx v_{in}/r_{O1}$ and $v_{out} = -ir_{O3} \approx -(r_{O3}/r_{O1})v_{in}$.
2. *$G_mR_{out}$.* Strong degeneration makes the effective transconductance $G_m \approx 1/R_S = 1/r_{O1}$, while the output resistance is $r_{O3}$ in parallel with the very large $r_{O2} + (1 + g_{m2}r_{O2})r_{O1}$, i.e. about $r_{O3}$. So $|A_v| \approx r_{O3}/r_{O1}$.

### Result

$$A_v = -\frac{g_{m2}r_{O2}r_{O3}}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}} \approx -\frac{r_{O3}}{r_{O1}},$$

an inverting gain of only about unity in magnitude, because the huge degeneration $r_{O1}$ almost freezes the current of $M_2$.

**Common mistake.** Ignoring the degeneration and writing $A_v = -g_{m2}(r_{O2}\parallel r_{O3})$, a gain of order $g_mr_O/2$. That would be true only if the source of $M_2$ were at ac ground. It is connected to the drain of $M_1$, which presents $r_{O1}$, a resistance much larger than $1/g_{m2}$, so the gain collapses to about $r_{O3}/r_{O1}$.

**Common mistake.** Keeping $g_{m1}$ or $g_{m3}$ in the answer, e.g. treating $M_1$ as a diode with resistance $1/g_{m1}$. The gates of $M_1$ and $M_3$ are at fixed biases, so their $v_{gs}$ is zero and each contributes only its $r_O$.

**Common mistake.** Taking the output at the source of $M_2$ or giving a positive gain. The output is the drain of $M_2$; a rising $v_{in}$ increases (slightly) the current pulled through $r_{O3}$, so $v_{out}$ falls.

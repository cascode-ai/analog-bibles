# Detailed solution - R113

**Approach.** Write KCL at the two internal nodes of the small-signal circuit (the drain of $M_1$, called $A$, and the output) and solve for $v_{out}/v_{in}$. A short $\lambda = 0$ argument then gives the physical meaning of the result.

### Step 1 — Small-signal model

Call the drain of $M_1$ (the bottom of $R_D$, which also drives the gate of $M_2$) node $A$. The bias current flows in a single path $V_{DD} \to M_2 \to R_D \to M_1 \to$ ground; with $R_D = 0$, $M_2$ would be diode-connected. $V_{DD}$ is an ac ground and $\gamma = 0$, so with the unknowns $v_A$ and $v_{out}$:

- **$M_1$**: $v_{gs1} = v_{in}$; a controlled source $g_{m1}v_{in}$ from $A$ to ground, with $r_{O1}$ from $A$ to ground.
- **$R_D$**: between out and $A$.
- **$M_2$**: $v_{gs2} = v_A$ (source at ac ground); a controlled source $g_{m2}v_A$ from out (drain) to ground (source), with $r_{O2}$ from out to ground.

<!-- diagram: diagram-01.cir -->

Equivalently, $M_2$ pushes $-g_{m2}v_A$ from $V_{DD}$ into the output: when $v_A$ falls, the PMOS delivers *more* current.

### Step 2 — KCL at the output node and at node A

Summing the currents leaving each node:

$$\frac{v_{out} - v_A}{R_D} + g_{m2}v_A + \frac{v_{out}}{r_{O2}} = 0, \tag{1}$$

$$g_{m1}v_{in} + \frac{v_A}{r_{O1}} + \frac{v_A - v_{out}}{R_D} = 0. \tag{2}$$

Adding (1) and (2), the $R_D$ terms cancel (KCL for the supernode $A$–$R_D$–out): whatever current $M_2$ supplies must flow down through $M_1$:

$$g_{m1}v_{in} + g_{m2}v_A + \frac{v_A}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0. \tag{3}$$

### Step 3 — Solve for the gain

**$v_A$ from (1).** Collecting the $v_{out}$ and $v_A$ terms:

$$v_{out}\left(\frac{1}{R_D} + \frac{1}{r_{O2}}\right) = v_A\left(\frac{1}{R_D} - g_{m2}\right).$$

Multiplying both sides by $R_Dr_{O2}$:

$$v_{out}\,(r_{O2} + R_D) = v_A\,r_{O2}\,(1 - g_{m2}R_D),$$

$$v_A = \frac{(r_{O2} + R_D)}{r_{O2}(1 - g_{m2}R_D)}\,v_{out}. \tag{4}$$

**Substitute (4) into (3).** Writing (3) as

$$g_{m1}v_{in} + v_A\,\frac{1 + g_{m2}r_{O1}}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0$$

and inserting $v_A$:

$$g_{m1}v_{in} + \frac{(r_{O2} + R_D)(1 + g_{m2}r_{O1})}{r_{O1}r_{O2}(1 - g_{m2}R_D)}\,v_{out} + \frac{v_{out}}{r_{O2}} = 0.$$

Multiplying every term by $r_{O1}r_{O2}(1 - g_{m2}R_D)$:

$$g_{m1}r_{O1}r_{O2}(1 - g_{m2}R_D)\,v_{in} + (r_{O2} + R_D)(1 + g_{m2}r_{O1})\,v_{out} + r_{O1}(1 - g_{m2}R_D)\,v_{out} = 0.$$

**Coefficient of $v_{out}$.** Expanding both products,

$$
\begin{aligned}
(r_{O2} + R_D)(1 + g_{m2}r_{O1}) &= r_{O2} + g_{m2}r_{O1}r_{O2} + R_D + g_{m2}r_{O1}R_D,\\
r_{O1}(1 - g_{m2}R_D) &= r_{O1} - g_{m2}r_{O1}R_D ,
\end{aligned}
$$

and adding them, the $g_{m2}r_{O1}R_D$ terms cancel:

$$\text{coefficient of } v_{out} = R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}.$$

So

$$(R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2})\,v_{out} = -g_{m1}r_{O1}r_{O2}(1 - g_{m2}R_D)\,v_{in} = g_{m1}r_{O1}r_{O2}(g_{m2}R_D - 1)\,v_{in},$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m1}r_{O1}r_{O2}\,(g_{m2}R_D - 1)}{R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}.$$

### Step 4 — Checks with limiting cases

- **$R_D = 0$.** $A$ and the output merge and $M_2$ is a diode-connected load:
$$A_v = \frac{-g_{m1}r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}} = -g_{m1}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right),$$
the familiar CS gain with a diode-connected load. ✓
- **$R_D \to \infty$.** No signal current flows in $R_D$: $v_A = -g_{m1}r_{O1}v_{in}$ and $v_{out} = -g_{m2}r_{O2}v_A$. The formula gives $A_v \to g_{m1}r_{O1}r_{O2}g_{m2}R_D/R_D = g_{m1}g_{m2}r_{O1}r_{O2}$, two cascaded CS stages. ✓

### Step 5 — Large-$r_O$ approximation and intuition

When $g_{m2}r_{O1}, g_{m2}r_{O2} \gg 1$ and $R_D \ll g_{m2}r_{O1}r_{O2}$, the term $g_{m2}r_{O1}r_{O2}$ dominates the denominator:

$$A_v \approx \frac{g_{m1}r_{O1}r_{O2}(g_{m2}R_D - 1)}{g_{m2}r_{O1}r_{O2}} = \frac{g_{m1}(g_{m2}R_D - 1)}{g_{m2}} = g_{m1}\left(R_D - \frac{1}{g_{m2}}\right).$$

**Why (with $\lambda = 0$).** The series path carries a single current, and with $r_{O1}\to\infty$ its change is set by $M_1$ alone: $i = g_{m1}v_{in}$ flowing downward.

1. $M_2$ must supply this current, and its downward current is $-g_{m2}v_A$, so
$$-g_{m2}v_A = g_{m1}v_{in} \quad\Longrightarrow\quad v_A = -\frac{g_{m1}}{g_{m2}}\,v_{in}.$$
2. The same current flows down through $R_D$, so the output sits above $A$ by $iR_D$:
$$v_{out} = v_A + g_{m1}R_Dv_{in} = g_{m1}\left(R_D - \frac{1}{g_{m2}}\right)v_{in}.$$

The fall of node $A$ (inverting, $-g_{m1}/g_{m2}$) and the drop across $R_D$ (non-inverting, $+g_{m1}R_D$) oppose each other. The stage is therefore **non-inverting if $g_{m2}R_D > 1$**, inverting if $g_{m2}R_D < 1$, and has zero gain (to first order) if $g_{m2}R_D = 1$.

### Result

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m1}r_{O1}r_{O2}\,(g_{m2}R_D - 1)}{R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}},$$

and for large $r_O$:

$$A_v \approx g_{m1}\left(R_D - \frac{1}{g_{m2}}\right),$$

which is positive (non-inverting) when $g_{m2}R_D > 1$.

**Common mistake.** Treating $M_2$ as a diode-connected load at the output, $A_v \approx -g_{m1}/g_{m2}$. Its gate is at node $A$, *below* $R_D$: the voltage $-g_{m1}v_{in}/g_{m2}$ appears at $A$, and the output is higher by $g_{m1}v_{in}R_D$.

**Common mistake.** Adding the two effects with the same sign, e.g. $A_v = -g_{m1}(R_D + 1/g_{m2})$, as if $R_D$ were a series load of a CS stage. $M_2$ supplies the current from above, so a larger current raises the drop across $R_D$ while lowering $v_A$: the terms subtract.

**Common mistake.** Taking $M_2$'s current into the output as $+g_{m2}v_A$. With its source at $V_{DD}$, a *drop* in gate voltage increases the PMOS current, so the current into the output is $-g_{m2}v_A$.

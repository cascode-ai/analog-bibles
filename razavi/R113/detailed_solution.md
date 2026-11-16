# Detailed solution - R113

**Approach.** Replace both transistors by their small-signal models ($g_m v_{gs}$ current source in parallel with $r_O$), write Kirchhoff's current law (KCL) at the two internal nodes (the drain of $M_1$, called $A$, and the output), and solve the two equations for $v_{out}/v_{in}$. A short $\lambda = 0$ argument then gives the physical meaning of the result.

### Step 1 — Reading the circuit

From the figure:

- $M_1$ is an NMOS common-source device: gate at $V_{in}$, source at ground, drain at a node we call $A$.
- $R_D$ connects $A$ (bottom) to the output node (top).
- $M_2$ is a PMOS (arrow on its source pointing inward): source at $V_{DD}$, drain at $V_{out}$, and its **gate connected to node $A$** (the wire on the left runs from the gate of $M_2$ down to the bottom of $R_D$).

So the bias current flows in a single series path $V_{DD} \to M_2 \to R_D \to M_1 \to$ ground, and the voltage at the bottom of the resistor controls the top transistor. $M_2$ is "diode-connected through $R_D$": if $R_D$ were zero, its gate would be tied to its drain.

The problem gives $\gamma = 0$ (no body effect) and $\lambda \neq 0$, so each transistor has a finite output resistance $r_O$. Here $g_m$ is the transconductance and $r_O \approx 1/(\lambda I_D)$ is the drain–source resistance due to channel-length modulation.

### Step 2 — Small-signal model

$V_{DD}$ and ground are both **ac grounds** (their small-signal voltage is zero). Lower-case symbols denote small-signal quantities.

The small-signal model of a PMOS is the same as that of an NMOS: a current $g_m v_{gs}$ flowing from drain to source, with $r_O$ between drain and source. Since $M_2$'s source is at ac ground, its gate–source voltage is $v_{gs2} = v_A - 0 = v_A$.

The circuit has two unknown node voltages, $v_A$ and $v_{out}$:

- **$M_1$**: $v_{gs1} = v_{in}$. A current source $g_{m1}v_{in}$ flows from $A$ to ground, with $r_{O1}$ from $A$ to ground.
- **$R_D$**: a resistor between out and $A$.
- **$M_2$**: a current source $g_{m2}v_A$ flows from out (drain) to ground (source, at $V_{DD}$), with $r_{O2}$ from out to ground.

<!-- diagram: diagram-01.cir -->

(Equivalently: $M_2$ pushes the current $-g_{m2}v_A$ from $V_{DD}$ into the output. When $v_A$ goes down, the source–gate voltage of the PMOS increases and it delivers *more* current.)

### Step 3 — KCL at the output node and at node A

**KCL at the output node** (sum of currents leaving the node = 0). Current leaves through $R_D$ toward $A$, and through $M_2$ (its controlled source and its $r_O$):

$$\frac{v_{out} - v_A}{R_D} + g_{m2}v_A + \frac{v_{out}}{r_{O2}} = 0. \tag{1}$$

**KCL at node $A$** (sum of currents leaving the node = 0). Current leaves through $M_1$ (controlled source and $r_{O1}$) and through $R_D$ toward the output:

$$g_{m1}v_{in} + \frac{v_A}{r_{O1}} + \frac{v_A - v_{out}}{R_D} = 0. \tag{2}$$

**A simpler third equation.** Adding (1) and (2), the two $R_D$ terms cancel (they are equal and opposite). This is KCL for the "supernode" made of $A$, $R_D$ and the output together:

$$g_{m1}v_{in} + g_{m2}v_A + \frac{v_A}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0. \tag{3}$$

Physically: whatever current $M_2$ supplies must flow down through $M_1$, since there is no other path.

### Step 4 — Solve for the gain

**Express $v_A$ through $v_{out}$ using (1).** Expand (1):

$$\frac{v_{out}}{R_D} - \frac{v_A}{R_D} + g_{m2}v_A + \frac{v_{out}}{r_{O2}} = 0.$$

Collect the $v_{out}$ terms on one side and the $v_A$ terms on the other:

$$v_{out}\left(\frac{1}{R_D} + \frac{1}{r_{O2}}\right) = v_A\left(\frac{1}{R_D} - g_{m2}\right).$$

Multiply both sides by $R_Dr_{O2}$:

$$v_{out}\,(r_{O2} + R_D) = v_A\,r_{O2}\,(1 - g_{m2}R_D),$$

$$v_A = \frac{(r_{O2} + R_D)}{r_{O2}(1 - g_{m2}R_D)}\,v_{out}. \tag{4}$$

**Substitute (4) into (3).** First write (3) as

$$g_{m1}v_{in} + v_A\,\frac{1 + g_{m2}r_{O1}}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0.$$

Insert $v_A$:

$$g_{m1}v_{in} + \frac{(r_{O2} + R_D)(1 + g_{m2}r_{O1})}{r_{O1}r_{O2}(1 - g_{m2}R_D)}\,v_{out} + \frac{v_{out}}{r_{O2}} = 0.$$

Multiply every term by $r_{O1}r_{O2}(1 - g_{m2}R_D)$:

$$g_{m1}r_{O1}r_{O2}(1 - g_{m2}R_D)\,v_{in} + (r_{O2} + R_D)(1 + g_{m2}r_{O1})\,v_{out} + r_{O1}(1 - g_{m2}R_D)\,v_{out} = 0.$$

**Simplify the coefficient of $v_{out}$.** Expand both products:

$$
\begin{aligned}
(r_{O2} + R_D)(1 + g_{m2}r_{O1}) &= r_{O2} + g_{m2}r_{O1}r_{O2} + R_D + g_{m2}r_{O1}R_D,\\
r_{O1}(1 - g_{m2}R_D) &= r_{O1} - g_{m2}r_{O1}R_D .
\end{aligned}
$$

Adding them, the $g_{m2}r_{O1}R_D$ terms cancel:

$$\text{coefficient of } v_{out} = R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}.$$

So

$$(R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2})\,v_{out} = -g_{m1}r_{O1}r_{O2}(1 - g_{m2}R_D)\,v_{in} = g_{m1}r_{O1}r_{O2}(g_{m2}R_D - 1)\,v_{in}.$$

**The gain:**

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m1}r_{O1}r_{O2}\,(g_{m2}R_D - 1)}{R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}.$$

### Step 5 — Checks with limiting cases

- **$R_D = 0$.** Then $A$ and the output are the same node and $M_2$ is an ordinary diode-connected load. The formula gives
$$A_v = \frac{-g_{m1}r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}} = -g_{m1}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right),$$
the familiar gain of a CS stage with a diode-connected load. ✓
- **$R_D \to \infty$.** Then no signal current flows in $R_D$: $M_1$ drives node $A$ with load $r_{O1}$ ($v_A = -g_{m1}r_{O1}v_{in}$), and $M_2$ is a second CS stage with load $r_{O2}$ ($v_{out} = -g_{m2}r_{O2}v_A$). The formula gives $A_v \to g_{m1}r_{O1}r_{O2}g_{m2}R_D/R_D = g_{m1}g_{m2}r_{O1}r_{O2}$, the gain of two cascaded CS stages. ✓

### Step 6 — Large-$r_O$ approximation and intuition

When $r_{O1}$ and $r_{O2}$ are large ($g_{m2}r_{O1}, g_{m2}r_{O2} \gg 1$ and $R_D \ll g_{m2}r_{O1}r_{O2}$), the term $g_{m2}r_{O1}r_{O2}$ dominates the denominator:

$$A_v \approx \frac{g_{m1}r_{O1}r_{O2}(g_{m2}R_D - 1)}{g_{m2}r_{O1}r_{O2}} = \frac{g_{m1}(g_{m2}R_D - 1)}{g_{m2}} = g_{m1}\left(R_D - \frac{1}{g_{m2}}\right).$$

**Why, in words (with $\lambda = 0$).** The series path $V_{DD}\to M_2\to R_D\to M_1\to$ ground carries a single current. With $r_{O1}\to\infty$, the small-signal change of that current is set by $M_1$ alone: $i = g_{m1}v_{in}$ flowing downward.

1. $M_2$ must supply exactly this extra current, which requires its gate to move. The downward current through $M_2$ is $-g_{m2}v_A$, so
$$-g_{m2}v_A = g_{m1}v_{in} \quad\Longrightarrow\quad v_A = -\frac{g_{m1}}{g_{m2}}\,v_{in}.$$
Node $A$ falls, as in a CS stage with a diode-connected load.
2. The same current flows down through $R_D$, so the output sits above $A$ by $iR_D$:
$$v_{out} = v_A + g_{m1}R_Dv_{in} = g_{m1}\left(R_D - \frac{1}{g_{m2}}\right)v_{in}.$$

The two effects have opposite signs: the falling of node $A$ (inverting, $-g_{m1}/g_{m2}$) and the growing drop across $R_D$ (non-inverting, $+g_{m1}R_D$). The stage is therefore **non-inverting if $g_{m2}R_D > 1$**, inverting if $g_{m2}R_D < 1$, and has zero gain (to first order) if $g_{m2}R_D = 1$.

### Result

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m1}r_{O1}r_{O2}\,(g_{m2}R_D - 1)}{R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}},$$

and for large $r_O$:

$$A_v \approx g_{m1}\left(R_D - \frac{1}{g_{m2}}\right),$$

which is positive (non-inverting) when $g_{m2}R_D > 1$.

**Common mistake.** Treating $M_2$ as a diode-connected load sitting at the output and writing $A_v \approx -g_{m1}/g_{m2}$. The gate of $M_2$ is connected to node $A$, *below* $R_D$, not to the output. The voltage $-g_{m1}v_{in}/g_{m2}$ appears at $A$; the output is higher by the signal drop $g_{m1}v_{in}R_D$ across $R_D$.

**Common mistake.** Adding the two effects with the same sign, e.g. $A_v = -g_{m1}(R_D + 1/g_{m2})$, as if $R_D$ were an extra series load resistance of a CS stage. The output is *above* $R_D$, and $M_2$ supplies the current from above, so an increase in the current raises the drop across $R_D$ while lowering $v_A$: the two terms subtract.

**Common mistake.** Sign errors in the PMOS model, such as taking $M_2$'s current into the output as $+g_{m2}v_A$. With its source at $V_{DD}$, a *drop* in the gate voltage increases the PMOS current, so the current into the output is $-g_{m2}v_A$ (equivalently $g_{m2}v_A$ flowing from the output toward $V_{DD}$ in the drain-to-source model).

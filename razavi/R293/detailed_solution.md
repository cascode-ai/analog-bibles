# Detailed solution - R293

**Approach.** Replace $M_1$ by its small-signal model (a voltage-controlled current source $g_mV_{GS}$, with no $r_O$ since $\lambda = 0$), drive the input with a test source, and use KCL at the gate node and at the drain node. The key observation is that the current through $C_2$ has nowhere to go except into the drain of $M_1$.

### Step 1 — Reading the circuit

From the figure:

- The input terminal connects through $C_1$ to a node that we call **A**. Node A is the gate of $M_1$.
- $C_2$ connects node A to the drain of $M_1$, which we call node **D**.
- The ideal current source $I_1$ feeds D from $V_{DD}$. The source of $M_1$ is grounded.
- All other capacitances (including those of $M_1$) are neglected, and $\lambda = 0$.

We assume $M_1$ is biased in saturation; the dc bias of the gate is not part of the small-signal question.

### Step 2 — Small-signal model

For small signals:

- $V_{DD}$ is an ac ground, and an **ideal** current source carries a constant current, so its small-signal model is an **open circuit**. Nothing is connected between D and ac ground except the transistor.
- $M_1$ becomes a voltage-controlled current source $g_mV_{GS}$ from D to ground. Its source is grounded, so $V_{GS} = V_A$ and the drain current is $g_mV_A$.
- $\lambda = 0$, so there is **no $r_O$** in parallel with the controlled source.

Apply a test voltage $V_x$ at the input and let $I_x$ be the current that flows into the input terminal.

<!-- diagram: diagram-01.cir -->

The model is a chain: $V_x$ → $C_1$ → node A → $C_2$ → node D, with the current source $g_mV_A$ from D to ground.

### Step 3 — KCL at node A (the gate)

The gate of a MOSFET draws no current, and no other element connects to node A. KCL at A therefore says that whatever comes in through $C_1$ leaves through $C_2$:

$$I_{C1} = I_{C2} = I_x .$$

So the test current $I_x$ flows through both capacitors and arrives at node D.

### Step 4 — KCL at node D (the drain)

At node D, current arrives through $C_2$ ($I_x$). It can leave only through the transistor, because the ideal current source $I_1$ is an open circuit and there is no $r_O$. KCL at D:

$$I_x = g_mV_A .$$

Solve for the gate voltage:

$$V_A = \frac{I_x}{g_m}.$$

**Interpretation.** The impedance from node A to ground is

$$Z_A = \frac{V_A}{I_x} = \frac{1}{g_m},$$

independent of $C_2$ and of frequency. The transistor must sink exactly the current that $C_2$ delivers, and the only way it can do so is for its gate voltage to equal $I_x/g_m$. The drain voltage simply adjusts to whatever value is needed to push $I_x$ through $C_2$:

$$V_D = V_A - \frac{I_x}{C_2s} = I_x\left(\frac{1}{g_m} - \frac{1}{C_2s}\right).$$

In effect, $C_2$ "diode-connects" $M_1$ for ac signals, which is why node A looks like $1/g_m$, just as for a diode-connected transistor.

### Step 5 — KVL from the input to ground

Going from the input terminal to ground through $C_1$ and then node A:

$$V_x = \frac{I_x}{C_1s} + V_A .$$

Substitute $V_A = I_x/g_m$ from Step 4:

$$
\begin{aligned}
V_x &= \frac{I_x}{C_1s} + \frac{I_x}{g_m}\\
&= I_x\left(\frac{1}{C_1s} + \frac{1}{g_m}\right).
\end{aligned}
$$

Divide by $I_x$:

$$Z_{in} = \frac{V_x}{I_x} = \frac{1}{C_1s} + \frac{1}{g_m}.$$

The input impedance is $C_1$ in series with a resistance $1/g_m$. $C_2$ does not appear.

### Step 6 — Check with Miller's theorem

Miller's theorem replaces an impedance $Z$ connected between two nodes by $Z/(1 - A_v)$ at the first node, where $A_v$ is the **exact** voltage gain between the two nodes. Here $Z = 1/(C_2s)$ and, from Step 4,

$$A_v = \frac{V_D}{V_A} = \frac{I_x\left(\dfrac{1}{g_m} - \dfrac{1}{C_2s}\right)}{I_x/g_m} = 1 - \frac{g_m}{C_2s}.$$

Then

$$
\begin{aligned}
1 - A_v &= \frac{g_m}{C_2s},\\
Z_A &= \frac{1/(C_2s)}{1 - A_v} = \frac{1}{C_2s}\cdot\frac{C_2s}{g_m} = \frac{1}{g_m},
\end{aligned}
$$

which agrees with Step 4. The gain $A_v$ is frequency dependent and not equal to the "low-frequency gain" of a common-source stage, which would be infinite here (an ideal current-source load with $\lambda = 0$). Using a fixed large gain in Miller's formula would wrongly give a huge capacitance at node A.

### Result

$$Z_{in} = \frac{1}{C_1s} + \frac{1}{g_m}$$

The input looks like $C_1$ in series with a resistance $1/g_m$. $C_2$ has no effect: the current it carries must all be absorbed by $M_1$'s drain current $g_mV_A$, so node A always presents $1/g_m$ to ground.

**Common mistake.** Applying Miller's theorem with a fixed gain, for example $C_2(1 + g_mr_O)$ or "an infinite gain makes $C_2$ infinite". The Miller multiplication factor is $1 - V_D/V_A$ with the *actual* gain, which here depends on the current through $C_2$ itself. Done correctly it gives $1/g_m$, with no trace of $C_2$.

**Common mistake.** Treating the circuit as two capacitors in series, $Z_{in} = 1/(C_1s) + 1/(C_2s)$, i.e. ignoring the transistor. The drain node is not a ground: its voltage is set by the requirement that the transistor sinks the capacitor current. The result is not purely capacitive; it has a real part $1/g_m$.

**Common mistake.** Forgetting $C_1$ in the final answer and quoting only $1/g_m$, which is the impedance at node A, not at the input terminal.

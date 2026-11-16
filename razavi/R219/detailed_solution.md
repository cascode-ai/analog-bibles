# Detailed solution - R219

**Approach.** Write the small-signal drain current of each transistor including the body-effect ("back-gate") transconductance $g_{mb}$, apply KCL at node P (the ideal tail source fixes the sum of the two currents), and solve for the change of $V_P$. Then check the result with a Thevenin picture of each half seen from P, and with a large-signal argument.

### Step 1 — The circuit and where body effect enters

Reading the figure:

- $D_1$ and $D_2$ are identical NMOS transistors. Their gates are driven by $V_{in1}$ and $V_{in2}$ (both referred to ground).
- Their sources are joined at node P, and the ideal tail current source $I_T$ pulls a fixed current from P to ground.
- Their drains carry the currents $I_1$ and $I_2$ (from loads or the supply, not shown).
- $V_1$ and $V_2$ are the gate–source voltages of the two devices.
- Both bulks are tied to ground.

**Body effect.** The threshold voltage depends on the source–bulk voltage $V_{SB}$:

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right),$$

where $V_{TH0}$ is the threshold at $V_{SB} = 0$, $\gamma$ is the body-effect coefficient and $\phi_F$ is the Fermi potential of the substrate.

Here the two sources are the same node and the two bulks are the same node (ground), so

$$V_{SB1} = V_P - 0 = V_P, \qquad V_{SB2} = V_P - 0 = V_P .$$

**Both devices always have the same $V_{SB}$.** This single fact is the heart of the answer: whatever happens to $V_P$, it changes the two thresholds by exactly the same amount.

### Step 2 — Bias point and small-signal model

**Bias point.** Before the change, $V_{in1} = V_{in2} = V_0$. The two devices then have the same gate voltage, the same source voltage $V_P$ and the same bulk voltage, hence the same $V_{GS}$, the same $V_{TH}$ and the same current:

$$I_1 = I_2 = \frac{I_T}{2}.$$

Consequently they have the same transconductance $g_m$ and the same body transconductance $g_{mb}$:

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}\cdot\frac{I_T}{2}}, \qquad g_{mb} = \eta\,g_m, \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} .$$

**Small-signal model.** Each transistor in saturation is replaced by two voltage-controlled current sources in parallel, both pointing from drain to source:

- $g_m v_{gs}$, controlled by the gate–source voltage $v_{gs}$;
- $g_{mb} v_{bs}$, controlled by the bulk–source voltage $v_{bs}$. A rise of the bulk relative to the source lowers $V_{TH}$, so it *increases* the current, like a weak second gate.

As in the original (no-body-effect) result, channel-length modulation is neglected ($\lambda = 0$), so the drain voltages do not affect the currents and the drains can be treated as ac ground. The ideal tail source $I_T$ has a constant current, so in the small-signal circuit it is an **open circuit**.

The controlling voltages are (the bulks stay at ground, so their small-signal voltage is 0):

$$
\begin{aligned}
v_{gs1} &= \Delta V_{in1} - \Delta V_P, & v_{bs1} &= 0 - \Delta V_P = -\Delta V_P,\\
v_{gs2} &= \Delta V_{in2} - \Delta V_P, & v_{bs2} &= 0 - \Delta V_P = -\Delta V_P .
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

The small-signal circuit therefore has a single unknown node, P, fed by four controlled current sources: $g_m v_{gs1}$ and $g_{mb} v_{bs1}$ from the drain of $D_1$, and $g_m v_{gs2}$ and $g_{mb} v_{bs2}$ from the drain of $D_2$. Nothing else is connected to P.

### Step 3 — KCL at node P

**Current of each device.** Add the two controlled sources of each transistor:

$$
\begin{aligned}
\Delta I_1 &= g_m(\Delta V_{in1} - \Delta V_P) + g_{mb}(-\Delta V_P)\\
&= g_m\Delta V_{in1} - (g_m + g_{mb})\Delta V_P,\\[4pt]
\Delta I_2 &= g_m(\Delta V_{in2} - \Delta V_P) + g_{mb}(-\Delta V_P)\\
&= g_m\Delta V_{in2} - (g_m + g_{mb})\Delta V_P .
\end{aligned}
$$

**KCL at P.** Both drain currents flow into P and the tail source takes out the constant current $I_T$, so $I_1 + I_2 = I_T$ at all times. Its change is zero:

$$\Delta I_1 + \Delta I_2 = 0 .$$

**Substitute** the two currents:

$$g_m\Delta V_{in1} - (g_m + g_{mb})\Delta V_P + g_m\Delta V_{in2} - (g_m + g_{mb})\Delta V_P = 0 .$$

**Collect terms:**

$$g_m(\Delta V_{in1} + \Delta V_{in2}) = 2(g_m + g_{mb})\Delta V_P .$$

**Solve for $\Delta V_P$:**

$$\Delta V_P = \frac{g_m}{2(g_m + g_{mb})}\,(\Delta V_{in1} + \Delta V_{in2}) .$$

### Step 4 — Apply the differential input

For the differential change, $\Delta V_{in1} = +\Delta V_{in}$ and $\Delta V_{in2} = -\Delta V_{in}$, so

$$\Delta V_{in1} + \Delta V_{in2} = \Delta V_{in} - \Delta V_{in} = 0 .$$

Since $2(g_m + g_{mb}) \neq 0$,

$$\boxed{\Delta V_P = 0}$$

**even with body effect.** It follows that

$$
\begin{aligned}
v_{bs1} &= v_{bs2} = -\Delta V_P = 0,\\
\Delta V_1 &= \Delta V_{in1} - \Delta V_P = +\Delta V_{in},\\
\Delta V_2 &= \Delta V_{in2} - \Delta V_P = -\Delta V_{in},\\
\Delta I_1 &= g_m\Delta V_{in}, \qquad \Delta I_2 = -g_m\Delta V_{in} .
\end{aligned}
$$

The body-effect sources carry no signal at all ($g_{mb}v_{bs} = 0$), so $g_{mb}$ drops out of the differential response. **Intuition:** body effect can only act through a change of $V_{SB} = V_P$. In a differential change one device pushes exactly the extra current that the other one gives up, so P has no reason to move; and if P does not move, $V_{SB}$ does not change and body effect has nothing to work with.

### Step 5 — Same result from Thevenin equivalents

Rewrite the current of $D_1$ by factoring out $(g_m + g_{mb})$:

$$\Delta I_1 = (g_m + g_{mb})\left[\frac{g_m}{g_m + g_{mb}}\Delta V_{in1} - \Delta V_P\right].$$

This is the current that a voltage source $V_{th1}$ in series with a resistance $R_{th}$ would push into P, with

$$V_{th1} = \frac{g_m}{g_m + g_{mb}}\,\Delta V_{in1}, \qquad R_{th} = \frac{1}{g_m + g_{mb}} .$$

(This is the familiar source-follower result: the source of a MOSFET with body effect looks like an attenuated copy of the gate signal behind $1/(g_m + g_{mb})$.) Likewise $D_2$ is $V_{th2} = \frac{g_m}{g_m + g_{mb}}\Delta V_{in2}$ behind the **same** $R_{th}$.

With the tail source open, KCL at P reads

$$\frac{V_{th1} - \Delta V_P}{R_{th}} + \frac{V_{th2} - \Delta V_P}{R_{th}} = 0 \;\Longrightarrow\; \Delta V_P = \frac{V_{th1} + V_{th2}}{2} .$$

For opposite inputs, $V_{th2} = -V_{th1}$, so $\Delta V_P = 0$: P is the midpoint of two equal resistors driven by equal and opposite voltages. Body effect shrinks both the source voltages and the resistances, but **identically on both sides**, so the midpoint stays put.

### Step 6 — Large-signal check (why "if the circuit remains linear")

With the square law, $I_{1,2} = \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V_{in1,2} - V_P - V_{TH})^2$, where both devices use the same $V_{TH}(V_P)$ because $V_{SB1} = V_{SB2} = V_P$. Define $k = \mu_nC_{ox}W/L$ and $x = V_0 - V_P - V_{TH}(V_P)$. Then

$$
\begin{aligned}
I_1 + I_2 &= \tfrac12 k(x + \Delta V_{in})^2 + \tfrac12 k(x - \Delta V_{in})^2\\
&= k\left(x^2 + \Delta V_{in}^2\right) = I_T,\\
x &= \sqrt{I_T/k - \Delta V_{in}^2} .
\end{aligned}
$$

$x$ depends only on $\Delta V_{in}^2$. Since $V_P + V_{TH}(V_P)$ increases monotonically with $V_P$, the value of $x$ fixes $V_P$ uniquely, so $V_P$ too depends only on $\Delta V_{in}^2$. Hence $V_P$ has **no first-order (linear) change** with or without body effect; it shifts only to second order when $\Delta V_{in}$ is large, which is outside the linear regime the statement assumes.

### Step 7 — When body effect *would* matter

- **Common-mode input.** For $\Delta V_{in1} = \Delta V_{in2} = \Delta V_{CM}$, Step 3 gives $\Delta V_P = \dfrac{g_m}{g_m + g_{mb}}\Delta V_{CM}$: P follows the input with the (less-than-one) source-follower gain. Without body effect P would follow exactly.
- **Broken symmetry.** If the bulks were connected differently (for example one bulk tied to its own source and the other to ground), the two thresholds would differ, the bias currents would no longer be $I_T/2$ each, the two $g_m$ values would differ, and a differential input would then move P. The lemma relies on symmetry, and with both bulks at ground the symmetry is preserved.

### Result

**Yes, the result still holds.** Both devices share the same source node and the same bulk node, so they always have the same $V_{SB} = V_P$ and the same threshold, bias current, $g_m$ and $g_{mb}$. The small-signal analysis gives

$$\Delta V_P = \frac{g_m}{2(g_m + g_{mb})}(\Delta V_{in1} + \Delta V_{in2}),$$

which is zero for $\Delta V_{in1} = -\Delta V_{in2}$. Equivalently, each half seen from P is a source $\frac{g_m}{g_m + g_{mb}}V_{in}$ behind $\frac{1}{g_m + g_{mb}}$; equal resistances and opposite sources leave P unchanged. Body effect only changes the response to a common-mode input, $\Delta V_P = \frac{g_m}{g_m + g_{mb}}\Delta V_{CM}$.

**Common mistake.** Answering "no, because the threshold depends on $V_P$." The threshold does depend on $V_P$, but (i) the same $V_P$ sets *both* thresholds, and (ii) for a differential input $V_P$ does not change, so $v_{bs} = 0$ and the $g_{mb}$ sources carry no signal.

**Common mistake.** Arguing "by symmetry" without checking that the body terminals are connected symmetrically. Symmetry is exactly what must be verified: it holds here because both bulks are at ground and both sources are at P. With one bulk tied to its source and the other to ground, the circuit would no longer be symmetric.

**Common mistake.** Writing the body-effect term with the wrong controlling voltage, e.g. $g_{mb}v_{bs}$ with $v_{bs} = +\Delta V_P$, or forgetting it in only one of the two devices. A sign error does not change the differential result, but it gives a wrong common-mode result ($\Delta V_P$ larger than $\Delta V_{CM}$, which is impossible for a follower).

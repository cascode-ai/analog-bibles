# Detailed solution - R219

**Approach.** Write each device's small-signal drain current including the body-effect transconductance $g_{mb}$, use the fixed tail current (KCL at P) to solve for the change of $V_P$, then confirm the result with a Thevenin picture of each half seen from P and with a large-signal argument.

### Step 1 — Equal $V_{SB}$, bias point and small-signal model

Both sources are node P and both bulks are at ground, so

$$V_{SB1} = V_P - 0 = V_P, \qquad V_{SB2} = V_P - 0 = V_P .$$

**Both devices always have the same $V_{SB}$**: whatever happens to $V_P$, it changes the two thresholds by exactly the same amount. At the bias point ($V_{in1} = V_{in2} = V_0$) the two devices therefore have the same $V_{GS}$, $V_{TH}$ and current, $I_1 = I_2 = I_T/2$, and the same

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}\cdot\frac{I_T}{2}}, \qquad g_{mb} = \eta\,g_m, \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} .$$

Each device is $g_mv_{gs}$ in parallel with $g_{mb}v_{bs}$, both from drain to source. As in the no-body-effect result, $\lambda = 0$, so the drains can be treated as ac ground, and the ideal tail source is an open circuit. With the bulks at ground, the controlling voltages are

$$
\begin{aligned}
v_{gs1} &= \Delta V_{in1} - \Delta V_P, & v_{bs1} &= 0 - \Delta V_P = -\Delta V_P,\\
v_{gs2} &= \Delta V_{in2} - \Delta V_P, & v_{bs2} &= 0 - \Delta V_P = -\Delta V_P .
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

The only unknown node is P, fed by these four controlled sources and nothing else.

### Step 2 — KCL at node P

Adding the two controlled sources of each device:

$$
\begin{aligned}
\Delta I_1 &= g_m(\Delta V_{in1} - \Delta V_P) + g_{mb}(-\Delta V_P) = g_m\Delta V_{in1} - (g_m + g_{mb})\Delta V_P,\\
\Delta I_2 &= g_m(\Delta V_{in2} - \Delta V_P) + g_{mb}(-\Delta V_P) = g_m\Delta V_{in2} - (g_m + g_{mb})\Delta V_P .
\end{aligned}
$$

The tail source fixes $I_1 + I_2 = I_T$, so $\Delta I_1 + \Delta I_2 = 0$. Substituting and collecting terms:

$$g_m(\Delta V_{in1} + \Delta V_{in2}) = 2(g_m + g_{mb})\Delta V_P \quad\Longrightarrow\quad \Delta V_P = \frac{g_m}{2(g_m + g_{mb})}\,(\Delta V_{in1} + \Delta V_{in2}) .$$

### Step 3 — Apply the differential input

With $\Delta V_{in1} = +\Delta V_{in}$ and $\Delta V_{in2} = -\Delta V_{in}$, $\Delta V_{in1} + \Delta V_{in2} = \Delta V_{in} - \Delta V_{in} = 0$. Since $2(g_m + g_{mb}) \neq 0$,

$$\boxed{\Delta V_P = 0}$$

**even with body effect.** Then

$$
\begin{aligned}
v_{bs1} &= v_{bs2} = -\Delta V_P = 0,\\
\Delta V_1 &= \Delta V_{in1} - \Delta V_P = +\Delta V_{in},\\
\Delta V_2 &= \Delta V_{in2} - \Delta V_P = -\Delta V_{in},\\
\Delta I_1 &= g_m\Delta V_{in}, \qquad \Delta I_2 = -g_m\Delta V_{in} .
\end{aligned}
$$

The body-effect sources carry no signal ($g_{mb}v_{bs} = 0$), so $g_{mb}$ drops out of the differential response. Body effect can act only through $V_{SB} = V_P$, and since one device gains exactly the current the other gives up, P has no reason to move.

### Step 4 — Same result from Thevenin equivalents

Factoring out $(g_m + g_{mb})$,

$$\Delta I_1 = (g_m + g_{mb})\left[\frac{g_m}{g_m + g_{mb}}\Delta V_{in1} - \Delta V_P\right],$$

so, seen from P, $D_1$ is the familiar source-follower equivalent: a source $V_{th1}$ behind $R_{th}$, with

$$V_{th1} = \frac{g_m}{g_m + g_{mb}}\,\Delta V_{in1}, \qquad R_{th} = \frac{1}{g_m + g_{mb}} .$$

Likewise $D_2$ is $V_{th2} = \frac{g_m}{g_m + g_{mb}}\Delta V_{in2}$ behind the **same** $R_{th}$. With the tail open, KCL at P gives

$$\frac{V_{th1} - \Delta V_P}{R_{th}} + \frac{V_{th2} - \Delta V_P}{R_{th}} = 0 \;\Longrightarrow\; \Delta V_P = \frac{V_{th1} + V_{th2}}{2} ,$$

which is zero for opposite inputs, $V_{th2} = -V_{th1}$. Body effect shrinks both sources and both resistances, but **identically on both sides**, so the midpoint stays put.

### Step 5 — Large-signal check (why "if the circuit remains linear")

With the square law, $I_{1,2} = \tfrac12 k(V_{in1,2} - V_P - V_{TH})^2$, where $k = \mu_nC_{ox}W/L$ and both devices use the same $V_{TH}(V_P)$. With $x = V_0 - V_P - V_{TH}(V_P)$,

$$
\begin{aligned}
I_1 + I_2 &= \tfrac12 k(x + \Delta V_{in})^2 + \tfrac12 k(x - \Delta V_{in})^2\\
&= k\left(x^2 + \Delta V_{in}^2\right) = I_T,\\
x &= \sqrt{I_T/k - \Delta V_{in}^2} .
\end{aligned}
$$

$V_P + V_{TH}(V_P)$ increases monotonically with $V_P$, so $x$ fixes $V_P$ uniquely, and $V_P$ depends only on $\Delta V_{in}^2$. Hence $V_P$ has **no first-order (linear) change**, with or without body effect; it shifts only to second order for large $\Delta V_{in}$, outside the linear regime the statement assumes.

### Step 6 — When body effect *would* matter

- **Common-mode input.** For $\Delta V_{in1} = \Delta V_{in2} = \Delta V_{CM}$, Step 2 gives $\Delta V_P = \dfrac{g_m}{g_m + g_{mb}}\Delta V_{CM}$: P follows the input with the (less-than-one) source-follower gain, whereas without body effect it would follow exactly.
- **Broken symmetry.** If the bulks were connected differently (for example one bulk tied to its own source and the other to ground), the two thresholds, bias currents and $g_m$ values would differ, and a differential input would move P. With both bulks at ground the symmetry is preserved.

### Result

**Yes, the result still holds.** Both devices share the same source node and the same bulk node, so they always have the same $V_{SB} = V_P$ and the same threshold, bias current, $g_m$ and $g_{mb}$. The small-signal analysis gives

$$\Delta V_P = \frac{g_m}{2(g_m + g_{mb})}(\Delta V_{in1} + \Delta V_{in2}),$$

which is zero for $\Delta V_{in1} = -\Delta V_{in2}$. Equivalently, each half seen from P is a source $\frac{g_m}{g_m + g_{mb}}V_{in}$ behind $\frac{1}{g_m + g_{mb}}$; equal resistances and opposite sources leave P unchanged. Body effect only changes the response to a common-mode input, $\Delta V_P = \frac{g_m}{g_m + g_{mb}}\Delta V_{CM}$.

**Common mistake.** Answering "no, because the threshold depends on $V_P$." The same $V_P$ sets *both* thresholds, and for a differential input $V_P$ does not change, so $v_{bs} = 0$ and the $g_{mb}$ sources carry no signal.

**Common mistake.** Arguing "by symmetry" without checking the body connections. The symmetry holds here because both bulks are at ground and both sources at P; with one bulk tied to its source it would not.

**Common mistake.** Using $v_{bs} = +\Delta V_P$, or forgetting $g_{mb}$ in only one device. A sign error leaves the differential result unchanged but gives a common-mode $\Delta V_P$ larger than $\Delta V_{CM}$, which is impossible for a follower.

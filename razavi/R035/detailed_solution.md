# Detailed solution - R035

**Approach.** $C_1$ connects the input node (top) to node X, and $M_1$, with its gate at $V_{DD}$, connects the same two nodes. At the step the capacitor carries X down by the full 3 V, to −3 V. Then decide which terminal of $M_1$ is the source (the lower one, X), find its region (triode), and solve the discharge of $C_1$ through $M_1$, which brings X back to 0 V.

### Step 1 — Reading the circuit and the state before the step

From the figure:

- the gate of $M_1$ is tied to $V_{DD} = 3$ V; the bulk is grounded;
- the upper channel terminal of $M_1$ is the top node, driven by $V_{in}$ (a step from 3 V to 0 at $t = 0$);
- the lower channel terminal is node X;
- $C_1$ connects the top node ("+") to X ("−") and holds 3 V at the instant of the step.

So $V_X = V_{in} - V_{C1}$, and just before the step

$$V_X(0^-) = 3 - 3 = 0\ \mathrm{V}.$$

(The problem specifies the capacitor voltage at that instant; we take it as the initial condition.)

### Step 2 — The jump at $t = 0$

When $V_{in}$ falls to 0, the capacitor voltage cannot change instantly (only a finite current can flow), so

$$V_X(0^+) = V_{in}(0^+) - V_{C1}(0^+) = 0 - 3 = -3\ \mathrm{V}.$$

**$V_X$ jumps down to −3 V.**

### Step 3 — Which terminal is the source, and the region

For $t > 0$ the two channel terminals of $M_1$ are at 0 V (top node) and $V_X < 0$ (node X). For an NMOS the **source is the lower terminal: node X**. The drain is the top node. Then

$$
\begin{aligned}
V_{GS} &= 3 - V_X \quad (= 6\ \mathrm{V}\ \text{at}\ t = 0^+),\\
V_{DS} &= 0 - V_X = -V_X \quad (= 3\ \mathrm{V}\ \text{at}\ t = 0^+).
\end{aligned}
$$

With $V_{TH} = 0.7$ V (no body-effect data given), the overdrive is $V_{GS} - V_{TH} = 2.3 - V_X$. The triode condition $V_{DS} < V_{GS} - V_{TH}$ reads

$$-V_X < 2.3 - V_X \quad\Longleftrightarrow\quad 0 < 2.3,$$

which is always true. **$M_1$ is in triode throughout**: its gate is always more than one threshold above both channel terminals.

### Step 4 — The recovery equation

Current flows in the channel from the top node (drain, 0 V) to X (source). It enters node X, whose only other connection is $C_1$, so it discharges $C_1$ and raises $V_X$:

$$C_1\frac{dV_X}{dt} = I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right],$$

with $\beta = \mu_nC_{ox}W/L$. Let $y = -V_X = V_{DS} > 0$, the remaining capacitor voltage. Then $V_{GS} - V_{TH} = 2.3 + y$ and

$$
\begin{aligned}
I_D &= \beta\left[(2.3 + y)y - \tfrac12y^2\right] = \beta\left[2.3y + \tfrac12y^2\right],\\
C_1\frac{dy}{dt} &= -\beta\left[2.3y + \tfrac12y^2\right].
\end{aligned}
$$

**Initial rate.** At $y = 3$ V:

$$I_D(0^+) = \beta\left[2.3\times3 + \tfrac12\times9\right]\mathrm{V^2} = \beta\,(6.9 + 4.5)\ \mathrm{V^2} = 11.4\,\beta\ \mathrm{V^2},$$

larger than the $6.9\beta$ that a fixed resistor $R_{on} = 1/(2.3\beta)$ would give. The large initial $V_{GS}$ of 6 V makes the channel very conductive, so the recovery is **fast at first**.

### Step 5 — Exact solution

Partial fractions with $a = 2.3$ V:

$$\frac{1}{y\,(a + y/2)} = \frac{1}{a}\left(\frac{1}{y} - \frac{1}{2a + y}\right).$$

Integrating $\dfrac{dy}{y(a + y/2)} = -\dfrac{\beta}{C_1}dt$:

$$\ln\frac{y}{2a + y} = -\frac{t}{\tau} + K, \qquad \tau = \frac{C_1}{2.3\,\beta} = R_{on}C_1,\quad R_{on} = \frac{1}{\beta\,(3 - 0.7)} .$$

At $t = 0$, $y = 3$: $K = \ln\dfrac{3}{4.6 + 3} = \ln 0.395$. So, with $F = 0.395\,e^{-t/\tau}$,

$$\frac{y}{4.6 + y} = F \quad\Longrightarrow\quad y = \frac{4.6F}{1 - F}, \qquad V_X(t) = -\frac{4.6F}{1 - F}\ \mathrm{V}.$$

Checks: at $t = 0$, $y = 4.6(0.395)/0.605 = 3.0$ V ✓. For $t \gg \tau$, $y \approx 4.6\times0.395\,e^{-t/\tau} = 1.82\,e^{-t/\tau}$ V: an **exponential tail with time constant $C_1/(2.3\beta)$**, when $V_{GS} \to 3$ V and $M_1$ becomes the resistor $R_{on}$.

**Final state:** $V_X = 0$, $C_1$ fully discharged (both plates at 0 V), $I_D = 0$.

| $t/\tau$ | $V_X$ (V) | $I_D/\beta$ (V²) | Pure exponential $-3e^{-t/\tau}$ (V) |
|---|---|---|---|
| $0^-$ | 0 | — | — |
| $0^+$ | −3.00 | 11.4 | −3.00 |
| 0.25 | −2.04 | 6.8 | −2.34 |
| 0.5 | −1.45 | 4.4 | −1.82 |
| 1 | −0.78 | 2.1 | −1.10 |
| 2 | −0.26 | 0.63 | −0.41 |
| 4 | −0.03 | 0.08 | −0.05 |

The recovery is faster than a pure exponential at first and then follows the exponential rate.

### Step 6 — Practical caveat: the junction clamp

Node X is an n+ diffusion of $M_1$ in a grounded p-type bulk. Driving it to −3 V forward-biases this junction by 3 V. In a real circuit the junction would conduct heavily the moment X fell below about −0.6 to −0.7 V, supplying current from the substrate and quickly clamping $V_X$ there (and discharging $C_1$ partly through the junction). The ideal square-law analysis above ignores this; with the junction included, $V_X$ would dip only to about −0.7 V and then recover to 0 V through $M_1$.

### Result

- **Before the step:** $V_X = 3 - 3 = 0$ V.
- **At $t = 0$:** the top node falls to 0 and **$V_X$ jumps to −3 V**.
- **Recovery:** $M_1$ (gate at 3 V) now has its source at X ($V_{GS} = 6$ V, $V_{DS} = 3$ V at $t = 0^+$) and is in **triode** throughout ($V_{DS} = -V_X < V_{GS} - V_{TH} = 2.3 - V_X$). It discharges $C_1$, so $V_X$ **rises back toward 0 V**, roughly exponentially. It is fast at first ($R_{on}$ is small because $V_{GS}$ is large), with time constant ≈ $C_1/(2.3\beta)$ near the end.
- **Final:** $V_X = 0$, $C_1$ fully discharged.
- **Practical caveat:** a node at −3 V forward-biases the n+/substrate junction of $M_1$ (bulk at 0 V), which would quickly clamp $V_X$ near −0.6 to −0.7 V; the ideal analysis ignores it.

**Common mistake.** Leaving $V_X$ at −3 V. After the step $M_1$ is strongly on, with its gate 6 V above node X, and it connects X to the 0-V input node, so the capacitor is discharged.

**Common mistake.** Letting $V_X$ settle at $V_{DD} - V_{TH} = 2.3$ V, by treating $M_1$ as a source follower charging X. The only voltage available on the other side of the channel is the input node at 0 V, so X can only be pulled back to 0 V.

**Common mistake.** Making the jump go upward, or assuming X stays at 0. The capacitor's top plate drops by 3 V and the bottom plate (X) must drop by the same amount at that instant.

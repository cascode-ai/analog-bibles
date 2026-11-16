# Detailed solution - R269

**Approach.** Follow the charge. Node Y can lose charge only through $M_3$, and the lower plate of $C_1$ goes to the bulk of $M_1$, a node with no dc path anywhere, so $C_1$ cannot be discharged by a steady current. Instead, Y and the bulk of $M_1$ move down *together*, and the increasingly negative bulk raises $M_1$'s threshold until the current stops. We find the final levels from the zero-current condition and check them against a transient simulation that includes small parasitic capacitances.

### Step 1 — $C_1$ has no dc discharge path

The diode $M_2$ sets the gate voltage of $M_1$:

$$V_{G1} = V_{GS2} = 0.7 + u, \qquad u = \sqrt{\frac{2I_{REF}}{\beta}} .$$

Call the lower plate of $C_1$ (the bulk of $M_1$) node B; at $t = 0$, $V_Y = V_{DD}$ and $V_B = 0$.

Node B connects only to $C_1$ and to $M_1$'s bulk, whose junctions to source and drain are reverse-biased as long as B is not above them. So the current through $C_1$ is zero, except for whatever charges the tiny parasitic capacitance $C_B$ of node B:

$$I_{C1} = C_B\frac{dV_B}{dt} \approx 0 .$$

Node Y connects only to $C_1$ and to $M_3$'s drain:

$$I_{D3} = I_{C1} + \left(\text{current from the parasitic capacitance } C_Y \text{ of node Y}\right).$$

So $M_3$ (and $M_1$ below it) can draw current only by discharging the *small* parasitic capacitances, **not** $C_1$; a sustained current such as $I_{REF}$ would empty them almost instantly. And because $I_{C1} \approx 0$, the voltage across $C_1$ stays at $V_{DD}$: **Y and B move together**,

$$V_Y - V_B \approx V_{DD}.$$

### Step 2 — Y and the bulk fall, and the body effect chokes $M_1$

At $t = 0^+$, $M_1$'s bulk is at 0 V, so it copies $I_{REF}$, and $M_3$ conducts if $V_b$ is high enough. That current pulls Y down, and B follows one $V_{DD}$ below it, so

$$V_{SB1} = 0 - V_B = V_{DD} - V_Y > 0, \qquad V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB1}} - \sqrt{0.9}\right)$$

rises. With its gate fixed at $0.7 + u$, $M_1$'s overdrive shrinks and the current decays. The process stops at the **first zero-current state** reached:

- (A) $M_1$ is cut off by the reverse body bias, $V_{TH1} = V_{G1}$; or
- (B) Y and X have been pulled all the way to 0, so that no transistor has any $V_{DS}$ left.

**Speed.** A current of order $I_{REF}$ discharges only parasitic capacitances (of order femtofarads), so the drop takes of order $C_{par}\,\Delta V/I_{REF}$, a fraction of a nanosecond to a few nanoseconds, **not** $C_1\Delta V/I_{REF}$. In the ideal model with no parasitics it is a step at $t = 0$. Afterward $V_X$ and $V_Y$ stay constant.

### Step 3 — The cut-off condition and the two cases

$M_1$ cuts off when its threshold reaches its gate voltage:

$$
\begin{aligned}
0.7 + 0.45\left(\sqrt{0.9 + V_{SB1}} - \sqrt{0.9}\right) &= 0.7 + u\\
\sqrt{0.9 + V_{SB1}} &= \sqrt{0.9} + \frac{u}{0.45}\\
V_{SB1} = s(u) &\equiv \left(\sqrt{0.9} + \frac{u}{0.45}\right)^2 - 0.9 .
\end{aligned}
$$

Since $V_Y = V_{DD} - V_{SB1}$ cannot go below 0, the bulk can fall to at most about $-V_{DD}$. The boundary between the cases is $s(u) = V_{DD} = 3$ V:

$$\sqrt{3.9} = 1.975 = 0.949 + \frac{u}{0.45} \quad\Longrightarrow\quad u = 0.46\ \mathrm{V}, \qquad V_{G1} = 1.16\ \mathrm{V} = V_{TH1}(V_{SB} = 3\ \mathrm{V}).$$

- **Case A, $u < 0.46$ V:** $M_1$ is cut off first. The bulk settles at $-s(u)$ and
$$V_Y \to V_{DD} - s(u).$$
- **Case B, $u > 0.46$ V:** even a bulk at $-V_{DD}$ cannot cut $M_1$ off. $M_1$ and $M_3$ keep conducting until **Y and X reach about 0** and the bulk reaches about $-V_{DD}$.

**Trivial case.** If $V_b \le V_{TH0} = 0.7$ V, $M_3$ cannot conduct at all ($X \ge 0$), so nothing moves: $V_Y = V_{DD}$, and X is held at 0 by $M_1$.

### Step 4 — The final value of $V_X$

In case A, $M_3$ ends with zero current. If Y is high enough, $M_3$ is a saturated follower with zero overdrive and X rises to $x_s$, defined by

$$x_s + V_{TH3}(x_s) = V_b .$$

If $V_Y$ ends below $x_s$, $M_3$ is in triode with zero current, which forces $V_X = V_Y$. In short,

$$V_X \to \min\left[V_Y,\ x_s\right].$$

In case B, $V_X \to 0$.

**Shape of the tail (case A).** Near cut-off the current is $\propto (V_{G1} - V_{TH1})^2$ and moves the bulk at a rate proportional to the current, so the overdrive $w$ obeys $dw/dt \propto -w^2$: the approach to the final level is a slow, $1/t$-like tail rather than an exponential.

### Step 5 — Role of the parasitics, and uniqueness

With strictly zero parasitic capacitance, $C_1$ only fixes $V_Y - V_B$, and any zero-current state satisfying that constraint would do, so the final state is not unique in that idealization. With small parasitics, the voltages move continuously from the initial state, the current falls monotonically, and the circuit stops at the first zero-current state, which gives the levels above.

With a bulk capacitance $C_B$, $C_1$ loses a fraction of about $C_B/C_1$ of the bulk's swing:

$$V_Y \approx V_{DD} + \left(1 + \frac{C_B}{C_1}\right)V_B ,$$

but there is still no slow $I_{REF}/C_1$ discharge.

### Step 6 — Numerical example (transient simulation)

Square law, $I_{REF} = 100\ \mu\mathrm{A}$, $V_b = 2$ V, $C_1 = 1$ pF, 10 fF of parasitic capacitance on the bulk node, on Y and on X.

**$u = 0.2$ V** ($\beta = 2I_{REF}/u^2 = 5\ \mathrm{mA/V^2}$), case A:

$$s(0.2) = \left(0.949 + \frac{0.2}{0.45}\right)^2 - 0.9 = (1.393)^2 - 0.9 = 1.041\ \mathrm{V} \ \Longrightarrow\ V_Y \to 3 - 1.041 = 1.96\ \mathrm{V}$$

(1.95 V including the 1 % charge loss to $C_B$). $x_s$ solves $x_s + V_{TH3}(x_s) = 2$ V, giving $x_s = 1.09$ V. Since $1.95 > 1.09$, $V_X \to 1.09$ V.

| $t$ | $V_Y$ (V) | $V_B$ (V) | $V_X$ (V) | $I_{D1}$ |
|---|---|---|---|---|
| 0 | 3.00 | 0 | 1.09 | 100 μA |
| 0.1 ns | 2.70 | −0.30 | 0.97 | 45 μA |
| 0.4 ns | 2.34 | −0.65 | 1.03 | 11 μA |
| 2 ns | 2.07 | −0.92 | 1.07 | 0.9 μA |
| 8 ns | 1.98 | −1.01 | 1.09 | 0.07 μA |
| $\infty$ | ≈ 1.95 | ≈ −1.04 | 1.09 | 0 |

**$u = 0.6$ V** ($\beta = 0.56\ \mathrm{mA/V^2}$), case B: $V_Y$ and $V_X$ fall to about 0 within about 4 ns, the bulk goes to −2.97 V, and $C_1$ still holds 2.97 V.

In both cases the voltage across $C_1$ hardly changes (3.00 V → 2.99 V or 2.97 V): $C_1$ is *not* discharged.

### Result

- $C_1$ has **no dc discharge path**: its lower plate connects only to the bulk of $M_1$, whose junctions are reverse-biased. So it cannot keep supplying a current through $M_3$/$M_1$.
- Instead **Y and the bulk of $M_1$ drop together**, with $V_Y - V_{B1} \approx V_{DD}$ held by $C_1$. The negative bulk raises $V_{TH1}$ and the current dies out. The drop is fast: its speed is set only by the small parasitic capacitances (rate of order $I_{REF}/C_{par}$, not $I_{REF}/C_1$), and in the ideal circuit it is a step at $t = 0$. **$V_X$ and $V_Y$ then stay at constant final levels.**
- With $u = \sqrt{2I_{REF}/\beta}$ and $s(u) = (\sqrt{0.9} + u/0.45)^2 - 0.9$:
  - **$u < 0.46$ V** ($M_1$ cut off by the body effect): bulk at $-s(u)$, $V_Y \to V_{DD} - s(u)$ (about 1.96 V for $u = 0.2$ V), and $V_X \to \min[V_Y, x_s]$ with $x_s + V_{TH3}(x_s) = V_b$. The approach has a slow $1/t$-like tail.
  - **$u > 0.46$ V:** $M_1$ stays on, Y and X are pulled to about 0, and the bulk goes to about $-V_{DD}$.
  - **$V_b \le 0.7$ V:** $M_3$ is off; nothing moves ($V_Y = V_{DD}$).

**Common mistake.** Treating $C_1$ as connected to ground (or to $M_1$'s source), so that $I_{REF}$ discharges it and $V_Y$ ramps down at $I_{REF}/C_1$. The lower plate goes to the bulk, an isolated node, so the capacitor cannot pass a dc current.

**Common mistake.** Keeping $V_Y$ at $V_{DD}$ while $M_1$ and $M_3$ carry current. Y has no supply connection; any current through $M_3$ must lower $V_Y$, and the bulk follows.

**Common mistake.** Ignoring the body effect of $M_1$. The reverse bias of $M_1$'s bulk, pushed negative through $C_1$, is exactly what shuts the current off and fixes the final level $V_{DD} - s(u)$.

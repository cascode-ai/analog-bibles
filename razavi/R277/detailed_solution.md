# Detailed solution - R277

**Approach.** $C_1$ ties the tail node P to the diode node X, and it starts uncharged, so at $t = 0^+$ node P sits as high as X. We first check that this cuts off the input pair, so that the whole tail current must flow through $C_1$. That charges $C_1$ linearly until P is low enough for $M_1$ and $M_2$ to turn on. Then the pair takes over $I_{SS}$, the capacitor current decays, and X and Y move to their normal balanced values. Throughout, we use Kirchhoff's current law (KCL) at X, P and Y with the square-law model.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: NMOS pair with gates at +1.5 V and sources at P; ideal tail $I_{SS}$ from P to ground.
- $M_3$: PMOS, diode-connected at X (drain of $M_1$). $M_4$: PMOS with gate at X and drain at Y (drain of $M_2$).
- $C_1$: between X (+) and P (−), with zero initial voltage.

Let $I_C$ be the current flowing from X through $C_1$ into P, so $I_C = C_1\,d(V_X - V_P)/dt$. KCL:

$$\text{X: } |I_{D3}| = I_{D1} + I_C, \qquad \text{P: } I_{D1} + I_{D2} + I_C = I_{SS}, \qquad \text{Y: } |I_{D4}| = I_{D2}.$$

The last equation holds at every instant because node Y has no capacitance.

### Step 2 — The state at $t = 0^+$: the pair is cut off

Since $v_{C1} = 0$, $V_P = V_X$. Suppose for the moment that $M_1$ and $M_2$ are off. Then the P equation gives $I_C = I_{SS}$, and the X equation gives $|I_{D3}| = I_{SS}$: the diode $M_3$ supplies the **entire** tail current through $C_1$. Hence

$$V_X(0^+) = V_P(0^+) = V_{DD} - 0.8 - \sqrt{\frac{2I_{SS}}{\mu_pC_{ox}(W/L)_3}}\ \ (\lambda \to 0),$$

which is **lower** than the normal mirror value because $M_3$ carries $I_{SS}$ instead of $I_{SS}/2$.

**Check that the pair is really off.** $M_1$ and $M_2$ have their gates at 1.5 V and their sources at P. They conduct only if $V_P < 1.5 - V_{TH}(V_P)$, which is about 0.66 V (Step 4). For usual sizes $V_X(0^+) \approx 1.7$ V, far above that, so both are off. ✓

**$V_Y$.** $M_4$ has a large source–gate voltage (its gate is at X), but $M_2$ is off, so Y has no path to ground. $M_4$ must carry zero current, which a conducting device does only with $V_{SD} = 0$:

$$V_Y(0^+) = V_{DD}.$$

### Step 3 — Phase 1: linear ramp of $V_P$

While the pair is off, $I_C = I_{SS}$ is constant:

$$\frac{d(V_X - V_P)}{dt} = \frac{I_{SS}}{C_1}.$$

$V_X$ is fixed by $M_3$ carrying $I_{SS}$, so **$V_P$ falls linearly** at $I_{SS}/C_1$, while **$V_X$ and $V_Y = V_{DD}$ stay constant**.

### Step 4 — The pair turns on

$M_1$ and $M_2$ turn on when $V_{GS} = 1.5 - V_P$ reaches their threshold, which includes body effect because their source P is above the grounded bulk:

$$V_P + 0.7 + 0.45\left(\sqrt{0.9 + V_P} - \sqrt{0.9}\right) = 1.5 .$$

Try $V_P = 0.664$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.564} - 0.949) = 0.7 + 0.45(1.2506 - 0.9487) = 0.836$ V, and $0.664 + 0.836 = 1.500$ ✓. So the pair turns on at $V_P \approx 0.66$ V, after

$$t_1 = \frac{C_1\left[V_X(0^+) - 0.66\ \mathrm{V}\right]}{I_{SS}}.$$

(The cut-off start requires $V_X(0^+) > 0.66$ V, i.e. a final PMOS overdrive $\sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]} \lesssim 1.09$ V, which any sensible 3-V design satisfies. Otherwise $M_2$ would conduct from the start and there would be no plateau.)

### Step 5 — Phase 2: the pair takes over and $I_C$ decays

Once on, $M_1$ and $M_2$ (same $V_{GS}$) take over the tail current, so the capacitor current falls from $I_{SS}$ toward zero. $M_3$'s current falls from $I_{SS}$ to $I_{SS}/2$, so **$V_X$ rises** to its final mirror value. $V_P$ settles at $1.5 - V_{GS1}(I_{SS}/2)$.

**Time constant.** Linearize about the final state (deviations $x$ of $V_X$ and $p$ of $V_P$; $g_{m3}$, $g_{m1}$, $g_{mb1}$ at $I_{SS}/2$; λ neglected here):

- P: $-2(g_{m1} + g_{mb1})\,p + I_C = 0$, so $p = I_C/[2(g_{m1} + g_{mb1})]$;
- X: $-g_{m3}x = -(g_{m1} + g_{mb1})p + I_C = I_C/2$, so $x = -I_C/(2g_{m3})$.

The capacitor-voltage deviation is $v = x - p = -I_C\cdot\tfrac12\left[\tfrac{1}{g_{m3}} + \tfrac{1}{g_{m1} + g_{mb1}}\right]$. With $C_1\,dv/dt = I_C$:

$$I_C \propto e^{-t/\tau}, \qquad \tau = \frac{C_1}{2}\left[\frac{1}{g_{m3}} + \frac{1}{g_{m1} + g_{mb1}}\right].$$

Both terms appear because $V_X$ rises while $V_P$ falls: the capacitor sees both node resistances in series.

### Step 6 — $V_Y$: stuck near $V_{DD}$, then a late drop

Y has no capacitance, so $|I_{D4}| = I_{D2}$ always. While $I_C$ flows, $M_3$ carries $I_{D1} + I_C$, and its saturated copy $M_4$ would like to carry the same, which is more than $M_2$ sinks ($I_{D2} \approx I_{D1}$). The excess cannot go anywhere, so Y rises until $M_4$ is in triode.

Once $M_4$ is saturated, the balance at Y gives, with $V_Y = V_X + \Delta V$, $|I_{D4}| \approx |I_{D3}| - \Delta V/r_{O4}$ and $I_{D2} \approx I_{D1} + \Delta V/r_{O2}$:

$$I_{D1} + I_C - \frac{\Delta V}{r_{O4}} = I_{D1} + \frac{\Delta V}{r_{O2}} \quad\Longrightarrow\quad V_Y - V_X \approx I_C\,(r_{O2}\|r_{O4}).$$

Because $r_{O2}\|r_{O4}$ is large, even a few microamperes of $I_C$ hold Y far above $X$, and when this formula exceeds $V_{DD} - V_X$ the node simply sits near $V_{DD}$ ($M_4$ in triode). So **$V_Y$ stays near $V_{DD}$**, easing down slightly as $I_{D2}$ grows, and **drops fairly steeply** to $\approx V_X$ only once $I_C$ has almost died out.

### Step 7 — Final state

$$V_X = V_Y = V_{DD} - |V_{GS3}|\left(\tfrac{I_{SS}}{2}\right), \qquad V_P = 1.5 - V_{GS1}\left(\tfrac{I_{SS}}{2}\right), \qquad v_{C1} = V_X - V_P .$$

### Step 8 — Numerical example

$I_{SS} = 200\ \mu\mathrm{A}$, NMOS $W/L = 10/0.5$ ($\beta_n = 2.68\ \mathrm{mA/V^2}$), PMOS $W/L = 20/0.5$ ($\beta_p = 1.536\ \mathrm{mA/V^2}$), $\lambda_n = 0.1$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$, $C_1 = 1$ pF.

$$
\begin{aligned}
V_X(0^+) &\approx 2.2 - \sqrt{2(200\ \mu\mathrm{A})/(1.536\ \mathrm{mA/V^2})} = 2.2 - 0.51 = 1.69\ \mathrm{V} \quad (1.74\ \mathrm{V with}\ \lambda_p),\\
\text{ramp} &= I_{SS}/C_1 = 200\ \mu\mathrm{A}/1\ \mathrm{pF} = 0.2\ \mathrm{V/ns}, \qquad t_1 = (1.74 - 0.66)/0.2 = 5.4\ \mathrm{ns},\\
g_{m3} &= \sqrt{2(1.536\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.554\ \mathrm{mS}, \qquad g_{m1} = \sqrt{2(2.68\ \mathrm{mA/V^2})(100\ \mu\mathrm{A})} = 0.732\ \mathrm{mS},\\
g_{mb1} &= 0.732\ \mathrm{mS}\times\frac{0.45}{2\sqrt{0.9 + 0.45}} = 0.142\ \mathrm{mS},\\
\tau &= \frac{1\ \mathrm{pF}}{2}\left[1.81\ \mathrm{k}\Omega + 1.14\ \mathrm{k}\Omega\right] = 1.5\ \mathrm{ns}.
\end{aligned}
$$

Transient solution of the full square-law equations (with λ):

| $t$ | $V_X$ (V) | $V_P$ (V) | $V_Y$ (V) | $I_C$ |
|---|---|---|---|---|
| 0 – 5.4 ns | 1.74 | 1.74 → 0.66 (ramp) | 3.00 | 200 μA |
| 6 ns | 1.77 | 0.57 | 2.97 | 164 μA |
| 8 ns | 1.85 | 0.48 | 2.79 | 40 μA |
| 9.5 ns | 1.87 | 0.46 | 2.38 | 13 μA |
| 11 ns | 1.87 | 0.45 | 2.03 | 4 μA |
| 14.5 ns | 1.87 | 0.45 | 1.88 | 0.2 μA |
| final | 1.874 | 0.449 | 1.874 | 0 |

At 9.5 ns, for instance, $I_C(r_{O2}\|r_{O4}) \approx 13\ \mu\mathrm{A}\times40\ \mathrm{k}\Omega = 0.5$ V, matching $V_Y - V_X$.

### Result

- **$t = 0^+$:** $V_P = V_X \approx V_{DD} - 0.8 - \sqrt{2I_{SS}/[\mu_pC_{ox}(W/L)_3]}$ (≈ 1.7 V), which is above $1.5\ \mathrm{V} - V_{TH}$, so $M_1$ and $M_2$ are off. The whole $I_{SS}$ flows from the diode $M_3$ through $C_1$, which sets this lower initial $V_X$. $M_4$ has no current path, so it sits in triode with zero current: $V_Y = V_{DD}$.
- **Phase 1:** $C_1$ charges at $I_{SS}/C_1$. $V_X$ stays constant while $V_P$ falls linearly, and $V_Y = V_{DD}$.
- **Phase 2:** when $V_P$ reaches $1.5 - V_{TH}(V_P) \approx 0.66$ V, the pair turns on and takes over $I_{SS}$. The capacitor current decays with $\tau \approx \tfrac{C_1}{2}[1/g_{m3} + 1/(g_{m1} + g_{mb1})]$, and $V_X$ rises to $V_{DD} - 0.8 - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$. $V_Y$ stays near $V_{DD}$ (since $V_Y - V_X \approx I_C(r_{O2}\|r_{O4})$) and drops, continuously but fairly steeply, to $\approx V_X$ once the capacitor current has nearly died out.
- **Final:** $V_X = V_Y = V_{DD} - |V_{GS3}|(I_{SS}/2)$, $V_P = 1.5 - V_{GS1}(I_{SS}/2)$, and $C_1$ holds $V_X - V_P$.

**Common mistake.** Assuming $M_1$ and $M_2$ conduct from $t = 0$, so that $V_X$ sits at its normal value and $V_Y$ starts falling immediately. With $C_1$ uncharged, P starts at the level of X (about 1.7 V), above the gates' turn-on level, so the pair is cut off at first.

**Common mistake.** Taking the initial $V_X$ at the mirror value for $I_{SS}/2$. During phase 1, $M_3$ carries the whole $I_{SS}$ (into $C_1$), so $V_X$ starts lower and rises later.

**Common mistake.** Reading $C_1$ as connected between X and Y, or to ground. It goes to the tail node P, which is what lets it steal the tail current and switch the pair off.

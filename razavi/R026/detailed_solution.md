# Detailed solution - R026

**Approach.** $M_1$ is in series with the current source $I_1$, so whatever its region it must carry $I_1$ as long as the current source can operate, and the capacitor discharges at the constant rate $I_1/C_1$. Follow $M_1$ through saturation and triode, showing that its source voltage adjusts to keep the current at $I_1$, and then discuss how the ramp ends when the current source runs out of headroom.

### Step 1 — Constant current, linear ramp

Call the source node of $M_1$ S (voltage $V_S$). It is fed only by $M_1$ and drained only by $I_1$, so

$$I_X = I_1 ,$$

and since $I_X$ comes out of $C_1$,

$$C_1\frac{dV_X}{dt} = -I_X = -I_1 \quad\Longrightarrow\quad V_X(t) = 3\ \mathrm{V} - \frac{I_1}{C_1}\,t .$$

So **$V_X$ ramps down linearly** and $I_X$ is constant, for as long as the current source keeps sinking $I_1$. The transistor does not set the current, only the voltage of node S; the next steps check that $M_1$ can always carry $I_1$ during the ramp. Take $V_{TH} \approx 0.7$ V (no body-effect data are given; while $V_S$ stays near a fixed value the threshold is constant anyway).

### Step 2 — Phase 1: $M_1$ saturated, $V_S$ constant

With $V_X = 3$ V at first, and $I_D = I_1$ in saturation,

$$I_1 = \tfrac12\beta\,(V_b - V_S - V_{TH})^2 \quad\Longrightarrow\quad V_S = V_b - V_{TH} - \sqrt{\frac{2I_1}{\beta}} ,$$

which is **constant**: $M_1$ is a source follower whose source sits one $V_{GS}$ below the fixed gate. Assume $V_b$ is large enough that $V_S \ge 0$ (more precisely, at least the minimum voltage the current source needs). Saturation requires

$$
\begin{aligned}
V_X - V_S &\ge V_b - V_S - V_{TH}\\
V_X &\ge V_b - V_{TH},
\end{aligned}
$$

so phase 1 lasts while the drain is above $V_b - V_{TH}$ (if $V_b - V_{TH} \ge 3$ V, $M_1$ starts directly in triode and phase 1 is skipped), ending at

$$t_1 = \frac{C_1\,[3\ \mathrm{V} - (V_b - V_{TH})]}{I_1} .$$

### Step 3 — Phase 2: $M_1$ in triode, current still $I_1$

For $V_X < V_b - V_{TH}$,

$$I_1 = \beta\left[(V_b - V_S - V_{TH})(V_X - V_S) - \tfrac12(V_X - V_S)^2\right].$$

The current source forces $I_1$, so $V_S$ moves: as $V_X$ falls, $V_S$ falls with it, which **raises** $V_{GS} = V_b - V_S$ (smaller on-resistance) and **shrinks** $V_{DS} = V_X - V_S$. The product still gives exactly $I_1$, so **$I_X = I_1$ and the linear ramp continues unchanged through the transition**; only the internal node S changes behaviour (constant in phase 1, falling in phase 2).

For small $V_{DS}$ the triode device is roughly a resistor $R_{on} = 1/[\beta(V_b - V_S - V_{TH})]$, so $V_S$ follows $V_X$ downward about $I_1R_{on}$ below it; the gap shrinks as $V_{GS}$ grows, so $V_S$ falls more slowly than $V_X$.

### Step 4 — How the ramp ends

An **ideal** current source would keep sinking $I_1$ at any voltage, so $V_X$ (and $V_S$ below it) would fall without limit, which is unphysical. In practice the ramp ends when node S reaches the bottom of the current source's range, $V_{S,\min}$:

- **Real (transistor) current source.** It needs a minimum voltage (its own saturation voltage, a few hundred millivolts, roughly 0 V on the scale of this sketch). When $V_S$ reaches that level, $V_X$ is still about $I_1R_{on}$ above it. The source's transistor then enters triode and its current falls; $M_1$ and that device act as two resistors in series discharging $C_1$, so **$I_X \to 0$** smoothly and **$V_X$ slides down (roughly exponentially) to the level of $V_S$, near 0 V**.
- **Ideal current source with the real $M_1$.** With the bulk of $M_1$ grounded, when $V_S$ falls to about $-0.6$ to $-0.7$ V the source–bulk junction becomes forward biased and supplies $I_1$ from the substrate instead of from the capacitor. The channel current then decays to zero, and $V_X$ settles near $V_S \approx -0.6$ to $-0.7$ V, where the drain–bulk junction would also clamp it.

Either way, the linear ramp lasts until $V_X \approx V_{S,\min} + I_1R_{on}$, i.e. a little less than $3C_1/I_1$, followed by a short rounded tail in which $I_X$ drops to zero.

### Step 5 — Numerical example

Take $I_1 = 1$ mA, $C_1 = 1$ pF, $\beta = 2\ \mathrm{mA/V^2}$ and $V_b = 2$ V.

$$
\begin{aligned}
\frac{dV_X}{dt} &= -\frac{I_1}{C_1} = -\frac{1\ \mathrm{mA}}{1\ \mathrm{pF}} = -1\ \mathrm{V/ns},\\
\sqrt{\frac{2I_1}{\beta}} &= \sqrt{\frac{2\ \mathrm{mA}}{2\ \mathrm{mA/V^2}}} = 1\ \mathrm{V},\\
V_S\ (\text{phase 1}) &= 2 - 0.7 - 1 = 0.3\ \mathrm{V},\\
\text{phase 1 ends at } V_X &= V_b - V_{TH} = 1.3\ \mathrm{V}, \quad t_1 = \frac{(1\ \mathrm{pF})(3 - 1.3)\ \mathrm{V}}{1\ \mathrm{mA}} = 1.7\ \mathrm{ns}.
\end{aligned}
$$

From 1.7 ns on, $M_1$ is in triode and $V_S$ falls from 0.3 V along with $V_X$. With $d = V_{DS} = V_X - V_S$, the triode equation $2\ \mathrm{mA/V^2}\,[(1.3 - V_X + d)d - \tfrac12d^2] = 1$ mA becomes, in volts,

$$d^2 + 2\,(1.3 - V_X)\,d - 1 = 0 .$$

- At $V_X = 1.3$ V: $d = 1$ V, so $V_S = 0.3$ V (continuous with phase 1).
- At $V_X = 0.8$ V: $d^2 + d - 1 = 0$, so $d = 0.618$ V and $V_S = 0.18$ V.
- $V_S$ reaches 0 when $d = V_X$, i.e. $V_X^2 - 2.6V_X + 1 = 0$, giving $V_X = 0.47$ V (at $t \approx 2.5$ ns).

Below that, a real current source runs out of headroom: $I_X$ decays and $V_X$ tails off toward 0 V.

| $t$ (ns) | $V_X$ (V) | $V_S$ (V) | $M_1$ | $I_X$ |
|---|---|---|---|---|
| 0 | 3.0 | 0.3 | sat. | 1 mA |
| 1.0 | 2.0 | 0.3 | sat. | 1 mA |
| 1.7 | 1.3 | 0.3 | edge | 1 mA |
| 2.2 | 0.8 | 0.18 | triode | 1 mA |
| 2.5 | 0.47 | ≈ 0 | triode | 1 mA, then falling |
| ≳ 3 | → 0 | ≈ 0 | triode | → 0 |

### Result

- $M_1$ passes the current of the series current source, so **$I_X = I_1$** (constant) and **$V_X$ falls linearly** with slope $-I_1/C_1$, from 3 V.
- **Phase 1** ($V_X > V_b - V_{TH}$): $M_1$ saturated, $V_S = V_b - V_{TH} - \sqrt{2I_1/\beta}$ constant (assumed ≥ 0), $I_X = I_1$, $dV_X/dt = -I_1/C_1$.
- **Phase 2** ($V_X < V_b - V_{TH}$): $M_1$ in triode. It still carries $I_1$ because $V_S$ drops along with $V_X$ ($V_{GS}$ grows, $V_{DS}$ shrinks), so the **linear ramp continues** with the same slope.
- **End:** an ideal current source would keep pulling both nodes down indefinitely. Physically $I_1$ stops when its own voltage $V_S$ reaches its minimum: about 0 V for a real current source, or about $-0.7$ V where the source–substrate junction starts supplying the current. After a short rounded tail, $I_X \to 0$ and $V_X$ settles at about the same level as $V_S$ (≈ 0 V).

**Common mistake.** Drawing an exponential $RC$-like discharge from the start, or computing $I_X$ from $V_b$ with the square law. The current is fixed by $I_1$; $M_1$ only determines the voltage of node S.

**Common mistake.** Letting $I_X$ start to decay as soon as $M_1$ leaves saturation. The source node simply moves down so that $M_1$ keeps carrying $I_1$; the current falls only when the current source runs out of headroom.

**Common mistake.** Letting $V_X$ settle at $V_b - V_{TH}$. That is only where $M_1$ changes from saturation to triode; nothing stops the discharge there.

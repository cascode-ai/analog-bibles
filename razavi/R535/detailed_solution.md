# Detailed solution - R535

**Approach.** The PMOS mirror makes all branches carry the same current $I_{out}$. $R_S$ sits between the gate and the drain of $M_1$, so it makes $V_{GS1}$ exceed $V_{GS2}$ by $I_{out}R_S$; substituting the square-law $V_{GS}$ of each device gives one equation in $I_{out}$.

### Step 1 — All branch currents equal $I_{out}$

Call A the drain of $M_4$ (top of $R_S$, gate of $M_1$) and B the bottom of $R_S$ (drain of $M_1$, gate of $M_2$).
- $M_2$ and $M_3$ are in series: $I_{D2} = I_{D3} = I_{out}$.
- $M_3$ and $M_4$ are identical with the same $V_{GS}$, so with $\lambda = 0$, $I_{D4} = I_{D3} = I_{out}$.
- The gates of $M_1$ and $M_2$ draw no current, so all of $M_4$'s current flows through $R_S$ into $M_1$: $I_{R_S} = I_{D1} = I_{D4} = I_{out}$.

### Step 2 — The loop equation

With both sources grounded, $V_A = V_{GS1}$ and $V_B = V_{GS2}$. $R_S$ carries $I_{out}$ from A to B:

$$V_A - V_B = I_{out}R_S \quad\Longrightarrow\quad V_{GS1} = V_{GS2} + I_{out}R_S .$$

$M_1$ needs a larger $V_{GS}$ than $M_2$ at the same current, so it must be the "weaker" device, with the smaller $W/L$.

### Step 3 — Insert the square law

With $V_{GS} = V_{TH} + \sqrt{2I_D/\beta}$ and the **same** $V_{TH}$ for both devices (grounded sources and bulks, no body effect):

$$V_{TH} + \sqrt{\frac{2I_{out}}{\beta_1}} = V_{TH} + \sqrt{\frac{2I_{out}}{\beta_2}} + I_{out}R_S .$$

### Step 4 — Solve for $I_{out}$

Cancelling $V_{TH}$ and factoring out $\sqrt{2I_{out}}$:

$$\sqrt{2I_{out}}\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right) = I_{out}R_S .$$

Besides $I_{out} = 0$ (Step 5), dividing by $\sqrt{I_{out}}$ gives

$$\sqrt2\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right) = \sqrt{I_{out}}\,R_S ,$$

and squaring,

$$\boxed{I_{out} = \frac{2}{R_S^2}\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right)^2 = \frac{2}{\mu_nC_{ox}(W/L)_1R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2,\qquad K = \frac{(W/L)_2}{(W/L)_1},}$$

where the second form factors $1/\sqrt{\beta_1}$ out of the bracket and uses $\sqrt{\beta_1/\beta_2} = 1/\sqrt K$.

**Sign condition.** $\sqrt{I_{out}}R_S > 0$ requires $\beta_2 > \beta_1$ ($K > 1$): $M_2$ has the larger $W/L$ (wider if the channel lengths are equal), as Step 2 anticipated.

**Properties.** $V_{DD}$ does not appear, so the current is **supply-independent** (as far as channel-length modulation is negligible). No body effect enters, because both NMOS sources are grounded, an advantage over the classic arrangement with $R_S$ in the source of $M_2$, which gives the same expression but suffers from $M_2$'s body effect.

### Step 5 — Side conditions

**Saturation of $M_1$.** $V_{DS1} = V_{GS2}$, and $V_{DS1} \ge V_{GS1} - V_{TH}$ gives

$$V_{GS2} \ge V_{GS2} + I_{out}R_S - V_{TH}\quad\Longrightarrow\quad I_{out}R_S \le V_{TH}.$$

**Saturation of $M_2$** needs $V_{DS2} = V_{DD} - |V_{GS3}| \ge V_{GS2} - V_{TH}$, which a reasonable supply satisfies.

**Start-up.** The loop equation is also satisfied by $I_{out} = 0$ (all devices off), so a start-up circuit is needed.

**Numerical illustration.** Take $\beta_1 = 2\ \mathrm{mA/V^2}$, $\beta_2 = 8\ \mathrm{mA/V^2}$ ($K = 4$) and $R_S = 2\ \mathrm{k\Omega}$:

$$
\begin{aligned}
I_{out} &= \frac{2}{(2\times10^{-3})(2\times10^3)^2}\left(1 - \frac12\right)^2\ \mathrm{A} = 0.25\ \mathrm{mA}\times0.25 = 62.5\ \mu\mathrm{A},\\
\sqrt{2I_{out}/\beta_1} &= \sqrt{2\times62.5\ \mu\mathrm{A}/2\ \mathrm{mA/V^2}} = 0.250\ \mathrm{V},\\
\sqrt{2I_{out}/\beta_2} &= \sqrt{2\times62.5\ \mu\mathrm{A}/8\ \mathrm{mA/V^2}} = 0.125\ \mathrm{V},\\
I_{out}R_S &= 62.5\ \mu\mathrm{A}\times2\ \mathrm{k\Omega} = 0.125\ \mathrm{V} = 0.250 - 0.125\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

### Result

$$I_{out} = \frac{2}{R_S^2}\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right)^2 = \frac{2}{\mu_nC_{ox}(W/L)_1R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2,\qquad K = \frac{(W/L)_2}{(W/L)_1},$$

which follows from $I_{D1} = I_{D2} = I_{D4} = I_{out}$ and $V_{GS1} = V_{GS2} + I_{out}R_S$. A nonzero solution requires $\beta_2 > \beta_1$ ($M_2$ with the larger $W/L$). The current is independent of $V_{DD}$ and free of body-effect error; $M_1$ stays saturated if $I_{out}R_S \le V_{TH}$, and a start-up circuit is needed to avoid the zero-current state.

**Common mistake.** Reversing the loop relation to $V_{GS2} = V_{GS1} + I_{out}R_S$, as in the familiar circuit with $R_S$ in the source of $M_2$. Here $R_S$ lies between the gate and the drain of $M_1$, so $M_1$'s gate sits higher and $M_2$ must be the wider device.

**Common mistake.** Treating $R_S$ as carrying a different current, or letting the result depend on $V_{DD}$. All three branches carry $I_{out}$, and $V_{DD}$ never enters the loop equation.

**Common mistake.** Dropping the factor 2 of the square law, i.e. writing $V_{GS} = V_{TH} + \sqrt{I_D/\beta}$. The overdrive is $\sqrt{2I_D/\beta}$, which is where the factor 2 in the result comes from.

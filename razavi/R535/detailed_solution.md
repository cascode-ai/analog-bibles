# Detailed solution - R535

**Approach.** First use the PMOS mirror to show that all four transistors carry the same current $I_{out}$. Then write a voltage equation around the loop formed by $M_1$, $R_S$ and $M_2$: the resistor sits between the gate and the drain of $M_1$, so it makes $V_{GS1}$ exceed $V_{GS2}$ by $I_{out}R_S$. Substituting the square-law expression for each $V_{GS}$ gives one equation in $I_{out}$, which we solve.

### Step 1 — Reading the circuit

- $M_3$ (PMOS) is diode-connected: its gate is tied to its drain. Its drain current is $I_{out}$, which flows down into the drain of the NMOS $M_2$, whose source is grounded.
- $M_4$ (PMOS) shares its gate and source with $M_3$, so it mirrors $M_3$'s current.
- $M_4$'s drain is node A, the top of $R_S$. Node A also connects to the **gate of $M_1$**.
- The bottom of $R_S$ is node B, which connects to the **drain of $M_1$** and to the **gate of $M_2$**.
- $M_1$ and $M_2$ have their sources and bulks grounded.

So $R_S$ sits between the gate and the drain of $M_1$, and the voltage at B drives $M_2$.

### Step 2 — All branch currents equal $I_{out}$

- **$M_2$ and $M_3$ are in series:** $I_{D2} = I_{D3} = I_{out}$.
- **Mirror:** $M_3$ and $M_4$ are identical and have the same $V_{GS}$ (same gate, same source). With channel-length modulation neglected, $I_{D4} = I_{D3} = I_{out}$.
- **KCL at A and B:** the gates of $M_1$ and $M_2$ draw no current. All of $M_4$'s current therefore flows down through $R_S$ into the drain of $M_1$: $I_{R_S} = I_{D1} = I_{D4} = I_{out}$.

### Step 3 — The loop equation

Node voltages measured from ground (both sources are grounded):
- $V_A = V_{GS1}$ (A is the gate of $M_1$);
- $V_B = V_{GS2}$ (B is the gate of $M_2$).

Ohm's law for $R_S$, which carries $I_{out}$ from A to B:

$$V_A - V_B = I_{out}R_S \quad\Longrightarrow\quad V_{GS1} = V_{GS2} + I_{out}R_S .$$

$M_1$ therefore needs a larger gate–source voltage than $M_2$ at the same current. That is only possible if $M_1$ is the "weaker" device, with the smaller $W/L$.

### Step 4 — Insert the square law

In saturation, $I_D = \tfrac12\beta(V_{GS} - V_{TH})^2$ with $\beta = \mu_nC_{ox}W/L$, so

$$V_{GS} = V_{TH} + \sqrt{\frac{2I_D}{\beta}} .$$

Both NMOS devices have grounded source and bulk ($V_{SB} = 0$), so they have the **same** threshold $V_{TH}$, with no body effect. With $I_{D1} = I_{D2} = I_{out}$:

$$V_{TH} + \sqrt{\frac{2I_{out}}{\beta_1}} = V_{TH} + \sqrt{\frac{2I_{out}}{\beta_2}} + I_{out}R_S .$$

### Step 5 — Solve for $I_{out}$

Cancel $V_{TH}$ and factor out $\sqrt{2I_{out}}$:

$$\sqrt{2I_{out}}\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right) = I_{out}R_S .$$

$I_{out} = 0$ satisfies this equation (see Step 6). For the nonzero solution, divide both sides by $\sqrt{I_{out}}$:

$$\sqrt2\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right) = \sqrt{I_{out}}\,R_S .$$

Square both sides and divide by $R_S^2$:

$$\boxed{I_{out} = \frac{2}{R_S^2}\left(\frac{1}{\sqrt{\beta_1}} - \frac{1}{\sqrt{\beta_2}}\right)^2 = \frac{2}{\mu_nC_{ox}(W/L)_1R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2,\qquad K = \frac{(W/L)_2}{(W/L)_1}.}$$

The second form follows from factoring $1/\sqrt{\beta_1}$ out of the bracket and using $\sqrt{\beta_1/\beta_2} = 1/\sqrt K$.

**Sign condition.** $\sqrt{I_{out}}R_S$ is positive, so the bracket must be positive: $\beta_2 > \beta_1$, i.e. $K > 1$. $M_2$ must have the larger $W/L$ (it is wider if the channel lengths are equal). This matches Step 3: $M_1$ needs more $V_{GS}$ for the same current.

**Properties.**
- $V_{DD}$ does not appear, so the current is **supply-independent** (to the extent that channel-length modulation is negligible).
- No body effect enters, because both NMOS sources are grounded. This is an advantage over the classic arrangement with $R_S$ in the source of $M_2$, which gives the same expression but suffers from $M_2$'s body effect.

### Step 6 — Side conditions

**Saturation of $M_1$.** Its drain is at B, so $V_{DS1} = V_{GS2}$. Saturation requires $V_{DS1} \ge V_{GS1} - V_{TH}$:

$$V_{GS2} \ge V_{GS2} + I_{out}R_S - V_{TH}\quad\Longrightarrow\quad I_{out}R_S \le V_{TH}.$$

**Saturation of $M_2$** needs $V_{DS2} = V_{DD} - |V_{GS3}| \ge V_{GS2} - V_{TH}$, which a reasonable supply satisfies.

**Start-up.** The loop equation is also satisfied by $I_{out} = 0$ (all devices off). Like every supply-independent bias circuit of this kind, it needs a start-up circuit to avoid this degenerate state.

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

**Common mistake.** Reversing the loop relation and writing $V_{GS2} = V_{GS1} + I_{out}R_S$, as in the familiar circuit where $R_S$ is in the source of $M_2$. Here $R_S$ lies between the gate and the drain of $M_1$, so it is $M_1$ whose gate sits higher, and $M_2$ must be the wider device.

**Common mistake.** Treating $R_S$ as a source resistor that carries a different current, or letting the result depend on $V_{DD}$. All three branches carry $I_{out}$ (series connection, identical mirror, gates drawing no current), and $V_{DD}$ never enters the loop equation.

**Common mistake.** Dropping the factor 2 of the square law, i.e. writing $V_{GS} = V_{TH} + \sqrt{I_D/\beta}$. With $I_D = \tfrac12\beta V_{ov}^2$, the overdrive is $\sqrt{2I_D/\beta}$, and this is where the factor 2 in the result comes from.

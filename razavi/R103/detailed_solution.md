# Detailed solution - R103

**Approach.** The test source $V_X$ sets the *source* voltage of $M_1$ (its gate is fixed at $V_b$). Write KCL at the source node: $I_X$ plus the transistor current must equal the current in $R_S$. Then follow $M_1$'s current, which falls as its source rises (smaller $V_{GS}$, and a higher threshold through the body effect), until the device cuts off. Beyond that point only the resistor $R_S$ is left.

### Step 1 — The circuit and KCL at the source node

From the figure: $R_D$ connects $V_{DD} = 3$ V to the drain of $M_1$; the gate is at $V_b$; the source node is connected to ground through $R_S$ and to the test source $V_X$; $I_X$ flows from $V_X$ *into* the source node. The bulk is at ground.

Since $V_X$ is an ideal source, the source voltage of $M_1$ is $V_X$:

$$V_{GS} = V_b - V_X, \qquad V_{SB} = V_X, \qquad V_{TH}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right)\ \mathrm{V}.$$

**KCL at the source node.** Into the node: $I_X$, and the drain current $I_{D1}$ (which flows down through the channel into the source). Out of the node: $V_X/R_S$ through $R_S$:

$$I_X + I_{D1} = \frac{V_X}{R_S} \quad\Longrightarrow\quad I_X = \frac{V_X}{R_S} - I_{D1} .$$

### Step 2 — When is $M_1$ on, and in which region?

**Cutoff.** $M_1$ conducts while $V_b - V_X > V_{TH}(V_X)$. Raising $V_X$ lowers $V_{GS}$ and raises $V_{TH}$, so the device turns off at $V_{X,off}$, where

$$V_b - V_{X,off} = V_{TH}(V_{X,off}).$$

With $u = \sqrt{0.9 + V_{X,off}}$, this becomes $u^2 + 0.45u - (V_b + 0.6269) = 0$, so

$$u = \frac{-0.45 + \sqrt{0.2025 + 4(V_b + 0.6269)}}{2}, \qquad V_{X,off} = u^2 - 0.9 .$$

Because of the body effect, $V_{X,off}$ is **slightly below $V_b - 0.7$ V**.

**Saturation or triode.** The drain voltage is $V_D = V_{DD} - I_{D1}R_D$. $M_1$ is saturated if $V_{DS} \ge V_{GS} - V_{TH}$, i.e.

$$V_{DD} - I_{D1}R_D \ge V_b - V_{TH}(V_X) .$$

If $R_D$ is large and the current at small $V_X$ is large, this can fail: $M_1$ then starts in **triode** and moves into saturation as $V_X$ rises and its current falls (so $V_D$ rises). Near cutoff the current is small and $M_1$ is always saturated.

### Step 3 — $I_X$ while $M_1$ is on

**In saturation:**

$$I_{D1} = \frac12\beta\left(V_b - V_X - V_{TH}(V_X)\right)^2, \qquad I_X = \frac{V_X}{R_S} - \frac12\beta\left(V_b - V_X - V_{TH}(V_X)\right)^2 .$$

**Start of the curve.** At $V_X = 0$ ($V_{TH} = 0.7$ V), and if $M_1$ is saturated there:

$$I_X(0) = -I_{D1}(0) = -\frac12\beta(V_b - 0.7)^2 .$$

It is negative: the transistor pushes its current *into* the source $V_X$.

**Slope.** $I_{D1}$ falls as $V_X$ rises, because $V_{GS}$ falls (rate 1) and $V_{TH}$ rises (rate $\eta = \partial V_{TH}/\partial V_{SB}$). So $dI_{D1}/dV_X = -g_m(1 + \eta) = -(g_m + g_{mb})$ and

$$\frac{dI_X}{dV_X} = \frac{1}{R_S} + g_m + g_{mb} > 0 .$$

This is the conductance seen looking into the source of a common-gate device ($g_m + g_{mb}$, since $\lambda = 0$), in parallel with $1/R_S$. $I_X$ **rises steeply** at first and the slope decreases toward $1/R_S$ as $g_m$ falls to zero at cutoff. $R_D$ does not enter while $M_1$ is saturated.

**Zero crossing:** $I_X = 0$ where $I_{D1} = V_X/R_S$. This is the source voltage the circuit would settle at without the test source: a source follower of $V_b$ loaded by $R_S$.

**If $M_1$ starts in triode** (large $R_D$), $I_{D1}$ is limited by $R_D$, roughly $(V_{DD} - V_D)/R_D$ with a small $V_D$. $I_X(0)$ is then less negative, and the curve is less steep there, until $M_1$ reaches saturation.

### Step 4 — $V_X \ge V_{X,off}$: only the resistor

With $M_1$ off,

$$I_X = \frac{V_X}{R_S} ,$$

the **straight line through the origin**, reaching $3\ \mathrm{V}/R_S$ at $V_X = V_{DD}$. The square-law current and its slope both go to zero at $V_{X,off}$, so the curve joins this line **tangentially**.

### Step 5 — A numerical example

For illustration take $V_b = 1.5$ V, $\beta = 2\ \mathrm{mA/V^2}$ and $R_D = R_S = 2\ \mathrm{k}\Omega$.

**At $V_X = 0$:** $I_{D1} = \frac12(2\ \mathrm{mA/V^2})(0.8\ \mathrm{V})^2 = 0.64$ mA. Check saturation: $V_D = 3 - (0.64\ \mathrm{mA})(2\ \mathrm{k}\Omega) = 1.72$ V $\ge V_b - V_{TH} = 0.8$ V. ✓ So $I_X(0) = -0.64$ mA, and the initial slope is $1/R_S + g_m(1 + \eta) = 0.5\ \mathrm{mS} + (1.6\ \mathrm{mS})(1.237) = 2.48$ mS.

**Cutoff:** $u = (-0.45 + \sqrt{0.2025 + 4\times2.1269})/2 = (-0.45 + 2.9513)/2 = 1.2507$, so $V_{X,off} = 1.2507^2 - 0.9 = 0.664$ V (compared with $V_b - 0.7 = 0.8$ V).

| $V_X$ (V) | $V_{TH}$ (V) | $I_{D1}$ (mA) | $V_X/R_S$ (mA) | $I_X$ (mA) |
|---|---|---|---|---|
| 0 | 0.700 | 0.640 | 0 | −0.640 |
| 0.1 | 0.723 | 0.458 | 0.05 | −0.408 |
| 0.2 | 0.745 | 0.308 | 0.10 | −0.208 |
| 0.325 | 0.771 | 0.163 | 0.163 | 0 |
| 0.4 | 0.786 | 0.099 | 0.20 | 0.102 |
| 0.5 | 0.806 | 0.038 | 0.25 | 0.212 |
| 0.664 | 0.836 | 0 | 0.332 | 0.332 |
| 2.0 | — | 0 | 1.00 | 1.000 |
| 3.0 | — | 0 | 1.50 | 1.500 |

(With a much larger $R_D$, e.g. 10 kΩ, $M_1$ would start in triode: at $V_X = 0$ only about 0.28 mA flows, with $V_D \approx 0.2$ V, and $I_X(0) \approx -0.28$ mA.)

### Result

$$I_X = \frac{V_X}{R_S} - I_{D1}$$

(KCL at the source node), which gives:

- **Start:** negative at $V_X = 0$, $I_X(0) = -I_{D1}(0)$ ($= -\tfrac12\beta(V_b - 0.7)^2$ if $M_1$ is saturated there).
- **Rise:** $I_X$ rises as $M_1$'s current falls, because $V_X$ (its source) reduces $V_{GS} = V_b - V_X$ and raises $V_{TH}$ through $V_{SB} = V_X$. In saturation $I_{D1} = \tfrac12\beta(V_b - V_X - V_{TH}(V_X))^2$ and the slope is $1/R_S + g_m + g_{mb}$.
- **Triode possibility:** $M_1$ is saturated if its drain $V_{DD} - I_{D1}R_D \ge V_b - V_{TH}$. With a large current and a large $R_D$ it may start in triode at small $V_X$ and enter saturation as $V_X$ rises.
- **Cutoff** at $V_{X,off}$, where $V_b - V_{X,off} = V_{TH}(V_{X,off})$, slightly below $V_b - 0.7$ V because of the body effect. The zero crossing is where $I_{D1} = V_X/R_S$.
- **$V_X \ge V_{X,off}$:** $I_X = V_X/R_S$, a line through the origin reaching $3\ \mathrm{V}/R_S$ at $V_X = V_{DD}$.
- **Transition points:** possible triode/saturation boundary, $V_{X,off}$, end value $3\ \mathrm{V}/R_S$.

**Common mistake.** Treating $V_X$ as the drain voltage of $M_1$, as in an output-characteristic measurement, and drawing $I_{D1}$ *increasing* with $V_X$. $V_X$ is applied at the source; raising it *reduces* $V_{GS}$, so the transistor current falls.

**Common mistake.** Keeping only one of the two currents. The source $V_X$ must supply $R_S$ *and* absorb $M_1$'s drain current, so $I_X$ is negative at first (when $M_1$'s current dominates) and becomes $V_X/R_S$ after cutoff.

**Common mistake.** Placing the cutoff at exactly $V_X = V_b - 0.7$ V. The source–bulk voltage equals $V_X$, so the threshold is higher than 0.7 V near cutoff and the device turns off a little earlier (0.664 V instead of 0.8 V in the example).

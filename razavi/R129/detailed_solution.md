# Detailed solution - R129

**Approach.** Node $X$ is the source of the cascode device $M_2$, whose gate is fixed, so $V_X = V_b - V_{GS2}$ depends on the drain current. The maximum output swing with both devices saturated spans the currents from zero (output at $V_{DD}$) up to the current at which $M_1$ reaches the edge of triode. Evaluate $V_X$ at both ends, with the body effect of $M_2$, and take the difference.

### Step 1 — The relation between $V_X$ and the current

With $\lambda = 0$ and $\beta_2 = \mu_nC_{ox}(W/L)_2 = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}$,

$$V_X = V_b - V_{GS2} = V_b - V_{TH2}(V_X) - \sqrt{\frac{2I_D}{\beta_2}},$$

where the threshold includes the body effect ($M_2$'s source at $V_X$, bulk at ground):

$$V_{TH2}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right)\ \mathrm{V}.$$

So $V_X$ is *not* constant: a larger current needs a larger $V_{GS2}$, and since the gate cannot move, $X$ goes down.

### Step 2 — The current range of the maximum output swing

With $V_{out} = V_{DD} - I_DR_D$, each output voltage corresponds to a current:

- **Upper end:** $V_{out} \to V_{DD} = 3$ V, i.e. $I_D \to 0$; both devices remain (marginally) saturated as their overdrives go to zero.
- **Lower end:** $M_1$ leaves saturation first, when $V_{DS1} = V_X$ falls to $V_{ov1}$. This happens at $I_D = 0.566$ mA, i.e. $V_{out} = 3 - 0.566 = 2.434$ V, while $M_2$ needs only $V_{out} \ge V_b - V_{TH2} \approx 0.94$ V.

**Derivation of the lower end.** At the edge $V_X = V_{ov1}$, and since $\beta_1 = 13.4\ \mathrm{mA/V^2} = 5\beta_2$, $V_{ov2} = \sqrt{\beta_1/\beta_2}\,V_{ov1} = \sqrt5\,V_X$. Step 1 becomes

$$(1 + \sqrt5)\,V_X + 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.9487\right) = 1.705\ \mathrm{V}.$$

At $V_X = 0.2907$ V the left side is $0.9408 + 0.7 + 0.45(1.0912 - 0.9487) = 0.9408 + 0.7 + 0.0641 = 1.705$ V ✓, so $I_D = \tfrac12\beta_1V_X^2 = \tfrac12(13.4\ \mathrm{mA/V^2})(0.2907)^2 = 0.566$ mA.

### Step 3 — $V_X$ at the lower end of the swing ($V_{out} \approx 2.43$ V)

$$V_{X,min} = V_{ov1} = 0.291\ \mathrm{V}\qquad (I_D = 0.566\ \mathrm{mA},\ V_{GS2} = 0.764 + 0.650 = 1.414\ \mathrm{V}),$$

and indeed $V_b - V_{GS2} = 1.705 - 1.414 = 0.291$ V ✓.

### Step 4 — $V_X$ at the upper end of the swing ($V_{out} \to 3$ V)

At $I_D \to 0$, $V_{GS2} \to V_{TH2}$:

$$V_X + V_{TH2}(V_X) = V_b\quad\Longrightarrow\quad V_X + 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.9487\right) = 1.705 .$$

With $u = \sqrt{0.9 + V_X}$ ($V_X = u^2 - 0.9$):

$$
\begin{aligned}
u^2 - 0.9 + 0.7 + 0.45u - 0.4269 &= 1.705\\
u^2 + 0.45u - 2.3319 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 9.3276}}{2} = \frac{-0.45 + 3.0871}{2} = 1.3185\\
V_X &= u^2 - 0.9 = 1.7385 - 0.9 = 0.8385\ \mathrm{V}.
\end{aligned}
$$

Check: $V_{TH2} = 0.7 + 0.45(1.3185 - 0.9487) = 0.7 + 0.1664 = 0.8664$ V, and $0.8385 + 0.8664 = 1.705$ V ✓. The body effect raises the threshold to 0.87 V here, since $X$ is 0.84 V above the bulk.

### Step 5 — The swing at node $X$

$$\Delta V_X = V_{X,max} - V_{X,min} = 0.8385 - 0.2907 \approx 0.55\ \mathrm{V}.$$

Points along the way (same equations):

| $I_D$ (mA) | $V_{out}$ (V) | $V_X$ (V) | $V_{TH2}$ (V) |
|---|---|---|---|
| 0 | 3.000 | 0.839 | 0.866 |
| 0.1 | 2.900 | 0.606 | 0.825 |
| 0.3 | 2.700 | 0.438 | 0.794 |
| 0.5 (bias) | 2.500 | 0.323 | 0.771 |
| 0.566 | 2.434 | 0.291 | 0.764 |

Relative to the bias point ($V_X = 0.323$ V), $X$ can fall by only 32 mV but rise by 0.52 V, mirroring the asymmetric output range (66 mV down, 0.5 V up).

**Why the swing at $X$ is so large.** The 0.57-V output range takes the current from 0.566 mA all the way to zero, and near zero current $V_{GS2}$ changes rapidly (the overdrive goes as $\sqrt{I_D}$), so $X$ moves almost as much as the output: about 0.55 V against 0.57 V. In small-signal terms $X$ moves by about $g_{m1}/(g_{m2} + g_{mb2}) \approx 1.9$ times $v_{in}$, against 3.6 times at the output, but over the full large-signal range the narrow cascode device's $V_{GS}$ change makes the two swings comparable: the cascode does *not* hold $X$ fixed.

### Result

As the output swings over its maximum range with both transistors saturated (from ≈ 2.43 V up to 3 V), node $X$ swings from

$$V_{X,min} \approx 0.29\ \mathrm{V}\ (\text{at } V_{out} \approx 2.43\ \mathrm{V},\ M_1 \text{ at the edge of triode})$$

to

$$V_{X,max} \approx 0.84\ \mathrm{V}\ (\text{at } V_{out} \to 3\ \mathrm{V},\ I_D \to 0),$$

a swing of **≈ 0.55 V**, about as large as the output swing itself.

**Common mistake.** Assuming $V_X$ stays at its bias value because "the cascode shields $X$". $V_X = V_b - V_{GS2}$, and $V_{GS2}$ changes with the current.

**Common mistake.** Ignoring the body effect of $M_2$: with $V_{TH2}$ fixed at 0.7 V and $V_b = 1.705$ V, the upper end would come out as $V_X = 1.705 - 0.7 = 1.005$ V instead of 0.84 V (and with $V_b$ re-designed without body effect, 1.634 V, one would get 0.29–0.93 V, still off at the top). At $V_X \approx 0.84$ V the body effect raises $V_{TH2}$ by about 0.17 V.

**Common mistake.** Defining the swing by $M_2$ entering triode ($V_{out} \approx 0.94$ V). With the resistive load, $M_1$ leaves saturation first, at $V_{out} \approx 2.43$ V, which sets the lower end of the $X$ swing.

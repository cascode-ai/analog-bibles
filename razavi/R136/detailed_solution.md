# Detailed solution - R136

**Approach.** With $V_{in}$ fixed, $M_1$ has a fixed overdrive. Raising $V_b$ weakens the PMOS load $M_2$, so $V_{out}$ falls and the devices move through their regions. The small-signal gain in any region is $|A_v| = g_{m1}/(g_{ds1} + g_{ds2})$: $M_1$'s transconductance over the total output conductance. In the case asked about here, $M_2$ saturates while $M_1$ is still saturated. There is then a short interval in which both are current sources, the output conductance is only $1/r_{O1} + 1/r_{O2}$, and the gain jumps to the intrinsic level $g_{m1}(r_{O1}\parallel r_{O2})$. We follow the gain region by region and illustrate with a numerical example.

### Step 1 — What is fixed and what changes

From the figure: $M_1$ (NMOS, gate at $V_{in}$, source at ground, drain at $V_{out}$) and $M_2$ (PMOS, source at $V_{DD} = 3$ V, gate at $V_b$, drain at $V_{out}$).

- $M_1$: fixed overdrive $A \equiv V_{in} - 0.7$ V.
- $M_2$: overdrive $w \equiv (3 - V_b) - 0.8 = 2.2 - V_b$, which decreases as $V_b$ rises. $M_2$ is **off** for $V_b \ge 2.2$ V.
- $\beta_1 = \mu_nC_{ox}(W/L)_1$, $\beta_2 = \mu_pC_{ox}(W/L)_2$. Both devices have $\lambda > 0$, so in saturation each has a finite $r_O \approx 1/(\lambda I_D)$.

Region boundaries:

- $M_1$ saturated $\Leftrightarrow V_{out} \ge A$;
- $M_2$ saturated $\Leftrightarrow V_{SD2} \ge w \Leftrightarrow V_{out} \le V_b + 0.8$ V.

As $V_b$ rises, $V_{out}$ falls monotonically.

### Step 2 — The order of events in this case

Neglecting $\lambda$ for the bias, $M_1$ (saturated) carries $I_1 = \tfrac12\beta_1A^2$. $M_2$ can deliver this current in saturation only while $\tfrac12\beta_2w^2 \ge I_1$, i.e. until

$$V_b^* \approx 2.2\ \mathrm{V} - A\sqrt{\beta_1/\beta_2}.$$

At that point $M_2$ reaches the edge of saturation, at $V_{out} = V_b^* + 0.8$ V. "$M_1$ enters triode **after** $M_2$ saturates" means that this output level is still above $A$, so $M_1$ is still saturated when $M_2$ saturates. Equivalently, $V_{in} - 0.7 < 3/(1 + \sqrt{\beta_1/\beta_2})$.

### Step 3 — Region I: $M_1$ saturated, $M_2$ in triode (gain rises)

$M_2$ acts as a resistor with incremental resistance

$$r_2 = \frac{1}{\partial I_{D2}/\partial V_{SD2}} = \frac{1}{\beta_2(w - V_{SD2})}\quad(\text{plus a small } \lambda \text{ term}),$$

and $M_1$ is a transconductor $g_{m1} = \beta_1A$ with output resistance $r_{O1}$:

$$|A_v| = g_{m1}\,(r_{O1}\parallel r_2).$$

As $V_b$ rises, $w$ falls and $V_{SD2}$ must grow to keep passing $M_1$'s current. So $w - V_{SD2}$ shrinks, $r_2$ grows, and **the gain rises**, steeply as $M_2$ approaches saturation (where $w - V_{SD2} \to 0$).

### Step 4 — Region II: both saturated (tall, narrow peak)

Once $V_{SD2} \ge w$, $M_2$ is a current source too. Its triode conductance has vanished; only $1/r_{O2}$ remains. With $v_{sg2} = 0$ (gate at the dc voltage $V_b$, source at $V_{DD}$):

$$|A_v| = g_{m1}\,(r_{O1}\parallel r_{O2}),\qquad r_{O1} \approx \frac{1}{\lambda_nI_D},\quad r_{O2} \approx \frac{1}{\lambda_pI_D}.$$

This is the **intrinsic-gain-level maximum**, the largest gain the stage can have. It would be unbounded for $\lambda = 0$.

**Why the interval is narrow.** In this region two current sources face each other. Their currents can match only because $r_{O1}$ and $r_{O2}$ let $V_{out}$ adjust. A small change $\Delta V_b$ changes $M_2$'s current by $g_{m2}\Delta V_b$, which moves the output by $g_{m2}(r_{O1}\parallel r_{O2})\Delta V_b$, a large amount. $V_{out}$ must travel from $V_b^* + 0.8$ V (where $M_2$ saturates) down to $A$ (where $M_1$ leaves saturation), so the interval of $V_b$ is only about

$$\Delta V_b \approx \frac{(V_b^* + 0.8) - A}{g_{m2}\,(r_{O1}\parallel r_{O2})},$$

a small fraction of a volt. As $\lambda \to 0$, the peak becomes infinitely tall and infinitely narrow.

### Step 5 — Region III: $M_1$ in triode, $M_2$ saturated (gain collapses, then decays)

Just beyond the peak, $M_2$'s saturation current $\tfrac12\beta_2(2.2 - V_b)^2$ is smaller than what a saturated $M_1$ would draw. $M_1$ is forced into triode, and $V_{out}$ drops below $V_{in} - 0.7$ V. In triode:

$$g_{m1} = \beta_1V_{out},\qquad g_{ds1} = \beta_1(A - V_{out}),$$

so

$$|A_v| = \frac{\beta_1V_{out}}{\beta_1(A - V_{out}) + 1/r_{O2}} \approx \frac{V_{out}}{A - V_{out}}.$$

Even a small $A - V_{out}$ gives $M_1$ a large output conductance, so the gain **collapses** quickly from the peak to low values. It then decays smoothly toward zero as $V_b \to 2.2$ V, because the current and $V_{out}$ go to zero.

### Step 6 — Region IV: $V_b \ge 2.2$ V

$M_2$ is off ($V_{SG2} \le |V_{THP}|$), the output is pulled to 0 V by $M_1$ with zero current, and $M_1$'s triode transconductance $\beta_1V_{DS1}$ is zero:

$$A_v = 0\quad\text{for } 2.2\ \mathrm{V} \le V_b \le 3\ \mathrm{V}.$$

### Step 7 — Numerical example

Take $V_{in} = 1.7$ V ($A = 1$ V), $\beta_1 = \beta_2 = 2\ \mathrm{mA/V^2}$, $\lambda_n = 0.1\ \mathrm{V^{-1}}$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$. Then $V_b^* \approx 2.2 - 1\times1 = 1.2$ V, and there $V_{out} = 2.0$ V $> A = 1$ V, so this is indeed the case of the problem. Solving the square-law equations (with the factor $1 + \lambda V_{DS}$) and differentiating numerically:

| $V_b$ (V) | 0 | 0.6 | 1.0 | 1.1 | 1.15 | 1.19 | 1.20 | 1.26 | 1.31 | 1.33 | 1.36 | 1.4 | 1.6 | 1.8 | 2.0 | ≥ 2.2 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $V_{out}$ (V) | 2.71 | 2.58 | 2.38 | 2.27 | 2.18 | 2.06 | 2.00 | 1.52 | 1.00 | 0.87 | 0.76 | 0.66 | 0.32 | 0.13 | 0.03 | 0 |
| $\lvert A_v\rvert$ | 0.58 | 0.87 | 1.5 | 2.1 | 2.9 | 5.1 | **8.0** | **8.3** | **8.6** | 3.6 | 2.2 | 1.5 | 0.43 | 0.15 | 0.03 | 0 |
| regions | I | I | I | I | I | I | II (start) | II | II (end) | III | III | III | III | III | III | IV |

- Both devices are saturated only for $1.200\ \mathrm{V} \le V_b \le 1.314$ V, and there $|A_v| \approx 8$–8.6, about $g_{m1}(r_{O1}\parallel r_{O2})$ for these rather large $\lambda$'s.
- With $\lambda$'s five times smaller (longer channels), the same calculation gives a peak of about 35 over an interval of only 28 mV: taller and narrower, as Step 4 predicts.

### Result

Sketch of $|A_v|$ versus $V_b$ (case: $M_2$ saturates while $M_1$ is still saturated):

1. **Rise** ($M_2$ a triode resistor): $|A_v| = g_{m1}(r_{O1}\parallel r_2)$ grows with $V_b$ as the incremental resistance $r_2 = 1/[\beta_2(2.2 - V_b - V_{SD2})]$ of the weakening load increases.
2. **Tall, narrow peak** $|A_v| \approx g_{m1}(r_{O1}\parallel r_{O2})$ (intrinsic-gain level; unbounded for $\lambda = 0$) where both transistors are saturated. This occurs over a very small range of $V_b$ around the value where $\tfrac12\beta_2(2.2 - V_b)^2 \approx \tfrac12\beta_1(V_{in} - 0.7)^2$.
3. **Collapse and decay**: just beyond, $M_1$ is forced into triode ($V_{out} < V_{in} - 0.7$ V), its output conductance $\beta_1(V_{in} - 0.7 - V_{out})$ shoots up, and the gain drops to low values, then decays to **zero at $V_b = 2.2$ V**.
4. **$V_b \ge 2.2$ V**: $M_2$ off, $V_{out} = 0$, $A_v = 0$.

**Common mistake.** Drawing the both-saturated region as a wide, flat plateau. The two current sources can coexist only while $V_{out}$ slides between $V_b + 0.8$ V and $V_{in} - 0.7$ V, and a tiny change of $V_b$ moves $V_{out}$ by $g_{m2}(r_{O1}\parallel r_{O2})$ times as much. The peak is therefore narrow, and it becomes a spike as $\lambda \to 0$.

**Common mistake.** Giving the peak value as $g_{m1}r_2$ with a triode resistance for $M_2$ (the behaviour of the other case, where $M_1$ enters triode first). Here $M_2$ is saturated at the peak, so its small-signal resistance is $r_{O2}$, much larger than any triode value, and the gain reaches $g_{m1}(r_{O1}\parallel r_{O2})$.

**Common mistake.** Keeping a nonzero gain for $V_b > 2.2$ V, or drawing the gain as monotonically decreasing. $M_2$ turns off at $V_b = V_{DD} - |V_{THP}|$, which makes the gain zero; and before the peak the gain *rises* with $V_b$, because the load becomes weaker and its incremental resistance larger.

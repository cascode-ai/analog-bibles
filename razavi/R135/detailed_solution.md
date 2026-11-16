# Detailed solution - R135

**Approach.** With $V_{in}$ fixed, $M_1$ has a fixed overdrive. Raising $V_b$ weakens the PMOS load $M_2$, which lowers $V_{out}$ and moves the two transistors through their regions of operation. In every region the small-signal gain is

$$|A_v| = \frac{g_{m1}}{g_{ds1} + g_{ds2}},$$

the transconductance of $M_1$ divided by the total conductance at the output. We work out $g_{m1}$, $g_{ds1}$ and $g_{ds2}$ region by region (square law, $\lambda = 0$, since only the qualitative shape is asked), follow the gain from $V_b = 0$ to 3 V, and illustrate with a numerical example.

### Step 1 — What is fixed and what changes

From the figure: $M_1$ (NMOS, gate at $V_{in}$, source at ground, drain at $V_{out}$) and $M_2$ (PMOS, source at $V_{DD} = 3$ V, gate at $V_b$, drain at $V_{out}$).

- $M_1$: $V_{GS1} = V_{in}$ is fixed, so its overdrive is fixed: $A \equiv V_{in} - 0.7$ V.
- $M_2$: $V_{SG2} = 3 - V_b$, so its overdrive is $w \equiv V_{SG2} - |V_{THP}| = 2.2 - V_b$. It **decreases** as $V_b$ rises, and $M_2$ turns **off** for $V_b \ge 2.2$ V.

Let $\beta_1 = \mu_nC_{ox}(W/L)_1$ and $\beta_2 = \mu_pC_{ox}(W/L)_2$. Raising $V_b$ makes $M_2$ a weaker pull-up, so $V_{out}$ falls monotonically as $V_b$ increases.

### Step 2 — Region boundaries

- **$M_1$** is saturated when $V_{DS1} \ge A$, i.e. $V_{out} \ge V_{in} - 0.7$ V. As $V_{out}$ falls, $M_1$ eventually enters triode.
- **$M_2$** is saturated when $V_{SD2} \ge w$, i.e. $3 - V_{out} \ge 2.2 - V_b$, i.e. $V_{out} \le V_b + 0.8$ V. At small $V_b$, $M_2$ has a large overdrive and a small $V_{SD2}$, so it is in triode.

In the case considered here, as $V_b$ rises, **$M_1$ enters triode first, while $M_2$ is still in triode**; $M_2$ saturates later. Consequently the two devices are **never saturated at the same time**.

### Step 3 — Small-signal quantities in each region ($\lambda = 0$)

Square-law currents: saturation $I = \tfrac12\beta V_{ov}^2$; triode $I = \beta(V_{ov}V_{DS} - \tfrac12V_{DS}^2)$. Taking derivatives:

| Device / region | $g_m = \partial I/\partial V_{GS}$ | output conductance $\partial I/\partial V_{DS}$ |
|---|---|---|
| $M_1$ saturated | $\beta_1A$ | 0 |
| $M_1$ triode | $\beta_1V_{out}$ | $\beta_1(A - V_{out})$ |
| $M_2$ triode | (gate fixed, not needed) | $\beta_2(w - V_{SD2}) = \beta_2(V_{out} - V_b - 0.8)$ |
| $M_2$ saturated | (not needed) | 0 |

Only $M_1$'s gate is driven ($M_2$'s gate is at the dc voltage $V_b$, its source at $V_{DD}$), so $|A_v| = g_{m1}/(g_{ds1} + g_{ds2})$.

### Step 4 — Region I: $M_1$ saturated, $M_2$ in triode (gain rises)

Here $M_1$ is a current source with fixed current $I_1 = \tfrac12\beta_1A^2$. $M_2$ behaves as a resistor of small-signal value $r_2 = 1/[\beta_2(w - V_{SD2})]$:

$$|A_v| = g_{m1}r_2 = \frac{\beta_1A}{\beta_2(w - V_{SD2})}.$$

**Why it rises.** As $V_b$ increases, $w$ falls, and $M_2$ must still carry $I_1$, so its $V_{SD2}$ must grow (from $I_1 = \beta_2(wV_{SD2} - \tfrac12V_{SD2}^2)$). Both changes shrink $w - V_{SD2}$, so $r_2$ grows and $|A_v|$ increases, faster than linearly. At $V_b = 0$ the gain is modest; it climbs steeply as $M_2$ approaches the edge of saturation.

### Step 5 — $M_1$ enters triode: the peak

$M_1$ reaches the edge of triode when $V_{out} = A$. In this case $M_2$ is still in triode there ($w > V_{SD2}$), so the gain at this point is **finite**:

$$|A_v|_{edge} = \frac{\beta_1A}{\beta_2(w - V_{SD2})}.$$

**Region II (both in triode).** Beyond this point:

- $g_{m1} = \beta_1V_{out}$ starts to fall;
- $g_{ds1} = \beta_1(A - V_{out})$ grows from zero;
- $g_{ds2}$ keeps falling as $M_2$ approaches saturation.

So
$$|A_v| = \frac{\beta_1V_{out}}{\beta_1(A - V_{out}) + \beta_2(V_{out} - V_b - 0.8)} .$$

**Where exactly is the maximum?** Write $x = V_{out}$, $y = 3 - x = V_{SD2}$ and $r = \beta_2/\beta_1$. Equal currents, $\beta_1(Ax - \tfrac12x^2) = \beta_2(wy - \tfrac12y^2)$, give

$$\beta_2(w - y) = \frac{\beta_1(Ax - \tfrac12x^2)}{y} - \frac{\beta_2y}{2},$$

so

$$|A_v| = \frac{x}{D(x)},\qquad D(x) = (A - x) + \frac{Ax - \tfrac12x^2}{3 - x} - \frac{r(3 - x)}{2}.$$

$x$ decreases as $V_b$ rises, so the gain keeps rising after $M_1$'s triode entry only if $d|A_v|/dx < 0$ at $x = A$, i.e. if $D(A) - A\,D'(A) < 0$. Differentiating:

$$D'(x) = -1 + \frac{(A - x)(3 - x) + Ax - \tfrac12x^2}{(3 - x)^2} + \frac r2 .$$

At $x = A$:

$$D(A) = \frac{A^2}{2(3 - A)} - \frac{r(3 - A)}{2},\qquad D'(A) = -1 + \frac{A^2}{2(3 - A)^2} + \frac r2 .$$

Combining:

$$
\begin{aligned}
D(A) - A\,D'(A) &= A + \frac{A^2}{2(3 - A)} - \frac{A^3}{2(3 - A)^2} - \frac{3r}{2}\\
&= \frac{2A(3 - A)^2 + A^2(3 - A) - A^3}{2(3 - A)^2} - \frac{3r}{2}\\
&= \frac{9A(2 - A)}{2(3 - A)^2} - \frac{3r}{2}.
\end{aligned}
$$

So **the gain peaks right at $M_1$'s triode entry** when $r(3 - A)^2 < 3A(2 - A)$.

This case also requires $M_2$ to be in triode at $M_1$'s entry ($w > y = 3 - A$). That is equivalent to $I_1 = \tfrac12\beta_1A^2 > \tfrac12\beta_2(3 - A)^2$, i.e. $r(3 - A)^2 < A^2$. For $A \le 1.5$ V ($V_{in} \le 2.2$ V), $A^2 \le 3A(2 - A)$, so this case condition guarantees the peak condition. For larger $V_{in}$, the gain can keep rising a little after $M_1$'s triode entry and peak between the two events, or at $M_2$'s saturation. Either way **the maximum is finite** and lies between $M_1$'s triode entry and $M_2$'s saturation.

### Step 6 — Region III: $M_1$ in triode, $M_2$ saturated (gain falls to zero)

When $V_{out}$ drops to $V_b + 0.8$ V, $M_2$ saturates ($g_{ds2} = 0$), and

$$|A_v| = \frac{\beta_1V_{out}}{\beta_1(A - V_{out})} = \frac{V_{out}}{A - V_{out}} .$$

As $V_b$ keeps rising, $M_2$'s saturation current $\tfrac12\beta_2(2.2 - V_b)^2$ shrinks. To pass less current, the triode device $M_1$ needs a smaller $V_{DS1}$, so $V_{out}$ falls and the gain $V_{out}/(A - V_{out})$ falls toward zero. ($M_2$ always saturates before it turns off, because $w \to 0$ while $V_{SD2}$ stays above $3 - A$.)

### Step 7 — Region IV: $V_b \ge 2.2$ V ($M_2$ off)

$M_2$ carries no current, so $M_1$ (still on, $V_{GS1} = V_{in}$) pulls $V_{out}$ to 0 V. A triode device with $V_{DS} = 0$ has $g_m = \beta_1V_{DS} = 0$, so

$$A_v = 0\quad\text{for } 2.2\ \mathrm{V} \le V_b \le 3\ \mathrm{V}.$$

### Step 8 — Numerical example

Take $V_{in} = 2.2$ V ($A = 1.5$ V) and $\beta_2/\beta_1 = 0.76$, with $\lambda = 0$. Solving the current equation at each $V_b$ and evaluating the formulas above:

| $V_b$ (V) | 0 | 0.2 | 0.3 | 0.4 | 0.44 | 0.461 | 0.48 | 0.494 | 0.52 | 0.6 | 0.8 | 1.0 | 1.4 | 1.8 | ≥ 2.2 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $V_{out}$ (V) | 2.17 | 2.02 | 1.91 | 1.73 | 1.61 | 1.50 | 1.39 | 1.30 | 1.18 | 0.95 | 0.63 | 0.43 | 0.17 | 0.04 | 0 |
| $\lvert A_v\rvert$ | 1.4 | 1.9 | 2.4 | 3.7 | 5.3 | **8.3** (peak) | 7.2 | 6.3 | 3.6 | 1.7 | 0.72 | 0.40 | 0.13 | 0.03 | 0 |
| regions | I | I | I | I | I | $M_1$ edge | II | $M_2$ edge | III | III | III | III | III | III | IV |

Check of the peak condition: $r(3 - A)^2 = 0.76\times2.25 = 1.71 < 3A(2 - A) = 2.25$ ✓, so the peak is at $M_1$'s triode entry ($V_b \approx 0.46$ V). (For a larger input, e.g. $V_{in} = 2.7$ V with $\beta_2/\beta_1 = 1.74$, the gain is 1.77 at $M_1$'s triode entry, $V_b = 0.55$ V, and keeps rising to 3.2 at $M_2$'s saturation, $V_b = 0.73$ V, before falling.)

### Result

Sketch of $|A_v|$ versus $V_b$ (case: $M_1$ enters triode before $M_2$ saturates):

1. **Rising part** ($M_1$ saturated, $M_2$ a triode resistor): $|A_v| = g_{m1}r_2$ starts small at $V_b = 0$ and increases ever faster, because raising $V_b$ weakens $M_2$ and raises its incremental resistance $r_2 = 1/[\beta_2(2.2 - V_b - V_{SD2})]$.
2. **Finite maximum** between the point where $M_1$ enters triode ($V_{out} = V_{in} - 0.7$ V) and the point where $M_2$ saturates ($V_{out} = V_b + 0.8$ V). Typically it sits at $M_1$'s triode entry; its exact location depends on $V_{in}$ and the size ratio. The two devices are never saturated together, so there is **no $g_{m1}(r_{O1}\parallel r_{O2})$ peak**.
3. **Falling part** ($M_1$ in triode): the gain decreases as $V_{out}$ falls (after $M_2$ saturates, $|A_v| = V_{out}/(V_{in} - 0.7 - V_{out})$) and reaches **zero at $V_b = V_{DD} - |V_{THP}| = 2.2$ V**.
4. **$V_b \ge 2.2$ V**: $M_2$ is off, $V_{out} = 0$, and $A_v = 0$.

**Common mistake.** Drawing a tall peak equal to $g_{m1}(r_{O1}\parallel r_{O2})$. That value needs both transistors saturated at the same time, which never happens in this case: $M_1$ is already in triode when $M_2$ saturates.

**Common mistake.** Drawing the gain as decreasing with $V_b$ from the start. Raising $V_b$ *weakens* the PMOS load and raises its incremental resistance, so the gain initially *increases*; it falls only after $M_1$ enters triode.

**Common mistake.** Leaving a nonzero gain for $V_b > 2.2$ V. With $V_{SG2} < |V_{THP}|$, $M_2$ is off, $M_1$ pulls the output to 0 V with zero current, and its transconductance $\beta_1V_{DS1}$ is zero.

# Detailed solution - R248

**Approach.** The loop $M_2$ (diode) → $M_1$ (NMOS mirror) → $M_3$ (PMOS diode) → $M_4$ (PMOS mirror) → back into X, with $R_1$ also feeding X, is a **positive-feedback loop of two unity-ratio mirrors**. Go through $V_{DD}$ in ranges: below the NMOS threshold nothing conducts; between the two thresholds only the NMOS side can conduct; above the PMOS threshold the loop closes. Show that the loop then cannot operate with all devices saturated, find which device leaves saturation, and describe the resulting high-current state.

### Step 1 — Equations

$V_{GS1} = V_{GS2} = V_X$ and $V_{SG3} = V_{SG4} = V_{DD} - V_Y$. KCL:

$$\text{at X: } \frac{V_{DD} - V_X}{R_1} + I_{D4} = I_{D2}, \qquad \text{at Y: } I_{D3} = I_{D1} .$$

Let $\beta_n = \mu_nC_{ox}(W/L)_{1,2}$ and $\beta_p = \mu_pC_{ox}(W/L)_{3,4}$, with $V_{THN} = 0.7$ V and $|V_{THP}| = 0.8$ V.

### Step 2 — $0 \le V_{DD} \le 0.7$ V: everything off

$V_X \le V_{DD} \le 0.7$ V, so $M_1$ and $M_2$ are off, and then $M_3$, $M_4$ cannot carry current either. With no current in $R_1$:

$$V_X = V_{DD} .$$

$V_Y$ sits on a node connected only to off devices, so no current sets it (in practice leakage does): anything between $\max(0, V_{DD} - 0.8\ \mathrm{V})$ and $V_{DD}$ is consistent, and the sketch can show it as undefined or simply following $V_{DD}$.

### Step 3 — $0.7\ \mathrm{V} < V_{DD} \le 0.8\ \mathrm{V}$: only the NMOS side conducts

$M_2$ carries the $R_1$ current, as in a resistor-loaded diode:

$$V_X = 0.7 + \frac{\sqrt{1 + 2\beta_nR_1(V_{DD} - 0.7)} - 1}{\beta_nR_1}\quad(\text{just above } 0.7\ \mathrm{V}).$$

$M_3$ could conduct only with $V_{SG3} = V_{DD} - V_Y > 0.8$ V, i.e. $V_Y < V_{DD} - 0.8 \le 0$, which is impossible, so $I_{D3} = I_{D1} = 0$. $M_1$ has a channel but no current, so its $V_{DS}$ is zero:

$$V_Y = 0 .$$

$M_4$, with $V_{SG4} = V_{DD} \le 0.8$ V, stays off.

### Step 4 — $V_{DD} > 0.8$ V: the loop closes, and "all saturated" is impossible

**Try all devices saturated.** With identical devices and $\lambda = 0$, $I_{D1} = I_{D2}$ (same $V_{GS}$), $I_{D3} = I_{D1}$ (KCL at Y) and $I_{D4} = I_{D3}$ (same $V_{SG}$). So $I_{D4} = I_{D2}$, and KCL at X demands $(V_{DD} - V_X)/R_1 = 0$, i.e. $V_X = V_{DD}$. But then $V_{SD4} = 0$, and $M_4$ cannot carry $I_{D4} = I_{D2} > 0$ ($M_2$ has $V_{GS} = V_{DD} > 0.7$ V). **Contradiction.** The loop gain is $1\times1 = 1$ and $R_1$ injects extra current, so there is no consistent point until some device leaves saturation and lowers the loop gain below one.

**$M_1$ must be in triode.** If $M_1$ were saturated, $I_{D3} = I_{D1} = I_{D2}$ while KCL at X gives $I_{D4} = I_{D2} - I_{R1} < I_{D3}$; with the same $V_{SG}$ but less current, $M_4$ would be in triode:

$$V_{SD4} < V_{SG4} - 0.8 \;\Longleftrightarrow\; V_{DD} - V_X < V_{DD} - V_Y - 0.8 \;\Longleftrightarrow\; V_X - V_Y > 0.8\ \mathrm{V} .$$

But $M_1$ saturated requires $V_Y \ge V_X - 0.7$, i.e. $V_X - V_Y \le 0.7$ V. Both cannot hold, so

$$M_1 \text{ is in the triode region:}\qquad V_Y < V_X - 0.7\ \mathrm{V} .$$

$M_1$ then carries less than $M_2$ ($I_{D1} < I_{D2}$), breaking the unity loop gain. $M_4$ can be saturated (then $I_{D4} = I_{D1}$ and $I_{D2} = I_{D1} + I_{R1}$) or in triode, depending on $R_1$ and $V_{DD}$.

### Step 5 — What sets the current: the $M_3$–$M_1$ stack

Once the loop is active, the right branch must fit between $V_{DD}$ and ground:

$$V_{DD} = V_{SG3} + V_{DS1} = 0.8 + \sqrt{\frac{2I_{D3}}{\beta_p}} + V_Y .$$

**Large $R_1$.** $I_{R1}$ is tiny, so $I_{D1} \approx I_{D2}$ and $M_1$ is just inside triode, $V_Y \approx V_X - 0.7 = V_{ov}$, with $V_{ov} = \sqrt{2I/\beta_n}$ the overdrive of $M_1$, $M_2$. Substituting $\sqrt{2I/\beta_p} = V_{ov}\sqrt{\beta_n/\beta_p}$:

$$V_{DD} - 0.8 \approx V_{ov}\left(1 + \sqrt{\beta_n/\beta_p}\right) \;\Longrightarrow\; V_X - 0.7 \approx \frac{V_{DD} - 0.8}{1 + \sqrt{\beta_n/\beta_p}}, \qquad I \approx \frac{\beta_n}{2}\left(\frac{V_{DD} - 0.8}{1 + \sqrt{\beta_n/\beta_p}}\right)^2 .$$

$V_X$ and $V_Y$ rise **linearly** with $V_{DD}$, with slope $1/(1 + \sqrt{\beta_n/\beta_p})$, and the current grows **quadratically**, independent of $R_1$. $M_4$ stays saturated, with a margin of $|V_{THP}| - V_{THN} = 0.1$ V.

**Moderate $R_1$.** The $R_1$ current is no longer negligible: $M_1$ goes deeper into triode, $V_Y$ is lower, and $M_4$ also enters triode at higher $V_{DD}$. $V_X$ still rises roughly linearly, $V_Y$ stays low, and the loop current far exceeds $(V_{DD} - V_X)/R_1$.

### Step 6 — Numerical example

All $W/L = 10/0.5$ ($\beta_n = 2.68\ \mathrm{mA/V^2}$, $\beta_p = 0.768\ \mathrm{mA/V^2}$, $\sqrt{\beta_n/\beta_p} = 1.87$), $R_1 = 10\ \mathrm{k}\Omega$, solving the two KCL equations with the full square-law model:

| $V_{DD}$ (V) | 0.75 | 0.80 | 0.90 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 |
|---|---|---|---|---|---|---|---|---|
| $V_X$ (V) | 0.734 | 0.757 | 0.799 | 0.841 | 1.04 | 1.23 | 1.42 | 1.61 |
| $V_Y$ (V) | 0 | 0 | 0.012 | 0.032 | 0.160 | 0.303 | 0.452 | 0.604 |
| $I_{D2}$ (μA) | 1.6 | 4.3 | 13 | 27 | 155 | 379 | 696 | 1102 |
| $I_{R1}$ (μA) | 1.6 | 4.3 | 10 | 16 | 46 | 77 | 108 | 139 |
| $M_4$ | off | off | sat | triode | triode | triode | triode | triode |

$M_1$ is in triode throughout, and $M_4$ enters triode near $V_{DD} \approx 0.96$ V. At 3 V the loop carries about 1.1 mA, eight times the 0.14 mA in $R_1$. For $R_1 = 1\ \mathrm{M}\Omega$ the curves are similar ($V_X \approx 1.48$ V and $V_Y \approx 0.75$ V at 3 V, about 0.81 mA), matching the large-$R_1$ formula $V_X \approx 0.7 + 2.2/2.87 = 1.47$ V, and $M_4$ remains saturated.

### Result

- **$V_{DD} \le 0.7$ V:** all devices off; $V_X = V_{DD}$; $V_Y$ is not set by any current (anywhere in $[\max(0, V_{DD} - 0.8), V_{DD}]$).
- **$0.7 < V_{DD} \le 0.8$ V:** $M_2$ conducts the $R_1$ current, so $V_X$ is just above 0.7 V (resistor-loaded diode curve). $M_1$ is on, but the PMOS diode cannot conduct ($V_{SG3} \le 0.8$ V), so $V_Y = 0$.
- **$V_{DD} > 0.8$ V:** the positive-feedback loop $M_2 \to M_1 \to M_3 \to M_4 \to X$ (loop gain 1, plus the $R_1$ injection) has no all-saturated solution. The current runs up until $M_1$ is in triode ($V_Y < V_X - 0.7$ V); $M_4$ is saturated or in triode depending on $R_1$ and $V_{DD}$. The current is set by the $M_3$–$M_1$ stack, not by $R_1$. **$V_X$ rises roughly linearly with $V_{DD}$**, well above $V_{TH}$ (about $0.7 + (V_{DD} - 0.8)/(1 + \sqrt{\beta_n/\beta_p})$ for large $R_1$; e.g. 1.6 V at 3 V), and **$V_Y$ stays low**, below $V_X - 0.7$ V, rising slowly (about 0.6 V at 3 V in the example). The branch currents reach the milliampere range.

**Common mistake.** Treating the circuit as an ordinary mirror with all devices saturated and the current set by $R_1$. Two unity mirrors in a loop plus the injected $R_1$ current would require $I_{R1} = 0$, so that solution does not exist.

**Common mistake.** Pinning $V_X$ at $V_{DD}$ with a large current flowing. Then $M_4$ has zero source–drain voltage and cannot deliver any current to X.

**Common mistake.** Keeping $M_1$ saturated and putting only $M_4$ in triode. That would need $V_X - V_Y > 0.8$ V and $V_X - V_Y \le 0.7$ V at once; $M_1$ must leave saturation ($M_4$ may follow).

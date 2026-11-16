# Detailed solution - R563

**Approach.** Write KCL at nodes X and Y, using the fact that the high-gain op amp holds $V_X = V_Y = |V_{BE1}|$. The difference $|V_{BE1}| - |V_{BE2}|$ is a clean PTAT voltage only if the two collector currents stay in a fixed, temperature-independent ratio. Imposing that fixes $R_3$ in terms of $R_2$. The remaining design is the usual zero-TC balance, with the current-density ratio now $nK$ instead of $n$.

### Step 1 — Reading the circuit

- $M_3$ feeds node X. From X, $R_3$ goes to ground and the emitter of $Q_1$ (area $A$, base and collector grounded) also connects. So $V_X = |V_{BE1}|$.
- $M_4$ feeds node Y. From Y, $R_2$ goes to ground, and $R_1$ leads to the emitter of $Q_2$ (area $nA$).
- The op amp holds $V_X = V_Y$ by driving the common gate of $M_3$, $M_4$, $M_5$.
- $M_5$ (identical to $M_4$) copies $|I_{D4}|$ into $R_4$, so $V_{BG} = |I_{D4}|R_4$.
- $(W/L)_3 = K(W/L)_4$ with the same $V_{GS}$, so $|I_{D3}| = K|I_{D4}|$.

Since $V_Y = V_X = |V_{BE1}|$, the resistor $R_2$ carries $|V_{BE1}|/R_2$ and $R_3$ carries $|V_{BE1}|/R_3$. Both currents are proportional to $|V_{BE}|$ and hence CTAT (complementary to absolute temperature).

### Step 2 — KCL at X and at Y

**At X**, the current of $M_3$ splits between $Q_1$ and $R_3$:

$$K|I_{D4}| = I_{C1} + \frac{|V_{BE1}|}{R_3}.$$

**At Y**, the current of $M_4$ splits between the $R_1$–$Q_2$ branch and $R_2$:

$$|I_{D4}| = I_{C2} + \frac{|V_{BE1}|}{R_2}.$$

### Step 3 — The collector-current ratio and the condition on $R_3$

Multiply the Y equation by $K$ and substitute it into the X equation to eliminate $|I_{D4}|$:

$$
\begin{aligned}
K I_{C2} + \frac{K|V_{BE1}|}{R_2} &= I_{C1} + \frac{|V_{BE1}|}{R_3}\\
I_{C1} &= K I_{C2} + |V_{BE1}|\left(\frac{K}{R_2} - \frac{1}{R_3}\right).
\end{aligned}
$$

The ratio of the collector currents is therefore

$$\frac{I_{C1}}{I_{C2}} = K + \frac{|V_{BE1}|}{I_{C2}}\left(\frac{K}{R_2} - \frac{1}{R_3}\right).$$

The second term has a CTAT numerator ($|V_{BE1}|$) and a PTAT-like denominator ($I_{C2}$), so it varies strongly with temperature. Then $\Delta V_{BE} = V_T\ln(\text{density ratio})$ would no longer be proportional to $T$, and the simple zero-TC design would fail. To keep the ratio constant, the bracket must vanish:

$$\frac{K}{R_2} = \frac{1}{R_3}\quad\Longrightarrow\quad \boxed{R_3 = \frac{R_2}{K}}$$

Then $I_{C1} = KI_{C2}$ exactly.

**Intuition.** With $R_3 = R_2/K$, every current at X is exactly $K$ times the corresponding current at Y. $M_3$ is $K$ copies of $M_4$, $R_3$ behaves like $K$ copies of $R_2$ in parallel, and $Q_1$ carries $K$ times the current of $Q_2$. The X side is a scaled copy of the Y side, apart from the PTAT resistor $R_1$ and the area ratio.

### Step 4 — The PTAT relation

**KVL** from Y to ground through $R_1$ and $Q_2$, with $V_Y = |V_{BE1}|$:

$$|V_{BE1}| = I_{C2}R_1 + |V_{BE2}|.$$

Write the junction voltages with $|V_{BE}| = V_T\ln(I_C/I_S)$, where $Q_2$'s saturation current is $nI_S$:

$$
\begin{aligned}
I_{C2}R_1 = |V_{BE1}| - |V_{BE2}| &= V_T\ln\frac{I_{C1}}{I_S} - V_T\ln\frac{I_{C2}}{nI_S}\\
&= V_T\ln\left(n\,\frac{I_{C1}}{I_{C2}}\right) = V_T\ln(nK).
\end{aligned}
$$

So $I_{C2} = V_T\ln(nK)/R_1$, a PTAT current. The current-density ratio is now $nK$: $Q_1$ has $1/n$ the area *and* $K$ times the current of $Q_2$.

### Step 5 — Output voltage

From the Y equation:

$$|I_{D4}| = \frac{V_T\ln(nK)}{R_1} + \frac{|V_{BE1}|}{R_2} = \frac{1}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right].$$

$M_5$ copies this current into $R_4$:

$$V_{BG} = |I_{D4}|R_4 = \frac{R_4}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right].$$

The bracket is a classic bandgap sum, about 1.2 V. The ratio $R_4/R_2$ only scales it, which is why this topology can deliver an output below 1.2 V from a low supply. All resistor values appear as ratios, so their own TCs cancel if they are made of the same material.

### Step 6 — Zero-TC condition

Differentiate the bracket ($R_4/R_2$ is temperature-independent):

$$\frac{\partial V_{BG}}{\partial T} = \frac{R_4}{R_2}\left[\frac{\partial|V_{BE1}|}{\partial T} + \frac{R_2}{R_1}\cdot\frac{k}{q}\ln(nK)\right] = 0 .$$

With $\partial|V_{BE1}|/\partial T = -1.5$ mV/K and $k/q \approx 0.087$ mV/K:

$$\frac{R_2}{R_1}\ln(nK) = \frac{1.5}{0.087} \approx 17.2 .$$

**Example.** With $n = 8$:

- $K = 1$ (the original circuit): $\ln 8 = 2.08$, so $R_2/R_1 = 17.2/2.08 = 8.3$, and $R_3 = R_2$.
- $K = 2$: $\ln 16 = 2.77$, so $R_2/R_1 = 17.2/2.77 = 6.2$, and $R_3 = R_2/2$.

$R_4$ is then chosen for the desired output level: $V_{BG} \approx (R_4/R_2)\times1.2$ V.

**A side benefit.** An op-amp offset $V_{os}$ adds to the voltage across $R_1$ and reaches $V_{BG}$ multiplied by $R_4/R_1 = (R_4/R_2)(R_2/R_1)$. The larger density ratio $nK$ allows a smaller $R_2/R_1$ for zero TC (6.2 instead of 8.3 in the example), so the offset is amplified less.

### Result

Choose

$$R_3 = \frac{R_2}{K}\qquad\text{and}\qquad\frac{R_2}{R_1}\ln(nK) \approx 17.2 .$$

Then $I_{C1} = KI_{C2}$, $I_{C2} = V_T\ln(nK)/R_1$,

$$|I_{D4}| = \frac{1}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right], \qquad V_{BG} = \frac{R_4}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right].$$

With $V_X \approx V_Y \approx |V_{BE1}|$, KCL gives $K|I_{D4}| = I_{C1} + |V_{BE1}|/R_3$ at X and $|I_{D4}| = I_{C2} + |V_{BE1}|/R_2$ at Y. For $|V_{BE1}| - |V_{BE2}|$ to be PTAT, the collector-current ratio must be temperature-independent, which requires $K|V_{BE1}|/R_2 = |V_{BE1}|/R_3$, i.e. $R_3 = R_2/K$. The density ratio then becomes $nK$, and the larger density ratio also lowers the sensitivity to the op-amp offset.

**Common mistake.** Inverting the relation and choosing $R_3 = KR_2$. $M_3$ delivers $K$ times more current, so the resistor at X must draw $K$ times more of it at the same voltage, which means a *smaller* resistor, $R_2/K$.

**Common mistake.** Keeping $R_2 = R_3$ from the original design. Then $I_{C1} = KI_{C2} + (K - 1)|V_{BE1}|/R_2$. The collector-current ratio picks up a CTAT term, $\Delta V_{BE}$ is no longer PTAT, and the zero-TC condition cannot be met with the simple design equation.

**Common mistake.** Writing the zero-TC condition with $\ln n$ instead of $\ln(nK)$. The PTAT voltage depends on the ratio of current *densities*, which includes the current ratio $K$ as well as the area ratio $n$.

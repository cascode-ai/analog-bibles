# Detailed solution - R563

**Approach.** Write KCL at X and Y with $V_X = V_Y = |V_{BE1}|$. The difference $|V_{BE1}| - |V_{BE2}|$ is a clean PTAT voltage only if the two collector currents stay in a fixed, temperature-independent ratio; imposing that fixes $R_3$ in terms of $R_2$. The rest is the usual zero-TC balance, with the current-density ratio now $nK$ instead of $n$.

### Step 1 — KCL at X and at Y

$M_3$ has $K$ times the width of $M_4$ at the same $V_{GS}$, so $|I_{D3}| = K|I_{D4}|$, and $M_5$ copies $|I_{D4}|$ into $R_4$, so $V_{BG} = |I_{D4}|R_4$. With $V_Y = V_X = |V_{BE1}|$, $R_3$ and $R_2$ carry the CTAT currents $|V_{BE1}|/R_3$ and $|V_{BE1}|/R_2$. At X the current of $M_3$ splits between $Q_1$ and $R_3$; at Y the current of $M_4$ splits between the $R_1$–$Q_2$ branch and $R_2$:

$$K|I_{D4}| = I_{C1} + \frac{|V_{BE1}|}{R_3}, \qquad |I_{D4}| = I_{C2} + \frac{|V_{BE1}|}{R_2}.$$

### Step 2 — The collector-current ratio and the condition on $R_3$

Eliminating $|I_{D4}|$ (multiply the Y equation by $K$):

$$
\begin{aligned}
K I_{C2} + \frac{K|V_{BE1}|}{R_2} &= I_{C1} + \frac{|V_{BE1}|}{R_3}\\
I_{C1} &= K I_{C2} + |V_{BE1}|\left(\frac{K}{R_2} - \frac{1}{R_3}\right),
\end{aligned}
$$

$$\frac{I_{C1}}{I_{C2}} = K + \frac{|V_{BE1}|}{I_{C2}}\left(\frac{K}{R_2} - \frac{1}{R_3}\right).$$

The second term has a CTAT numerator and a PTAT-like denominator, so it varies strongly with temperature; $\Delta V_{BE} = V_T\ln(\text{density ratio})$ would then no longer be proportional to $T$. The bracket must vanish:

$$\frac{K}{R_2} = \frac{1}{R_3}\quad\Longrightarrow\quad \boxed{R_3 = \frac{R_2}{K}}$$

Then $I_{C1} = KI_{C2}$ exactly: the X side is a $K$-times scaled copy of the Y side ($M_3$ is $K$ copies of $M_4$, $R_3$ acts like $K$ copies of $R_2$ in parallel), apart from $R_1$ and the area ratio.

### Step 3 — The PTAT relation

KVL from Y to ground through $R_1$ and $Q_2$, with $V_Y = |V_{BE1}|$ and $I_{S2} = nI_S$:

$$|V_{BE1}| = I_{C2}R_1 + |V_{BE2}|,$$

$$
\begin{aligned}
I_{C2}R_1 = |V_{BE1}| - |V_{BE2}| &= V_T\ln\frac{I_{C1}}{I_S} - V_T\ln\frac{I_{C2}}{nI_S}\\
&= V_T\ln\left(n\,\frac{I_{C1}}{I_{C2}}\right) = V_T\ln(nK).
\end{aligned}
$$

So $I_{C2} = V_T\ln(nK)/R_1$ is PTAT, and the current-density ratio is now $nK$: $Q_1$ has $1/n$ the area *and* $K$ times the current of $Q_2$.

### Step 4 — Output voltage and zero-TC condition

From the Y equation,

$$|I_{D4}| = \frac{V_T\ln(nK)}{R_1} + \frac{|V_{BE1}|}{R_2} = \frac{1}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right],$$

$$V_{BG} = |I_{D4}|R_4 = \frac{R_4}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right].$$

The bracket is a bandgap sum of about 1.2 V, which $R_4/R_2$ scales, so this topology can deliver an output below 1.2 V from a low supply; resistor TCs cancel in the ratios if all resistors are of the same material. Zero TC:

$$\frac{\partial V_{BG}}{\partial T} = \frac{R_4}{R_2}\left[\frac{\partial|V_{BE1}|}{\partial T} + \frac{R_2}{R_1}\cdot\frac{k}{q}\ln(nK)\right] = 0 .$$

With $\partial|V_{BE1}|/\partial T = -1.5$ mV/K and $k/q \approx 0.087$ mV/K:

$$\frac{R_2}{R_1}\ln(nK) = \frac{1.5}{0.087} \approx 17.2 .$$

**Example.** With $n = 8$:

- $K = 1$ (the original circuit): $\ln 8 = 2.08$, so $R_2/R_1 = 17.2/2.08 = 8.3$, and $R_3 = R_2$.
- $K = 2$: $\ln 16 = 2.77$, so $R_2/R_1 = 17.2/2.77 = 6.2$, and $R_3 = R_2/2$.

$R_4$ then sets the output level, $V_{BG} \approx (R_4/R_2)\times1.2$ V.

**A side benefit.** An op-amp offset $V_{os}$ adds to the voltage across $R_1$ and reaches $V_{BG}$ multiplied by $R_4/R_1 = (R_4/R_2)(R_2/R_1)$. The larger density ratio $nK$ allows a smaller $R_2/R_1$ (6.2 instead of 8.3 in the example), so the offset is amplified less.

### Result

Choose

$$R_3 = \frac{R_2}{K}\qquad\text{and}\qquad\frac{R_2}{R_1}\ln(nK) \approx 17.2 .$$

Then $I_{C1} = KI_{C2}$, $I_{C2} = V_T\ln(nK)/R_1$,

$$|I_{D4}| = \frac{1}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right], \qquad V_{BG} = \frac{R_4}{R_2}\left[|V_{BE1}| + \frac{R_2}{R_1}V_T\ln(nK)\right].$$

With $V_X \approx V_Y \approx |V_{BE1}|$, KCL gives $K|I_{D4}| = I_{C1} + |V_{BE1}|/R_3$ at X and $|I_{D4}| = I_{C2} + |V_{BE1}|/R_2$ at Y. For $|V_{BE1}| - |V_{BE2}|$ to be PTAT, the collector-current ratio must be temperature-independent, which requires $K|V_{BE1}|/R_2 = |V_{BE1}|/R_3$, i.e. $R_3 = R_2/K$. The density ratio then becomes $nK$, and the larger density ratio also lowers the sensitivity to the op-amp offset.

**Common mistake.** Inverting the relation and choosing $R_3 = KR_2$. $M_3$ delivers $K$ times more current, so the resistor at X must draw $K$ times more at the same voltage: a *smaller* resistor, $R_2/K$.

**Common mistake.** Keeping $R_2 = R_3$ from the original design. Then $I_{C1} = KI_{C2} + (K - 1)|V_{BE1}|/R_2$, the collector-current ratio picks up a CTAT term, and $\Delta V_{BE}$ is no longer PTAT.

**Common mistake.** Writing the zero-TC condition with $\ln n$ instead of $\ln(nK)$. The PTAT voltage depends on the ratio of current *densities*, which includes the current ratio $K$ as well as the area ratio $n$.

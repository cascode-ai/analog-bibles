# Detailed solution - R423

**Approach.** At the peak of the differential swing, one output is at its highest value, where its PMOS load has entered the triode region by 50 mV, and the other output is at its lowest value with all of its devices saturated. Find the small-signal resistance of the triode PMOS from the triode current equation, form the resistance at each output, and combine the two unequal half-circuit gains into the differential gain.

### Step 1 — The nominal design

Reading the figure: an NMOS pair $M_1$–$M_2$ with an ideal 1-mA tail, loaded by the PMOS current sources $M_3$, $M_4$ (gates at $V_b$), each carrying 0.5 mA. From the square law:

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad r_{O3} = r_{O4} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
|V_{OD3}| &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = 0.510\ \mathrm{V}.
\end{aligned}
$$

Nominal differential gain (all devices saturated, P a virtual ground):

$$|A_{v0}| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k\Omega}) = 24.4 .$$

### Step 2 — The PMOS at 50 mV into the triode region

At the high peak of $V_{out1}$ the source–drain voltage of $M_3$ is 50 mV less than its overdrive:

$$|V_{DS3}| = |V_{OD3}| - 0.05\ \mathrm{V} = 0.510 - 0.050 = 0.460\ \mathrm{V}.$$

Each output thus rises 50 mV higher than in the nominal design, which adds $2\times50$ mV = 100 mV to the differential swing.

**Triode current** (square law, $\beta_p = \mu_pC_{ox}W/L = 3.84\ \mathrm{mA/V^2}$; $|V_{OD3}|$ is unchanged because $V_b$ is fixed):

$$|I_{D3}| = \beta_p\left[|V_{OD3}|\,|V_{DS3}| - \tfrac12|V_{DS3}|^2\right] = 3.84\left[(0.510)(0.460) - \tfrac12(0.460)^2\right]\ \mathrm{mA} = 3.84\times0.1288\ \mathrm{mA} = 0.495\ \mathrm{mA}.$$

The current barely changes (0.495 mA instead of 0.5 mA), so $g_{m1}$ remains 3.66 mS to within 0.5 %.

**Small-signal resistance of the triode device.** Differentiate the triode equation with respect to $|V_{DS}|$:

$$
\begin{aligned}
\frac{1}{R_{on3}} &= \frac{\partial|I_{D3}|}{\partial|V_{DS3}|} = \beta_p\big(|V_{OD3}| - |V_{DS3}|\big) = (3.84\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.192\ \mathrm{mS},\\
R_{on3} &= 5.21\ \mathrm{k\Omega}.
\end{aligned}
$$

So $M_3$'s output resistance has dropped from $r_{O3} = 10\ \mathrm{k\Omega}$ to about 5.2 kΩ, even though it is only 50 mV into the triode region. (The $\lambda$ effect is a small correction in the triode region and is neglected here; see Step 5.)

### Step 3 — Resistance and half-circuit gain on each side

**Side 1** (output at its high peak, $M_3$ in triode):

$$
\begin{aligned}
R_1 &= r_{O1}\parallel R_{on3} = \frac{20\times5.21}{20 + 5.21}\ \mathrm{k\Omega} = 4.13\ \mathrm{k\Omega},\\
g_{m1}R_1 &= (3.66\ \mathrm{mS})(4.13\ \mathrm{k\Omega}) = 15.1 .
\end{aligned}
$$

**Side 2** (output at its low peak, $M_2$ and $M_4$ still saturated):

$$
\begin{aligned}
R_2 &= r_{O2}\parallel r_{O4} = 6.67\ \mathrm{k\Omega},\\
g_{m1}R_2 &= 24.4 .
\end{aligned}
$$

### Step 4 — Differential gain at the peak

For a small differential input $v_d$, the tail is ideal, so (to a good approximation) P stays at ac ground and each transistor carries $\pm g_{m1}v_d/2$:

$$v_{out1} = -g_{m1}R_1\,\frac{v_d}{2},\qquad v_{out2} = +g_{m1}R_2\,\frac{v_d}{2} .$$

$$
\begin{aligned}
|A_v| = \frac{|v_{out1} - v_{out2}|}{v_d} &= g_{m1}\,\frac{R_1 + R_2}{2}\\
&= (3.66\ \mathrm{mS})\times\frac{4.13 + 6.67}{2}\ \mathrm{k\Omega} = (3.66\ \mathrm{mS})(5.40\ \mathrm{k\Omega}) = 19.8 .
\end{aligned}
$$

The differential gain is the **average** of the two half-circuit gains (15.1 and 24.4). With unequal loads P is not exactly a virtual ground: it moves by about 4 % of $v_d$, and since $r_{O1}$, $r_{O2}$ return to P rather than to ground, a full nodal solution of the three nodes ($V_{out1}$, $V_{out2}$, P) gives a slightly higher value, about 20.2. Either way, the gain at the peaks is **about 20, roughly 17–19 % below the nominal 24.4**.

### Step 5 — Remark on keeping $\lambda$ in the triode region

If the triode equation is multiplied by $(1 + \lambda|V_{DS}|)$ (a Level-1-style model), the output conductance gains an extra term of about $\lambda|I_D| = (0.2)(0.495\ \mathrm{mA}) \approx 0.1$ mS. Then $1/R_{on3} \approx 0.29$–0.31 mS, $R_{on3} \approx 3.2$–3.4 kΩ, the triode-side half-circuit gain is about 10–11, and the differential gain about 17–18. This is a modelling choice; the conclusion, a substantial loss of gain for a mere 100-mV gain in swing, is the same.

### Result

At the peaks, $M_3$ (or $M_4$) has $|V_{DS}| = 0.46$ V and a triode output resistance $R_{on3} = 1/[\mu_pC_{ox}(W/L)(50\ \mathrm{mV})] \approx 5.2\ \mathrm{k\Omega}$. The triode side then has $R_1 = r_{O1}\parallel R_{on3} = 4.13\ \mathrm{k\Omega}$ and a half-circuit gain of only about 15, while the other side keeps 24.4. The differential gain at the peaks is

$$|A_v| = g_{m1}\,\frac{R_1 + R_2}{2} \approx 3.66\ \mathrm{mS}\times5.40\ \mathrm{k\Omega} \approx 19.8\ \ (\approx 20.2\ \text{from an exact nodal solution}),$$

i.e. about 20 instead of the nominal 24.4: a drop of roughly 17–19 % for 100 mV of extra differential swing.

**Common mistake.** Assuming the gain is unchanged because the device is "only slightly" in the triode region. The output resistance in the triode region is set by $\beta(|V_{OD}| - |V_{DS}|)$, which is not small compared with $\lambda I_D$ even for a 50-mV margin; $R_{on3}$ is about half of the nominal $r_{O3}$.

**Common mistake.** Computing $R_{on3}$ with the full overdrive, $1/(\beta_p|V_{OD3}|) \approx 0.5\ \mathrm{k\Omega}$. That is the on-resistance at $V_{DS} = 0$ (deep triode). At 50 mV from the edge the correct conductance is $\beta_p\times(50\ \mathrm{mV})$.

**Common mistake.** Quoting only the triode side's half-circuit gain (≈ 15) as "the gain at the peak". The differential output includes the other side, which is still fully saturated, so the differential gain is the average of the two half-circuit gains, about 20.

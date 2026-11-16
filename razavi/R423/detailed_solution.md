# Detailed solution - R423

**Approach.** At the peak of the differential swing, one output is at its highest value, with its PMOS load 50 mV into the triode region, and the other is at its lowest value with all its devices saturated. Find the small-signal resistance of the triode PMOS from the triode current equation, form the resistance at each output, and combine the two unequal half-circuit gains into the differential gain.

### Step 1 — The nominal design

Each device carries 0.5 mA:

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad r_{O3} = r_{O4} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
|V_{OD3}| &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = 0.510\ \mathrm{V}.
\end{aligned}
$$

With all devices saturated and P a virtual ground:

$$|A_{v0}| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k\Omega}) = 24.4 .$$

### Step 2 — The PMOS at 50 mV into the triode region

At the high peak of $V_{out1}$:

$$|V_{DS3}| = |V_{OD3}| - 0.05\ \mathrm{V} = 0.510 - 0.050 = 0.460\ \mathrm{V},$$

so each output rises 50 mV higher than nominally, adding $2\times50$ mV = 100 mV to the differential swing.

With $\beta_p = \mu_pC_{ox}W/L = 3.84\ \mathrm{mA/V^2}$ and $|V_{OD3}|$ unchanged ($V_b$ is fixed), the triode current is

$$|I_{D3}| = \beta_p\left[|V_{OD3}|\,|V_{DS3}| - \tfrac12|V_{DS3}|^2\right] = 3.84\left[(0.510)(0.460) - \tfrac12(0.460)^2\right]\ \mathrm{mA} = 3.84\times0.1288\ \mathrm{mA} = 0.495\ \mathrm{mA},$$

barely changed, so $g_{m1}$ remains 3.66 mS to within 0.5 %. Differentiating with respect to $|V_{DS}|$:

$$
\begin{aligned}
\frac{1}{R_{on3}} &= \frac{\partial|I_{D3}|}{\partial|V_{DS3}|} = \beta_p\big(|V_{OD3}| - |V_{DS3}|\big) = (3.84\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.192\ \mathrm{mS},\\
R_{on3} &= 5.21\ \mathrm{k\Omega}.
\end{aligned}
$$

Only 50 mV into triode, $M_3$'s output resistance has dropped from $r_{O3} = 10\ \mathrm{k\Omega}$ to about 5.2 kΩ. ($\lambda$ is neglected in the triode region here; see Step 5.)

### Step 3 — Resistance and half-circuit gain on each side

**Side 1** (output at its high peak, $M_3$ in triode):

$$
\begin{aligned}
R_1 &= r_{O1}\parallel R_{on3} = \frac{20\times5.21}{20 + 5.21}\ \mathrm{k\Omega} = 4.13\ \mathrm{k\Omega},\\
g_{m1}R_1 &= (3.66\ \mathrm{mS})(4.13\ \mathrm{k\Omega}) = 15.1 .
\end{aligned}
$$

**Side 2** (output at its low peak, $M_2$ and $M_4$ saturated):

$$
\begin{aligned}
R_2 &= r_{O2}\parallel r_{O4} = 6.67\ \mathrm{k\Omega},\\
g_{m1}R_2 &= 24.4 .
\end{aligned}
$$

### Step 4 — Differential gain at the peak

With the ideal tail, P stays (to a good approximation) at ac ground and each transistor carries $\pm g_{m1}v_d/2$:

$$v_{out1} = -g_{m1}R_1\,\frac{v_d}{2},\qquad v_{out2} = +g_{m1}R_2\,\frac{v_d}{2} ,$$

$$
\begin{aligned}
|A_v| = \frac{|v_{out1} - v_{out2}|}{v_d} &= g_{m1}\,\frac{R_1 + R_2}{2}\\
&= (3.66\ \mathrm{mS})\times\frac{4.13 + 6.67}{2}\ \mathrm{k\Omega} = (3.66\ \mathrm{mS})(5.40\ \mathrm{k\Omega}) = 19.8 ,
\end{aligned}
$$

the **average** of the two half-circuit gains (15.1 and 24.4). With unequal loads P moves by about 4 % of $v_d$, and since $r_{O1}$, $r_{O2}$ return to P, a full nodal solution of $V_{out1}$, $V_{out2}$ and P gives slightly more, about 20.2. Either way, the gain at the peaks is **about 20, roughly 17–19 % below the nominal 24.4**.

### Step 5 — Remark on keeping $\lambda$ in the triode region

Multiplying the triode equation by $(1 + \lambda|V_{DS}|)$ adds about $\lambda|I_D| = (0.2)(0.495\ \mathrm{mA}) \approx 0.1$ mS to the output conductance. Then $1/R_{on3} \approx 0.29$–0.31 mS, $R_{on3} \approx 3.2$–3.4 kΩ, the triode-side half-circuit gain is about 10–11, and the differential gain about 17–18. The conclusion, a substantial loss of gain for only 100 mV of extra swing, is the same.

### Result

At the peaks, $M_3$ (or $M_4$) has $|V_{DS}| = 0.46$ V and a triode output resistance $R_{on3} = 1/[\mu_pC_{ox}(W/L)(50\ \mathrm{mV})] \approx 5.2\ \mathrm{k\Omega}$. The triode side then has $R_1 = r_{O1}\parallel R_{on3} = 4.13\ \mathrm{k\Omega}$ and a half-circuit gain of only about 15, while the other side keeps 24.4. The differential gain at the peaks is

$$|A_v| = g_{m1}\,\frac{R_1 + R_2}{2} \approx 3.66\ \mathrm{mS}\times5.40\ \mathrm{k\Omega} \approx 19.8\ \ (\approx 20.2\ \text{from an exact nodal solution}),$$

i.e. about 20 instead of the nominal 24.4: a drop of roughly 17–19 % for 100 mV of extra differential swing.

**Common mistake.** Assuming the gain is unchanged because the device is "only slightly" in triode. Even 50 mV from the edge, $\beta_p(|V_{OD}| - |V_{DS}|)$ is not small compared with $\lambda I_D$: $R_{on3}$ is about half of $r_{O3}$.

**Common mistake.** Computing $R_{on3}$ with the full overdrive, $1/(\beta_p|V_{OD3}|) \approx 0.5\ \mathrm{k\Omega}$. That is the deep-triode value at $V_{DS} = 0$; here the conductance is $\beta_p\times(50\ \mathrm{mV})$.

**Common mistake.** Quoting only the triode side's half-circuit gain (≈ 15). The other side is still saturated, so the differential gain is the average of the two, about 20.

# Detailed solution - R458

**Approach.** The second stage is a CS amplifier $M_5$ with the PMOS current-source load $M_6$, so $A_2 = g_{m5}(r_{O5}\parallel r_{O6})$. In terms of the bias current and overdrive the current cancels, leaving a gain set only by the overdrive and $\lambda_n + \lambda_p$; $A_2 = 20$ therefore fixes the overdrive, and the square law gives both aspect ratios.

### Step 1 — Express the gain in terms of the overdrive

Both devices carry $I_D = 1$ mA, and $M_6$ (gate and source at ac ground) contributes only $r_{O6}$, so

$$A_2 = \left|\frac{v_{out}}{v_y}\right| = g_{m5}(r_{O5}\parallel r_{O6}).$$

With

$$g_{m5} = \frac{2I_D}{V_{ov5}}, \qquad r_{O5} = \frac{1}{\lambda_nI_D}, \qquad r_{O6} = \frac{1}{\lambda_pI_D},$$

$$r_{O5}\parallel r_{O6} = \frac{1}{1/r_{O5} + 1/r_{O6}} = \frac{1}{\lambda_nI_D + \lambda_pI_D} = \frac{1}{(\lambda_n + \lambda_p)I_D} ,$$

$$
\begin{aligned}
A_2 &= \frac{2I_D}{V_{ov5}}\cdot\frac{1}{(\lambda_n + \lambda_p)I_D}\\
&= \frac{2}{V_{ov5}(\lambda_n + \lambda_p)} .
\end{aligned}
$$

The current cancels: raising $I_D$ raises $g_{m5}$ but lowers both $r_O$'s in the same proportion, so the gain specification fixes the overdrive of $M_5$.

### Step 2 — Solve for the overdrive

$$
\begin{aligned}
20 &= \frac{2}{V_{ov5}\,(0.1\ \mathrm{V^{-1}} + 0.2\ \mathrm{V^{-1}})}\\
V_{ov5} &= \frac{2}{20\times0.3\ \mathrm{V^{-1}}}\\
&= \frac{2}{6}\ \mathrm{V} = 0.333\ \mathrm{V}.
\end{aligned}
$$

Equal overdrives are required, so $|V_{ov6}| = 0.333$ V as well; this does not affect the gain (the transconductance of $M_6$ plays no role) but shares the output headroom evenly.

### Step 3 — Aspect ratios

With $W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$ and $V_{ov}^2 = (1/3\ \mathrm{V})^2 = 0.111\ \mathrm{V^2}$:

**$M_5$ (NMOS):**

$$
\begin{aligned}
\left(\frac{W}{L}\right)_5 &= \frac{2\,(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.111\ \mathrm{V^2})}\\
&= \frac{2\times10^{-3}}{1.489\times10^{-5}}\\
&= 134 ,
\end{aligned}
$$

so $W_5 = 134\times0.5\ \mu\mathrm{m} \approx 67\ \mu\mathrm{m}$.

**$M_6$ (PMOS):**

$$
\begin{aligned}
\left(\frac{W}{L}\right)_6 &= \frac{2\,(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.111\ \mathrm{V^2})}\\
&= \frac{2\times10^{-3}}{4.267\times10^{-6}}\\
&= 469 ,
\end{aligned}
$$

so $W_6 = 469\times0.5\ \mu\mathrm{m} \approx 234\ \mu\mathrm{m}$.

### Step 4 — Check and consequences

- $g_{m5} = 2(1\ \mathrm{mA})/(0.333\ \mathrm{V}) = 6$ mS; $r_{O5} = 10\ \mathrm{k}\Omega$, $r_{O6} = 5\ \mathrm{k}\Omega$, $r_{O5}\parallel r_{O6} = 3.33\ \mathrm{k}\Omega$; $A_2 = 6\ \mathrm{mS}\times3.33\ \mathrm{k}\Omega = 20$. ✓
- Output swing: from $V_{ov5}$ to $V_{DD} - |V_{ov6}|$, i.e. $3 - 2(0.333) = 2.33$ V p-p.
- A larger gain would need a *smaller* overdrive (wider devices, more capacitance, larger swing); a smaller gain allows smaller devices.

### Result

$$V_{ov5} = |V_{ov6}| = \frac{2}{A_2(\lambda_n + \lambda_p)} = \frac{2}{20\times0.3} = \frac13\ \mathrm{V},$$

$$\left(\frac{W}{L}\right)_5 = \frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(1/3\ \mathrm{V})^2} \approx 134, \qquad \left(\frac{W}{L}\right)_6 = \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(1/3\ \mathrm{V})^2} \approx 469,$$

i.e. $W_5 \approx 67\ \mu\mathrm{m}$ and $W_6 \approx 234\ \mu\mathrm{m}$ with $L = 0.5\ \mu\mathrm{m}$.

**Common mistake.** Writing the gain as $g_{m5}r_{O5}$, which gives $V_{ov} = 2/(20\times0.1) = 1$ V and devices too small for a gain of 20; the output is loaded by $r_{O5}\parallel r_{O6}$.

**Common mistake.** Sizing the PMOS $M_6$ with $\mu_nC_{ox}$, giving $(W/L)_6 = 134$. It needs $134/38.4 \approx 3.5$ times the width.

**Common mistake.** Concluding that the gain does not constrain the sizes "because $g_m$ and $r_O$ both scale with current". The current cancels, but $A_2 = 2/[V_{ov}(\lambda_n + \lambda_p)]$ fixes $V_{ov}$, and with a fixed current that fixes $W/L$.

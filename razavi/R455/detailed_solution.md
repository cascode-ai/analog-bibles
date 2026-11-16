# Detailed solution - R455

**Approach.** The output stage is a CS amplifier $M_5$ (gate at Y) with the PMOS current source $M_6$ as its load, so its gain is $g_{m5}$ times $r_{O5}\parallel r_{O6}$. Compute $g_{m5}$ from the bias current and overdrive, and the two output resistances from $\lambda$.

### Step 1 — Operating range and small-signal model

Both devices carry $I_D = 1$ mA. $M_5$ is saturated for $V_{out} \ge V_{ov5} = 0.25$ V and $M_6$ for $V_{DD} - V_{out} \ge |V_{ov6}| = 0.25$ V, i.e. $V_{out} \le 2.75$ V, so the gain below holds for any output dc level between 0.25 V and 2.75 V (e.g. mid-supply, 1.5 V); outside this range it collapses.

In the small-signal model $M_5$ is a current $g_{m5}v_y$ from the output to ground in parallel with $r_{O5}$. The gate and source of $M_6$ are both at ac ground, so $v_{gs6} = 0$ and only $r_{O6}$ remains: $M_6$ is a load, not an amplifying device.

### Step 2 — Transconductance of $M_5$

$$g_{m5} = \frac{2I_{D5}}{V_{ov5}} = \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS}.$$

Check with $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$:

$$g_{m5} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(239)(1\ \mathrm{mA})} = \sqrt{64.1\times10^{-6}}\ \mathrm{S} = 8.0\ \mathrm{mS}. \checkmark$$

### Step 3 — Output resistances

$$
\begin{aligned}
r_{O5} &= \frac{1}{\lambda_nI_{D5}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O6} &= \frac{1}{\lambda_pI_{D6}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,
\end{aligned}
$$

$$r_{O5}\parallel r_{O6} = \frac{(10\ \mathrm{k}\Omega)(5\ \mathrm{k}\Omega)}{10\ \mathrm{k}\Omega + 5\ \mathrm{k}\Omega} = 3.33\ \mathrm{k}\Omega .$$

### Step 4 — KCL at the output and the gain

$$
\begin{aligned}
g_{m5}v_y + \frac{v_{out}}{r_{O5}} + \frac{v_{out}}{r_{O6}} &= 0\\
A_2 = \frac{v_{out}}{v_y} &= -g_{m5}(r_{O5}\parallel r_{O6}),
\end{aligned}
$$

$$A_2 = -(8\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = -26.7 .$$

The stage inverts: raising Y makes $M_5$ sink more current and pulls the output down.

### Step 5 — A compact form

With $g_{m5} = 2I_D/V_{ov}$ and $r_O = 1/(\lambda I_D)$:

$$|A_2| = \frac{2I_D}{V_{ov}}\cdot\frac{1}{I_D(\lambda_n + \lambda_p)} = \frac{2}{V_{ov}(\lambda_n + \lambda_p)} = \frac{2}{(0.25\ \mathrm{V})(0.3\ \mathrm{V^{-1}})} = 26.7 .$$

The current cancels, so the gain is set by the overdrive and the $\lambda$'s: the small 0.25-V overdrive, needed for the large swing, helps the gain, while the large $\lambda$ values hurt it.

### Result

$$A_2 = -g_{m5}(r_{O5}\parallel r_{O6}) = -(8\ \mathrm{mS})(10\ \mathrm{k}\Omega\parallel5\ \mathrm{k}\Omega) \approx -26.7,$$

i.e. a gain magnitude of about 26.7 (inverting).

**Common mistake.** Using only $r_{O5}$ (gain 80) or only $r_{O6}$ (gain 40); the output is loaded by both in parallel.

**Common mistake.** Swapping the $\lambda$ values. The gain happens to be unchanged here, because only $\lambda_n + \lambda_p$ enters, but the individual $r_O$ values are wrong wherever they enter separately (e.g. in pole calculations).

**Common mistake.** Adding $g_{m6}$ to $g_{m5}$ as in a push-pull stage. The gate of $M_6$ is held at the fixed bias $V_b$, so it contributes only $r_{O6}$.

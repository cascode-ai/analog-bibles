# Detailed solution - R455

**Approach.** The output stage is a common-source (CS) amplifier: $M_5$ (gate driven by node Y) with the PMOS current source $M_6$ as its load. Its gain is $g_{m5}$ times the total resistance at the output node, which is $r_{O5}\parallel r_{O6}$. We compute $g_{m5}$ from the bias current and overdrive, and the two output resistances from $\lambda$.

### Step 1 — The output stage and its small-signal model

From the figure: $M_5$ is an NMOS with its source at ground, its gate at Y (the first-stage output) and its drain at $V_{out}$. $M_6$ is a PMOS with its source at $V_{DD}$, its gate at the fixed bias $V_b$, and its drain at $V_{out}$. Both carry $I_D = 1$ mA.

**Region of operation.** The small-signal result below assumes both devices are saturated. $M_5$ is saturated for $V_{out} \ge V_{ov5} = 0.25$ V, and $M_6$ for $V_{DD} - V_{out} \ge |V_{ov6}| = 0.25$ V, i.e. $V_{out} \le 2.75$ V. So the gain computed here holds for any output DC level between 0.25 V and 2.75 V, for example at mid-supply (1.5 V). Outside this range one of the devices enters the triode region and the gain collapses.

**Small-signal model (in words).**

- $M_5$: a controlled current source $g_{m5}v_y$ flowing from the output node to ground ($v_y$ is the small-signal voltage at its gate), in parallel with its output resistance $r_{O5}$.
- $M_6$: its gate is at a constant bias and its source is at $V_{DD}$, both AC grounds, so $v_{gs6} = 0$ and its controlled source is zero. Only its output resistance $r_{O6}$, from the output to AC ground, remains. $M_6$ is a load, not an amplifying device.

### Step 2 — Transconductance of $M_5$

For a square-law device in saturation, $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, and $g_m = \partial I_D/\partial V_{GS} = \mu_nC_{ox}(W/L)V_{ov} = 2I_D/V_{ov}$, where $V_{ov}$ is the overdrive voltage:

$$g_{m5} = \frac{2I_{D5}}{V_{ov5}} = \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS}.$$

Check with $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$:

$$g_{m5} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(239)(1\ \mathrm{mA})} = \sqrt{64.1\times10^{-6}}\ \mathrm{S} = 8.0\ \mathrm{mS}. \checkmark$$

### Step 3 — Output resistances

Channel-length modulation gives $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
r_{O5} &= \frac{1}{\lambda_nI_{D5}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O6} &= \frac{1}{\lambda_pI_{D6}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega.
\end{aligned}
$$

The total resistance at the output node is the parallel combination:

$$r_{O5}\parallel r_{O6} = \frac{(10\ \mathrm{k}\Omega)(5\ \mathrm{k}\Omega)}{10\ \mathrm{k}\Omega + 5\ \mathrm{k}\Omega} = 3.33\ \mathrm{k}\Omega .$$

### Step 4 — KCL at the output and the gain

KCL at the output node: the current of the controlled source plus the currents in the two resistances sum to zero:

$$
\begin{aligned}
g_{m5}v_y + \frac{v_{out}}{r_{O5}} + \frac{v_{out}}{r_{O6}} &= 0\\
v_{out}\left(\frac{1}{r_{O5}} + \frac{1}{r_{O6}}\right) &= -g_{m5}v_y\\
A_2 = \frac{v_{out}}{v_y} &= -g_{m5}(r_{O5}\parallel r_{O6}).
\end{aligned}
$$

Numerically:

$$A_2 = -(8\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = -26.7 .$$

The minus sign means the stage inverts: raising Y makes $M_5$ sink more current and pulls the output down.

### Step 5 — A compact form (intuition)

Substituting $g_{m5} = 2I_D/V_{ov}$ and $r_O = 1/(\lambda I_D)$:

$$|A_2| = \frac{2I_D}{V_{ov}}\cdot\frac{1}{I_D(\lambda_n + \lambda_p)} = \frac{2}{V_{ov}(\lambda_n + \lambda_p)} = \frac{2}{(0.25\ \mathrm{V})(0.3\ \mathrm{V^{-1}})} = 26.7 .$$

The current cancels: for a given overdrive, raising $I_D$ raises $g_m$ but lowers $r_O$ by the same factor. The gain is set by the overdrive and the channel-length modulation coefficients. The small 0.25-V overdrive, needed for the large output swing, helps the gain, while the large $\lambda$ values (short channels) hurt it.

### Result

$$A_2 = -g_{m5}(r_{O5}\parallel r_{O6}) = -(8\ \mathrm{mS})(10\ \mathrm{k}\Omega\parallel5\ \mathrm{k}\Omega) \approx -26.7,$$

i.e. a gain magnitude of about 26.7 (inverting).

**Common mistake.** Using only $r_{O5}$ (gain 80) or only $r_{O6}$ (gain 40). The output node is loaded by both transistors' output resistances in parallel.

**Common mistake.** Swapping the $\lambda$ values, i.e. using $\lambda = 0.2\ \mathrm{V^{-1}}$ for the NMOS $M_5$. Here the result happens to be the same, because only the sum $\lambda_n + \lambda_p$ enters, but the individual $r_O$ values are wrong and would give wrong answers wherever they enter separately (e.g. in pole calculations).

**Common mistake.** Adding $g_{m6}$ to $g_{m5}$ as if $M_6$ were a second amplifying device (a CMOS-inverter-like push-pull stage). The gate of $M_6$ is held at the fixed bias $V_b$, so it contributes no transconductance, only $r_{O6}$.

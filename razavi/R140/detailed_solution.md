# Detailed solution - R140

**Approach.** The output of a cascode with a cascode load can swing from the sum of the two NMOS overdrives (above ground) to $V_{DD}$ minus the sum of the two PMOS overdrives, so the 1.9-V swing fixes the sum of the overdrives; equal $W/L$ and current fix their ratio through the mobility ratio. From the overdrives follow $W/L$, the bias voltages that put each device at the edge of saturation at the extremes of the swing, and the gain $g_{m1}R_{out}$.

### Step 1 — The swing budget

With $M_1$ (input), $M_2$ (NMOS cascode, gate $V_{b1}$), $M_3$ (PMOS cascode, gate $V_{b2}$) and $M_4$ (PMOS source, gate $V_{b3}$) all at 0.5 mA, optimal biasing puts:

- $M_1$ and $M_2$ at the edge of triode at the **lowest output**: $V_{out,min} = V_{ov1} + V_{ov2}$;
- $M_3$ and $M_4$ at the edge at the **highest output**: $V_{out,max} = V_{DD} - |V_{ov3}| - |V_{ov4}|$.

The thresholds do not enter, since saturation requires only $V_{DS} \ge V_{ov}$. With identical NMOS overdrives $V_{ov,n}$ and PMOS overdrives $|V_{ov,p}|$ (same $W/L$, same current, $\gamma = 0$):

$$\text{swing} = V_{DD} - 2V_{ov,n} - 2|V_{ov,p}| = 1.9\ \mathrm{V},$$

$$2(V_{ov,n} + |V_{ov,p}|) = 3 - 1.9 = 1.1\ \mathrm{V}\quad\Longrightarrow\quad V_{ov,n} + |V_{ov,p}| = 0.55\ \mathrm{V}.$$

### Step 2 — Ratio of the overdrives

With the same current and $W/L$,

$$I_D = \tfrac12\mu_nC_{ox}\frac WL V_{ov,n}^2 = \tfrac12\mu_pC_{ox}\frac WL |V_{ov,p}|^2\quad\Longrightarrow\quad \frac{|V_{ov,p}|}{V_{ov,n}} = \sqrt{\frac{\mu_nC_{ox}}{\mu_pC_{ox}}} = \sqrt{\frac{134}{38.4}} = \sqrt{3.490} = 1.868 .$$

### Step 3 — Overdrives and $W/L$

$$
\begin{aligned}
V_{ov,n}(1 + 1.868) &= 0.55\ \mathrm{V}\\
V_{ov,n} &= \frac{0.55}{2.868}\ \mathrm{V} = 0.1918\ \mathrm{V},\\
|V_{ov,p}| &= 0.55 - 0.1918 = 0.3582\ \mathrm{V},
\end{aligned}
$$

$$\frac WL = \frac{2I_D}{\mu_nC_{ox}V_{ov,n}^2} = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.1918\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(0.03678\ \mathrm{V^2})} = \frac{1000}{4.928} \approx 203 .$$

Check with the PMOS: $1\ \mathrm{mA}/[(38.4\ \mu\mathrm{A/V^2})(0.3582\ \mathrm{V})^2] = 1000/4.928 = 203$ ✓. With $L = 0.5$ μm, $W \approx 101$ μm for all four devices.

### Step 4 — Bias voltages

**$V_{b1}$ (gate of $M_2$).** At the lowest output $M_1$ sits exactly at its edge, $V_X = V_{ov1} = V_{ov,n}$ ($X$ = drain of $M_1$):

$$V_{b1} = V_X + V_{GS2} = V_{ov,n} + (V_{TH,n} + V_{ov,n}) = 0.7 + 2(0.1918) = 1.084\ \mathrm{V},$$

and $M_2$ is then at its edge when $V_{out} = V_X + V_{ov2} = 2V_{ov,n} = 0.384$ V.

**$V_{b3}$ (gate of $M_4$):**

$$V_{b3} = V_{DD} - |V_{GS4}| = V_{DD} - (|V_{TH,p}| + |V_{ov,p}|) = 3 - (0.8 + 0.3582) = 1.842\ \mathrm{V}.$$

**$V_{b2}$ (gate of $M_3$).** At the highest output $M_4$ is at its edge, so the node $Y$ between $M_4$ and $M_3$ is at $V_Y = V_{DD} - |V_{ov4}| = 3 - 0.3582 = 2.642$ V, and

$$V_{b2} = V_Y - |V_{GS3}| = (3 - 0.3582) - (0.8 + 0.3582) = 1.484\ \mathrm{V}.$$

**Check of the range:**

$$
\begin{aligned}
V_{out,min} &= 2(0.1918) = 0.384\ \mathrm{V},\\
V_{out,max} &= V_Y - |V_{ov3}| = 2.642 - 0.358 = 2.284\ \mathrm{V},\\
\text{swing} &= 2.284 - 0.384 = 1.900\ \mathrm{V}\ \checkmark
\end{aligned}
$$

### Step 5 — Small-signal parameters ($L = 0.5$ μm)

$$g_{m,n} = \frac{2(0.5\ \mathrm{mA})}{0.1918\ \mathrm{V}} = 5.21\ \mathrm{mS},\qquad g_{m,p} = \frac{2(0.5\ \mathrm{mA})}{0.3582\ \mathrm{V}} = 2.79\ \mathrm{mS},$$

$$r_{O,n} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad r_{O,p} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.$$

### Step 6 — Output resistance and gain

$$R_{down} = r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2} \approx g_{m2}r_{O2}r_{O1} = (5.21\ \mathrm{mS})(20\ \mathrm{k\Omega})(20\ \mathrm{k\Omega}) = 2.09\ \mathrm{M\Omega},$$

$$R_{up} = r_{O3} + r_{O4} + g_{m3}r_{O3}r_{O4} \approx g_{m3}r_{O3}r_{O4} = (2.79\ \mathrm{mS})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega}) = 279\ \mathrm{k\Omega},$$

$$R_{out} = R_{down}\parallel R_{up} \approx \frac{(2.09)(0.279)}{2.09 + 0.279}\ \mathrm{M\Omega} = 246\ \mathrm{k\Omega}.$$

The cascode delivers essentially all of $M_1$'s signal current to the output ($G_m \approx g_{m1}$), so

$$|A_v| \approx g_{m1}R_{out} = (5.21\ \mathrm{mS})(246\ \mathrm{k\Omega}) \approx 1.28\times10^3 .$$

Keeping the small terms ($R_{down} = 2.13$ MΩ, $R_{up} = 299$ kΩ, $R_{out} = 262$ kΩ, $G_m = 0.99g_{m1}$) gives about $1.35\times10^3$. Either way,

$$A_v \approx -1.3\times10^3 .$$

The PMOS side (279 kΩ) limits $R_{out}$: its $r_O$ is half the NMOS value and its $g_m$ is lower because of its larger overdrive.

### Result

- $V_{ov,n} = 0.192$ V, $|V_{ov,p}| = 0.358$ V, so $W/L \approx 203$ for all four devices (e.g. $W \approx 101$ μm with $L = 0.5$ μm).
- $V_{b1} \approx 1.08$ V (gate of $M_2$), $V_{b2} \approx 1.48$ V (gate of $M_3$), $V_{b3} \approx 1.84$ V (gate of $M_4$). The output range is 0.38–2.28 V.
- Voltage gain: $|A_v| \approx g_{m1}[(g_{m2}r_{O2}r_{O1})\parallel(g_{m3}r_{O3}r_{O4})] \approx 1.3\times10^3$ (inverting).

**Common mistake.** Assuming equal NMOS and PMOS overdrives (0.275 V each). With equal $W/L$ and current, the PMOS overdrive must be $\sqrt{\mu_n/\mu_p} = 1.87$ times larger.

**Common mistake.** Putting the thresholds into the swing budget, e.g. $V_{out,min} = V_{GS1} + V_{GS2}$. Saturation needs $V_{DS} \ge V_{GS} - V_{TH}$; the thresholds enter only the gate bias voltages.

**Common mistake.** Forgetting the overdrive of the device underneath (or above) in $V_{b1}$ or $V_{b2}$. $V_{b1} = V_{ov1} + V_{GS2}$ and $V_{b2} = V_{DD} - |V_{ov4}| - |V_{GS3}|$; using only $V_{GS2}$ or $V_{DD} - |V_{GS3}|$ leaves $M_1$ or $M_4$ in triode.

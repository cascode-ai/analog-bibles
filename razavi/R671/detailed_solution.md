# Detailed solution - R671

**Approach.** With $\lambda = \gamma = 0$ the input impedance of a common-gate (CG) stage is exactly $1/g_m$, independent of the load, so the question reduces to how $g_m$ scales. Apply the ideal-scaling rules to $g_m = \mu C_{ox}(W/L)(V_{GS} - V_{TH})$ and check the result with the other two forms of $g_m$.

### Step 1 — Input impedance of a common-gate stage

With the gate at ac ground and a test voltage $v_x$ at the source, $v_{gs} = -v_x$, and with no $r_O$ ($\lambda = 0$) and no $g_{mb}$ ($\gamma = 0$) the only path from the source node is the controlled source, which draws $g_mv_x$ toward the drain:

<!-- diagram: diagram-01.cir -->

$$i_x = g_mv_x \quad\Rightarrow\quad R_{in} = \frac{v_x}{i_x} = \frac{1}{g_m}.$$

With $\lambda = 0$ the drain voltage cannot affect the drain current, so $R_D$ (or any load) does not matter. The design value $R_{in} = 50\ \Omega$ means

$$g_m = \frac{1}{50\ \Omega} = 20\ \mathrm{mS}.$$

### Step 2 — How $g_m$ scales

Under ideal scaling $W/L$ is unchanged, $C_{ox} = \epsilon_{ox}/t_{ox}$ rises by $\alpha$, the overdrive $V_{ov} = V_{GS} - V_{TH}$ is divided by $\alpha$, and the mobility $\mu$ is taken unchanged:

$$
\begin{aligned}
g_m' &= \mu\,(\alpha C_{ox})\,\frac{W/\alpha}{L/\alpha}\,\frac{V_{ov}}{\alpha}\\
&= \frac{\alpha}{\alpha}\,\mu C_{ox}\,\frac{W}{L}\,V_{ov} = g_m .
\end{aligned}
$$

The increase of $C_{ox}$ exactly cancels the decrease of the overdrive. Check with the drain current,

$$I_D = \frac12\mu C_{ox}\frac{W}{L}V_{ov}^2 \;\to\; \frac12\mu\,(\alpha C_{ox})\,\frac{W}{L}\left(\frac{V_{ov}}{\alpha}\right)^2 = \frac{I_D}{\alpha}:$$

- with $g_m = 2I_D/V_{ov}$: $g_m' = 2(I_D/\alpha)/(V_{ov}/\alpha) = 2I_D/V_{ov} = g_m$; ✓
- with $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$: $g_m' = \sqrt{2\mu(\alpha C_{ox})(W/L)(I_D/\alpha)} = g_m$. ✓

All three forms agree: **$g_m$ is invariant under ideal scaling**.

### Step 3 — The scaled input impedance

$$R_{in}' = \frac{1}{g_m'} = \frac{1}{g_m} = 50\ \Omega .$$

**Numerical illustration.** If the original design used $V_{ov} = 0.2$ V, then

$$I_D = \frac{g_mV_{ov}}{2} = \frac{(20\ \mathrm{mS})(0.2\ \mathrm{V})}{2} = 2\ \mathrm{mA}.$$

After scaling by $\alpha = 2$: $V_{ov} = 0.1$ V and $I_D = 1$ mA, so

$$g_m = \frac{2I_D}{V_{ov}} = \frac{2(1\ \mathrm{mA})}{0.1\ \mathrm{V}} = 20\ \mathrm{mS}, \qquad R_{in} = 50\ \Omega .$$

The bias current and the supply have halved, so the power ($V_{DD}I_D$) has dropped by $\alpha^2 = 4$, yet the input is still matched to 50 Ω.

### Result

$$R_{in} = \frac{1}{g_m} = 50\ \Omega\quad\text{(unchanged)}.$$

Under ideal scaling $g_m = \mu C_{ox}(W/L)(V_{GS} - V_{TH})$ is invariant, because $C_{ox}$ rises by $\alpha$ while the overdrive falls by $\alpha$ (equivalently, $I_D$ falls by $\alpha$ and $V_{ov}$ falls by $\alpha$ in $g_m = 2I_D/V_{ov}$). The input impedance stays 50 Ω, while the bias current and the power drop.

**Common mistake.** Scaling the impedance with the device size (e.g. $50\alpha$ or $50/\alpha$ Ω). The input impedance is $1/g_m$, and the thinner oxide exactly compensates for the lower overdrive.

**Common mistake.** Using $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ but forgetting that $C_{ox}$ also scales, which gives $g_m \to g_m/\sqrt\alpha$ and $R_{in} = 50\sqrt\alpha$ Ω. Both $C_{ox}$ ($\times\alpha$) and $I_D$ ($\div\alpha$) must be included.

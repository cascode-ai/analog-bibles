# Detailed solution - R671

**Approach.** With $\lambda = \gamma = 0$ the input impedance of a common-gate (CG) stage is exactly $1/g_m$, independent of the load. So the question reduces to how $g_m$ scales. Apply the ideal-scaling rules to $g_m = \mu C_{ox}(W/L)(V_{GS} - V_{TH})$ and check the result with the other two forms of $g_m$.

### Step 1 — Input impedance of a common-gate stage

In a CG stage the signal enters at the source, the gate is held at a constant bias (AC ground), and the output is taken at the drain, which is connected to a load $R_D$ (any load works).

**Small-signal model.** Nodes: the input (source) node `in`, the output (drain) node `out`, and ground (gate, supplies). Elements:

- a voltage-controlled current source $g_mv_{gs}$ from drain to source, where $v_{gs} = v_g - v_s = 0 - v_{in} = -v_{in}$;
- no output resistance $r_O$ (because $\lambda = 0$) and no body-effect source $g_{mb}v_{bs}$ (because $\gamma = 0$);
- the load $R_D$ from `out` to AC ground.

To find the input impedance, apply a test voltage $v_x$ at the input and compute the current $i_x$ it supplies.

<!-- diagram: diagram-01.cir -->

**KCL at the source node.** The only element connected to the source node besides the test source is the transistor's controlled source. The current flowing from drain to source inside the transistor is $g_mv_{gs} = -g_mv_x$, i.e. a current $g_mv_x$ flows *out of* the source node into the transistor toward the drain. This current must be supplied by the test source:

$$i_x = g_mv_x .$$

Therefore

$$R_{in} = \frac{v_x}{i_x} = \frac{1}{g_m}.$$

**Why the load does not matter.** With $\lambda = 0$ the drain current depends only on $v_{gs}$, not on the drain voltage. Whatever voltage develops across $R_D$, the current drawn from the input is still $g_mv_x$. (With $r_O$ finite, the drain voltage would feed back to the source through $r_O$ and $R_{in}$ would depend on $R_D$.)

The design value $R_{in} = 50\ \Omega$ means

$$g_m = \frac{1}{50\ \Omega} = 20\ \mathrm{mS}.$$

### Step 2 — Scaling rules

Ideal (constant-field) scaling by $\alpha > 1$:

- $W$, $L$, $t_{ox}$: divided by $\alpha$, so $W/L$ is unchanged and $C_{ox} = \epsilon_{ox}/t_{ox}$ rises by $\alpha$;
- all voltages (supply, bias, $V_{TH}$): divided by $\alpha$, so the overdrive $V_{ov} = V_{GS} - V_{TH}$ is divided by $\alpha$;
- the mobility $\mu$ is taken unchanged.

### Step 3 — How $g_m$ scales

**From $g_m = \mu C_{ox}(W/L)V_{ov}$** (square-law transconductance in saturation):

$$
\begin{aligned}
g_m' &= \mu\,(\alpha C_{ox})\,\frac{W/\alpha}{L/\alpha}\,\frac{V_{ov}}{\alpha}\\
&= \frac{\alpha}{\alpha}\,\mu C_{ox}\,\frac{W}{L}\,V_{ov} = g_m .
\end{aligned}
$$

The increase of $C_{ox}$ by $\alpha$ exactly cancels the decrease of the overdrive by $\alpha$.

**Check with the drain current.** The square-law current is

$$I_D = \frac12\mu C_{ox}\frac{W}{L}V_{ov}^2 \;\to\; \frac12\mu\,(\alpha C_{ox})\,\frac{W}{L}\left(\frac{V_{ov}}{\alpha}\right)^2 = \frac{I_D}{\alpha}.$$

- With $g_m = 2I_D/V_{ov}$: $g_m' = 2(I_D/\alpha)/(V_{ov}/\alpha) = 2I_D/V_{ov} = g_m$. ✓
- With $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$: $g_m' = \sqrt{2\mu(\alpha C_{ox})(W/L)(I_D/\alpha)} = g_m$. ✓

All three forms agree: **$g_m$ is invariant under ideal scaling**.

### Step 4 — The scaled input impedance

$$R_{in}' = \frac{1}{g_m'} = \frac{1}{g_m} = 50\ \Omega .$$

**Numerical illustration.** Suppose the original design used $V_{ov} = 0.2$ V. Then

$$I_D = \frac{g_mV_{ov}}{2} = \frac{(20\ \mathrm{mS})(0.2\ \mathrm{V})}{2} = 2\ \mathrm{mA}.$$

After scaling by $\alpha = 2$: $V_{ov} = 0.1$ V and $I_D = 1$ mA, so

$$g_m = \frac{2I_D}{V_{ov}} = \frac{2(1\ \mathrm{mA})}{0.1\ \mathrm{V}} = 20\ \mathrm{mS}, \qquad R_{in} = 50\ \Omega .$$

The bias current has halved and the supply has halved, so the power ($V_{DD}I_D$) has dropped by $\alpha^2 = 4$, yet the input is still matched to 50 Ω.

### Result

$$R_{in} = \frac{1}{g_m} = 50\ \Omega\quad\text{(unchanged)}.$$

Under ideal scaling $g_m = \mu C_{ox}(W/L)(V_{GS} - V_{TH})$ is invariant, because $C_{ox}$ rises by $\alpha$ while the overdrive falls by $\alpha$ (equivalently, $I_D$ falls by $\alpha$ and $V_{ov}$ falls by $\alpha$ in $g_m = 2I_D/V_{ov}$). The input impedance stays 50 Ω, while the bias current and the power drop.

**Common mistake.** Scaling the impedance with the device size (e.g. $50\alpha$ or $50/\alpha$ Ω) on the grounds that a smaller transistor is "weaker" or "faster". The input impedance is $1/g_m$, and $g_m$ does not change: the thinner oxide compensates exactly for the lower overdrive.

**Common mistake.** Using $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ but forgetting that $C_{ox}$ also scales, which gives $g_m \propto \sqrt{I_D} \to g_m/\sqrt\alpha$ and $R_{in} = 50\sqrt\alpha$ Ω. Both $C_{ox}$ ($\times\alpha$) and $I_D$ ($\div\alpha$) must be included.

**Common mistake.** Making the input impedance depend on the load resistor. With $\lambda = 0$ the drain voltage has no influence on the drain current, so the load cannot affect the current drawn from the input.

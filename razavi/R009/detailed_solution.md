# Detailed solution - R009

**Approach:** For a PMOS the higher-potential diffusion terminal is the source, so split the sweep at $V_X = 1.9$ V. In each range compute $|V_{TH}|$ with the body effect (the n-well is at $V_{DD} = 3$ V, above both channel terminals), decide whether $M_1$ is on and in which region, and evaluate the square-law current and $g_m$, working with positive quantities $V_{SG}$, $V_{SD}$, $V_{BS} \ge 0$ and $V_{ov} = V_{SG} - |V_{TH}|$. The square-law model here neglects channel-length modulation ($\lambda=0$); $g_m$ is defined as $g_m=\partial |I_D|/\partial V_{SG}$ at fixed $V_{SD}$ and body bias.

### Step 1 — $V_X < 1.9$ V: off because of the body effect

The higher-potential 1.9-V terminal is the source, so $V_{SG}=0.9$ V and $V_{BS}=1.1$ V. The body-effect threshold is:

$$|V_{TH}|=|V_{TH0}|+\gamma\left(\sqrt{2|\phi_F|+V_{BS}}-\sqrt{2|\phi_F|}\right).$$

Substituting the given parameters gives $|V_{TH}|\approx0.994$ V, above $V_{SG}$. Thus $M_1$ is off, with $I_X=g_m=0$ in the square-law model.

Body effect raises the threshold magnitude by about 0.19 V. Without it, $|V_{TH}|=0.8$ V and the device would conduct in this interval; reverse bias between source and n-well is responsible for cutoff. A real device still has subthreshold leakage.

### Step 2 — $V_X > 1.9$ V: the $V_X$ terminal is the source; turn-on point

Now the $V_X$ terminal is the source and the 1.9-V terminal the drain:

$$
\begin{aligned}
V_{SG} &= V_X - 1,\\
V_{SD} &= V_X - 1.9,\\
V_{BS} &= 3 - V_X,\\
|V_{TH}| &= 0.8 + 0.4\left(\sqrt{3.8 - V_X} - 0.8944\right).
\end{aligned}
$$

As $V_X$ rises, $V_{SG}$ grows *and* $|V_{TH}|$ falls, so the device turns on at a single point where $V_{SG} = |V_{TH}|$:

$$V_X - 1 = 0.8 + 0.4\sqrt{3.8 - V_X} - 0.4\times0.8944 .$$

Substitute $w = \sqrt{3.8 - V_X}$, i.e. $V_X = 3.8 - w^2$:

$$
\begin{aligned}
3.8 - w^2 - 1 &= 0.8 + 0.4w - 0.3578\\
2.8 - w^2 &= 0.4422 + 0.4w\\
w^2 + 0.4w - 2.3578 &= 0 .
\end{aligned}
$$

Taking the positive root,

$$w = \frac{-0.4 + \sqrt{0.16 + 4\times2.3578}}{2} = \frac{-0.4 + \sqrt{9.5912}}{2} = \frac{-0.4 + 3.0969}{2} = 1.3485 ,$$

$$V_X = 3.8 - w^2 = 3.8 - 1.8184 = 1.98\ \mathrm{V}.$$

Check: $V_{SG} = 0.98$ V and $|V_{TH}| = 0.8 + 0.4(1.3485 - 0.8944) = 0.98$ V. ✓ So $M_1$ stays off up to $V_X \approx 1.98$ V and conducts above it.

### Step 3 — Saturation or triode above turn-on

Saturation requires $V_{SD} \ge V_{SG} - |V_{TH}|$:

$$
\begin{aligned}
V_X - 1.9 &\ge V_X - 1 - |V_{TH}|\\
|V_{TH}| &\ge 0.9\ \mathrm{V}.
\end{aligned}
$$

$V_X$ cancels: the gate is always 0.9 V below the drain. $|V_{TH}| = 0.9$ V where

$$
\begin{aligned}
0.4\left(\sqrt{3.8 - V_X} - 0.8944\right) &= 0.1\\
\sqrt{3.8 - V_X} &= 0.8944 + 0.25 = 1.1444\\
3.8 - V_X &= 1.3097\\
V_X &= 2.49\ \mathrm{V}.
\end{aligned}
$$

Hence:

- $1.98\ \mathrm{V} < V_X < 2.49$ V: saturation;
- $2.49\ \mathrm{V} < V_X \le 3$ V: triode ($|V_{TH}|$ has fallen below 0.9 V as the source approaches the well potential).

### Step 4 — Current in each region

After turn-on, current flows from the $V_X$ source through the channel to the 1.9-V drain, along the arrow, so $I_X>0$.

Saturation:

$$I_X=\frac12\beta_p(V_{SG}-|V_{TH}|)^2
=\frac12\beta_p(V_X-1-|V_{TH}|)^2.$$

Triode:

$$I_X=\beta_p\left[(V_{SG}-|V_{TH}|)V_{SD}-\frac12V_{SD}^2\right].$$

Substituting the terminal voltages and threshold from Step 2 gives the key points in the Step 6 table; at the sweep endpoint $I_X/\beta_p=0.715\ \mathrm{V^2}. Both branches give the same current at $V_{SD}=V_{SG}-|V_{TH}|$, so the curve is continuous.

### Step 5 — Transconductance

- Off ($V_X < 1.98$ V): $g_m = 0$.
- Saturation: $g_m = \beta_pV_{ov} = \beta_p(V_X - 1 - |V_{TH}|)$, rising from 0 at 1.98 V through $g_m/\beta_p=0.136\ \mathrm{V}$ (2.1 V) and $0.368\ \mathrm{V}$ (2.3 V) to $g_m/\beta_p=0.59\ \mathrm{V}$ at 2.49 V.
- Triode: $g_m = \beta_pV_{SD} = \beta_p(V_X - 1.9)$, a straight line from $g_m/\beta_p=0.59\ \mathrm{V}$ at 2.49 V to $g_m/\beta_p=1.10\ \mathrm{V}$ at 3 V.

At the boundary $V_{ov} = V_{SD}$, so both expressions give $g_m/\beta_p=0.59\ \mathrm{V}$ and $g_m$ is continuous.

### Step 6 — Summary of the sketches

| $V_X$ (V) | Source | Region | $\lvert V_{TH}\rvert$ (V) | $I_X/\beta_p$ (V²) | $g_m/\beta_p$ (V) |
|---|---|---|---|---|---|
| 0 – 1.9 | 1.9-V node | off | 0.994 | 0 | 0 |
| 1.9 – 1.98 | $V_X$ node | off | 0.994 → 0.98 | 0 | 0 |
| 2.1 | $V_X$ node | saturation | 0.964 | 0.0093 | 0.136 |
| 2.3 | $V_X$ node | saturation | 0.932 | 0.068 | 0.368 |
| 2.49 | $V_X$ node | sat./triode edge | 0.900 | 0.174 | 0.59 |
| 2.7 | $V_X$ node | triode | 0.862 | 0.351 | 0.80 |
| 3.0 | $V_X$ node | triode | 0.800 | 0.715 | 1.10 |

- $I_X$: zero up to about 1.98 V, then a rising parabola (saturation) up to about 2.49 V, then a rising, nearly straight triode curve to $I_X/\beta_p=0.715\ \mathrm{V^2}$ at 3 V.
- $g_m$: zero up to 1.98 V, then rising (slightly faster than linearly, because $|V_{TH}|$ also falls) to $g_m/\beta_p=0.59\ \mathrm{V}$ at 2.49 V, then a straight line of slope $\beta_p$ up to $g_m/\beta_p=1.10\ \mathrm{V}$ at 3 V.

Without body effect ($|V_{TH}| = 0.8$ V always), for $V_X < 1.8$ V the device would be on and saturated with the 1.9-V node as source, giving a small *reverse* current $I_X = -\tfrac12\beta_p(0.1\ \mathrm{V})^2 = -0.005\,\beta_p\,\mathrm{V^2}$; it would cross zero at 1.9 V and then conduct in triode with the $V_X$ node as source, reaching the same $I_X/\beta_p=0.715\ \mathrm{V^2} at 3 V (where $V_{BS} = 0$ anyway).

Without body effect, the interval $1.8<V_X<1.9$ V is reverse triode; 1.9 V is a current zero crossing, not turn-on.


![R009 answer curves](/q/R009/solution-curves.svg)

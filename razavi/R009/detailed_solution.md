# Detailed solution - R009

**Approach.** $M_1$ is a PMOS, so its source is the diffusion terminal at the *higher* potential. Split the sweep at $V_X = 1.9$ V accordingly, compute the threshold magnitude with the body effect (the bulk is at $V_{DD} = 3$ V, above both channel terminals), decide whether the device is on, and if so whether it is saturated or in triode. Then evaluate the square-law current and the transconductance.

### Step 1 — Reading the circuit and PMOS conventions

From the figure:

- the gate of $M_1$ is at $+1$ V;
- the lower diffusion terminal is held at $+1.9$ V by a battery;
- the upper diffusion terminal is driven by $V_X$ (0 to 3 V); $I_X$ is the current flowing *from* $V_X$ *into* that terminal;
- the bulk (n-well) is at $V_{DD} = 3$ V.

For a PMOS it is convenient to work with positive quantities:

- $V_{SG}$: source–gate voltage; the device conducts when $V_{SG} > |V_{TH}|$;
- $V_{SD}$: source–drain voltage;
- $V_{BS}$: bulk–source voltage, which is $\ge 0$ here (reverse bias of the source–well junction);
- $V_{ov} = V_{SG} - |V_{TH}|$: overdrive;
- $\beta_p = \mu_pC_{ox}W/L$: device gain factor.

**Body effect** for the PMOS (the magnitude of the threshold grows with $V_{BS}$):

$$|V_{TH}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right) = 0.8 + 0.4\left(\sqrt{0.8 + V_{BS}} - 0.8944\right)\ \mathrm{V},$$

using $\sqrt{0.8} = 0.8944$.

**Region boundaries** (square law): saturation if $V_{SD} \ge V_{SG} - |V_{TH}|$, triode otherwise. Current in saturation $I_D = \tfrac12\beta_pV_{ov}^2$; in triode $I_D = \beta_p\left[V_{ov}V_{SD} - \tfrac12V_{SD}^2\right]$. The current flows inside the device from source to drain.

### Step 2 — $V_X < 1.9$ V: off because of the body effect

The higher terminal, hence the source, is the 1.9-V node:

$$
\begin{aligned}
V_{SG} &= 1.9 - 1 = 0.9\ \mathrm{V},\\
V_{BS} &= 3 - 1.9 = 1.1\ \mathrm{V}.
\end{aligned}
$$

Threshold:

$$|V_{TH}| = 0.8 + 0.4\left(\sqrt{0.8 + 1.1} - 0.8944\right) = 0.8 + 0.4\,(1.3784 - 0.8944) = 0.8 + 0.4\times0.4840 = 0.994\ \mathrm{V}.$$

Since $V_{SG} = 0.9\ \mathrm{V} < |V_{TH}| = 0.994$ V, **$M_1$ is off**: $I_X = 0$, $g_m = 0$ for all $V_X < 1.9$ V. (Only a tiny subthreshold leakage flows, with the gate about 0.09 V short of threshold.)

Without the body effect ($|V_{TH}| = 0.8$ V) the device *would* be on here, with only $0.1$ V of overdrive. The 0.19 V threshold increase caused by the well sitting 1.1 V above the source is what turns it off.

### Step 3 — $V_X > 1.9$ V: the $V_X$ terminal is the source; turn-on point

Now the $V_X$ terminal is higher, so it is the source and the 1.9-V terminal is the drain:

$$
\begin{aligned}
V_{SG} &= V_X - 1,\\
V_{SD} &= V_X - 1.9,\\
V_{BS} &= 3 - V_X,\\
|V_{TH}| &= 0.8 + 0.4\left(\sqrt{3.8 - V_X} - 0.8944\right).
\end{aligned}
$$

As $V_X$ rises, $V_{SG}$ grows *and* $V_{BS}$ shrinks (lowering $|V_{TH}|$), so the device turns on at a single point where $V_{SG} = |V_{TH}|$:

$$V_X - 1 = 0.8 + 0.4\sqrt{3.8 - V_X} - 0.4\times0.8944 .$$

Substitute $w = \sqrt{3.8 - V_X}$, i.e. $V_X = 3.8 - w^2$:

$$
\begin{aligned}
3.8 - w^2 - 1 &= 0.8 + 0.4w - 0.3578\\
2.8 - w^2 &= 0.4422 + 0.4w\\
w^2 + 0.4w - 2.3578 &= 0 .
\end{aligned}
$$

Positive root:

$$w = \frac{-0.4 + \sqrt{0.16 + 4\times2.3578}}{2} = \frac{-0.4 + \sqrt{9.5911}}{2} = \frac{-0.4 + 3.0969}{2} = 1.3485 .$$

$$V_X = 3.8 - w^2 = 3.8 - 1.8184 = 1.98\ \mathrm{V}.$$

Check: $V_{SG} = 0.98$ V and $|V_{TH}| = 0.8 + 0.4(1.3485 - 0.8944) = 0.98$ V. ✓

So **$M_1$ stays off up to $V_X \approx 1.98$ V** and conducts above it.

### Step 4 — Saturation or triode above turn-on

Saturation requires $V_{SD} \ge V_{SG} - |V_{TH}|$:

$$
\begin{aligned}
V_X - 1.9 &\ge V_X - 1 - |V_{TH}|\\
|V_{TH}| &\ge 0.9\ \mathrm{V}.
\end{aligned}
$$

$V_X$ cancels: the gate is always 0.9 V below the drain, so the device is saturated exactly while its threshold magnitude exceeds 0.9 V. Find where $|V_{TH}| = 0.9$ V:

$$
\begin{aligned}
0.4\left(\sqrt{3.8 - V_X} - 0.8944\right) &= 0.1\\
\sqrt{3.8 - V_X} &= 0.8944 + 0.25 = 1.1444\\
3.8 - V_X &= 1.3097\\
V_X &= 2.49\ \mathrm{V}.
\end{aligned}
$$

Hence:

- $1.98\ \mathrm{V} < V_X < 2.49$ V: **saturation**;
- $2.49\ \mathrm{V} < V_X \le 3$ V: **triode** ($|V_{TH}|$ has fallen below 0.9 V as the source approaches the well potential).

### Step 5 — Current in each region

Current flows from the $V_X$ source into the $V_X$ terminal of $M_1$, through the channel, out at the 1.9-V drain. That is the direction of the arrow, so **$I_X > 0$**.

**Saturation** ($1.98 < V_X < 2.49$ V):

$$I_X = \tfrac12\beta_p\,(V_X - 1 - |V_{TH}|)^2 .$$

- $V_X = 2.1$ V: $|V_{TH}| = 0.8 + 0.4(\sqrt{1.7} - 0.8944) = 0.8 + 0.4\times0.4094 = 0.964$ V, $V_{ov} = 1.1 - 0.964 = 0.136$ V,
$$I_X = \tfrac12\beta_p(0.136\ \mathrm{V})^2 = 0.0093\beta_p\ \mathrm{V^2}.$$
- $V_X = 2.3$ V: $|V_{TH}| = 0.8 + 0.4(\sqrt{1.5} - 0.8944) = 0.8 + 0.4\times0.3303 = 0.932$ V, $V_{ov} = 1.3 - 0.932 = 0.368$ V,
$$I_X = \tfrac12\beta_p(0.368\ \mathrm{V})^2 = 0.068\beta_p\ \mathrm{V^2}.$$
- $V_X = 2.49$ V: $|V_{TH}| = 0.900$ V, $V_{ov} = 1.49 - 0.90 = 0.59$ V,
$$I_X = \tfrac12\beta_p(0.59\ \mathrm{V})^2 = 0.174\beta_p\ \mathrm{V^2}.$$

**Triode** ($2.49 < V_X \le 3$ V):

$$I_X = \beta_p\left[(V_X - 1 - |V_{TH}|)(V_X - 1.9) - \tfrac12(V_X - 1.9)^2\right].$$

- $V_X = 2.7$ V: $|V_{TH}| = 0.8 + 0.4(\sqrt{1.1} - 0.8944) = 0.8 + 0.4\times0.1544 = 0.862$ V, $V_{ov} = 1.7 - 0.862 = 0.838$ V, $V_{SD} = 0.8$ V,
$$I_X = \beta_p\left[(0.838)(0.8) - \tfrac12(0.8)^2\right]\ \mathrm{V^2} = \beta_p(0.670 - 0.320)\ \mathrm{V^2} = 0.351\beta_p\ \mathrm{V^2}.$$
- $V_X = 3$ V: $V_{BS} = 0$, so $|V_{TH}| = 0.8$ V; $V_{ov} = 2 - 0.8 = 1.2$ V, $V_{SD} = 1.1$ V,
$$I_X = \beta_p\left[(1.2)(1.1) - \tfrac12(1.1)^2\right]\ \mathrm{V^2} = \beta_p(1.320 - 0.605)\ \mathrm{V^2} = 0.715\beta_p\ \mathrm{V^2}.$$

### Step 6 — Transconductance

$g_m = \partial I_D/\partial V_{SG}$ at fixed $V_{SD}$ and $V_{BS}$:

- **Off** ($V_X < 1.98$ V): $g_m = 0$.
- **Saturation**: $g_m = \beta_pV_{ov} = \beta_p(V_X - 1 - |V_{TH}|)$, rising from 0 at 1.98 V through $0.136\beta_p$ (2.1 V) and $0.368\beta_p$ (2.3 V) to $0.59\beta_p$ at 2.49 V.
- **Triode**: $g_m = \beta_pV_{SD} = \beta_p(V_X - 1.9)$, a straight line from $0.59\beta_p$ at 2.49 V to $1.1\beta_p$ at 3 V.

At the boundary both expressions give $0.59\beta_p$ (there $V_{ov} = V_{SD}$), so $g_m$ is continuous.

### Step 7 — Summary of the sketches

| $V_X$ (V) | Source | Region | $\lvert V_{TH}\rvert$ (V) | $I_X/\beta_p$ (V²) | $g_m/\beta_p$ (V) |
|---|---|---|---|---|---|
| 0 – 1.9 | 1.9-V node | off | 0.994 | 0 | 0 |
| 1.9 – 1.98 | $V_X$ node | off | 0.994 → 0.98 | 0 | 0 |
| 2.1 | $V_X$ node | saturation | 0.964 | 0.0093 | 0.136 |
| 2.3 | $V_X$ node | saturation | 0.932 | 0.068 | 0.368 |
| 2.49 | $V_X$ node | sat./triode edge | 0.900 | 0.174 | 0.59 |
| 2.7 | $V_X$ node | triode | 0.862 | 0.351 | 0.80 |
| 3.0 | $V_X$ node | triode | 0.800 | 0.715 | 1.10 |

- **$I_X$**: zero up to about 1.98 V, then a rising parabola (saturation) up to about 2.49 V, then a rising, nearly straight triode curve to $0.715\beta_p$ at 3 V.
- **$g_m$**: zero up to 1.98 V, then rising (slightly faster than linearly, because $|V_{TH}|$ also falls) to $0.59\beta_p$ at 2.49 V, then a straight line of slope $\beta_p$ up to $1.1\beta_p$ at 3 V.

**Without body effect** (for comparison): $|V_{TH}| = 0.8$ V always. For $V_X < 1.8$ V the device would be on, saturated, with the 1.9-V node as source, giving a small *reverse* current $I_X = -\tfrac12\beta_p(0.1\ \mathrm{V})^2 = -0.005\beta_p$; it would cross zero at 1.9 V and then conduct in triode with the $V_X$ node as source, reaching the same $0.715\beta_p$ at 3 V (where $V_{BS} = 0$ anyway).

### Result

- **$0 \le V_X \lesssim 1.98$ V: off.** For $V_X < 1.9$ V the source is the 1.9-V node, $V_{SG} = 0.9$ V and $V_{BS} = 1.1$ V, so $|V_{TH}| = 0.8 + 0.4(\sqrt{1.9} - \sqrt{0.8}) = 0.99$ V $> 0.9$ V. For $V_X > 1.9$ V the source is the $V_X$ node, $V_{SG} = V_X - 1$ and $|V_{TH}| = 0.8 + 0.4(\sqrt{3.8 - V_X} - \sqrt{0.8})$; the device turns on at $V_X \approx 1.98$ V. $I_X = 0$, $g_m = 0$.
- **$1.98\ \mathrm{V} < V_X < 2.49$ V: saturation**, $I_X = \tfrac12\beta_p(V_X - 1 - |V_{TH}|)^2 > 0$: $0.009\beta_p$ at 2.1 V, $0.068\beta_p$ at 2.3 V, $0.174\beta_p$ at 2.49 V; $g_m = \beta_p(V_X - 1 - |V_{TH}|)$ rises from 0 to $0.59\beta_p$.
- **$V_X > 2.49$ V: triode**, $I_X = \beta_p\left[(V_X - 1 - |V_{TH}|)(V_X - 1.9) - \tfrac12(V_X - 1.9)^2\right]$, reaching $0.715\beta_p$ at 3 V; $g_m = \beta_pV_{SD} = \beta_p(V_X - 1.9)$, up to $1.1\beta_p$ at 3 V.

**Common mistake.** Analysing $M_1$ as an NMOS, or keeping the 1.9-V node as the source for all $V_X$. For a PMOS the source is the *higher* terminal; once $V_X$ exceeds 1.9 V the roles swap and the gate drive $V_{SG} = V_X - 1$ grows with $V_X$.

**Common mistake.** Ignoring the body effect. With the well at 3 V, the source sits 1.1 V below the bulk when $V_X < 1.9$ V, raising $|V_{TH}|$ to 0.99 V and switching the device off. Without this, one predicts a small reverse current below 1.8 V and turn-on at 1.9 V instead of 1.98 V.

**Common mistake.** Assuming the device is saturated for all $V_X$ above turn-on. Because the gate is fixed 0.9 V below the drain, saturation holds only while $|V_{TH}| > 0.9$ V; once the source rises above about 2.49 V the shrinking body effect lets $|V_{TH}|$ drop below 0.9 V and the device enters triode.

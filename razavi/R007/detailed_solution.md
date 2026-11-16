# Detailed solution - R007

**Approach.** The lower-potential diffusion terminal of $M_1$ is the source, which splits the sweep at $V_X = 1$ V. In each range, compute the threshold with the body effect (the bulk is grounded, not tied to the source), find the region of operation, and evaluate the square-law current and the transconductance.

### Step 1 — Source terminal and threshold

For $V_X < 1$ V the lower-potential terminal, $V_X$, is the source and the 1-V terminal is the drain; for $V_X > 1$ V the roles swap; at $V_X = 1$ V both terminals are at the same potential and $I_X = 0$. With the bulk grounded,

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB}} - 0.9487\right)\ \mathrm{V}.$$

### Step 2 — Region of operation for $V_X < 1$ V

With the source at $V_X$, the drain at 1 V, the gate at 1.9 V and the bulk at 0:

$$
\begin{aligned}
V_{GS} &= 1.9 - V_X,\\
V_{DS} &= 1 - V_X,\\
V_{SB} &= V_X - 0 = V_X .
\end{aligned}
$$

Triode requires $V_{DS} < V_{GS} - V_{TH}$:

$$
\begin{aligned}
1 - V_X &< 1.9 - V_X - V_{TH}\\
V_{TH} &< 0.9\ \mathrm{V}.
\end{aligned}
$$

$V_X$ drops out: the gate is always 0.9 V above the drain. Over $0 \le V_X < 1$ V the threshold runs from

$$V_{TH}(0) = 0.700\ \mathrm{V} \quad\text{to}\quad V_{TH}(1\ \mathrm{V}) = 0.7 + 0.45(\sqrt{1.9} - 0.9487) = 0.7 + 0.45\times0.4297 = 0.893\ \mathrm{V}.$$

Both are below 0.9 V, so **$M_1$ is in triode for all $V_X < 1$ V** (only just, near $V_X = 1$ V).

### Step 3 — Current for $V_X < 1$ V

The triode current flows from drain (1 V) to source ($V_X$),

$$I_{D} = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right] = \beta\left[(1.9 - V_X - V_{TH})(1 - V_X) - \tfrac12(1 - V_X)^2\right],$$

i.e. out of $M_1$ into the $V_X$ source, *opposite* to $I_X$. Therefore

$$I_X = -I_D = -\beta\left[(1.9 - V_X - V_{TH})(1 - V_X) - \tfrac12(1 - V_X)^2\right].$$

Point by point (threshold, overdrive, current):

- $V_X = 0$: $V_{TH} = 0.700$ V, $V_{ov} = 1.9 - 0.700 = 1.200$ V, $V_{DS} = 1$ V.
$$I_X = -\beta\left[(1.2\ \mathrm{V})(1\ \mathrm{V}) - \tfrac12(1\ \mathrm{V})^2\right] = -\beta(1.2 - 0.5)\ \mathrm{V^2} = -0.70\beta\ \mathrm{V^2}.$$
- $V_X = 0.25$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.15} - 0.9487) = 0.7 + 0.45\times0.1237 = 0.756$ V, $V_{ov} = 1.65 - 0.756 = 0.894$ V, $V_{DS} = 0.75$ V.
$$I_X = -\beta\left[(0.894)(0.75) - \tfrac12(0.75)^2\right]\ \mathrm{V^2} = -\beta(0.671 - 0.281)\ \mathrm{V^2} = -0.39\beta\ \mathrm{V^2}.$$
- $V_X = 0.5$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.4} - 0.9487) = 0.7 + 0.45\times0.2345 = 0.806$ V, $V_{ov} = 1.4 - 0.806 = 0.594$ V, $V_{DS} = 0.5$ V.
$$I_X = -\beta\left[(0.594)(0.5) - \tfrac12(0.5)^2\right]\ \mathrm{V^2} = -\beta(0.297 - 0.125)\ \mathrm{V^2} = -0.17\beta\ \mathrm{V^2}.$$
- $V_X = 0.75$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.65} - 0.9487) = 0.7 + 0.45\times0.3358 = 0.851$ V, $V_{ov} = 1.15 - 0.851 = 0.299$ V, $V_{DS} = 0.25$ V.
$$I_X = -\beta\left[(0.299)(0.25) - \tfrac12(0.25)^2\right]\ \mathrm{V^2} = -\beta(0.0747 - 0.0313)\ \mathrm{V^2} = -0.044\beta\ \mathrm{V^2}.$$
- $V_X = 1$ V: $V_{DS} = 0$, so $I_X = 0$.

**Shape.** With $\eta = \partial V_{TH}/\partial V_{SB} = \gamma/(2\sqrt{0.9 + V_{SB}})$, the slope is $dI_X/dV_X = \beta\left[V_{ov} + \eta\,V_{DS}\right]$: $1.44\beta$ (V) at $V_X = 0$, falling to only $0.0066\beta$ at $V_X = 1$ V. So $I_X$ rises steeply from $-0.70\beta$ and then flattens into zero (concave down), because the body effect keeps raising $V_{TH}$ while $V_{GS}$ falls.

### Step 4 — Region and current for $V_X > 1$ V

Now the 1-V terminal is the source:

$$
\begin{aligned}
V_{GS} &= 1.9 - 1 = 0.9\ \mathrm{V},\\
V_{SB} &= 1 - 0 = 1\ \mathrm{V},\\
V_{DS} &= V_X - 1 ,
\end{aligned}
$$

so only $V_{DS}$ varies. With $V_{SB} = 1$ V,

$$V_{TH} = 0.7 + 0.45\left(\sqrt{1.9} - \sqrt{0.9}\right) = 0.7 + 0.45\,(1.3784 - 0.9487) = 0.7 + 0.1934 = 0.8934\ \mathrm{V},$$

$$V_{ov} = V_{GS} - V_{TH} = 0.9 - 0.8934 = 0.0066\ \mathrm{V} \approx 7\ \mathrm{mV}.$$

**The device is barely on.** It leaves triode once $V_{DS} > V_{ov}$, i.e. for $V_X > 1.0066$ V, and is then saturated with

$$I_X = \tfrac12\beta V_{ov}^2 = \tfrac12\beta\,(0.0066\ \mathrm{V})^2 = \tfrac12\beta\,(4.39\times10^{-5}\ \mathrm{V^2}) \approx 2.2\times10^{-5}\,\beta\ \mathrm{V^2}.$$

With $\beta = 1\ \mathrm{mA/V^2}$ this is about 22 nA, against 0.7 mA at $V_X = 0$. $I_X$ is now positive (current flows from $V_X$ into $M_1$) but **practically zero**, and constant up to $V_X = 3$ V (rising only slightly with channel-length modulation). In a real device this tiny overdrive puts $M_1$ at the edge of weak inversion, with a small, again negligible, subthreshold current.

**Without body effect**, the overdrive would be $0.9 - 0.7 = 0.2$ V, the device would saturate at $V_X = 1.2$ V, and the plateau would be $I_X = \tfrac12\beta(0.2\ \mathrm{V})^2 = 0.02\beta\ \mathrm{V^2}$, about 900 times larger. The 0.19 V rise in $V_{TH}$ is what nearly switches $M_1$ off.

### Step 5 — Transconductance

**Triode** ($V_X < 1$ V): differentiating $\beta[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2]$ with respect to $V_{GS}$,

$$g_m = \beta V_{DS} = \beta\,(1 - V_X),$$

falling **linearly** from $\beta\times(1\ \mathrm{V})$ at $V_X = 0$ to zero at $V_X = 1$ V: 1.0, 0.75, 0.5, 0.25 and 0 (times $\beta\cdot$V) at $V_X = 0$, 0.25, 0.5, 0.75 and 1 V. In triode $g_m$ is set by $V_{DS}$, not by the overdrive.

**Just above 1 V** ($1 < V_X < 1.0066$ V, triode): $g_m = \beta V_{DS} = \beta(V_X - 1)$, rising from 0 to $0.0066\beta$.

**Saturation** ($V_X > 1.0066$ V):

$$g_m = \beta V_{ov} = \beta\times0.0066\ \mathrm{V} \approx 0.0066\beta\ \mathrm{V} \approx 0 ,$$

against $\beta\times0.2\ \mathrm{V} = 0.2\beta$ without body effect.

### Step 6 — Summary of the sketches

| $V_X$ (V) | Source terminal | Region | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|---|---|
| 0 | $V_X$ | triode | −0.70 | 1.00 |
| 0.25 | $V_X$ | triode | −0.39 | 0.75 |
| 0.5 | $V_X$ | triode | −0.17 | 0.50 |
| 0.75 | $V_X$ | triode | −0.044 | 0.25 |
| 1.0 | — | — | 0 | 0 |
| 1.0066 – 3 | 1-V node | saturation (barely on) | ≈ +2.2×10⁻⁵ | ≈ 0.0066 |

- **$I_X$**: negative, rising from $-0.70\beta$ and flattening into zero at $V_X = 1$ V; then essentially zero (a tiny positive constant) up to 3 V.
- **$g_m$**: a straight line from $\beta\cdot(1\ \mathrm{V})$ down to zero at $V_X = 1$ V, then essentially zero.

### Result

- **$0 \le V_X < 1$ V:** the $V_X$ node is the source ($V_{GS} = 1.9 - V_X$, $V_{SB} = V_X$, $V_{DS} = 1 - V_X$). Since $V_{TH} < 0.9$ V throughout, $M_1$ is in **triode**, and current flows from the 1-V source into the $V_X$ source:
$$I_X = -\beta\left[(1.9 - V_X - V_{TH})(1 - V_X) - \tfrac12(1 - V_X)^2\right],$$
which is $-0.70\beta$ at $V_X = 0$, $-0.39\beta$ at 0.25 V, $-0.17\beta$ at 0.5 V, $-0.044\beta$ at 0.75 V and 0 at 1 V. The transconductance is $g_m = \beta V_{DS} = \beta(1 - V_X)$, falling linearly from $\beta\cdot(1\ \mathrm{V})$ to 0.
- **$V_X > 1$ V:** the 1-V node is the source, $V_{GS} = 0.9$ V, $V_{SB} = 1$ V, so $V_{TH} = 0.893$ V and the overdrive is only about 7 mV. $M_1$ saturates within a few mV of 1 V and carries $I_X \approx \tfrac12\beta(0.0066)^2 \approx 2\times10^{-5}\beta$: practically **zero** (in reality a small subthreshold current), constant up to 3 V, with $g_m \approx 0$.
- Without body effect, $M_1$ would saturate at $V_X = 1.2$ V with $I_X = 0.02\beta$ and $g_m = 0.2\beta$.

**Common mistake.** Treating the 1-V node as the source for all $V_X$, and concluding that $I_X = 0$ for $V_X < 1$ V. There the $V_X$ terminal is the source, $V_{GS} = 1.9 - V_X$ is large, and a substantial current flows *out of* $M_1$ into $V_X$ ($I_X < 0$).

**Common mistake.** Ignoring the body effect for $V_X > 1$ V and predicting a solid plateau of $0.02\beta$. $V_{SB} = 1$ V raises the threshold to 0.893 V, leaving only 7 mV of overdrive, so the current and $g_m$ are essentially zero.

**Common mistake.** Using $g_m = \beta(V_{GS} - V_{TH})$ for $V_X < 1$ V. The device is in triode, where $g_m = \beta V_{DS}$; the vanishing $V_{DS}$, not the overdrive, drives $g_m$ to zero at $V_X = 1$ V.

# Detailed solution - R080

**Approach.** Making the bulk more negative raises $V_{TH}$ through the body effect, so with $V_{GS}$ fixed the overdrive shrinks. Express $g_m$, $r_O$ and $g_mr_O$ through the overdrive in the square-law model, then follow each as the bulk voltage $V_B$ goes from 0 to $-\infty$.

### Step 1 — From bulk voltage to threshold voltage

With the source at 0 V, $V_{SB} = V_S - V_B = -V_B$, which goes from 0 to $+\infty$, and

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB}} - 0.9487\right)\ \mathrm{V}.$$

Its rate of rise is

$$\frac{dV_{TH}}{dV_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} :$$

$$
\begin{aligned}
\text{at } V_{SB} = 0:&\quad \frac{0.45}{2\sqrt{0.9}} = \frac{0.45}{1.897} = 0.237,\\
\text{at } V_{SB} = 3\ \mathrm{V}:&\quad \frac{0.45}{2\sqrt{3.9}} = \frac{0.45}{3.950} = 0.114 .
\end{aligned}
$$

So $V_{TH}$ rises **fastest near $V_B = 0$** and more slowly afterward (a square-root curve), but it grows without bound as $V_{SB} \to \infty$.

### Step 2 — Overdrive, region of operation and cutoff point

With $V_{GS}$ fixed, $V_{ov} = V_{GS} - V_{TH}$ **falls**, fastest near $V_B = 0$. $V_{DS}$ is fixed and $V_{ov}$ only decreases, so a device saturated at $V_B = 0$ ($V_{DS} \ge V_{ov}$) stays saturated.

**Cutoff point.** Because $V_{TH}$ is unbounded, it reaches $V_{GS}$ at a **finite** $V_{SB,off}$:

$$
\begin{aligned}
V_{GS} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB,off}} - \sqrt{2|\phi_F|}\right)\\
\sqrt{2|\phi_F| + V_{SB,off}} &= \frac{V_{GS} - V_{TH0}}{\gamma} + \sqrt{2|\phi_F|}\\
V_{SB,off} &= \left[\frac{V_{GS} - V_{TH0}}{\gamma} + \sqrt{2|\phi_F|}\right]^2 - 2|\phi_F| .
\end{aligned}
$$

$V_{GS}$ is not given. As an example take $V_{GS} = 1.2$ V (zero-bias overdrive 0.5 V):

$$
\begin{aligned}
\frac{V_{GS} - V_{TH0}}{\gamma} &= \frac{1.2 - 0.7}{0.45}\ \sqrt{\mathrm{V}} = 1.111\ \sqrt{\mathrm{V}},\\
\sqrt{2|\phi_F| + V_{SB,off}} &= 1.111 + 0.949 = 2.060\ \sqrt{\mathrm{V}},\\
V_{SB,off} &= (2.060)^2 - 0.9 = 4.243 - 0.9 = 3.34\ \mathrm{V}.
\end{aligned}
$$

So the device turns off at $V_B \approx -3.34$ V.

### Step 3 — Transconductance $g_m$

With $\beta = \mu_nC_{ox}W/L$,

$$I_D = \frac12\beta V_{ov}^2, \qquad g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta V_{ov} = \beta\,(V_{GS} - V_{TH}) .$$

(With fixed $V_{DS}$, a factor $(1+\lambda V_{DS})$ would only scale all the curves by a constant, so it is omitted.)

$g_m$ starts at $g_{m0} = \beta(V_{GS} - V_{TH0})$ at $V_B = 0$ and **decreases** as $V_B$ goes negative, with slope

$$\frac{dg_m}{dV_{SB}} = -\beta\frac{dV_{TH}}{dV_{SB}} = -\frac{\beta\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} ,$$

largest in magnitude at $V_B = 0$, so the curve is steep at first and then flatter (concave up). It **reaches zero** at $V_{SB} = V_{SB,off}$, where $V_{ov} = 0$.

### Step 4 — Output resistance $r_O$

$$r_O = \frac{1}{\lambda I_D} = \frac{1}{\lambda\cdot\frac12\beta V_{ov}^2} = \frac{2}{\lambda\beta V_{ov}^2} .$$

$r_O$ starts at $r_{O0} = 2/[\lambda\beta(V_{GS} - V_{TH0})^2]$, **increases** as $V_B$ goes negative (the current falls), and **diverges** like $1/V_{ov}^2$ at the cutoff point, very sharply just before it.

### Step 5 — Intrinsic gain $g_mr_O$

$$g_mr_O = \beta V_{ov}\cdot\frac{2}{\lambda\beta V_{ov}^2} = \frac{2}{\lambda V_{ov}} = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

It starts at $2/[\lambda(V_{GS} - V_{TH0})]$ and **increases** as $V_B$ goes negative, because $r_O \propto 1/V_{ov}^2$ grows faster than $g_m \propto V_{ov}$ falls. It **diverges** at the cutoff point like $1/V_{ov}$, less abruptly than $r_O$.

### Step 6 — Numbers for $V_{GS} = 1.2$ V

$\beta$ is not given, so $g_m$ and $r_O$ are normalized to their values at $V_B = 0$: $g_m/g_{m0} = V_{ov}/0.5\ \mathrm{V}$ and $r_O/r_{O0} = (0.5\ \mathrm{V}/V_{ov})^2$. The gain uses $\lambda = 0.1\ \mathrm{V^{-1}}$. As a sample row, at $V_B = -1$ V:

$$
\begin{aligned}
V_{TH} &= 0.7 + 0.45(\sqrt{1.9} - \sqrt{0.9}) = 0.7 + 0.45(1.3784 - 0.9487) = 0.893\ \mathrm{V},\\
V_{ov} &= 1.2 - 0.893 = 0.307\ \mathrm{V},\\
g_m/g_{m0} &= 0.307/0.5 = 0.61,\\
r_O/r_{O0} &= (0.5/0.307)^2 = 2.66,\\
g_mr_O &= \frac{2}{(0.1\ \mathrm{V^{-1}})(0.307\ \mathrm{V})} = 65 .
\end{aligned}
$$

| $V_B$ (V) | $V_{TH}$ (V) | $V_{ov}$ (V) | $g_m/g_{m0}$ | $r_O/r_{O0}$ | $g_mr_O$ |
|---|---|---|---|---|---|
| 0 | 0.700 | 0.500 | 1.00 | 1.0 | 40 |
| −0.5 | 0.806 | 0.394 | 0.79 | 1.6 | 51 |
| −1 | 0.893 | 0.307 | 0.61 | 2.7 | 65 |
| −1.5 | 0.970 | 0.230 | 0.46 | 4.7 | 87 |
| −2 | 1.039 | 0.161 | 0.32 | 9.7 | 125 |
| −2.5 | 1.103 | 0.097 | 0.19 | 26 | 206 |
| −3 | 1.162 | 0.038 | 0.08 | 171 | 523 |
| −3.34 | 1.200 | 0 | 0 | ∞ | ∞ |

The first volt of reverse bias removes 39 % of $g_m$; the next volt removes only another 29 % of the original value.

### Step 7 — Beyond the cutoff point

For $V_{SB} > V_{SB,off}$ the square law gives $I_D = 0$, $g_m = 0$ and $r_O = \infty$, so $g_mr_O$ has no meaning in this model. A real device enters **weak inversion** instead, with $I_D$ decaying exponentially as $V_{TH}$ keeps rising. There $g_m = I_D/(\zeta V_T)$ (thermal voltage $V_T = kT/q \approx 26$ mV, subthreshold slope factor $\zeta \approx 1.5$) falls exponentially while $r_O = 1/(\lambda I_D)$ grows exponentially, and their product levels off near

$$g_mr_O \approx \frac{1}{\lambda\zeta V_T} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1.5)(0.026\ \mathrm{V})} \approx 256$$

instead of diverging. The square-law divergence of $g_mr_O$ is an artifact of applying it near $V_{ov} = 0$.

### Result

As $V_B$ goes from 0 to $-\infty$, $V_{SB} = -V_B$ rises and the body effect raises $V_{TH} = V_{TH0} + \gamma(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|})$, so the overdrive $V_{GS} - V_{TH}$ shrinks:

- **$g_m = \beta(V_{GS} - V_{TH})$ decreases**: fastest near $V_B = 0$ (where $dV_{TH}/dV_{SB} = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$ is largest), more slowly afterward, reaching zero when $V_{TH} = V_{GS}$.
- **$r_O = 2/(\lambda\beta V_{ov}^2)$ increases**, tending to infinity at the same point.
- **$g_mr_O = 2/(\lambda V_{ov})$ increases**, also without bound at that point in the square law (40 at $V_B = 0$, 65 at −1 V, 125 at −2 V for $V_{GS} = 1.2$ V).
- The device cuts off at a finite bulk voltage, $V_{SB,off} = [(V_{GS} - V_{TH0})/\gamma + \sqrt{2|\phi_F|}]^2 - 2|\phi_F|$; for $V_{GS} = 1.2$ V this is $V_B \approx -3.34$ V. Beyond it the square law gives $g_m = 0$ and $I_D = 0$. In reality a subthreshold current flows, $g_m$ falls exponentially, and $g_mr_O$ levels off near $1/(\lambda\zeta V_T)$.

**Common mistake.** Taking $V_{SB} = V_B$ instead of $V_S - V_B$, so that a negative bulk seems to *lower* the threshold and raise $g_m$. A negative bulk reverse-biases the source–bulk junction, which always *raises* $V_{TH}$ in an NMOS.

**Common mistake.** Claiming that $g_mr_O$ is a constant of the device. In the square law $g_mr_O = 2/(\lambda V_{ov})$ depends on the overdrive, which is exactly what the bulk voltage changes.

**Common mistake.** Drawing $g_m$ as a straight line, or as reaching zero only as $V_B \to -\infty$. $V_{TH}$ grows like a square root, so $g_m$ falls fastest at first, but because the square root is unbounded the device cuts off at a *finite* bulk voltage.

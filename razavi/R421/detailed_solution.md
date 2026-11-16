# Detailed solution - R421

**Approach.** Differentiate the square-law drain current with respect to $V_{GS}$ (for $g_m$) and $V_{DS}$ (for $1/r_O$), in the triode region and in saturation, then follow $g_m$, $r_O$ and $g_mr_O$ as $V_{DS}$ sweeps from 0 through the edge of saturation at a fixed overdrive.

### Step 1 — The two current equations

Let $\beta = \mu C_{ox}W/L$ and $V_{OD} = V_{GS} - V_{TH} > 0$ (fixed), with $g_m = \partial I_D/\partial V_{GS}$ and $1/r_O = \partial I_D/\partial V_{DS}$.

**Triode region** ($0 \le V_{DS} < V_{OD}$):

$$I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right].$$

**Saturation** ($V_{DS} \ge V_{OD}$):

$$I_D = \tfrac12\beta\,(V_{GS} - V_{TH})^2\,(1 + \lambda V_{DS}).$$

### Step 2 — Transconductance and output resistance in the triode region

Only the first term in the bracket depends on $V_{GS}$:

$$g_m = \frac{\partial}{\partial V_{GS}}\Big\{\beta\big[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\big]\Big\} = \beta V_{DS} = \mu C_{ox}\frac WL\,V_{DS} ,$$

proportional to $V_{DS}$ and **independent of the overdrive**: the gate modulates a channel conductance, and the resulting current change is that change times the small $V_{DS}$.

$$
\begin{aligned}
\frac{1}{r_O} &= \frac{\partial}{\partial V_{DS}}\Big\{\beta\big[V_{OD}V_{DS} - \tfrac12V_{DS}^2\big]\Big\} = \beta\,(V_{OD} - V_{DS}),\\
r_O &= \frac{1}{\mu C_{ox}\dfrac WL\,(V_{GS} - V_{TH} - V_{DS})} .
\end{aligned}
$$

At $V_{DS} = 0$ this is the on-resistance $R_{on} = 1/(\beta V_{OD})$; as $V_{DS}$ rises, the channel near the drain thins and $r_O$ grows. The intrinsic gain is

$$g_mr_O = \frac{\beta V_{DS}}{\beta(V_{OD} - V_{DS})} = \frac{V_{DS}}{V_{OD} - V_{DS}} .$$

### Step 3 — Transconductance and output resistance in saturation

$$
\begin{aligned}
g_m &= \beta V_{OD}\,(1 + \lambda V_{DS}) \approx \beta V_{OD} = \frac{2I_D}{V_{OD}},\\
\frac{1}{r_O} &= \tfrac12\beta V_{OD}^2\,\lambda\ \Longrightarrow\ r_O = \frac{1}{\lambda\cdot\tfrac12\beta V_{OD}^2} \approx \frac{1}{\lambda I_D},\\
g_mr_O &\approx \frac{\beta V_{OD}}{\tfrac12\lambda\beta V_{OD}^2} = \frac{2}{\lambda V_{OD}}\quad(\text{times } 1 + \lambda V_{DS}\ \text{if that factor is kept}).
\end{aligned}
$$

At $V_{DS} = V_{OD}$ the triode $g_m = \beta V_{DS}$ equals $\beta V_{OD}$, so $g_m$ is continuous (apart from the small $1 + \lambda V_{DS}$ factor).

### Step 4 — The behaviour of $r_O$ at the edge of saturation

The pure triode formula gives $r_O \to \infty$ as $V_{DS} \to V_{OD}$ (the $\lambda$-free square law has zero slope there), while in saturation $r_O = 1/(\lambda I_D)$ is finite. This mismatch is an artifact of using $\lambda$ only in saturation. Keeping it in the triode equation, $I_D = \beta[V_{OD}V_{DS} - \tfrac12V_{DS}^2](1 + \lambda V_{DS})$, gives

$$\frac{1}{r_O} = \beta(V_{OD} - V_{DS})(1 + \lambda V_{DS}) + \lambda\beta\left(V_{OD}V_{DS} - \tfrac12V_{DS}^2\right),$$

which at $V_{DS} = V_{OD}$ equals $\tfrac12\lambda\beta V_{OD}^2$, exactly the saturation value: $r_O$ then rises smoothly from $R_{on}$ to $1/(\lambda I_D)$ and stays flat.

### Step 5 — Numerical example and the plots

Take $V_{OD} = 0.5$ V and $\lambda = 0.1\ \mathrm{V^{-1}}$ ($\lambda V_{OD} = 0.05$), with $g_m$ normalized to $\beta V_{OD}$ and $r_O$ to $R_{on} = 1/(\beta V_{OD})$. In saturation $g_m \approx \beta V_{OD}$ (normalized 1), $r_O \approx 2/(\lambda V_{OD})\,R_{on} = 40\,R_{on}$ and $g_mr_O \approx 40$.

| $V_{DS}$ (V) | $V_{DS}/V_{OD}$ | $g_m/(\beta V_{OD})$ | $r_O/R_{on}$ | $g_mr_O$ | region |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | triode |
| 0.10 | 0.2 | 0.2 | 1.25 | 0.25 | triode |
| 0.25 | 0.5 | 0.5 | 2 | 1 | triode |
| 0.40 | 0.8 | 0.8 | 5 | 4 | triode |
| 0.45 | 0.9 | 0.9 | 10 | 9 | triode |
| 0.475 | 0.95 | 0.95 | 20 | 19 | triode |
| ≥ 0.5 | ≥ 1 | ≈ 1 | ≈ 40 | ≈ 40 | saturation |

(Keeping $1 + \lambda V_{DS}$ in saturation raises $g_m$ and $g_mr_O$ by a few per cent, e.g. $g_mr_O = 42$ at $V_{DS} = 0.5$ V and 44 at 1 V.)

- **$g_m$:** a straight line from the origin with slope $\beta$, reaching $\beta V_{OD}$ at $V_{DS} = V_{OD}$, then essentially flat (rising only as $1 + \lambda V_{DS}$), with a sharp corner at the edge of saturation.
- **$r_O$:** starts at $R_{on}$ and rises along the hyperbola $1/[\beta(V_{OD} - V_{DS})]$, slowly at first and then steeply near $V_{OD}$; in saturation it is roughly constant at $1/(\lambda I_D)$, here 40 times $R_{on}$. (With $\lambda$ kept in the triode equation the curve joins the saturation value continuously, Step 4.)
- **$g_mr_O$:** zero at $V_{DS} = 0$, about $V_{DS}/V_{OD}$ (below 1) through the first half of the triode region, climbing steeply in the last tens of millivolts, and flat at about $2/(\lambda V_{OD})$ (here 40) in saturation. At 50 mV inside the triode region ($V_{DS} = 0.45$ V) it is 9, less than a quarter of its saturation value. (With $\lambda$ kept in the triode equation it rises smoothly: about 7.3 at $V_{DS} = 0.45$ V, 22 at 0.49 V, and 42 at the boundary.)

The intrinsic gain collapses as soon as the device enters triode, because $g_m$ falls in proportion to $V_{DS}$ and $r_O$ falls toward $R_{on}$ at the same time; this is why amplifying devices are kept in saturation.

### Result

**Triode region** ($V_{DS} < V_{OD}$):

$$g_m = \mu C_{ox}\frac WL\,V_{DS},\qquad r_O = \frac{1}{\mu C_{ox}\dfrac WL\,(V_{GS} - V_{TH} - V_{DS})},\qquad g_mr_O = \frac{V_{DS}}{V_{OD} - V_{DS}} .$$

**Saturation** ($V_{DS} \ge V_{OD}$):

$$g_m = \mu C_{ox}\frac WL\,V_{OD}(1 + \lambda V_{DS}) \approx \frac{2I_D}{V_{OD}},\qquad r_O \approx \frac{1}{\lambda I_D},\qquad g_mr_O \approx \frac{2}{\lambda V_{OD}} .$$

Versus $V_{DS}$: $g_m$ rises linearly from 0 to $\beta V_{OD}$ and then stays nearly constant; $r_O$ rises from $R_{on} = 1/(\beta V_{OD})$ toward the much larger saturation value $1/(\lambda I_D)$; $g_mr_O$ is small in the triode region, climbs steeply near the boundary, and is flat at $\approx 2/(\lambda V_{OD})$ in saturation (e.g. 9 at 50 mV inside the triode region versus 40 in saturation for $V_{OD} = 0.5$ V, $\lambda = 0.1\ \mathrm{V^{-1}}$).

**Common mistake.** Writing the triode transconductance as proportional to $V_{GS} - V_{TH}$, or treating it as constant. $I_D$ depends on $V_{GS}$ only through $(V_{GS} - V_{TH})V_{DS}$, so $g_m = \beta V_{DS}$, which vanishes at $V_{DS} = 0$.

**Common mistake.** Using $r_O = 1/(\lambda I_D)$ in the triode region. There the channel's resistive behaviour dominates, giving the far smaller $r_O = 1/[\beta(V_{OD} - V_{DS})]$.

**Common mistake.** Drawing $r_O$ or $g_mr_O$ decreasing toward the edge of saturation, or claiming a higher intrinsic gain in triode. Both increase monotonically with $V_{DS}$ up to the boundary; any overshoot of the simple model there is an artifact of leaving $\lambda$ out of the triode equation.

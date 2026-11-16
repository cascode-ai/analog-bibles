# Detailed solution - R278

**Approach.** Write KCL at X, Y and P, with $I_C$ the current flowing from Y through $C_1$ into P. The equations show that $M_1$ always carries exactly half the tail current, which fixes $V_X$ and $V_P$. Node Y starts at $V_P$ (the capacitor is uncharged), so $M_2$ starts with $V_{DS} = 0$. The mirror current that $M_2$ cannot yet sink charges $C_1$ and raises $V_Y$: first linearly, then more slowly as $M_2$ conducts more, and finally, through channel-length modulation, all the way to the balanced value $V_Y = V_X$.

### Step 1 — KCL: $V_X$ and $V_P$ are fixed

With $I_C = C_1\,d(V_Y - V_P)/dt$:

$$\text{X: } |I_{D3}| = I_{D1}, \qquad \text{Y: } |I_{D4}| = I_{D2} + I_C, \qquad \text{P: } I_{D1} + I_{D2} + I_C = I_{SS}.$$

$M_4$ is saturated as long as $V_Y < V_X + 0.8$ V, which holds here, so to zeroth order in λ, $|I_{D4}| = |I_{D3}| = I_{D1}$. The Y equation then says $I_{D2} + I_C = I_{D1}$, and the P equation becomes

$$I_{D1} + I_{D1} = I_{SS} \quad\Longrightarrow\quad I_{D1} = \frac{I_{SS}}{2}\ \ \text{at all times.}$$

Hence:

- $M_3$ carries $I_{SS}/2$: $V_X = V_{DD} - 0.8 - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$, **constant**.
- $M_1$ (gate at 1.5 V, saturated) carries $I_{SS}/2$: $V_P = 1.5 - V_{GS1}(I_{SS}/2) = 1.5 - V_{TH}(V_P) - V_{ov}$, **constant**, with $V_{ov} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$ and $V_{TH}(V_P)$ including body effect.

Whatever current $C_1$ takes from Y comes out of the mirror's copy, not from the tail's share in $M_1$.

### Step 2 — $t = 0^+$: $M_2$ has no drain–source voltage

Because $v_{C1}(0) = 0$, $V_Y(0^+) = V_P$, so $V_{DS2} = 0$ and $I_{D2} = 0$. The Y equation gives

$$I_C(0^+) = |I_{D4}| = \frac{I_{SS}}{2}:$$

the whole mirror current goes into $C_1$, so $V_Y$ starts rising with slope

$$\left.\frac{dV_Y}{dt}\right|_{0^+} = \frac{I_{SS}}{2C_1}.$$

### Step 3 — $M_2$ in triode: a slowing, hyperbolic rise

Let $v = V_Y - V_P = V_{DS2}$. While $v < V_{ov}$, $M_2$ is in triode, with the same overdrive $V_{ov}$ as $M_1$ (same gate voltage and source):

$$I_{D2} = \beta\left(V_{ov}v - \tfrac12v^2\right).$$

The capacitor current is what is left of $I_{SS}/2 = \tfrac{\beta}{2}V_{ov}^2$:

$$I_C = \frac{\beta}{2}V_{ov}^2 - \beta\left(V_{ov}v - \tfrac12v^2\right) = \frac{\beta}{2}\left(V_{ov}^2 - 2V_{ov}v + v^2\right) = \frac{\beta}{2}(V_{ov} - v)^2 .$$

$V_P$ is constant, so $C_1\,dv/dt = I_C$. With $w = V_{ov} - v$:

$$
\begin{aligned}
\frac{dw}{dt} &= -\frac{\beta}{2C_1}w^2 \quad\Longrightarrow\quad \frac{1}{w} = \frac{1}{V_{ov}} + \frac{\beta t}{2C_1},\\
v(t) &= V_{ov}\left[1 - \frac{1}{1 + t/\tau}\right], \qquad \tau = \frac{2C_1}{\beta V_{ov}} = \frac{2C_1}{g_m},
\end{aligned}
$$

with $g_m = \beta V_{ov}$ of $M_2$ at $I_{SS}/2$. So

$$V_Y(t) = V_P + V_{ov}\,\frac{t/\tau}{1 + t/\tau}.$$

$V_Y$ rises fast at first (slope $V_{ov}/\tau = I_{SS}/(2C_1)$, consistent with Step 2) and then slows, approaching the edge of saturation

$$V_Y \to V_P + V_{ov} = 1.5 - V_{TH2}(V_P)$$

hyperbolically. With $\lambda = 0$ it would stop there: once $M_2$ is saturated it carries $I_{SS}/2$ and $I_C = 0$.

### Step 4 — With $\lambda > 0$: a slow approach to $V_X$

With channel-length modulation, the balanced final state is $V_Y = V_X$, where $M_4$ and $M_3$ have equal $V_{SD}$ and $M_2$ and $M_1$ have equal $V_{DS}$. While $V_Y < V_X$, $M_4$ (larger $V_{SD}$) supplies slightly more than $M_3$, and $M_2$ (smaller $V_{DS}$) sinks slightly less than $M_1$; the difference keeps charging $C_1$. Linearizing about the final point:

$$I_C \approx \frac{V_X - V_Y}{r_{O2}\|r_{O4}} .$$

$C_1$ connects to the low-impedance node P, which hardly moves, so $C_1\,dV_Y/dt \approx I_C$, giving an exponential approach

$$V_X - V_Y \propto e^{-t/\tau_2}, \qquad \tau_2 \approx C_1\,(r_{O2}\|r_{O4}),$$

much slower than $\tau$. ($V_X$ and $V_P$ likewise drift by a few tens of mV at most, because the mirror copies $M_3$'s current only up to λ-terms.)

### Step 5 — Numerical example

$I_{SS} = 200\ \mu\mathrm{A}$, NMOS $W/L = 10/0.5$ ($\beta_n = 2.68\ \mathrm{mA/V^2}$), PMOS $W/L = 20/0.5$ ($\beta_p = 1.536\ \mathrm{mA/V^2}$), $\lambda_n = 0.1$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$, $C_1 = 1$ pF.

$$
\begin{aligned}
V_{ov} &= \sqrt{2(100\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.273\ \mathrm{V}, \qquad g_m = (2.68\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 0.732\ \mathrm{mS},\\
\tau &= \frac{2(1\ \mathrm{pF})}{0.732\ \mathrm{mS}} = 2.7\ \mathrm{ns}, \qquad \frac{I_{SS}}{2C_1} = \frac{100\ \mu\mathrm{A}}{1\ \mathrm{pF}} = 0.1\ \mathrm{V/ns},\\
V_P &\approx 0.45\ \mathrm{V}\ (V_{TH2} \approx 0.79\ \mathrm{V}), \qquad 1.5 - V_{TH2} \approx 0.71\ \mathrm{V}, \qquad V_X \approx 1.87\ \mathrm{V},\\
\tau_2 &\approx (1\ \mathrm{pF})(40\ \mathrm{k}\Omega) = 40\ \mathrm{ns}.
\end{aligned}
$$

Transient solution of the full square-law equations (with λ):

| $t$ | $V_X$ (V) | $V_P$ (V) | $V_Y$ (V) | $I_C$ |
|---|---|---|---|---|
| $0^+$ | 1.89 | 0.46 | 0.46 | 110 μA |
| 1 ns | 1.89 | 0.46 | 0.54 | 64 μA |
| 2.7 ns | 1.89 | 0.46 | 0.63 | 37 μA |
| 5 ns | 1.89 | 0.46 | 0.70 | 27 μA |
| 20 ns | 1.88 | 0.46 | 1.04 | 20 μA |
| 50 ns | 1.88 | 0.45 | 1.47 | 10 μA |
| 100 ns | 1.88 | 0.45 | 1.76 | 3 μA |
| 300 ns | 1.874 | 0.449 | 1.873 | ≈ 0 |

(The initial $I_C$ is 110 μA rather than 100 μA because of $\lambda_p$: $M_4$, with $V_{SD} \approx 2.5$ V, copies $M_3$, with $V_{SD} \approx 1.1$ V, at a ratio of about $(1 + 0.2\times2.54)/(1 + 0.2\times1.11) = 1.23$, and KCL then splits the tail current as about 90 μA in $M_1$ and 110 μA in $C_1$.)

### Result

- **$V_X$ is constant** at $V_{DD} - 0.8 - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$ from $t = 0^+$, and so is **$V_P = 1.5 - V_{GS1}(I_{SS}/2)$**: KCL with the mirror forces $I_{D1} = I_{SS}/2$ at all times.
- **$V_Y$ starts at $V_P$** ($C_1$ uncharged, $M_2$ with $V_{DS} = 0$) and rises, at first linearly at $I_{SS}/(2C_1)$. It then slows as $M_2$ (in triode) takes more of the current, approaching the edge of saturation $1.5 - V_{TH2}$ hyperbolically:
$$V_Y(t) = V_P + V_{ov}\frac{t/\tau}{1 + t/\tau}, \qquad \tau = \frac{2C_1}{g_m}.$$
- **With λ > 0** it then continues slowly toward $V_X$, its final value, with a time constant of order $C_1(r_{O2}\|r_{O4})$.

**Common mistake.** Starting $V_Y$ at $V_X$ or at its normal balanced value. The capacitor ties Y to P with zero voltage, so at $t = 0^+$, $V_Y = V_P$, about 1.4 V below its final value.

**Common mistake.** Letting $V_X$ (or $V_P$) move substantially. The current drawn by $C_1$ comes out of $M_4$'s copy at node Y, and KCL with the mirror forces $M_1$ and $M_3$ to carry $I_{SS}/2$ throughout.

**Common mistake.** Stopping the waveform at $1.5 - V_{TH}$ without comment, or drawing a single RC exponential. The early rise is the square-law (hyperbolic) charging by $M_2$'s missing current; with λ > 0 the final value is $V_X$, reached through a much slower λ-controlled tail.

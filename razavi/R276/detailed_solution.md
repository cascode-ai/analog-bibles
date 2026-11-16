# Detailed solution - R276

**Approach.** Write Kirchhoff's current law (KCL) at X, Y and P with the capacitor current $I_C$ (flowing from X through $C_1$ to Y). Adding these equations shows that the two PMOS currents always add up to $I_{SS}$, which pins $V_X$ near its normal mirror value. $V_Y$ starts one $V_{DD}$ below $V_X$, i.e. below ground, and must climb to $V_X$, since with equal inputs the final state is the balanced one with zero capacitor voltage. It does so in three phases: a fast discharge through the $M_1$–$M_2$ path, a slower rise while $M_2$ is in triode, and a long tail set by channel-length modulation.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: NMOS pair, gates both at +1.5 V, sources at P, ideal tail $I_{SS}$ from P to ground.
- $M_3$: PMOS, diode-connected at X (drain of $M_1$). $M_4$: PMOS with gate at X and drain at Y (drain of $M_2$).
- $C_1$: between X (+) and Y (−), with $v_C = V_X - V_Y = V_{DD} = 3$ V at $t = 0$.

Square law with small $\lambda_n, \lambda_p > 0$. Define $I_C = C_1\,dv_C/dt$, positive when current flows from X through $C_1$ into Y.

### Step 2 — KCL and the key consequence

$$
\begin{aligned}
\text{X:}\quad & |I_{D3}| = I_{D1} + I_C,\\
\text{Y:}\quad & |I_{D4}| + I_C = I_{D2},\\
\text{P:}\quad & I_{D1} + I_{D2} = I_{SS}.
\end{aligned}
$$

($I_{D2}$ is the current from Y into $M_2$ toward P; it becomes negative if Y drops below P.) Add the X and Y equations and use P:

$$|I_{D3}| + |I_{D4}| = I_{D1} + I_{D2} = I_{SS}\quad\text{at all times.}$$

**$M_4$ is saturated throughout**, because its condition $V_{SD4} \ge V_{SG4} - |V_{THp}|$ reads $V_Y \le V_X + 0.8$ V, and here $V_Y \le V_X$. With $\lambda_p$ small, $|I_{D4}| \approx |I_{D3}|$, so

$$|I_{D3}| \approx \frac{I_{SS}}{2} \quad\Longrightarrow\quad V_X \approx V_{DD} - |V_{GS3}| = V_{DD} - 0.8 - \sqrt{\frac{I_{SS}}{\mu_pC_{ox}(W/L)_3}} .$$

**$V_X$ is essentially constant from $t = 0^+$.** The mirror forces the diode device to carry half the tail current, whatever $C_1$ does.

**Small drift.** With $\lambda_p > 0$, $|I_{D4}|/|I_{D3}| = (1 + \lambda_pV_{SD4})/(1 + \lambda_pV_{SD3})$. While $V_Y < V_X$, $V_{SD4} > V_{SD3}$, so $|I_{D4}| > |I_{D3}|$ and $|I_{D3}|$ is a little *below* $I_{SS}/2$. $V_X$ therefore starts a few tens of mV high and drifts down by an amount of order $\lambda_p|V_{ov,p}|$ as $v_C \to 0$.

### Step 3 — The initial and final states

**$t = 0^+$:** the capacitor voltage cannot jump, so

$$V_Y(0^+) = V_X - V_{DD} = -|V_{GS3}| \quad (\text{about } -1.1\ \mathrm{V}, \text{ below ground}).$$

**Final state:** both inputs are equal and all devices saturated, so the circuit settles at its balanced point, where $M_4$ copies $M_3$ with equal $V_{SD}$: $V_Y = V_X$ and $v_C = 0$. The capacitor must be **completely discharged**, and $V_Y$ climbs by a full $V_{DD}$.

### Step 4 — Phase 1: fast discharge through $M_1$ and $M_2$

Initially Y (about −1.1 V) is below P. For $M_2$, Y is then the *source* terminal, so its gate (1.5 V) is about 2.6 V above it and $M_2$ is strongly on in the reverse direction. $M_1$ is also on. Together they form a low-resistance path X → $M_1$ → P → $M_2$ → Y directly across $C_1$, which discharges it rapidly. From the Y equation,

$$\frac{dV_Y}{dt} = \frac{-I_C}{C_1} = \frac{|I_{D4}| - I_{D2}}{C_1}, \qquad I_{D2} < 0,$$

so $V_Y$ rises steeply: the current involved is of the order of milliamperes, much larger than $I_{SS}$. This phase ends once Y has passed P and $M_2$ conducts in its normal direction.

(In a real circuit, the negative $V_Y$ forward-biases $M_2$'s drain–substrate junction, which clamps Y near −0.6 V at $t = 0^+$. X then starts near 2.4 V with the PMOS devices briefly off, and drops to its mirror value within this fast phase. After that the picture is the same.)

### Step 5 — Phase 2: $M_2$ in triode, slower rise

For $V_P < V_Y < 1.5 - V_{TH2}(V_P)$, $M_2$ conducts normally but is in **triode**. It carries less than its saturation share, $I_{D2} < I_{SS}/2 \approx |I_{D4}|$. The difference $|I_{D4}| - I_{D2}$ still charges Y upward, but it shrinks as $M_2$ approaches saturation, so **$V_Y$ keeps rising, more slowly**.

$M_2$ reaches saturation at about $V_Y \approx 1.5 - V_{TH2}(V_P)$, roughly 0.7–0.8 V. There the slope of $V_Y$ drops sharply.

### Step 6 — Phase 3: the slow tail set by λ

With $\lambda = 0$ and all devices saturated, $I_{D1} = I_{D2}$ and $|I_{D3}| = |I_{D4}|$, so $I_C = 0$ and $V_Y$ would stall. With $\lambda > 0$ a small imbalance remains. Linearize about the final state (deviations $x$, $y$, $p$ of $V_X$, $V_Y$, $V_P$; $r_N = r_{O1,2}$, $r_P = r_{O3,4}$; $g_N$, $g_P$ the transconductances):

$$
\begin{aligned}
\text{X:}\quad & -(g_P + 1/r_P)\,x = -g_Np + (x - p)/r_N + I_C,\\
\text{Y:}\quad & -g_Px - y/r_P + I_C = -g_Np + (y - p)/r_N .
\end{aligned}
$$

Subtract the second from the first. The $g_P x$ and $g_Np$ terms cancel, and so does $p/r_N$:

$$-\frac{x - y}{r_P} - I_C = \frac{x - y}{r_N} + I_C \quad\Longrightarrow\quad I_C = -\frac{v_C}{2}\left(\frac{1}{r_N} + \frac{1}{r_P}\right) = -\frac{v_C}{2\,(r_{O2}\|r_{O4})} .$$

With $C_1\,dv_C/dt = I_C$:

$$v_C(t) \propto e^{-t/\tau}, \qquad \tau = 2C_1\,(r_{O2}\|r_{O4}) \approx \frac{4C_1}{I_{SS}(\lambda_n + \lambda_p)},$$

using $r_O \approx 1/(\lambda I_{SS}/2)$. The factor 2 appears because the floating capacitor's current leaves X and enters Y, so both branches absorb half of the imbalance. This tail is long because $r_O$ is large.

### Step 7 — Numerical example

$I_{SS} = 200\ \mu\mathrm{A}$, NMOS $W/L = 10/0.5$ ($\beta_n = 2.68\ \mathrm{mA/V^2}$), PMOS $W/L = 20/0.5$ ($\beta_p = 1.536\ \mathrm{mA/V^2}$), $\lambda_n = 0.1$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$, $C_1 = 1$ pF.

$$
\begin{aligned}
|V_{ov3}| &\approx \sqrt{I_{SS}/\beta_p} = \sqrt{200\ \mu\mathrm{A}/1.536\ \mathrm{mA/V^2}} = 0.36\ \mathrm{V}, \qquad V_X \approx 3 - 0.8 - 0.36 = 1.84\ \mathrm{V}\ (\lambda = 0),\\
\tau &\approx \frac{4(1\ \mathrm{pF})}{(200\ \mu\mathrm{A})(0.3\ \mathrm{V^{-1}})} = 67\ \mathrm{ns}.
\end{aligned}
$$

A transient solution of the full square-law equations (with λ) gives:

| $t$ | $V_X$ (V) | $V_Y$ (V) | Phase |
|---|---|---|---|
| $0^+$ | 1.907 | −1.09 | start |
| 1 ns | 1.896 | 0.04 | 1 → 2 |
| 10 ns | 1.889 | 0.65 | 2 ($M_2$ triode) |
| 20 ns | 1.887 | 0.79 | 3 ($M_2$ saturated) |
| 50 ns | 1.884 | 1.12 | 3 |
| 100 ns | 1.879 | 1.47 | 3 |
| 500 ns | 1.874 | 1.87 | ≈ final |

The tail time constant is about 80 ns, which equals $2C_1(r_{O2}\|r_{O4})$ with the actual $r_O = (1 + \lambda V_{DS})/(\lambda I_D)$ values (114 kΩ and 61 kΩ). The first-order estimate above gives 67 ns.

### Result

- **$V_X$ is essentially constant** from $t = 0^+$ at its mirror value $V_X \approx V_{DD} - |V_{GS3}| = V_{DD} - 0.8 - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$, because $|I_{D3}| + |I_{D4}| = I_{SS}$ with $M_4$ saturated forces $|I_{D3}| \approx I_{SS}/2$. With $\lambda_p > 0$ it starts a few tens of mV higher and drifts down by $O(\lambda_p|V_{ov,p}|)$ as $C_1$ discharges.
- **$V_Y$ starts at $V_X - V_{DD} = -|V_{GS3}|$** (below ground; about −0.6 V if the drain junction clamps it). It rises quickly at first through the strongly-on $M_1$–$M_2$ path. It slows down when $M_2$ reaches saturation (at $V_Y \approx 1.5 - V_{TH2}(V_P)$, ≈ 0.7–0.8 V). It then creeps toward its final value $V_Y = V_X$, where $C_1$'s voltage reaches zero, with the long time constant $\tau = 2C_1(r_{O2}\|r_{O4}) \approx 4C_1/[I_{SS}(\lambda_n + \lambda_p)]$.

**Common mistake.** Letting $V_X$ jump toward $V_{DD}$ and $V_Y$ sit near 0 for a long time. KCL forces $|I_{D3}| + |I_{D4}| = I_{SS}$ at every instant, and $M_4$ is saturated, so the diode $M_3$ always carries about $I_{SS}/2$ and X stays at its mirror voltage.

**Common mistake.** Letting $V_Y$ settle somewhere other than $V_X$ (for example at 0 V), or assuming the capacitor keeps part of its charge. With equal inputs the only dc state is the balanced one, $V_Y = V_X$, so the capacitor ends fully discharged.

**Common mistake.** Describing the whole response as one exponential with $\tau = C_1/g_m$. The early part is a large-signal discharge through transistors far from their bias point, and the final approach is governed by the output resistances. Without λ, $V_Y$ would stall once $M_2$ saturates.

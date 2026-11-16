# Detailed solution - R008

**Approach.** Identify which diffusion terminal of $M_1$ is the source (for an NMOS, the one at the lower potential), then check whether the gate–source voltage exceeds the threshold, including the body effect from the grounded bulk. It turns out that $M_1$ conducts only over a small range of $V_X$ near zero, where it is saturated; everywhere else it is off.

### Step 1 — Reading the circuit

From the figure:

- the gate of $M_1$ is at $+1$ V;
- the lower diffusion terminal is held at $+1.9$ V by a battery;
- the upper diffusion terminal is driven by $V_X$ (0 to 3 V), and $I_X$ is the current flowing *from* $V_X$ *into* that terminal;
- the bulk is grounded.

Symbols: $\beta = \mu_nC_{ox}W/L$ (device gain factor), $V_{ov} = V_{GS} - V_{TH}$ (overdrive), $V_{SB}$ (source–bulk voltage). The threshold with body effect is

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB}} - 0.9487\right)\ \mathrm{V}.$$

In an NMOS the **source is the diffusion terminal at the lower potential**. The gate (1 V) is lower than the 1.9-V terminal, so the only way to get a positive $V_{GS}$ is for the $V_X$ terminal to be the source *and* to sit well below 1 V.

### Step 2 — $V_X > 1.9$ V: off

Here the 1.9-V terminal is the lower one and acts as the source:

$$V_{GS} = 1\ \mathrm{V} - 1.9\ \mathrm{V} = -0.9\ \mathrm{V} < V_{TH}.$$

$M_1$ is off: $I_X = 0$ and $g_m = 0$.

### Step 3 — $V_X < 1.9$ V: the $V_X$ terminal is the source

Now the $V_X$ terminal is the lower one, so

$$
\begin{aligned}
V_{GS} &= 1 - V_X,\\
V_{DS} &= 1.9 - V_X,\\
V_{SB} &= V_X - 0 = V_X .
\end{aligned}
$$

$M_1$ conducts only if $V_{GS} > V_{TH}$:

$$1 - V_X > 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.9487\right).$$

Raising $V_X$ hurts twice: it lowers $V_{GS}$ directly, and it raises $V_{TH}$ through the body effect. So there is a single turn-off point. Find it by setting the two sides equal and substituting $u = \sqrt{0.9 + V_X}$, so that $V_X = u^2 - 0.9$:

$$
\begin{aligned}
1 - (u^2 - 0.9) &= 0.7 + 0.45u - 0.45\times0.9487\\
1.9 - u^2 &= 0.2731 + 0.45u\\
u^2 + 0.45u - 1.6269 &= 0 .
\end{aligned}
$$

Take the positive root (a square root must be positive):

$$u = \frac{-0.45 + \sqrt{0.45^2 + 4\times1.6269}}{2} = \frac{-0.45 + \sqrt{6.7101}}{2} = \frac{-0.45 + 2.5904}{2} = 1.0702 .$$

Then

$$V_X = u^2 - 0.9 = 1.1453 - 0.9 = 0.245\ \mathrm{V}.$$

Check: at $V_X = 0.245$ V, $V_{TH} = 0.7 + 0.45(1.0702 - 0.9487) = 0.755$ V and $V_{GS} = 1 - 0.245 = 0.755$ V. ✓

So **$M_1$ conducts only for $0 \le V_X < 0.245$ V**. Without the body effect ($V_{TH} = 0.7$ V fixed) the limit would be $1 - V_X = 0.7$, i.e. $V_X = 0.3$ V; the body effect pulls it in by about 55 mV.

For $0.245\ \mathrm{V} < V_X < 1.9$ V the device is off ($I_X = 0$, $g_m = 0$).

### Step 4 — Region of operation while conducting

Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$. In the conducting range:

- the largest overdrive is at $V_X = 0$: $V_{ov} = 1 - 0 - 0.7 = 0.3$ V;
- the smallest $V_{DS}$ is at $V_X = 0.245$ V: $V_{DS} = 1.9 - 0.245 = 1.655$ V.

Since $1.655\ \mathrm{V} \gg 0.3\ \mathrm{V}$, **$M_1$ is saturated whenever it conducts**.

### Step 5 — The current $I_X$

**Square-law saturation current** (channel-length modulation neglected):

$$I_D = \tfrac12\beta\,(V_{GS} - V_{TH})^2 = \tfrac12\beta\,(1 - V_X - V_{TH})^2 .$$

It flows inside $M_1$ from the drain (the 1.9-V terminal) to the source (the $V_X$ terminal), and then *out of* $M_1$ into the $V_X$ source, which is opposite to the arrow defining $I_X$. Hence

$$I_X = -\tfrac12\beta\,(1 - V_X - V_{TH})^2 .$$

**Point by point** (threshold, overdrive, current):

- $V_X = 0$: $V_{TH} = 0.700$ V, $V_{ov} = 1 - 0 - 0.700 = 0.300$ V,
$$I_X = -\tfrac12\beta\,(0.3\ \mathrm{V})^2 = -0.045\beta\ \mathrm{V^2}.$$
- $V_X = 0.1$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.0} - 0.9487) = 0.7 + 0.0231 = 0.723$ V, $V_{ov} = 0.9 - 0.723 = 0.177$ V,
$$I_X = -\tfrac12\beta\,(0.177\ \mathrm{V})^2 = -0.0156\beta\ \mathrm{V^2}.$$
- $V_X = 0.2$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.1} - 0.9487) = 0.7 + 0.0451 = 0.745$ V, $V_{ov} = 0.8 - 0.745 = 0.055$ V,
$$I_X = -\tfrac12\beta\,(0.055\ \mathrm{V})^2 = -0.0015\beta\ \mathrm{V^2}.$$
- $V_X = 0.245$ V: $V_{ov} = 0$, so $I_X = 0$.

**Shape.** Differentiating, $dI_X/dV_X = \beta V_{ov}(1 + \eta)$ with $\eta = \gamma/(2\sqrt{0.9 + V_X}) \approx 0.21$–$0.24$. The slope is $0.37\beta$ (V) at $V_X = 0$ and goes to zero at $V_X = 0.245$ V, so $I_X$ is a small upward-opening parabola that starts at $-0.045\beta$ and **touches zero tangentially** at 0.245 V. Beyond that it stays at zero all the way to 3 V. (In a real device a small subthreshold current continues just beyond 0.245 V, decaying exponentially.)

For scale: with $\beta = 1\ \mathrm{mA/V^2}$ the largest current is $45\ \mu$A, flowing out of the $V_X$ source.

### Step 6 — Transconductance

In saturation the transconductance $g_m = \partial I_D/\partial V_{GS}$ (at fixed $V_{DS}$ and $V_{SB}$) is

$$g_m = \beta\,(V_{GS} - V_{TH}) = \beta\,(1 - V_X - V_{TH}).$$

Values:

$$
\begin{aligned}
V_X = 0:&\quad g_m = \beta\,(0.300\ \mathrm{V}) = 0.30\beta,\\
V_X = 0.1\ \mathrm{V}:&\quad g_m = \beta\,(0.177\ \mathrm{V}) = 0.18\beta,\\
V_X = 0.2\ \mathrm{V}:&\quad g_m = \beta\,(0.055\ \mathrm{V}) = 0.055\beta,\\
V_X \ge 0.245\ \mathrm{V}:&\quad g_m = 0 .
\end{aligned}
$$

Since $V_{ov}$ falls at the rate $1 + \eta \approx 1.2$ per volt of $V_X$, $g_m$ is a nearly straight line from $0.3\beta$ down to zero at 0.245 V, and zero beyond.

| $V_X$ (V) | $V_{TH}$ (V) | $V_{ov}$ (V) | $I_X/\beta$ (V²) | $g_m/\beta$ (V) |
|---|---|---|---|---|
| 0 | 0.700 | 0.300 | −0.045 | 0.30 |
| 0.1 | 0.723 | 0.177 | −0.0156 | 0.18 |
| 0.2 | 0.745 | 0.055 | −0.0015 | 0.055 |
| 0.245 | 0.755 | 0 | 0 | 0 |
| 0.245 – 3 | — | off | 0 | 0 |

### Result

- $M_1$ conducts only for **$V_X \lesssim 0.245$ V** (0.3 V if the body effect were ignored). There the $V_X$ node is the source ($V_{GS} = 1 - V_X$, $V_{SB} = V_X$) and the 1.9-V node is the drain, and $M_1$ is **saturated** ($V_{DS} = 1.9 - V_X \ge 1.65$ V, much larger than the overdrive of at most 0.3 V).
- Current flows from the 1.9-V source into the $V_X$ source, so $I_X$ is **negative**:
$$I_X = -\tfrac12\beta\,(1 - V_X - V_{TH})^2 :\quad -0.045\beta \text{ at } V_X = 0,\ -0.016\beta \text{ at } 0.1\ \mathrm{V},\ -0.0015\beta \text{ at } 0.2\ \mathrm{V},\ 0 \text{ at } 0.245\ \mathrm{V}.$$
- $g_m = \beta(1 - V_X - V_{TH})$ falls from $0.3\beta$ at $V_X = 0$ to zero at about 0.245 V.
- For all larger $V_X$, $M_1$ is off ($V_{GS} < V_{TH}$ with either terminal as source): $I_X = 0$ and $g_m = 0$.

**Common mistake.** Taking the 1.9-V terminal as the source for all $V_X$. That gives $V_{GS} = -0.9$ V and "always off", missing the small-$V_X$ region where the $V_X$ terminal is the lower one and the gate is up to 1 V above it.

**Common mistake.** Getting the sign of $I_X$ wrong. When $M_1$ conducts, its drain is the 1.9-V node and current flows *out* of the $V_X$ terminal into the $V_X$ source, against the arrow, so $I_X < 0$.

**Common mistake.** Ignoring the body effect and placing the turn-off at $V_X = 0.3$ V. Because the source rises above the grounded bulk, $V_{TH}$ increases with $V_X$, and the device turns off earlier, at about 0.245 V.

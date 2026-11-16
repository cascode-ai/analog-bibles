# Detailed solution - R574

**Approach.** $M_1$ charges $C_H$ as a saturated source follower, and its transconductance $g_{m1} = \beta(V_{GS} - V_{TH})$ depends on how far $V_{out}$ has risen. Find $V_{out}(t)$ from the large-signal charging equation, substitute it into $g_{m1}$, and describe the resulting curve.

### Step 1 — Region of operation and $g_m$ in terms of $V_{out}$

After CK rises, the gate and the input are both at $V_{DD} = 3$ V, and the lower-potential terminal, the output, is the source, so $V_{GS} = V_{DS} = V_{DD} - V_{out}$ and $M_1$ is saturated whenever it conducts. Hence

$$g_{m1} = \frac{\partial I_D}{\partial V_{GS}} = \beta(V_{GS} - V_{TH}) = \beta\left(V_{DD} - V_{TH} - V_{out}\right),$$

$$\beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2}.$$

Before $t = 0$, $V_{GS} = 0 < V_{TH}$, so $g_{m1} = 0$.

### Step 2 — $V_{out}(t)$ from the large-signal equation

The drain current charges $C_H$:

$$C_H\frac{dV_{out}}{dt} = \frac12\beta\left(V_{DD} - V_{TH} - V_{out}\right)^2 .$$

With the overdrive $w = V_{DD} - V_{TH} - V_{out}$ and $dw/dt = -dV_{out}/dt$:

$$\frac{dw}{dt} = -\frac{\beta}{2C_H}w^2 .$$

Separating the variables and integrating from $w(0) = w_0 = V_{DD} - V_{TH} = 2.3$ V:

$$
\begin{aligned}
\int_{w_0}^{w}\frac{dw'}{w'^2} &= -\frac{\beta}{2C_H}\int_0^t dt'\\
-\frac1w + \frac1{w_0} &= -\frac{\beta}{2C_H}t\\
w(t) &= \frac{1}{\dfrac{\beta}{2C_H}t + \dfrac{1}{w_0}} .
\end{aligned}
$$

### Step 3 — Transconductance versus time

With $g_{m1} = \beta w$:

$$g_{m1}(t) = \frac{\beta}{\dfrac{\beta}{2C_H}t + \dfrac{1}{w_0}} = \frac{\beta w_0}{1 + \dfrac{\beta w_0}{2C_H}t} = \frac{g_{m0}}{1 + t/\tau_0},$$

where

$$
\begin{aligned}
g_{m0} &= \beta(V_{DD} - V_{TH}) = (5.36\ \mathrm{mA/V^2})(2.3\ \mathrm{V}) = 12.3\ \mathrm{mS}\quad(1/g_{m0} = 81\ \Omega),\\
\tau_0 &= \frac{2C_H}{g_{m0}} = \frac{2\times1\ \mathrm{pF}}{12.3\ \mathrm{mS}} = 162\ \mathrm{ps}.
\end{aligned}
$$

**Why $2C_H/g_{m0}$ and not $C_H/g_{m0}$.** The large-signal current is $I_D = \tfrac12\beta w^2 = \tfrac12g_m w$, only *half* of $g_m$ times the overdrive, so the overdrive collapses at the rate $g_m/(2C_H)$. Treating $1/g_m$ as a large-signal charging resistance would wrongly give 81 ps.

Equivalently, the reciprocal grows linearly with time:

$$\frac{1}{g_{m1}(t)} = \frac{1}{g_{m0}} + \frac{t}{2C_H} = 81\ \Omega + \frac{t}{2\ \mathrm{pF}} .$$

### Step 4 — Values for the sketch

| $t$ (ns) | $g_{m1}$ (mS) | $1/g_{m1}$ (Ω) | $V_{out}$ (V) |
|---|---|---|---|
| 0⁻ | 0 | ∞ | 0 |
| 0⁺ | 12.3 | 81 | 0 |
| 0.16 ($= \tau_0$) | 6.2 | 162 | 1.15 |
| 0.3 | 4.3 | 231 | 1.49 |
| 0.5 | 3.0 | 331 | 1.74 |
| 1.0 | 1.7 | 581 | 1.98 |
| 1.7 | 1.07 | 931 | 2.10 |
| 3.0 | 0.63 | 1581 | 2.18 |
| 5.0 | 0.39 | 2581 | 2.23 |

(For example, at $t = 1$ ns: $g_{m1} = 12.3\ \mathrm{mS}/(1 + 1000/162) = 12.3/7.17 = 1.72$ mS.)

For $t \gg \tau_0$,

$$g_{m1} \approx \frac{g_{m0}\tau_0}{t} = \frac{2C_H}{t},$$

e.g. $2\ \mathrm{pF}/5\ \mathrm{ns} = 0.4$ mS at 5 ns: $g_{m1}$ tends to zero as $V_{out} \to V_{DD} - V_{TH}$, because the overdrive vanishes.

### Step 5 — The sketch

Plot $g_{m1}$ (0 to about 13 mS) against $t$ (0 to a few ns):

- **For $t < 0$**: $g_{m1} = 0$ (switch off).
- **At $t = 0$**: a vertical jump to $g_{m0} = 12.3$ mS (ideal clock edge; $V_{out}$ is still 0).
- **For $t > 0$**: a monotonic **hyperbolic** decay, $g_{m0}/(1 + t/\tau_0)$. It halves at $\tau_0 = 0.16$ ns, its initial tangent (slope $-g_{m0}/\tau_0 = -76$ mS/ns) hits zero at $\tau_0$, and it falls to 1.7 mS at 1 ns and 1.07 mS at 1.7 ns (when $V_{out} = 2.1$ V).
- **Tail**: approaches zero as $2C_H/t$, much more slowly than an exponential; an exponential with the same initial slope would already be at 0.026 mS by 1 ns, against 1.7 mS for the actual curve.

On a plot of $1/g_{m1}$ the same information is a straight line starting at 81 Ω with slope $1/(2C_H) = 0.5\ \Omega/\mathrm{ps}$. Because this resistance grows without bound, no single time constant describes the charging.

### Result

$$g_{m1}(t) = \beta\left(V_{DD} - V_{out} - V_{TH}\right) = \frac{g_{m0}}{1 + t/\tau_0},$$

with $g_{m0} = \beta(V_{DD} - V_{TH}) = 12.3$ mS ($1/g_{m0} = 81\ \Omega$) and $\tau_0 = 2C_H/g_{m0} = 162$ ps.

- $g_m = 0$ before CK rises. It jumps to 12.3 mS at $t = 0$, then decays hyperbolically, not exponentially: 6.2 mS at 0.16 ns, 3.0 mS at 0.5 ns, 1.7 mS at 1 ns, 1.07 mS at 1.7 ns ($V_{out} = 2.1$ V), 0.39 mS at 5 ns.
- For $t \gg \tau_0$, $g_m \approx 2C_H/t \to 0$ as $V_{out} \to V_{DD} - V_{TH}$.
- Equivalently, $1/g_m = 81\ \Omega + t/(2\ \mathrm{pF})$ grows linearly with time, which is why no single time constant describes the charging.

**Common mistake.** Drawing $g_m$ as constant or settling to a nonzero value. In this source-follower configuration the overdrive itself is consumed as the output rises, so $g_m = \beta V_{ov} \to 0$.

**Common mistake.** Drawing an exponential decay with time constant $C_H/g_{m0} = 81$ ps, as if $1/g_m$ were a fixed charging resistor. The equation is quadratic in the overdrive, which gives a $1/(1 + t/\tau_0)$ law with $\tau_0 = 2C_H/g_{m0} = 162$ ps and a long $1/t$ tail.

**Common mistake.** Drawing $g_m$ increasing with time because the output voltage grows. The *overdrive* $V_{DD} - V_{TH} - V_{out}$, and with it the drain current and $g_m$, shrinks.

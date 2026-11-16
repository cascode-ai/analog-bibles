# Detailed solution - R572

**Approach.** First model the switch as a fixed resistor $R_{on} = 1/[\beta(V_{DD} - V_{TH})]$. Then $C_H$ discharges as a simple RC exponential, and the time to reach 1 mV follows from a logarithm. Then redo the calculation with the square-law transistor (a constant-current saturation interval followed by an exact triode-region solution) and compare the two, explaining where the difference comes from.

### Step 1 — Terminals and device constants

After $t_0$ the gate is at $V_{DD} = 3$ V. The grounded input terminal is the lower-potential terminal, so it is the **source**, and $V_{out}$ is the drain:

$$V_{GS} = 3\ \mathrm{V},\qquad V_{DS} = V_{out},\qquad V_{SB} = 0\ \ (\text{no body effect, } V_{TH} = 0.7\ \mathrm{V}).$$

The overdrive is constant: $V_{ov} = V_{DD} - V_{TH} = 2.3$ V. The device constant is

$$\beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2}.$$

### Step 2 — Linear-resistor model

**On-resistance:**

$$R_{on} = \frac{1}{\beta(V_{DD} - V_{TH})} = \frac{1}{(5.36\times10^{-3}\ \mathrm{A/V^2})(2.3\ \mathrm{V})} = \frac{1}{12.33\ \mathrm{mS}} = 81.1\ \Omega .$$

This is the slope of the triode $I_D$–$V_{DS}$ curve at $V_{DS} = 0$ (the deep-triode resistance).

**Time constant:**

$$\tau = R_{on}C_H = (81.1\ \Omega)(1\ \mathrm{pF}) = 81.1\ \mathrm{ps}.$$

**Discharge.** KCL at the output, $C_H\,dV_{out}/dt = -V_{out}/R_{on}$, with $V_{out}(t_0) = 3$ V, gives

$$V_{out}(t) = (3\ \mathrm{V})\,e^{-(t - t_0)/\tau}.$$

**Time to 1 mV.** Set $V_{out} = 1$ mV and take logarithms:

$$
\begin{aligned}
e^{-(t - t_0)/\tau} &= \frac{1\ \mathrm{mV}}{3\ \mathrm{V}} = \frac{1}{3000},\\
t - t_0 &= \tau\ln 3000 = 81.1\ \mathrm{ps}\times8.01 = 649\ \mathrm{ps} \approx 0.65\ \mathrm{ns}.
\end{aligned}
$$

### Step 3 — Square-law model, interval 1: saturation (3 V → 2.3 V)

$M_1$ is saturated while $V_{DS} \ge V_{ov}$, i.e. $V_{out} \ge 2.3$ V. With $\lambda = 0$ the current is constant:

$$I_D = \frac12\beta V_{ov}^2 = \frac12(5.36\ \mathrm{mA/V^2})(2.3\ \mathrm{V})^2 = 14.2\ \mathrm{mA}.$$

The capacitor discharges linearly by $\Delta V = 0.7$ V:

$$t_1 = \frac{C_H\Delta V}{I_D} = \frac{(1\ \mathrm{pF})(0.7\ \mathrm{V})}{14.2\ \mathrm{mA}} = 49.4\ \mathrm{ps}.$$

### Step 4 — Square-law model, interval 2: triode (2.3 V → 1 mV)

In triode, $I_D = \beta[V_{ov}V_{out} - V_{out}^2/2]$, and KCL gives

$$C_H\frac{dV_{out}}{dt} = -\frac{\beta}{2}V_{out}(2V_{ov} - V_{out}).$$

Separate the variables and use partial fractions, $\dfrac{1}{V(2V_{ov} - V)} = \dfrac{1}{2V_{ov}}\left[\dfrac1V + \dfrac{1}{2V_{ov} - V}\right]$:

$$\frac{1}{2V_{ov}}\left[\ln\frac{V}{2V_{ov} - V}\right]_{V_{ov}}^{V_{out}} = -\frac{\beta}{2C_H}(t - t_1).$$

At the lower limit $V = V_{ov}$ the logarithm is $\ln 1 = 0$. With $u = \beta V_{ov}(t - t_1)/C_H = (t - t_1)/81.1\ \mathrm{ps}$:

$$\frac{V_{out}}{2V_{ov} - V_{out}} = e^{-u}, \qquad V_{out} = \frac{2V_{ov}e^{-u}}{1 + e^{-u}} .$$

At $V_{out} = 1$ mV:

$$
\begin{aligned}
e^{-u} &= \frac{0.001}{4.6 - 0.001} = 2.174\times10^{-4},\\
u &= 8.43,\\
t - t_1 &= 8.43\times81.1\ \mathrm{ps} = 684\ \mathrm{ps}.
\end{aligned}
$$

**Total (square law):** $49.4 + 684 = 733$ ps ≈ 0.73 ns.

### Step 5 — Comparison

| Model | Time to reach 1 mV |
|---|---|
| Linear resistor $R_{on} = 81.1\ \Omega$ | 0.649 ns |
| Square law (saturation + triode) | 0.733 ns |

The resistor model is **faster**, by $733 - 649 = 84$ ps, i.e. it underestimates the time by about 11 %.

**Why.** The real transistor always conducts *less* current than the resistor at the same voltage:

- In saturation its current is capped at 14.2 mA. The resistor would draw $3\ \mathrm{V}/81.1\ \Omega = 37$ mA at the start.
- In triode, $I_D = \beta V_{ov}V_{out} - \beta V_{out}^2/2 = V_{out}/R_{on} - \beta V_{out}^2/2$, which is below $V_{out}/R_{on}$ by the quadratic term. The ratio is $I_D/(V_{out}/R_{on}) = 1 - V_{out}/(2V_{ov})$: 0.5 at 2.3 V, 0.78 at 1 V, 0.98 at 0.1 V.
- Only near the end ($V_{out} \ll 2V_{ov} = 4.6$ V) do both models decay with the same 81-ps time constant. So the difference is accumulated early and then just carried along.

**Where the 84 ps comes from**, splitting the transient at 2.3 V:

| Segment | Resistor model | Square law | Difference |
|---|---|---|---|
| 3 V → 2.3 V | $\tau\ln(3/2.3) = 21.6$ ps | 49.4 ps | 27.8 ps |
| 2.3 V → 1 mV | $\tau\ln(2300) = 627.9$ ps | 684.1 ps | 56.2 ps |
| Total | 649.4 ps | 733.5 ps | 84.1 ps |

**Waveforms** (time after $t_0$):

| $t$ (ps) | 0 | 25 | 49 | 100 | 200 | 400 | 649 | 733 |
|---|---|---|---|---|---|---|---|---|
| Resistor model (V) | 3.00 | 2.20 | 1.63 | 0.87 | 0.25 | 0.022 | 0.001 | 0.0004 |
| Square law (V) | 3.00 | 2.65 | 2.30 | 1.60 | 0.62 | 0.060 | 0.0028 | 0.001 |

The square-law curve starts with a straight segment (constant current) and stays above the exponential throughout. At late times both curves have the same slope on a logarithmic scale, but the square-law curve is shifted later by about 84 ps.

### Result

**Linear-resistor model:** $R_{on} = 1/(5.36\ \mathrm{mA/V^2}\times2.3\ \mathrm{V}) = 81.1\ \Omega$, $\tau = 81.1$ ps, and

$$t = \tau\ln\frac{3\ \mathrm{V}}{1\ \mathrm{mV}} = 8.01\,\tau = 0.649\ \mathrm{ns}.$$

**Square-law model:** 49 ps in saturation plus 684 ps in triode, a total of 0.733 ns.

**Comparison:** the resistor model underestimates the time by about 84 ps (about 11 %). The real transistor always conducts less than the resistor: in saturation its current is capped at $\tfrac12\beta(2.3)^2 = 14.2$ mA, whereas the resistor would draw 37 mA at 3 V; in triode its current $\beta[(V_{DD} - V_{TH})V - V^2/2]$ is below $V/R_{on}$. The two coincide only near the end ($V_{out} \ll 2(V_{DD} - V_{TH})$), where both decay with the same 81-ps time constant.

**Common mistake.** Concluding that the resistor model gives a *longer* time. $R_{on}$ is the transistor's *smallest* resistance (at $V_{DS} \to 0$). At any finite $V_{DS}$ the transistor's large-signal resistance $V_{DS}/I_D$ is larger, so the real discharge is slower.

**Common mistake.** Forgetting the logarithm and answering $t = \tau$ (81 ps), or using the wrong ratio, e.g. $\tau\ln 3$ (89 ps). Falling from 3 V to 1 mV is a factor of 3000, so it takes $\ln 3000 \approx 8$ time constants.

**Common mistake.** Using $V_{DD}$ instead of $V_{DD} - V_{TH}$ in $R_{on}$, which gives 62 Ω and 0.50 ns. The channel charge is set by the overdrive $V_{GS} - V_{TH}$, not by the full gate voltage.

# Detailed solution - R191

**Approach.** Each output is loaded by a diode-connected PMOS ($M_3$ or $M_4$) **in parallel with** a PMOS current source ($M_5$ or $M_6$) supplying a fixed $I_P$. The current source takes part of the input device's current, so the diode carries only $I_{D1} - I_P$: its $1/g_m$ is larger, which raises the gain, and it **turns off** as soon as $I_{D1}$ drops below $I_P$. Follow $V_{in1}$ from 1.5 V outward through three regions (both diodes on, one diode off, full steering) and get the rest by symmetry.

### Step 1 — The sweep and the current-source model

Call the left output (drains of $M_1$, $M_3$, $M_5$) X and the right output Y, so $V_{out} = V_X - V_Y$. Since $V_{in2} = 3\ \mathrm{V} - V_{in1}$, the input common mode is fixed at 1.5 V and $\Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3$ V. By symmetry $V_{out}$ is odd about $V_{in1} = 1.5$ V, so analyse $V_{in1} \le 1.5$ V, where $I_{D1} \le I_{D2}$.

$M_5$ delivers $I_P$ while saturated, i.e. for $V_X \le V_{b1} + |V_{THP}|$, and while the diode conducts $V_X \le V_{DD} - |V_{THP}| = 2.2$ V. Assume the bias puts $M_5$'s saturation edge at or above 2.2 V, $V_{b1} + |V_{THP}| \ge V_{DD} - |V_{THP}|$, so $M_5$ is a true current source whenever the diode conducts. Above $V_{b1} + |V_{THP}|$ it enters triode and its current falls, reaching zero at $V_X = V_{DD}$. (If that edge were below 2.2 V, the steep step of Step 4 would be rounded off, but the end levels of Step 5 would not change.)

### Step 2 — KCL at the output: how the current divides

The current drawn by $M_1$ is supplied by $M_5$ and $M_3$ together:

$$I_{D1} = I_P + I_{D3}\quad\Longrightarrow\quad I_{D3} = I_{D1} - I_P .$$

The diode-connected $M_3$ is saturated whenever it conducts, so for $I_{D3} > 0$

$$
\begin{aligned}
I_{D3} &= \tfrac12\beta_p(V_{SG3} - |V_{THP}|)^2\\
V_X &= V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{D1} - I_P)}{\beta_p}} .
\end{aligned}
$$

This requires $I_{D1} \ge I_P$; a diode cannot conduct backwards, so for $I_{D1} < I_P$, $M_3$ is **off**. The same holds on the right with $I_{D2}$. At balance, $I_{D1} = I_{D2} = I_{SS}/2$, so each diode carries

$$I_{D3} = \frac{I_{SS}}{2} - I_P > 0 ,$$

positive because $I_P < I_{SS}/2$.

### Step 3 — Central region: both diodes on

Both diodes conduct while $I_{D1}, I_{D2} \ge I_P$, i.e. (with $I_{D1} + I_{D2} = I_{SS}$) for $|I_{D1} - I_{D2}| \le I_{SS} - 2I_P$. There

$$V_{out} = V_X - V_Y = \sqrt{\frac{2(I_{D2} - I_P)}{\beta_p}} - \sqrt{\frac{2(I_{D1} - I_P)}{\beta_p}},$$

with the input-pair currents from the square-law steering formula

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad I_{D1,2} = \frac{I_{SS} \pm (I_{D1} - I_{D2})}{2}.$$

**Small-signal gain at balance.** In the differential half circuit P is a virtual ground, so $M_1$ draws $g_{m1}\Delta v_{in}/2$ from X; $M_5$ is an open circuit ($\lambda = 0$) and the diode $M_3$ is $1/g_{m3}$ to ac ground.

<!-- diagram: diagram-01.cir -->

KCL at X:

$$
\begin{aligned}
g_{m1}\frac{\Delta v_{in}}{2} + g_{m3}v_X &= 0\\
v_X &= -\frac{g_{m1}}{g_{m3}}\cdot\frac{\Delta v_{in}}{2}.
\end{aligned}
$$

With $v_Y = -v_X$:

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = -\frac{g_{m1}}{g_{m3}}, \qquad g_{m1} = \sqrt{2\beta_n\frac{I_{SS}}{2}}, \qquad g_{m3} = \sqrt{2\beta_p\left(\frac{I_{SS}}{2} - I_P\right)} .$$

Because $g_{m3}$ is evaluated at the **reduced** current $I_{SS}/2 - I_P$, the gain is higher than with plain diode loads by the factor $\sqrt{(I_{SS}/2)/(I_{SS}/2 - I_P)}$, without changing the input pair's bias current.

### Step 4 — The diode on the low-current side turns off: a steep step

Moving $V_{in1}$ down from 1.5 V, $I_{D1}$ decreases. When $I_{D1} = I_P$, i.e. $I_{D2} - I_{D1} = I_{SS} - 2I_P$, the diode $M_3$ reaches zero current, with

$$V_X = V_{DD} - |V_{THP}| = 2.2\ \mathrm{V}, \qquad V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{SS} - 2I_P)}{\beta_p}},$$

so the curve has reached

$$V_{out,\,kink} = \sqrt{\frac{2(I_{SS} - 2I_P)}{\beta_p}} .$$

**Just beyond** ($I_{D1} < I_P$), $M_3$ is off and $M_5$ pushes $I_P$ into X while $M_1$ removes only $I_{D1} < I_P$. The surplus charges X upward until $M_5$ leaves saturation and its current falls to $I_{D1}$, so $V_X$ **shoots up from 2.2 V toward $V_{DD}$**. With an ideal current source this is a vertical step in $V_{out}$; with a real PMOS it is vertical up to $V_{b1} + |V_{THP}|$, after which $M_5$, in triode, lets $V_X$ creep up to $V_{DD}$ as $I_{D1} \to 0$. Meanwhile $V_Y$ keeps falling smoothly, since $M_4$ still conducts.

### Step 5 — Full steering: the end levels

For $|\Delta V_{in}| \ge \Delta V_{max} = \sqrt{2I_{SS}/\beta_n}$, $M_1$ is off ($I_{D1} = 0$) and $M_2$ carries $I_{SS}$.

- **Left output.** $M_3$ is off and $M_5$ must deliver zero current, which a triode PMOS does only with $V_{SD5} = 0$: $V_X = V_{DD}$.
- **Right output.** $M_6$ supplies $I_P$ and the diode $M_4$ carries the rest, $I_{SS} - I_P$:

$$V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{SS} - I_P)}{\beta_p}}.$$

- **Difference:**

$$V_{out} = V_X - V_Y = |V_{THP}| + \sqrt{\frac{2(I_{SS} - I_P)}{\beta_p}}\quad(\text{low } V_{in1}),$$

and the negative of this for high $V_{in1}$. (At the far ends the conducting input device enters triode, but the tail still forces $I_{SS}$ through it, so these levels do not change.)

### Step 6 — Numerical example

Take $I_{SS} = 1$ mA, $I_P = 0.4$ mA, $W/L = 50/0.5$ for all devices, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$ and $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ (example values):

$$
\begin{aligned}
\beta_n &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_p = (38.4\ \mu\mathrm{A/V^2})(100) = 3.84\ \mathrm{mA/V^2},\\
g_{m1} &= \sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
g_{m3} &= \sqrt{2(3.84\ \mathrm{mA/V^2})(0.5 - 0.4)\ \mathrm{mA}} = 0.876\ \mathrm{mS},\\
\text{central gain} &= g_{m1}/g_{m3} = 4.18\quad(\text{plain diodes at } 0.5\ \mathrm{mA}: 3.66/1.96 = 1.87),\\
V_X = V_Y\ \text{at balance} &= 3 - 0.8 - \sqrt{\frac{2(0.1\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = 2.2 - 0.228 = 1.97\ \mathrm{V},\\
V_{out,\,kink} &= \sqrt{\frac{2(1 - 0.8)\ \mathrm{mA}}{3.84\ \mathrm{mA/V^2}}} = \sqrt{0.104}\ \mathrm{V} = 0.32\ \mathrm{V},\\
\text{end level} &= 0.8 + \sqrt{\frac{2(1 - 0.4)\ \mathrm{mA}}{3.84\ \mathrm{mA/V^2}}} = 0.8 + 0.559 = 1.36\ \mathrm{V},\\
\Delta V_{max} &= \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.386\ \mathrm{V}\ \Rightarrow\ \text{full steering for } V_{in1} \le 1.307\ \mathrm{V}.
\end{aligned}
$$

**Where is the kink?** Set $I_{D1} - I_{D2} = -(I_{SS} - 2I_P) = -0.2$ mA in the steering formula:

$$
\begin{aligned}
(6.7\ \mathrm{mA/V^2})\,\Delta V_{in}\sqrt{0.2985 - \Delta V_{in}^2} &= -0.2\ \mathrm{mA}\\
\Delta V_{in}^2(0.2985 - \Delta V_{in}^2) &= (0.02985)^2 = 8.91\times10^{-4}\\
\Delta V_{in}^2 &= \frac{0.2985 - \sqrt{0.2985^2 - 4(8.91\times10^{-4})}}{2} = 3.02\times10^{-3}\ \mathrm{V^2}\\
\Delta V_{in} &= -0.055\ \mathrm{V}\ \Rightarrow\ V_{in1} = 1.5 - 0.0275 = 1.4725\ \mathrm{V}.
\end{aligned}
$$

*A central-region point, $V_{in1} = 1.48$ V ($\Delta V_{in} = -0.04$ V):*

$$
\begin{aligned}
I_{D1} - I_{D2} &= (6.7\ \mathrm{mA/V^2})(-0.04)\sqrt{0.2985 - 0.0016} = -0.146\ \mathrm{mA}\ \Rightarrow\ I_{D1} = 0.427\ \mathrm{mA},\ I_{D2} = 0.573\ \mathrm{mA},\\
V_{out} &= \sqrt{\frac{2(0.173\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} - \sqrt{\frac{2(0.027\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = 0.300 - 0.119 = 0.18\ \mathrm{V}.
\end{aligned}
$$

| $V_{in1}$ (V) | Region | $V_{out}$ (V) |
|---|---|---|
| 0 to 1.307 | full steering ($M_1$ off) | +1.36 |
| 1.307 to 1.4725 | $M_3$ off, X near $V_{DD}$ | from +1.36 down to the top of the step |
| 1.4725 | $M_3$ turns off | near-vertical step between +0.32 and a value close to the end level |
| 1.48 | both diodes on | +0.18 |
| 1.49 | both diodes on | +0.085 |
| 1.50 | balance | 0 |
| > 1.5 | mirror image | negative values, down to −1.36 |

(The shape between the top of the step and full steering depends on $V_{b1}$ and the size of $M_5$, which are not given. For example, if $M_5$ stays saturated up to $V_X = 2.6$ V, the step goes from 0.32 V to about 0.72 V, and $V_{out}$ then rises steeply but continuously to 1.36 V.)

### Result

$V_{out}$ is an **inverting curve**, odd-symmetric about $V_{in1} = 1.5$ V, with three regions on each side:

1. **Central region** (both diodes on, $|I_{D1} - I_{D2}| < I_{SS} - 2I_P$): slope $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}/g_{m3}$. Here $g_{m3} = \sqrt{2\beta_p(I_{SS}/2 - I_P)}$ is evaluated at the reduced diode current, so the gain is higher than with plain diode loads.
2. **Diode cut-off** ($I_{D1} = I_P$, at $|V_{out}| = \sqrt{2(I_{SS} - 2I_P)/\beta_p}$): the diode on the low-current side turns off. That node, driven only by its current source against a smaller NMOS current, shoots up from $V_{DD} - |V_{THP}| = 2.2$ V toward $V_{DD}$, giving a near-vertical step in $V_{out}$.
3. **Flat ends** (full steering): one output at $V_{DD}$, the other at $V_{DD} - |V_{THP}| - \sqrt{2(I_{SS} - I_P)/\beta_p}$, so
$$V_{out} = \pm\left[|V_{THP}| + \sqrt{\frac{2(I_{SS} - I_P)}{\beta_p}}\right],$$
positive for low $V_{in1}$.

Example ($I_{SS} = 1$ mA, $I_P = 0.4$ mA, $W/L = 50/0.5$): central gain ≈ 4.2, kink at $|V_{out}| \approx 0.32$ V, ends at ±1.36 V.

**Common mistake.** Ignoring $M_5$/$M_6$ and drawing the plain diode-load S-curve with ends at $\pm\sqrt{2I_{SS}/\beta_p}$. The current sources change both the central gain (the diodes carry only $I_{SS}/2 - I_P$) and the ends (the off side is pulled to $V_{DD}$).

**Common mistake.** Letting $M_5$/$M_6$ set the gain, $g_{m1}(r_{O1}\parallel r_{O5})$. The diode $M_3$ is in parallel with $M_5$, and its $1/g_{m3}$ is far smaller than $r_{O5}$, so the diode sets the gain while it conducts.

**Common mistake.** Limiting the high output at $V_{DD} - |V_{THP}| = 2.2$ V, as for a pure diode load. Once $I_{D1} < I_P$ the diode is off and the current source pulls the node up to $V_{DD}$.

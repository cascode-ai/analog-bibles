# Detailed solution - R673

**Approach.** Divide each region's $g_m = \partial I_D/\partial V_{GS}$ by $I_D$. In strong inversion $g_m/I_D$ depends on the overdrive (hence on the current); in subthreshold it is constant. Setting the two equal gives the crossing overdrive and drain current.

### Step 1 — Strong inversion (square law)

With $V_{ov} = V_{GS} - V_{TH}$, $I_D = \frac12\mu C_{ox}(W/L)V_{ov}^2$ and $g_m = \mu C_{ox}(W/L)V_{ov}$, so

$$\frac{g_m}{I_D} = \frac{\mu C_{ox}(W/L)V_{ov}}{\frac12\mu C_{ox}(W/L)V_{ov}^2} = \frac{2}{V_{ov}} = \frac{2}{V_{GS} - V_{TH}} .$$

With $V_{ov} = \sqrt{2I_D/[\mu C_{ox}(W/L)]}$ from the current equation,

$$\frac{g_m}{I_D} = \frac{2}{\sqrt{2I_D/[\mu C_{ox}(W/L)]}} = \sqrt{\frac{4\,\mu C_{ox}(W/L)}{2I_D}} = \sqrt{\frac{2\,\mu C_{ox}(W/L)}{I_D}} .$$

In strong inversion $g_m/I_D$ **falls as $1/\sqrt{I_D}$**, because $g_m$ grows only as $\sqrt{I_D}$.

### Step 2 — Subthreshold region

With $I_D = I_0\exp[V_{GS}/(\zeta V_T)]$, where $I_0$ collects the factors independent of $V_{GS}$,

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = I_0\exp\!\left(\frac{V_{GS}}{\zeta V_T}\right)\cdot\frac{1}{\zeta V_T} = \frac{I_D}{\zeta V_T}, \qquad \frac{g_m}{I_D} = \frac{1}{\zeta V_T}\quad\text{(independent of } I_D\text{)}.$$

At $T = 300$ K, $V_T = 25.85$ mV:

$$
\begin{aligned}
\zeta = 1.5:&\quad \frac{g_m}{I_D} = \frac{1}{1.5\times0.02585\ \mathrm{V}} = 25.8\ \mathrm{V^{-1}},\\
\zeta = 1\ \text{(ideal limit)}:&\quad \frac{g_m}{I_D} = \frac{1}{0.02585\ \mathrm{V}} = 38.7\ \mathrm{V^{-1}}.
\end{aligned}
$$

The ideal value $1/V_T$ equals that of a bipolar transistor ($g_m = I_C/V_T$); a MOSFET is worse by $\zeta$, because the gate controls the surface potential only through the divider $C_{ox}/(C_{ox} + C_d)$.

### Step 3 — Where the two are equal

$$
\begin{aligned}
\frac{2}{V_{ov}} &= \frac{1}{\zeta V_T}\\
V_{ov} &= 2\zeta V_T ,
\end{aligned}
$$

and in the square law

$$
\begin{aligned}
I_D &= \frac12\,\mu C_{ox}\,\frac{W}{L}\,(2\zeta V_T)^2 = \frac12\,\mu C_{ox}\,\frac{W}{L}\,4\zeta^2V_T^2\\
&= 2\,\mu C_{ox}\,\frac{W}{L}\,(\zeta V_T)^2 .
\end{aligned}
$$

Check with the current form: $\sqrt{2\mu C_{ox}(W/L)/[2\mu C_{ox}(W/L)(\zeta V_T)^2]} = 1/(\zeta V_T)$. ✓

### Step 4 — Numerical example

NMOS with $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$ at 300 K.

**$\zeta = 1.5$:** $\zeta V_T = 1.5\times25.85\ \mathrm{mV} = 38.8$ mV, so

$$
\begin{aligned}
V_{ov} &= 2\zeta V_T = 2\times38.8\ \mathrm{mV} = 77.6\ \mathrm{mV},\\
I_D &= 2\,(134\ \mu\mathrm{A/V^2})\,\frac{W}{L}\,(0.0388\ \mathrm{V})^2 = 2\times134\times1.504\times10^{-3}\ \mu\mathrm{A}\times\frac{W}{L} = 0.40\ \mu\mathrm{A}\times\frac{W}{L}.
\end{aligned}
$$

**$\zeta = 1$:** $V_{ov} = 51.7$ mV and $I_D = 2(134\ \mu\mathrm{A/V^2})(0.02585\ \mathrm{V})^2(W/L) = 0.18\ \mu\mathrm{A}\times(W/L)$.

For example, a device with $W/L = 100$ and $\zeta = 1.5$ crosses over at about 40 µA.

### Step 5 — What the crossing means

With the crossing current $I_x = 2\mu C_{ox}(W/L)(\zeta V_T)^2$, the square-law value is $g_m/I_D = \frac{1}{\zeta V_T}\sqrt{I_x/I_D}$:

| $I_D/I_x$ | 0.01 | 0.1 | 1 | 10 | 100 |
|---|---|---|---|---|---|
| square law, in units of $1/(\zeta V_T)$ | 10 | 3.16 | 1 | 0.316 | 0.1 |
| subthreshold, in units of $1/(\zeta V_T)$ | 1 | 1 | 1 | 1 | 1 |

- **Above $I_x$** the square law applies and $g_m/I_D$ falls as $1/\sqrt{I_D}$.
- **Below $I_x$** the square law would predict a $g_m/I_D$ *larger* than the subthreshold value, growing without bound as $I_D \to 0$. That is not physical: the real $g_m/I_D$ levels off at $1/(\zeta V_T)$ in weak inversion.
- The crossing therefore marks, roughly, the moderate-inversion boundary. On a log–log plot of $g_m/I_D$ versus $I_D$, the real curve is flat at low current and bends down with slope $-1/2$ above $I_x$.

The most transconductance per unit bias current is obtained in weak inversion, but only at large $W/L$ (large capacitance) and low current density, i.e. low speed: the trade-off behind $g_m/I_D$-based design.

### Result

- Strong inversion: $\dfrac{g_m}{I_D} = \dfrac{2}{V_{GS} - V_{TH}} = \sqrt{\dfrac{2\mu C_{ox}(W/L)}{I_D}}$, decreasing as $1/\sqrt{I_D}$.
- Subthreshold: $\dfrac{g_m}{I_D} = \dfrac{1}{\zeta V_T}$, constant (≈ 26 V⁻¹ for $\zeta = 1.5$ at 300 K; at most $1/V_T \approx 39$ V⁻¹).
- Equal when $V_{GS} - V_{TH} = 2\zeta V_T$, i.e. at
$$I_D = 2\,\mu C_{ox}\,\frac{W}{L}\,(\zeta V_T)^2$$
(≈ $0.40\ \mu\mathrm{A}\times W/L$ for $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\zeta = 1.5$, 300 K).

**Common mistake.** Writing $g_m/I_D = 1/(V_{GS} - V_{TH})$ in strong inversion. The current is *quadratic* in the overdrive, so its logarithmic derivative is $2/V_{ov}$; the mistake moves the crossing to $V_{ov} = \zeta V_T$ and changes the crossing current by a factor of 4.

**Common mistake.** Claiming that $g_m/I_D$ grows with $I_D$ in strong inversion because $g_m$ grows. $g_m$ grows only as $\sqrt{I_D}$, so the ratio *falls* as $1/\sqrt{I_D}$.

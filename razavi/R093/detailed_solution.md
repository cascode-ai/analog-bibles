# Detailed solution - R093

**Approach:** $M_1$ is the common-source input device; its load is $R_D$ in parallel with the PMOS $M_2$, whose gate is held at $V_b$. Write KCL at the output and follow both transistors as $V_{in}$ rises: $M_2$ goes from triode (a small resistor) to saturation (a constant current source), and $M_1$ from cutoff to saturation to triode. The slopes at the two device boundaries follow from the square-law currents.

### Step 1 — The bias of $M_2$ and KCL at the output

$M_2$'s gate drive is fixed, $V_{SG2} = V_{DD} - V_b$, so it is on only if $V_b < 2.2$ V; assume this (if $V_b \ge 2.2$ V, $M_2$ is off and the circuit is a plain resistively loaded CS stage). Its overdrive is $|V_{ov2}| = 2.2\ \mathrm{V} - V_b$ and its saturation current is

$$I_2 = \frac12\beta_2(V_{DD} - V_b - 0.8)^2 = \frac12\beta_2(2.2 - V_b)^2 .$$

It is saturated when $V_{SD2} \ge V_{SG2} - |V_{THP}|$:

$$V_{DD} - V_{out} \ge V_{DD} - V_b - 0.8 \quad\Longleftrightarrow\quad V_{out} \le V_b + 0.8\ \mathrm{V},$$

so $M_2$ is in triode while $V_{out} > V_b + 0.8$ V and saturated once $V_{out} < V_b + 0.8$ V.

KCL at the output ($M_1$ sinks, $R_D$ and $M_2$ source):

$$I_{D1} = \frac{V_{DD} - V_{out}}{R_D} + I_{D2} .$$

### Step 2 — $V_{in} \le 0.7$ V: $M_1$ off

With $I_{D1} = 0$, the two non-negative pull-up currents must both be zero, so $R_D$ has no voltage across it and $M_2$ sits in triode with $V_{SD2} = 0$:

$$V_{out} = V_{DD} = 3\ \mathrm{V}\qquad (V_{in} \le 0.7\ \mathrm{V}).$$

### Step 3 — $M_1$ on, $M_2$ in triode: a gentle fall

Just above 0.7 V, $M_1$ is saturated (its drain is near $V_{DD}$), and $V_{out} > V_b + 0.8$ V keeps $M_2$ in triode:

$$\frac{\beta_1}{2}(V_{in} - 0.7)^2 = \frac{V_{DD} - V_{out}}{R_D} + \beta_2\left[(2.2 - V_b)(V_{DD} - V_{out}) - \tfrac12(V_{DD} - V_{out})^2\right].$$

For a small $V_{SD2}$, $M_2$ is a resistor

$$R_{on2} = \frac{1}{\beta_2(V_{DD} - V_b - 0.8)} ,$$

typically much smaller than $R_D$.

Slope. With $r_{ds2} = 1/[\beta_2(2.2 - V_b - V_{SD2})]$ and $g_{m1} = \beta_1(V_{in} - 0.7)$, the load is $R_D\|r_{ds2}$ and

$$\frac{dV_{out}}{dV_{in}} = -g_{m1}\,(R_D\|r_{ds2}) .$$

Both factors are small here ($g_{m1}$ just after turn-on, $R_D\|r_{ds2} \approx R_{on2}$), so the curve falls gently, steepening as $g_{m1}$ grows and $r_{ds2}$ rises with $V_{SD2}$.

### Step 4 — $M_2$ saturates: the steep, high-gain region

$M_2$ saturates when $V_{out}$ reaches $V_b + 0.8$ V; with $M_1$ still saturated, KCL there reads

$$
\begin{aligned}
\frac{\beta_1}{2}(V_{in} - 0.7)^2 &= \frac{V_{DD} - (V_b + 0.8)}{R_D} + I_2 = \frac{2.2 - V_b}{R_D} + I_2\\
V_{in} &= 0.7 + \sqrt{\frac{2}{\beta_1}\left[\frac{2.2 - V_b}{R_D} + I_2\right]} .
\end{aligned}
$$

Beyond it $M_2$ supplies the constant $I_2$:

$$V_{out} = V_{DD} - R_D\left(I_{D1} - I_2\right) = V_{DD} - R_D\left[\tfrac12\beta_1(V_{in} - 0.7)^2 - I_2\right].$$

With $\lambda = 0$ the saturated $M_2$ is an open circuit for small signals, so the load is $R_D$ alone:

$$\frac{dV_{out}}{dV_{in}} = -g_{m1}R_D .$$

This is the steep part of the curve. The PMOS supplies part of $M_1$'s bias current, so $R_D$ carries only $I_{D1} - I_2$ and can be large without a big DC drop.

### Step 5 — $M_1$ enters triode: flattening

$M_1$ enters triode at

$$V_{out} = V_{in} - 0.7\ \mathrm{V}, \qquad\text{i.e.}\qquad \frac{\beta_1}{2}(V_{in} - 0.7)^2 = \frac{V_{DD} - (V_{in} - 0.7)}{R_D} + I_2 = \frac{3.7 - V_{in}}{R_D} + I_2 .$$

Beyond this point $g_{m1} = \beta_1V_{DS1}$ drops and $M_1$'s channel conductance appears, so the slope magnitude decreases and the curve flattens toward a low value. At $V_{in} = V_{DD}$:

$$\beta_1\left[2.3V_{out} - \tfrac12V_{out}^2\right] = \frac{3 - V_{out}}{R_D} + I_2 ,$$

which stays above 0 because $R_D$ and $M_2$ keep supplying current.

Order of the smooth slope transitions. Usually $M_2$ saturates first and then $M_1$ enters triode. If $V_b$ is low, $M_1$ may reach $V_{out} = V_{in} - 0.7$ V before $V_{out}$ has fallen to $V_b + 0.8$ V; the smooth slope transitions then occur in the opposite order, and the steep $-g_{m1}R_D$ segment is replaced by a gentler one.

### Step 6 — A numerical example

For illustration take $V_b = 1.2$ V, $R_D = 10\ \mathrm{k}\Omega$, $\beta_1 = 2\ \mathrm{mA/V^2}$, $\beta_2 = 0.5\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
I_2 &= \tfrac12(0.5\ \mathrm{mA/V^2})(2.2 - 1.2)^2\ \mathrm{V^2} = 0.25\ \mathrm{mA},\\
R_{on2} &= \frac{1}{(0.5\ \mathrm{mA/V^2})(1.0\ \mathrm{V})} = 2\ \mathrm{k}\Omega .
\end{aligned}
$$

$M_2$ saturates at $V_{out} = 1.2 + 0.8 = 2.0$ V, i.e.

$$V_{in} = 0.7 + \sqrt{\frac{2}{2\ \mathrm{mA/V^2}}\left[\frac{1.0\ \mathrm{V}}{10\ \mathrm{k}\Omega} + 0.25\ \mathrm{mA}\right]} = 0.7 + \sqrt{0.35}\ \mathrm{V} = 0.7 + 0.592 = 1.292\ \mathrm{V}.$$

$M_1$ enters triode where, with $x = V_{in} - 0.7$, $\frac12(2\ \mathrm{mA/V^2})x^2 = (3 - x)/(10\ \mathrm{k}\Omega) + 0.25$ mA, i.e. $x^2 + 0.1x - 0.55 = 0$, so $x = (-0.1 + \sqrt{2.21})/2 = 0.693$ V: $V_{in} = 1.393$ V, $V_{out} = 0.693$ V.

| $V_{in}$ (V) | $V_{out}$ (V) | $M_1$ | $M_2$ | Slope |
|---|---|---|---|---|
| ≤ 0.7 | 3.000 | off | triode ($I = 0$) | 0 |
| 0.9 | 2.931 | sat | triode | −0.7 |
| 1.0 | 2.839 | sat | triode | −1.2 |
| 1.2 | 2.463 | sat | triode | −3.0 |
| 1.292 | 2.000 | sat | → saturation | −11.8 |
| 1.35 | 1.275 | sat | sat | −13.0 ($= -g_{m1}R_D$) |
| 1.393 | 0.693 | → triode | sat | −13.9 |
| 1.5 | 0.435 | triode | sat | −1.0 |
| 2.0 | 0.222 | triode | sat | −0.20 |
| 3.0 | 0.120 | triode | sat | −0.05 |

### Check the transition order

Let $J(v)=(V_{DD}-v)/R_D+|I_{D2}(v)|$ be the total pull-up current, evaluating $M_2$ in its actual region. The general $M_1$ boundary is $\beta_1x^2/2=J(x)$ with $x=V_{in}-0.7\ \mathrm V$. The equation in Step 5 uses saturated $M_2$.

When $v_P=V_b+0.8\ \mathrm V$ lies in $(0,V_{DD})$, substitute $v=v_P$ into KCL to test the PMOS boundary. The saturation trial for $M_1$ gives $x=\sqrt{2J(v_P)/\beta_1}$. If this exceeds $v_P$, $M_1$ is in triode there. Solving $\beta_1(xv_P-v_P^2/2)=J(v_P)$ then gives $x=v_P/2+J(v_P)/(\beta_1v_P)$. Retain only boundaries reached during the 0–3 V sweep. The square-law current and its first derivatives agree at the normal triode–saturation boundaries, so the example bends smoothly as the region changes.

![R093 output characteristic](/q/R093/solution-vout.svg)

### Result

An inverting characteristic with these transition points:

- $V_{in} \le 0.7$ V: $M_1$ off, no current anywhere, $V_{out} = V_{DD}$ ($M_2$ in triode with $V_{SD} = 0$).
- $M_1$ on, $V_{out} > V_b + 0.8$ V: $M_2$ in triode, a low resistance ($\approx 1/[\beta_2(V_{DD} - V_b - 0.8)]$ for small $V_{SD}$) in parallel with $R_D$. $I_{D1} = \frac12\beta_1(V_{in} - 0.7)^2$ flows through this low-resistance combination; the slope $\approx -g_{m1}(R_D\|R_{on2})$ is small.
- $V_{out} < V_b + 0.8$ V: $M_2$ saturated, supplying the constant $I_2 = \frac12\beta_2(V_{DD} - V_b - 0.8)^2$; $V_{out} = V_{DD} - R_D(I_{D1} - I_2)$ with slope $-g_{m1}R_D$, the steep, high-gain part. It starts at $V_{in} = 0.7 + \sqrt{(2/\beta_1)[(2.2 - V_b)/R_D + I_2]}$ (if $M_1$ is still saturated there).
- $V_{out} < V_{in} - 0.7$ V: $M_1$ enters triode, where $\frac12\beta_1(V_{in} - 0.7)^2 = (3.7 - V_{in})/R_D + I_2$; the slope decreases and $V_{out}$ approaches a low value at $V_{in} = 3$ V.
- If $V_b$ is low enough, the last two smooth slope transitions swap order; if $V_b \ge 2.2$ V, $M_2$ is off and the stage is an ordinary resistively loaded CS amplifier.

**Common mistake:** Treating $M_2$ as a current source from the start, which gives a steep fall right after 0.7 V. While $V_{out}$ is close to $V_{DD}$, $M_2$ is in triode and acts as a small resistor, so the initial fall is gentle.

**Common mistake:** Letting $V_{out}$ drop below $V_{DD}$ before $M_1$ turns on. With $M_1$ off nothing sinks current from the output, so $V_{out} = V_{DD}$ exactly.

**Common mistake:** Treating $M_2$ as an input device. Its gate is at the fixed $V_b$; only its $V_{SD}$ changes, deciding between triode and saturation.

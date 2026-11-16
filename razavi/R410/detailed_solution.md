# Detailed solution - R410

**Approach.** In the modified circuit ([Fig. 1]) the error voltage $v_{in} - v_F$ is formed by a differential pair $M_1$–$M_4$ instead of by the source of $M_1$, and the feedback network drives only the gate of $M_4$. We find the bias point, compute the open-loop gain and the loop gain of this series–shunt loop, and from them the closed-loop gain and output resistance. Then we repeat the analysis briefly for the original circuit ([Fig. 2]) and compare.

### Step 1 — The modified circuit and its bias point

Reading [Fig. 1]:

- $M_1$ (gate $V_{in}$) and $M_4$ form an NMOS differential pair with a 1-mA tail current source at their common source node P.
- The drain of $M_1$ is node X, loaded by the PMOS current source $M_2$. The drain of $M_4$ goes to $V_{DD}$.
- $M_3$ (PMOS, gate X) drives $V_{out}$, with $R_{D2}$ to ground.
- The gate of $M_4$ is node F, the junction of $R_F$ (from $V_{out}$) and $R_{S1}$ (to $V_{b2} = 1.5$ V).

**KCL at F.** The gate of $M_4$ draws no current, so $R_F$ and $R_{S1}$ carry the same current:

$$\frac{V_{out} - V_F}{R_F} = \frac{V_F - 1.5}{R_{S1}} \ \Longrightarrow\ V_F = \frac{V_{out} + 1.5}{2}\quad(R_F = R_{S1}).$$

**KCL at $V_{out}$** ($M_3$ supplies 0.5 mA; mA, kΩ, V):

$$
\begin{aligned}
0.5 &= \frac{V_{out}}{3} + \frac{V_{out} - V_F}{3}\ \Longrightarrow\ 1.5 = 2V_{out} - V_F = 2V_{out} - \frac{V_{out} + 1.5}{2}\\
3 &= 3V_{out} - 1.5\ \Longrightarrow\ V_{out} = 1.5\ \mathrm{V},\quad V_F = 1.5\ \mathrm{V}.
\end{aligned}
$$

**Input dc level.** $M_1$ and $M_4$ are identical, share the source node P and carry 0.5 mA each, so they have equal $V_{GS}$, and $V_{in} = V_F = 1.5$ V. Solving $V_{GS} = V_{TH}(V_{SB} = V_P) + 0.273$ V with $V_P = 1.5 - V_{GS}$ by iteration gives $V_{GS} \approx 1.07$ V and $V_P \approx 0.43$ V. (The overdrive is $\sqrt{2(0.5\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.273$ V.)

**Saturation of $M_1$.** $V_X = V_{DD} - |V_{GS3}| = 3 - (0.8 + 0.51) = 1.69$ V, so $V_{DS1} = 1.69 - 0.43 = 1.26\ \mathrm{V} > 0.273$ V: $M_1$ is comfortably saturated.

### Step 2 — Small-signal parameters

$$
\begin{aligned}
g_{m1} = g_{m4} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
g_{m3} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 1.96\ \mathrm{mS},\\
r_{O1} = r_{O4} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad
r_{O2} = r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.
\end{aligned}
$$

The tail source is taken as ideal.

### Step 3 — Feedback structure

- **Sensing:** $R_F$–$R_{S1}$ are connected across the output and sense $V_{out}$ (shunt). $V_{b2}$ is a dc voltage, i.e. ac ground.
- **Return:** they apply $v_F = \beta v_{out}$ to the gate of $M_4$. The pair responds to $v_{in} - v_F$, so the returned voltage subtracts in series from the input (series mixing).
- **Feedback factor:** the gate of $M_4$ draws no current, so the divider is unloaded at its output:
$$\beta = \frac{R_{S1}}{R_{S1} + R_F} = 0.5 .$$
- **Loading:** at the output the network presents $R_F + R_{S1} = 6\ \mathrm{k\Omega}$ to ground; at the input side it loads nothing.

### Step 4 — The differential pair: the body effect cancels

Neglect $r_{O1}$, $r_{O4}$ for this step. With the bulks grounded, the drain currents are

$$i_1 = g_m(v_{in} - v_P) - g_{mb}v_P, \qquad i_4 = g_m(v_F - v_P) - g_{mb}v_P .$$

The ideal tail carries no signal current, so KCL at P gives $i_1 + i_4 = 0$:

$$
\begin{aligned}
g_m(v_{in} + v_F) - 2(g_m + g_{mb})v_P &= 0 \ \Longrightarrow\ v_P = \frac{g_m(v_{in} + v_F)}{2(g_m + g_{mb})},\\
i_1 &= g_mv_{in} - (g_m + g_{mb})v_P = g_mv_{in} - \frac{g_m(v_{in} + v_F)}{2} = \frac{g_m}{2}(v_{in} - v_F).
\end{aligned}
$$

$g_{mb}$ drops out: both devices see the same source and bulk, so the body effect only affects the common-mode level of P. With $r_{O1} = r_{O4}$ the same symmetry holds exactly when the drain of $M_1$ is held at ac ground, so the short-circuit current into X is $(g_m/2)(v_{in} - v_F)$.

**Resistance at X.** Looking down into the drain of $M_1$, the source of $M_1$ sees $M_4$'s source, $1/(g_m + g_{mb})\parallel r_{O4}$, as degeneration. With the degeneration formula, $r_{O1}\big[1 + (g_m + g_{mb})R_s\big] + R_s$ with $R_s = 1/(g_m + g_{mb} + 1/r_{O4})$:

$$
\begin{aligned}
R_{d1} &= r_{O1} + R_s\big[(g_m + g_{mb})r_{O1} + 1\big] = r_{O1}\left[1 + \frac{g_m + g_{mb} + 1/r_{O1}}{g_m + g_{mb} + 1/r_{O4}}\right]\\
&= 2r_{O1} = 40\ \mathrm{k\Omega}\quad(\text{since } r_{O1} = r_{O4}),
\end{aligned}
$$

$$R_X = r_{O2}\parallel R_{d1} = \frac{10\times40}{10 + 40}\ \mathrm{k\Omega} = 8\ \mathrm{k\Omega}.$$

### Step 5 — Open-loop gain, loop gain, closed-loop gain and $R_{out}$

**First stage** (pair to X):

$$\frac{v_X}{v_{in} - v_F} = -\frac{g_m}{2}R_X = -(1.83\ \mathrm{mS})(8\ \mathrm{k\Omega}) = -14.6 .$$

**Second stage** ($M_3$ into $R_L$):

$$
\begin{aligned}
R_L &= R_{D2}\parallel(R_F + R_{S1})\parallel r_{O3} = 3\parallel6\parallel10\ \mathrm{k\Omega} = \frac{1}{0.6}\ \mathrm{k\Omega} = 1.67\ \mathrm{k\Omega},\\
\frac{v_{out}}{v_X} &= -g_{m3}R_L = -(1.96\ \mathrm{mS})(1.67\ \mathrm{k\Omega}) = -3.27 .
\end{aligned}
$$

**Open-loop gain and loop gain:**

$$
\begin{aligned}
A_{open} &= (-14.6)(-3.27) = 47.8,\\
T &= \beta A_{open} = 0.5\times47.8 = 23.9 .
\end{aligned}
$$

**Closed-loop gain and output resistance** (series–shunt: gain divided by $1 + T$, output resistance divided by $1 + T$):

$$
\begin{aligned}
A_v &= \frac{A_{open}}{1 + T} = \frac{47.8}{24.9} = 1.92,\\
R_{out} &= \frac{R_L}{1 + T} = \frac{1667\ \Omega}{24.9} = 67\ \Omega .
\end{aligned}
$$

Because the gate of $M_4$ draws no current and the tail is ideal, this decomposition contains no approximation: a full nodal analysis with every $r_O$ and $g_{mb}$ gives the same 1.92 and 67 Ω. If only the load resistances $r_{O2}$, $r_{O3}$ are kept ($R_X = 10\ \mathrm{k\Omega}$), then $A_{open} = 59.8$, $T = 29.9$, $A_v = 1.94$ and $R_{out} = 54\ \Omega$.

### Step 6 — The original circuit (Fig. 2) for comparison

In [Fig. 2] the source of $M_1$ (node S) connects to $R_{S1}$ (to ground) and $R_F$. KCL with 0.5 mA injected into S and into $V_{out}$ again gives $V_S = V_{out} = 1.5$ V, so $V_{SB1} = 1.5$ V, $\eta = \gamma/(2\sqrt{0.9 + 1.5}) = 0.145$ and $g_{mb1} = 0.53$ mS. The required input level is $V_{in} = 1.5 + V_{GS1} \approx 2.74$ V. With $V_X = 1.69$ V, $M_1$ has only $V_{DS1} \approx 0.19$ V, which is marginal; saturation is assumed as instructed.

**Open loop** (two-port loading: $R_{S1}\parallel R_F = 1.5\ \mathrm{k\Omega}$ degenerates $M_1$; $R_F + R_{S1} = 6\ \mathrm{k\Omega}$ loads the output):

$$
\begin{aligned}
G_{m1} &= \frac{g_{m1}}{1 + (g_{m1} + g_{mb1})(1.5\ \mathrm{k\Omega}) + 1.5/20} = \frac{3.66}{7.36}\ \mathrm{mS} = 0.497\ \mathrm{mS},\\
R_X &= r_{O2}\parallel\big[(7.29)(20\ \mathrm{k\Omega}) + 1.5\ \mathrm{k\Omega}\big] = 10\parallel147\ \mathrm{k\Omega} = 9.36\ \mathrm{k\Omega},\\
A_{open} &= (0.497\ \mathrm{mS})(9.36\ \mathrm{k\Omega})\times3.27 = 4.66\times3.27 = 15.2 .
\end{aligned}
$$

**Loop gain.** The source of $M_1$ acts on the drain current with weight $g_{m1} + g_{mb1}$, so the fed-back voltage is scaled by $1 + \eta$: $T = (1 + \eta)\beta A_{open} = 1.145\times0.5\times15.2 = 8.7$.

$$A_v = \frac{15.2}{9.7} = 1.57\ \ (\text{exact nodal analysis: }1.55),\qquad R_{out} = \frac{1.67\ \mathrm{k\Omega}}{9.7} = 0.17\ \mathrm{k\Omega}\ \ (\text{exact: }0.166\ \mathrm{k\Omega}).$$

### Step 7 — Comparison and explanation

| | Fig. 2 (original) | Fig. 1 (with $M_4$) |
|---|---|---|
| effective input transconductance | 0.50 mS (degenerated $M_1$) | 1.83 mS ($g_m/2$ of the pair) |
| resistance at X | 9.4 kΩ | 8 kΩ |
| open-loop gain | 15.2 | 47.8 |
| loop gain | ≈ 8.7 | ≈ 24 |
| closed-loop gain | ≈ 1.55 | ≈ 1.92 |
| output resistance | ≈ 0.17 kΩ | ≈ 67 Ω |
| ideal limit of the gain | $1/[(1 + \eta)\beta] = 1.75$ | $1/\beta = 1 + R_F/R_{S1} = 2$ |

Why the modified circuit is better:

- **No source degeneration.** In Fig. 2, $M_1$'s transconductance is divided by $1 + (g_m + g_{mb})(1.5\ \mathrm{k\Omega}) \approx 7.3$ by the feedback network's own resistance. In Fig. 1 the network drives a gate, so the pair delivers $g_m/2$ even though only half of $g_m$ is used.
- **No loading at the input side.** The divider is not loaded by a source terminal, so $\beta$ is exactly 0.5 and no signal current from $M_1$ flows through $R_F$.
- **Body effect cancels.** In the pair, $g_{mb}$ affects only the common-mode level of P, so the subtraction $v_{in} - v_F$ is exact, and the gain tends to the ideal $1 + R_F/R_{S1} = 2$ rather than 1.75.

As a result, the loop gain rises from about 9 to about 24, the gain moves from 1.55 to 1.92, and $R_{out}$ drops by a factor of about 2.5 (about 3 if only $r_{O2}$, $r_{O3}$ are kept). The price is an extra transistor, an extra 0.5 mA of supply current, a tail current source and the extra bias $V_{b2}$. A side benefit is the lower input level (1.5 V instead of 2.74 V), which leaves $M_1$ well inside saturation.

### Result

Modified circuit (Fig. 1): $A_v \approx 1.92$ and $R_{out} \approx 67\ \Omega$ (1.94 and 54 Ω if only $r_{O2}$, $r_{O3}$ are kept), from $A_{open} \approx 48$ and loop gain $\approx 24$.

Original circuit (Fig. 2): $A_v \approx 1.55$ and $R_{out} \approx 0.17\ \mathrm{k\Omega}$ (about 1.77 if its body effect is ignored), from a loop gain of about 8.7.

The modified circuit is much closer to the ideal gain $1 + R_F/R_{S1} = 2$ and has a 2.5–3 times lower output resistance, because removing the source degeneration and the body-effect penalty raises the loop gain about threefold.

**Common mistake.** Using the full $g_m$ for the first stage of the modified circuit. The input signal is shared by the two halves of the pair, so the drain current of $M_1$ is $(g_m/2)(v_{in} - v_F)$.

**Common mistake.** Concluding that inserting $M_4$ lowers the loop gain because "half the transconductance is lost". In the original circuit the transconductance is divided by about 7.3 by the source degeneration, which is far worse than the factor 2 of the pair.

**Common mistake.** Keeping the body-effect correction in the modified circuit. With an ideal tail the body effect of $M_1$ and $M_4$ cancels for the differential signal, so the ideal gain is exactly $1/\beta = 2$.

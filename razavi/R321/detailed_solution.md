# Detailed solution - R321

**Approach.** With $R_G$ in series with the gate, the gate is no longer an ac ground but a third node, coupled to the source through $C_{GS}$ and to the drain through $C_{GD}$. Write KCL at the source S, gate G and output D, use $v_{gs}$ as the main unknown, and eliminate the node voltages one at a time to reach a second-order transfer function. The limiting cases $C_{GD} = 0$ and $R_G = 0$ check the result.

### Step 1 — Small-signal model

<!-- diagram: diagram-01.cir -->

Call the source, gate and drain (output) of $M_1$ S, G and D. $R_S$ runs from the input to S, $R_D$ from D to ac ground, $R_G$ from G to ac ground ($V_b$); $C_{GS}$ connects G and S, $C_{GD}$ G and D; and the channel current $g_mv_{gs} = g_m(V_G - V_S)$ flows from D to S ($\lambda = \gamma = 0$: no $r_O$, no $g_{mb}$).

### Step 2 — The three KCL equations

With $v_{gs} = V_G - V_S$, summing the currents arriving at each node:

$$\frac{V_{in} - V_S}{R_S} + (V_G - V_S)C_{GS}s + g_m(V_G - V_S) = 0 , \qquad (1)$$

$$-\frac{V_G}{R_G} + (V_S - V_G)C_{GS}s + (V_{out} - V_G)C_{GD}s = 0 , \qquad (2)$$

$$-\frac{V_{out}}{R_D} + (V_G - V_{out})C_{GD}s - g_m(V_G - V_S) = 0 . \qquad (3)$$

### Step 3 — Express $V_S$ and $V_G$ through $v_{gs}$

From (1), $V_{in} - V_S = -R_S(g_m + C_{GS}s)\,v_{gs}$, so

$$V_S = V_{in} + R_S(g_m + C_{GS}s)\,v_{gs},$$

and $V_G = V_S + v_{gs}$:

$$V_G = V_{in} + a\,v_{gs}, \qquad a \equiv 1 + g_mR_S + R_SC_{GS}s. \qquad (4)$$

### Step 4 — Relate $V_G$ to $v_{gs}$ using nodes G and D

Rewriting (2) and (3), with $V_S - V_G = -v_{gs}$:

$$V_G\left(\frac{1}{R_G} + C_{GD}s\right) = -C_{GS}s\,v_{gs} + C_{GD}s\,V_{out}\quad\Longrightarrow\quad V_{out} = \frac{V_G(1 + R_GC_{GD}s) + R_GC_{GS}s\,v_{gs}}{R_GC_{GD}s}, \qquad (5)$$

$$V_{out}(1 + R_DC_{GD}s) = R_D\left(C_{GD}s\,V_G - g_mv_{gs}\right). \qquad (6)$$

Substitute (5) into (6) and multiply both sides by $R_GC_{GD}s$:

$$\left[V_G(1 + R_GC_{GD}s) + R_GC_{GS}s\,v_{gs}\right](1 + R_DC_{GD}s) = R_GR_DC_{GD}s\left(C_{GD}s\,V_G - g_mv_{gs}\right).$$

Collecting the $V_G$ terms on the left (the $s^2$ terms cancel) and the $v_{gs}$ terms on the right:

$$(1 + R_GC_{GD}s)(1 + R_DC_{GD}s) - R_GR_DC_{GD}^2s^2 = 1 + (R_G + R_D)C_{GD}s \equiv P ,$$

$$Q \equiv R_Gs\left[C_{GS}(1 + R_DC_{GD}s) + g_mR_DC_{GD}\right],$$

$$P\,V_G = -Q\,v_{gs}. \qquad (7)$$

### Step 5 — Solve for $v_{gs}$

Insert (4) into (7):

$$
\begin{aligned}
P\,(V_{in} + a\,v_{gs}) &= -Q\,v_{gs}\\
v_{gs}(aP + Q) &= -P\,V_{in}\\
v_{gs} &= -\frac{P}{aP + Q}\,V_{in}.
\end{aligned}
$$

### Step 6 — The output voltage

From (6) with $V_G = -Qv_{gs}/P$ from (7):

$$V_{out} = \frac{R_D}{1 + R_DC_{GD}s}\left(-\frac{QC_{GD}s}{P} - g_m\right)v_{gs} = \frac{-R_D\,(QC_{GD}s + g_mP)}{P(1 + R_DC_{GD}s)}\,v_{gs}.$$

Inserting $v_{gs}$, the factor $P$ cancels:

$$\frac{V_{out}}{V_{in}} = \frac{R_D\,(QC_{GD}s + g_mP)}{(aP + Q)(1 + R_DC_{GD}s)}.$$

The numerator factors:

$$
\begin{aligned}
QC_{GD}s + g_mP &= R_GC_{GS}C_{GD}s^2(1 + R_DC_{GD}s) + g_mR_GR_DC_{GD}^2s^2 + g_m\left[1 + (R_G + R_D)C_{GD}s\right]\\
&= R_GC_{GS}C_{GD}s^2(1 + R_DC_{GD}s) + g_m(1 + R_GC_{GD}s)(1 + R_DC_{GD}s)\\
&= (1 + R_DC_{GD}s)\left[g_m(1 + R_GC_{GD}s) + R_GC_{GS}C_{GD}s^2\right],
\end{aligned}
$$

and $(1 + R_DC_{GD}s)$ cancels against the denominator:

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D\left(1 + R_GC_{GD}s + \dfrac{R_GC_{GS}C_{GD}}{g_m}s^2\right)}{aP + Q}.$$

Expanding the denominator,

$$
\begin{aligned}
aP + Q &= (1 + g_mR_S + R_SC_{GS}s)\left[1 + (R_G + R_D)C_{GD}s\right] + R_GC_{GS}s + g_mR_GR_DC_{GD}s + R_GR_DC_{GS}C_{GD}s^2\\
&= (1 + g_mR_S) + b_1s + b_2s^2,
\end{aligned}
$$

$$
\begin{aligned}
b_1 &= (1 + g_mR_S)(R_G + R_D)C_{GD} + R_SC_{GS} + R_GC_{GS} + g_mR_GR_DC_{GD}\\
&= (R_S + R_G)C_{GS} + \left[R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)\right]C_{GD},\\
b_2 &= R_S(R_G + R_D)C_{GS}C_{GD} + R_GR_DC_{GS}C_{GD} = (R_DR_G + R_DR_S + R_GR_S)\,C_{GS}C_{GD}.
\end{aligned}
$$

### Step 7 — Checks and interpretation

**dc gain.** At $s = 0$: $g_mR_D/(1 + g_mR_S)$, the usual common-gate gain with the input divider $R_S$ versus $1/g_m$.

**$C_{GD} = 0$.** Numerator $g_mR_D$, denominator $1 + g_mR_S + (R_S + R_G)C_{GS}s$:

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{1 + g_mR_S + (R_S + R_G)C_{GS}s},$$

the known result: $R_G$ adds to the resistance that charges $C_{GS}$ and lowers the input pole.

**$R_G = 0$.** Numerator $g_mR_D$; denominator $1 + g_mR_S + [R_SC_{GS} + (1 + g_mR_S)R_DC_{GD}]s + R_SR_DC_{GS}C_{GD}s^2 = (1 + g_mR_S + R_SC_{GS}s)(1 + R_DC_{GD}s)$, the ordinary CG stage with an input pole and an output pole.

**Poles.** Two poles, from $(1 + g_mR_S) + b_1s + b_2s^2 = 0$; if they are far apart, the dominant one is $\omega_{p1}\approx(1 + g_mR_S)/b_1$. $R_G$ enters $b_1$ through the Miller-like term $g_mR_DR_GC_{GD}$: the gate is no longer held still, so $C_{GD}$ sees the amplified drain swing through $R_G$.

**Zeros.** Two zeros, the roots of

$$R_GC_{GS}C_{GD}s^2 + g_mR_GC_{GD}s + g_m = 0 .$$

Their sum is $-g_m/C_{GS} < 0$ and their product $g_m/(R_GC_{GS}C_{GD}) > 0$, so both lie in the **left half plane** (real or complex). They are created by $R_G$: as $R_G\to0$ their product goes to infinity and they move out to infinity.

### Result

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D\left(1 + R_GC_{GD}s + \dfrac{R_GC_{GS}C_{GD}}{g_m}s^2\right)}{1 + g_mR_S + b_1s + b_2s^2}$$

$$b_1 = (R_S + R_G)C_{GS} + \left[R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)\right]C_{GD}, \qquad b_2 = (R_DR_G + R_DR_S + R_GR_S)\,C_{GS}C_{GD}.$$

Low-frequency gain $g_mR_D/(1 + g_mR_S)$; two poles; two left-half-plane zeros produced by $R_G$. For $C_{GD} = 0$ it reduces to $g_mR_D/[1 + g_mR_S + (R_S + R_G)C_{GS}s]$, and for $R_G = 0$ to $g_mR_D/[(1 + g_mR_S + R_SC_{GS}s)(1 + R_DC_{GD}s)]$.

**Common mistake.** Treating the gate as an ac ground (ignoring $R_G$). With $R_G$ the gate moves: $C_{GS}$ charges through $R_S + R_G$ and $C_{GD}$ couples the drain swing back to the gate, so the poles shift and two zeros appear.

**Common mistake.** A first-order result that keeps $C_{GD}$ only as a grounded capacitance at the output. Through $R_G$, $C_{GD}$ is not grounded at its gate end and interacts with $C_{GS}$, so the transfer function is second order.

**Common mistake.** Giving the dc gain as $g_mR_D$. $R_S$ forms a divider with the input resistance $1/g_m$, so the dc gain is $g_mR_D/(1 + g_mR_S)$.

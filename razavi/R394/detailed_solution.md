# Detailed solution - R394

**Approach.** Break the loop at the gate of $M_2$: drive it with a test voltage $v_t$ ($V_{in} = 0$) and follow the signal through $M_2$, the output node, $R_F$, the source of $M_1$ and back to X; then $T = -v_X/v_t$. No current flows into a MOS gate, so breaking the loop there changes no loading and $T$ is exact. Then simplify $g_{21}A_{v,open}$ and compare the two term by term.

### Step 1 — The broken loop

Call the source of $M_1$ node S. With $V_{in} = 0$ and $\lambda = \gamma = 0$:

- $M_2$: source at ac ground, so $v_{sg2} = -v_t$, and it drives $-g_{m2}v_t$ into the output node;
- output node: $R_{D2}$ to ground and $R_F$ to S;
- node S: $R_S$ to ground and the source of $M_1$ (gate at ac ground), which looks like $1/g_{m1}$;
- $M_1$: carries $-g_{m1}v_S$ from X to S; $R_{D1}$ from X to ac ground.

<!-- diagram: diagram-01.cir -->

The resistance from S to ground, including the source of $M_1$, is

$$R_p = R_S\parallel\frac{1}{g_{m1}} = \frac{R_S}{1 + g_{m1}R_S}.$$

### Step 2 — Around the loop

The current $-g_{m2}v_t$ flows into $R_{D2}$ in parallel with $R_F + R_p$; $R_F$ and $R_p$ divide the output down to S; and KCL at X ($-v_X/R_{D1} = -g_{m1}v_S$) gives the common-gate gain of $M_1$:

$$v_{out} = -g_{m2}v_t\left[R_{D2}\parallel(R_F + R_p)\right], \qquad v_S = \frac{R_p}{R_F + R_p}\,v_{out}, \qquad v_X = g_{m1}R_{D1}\,v_S .$$

Combining:

$$v_X = -g_{m1}g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_p)\right]\frac{R_p}{R_F + R_p}\,v_t .$$

### Step 3 — The loop gain

$$T = -\frac{v_X}{v_t} = g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_p)\right]\frac{g_{m1}R_p}{R_F + R_p}.$$

$T > 0$: raising $v_t$ cuts $M_2$'s current, $V_{out}$ and $V_S$ fall, $M_1$ conducts more and $V_X$ falls, so the feedback is negative.

With $R_p = R_S/(1 + g_{m1}R_S)$, the divider factor is

$$\frac{g_{m1}R_p}{R_F + R_p} = \frac{g_{m1}R_S}{R_F(1 + g_{m1}R_S) + R_S} = \frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.$$

Combining the parallel combination with the divider instead,

$$\left[R_{D2}\parallel(R_F + R_p)\right]\frac{R_p}{R_F + R_p} = \frac{R_{D2}R_p}{R_{D2} + R_F + R_p} = \frac{R_{D2}R_S}{(R_{D2} + R_F)(1 + g_{m1}R_S) + R_S},$$

so

$$T = \frac{g_{m1}g_{m2}R_{D1}R_{D2}R_S}{R_{D2} + R_F + R_S + g_{m1}R_S(R_{D2} + R_F)}.$$

### Step 4 — The two-port estimate, simplified

$$g_{21}A_{v,open} = \frac{R_S}{R_F + R_S}\cdot\frac{R_{D1}}{R_F\parallel R_S + 1/g_{m1}}\cdot g_{m2}\left[R_{D2}\parallel(R_F + R_S)\right].$$

With $R_F\parallel R_S = R_FR_S/(R_F + R_S)$:

$$\frac{R_{D1}}{R_F\parallel R_S + 1/g_{m1}} = \frac{g_{m1}R_{D1}}{1 + g_{m1}R_FR_S/(R_F + R_S)} = \frac{g_{m1}R_{D1}(R_F + R_S)}{R_F + R_S + g_{m1}R_FR_S},$$

and multiplying by $R_S/(R_F + R_S)$:

$$g_{21}A_{v,open} = g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_S)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.$$

### Step 5 — Comparison

$$
\begin{aligned}
T &= g_{m2}R_{D1}\left[R_{D2}\parallel\left(R_F + R_S\parallel\tfrac{1}{g_{m1}}\right)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S},\\
g_{21}A_{v,open} &= g_{m2}R_{D1}\left[R_{D2}\parallel\left(R_F + R_S\right)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.
\end{aligned}
$$

The input-side factors are **identical**; only the load on the output node differs: $R_F$ in series with $R_S\parallel(1/g_{m1})$ in the true loop, $R_F + R_S$ in the estimate. Since $R_S\parallel(1/g_{m1}) < R_S$, the true load is heavier and $T < g_{21}A_{v,open}$.

**Numerical example** (illustrative): all resistors 2 kΩ, $g_{m1} = 4.5$ mS, $g_{m2} = 2.8$ mS, so $g_{m1}R_S = 9$ and $R_p = 2\ \mathrm{k}\Omega/10 = 200\ \Omega$:

$$
\begin{aligned}
T &= \frac{(4.5\ \mathrm{m})(2.8\ \mathrm{m})(2\ \mathrm{k})(2\ \mathrm{k})(2\ \mathrm{k})}{2\ \mathrm{k} + 2\ \mathrm{k} + 2\ \mathrm{k} + 9\,(4\ \mathrm{k})} = \frac{100\,800}{42\,000} = 2.4,\\
g_{21}A_{v,open} &= (2.8\ \mathrm{m})(2\ \mathrm{k})\,(2\ \mathrm{k}\parallel4\ \mathrm{k})\,\frac{9}{4\ \mathrm{k} + 18\ \mathrm{k}} = 5.6\times1333\times4.09\times10^{-4} = 3.05 .
\end{aligned}
$$

The two-port estimate is about 25 % too high here.

### Step 6 — Why the two results differ

- **Breaking at a gate is exact:** replacing the gate's connection to X by a test source changes no impedance, so $T$ is the true return ratio.
- **The two-port method treats the feedback network as unilateral:** its load on the output, $g_{11} = 1/(R_F + R_S)$, is computed with the S-side port **open** (no current into the source of $M_1$), and its reverse transmission $g_{12}$ is neglected.
- **In reality** S is terminated by $1/g_{m1}$ in parallel with $R_S$, so $R_F$ draws more current from the output and the signal at S also propagates back through $R_F$, lowering the output voltage for a given $M_2$ current.
- **Not the cause:** the forward amplifier is unilateral ($\lambda = 0$, no $C_{GD}$) and $\gamma = 0$; the discrepancy comes entirely from the bilateral feedback network.

### Result

$$T = \frac{g_{m1}g_{m2}R_{D1}R_{D2}R_S}{R_{D2} + R_F + R_S + g_{m1}R_S(R_{D2} + R_F)} = g_{m2}R_{D1}\left[R_{D2}\,\Big\|\,\left(R_F + R_S\parallel\tfrac{1}{g_{m1}}\right)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S},$$

whereas

$$g_{21}A_{v,open} = g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_S)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.$$

The input-side factors are the same; the output loading differs: the true loop sees $R_F + R_S\parallel(1/g_{m1})$, the two-port estimate $R_F + R_S$. Hence $T < g_{21}A_{v,open}$ (e.g. 2.4 versus 3.0 for all resistors 2 kΩ, $g_{m1} = 4.5$ mS, $g_{m2} = 2.8$ mS). The two-port method computes the feedback network's loading with its $M_1$-side port open and neglects its reverse transmission $g_{12}$; breaking the loop at a gate gives the exact return ratio.

**Common mistake.** Claiming that the two results are identical. They agree only when $1/g_{m1} \gg R_S$ or when $R_F$ is large enough that the output loading is unimportant.

**Common mistake.** Attributing the difference to channel-length modulation or body effect, both zero here.

**Common mistake.** Getting the sign of $T$ wrong: $v_t\uparrow$ → $I_{D2}\downarrow$ → $V_{out}\downarrow$ → $V_S\downarrow$ → $I_{D1}\uparrow$ → $V_X\downarrow$, so the feedback is negative and $T = -v_X/v_t > 0$.

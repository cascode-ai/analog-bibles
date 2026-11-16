# Detailed solution - R394

**Approach.** Break the loop at the gate of $M_2$: disconnect that gate from X, drive it with a test voltage $v_t$ (with $V_{in} = 0$), and follow the signal around the loop ($M_2$ → output node → $R_F$ → source of $M_1$ → drain of $M_1$ = X). The loop gain is $T = -v_X/v_t$. Because no current flows into a MOS gate, breaking the loop there changes no loading, so $T$ is exact. We then simplify the two-port estimate $g_{21}A_{v,open}$ and compare the two term by term.

### Step 1 — The circuit

Reading the figure:

- $M_1$ (NMOS): gate = $V_{in}$, drain = X with $R_{D1}$ to $V_{DD}$, source = node S.
- $M_2$ (PMOS): source at $V_{DD}$, gate at X, drain = output node (call it Y, $V_{out}$), with $R_{D2}$ to ground.
- Feedback network: $R_F$ from the output to S, and $R_S$ from S to ground.

With $\lambda = \gamma = 0$, the transistors have no $r_O$ and no body effect.

### Step 2 — Breaking the loop at the gate of $M_2$

**Model of the broken loop in words.** The gate of $M_2$ is driven by $v_t$; node X keeps its own connections ($R_{D1}$ and the drain of $M_1$), and we observe $v_X$. With $V_{in} = 0$:

- $M_2$: source at AC ground, so $v_{sg2} = -v_t$, and it drives the current $g_{m2}v_{sg2} = -g_{m2}v_t$ into the output node;
- output node: $R_{D2}$ to ground, and $R_F$ to S;
- node S: $R_S$ to ground, and the source of $M_1$, whose gate is at AC ground. Looking into that source we see $1/g_{m1}$ (no $r_O$, no body effect);
- $M_1$: carries $g_{m1}v_{gs1} = -g_{m1}v_S$ from X to S; $R_{D1}$ from X to AC ground.

<!-- diagram: diagram-01.cir -->

Define the resistance from S to ground, including the source of $M_1$:

$$R_p = R_S\parallel\frac{1}{g_{m1}} = \frac{R_S}{1 + g_{m1}R_S}.$$

### Step 3 — Around the loop

**Output node.** The current $-g_{m2}v_t$ flows into the resistance seen at the output, which is $R_{D2}$ in parallel with $R_F$ in series with $R_p$:

$$v_{out} = -g_{m2}v_t\left[R_{D2}\parallel(R_F + R_p)\right].$$

**Source of $M_1$.** $R_F$ and $R_p$ form a divider:

$$v_S = \frac{R_p}{R_F + R_p}\,v_{out}.$$

**Drain of $M_1$ (node X).** KCL at X: the current arriving through $R_{D1}$, $-v_X/R_{D1}$, equals the current leaving through $M_1$, $-g_{m1}v_S$:

$$v_X = g_{m1}R_{D1}\,v_S .$$

($M_1$ acts as a common-gate stage from S to X.)

**Combine:**

$$v_X = -g_{m1}g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_p)\right]\frac{R_p}{R_F + R_p}\,v_t .$$

### Step 4 — The loop gain

$$T = -\frac{v_X}{v_t} = g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_p)\right]\frac{g_{m1}R_p}{R_F + R_p}.$$

$T > 0$, so the feedback is negative. Check: raising $v_t$ cuts $M_2$'s current, $V_{out}$ and $V_S$ fall, $M_1$ conducts more, and $V_X$ falls, opposing the change.

**Simplify the divider factor** using $R_p = R_S/(1 + g_{m1}R_S)$:

$$\frac{g_{m1}R_p}{R_F + R_p} = \frac{g_{m1}R_S}{R_F(1 + g_{m1}R_S) + R_S} = \frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.$$

**Compact form.** Combining the parallel combination with the divider,

$$\left[R_{D2}\parallel(R_F + R_p)\right]\frac{R_p}{R_F + R_p} = \frac{R_{D2}R_p}{R_{D2} + R_F + R_p} = \frac{R_{D2}R_S}{(R_{D2} + R_F)(1 + g_{m1}R_S) + R_S},$$

so

$$T = \frac{g_{m1}g_{m2}R_{D1}R_{D2}R_S}{R_{D2} + R_F + R_S + g_{m1}R_S(R_{D2} + R_F)}.$$

### Step 5 — The two-port estimate, simplified

$$g_{21}A_{v,open} = \frac{R_S}{R_F + R_S}\cdot\frac{R_{D1}}{R_F\parallel R_S + 1/g_{m1}}\cdot g_{m2}\left[R_{D2}\parallel(R_F + R_S)\right].$$

The first two factors combine. With $R_F\parallel R_S = R_FR_S/(R_F + R_S)$:

$$\frac{R_{D1}}{R_F\parallel R_S + 1/g_{m1}} = \frac{g_{m1}R_{D1}}{1 + g_{m1}R_FR_S/(R_F + R_S)} = \frac{g_{m1}R_{D1}(R_F + R_S)}{R_F + R_S + g_{m1}R_FR_S},$$

and multiplying by $R_S/(R_F + R_S)$:

$$g_{21}A_{v,open} = g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_S)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.$$

### Step 6 — Comparison

Side by side:

$$
\begin{aligned}
T &= g_{m2}R_{D1}\left[R_{D2}\parallel\left(R_F + R_S\parallel\tfrac{1}{g_{m1}}\right)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S},\\
g_{21}A_{v,open} &= g_{m2}R_{D1}\left[R_{D2}\parallel\left(R_F + R_S\right)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.
\end{aligned}
$$

The input-side factors are **identical**. The only difference is the load on the output node: the true loop sees $R_F$ in series with $R_S\parallel(1/g_{m1})$, while the two-port estimate sees $R_F + R_S$. Since $R_S\parallel(1/g_{m1}) < R_S$, the true output load is heavier and $T < g_{21}A_{v,open}$.

**Numerical example** (illustrative): all resistors 2 kΩ, $g_{m1} = 4.5$ mS, $g_{m2} = 2.8$ mS, so $g_{m1}R_S = 9$ and $R_p = 2\ \mathrm{k}\Omega/10 = 200\ \Omega$:

$$
\begin{aligned}
T &= \frac{(4.5\ \mathrm{m})(2.8\ \mathrm{m})(2\ \mathrm{k})(2\ \mathrm{k})(2\ \mathrm{k})}{2\ \mathrm{k} + 2\ \mathrm{k} + 2\ \mathrm{k} + 9\,(4\ \mathrm{k})} = \frac{100\,800}{42\,000} = 2.4,\\
g_{21}A_{v,open} &= (2.8\ \mathrm{m})(2\ \mathrm{k})\,(2\ \mathrm{k}\parallel4\ \mathrm{k})\,\frac{9}{4\ \mathrm{k} + 18\ \mathrm{k}} = 5.6\times1333\times4.09\times10^{-4} = 3.05 .
\end{aligned}
$$

The two-port estimate is about 25 % too high here.

### Step 7 — Why the two results differ

- **Breaking at a gate is exact.** The gate of $M_2$ draws no current, so replacing its connection to X by a test source changes no impedance anywhere. $T$ is the true return ratio.
- **The two-port method treats the feedback network as unilateral.** The load it presents to the output, $g_{11} = 1/(R_F + R_S)$, is computed with its other port (node S side) **open**, i.e. assuming no current flows into the source of $M_1$, and the transmission $g_{12}$ (from the network's input-side port back to its output-side port) is neglected.
- **In reality**, node S is terminated by the low impedance $1/g_{m1}$ of $M_1$'s source in parallel with $R_S$. $R_F$ therefore draws more current from the output, and the signal at the source of $M_1$ also propagates back through $R_F$. This lowers the voltage at the output for a given $M_2$ current, and with it the loop gain.
- **Not the cause:** the forward amplifier is unilateral here ($\lambda = 0$, no $C_{GD}$), and $\gamma = 0$. The discrepancy comes entirely from the bilateral feedback network.

### Result

$$T = \frac{g_{m1}g_{m2}R_{D1}R_{D2}R_S}{R_{D2} + R_F + R_S + g_{m1}R_S(R_{D2} + R_F)} = g_{m2}R_{D1}\left[R_{D2}\,\Big\|\,\left(R_F + R_S\parallel\tfrac{1}{g_{m1}}\right)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S},$$

whereas

$$g_{21}A_{v,open} = g_{m2}R_{D1}\left[R_{D2}\parallel(R_F + R_S)\right]\frac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}.$$

The input-side factors are the same; the output loading differs: the true loop sees $R_F + R_S\parallel(1/g_{m1})$, the two-port estimate $R_F + R_S$. Hence $T < g_{21}A_{v,open}$ (e.g. 2.4 versus 3.0 for all resistors 2 kΩ, $g_{m1} = 4.5$ mS, $g_{m2} = 2.8$ mS). The two-port method computes the feedback network's loading with its $M_1$-side port open and neglects its reverse transmission $g_{12}$; breaking the loop at a gate gives the exact return ratio.

**Common mistake.** Claiming that the two results are identical. They agree only when $1/g_{m1} \gg R_S$ (so that $R_S\parallel1/g_{m1} \approx R_S$) or when $R_F$ is large enough that the output loading is unimportant; in general the output loading differs.

**Common mistake.** Attributing the difference to channel-length modulation or body effect. Both are zero here; the discrepancy comes from the approximate (unilateral) treatment of the feedback network.

**Common mistake.** Getting the sign of $T$ wrong and calling the feedback positive. Following the signal: $v_t\uparrow$ → $I_{D2}\downarrow$ → $V_{out}\downarrow$ → $V_S\downarrow$ → $I_{D1}\uparrow$ → $V_X\downarrow$. The returned signal opposes the test signal, so the feedback is negative and $T = -v_X/v_t > 0$.

# Detailed solution - R346

**Approach.** Represent the noise by an input-referred voltage (in series with the input) and current (in parallel with it). **Input shorted:** write KCL at the gate (divider midpoint) and at the output with all noise sources present, then divide the noise terms by the signal term to get $\overline{V_{n,in}^2}$. **Input open:** $M_1$ can carry no net current, so the output sees only the passive resistor network. Its noise divided by the transimpedance gives $\overline{I_{n,in}^2}$.

### Step 1 — Small-signal model

**Nodes:** the input (source of $M_1$), the gate node G (midpoint of the divider), and the output.

- **$M_1$**: current $g_m(v_G - v_{in})$ from the output to the source, with channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel ($\lambda = 0$, no body effect).
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with Norton noise current $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$), taken as flowing from $V_{DD}$ into the output.
- **Upper divider resistor** $R_1$ (call it $R_A$): from the output to G, with noise current $I_{nA}$ ($\overline{I_{nA}^2} = 4kT/R_1$) flowing from the output to G.
- **Lower divider resistor** $R_1$ ($R_B$): from G to ground, with noise current $I_{nB}$ ($\overline{I_{nB}^2} = 4kT/R_1$) flowing from G to ground.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient. Capacitances are neglected, so the gate draws no current.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the gate node

The current arriving from $R_A$ leaves through $R_B$:

$$\frac{v_{out} - v_G}{R_1} + I_{nA} = \frac{v_G}{R_1} + I_{nB}.$$

Multiply by $R_1$ and solve:

$$
\begin{aligned}
v_{out} - v_G + R_1I_{nA} &= v_G + R_1I_{nB}\\
v_G &= \frac{v_{out}}{2} + \frac{R_1}{2}\left(I_{nA} - I_{nB}\right).
\end{aligned}
$$

Without noise, the gate sits at half the output voltage: the divider feeds a fraction of the output back to the gate.

### Step 3 — KCL at the output (input driven by a voltage source)

The current arriving from the $R_D$ branch leaves through $M_1$ and through $R_A$:

$$-\frac{v_{out}}{R_D} + I_{nD} = g_m(v_G - v_{in}) + I_{n1} + \left[\frac{v_{out} - v_G}{R_1} + I_{nA}\right].$$

By Step 2, the bracket (the current through $R_A$) equals $v_G/R_1 + I_{nB}$. Substituting:

$$-\frac{v_{out}}{R_D} + I_{nD} = \left(g_m + \frac{1}{R_1}\right)v_G - g_mv_{in} + I_{n1} + I_{nB}.$$

Insert $v_G$ from Step 2. Using $\left(g_m + \frac1{R_1}\right)\frac{R_1}{2} = \frac{1 + g_mR_1}{2}$:

$$-\frac{v_{out}}{R_D} + I_{nD} = \left(g_m + \frac{1}{R_1}\right)\frac{v_{out}}{2} + \frac{1 + g_mR_1}{2}\left(I_{nA} - I_{nB}\right) - g_mv_{in} + I_{n1} + I_{nB}.$$

Collect the $v_{out}$ terms on the left and simplify the $I_{nB}$ coefficient, $-\frac{1 + g_mR_1}{2} + 1 = \frac{1 - g_mR_1}{2}$:

$$v_{out}\left(\frac{1}{R_D} + \frac{g_m}{2} + \frac{1}{2R_1}\right) = g_mv_{in} + I_{nD} - I_{n1} - \frac{1 + g_mR_1}{2}I_{nA} - \frac{1 - g_mR_1}{2}I_{nB}.$$

The voltage gain (noise off) is

$$A_v = \frac{g_m}{\dfrac{1}{R_D} + \dfrac{g_m}{2} + \dfrac{1}{2R_1}} .$$

The term $g_m/2$ in the denominator is the effect of the feedback: when the output rises, the gate rises by half as much, and $M_1$ draws more current, opposing the rise.

### Step 4 — Input-referred noise voltage

The same factor multiplies the signal and the noise on the right-hand side, so the equivalent input noise is obtained by dividing the noise terms by $g_m$:

$$v_{n,in} = \frac{1}{g_m}\left[I_{nD} - I_{n1} - \frac{1 + g_mR_1}{2}I_{nA} - \frac{1 - g_mR_1}{2}I_{nB}\right].$$

All four sources are uncorrelated, so we add the powers:

$$\overline{V_{n,in}^2} = \frac{1}{g_m^2}\left[\frac{4kT}{R_D} + 4kT\gamma g_m + \frac{4kT}{R_1}\cdot\frac{(1 + g_mR_1)^2 + (1 - g_mR_1)^2}{4}\right].$$

Expand the divider part: $(1 + x)^2 + (1 - x)^2 = 2 + 2x^2$ with $x = g_mR_1$, so

$$\frac{4kT}{R_1}\cdot\frac{2 + 2g_m^2R_1^2}{4g_m^2} = \frac{2kT}{g_m^2R_1} + 2kTR_1 .$$

Therefore

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} + 2kTR_1 + \frac{2kT}{g_m^2R_1}.$$

**Interpretation of the two divider terms.** Rewrite the divider noise as $-\tfrac12(I_{nA} + I_{nB}) - \tfrac{g_mR_1}{2}(I_{nA} - I_{nB})$. Because the resistors are equal and independent, the sum and the difference are uncorrelated.

- $\tfrac{R_1}{2}(I_{nA} - I_{nB})$ is the divider's Thevenin noise voltage at the gate, with PSD $4kT(R_1\parallel R_1) = 2kTR_1$. Like a gate resistor in a common-gate stage, it is referred one-to-one.
- $\tfrac12(I_{nA} + I_{nB})$ is the noise current of the divider as a load on the output (total resistance $2R_1$), with PSD $4kT/(2R_1)$. Like any output noise current, it is referred by dividing by $g_m^2$, giving $2kT/(g_m^2R_1)$.

### Step 5 — Input-referred noise current (input open)

With the input **open**, the source of $M_1$ is connected to nothing else, so KCL there forces the total current of $M_1$ (transconductance plus noise) to be zero. $M_1$'s noise and the gate voltage then only move the floating source voltage; they cannot send any current into the output node.

The output node is therefore loaded only by the passive network: $R_D$ to ac ground, in parallel with the series divider $R_A + R_B = 2R_1$ to ground. A passive resistive network of resistance $R$ produces a noise voltage of PSD $4kTR$ (Nyquist), so

$$\overline{V_{n,out}^2}\Big|_{open} = 4kT\,(R_D\parallel 2R_1).$$

**Transimpedance.** An input current $i_{in}$ injected into the source must flow through $M_1$ into the output node, where it sees $R_D\parallel2R_1$. The gate voltage does not matter, because the current of $M_1$ is fixed by KCL. So $|R_T| = R_D\parallel 2R_1$, and

$$\overline{I_{n,in}^2} = \frac{4kT(R_D\parallel2R_1)}{(R_D\parallel2R_1)^2} = \frac{4kT}{R_D\parallel2R_1} = 4kT\left(\frac{1}{R_D} + \frac{1}{2R_1}\right).$$

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} + 2kTR_1 + \frac{2kT}{g_m^2R_1},\qquad \overline{I_{n,in}^2} = 4kT\left(\frac{1}{R_D} + \frac{1}{2R_1}\right)$$

- Voltage: the divider adds its Thevenin gate noise $2kTR_1 = 4kT(R_1\parallel R_1)$, referred one-to-one, and its output-loading noise $2kT/(g_m^2R_1)$.
- Current: with the input open, $M_1$ carries no net current; the output sees only $R_D\parallel2R_1$, and the transimpedance is $R_D\parallel2R_1$.

**Common mistake.** Treating the gate as a fixed bias and the divider as noiseless. The gate is connected to the output through the divider, so it carries both feedback ($v_{out}/2$) and the divider's noise. Its noise enters twice: as a gate voltage ($2kTR_1$) and as a load current at the output ($2kT/(g_m^2R_1)$).

**Common mistake.** Computing the input-referred current with the input shorted, so that $M_1$'s noise ($4kT\gamma g_m$) appears in it. With the input open, nothing but $M_1$ is connected to its source, so its total current is zero and its noise cannot reach the output.

**Common mistake.** Adding the two divider resistors' contributions with the wrong weights, for example keeping only $(1 + g_mR_1)^2$ for both. The two resistors sit on opposite sides of the gate node and enter with coefficients $(1 + g_mR_1)/2$ and $(1 - g_mR_1)/2$; their sum of squares is $(1 + g_m^2R_1^2)/2$.

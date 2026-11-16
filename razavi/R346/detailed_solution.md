# Detailed solution - R346

**Approach.** With the input driven by a voltage source, write KCL at the gate (divider midpoint) and at the output with all noise sources present, and divide the noise terms by the signal term to get $\overline{V_{n,in}^2}$. With the input open, $M_1$ carries no net current, so the output sees only the passive resistor network, whose noise divided by the squared transimpedance gives $\overline{I_{n,in}^2}$.

### Step 1 — Small-signal model

- **$M_1$:** a current $g_m(v_G - v_{in})$ from the output to the source (the input), with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel ($\lambda = 0$, no body effect).
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing from $V_{DD}$ into the output.
- **Upper divider resistor $R_A = R_1$:** from the output to the gate node G, with noise current $I_{nA}$ ($\overline{I_{nA}^2} = 4kT/R_1$) flowing from the output to G.
- **Lower divider resistor $R_B = R_1$:** from G to ground, with noise current $I_{nB}$ ($\overline{I_{nB}^2} = 4kT/R_1$) flowing from G to ground.

The gate draws no current (capacitances neglected).

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the gate node

The current arriving through $R_A$ leaves through $R_B$:

$$\frac{v_{out} - v_G}{R_1} + I_{nA} = \frac{v_G}{R_1} + I_{nB},$$

$$
\begin{aligned}
v_{out} - v_G + R_1I_{nA} &= v_G + R_1I_{nB}\\
v_G &= \frac{v_{out}}{2} + \frac{R_1}{2}\left(I_{nA} - I_{nB}\right).
\end{aligned}
$$

Without noise the gate sits at half the output voltage.

### Step 3 — KCL at the output (input driven by a voltage source)

The current arriving through the $R_D$ branch leaves through $M_1$ and $R_A$:

$$-\frac{v_{out}}{R_D} + I_{nD} = g_m(v_G - v_{in}) + I_{n1} + \left[\frac{v_{out} - v_G}{R_1} + I_{nA}\right].$$

By Step 2 the bracket equals $v_G/R_1 + I_{nB}$, so

$$-\frac{v_{out}}{R_D} + I_{nD} = \left(g_m + \frac{1}{R_1}\right)v_G - g_mv_{in} + I_{n1} + I_{nB}.$$

Inserting $v_G$ from Step 2, with $\left(g_m + \frac1{R_1}\right)\frac{R_1}{2} = \frac{1 + g_mR_1}{2}$:

$$-\frac{v_{out}}{R_D} + I_{nD} = \left(g_m + \frac{1}{R_1}\right)\frac{v_{out}}{2} + \frac{1 + g_mR_1}{2}\left(I_{nA} - I_{nB}\right) - g_mv_{in} + I_{n1} + I_{nB}.$$

Collecting the $v_{out}$ terms and using $-\frac{1 + g_mR_1}{2} + 1 = \frac{1 - g_mR_1}{2}$ for $I_{nB}$:

$$v_{out}\left(\frac{1}{R_D} + \frac{g_m}{2} + \frac{1}{2R_1}\right) = g_mv_{in} + I_{nD} - I_{n1} - \frac{1 + g_mR_1}{2}I_{nA} - \frac{1 - g_mR_1}{2}I_{nB}.$$

The voltage gain is

$$A_v = \frac{g_m}{\dfrac{1}{R_D} + \dfrac{g_m}{2} + \dfrac{1}{2R_1}} ,$$

where $g_m/2$ is the feedback through the divider: when the output rises, the gate rises by half as much and $M_1$ draws more current.

### Step 4 — Input-referred noise voltage

Signal and noise share the same factor on the left, so dividing the noise terms by $g_m$ gives

$$v_{n,in} = \frac{1}{g_m}\left[I_{nD} - I_{n1} - \frac{1 + g_mR_1}{2}I_{nA} - \frac{1 - g_mR_1}{2}I_{nB}\right].$$

The four sources are uncorrelated:

$$\overline{V_{n,in}^2} = \frac{1}{g_m^2}\left[\frac{4kT}{R_D} + 4kT\gamma g_m + \frac{4kT}{R_1}\cdot\frac{(1 + g_mR_1)^2 + (1 - g_mR_1)^2}{4}\right].$$

With $(1 + x)^2 + (1 - x)^2 = 2 + 2x^2$ for $x = g_mR_1$, the divider part is

$$\frac{4kT}{R_1}\cdot\frac{2 + 2g_m^2R_1^2}{4g_m^2} = \frac{2kT}{g_m^2R_1} + 2kTR_1 ,$$

so

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} + 2kTR_1 + \frac{2kT}{g_m^2R_1}.$$

The divider noise splits as $-\tfrac12(I_{nA} + I_{nB}) - \tfrac{g_mR_1}{2}(I_{nA} - I_{nB})$, whose two parts are uncorrelated (equal, independent resistors):

- $\tfrac{R_1}{2}(I_{nA} - I_{nB})$ is the divider's Thevenin noise at the gate, PSD $4kT(R_1\parallel R_1) = 2kTR_1$, referred one-to-one like a gate resistor.
- $\tfrac12(I_{nA} + I_{nB})$ is the noise current of the divider ($2R_1$ in total) loading the output, PSD $4kT/(2R_1)$, divided by $g_m^2$ to give $2kT/(g_m^2R_1)$.

### Step 5 — Input-referred noise current (input open)

With the input open, nothing but $M_1$ connects to its source, so its total current (transconductance plus noise) is zero: $M_1$'s noise and the gate voltage only move the floating source voltage. The output is then loaded only by $R_D$ in parallel with the divider $R_A + R_B = 2R_1$, a passive network with Nyquist noise

$$\overline{V_{n,out}^2}\Big|_{open} = 4kT\,(R_D\parallel 2R_1).$$

An input current $i_{in}$ injected into the source must flow through $M_1$ into this network, whatever the gate voltage, so $|R_T| = R_D\parallel 2R_1$ and

$$\overline{I_{n,in}^2} = \frac{4kT(R_D\parallel2R_1)}{(R_D\parallel2R_1)^2} = \frac{4kT}{R_D\parallel2R_1} = 4kT\left(\frac{1}{R_D} + \frac{1}{2R_1}\right).$$

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} + 2kTR_1 + \frac{2kT}{g_m^2R_1},\qquad \overline{I_{n,in}^2} = 4kT\left(\frac{1}{R_D} + \frac{1}{2R_1}\right)$$

- Voltage: the divider adds its Thevenin gate noise $2kTR_1 = 4kT(R_1\parallel R_1)$, referred one-to-one, and its output-loading noise $2kT/(g_m^2R_1)$.
- Current: with the input open, $M_1$ carries no net current; the output sees only $R_D\parallel2R_1$, and the transimpedance is $R_D\parallel2R_1$.

**Common mistake.** Treating the gate as a fixed bias and the divider as noiseless. The divider feeds back $v_{out}/2$ to the gate, and its noise enters twice: as a gate voltage ($2kTR_1$) and as a load current at the output ($2kT/(g_m^2R_1)$).

**Common mistake.** Computing the input-referred current with the input shorted, so that $M_1$'s noise ($4kT\gamma g_m$) appears in it. With the input open, $M_1$'s total current is zero and its noise cannot reach the output.

**Common mistake.** Weighting the two divider resistors equally, for example with $(1 + g_mR_1)^2$ for both. They sit on opposite sides of the gate node, with coefficients $(1 + g_mR_1)/2$ and $(1 - g_mR_1)/2$, whose squares sum to $(1 + g_m^2R_1^2)/2$.

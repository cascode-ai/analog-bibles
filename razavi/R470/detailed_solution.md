# Detailed solution - R470

**Approach.** Work with short-circuit output currents. For each half, find the total signal transconductance $G_m$ from the input to the output current (slow plus fast path, in phase) and the total noise current every transistor of that half delivers to the same output node. The input-referred noise is the output noise current divided by $G_m$, squared, with a factor 2 for the two independent halves.

### Step 1 — The signal transconductance

Let $R_1 = r_{O1}\parallel r_{O3}$, the resistance at X (and Y). For a differential input ($\pm v_{in}/2$), both tail nodes are virtual grounds, and the current pushed into $V_{out1}$ is the sum of:

- **slow path:** X moves by $-g_{m1}R_1\,v_{in}/2$, so $M_5$ pulls $g_{m5}g_{m1}R_1\,v_{in}/2$ *less* out of $V_{out1}$, i.e. it pushes $g_{m1}g_{m5}R_1\,v_{in}/2$ in;
- **fast path:** $M_2'$ (gate at $-v_{in}/2$, drain cross-connected to $V_{out1}$) pushes $g_{m1'}\,v_{in}/2$ in.

They add in phase, so per half

$$G_m = g_{m1}g_{m5}R_1 + g_{m1'} ,$$

and with $R_{out} = r_{O5}\parallel r_{O7}\parallel r_{O1'}$ the differential gain is $G_mR_{out}$.

### Step 2 — Noise sources and how each reaches $V_{out1}$

**At the output node (direct).** $M_5$, $M_7$ and the fast-path device $M_2'$ all have their drains at $V_{out1}$:

$$\overline{I_{n,direct}^2} = 4kT\gamma\,(g_{m5} + g_{m7} + g_{m1'}).$$

(The part of $M_2'$'s noise common to both fast-pair devices cancels differentially, and the differential part sees the fast tail node as a virtual ground, so the net effect on $v_{out1} - v_{out2}$ is as if its whole noise current flowed into $V_{out1}$.)

**At node X (through the slow path).** $M_1$ (source at a virtual ground for differential quantities) and $M_3$ inject $4kT\gamma(g_{m1} + g_{m3})$ into X, developing $I_{nX}R_1$, which $M_5$ converts into an output current $g_{m5}R_1I_{nX}$:

$$\overline{I_{n,via\,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3})\,(g_{m5}R_1)^2 .$$

**Tail sources.** Each tail's noise splits equally between the devices of its pair, so it is common-mode and cancels in a matched circuit.

<!-- diagram: diagram-01.cir -->

### Step 3 — Total output noise current of one half

The sources are uncorrelated, so

$$\overline{I_{n,out1}^2} = 4kT\gamma\left[(g_{m1} + g_{m3})(g_{m5}R_1)^2 + g_{m1'} + g_{m5} + g_{m7}\right].$$

### Step 4 — Both halves and referral to the input

The right half adds an independent noise current of the same power at $V_{out2}$, so

$$\overline{V_{n,out}^2} = 2\,\overline{I_{n,out1}^2}\,R_{out}^2 .$$

Dividing by $(G_mR_{out})^2$, $R_{out}$ cancels:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{2\,\overline{I_{n,out1}^2}\,R_{out}^2}{G_m^2R_{out}^2} = \frac{2\,\overline{I_{n,out1}^2}}{G_m^2}\\
&= \frac{8kT\gamma\left[(g_{m1} + g_{m3})(g_{m5}R_1)^2 + g_{m1'} + g_{m5} + g_{m7}\right]}{\left(g_{m1}g_{m5}R_1 + g_{m1'}\right)^2}, \qquad R_1 = r_{O1}\parallel r_{O3}.
\end{aligned}
$$

### Step 5 — Interpretation (low frequency)

At low frequency $g_{m1}g_{m5}R_1 \gg g_{m1'}$, since $g_{m1}R_1$ is the first-stage gain (tens). Dividing numerator and denominator by $(g_{m1}g_{m5}R_1)^2$:

$$\overline{V_{n,in}^2} \approx 8kT\gamma\left[\frac{g_{m1} + g_{m3}}{g_{m1}^2} + \frac{g_{m1'} + g_{m5} + g_{m7}}{(g_{m1}g_{m5}R_1)^2}\right].$$

The first term is the familiar noise of a PMOS pair with current-source loads, $8kT\gamma(1/g_{m1} + g_{m3}/g_{m1}^2)$; the output-node devices, *including the fast pair*, are suppressed by the square of the slow path's transconductance. At high frequencies, where $G_m \to g_{m1'}$, they would matter much more, but the question concerns the low-frequency value.

### Result

$$\overline{V_{n,in}^2} = \frac{8kT\gamma\left[(g_{m1} + g_{m3})(g_{m5}R_1)^2 + g_{m1'} + g_{m5} + g_{m7}\right]}{\left(g_{m1}g_{m5}R_1 + g_{m1'}\right)^2}, \qquad R_1 = r_{O1}\parallel r_{O3},\ \gamma = \tfrac23,$$

which for $g_{m1}g_{m5}R_1 \gg g_{m1'}$ reduces to $\approx 8kT\gamma\left[\dfrac{g_{m1} + g_{m3}}{g_{m1}^2} + \dfrac{g_{m1'} + g_{m5} + g_{m7}}{(g_{m1}g_{m5}R_1)^2}\right]$. The tail current sources contribute only common-mode noise.

**Common mistake.** Using $G_m = g_{m1}g_{m5}R_1 - g_{m1'}$. The cross-connected drains make the fast path add in phase.

**Common mistake.** Referring all the output noise with only one path's gain, e.g. dividing by $g_{m1'}^2$, or forgetting $g_{m1'}$ in $G_m$. The input-referred noise uses the *total* transconductance.

**Common mistake.** Counting the tails as differential noise sources, or dropping the factor 2. Tail noise is purely common-mode, while the two halves' device noises are independent.

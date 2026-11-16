# Detailed solution - R470

**Approach.** Work with short-circuit output currents. For each half, find (1) the total signal transconductance $G_m$ from the input to the output current (slow path plus fast path, which add in phase), and (2) the total noise current delivered to the same output node by every transistor of that half. The input-referred noise is the output noise current divided by $G_m$, squared, with a factor 2 for the two independent halves.

### Step 1 — The circuit and the signal transconductance

From the figure:

- **Slow path:** PMOS pair $M_1$–$M_2$ (own tail source) drives X and Y, loaded by the NMOS current sources $M_3$, $M_4$. X drives the NMOS $M_5$ (pull-down of $V_{out1}$), and Y drives $M_6$ (pull-down of $V_{out2}$). $M_7$, $M_8$ are PMOS current-source loads.
- **Fast path:** PMOS pair $M_1'$–$M_2'$ (own tail source), gates shared with $M_1$/$M_2$, drains cross-connected: $M_2'$ to $V_{out1}$, $M_1'$ to $V_{out2}$.

Define $R_1 = r_{O1}\parallel r_{O3}$, the resistance at X (and Y). For a differential input $v_{in}$ ($\pm v_{in}/2$ on the two sides), both tail nodes are virtual grounds, and the current pushed into $V_{out1}$ is the sum of:

- **slow path:** X moves by $-g_{m1}R_1\,v_{in}/2$, so $M_5$ pulls $g_{m5}g_{m1}R_1\,v_{in}/2$ *less* out of $V_{out1}$, i.e. it pushes $g_{m1}g_{m5}R_1\,v_{in}/2$ in;
- **fast path:** $M_2'$ (gate at $-v_{in}/2$) pushes $g_{m1'}\,v_{in}/2$ in.

The two add in phase (that is what the cross-connection achieves), so per half the transconductance is

$$G_m = g_{m1}g_{m5}R_1 + g_{m1'} ,$$

and with output resistance $R_{out} = r_{O5}\parallel r_{O7}\parallel r_{O1'}$, the differential gain is $G_mR_{out}$.

### Step 2 — Noise sources and how each reaches $V_{out1}$

Each transistor has a drain-source noise current of density $4kT\gamma g_m$ ($\gamma = 2/3$, $k$ = Boltzmann's constant, $T$ = absolute temperature). For the left half:

**At the output node (direct).** $M_5$ (drain at $V_{out1}$), $M_7$ (drain at $V_{out1}$) and the fast-path device $M_2'$ (drain at $V_{out1}$) inject their noise currents directly into the output:

$$\overline{I_{n,direct}^2} = 4kT\gamma\,(g_{m5} + g_{m7} + g_{m1'}).$$

(For $M_2'$, the part of its noise current that is common to both fast-pair devices cancels in the differential output, while the differential part acts with the fast tail node as a virtual ground. Its net effect on $v_{out1} - v_{out2}$ is the same as if its whole noise current flowed into $V_{out1}$.)

**At node X (through the slow path).** $M_1$ (drain at X, source at a virtual ground for differential quantities) and $M_3$ (drain at X) inject $4kT\gamma(g_{m1} + g_{m3})$ into X. This develops a voltage $I_{nX}R_1$ at X, which $M_5$ converts into an output current $g_{m5}R_1I_{nX}$:

$$\overline{I_{n,via\,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3})\,(g_{m5}R_1)^2 .$$

**Tail sources.** The noise of each tail source splits equally between the two devices of its pair, so it is common-mode and cancels in the differential output (matched circuit).

<!-- diagram: diagram-01.cir -->

### Step 3 — Total output noise current of one half

All sources are uncorrelated, so their powers add:

$$\overline{I_{n,out1}^2} = 4kT\gamma\left[(g_{m1} + g_{m3})(g_{m5}R_1)^2 + g_{m1'} + g_{m5} + g_{m7}\right].$$

### Step 4 — Both halves and referral to the input

The right half produces an independent noise current of the same power at $V_{out2}$. Both flow into $R_{out}$, and the differential output noise is

$$\overline{V_{n,out}^2} = 2\,\overline{I_{n,out1}^2}\,R_{out}^2 .$$

The differential gain is $G_mR_{out}$. Dividing ($R_{out}$ cancels):

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{2\,\overline{I_{n,out1}^2}\,R_{out}^2}{G_m^2R_{out}^2} = \frac{2\,\overline{I_{n,out1}^2}}{G_m^2}\\
&= \frac{8kT\gamma\left[(g_{m1} + g_{m3})(g_{m5}R_1)^2 + g_{m1'} + g_{m5} + g_{m7}\right]}{\left(g_{m1}g_{m5}R_1 + g_{m1'}\right)^2}, \qquad R_1 = r_{O1}\parallel r_{O3}.
\end{aligned}
$$

### Step 5 — Interpretation (low frequency)

At low frequency the slow path dominates the transconductance, $g_{m1}g_{m5}R_1 \gg g_{m1'}$, because $g_{m1}R_1$ is the first-stage gain (tens). Dividing numerator and denominator by $(g_{m1}g_{m5}R_1)^2$:

$$\overline{V_{n,in}^2} \approx 8kT\gamma\left[\frac{g_{m1} + g_{m3}}{g_{m1}^2} + \frac{g_{m1'} + g_{m5} + g_{m7}}{(g_{m1}g_{m5}R_1)^2}\right].$$

- The first term is the familiar noise of a PMOS pair with current-source loads, $8kT\gamma(1/g_{m1} + g_{m3}/g_{m1}^2)$.
- The output-node devices, *including the fast pair*, are suppressed by the square of the slow path's transconductance, so at low frequency the fast path adds almost no noise.

At high frequencies, where the slow path has rolled off and $G_m \to g_{m1'}$, the fast pair and the output devices would matter much more, but the question concerns the low-frequency value.

### Result

$$\overline{V_{n,in}^2} = \frac{8kT\gamma\left[(g_{m1} + g_{m3})(g_{m5}R_1)^2 + g_{m1'} + g_{m5} + g_{m7}\right]}{\left(g_{m1}g_{m5}R_1 + g_{m1'}\right)^2}, \qquad R_1 = r_{O1}\parallel r_{O3},\ \gamma = \tfrac23,$$

which for $g_{m1}g_{m5}R_1 \gg g_{m1'}$ reduces to $\approx 8kT\gamma\left[\dfrac{g_{m1} + g_{m3}}{g_{m1}^2} + \dfrac{g_{m1'} + g_{m5} + g_{m7}}{(g_{m1}g_{m5}R_1)^2}\right]$. The tail current sources contribute only common-mode noise.

**Common mistake.** Subtracting the fast-path transconductance, i.e. using $G_m = g_{m1}g_{m5}R_1 - g_{m1'}$. The cross-connected drains make the fast path add in phase with the slow path.

**Common mistake.** Referring all of the output noise with only one path's gain, e.g. dividing by $g_{m1'}^2$ (fast path only) or forgetting $g_{m1'}$ in $G_m$. The input-referred noise uses the *total* transconductance that the input sees at the output.

**Common mistake.** Counting the tail current sources as differential noise sources, or dropping the factor 2. In a matched circuit tail noise is purely common-mode, while the two halves' device noises are independent and both appear in the differential output.

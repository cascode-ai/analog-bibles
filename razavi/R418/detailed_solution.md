# Detailed solution - R418

**Approach.** There are three independent thermal-noise sources: $R_1$, $R_2$, and the channels of $M_1$ and $M_2$. Reduce the inverter to one transconductance and one output resistance, write the two node equations with all sources present, and solve for $v_{out}$. Each source is referred to the input by dividing its contribution to $v_{out}$ by the signal gain, and the powers are added.

### Step 1 — Model of the circuit and its noise sources

Call the common gate node G. Both gates are at G and both drains at the output, so the inverter is one controlled current $G_mv_G$ pulling current out of the output node, in parallel with one resistance $R_0$:

$$G_m = g_{m1} + g_{m2},\qquad R_0 = r_{O1}\parallel r_{O2}.$$

**Noise sources** (uncorrelated, per hertz):

- $R_1$: a voltage source $V_{R1}$ in series with $R_1$, $\overline{V_{R1}^2} = 4kTR_1$.
- $R_2$: a current source $I_{R2}$ in parallel with $R_2$ (from the output into G), $\overline{I_{R2}^2} = 4kT/R_2$.
- Transistors: both channel-noise currents flow between the output and ac ground, so they combine into one current $I_{nM}$ from the output to ground, $\overline{I_{nM}^2} = 4kT\gamma g_{m1} + 4kT\gamma g_{m2} = 4kT\gamma G_m$.

$r_{O1}$ and $r_{O2}$ are not physical resistors and add no noise.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node equations with all sources

With the polarity of $V_{R1}$ in the diagram, the left end of $R_1$ sits at $v_{in}' = v_{in} - V_{R1}$, so $V_{R1}$ enters exactly like the input (its sign does not matter for noise power).

**Node G** (gates draw no current):

$$\frac{v_{in}' - v_G}{R_1} + \frac{v_{out} - v_G}{R_2} + I_{R2} = 0 .$$

With $\alpha = R_1/(R_1 + R_2)$ and $R_p = R_1\parallel R_2$:

$$v_G = (1 - \alpha)\,v_{in}' + \alpha\,v_{out} + R_pI_{R2} .$$

**Output node** (currents leaving: controlled source, $R_0$, $R_2$, the noise current of $R_2$, the transistor noise):

$$G_mv_G + \frac{v_{out}}{R_0} + \frac{v_{out} - v_G}{R_2} + I_{R2} + I_{nM} = 0 ,$$

$$v_G\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right) + I_{R2} + I_{nM} = 0 .$$

### Step 3 — Solve for the output

Substituting $v_G$, with $D = \dfrac{1}{R_0} + \dfrac{1}{R_2} + \alpha\left(G_m - \dfrac{1}{R_2}\right)$:

$$v_{out}\,D = -(1 - \alpha)\left(G_m - \frac{1}{R_2}\right)v_{in}' - \left[R_p\left(G_m - \frac{1}{R_2}\right) + 1\right]I_{R2} - I_{nM} .$$

**Signal gain** (noise off):

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{(1 - \alpha)\,(G_m - 1/R_2)}{D} .$$

### Step 4 — Refer each source to the input

Each source's input-referred value is its contribution to $v_{out}$ divided by $A_v$. The common factor $D$ cancels, which removes $R_0$ from all results. Note $(1 - \alpha)(G_m - 1/R_2) = (G_mR_2 - 1)/(R_1 + R_2)$, since $1 - \alpha = R_2/(R_1 + R_2)$.

**$R_1$:** it enters exactly like $v_{in}$, so

$$V_{eq,R1} = -V_{R1},\qquad \overline{V_{eq,R1}^2} = 4kTR_1 .$$

**$R_2$:**

$$V_{eq,R2} = \frac{R_p(G_m - 1/R_2) + 1}{(1 - \alpha)(G_m - 1/R_2)}\,I_{R2} ,$$

and since $R_p/(1 - \alpha) = R_1$,

$$
\begin{aligned}
V_{eq,R2} &= \left[R_1 + \frac{R_1 + R_2}{G_mR_2 - 1}\right]I_{R2} = \frac{R_1(G_mR_2 - 1) + R_1 + R_2}{G_mR_2 - 1}\,I_{R2}\\
&= \frac{R_2\,(1 + G_mR_1)}{G_mR_2 - 1}\,I_{R2} .
\end{aligned}
$$

**Transistors:**

$$V_{eq,M} = \frac{I_{nM}}{(1 - \alpha)(G_m - 1/R_2)} = \frac{R_1 + R_2}{G_mR_2 - 1}\,I_{nM} .$$

### Step 5 — Total input-referred noise

The three sources are uncorrelated, so

$$\overline{V_{n,in}^2} = 4kTR_1 + \frac{4kT}{R_2}\left[\frac{R_2(1 + G_mR_1)}{G_mR_2 - 1}\right]^2 + 4kT\gamma G_m\left[\frac{R_1 + R_2}{G_mR_2 - 1}\right]^2 .$$

**Large-$G_mR_2$ form.** Replacing $G_mR_2 - 1$ by $G_mR_2$:

$$
\begin{aligned}
\frac{R_2(1 + G_mR_1)}{G_mR_2} &= R_1 + \frac{1}{G_m},\\
\frac{R_1 + R_2}{G_mR_2} &= \frac{1}{G_m}\left(1 + \frac{R_1}{R_2}\right),
\end{aligned}
$$

$$\overline{V_{n,in}^2} \approx 4kTR_1 + \frac{4kT}{R_2}\left(R_1 + \frac{1}{G_m}\right)^2 + \frac{4kT\gamma}{G_m}\left(1 + \frac{R_1}{R_2}\right)^2 .$$

- $R_1$'s noise is in series with the input and appears in full.
- $R_2$'s noise current flows through roughly $R_1 + 1/G_m$ to become an input voltage; for $R_1 \ll R_2$ this is the familiar $4kTR_1^2/R_2$, slightly increased.
- The bare inverter's input noise $4kT\gamma/G_m$ is multiplied by $(1 + R_1/R_2)^2$: it reaches the output with the noise gain $1 + R_2/R_1$, while the signal sees only $R_2/R_1$.

### Step 6 — Sense of scale (illustration)

With $R_1 = 1\ \mathrm{k\Omega}$, $R_2 = 10\ \mathrm{k\Omega}$, $G_m \approx 10.8$ mS (an inverter with $W/L = 50/0.5$ at its trip point on a 3-V supply), $\gamma = 2/3$ and $T = 300$ K, so $4kT = 1.66\times10^{-20}$ J and $G_mR_2 = 107.6$:

$$
\begin{aligned}
4kTR_1 &= (1.66\times10^{-20})(10^3) = 1.66\times10^{-17}\ \mathrm{V^2/Hz},\\
\frac{R_2(1 + G_mR_1)}{G_mR_2 - 1} &= \frac{10^4\times11.76}{106.6}\ \Omega = 1103\ \Omega,\quad \frac{4kT}{R_2}(1103)^2 = 2.0\times10^{-18}\ \mathrm{V^2/Hz},\\
\frac{R_1 + R_2}{G_mR_2 - 1} &= \frac{11\times10^3}{106.6}\ \Omega = 103.2\ \Omega,\quad 4kT\gamma G_m(103.2)^2 = 1.3\times10^{-18}\ \mathrm{V^2/Hz},\\
\overline{V_{n,in}^2} &\approx 1.98\times10^{-17}\ \mathrm{V^2/Hz}\quad(4.5\ \mathrm{nV/\sqrt{Hz}}),
\end{aligned}
$$

dominated by $R_1$.

### Result

With $G_m = g_{m1} + g_{m2}$ ($r_{O1}\parallel r_{O2}$ cancels exactly):

$$\overline{V_{n,in}^2} = 4kTR_1 + \frac{4kT}{R_2}\left[\frac{R_2(1 + G_mR_1)}{G_mR_2 - 1}\right]^2 + 4kT\gamma G_m\left[\frac{R_1 + R_2}{G_mR_2 - 1}\right]^2,$$

and for $G_mR_2 \gg 1$

$$\overline{V_{n,in}^2} \approx 4kTR_1 + \frac{4kT}{R_2}\left(R_1 + \frac{1}{G_m}\right)^2 + \frac{4kT\gamma}{G_m}\left(1 + \frac{R_1}{R_2}\right)^2 .$$

**Common mistake.** Leaving out $R_1$, or dividing its noise by the gain. Its noise voltage is in series with $V_{in}$ and appears at the input unchanged, as $4kTR_1$, usually the largest term.

**Common mistake.** Referring the transistor noise as $4kT\gamma/G_m$ without the factor $(1 + R_1/R_2)^2$, or with $g_{m1}$ only. The noise gain exceeds the signal gain by $1 + R_1/R_2$, and both gates are driven, so the transconductance is $g_{m1} + g_{m2}$.

**Common mistake.** Claiming that the feedback reduces the input-referred noise by the loop gain. The factor $D$ scales noise and signal equally and cancels.

# Detailed solution - R418

**Approach.** The circuit has three independent thermal-noise sources: the resistor $R_1$, the resistor $R_2$, and the channels of $M_1$ and $M_2$. Reduce the inverter to one transconductance and one output resistance, write the two node equations with all sources present, and solve for $v_{out}$. Each noise source is then referred to the input by dividing its contribution to $v_{out}$ by the signal gain, and the powers are added.

### Step 1 — Model of the circuit and its noise sources

Reading the figure: $V_{in}$ drives node G (the common gates of $M_1$ and $M_2$) through $R_1$; $R_2$ connects G to the output (the common drains).

**Inverter.** Both gates are at G and both drains at the output, so the inverter is one controlled current $G_mv_G$ pulling current out of the output node, in parallel with one resistance $R_0$:

$$G_m = g_{m1} + g_{m2},\qquad R_0 = r_{O1}\parallel r_{O2}.$$

**Noise sources** (all uncorrelated, spectral densities per hertz):

- $R_1$: a voltage source $V_{R1}$ in series with $R_1$, $\overline{V_{R1}^2} = 4kTR_1$.
- $R_2$: a current source $I_{R2}$ in parallel with $R_2$ (from the output into G), $\overline{I_{R2}^2} = 4kT/R_2$.
- Transistors: their channel-noise currents both flow between the output and ac ground, so they combine into one current $I_{nM}$ from the output to ground with $\overline{I_{nM}^2} = 4kT\gamma g_{m1} + 4kT\gamma g_{m2} = 4kT\gamma G_m$.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient. $r_{O1}$ and $r_{O2}$ are not physical resistors and add no noise of their own.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node equations with all sources

$V_{R1}$ is in series with $v_{in}$, so it enters exactly like the input: write $v_{in}' = v_{in} + V_{R1}$.

**Node G** (gates draw no current):

$$\frac{v_{in}' - v_G}{R_1} + \frac{v_{out} - v_G}{R_2} + I_{R2} = 0 .$$

Solve for $v_G$, with $\alpha = R_1/(R_1 + R_2)$ and $R_p = R_1\parallel R_2$:

$$v_G = (1 - \alpha)\,v_{in}' + \alpha\,v_{out} + R_pI_{R2} .$$

**Output node** (currents leaving: controlled source, $R_0$, $R_2$, the noise current of $R_2$, the transistor noise):

$$G_mv_G + \frac{v_{out}}{R_0} + \frac{v_{out} - v_G}{R_2} + I_{R2} + I_{nM} = 0 .$$

Rearrange:

$$v_G\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right) + I_{R2} + I_{nM} = 0 .$$

### Step 3 — Solve for the output

Substitute $v_G$ and collect the $v_{out}$ terms. Define $D = \dfrac{1}{R_0} + \dfrac{1}{R_2} + \alpha\left(G_m - \dfrac{1}{R_2}\right)$:

$$v_{out}\,D = -(1 - \alpha)\left(G_m - \frac{1}{R_2}\right)v_{in}' - \left[R_p\left(G_m - \frac{1}{R_2}\right) + 1\right]I_{R2} - I_{nM} .$$

**Signal gain** (noise off):

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{(1 - \alpha)\,(G_m - 1/R_2)}{D} .$$

### Step 4 — Refer each source to the input

The input-referred value of a source is (its contribution to $v_{out}$)/$A_v$. The common factor $D$ cancels, which removes $R_0$ from all results. Use $1 - \alpha = R_2/(R_1 + R_2)$, so $(1 - \alpha)(G_m - 1/R_2) = (G_mR_2 - 1)/(R_1 + R_2)$.

**$R_1$:** it enters exactly like $v_{in}$, so its input-referred value is itself:

$$V_{eq,R1} = V_{R1},\qquad \overline{V_{eq,R1}^2} = 4kTR_1 .$$

**$R_2$:**

$$V_{eq,R2} = \frac{R_p(G_m - 1/R_2) + 1}{(1 - \alpha)(G_m - 1/R_2)}\,I_{R2} .$$

Since $R_p/(1 - \alpha) = R_1$, this is

$$
\begin{aligned}
V_{eq,R2} &= \left[R_1 + \frac{R_1 + R_2}{G_mR_2 - 1}\right]I_{R2} = \frac{R_1(G_mR_2 - 1) + R_1 + R_2}{G_mR_2 - 1}\,I_{R2}\\
&= \frac{R_2\,(1 + G_mR_1)}{G_mR_2 - 1}\,I_{R2} .
\end{aligned}
$$

**Transistors:**

$$V_{eq,M} = \frac{I_{nM}}{(1 - \alpha)(G_m - 1/R_2)} = \frac{R_1 + R_2}{G_mR_2 - 1}\,I_{nM} .$$

### Step 5 — Total input-referred noise

The three sources are uncorrelated, so their input-referred powers add:

$$\overline{V_{n,in}^2} = 4kTR_1 + \frac{4kT}{R_2}\left[\frac{R_2(1 + G_mR_1)}{G_mR_2 - 1}\right]^2 + 4kT\gamma G_m\left[\frac{R_1 + R_2}{G_mR_2 - 1}\right]^2 .$$

**Large-$G_mR_2$ form.** For $G_mR_2 \gg 1$, replace $G_mR_2 - 1$ by $G_mR_2$:

$$
\begin{aligned}
\frac{R_2(1 + G_mR_1)}{G_mR_2} &= R_1 + \frac{1}{G_m},\\
\frac{R_1 + R_2}{G_mR_2} &= \frac{1}{G_m}\left(1 + \frac{R_1}{R_2}\right),
\end{aligned}
$$

$$\overline{V_{n,in}^2} \approx 4kTR_1 + \frac{4kT}{R_2}\left(R_1 + \frac{1}{G_m}\right)^2 + \frac{4kT\gamma}{G_m}\left(1 + \frac{R_1}{R_2}\right)^2 .$$

**Interpretation.**

- $R_1$'s noise is in series with the input, so it appears in full.
- $R_2$'s noise current flows through roughly $R_1 + 1/G_m$ (the resistance from G back to the source, plus the inverter's own $1/G_m$) to become an input voltage. With $R_1 \ll R_2$ it is the familiar $4kTR_1^2/R_2$, slightly increased.
- The transistors' own input-referred noise, $4kT\gamma/G_m$ (the noise of the bare inverter, which behaves like a single device with $g_m = G_m$), is multiplied by $(1 + R_1/R_2)^2$. The inverter's noise reaches the output with the "noise gain" $1 + R_2/R_1$, while the signal sees only $R_2/R_1$.

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

**Common mistake.** Leaving out $R_1$, or dividing its noise by the gain. $R_1$'s noise voltage is in series with $V_{in}$ and passes through the circuit exactly like the signal, so it appears at the input unchanged, as $4kTR_1$. It is usually the largest term.

**Common mistake.** Referring the transistor noise as $4kT\gamma/G_m$ without the factor $(1 + R_1/R_2)^2$, or with $g_{m1}$ only. The inverter's input noise is amplified by the noise gain $1 + R_2/R_1$, while the signal sees only $R_2/R_1$; the ratio squared gives $(1 + R_1/R_2)^2$. Both transistors' gates are driven, so the transconductance is $g_{m1} + g_{m2}$.

**Common mistake.** Claiming that the feedback reduces the input-referred noise by the loop gain. Feedback scales the noise and the signal equally; the loop gain cancels (here, the factor $D$ cancels) and does not reduce the input-referred noise.

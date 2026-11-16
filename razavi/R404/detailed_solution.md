# Detailed solution - R404

**Approach.** The capacitors are noiseless, so all the noise comes from the op amp's transistors. First find the op amp's own input-referred noise: compute the noise current each transistor delivers into a shorted output and divide by the op amp's transconductance squared. Then show that wrapping the op amp in the capacitive feedback loop leaves its input-referred noise unchanged.

### Step 1 — The circuit and what the feedback does

Reading the figure: $M_1$–$M_2$ is an NMOS differential pair with tail current $I_{SS}$; $M_3$ (diode-connected) and $M_4$ form a PMOS current-mirror load; the output is taken at the drains of $M_2$ and $M_4$. This is the "simple" five-transistor op amp.

- The gate of $M_1$ is $V_{in}$. Raising it increases $I_{D1}$, which the mirror copies into the output, while $M_2$ takes less current from the output, so $V_{out}$ rises. The gate of $M_1$ is therefore the **non-inverting** input.
- The gate of $M_2$ (node X) is the **inverting** input. It is driven by the divider $C_1$ (output to X) and $C_2$ (X to ground).

At low frequencies the capacitors draw negligible current from the output, so the op amp's gain $A_0$ is not loaded and the divider is ideal:

$$V_X = \beta V_{out}, \qquad \beta = \frac{C_1}{C_1 + C_2} .$$

The circuit is a non-inverting amplifier with closed-loop gain $\approx 1/\beta = 1 + C_2/C_1$. (The dc bias network of node X is not shown; its noise is ignored.)

### Step 2 — Noise sources

- **Thermal noise:** a current source between drain and source of each transistor, $\overline{I_n^2} = 4kT\gamma g_m$ (A²/Hz). Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient (2/3 for long-channel devices).
- **Flicker noise:** a voltage source in series with each gate, $\overline{V_n^2} = K/(C_{ox}WLf)$, with $K = K_N$ for NMOS and $K_P$ for PMOS, $C_{ox}$ the gate-oxide capacitance per unit area, and $WL$ the gate area.
- **Capacitors:** ideal capacitors dissipate no power, so they generate **no noise**.

Matched pairs: $g_{m1} = g_{m2}$, $g_{m3} = g_{m4}$, $(WL)_1 = (WL)_2$, $(WL)_3 = (WL)_4$.

### Step 3 — Method: short-circuit output noise current

For an op amp with high output impedance it is convenient to short the output to ac ground and compute the output **current**. If an input voltage $v_d$ produces a short-circuit output current $G_mv_d$, then a noise current $I_n$ at the output is equivalent to an input noise voltage $I_n/G_m$. The output resistance cancels from this ratio, so we can take $\lambda = 0$ inside the calculation.

**Transconductance of the op amp.** Short the output and apply $v_{in1} = v_d/2$, $v_{in2} = -v_d/2$. KCL at the tail node P (the ideal tail source carries no signal current):

$$g_{m1}(v_{in1} - v_P) + g_{m2}(v_{in2} - v_P) = 0 \ \Longrightarrow\ v_P = \frac{v_{in1} + v_{in2}}{2} = 0 .$$

So $M_1$ carries $+g_{m1}v_d/2$; the mirror copies this and $M_4$ pushes it into the output. $M_2$ carries $-g_{m1}v_d/2$, i.e. it draws $g_{m1}v_d/2$ *less* from the output. Total current into the output:

$$I_{out} = \frac{g_{m1}v_d}{2} + \frac{g_{m1}v_d}{2} = g_{m1}v_d \quad\Longrightarrow\quad G_m = g_{m1} .$$

### Step 4 — Thermal-noise current of each transistor at the shorted output

Inputs at ac ground, output shorted. Let A be the diode node (drain of $M_1$, gates of $M_3$, $M_4$).

**$M_1$.** Its noise current $I_{n1}$ flows from A to P inside $M_1$. KCL at P:

$$
\begin{aligned}
g_{m1}(0 - v_P) + I_{n1} + g_{m2}(0 - v_P) &= 0\\
v_P &= \frac{I_{n1}}{2g_{m1}} .
\end{aligned}
$$

- Current in $M_1$: $-g_{m1}v_P + I_{n1} = I_{n1}/2$. The mirror copies it, so $M_4$ pushes $I_{n1}/2$ into the output.
- Current in $M_2$: $-g_{m2}v_P = -I_{n1}/2$, i.e. $M_2$ also *adds* $I_{n1}/2$ to the output.

Total: $I_{n1}$ reaches the output in full.

**$M_2$.** By the same calculation (P moves by $I_{n2}/(2g_{m1})$, half the noise is mirrored, half flows directly), $I_{n2}$ reaches the output in full.

**$M_3$.** With $\lambda = 0$ and the inputs grounded, $v_P = 0$ and $M_1$ carries no signal current. The noise current $I_{n3}$ therefore has to flow through the diode's own transconductance. KCL at A:

$$
\begin{aligned}
g_{m3}(0 - v_A) + I_{n3} &= 0 \ \Longrightarrow\ v_A = \frac{I_{n3}}{g_{m3}},\\
\text{current from } M_4 \text{ into the output} &= g_{m4}(0 - v_A) = -\frac{g_{m4}}{g_{m3}}I_{n3} = -I_{n3}.
\end{aligned}
$$

So $I_{n3}$ also reaches the output in full.

**$M_4$.** Its noise current is directly in parallel with the output: $I_{n4}$ in full.

**Total.** The four sources are uncorrelated, so their powers add:

$$\overline{I_{n,out}^2} = 4kT\gamma\,(g_{m1} + g_{m2} + g_{m3} + g_{m4}) = 4kT\gamma\,(2g_{m1} + 2g_{m3}) .$$

**Refer to the input** by dividing by $G_m^2 = g_{m1}^2$:

$$\overline{V_{n,in}^2}\Big|_{th} = \frac{8kT\gamma\,(g_{m1} + g_{m3})}{g_{m1}^2} = \frac{8kT\gamma}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right).$$

The factor 8 (instead of 4) comes from the two devices of each matched pair. The term $g_{m3}/g_{m1}$ shows that the load devices' noise counts relative to the input pair's transconductance.

### Step 5 — Flicker noise

- **$M_1$, $M_2$:** each flicker source is already a voltage in series with one of the op amp's inputs, and a source in series with either input of a differential pair is the same as one at the differential input (the sign does not matter for power). Together: $2K_N/[C_{ox}(WL)_1f]$.
- **$M_3$, $M_4$:** a gate voltage $V_{n3}$ makes $M_3$ conduct $g_{m3}V_{n3}$, which behaves exactly like the noise current of Step 4 and reaches the output in full. Referred to the input it becomes $g_{m3}V_{n3}/g_{m1}$, so its power is multiplied by $(g_{m3}/g_{m1})^2$. The same holds for $M_4$. Together: $2K_P(g_{m3}/g_{m1})^2/[C_{ox}(WL)_3f]$.

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{2K_N}{C_{ox}(WL)_1f} + \frac{2K_P}{C_{ox}(WL)_3f}\left(\frac{g_{m3}}{g_{m1}}\right)^2 .$$

**Tail current source.** A noise current in $I_{SS}$ splits equally between $M_1$ and $M_2$. The half in $M_1$ is mirrored into the output, while the half in $M_2$ is drawn from the output, so the two cancel. Tail noise is common-mode and does not appear at the output of a matched circuit.

### Step 6 — Closing the loop: the capacitors do not change the input-referred noise

Lump all the op-amp noise into one source $V_n$ (with $\overline{V_n^2}$ from Steps 4–5) in series with the non-inverting input, and treat the op amp as noiseless with gain $A_0$.

<!-- diagram: diagram-01.cir -->

The op amp amplifies the difference of its two input voltages:

$$
\begin{aligned}
V_{out} &= A_0\,(V_{in} + V_n - V_X) = A_0\,(V_{in} + V_n - \beta V_{out})\\
V_{out}\,(1 + \beta A_0) &= A_0\,(V_{in} + V_n)\\
V_{out} &= \frac{A_0}{1 + \beta A_0}\,(V_{in} + V_n) .
\end{aligned}
$$

$V_n$ appears at the output exactly as if it were part of $V_{in}$. Dividing the output noise by the closed-loop gain $A_0/(1 + \beta A_0)$ therefore returns $V_n$ itself: **the input-referred noise of the closed-loop circuit is the op amp's input-referred noise.** The feedback multiplies signal and noise by the same gain, and the noiseless capacitors add nothing, so the result does not depend on $C_1$ or $C_2$. Only the *output* noise depends on them: $\overline{V_{n,out}^2} \approx \overline{V_n^2}\,(1 + C_2/C_1)^2$ when $\beta A_0 \gg 1$.

### Step 7 — Sense of scale (illustration only)

The sizes are not given, so this is only an example: take $(W/L)_{1,2} = 50/0.5$, $(W/L)_{3,4} = 100/0.5$, $I_{SS} = 1$ mA, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $\gamma = 2/3$, $T = 300$ K. Each device carries 0.5 mA.

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{S} = 3.66\ \mathrm{mS},\\
g_{m3} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{7.68\times10^{-6}}\ \mathrm{S} = 2.77\ \mathrm{mS},\\
8kT\gamma &= 8(1.38\times10^{-23})(300)(2/3) = 2.21\times10^{-20}\ \mathrm{J},\\
\overline{V_{n,in}^2}\Big|_{th} &= \frac{2.21\times10^{-20}}{3.66\times10^{-3}}\left(1 + \frac{2.77}{3.66}\right) = 6.03\times10^{-18}\times1.757 = 1.06\times10^{-17}\ \mathrm{V^2/Hz},
\end{aligned}
$$

about 3.3 nV/√Hz.

### Result

The capacitive feedback network is noiseless and leaves the input-referred noise unchanged, so the circuit's input-referred noise is that of the op amp:

$$\overline{V_{n,in}^2} = \frac{8kT\gamma}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{2K_N}{C_{ox}(WL)_1f} + \frac{2K_P}{C_{ox}(WL)_3f}\left(\frac{g_{m3}}{g_{m1}}\right)^2 \quad(\gamma = 2/3 \text{ for long-channel devices}),$$

independent of $C_1$ and $C_2$. The tail source contributes only common-mode noise. The output noise is this value times the closed-loop gain squared, $\approx(1 + C_2/C_1)^2$.

**Common mistake.** Dividing the input-referred noise by the loop gain, or multiplying it by $1 + C_2/C_1$. Feedback scales signal and noise by the same closed-loop gain, so the input-referred noise is unchanged. It is the *output* noise that is multiplied by $(1 + C_2/C_1)^2$.

**Common mistake.** Attributing noise to $C_1$ and $C_2$. Ideal capacitors are lossless and produce no thermal noise; with capacitive feedback, unlike resistive feedback, the network adds nothing to the noise.

**Common mistake.** Adding the mirror's noise $4kT\gamma g_{m3}$ directly to the input pair's $4kT\gamma/g_{m1}$ term, or forgetting the factor 2 for the pairs. A noise current at the output is referred to the input by dividing by $g_{m1}^2$, giving $4kT\gamma g_{m3}/g_{m1}^2$ per load device, and each of the four devices contributes.

# Detailed solution - R404

**Approach.** The capacitors are noiseless, so all the noise comes from the op amp's transistors. Find the op amp's own input-referred noise from the noise current each transistor delivers into a shorted output, divided by the op amp's transconductance squared. Then show that the capacitive feedback loop leaves the input-referred noise unchanged.

### Step 1 — The feedback and the noise sources

The gate of $M_1$ ($V_{in}$) is the **non-inverting** input: raising it increases $I_{D1}$, which the mirror copies into the output. The gate of $M_2$ (node X) is the **inverting** input, driven by the divider $C_1$ (output to X) and $C_2$ (X to ground). At low frequencies the capacitors do not load the op amp, so

$$V_X = \beta V_{out}, \qquad \beta = \frac{C_1}{C_1 + C_2} ,$$

and the circuit is a non-inverting amplifier with closed-loop gain $\approx 1/\beta = 1 + C_2/C_1$. (The bias network of X is not shown; its noise is ignored.)

Each transistor has a drain–source thermal-noise current $4kT\gamma g_m$ and a gate-referred flicker voltage $K/(C_{ox}WLf)$, with $K = K_N$ for NMOS and $K_P$ for PMOS. Ideal capacitors dissipate no power and generate **no noise**. The pairs are matched: $g_{m1} = g_{m2}$, $g_{m3} = g_{m4}$, $(WL)_1 = (WL)_2$, $(WL)_3 = (WL)_4$.

### Step 2 — Method and the op amp's transconductance

With the output shorted to ac ground, a noise current $I_n$ at the output is equivalent to an input noise voltage $I_n/G_m$, where $G_m$ is the short-circuit transconductance. The output resistance cancels from this ratio, so $\lambda = 0$ can be used inside the calculation.

**$G_m$.** Apply $v_{in1} = v_d/2$, $v_{in2} = -v_d/2$. KCL at the tail node P (the ideal tail source carries no signal current):

$$g_{m1}(v_{in1} - v_P) + g_{m2}(v_{in2} - v_P) = 0 \ \Longrightarrow\ v_P = \frac{v_{in1} + v_{in2}}{2} = 0 .$$

$M_1$ carries $+g_{m1}v_d/2$, which the mirror pushes into the output through $M_4$; $M_2$ draws $g_{m1}v_d/2$ *less* from the output. So

$$I_{out} = \frac{g_{m1}v_d}{2} + \frac{g_{m1}v_d}{2} = g_{m1}v_d \quad\Longrightarrow\quad G_m = g_{m1} .$$

### Step 3 — Thermal-noise current of each transistor at the shorted output

Inputs at ac ground, output shorted. Let A be the diode node (drain of $M_1$, gates of $M_3$, $M_4$).

**$M_1$.** Its noise current $I_{n1}$ flows from A to P inside $M_1$. KCL at P:

$$
\begin{aligned}
g_{m1}(0 - v_P) + I_{n1} + g_{m2}(0 - v_P) &= 0\\
v_P &= \frac{I_{n1}}{2g_{m1}} .
\end{aligned}
$$

- Current in $M_1$: $-g_{m1}v_P + I_{n1} = I_{n1}/2$, which $M_4$ pushes into the output.
- Current in $M_2$: $-g_{m2}v_P = -I_{n1}/2$, so $M_2$ also *adds* $I_{n1}/2$ to the output.

So $I_{n1}$ reaches the output in full.

**$M_2$.** By the same calculation (P moves by $I_{n2}/(2g_{m1})$, half the noise is mirrored, half flows directly), $I_{n2}$ reaches the output in full.

**$M_3$.** With the inputs grounded, $v_P = 0$ and $M_1$ carries no signal current, so $I_{n3}$ must flow through the diode's own transconductance. KCL at A:

$$
\begin{aligned}
g_{m3}(0 - v_A) + I_{n3} &= 0 \ \Longrightarrow\ v_A = \frac{I_{n3}}{g_{m3}},\\
\text{current from } M_4 \text{ into the output} &= g_{m4}(0 - v_A) = -\frac{g_{m4}}{g_{m3}}I_{n3} = -I_{n3}.
\end{aligned}
$$

So $I_{n3}$ also reaches the output in full.

**$M_4$.** Its noise current is directly in parallel with the output: $I_{n4}$ in full.

**Total.** The four sources are uncorrelated, so

$$\overline{I_{n,out}^2} = 4kT\gamma\,(g_{m1} + g_{m2} + g_{m3} + g_{m4}) = 4kT\gamma\,(2g_{m1} + 2g_{m3}) ,$$

and dividing by $G_m^2 = g_{m1}^2$:

$$\overline{V_{n,in}^2}\Big|_{th} = \frac{8kT\gamma\,(g_{m1} + g_{m3})}{g_{m1}^2} = \frac{8kT\gamma}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right).$$

The factor 8 comes from the two devices of each matched pair; the load noise counts through $g_{m3}/g_{m1}$.

### Step 4 — Flicker noise and the tail source

- **$M_1$, $M_2$:** each flicker source is a voltage in series with one input of the pair, equivalent (in power) to one at the differential input. Together: $2K_N/[C_{ox}(WL)_1f]$.
- **$M_3$, $M_4$:** a gate voltage $V_{n3}$ makes $M_3$ conduct $g_{m3}V_{n3}$, which reaches the output in full like the noise current of Step 3. Referred to the input it becomes $g_{m3}V_{n3}/g_{m1}$, so its power is multiplied by $(g_{m3}/g_{m1})^2$; likewise for $M_4$. Together: $2K_P(g_{m3}/g_{m1})^2/[C_{ox}(WL)_3f]$.

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{2K_N}{C_{ox}(WL)_1f} + \frac{2K_P}{C_{ox}(WL)_3f}\left(\frac{g_{m3}}{g_{m1}}\right)^2 .$$

**Tail current source.** Its noise splits equally between $M_1$ and $M_2$; the half in $M_1$ is mirrored into the output and the half in $M_2$ is drawn from it, so the two cancel: tail noise is common-mode.

### Step 5 — Closing the loop: the capacitors do not change the input-referred noise

Lump all the op-amp noise into one source $V_n$ (with $\overline{V_n^2}$ from Steps 3–4) in series with the non-inverting input (with the polarity in the diagram, that input sits at $V_{in} - V_n$), and treat the op amp as noiseless with gain $A_0$.

<!-- diagram: diagram-01.cir -->

$$
\begin{aligned}
V_{out} &= A_0\,(V_{in} - V_n - V_X) = A_0\,(V_{in} - V_n - \beta V_{out})\\
V_{out}\,(1 + \beta A_0) &= A_0\,(V_{in} - V_n)\\
V_{out} &= \frac{A_0}{1 + \beta A_0}\,(V_{in} - V_n) .
\end{aligned}
$$

$V_n$ reaches the output exactly as if it were part of $V_{in}$ (its sign does not matter for noise power). Dividing the output noise by the closed-loop gain $A_0/(1 + \beta A_0)$ returns $V_n$ itself: **the input-referred noise of the closed-loop circuit is the op amp's input-referred noise**, independent of $C_1$ and $C_2$. Only the *output* noise depends on them: $\overline{V_{n,out}^2} \approx \overline{V_n^2}\,(1 + C_2/C_1)^2$ when $\beta A_0 \gg 1$.

### Step 6 — Sense of scale (illustration only)

The sizes are not given, so as an example take $(W/L)_{1,2} = 50/0.5$, $(W/L)_{3,4} = 100/0.5$, $I_{SS} = 1$ mA, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $\gamma = 2/3$, $T = 300$ K. Each device carries 0.5 mA.

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

**Common mistake.** Dividing the input-referred noise by the loop gain, or multiplying it by $1 + C_2/C_1$. Feedback scales signal and noise by the same closed-loop gain; only the *output* noise is multiplied by $(1 + C_2/C_1)^2$.

**Common mistake.** Attributing noise to $C_1$ and $C_2$. Ideal capacitors are lossless; unlike resistive feedback, a capacitive network adds no noise.

**Common mistake.** Adding the mirror's noise $4kT\gamma g_{m3}$ directly to the input pair's $4kT\gamma/g_{m1}$ term, or forgetting the factor 2 for the pairs. Referred to the input, each load device contributes $4kT\gamma g_{m3}/g_{m1}^2$, and all four devices count.

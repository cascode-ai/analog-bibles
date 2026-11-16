# Detailed solution - R494

**Approach.** Model every transistor's channel thermal noise as a current source $\overline{I_n^2} = 4kT\gamma g_m$ between its drain and source. Find how much differential output noise each source produces, add the powers (the sources are uncorrelated), and divide by the square of the differential gain. Because the circuit is symmetric, it is enough to analyse one half circuit and double its contribution.

### Step 1 — The circuit and the meaning of "input-referred noise"

Reading the figure:

- **Stage 1.** NMOS differential pair $M_1$–$M_2$, with sources tied at node P and a tail current $I_{SS}$. Its loads are the PMOS current sources $M_3$ (at node X) and $M_4$ (at node Y), whose gates sit at the bias voltage $V_{b1}$.
- **Stage 2.** Two PMOS common-source amplifiers: $M_5$ (gate at X, output $V_{out1}$) and $M_6$ (gate at Y, output $V_{out2}$). Their loads are the NMOS current sources $M_7$ and $M_8$.
- The input is the voltage between the gates of $M_1$ and $M_2$. The output is $V_{out1} - V_{out2}$.

The **input-referred noise voltage** $\overline{V_{n,in}^2}$ is the single noise source which, placed in series with the input of a *noiseless* copy of the amplifier, produces the same output noise as all the real noise sources together:

$$\overline{V_{n,in}^2} = \frac{\overline{V_{n,out}^2}}{A_v^2} .$$

Here $\overline{V_{n,out}^2}$ is the total output noise power spectral density (in V²/Hz) and $A_v$ is the differential voltage gain. Each transistor's noise is independent of the others, so their **powers add**.

Noise model: each transistor has a channel thermal-noise current $\overline{I_n^2} = 4kT\gamma g_m$ (A²/Hz) between its drain and source. Here $k = 1.38\times10^{-23}$ J/K is Boltzmann's constant, $T = 300$ K, $\gamma = 2/3$, and $g_m$ is the device transconductance. The common factor is

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

### Step 2 — Bias currents and small-signal parameters

**Bias currents.** The tail current splits equally between the two input devices, and each load carries the same current:

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.125\ \mathrm{mA}, \qquad I_{D5} = I_{D6} = I_{D7} = I_{D8} = 1\ \mathrm{mA}.$$

**Aspect ratios.** $W/L = 50/0.5 = 100$ for all devices except $M_{5,6}$, which have $W/L = 60/0.5 = 120$.

**Transconductances** from the square law, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = \sqrt{3.35\times10^{-6}}\ \mathrm{A/V} = 1.830\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = \sqrt{0.96\times10^{-6}}\ \mathrm{A/V} = 0.980\ \mathrm{mS},\\
g_{m5} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = \sqrt{9.216\times10^{-6}}\ \mathrm{A/V} = 3.036\ \mathrm{mS},\\
g_{m7} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.177\ \mathrm{mS}.
\end{aligned}
$$

By symmetry, $g_{m2} = g_{m1}$, $g_{m4} = g_{m3}$, $g_{m6} = g_{m5}$ and $g_{m8} = g_{m7}$.

**Output resistances** from channel-length modulation, $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 80\ \mathrm{k}\Omega, &
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega, &
r_{O7} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

**Resistance at each high-impedance node**, i.e. the parallel combination of the two drains connected there:

$$
\begin{aligned}
R_X &= r_{O1}\parallel r_{O3} = \frac{80\times40}{80+40}\ \mathrm{k}\Omega = 26.67\ \mathrm{k}\Omega,\\
R_{out} &= r_{O5}\parallel r_{O7} = \frac{5\times10}{5+10}\ \mathrm{k}\Omega = 3.33\ \mathrm{k}\Omega.
\end{aligned}
$$

**Gains** of each stage, magnitude of $g_m \times$ (node resistance):

$$
\begin{aligned}
A_1 &= g_{m1}R_X = (1.830\ \mathrm{mS})(26.67\ \mathrm{k}\Omega) = 48.8,\\
A_2 &= g_{m5}R_{out} = (3.036\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 10.1,\\
A_v &= A_1A_2 \approx 494 .
\end{aligned}
$$

### Step 3 — Why a half circuit is enough (noise of one side of a differential pair)

Take the noise current $I_{n1}$ of $M_1$ alone, flowing from X to P inside $M_1$, with the inputs grounded. Split it into two parts:

- a **common-mode** part: $+I_{n1}/2$ in $M_1$ *and* $+I_{n1}/2$ in $M_2$;
- a **differential** part: $+I_{n1}/2$ in $M_1$ and $-I_{n1}/2$ in $M_2$.

The two parts add up to $I_{n1}$ in $M_1$ and to zero in $M_2$, as required.

- The common-mode part moves X and Y identically, so it produces **no** differential output.
- For the differential part, node P does not move: it is a **virtual ground**, because the two halves push equal and opposite currents into it. Each side therefore behaves like a common-source stage with a grounded source:
$$v_X = -\frac{I_{n1}}{2}R_X, \qquad v_Y = +\frac{I_{n1}}{2}R_X \quad\Longrightarrow\quad v_X - v_Y = -I_{n1}R_X .$$

A differential input $v_{in}$ produces $v_X - v_Y = -g_{m1}R_Xv_{in}$. Setting the two outputs equal shows that $I_{n1}$ is equivalent to an input voltage $I_{n1}/g_{m1}$, exactly as if $M_1$ were a common-source stage with its source grounded.

The same decomposition applies to every noise source on one side (for example $M_3$'s current injected into X). So we analyse **one half circuit**, a two-stage amplifier made of CS stage $M_1$ (load $M_3$) followed by CS stage $M_5$ (load $M_7$), and then **multiply its input-referred noise power by 2** to account for the uncorrelated, identical noise of the other half.

### Step 4 — First-stage contribution ($M_1$ and $M_3$)

In the half circuit, the noise current of $M_1$ (from X to ground through $M_1$) and that of $M_3$ (from $V_{DD}$ into X) both flow into node X. Each is in parallel with its device. The total noise current power at X is

$$\overline{I_{n,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3}).$$

This current flows through the resistance $R_X$ at node X, producing a noise voltage

$$\overline{V_{n,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3})\,R_X^2 .$$

The gain from the input (gate of $M_1$) to X is $g_{m1}R_X$. Dividing by its square refers the noise to the input:

$$\overline{V_{n,in}^2}\Big|_{M_1,M_3} = \frac{4kT\gamma\,(g_{m1} + g_{m3})R_X^2}{(g_{m1}R_X)^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).$$

$R_X$ cancels, so the result does not depend on the exact value of $r_O$. Numerically:

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{1.830\ \mathrm{mS}} = 546.4\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{0.980\times10^{-3}}{3.35\times10^{-6}}\ \Omega = 292.5\ \Omega,\\
\text{sum} &= 838.8\ \Omega .
\end{aligned}
$$

The PMOS load adds about 54 % to the input pair's own noise. Its noise current enters node X directly, and the referral divides it by $g_{m1}^2$ rather than by $g_{m3}^2$.

### Step 5 — Second-stage contribution ($M_5$ and $M_7$)

The noise currents of $M_5$ and $M_7$ both flow into the output node $V_{out1}$, whose resistance is $R_{out}$:

$$\overline{V_{n,out1}^2} = 4kT\gamma\,(g_{m5} + g_{m7})\,R_{out}^2 .$$

The gain from the input to $V_{out1}$ is $(g_{m1}R_X)(g_{m5}R_{out})$. Divide by its square:

$$\overline{V_{n,in}^2}\Big|_{M_5,M_7} = \frac{4kT\gamma\,(g_{m5} + g_{m7})R_{out}^2}{(g_{m1}R_X\,g_{m5}R_{out})^2} = 4kT\gamma\,\frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}.$$

Numerically:

$$
\begin{aligned}
g_{m1}R_X\,g_{m5} &= 48.8\times3.036\ \mathrm{mS} = 0.1482\ \mathrm{S},\\
(g_{m1}R_X\,g_{m5})^2 &= 0.02196\ \mathrm{S^2},\\
g_{m5} + g_{m7} &= 3.036 + 5.177 = 8.213\ \mathrm{mS},\\
\frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2} &= \frac{8.213\times10^{-3}}{0.02196}\ \Omega = 0.37\ \Omega .
\end{aligned}
$$

That is 0.37 Ω against 838.8 Ω, a **0.04 %** contribution, so it is negligible. The reason: the second stage's noise reaches the input only after division by the first-stage gain squared, $48.8^2 \approx 2400$. This is the general rule that the first stage of a high-gain amplifier sets its noise.

### Step 6 — Add both halves

One half circuit gives

$$\overline{V_{n,in,half}^2} = 4kT\gamma\,(838.8 + 0.37)\ \Omega = (1.104\times10^{-20})(839.2)\ \mathrm{V^2/Hz} = 9.26\times10^{-18}\ \mathrm{V^2/Hz}.$$

The differential input sees the uncorrelated noise of both halves ($M_1$/$M_3$/$M_5$/$M_7$ and $M_2$/$M_4$/$M_6$/$M_8$), so the powers add:

$$\overline{V_{n,in}^2} = 2\times9.26\times10^{-18} = 1.85\times10^{-17}\ \mathrm{V^2/Hz}.$$

The rms noise density is the square root:

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{1.85\times10^{-17}}\ \mathrm{V/\sqrt{Hz}} = 4.3\ \mathrm{nV/\sqrt{Hz}}.$$

Written compactly:

$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}\right].$$

### Step 7 — Sources that do not contribute

- **Tail current source $I_{SS}$.** Its noise current splits equally between $M_1$ and $M_2$ (by symmetry), moving X and Y together. That is common-mode noise, which cancels in $V_{out1} - V_{out2}$ for a perfectly matched circuit.
- **Bias line $V_{b1}$.** It drives $M_3$ and $M_4$ (and $M_7$, $M_8$) identically, so any noise on it is also common-mode. It is treated as noiseless.

### Result

$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}\right] \approx 1.85\times10^{-17}\ \mathrm{V^2/Hz},$$

i.e. **about 4.3 nV/√Hz** referred to the differential input. The parameter values are $g_{m1} = 1.83$ mS, $g_{m3} = 0.98$ mS, $g_{m5} = 3.04$ mS, $g_{m7} = 5.18$ mS and $R_X = 26.7\ \mathrm{k}\Omega$.

- The first stage ($M_1$–$M_4$) sets essentially all of the noise: an effective 839 Ω per half.
- The second stage adds only 0.37 Ω per half.
- The tail source contributes only common-mode noise.

**Common mistake.** Counting only one half circuit, which gives $\sqrt{9.26\times10^{-18}} \approx 3.0$ nV/√Hz. The differential input "sees" the noise of $M_1$ *and* $M_2$, and of both loads. These are independent sources, so the half-circuit power must be doubled.

**Common mistake.** Leaving out the PMOS loads $M_3$, $M_4$, which gives about 3.5 nV/√Hz. Their noise currents flow straight into X and Y and are amplified exactly like the input pair's noise.

**Common mistake.** Assuming the second stage dominates because its devices carry 8 times more current and have large $g_m$. Its noise is divided by the first-stage gain squared (≈ 2400), which makes it negligible. Likewise, counting the tail-current noise as differential noise is wrong, because by symmetry it is purely common-mode.

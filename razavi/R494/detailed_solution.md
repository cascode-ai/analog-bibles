# Detailed solution - R494

**Approach.** Model each transistor's channel thermal noise as a drain–source current $4kT\gamma g_m$, refer each one to the input through the gain from the input to the node it flows into, and add the uncorrelated powers. By symmetry, one half circuit suffices, with its noise power doubled.

### Step 1 — The half circuit and the noise factor

Call the common source node of $M_1$ and $M_2$ P. The output is $V_{out1} - V_{out2}$, and $\overline{V_{n,in}^2} = \overline{V_{n,out}^2}/A_v^2$.

By symmetry, P is a virtual ground for differential signals and noise, and the common-mode part of any noise current cancels in $V_{out1} - V_{out2}$. So analyse **one half circuit**, the CS stage $M_1$ (source grounded, current-source load $M_3$, output X) followed by the CS stage $M_5$ (gate at X, current-source load $M_7$, output $V_{out1}$), and **double its input-referred noise power** for the identical, uncorrelated other half.

Every channel-noise current carries the factor

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

### Step 2 — Bias currents and small-signal parameters

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.125\ \mathrm{mA}, \qquad I_{D5} = I_{D6} = I_{D7} = I_{D8} = 1\ \mathrm{mA}.$$

$W/L = 50/0.5 = 100$ for all devices except $M_{5,6}$, which have $W/L = 60/0.5 = 120$. All transistors are saturated, so $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$, with $\mu_nC_{ox}$ for $M_1$, $M_2$, $M_7$, $M_8$ and $\mu_pC_{ox}$ for $M_3$–$M_6$:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = \sqrt{3.35\times10^{-6}}\ \mathrm{A/V} = 1.830\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = \sqrt{0.96\times10^{-6}}\ \mathrm{A/V} = 0.980\ \mathrm{mS},\\
g_{m5} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = \sqrt{9.216\times10^{-6}}\ \mathrm{A/V} = 3.036\ \mathrm{mS},\\
g_{m7} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.177\ \mathrm{mS}.
\end{aligned}
$$

By symmetry, $g_{m2} = g_{m1}$, $g_{m4} = g_{m3}$, $g_{m6} = g_{m5}$ and $g_{m8} = g_{m7}$. With $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 80\ \mathrm{k}\Omega, &
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega, &
r_{O7} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

Node resistances and stage gains:

$$
\begin{aligned}
R_X &= r_{O1}\parallel r_{O3} = \frac{80\times40}{80+40}\ \mathrm{k}\Omega = 26.67\ \mathrm{k}\Omega,\\
R_{out} &= r_{O5}\parallel r_{O7} = \frac{5\times10}{5+10}\ \mathrm{k}\Omega = 3.33\ \mathrm{k}\Omega,\\
A_1 &= g_{m1}R_X = (1.830\ \mathrm{mS})(26.67\ \mathrm{k}\Omega) = 48.8,\\
A_2 &= g_{m5}R_{out} = (3.036\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 10.1,\\
A_v &= A_1A_2 \approx 494 .
\end{aligned}
$$

### Step 3 — First-stage contribution ($M_1$ and $M_3$)

In the half circuit P is at ac ground, and the noise currents of $M_1$ and $M_3$ both flow at node X. They are uncorrelated, so their powers add, and they flow through $R_X$:

$$\overline{I_{n,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3}), \qquad \overline{V_{n,X}^2} = 4kT\gamma\,(g_{m1} + g_{m3})\,R_X^2 .$$

Dividing by the squared gain from the gate of $M_1$ to X, $(g_{m1}R_X)^2$:

$$\overline{V_{n,in}^2}\Big|_{M_1,M_3} = \frac{4kT\gamma\,(g_{m1} + g_{m3})R_X^2}{(g_{m1}R_X)^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).$$

$R_X$ cancels, so the result does not depend on the exact value of $r_O$. Numerically:

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{1.830\ \mathrm{mS}} = 546.4\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{0.980\times10^{-3}}{3.35\times10^{-6}}\ \Omega = 292.5\ \Omega,\\
\text{sum} &= 838.8\ \Omega .
\end{aligned}
$$

The PMOS load adds about 54 % to the input pair's own noise, because its noise current enters X directly and is referred through $g_{m1}^2$, not $g_{m3}^2$.

### Step 4 — Second-stage contribution ($M_5$ and $M_7$)

The noise currents of $M_5$ and $M_7$ both flow into $V_{out1}$, whose resistance is $R_{out}$:

$$\overline{V_{n,out1}^2} = 4kT\gamma\,(g_{m5} + g_{m7})\,R_{out}^2 .$$

Dividing by the squared gain from the input to $V_{out1}$, $(g_{m1}R_X\,g_{m5}R_{out})^2$:

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

That is 0.37 Ω against 838.8 Ω, a **0.04 %** contribution: negligible, because the second stage's noise is divided by the first-stage gain squared, $48.8^2 \approx 2400$.

### Step 5 — Add both halves

One half circuit gives

$$\overline{V_{n,in,half}^2} = 4kT\gamma\,(838.8 + 0.37)\ \Omega = (1.104\times10^{-20})(839.2)\ \mathrm{V^2/Hz} = 9.26\times10^{-18}\ \mathrm{V^2/Hz}.$$

The differential input sees the uncorrelated noise of both halves ($M_1$/$M_3$/$M_5$/$M_7$ and $M_2$/$M_4$/$M_6$/$M_8$), so

$$\overline{V_{n,in}^2} = 2\times9.26\times10^{-18} = 1.85\times10^{-17}\ \mathrm{V^2/Hz}, \qquad \sqrt{\overline{V_{n,in}^2}} = \sqrt{1.85\times10^{-17}}\ \mathrm{V/\sqrt{Hz}} = 4.3\ \mathrm{nV/\sqrt{Hz}}.$$

Written compactly:

$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}\right].$$

### Step 6 — Sources that do not contribute

- **Tail current source $I_{SS}$.** By symmetry its noise current splits equally between $M_1$ and $M_2$ and moves X and Y together: common-mode noise, which cancels in $V_{out1} - V_{out2}$ for a perfectly matched circuit.
- **Bias line $V_{b1}$.** It drives $M_3$ and $M_4$ (and $M_7$, $M_8$) identically, so any noise on it is also common-mode; it is treated as noiseless.

### Result

$$\overline{V_{n,in}^2} = 2\cdot4kT\gamma\left[\frac{1}{g_{m1}}\left(1 + \frac{g_{m3}}{g_{m1}}\right) + \frac{g_{m5} + g_{m7}}{(g_{m1}R_X\,g_{m5})^2}\right] \approx 1.85\times10^{-17}\ \mathrm{V^2/Hz},$$

i.e. **about 4.3 nV/√Hz** referred to the differential input, with $g_{m1} = 1.83$ mS, $g_{m3} = 0.98$ mS, $g_{m5} = 3.04$ mS, $g_{m7} = 5.18$ mS and $R_X = 26.7\ \mathrm{k}\Omega$.

- The first stage ($M_1$–$M_4$) sets essentially all of the noise: an effective 839 Ω per half.
- The second stage adds only 0.37 Ω per half.
- The tail source contributes only common-mode noise.

**Common mistake.** Counting only one half circuit, which gives $\sqrt{9.26\times10^{-18}} \approx 3.0$ nV/√Hz. The noise of $M_1$ *and* $M_2$, and of both loads, reaches the differential input as independent sources, so the half-circuit power must be doubled.

**Common mistake.** Leaving out the PMOS loads $M_3$, $M_4$, which gives about 3.5 nV/√Hz. Their noise currents flow straight into X and Y and are amplified exactly like the input pair's noise.

**Common mistake.** Assuming the second stage dominates because its devices carry 8 times more current: its noise is divided by the first-stage gain squared (≈ 2400). Likewise, tail-current noise is purely common-mode and must not be counted as differential noise.

# Detailed solution - R202

**Approach.** Use the differential half circuit (the tail node P is a virtual ground). Each output node is loaded by three devices: the diode-connected PMOS $M_3$, the PMOS current source $M_5$ (fixed gate bias), and the output resistance of the input device $M_1$. Find the small-signal resistance each one presents, combine them in parallel, and apply KCL at the output.

### Step 1 — Reading the circuit

From the figure (left half; the right half mirrors it):

- X is the left output, at the drain of $M_1$.
- $M_3$: PMOS, source at $V_{DD}$, gate tied to its drain at X (diode-connected).
- $M_5$: PMOS, source at $V_{DD}$, gate at the fixed bias $V_{b1}$, drain at X. It is a current source in parallel with $M_3$.
- $M_1$, $M_2$: NMOS input pair; $M_7$: tail.
- $V_{out} = V_X - V_Y$. All devices are saturated, $\lambda \ne 0$.

Body effect does not enter: the PMOS sources are at their bulk ($V_{DD}$), and the sources of $M_1$/$M_2$ are at the virtual ground P.

### Step 2 — Small-signal resistance of each load element

**Diode-connected $M_3$.** Its source is at AC ground and its gate and drain are both at X. Its drain-to-source current is $g_{m3}v_{gs3} + v_{ds3}/r_{O3} = g_{m3}v_X + v_X/r_{O3}$. Both terms are proportional to $v_X$, so $M_3$ is a resistance from X to AC ground:

$$R_{M3} = \frac{1}{g_{m3}}\parallel r_{O3}.$$

**Current source $M_5$.** Its gate ($V_{b1}$) and source ($V_{DD}$) are both at AC ground, so $v_{gs5} = 0$ and its controlled source contributes nothing. Only its output resistance is left:

$$R_{M5} = r_{O5}.$$

**Input device $M_1$.** With P at AC ground, $M_1$ is a controlled current $g_{m1}v_{in}$ (flowing from X to ground) in parallel with $r_{O1}$.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at the output node

Apply $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$. KCL at X (all currents leaving X):

$$g_{m1}\frac{v_d}{2} + v_X\left(g_{m3} + \frac{1}{r_{O3}} + \frac{1}{r_{O5}} + \frac{1}{r_{O1}}\right) = 0 .$$

Solve:

$$v_X = -\frac{g_{m1}}{g_{m3} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{1}{r_{O5}}}\cdot\frac{v_d}{2}.$$

By symmetry $v_Y = -v_X$, so $v_{out} = 2v_X$ and

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_{m1}\left(\frac{1}{g_{m3}}\Big\|\,r_{O1}\Big\|\,r_{O3}\Big\|\,r_{O5}\right) = -\frac{g_{m1}}{g_{m3} + 1/r_{O1} + 1/r_{O3} + 1/r_{O5}} .$$

### Step 4 — Why add $M_5$? (the point of the circuit)

KCL at the bias point: $M_1$ carries $I_{D1} = I_{SS}/2$. The current source $M_5$ supplies a fixed part $I_{D5}$, so the diode carries only

$$I_{D3} = I_{D1} - I_{D5}.$$

Since $g_{m3} = \sqrt{2\mu_pC_{ox}(W/L)_3I_{D3}}$, a smaller $I_{D3}$ means a smaller $g_{m3}$. Because $1/g_{m3}$ dominates the load, the gain $\approx g_{m1}/g_{m3}$ goes **up**, while the input pair keeps its full current and its $g_{m1}$. The price is that $r_{O5}$ now appears in parallel at the output, but it is usually still much larger than $1/g_{m3}$.

*Numerical illustration.* Take $I_{SS} = 1$ mA, $I_{D5} = 0.4$ mA, $W/L = 50/0.5$ for all devices, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $\lambda_n = 0.1\ \mathrm{V^{-1}}$ and $\lambda_p = 0.2\ \mathrm{V^{-1}}$ (example values):

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
g_{m3} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.1\ \mathrm{mA})} = 0.876\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega\ \ (0.05\ \mathrm{mS}),\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.1\ \mathrm{mA})} = 50\ \mathrm{k}\Omega\ \ (0.02\ \mathrm{mS}),\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.4\ \mathrm{mA})} = 12.5\ \mathrm{k}\Omega\ \ (0.08\ \mathrm{mS}),\\
A_v &= -\frac{3.66}{0.876 + 0.05 + 0.02 + 0.08} = -\frac{3.66}{1.026} = -3.57 .
\end{aligned}
$$

With plain diode loads carrying the full 0.5 mA, $g_{m3}$ would be $\sqrt{2(3.84\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 1.96$ mS and $r_{O3} = 10\ \mathrm{k}\Omega$, giving $A_v = -3.66/(1.96 + 0.05 + 0.1) = -1.73$. Bleeding 80 % of the load current through $M_5$ roughly doubles the gain.

### Result

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -g_{m1}\left(\frac{1}{g_{m3}}\Big\|\,r_{O1}\Big\|\,r_{O3}\Big\|\,r_{O5}\right).$$

Each output sees the diode-connected $M_3$ ($1/g_{m3}\parallel r_{O3}$), the current source $M_5$ ($r_{O5}$) and $r_{O1}$, with P a virtual ground. Because $M_5$ supplies most of the bias current, $g_{m3}$ is small and the gain is larger than with plain diode loads.

**Common mistake.** Treating $M_5$ as another diode, i.e. adding $g_{m5}$ to the load conductance and writing $g_{m1}/(g_{m3} + g_{m5})$. $M_5$'s gate is at a fixed bias, not at X, so its $g_m$ term is not excited. It contributes only $r_{O5}$.

**Common mistake.** Treating $M_3$ as a current source and writing $-g_{m1}(r_{O1}\parallel r_{O3}\parallel r_{O5})$. $M_3$ has its gate tied to its drain, so it presents the low resistance $1/g_{m3}$, which dominates the load.

**Common mistake.** Giving all transistors one common $g_m$ and $r_O$. That hides the whole purpose of the circuit: $g_{m3}$ is evaluated at the *reduced* current $I_{D1} - I_{D5}$, which makes it smaller than $g_{m1}$ and raises the gain.

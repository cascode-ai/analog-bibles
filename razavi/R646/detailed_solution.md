# Detailed solution - R646

**Approach.** For AC signals both $V_{DD}$ and $V_{cont}$ are grounds, so at each output node the inductor, the fixed parasitic capacitance and the varactor are all in parallel. The oscillation frequency is the resonance frequency of this tank. Requiring it to be 1 GHz fixes the total capacitance per node, and subtracting the 500-fF parasitic gives the most the diode can add.

### Step 1 — The tank seen at each node

Reading the figure:

- $L_P$ connects $V_{DD}$ to node X (and another $L_P$ connects $V_{DD}$ to Y).
- The cross-coupled NMOS pair, with a tail current source, provides the negative resistance that sustains the oscillation.
- Varactor diode $D_1$ connects X to the control voltage $V_{cont}$, and $D_2$ connects Y to $V_{cont}$. Each diode's cathode is at the output node, which sits near $V_{DD}$, and its anode is at $V_{cont}$, so the diodes are reverse-biased and act as voltage-dependent capacitors $C_D$.
- The fixed parasitic capacitance at each node (transistors, inductor, wiring) is $C_{par} = 500$ fF to ground.

For AC signals, $V_{DD}$ is a ground and so is $V_{cont}$, a DC control voltage. Therefore, at node X:

- $L_P$ goes from X to AC ground;
- $C_{par}$ goes from X to ground;
- $C_D$ goes from X to AC ground.

All three are **in parallel**:

<!-- diagram: diagram-01.cir -->

The tank capacitance per node is

$$C_{tot} = C_{par} + C_D .$$

The same holds at Y, by symmetry.

### Step 2 — Required total capacitance at 1 GHz

The oscillation frequency is the resonance frequency of $L_P$ with $C_{tot}$:

$$\omega_{osc} = \frac{1}{\sqrt{L_P\,C_{tot}}} \quad\Longrightarrow\quad C_{tot} = \frac{1}{\omega_{osc}^2L_P}.$$

Convert the frequency to radians per second:

$$\omega_{osc} = 2\pi f_{osc} = 2\pi\times10^9\ \mathrm{s^{-1}} = 6.283\times10^9\ \mathrm{rad/s}.$$

Then

$$
\begin{aligned}
\omega_{osc}^2 &= (6.283\times10^9)^2 = 3.948\times10^{19}\ \mathrm{s^{-2}},\\
\omega_{osc}^2L_P &= (3.948\times10^{19}\ \mathrm{s^{-2}})(5\times10^{-9}\ \mathrm{H}) = 1.974\times10^{11}\ \mathrm{F^{-1}},\\
C_{tot} &= \frac{1}{1.974\times10^{11}}\ \mathrm{F} = 5.07\times10^{-12}\ \mathrm{F} = 5.07\ \mathrm{pF}.
\end{aligned}
$$

### Step 3 — Maximum diode capacitance

$$C_{D,max} = C_{tot} - C_{par} = 5.07\ \mathrm{pF} - 0.50\ \mathrm{pF} = 4.57\ \mathrm{pF}.$$

Each of $D_1$ and $D_2$ may contribute at most about 4.57 pF to its own node. If a diode's capacitance were larger, $C_{tot}$ would exceed 5.07 pF and the oscillation frequency would fall below 1 GHz, so 1-GHz operation would no longer be reachable.

### Step 4 — Check with the differential view

Between X and Y, the two inductors are in series, $2L_P = 10$ nH. The two node capacitances to ground are also in series between X and Y, which gives $C_{tot}/2$. The differential resonance frequency is

$$\omega = \frac{1}{\sqrt{2L_P\cdot C_{tot}/2}} = \frac{1}{\sqrt{L_PC_{tot}}},$$

the same as Step 2. With $C_{tot} = 5.07$ pF the differential capacitance is 2.53 pF, which resonates with 10 nH at 1 GHz. ✓

Equivalently, $D_1$ and $D_2$ appear in series between X and Y ($V_{cont}$ is their common AC-grounded node), so as a pair they add at most $4.57/2 = 2.28$ pF of differential capacitance.

### Result

$V_{DD}$ and $V_{cont}$ are AC grounds, so each node's tank is $L_P$ in parallel with $C_{par} + C_D$:

$$C_{par} + C_D = \frac{1}{(2\pi\times10^9\ \mathrm{s^{-1}})^2(5\ \mathrm{nH})} = 5.07\ \mathrm{pF} \quad\Longrightarrow\quad C_{D,max} = 5.07 - 0.50 \approx 4.57\ \mathrm{pF}$$

for each of $D_1$ and $D_2$ (equivalently, 2.28 pF of differential capacitance for the series pair between X and Y).

**Common mistake.** Using the differential inductance $2L_P = 10$ nH together with the full single-ended capacitance. This gives a total of only 2.53 pF and $C_D \approx 2.03$ pF. Either work single-ended ($L_P$ with $C_{par} + C_D$) or differentially ($2L_P$ with half of each node's capacitance), but do not mix the two.

**Common mistake.** Treating the varactor as in series with the 500-fF parasitic. $V_{cont}$ is a DC voltage, i.e. an AC ground, so $D_1$ is in parallel with $C_{par}$ at node X.

**Common mistake.** Confusing hertz and radians per second, i.e. using $\omega = 10^9$ rad/s. That inflates $C_{tot}$ by $(2\pi)^2 \approx 39.5$ to about 200 pF.

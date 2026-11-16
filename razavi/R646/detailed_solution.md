# Detailed solution - R646

**Approach.** For ac signals both $V_{DD}$ and $V_{cont}$ are grounds, so at each output node the inductor, the fixed parasitic capacitance and the varactor are in parallel. Requiring this tank to resonate at 1 GHz fixes the total capacitance per node; subtracting the 500-fF parasitic gives the most the diode can add.

### Step 1 — The tank seen at each node

The diodes are reverse-biased (cathodes at X and Y, near $V_{DD}$; anodes at $V_{cont}$) and act as capacitors $C_D$. With $V_{DD}$ and the dc control voltage $V_{cont}$ both at ac ground, $L_P$, the parasitic $C_{par} = 500$ fF and $C_D$ all go from X to ground, **in parallel**:

<!-- diagram: diagram-01.cir -->

The tank capacitance per node (the same at Y by symmetry) is

$$C_{tot} = C_{par} + C_D .$$

### Step 2 — Required total capacitance at 1 GHz

$$\omega_{osc} = \frac{1}{\sqrt{L_P\,C_{tot}}} \quad\Longrightarrow\quad C_{tot} = \frac{1}{\omega_{osc}^2L_P},$$

with

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

Each of $D_1$ and $D_2$ may add at most about 4.57 pF to its own node; any more would put the oscillation frequency below 1 GHz.

### Step 4 — Check with the differential view

Between X and Y the two inductors are in series, $2L_P = 10$ nH, and the two node capacitances are in series, $C_{tot}/2$:

$$\omega = \frac{1}{\sqrt{2L_P\cdot C_{tot}/2}} = \frac{1}{\sqrt{L_PC_{tot}}},$$

the same as Step 2: 2.53 pF of differential capacitance resonates with 10 nH at 1 GHz. ✓ Likewise, $D_1$ and $D_2$ are in series between X and Y (through the ac-grounded $V_{cont}$), so as a pair they add at most $4.57/2 = 2.28$ pF of differential capacitance.

### Result

$V_{DD}$ and $V_{cont}$ are ac grounds, so each node's tank is $L_P$ in parallel with $C_{par} + C_D$:

$$C_{par} + C_D = \frac{1}{(2\pi\times10^9\ \mathrm{s^{-1}})^2(5\ \mathrm{nH})} = 5.07\ \mathrm{pF} \quad\Longrightarrow\quad C_{D,max} = 5.07 - 0.50 \approx 4.57\ \mathrm{pF}$$

for each of $D_1$ and $D_2$ (equivalently, 2.28 pF of differential capacitance for the series pair between X and Y).

**Common mistake.** Mixing the differential inductance $2L_P = 10$ nH with the full single-ended capacitance, which gives a total of only 2.53 pF and $C_D \approx 2.03$ pF. Work either single-ended or differentially, not both at once.

**Common mistake.** Treating the varactor as in series with the 500-fF parasitic. $V_{cont}$ is an ac ground, so $D_1$ is in parallel with $C_{par}$ at node X.

**Common mistake.** Using $\omega = 10^9$ rad/s (hertz confused with rad/s), which inflates $C_{tot}$ by $(2\pi)^2 \approx 39.5$ to about 200 pF.

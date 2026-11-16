# Detailed solution - R213

**Approach.** For a symmetric pair driven differentially, the differential gain equals the gain of the half circuit, a common-source stage $M_1$ loaded by the PMOS current source $M_3$: $g_{m1}(r_{O1}\parallel r_{O3})$. Compute $g_{m1}$ and the output resistances at the branch current $I_{SS}/2$.

### Step 1 — Half circuit and gain formula

By symmetry each branch carries

$$I_{D1} = I_{D2} = |I_{D3}| = |I_{D4}| = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

For a differential input the tail node is an ac ground, and $M_3$ (gate at the fixed $V_b$, source at $V_{DD}$) contributes only $r_{O3}$. So the drain X of $M_1$ moves by

$$v_X = -g_{m1}(r_{O1}\parallel r_{O3})\frac{v_{in}}{2},$$

the other drain moves by $-v_X$, $v_{out} = 2v_X$, and

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\right).$$

### Step 2 — Transconductance of the input devices

With $W/L = 50/0.5 = 100$:

$$g_{m1} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{2\times13.4\times10^{-3}\times0.5\times10^{-3}}\ \mathrm{A/V} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

### Step 3 — Output resistances

At the **branch** current of 0.5 mA:

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O1}\parallel r_{O3} &= \frac{20\times10}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega.
\end{aligned}
$$

### Step 4 — The gain

$$|A_v| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 24.4 .$$

(Including the factor $1 + \lambda V_{DS}$ in the bias current would change this by only a few percent.) The PMOS, with the larger $\lambda$, dominates the output resistance (10 kΩ versus 20 kΩ).

### Result

$$|A_v| = g_{m1}\left(r_{O1}\parallel r_{O3}\right) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) \approx 24.4,$$

with $g_{m1} = 3.66$ mS, $r_{O1} = 20\ \mathrm{k}\Omega$ and $r_{O3} = 10\ \mathrm{k}\Omega$. The gain is inverting from the gate of $M_1$ to the drain of $M_1$.

**Common mistake.** Using the diode-load formula $g_{m1}/g_{m3}$. $M_3$ and $M_4$ have their gates at the fixed bias $V_b$, so they are current sources contributing only $r_{O3}$.

**Common mistake.** Computing $g_m$ or $r_O$ with the full tail current of 1 mA. Each transistor carries only $I_{SS}/2 = 0.5$ mA; using 1 mA would halve both $r_O$ values and change $g_{m1}$ by $\sqrt2$.

**Common mistake.** Quoting the single-ended swing of one drain (half the gain, about 12.2) as the differential gain. The output is taken between the two drains, which move in opposite directions.

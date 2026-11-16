# Detailed solution - R213

**Approach.** For a symmetric pair driven differentially, the tail node is a virtual ground, so the differential gain equals the gain of the half circuit: a common-source stage $M_1$ loaded by the PMOS current source $M_3$. Its gain is $g_{m1}(r_{O1}\parallel r_{O3})$. We compute $g_{m1}$ from the square law, the output resistances from $\lambda$ at the bias current $I_{SS}/2$, and then the gain.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: NMOS differential pair with sources joined at the tail node, where the current source $I_{SS}$ pulls 1 mA to ground.
- $M_3$, $M_4$: PMOS current-source loads with gates at the bias $V_b$, chosen so that each carries $I_{SS}/2$.
- The input $V_{in}$ is applied between the two gates; the output $V_{out}$ is taken between the two drains.
- $(W/L)_{1-4} = 50/0.5 = 100$.

**Bias currents.** By symmetry each branch carries

$$I_{D1} = I_{D2} = |I_{D3}| = |I_{D4}| = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

### Step 2 — Half circuit and gain formula

For a differential input, the gates move by $\pm v_{in}/2$ and the two drain currents change by equal and opposite amounts. The tail node therefore stays at AC ground. Each half is a common-source stage:

- $M_1$: transconductance $g_{m1}$, output resistance $r_{O1}$ (drain to AC ground);
- $M_3$: gate at the fixed bias $V_b$ and source at $V_{DD}$, both AC ground, so it contributes only its output resistance $r_{O3}$ from the drain to AC ground.

KCL at the drain of $M_1$:

$$g_{m1}\frac{v_{in}}{2} + \frac{v_{X}}{r_{O1}\parallel r_{O3}} = 0\quad\Longrightarrow\quad v_X = -g_{m1}(r_{O1}\parallel r_{O3})\frac{v_{in}}{2}.$$

The other drain moves by $-v_X$, so $v_{out} = 2v_X$ and

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}\left(r_{O1}\parallel r_{O3}\right).$$

### Step 3 — Transconductance of the input devices

Square-law saturation current, $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, gives $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$:

$$g_{m1} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{2\times13.4\times10^{-3}\times0.5\times10^{-3}}\ \mathrm{A/V} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

### Step 4 — Output resistances

Channel-length modulation gives $r_O = 1/(\lambda I_D)$, evaluated at the **branch** current of 0.5 mA:

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O1}\parallel r_{O3} &= \frac{20\times10}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega.
\end{aligned}
$$

### Step 5 — The gain

$$|A_v| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 24.4 .$$

(Including the factor $1 + \lambda V_{DS}$ in the bias current would change this by only a few percent.)

*Intuition:* with current-source loads the gain is limited only by the output resistances, about the intrinsic gain of a single device divided by a small number. The PMOS has the larger $\lambda$ and dominates the output resistance (10 kΩ versus 20 kΩ).

### Result

$$|A_v| = g_{m1}\left(r_{O1}\parallel r_{O3}\right) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) \approx 24.4,$$

with $g_{m1} = 3.66$ mS, $r_{O1} = 20\ \mathrm{k}\Omega$ and $r_{O3} = 10\ \mathrm{k}\Omega$. The gain is inverting from the gate of $M_1$ to the drain of $M_1$.

**Common mistake.** Using the diode-load formula $g_{m1}/g_{m3}$. $M_3$ and $M_4$ have their gates at a fixed bias $V_b$, not at their drains. They are current sources and contribute only $r_{O3}$.

**Common mistake.** Computing $g_m$ or $r_O$ with the full tail current of 1 mA. Each transistor carries only $I_{SS}/2 = 0.5$ mA. Using 1 mA would halve both $r_O$ values and change $g_{m1}$ by $\sqrt2$.

**Common mistake.** Quoting the single-ended swing of one drain (half the gain, about 12.2) as the differential gain. The output is taken between the two drains, which move in opposite directions, so the differential gain is $g_{m1}(r_{O1}\parallel r_{O3})$.

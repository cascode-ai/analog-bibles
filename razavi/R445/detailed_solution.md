# Detailed solution - R445

**Approach.** $M_7$ and $M_8$ form the tail of the bottom NMOS pair, and their gates are driven by the two outputs. With the outputs at their common-mode (CM) level, each has $V_{GS} = 1.5$ V but only $V_{DS} = V_P = 0.1$ V, so they operate in the **triode** region and act as voltage-controlled resistors. We find the current through each and solve the triode current equation for $W/L$.

### Step 1 — Reading the circuit

From the figure:

- $M_9$, $M_{10}$ (top) are PMOS current sources, followed by PMOS cascode devices; the outputs $V_{out1}$ and $V_{out2}$ are below them, then NMOS cascode devices.
- $M_5$ and $M_6$ are the bottom NMOS pair, with their gates tied to $V_b$ as drawn. Their sources are tied together at node P.
- $M_7$ and $M_8$ are connected **in parallel** between P and ground (sources and bulks grounded). The gate of $M_7$ is wired to $V_{out1}$ and the gate of $M_8$ to $V_{out2}$.

So the tail of the pair is not a fixed current source: it is a pair of transistors whose conductance depends on the output voltages. This is a common-mode feedback (CMFB) arrangement using triode devices.

### Step 2 — Current through $M_7$ and $M_8$

KCL at node P: all the current of $M_5$ and $M_6$ flows down through $M_7$ and $M_8$:

$$I_{D7} + I_{D8} = I_{D5} + I_{D6} = 0.5\ \mathrm{mA} + 0.5\ \mathrm{mA} = 1\ \mathrm{mA}.$$

At the operating point the two outputs are equal, $V_{out1} = V_{out2} = V_{out,CM} = 1.5$ V. $M_7$ and $M_8$ are identical, and they have the same gate voltage (1.5 V), the same drain voltage ($V_P$) and the same source voltage (ground). They therefore carry equal currents:

$$I_{D7} = I_{D8} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

### Step 3 — Terminal voltages and region of operation

The sources of $M_7$ and $M_8$ are grounded and their bulks are at ground, so $V_{SB} = 0$: **no body effect**, $V_{TH} = V_{TH0} = 0.7$ V.

$$
\begin{aligned}
V_{GS7} &= V_{out,CM} - 0 = 1.5\ \mathrm{V},\\
V_{DS7} &= V_P - 0 = 0.1\ \mathrm{V},\\
V_{GS7} - V_{TH} &= 1.5\ \mathrm{V} - 0.7\ \mathrm{V} = 0.8\ \mathrm{V}.
\end{aligned}
$$

Since $V_{DS7} = 0.1\ \mathrm{V} < V_{GS7} - V_{TH} = 0.8$ V, the device is in the **triode (linear) region**, not in saturation. The saturation formula would be wrong here.

### Step 4 — Triode current equation and the aspect ratio

In the triode region the square-law model gives

$$I_D = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS} - V_{TH})V_{DS} - \frac{V_{DS}^2}{2}\right].$$

Evaluate the bracket:

$$
\begin{aligned}
(V_{GS} - V_{TH})V_{DS} - \frac{V_{DS}^2}{2} &= (0.8\ \mathrm{V})(0.1\ \mathrm{V}) - \frac{(0.1\ \mathrm{V})^2}{2}\\
&= 0.080\ \mathrm{V^2} - 0.005\ \mathrm{V^2}\\
&= 0.075\ \mathrm{V^2}.
\end{aligned}
$$

Set the current to 0.5 mA and solve for $W/L$:

$$
\begin{aligned}
0.5\ \mathrm{mA} &= (134\ \mu\mathrm{A/V^2})\left(\frac{W}{L}\right)(0.075\ \mathrm{V^2})\\
\frac{W}{L} &= \frac{0.5\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(0.075\ \mathrm{V^2})}\\
&= \frac{0.5\times10^{-3}}{1.005\times10^{-5}}\\
&= 49.8 .
\end{aligned}
$$

With $L = 0.5\ \mu\mathrm{m}$:

$$W_7 = W_8 = 49.8\times0.5\ \mu\mathrm{m} \approx 25\ \mu\mathrm{m}.$$

### Step 5 — Check with the deep-triode (resistor) approximation

For small $V_{DS}$ the $V_{DS}^2/2$ term is often dropped, and the device is treated as a resistor

$$R_{on} = \frac{1}{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})} .$$

The two resistors in parallel must drop 0.1 V while carrying 1 mA, so $R_{on7}\parallel R_{on8} = 0.1\ \mathrm{V}/1\ \mathrm{mA} = 100\ \Omega$, i.e. $R_{on} = 200\ \Omega$ each:

$$
\frac{W}{L} = \frac{1}{\mu_nC_{ox}(V_{GS} - V_{TH})R_{on}} = \frac{1}{(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})(200\ \Omega)} = 46.6 .
$$

The approximation underestimates $W/L$ by about 6 %, because with $V_{DS}/(V_{GS} - V_{TH}) = 1/8$ the quadratic term is not entirely negligible. The full triode equation (Step 4) is the more accurate answer.

### Step 6 — Why this sets the output CM level

The PMOS sources $M_9$, $M_{10}$ fix the branch currents at 0.5 mA. Suppose the output CM rises above 1.5 V. The gate voltages of $M_7$ and $M_8$ rise, their on-resistance falls, and $V_P$ drops. This raises $V_{GS}$ of $M_5$ and $M_6$ (their gates are at a fixed bias), so they try to sink more current than $M_9$, $M_{10}$ supply, and the outputs are pulled back down. The loop settles where $M_5$ and $M_6$ carry exactly 0.5 mA each. With the sizes chosen above, that happens precisely when the outputs sit at 1.5 V and $V_P = 0.1$ V.

### Result

$$\left(\frac{W}{L}\right)_7 = \left(\frac{W}{L}\right)_8 = \frac{0.5\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})\left[(1.5 - 0.7)(0.1) - \tfrac{0.1^2}{2}\right]\mathrm{V^2}} \approx 50,$$

i.e. $W \approx 25\ \mu\mathrm{m}$ with $L = 0.5\ \mu\mathrm{m}$ (about 47 if the $V_{DS}^2/2$ term is dropped). Equivalently, the parallel pair has a combined $W/L \approx 100$.

**Common mistake.** Treating $M_7$ and $M_8$ as saturated current sources. With $V_{DS} = 0.1$ V and an overdrive of 0.8 V they are deep in the triode region; the saturation formula would give $W/L = 2(0.5\ \mathrm{mA})/[(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})^2] \approx 11.7$, a completely different device.

**Common mistake.** Using the wrong current per device: 1 mA each (giving $W/L \approx 100$) or 0.25 mA each. $M_7$ and $M_8$ share the *total* current of the pair, 1 mA, so each carries 0.5 mA.

**Common mistake.** Taking $V_{GS}$ of $M_7$, $M_8$ as something other than the output CM level, for example $V_{out} - V_P$. Their sources are grounded, so $V_{GS} = 1.5$ V directly; $V_P$ is their *drain* voltage.

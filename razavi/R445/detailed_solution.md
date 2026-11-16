# Detailed solution - R445

**Approach.** $M_7$ and $M_8$, in parallel between P and ground with their gates driven by the two outputs, form the tail of the bottom NMOS pair: a common-mode feedback (CMFB) arrangement using triode devices. At the output CM level each has $V_{GS} = 1.5$ V but only $V_{DS} = V_P = 0.1$ V, so it is in the **triode** region; find its current and solve the triode equation for $W/L$.

### Step 1 — Current and terminal voltages of $M_7$ and $M_8$

KCL at P: all the current of $M_5$ and $M_6$ flows down through $M_7$ and $M_8$:

$$I_{D7} + I_{D8} = I_{D5} + I_{D6} = 0.5\ \mathrm{mA} + 0.5\ \mathrm{mA} = 1\ \mathrm{mA}.$$

At the operating point $V_{out1} = V_{out2} = V_{out,CM} = 1.5$ V, so the identical $M_7$ and $M_8$ have the same gate, drain and source voltages and carry equal currents:

$$I_{D7} = I_{D8} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

Sources and bulks are grounded, so there is no body effect and $V_{TH} = 0.7$ V:

$$
\begin{aligned}
V_{GS7} &= V_{out,CM} - 0 = 1.5\ \mathrm{V},\\
V_{DS7} &= V_P - 0 = 0.1\ \mathrm{V},\\
V_{GS7} - V_{TH} &= 1.5\ \mathrm{V} - 0.7\ \mathrm{V} = 0.8\ \mathrm{V}.
\end{aligned}
$$

$V_{DS7} = 0.1\ \mathrm{V} < V_{GS7} - V_{TH} = 0.8$ V, so the device is in the **triode** region.

### Step 2 — Triode current equation and the aspect ratio

$$I_D = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS} - V_{TH})V_{DS} - \frac{V_{DS}^2}{2}\right],$$

with

$$
\begin{aligned}
(V_{GS} - V_{TH})V_{DS} - \frac{V_{DS}^2}{2} &= (0.8\ \mathrm{V})(0.1\ \mathrm{V}) - \frac{(0.1\ \mathrm{V})^2}{2}\\
&= 0.080\ \mathrm{V^2} - 0.005\ \mathrm{V^2}\\
&= 0.075\ \mathrm{V^2}.
\end{aligned}
$$

Setting the current to 0.5 mA:

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

### Step 3 — Check with the deep-triode (resistor) approximation

Dropping the $V_{DS}^2/2$ term treats each device as $R_{on} = 1/[\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})]$. The pair must drop 0.1 V at 1 mA, so $R_{on7}\parallel R_{on8} = 0.1\ \mathrm{V}/1\ \mathrm{mA} = 100\ \Omega$, i.e. $R_{on} = 200\ \Omega$ each:

$$
\frac{W}{L} = \frac{1}{\mu_nC_{ox}(V_{GS} - V_{TH})R_{on}} = \frac{1}{(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})(200\ \Omega)} = 46.6 .
$$

This is about 6 % low, because with $V_{DS}/(V_{GS} - V_{TH}) = 1/8$ the quadratic term is not entirely negligible; the full triode equation (Step 2) is the more accurate answer.

### Step 4 — Why this sets the output CM level

If the output CM rises above 1.5 V, $M_7$ and $M_8$ conduct harder and $V_P$ drops, so $M_5$ and $M_6$ (gates at a fixed bias) try to sink more than the 0.5 mA that $M_9$, $M_{10}$ supply, pulling the outputs back down. The loop settles where $M_5$ and $M_6$ carry exactly 0.5 mA each, which with these sizes is when the outputs sit at 1.5 V and $V_P = 0.1$ V.

### Result

$$\left(\frac{W}{L}\right)_7 = \left(\frac{W}{L}\right)_8 = \frac{0.5\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})\left[(1.5 - 0.7)(0.1) - \tfrac{0.1^2}{2}\right]\mathrm{V^2}} \approx 50,$$

i.e. $W \approx 25\ \mu\mathrm{m}$ with $L = 0.5\ \mu\mathrm{m}$ (about 47 if the $V_{DS}^2/2$ term is dropped). Equivalently, the parallel pair has a combined $W/L \approx 100$.

**Common mistake.** Treating $M_7$ and $M_8$ as saturated current sources. With $V_{DS} = 0.1$ V and an overdrive of 0.8 V they are deep in triode; the saturation formula would give $W/L = 2(0.5\ \mathrm{mA})/[(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})^2] \approx 11.7$.

**Common mistake.** Using 1 mA per device (giving $W/L \approx 100$) or 0.25 mA. $M_7$ and $M_8$ share the pair's total 1 mA, 0.5 mA each.

**Common mistake.** Taking $V_{GS}$ of $M_7$, $M_8$ as $V_{out} - V_P$. Their sources are grounded, so $V_{GS} = 1.5$ V; $V_P$ is their *drain* voltage.

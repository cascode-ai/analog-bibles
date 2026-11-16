# Detailed solution - R408

**Approach.** The required $V_{in}$ is the source voltage of $M_1$ plus its $V_{GS}$. The source voltage follows from KCL in the network $R_{S1}$–$R_F$–$R_{D2}$, into which $M_1$ and $M_3$ each inject 0.5 mA; $V_{GS1}$ follows from the square law, with a threshold raised by the body effect.

### Step 1 — KCL in the resistor network

Call the source of $M_1$ node S. The gate of $M_3$ draws no current, so $I_{D1} = |I_{D2}| = 0.5$ mA enters S from $M_1$, and $|I_{D3}| = 0.5$ mA enters the $V_{out}$ node from $M_3$. In mA, kΩ and V, with $I_F = (V_{out} - V_S)/R_F$ flowing from $V_{out}$ to S:

**KCL at $V_{out}$** (the 0.5 mA from $M_3$ leaves through $R_{D2}$ and $R_F$):

$$
\begin{aligned}
0.5 &= \frac{V_{out}}{3} + \frac{V_{out} - V_S}{3}\\
1.5 &= 2V_{out} - V_S .
\end{aligned}
$$

**KCL at S** (the 0.5 mA from $M_1$ plus $I_F$ leave through $R_{S1}$):

$$
\begin{aligned}
0.5 + \frac{V_{out} - V_S}{3} &= \frac{V_S}{3}\\
1.5 + V_{out} - V_S &= V_S\\
V_{out} &= 2V_S - 1.5 .
\end{aligned}
$$

**Solve:**

$$
\begin{aligned}
1.5 &= 2(2V_S - 1.5) - V_S = 3V_S - 3\\
V_S &= \frac{4.5}{3} = 1.5\ \mathrm{V},\\
V_{out} &= 2(1.5) - 1.5 = 1.5\ \mathrm{V},\\
I_F &= \frac{1.5 - 1.5}{3} = 0 .
\end{aligned}
$$

The network is symmetric: each node receives 0.5 mA and has 3 kΩ to ground, so each sits at $0.5\ \mathrm{mA}\times3\ \mathrm{k\Omega} = 1.5$ V and $R_F$ carries no current.

### Step 2 — Threshold of $M_1$ with the body effect

The bulk of $M_1$ is grounded, so $V_{SB1} = V_S - 0 = 1.5$ V and

$$
\begin{aligned}
V_{TH1} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB1}} - \sqrt{2|\phi_F|}\right)\\
&= 0.7 + 0.45\left(\sqrt{0.9 + 1.5} - \sqrt{0.9}\right)\ \mathrm{V}\\
&= 0.7 + 0.45\,(1.5492 - 0.9487)\ \mathrm{V}\\
&= 0.7 + 0.45\times0.6005\ \mathrm{V} = 0.7 + 0.270\ \mathrm{V} = 0.970\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Gate–source voltage of $M_1$

With $M_1$ saturated (as instructed, $\lambda$ neglected) and $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
V_{GS1} - V_{TH1} &= \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V},\\
V_{GS1} &= 0.970\ \mathrm{V} + 0.273\ \mathrm{V} = 1.243\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — Input bias voltage

$$V_{in} = V_S + V_{GS1} = 1.5\ \mathrm{V} + 1.243\ \mathrm{V} = 2.74\ \mathrm{V}.$$

Ignoring the body effect ($V_{TH1} = 0.7$ V) would give $V_{in} = 1.5 + 0.7 + 0.273 = 2.47$ V, 0.27 V too low.

### Step 5 — Check of the saturation assumption

Node X is the gate of $M_3$, so $V_X = V_{DD} - |V_{GS3}|$. The PMOS parameters are not given; with the values of the same device set ($\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $|V_{THP}| = 0.8$ V):

$$
\begin{aligned}
|V_{GS3}| &= 0.8 + \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = 0.8 + \sqrt{0.260}\ \mathrm{V} = 0.8 + 0.510 = 1.310\ \mathrm{V},\\
V_X &= 3 - 1.310 = 1.690\ \mathrm{V},\\
V_{DS1} &= V_X - V_S = 1.690 - 1.5 = 0.19\ \mathrm{V}.
\end{aligned}
$$

Saturation needs $V_{DS1} \ge V_{GS1} - V_{TH1} = 0.273$ V, so $M_1$ is actually at the edge of the triode region (about 0.08 V short); the stated saturation assumption is kept. (A real design would lower $V_S$ or widen $M_3$.) $M_3$ is saturated: $|V_{DS3}| = 3 - 1.5 = 1.5\ \mathrm{V} > 0.51$ V.

### Result

$V_S = V_{out} = 1.5$ V (no current flows in $R_F$), $V_{TH1} = 0.97$ V because of the body effect, $V_{GS1} = 1.243$ V, and therefore

$$V_{in} \approx 2.74\ \mathrm{V}$$

(2.47 V if the body effect were neglected). With typical PMOS values, $V_{DS1} \approx 0.19$ V, slightly below the 0.27-V overdrive, so $M_1$ is marginal; the saturation assumption of the problem is kept.

**Common mistake.** Assuming a current flows through $R_F$, or treating the source of $M_1$ as grounded (which gives $V_{in} \approx 1$ V). The equal 0.5-mA injections into equal 3-kΩ resistors put both nodes at 1.5 V.

**Common mistake.** Forgetting the body effect: $V_{SB} = 1.5$ V raises $V_{TH}$ from 0.7 V to 0.97 V, and leaving it out underestimates $V_{in}$ by 0.27 V.

**Common mistake.** Computing $V_{in}$ from node X. X is the *drain* of $M_1$; $V_{in}$ is set by $M_1$'s source voltage plus its $V_{GS}$.

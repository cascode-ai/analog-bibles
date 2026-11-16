# Detailed solution - R402

**Approach.** Work backwards from the given $I_{D2}$: the square law for $M_2$ fixes $V_X$, $R_{D1}$ then fixes $I_{D1}$, and KCL in the resistor network fixes the source voltage of $M_1$ and hence $V_{in}$. We then check that this operating point is physically possible. Finally we compute the small-signal gain with series–shunt feedback analysis and confirm it with exact nodal analysis.

### Step 1 — The circuit

Reading the figure:

- **$M_1$** (NMOS): gate at $V_{in}$, drain at node X (with $R_{D1}$ to $V_{DD}$), source at a node we call S.
- **$M_2$** (PMOS): source at $V_{DD}$, gate at X, drain at $V_{out}$ (with $R_{D2}$ to ground).
- **Feedback network:** $R_S$ from S to ground and $R_F$ from $V_{out}$ to S.

All resistors are 2 kΩ, $(W/L)_1 = (W/L)_2 = 50/0.5 = 100$ and $\lambda = \gamma = 0$. The gate of $M_2$ draws no current, so all of $R_{D1}$'s current flows into the drain of $M_1$.

Process constants:

$$
\begin{aligned}
\mu_nC_{ox}\frac WL &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
\mu_pC_{ox}\frac WL &= (38.4\ \mu\mathrm{A/V^2})(100) = 3.84\ \mathrm{mA/V^2}.
\end{aligned}
$$

### Step 2 — Gate voltage of $M_2$ from $I_{D2} = 1$ mA

Assume $M_2$ is saturated (checked in Step 4). Square-law saturation current of a PMOS:

$$I_{D2} = \frac12\mu_pC_{ox}\frac WL\,\big(|V_{GS2}| - |V_{TH2}|\big)^2 .$$

Solve for the overdrive $|V_{GS2}| - |V_{TH2}|$:

$$
\begin{aligned}
|V_{GS2}| - |V_{TH2}| &= \sqrt{\frac{2I_{D2}}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(1\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = \sqrt{0.5208\ \mathrm{V^2}} = 0.722\ \mathrm{V},\\
|V_{GS2}| &= 0.8\ \mathrm{V} + 0.722\ \mathrm{V} = 1.522\ \mathrm{V}.
\end{aligned}
$$

The source of $M_2$ is at $V_{DD}$, so its gate (node X) is at

$$V_X = V_{DD} - |V_{GS2}| = 3\ \mathrm{V} - 1.522\ \mathrm{V} = 1.478\ \mathrm{V}.$$

### Step 3 — Bias current of $M_1$

The current in $R_{D1}$ is fixed by the voltage across it, and all of it flows into $M_1$ (Ohm's law, plus KCL at X):

$$I_{D1} = \frac{V_{DD} - V_X}{R_{D1}} = \frac{3\ \mathrm{V} - 1.478\ \mathrm{V}}{2\ \mathrm{k\Omega}} = \frac{1.522\ \mathrm{V}}{2\ \mathrm{k\Omega}} = 0.761\ \mathrm{mA}.$$

Note that $I_{D1} \ne I_{D2}$: the two transistors are in different branches.

### Step 4 — DC voltages of the resistor network

Two currents enter the network: $I_{D2} = 1$ mA flows into the $V_{out}$ node from $M_2$, and $I_{D1} = 0.761$ mA flows into node S from the source of $M_1$. Let $I_F$ be the current in $R_F$ from $V_{out}$ to S. Using mA, kΩ and V:

**KCL at $V_{out}$:** $I_{D2}$ splits between $R_{D2}$ and $R_F$:

$$
\begin{aligned}
1 &= \frac{V_{out}}{2} + \frac{V_{out} - V_S}{2}\\
2 &= 2V_{out} - V_S .
\end{aligned}
$$

**KCL at S:** $I_{D1}$ and $I_F$ both leave through $R_S$:

$$
\begin{aligned}
0.761 + \frac{V_{out} - V_S}{2} &= \frac{V_S}{2}\\
1.522 + V_{out} - V_S &= V_S\\
V_{out} &= 2V_S - 1.522 .
\end{aligned}
$$

**Solve.** Substitute the second result into the first:

$$
\begin{aligned}
2 &= 2(2V_S - 1.522) - V_S = 3V_S - 3.044\\
V_S &= \frac{5.044}{3} = 1.681\ \mathrm{V},\\
V_{out} &= 2(1.681) - 1.522 = 1.841\ \mathrm{V},\\
I_F &= \frac{V_{out} - V_S}{R_F} = \frac{0.160\ \mathrm{V}}{2\ \mathrm{k\Omega}} = 0.080\ \mathrm{mA}.
\end{aligned}
$$

**Check $M_2$:** $|V_{DS2}| = V_{DD} - V_{out} = 3 - 1.841 = 1.159\ \mathrm{V} > 0.722\ \mathrm{V}$, so $M_2$ is indeed saturated.

### Step 5 — The formal value of $V_{in}$

Square law for $M_1$:

$$
\begin{aligned}
V_{GS1} - V_{TH} &= \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.761\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1136\ \mathrm{V^2}} = 0.337\ \mathrm{V},\\
V_{GS1} &= 0.7\ \mathrm{V} + 0.337\ \mathrm{V} = 1.037\ \mathrm{V},\\
V_{in} &= V_S + V_{GS1} = 1.681\ \mathrm{V} + 1.037\ \mathrm{V} = 2.72\ \mathrm{V}.
\end{aligned}
$$

### Step 6 — Is this operating point possible?

Compare the drain and source of $M_1$:

$$V_{DS1} = V_X - V_S = 1.478\ \mathrm{V} - 1.681\ \mathrm{V} = -0.20\ \mathrm{V}.$$

The "drain" is **below** the "source". An NMOS channel carries current from its higher-potential terminal to its lower-potential terminal, so $M_1$ cannot carry 0.761 mA from X down to S. Saturation would need $V_{DS1} \ge V_{GS1} - V_{TH} = 0.337$ V, which is far from satisfied. The numbers of Steps 2–5 therefore describe an **inconsistent bias point**: with these resistor values no $V_{in}$ can establish $I_{D2} = 1$ mA.

**How large can $I_{D2}$ actually get?** Raising $V_{in}$ further only pushes $M_1$ deeper into the triode region, toward a short between X and S, i.e. $V_X \to V_S$. For general currents $I_1 = I_{D1}$ and $I_2 = I_{D2}$ (mA), the two KCL equations of Step 4 give $V_S = (2I_2 + 4I_1)/3$, while $V_X = 3 - 2I_1$ and $I_2 = 1.92\,(2I_1 - 0.8)^2$. Setting $V_X = V_S$ and solving gives $I_1 \approx 0.73$ mA and $I_2 \approx 0.84$ mA. So even with $M_1$ fully on, $I_{D2}$ cannot exceed about 0.84 mA. If $M_1$ must stay saturated ($V_X - V_S \ge V_{GS1} - V_{TH}$), the limit is about 0.61 mA, reached at $V_{in} \approx 2.34$ V.

Below, the small-signal gain is computed **formally** with the stated currents, as the problem asks.

### Step 7 — Small-signal parameters

Square-law transconductance $g_m = 2I_D/(V_{GS} - V_{TH})$:

$$
\begin{aligned}
g_{m1} &= \frac{2(0.761\ \mathrm{mA})}{0.337\ \mathrm{V}} = 4.52\ \mathrm{mS}, \qquad \frac{1}{g_{m1}} = 221\ \Omega,\\
g_{m2} &= \frac{2(1\ \mathrm{mA})}{0.722\ \mathrm{V}} = 2.77\ \mathrm{mS}.
\end{aligned}
$$

With $\lambda = 0$ there are no $r_O$ terms, and with $\gamma = 0$ no body effect.

### Step 8 — Gain by feedback analysis (series–shunt)

**Feedback type.** $R_F$–$R_S$ sense $V_{out}$ (a shunt connection at the output) and return the voltage $v_S$ to the source of $M_1$, where it subtracts from $v_{in}$ because $v_{GS1} = v_{in} - v_S$ (series mixing). This is **series–shunt** (voltage–voltage) feedback. The forward path has two inverting stages, so it is non-inverting, and the loop is negative.

**Loading of the feedback network.**

- At the input (node S), with the output shorted to ground: $R_S\parallel R_F = 2\parallel2 = 1\ \mathrm{k\Omega}$.
- At the output, with node S disconnected from $M_1$ (open): $R_F + R_S = 4\ \mathrm{k\Omega}$.

<!-- diagram: diagram-01.cir -->

The open-loop circuit is therefore $M_1$ with a 1-kΩ degeneration resistor and $R_{D1}$ load, driving $M_2$, whose drain sees $R_{D2}$ in parallel with 4 kΩ.

**Open-loop gain.** Stage 1 is a degenerated common-source stage, gain $-R_{D1}/(1/g_{m1} + R_{deg})$:

$$A_1 = -\frac{R_{D1}}{1/g_{m1} + R_S\parallel R_F} = -\frac{2000\ \Omega}{221\ \Omega + 1000\ \Omega} = -1.637 .$$

Stage 2 is a PMOS common-source stage:

$$
\begin{aligned}
R_{L2} &= R_{D2}\parallel(R_F + R_S) = 2\parallel4 = 1.333\ \mathrm{k\Omega},\\
A_2 &= -g_{m2}R_{L2} = -(2.77\ \mathrm{mS})(1.333\ \mathrm{k\Omega}) = -3.695 .
\end{aligned}
$$

$$A_{open} = A_1A_2 = (-1.637)(-3.695) = 6.05 .$$

**Feedback factor** (voltage returned to S per volt at the output, S open):

$$\beta = \frac{R_S}{R_S + R_F} = \frac{2}{2 + 2} = 0.5 .$$

**Loop gain and closed-loop gain:**

$$
\begin{aligned}
T &= \beta A_{open} = 0.5 \times 6.05 = 3.03,\\
A_v &= \frac{A_{open}}{1 + T} = \frac{6.05}{4.03} = 1.50 .
\end{aligned}
$$

The gain is positive and well below the ideal value $1/\beta = 2$, because the loop gain is only about 3.

### Step 9 — Check by exact nodal analysis

Small-signal model: $M_1$ is a current $g_{m1}(v_{in} - v_S)$ from X to S; $M_2$ is a current $g_{m2}(0 - v_X) = -g_{m2}v_X$ into the output node; $R_{D1}$ goes from X to ground, $R_{D2}$ and $R_F$ hang off the output, and $R_S$ goes from S to ground. Units: mS, kΩ.

**KCL at X:** $v_X/R_{D1} + g_{m1}(v_{in} - v_S) = 0$, so $v_X = -g_{m1}R_{D1}(v_{in} - v_S)$. The current that $M_2$ injects into the output is then $g_{m1}g_{m2}R_{D1}(v_{in} - v_S) = 25.03\,(v_{in} - v_S)$.

**KCL at S:**

$$
\begin{aligned}
4.516\,(v_{in} - v_S) + \frac{v_{out} - v_S}{2} &= \frac{v_S}{2}\\
4.516\,v_{in} + 0.5\,v_{out} &= 5.516\,v_S\\
v_S &= 0.8187\,v_{in} + 0.0907\,v_{out} .
\end{aligned}
$$

**KCL at the output:**

$$
\begin{aligned}
25.03\,(v_{in} - v_S) &= \frac{v_{out}}{2} + \frac{v_{out} - v_S}{2} = v_{out} - 0.5\,v_S\\
25.03\,v_{in} &= v_{out} + 24.53\,v_S .
\end{aligned}
$$

**Substitute $v_S$:**

$$
\begin{aligned}
25.03\,v_{in} &= v_{out} + 24.53\,(0.8187\,v_{in} + 0.0907\,v_{out}) = 3.224\,v_{out} + 20.08\,v_{in}\\
4.95\,v_{in} &= 3.224\,v_{out}\\
\frac{v_{out}}{v_{in}} &= 1.53 .
\end{aligned}
$$

The exact value (1.53) is close to the two-port result (1.50). The small difference comes from the signal that $M_1$'s source current feeds forward through $R_F$ to the output, which the two-port approximation ignores.

### Result

- **Bias current of $M_1$:** $I_{D1} = (V_{DD} - V_X)/R_{D1} \approx 0.76$ mA, with $V_X = 1.48$ V set by $|V_{GS2}| = 1.52$ V.
- **Required $V_{in}$ (formal):** $V_{in} = V_S + V_{GS1} = 1.68 + 1.04 \approx 2.72$ V. However, this puts the source of $M_1$ (1.68 V) about 0.2 V **above** its drain (1.48 V), which is impossible for a conducting NMOS. With these resistor values $I_{D2} = 1$ mA cannot be established: $I_{D2}$ cannot exceed about 0.84 mA, and only about 0.61 mA with $M_1$ saturated.
- **Gain (formal, with the stated currents):** $g_{m1} = 4.52$ mS, $g_{m2} = 2.77$ mS, $A_{open} = 6.05$, $\beta = 0.5$, $T = 3.03$, so
$$A_v = \frac{V_{out}}{V_{in}} \approx +1.50\quad(\text{feedback analysis}),\qquad 1.53\ (\text{exact nodal analysis}).$$

**Common mistake.** Assuming $I_{D1} = I_{D2}$. The two devices sit in separate branches: $I_{D1}$ is set by the drop across $R_{D1}$, which must equal $|V_{GS2}|$, so $I_{D1} = 1.522\ \mathrm{V}/2\ \mathrm{k\Omega} = 0.76$ mA.

**Common mistake.** Quoting the gain as exactly $1/\beta = 2$, or as negative. The loop gain is only about 3, so $A_v = A_{open}/(1 + T) \approx 1.5$; and the two cascaded inverting stages make the overall gain positive.

**Common mistake.** Stopping after computing $V_{in} = 2.72$ V without checking the terminal voltages. A bias calculation is only finished when every device is confirmed to be in its assumed region; here $V_{DS1} < 0$ shows that the requested operating point does not exist.

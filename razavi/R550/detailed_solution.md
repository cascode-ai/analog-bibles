# Detailed solution - R550

**Approach.** The op amp forces $V_X = V_Y$. Each side is a stack of two base–emitter junctions, so the drop across $R_1$ equals *two* $\Delta V_{BE}$'s, which fixes the area ratio $n$. $V_{out}$ is then two $V_{EB}$'s (negative TC) plus a scaled PTAT voltage, and zero TC fixes $R_2$. The PMOS devices share one gate voltage, so their $W/L$ must follow the 2:1 current ratio, and the overdrive must fit in the small headroom left above $V_{out}$. Finally the op amp's input and output levels select its topology.

### Step 1 — Reading the circuit

- All four PMOS transistors have their sources at $V_{DD}$ and their gates on one line, driven by the op amp output (call this gate node G).
- **Left stack.** $M_3$ feeds the emitter of $Q_1$ (area $A$; base and collector grounded). That emitter node also drives the base of $Q_2$ (area $A$), whose emitter is node X, fed by $M_1$. So
$$V_X = |V_{EB1}| + |V_{EB2}|, \qquad I_{C1} = I_{D3} = 100\ \mu\mathrm{A},\quad I_{C2} = I_{D1} = 100\ \mu\mathrm{A}.$$
- **Right stack.** $M_4$ feeds the emitter of $Q_3$ (area $nA$), which drives the base of $Q_4$ (area $nA$). The emitter of $Q_4$ connects through $R_1$ to node Y and through $R_2$ to the drain of $M_2$, which is $V_{out}$. So
$$V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1, \qquad I_{C3} = I_{D4} = 50\ \mu\mathrm{A},\quad I_{C4} = I_{D2} = 50\ \mu\mathrm{A}.$$
- The op amp's − input is at X and its + input is at Y.

Base currents are neglected, so each bipolar transistor carries exactly its PMOS current.

### Step 2 — The PTAT relation and the value of $n$

The ideal op amp forces $V_X = V_Y$:

$$|V_{EB1}| + |V_{EB2}| = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1 .$$

Rearrange:

$$I_{D2}R_1 = \left(|V_{EB1}| - |V_{EB3}|\right) + \left(|V_{EB2}| - |V_{EB4}|\right).$$

Each difference compares a transistor of area $A$ at 100 μA with one of area $nA$ at 50 μA. With $|V_{EB}| = V_T\ln[I_C/(I_{S,unit}\cdot\text{area})]$:

$$|V_{EB1}| - |V_{EB3}| = V_T\ln\frac{100\ \mu\mathrm{A}/A}{50\ \mu\mathrm{A}/(nA)} = V_T\ln(2n).$$

The current *density* ratio is $2n$: twice the current in $1/n$ of the area. The $Q_2$–$Q_4$ pair gives the same $V_T\ln(2n)$. Hence

$$I_{D2}R_1 = 2V_T\ln(2n).$$

**Numbers.** $I_{D2}R_1 = (50\ \mu\mathrm{A})(1\ \mathrm{k}\Omega) = 50$ mV and $V_T = kT/q = 25.85$ mV at 300 K:

$$
\begin{aligned}
\ln(2n) &= \frac{50\ \mathrm{mV}}{2\times25.85\ \mathrm{mV}} = 0.967,\\
2n &= e^{0.967} = 2.63,\\
n &= 1.32 \approx 1.3 .
\end{aligned}
$$

$n$ is not free: it is forced by $R_1$ and the bias currents. Because two junctions are stacked, each pair needs only 25 mV of $\Delta V_{EB}$.

### Step 3 — Output voltage and zero TC: $R_2$

Go from ground up the right stack to $V_{out}$:

$$V_{out} = |V_{EB3}| + |V_{EB4}| + I_{D2}(R_1 + R_2).$$

Substitute $I_{D2} = 2V_T\ln(2n)/R_1$:

$$V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)\cdot2V_T\ln(2n).$$

**TC of each term.**

- Two junctions in series: $2\times(-1.5\ \mathrm{mV/K}) = -3.0$ mV/K.
- PTAT term: $2V_T\ln(2n) = 50$ mV is proportional to $T$, so its TC is $50\ \mathrm{mV}/300\ \mathrm{K} = 0.1667$ mV/K, multiplied by $(1 + R_2/R_1)$.

**Zero-TC condition:**

$$
\begin{aligned}
-3.0\ \mathrm{mV/K} + \left(1 + \frac{R_2}{R_1}\right)(0.1667\ \mathrm{mV/K}) &= 0\\
1 + \frac{R_2}{R_1} &= \frac{3.0}{0.1667} = 18\\
R_2 &= 17R_1 = 17\ \mathrm{k}\Omega .
\end{aligned}
$$

(With the textbook rule "PTAT voltage $= 17.2V_T$ per junction", the condition is $(1 + R_2/R_1)\cdot2\ln(2n) = 2\times17.2$, so $1 + R_2/R_1 = 34.4/1.934 = 17.8$ and $R_2 = 16.8$ kΩ, which is the same to rounding.)

**Output level:**

$$V_{out} \approx 2(0.8\ \mathrm{V}) + 18\times50\ \mathrm{mV} = 1.6 + 0.9 = 2.5\ \mathrm{V}.$$

Stacking two junctions doubles the bandgap voltage (about $2\times1.25$ V).

### Step 4 — An equally valid alternative ($R_2 = 18$ kΩ)

One can also go from X: since $V_Y = V_X$,

$$V_{out} = V_Y + I_{D2}R_2 = |V_{EB1}| + |V_{EB2}| + \frac{R_2}{R_1}\cdot2V_T\ln(2n).$$

If the −1.5 mV/K is applied to $Q_1$ and $Q_2$, zero TC gives $R_2/R_1 = 18$, i.e. $R_2 = 18$ kΩ. The two results differ because $Q_{1,2}$ and $Q_{3,4}$ run at different current densities, so their TCs cannot both be exactly −1.5 mV/K. Differentiating $|V_{EB1}| - |V_{EB3}| = V_T\ln(2n) = 25$ mV gives a TC difference of $25\ \mathrm{mV}/300\ \mathrm{K} = 0.083$ mV/K per transistor. The 17-vs-18 kΩ difference reflects only which pair the given slope is assigned to. We use $R_2 = 17$ kΩ below; $V_{out}$ is about 2.5 V either way.

### Step 5 — Sizing the PMOS transistors

**Ratio.** All four PMOS have the same $V_{GS}$ (common source and gate). In saturation, $|I_D| = \tfrac12\mu_pC_{ox}(W/L)(|V_{GS}| - |V_{TH}|)^2$, so the current is proportional to $W/L$:

$$\left(\frac WL\right)_1 = \left(\frac WL\right)_3 = 2\left(\frac WL\right)_2 = 2\left(\frac WL\right)_4 .$$

**Headroom.** $M_2$ is the tightest device: its drain is at $V_{out} \approx 2.5$ V, so

$$|V_{DS2}| = V_{DD} - V_{out} = 3 - 2.5 = 0.5\ \mathrm{V}.$$

Saturation requires $|V_{DS}| \ge |V_{ov}|$, where $|V_{ov}| = |V_{GS}| - |V_{TH}|$ is the overdrive, so $|V_{ov}| < 0.5$ V. Choose $|V_{ov}| = 0.3$ V to leave a 0.2-V margin.

**Aspect ratios** from the square law, $W/L = 2|I_D|/(\mu_pC_{ox}V_{ov}^2)$:

$$
\begin{aligned}
\left(\frac WL\right)_{2,4} &= \frac{2(50\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{100}{3.456} \approx 29,\\
\left(\frac WL\right)_{1,3} &= \frac{2(100\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} \approx 58 .
\end{aligned}
$$

For example, $W/L = 29\ \mu\mathrm{m}/1\ \mu\mathrm{m}$ and $58\ \mu\mathrm{m}/1\ \mu\mathrm{m}$. The overdrive (and hence the absolute size) is a free choice, as long as $|V_{ov}|$ stays well below 0.5 V; any $(W/L)_{2,4} \gtrsim 10$ (overdrive below about 0.5 V) works in principle. Long channels reduce channel-length modulation and mismatch, both of which disturb the current ratios.

**Gate voltage:**

$$|V_{GS}| = |V_{TH}| + |V_{ov}| = 0.8 + 0.3 = 1.1\ \mathrm{V}, \qquad V_G = 3 - 1.1 = 1.9\ \mathrm{V}.$$

**Saturation check** (each needs $|V_{DS}| \ge 0.3$ V):

| Device | Drain voltage | $\lvert V_{DS}\rvert$ | Saturated? |
|---|---|---|---|
| $M_1$ | $V_X \approx 1.6$ V | 1.4 V | yes |
| $M_2$ | $V_{out} \approx 2.5$ V | 0.5 V | yes (0.2-V margin) |
| $M_3$ | $\lvert V_{EB1}\rvert \approx 0.8$ V | 2.2 V | yes |
| $M_4$ | $\lvert V_{EB3}\rvert \approx 0.8$ V | 2.2 V | yes |

### Step 6 — Feedback polarity

Suppose the gate voltage G rises by a small amount. All four PMOS currents fall by the same fraction $\delta$.

- Node X falls by the change in two junction voltages, $\Delta V_X = -\delta\cdot2V_T \approx -\delta\times52$ mV (each $V_{EB}$ changes by $V_T\,\Delta I/I$).
- Node Y falls by that much *plus* the change in the drop across $R_1$, $\Delta V_Y = -\delta(2V_T + 50\ \mathrm{mV}) \approx -\delta\times102$ mV.

So $V_Y - V_X$ falls when G rises. For negative feedback the op amp must then push G back down, i.e. its output must follow $V_Y - V_X$: **non-inverting input at Y, inverting input at X**, as drawn.

### Step 7 — Choice of op amp topology

Requirements:

- input common-mode level $V_X = V_Y \approx 1.6$ V;
- output level $V_G \approx 1.9$ V;
- load: only the PMOS gates (capacitive, no dc current), so no output buffer is needed;
- moderate gain, and easy compensation inside the loop.

A **single-stage five-transistor OTA with an NMOS input pair and a PMOS current-mirror load** fits well:

<!-- diagram: diagram-01.cir -->

The input pair $M_5$, $M_6$ has its common source at node P, biased by the tail device $M_9$. The diode-connected PMOS $M_7$ and the mirror $M_8$ form the load, and the output G is the drain of $M_8$/$M_6$. Y drives $M_5$ (the diode side), so it is the non-inverting input; X drives $M_6$.

- **Input range.** The lowest input is $V_{GS,N} + V_{DS,tail} \approx (0.7 + 0.2) + 0.2 = 1.1$ V. The highest is $V_{DD} - |V_{GS,P}| + V_{TH,N} \approx 3 - 1.1 + 0.7 = 2.6$ V (the input devices leave saturation above it). 1.6 V lies comfortably inside.
- **Output level.** In balance, the output sits at the diode voltage of the load, $V_{DD} - |V_{GS7}|$. Sizing $M_7$, $M_8$ for $|V_{GS}| \approx 1.1$ V puts the quiescent output right at the required 1.9 V, which also minimizes systematic offset.
- **Stability.** One high-impedance node (G, loaded by the four PMOS gates), so the loop is easy to compensate.

A PMOS-input OTA would be marginal: its maximum input level is about $V_{DD} - |V_{GS,P}| - V_{DS,tail} \approx 3 - 1.0 - 0.2 = 1.8$ V, barely above 1.6 V. Its NMOS-mirror output would also rest near $V_{GS,N} \approx 0.9$ V, far from the needed 1.9 V. If more gain is needed, a two-stage op amp can be used, but the first stage should still have NMOS inputs.

### Result

- **PTAT condition:** $I_{D2}R_1 = 2V_T\ln(2n) = 50$ mV, so $2n \approx 2.63$ and $n \approx 1.3$.
- **Resistor:** $R_2 \approx 17$ kΩ from $(1 + R_2/R_1)(50\ \mathrm{mV}/300\ \mathrm{K}) = 2\times1.5$ mV/K (16.8 kΩ with the $17.2V_T$ rule; 18 kΩ if the −1.5 mV/K slope is assigned to $Q_{1,2}$). $V_{out} \approx 2.5$ V.
- **PMOS sizes:** $(W/L)_1 = (W/L)_3 = 2(W/L)_2 = 2(W/L)_4$, e.g. $(W/L)_{2,4} \approx 29$ and $(W/L)_{1,3} \approx 58$ for a 0.3-V overdrive. This keeps $M_2$ saturated with its 0.5 V of $|V_{DS}|$; the gate line sits at about 1.9 V.
- **Op amp:** a single-stage five-transistor OTA with an NMOS input pair and PMOS mirror load. Its inputs at about 1.6 V and output at about 1.9 V fall within its ranges. Inverting input at X, non-inverting input at Y.

**Common mistake.** Designing as if there were a single junction per side: using $I_{D2}R_1 = V_T\ln n$ (or $V_T\ln(2n)$) and $\partial V_{out}/\partial T = -1.5\ \mathrm{mV/K} + \ldots$. This gives a wrong $n$ and $R_2 \approx 8$ kΩ. Both stacks have two junctions, so both the PTAT voltage and the negative TC are doubled.

**Common mistake.** Ignoring the 2:1 current ratio, either in $\Delta V_{EB}$ (writing $V_T\ln n$ instead of $V_T\ln(2n)$) or in the transistor sizes (making all four PMOS equal). With a shared gate voltage, a PMOS carrying twice the current must be twice as wide.

**Common mistake.** Choosing a large overdrive (small $W/L$) for the PMOS devices. $M_2$ has only $3 - 2.5 = 0.5$ V across it, so an overdrive above 0.5 V (for example $W/L = 5$, giving $|V_{ov}| = 0.72$ V) pushes $M_2$ into triode and destroys the current ratio.

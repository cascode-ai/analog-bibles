# Detailed solution - R027

**Approach.** The key observation is that $C_1$ sits between the drain (X) and the source (S) of $M_1$, not from X to ground. After the switch opens, nodes X and S are joined to the rest of the circuit only through the current source $I_1$. KCL for this "island" shows that the ideal circuit cannot supply $I_1$; the small physical elements that resolve the contradiction (parasitic capacitance and the source–bulk junction) then set the waveforms.

### Step 1 — Before $t = 0$

Call the source node of $M_1$ S. With the battery holding X, $M_1$ is a source follower; in the normal case it is on and saturated and carries the whole of $I_1$, supplied by the battery:

$$I_X(0^-) = I_1, \qquad V_S(0^-) = V_b - V_{TH} - \sqrt{\frac{2I_1}{\beta}},$$

with $V_{TH} \approx 0.7$ V. The capacitor voltage is given, $V_{C1} = V_X - V_S = 3$ V, so $V_X(0^-) = V_S(0^-) + 3$ V.

### Step 2 — After the switch opens: the island and a KCL contradiction

Nodes X and S are now connected to each other through $M_1$ and $C_1$, and to anything else only through the gate of $M_1$ (no current) and the current source, which pulls $I_1$ out of S. With $i_C$ the current through $C_1$ from X to S:

$$
\begin{aligned}
\text{KCL at X:}\quad & I_X + i_C = 0 \quad(\text{X has nothing else connected}),\\
\text{KCL at S:}\quad & I_X + i_C = I_1 .
\end{aligned}
$$

Together these give $0 = I_1$: a **contradiction**. A floating capacitor holds equal and opposite charges, so the island has zero net charge and cannot deliver a net current; $C_1$ can only circulate current around the loop $C_1$–$M_1$.

So the ideal circuit has no solution, and the answer is set by small physical elements that the schematic omits:

- the parasitic capacitances from X and S to ground (junction capacitances, wiring), $C_{px}$ and $C_{ps}$, typically tens of femtofarads;
- the pn junction between the n+ source and the grounded p bulk, drawn below as $D_{SB}$. (The drain–bulk junction, not drawn, matters only near the end, Step 5.)

The island with these paths:

<!-- diagram: diagram-01.cir -->

### Step 3 — Fast drop of both nodes until the junction conducts

Adding the two node equations with the parasitics included:

$$C_{px}\frac{dV_X}{dt} + C_{ps}\frac{dV_S}{dt} = -I_1 + I_{junction}.$$

Until a junction conducts, $I_1$ is drawn from the tiny parasitic capacitances, so the island's potential falls at roughly $I_1/(C_{px} + C_{ps})$. For $I_1 = 100\ \mu$A and 40 fF in total this is 2.5 V/ns, essentially a step on the time scale of $C_1$. During this drop $V_X$ and $V_S$ fall **together**, because the voltage across the much larger $C_1$ cannot change quickly ($V_X \approx V_S + 3$ V), and the fall stops when the source–bulk junction is forward biased enough to carry $I_1$ from the grounded substrate, at $V_S \approx -0.6$ to $-0.7$ V. $V_X$ thus drops from its battery value to about $3 - 0.6 \approx 2.3$–$2.4$ V.

### Step 4 — $M_1$ turns on harder and discharges $C_1$

With $V_S$ pinned near $-0.6$ V, the gate–source voltage has **increased**:

$$V_{GS} = V_b - V_S \approx V_b + 0.6\ \mathrm{V}.$$

$M_1$ was already on, so it now conducts *more* than $I_1$, from X to S inside the island. KCL now works out: the junction supplies $I_1$ to the current source, while $M_1$'s current discharges $C_1$ ($i_C = -I_X$).

**Saturation plateau.** Initially $V_{DS} = V_{C1} \approx 3$ V exceeds $V_{GS} - V_{TH}$, so

$$I_X \approx \tfrac12\beta\,(V_b + 0.6 - V_{TH})^2 \quad(\text{roughly constant, and } > I_1),$$

and $V_{C1}$ (hence $V_X = V_S + V_{C1}$) **ramps down linearly** at $I_X/C_1$.

**Triode decay.** Once $V_{C1} < V_{GS} - V_{TH}$, $M_1$ is in triode, and its current $\beta[(V_{GS} - V_{TH})V_{C1} - \tfrac12V_{C1}^2]$ falls toward zero as $V_{C1} \to 0$, with an exponential-like tail of time constant $R_{on}C_1$, $R_{on} = 1/[\beta(V_{GS} - V_{TH})]$.

### Step 5 — Final state

- $C_1$ is discharged: $V_X \to V_S \approx -0.6$ V. Near the end the drain–bulk junction also conducts, and the two junctions share $I_1$.
- $I_X$ decays to (essentially) zero; a small residual remains, equal to the part of $I_1$ that the drain–bulk junction supplies and that then passes through $M_1$ to S.

**With a real current source** (a transistor needing some voltage across it), the fall of node S stops near 0 V instead, where the source runs out of compliance; $M_1$ still discharges $C_1$, and $V_X$ ends near 0 V. Either way **$V_X$ ends near 0 V or slightly below**, and $I_X$ ends near zero.

**Edge case.** If $V_b$ is so low that $M_1$ is off even with $V_S \approx -0.7$ V (i.e. $V_b \lesssim 0$), then $M_1$ was also off before $t = 0$ and $I_1$ already flowed through the junction. Opening the switch changes nothing: $V_X$ stays constant and $I_X = 0$.

### Step 6 — Numerical illustration

Take $V_b = 1.5$ V, $I_1 = 100\ \mu$A, $C_1 = 1$ pF and $\beta = 1\ \mathrm{mA/V^2}$.

**Before $t = 0$:**

$$V_S = 1.5 - 0.7 - \sqrt{\frac{2\times0.1\ \mathrm{mA}}{1\ \mathrm{mA/V^2}}} = 1.5 - 0.7 - 0.447 = 0.35\ \mathrm{V}, \qquad V_X = 3.35\ \mathrm{V}, \qquad I_X = 0.1\ \mathrm{mA}.$$

**After the fast drop**, with the junction at about $V_S = -0.59$ V (a diode carrying 100 µA):

$$I_X \approx \tfrac12(1\ \mathrm{mA/V^2})(1.5 + 0.59 - 0.7)^2\ \mathrm{V^2} = \tfrac12(1.39)^2\ \mathrm{mA} = 0.97\ \mathrm{mA},$$

nearly ten times $I_1$.

**Plateau and decay.** $V_{C1}$ falls at $0.97\ \mathrm{mA}/1\ \mathrm{pF} \approx 1$ V/ns until it reaches $V_{GS} - V_{TH} \approx 1.39$ V, about 1.6 ns later. The triode tail then has $\tau = C_1/[\beta(1.39\ \mathrm{V})] = 1\ \mathrm{pF}/1.39\ \mathrm{mS} \approx 0.7$ ns.

A simulation including 20 fF parasitics and ideal junctions shows exactly this sequence:

| $t$ (ns) | $V_X$ (V) | $V_S$ (V) | $I_X$ (mA) |
|---|---|---|---|
| $0^-$ | 3.35 | 0.35 | 0.10 |
| 0.45 (fast drop over) | 2.20 | −0.59 | 0.96 |
| 1.0 | 1.68 | −0.59 | 0.97 |
| 2.0 | 0.74 | −0.59 | 0.96 |
| 3.0 | −0.07 | −0.59 | 0.59 |
| 4.0 | −0.44 | −0.59 | 0.21 |
| ≥ 7 | −0.56 | −0.59 | ≈ 0.03 (residual) |

(Some of $C_1$'s voltage is already lost during the 0.45-ns drop, because $M_1$ starts conducting harder while the nodes fall; that is why $V_X$ reaches 2.2 V rather than 2.4 V.)

### Result

- After the switch opens, X and S form an island connected to ground only through $I_1$ (the gate draws no current, and $C_1$ floats between X and S). KCL gives $0 = I_1$ for ideal elements, so **$C_1$ cannot supply $I_1$**. The only return paths are the grounded-bulk junctions and small parasitic capacitances.
- **$V_S$ and $V_X$ drop abruptly together** (at a rate $\approx I_1/C_p$, a near-step) until the source–bulk junction forward-biases at $V_S \approx -0.6$ to $-0.7$ V and supplies $I_1$. $V_X$ steps from the battery voltage to about $3 - 0.7 \approx 2.3$ V.
- The falling $V_S$ raises $V_{GS} = V_b - V_S$, so $M_1$ conducts harder: **$I_X$ jumps well above $I_1$**, stays roughly flat while $M_1$ is saturated ($V_X$ ramps down at $I_X/C_1$), then decays to zero in triode as $V_X - V_S \to 0$.
- **Final state:** $C_1$ discharged, $V_X \approx V_S \approx -0.6$ V (junctions sharing $I_1$), $I_X \approx 0$. With a real current source the fall stops near 0 V instead. Either way $V_X$ ends near 0 V or slightly below.
- In particular, $V_X$ does **not** ramp down linearly at $I_1/C_1$ with $I_X = I_1$.

**Common mistake.** Drawing $V_X$ as a linear ramp with slope $-I_1/C_1$ and $I_X = I_1$. That would hold if $C_1$ went from X to *ground*, or if node S had a large capacitance to ground; here $C_1$ floats between drain and source and has no net charge to give.

**Common mistake.** Assuming nothing happens because "$C_1$ holds its voltage". Its voltage is continuous at first, but both plates move down together, and the resulting increase of $V_{GS}$ turns $M_1$ on harder, which then discharges $C_1$.

**Common mistake.** Declaring the circuit unsolvable and stopping there. The KCL contradiction only shows that the schematic is incomplete; the grounded bulk supplies a physical path (the source–bulk junction) that determines the waveforms.

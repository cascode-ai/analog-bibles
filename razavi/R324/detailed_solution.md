# Detailed solution - R324

**Approach.** (i) With the main input zeroed, everything except $C_1$ is a source-free network of resistors and controlled sources, which seen from the terminals of $C_1$ is a plain resistance $R_1$; so $V_X/I_X = R_1\parallel(1/C_1s)$, with its pole at $-1/(R_1C_1)$. (ii) The poles of *any* transfer function of a linear circuit are its natural frequencies, which depend only on the source-free network, not on where the signal enters or is taken out. Hence the main transfer function has the same pole.

### Step 1 — The rest of the circuit is a resistance

Let $C_1$ sit between nodes A and B, so $V_X = V_A - V_B$, and let $I_{rest}$ be the current the test source pushes into the rest of the circuit through A, returning through B. Zeroing the main input turns a voltage source into a short (as drawn, with the input port shorted) and a current source into an open circuit.

Seen from A, B with $C_1$ removed, the rest of the circuit is a one-port that:

1. contains **no independent sources**, so its Thevenin voltage is zero;
2. is **linear**, so the port voltage is proportional to the port current;
3. contains **no energy-storage elements**, so its equations contain no $s$ and the proportionality constant is frequency-independent.

Hence

$$V_X = R_1\,I_{rest},$$

where the real constant $R_1$ is, by definition, **the resistance seen by $C_1$**, found with a test source at A–B, $C_1$ removed and the input zeroed. Controlled sources can make $R_1$ differ from any individual resistor, even negative or infinite, but it stays frequency-independent.

### Step 2 — The impedance $V_X/I_X$

KCL at A, where the test current splits between $C_1$ and the rest of the circuit:

$$I_X = C_1s\,V_X + I_{rest} = C_1s\,V_X + \frac{V_X}{R_1},$$

$$
\begin{aligned}
I_X &= V_X\,\frac{1 + R_1C_1s}{R_1}\\
\frac{V_X}{I_X}(s) &= \frac{R_1}{1 + R_1C_1s} = R_1\parallel\frac{1}{C_1s},
\end{aligned}
$$

with a single pole at

$$s_p = -\frac{1}{R_1C_1},\qquad |\omega_p| = \frac{1}{R_1C_1}.$$

### Step 3 — The pole is the circuit's natural frequency

**Time domain.** With *all* independent sources zero, the circuit is $C_1$ in parallel with $R_1$. For an initial charge on the capacitor, KCL at A gives

$$C_1\frac{dV_X}{dt} = -\frac{V_X}{R_1}\quad\Longrightarrow\quad V_X(t) = V_X(0)\,e^{-t/(R_1C_1)}.$$

The rest of the circuit is memoryless, so every voltage and current is a fixed multiple of $V_X$ and decays with the same exponent: one energy-storage element gives one first-order equation and exactly **one natural frequency**, $s = -1/(R_1C_1)$.

**Frequency domain.** Write the nodal equations as $\mathbf{Y}(s)\,\mathbf{V} = \mathbf{J}$, with $\mathbf{Y}(s)$ the node-admittance matrix (resistors, controlled sources and $C_1s$) and $\mathbf{J}$ the excitations.

- An independent current source enters only through $\mathbf{J}$; an independent voltage source fixes a node voltage, which is eliminated from the matrix and moves into $\mathbf{J}$. Either way, $\mathbf{Y}(s)$ is **the matrix of the source-free network**, the one used in Steps 1–2.
- By Cramer's rule, any node voltage is $\Delta_k(s)/\det\mathbf{Y}(s)$, and only the numerator $\Delta_k$ depends on where the excitation is applied and which node is the output.

So **every** transfer function of the circuit has the denominator $\det\mathbf{Y}(s)$. $V_X/I_X$ is one of them, and by Step 2 its denominator vanishes at $s = -1/(R_1C_1)$; therefore $\det\mathbf{Y}(s)\propto 1 + R_1C_1s$, and the main transfer function $V_{out}/V_{in}$ has the pole

$$\omega_p = \frac{1}{R_1C_1}$$

(in magnitude), unless its numerator cancels it (a pole–zero cancellation, e.g. when the chosen output does not depend on the capacitor voltage).

### Step 4 — An example with a controlled source

<!-- diagram: diagram-01.cir -->

Take a common-source stage with gate resistance $R_S$, drain resistor $R_D$ and a single capacitor $C_{GD}$ between gate (A) and drain (B). Zero the input (gate grounded through $R_S$), remove $C_{GD}$, and inject $I_X$ into the gate, returning from the drain:

- gate: $V_G = I_XR_S$;
- drain (the current from $R_D$ supplies both $M_1$ and the test source): $-V_D/R_D = g_mV_G + I_X$, so $V_D = -R_DI_X(1 + g_mR_S)$;
- $V_X = V_G - V_D = I_X\left[R_S + R_D(1 + g_mR_S)\right]$.

So $R_1 = R_S + R_D + g_mR_SR_D$ and the pole is $1/[(R_S + R_D + g_mR_SR_D)C_{GD}]$, in agreement with the exact transfer function $\dfrac{(C_{GD}s - g_m)R_D}{1 + (R_S + R_D + g_mR_SR_D)C_{GD}s}$. The controlled source makes $R_1$ much larger than any resistor in the circuit: the Miller effect, seen as a resistance.

### Result

With the main input zeroed, the network seen by $C_1$ contains only resistors and controlled sources and no independent sources, so it is a frequency-independent resistance $R_1$. The test current divides between $C_1$ and $R_1$:

$$\frac{V_X}{I_X}(s) = R_1\parallel\frac{1}{C_1s} = \frac{R_1}{1 + R_1C_1s},$$

with a pole at $s = -1/(R_1C_1)$. This is the circuit's only natural frequency (the source-free response is $V_X\propto e^{-t/(R_1C_1)}$), and every transfer function of the circuit has the same denominator, the determinant of the nodal equations, which does not depend on where the excitation is applied or what is taken as output. Hence the main transfer function has the pole $|\omega_p| = 1/(R_1C_1)$ (barring a pole–zero cancellation).

**Common mistake.** Computing $R_1$ with the main input still active, e.g. leaving an input voltage source as an open circuit. Natural frequencies belong to the source-free network: a voltage source becomes a short and a current source an open before $R_1$ is computed.

**Common mistake.** Believing that the pole depends on where the signal is applied or which output is chosen. Only the zeros (numerators) depend on that; the denominator is a property of the network.

**Common mistake.** Taking $R_1$ as one physical resistor (e.g. only $R_S$ or $R_D$ in the example). With controlled sources, $R_1$ must be found with a test source; it can be much larger than any resistor, or even negative.

# Detailed solution - R324

**Approach.** The proof has two parts. (i) With the main input set to zero, everything except $C_1$ is a source-free network of resistors and controlled sources; seen from the terminals of $C_1$ it is a plain resistance $R_1$, so $V_X/I_X = R_1\parallel(1/C_1s)$, whose pole is $-1/(R_1C_1)$. (ii) The poles of *any* transfer function of a linear circuit are its natural frequencies, which depend only on the source-free network and not on where the signal enters or is taken out. Hence the main transfer function has the same pole.

### Step 1 — Setting up

- The circuit is linear and contains one capacitor $C_1$, connected between nodes A and B. All other elements are resistors and (linear) controlled sources.
- The main input is set to zero: a voltage source becomes a short (as drawn in the figure, where the input port is shorted) and a current source becomes an open circuit.
- A test current source $I_X$ ($I_{in}$ in the figure) is connected in parallel with $C_1$, and $V_X = V_A - V_B$ is the voltage across $C_1$.
- Define $I_{rest}$ as the current that the test source pushes into the rest of the circuit (everything except $C_1$) through terminal A, returning through B.

### Step 2 — The rest of the circuit is a resistance

Remove $C_1$ and look into terminals A, B. What remains is a one-port network that:

1. contains **no independent sources** (the main input is zeroed), so with no current at the port all its node voltages are zero; its Thevenin voltage is zero;
2. is **linear**, so the port voltage is proportional to the port current;
3. contains **no energy-storage elements**, so its equations are purely algebraic: they contain no $s$ (no time derivatives), and the proportionality constant does not depend on frequency.

Hence the port relation is

$$V_X = R_1\,I_{rest},$$

where $R_1$ is a real constant: by definition, **the resistance seen by $C_1$**. In practice it is found by applying a test source at A–B with $C_1$ removed and the input zeroed. Controlled sources can make $R_1$ differ from any individual resistor, and can even make it negative or infinite, but it is still a frequency-independent constant.

### Step 3 — The impedance $V_X/I_X$

**KCL at node A**: the test current splits between $C_1$ and the rest of the circuit:

$$I_X = C_1s\,V_X + I_{rest} = C_1s\,V_X + \frac{V_X}{R_1}.$$

Solve for the impedance:

$$
\begin{aligned}
I_X &= V_X\,\frac{1 + R_1C_1s}{R_1}\\
\frac{V_X}{I_X}(s) &= \frac{R_1}{1 + R_1C_1s} = R_1\parallel\frac{1}{C_1s}.
\end{aligned}
$$

This has a single pole at

$$s_p = -\frac{1}{R_1C_1},\qquad |\omega_p| = \frac{1}{R_1C_1}.$$

### Step 4 — The pole is the circuit's natural frequency

**Time-domain view.** Set *all* independent sources to zero (main input and test source). The circuit reduces to $C_1$ in parallel with the resistance $R_1$ of Step 2. If the capacitor holds some initial charge, KCL at A gives

$$C_1\frac{dV_X}{dt} = -\frac{V_X}{R_1}\quad\Longrightarrow\quad V_X(t) = V_X(0)\,e^{-t/(R_1C_1)}.$$

Every node voltage in the circuit is a fixed linear combination of $V_X$ (the rest of the circuit is memoryless), so every voltage and current decays with the same exponent. The circuit has exactly **one natural frequency**, $s = -1/(R_1C_1)$. A circuit with one energy-storage element is described by one first-order differential equation, so it cannot have any other.

**Frequency-domain view.** Write the nodal equations of the circuit as $\mathbf{Y}(s)\,\mathbf{V} = \mathbf{J}$, where $\mathbf{Y}(s)$ is the node-admittance matrix (resistors, controlled sources and $C_1s$) and $\mathbf{J}$ contains the excitations.

- An independent current source enters only through $\mathbf{J}$. An independent voltage source fixes a node voltage; that node is eliminated (it acts like ground for the matrix) and its value moves into $\mathbf{J}$. Either way, $\mathbf{Y}(s)$ is **the matrix of the source-free network**, the same one used in Steps 2–3.
- By Cramer's rule, any node voltage is a ratio $\Delta_k(s)/\det\mathbf{Y}(s)$, where only the numerator $\Delta_k$ depends on where the excitation is applied and which node is taken as output.

So **every** transfer function of the circuit, from any input to any output, has the same denominator $\det\mathbf{Y}(s)$. The impedance $V_X/I_X$ is one such transfer function, and Step 3 shows that its denominator vanishes at $s = -1/(R_1C_1)$. Therefore $\det\mathbf{Y}(s)\propto 1 + R_1C_1s$, and the main transfer function $V_{out}/V_{in}$ has the pole

$$\omega_p = \frac{1}{R_1C_1}$$

(in magnitude), unless its numerator happens to cancel it (a pole–zero cancellation, for example when the chosen output does not depend on the capacitor voltage).

### Step 5 — An example with a controlled source

<!-- diagram: diagram-01.cir -->

Take a common-source stage with gate resistance $R_S$, drain resistor $R_D$, and a single capacitor $C_{GD}$ between gate (A) and drain (B). Zero the input (gate grounded through $R_S$), remove $C_{GD}$, and inject $I_X$ into the gate, returning from the drain:

- gate: $V_G = I_XR_S$;
- drain (KCL: the current from $R_D$ supplies both $M_1$ and the test source): $-V_D/R_D = g_mV_G + I_X$, so $V_D = -R_DI_X(1 + g_mR_S)$;
- $V_X = V_G - V_D = I_X\left[R_S + R_D(1 + g_mR_S)\right]$.

So $R_1 = R_S + R_D + g_mR_SR_D$, and the pole is $1/[(R_S + R_D + g_mR_SR_D)C_{GD}]$. This agrees with the exact transfer function of this circuit, $\dfrac{(C_{GD}s - g_m)R_D}{1 + (R_S + R_D + g_mR_SR_D)C_{GD}s}$. The controlled source makes $R_1$ much larger than any resistor in the circuit (this is the Miller effect, seen as a resistance).

### Result

With the main input zeroed, the network seen by $C_1$ contains only resistors and controlled sources and no independent sources, so it is a frequency-independent resistance $R_1$. The test current divides between $C_1$ and $R_1$:

$$\frac{V_X}{I_X}(s) = R_1\parallel\frac{1}{C_1s} = \frac{R_1}{1 + R_1C_1s},$$

with a pole at $s = -1/(R_1C_1)$. This is the circuit's only natural frequency (the source-free response is $V_X\propto e^{-t/(R_1C_1)}$), and every transfer function of the circuit has the same denominator, the determinant of the nodal equations, which does not depend on where the excitation is applied or what is taken as output. Hence the main transfer function has the pole $|\omega_p| = 1/(R_1C_1)$ (barring a pole–zero cancellation).

**Common mistake.** Computing $R_1$ with the main input still active, for instance leaving a voltage source as an open circuit. Natural frequencies belong to the source-free network: an input voltage source must be replaced by a short and an input current source by an open circuit before $R_1$ is computed.

**Common mistake.** Believing that the pole depends on where the signal is applied or on which output is chosen. Only the zeros (the numerators) depend on that; the denominator, and hence the pole, is a property of the network itself.

**Common mistake.** Taking $R_1$ as one physical resistor (for example only $R_S$ or $R_D$ in the example). With controlled sources present, $R_1$ must be found with a test source; it can be much larger than any resistor, or even negative.

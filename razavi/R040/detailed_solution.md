# Detailed solution - R040

**Approach:** Model the device as $n$ identical sections linked by gate-resistance segments $R_G/n$, apply the $f_T$ test (current drive at the gate, source and drain at ac ground), and use KCL on the whole gate network. The resistors only redistribute the input current among the sections, and since every section has the same ratio $g_m/C$, the total drain current depends only on the total input current.

### Step 1 — The distributed model

With a single lumped $R_G$ the claim is immediate: the current source forces $I_{in}$ through $R_G$ into the internal gate, and $R_G$ only raises the input-terminal voltage by $I_{in}R_G$. In the distributed model the sections see different gate voltages, so a proof is needed.

Let the whole device have $g_m$, $C_{GS}$ and $C_{GD}$, and define the total gate capacitance

$$C = C_{GS} + C_{GD} .$$

Section $k$ ($k = 1, \dots, n$) has an internal gate voltage $V_k$, a controlled source $(g_m/n)V_k$ from drain to source, and capacitances $C_{GS}/n$ and $C_{GD}/n$. All sources and all drains are tied together, and in the $f_T$ test both are at ac ground, so each section has a capacitance $C/n$ from its gate node to ground; the junction capacitances and $r_O$ carry no signal.

In the natural ladder form the input connects to gate node 1 through $R_G/n$, node 1 to node 2 through $R_G/n$, and so on along the gate finger. The diagram shows this for $n = 3$; $C_k$ is the $C/n$ of section $k$, and the 0-V source `VD` holds the common drain at ac ground and supplies $I_{out}$ into it. In SPICE, this direction corresponds to $-I(\mathrm{VD})$.

<!-- diagram: diagram-01.cir -->

The proof does not use the ladder connection: it holds for any resistor network linking the input to the gate nodes, including a "star" in which each gate is fed from a common node through its own $R_G/n$.

### Step 2 — KCL around the whole gate network

Draw a closed surface around the input terminal, all gate-resistance segments and all internal gate nodes. $I_{in}$ enters it; the resistors lie entirely inside, so the current can leave only through the gate capacitors $C/n$ to ac ground:

$$I_{in} = \sum_{k=1}^{n} j\omega\,\frac{C}{n}\,V_k = j\omega\,\frac{C}{n}\sum_{k=1}^{n} V_k \quad\Longrightarrow\quad \sum_{k=1}^{n} V_k = \frac{n\,I_{in}}{j\omega C} .$$

The individual $V_k$ depend on $R_G$ (sections far from the contact see smaller, delayed voltages), but their sum is fixed by $I_{in}$ alone.

For the two-section ladder, apply KCL at each gate node.

$$
\begin{aligned}
\text{node 1:}\quad I_{in} &= j\omega\frac{C}{2}V_1 + \frac{V_1 - V_2}{R_G/2},\\
\text{node 2:}\quad \frac{V_1 - V_2}{R_G/2} &= j\omega\frac{C}{2}V_2 .
\end{aligned}
$$

Substituting the second line into the first,

$$I_{in} = j\omega\frac{C}{2}V_1 + j\omega\frac{C}{2}V_2 = j\omega\frac{C}{2}(V_1 + V_2),$$

the general result with $n = 2$: the resistor current between the nodes cancels out.

### Step 3 — The total drain current

The drains are tied together, so the output current is the sum of the section currents. Neglecting, as in the standard $f_T$ derivation, the small feedforward current through $C_{GD}$, and using the fact that every section has the same transconductance $g_m/n$:

$$I_{out} = \sum_{k=1}^{n}\frac{g_m}{n}V_k = \frac{g_m}{n}\sum_{k=1}^{n}V_k = \frac{g_m}{n}\cdot\frac{n\,I_{in}}{j\omega C} = \frac{g_m\,I_{in}}{j\omega C} .$$

### Step 4 — Current gain and $f_T$

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})}, \qquad \left|\frac{I_{out}}{I_{in}}\right| = \frac{g_m}{\omega\,(C_{GS} + C_{GD})} .$$

This is the expression without gate resistance; neither $R_G$ nor $n$ appears. Setting the magnitude to 1 at $\omega_T = 2\pi f_T$:

$$\frac{g_m}{2\pi f_T\,(C_{GS} + C_{GD})} = 1 \quad\Longrightarrow\quad f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} .$$

With feedforward included, each section's drain current is $(g_m/n - j\omega C_{GD}/n)V_k$, so

$$I_{out} = \frac{g_m - j\omega C_{GD}}{n}\sum_{k}V_k = \frac{(g_m - j\omega C_{GD})\,I_{in}}{j\omega C},$$

again the same as for the lumped device. The independence of $R_G$ is therefore exact, not an approximation.

### Step 5 — Physical interpretation and limits of the statement

Each section's drain current is $(g_m/n)V_k = (g_m/C)\cdot(C/n)V_k$, i.e. $g_m/C$ times the charge on its gate. The total drain current is thus $g_m/C$ times the total gate charge, which is fixed by $I_{in}$ alone because the resistors store no charge: $R_G$ changes *where* the charge goes, not *how much* there is.

The result relies on two conditions:

- The gate is driven by a current source. From a voltage source, $R_G$ and the gate capacitance would form a low-pass filter. That is why $R_G$ limits the power gain ($f_{max}$) and adds thermal noise, even though it leaves $f_T$ unchanged.
- All sections have the same $g_m/C$. Otherwise the uneven distribution of the $V_k$ would change $I_{out}$.

### Result

For a current-driven gate, KCL around the gate network gives $\sum_k V_k = nI_{in}/(j\omega C)$ whatever the resistances, and since each section has transconductance $g_m/n$ and capacitance $C/n$:

$$I_{out} = \frac{g_m}{n}\sum_k V_k = \frac{g_mI_{in}}{j\omega(C_{GS} + C_{GD})} \quad\Longrightarrow\quad f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})},$$

independent of $R_G$ and of $n$.

**Common mistake:** Adding a pole at $1/(R_GC)$ to the current gain. That pole belongs to the *voltage* transfer from a voltage source through $R_G$; with the current drive that defines $f_T$, all of $I_{in}$ still reaches the gate capacitances.

**Common mistake:** Proving the result only for one lumped $R_G$. With several sections the individual gate voltages *do* depend on $R_G$; the key step is that only their sum matters, which needs the closed-surface KCL and the equal $g_m/C$ of every section.

**Common mistake:** Concluding that $f_T$ depends on $n$. The factor $1/n$ in each section's $g_m$ cancels the factor $n$ in $\sum_k V_k$.

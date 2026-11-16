# Detailed solution - R040

**Approach.** Model the wide transistor as $n$ identical sections connected by gate-resistance segments $R_G/n$, apply the $f_T$ test (current drive at the gate, source and drain at ac ground), and use KCL on the whole gate network. The resistors only redistribute the input current among the sections; they cannot absorb it. Because every section has the same ratio $g_m/C$, the total drain current depends only on the total input current, not on how it is distributed.

### Step 1 — Why gate resistance might seem to matter, and why it does not for a current drive

A wide MOSFET has a long polysilicon gate. Its resistance $R_G$ is not concentrated at one point: the parts of the channel far from the gate contact are reached through more of it. We therefore model the device as $n$ transistors in parallel, with the gate resistance cut into $n$ pieces of $R_G/n$.

Start with the simplest case, a single lumped $R_G$ in series with the gate. The $f_T$ test drives the gate terminal with an ideal current source $I_{in}$. An ideal current source forces its current through any series resistance, so the current that reaches the internal gate node is still $I_{in}$; $R_G$ only raises the voltage *at the input terminal* by $I_{in}R_G$. Since $I_{out}$ depends only on the internal $V_{gs}$, which is set by $I_{in}$ and the capacitances, $f_T$ cannot change. The rest of the solution shows that the same holds for the distributed model, where the argument is less obvious because the sections see different gate voltages.

### Step 2 — The distributed model and its small-signal elements

Let the whole transistor have transconductance $g_m$, gate–source capacitance $C_{GS}$ and gate–drain capacitance $C_{GD}$, and define the total gate capacitance

$$C = C_{GS} + C_{GD} .$$

Split the device into $n$ identical sections. Section $k$ ($k = 1, \dots, n$) has:

- an internal gate node with small-signal voltage $V_k$ (measured to the source, which is at ac ground);
- a transconductance $g_m/n$, i.e. a controlled current source $(g_m/n)V_k$ from its drain to its source;
- gate capacitances $C_{GS}/n$ (to the source) and $C_{GD}/n$ (to the drain).

All sources are tied together and all drains are tied together, as in the real device. In the $f_T$ test both the source and the drain are at ac ground, so each section's $C_{GS}/n$ and $C_{GD}/n$ both run from its gate node to ac ground: together they form a capacitance $C/n$ to ground. As in the lumped case, the junction capacitances and $r_O$ have zero voltage across them and carry no signal.

The gate nodes are connected by resistors $R_G/n$. In the natural "ladder" form the input terminal connects to gate node 1 through $R_G/n$, node 1 to node 2 through $R_G/n$, and so on along the gate finger. The diagram shows this for $n = 3$; $C_k$ stands for the $C/n$ of section $k$, and the 0-V source `VD` returns the common drain to ground and carries $I_{out}$.

<!-- diagram: diagram-01.cir -->

The proof below does not use the specific ladder connection. It holds for any network of resistors linking the input to the gate nodes, including a "star" in which each section's gate is fed from a common node through its own $R_G/n$.

### Step 3 — KCL around the whole gate network

Draw a closed surface around the input terminal, all the gate-resistance segments and all the internal gate nodes. The current $I_{in}$ enters this surface. Where can it leave?

- Resistors only connect points *inside* the surface, so current flowing through them never crosses the surface.
- The only elements that cross the surface are the gate capacitors $C/n$, which go to ac ground (source and drain).

**KCL for the closed surface** (total current in = total current out):

$$I_{in} = \sum_{k=1}^{n} j\omega\,\frac{C}{n}\,V_k .$$

Factor out the common terms:

$$I_{in} = j\omega\,\frac{C}{n}\sum_{k=1}^{n} V_k .$$

Solve for the sum of the gate voltages:

$$\sum_{k=1}^{n} V_k = \frac{n\,I_{in}}{j\omega C} .$$

The individual $V_k$ do depend on $R_G$ (sections far from the contact see smaller, delayed voltages), but their **sum** does not: it is fixed by $I_{in}$ alone.

**Check for $n = 2$ (ladder).** Write KCL at each gate node:

$$
\begin{aligned}
\text{node 1:}\quad I_{in} &= j\omega\frac{C}{2}V_1 + \frac{V_1 - V_2}{R_G/2},\\
\text{node 2:}\quad \frac{V_1 - V_2}{R_G/2} &= j\omega\frac{C}{2}V_2 .
\end{aligned}
$$

Substitute the second line into the first:

$$I_{in} = j\omega\frac{C}{2}V_1 + j\omega\frac{C}{2}V_2 = j\omega\frac{C}{2}(V_1 + V_2),$$

exactly the general result with $n = 2$. The resistor current between the nodes cancels out.

### Step 4 — The total drain current

All drains are tied together, so the output current is the sum of the section currents. Neglecting, as in the standard $f_T$ derivation, the small feedforward current through $C_{GD}$:

$$I_{out} = \sum_{k=1}^{n}\frac{g_m}{n}V_k = \frac{g_m}{n}\sum_{k=1}^{n}V_k .$$

The factor $g_m/n$ comes out of the sum **because every section has the same transconductance**. Substitute the sum from Step 3:

$$I_{out} = \frac{g_m}{n}\cdot\frac{n\,I_{in}}{j\omega C} .$$

The $n$ cancels:

$$I_{out} = \frac{g_m\,I_{in}}{j\omega C} .$$

### Step 5 — Current gain and $f_T$

Divide by $I_{in}$:

$$\frac{I_{out}}{I_{in}} = \frac{g_m}{j\omega\,(C_{GS} + C_{GD})}, \qquad \left|\frac{I_{out}}{I_{in}}\right| = \frac{g_m}{\omega\,(C_{GS} + C_{GD})} .$$

This is identical to the expression without gate resistance; neither $R_G$ nor $n$ appears. Setting the magnitude to 1 at $\omega_T = 2\pi f_T$:

$$\frac{g_m}{2\pi f_T\,(C_{GS} + C_{GD})} = 1 \quad\Longrightarrow\quad f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} .$$

**Including the feedforward current.** Each section's drain current is exactly $(g_m/n - j\omega C_{GD}/n)V_k$, so

$$I_{out} = \frac{g_m - j\omega C_{GD}}{n}\sum_{k}V_k = \frac{(g_m - j\omega C_{GD})\,I_{in}}{j\omega C},$$

again the same as for the lumped device. The independence of $R_G$ is therefore exact, not an approximation.

### Step 6 — Physical interpretation and limits of the statement

Each section converts the charge on its gate capacitor into drain current with the same "efficiency" $g_m/C$. Its drain current is $(g_m/n)V_k = (g_m/C)\cdot(C/n)V_k$, i.e. $g_m/C$ times the charge stored on that section's gate. The total drain current is thus $g_m/C$ times the *total* gate charge, and the total gate charge is fixed by the integral of $I_{in}$ alone, because the resistors cannot store or lose charge. The gate resistance changes *where* the charge goes, not *how much* there is.

The result relies on two conditions:

- **Current drive.** If the gate were driven from a voltage source, $R_G$ would form a low-pass filter with the gate capacitance and reduce the drain current at high frequency. That is why $R_G$ limits the power gain ($f_{max}$) and adds thermal noise, even though it leaves $f_T$ unchanged.
- **Identical $g_m/C$ for every section.** If the sections had different ratios, the uneven distribution of the $V_k$ would change $I_{out}$.

### Result

For a current-driven gate, KCL around the gate network gives $\sum_k V_k = nI_{in}/(j\omega C)$ whatever the resistances, and since each section has transconductance $g_m/n$ and capacitance $C/n$:

$$I_{out} = \frac{g_m}{n}\sum_k V_k = \frac{g_mI_{in}}{j\omega(C_{GS} + C_{GD})} \quad\Longrightarrow\quad f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})},$$

independent of $R_G$ and of $n$.

**Common mistake.** Adding a pole at $1/(R_GC)$ to the current gain. That pole exists in the *voltage* transfer from a voltage source through $R_G$ to the gate. With the current drive used to define $f_T$, every bit of $I_{in}$ still reaches the gate capacitances, so no such pole appears in $I_{out}/I_{in}$.

**Common mistake.** Proving the result only for one lumped $R_G$ and asserting it for the distributed case. With several sections the individual gate voltages *do* depend on $R_G$; the key step is that only their sum matters, which requires the closed-surface KCL and the equal $g_m/C$ of every section.

**Common mistake.** Concluding that $f_T$ depends on $n$. The factor $1/n$ in each section's $g_m$ is cancelled by the factor $n$ in $\sum_k V_k$, so splitting the device more finely changes nothing.

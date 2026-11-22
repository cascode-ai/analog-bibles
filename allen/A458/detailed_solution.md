# Detailed solution - A458

The output is the charge delivered by the selected shunt capacitors, divided by $C_F$. First find the ladder node voltages during φ2, which set those charges, then apply charge conservation at the virtual-ground summing node.

### Step 1 — Ladder node voltages

All capacitors are discharged in φ1, so during φ2 the capacitive network divides voltages like a resistive network with conductances proportional to capacitances. Every shunt capacitor $C$ has its lower plate at 0 V (ground or virtual ground), so it loads its node identically for $b_i=0$ or 1. Numbering the nodes 1–4 from the left:

- node 4 has its shunt $C$ and the terminating $C$: $2C$ to ground;
- node 3 sees, to its right, $2C$ in series with $2C$ ($=C$), plus its shunt $C$: again $2C$; the same holds for nodes 2 and 1.

Node 1 is driven to $-V_{REF}$ (battery + terminal grounded), and each series $2C$ driving a $2C$ load halves the voltage:

$$
V_1=-V_{REF},\qquad V_2=-\frac{V_{REF}}{2},\qquad V_3=-\frac{V_{REF}}{4},\qquad V_4=-\frac{V_{REF}}{8}.
$$

### Step 2 — Charge balance at the summing node

The summing node is held at 0 V and starts with zero charge. Bit $b_i$ connects the shunt capacitor of node $i+1$ to it; that capacitor's plate on the summing node carries $C(0-V_{i+1})$, while $C_F$ carries $C_F(0-v_{OUT})$:

$$
-C\sum_{i=0}^{3}b_iV_{i+1}-C_Fv_{OUT}=0
\quad\Longrightarrow\quad
v_{OUT}=-\frac{C}{C_F}\sum_{i=0}^{3}b_iV_{i+1}.
$$

### Step 3 — Output expression

Substituting the node voltages:

$$
v_{OUT}=\frac{C}{C_F}\left(b_0+\frac{b_1}{2}+\frac{b_2}{4}+\frac{b_3}{8}\right)V_{REF},
$$

positive for the battery polarity shown, with $b_0$ carrying the largest weight. With $C_F=2C$ this becomes

$$
v_{OUT}=\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}+\frac{b_3}{16}\right)V_{REF}.
$$

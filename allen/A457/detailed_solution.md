# Detailed solution - A457

Find the ladder node voltages during φ2 by capacitive division, then use charge conservation at the virtual-ground summing node to find how the charge of the selected shunt capacitors is transferred to $C_F$. Matching the result to the required weights fixes $C_F$.

### Step 1 — Ladder node voltages

All capacitors start discharged (φ1), so in φ2 the capacitive network behaves like a resistive divider with conductances proportional to capacitances. Each shunt capacitor $C$ has its lower plate at 0 V whether its bit connects it to ground or to the virtual ground, so it loads its node the same way in both cases. Number the nodes 1–4 from the left.

- Node 4: shunt $C$ plus terminating $C$, i.e. $2C$ to ground.
- Node 3, looking right: series $2C$ into $2C$ gives $C$; with its shunt $C$, again $2C$. The same holds at every node.

Node 1 is driven to $-V_{REF}$ (the battery's + terminal is grounded). Each series $2C$ feeds a node whose total capacitance to ground is $2C$, so it halves the voltage:

$$
V_1=-V_{REF},\quad V_2=-\frac{V_{REF}}{2},\quad V_3=-\frac{V_{REF}}{4},\quad V_4=-\frac{V_{REF}}{8},
\qquad V_{i+1}=V_{REF}\cdot\left(-2^{-i}\right).
$$

A nodal solution of the network gives exactly these values.

### Step 2 — Charge transfer to $C_F$

The summing node is at 0 V and started with zero charge. A selected shunt capacitor ($b_i=1$) between node $i+1$ and the summing node holds, on its summing-node plate, the charge $C(0-V_{i+1})$. The plate of $C_F$ on that node holds $C_F(0-v_{OUT})$. The sum must stay zero:

$$
-C\sum_{i=0}^{3}b_iV_{i+1}-C_Fv_{OUT}=0
\;\Longrightarrow\;
v_{OUT}=-\frac{C}{C_F}\sum_{i=0}^{3}b_iV_{i+1}
=\frac{C}{C_F}\left(b_0+\frac{b_1}{2}+\frac{b_2}{4}+\frac{b_3}{8}\right)V_{REF}.
$$

### Step 3 — Required $C_F$

The target is $v_{OUT}=(b_0/2+b_1/4+b_2/8+b_3/16)V_{REF}$, i.e. half of the bracket above. Hence

$$
\frac{C}{C_F}=\frac12\quad\Longrightarrow\quad C_F=2C .
$$

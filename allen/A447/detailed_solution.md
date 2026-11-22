# Detailed solution - A447

During φ2 every capacitor of the array has its top plate on the output node and its bottom plate at either $V_{REF}$ or ground. Capacitors in parallel between the same two nodes add, so the array collapses into two capacitors forming a capacitive divider; its output follows from charge conservation with the discharged initial state.

### Step 1 — Group the capacitors

For a given digital word, the capacitors fall into two groups.

- Bits equal to 1: bottom plate at $V_{REF}$, top plate at the output node. All are in parallel between $V_{REF}$ and the output:
$$
C_{eq}=\sum_{i=0}^{N-1}b_i\frac{C}{2^{i}} .
$$
- Bits equal to 0, plus the terminating capacitor $C/2^{N-1}$: bottom plate at ground, top plate at the output node, so all are in parallel from the output to ground. Since the whole array totals
$$
C+\frac C2+\cdots+\frac{C}{2^{N-1}}+\frac{C}{2^{N-1}}=2C
$$
for any code, this group is $2C-C_{eq}$.

### Step 2 — Equivalent circuit

<!-- diagram: diagram-01.cir -->

The equivalent circuit contains only the source $V_{REF}$, the capacitor $C_{eq}$ from $V_{REF}$ to the output node $v_{OUT}$, and the capacitor $2C-C_{eq}$ from $v_{OUT}$ to ground. The unity-gain buffer draws no charge from the node.

### Step 3 — Output voltage

Both capacitors were discharged in φ1, so the output node starts with zero net charge. In φ2 the charge on its plates is $C_{eq}(v_{OUT}-V_{REF})+(2C-C_{eq})v_{OUT}=0$, which is the capacitive-divider relation:

$$
v_{OUT}=V_{REF}\frac{C_{eq}}{C_{eq}+(2C-C_{eq})}=\frac{C_{eq}}{2C}V_{REF}
=\left(\frac{b_0}{2}+\frac{b_1}{4}+\cdots+\frac{b_{N-1}}{2^N}\right)V_{REF}.
$$

Equivalently, seen from the output the array is a Thevenin source $(C_{eq}/2C)V_{REF}$ behind a total capacitance $2C$, which is why a load capacitance on this node attenuates the output.

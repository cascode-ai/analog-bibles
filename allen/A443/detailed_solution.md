# Detailed solution - A443

The top-plate node is floating during φ2 (the φ1 switch is open and the buffer input draws no current), so its charge is conserved. Write that charge at the end of φ1 and during φ2, and solve for the top-plate voltage, which the unity-gain buffer copies to $v_{OUT}$.

### Step 1 — Charge at the end of φ1

All capacitors, including $C_L$, have both plates at ground, so the total charge on the plates connected to the top-plate node is

$$
Q_{top}(\varphi_1)=0 .
$$

### Step 2 — Group the capacitors during φ2

Let $C_{eq}$ be the total capacitance whose bottom plate is switched to $V_{REF}$:

$$
C_{eq}=\sum_{i=0}^{N-1}b_i\frac{C}{2^{i}} .
$$

The remaining array capacitance, $2C-C_{eq}$ (bit capacitors with $b_i=0$ plus the terminating capacitor $C/2^{N-1}$), has its bottom plate at ground, and $C_L$ is also connected to ground. Hence the top-plate node, at voltage $v_X$, sees $C_{eq}$ to $V_{REF}$ and $2C-C_{eq}+C_L$ to ground.

### Step 3 — Charge conservation

The charge on the top plates is $C_{eq}(v_X-V_{REF})+(2C-C_{eq}+C_L)v_X$, and it must still be zero:

$$
C_{eq}\left(V_{REF}-v_X\right)=\left(2C-C_{eq}+C_L\right)v_X
\quad\Longrightarrow\quad
v_X=\frac{C_{eq}}{2C+C_L}V_{REF}.
$$

### Step 4 — Output voltage

The unity-gain buffer gives $v_{OUT}=v_X$. Substituting $C_{eq}$ and writing $C/2^{i}=2C\cdot2^{-(i+1)}$:

$$
v_{OUT}=\frac{2C}{2C+C_L}\left(\frac{b_0}{2}+\frac{b_1}{4}+\cdots+\frac{b_{N-1}}{2^N}\right)V_{REF}
=\frac{1}{1+C_L/2C}\sum_{i=0}^{N-1}b_i2^{-(i+1)}V_{REF}.
$$

For $C_L=0$ this reduces to the ideal characteristic; a nonzero $C_L$ scales every output by the same factor $2C/(2C+C_L)<1$.

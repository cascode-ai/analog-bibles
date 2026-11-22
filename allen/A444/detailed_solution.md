# Detailed solution - A444

Derive the transfer characteristic with $C_L$ present by charge conservation on the top-plate node, then compare it with the ideal characteristic: classify the difference as offset, gain or nonlinearity error by how it depends on the code.

### Step 1 — Output with the load capacitor

The top-plate node holds zero charge after φ1 and is floating during φ2. With $C_{eq}=\sum b_iC/2^{i}$ switched to $V_{REF}$ and $2C-C_{eq}+C_L$ to ground,

$$
C_{eq}\left(V_{REF}-v_{OUT}\right)=\left(2C-C_{eq}+C_L\right)v_{OUT}
\quad\Longrightarrow\quad
v_{OUT}=\frac{C_{eq}}{2C+C_L}V_{REF}=\frac{1}{1+C_L/2C}\,D\,V_{REF},
$$

where $D=\sum_{i=0}^{N-1}b_i2^{-(i+1)}$ is the ideal normalized output ($v_{OUT,ideal}=DV_{REF}$).

### Step 2 — Form of the error

The deviation from the ideal output is

$$
v_{OUT}-DV_{REF}=-\frac{C_L}{2C+C_L}\,D\,V_{REF}\approx-\frac{C_L}{2C}\,D\,V_{REF}\quad(C_L\ll2C).
$$

- At code 0 ($D=0$) the output is still 0 V: there is no offset error.
- The error is proportional to $D$, so the characteristic remains a straight line through the origin with slope $V_{REF}/(1+C_L/2C)$ instead of $V_{REF}$; every step shrinks by the same factor, so there is no INL or DNL and monotonicity is preserved.
- The error is largest at full scale.

### Step 3 — Classification

A code-independent scaling of the whole characteristic is a **gain error**. $C_L$ therefore introduces a static gain error of relative size $-C_L/(2C+C_L)$, i.e. the full-scale output falls short by about $(C_L/2C)$ times full scale.

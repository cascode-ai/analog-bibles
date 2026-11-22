# Detailed solution - A445

$C_L$ attenuates the whole characteristic by a constant factor (a gain error). Find where the resulting error is largest and require it to stay within 0.5 LSB.

### Step 1 — Output with the load capacitor

Charge conservation on the floating top-plate node (zero charge after φ1; $C_{eq}=\sum b_iC/2^{i}$ to $V_{REF}$ and $2C-C_{eq}+C_L$ to ground during φ2) gives

$$
v_{OUT}=\frac{C_{eq}}{2C+C_L}V_{REF}=\frac{D\,V_{REF}}{1+x},\qquad
D=\sum_{i=0}^{N-1}b_i2^{-(i+1)},\quad x=\frac{C_L}{2C}.
$$

### Step 2 — Worst-case error

The error relative to the ideal output $DV_{REF}$ is

$$
|\Delta v_{OUT}|=D\,V_{REF}\left(1-\frac{1}{1+x}\right)=D\,V_{REF}\,\frac{x}{1+x},
$$

which grows with $D$ and is largest at full scale, $D=1-2^{-N}$.

### Step 3 — Apply the 0.5-LSB limit

With $0.5\,\mathrm{LSB}=V_{REF}/2^{N+1}$:

$$
\left(1-2^{-N}\right)\frac{x}{1+x}\le2^{-(N+1)}
\;\Longrightarrow\;
\frac{x}{1+x}\le\frac{1}{2^{N+1}-2}
\;\Longrightarrow\;
x\le\frac{1}{2^{N+1}-3}.
$$

Hence

$$
\frac{C_L}{C}=2x\le\frac{2}{2^{N+1}-3}\approx\frac{1}{2^{N}} .
$$

The load capacitor may be at most about half the LSB (terminating) capacitor $C/2^{N-1}$. For example, $N=10$ gives $C_L/C\le2/2045=9.78\times10^{-4}$, essentially $2^{-10}=9.77\times10^{-4}$.

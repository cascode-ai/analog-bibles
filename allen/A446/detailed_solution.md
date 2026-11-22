# Detailed solution - A446

The inverting input of the op amp (the summing node) connects only to capacitor plates and to the op amp input, so its charge is conserved from φ1 to φ2. Write that charge in both phases with the summing node at the op amp's virtual-ground voltage, first for an ideal op amp and then with an offset $V_{OS}$.

### Step 1 — Switch states in the two phases

Bit $b_i$ owns the capacitor $C_i=2^{N-1-i}C$ (so $b_0$ owns $2^{N-1}C$, the MSB). All top plates are on the summing node.

- A capacitor whose bit is 0 has its bottom plate grounded through $\bar b_i$ in both phases, so it never changes voltage.
- A capacitor whose bit is 1 has its bottom plate on the common line. In φ1 this line is at ground if $b_0=1$ and at $V_{REF}$ if $b_0=0$; in φ2 it is at $V_{REF}$ if $b_0=1$ and at ground if $b_0=0$.
- In φ1 the φ1 switch ties the output to the inverting input (the op amp is a follower) and the right plate of the $2^NC$ feedback capacitor is grounded; in φ2 that plate is connected to $v_{OUT}$.

Let $V_{b,i}^{\phi1}$ and $V_{b,i}^{\phi2}$ be the bottom-plate voltages of $C_i$ in the two phases.

### Step 2 — Charge conservation with an ideal op amp

With an ideal op amp the summing node is at 0 V in φ1 (follower with the noninverting input grounded) and at 0 V in φ2 (virtual ground). Equating the charge on the plates attached to that node:

$$
\sum_i C_i\left(0-V_{b,i}^{\phi1}\right)+2^NC\,(0-0)
=\sum_i C_i\left(0-V_{b,i}^{\phi2}\right)+2^NC\,(0-v_{OUT})
$$
$$
\Longrightarrow\quad
v_{OUT}=-\frac{1}{2^NC}\sum_i C_i\left(V_{b,i}^{\phi2}-V_{b,i}^{\phi1}\right).
$$

### Step 3 — Output expression

Only capacitors with $b_i=1$ change voltage, each by $+V_{REF}$ if $b_0=1$ or $-V_{REF}$ if $b_0=0$. Using $C_i/(2^NC)=2^{-(i+1)}$:

$$
\begin{aligned}
b_0=1:&\quad v_{OUT}=-\frac{\sum_i b_iC_i}{2^NC}V_{REF}=-\left(\frac12+\sum_{i=1}^{N-1}\frac{b_i}{2^{i+1}}\right)V_{REF},\\
b_0=0:&\quad v_{OUT}=+\frac{\sum_{i\ge1} b_iC_i}{2^NC}V_{REF}=+\sum_{i=1}^{N-1}\frac{b_i}{2^{i+1}}V_{REF}.
\end{aligned}
$$

Compactly, with $D=\sum_{i=0}^{N-1}b_i2^{-(i+1)}$,

$$
v_{OUT}=(1-2b_0)\,D\,V_{REF},
$$

so $b_0$ selects the polarity, and when it is 1 its own capacitor also adds the $1/2$ term.

### Step 4 — Effect of the op-amp offset

Model the offset as a source $V_{OS}$ in series with the noninverting input. In φ1 the follower forces $v_{OUT}=v_-=V_{OS}$; in φ2 the virtual ground is again at $v_-=V_{OS}$. Charge conservation on the summing node becomes

$$
\sum_i C_i\left(V_{OS}-V_{b,i}^{\phi1}\right)+2^NC\,(V_{OS}-0)
=\sum_i C_i\left(V_{OS}-V_{b,i}^{\phi2}\right)+2^NC\,(V_{OS}-v_{OUT}).
$$

Every $V_{OS}$ term appears identically on both sides and cancels, leaving exactly the expression of Step 2. The output expression is therefore **unchanged**: during φ1 each capacitor stores the offset, and during φ2 the same offset is subtracted again (auto-zeroing). To first order the offset causes neither an offset error nor a gain error; only second-order residues from finite op-amp gain and switch charge injection remain.

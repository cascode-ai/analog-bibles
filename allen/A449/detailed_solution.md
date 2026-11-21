# Detailed solution - A449

The circuit is an inverting charge amplifier: the switched capacitors inject charge into the virtual-ground summing node, and that charge is collected on $C_X$. Write the charge balance, read off $v_{OUT}$, and choose $C_X$ to give the binary weights.

### Step 1 — Charge delivered to the summing node

After reset all capacitors, including $C_X$, are discharged and the summing node is at virtual ground (0 V). When bit $b_i$ is 1, the bottom plate of its capacitor $2^{N-1-i}C$ steps from 0 to $V_{REF}$ while its top plate stays at 0 V, so the capacitor takes charge $2^{N-1-i}C\,V_{REF}$; its summing-node plate receives $-2^{N-1-i}C\,V_{REF}$. Capacitors of bits that are 0 stay at 0 V. The total charge pushed onto the summing-node plates is

$$
Q=-V_{REF}\sum_{i=0}^{N-1}b_i\,2^{N-1-i}C .
$$

### Step 2 — Charge transfer to $C_X$

No current enters the op amp input, and the summing node holds zero net charge, so the charge on the summing-node plate of $C_X$ must balance $Q$: $C_X(0-v_{OUT})=-Q$. Hence

$$
v_{OUT}=-\frac{\sum_{i=0}^{N-1}b_i\,2^{N-1-i}C}{C_X}\,V_{REF}.
$$

### Step 3 — Choice of $C_X$ and polarity

The required weights are $b_i/2^{i+1}$. Writing $2^{N-1-i}C/C_X=2^{-(i+1)}$ for every $i$ gives

$$
C_X=2^NC,\qquad
v_{OUT}=-\left(\frac{b_0}{2}+\frac{b_1}{4}+\cdots+\frac{b_{N-1}}{2^N}\right)V_{REF}.
$$

For the positive $V_{REF}$ shown, $v_{OUT}$ is **negative** (an inverting charge amplifier). A positive output would require reversing the reference polarity or switching the capacitors from $V_{REF}$ to ground instead of from ground to $V_{REF}$.

# Detailed solution - A472

Use two 5-bit binary-weighted arrays built from the unit capacitor $C$. Size the series (scaling) capacitor $C_s$ so that the whole LSB section, seen through $C_s$, looks like one unit capacitor terminating the MSB array; then the LSB section contributes exactly $1/32$ of its own binary output. Verify the result by a Thevenin reduction and charge balance at the MSB node.

### Step 1 — The two arrays

Bits are $b_0$ (MSB) to $b_9$ (LSB).

| Section | Capacitors (bit) | Total |
|---|---|---|
| MSB array (top node = buffer input) | $16C\ (b_0),\ 8C\ (b_1),\ 4C\ (b_2),\ 2C\ (b_3),\ C\ (b_4)$ | $31C$ |
| LSB array | $16C\ (b_5),\ 8C\ (b_6),\ 4C\ (b_7),\ 2C\ (b_8),\ C\ (b_9)$, terminating $C$ (bottom plate grounded) | $32C$ |

The φ1 switch discharges all capacitors; in φ2 each bit capacitor's bottom plate goes to $V_{REF}$ (bit 1) or ground (bit 0). The smallest capacitor is the unit $C$ (apart from $C_s$, which is slightly larger).

### Step 2 — Scaling capacitor

For the MSB array to behave like a terminated 5-bit array, its top node must see a total of $32C$: its own $31C$ plus an effective unit $C$ from the LSB side. The LSB side is $32C$ to the LSB top node, so $C_s$ in series with $32C$ must equal $C$:

$$
\frac1{C_s}+\frac1{32C}=\frac1C
\quad\Longrightarrow\quad
C_s=\frac{32}{31}C\approx1.032C .
$$

### Step 3 — Thevenin equivalent of the LSB side

All capacitors start discharged, so the LSB array alone is a capacitive divider: its top node would sit at

$$
V_L=\frac{V_{REF}}{32C}\sum_{i=5}^{9}b_i\,2^{9-i}C=\frac{V_{REF}}{32}\sum_{i=5}^{9}b_i\,2^{9-i},
$$

behind a source capacitance of $32C$. In series with $C_s$, this is a source $V_L$ behind an effective capacitance $(32C)(C_s)/(32C+C_s)=C$ attached to the MSB node.

### Step 4 — Output voltage

Charge balance at the MSB node (zero initial charge; $31C$ of MSB capacitors and the effective $C$ from the LSB side, total $32C$):

$$
v_{OUT}=\frac{C\,V_{REF}\sum_{i=0}^{4}b_i\,2^{4-i}+C\,V_L}{32C}
=V_{REF}\sum_{i=0}^{4}\frac{b_i}{2^{i+1}}+\frac{V_L}{32}.
$$

Since $V_L/32=V_{REF}\sum_{i=5}^{9}b_i\,2^{9-i}/1024=V_{REF}\sum_{i=5}^{9}b_i/2^{i+1}$,

$$
v_{OUT}=V_{REF}\sum_{i=0}^{9}\frac{b_i}{2^{i+1}} ,
$$

the output of an ideal 10-bit binary DAC; a nodal solution of the two-node network for all 1024 codes reproduces it exactly. The largest-to-smallest ratio in the arrays is 16 (compared with 512 for a single 10-bit binary array), and the total capacitance is about $64C$ instead of $1024C$.

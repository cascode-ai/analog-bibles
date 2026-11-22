# Detailed solution - A451

Component spread is the ratio of the largest to the smallest value of the same kind of component in the circuit. List all the capacitors, including the feedback capacitor, and take that ratio.

### Step 1 — Capacitor values in the circuit

The switched array contains

$$
C,\ 2C,\ 4C,\ \dots,\ 2^{N-1}C ,
$$

and the feedback capacitor is $C_X=2^NC$, chosen so that the MSB capacitor gives the weight $2^{N-1}C/C_X=1/2$.

### Step 2 — Largest-to-smallest ratio

The smallest capacitor is $C$ (the LSB capacitor) and the largest is $C_X$:

$$
\text{spread}=\frac{C_{\max}}{C_{\min}}=\frac{2^NC}{C}=2^N .
$$

Within the switched array alone the ratio is $2^{N-1}C/C=2^{N-1}$; including $C_X$, which the circuit must also realize to the same relative accuracy, the maximum component spread is $2^N$. It doubles with every added bit (e.g. 1024 for $N=10$), which is what limits binary-weighted arrays to modest resolution.

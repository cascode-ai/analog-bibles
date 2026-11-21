# Detailed solution - A484

The switch operations are the same as for matched capacitors, but with $C_1\ne C_2$ each charge-sharing step ($S_1$) gives a capacitance-weighted average instead of a simple average. Apply the weighted rule through the sequence.

### Step 1 — Charge-sharing rule

$S_2$ sets $v_{C1}=V_{REF}$, $S_3$ sets $v_{C1}=0$, $S_4$ sets $v_{C2}=0$. Closing $S_1$ conserves the total charge, so with $C_1=1.05C_2$

$$
v_{C1}=v_{C2}=\frac{C_1v_{C1}+C_2v_{C2}}{C_1+C_2}=\frac{1.05\,v_{C1}+v_{C2}}{2.05}.
$$

### Step 2 — The sequence

Voltages in units of $V_{REF}$:

| Closure | $v_{C1}$ | $v_{C2}$ | Calculation |
|---|---|---|---|
| $S_4$, $S_3$, $S_1$ | 0 | 0 | |
| $S_2$ | 1 | 0 | |
| $S_1$ | 0.5122 | 0.5122 | $1.05/2.05$ |
| $S_3$ | 0 | 0.5122 | |
| $S_1$ | 0.2499 | 0.2499 | $0.5122/2.05$ |
| $S_2$ | 1 | 0.2499 | |
| $S_1$ | 0.6341 | 0.6341 | $(1.05+0.2499)/2.05$ |

### Step 3 — Result

$$
v_{C1}=v_{C2}\approx0.634\,V_{REF}.
$$

The ideal value for this sequence (word 1010) is $0.625V_{REF}$, so the 5% mismatch raises the output by about $0.009V_{REF}$, roughly 0.15 LSB of a 4-bit converter. The error arises because each redistribution weights the newly loaded bit by $C_1/(C_1+C_2)=0.512$ and the previous result by $0.488$, instead of $0.5$ each.

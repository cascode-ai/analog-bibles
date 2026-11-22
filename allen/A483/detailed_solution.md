# Detailed solution - A483

Each switch either sets one capacitor to a known voltage ($S_2$, $S_3$, $S_4$) or shares charge between the two ($S_1$). With $C_1=C_2$, charge sharing replaces both voltages by their average. Apply these rules to the sequence one closure at a time.

### Step 1 — Rules for each switch

- $S_2$: $v_{C1}\to V_{REF}$; $S_3$: $v_{C1}\to0$; $S_4$: $v_{C2}\to0$.
- $S_1$: the total charge $C_1v_{C1}+C_2v_{C2}$ is conserved and redistributed over $C_1+C_2$:

$$
v_{C1}=v_{C2}=\frac{C_1v_{C1}+C_2v_{C2}}{C_1+C_2}=\frac{v_{C1}+v_{C2}}{2}\quad(C_1=C_2).
$$

### Step 2 — The sequence

Voltages in units of $V_{REF}$:

| Closure | $v_{C1}$ | $v_{C2}$ |
|---|---|---|
| $S_4$ | – | 0 |
| $S_3$ | 0 | 0 |
| $S_1$ | 0 | 0 |
| $S_2$ | 1 | 0 |
| $S_1$ | 0.5 | 0.5 |
| $S_3$ | 0 | 0.5 |
| $S_1$ | 0.25 | 0.25 |
| $S_2$ | 1 | 0.25 |
| $S_1$ | 0.625 | 0.625 |

The last redistribution is $(1+0.25)/2=0.625$.

### Step 3 — Result

$$
v_{C1}=v_{C2}=\frac58V_{REF}=0.625\,V_{REF}.
$$

The sequence is the serial conversion, LSB first, of the bits 0, 1, 0, 1 (each bit loads $C_1$ with 0 or $V_{REF}$ and is then averaged into $C_2$), i.e. the word 1010, whose value is $10/16\,V_{REF}$.

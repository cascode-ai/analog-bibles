# Detailed solution - A510

A gain error in the first stage shifts its residue, and every later stage doubles that shift. As long as no decision changes, the residues are linear in $\varepsilon$; the first output error occurs when one of them reaches the comparator threshold, zero. Find the ideal residues, write each as a function of $\varepsilon$, and find the zero crossing nearest $\varepsilon=0$.

### Step 1 — Ideal residues and word

With $V_i=2V_{i-1}-b_{i-1}V_{REF}$, in units of $V_{REF}$:

| Stage | Input $V_{i-1}$ | Bit |
|---|---|---|
| 1 | $V_0=0.7$ | 1 |
| 2 | $V_1=1.4-1=0.4$ | 1 |
| 3 | $V_2=0.8-1=-0.2$ | 0 |
| 4 | $V_3=-0.4+1=0.6$ | 1 |
| 5 | $V_4=1.2-1=0.2$ | 1 |

The ideal word is 11011.

### Step 2 — Residues with the first-stage gain error

The first decision uses $V_0$ itself and is unaffected. With $A_1=2(1+\varepsilon)$ the first residue becomes

$$
V_1=2(1+\varepsilon)(0.7)-1=0.4+1.4\varepsilon .
$$

While the bits keep their ideal values, each ideal stage maps $V\to2V\mp1$, so the error term doubles per stage:

$$
V_2=-0.2+2.8\varepsilon,\qquad
V_3=0.6+5.6\varepsilon,\qquad
V_4=0.2+11.2\varepsilon .
$$

### Step 3 — First decision to change

A bit changes when its stage input crosses zero:

| Input | Zero crossing at $\varepsilon$ | Bit affected |
|---|---|---|
| $V_1=0.4+1.4\varepsilon$ | $-0.4/1.4=-0.286$ | 2nd |
| $V_2=-0.2+2.8\varepsilon$ | $+0.2/2.8=+0.0714$ | 3rd |
| $V_3=0.6+5.6\varepsilon$ | $-0.6/5.6=-0.107$ | 4th |
| $V_4=0.2+11.2\varepsilon$ | $-0.2/11.2=-0.0179$ | 5th |

The crossing closest to zero is the last one:

$$
|\varepsilon|_{min}=\frac{0.2}{11.2}=0.0179,\qquad \varepsilon=-0.0179\ \ (A_1\approx1.964).
$$

At this gain the 5th-stage input reaches zero and the LSB changes from 1 to 0 (word 11010). For positive $\varepsilon$ the first error needs $\varepsilon=+0.0714$, where the 3rd bit changes. The last stage is the critical one because its input is small ($0.2V_{REF}$) and its error is amplified most, by $2^3\times1.4=11.2$.

# Detailed solution - A021

The normalized reverse current is the avalanche multiplication factor itself, $i_{RA}/i_R=M$. Evaluate $M(v_R)$ from the given empirical formula across the range up to the breakdown voltage, note where it departs from 1 and where it diverges, and plot it.

### Step 1 — Normalized current

Dividing the given relation by $i_R$:

$$
\frac{i_{RA}}{i_R}=M=\frac{1}{1-\left(v_R/BV\right)^n}=\frac{1}{1-\left(v_R/12\ \mathrm V\right)^6}.
$$

At $v_R=0$, $M=1$. As $v_R\to BV$ the denominator goes to zero, so $M\to\infty$: $v_R=12$ V is a vertical asymptote. The large exponent $n=6$ keeps $(v_R/BV)^6$ tiny until $v_R$ approaches $BV$, so $M$ stays near 1 over most of the range and then rises sharply.

### Step 2 — Representative values

For example, at $v_R=10$ V,

$$
\left(\frac{10}{12}\right)^6=0.3349,\qquad M=\frac{1}{1-0.3349}=1.50 .
$$

The same formula gives:

| $v_R$ (V) | 0–2 | 4 | 6 | 8 | 9 | 10 | 10.5 | 11 | 11.5 | 11.8 | 11.9 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $M$ | 1.000 | 1.001 | 1.016 | 1.096 | 1.22 | 1.50 | 1.81 | 2.46 | 4.44 | 10.4 | 20.4 | $\infty$ |

The voltage at which the current doubles follows from $(v_R/12)^6=1/2$: $v_R=12\cdot2^{-1/6}\ \mathrm V=10.7$ V.

### Step 3 — Plot

![Normalized reverse current versus reverse voltage, flat at 1 and rising steeply toward the breakdown asymptote at 12 V](/q/A021/solution-curves.svg)

The curve is flat at 1 up to about 6 V, bends upward around 9–10 V (the knee: $M=1.22$ at 9 V, 2 at 10.7 V), and rises toward the asymptote at 12 V. The vertical axis is cut at 10. Beyond $BV$ the formula no longer applies: the junction is in breakdown, and the current is limited only by the external circuit.

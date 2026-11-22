# Detailed solution - A002

An ideal sample-and-hold acquires the input at each sample instant and holds that value constant until the next instant (a zero-order hold). The output is therefore a staircase whose levels are the input values at $t=nT$; the task reduces to reading the sinusoid accurately at the integer values of $t/T$.

### Step 1 — Model the hold operation

With sampling period $T$ and ideal, instantaneous acquisition, the output is

$$
y(t)=x(nT)\quad\text{for}\quad nT\le t<(n+1)T,\qquad n=0,1,\dots,11.
$$

So the output changes only at the sample instants, jumps there to the current input value, and is flat in between. The held amplitude is not quantized: it is the analog value of the input at that instant.

### Step 2 — Describe the input waveform

From [Fig. 1] the sinusoid starts at 8 rising, peaks at about 14.5 near $t/T\approx2.75$, falls through 8 at $t/T=5.5$, reaches a minimum of about 1.5 near $t/T\approx8.25$, and returns to 8 at $t/T=11$. That is one full period of $11T$ about a dc level of 8 with amplitude 6.5:

$$
x(t)\approx8+6.5\sin\!\left(\frac{2\pi t}{11T}\right),\qquad x(nT)=8+6.5\sin\!\left(\frac{2\pi n}{11}\right).
$$

The fitted expression is used only to read the curve consistently; it reproduces the grid values in [Fig. 1] to within about 0.1. For example, at $n=1$:

$$
x(T)=8+6.5\sin\!\left(\frac{2\pi}{11}\right)=8+6.5(0.5406)=11.51.
$$

### Step 3 — Tabulate the held values

Evaluating the same expression at every sample instant gives the level of each step:

| Interval | $0\le t/T<1$ | $1$–$2$ | $2$–$3$ | $3$–$4$ | $4$–$5$ | $5$–$6$ |
|---|---|---|---|---|---|---|
| Held value | 8.0 | 11.5 | 13.9 | 14.4 | 12.9 | 9.8 |

| Interval | $6$–$7$ | $7$–$8$ | $8$–$9$ | $9$–$10$ | $10$–$11$ | $t/T\ge11$ |
|---|---|---|---|---|---|---|
| Held value | 6.2 | 3.1 | 1.6 | 2.1 | 4.5 | 8.0 |

Each interval includes its left end ($t=nT$) and excludes its right end, where the next sample takes over.

### Step 4 — Sketch the output

![Staircase sample-and-hold output over the dashed input sinusoid, with each held value labelled](/q/A002/solution-waveforms.svg)

The staircase follows the sinusoid but lags it by about half a sample period on average, $T/2$, because each value is held for a full period after it is taken. Its highest step, 14.4, and lowest step, 1.6, fall slightly short of the true extremes 14.5 and 1.5, which occur between sample instants at $t/T\approx2.75$ and $8.25$.

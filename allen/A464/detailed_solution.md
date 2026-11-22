# Detailed solution - A464

Write the combined output with the LSB subDAC running from $V_{REF}/x$, and require it to equal the output of an ideal 6-bit binary DAC for every code.

### Step 1 — Combined output

Each subDAC is an ideal 3-bit binary DAC of its own reference, so

$$
v_{OUT}=\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}\right)V_{REF}+\left(\frac{b_3}{2}+\frac{b_4}{4}+\frac{b_5}{8}\right)\frac{V_{REF}}{x}.
$$

### Step 2 — Required binary weights

An ideal 6-bit DAC gives

$$
v_{OUT}=\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}+\frac{b_3}{16}+\frac{b_4}{32}+\frac{b_5}{64}\right)V_{REF}.
$$

Matching the coefficient of $b_3$ (and likewise $b_4$, $b_5$) requires $\dfrac{1}{2x}=\dfrac{1}{16}$, so

$$
x=2^M=8 .
$$

### Step 3 — Interpretation

With $x=8$ the LSB subDAC's full-scale range, $V_{REF}/8$, equals exactly one LSB of the MSB subDAC, so the LSB subDAC fills each MSB step with $2^K=8$ finer levels and the combined characteristic is a uniform 64-level staircase.

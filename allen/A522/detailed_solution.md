# Detailed solution - A522

A flash converter makes all its decisions at once, one comparator per decision level. Count the decision levels an $N$-bit code needs, then design the encoder for the comparator polarity of [Fig. 1]: first locate the single transition in the thermometer code, then map its position to a 3-bit binary number.

### Step 1 — Why $2^N-1$ comparators suffice

An $N$-bit converter has $2^N$ output codes. Adjacent codes are separated by a decision level, so there are only $2^N-1$ code transitions. Each comparator implements one transition, and the number of comparators that have tripped (0 to $2^N-1$) already distinguishes all $2^N$ codes. The lowest code is the state in which no comparator has tripped, so it needs no comparator of its own. For $N=3$, seven comparators with taps at $0.125V_{REF},\dots,0.875V_{REF}$ give the eight codes 000 to 111.

### Step 2 — Comparator outputs for each code

Number the comparators $c_1$ (tap $0.125V_{REF}$, bottom) to $c_7$ (tap $0.875V_{REF}$, top). The tap drives the + input and $V^*_{in}$ the − input, so

$$
c_k=1\iff V^*_{in}<V_{tap,k}=\frac{2k-1}{16}\,V_{REF}.
$$

For output code $n$ ($V^*_{in}$ above $n$ taps), $c_1\dots c_n=0$ and $c_{n+1}\dots c_7=1$: an inverted thermometer code with a single 0→1 boundary between $c_n$ and $c_{n+1}$.

| Code $n$ | $c_7c_6c_5c_4c_3c_2c_1$ | Output word |
|---|---|---|
| 0 | 1111111 | 000 |
| 1 | 1111110 | 001 |
| 2 | 1111100 | 010 |
| 3 | 1111000 | 011 |
| 4 | 1110000 | 100 |
| 5 | 1100000 | 101 |
| 6 | 1000000 | 110 |
| 7 | 0000000 | 111 |

### Step 3 — Encoder logic

**Stage 1, transition detection.** Form a one-hot code that marks the boundary:

$$
h_n=\bar c_n\,c_{n+1}\quad(n=1,\dots,6),\qquad h_7=\bar c_7 .
$$

These are six 2-input AND gates, each with one inverted input, plus one inverter. Exactly one $h_n$ is 1, at $n$ equal to the code; for code 0 all $h_n$ are 0.

**Stage 2, OR plane (ROM).** Each output bit is the OR of the $h_n$ whose code has a 1 in that position:

$$
\begin{aligned}
\text{MSB}&=h_4+h_5+h_6+h_7,\\
\text{middle bit}&=h_2+h_3+h_6+h_7,\\
\text{LSB}&=h_1+h_3+h_5+h_7,
\end{aligned}
$$

three 4-input OR gates. Using the thermometer structure, the same functions reduce to

$$
\text{MSB}=\bar c_4,\qquad
\text{middle bit}=\bar c_2\,c_4+\bar c_6,\qquad
\text{LSB}=\bar c_1c_2+\bar c_3c_4+\bar c_5c_6+\bar c_7 .
$$

For example, the MSB is 1 for codes 4 to 7, which are exactly the codes with $V^*_{in}$ above the $0.5V_{REF}$ tap, i.e. $c_4=0$.

### Step 4 — Check

For $V^*_{in}=0.7V_{REF}$, the taps $0.125$ to $0.625V_{REF}$ lie below the input, so $c_1\dots c_5=0$ and $c_6=c_7=1$. Then $h_5=\bar c_5c_6=1$ and all other $h_n=0$, giving MSB $=1$, middle bit $=0$, LSB $=1$: the word 101, i.e. code 5, as expected since the input exceeds five taps.

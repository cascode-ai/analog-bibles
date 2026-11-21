# Detailed solution - A506

The serial DAC realizes the same halving recursion as an algorithmic DAC: with $C_1=C_2$, each share replaces $v_{C2}$ by the average of the new precharge level and the old $v_{C2}$. The ADC calls this DAC once per bit with a growing trial word, so trace the DAC clock by clock for each trial word, compare its output with $0.6V_{REF}$, and collect the bits.

### Step 1 — One serial D/A conversion

$C_2$ starts at $v_{C2}=0$ (S4). For bit $d_j$ (LSB first), the precharge period sets $v_{C1}=d_jV_{REF}$; in the share period S1 connects the equal capacitors and charge conservation gives

$$
C_1v_{C1}+C_2v_{C2}=(C_1+C_2)v'
\;\Longrightarrow\;
v_{C1}=v_{C2}=v'=\tfrac12\left(d_jV_{REF}+v_{C2}\right).
$$

After all $m$ bits of a word $d_1d_2\dots d_m$ (MSB $d_1$ applied last),

$$
V_{DAC}=V_{REF}\sum_{j=1}^{m}d_j\,2^{-j},
$$

so the trial word "1" gives $0.5V_{REF}$, "11" gives $0.75V_{REF}$, and so on. A word of $m$ bits takes $2m$ clock periods.

### Step 2 — Iterations and bit decisions

Each iteration converts the bits already decided followed by a trial 1 and keeps the 1 if $V_{in}^*=0.6V_{REF}>V_{DAC}$. Representative iteration 3, word 101 (LSB first: 1, 0, 1), in units of $V_{REF}$:

$$
\begin{aligned}
&\text{P: } v_{C1}=1,\ v_{C2}=0 &&\text{S: } \tfrac12(1+0)=0.5\\
&\text{P: } v_{C1}=0,\ v_{C2}=0.5 &&\text{S: } \tfrac12(0+0.5)=0.25\\
&\text{P: } v_{C1}=1,\ v_{C2}=0.25 &&\text{S: } \tfrac12(1+0.25)=0.625
\end{aligned}
$$

Since $0.6<0.625$, the trial bit is changed to 0. All four iterations ($v_{C1}$/$v_{C2}$ after each period, P = precharge or discharge, S = share):

| Iteration | Word (LSB first) | Levels $v_{C1}$/$v_{C2}$ per period | $V_{DAC}/V_{REF}$ | Decision |
|---|---|---|---|---|
| 1 | 1 | P 1/0, S 0.5/0.5 | 0.5 | $0.6>0.5$ → 1 |
| 2 | 11 (1, 1) | P 1/0, S 0.5/0.5, P 1/0.5, S 0.75/0.75 | 0.75 | $0.6<0.75$ → 0 |
| 3 | 101 (1, 0, 1) | P 1/0, S 0.5/0.5, P 0/0.5, S 0.25/0.25, P 1/0.25, S 0.625/0.625 | 0.625 | $0.6<0.625$ → 0 |
| 4 | 1001 (1, 0, 0, 1) | P 1/0, S 0.5/0.5, P 0/0.5, S 0.25/0.25, P 0/0.25, S 0.125/0.125, P 1/0.125, S 0.5625/0.5625 | 0.5625 | $0.6>0.5625$ → 1 |

Between iterations one clock period is used for the comparison and for resetting $v_{C2}$ to 0.

### Step 3 — Waveforms

The iterations take 2, 4, 6 and 8 clock periods, separated by three gap periods, so the conversion lasts $20+3=23$ periods. $v_{C1}$ jumps to $V_{REF}$ or 0 in every precharge period and equals $v_{C2}$ after every share; $v_{C2}$ restarts from 0 in each iteration and changes only in the share periods, ending at 0.5, 0.75, 0.625 and 0.5625 $V_{REF}$.

![Voltages across C1 and C2 over the 23 clock periods of the 4-bit conversion, with the four DAC outputs and bit decisions marked](/q/A506/solution-waveforms.svg)

### Step 4 — Output word

The decided bits, MSB first, give

$$
\text{digital word}=1001,\qquad V_{DAC}=\tfrac9{16}V_{REF}=0.5625\,V_{REF},
$$

the largest 4-bit level below $0.6V_{REF}$ (the next level, $0.625V_{REF}$, exceeds the input).

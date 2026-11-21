# Detailed solution - A535

With all references ideal, stage 1 divides the input into four correct 4-LSB subranges. With an interstage gain of 2 instead of 4, the residue spans only half of the second ADC's range, so stage 2 can produce only its two lowest codes. Build the staircase in LSBs of the ideal 4-bit converter ($V_{REF}/16$) and read INL, DNL and monotonicity from it.

### Step 1 — Stage 1

The ideal first ADC switches at $V_{REF}/4$, $V_{REF}/2$, $3V_{REF}/4$, i.e. at 4, 8, 12 LSB, and its DAC subtracts $mV_{REF}/4=4m$ LSB. Subrange $m$ covers $4m$ to $4m+4$ LSB.

### Step 2 — Stage 2 with $A=2$

The residue is

$$
v_{in}(2)=2\left[v_{in}(1)-4m\ \text{LSB}\right],
$$

which over a subrange rises only from 0 to $2(4\ \text{LSB})=8$ LSB $=V_{REF}/2$. The second ADC's thresholds are $V_{REF}/4$, $V_{REF}/2$, $3V_{REF}/4$ $=4$, 8, 12 LSB, so only the first is reached, at

$$
2\left[v_{in}(1)-4m\right]=4\;\Longrightarrow\;v_{in}(1)=4m+2\ \text{LSB}.
$$

Stage 2 outputs only 00 and 01, each for 2 LSB.

### Step 3 — Staircase

| Input (LSB) | 0–2 | 2–4 | 4–6 | 6–8 | 8–10 | 10–12 | 12–14 | 14–16 |
|---|---|---|---|---|---|---|---|---|
| Code | 0 | 1 | 4 | 5 | 8 | 9 | 12 | 13 |

![Actual and ideal 4-bit staircase characteristics with an interstage gain of 2](/q/A535/solution-curves.svg)

### Step 4 — INL, DNL and monotonicity

Each actual code lasts 2 LSB while the ideal code keeps rising by one per LSB. On the four 1-LSB intervals of a subrange the actual minus ideal code is therefore $0$, $-1$, $-1$, $-2$ LSB; for example, on 3–4 LSB the actual code is 1 and the ideal is 3. The pattern repeats in every subrange and the difference is never positive:

$$
+\text{INL}=0\ \text{LSB},\qquad -\text{INL}=-2\ \text{LSB}.
$$

The step $0\to1$ is 1 LSB (DNL $=0$); the steps $1\to4$, $5\to8$ and $9\to12$ are 3 LSB:

$$
+\text{DNL}=+2\ \text{LSB},\qquad -\text{DNL}=0\ \text{LSB}.
$$

Eight codes are missing: 0010, 0011, 0110, 0111, 1010, 1011, 1110 and 1111. Every step is upward, so the converter is **monotonic**. A too-low interstage gain therefore does not just scale the output; it removes the upper codes of every subrange.

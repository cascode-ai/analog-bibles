# Detailed solution - A540

Stage 1 and the residue path are ideal, so the input is divided correctly into four 4-LSB subranges and stage 2 sees the correct residue. Only the order of the two stage-2 bits is wrong. Work out what the swap does to the codes within one subrange, repeat it over the four subranges, and read INL, DNL and monotonicity from the staircase.

### Step 1 — Effect of the swap within a subrange

In subrange $m$ ($4m$ to $4m+4$ LSB, with 1 LSB $=V_{REF}/16$) the ideal second-stage ADC produces $b_2b_3=00,01,10,11$ on its four 1-LSB intervals. With the two bits interchanged, the word receives

| Interval in subrange | 1st | 2nd | 3rd | 4th |
|---|---|---|---|---|
| Ideal $b_2b_3$ | 00 | 01 | 10 | 11 |
| Actual $b_2b_3$ | 00 | 10 | 01 | 11 |
| Stage-2 value | 0 | 2 | 1 | 3 |

### Step 2 — Staircase

The output code is $4m$ plus the stage-2 value, each code 1 LSB wide:

$$
0,\,2,\,1,\,3,\ 4,\,6,\,5,\,7,\ 8,\,10,\,9,\,11,\ 12,\,14,\,13,\,15 ,
$$

i.e. 0000, 0010, 0001, 0011, 0100, 0110, 0101, 0111, … All 16 codes appear, so none is missing.

![Output–input characteristic with the stage-2 bits interchanged, compared with the ideal staircase](/q/A540/solution-curves.svg)

### Step 3 — INL

The actual minus ideal code in each subrange is $0,\,+1,\,-1,\,0$, so

$$
+\text{INL}=+1\ \text{LSB},\qquad -\text{INL}=-1\ \text{LSB}.
$$

### Step 4 — DNL and monotonicity

The vertical steps repeat the pattern $+2$, $-1$, $+2$, $+1$ LSB (the last one being the step into the next subrange). With $\text{DNL}=(D_{cx}-1)$ LSB:

$$
+\text{DNL}=(2-1)\ \text{LSB}=+1\ \text{LSB},\qquad
-\text{DNL}=(-1-1)\ \text{LSB}=-2\ \text{LSB}.
$$

The negative steps, for example 0010 → 0001 at 2 LSB, mean that a larger input gives a smaller code: the converter is **not monotonic**, even though no code is missing.

# Detailed solution - A536

With all references ideal, stage 1 divides the input into four correct 4-LSB subranges. With an interstage gain of 6 instead of 4, the residue rises too fast: stage 2 reaches its thresholds early and then saturates at its top code for the rest of the subrange. Build the staircase in LSBs of the ideal 4-bit converter ($V_{REF}/16$) and read INL, DNL and monotonicity.

### Step 1 — Stage 2 transitions with $A=6$

Stage 1 is ideal: it switches at 4, 8, 12 LSB and subtracts $4m$ LSB in subrange $m$. The residue is

$$
v_{in}(2)=6\left[v_{in}(1)-4m\ \text{LSB}\right],
$$

and the second ADC compares it with $kV_{REF}/4=4k$ LSB. It steps when

$$
6\left[v_{in}(1)-4m\right]=4k\;\Longrightarrow\;v_{in}(1)=4m+\tfrac23k\ \text{LSB},
$$

i.e. at $4m+0.67$, $4m+1.33$ and $4m+2$ LSB instead of the ideal $4m+1$, $4m+2$, $4m+3$. Above $4m+2$ LSB the residue exceeds $3V_{REF}/4$ and the second ADC stays at 11 until stage 1 switches at $4m+4$ LSB.

### Step 2 — Staircase

In each subrange, codes $4m$, $4m+1$ and $4m+2$ are each about 0.67 LSB wide, and code $4m+3$ is 2 LSB wide:

| Input (LSB) | 0–0.67 | 0.67–1.33 | 1.33–2 | 2–4 | 4–4.67 | … | 12–12.67 | 12.67–13.33 | 13.33–14 | 14–16 |
|---|---|---|---|---|---|---|---|---|---|---|
| Code | 0 | 1 | 2 | 3 | 4 | … | 12 | 13 | 14 | 15 |

All 16 codes appear.

![Actual and ideal 4-bit staircase characteristics with an interstage gain of 6](/q/A536/solution-curves.svg)

### Step 3 — INL

The actual code reaches each value early, so in every subrange it is 1 above the ideal code on $4m+\tfrac23$ to $4m+1$, $4m+\tfrac43$ to $4m+2$ and $4m+2$ to $4m+3$ LSB, and equal to it elsewhere. It is never below:

$$
+\text{INL}=+1\ \text{LSB},\qquad -\text{INL}=0\ \text{LSB}.
$$

### Step 4 — DNL and monotonicity

Every vertical step of the actual characteristic, including the steps at 4, 8 and 12 LSB, raises the code by exactly one, so by the vertical-step definition

$$
\text{DNL}=(1-1)\ \text{LSB}=0\ \text{LSB}
$$

at every step ($+\text{DNL}=-\text{DNL}=0$). There are no missing codes and every step is upward, so the converter is **monotonic**. The error appears only in the code widths, 0.67 LSB and 2 LSB; measured along the input axis these would correspond to width errors of $-0.33$ and $+1$ LSB, but the stated definition uses the step heights.

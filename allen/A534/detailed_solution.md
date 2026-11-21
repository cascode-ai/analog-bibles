# Detailed solution - A534

Express all thresholds in LSBs of the ideal 4-bit converter ($V_{REF}/16$) and follow an input through both stages. Here the first-stage ADC and DAC both use $0.75V_{REF}$, so stage 1 divides the input into subranges of only 3 LSB and subtracts exactly the start of each subrange; the ideal second stage then resolves each subrange in 1-LSB steps but never reaches its top code. Build the staircase and read INL, DNL and monotonicity from it.

### Step 1 — Stage 1

The first ADC compares $v_{in}(1)$ with $kV_{REF1}/4=0.1875k\,V_{REF}$, i.e. with

$$
3,\ 6,\ 9\ \text{LSB},
$$

and outputs $m=b_0b_1$. Its DAC returns $v_{out}(1)=mV_{REF2}/4=0.1875m\,V_{REF}=3m$ LSB, exactly the lower edge of subrange $m$.

### Step 2 — Stage 2

The amplified residue is

$$
v_{in}(2)=4\left[v_{in}(1)-3m\ \text{LSB}\right],
$$

and the ideal second ADC compares it with $kV_{REF}/4=4k$ LSB. It steps when

$$
4\left[v_{in}(1)-3m\right]=4k\;\Longrightarrow\;v_{in}(1)=3m+k\ \text{LSB},\qquad k=1,2,3 .
$$

Within a 3-LSB subrange only $k=1,2$ occur before stage 1 moves on, so subrange $m$ gives codes $4m$, $4m+1$, $4m+2$, each 1 LSB wide. Code $4m+3$ would need $v_{in}(1)=3m+3$, where stage 1 already switches; only the last subrange ($m=3$), which extends to full scale, reaches code 15, at 12 LSB.

### Step 3 — Staircase

| Input (LSB) | 0–1 | 1–2 | 2–3 | 3–4 | 4–5 | 5–6 | 6–7 | 7–8 | 8–9 | 9–10 | 10–11 | 11–12 | 12–16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Code | 0 | 1 | 2 | 4 | 5 | 6 | 8 | 9 | 10 | 12 | 13 | 14 | 15 |
| Ideal code | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12–15 |

![Actual and ideal 4-bit staircase characteristics with stage-1 references of 0.75 VREF](/q/A534/solution-curves.svg)

### Step 4 — INL, DNL and monotonicity

The actual code minus the ideal code is $+1$ on 3–6 LSB, $+2$ on 6–9 LSB, $+3$ on 9–13 LSB, then $+2$, $+1$, $0$ on 13–14, 14–15, 15–16 LSB. It is never negative:

$$
+\text{INL}=+3\ \text{LSB},\qquad -\text{INL}=0\ \text{LSB}.
$$

The vertical steps $2\to4$, $6\to8$ and $10\to12$ (at 3, 6 and 9 LSB) are 2 LSB high; all others are 1 LSB:

$$
+\text{DNL}=+1\ \text{LSB},\qquad -\text{DNL}=0\ \text{LSB}.
$$

Codes 0011, 0111 and 1011 (3, 7, 11) are missing, and code 15 is 4 LSB wide. Every step is upward, so the converter is **monotonic**.

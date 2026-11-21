# Detailed solution - A533

Express every threshold in LSBs of the ideal 4-bit converter ($V_{REF}/16$) and follow an input through both stages. The first-stage ADC switches too early (its reference is $0.75V_{REF}$), while its DAC subtracts full-scale steps; the second-stage ADC is also scaled by 0.75. Build the staircase from the two stages, then read INL, DNL and monotonicity from it. $V_{REF4}$ only sets the analog output $v_{out}(2)$ of the last DAC and has no effect on the digital word.

### Step 1 — Stage 1

The first ADC compares $v_{in}(1)$ with $V_{REF1}/4$, $V_{REF1}/2$, $3V_{REF1}/4$ $=0.1875$, $0.375$, $0.5625\,V_{REF}$, i.e. with

$$
3,\ 6,\ 9\ \text{LSB},
$$

and outputs $m=b_0b_1$ equal to the number of thresholds reached. Its DAC returns $v_{out}(1)=(b_0/2+b_1/4)V_{REF2}=mV_{REF}/4=4m$ LSB.

### Step 2 — Stage 2

The residue amplified by $A=4$ is

$$
v_{in}(2)=4\left[v_{in}(1)-4m\ \text{LSB}\right].
$$

The second ADC compares it with $kV_{REF3}/4=0.1875k\,V_{REF}=3k$ LSB, $k=1,2,3$, and outputs $n=b_2b_3$. Stage 2 therefore steps at

$$
4\left[v_{in}(1)-4m\right]=3k\;\Longrightarrow\;v_{in}(1)=4m+0.75k\ \text{LSB},
$$

as long as $m$ does not change first. Where the residue is negative ($v_{in}(1)<4m$ LSB, possible because stage 1 switches early), $n=0$. The output code is $4m+n$.

### Step 3 — Staircase

For example, for $3\le v_{in}(1)<6$ LSB, $m=1$; the residue is negative up to 4 LSB, so the code stays at 4, then steps to 5 at $4.75$ and to 6 at $5.5$ LSB, before stage 1 switches to $m=2$ at 6 LSB. Altogether (input in LSB, code in decimal):

| Input | 0–0.75 | 0.75–1.5 | 1.5–2.25 | 2.25–3 | 3–4.75 | 4.75–5.5 | 5.5–6 | 6–8.75 | 8.75–9 | 9–12.75 | 12.75–13.5 | 13.5–14.25 | 14.25–16 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Code | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 12 | 13 | 14 | 15 |

![Actual and ideal 4-bit staircase characteristics of the two-stage pipeline ADC](/q/A533/solution-curves.svg)

### Step 4 — INL

The ideal code is $\lfloor v_{in}(1)/\text{LSB}\rfloor$, with transitions at $k$ LSB. Every actual transition occurs at or before its ideal position, so the actual code is never below the ideal one:

$$
-\text{INL}=0\ \text{LSB}.
$$

The largest excess is on $9$–$10$ LSB, where the actual code is 12 and the ideal is 9:

$$
+\text{INL}=+3\ \text{LSB}
$$

(it is $+2$ LSB on 6–7 LSB and on 10–11 LSB).

### Step 5 — DNL and monotonicity

The vertical steps are all 1 LSB (DNL $=0$) except

$$
6\to8\ \text{at }6\ \text{LSB}:\ \text{DNL}=+1\ \text{LSB},\qquad
9\to12\ \text{at }9\ \text{LSB}:\ \text{DNL}=+2\ \text{LSB}.
$$

Hence $+\text{DNL}=+2$ LSB and $-\text{DNL}=0$ LSB. Codes 0111, 1010 and 1011 (7, 10, 11) are missing. Every step is upward, so the converter is **monotonic** despite the missing codes.

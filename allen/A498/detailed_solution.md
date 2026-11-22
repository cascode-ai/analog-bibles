# Detailed solution - A498

Read both staircases off [Fig. 1] on a common input grid, subtract them interval by interval for the INL, and read the signed height of each vertical step of the actual staircase for the DNL. Both are measured along the code axis, in LSBs.

### Step 1 — Tabulate the two staircases

Every transition in the figure lies on a multiple of $V_{REF}/16$, so use sixteen intervals of width $V_{REF}/16$. The ideal (gray) code steps up by one at each multiple of $V_{REF}/8$, i.e. it equals $\lfloor n/2\rfloor$ on interval $n=0,\dots,15$. The actual (black) staircase, with the input in units of $V_{REF}/16$, is:

| Input interval | 0–1 | 1–2 | 2–5 | 5–7 | 7–10 | 10–13 | 13–14 | 14–16 |
|---|---|---|---|---|---|---|---|---|
| Actual code | 000 | 001 | 100 | 010 | 101 | 011 | 110 | 111 |

### Step 2 — INL, interval by interval

With $D$ the actual and $D_{id}$ the ideal code on the same interval, $\text{INL}=D-D_{id}$ (LSB). For example, on interval 2 ($2/16$–$3/16$) the actual code is 100 = 4 and the ideal is 1, so INL $=+3$ LSB.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $D$ | 0 | 1 | 4 | 4 | 4 | 2 | 2 | 5 | 5 | 5 | 3 | 3 | 3 | 6 | 7 | 7 |
| $D_{id}$ | 0 | 0 | 1 | 1 | 2 | 2 | 3 | 3 | 4 | 4 | 5 | 5 | 6 | 6 | 7 | 7 |
| INL | 0 | +1 | +3 | +3 | +2 | 0 | −1 | +2 | +1 | +1 | −2 | −2 | −3 | 0 | 0 | 0 |

Hence

$$
+\text{INL}=+3\ \text{LSB}\ \ (2/16\text{–}4/16),\qquad
-\text{INL}=-3\ \text{LSB}\ \ (12/16\text{–}13/16).
$$

The first extreme is code 100 where 001 is ideal; the second is code 011 where 110 is ideal.

### Step 3 — DNL at each vertical step

At each vertical step, $\text{DNL}=(D_{cx}-1)$ LSB with $D_{cx}$ the signed step height:

| Step at input | $1/16$ | $2/16$ | $5/16$ | $7/16$ | $10/16$ | $13/16$ | $14/16$ |
|---|---|---|---|---|---|---|---|
| Codes | 000→001 | 001→100 | 100→010 | 010→101 | 101→011 | 011→110 | 110→111 |
| $D_{cx}$ (LSB) | +1 | +3 | −2 | +3 | −2 | +3 | +1 |
| DNL (LSB) | 0 | +2 | −3 | +2 | −3 | +2 | 0 |

Therefore

$$
+\text{DNL}=+2\ \text{LSB},\qquad -\text{DNL}=-3\ \text{LSB}.
$$

The two downward steps (at $5/16$ and $10/16$) also make this converter nonmonotonic.

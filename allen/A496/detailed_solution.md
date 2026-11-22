# Detailed solution - A496

Read both staircases off [Fig. 1] on a common input grid, subtract them interval by interval to get the INL, and read the height of each vertical step of the actual staircase to get the DNL. Both quantities are measured along the code axis, in LSBs.

### Step 1 — Tabulate the two staircases

Every transition in the figure falls on a multiple of $V_{REF}/16$, so divide the input range into sixteen intervals of width $V_{REF}/16$. The ideal (gray) code steps up by one at each multiple of $V_{REF}/8$, i.e. it is $\lfloor n/2\rfloor$ on interval $n=0,\dots,15$. The actual (black) staircase reads, with the input in units of $V_{REF}/16$:

| Input interval | 0–1 | 1–3 | 3–6 | 6–7 | 7–9 | 9–12 | 12–13 | 13–16 |
|---|---|---|---|---|---|---|---|---|
| Actual code | 000 | 001 | 011 | 100 | 101 | 100 | 110 | 111 |

### Step 2 — INL, interval by interval

With $D$ the actual code and $D_{id}$ the ideal code on the same interval,

$$
\text{INL}=D-D_{id}\quad\text{(LSB)}.
$$

For example, on interval 3 ($3/16$–$4/16$) the actual code is 011 = 3 while the ideal is 1, so INL $=+2$ LSB.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $D$ | 0 | 1 | 1 | 3 | 3 | 3 | 4 | 5 | 5 | 4 | 4 | 4 | 6 | 7 | 7 | 7 |
| $D_{id}$ | 0 | 0 | 1 | 1 | 2 | 2 | 3 | 3 | 4 | 4 | 5 | 5 | 6 | 6 | 7 | 7 |
| INL | 0 | +1 | 0 | +2 | +1 | +1 | +1 | +2 | +1 | 0 | −1 | −1 | 0 | +1 | 0 | 0 |

Hence

$$
+\text{INL}=+2\ \text{LSB}\ \ (3/16\text{–}4/16\ \text{and}\ 7/16\text{–}8/16),\qquad
-\text{INL}=-1\ \text{LSB}\ \ (10/16\text{–}12/16).
$$

### Step 3 — DNL at each vertical step

At each vertical step of the actual staircase, $\text{DNL}=(D_{cx}-1)$ LSB with $D_{cx}$ the signed step height:

| Step at input | $1/16$ | $3/16$ | $6/16$ | $7/16$ | $9/16$ | $12/16$ | $13/16$ |
|---|---|---|---|---|---|---|---|
| Codes | 000→001 | 001→011 | 011→100 | 100→101 | 101→100 | 100→110 | 110→111 |
| $D_{cx}$ (LSB) | +1 | +2 | +1 | +1 | −1 | +2 | +1 |
| DNL (LSB) | 0 | +1 | 0 | 0 | −2 | +1 | 0 |

Therefore

$$
+\text{DNL}=+1\ \text{LSB}\ \ (\text{at }3/16\text{ and }12/16),\qquad
-\text{DNL}=-2\ \text{LSB}\ \ (\text{at }9/16).
$$

The +2 step at $3/16$ skips code 010, which is missing; the downward step at $9/16$ makes the characteristic nonmonotonic.

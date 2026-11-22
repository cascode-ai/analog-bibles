# Detailed solution - A495

With both measures taken along the code axis, a vertical step of the actual staircase is bounded by where the code may sit just before and just after it. Find the tallest step the $\pm1$ LSB INL band allows, then build a complete 3-bit characteristic that contains it and stays inside the band everywhere.

### Step 1 — Ideal staircase and the INL band

Measure the input in units of $V_{REF}/16$. The ideal code $D_{id}$ steps up by one at the transitions $1,3,5,\dots,13$, so it is 0 on $(0,1)$, $k$ on $(2k-1,2k+1)$ for $k=1,\dots,6$, and 7 above 13. The actual code $D$ is an integer satisfying

$$
\text{INL}=D-D_{id},\qquad |D-D_{id}|\le1\ \text{LSB}\ \text{at every input}.
$$

At each vertical step of $D$, $\text{DNL}=(D_{cx}-1)$ LSB with $D_{cx}$ the signed step height, so the largest DNL comes from the tallest upward step.

### Step 2 — Tallest step allowed by the INL limit

Let $D_{id}^{-}$ and $D_{id}^{+}$ be the ideal codes just below and just above the step. The INL limit allows the actual code to be as low as $D^{-}=D_{id}^{-}-1$ before the step and as high as $D^{+}=D_{id}^{+}+1$ after it. Hence

$$
D_{cx}=D^{+}-D^{-}\le(D_{id}^{+}+1)-(D_{id}^{-}-1)=D_{id}^{+}-D_{id}^{-}+2 .
$$

- Away from an ideal transition, $D_{id}^{+}=D_{id}^{-}$, so $D_{cx}\le2$ and DNL $\le+1$ LSB.
- At an ideal transition, $D_{id}^{+}-D_{id}^{-}=1$, so $D_{cx}\le3$: the code jumps from $k-2$ (1 LSB below the ideal $k-1$) to $k+1$ (1 LSB above the ideal $k$).

The maximum is therefore

$$
\text{DNL}_{max}=(3-1)\ \text{LSB}=+2\ \text{LSB},
$$

a 3-LSB step that skips two codes. A taller step would put the code more than 1 LSB from the ideal staircase on at least one side.

### Step 3 — A characteristic that reaches the limit

Place 3-LSB steps at the ideal transitions 3/16 and 9/16:

| $v_{in}/V_{REF}$ | Actual code | Ideal codes there | INL (LSB) |
|---|---|---|---|
| 0 – 3/16 | 000 | 0, 1 | 0, −1 |
| 3/16 – 9/16 | 011 | 2, 3, 4 | +1, 0, −1 |
| 9/16 – 15/16 | 110 | 5, 6, 7 | +1, 0, −1 |
| 15/16 – 1 | 111 | 7 | 0 |

The INL stays within $\pm1$ LSB everywhere. The steps at 3/16 ($000\to011$) and 9/16 ($011\to110$) have $D_{cx}=3$, so DNL $=+2$ LSB; the step at 15/16 has $D_{cx}=1$, DNL $=0$. Codes 001, 010, 100 and 101 are missing.

![Actual 3-bit ADC staircase with two 3-LSB steps against the ideal staircase](/q/A495/solution-curves.svg)

### Step 4 — Negative DNL, for completeness

Applying the bound to downward steps, $D_{cx}\ge(D_{id}^{+}-1)-(D_{id}^{-}+1)$:

- at an ideal transition the code can fall from $k$ (1 LSB above the ideal $k-1$) to $k-1$ (1 LSB below the ideal $k$), so $D_{cx}=-1$ and DNL $=-2$ LSB;
- inside one ideal code $k$ it can fall from $k+1$ to $k-1$, so $D_{cx}=-2$ and DNL $=-3$ LSB.

Either step makes the converter nonmonotonic. The largest positive DNL, the quantity asked for, is $+2$ LSB.

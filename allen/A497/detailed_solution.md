# Detailed solution - A497

An ADC is monotonic when its output code never decreases as the input increases, i.e. when every vertical step of its staircase is upward (DNL $>-1$ LSB at every step). Read the actual staircase in [Fig. 1] and look for a downward step.

### Step 1 — Read the actual staircase

All transitions fall on multiples of $V_{REF}/16$. With the input in units of $V_{REF}/16$, the black (actual) characteristic is:

| Input interval | 0–1 | 1–3 | 3–6 | 6–7 | 7–9 | 9–12 | 12–13 | 13–16 |
|---|---|---|---|---|---|---|---|---|
| Actual code | 000 | 001 | 011 | 100 | 101 | 100 | 110 | 111 |

### Step 2 — Check the direction of every step

The step heights $D_{cx}$ are $+1,+2,+1,+1,-1,+2,+1$ LSB. The fifth step is negative: at

$$
v_{in}=\frac{9}{16}V_{REF}\quad\left(=4.5/8\ \text{of full scale}\right)
$$

the code drops from 101 to 100, a $-1$ LSB step, so $\text{DNL}=(-1-1)\ \text{LSB}=-2\ \text{LSB}$, below the $-1$ LSB monotonicity limit.

### Step 3 — Conclusion

The ADC is **not monotonic**: inputs between $9V_{REF}/16$ and $12V_{REF}/16$ produce code 100, smaller than the code 101 produced by inputs just below $9V_{REF}/16$.

The +2 LSB step at $3V_{REF}/16$ skips code 010, so that code is missing; a missing code by itself does not break monotonicity, since the code still only increases there. It is the downward step at $9V_{REF}/16$ that makes the converter nonmonotonic.

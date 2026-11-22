# Detailed solution - A511

A comparator offset moves only the decision threshold; it does not enter the residue, which depends only on the input and on the bits already decided. So the residues stay at their ideal values until a decision flips, and the first error occurs when the common threshold $V_{OS}$ reaches the stage input that lies closest to zero.

### Step 1 — Ideal stage inputs

With $V_i=2V_{i-1}-b_{i-1}V_{REF}$ and $V_0=0.7V_{REF}$, in units of $V_{REF}$:

| Stage | Input $V_{i-1}$ | Bit |
|---|---|---|
| 1 | 0.7 | 1 |
| 2 | $1.4-1=0.4$ | 1 |
| 3 | $0.8-1=-0.2$ | 0 |
| 4 | $-0.4+1=0.6$ | 1 |
| 5 | $1.2-1=0.2$ | 1 |

The ideal word is 11011.

### Step 2 — Effect of the offset

Each comparator now outputs 1 when $V_{i-1}>V_{OS}$. The residue $V_i=2V_{i-1}-b_{i-1}V_{REF}$ contains no $V_{OS}$, so if every decision is unchanged, every stage input is exactly as in Step 1. A decision flips only when $V_{OS}$ reaches the stage input:

- for $V_{OS}>0$, the first input it reaches is $V_4=+0.2V_{REF}$ (5th bit, 1 → 0);
- for $V_{OS}<0$, the first input it reaches is $V_2=-0.2V_{REF}$ (3rd bit, 0 → 1).

### Step 3 — Smallest offset that causes an error

Both stage inputs nearest the threshold are $0.2V_{REF}$ away from zero, so

$$
|V_{OS}|_{min}=0.2\,V_{REF},
$$

of either sign. Unlike a gain error, the offset is not multiplied by the later stages, because it acts only on the decision and not on the signal path.

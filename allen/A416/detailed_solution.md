# Detailed solution - A416

The specification fixes extremes, not a unique characteristic, so the task is to construct one 3-bit transfer curve whose INL reaches exactly +1 and −1 LSB and whose DNL also reaches exactly +1 and −1 LSB, and nothing larger. The key tool is the link between the two measures: both are taken against the same ideal staircase, so each DNL is the change in INL between neighbouring codes.

### Step 1 — Definitions and their relation

Let $V_k$ be the output for code $k$ in LSB, with the ideal output $k$ LSB, LSB $=$ FSR/8. Then

$$
\mathrm{INL}_k=V_k-k,\qquad
\mathrm{DNL}_{k\to k+1}=(V_{k+1}-V_k)-1=\mathrm{INL}_{k+1}-\mathrm{INL}_k .
$$

A DNL of $+1$ means a step of 2 LSB, and a DNL of $-1$ means a step of 0 (a flat step). The INL is the running sum of the DNLs.

### Step 2 — Construct the characteristic

Keep the end points ideal ($V_0=0$, $V_7=7$ LSB) and choose the INL sequence so that it reaches $+1$ once and $-1$ once while changing by at most 1 between neighbouring codes:

$$
\mathrm{INL}=0,\ 0,\ +1,\ 0,\ 0,\ -1,\ 0,\ 0 .
$$

Adding $k$ gives the outputs, and differencing gives the DNLs:

| Code | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|---|---|---|---|---|---|---|---|---|
| Output (LSB) | 0 | 1 | 3 | 3 | 4 | 4 | 6 | 7 |
| INL (LSB) | 0 | 0 | +1 | 0 | 0 | −1 | 0 | 0 |

| Transition | 000→001 | 001→010 | 010→011 | 011→100 | 100→101 | 101→110 | 110→111 |
|---|---|---|---|---|---|---|---|
| Step (LSB) | 1 | 2 | 0 | 1 | 0 | 2 | 1 |
| DNL (LSB) | 0 | +1 | −1 | 0 | −1 | +1 | 0 |

### Step 3 — Check the specification

- Largest positive INL: $+1$ LSB at code 010; largest negative INL: $-1$ LSB at code 101.
- Largest positive DNL: $+1$ LSB (steps 001→010 and 101→110); largest negative DNL: $-1$ LSB (flat steps 010→011 and 100→101).
- No step exceeds 2 LSB and no level lies more than 1 LSB from the ideal, so the extremes are exactly the specified ±1 LSB.

### Step 4 — Plot

![Example 3-bit DAC output versus code, showing INL of plus and minus 1 LSB and DNL of plus and minus 1 LSB against the ideal line](/q/A416/solution-curves.svg)

The analog output is plotted in LSB, so the full-scale value can be anything; multiplying the axis by FSR/8 gives volts. Each code produces one output level; the thin lines only connect them to show the steps. Any other curve with the same features satisfies the specification equally well: somewhere a 2-LSB step and a flat step, and one level exactly 1 LSB above and another exactly 1 LSB below the ideal line. A flat step (DNL $=-1$) does not make the DAC non-monotonic, since two codes simply give the same output; that would need DNL $<-1$.

# Detailed solution - A499

Measured along the analog axis, the INL is the deviation of each code transition from its ideal position, and each code's width error (its DNL) is the change in that deviation from one transition to the next. With both end transitions pinned and only six interior codes, the deviation cannot travel far enough to reach large values of both signs. Bound it, then construct a characteristic that reaches the bound.

### Step 1 — Deviations as a bounded walk

Use the LSB $=V_{REF}/8$ as the input unit. The ideal transitions of a 3-bit converter lie at $t_k^{id}=k-0.5$ LSB, $k=1,\dots,7$. Let $t_k$ be the actual transitions and

$$
e_k=t_k-t_k^{id}\quad(\text{LSB}),\qquad \text{INL}_k=e_k .
$$

Code $k$ ($k=1,\dots,6$, i.e. 001 to 110) spans $t_k$ to $t_{k+1}$, so its width and DNL are

$$
W_k=t_{k+1}-t_k=1+(e_{k+1}-e_k),\qquad
\text{DNL}_k=W_k-1=e_{k+1}-e_k .
$$

Zero offset and gain error fix $e_1=e_7=0$, and $|\text{DNL}_k|\le0.5$ LSB gives $|e_{k+1}-e_k|\le0.5$ LSB. The seven deviations therefore form a walk of six steps, each at most 0.5 LSB, that starts and ends at zero.

### Step 2 — Largest symmetric excursion

Suppose the walk reaches $+x$ at transition $i$ and $-x$ at transition $j$ (the order does not matter by symmetry). Let $a=i-1$, $b=|j-i|$ and $c$ be the numbers of steps before the first extreme, between the extremes and after the second, with $a+b+c=6$. Each step moves at most 0.5 LSB, so

$$
x\le0.5a,\qquad 2x\le0.5b,\qquad x\le0.5c .
$$

These would allow $x=0.75$ LSB only with $a=c=1.5$ and $b=3$, which are not integers; meeting them with integers would need $2+3+2=7$ steps. With six steps, the best integer splits are $(1,4,1)$, giving $\min(0.5,1,0.5)=0.5$, and $(2,2,2)$, giving $\min(1,0.5,1)=0.5$. Hence

$$
\text{INL}_{sym,max}=\pm0.5\ \text{LSB}.
$$

### Step 3 — A characteristic that reaches ±0.5 LSB

Choose the code widths of 001 to 110 as $1.5,\ 0.5,\ 0.5,\ 1.0,\ 1.5,\ 1.0$ LSB, i.e. DNL $=+0.5,-0.5,-0.5,0,+0.5,0$ LSB, all within the limit. Starting from $t_1=0.5$ LSB:

| Transition $k$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Ideal $t_k^{id}$ (LSB) | 0.5 | 1.5 | 2.5 | 3.5 | 4.5 | 5.5 | 6.5 |
| Actual $t_k$ (LSB) | 0.5 | 2.0 | 2.5 | 3.0 | 4.0 | 5.5 | 6.5 |
| INL $e_k$ (LSB) | 0 | +0.5 | 0 | −0.5 | −0.5 | 0 | 0 |

The INL reaches $+0.5$ LSB at the 001→010 transition and $-0.5$ LSB at the 011→100 and 100→101 transitions, while the end transitions stay at their ideal positions.

![3-bit ADC characteristic with DNL within ±0.5 LSB and INL reaching +0.5 and −0.5 LSB](/q/A499/solution-curves.svg)

If only one polarity were required, the walk could rise by 0.5 LSB on each of the first three codes and fall back over the last three, reaching 1.5 LSB at the middle transition; the symmetric requirement is what limits the answer to $\pm0.5$ LSB.

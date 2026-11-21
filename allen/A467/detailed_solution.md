# Detailed solution - A467

Write the output as a function of the scaling factor $x$, obtain the INL and both kinds of DNL as linear functions of $(4x-1)$, and bound them over $5/24\le x\le7/24$. Because every error is linear in $x$, its extremes occur at the ends of the range.

### Step 1 — Output in LSBs

With $1\,\mathrm{LSB}=V_{REF}/16$ and the code $k=4m+n$ ($m=2b_0+b_1$, $n=2b_2+b_3$, each 0–3), the MSB subDAC gives $(m/4)V_{REF}=4m$ LSB and the scaled LSB subDAC gives $x(n/4)V_{REF}=4xn$ LSB:

$$
v_{OUT}=4m+4xn\ \mathrm{LSB},\qquad v_{OUT,ideal}=4m+n\ \mathrm{LSB}.
$$

Write $\varepsilon=4x-1$; the range $x=\tfrac14\pm\tfrac1{24}$ means $|\varepsilon|\le\tfrac16$.

### Step 2 — INL

$$
\mathrm{INL}=v_{OUT}-v_{OUT,ideal}=(4x-1)\,n=\varepsilon n\ \mathrm{LSB},\qquad
|\mathrm{INL}|\le\frac16\cdot3=0.5\ \mathrm{LSB}.
$$

The bound is reached at $n=3$: $+0.5$ LSB for $x=7/24$ and $-0.5$ LSB for $x=5/24$.

### Step 3 — DNL

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad \text{step}=4x,\quad \mathrm{DNL}=4x-1=\varepsilon\in\left[-\tfrac16,+\tfrac16\right],\\
\text{group transition }(n=3\to0,\ m\to m+1):&\quad \text{step}=4-12x,\quad \mathrm{DNL}=3-12x=-3\varepsilon\in[-0.5,+0.5].
\end{aligned}
$$

The group transition is the worst case: its DNL is $-0.5$ LSB at $x=7/24$ and $+0.5$ LSB at $x=5/24$.

### Step 4 — Check at the extremes

| $x$ | INL range (LSB) | DNL in group (LSB) | DNL at transition (LSB) |
|---|---|---|---|
| $5/24$ | $0$ to $-0.5$ | $-1/6$ | $+0.5$ |
| $1/4$ | $0$ | $0$ | $0$ |
| $7/24$ | $0$ to $+0.5$ | $+1/6$ | $-0.5$ |

Since all errors are linear in $x$, for any $x$ between $5/24$ and $7/24$ both the INL and the DNL lie within ±0.5 LSB, with equality only at the two ends of the tolerance range.

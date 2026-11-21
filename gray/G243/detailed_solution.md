# Detailed solution - G243

Use the ideal negative-feedback relation $A=a/(1+af)$, then differentiate it to see how a change in $a$ is suppressed by the loop gain; confirm with an exact recomputation.

### Step 1 — Closed-loop gain

The loop gain is

$$
T=af=(10^5)(10^{-3})=100 .
$$

The input to the forward amplifier is the input minus the fed-back signal, $x_\epsilon=x_i-fx_o$, and $x_o=ax_\epsilon$; eliminating $x_\epsilon$ gives

$$
A=\frac{x_o}{x_i}=\frac{a}{1+af}=\frac{100{,}000}{101}=990.1 .
$$

This is within 1% of the ideal value $1/f=1000$, because $T\gg1$.

### Step 2 — Sensitivity to a change in $a$

Differentiating $A=a/(1+af)$:

$$
\frac{dA}{da}=\frac{1}{(1+af)^2}\;\Rightarrow\;\frac{dA}{A}=\frac{1}{1+T}\,\frac{da}{a}.
$$

A 10% change in $a$ therefore changes $A$ by

$$
\frac{dA}{A}=\frac{10\%}{101}\approx0.099\%\approx0.1\% .
$$

### Step 3 — Exact check

Because 10% is not infinitesimal, recompute $A$ directly:

| $a$ | $T=af$ | $A=a/(1+T)$ | Change in $A$ |
|---|---|---|---|
| 110,000 | 110 | 990.99 | +0.090% |
| 90,000 | 90 | 989.01 | −0.110% |

Either way the closed-loop gain changes by about 0.1%, a hundredfold reduction of the 10% variation in $a$.

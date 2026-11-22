# Detailed solution - G244

Use the ideal negative-feedback relation $A=a/(1+af)$, then its sensitivity to $a$; confirm with an exact recomputation. Compared with $f=10^{-3}$, the larger feedback factor gives a much larger loop gain.

### Step 1 — Closed-loop gain

The loop gain is

$$
T=af=(10^5)(0.1)=10^4 .
$$

With $x_o=ax_\epsilon$ and $x_\epsilon=x_i-fx_o$, eliminating $x_\epsilon$ gives

$$
A=\frac{a}{1+af}=\frac{100{,}000}{10{,}001}=9.9990,
$$

essentially the ideal value $1/f=10$, from which it differs by $1/(1+T)\approx0.01\%$.

### Step 2 — Sensitivity to a change in $a$

Differentiating $A=a/(1+af)$ gives $dA/da=1/(1+af)^2$, so

$$
\frac{dA}{A}=\frac{1}{1+T}\,\frac{da}{a}=\frac{10\%}{10{,}001}\approx0.001\%\ (10\ \mathrm{ppm}).
$$

### Step 3 — Exact check

| $a$ | $T=af$ | $A=a/(1+T)$ | Change in $A$ |
|---|---|---|---|
| 110,000 | 11,000 | 9.99909 | +0.00091% |
| 90,000 | 9,000 | 9.99889 | −0.0011% |

A 10% change in the forward gain moves the closed-loop gain by only about 0.001%: the loop gain of $10^4$ suppresses the variation ten-thousandfold, at the price of a closed-loop gain of only 10.

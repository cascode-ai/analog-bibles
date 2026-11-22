# Detailed solution - A378

At the trip point both transistors are saturated and carry the same current: the current of M6, set by its source–gate voltage $V_{DD}-v_{in}$, equals the fixed current of M7, set by $V_{BIAS}$. Solve that equality for $v_{in}$, evaluate it nominally, and then push each parameter by ±10 % in the direction that raises or lowers the result.

### Step 1 — Trip-voltage expression

With the square law in saturation,

$$
\frac{K'_P}2\Bigl(\frac WL\Bigr)_6\bigl(V_{DD}-v_{in}-|V_{TP}|\bigr)^2=\frac{K'_N}2\Bigl(\frac WL\Bigr)_7\bigl(V_{BIAS}-V_{SS}-V_{TN}\bigr)^2 .
$$

Taking the positive root (M6 conducting),

$$
V_{TRP}=V_{DD}-|V_{TP}|-\sqrt{\frac{K'_N(W/L)_7}{K'_P(W/L)_6}}\,\bigl(V_{BIAS}-V_{SS}-V_{TN}\bigr).
$$

### Step 2 — Nominal value

$$
V_{TRP}=4-0.7-\sqrt{\frac{(110)(100)}{(50)(10)}}\,(1-0-0.7)=3.3-\sqrt{22}\,(0.3)=3.3-1.407=1.89\ \mathrm V .
$$

### Step 3 — Worst cases

$V_{TRP}$ rises with $V_{DD}$ and $K'_P$, and falls with $|V_{TP}|$, $K'_N$ and $V_{BIAS}-V_{TN}$. Choosing each parameter at the end of its ±10 % range that pushes $V_{TRP}$ the same way:

| Parameter | For $V_{TRP}(\max)$ | For $V_{TRP}(\min)$ |
|---|---|---|
| $V_{DD}$ | 4.4 V | 3.6 V |
| $\lvert V_{TP}\rvert$ | 0.63 V | 0.77 V |
| $K'_N$ | 99 µA/V² | 121 µA/V² |
| $K'_P$ | 55 µA/V² | 45 µA/V² |
| $V_{BIAS}$ | 0.9 V | 1.1 V |
| $V_{TN}$ | 0.77 V | 0.63 V |

$$
V_{TRP}(\max)=4.4-0.63-\sqrt{\frac{(99)(100)}{(55)(10)}}\,(0.9-0.77)=3.77-\sqrt{18}\,(0.13)=3.22\ \mathrm V,
$$
$$
V_{TRP}(\min)=3.6-0.77-\sqrt{\frac{(121)(100)}{(45)(10)}}\,(1.1-0.63)=2.83-\sqrt{26.9}\,(0.47)=0.39\ \mathrm V .
$$

The trip point can therefore lie anywhere between about 0.39 V and 3.22 V. It is very sensitive to $V_{BIAS}-V_{TN}$, which is only 0.3 V nominally and is multiplied by $\sqrt{22}\approx4.7$; ±10 % on both $V_{BIAS}$ and $V_{TN}$ changes this small difference from 0.13 V to 0.47 V.

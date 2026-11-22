# Detailed solution - G049

The cost of a good finished part is the wafer cost shared among the dice that pass all three yields, plus the packaging and test cost scaled up by the final-test loss. The die size fixes the gross dice per wafer and, for each process, the wafer-sort yield read from the curves.

### Step 1 — Cost model

With wafer cost $C_w$, gross dice per wafer $N$, packaging and test cost per packaged die $C_p$, and wafer-sort, die-fab and final-test yields $Y_{ws}$, $Y_{df}$, $Y_{ft}$:

$$
C=\frac{C_w}{NY_{ws}Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}} .
$$

Here $Y_{df}Y_{ft}=(0.8)(0.8)=0.64$ and $C_p/Y_{ft}=\mathrm{USD}\ 0.40/0.8=\mathrm{USD}\ 0.50$.

### Step 2 — Die area and dice per wafer

The die is $150\times150=22{,}500$ mil². The 4-inch line of [Fig. 2] follows $N\approx1.2\times10^7\ \mathrm{mil^2}/A$, so $N\approx1.2\times10^7/22{,}500\approx530$. The wafer cost per die that survives die fab and final test is

$$
\frac{C_w}{NY_{df}Y_{ft}}=\frac{\mathrm{USD}\ 130}{(530)(0.64)}=\mathrm{USD}\ 0.383,\qquad C=\frac{\mathrm{USD}\ 0.383}{Y_{ws}}+\mathrm{USD}\ 0.50 .
$$

### Step 3 — Cost for each process

The wafer-sort yields at 22,500 mil² are read from [Fig. 1]. For process A, $Y_{ws}\approx51\%$:

$$
C_A=\frac{\mathrm{USD}\ 0.383}{0.51}+\mathrm{USD}\ 0.50=\mathrm{USD}\ 0.75+0.50=\mathrm{USD}\ 1.25 .
$$

| Process | $Y_{ws}$ | Wafer share (USD) | Cost per good unit (USD) |
|---|---|---|---|
| A | 51% | 0.75 | 1.25 |
| B | 32% | 1.20 | 1.70 |
| C | 15% | 2.56 | 3.1 |

With the low-yield process C, the wafer share dominates and the cost is about 2.5 times that of process A; with process A, the fixed packaging and test cost is already 40% of the total.

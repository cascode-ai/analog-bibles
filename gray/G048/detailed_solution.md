# Detailed solution - G048

Compute the cost of one good, packaged and tested part for each option. Wafer cost is shared among the dice that survive all three yields; packaging and test are paid for every die that enters a package, but only the fraction passing final test is sold. Two small chips have higher wafer-sort yield but double the packaging cost, so the answer depends on how steeply the yield falls with area.

### Step 1 — Cost model

Let $C_w$ be the wafer cost, $N$ the gross dice per wafer, $C_p$ the packaging and test cost per packaged die, and $Y_{ws}$, $Y_{df}$, $Y_{ft}$ the wafer-sort, die-fab and final-test yields. Per good finished unit,

$$
C=\frac{C_w}{NY_{ws}Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}} .
$$

Here $Y_{df}Y_{ft}=(0.9)(0.8)=0.72$ and $C_p/Y_{ft}=\mathrm{USD}\ 0.60/0.8=\mathrm{USD}\ 0.75$.

### Step 2 — Dice per wafer and wafer-sort yields

The 4-inch line in [Fig. 2] follows $N\approx1.2\times10^7\ \mathrm{mil^2}/A$: about 300 dice of 40,000 mil² and 600 dice of 20,000 mil². The wafer-sort yields read from [Fig. 1]:

| Process | $Y_{ws}$ at 40,000 mil² | $Y_{ws}$ at 20,000 mil² |
|---|---|---|
| A | 34% | 53% |
| B | 14% | 36% |
| C | 4.7% | 17.5% |

### Step 3 — Process B

One chip:

$$
C_1=\frac{\mathrm{USD}\ 100}{(300)(0.14)(0.72)}+\mathrm{USD}\ 0.75=\mathrm{USD}\ 3.31+0.75=\mathrm{USD}\ 4.06 .
$$

Two chips, each $\mathrm{USD}\ 100/[(600)(0.36)(0.72)]+0.75=\mathrm{USD}\ 1.39$, so $\mathrm{USD}\ 2.79$ for the pair. Two chips are cheaper.

### Step 4 — Processes A and C

| Process | One 40,000-mil² chip (USD) | Pair of 20,000-mil² chips (USD) | Choice |
|---|---|---|---|
| A | $1.36+0.75=2.11$ | $2(0.44+0.75)=2.37$ | one chip |
| B | $3.31+0.75=4.06$ | $2(0.64+0.75)=2.79$ | two chips |
| C | $9.85+0.75=10.6$ | $2(1.32+0.75)=4.15$ | two chips |

With the high-yield process A, the yield gain from smaller dice is modest, and the doubled packaging cost makes the single chip about 10% cheaper. With processes B and C the yield falls steeply with area, so splitting the system pays off, by about a third for B and by a factor of 2.5 for C.

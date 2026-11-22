# Detailed solution - G051

Express each factor of the cost per good finished unit as a function of die area: the gross dice per wafer from the straight lines of [Fig. 1], and the wafer-sort yield from the exponential model. Dividing the unit cost by the die area gives the cost of silicon per unit area, which has a die-cost term growing with area and a packaging term falling with area.

### Step 1 — Gross dice per wafer

The gross-die curves in [Fig. 1] are straight lines of slope −1 on log–log axes, so $N$ is inversely proportional to die area:

$$
N=\frac KA ,
$$

where $K$ is the usable wafer area. Reading the 4-inch line, 12,000 dice at $10^3$ mil² gives $K\approx1.2\times10^7$ mil²; similarly $K\approx4.7\times10^7$ mil² (8-inch) and $\approx1.1\times10^8$ mil² (12-inch).

### Step 2 — Cost per good finished unit

The wafer cost is shared among the dice that pass wafer sort, die fab and final test, while packaging and test are paid for every packaged die:

$$
C=\frac{C_w}{NY_{ws}Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}},\qquad Y_{ws}=e^{-A/A_0}.
$$

Substituting $N=K/A$ and dividing by $A$:

$$
\frac CA=\frac{C_w\,e^{A/A_0}}{K\,Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}\,A}.
$$

### Step 3 — The three processes

With $A$ in mil², $K$ in mil² and the result in cost per mil²:

$$
\begin{aligned}
\text{A:}\quad \frac CA&=\frac{C_w\,e^{A/37{,}000}}{K\,Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}A},\\
\text{B:}\quad \frac CA&=\frac{C_w\,e^{A/20{,}000}}{K\,Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}A},\\
\text{C:}\quad \frac CA&=\frac{C_w\,e^{A/12{,}000}}{K\,Y_{df}Y_{ft}}+\frac{C_p}{Y_{ft}A},
\end{aligned}
$$

with $K=1.2\times10^7$ mil² for a 4-inch wafer.

### Step 4 — Interpretation

The first term (die-cost limited) rises exponentially with area; the second (package limited) falls as $1/A$. Setting $d(C/A)/dA=0$ gives the die size of minimum cost per unit area:

$$
\frac{C_w\,e^{A/A_0}}{KY_{df}Y_{ft}A_0}=\frac{C_p}{Y_{ft}A^2}\quad\Rightarrow\quad A^2e^{A/A_0}=\frac{C_pKY_{df}A_0}{C_w} .
$$

The optimum is at a larger die for a higher-yield process (larger $A_0$) or a higher packaging cost. For example, with $C_w=\mathrm{USD}\ 100$, $C_p=\mathrm{USD}\ 1$, $Y_{df}=0.9$, $Y_{ft}=0.8$ and a 4-inch wafer, the minima are near 38,000, 25,000 and 17,000 mil² for processes A, B and C.

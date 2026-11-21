# Detailed solution - G009

The model multiplies the Early factor $1+V_{CE}/V_A$ by the avalanche factor $M\alpha_F/(1-M\alpha_F)$. First check how large the multiplication is at the top of the 0–10 V range; if it is negligible, the curves are the straight Early-effect lines $I_C=\beta_FI_B(1+V_{CE}/V_A)$.

### Step 1 — Size of the avalanche term

With $V_{CB}\approx V_{CE}$ and $n=4$, the multiplication at the largest voltage, 10 V, is

$$
M-1=\frac{(V_{CE}/BV_{CBO})^4}{1-(V_{CE}/BV_{CBO})^4}=\frac{(10/120)^4}{1-(10/120)^4}=4.8\times10^{-5}.
$$

Its effect on the gain factor is amplified by about $\beta_F$, because $1-M\alpha_F$ is a small difference: $M\alpha_F/(1-M\alpha_F)=100.49$ at 10 V instead of $\beta_F=100$, a 0.5% increase (and 0.003% at 5 V). Breakdown, $M\alpha_F=1$, occurs only near $BV_{CBO}/\beta_F^{1/4}=37.9$ V, far outside this range. Avalanche multiplication is therefore negligible here.

### Step 2 — Early-effect lines

Dropping the avalanche term,

$$
I_C=\beta_FI_B\left(1+\frac{V_{CE}}{V_A}\right),\qquad
\frac{dI_C}{dV_{CE}}=\frac{\beta_FI_B}{V_A},\qquad r_o=\frac{V_A}{\beta_FI_B}.
$$

Each line starts at $100I_B$ and rises by $V_{CE}/V_A=10\ \mathrm V/50\ \mathrm V=20\%$ by 10 V. Setting $I_C=0$ gives $V_{CE}=-V_A=-50$ V for every line, so all extrapolate to the same intercept. For $I_B=10\ \mu$A:

$$
I_C(0)=100(10\ \mu\mathrm A)=1.00\ \mathrm{mA},\quad
\frac{dI_C}{dV_{CE}}=\frac{1.00\ \mathrm{mA}}{50\ \mathrm V}=20\ \mu\mathrm{A/V},\quad
r_o=50\ \mathrm{k\Omega},\quad I_C(10\ \mathrm V)=1.20\ \mathrm{mA}.
$$

| $I_B$ (µA) | $I_C$ at 0 V (mA) | $I_C$ at 10 V (mA) | Slope (µA/V) | $r_o$ (kΩ) |
|---|---|---|---|---|
| 1 | 0.100 | 0.120 (0.121) | 2 | 500 |
| 10 | 1.00 | 1.20 (1.21) | 20 | 50 |
| 30 | 3.00 | 3.60 (3.62) | 60 | 16.7 |
| 60 | 6.00 | 7.20 (7.24) | 120 | 8.3 |

The values in parentheses include the 0.5% avalanche term from Step 1.

### Step 3 — The characteristics

![IC–VCE straight lines for IB = 1, 10, 30 and 60 µA, each rising 20% from 0 to 10 V](/q/G009/solution-curves.svg)

The plot uses the full given expression; it is indistinguishable from the straight lines. The slope is proportional to the current, so higher-current curves are steeper while all share the −50 V intercept. The model does not cover saturation near $V_{CE}\approx0$.

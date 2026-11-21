# Detailed solution - G008

The given model is the product of two factors that act in different voltage ranges: the Early factor $1+V_{CE}/V_A$, which raises $I_C$ linearly, and the avalanche factor $M\alpha_F/(1-M\alpha_F)$, which stays near $\beta_F$ at low voltage and diverges when $M\alpha_F=1$. Find that divergence voltage first, then evaluate the effective gain $I_C/I_B$ at a few voltages; since $I_C$ is proportional to $I_B$, one table of gains generates all four curves.

### Step 1 — Gain factor and breakdown voltage

With $V_{CB}\approx V_{CE}$, define the effective current gain

$$
\beta_{eff}(V_{CE})=\frac{I_C}{I_B}=\left(1+\frac{V_{CE}}{V_A}\right)\frac{M\alpha_F}{1-M\alpha_F},\qquad
M=\frac1{1-(V_{CE}/BV_{CBO})^4},\qquad \alpha_F=\frac{100}{101}=0.990 .
$$

At $V_{CE}=0$, $M=1$ and $\beta_{eff}=\alpha_F/(1-\alpha_F)=\beta_F=100$. The gain becomes infinite when $M\alpha_F=1$, that is when $1-(V_{CE}/BV_{CBO})^4=\alpha_F$:

$$
BV_{CEO}=BV_{CBO}(1-\alpha_F)^{1/4}\approx\frac{BV_{CBO}}{\beta_F^{1/4}}=\frac{120\ \mathrm V}{3.162}=37.9\ \mathrm V
$$

(the exact $(1/101)^{1/4}$ gives 37.85 V). Above this voltage $M\alpha_F>1$ and the formula gives a negative current: no forward-active operating point exists, so the curves end at $BV_{CEO}$ and nothing is drawn between about 38 V and 50 V. The breakdown voltage is the same for every $I_B$.

### Step 2 — Effective gain versus $V_{CE}$

A representative point, $V_{CE}=30$ V:

$$
M=\frac1{1-(30/120)^4}=\frac1{1-0.003906}=1.00392,\qquad
M\alpha_F=0.99398,
$$
$$
\beta_{eff}=\left(1+\frac{30\ \mathrm V}{50\ \mathrm V}\right)\frac{0.99398}{1-0.99398}=(1.6)(165.1)=264 .
$$

Note how sensitive the second factor is: a multiplication of only 0.4% raises it from 100 to 165, because $1-M\alpha_F$ is a small difference. The same calculation at the other voltages gives:

| $V_{CE}$ (V) | 0 | 10 | 20 | 30 | 35 | 37 |
|---|---|---|---|---|---|---|
| $\beta_{eff}=I_C/I_B$ | 100 | 121 | 152 | 264 | 632 | 1997 |
| $I_C$ at $I_B=1\ \mu$A (mA) | 0.100 | 0.121 | 0.152 | 0.264 | 0.632 | 2.00 |
| $I_C$ at $I_B=10\ \mu$A (mA) | 1.00 | 1.21 | 1.52 | 2.64 | 6.32 | off scale |
| $I_C$ at $I_B=30\ \mu$A (mA) | 3.00 | 3.62 | 4.56 | 7.93 | off scale | off scale |
| $I_C$ at $I_B=60\ \mu$A (mA) | 6.00 | 7.24 | 9.11 | off scale | off scale | off scale |

Up to about 20 V the rise is mostly the Early effect, a straight line of slope $\beta_FI_B/V_A$: 2, 20, 60 and 120 µA/V for the four base currents. Above about 20 V the multiplication term takes over.

### Step 3 — Where each curve leaves the 10 mA window

Solving $\beta_{eff}(V_{CE})\,I_B=10$ mA numerically (bisection on the expression of Step 1):

| $I_B$ (µA) | 60 | 30 | 10 | 1 |
|---|---|---|---|---|
| $V_{CE}$ at $I_C=10$ mA (V) | 22.7 | 32.0 | 36.1 | 37.7 |

Larger base currents reach the top of the plot sooner, but all four curves approach the same vertical asymptote at $BV_{CEO}$.

### Step 4 — The characteristics

![IC–VCE curves for IB = 1, 10, 30 and 60 µA, rising gently with the Early slope and turning vertical at BVCEO ≈ 37.9 V](/q/G008/solution-curves.svg)

Each curve starts at $100I_B$, rises slowly and nearly linearly (Early effect), then turns sharply upward and becomes vertical at $BV_{CEO}\approx37.9$ V. The model does not describe saturation: real curves drop to zero for $V_{CE}$ below a few hundred millivolts. Taking $V_{CB}=V_{CE}-0.7$ V instead of $V_{CB}\approx V_{CE}$ would move the asymptote to about 38.6 V.

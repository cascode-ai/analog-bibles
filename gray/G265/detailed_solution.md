# Detailed solution - G265

$R_{L1}$ lies inside the forward path (the collector load of $Q_1$) and not in the feedback network. A change in it therefore changes the open-loop gain $a$ and the loop gain $T$, while $f$ and the loaded input resistance stay the same. The closed-loop gain is desensitized by $1+T$; the input impedance, which is $z_{ia}/(1+T)$, is not.

### Step 1 — Change in the forward gain

In the two-port analysis of this amplifier, $a=-R_i\,g_{m1}\,R_{c1}\,\beta/R_{in2}$, with $R_i=476\ \Omega$, $R_{in2}=23.5\ \mathrm{k\Omega}$, and the collector load of $Q_1$

$$
R_{c1}=R_{L1}\parallel r_{o1}\parallel R_{in2}.
$$

Only $R_{c1}$ depends on $R_{L1}$. With $r_{o1}=100\ \mathrm{k\Omega}$:

| $R_{L1}$ | $R_{c1}$ | $a$ | $T=af$ |
|---|---|---|---|
| 4 kΩ | 3305 Ω | −515 | 47.1 |
| 4.4 kΩ | 3573 Ω | −557 | 50.9 |

So $\Delta a/a=+8.1\%$: less than 10%, because $r_{o1}$ and $R_{in2}$ are in parallel with $R_{L1}$.

### Step 2 — Change in the current gain

Differentiating $A=a/(1+af)$ gives

$$
\frac{\Delta A}{A}\approx\frac{1}{1+T}\,\frac{\Delta a}{a}=\frac{8.1\%}{48.1}=0.17\%.
$$

Evaluating $A=a/(1+T)$ at both points, $-10.718\to-10.734$, an increase in magnitude of 0.16% (the finite step makes it slightly smaller than the first-order estimate). The current gain is essentially unchanged.

### Step 3 — Change in the input impedance

$Z_{in}=R_i/(1+T)$, and $R_i=R_S\parallel(R_E+R_F)\parallel r_{\pi1}$ does not contain $R_{L1}$, so

$$
\frac{Z_{in,\text{new}}}{Z_{in}}=\frac{1+47.1}{1+50.9}=0.926,\qquad Z_{in}:\ 9.9\ \Omega\to9.2\ \Omega\ (-7.4\%).
$$

The input impedance follows the loop gain almost one-for-one: feedback stabilizes the gain, not the port impedances, which change by nearly the full fractional change of $a$.

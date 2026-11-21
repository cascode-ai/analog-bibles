# Detailed solution - A529

In the idealized interpolation picture each comparator's transition point moves in proportion to the division ratio of the node it is connected to. So find, for each resistor set, the worst-case error of the division ratio it controls, convert it to LSBs, and require at most $\pm0.5$ LSB, with 1 LSB $=V_{REF}/8$.

### Step 1 — Reference divider

The two resistors between $V_{REF}$ and ground set the reference of $A_1$ at $V_{REF}/2$. With tolerance $\pm\delta$, the worst case is one resistor at $R(1+\delta)$ and the other at $R(1-\delta)$:

$$
V_{tap}=V_{REF}\,\frac{R(1\pm\delta)}{R(1+\delta)+R(1-\delta)}=\frac{V_{REF}}{2}(1\pm\delta),
\qquad \Delta V_{tap}=\pm\delta\,\frac{V_{REF}}2 .
$$

This tap is the input at which $A_1$'s output crosses its midpoint, so the transition of comparator 4 (and the transitions tied to $V_1$) shift by the same amount:

$$
\Delta V_{tap}=\delta\,\frac{V_{REF}}{2}=\delta\,\frac{V_{REF}/2}{V_{REF}/8}\ \text{LSB}=4\delta\ \text{LSB}.
$$

Requiring $4\delta\le0.5$:

$$
\frac{\Delta R}{R}\le\frac18=\pm12.5\% .
$$

This is the resistor-string result, worst-case INL $=2^{N-1}\,\Delta R/R$ in LSBs of the string, with $N=1$ for the single tap, expressed here in 3-bit LSBs.

### Step 2 — Interpolating resistors: what fixes the taps

$V_1$ is driven by $A_1$ and $V_2$ by $A_2$, both treated as ideal voltage sources, and the bottom of the string is ground. The eight resistors therefore form two independent groups of four: $V_2$–$V_{2a}$–$V_{2b}$–$V_{2c}$–$V_1$ and $V_1$–$V_{1a}$–$V_{1b}$–$V_{1c}$–ground. Within a group the four transitions span 4 LSB, so a change $\Delta\alpha$ in a tap's division ratio $\alpha$ moves its transition by

$$
\Delta t=4\,\Delta\alpha\ \text{LSB}.
$$

### Step 3 — Worst-case tap in a group of four

For the middle tap ($V_{2b}$ or $V_{1b}$), with group resistors $R_a$ to $R_d$ from the top:

$$
\alpha=\frac{R_c+R_d}{R_a+R_b+R_c+R_d}.
$$

The worst case puts the two resistors on one side at $R(1+\delta)$ and the two on the other side at $R(1-\delta)$:

$$
\alpha=\frac{2R(1+\delta)}{4R}=\frac{1+\delta}2,\qquad
\Delta\alpha=\frac\delta2,\qquad \Delta t=2\delta\ \text{LSB}.
$$

For a quarter tap, the worst case (one resistor at $R(1+\delta)$, three at $R(1-\delta)$) gives $\alpha=(1+\delta)/(4-2\delta)\approx\tfrac14+\tfrac38\delta$, so $\Delta t\approx1.5\delta$ LSB, smaller. The middle tap is critical:

$$
2\delta\le0.5\;\Longrightarrow\;\frac{\Delta R}{R}\le\frac14=\pm25\% .
$$

This is the same formula for a 2-bit string, $2^{2-1}\,\Delta R/R$ LSB.

### Step 4 — Summary

| Resistors | Worst-case shift | Tolerance |
|---|---|---|
| Reference divider (two $R$) | $4\delta$ LSB | $\pm12.5\%$ |
| Interpolating string (eight $R$) | $2\delta$ LSB (middle tap of a group) | $\pm25\%$ |

Treating the eight interpolating resistors as one undriven 3-bit string, ignoring that $A_1$ fixes $V_1$, would give $4\delta\le0.5$, i.e. $\pm12.5\%$; that bound is conservative.

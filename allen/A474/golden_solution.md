# Golden Solution - A474

## Reference answer

With $\varepsilon = \Delta C_x/C_x$, $A = \sum_{i=1}^{3} b_{i-1}2^{3-i}$ and $B = \sum_{i=4}^{6} b_{i-1}2^{6-i}$:
$v_{OUT} = V_{REF}\,\frac{(8 + \varepsilon)A + (1 + \varepsilon)B}{64 + 15\varepsilon} = \frac{V_{REF}}{8}\left(1 - \frac{7\varepsilon}{64 + 15\varepsilon}\right)\left[A + \left(1 + \frac{7\varepsilon}{8 + \varepsilon}\right)\frac{B}{8}\right]$,
which to first order in $\varepsilon$ is $v_{OUT} \approx \frac{V_{REF}}{8}\left(1 - \frac{7\Delta C_x}{64C_x}\right)\left[\sum_{i=1}^{3} b_{i-1}2^{3-i} + \left(1 + \frac{7\Delta C_x}{8C_x}\right)\sum_{i=4}^{6}\frac{b_{i-1}2^{6-i}}{8}\right]$.

Derivation:
- Charge balance (initially discharged), MSB node $v_{OUT}$, LSB node $v_L$, $C_x' = C_x + \Delta C_x$:
  $7C v_{OUT} + C_x'(v_{OUT} - v_L) = C V_{REF} A$ and $8C v_L + C_x'(v_L - v_{OUT}) = C V_{REF} B$.
- Solving: $v_{OUT} = V_{REF}\frac{A(8C + C_x') + C_x' B}{56C + 15C_x'}$. With $C = 7C_x/8$ and $C_x' = C_x(1 + \varepsilon)$ this gives the expression above; $\varepsilon = 0$ returns $V_{REF}(A/8 + B/64)$.
- An error in $C_x$ therefore changes both the overall gain (factor $1 - 7\varepsilon/64$) and the relative weight of the LSB section (factor $1 + 7\varepsilon/8$).

## Grading notes

+2: an expression equivalent to the exact form (or its correct first-order form with coefficients $-7/64$ on the overall gain and $+7/8$ on the LSB section, i.e. $-7\varepsilon/64\cdot A/8$ and $+49\varepsilon/64\cdot B/64$ net) and reducing to the ideal output at $\Delta C_x = 0$. A form in terms of $C$ and $C_x + \Delta C_x$ is also acceptable if correct. +1: correct structure with one coefficient slip. 0: correct charge equations set up but not solved, or only the ideal case. −2 (asserted as fact): an expression in which $\Delta C_x$ affects only the LSB bits, or one not reducing to the ideal output at $\Delta C_x = 0$. Wording the ideal-case check as "at the nominal value $C_x = 8C/7$" without writing $\Delta C_x = 0$ is not an error when the expression does reduce correctly.

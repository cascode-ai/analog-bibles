# Golden Solution - G016

## Reference answer

$r_o \approx 182$ kΩ ($V_A \approx 91$ V).

- For a uniform base, $\partial I_C/\partial V_{CE} = -\dfrac{I_C}{W_B}\dfrac{dW_B}{dV_{CE}}$, so the Early voltage is $V_A = W_B\big/\left|dW_B/dV_{CE}\right| = 10/0.11 = 90.9$ V.
- $r_o = V_A/|I_C| = 90.9\ \mathrm{V}/0.5\ \mathrm{mA} = 182$ kΩ.

## Grading notes

+2: $V_A$ ≈ 91 V and $r_o$ in 175–190 kΩ. +1: right method with a small slip. 0: $V_A$ right but $r_o$ wrong by a slip in the current. -2 (asserted as fact): $V_A = dW_B/dV_{CE}$-based formula inverted (e.g. 0.011 V or 0.11 V), or $r_o$ off by orders of magnitude.

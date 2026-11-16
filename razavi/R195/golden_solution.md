# Golden Solution - R195

## Reference answer

The cross-coupled PMOS pair is a positive-feedback (negative-resistance) load, so the circuit behaves as a latch, not a linear amplifier: $V_{out}$ is bistable, sitting near $+V_{DD}$ or $-V_{DD}$ and switching abruptly, with hysteresis.
- Small-signal view at balance: the differential load conductance is $1/r_{O1} + 1/r_{O3} - g_{m3} < 0$ for any practical sizing, so the symmetric point is unstable (loop gain $[g_{m3}(r_{O1}\|r_{O3})]^2 > 1$).
- Start (low $V_{in1}$): $M_1$ is off; $M_3$, whose gate is at the low right node, pulls the left output to $V_{DD}$ and keeps $M_4$ off; with nothing supplying it, the right node is pulled down by $M_2$ toward $V_P$ and the current collapses. $V_{out} \approx +V_{DD}$ (minus the small right-node voltage).
- As $V_{in1}$ rises past $V_{THN}$, $M_1$ conducts and draws current through $M_3$; the left node droops and the right node follows $V_P$ upward, but the positive feedback holds the state past $V_{in1} = V_{in2}$.
- When $M_1$ overpowers $M_3$ (whose gate drive shrinks as the right node rises) and the left node drops below $V_{DD} - |V_{THP}|$, $M_4$ turns on, raising the right node and weakening $M_3$ further: the state flips regeneratively to left low / right ≈ $V_{DD}$, $V_{out} \approx -V_{DD}$.
- Sweeping back, the flip occurs at a mirror-image point: hysteresis. The thresholds depend on $\beta_p/\beta_n$ and $I_{SS}$ (with strong loads the flip may only happen after the conducting input device turns off). There is no region of finite, well-defined gain.

## Grading notes

+2: latch behaviour recognized: two saturated output states near the rails, with $V_{out} \approx +V_{DD}$ at low $V_{in1}$ ($M_1$ off, $M_3$ pulls the left node to $V_{DD}$, $M_4$ off, the current collapses) and ≈ $-V_{DD}$ at high $V_{in1}$; abrupt regenerative switching rather than a smooth S-curve; hysteresis (switching point depends on the sweep direction and on sizes, not at $V_{in1} = V_{in2}$). +1: abrupt latch switching recognized but hysteresis not mentioned, or the saturated levels misdescribed, or latch and hysteresis correct but the polarity reversed (e.g., from assuming that the forced tail current must flow through $M_2$ and $M_4$ at $V_{in1} = 0$). 0: identifies the negative-resistance load and possible instability without a definite sketch. -2 (asserted as fact): a smooth S-curve with finite gain (e.g., $g_{m1}/g_{m3}$, treating $M_3$/$M_4$ as diode loads), or a linear amplifier with gain $g_{m1}(r_{O1}\|r_{O3})$. A smooth curve offered only as a conditional alternative ("if the feedback were weak") alongside the latch description is not by itself grounds for −2.

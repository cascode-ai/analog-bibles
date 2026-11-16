# Golden Solution - G008

## Reference answer

Four curves that start at $I_C = \beta_FI_B$ = 0.1, 1, 3 and 6 mA at $V_{CE} \approx 0$, rise slowly (Early effect), then turn sharply upward and all become vertical at the same voltage $BV_{CEO} = BV_{CBO}(1-\alpha_F)^{1/4} \approx 120/100^{1/4} \approx 37.9$ V. No forward-active solution exists beyond that ($M\alpha_F > 1$), so nothing is drawn between ≈ 38 V and 50 V.

$I_C$ (mA) at $V_{CE}$ = 0, 10, 20, 30, 35, 37 V:
- $I_B$ = 1 µA: 0.100, 0.121, 0.152, 0.264, 0.632, 2.0
- $I_B$ = 10 µA: 1.00, 1.21, 1.52, 2.64, 6.32, (20, off scale)
- $I_B$ = 30 µA: 3.00, 3.62, 4.56, 7.93, (19, off scale)
- $I_B$ = 60 µA: 6.00, 7.24, 9.11, (15.9, off scale)

Each curve leaves the top of the plot (10 mA) at $V_{CE}$ ≈ 22.7 V (60 µA), 32.0 V (30 µA), 36.1 V (10 µA) and 37.7 V (1 µA). The effective gain $I_C/I_B$ is 100 at $V_{CE} = 0$, 121 at 10 V, 152 at 20 V, 264 at 30 V, 632 at 35 V. At low $V_{CE}$ the slope is the Early slope ($\beta_FI_B/V_A$, 2 µA/V to 120 µA/V); the multiplication term only matters above ≈ 20 V. (The equation does not describe saturation; real curves fall to zero for $V_{CE}$ below a few hundred mV. Taking $V_{CB} = V_{CE} - 0.7$ V shifts the breakdown to ≈ 38.6 V.)

## Grading notes

+2: curves starting at $100I_B$, a gentle linear (Early) rise at low $V_{CE}$, a sharp upturn with a common vertical asymptote at $BV_{CEO}$ ≈ 37–39 V, and values or crossing points roughly consistent with the reference (±10%). +1: shape and $BV_{CEO}$ right but values only rough or one curve misplaced. 0: Early slope right but breakdown omitted or misplaced (e.g. near 50 V), or $BV_{CEO}$ right with no Early slope. -2 (asserted as fact): breakdown placed at $BV_{CBO} = 120$ V or curves drawn up to 50 V without breakdown, currents not proportional to $I_B$, or $I_C$ decreasing with $V_{CE}$.

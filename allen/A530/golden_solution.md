# Golden Solution - A530

## Reference answer

All eight delays are equal: every comparator input sees a Thevenin resistance of $R$, so each path has the time constant $RC$ (relative delay 1 : 1 : … : 1).

Thevenin resistance seen by each comparator ($V_2$, $V_1$ and ground are ac grounds):
- Comparator 8: $R$ in series from $V_2$, so $R$. Comparator 4: $R$ in series from $V_1$, so $R$.
- Comparators 7 and 5 (taps $V_{2a}$, $V_{2c}$): $R \parallel 3R = 3R/4$, plus $R/4$ in series, so $R$.
- Comparator 6 (tap $V_{2b}$, no series resistor): $2R \parallel 2R = R$.
- Comparators 3 and 1 (taps $V_{1a}$, $V_{1c}$; bottom of the string at ground): $R \parallel 3R + R/4 = R$. Comparator 2 ($V_{1b}$): $2R \parallel 2R = R$.
- Without the added series resistors (the plain interpolating ADC) the values would be 0, $3R/4$, $R$, $3R/4$, 0, $3R/4$, $R$, $3R/4$: the series resistors equalize them.

This is the first-order (single-node) estimate; the comparator capacitances also load each other through the shared string, so a full RC analysis gives somewhat different, but still comparable, delays.

## Grading notes

+2: all delays equal to $RC$ (time constant), shown by computing the Thevenin resistance $R$ at each of the eight comparator inputs (including $R \parallel 3R + R/4 = R$ and $2R \parallel 2R = R$). Mentioning the coupling between nodes is a plus, not required. +1: correct conclusion (all equal, $RC$) with only some of the eight paths worked out. 0: correct method with an arithmetic slip that makes one or two paths differ. −2 (asserted as fact): delays that differ by the tap position (e.g., ignoring the parallel path to the other source/ground), or treating the amplifier outputs as high-impedance nodes.

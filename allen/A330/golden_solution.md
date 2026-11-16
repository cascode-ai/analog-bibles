# Golden Solution - A330

## Reference answer

| Op amp | $V_{ic}(\max)$ | $V_{ic}(\min)$ |
|---|---|---|
| [Fig. 1] | $V_{DD} - V_{ON}$ | $V_{SS} + 2V_{ON} + V_T$ |
| [Fig. 2] | $V_{DD} - V_{ON}$ | $V_{SS} + 2V_{ON} + V_T$ |
| [Fig. 3] | $V_{DD} - V_{ON} + V_T$ | $V_{SS} + 2V_{ON} + V_T$ |
| [Fig. 4] | $V_{DD} - V_{ON} + V_T$ | $V_{SS} + 2V_{ON} + V_T$ |
| [Fig. 5] | $V_{DD} - V_{ON}$ | $V_{SS} + 3V_{ON} + 2V_T$ |

- [Fig. 1], [Fig. 2]: the input-device drains sit at $V_{DD} - V_{SG}$ of the p-channel second-stage devices ($V_{DD} - V_T - V_{ON}$); keeping M1 saturated ($V_D \ge V_G - V_T$) gives $V_{DD} - V_{ON}$. Minimum: tail $V_{DS5}(\mathrm{sat}) + V_{GS1} = V_{ON} + (V_T + V_{ON})$.
- [Fig. 3], [Fig. 4] (folded): the input drains are at the folding nodes, $V_{DD} - V_{SD}(\mathrm{sat}) = V_{DD} - V_{ON}$, so $V_{ic}(\max) = V_{DD} - V_{ON} + V_T$ (can approach or exceed $V_{DD}$); minimum as above. This is the maximum attainable value: in general the folding node sits at $V_{PB2} + V_T + V_{ON}$, giving $V_{ic}(\max) = V_{PB2} + 2V_T + V_{ON}$, which equals the table value for the high-swing bias $V_{PB2} = V_{DD} - V_T - 2V_{ON}$ (folding node at the edge of saturation of M4/M5); a less aggressive $V_{PB2}$ lowers it.
- [Fig. 5]: M1's drain is at $V_{DD} - V_{SG7}$ (diode M7), giving $V_{DD} - V_{ON}$. Minimum: $V_{SS} + V_{GS6} + V_{SD4}(\mathrm{sat}) + V_{GS1} = V_{SS} + (V_T + V_{ON}) + V_{ON} + (V_T + V_{ON})$, the narrowest range of the five.

## Grading notes

+2: all ten limits equivalent to the table (forms such as $V_{DD} - |V_{TP}| - V_{ON} + V_{TN}$ are fine), with [Fig. 3]/[Fig. 4] recognized as extending above $V_{DD} - V_{ON}$ and [Fig. 5] as having the highest $V_{ic}(\min)$. For [Fig. 3]/[Fig. 4] the upper limit may also be given as the bias-dependent $V_{PB2} + 2V_T + V_{ON}$ (or the folding-node voltage plus $V_T$) with the statement that its best value is $V_{DD} - V_{ON} + V_T$; that is equally correct. +1: one or two limits off by one $V_{ON}$ or $V_T$ term. 0: about half the limits right. −2 (asserted as fact): folded-cascode upper limit given as $V_{DD} - V_{SG}$ of a load, [Fig. 5]'s lower limit given like the simple pair ($V_{SS} + 2V_{ON} + V_T$), or limits that do not depend on the input devices at all.

# Golden Solution - A142

## Reference answer

SR = 0.1 V/µs at $I_{SS} = 10\ \mu$A and 0.01 V/µs at $I_{SS} = 1\ \mu$A.

With a large differential input, all of $I_{SS}$ is steered to one side. Either M2 sources the full $I_{SS}$ into the output while M4 sinks nothing, or M4 sinks the full mirrored $I_{SS}$ while M2 is off. In both directions the capacitor current is $I_{SS}$, so $SR = I_{SS}/C = 10\ \mu\mathrm{A}/100\ \mathrm{pF} = 0.1$ V/µs (and 0.01 V/µs at 1 µA).

## Grading notes

+2: 0.1 V/µs and 0.01 V/µs (same in both directions) with the current-steering argument. +1: right values without explanation, or one value with a units slip. 0: right method, one case wrong. −2 (asserted as fact): $SR = I_{SS}/(2C)$ (0.05 V/µs), a slew rate depending on W/L or on the gain, or values off by 10⁶ from unit errors stated as final.

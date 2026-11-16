# Golden Solution - A141

## Reference answer

$I_{SS} = 10\ \mu$A: $g_{md} = 22.4\ \mu\mathrm{S}\cdot\sqrt{W_1/L_1}$ and $A_v = 49.7\sqrt{W_1/L_1}$ (22.4 µS and 49.7 V/V for $W_1/L_1 = 1$).
$I_{SS} = 1\ \mu$A: $g_{md} = 7.07\ \mu\mathrm{S}\cdot\sqrt{W_1/L_1}$ and $A_v = 157\sqrt{W_1/L_1}$ (7.07 µS and 157 V/V for $W_1/L_1 = 1$).

- $g_{md} = \sqrt{K'_P I_{SS}(W_1/L_1)}$: $\sqrt{50\ \mu \cdot 10\ \mu} = 22.4\ \mu$S and $\sqrt{50\ \mu \cdot 1\ \mu} = 7.07\ \mu$S (times $\sqrt{W_1/L_1}$).
- $R_{out} = 1/[(\lambda_P + \lambda_N)I_{SS}/2]$: 2.22 MΩ at 10 µA, 22.2 MΩ at 1 µA.
- $A_v = g_{md}R_{out}$: 49.7 and 157. The gain grows as $1/\sqrt{I_{SS}}$; the load W/L does not enter. The gain is positive for $v_{out}/(v_{G1} - v_{G2})$: raising $v_{G1}$ cuts M1's current, so M4 sinks less while M2 sources more.

## Grading notes

+2: both bias cases right (±3 %), either in terms of $\sqrt{W_1/L_1}$ or evaluated at $W_1/L_1 = 1$. A negative sign is acceptable if the answer defines the input the other way round. A typo that the boxed formula and the numbers contradict (e.g. one line writing $A_v = g_m/R_{out}$), or a wrong unit label on an intermediate $R_{out}$ (kΩ for MΩ) whose value the gains use correctly, is trivial and does not lower the score. +1: both cases essentially right with a minor imprecision (e.g. rounding, or the right numbers with an unexplained sign). 0: one case right and the other wrong, whether from a computational slip with the right method or from a wrong formula. −2 (asserted as fact): $g_{ds}$ evaluated at $I_{SS}$ (gains halved), $K'_N$ used for the p-channel input pair, a specific W/L assumed and used without saying so, or the gain claimed to rise with current.

# Golden Solution - R035

## Reference answer

Just before the step $V_X = 3 - 3 = 0$ V. At $t = 0$ the top node falls to 0 and $V_X$ jumps to −3 V. $M_1$ (gate at 3 V) now has its source at X ($V_{GS} = 6$ V, $V_{DS} = 3$ V, triode) and discharges $C_1$, so $V_X$ rises back toward 0 V, roughly exponentially, fast at first ($R_{on}$ is small because $V_{GS}$ is large) and with time constant ≈ $C_1/(2.3\beta)$ near the end. Final $V_X = 0$, $C_1$ fully discharged.
- $M_1$ stays in triode throughout ($V_{DS} = -V_X < V_{GS} - V_{TH} = 2.3 - V_X$).
- Practical caveat: a node at −3 V forward-biases the n+/substrate junction of $M_1$ (bulk at 0 V), which would quickly clamp $V_X$ near −0.6 to −0.7 V; the ideal analysis ignores it.

## Grading notes

+2: $V_X$ = 0 before, jump to −3 V at the step, recovery to 0 V through $M_1$ in triode (exponential-like) with $C_1$ fully discharged. Mentioning the junction clamp is a plus. +1: correct jump and final value without identifying the region or the discharge mechanism. 0: correct jump but a wrong final value through a slip, or right final value with the jump missed. -2 (asserted as fact): $V_X$ staying at −3 V, $V_X$ settling at $V_{DD} - V_{TH}$, or a jump in the wrong direction.

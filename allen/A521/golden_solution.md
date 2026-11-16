# Golden Solution - A521

## Reference answer

$|V_{OS}| < 0.2$ V (0.2$V_{REF}$); an offset of 0.2 V or more causes an error.

- The comparator decides on every value held by the sample-and-hold: $V_0 = 0.3$ V (the input, which sets the first subtraction) and the residues $V_1 \dots V_8$ = −0.4, 0.2, −0.6, −0.2, 0.6, 0.2, −0.6, −0.2 V (the loop computes $V_k = 2V_{k-1} \mp V_{REF}$).
- The offset shifts the decision threshold away from 0 V; the residues depend only on the decisions, so no error occurs until the offset reaches the value closest to the threshold, 0.2 V. With the polarity drawn (the comparator sees $V_{SH} - V_{OS}$), $V_{OS} = +0.2$ V first affects $V_2 = V_6 = 0.2$ V, and $V_{OS} = -0.2$ V affects $V_4 = V_8 = -0.2$ V.

## Grading notes

+2: 0.2 V (±0.01 V), from the held value nearest zero in the residue sequence; either sign. +1: right value with incomplete reasoning. 0: right method with one residue miscomputed. −2 (asserted as fact): 0.1 V from a unipolar model (threshold at $V_{REF}/2$) that misreads the circuit, a tolerance that shrinks by 2 per cycle (offset treated as amplified), or 0.3 V from the input alone.

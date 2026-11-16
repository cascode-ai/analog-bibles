# Golden Solution - A523

## Reference answer

Upper to lower: 1 1 1 0 0 0 0 (the corresponding output word is 100).

- A comparator's output is high when its + input (tap) exceeds its − input ($V^*_{in}$).
- Taps above $0.6V_{REF}$: 0.875, 0.750 and 0.625 $V_{REF}$, giving 1, 1, 1.
- Taps below $0.6V_{REF}$: 0.500, 0.375, 0.250 and 0.125 $V_{REF}$, giving 0, 0, 0, 0.
- $V^*_{in}$ exceeds four taps, so the encoder outputs code 4 = 100.

## Grading notes

+2: 1110000 in upper-to-lower order (with or without the output word 100), with the reasoning that the comparators with taps above $0.6V_{REF}$ output 1. +1: correct pattern with the order reversed but clearly labelled (0000111 listed lower to upper), or correct pattern with a slip in the derived output word. 0: the correct rule stated (output 1 when the tap exceeds $V^*_{in}$) and the taps above and below $0.6V_{REF}$ correctly identified, but the listed pattern inverted by a slip (0001111 upper to lower). −2 (asserted as fact): the polarity read as the conventional one ($V^*_{in}$ on the + input), against the connection the question states, giving 0001111; a wrong number of tripped comparators (e.g., treating 0.625 VREF as below 0.6 VREF); or a pattern that is not a thermometer code.

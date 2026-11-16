# Golden Solution - A522

## Reference answer

An $N$-bit converter has $2^N$ output codes, separated by only $2^N - 1$ decision levels (code transitions). Each comparator implements one decision level, so $2^N - 1$ comparators suffice: their outputs form a thermometer code whose number of active outputs (0 to $2^N - 1$) already distinguishes all $2^N$ codes. The lowest code is "no comparator tripped" and needs no comparator of its own. For $N = 3$: 7 comparators.

Encoder (one valid design). Number the comparators $c_1$ (tap $0.125V_{REF}$, bottom) to $c_7$ (tap $0.875V_{REF}$, top). Here $c_k = 1$ means $V^*_{in} < V_{tap,k}$, so for code $n$ the outputs are $c_1 \dots c_n = 0$ and $c_{n+1} \dots c_7 = 1$ (an inverted thermometer code).
- Stage 1, transition detection (one-hot code): $h_n = \bar c_n\, c_{n+1}$ for $n = 1 \dots 6$ (six 2-input AND gates, each with one inverted input), $h_7 = \bar c_7$ (one inverter). Exactly one $h_n$ is 1, for $n$ = the code ($n = 0$: all $h$ = 0).
- Stage 2, OR-plane (ROM): MSB $= h_4 + h_5 + h_6 + h_7$; middle bit $= h_2 + h_3 + h_6 + h_7$; LSB $= h_1 + h_3 + h_5 + h_7$ (three 4-input OR gates).
- Equivalent minimized form: MSB $= \bar c_4$; middle bit $= \bar c_2 c_4 + \bar c_6$; LSB $= \bar c_1 c_2 + \bar c_3 c_4 + \bar c_5 c_6 + \bar c_7$.
- Check: $V^*_{in} = 0.7V_{REF}$ gives $c_1 \dots c_5 = 0$, $c_6 = c_7 = 1$, so $h_5 = 1$ and the word is 101.

(Bubble-error-tolerant variants, such as 3-input AND gates or a Gray-code ROM, are refinements of the same scheme.)

## Grading notes

+2: the reason (2^N codes have only 2^N − 1 transitions, one comparator per transition, thermometer code) and an encoder that gives the correct word for every input with the stated comparator polarity (1 when $V^*_{in}$ is below the tap). Any correct logic is accepted: one-hot detection plus OR/ROM, minimized sum-of-products, inverters followed by a standard thermometer-to-binary encoder, a ones-counter, etc. The solver's own bit naming is fine. +1: correct reason and correct encoder structure but one output equation wrong, or the encoder described only in words (one-hot + ROM) without the gate-level equations. 0: correct reason, but the encoder ignores the comparator polarity and produces the complement or a wrong code; or a correct encoder with no or a wrong reason. −2 (asserted as fact): claims $2^N$ (or $N$) comparators are needed, or an encoder that is clearly wrong (e.g., output bits taken directly from three comparator outputs).

# Golden Solution - A449

## Reference answer

$C_X = 2^NC$; the output is negative for the positive $V_{REF}$ shown.

- The charge $V_{REF}\sum b_i 2^{N-1-i}C$ delivered to the virtual-ground node is transferred onto $C_X$: $v_{OUT} = -\dfrac{\sum b_i 2^{N-1-i}C}{C_X}V_{REF}$.
- With $C_X = 2^NC$: $v_{OUT} = -(b_0/2 + b_1/4 + \cdots + b_{N-1}/2^N)V_{REF}$. A positive output would need the reference polarity reversed (or the capacitors switched from $V_{REF}$ to ground instead of from ground to $V_{REF}$).

## Grading notes

+2: $C_X = 2^NC$ and a negative output (inverting charge amplifier). +1: $C_X = 2^NC$ with the polarity omitted or stated as positive. 0: correct charge-transfer relation with a slip in $C_X$. −2 (asserted as fact): $C_X = 2^{N-1}C$, $(2^N - 1)C$, $C$, or a value from treating the array as a capacitive divider to ground.

# Golden Solution - G250

## Reference answer

- Gain: with the output shorted, $i_o = a v_\epsilon = a(v_i - f i_o)$, so $i_o/v_i = a/(1+af)$.
- Input impedance: the input current is $i_i = v_\epsilon/z_i$, and from the gain result $v_\epsilon = v_i - f i_o = v_i/(1+af)$, so $i_i = v_i/[z_i(1+T)]$ and $Z_i = z_i(1+T)$: series feedback at the input raises the input impedance.
- Output impedance: set $v_i = 0$ (input shorted) and apply a test voltage $v$ at the output; with $i$ the current pushed into the output, $i_o = -i$, so $v_\epsilon = -f i_o = f i$ and $i = v/z_o - a v_\epsilon = v/z_o - af\,i$. Hence $Z_o = v/i = z_o(1+T)$: series (current) sampling at the output raises the output impedance.

## Grading notes

+2: all three results derived with consistent signs. +1: all correct with a minor sign or bookkeeping slip, or one derivation only sketched. 0: two of three derived. −2 (asserted as fact): factors inverted (e.g. $Z_o = z_o/(1+T)$), or the derivation assumes the result.

# Golden Solution - G249

## Reference answer

All three follow from $i_\epsilon = i_i - f i_o$ and the Norton output.

- Gain: with the output shorted, all of $a i_\epsilon$ flows as $i_o$: $i_o = a i_\epsilon = a(i_i - f i_o)$, so $i_o(1+af) = a i_i$ and $i_o/i_i = a/(1+af)$.
- Input impedance: the input voltage is $v_i = z_i i_\epsilon$ (the feedback network draws no voltage-dependent current). From the gain result, $i_\epsilon = i_i - f i_o = i_i/(1+af)$, so $Z_i = v_i/i_i = z_i/(1+T)$: shunt feedback at the input lowers the input impedance.
- Output impedance: set $i_i = 0$ (open input) and drive the output port with a test voltage $v$; let $i$ be the current pushed into the amplifier output, so the output current delivered by the amplifier is $i_o = -i$. Then $i_\epsilon = -f i_o = f i$ and $i = v/z_o - a i_\epsilon = v/z_o - a f i$, hence $i(1+af) = v/z_o$ and $Z_o = v/i = z_o(1+T)$: series (current) sampling at the output raises the output impedance.

## Grading notes

+2: all three results derived with consistent signs (the error-current equation, the gain, $Z_i$ via $i_\epsilon = i_i/(1+T)$, $Z_o$ with $i_i = 0$ and a test source at the output). +1: all three correct with a sign bookkeeping slip that does not change the result, or one derivation sketched rather than shown. 0: two of the three derived correctly. −2 (asserted as fact): results stated with the factors inverted (e.g. $Z_i = z_i(1+T)$ or $Z_o = z_o/(1+T)$), or a "derivation" that assumes the result.

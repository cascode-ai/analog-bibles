# Golden Solution - G245

## Reference answer

The closed-loop characteristic keeps the same three-segment, odd-symmetric shape, with:
- $|S_i| \le 0.84$ mV: slope $A_1 = a_1/(1+a_1f) = 50{,}000/6 = 8333$ ($S_o$ up to ±7 V);
- $0.84\text{ mV} \le |S_i| \le 2.04$ mV: slope $A_2 = a_2/(1+a_2f) = 20{,}000/3 = 6667$ ($S_o$ from ±7 V to ±15 V);
- $|S_i| \ge 2.04$ mV: $S_o = \pm 15$ V (slope 0; feedback cannot help in hard saturation).

Derivation: in segment 1, $T_1 = a_1 f = 5$; the breakpoint is at $S_o = 7$ V, where $S_\epsilon = 7/50{,}000 = 0.14$ mV and $S_i = S_\epsilon + fS_o = 0.14\text{ mV} + 0.7\text{ mV} = 0.84$ mV $= (S_{o1}/a_1)(1+a_1f)$. In segment 2, $T_2 = a_2f = 2$; saturation is reached at $S_i = 0.84\text{ mV} + 8\text{ V}/6667 = 2.04$ mV (there $S_\epsilon = 0.14 + 0.40 = 0.54$ mV, $fS_o = 1.5$ mV). The slope ratio $A_1/A_2 = 1.25$ compared with $a_1/a_2 = 2.5$ open loop: the feedback halves the relative slope change, but with only $T = 2$–5 the nonlinearity is still clearly visible.

## Grading notes

+2: both slopes (8333 and 6667, ±2%), both breakpoints ($|S_i|$ ≈ 0.84 mV at ±7 V and ≈ 2.04 mV at ±15 V), saturation at ±15 V beyond, odd symmetry. +1: correct slopes and the first breakpoint, with an arithmetic slip in the second breakpoint, or breakpoints right but one slope slightly off. 0: slopes right but breakpoints missing or wrong (e.g., breakpoints left at the open-loop 0.14 mV / 0.54 mV). −2 (asserted as fact): closed-loop slopes taken as exactly $1/f = 10{,}000$ for both segments, feedback claimed to remove the saturation, or slopes not divided by $(1+af)$.

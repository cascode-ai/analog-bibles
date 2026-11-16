# Golden Solution - G286

## Reference answer

$\mathcal{R} \approx 35.1$, the same for both circuits.

- With $I_i = 0$ (open), a test voltage $v_t$ in place of $a_v(\cdot)$ drives $R_o + R_2$ into the inverting node, which sees $R_1\|R_i = 40$ kΩ to ground (the non-inverting input is grounded): $v_- = v_t\cdot40/(1000 + 100 + 40) = 0.03509\,v_t$; $v_x = -v_-$; $\mathcal{R} = a_v\times0.03509 = 35.09$.
- Why the same: the return ratio is computed with all independent sources set to zero. Setting $V_i = 0$ in the noninverting circuit (a voltage source becomes a short, grounding the non-inverting input) and setting $I_i = 0$ in the current-driven circuit (a current source becomes an open) produce the identical passive network around the controlled source. The return ratio is a property of the loop with the sources zeroed, not of where or how the signal is applied.

## Grading notes

+2: $\mathcal R$ ≈ 35 (34–36) and the explanation that zeroing the independent sources (short for $V_i$, open for $I_i$) gives the same circuit. +1: correct value with a vague explanation ("same loop"), or correct explanation with a slip in the value. 0: only one of the two parts right. −2 (asserted as fact): claiming the return ratio depends on the type of feedback/source, or a value equal to one of the two-port loop gains (66 or 26) asserted as the return ratio.

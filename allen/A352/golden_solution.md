# Golden Solution - A352

## Reference answer

$i_{OUT} = \dfrac{bI_5\left[\exp\!\left(\dfrac{v_{IN}}{nV_t}\right) - 1\right]}{(1 + A) - (A - 1)\exp\!\left(\dfrac{v_{IN}}{nV_t}\right)}$; for A = 2, b = 1: $v_{IN}/(nV_t) = \ln(8/3) \approx 0.981$.

- Tail KCL: $i_1 + i_2 = I_5 + A(i_2 - i_1)$.
- With $x = \exp[v_{IN}/(nV_t)]$, $i_2 = x\,i_1$: $i_1(1 + x) = I_5 + A\,i_1(x - 1)$, so $i_1 = I_5/[(1 + A) - (A - 1)x]$.
- $i_{OUT} = b(i_2 - i_1) = b\,i_1(x - 1)$ → the expression above.
- Checks: A = 0 gives $bI_5\tanh[v_{IN}/(2nV_t)]$ (ordinary pair, saturating at $bI_5$); A = 1 gives $(bI_5/2)(x - 1)$, exponential growth.
- A = 2, b = 1: $(x - 1)/(3 - x) = 5$ → $6x = 16$ → $x = 8/3$ → $v_{IN}/(nV_t) = 0.981$.
- For A > 1 the denominator vanishes at $x = (A+1)/(A-1)$ (= 3, i.e. $v_{IN}/nV_t$ = 1.10, for A = 2): the current would grow without bound; in practice it is limited when the transistors leave weak inversion.

## Grading notes

+2: the expression (or an algebraically equivalent form) derived from the tail-current KCL and the exponential ratio, and $v_{IN}/(nV_t)$ = 0.98 (0.97–0.99). +1: correct expression with an arithmetic slip in the final number, or the right number with a sketchy but correct derivation. 0: correct setup ($i_1 + i_2 = I_5 + A(i_2 - i_1)$, $i_2/i_1 = e^{x}$) but the algebra not completed. −2 (asserted as fact): the boost term omitted (tail = $I_5$, which can never reach $5I_5$), the boost sign reversed, a square-law (strong-inversion) relation used for $i_2/i_1$, or 0.908 given as the answer.

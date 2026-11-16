# Golden Solution - A423

## Reference answer

$I_{OUT} = I_0 + \dfrac{I_1}{2} + \dfrac{I_2}{4} + \dfrac{I_3}{8}$.

Label the ladder nodes A ($I_3$, R to ground), B ($I_2$, 2R to ground), C ($I_1$, 2R to ground) and D (output node at 0 V, $I_0$); horizontal resistors R join A–B, B–C and C–D. Superposition:
- $I_0$ enters the grounded node D and all of it flows out as $I_{OUT}$.
- $I_1$ at C sees three paths to ground: 2R (vertical), R (to D) and R + (B to ground = 2R ∥ (R + R) = R) = 2R. The share through R to D is $(1/R)/(1/2R + 1/R + 1/2R) = 1/2$.
- $I_2$ at B sees 2R, R + R = 2R (left) and R + (2R ∥ R) = 5R/3 (right); 3/8 of it goes right and 2/3 of that reaches D: 1/4.
- $I_3$ at A sees R and R + [2R ∥ (5R/3)] = 21R/11; 11/32 goes right, then 6/11 at B and 2/3 at C: (11/32)(6/11)(2/3) = 1/8.
Nodal analysis gives the same result.

## Grading notes

+2: $I_0 + I_1/2 + I_2/4 + I_3/8$. +1: correct weights with a labelling or sign slip that is clearly a slip. 0: correct method with one weight wrong. −2 (asserted as fact): reversed weighting ($I_3$ as the largest), equal weights, or an output that omits $I_0$.

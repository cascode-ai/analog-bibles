# Golden Solution - G243

## Reference answer

$A \approx 990$ (exactly $10^5/101 = 990.1$); a 10% change in $a$ changes $A$ by only about 0.1% (≈ 0.099%).

- Loop gain $T = af = 10^5 \times 10^{-3} = 100$; $A = a/(1+T) = 100{,}000/101 = 990.1$.
- Sensitivity: $\dfrac{dA}{A} = \dfrac{1}{1+T}\dfrac{da}{a} = \dfrac{10\%}{101} \approx 0.099\%$.
- Exact check: $a = 110{,}000$ gives $A = 990.99$ (+0.090%); $a = 90{,}000$ gives $A = 989.01$ (−0.110%).

## Grading notes

+2: $A \approx 990$ and a change of about 0.1% (any of 0.09%, 0.099%, 0.1%, 0.11% with the corresponding direction), with the $1/(1+T)$ desensitization or an exact recomputation. +1: correct $A$ and method with a small arithmetic slip in the percentage. 0: only $A$ correct, or only the percentage. −2 (asserted as fact): $A = 1/f = 1000$ given as the exact gain with a 10% (or 0%) change in $A$, or a percentage change multiplied rather than divided by $(1+T)$.

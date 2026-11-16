# Golden Solution - R532

## Reference answer

Up to a factor of α (at α times the power), provided the fixed load capacitance dominates the output node. In practice the improvement is somewhat less, and it saturates as α grows.

- Scaling up by α multiplies every $g_m$ and every transistor capacitance by α and divides every $r_O$ by α. Gains and headroom are unchanged, and internal-node poles ($R \times C$) do not move.
- The output pole: $\omega_{p2} = g_{m,out}/(C_L + C_p)$ becomes $\alpha g_{m,out}/(C_L + \alpha C_p)$, ≈ $\alpha\omega_{p2}$ if $C_L \gg \alpha C_p$.
- The compensation can follow. The first-stage output resistance falls by α, so with the same $C_C$ the Miller dominant pole and $\omega_T \propto g_{m1}/C_C$ rise by α. Dividing $R_z$ by α keeps its zero on the new output pole. $|\beta H|$ then crosses unity at $\alpha\omega_{p2}$, and the closed-loop bandwidth rises by α.
- Limits: the device capacitance at the output grows with α. The improvement is $\alpha(C_L + C_p)/(C_L + \alpha C_p)$, which approaches $(C_L + C_p)/C_p$ for large α. Once the scaled output pole approaches the internal poles (cascode and first-stage nodes), which do not move with scaling, those poles become the nondominant ones and cap the bandwidth.

## Grading notes

+2: a factor of α as the (ideal, upper-bound) improvement, with the reasoning that the output pole rises by α (output resistance down by α with $C_L$ fixed) and the compensated dominant pole and crossover can rise by the same factor. Mentioning the limits (self-loading by scaled device capacitances, fixed internal poles, α times the power) is a plus, not required. +1: α stated with sound but incomplete reasoning (e.g., only "g_m rises by α"). 0: says "it improves" without a factor, or gives α with wrong reasoning that does not change the result. -2 (asserted as fact): no improvement, α², √α, or a bandwidth decrease.

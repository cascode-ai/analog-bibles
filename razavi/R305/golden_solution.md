# Golden Solution - R305

## Reference answer

With λ = 0 the gain is unbounded (infinite) at both very low and very high frequencies.
- Node X (source of $M_2$, drain of $M_1$) and the output node are connected only through $M_2$ and $C_1$. With λ = 0 the PMOS $M_3$ is an ideal current source, and no capacitance connects either node to ground. Taken together, the two nodes form a supernode whose only small-signal current is $M_1$'s drain current $g_{m1}V_{in}$, so KCL ($g_{m1}V_{in} = 0$) cannot be satisfied by any finite node voltage, at any frequency.
- Low frequencies: $C_1$ open, the usual cascode with an ideal current-source load: $A_v = -g_{m1}R_{out}$ with $R_{out} = \infty$.
- High frequencies: $C_1$ shorts X to the output, bypassing $M_2$; the stage becomes a CS stage with an ideal current-source load: $-g_{m1}(r_{O1}\|r_{O3}) = \infty$ for λ = 0.
- For reference, with finite $r_O$: low frequency $-\dfrac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}} \approx -g_{m1}[(g_{m2}r_{O2}r_{O1})\|r_{O3}]$ (cascode gain); high frequency $-g_{m1}(r_{O1}\|r_{O3})$: $C_1$ removes the cascode's output-resistance boost.

## Grading notes

+2: states that with λ = 0 the gain is infinite (unbounded) at both frequency extremes, with a reason (no resistive or capacitive path from X/output to ground; ideal current-source load). Also giving the finite-$r_O$ results (cascode gain at low frequencies, $-g_{m1}(r_{O1}\|r_{O3})$ at high frequencies) is a plus. +1: works with finite $r_O$ instead of λ = 0, explicitly departing from the given assumption, and gets both finite-$r_O$ results right. 0: one extreme right (e.g., infinite at low frequency) and the other wrong or missing. -2 (asserted as fact): a finite gain under λ = 0 (e.g., $-g_{m1}/g_{m2}$, or a capacitive-divider value), or $C_1$ claimed to have no effect at high frequencies while a finite-$r_O$ analysis is used.

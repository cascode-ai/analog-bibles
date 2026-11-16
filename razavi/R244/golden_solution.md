# Golden Solution - R244

## Reference answer

Identical to the circuit without $R_2$: $V_X = V_Y$ for all $V_{DD}$, so $R_2$ carries no current. Both equal $V_{DD}$ up to 0.7 V and then follow $V_X = V_{TH} + [\sqrt{1+2\beta R_1(V_{DD}-V_{TH})}-1]/(\beta R_1)$, rising ever more slowly.

- The circuit is symmetric: each side is $R_1$ from $V_{DD}$ to a drain, and both transistors have the same $V_{GS} = V_X$. If $V_Y = V_X$, no current flows in $R_2$, $M_1$ has $V_{DS} = V_{GS}$ (saturated) and carries the same current as $M_2$, so both KCL equations reduce to $(V_{DD}-V_X)/R_1 = \tfrac{\beta}{2}(V_X-V_{TH})^2$. The solution is unique, so this is it.
- Below 0.7 V both transistors are off and $V_X = V_Y = V_{DD}$.

## Grading notes

+2: $V_X = V_Y$ for all $V_{DD}$ with zero current in $R_2$, the same curves as a simple resistor-loaded mirror ($V_{DD}$ below 0.7 V, slow diode-like rise above). +1: correct conclusion with the curve shape only loosely described. 0: $V_X$ right but $V_Y$ claimed to differ from $V_X$ by a small unexplained amount. -2 (asserted as fact): a nonzero current through $R_2$ that makes $V_Y$ substantially lower or higher than $V_X$, $M_1$ in triode, or $V_Y$ approaching zero.

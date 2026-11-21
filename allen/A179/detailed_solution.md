# Detailed solution - A179

An output stays within the all-saturated range as long as every transistor between it and a supply rail keeps $|V_{DS}|\ge V_{dsat}$. With each cascode gate biased at the minimum that keeps the transistor beneath it saturated, every device in the stack between the output and the rail costs its own saturation voltage. Compute the saturation voltages from the bias currents, add them up for each circuit, and compare.

### Step 1 — Saturation voltages

In the square-law model a saturated transistor needs $|V_{DS}|\ge V_{dsat}=\sqrt{2I_D/[K'(W/L)]}$. With equal $W/L$ and $K'_N=2K'_P$:

$$
V_{dsat,P}=\sqrt{\frac{2I}{K'_P(W/L)}}=\sqrt2\,V_{dsat,N},\qquad V_{dsat}(2I)=\sqrt2\,V_{dsat}(I),
$$

where $V_{dsat,N}$ and $V_{dsat,P}$ refer to devices at current $I$. The input transistors of Circuits 5 and 6 carry $2I$, so they need $\sqrt2$ times the saturation voltage of a device of the same type at $I$.

### Step 2 — Device stacks above and below the output

Reading the figure, the transistors between the output and each rail, and the resulting limits, are:

| Circuit | Above the output | $v_o(\max)$ | Below the output | $v_o(\min)$ |
|---|---|---|---|---|
| 1 | p source | $V_{DD}-V_{dsat,P}$ | n cascode, n input | $2V_{dsat,N}$ |
| 2 | p input, p cascode | $V_{DD}-2V_{dsat,P}$ | n sink | $V_{dsat,N}$ |
| 3 | p source, p cascode | $V_{DD}-2V_{dsat,P}$ | n cascode, n input | $2V_{dsat,N}$ |
| 4 | p input, p cascode | $V_{DD}-2V_{dsat,P}$ | n cascode, n sink | $2V_{dsat,N}$ |
| 5 | p source | $V_{DD}-V_{dsat,P}$ | n cascode, n input at $2I$ | $(1+\sqrt2)V_{dsat,N}$ |
| 6 | p input at $2I$, p cascode | $V_{DD}-(1+\sqrt2)V_{dsat,P}$ | n sink | $V_{dsat,N}$ |

For example, in Circuit 6 the p input carries $2I$ and needs $V_{SD}\ge\sqrt2\,V_{dsat,P}$, and the p cascode above the output needs $V_{dsat,P}$, so $v_o(\max)=V_{DD}-(1+\sqrt2)V_{dsat,P}$. In Circuits 5 and 6 the extra folding current source connects to the cascode's source node, not to the output, so it does not add to the stack at the output.

### Step 3 — Highest $v_o(\min)$

Circuits 1, 3, 4 and 5 each have two n-channel devices below the output; Circuits 2 and 6 only one. Among the four, Circuit 5's n input carries $2I$ and needs $\sqrt2\,V_{dsat,N}$:

$$
(1+\sqrt2)V_{dsat,N}=2.41\,V_{dsat,N}>2V_{dsat,N}.
$$

**Circuit 5 has the highest $v_o(\min)$**, $(1+\sqrt2)V_{dsat,N}$.

This uses the usual convention that each circuit's cascode gate is set on its own at the minimum that keeps the transistor beneath it saturated. If the drawn $V_{BN2}$ line is taken literally as one voltage shared by all circuits, it must satisfy Circuit 5, $V_{BN2}\ge V_{TN}+(1+\sqrt2)V_{dsat,N}$, and Circuits 1, 3, 4 and 5 then all have $v_o(\min)=V_{BN2}-V_{TN}=(1+\sqrt2)V_{dsat,N}$.

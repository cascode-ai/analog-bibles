# Detailed solution - A180

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

### Step 3 — Lowest $v_o(\min)$

Circuits 2 and 6 have only one n-channel device, the simple current sink at $I$, between the output and ground; every other circuit has an n-channel cascode plus the device beneath it. **Circuits 2 and 6 have the lowest $v_o(\min)$**, equal to $V_{dsat,N}$.

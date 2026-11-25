# Golden Solution - R016

## Reference answer

The output is zero up to $V_{in}=0.7\,\mathrm{V}$. It then rises with slope below one and remains below $1\,\mathrm{V}$ for finite positive $\beta R_1$. The output is the electrical source. The $1\,\mathrm{V}$ terminal supplies the load.

$$V_{GS}=V_{in}-V_{out},\quad V_{DS}=1\,\mathrm{V}-V_{out},\quad V_{SB}=V_{out}.$$

Let $V_{ov}=V_{GS}-V_{TH}(V_{out})$, using the stated body effect. With channel-length modulation neglected, KCL gives

| Region | Condition | Output equation |
|---|---|---|
| Cutoff | $V_{ov}\le0$ | $V_{out}=0$ |
| Saturation | $0<V_{ov}\le V_{DS}$ | $V_{out}=\beta R_1 V_{ov}^2/2$ |
| Triode | $V_{ov}>V_{DS}$ | $V_{out}=\beta R_1(V_{ov}V_{DS}-V_{DS}^2/2)$ |

At the transition, use $V_{ov}=V_{DS}$ and denote the input and output there by $V_{in,k}$ and $V_{out,k}$.

$$V_{out,k}=V_D\left(1-\frac{2}{1+\sqrt{1+2\beta R_1 V_D}}\right),\qquad
V_{in,k}=V_D+V_{TH}(V_{out,k}),\quad V_D=1\,\mathrm{V}.$$

The transition input is between $1.700$ and $1.893\,\mathrm{V}$ (limiting values). The curve leaves zero with zero slope and continues to rise in triode toward the $1\,\mathrm{V}$ ceiling. How close it gets by $V_{in}=3\,\mathrm{V}$ depends on $\beta R_1$.

![Computed output versus input for three values of beta R1](/q/R016/solution-r016.svg)

## Grading notes

+2: Output as the electrical source, zero output through 0.7 V, a rising saturation branch with slope below unity and body effect, and transition to triode at $1\,\mathrm{V}+V_{TH}$ with a 1 V ceiling. Accept parameter-dependent knees and outputs supported by the load equation.

+1: Correct overall shape with the body effect omitted or a minor transition error.

0: Correct follower behavior at low input with the 1 V ceiling omitted.

-2: An asserted inverting or decreasing transfer caused by incorrect terminal polarity, or a result that explicitly places the output above 1 V in this model.

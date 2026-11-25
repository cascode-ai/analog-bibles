# Golden Solution - R020

## Reference answer

With negligible junction current and a compliant current sink, the diode-connected NMOS conducts in saturation. The overdrive $V_{ov}=\sqrt{2I_1/\beta}$ is fixed. In the non-forward-biased portion, $V_{out}=V_{GS}$ decreases with increasingly negative slope as the bulk voltage rises.

$$V_{out}=V_{TH}(V_{SB})+V_{ov},\qquad V_{SB}=V_{DD}-V_{out}-V_{in}.$$

The slope is $-\eta/(1+\eta)$, where $\eta=dV_{TH}/dV_{SB}=\gamma/(2\sqrt{2|\phi_F|+V_{SB}})$. At the source–bulk zero-bias point, the input and output are

$$V_{out,0}=V_{TH0}+V_{ov},\qquad V_{in,0}=V_{DD}-V_{TH0}-V_{ov}.$$

Above $V_{in,0}$ the source–bulk junction is forward biased. Its current can supply part of $I_1$, so this part of the curve requires a junction model. The drain–bulk junction is never forward biased in the specified sweep.

![Gate–source voltage versus bulk voltage with the zero-bias point and the forward-bias region](/q/R020/solution-r020.svg)

## Grading notes

+2: Correctly identifies $V_{out}$ as $V_{GS}$ and $V_{in}$ as the bulk voltage. Shows a decreasing curve with increasing slope magnitude on the non-forward-biased branch, gives the zero-bias level, and recognizes the limit imposed by source–bulk forward bias. Specific example values are optional.

+1: Correct decreasing branch and explanation with the steepening or the source–bulk bias limit omitted.

0: Identifies the body-effect mechanism but gives an incorrect local slope or only a starting value.

-2 (asserted as fact): Constant or increasing $V_{out}$ on the non-forward-biased branch, or treatment of $V_{in}$ as a gate voltage.

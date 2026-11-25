# Golden Solution - R030

## Reference answer

$C_2$ plays no role: $C_1$ is connected directly between the drain and source of $M_1$, so it discharges through $M_1$ in a local loop and no net current enters $C_2$. Therefore $V_S=0$ V. With the square-law model and $\lambda=0$, $V_X$ falls linearly from 3 V to 1.3 V with

$$I_X=\frac12\beta(1.3\ \mathrm{V})^2=(0.845\ \mathrm{V^2})\beta,$$

then enters triode and decays toward 0 V. The saturation interval is $t_1=C_1(3-1.3)/[(0.845\ \mathrm{V^2})\beta]$, followed by the characteristic time $\tau=C_1/[\beta(1.3\ \mathrm{V})]$.

## Answer figures

![V_X versus time](/q/R030/solution-vx.svg)

![I_X versus time](/q/R030/solution-ix.svg)

The curves use the stated MOS model with the illustrative values $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1$ pF shown in each figure.

## Grading notes

+2: $V_S$ stays at 0 V, the $V_X$ waveform has a constant-current linear ramp from 3 V to 1.3 V followed by triode decay to 0 V, and $I_X$ is flat before decaying. Accept $I_X=0.845\beta$ and the correct $t_1$ and $\tau$ expressions.

+1: The final discharge and $V_S=0$ are correct, but the saturation interval or the KCL reason for $C_2$ being idle is missing.

0: The waveform or operating-region transition is incorrect.

-2: Treating the event as charge sharing with $V_S$ rising, or claiming that $V_X$ settles at a nonzero value.

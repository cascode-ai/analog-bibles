# Golden Solution - R309

## Reference answer

Very low frequencies: $|A_v| = g_{m1}R_2$. Very high frequencies: $|A_v| = g_{m1}R_2\dfrac{R_1}{R_1 + 2/g_{m5}} = g_{m1}R_2\dfrac{g_{m5}R_1}{2 + g_{m5}R_1}$.
(Sign: the output at the drain of $M_6$ is inverted with respect to the gate of $M_1$.)

Transfer function (differential, $V_{out} = V_{D6} - V_{D5}$, $V_{in} = V_{G1} - V_{G2}$):
$$\frac{V_{out}}{V_{in}} = -g_{m1}R_2\frac{1 + R_1C_1s}{1 + (R_1 + 2/g_{m5})C_1s}$$
- For differential signals the midpoint of the two $R_2$ resistors (gates of $M_3$, $M_4$) stays at ac ground by symmetry, whatever $C_2$ is; $C_2$ affects only common-mode signals. So each output sees $R_2$ to ac ground, and $M_3$/$M_4$ (λ = 0) add no conductance.
- Half circuit: $M_1$'s current $g_{m1}V_{in}/2$ is drawn from node X (source of the cascode $M_6$), which also connects to the $R_1$–$C_1$ branch; for differential signals the middle of that branch is a virtual ground, so X sees $R_1/2$ in series with $2C_1$.
- At low frequencies $C_1$ is open and all of $M_1$'s current flows through the cascode into $R_2$: gain $g_{m1}R_2$. At high frequencies X sees $R_1/2$ in parallel with the cascode's input resistance $1/g_{m5}$, so only the fraction $\dfrac{R_1/2}{R_1/2 + 1/g_{m5}}$ of the current reaches the output.

## Grading notes

+2: low-frequency gain $g_{m1}R_2$ and high-frequency gain $g_{m1}R_2R_1/(R_1 + 2/g_{m5})$ (sign or magnitude form), with the observations that the $R_2$ midpoint is a differential virtual ground ($C_2$ irrelevant) and that $R_1$ (as $R_1/2$ per half) diverts current at high frequencies. +1: both values right but the reasoning about $C_2$ wrong or missing, or the high-frequency result written with $R_1$ instead of $R_1/2$ per side through a slip. 0: one extreme right. -2 (asserted as fact): PMOS loads treated as diode-connected or as setting the gain (e.g., $g_{m1}/g_{m3}$), $C_2$ claimed to change the differential gain, or a high-frequency gain of zero or $g_{m1}R_2$ unchanged.

# Golden Solution - R058

## Reference answer

Both nodes step down by $V_{TH}$ at $t = 0$ and then stay there: $V_X = V_{DD} - V_{TH}$ and $V_Y = V_{DD} - V_{GS1} - V_{TH} = V_{DD} - 2V_{TH} - \sqrt{2I_1/\beta}$ for $t > 0$.
- X connects only to the gate and $C_1$, so $V_X - V_Y = V_{GS1} = V_{TH} + \sqrt{2I_1/\beta}$ is preserved and $V_X$ follows $V_Y$.
- After the step, $M_1$ has the same $V_{GS}$ and a larger $V_{DS}$ ($V_{GS1} + V_{TH}$), so it stays saturated and carries exactly $I_1$ (λ = 0). No net current flows into $C_2$ and the voltages remain constant (assuming $I_1$ still has headroom).

![Negative-step waveform of $V_X$](/q/R058/solution-vx.svg)

![Negative-step waveform of $V_Y$](/q/R058/solution-vy.svg)

## Grading notes

+2: both nodes drop by $V_{TH}$ and remain constant, with the reason ($V_{GS}$ fixed by $C_1$, $M_1$ still saturated with $I_D = I_1$, so no net current into $C_2$). +1: correct waveforms with incomplete reasoning. 0: correct initial drop but an asserted recovery toward the original values. -2 (asserted as fact): $V_X$ staying at $V_{DD}$, recovery of both nodes to their initial values as the main conclusion, or opposite-direction motion.

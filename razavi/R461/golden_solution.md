# Golden Solution - R461

## Reference answer

At $V_{in} = V_{out} \approx V_{GS3} \approx 0.94$–0.95 V, taking $(W/L)_5 = 2(W/L)_{3,4}$ as intended (0.95 V is the λ = 0 design value; with λ the diode-connected $M_3$ at 0.5 mA has $V_{GS3} \approx 0.94$ V). If the rounded sizes are used literally ($239/119 = 2.008$), the same condition gives $(1 + \lambda_nV_{out})/(1 + \lambda_nV_{GS3}) = 2 \cdot 119/239$, i.e. $V_{out} \approx 0.89$–0.90 V; the answer is this sensitive because $\lambda_n\Delta V_{DS}$ has to cancel the 0.4% ratio error.

- $V_{out} = V_{in}$ exactly means zero differential input, which (by symmetry of the first stage) requires $V_Y = V_X$, i.e. $M_3$ and $M_4$ with equal $V_{DS}$, $M_1$ and $M_2$ in identical conditions.
- Then $V_{GS5} = V_Y = V_X = V_{GS3}$. With channel-length modulation, $M_5$ (twice the W/L of $M_3$) carries exactly $2I_{D3} = I_{D7} = 1$ mA, the current $M_6$ supplies, only if its $V_{DS}$ also equals that of $M_3$: $V_{DS5} = V_{out} = V_{DS3} = V_{GS3}$.
- For any other output level, $I_{D5} = 1\ \mathrm{mA}\times(1+\lambda_nV_{out})/(1+\lambda_nV_{GS3})$ at $V_Y = V_X$ would differ from 1 mA, so $V_Y$ must shift away from $V_X$, which needs a small differential input (systematic offset ≈ $\Delta V_Y/A_1$). Hence $V_{in} = V_{out}$ exactly only at ≈ 0.95 V.

## Grading notes

+2: ≈ 0.94–0.95 V ($= V_{GS3} = V_{GS5}$), with the argument that $M_5$ is then an exact replica (same $V_{GS}$ and $V_{DS}$) of $M_3$ so that the first stage is balanced and the systematic offset vanishes. Also +2: ≈ 0.89–0.91 V obtained with the same argument by using the stated sizes 239/119 literally, $(1 + \lambda_nV_{out})/(1 + \lambda_nV_{GS3}) = 2 \cdot 119/239$. +1: correct value with an incomplete argument (e.g., only "$V_X = V_Y$"). 0: correct reasoning about systematic offset but a wrong value through a slip. -2 (asserted as fact): "for every input in the allowable range" (ignoring the given λ), a value set by the PMOS devices (e.g., where $V_{out} = V_P$), or 0 V.

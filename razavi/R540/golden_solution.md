# Golden Solution - R540

## Reference answer

$I_{D3}/I_{D4} = [V_{ov}/(V_{ov} - \Delta V)]^2 \approx 1 + 2\Delta V/V_{ov}$. $Q_1$ (fed by $M_3$) is in the $X$ branch and $Q_3$ (fed by $M_4$) in the $Y$ branch, so this ratio enters the PTAT voltage just as an $M_1$–$M_2$ mismatch would:
$\Delta V_{out} \approx \left(1 + \dfrac{R_2}{R_1}\right)V_T\ln\dfrac{I_{D3}}{I_{D4}} \approx \left(1 + \dfrac{R_2}{R_1}\right)\dfrac{2V_T\,\Delta V}{V_{ov}}$ (one leading-order form, $V_{out}$ rises). The form $(R_2/R_1)V_T\ln(I_{D3}/I_{D4})$, obtained by splitting $V_{out} = V_X + I_{D2}R_2$ (here $V_X$ is essentially unchanged), is equally valid and slightly closer to the exact value, because the unamplified fall of $|V_{EB3}|$ cancels the "1".
Including the unamplified change of $|V_{EB3}|$ (Q3 now runs at a lower current than Q4), the complete first-order result is $\Delta V_{out} \approx \left(\dfrac{R_2}{R_1} + \dfrac{1}{\ln n}\right)V_T\ln\dfrac{I_{D3}}{I_{D4}}$.
Example: $n = 8$, $1 + R_2/R_1 \approx 8.3$, $V_{ov} = 0.2$ V, $\Delta V = 5$ mV: ≈ 10.8 mV ($1 + R_2/R_1$ form), 9.5 mV ($R_2/R_1$ form), 10.1 mV (complete; an exact numerical solution gives 10.1 mV).
- Unlike channel-length modulation, a threshold mismatch in $M_3$/$M_4$ is as harmful as one in $M_1$/$M_2$.

Derivation: $V_X = V_Y$ gives $I_{D2}R_1 = V_T[2\ln n + \ln(I_{D3}/I_{D4})]$ with $I_{D1} = I_{D2}$. $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_{D2}R_1$, where $|V_{EB3}|$ falls by $V_T\ln(I_{D3}/I_{D4})$ relative to the other junctions.

## Grading notes

+2: current ratio ≈ $1 + 2\Delta V/V_{ov}$ between the currents feeding $Q_1$ and $Q_3$, recognized as entering the loop equation, and an output error equivalent to one of: $(R_2/R_1)V_T\ln(I_{D3}/I_{D4})$ (split $V_{out} = V_X + I_{D2}R_2$, $V_X$ essentially unchanged), $(1 + R_2/R_1)V_T\ln(I_{D3}/I_{D4})$ (leading term of the split $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_{D2}R_1$, ignoring the unamplified fall of $|V_{EB3}|$), or the complete first-order $(R_2/R_1 + 1/\ln n)V_T\ln(I_{D3}/I_{D4})$, all of which earn full credit (example: 9.5, 10.8 and 10.1 mV versus 10.1 mV exact); sign consistent with the stated convention (the opposite sign is accepted if $\Delta V$ is read as lowering $|V_{TH4}|$ and the answer says so). +1: right mechanism and amplification with a slip in the linearized ratio. 0: error not amplified, or the mismatch claimed to affect only $|V_{EB3}|$ directly ($\Delta V_{out} = -V_T\ln(I_{D3}/I_{D4})$ only). -2 (asserted as fact): claims that a threshold mismatch of $M_3$, $M_4$ causes no output error (e.g., by analogy with channel-length modulation), or treats $M_3$, $M_4$ as outside the loop.

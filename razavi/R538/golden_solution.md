# Golden Solution - R538

## Reference answer

The total error is positive and only a few millivolts, much smaller than the ≈ 28 mV when $M_1$ and $M_2$ have CLM. It is dominated by an unamplified rise of the emitter–base voltages, not by the PTAT term. With $I_D = I_0(1 + \lambda|V_{DS}|)$, $M_1$ and $M_2$ carry $I_0$, while $M_3$ and $M_4$, whose drains sit at $|V_{EB1}|$ and $|V_{EB3}|$, carry $I_0a$ and $I_0b$ with $a = 1 + \lambda(V_{DD} - |V_{EB1}|)$ and $b = 1 + \lambda(V_{DD} - |V_{EB3}|)$:
$\Delta V_{out} \approx V_T\ln[1 + \lambda(V_{DD} - |V_{EB3}|)] + \left(1 + \dfrac{R_2}{R_1}\right)V_T\ln\dfrac{1 + \lambda(V_{DD} - |V_{EB1}|)}{1 + \lambda(V_{DD} - |V_{EB3}|)} \approx V_T\ln[1 + \lambda(V_{DD} - |V_{EB}|)] - \left(1 + \dfrac{R_2}{R_1}\right)\dfrac{\lambda V_T^2\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)}$.
Example: $n = 8$, $1 + R_2/R_1 \approx 8.3$, $|V_{EB}| \approx 0.78$ V, $\lambda = 0.2\ \mathrm{V^{-1}}$: ≈ +9.7 mV − 1.6 mV ≈ +8 mV (exact numerical solution +8.0 mV; +4.3 mV for $\lambda = 0.1\ \mathrm{V^{-1}}$).

Derivation:
- $V_X = |V_{EB1}| + |V_{EB2}|$ (Q1 carries $I_0a$, Q2 carries $I_0$) and $V_Y = |V_{EB3}| + |V_{EB4}| + I_0R_1$ (Q3 carries $I_0b$, Q4 carries $I_0$). The loop condition $V_X = V_Y$ gives $I_0R_1 = 2V_T\ln n + V_T\ln(a/b)$.
- Amplified PTAT term (small): the drains of $M_3$ and $M_4$ differ only by $|V_{EB1}| - |V_{EB3}| \approx V_T\ln n$ (≈ 54 mV for $n = 8$), so $a/b \approx 1 - \lambda V_T\ln n/[1 + \lambda(V_{DD} - |V_{EB}|)]$. $M_4$ carries slightly more than $M_3$, the PTAT voltage shrinks by $V_T\ln(b/a)$, and the output falls by $1 + R_2/R_1$ times that: ≈ −1.6 mV.
- Unamplified term (dominant): relative to $M_1$ and $M_2$, $M_3$ and $M_4$ carry a factor $1 + \lambda|V_{DS}| \approx 1.44$ more current, so Q1 and Q3 run at ≈ 1.44 times the current of Q2 and Q4. In $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_0R_1$ this raises $|V_{EB3}|$ by $V_T\ln b$ ≈ +9.7 mV, once and unamplified.
- Equivalent split: $V_{out} = V_X + I_0R_2$ gives $V_T\ln a + (R_2/R_1)V_T\ln(a/b)$, the same total. A further term $V_T\ln(a/b)/\ln n$ (≈ −0.1 mV), from the small change of $I_0$, is negligible.

## Grading notes

+2: the drains of $M_3$ and $M_4$ identified as $|V_{EB1}|$ and $|V_{EB3}|$, so the amplified PTAT error is small (factor $1 + R_2/R_1$ or $R_2/R_1$, depending on the split); and the unamplified rise $V_T\ln[1 + \lambda(V_{DD} - |V_{EB}|)]$ of the emitter–base voltages included (Q1 and Q3 run at $1 + \lambda|V_{DS}|$ times the current of Q2 and Q4), giving a small positive net error of a few mV, or an equivalent first-order expression. +1: both effects identified but with a sign slip or a minor derivation error; or the unamplified rise quantified as the main effect with the PTAT term only noted as negligible. 0: only the small amplified PTAT term, correctly derived (drains at $|V_{EB1}|$, $|V_{EB3}|$), given as the error without addressing the $V_{EB}$ rise. -2 (asserted as fact): an error as large as when $M_1$ and $M_2$ have CLM (e.g., using $V_X$ or $V_{out}$ as the drains of $M_3$, $M_4$), the claim that CLM of $M_3$, $M_4$ is amplified by a large factor of order $\lambda \times 1$ V, or the explicit claim that the emitter–base voltages are unaffected so that the output error is the small negative PTAT term alone.

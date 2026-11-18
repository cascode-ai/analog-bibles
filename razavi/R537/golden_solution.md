# Golden Solution - R537

## Reference answer

$\Delta V_{out} \approx \left(1 + \dfrac{R_2}{R_1}\right)V_T\ln\dfrac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})} \approx \left(1 + \dfrac{R_2}{R_1}\right)V_T\,\dfrac{\lambda(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})}$, positive ($V_{out}$ rises). Because $V_{out} - V_X$ is about 1 V, the error is large. Example: $n = 8$, $1 + R_2/R_1 = 17.2/\ln 8 \approx 8.3$ (zero TC), $|V_{EB}| \approx 0.78$ V ($V_X \approx 1.56$ V, $V_{out} \approx 2.35$ V), $\lambda = 0.2\ \mathrm{V^{-1}}$: error ≈ 28 mV.

Derivation:
- $V_X = |V_{EB1}| + |V_{EB2}|$ and $V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1$. Setting $V_X = V_Y$ gives $I_{D2}R_1 = V_T\ln\dfrac{n^2I_{D1}I_{D3}}{I_{D2}I_{D4}}$ (Q2 carries $I_{D1}$, Q1 carries $I_{D3}$, Q4 carries $I_{D2}$, Q3 carries $I_{D4}$). The output is $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_{D2}R_1$. Ideally all currents are equal: $V_{out} = 2|V_{EB}| + 2(1 + R_2/R_1)V_T\ln n$.
- With CLM, $|V_{DS1}| = V_{DD} - V_X$ but $|V_{DS2}| = V_{DD} - V_{out}$, so at the common gate voltage $I_{D1}/I_{D2} = [1 + \lambda(V_{DD} - V_X)]/[1 + \lambda(V_{DD} - V_{out})] > 1$, while $I_{D3} = I_{D4}$.
- The PTAT voltage across $R_1$ becomes $2V_T\ln n + V_T\ln(I_{D1}/I_{D2})$, and this error is multiplied by $1 + R_2/R_1$ at the output.
- Second order (not amplified): the changed absolute currents shift $|V_{EB3}| + |V_{EB4}|$ by a few mV. An exact numerical solution for the example gives 27.6 mV instead of 28 mV.

## Grading notes

+2: identifies that $M_1$ ($|V_{DS}| = V_{DD} - V_X$) and $M_2$ ($|V_{DS}| = V_{DD} - V_{out}$) see different drain–source voltages, so $I_{D1} \ne I_{D2}$; that the resulting error $V_T\ln(I_{D1}/I_{D2})$ in the PTAT voltage across $R_1$ appears at the output multiplied by $1 + R_2/R_1$; expression equivalent to the reference to first order (the small unamplified $V_{EB}$ shifts may be included or not); sign consistent. The amplification factor may appear as $1 + R_2/R_1$ (splitting $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_{D2}R_1$) or as $R_2/R_1$ (splitting $V_{out} = V_X + I_{D2}R_2$ with $V_X$ treated as fixed). The two differ by an unamplified term of the same order as the $V_{EB}$ shifts that may be omitted, so both earn +2; in the example ($V_T = 26$ mV) the exact error is 27.6 mV, versus 28.0 mV and 24.6 mV for the two forms. +1: correct mechanism and amplification, but a sign slip or a result given only qualitatively. 0: correct current ratio but the error not amplified (e.g., $V_T\ln(I_{D1}/I_{D2})$ given as the output error) or amplified by a wrong factor (other than $1 + R_2/R_1$ or $R_2/R_1$ with the matching split). -2 (asserted as fact): no error because the op amp forces $V_X = V_Y$, equal $V_{DS}$ assumed for $M_1$ and $M_2$, or an error that does not depend on the current ratio (e.g., $\lambda V_{out}$ added directly).

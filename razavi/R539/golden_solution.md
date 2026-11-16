# Golden Solution - R539

## Reference answer

$I_{D1}/I_{D2} = [V_{ov}/(V_{ov} - \Delta V)]^2 \approx 1 + 2\Delta V/V_{ov}$, and the output rises by
$\Delta V_{out} \approx \left(1 + \dfrac{R_2}{R_1}\right)V_T\ln\dfrac{I_{D1}}{I_{D2}} \approx \left(1 + \dfrac{R_2}{R_1}\right)\dfrac{2V_T\,\Delta V}{V_{ov}}$ (leading, amplified term; $= (1 + R_2/R_1)(g_m/I_D)V_T\Delta V$).
Including the unamplified rise of $V_X = V_Y$ itself (the stacked emitter–base voltages move up because the branch currents grow), the complete first-order result is $\Delta V_{out} \approx \left(2 + \dfrac{R_2}{R_1} + \dfrac{1}{\ln n}\right)V_T\ln\dfrac{I_{D1}}{I_{D2}}$.
Example: $n = 8$, $1 + R_2/R_1 \approx 8.3$, $V_{ov} = 0.2$ V, $\Delta V = 5$ mV: ≈ 10.8 mV (leading term), 12.8 mV (complete; an exact numerical solution agrees).

Derivation:
- From $V_X = V_Y$: $I_{D2}R_1 = V_T\ln[n^2I_{D1}I_{D3}/(I_{D2}I_{D4})] = V_T[2\ln n + \ln(I_{D1}/I_{D2})]$ since $I_{D3} = I_{D4} = I_{D1}$ (only $I_{D3} = I_{D4}$ is needed here; if $M_{3,4}$ are scaled copies of $M_1$ with the same nominal $|V_{TH}|$, $I_{D3} = cI_{D1}$ with fixed $c$ and the complete result is unchanged). The PTAT voltage grows by $V_T\ln(I_{D1}/I_{D2})$, multiplied by $1 + R_2/R_1$ at the output.
- Exact bookkeeping: $V_{out} = (1 + R_2/R_1)(|V_{EB1}| + |V_{EB2}|) - (R_2/R_1)(|V_{EB3}| + |V_{EB4}|)$. Here $Q_1$, $Q_2$, $Q_3$ carry $r = I_{D1}/I_{D2}$ times the current of $Q_4$, which gives the extra $V_T\ln r\,(1 + 1/\ln n)$.

## Grading notes

+2: current ratio from the threshold mismatch (≈ $1 + 2\Delta V/V_{ov}$, or $g_m\Delta V/I_D$) and the corresponding PTAT error $V_T\ln(I_{D1}/I_{D2})$ multiplied by $1 + R_2/R_1$. Either the leading-order result (the book's answer, presented as the amplified, dominant error) or the complete first-order expression earns full credit. Sign consistent with the stated convention; the opposite sign is accepted if the answer reads $\Delta V$ as lowering $|V_{TH2}|$ and says so. +1: right mechanism and amplification with a slip in the linearized ratio (e.g., $\Delta V/V_{ov}$ instead of $2\Delta V/V_{ov}$). 0: error given as $V_T\ln(I_{D1}/I_{D2})$ or $\Delta V$ without the $1 + R_2/R_1$ amplification. 0 also: the stacked junctions misread as a single $V_{EB}$ per side ($I_0R_1 = V_T\ln n$ instead of $2V_T\ln n$), giving e.g. $(1 + R_2/R_1 + 1/\ln n)\,2V_T\Delta V/V_{ov}$: the amplified term is right, but the circuit reading is wrong. -2 (asserted as fact): no output error because the op amp equalizes $V_X$ and $V_Y$, or $\Delta V$ itself added to $V_{out}$ amplified by $1 + R_2/R_1$ as if it were an op-amp offset.

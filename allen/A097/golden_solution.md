# Golden Solution - A097

## Reference answer

$S_{V_{DD}}^{V_{REF}} = \dfrac{\sqrt{\beta_P}\,V_{DD}}{\sqrt{\beta_P}(V_{DD} - |V_{TP}|) + \sqrt{\beta_N}\,V_{TN}}$, which equals 1 when $\sqrt{\beta_N}V_{TN} = \sqrt{\beta_P}|V_{TP}|$, in particular for $\beta_N = \beta_P$ and $V_{TN} = |V_{TP}|$ (then $V_{REF} = V_{DD}/2$).

- Both devices are saturated (diode-connected) and carry the same current: $\tfrac{\beta_N}{2}(V_{REF} - V_{TN})^2 = \tfrac{\beta_P}{2}(V_{DD} - V_{REF} - |V_{TP}|)^2$.
- Taking square roots: $V_{REF} = \dfrac{\sqrt{\beta_P}(V_{DD} - |V_{TP}|) + \sqrt{\beta_N}V_{TN}}{\sqrt{\beta_N} + \sqrt{\beta_P}}$, so $\partial V_{REF}/\partial V_{DD} = \sqrt{\beta_P}/(\sqrt{\beta_N} + \sqrt{\beta_P})$.
- $S = \dfrac{V_{DD}}{V_{REF}}\cdot\dfrac{\sqrt{\beta_P}}{\sqrt{\beta_N} + \sqrt{\beta_P}}$ gives the expression above.
- $V_{REF}$ has the form $aV_{DD} + b$ with $b \propto \sqrt{\beta_N}V_{TN} - \sqrt{\beta_P}|V_{TP}|$; $S = 1$ exactly when $b = 0$. With $\beta_N = \beta_P$ and $V_{TN} = |V_{TP}|$: $V_{REF} = V_{DD}/2$, so a 10% change in $V_{DD}$ changes $V_{REF}$ by 10%, like a resistive divider. Otherwise $S$ differs from 1 (it tends to 1 for $V_{DD} \gg V_T$).

## Grading notes

+2: the general sensitivity expression (or equivalent) with $S = 1$ shown for the matched case (e.g. $V_{REF} = V_{DD}/2$), and the condition $\sqrt{\beta_N}V_{TN} = \sqrt{\beta_P}|V_{TP}|$ (or the matched case) identified as what makes it exactly unity. +1: $S = 1$ derived correctly for the matched case only, without the general expression, or the general expression with a slip. 0: correct current-equality setup with no completed sensitivity. −2 (asserted as fact): $S = 0$ or $S = 1/2$ for the matched case (e.g. forgetting the $V_{DD}/V_{REF}$ factor), or a sensitivity below 1 for the matched devices claimed as a property of the circuit.

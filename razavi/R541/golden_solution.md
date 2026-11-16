# Golden Solution - R541

## Reference answer

$A_{1,min} = \dfrac{V_{DD} - |V_{GS}|}{V_e}$. The op amp must hold its output at the PMOS gate voltage $V_G = V_{DD} - |V_{GS}|$, which requires a differential input $|V_Y - V_X| = V_G/A_1$; so $A_1 > V_G/V_e$. Example: $|V_{GS}| \approx 1$ V gives $V_G \approx 2$ V and $A_1 \gtrsim 2\ \mathrm{V}/V_e$ (2000 for $V_e = 1$ mV).
- The resulting output error is about $(1 + R_2/R_1)V_e$, since $V_X - V_Y$ acts like an offset in the PTAT loop.
- If the op amp is instead modeled with an output bias level $V_{O0}$ at zero input, the requirement becomes $A_1 > |V_G - V_{O0}|/V_e$.

## Grading notes

+2: $|V_X - V_Y| = V_G/A_1$ with $V_G$ identified as the op-amp output voltage at the PMOS gates ($V_{DD} - |V_{GS}|$), hence $A_1 > (V_{DD} - |V_{GS}|)/V_e$; a numerical estimate is optional. An answer that explicitly adopts an output-bias model and gives $|V_G - V_{O0}|/V_e$ is also +2. +1: correct relation $|V_X - V_Y| = V_{op,out}/A_1$ but the output voltage not identified, or a slip in the estimate. 0: method stated (finite-gain input error) without reaching an expression. -2 (asserted as fact): the op-amp output taken as $V_{out}$ of the bandgap (≈ 2.5 V) through a misread of the circuit, a dimensionally wrong result (e.g., $A_1 > 1/V_e$), or the claim that the gain plays no role because of feedback.

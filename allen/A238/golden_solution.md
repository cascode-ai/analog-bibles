# Golden Solution - A238

## Reference answer

$A_v = \dfrac{g_{m1}+g_{m2}}{g_{m1}+g_{m2}+1/R_L}$ = 0.5 V/V (with the 500-Ω load); $R_{out} = 1/(g_{m1}+g_{m2})$ = 500 Ω.

- $g_{m1} = \sqrt{2\cdot100\cdot50\cdot100}$ µS = 1 mS; $g_{m2} = \sqrt{2\cdot50\cdot100\cdot100}$ µS = 1 mS.
- Both followers drive the output in parallel: $R_{out} = 1/(2\ \mathrm{mS})$ = 500 Ω (λ = 0, no body effect).
- With $R_L$ = 500 Ω the gain is $R_L/(R_L+R_{out})$ = 0.5 (unloaded it would be 1).
- Check of the bias: at $v_{IN}$ = 0, $V_{GS1} = V_{SG2}$ = 0.7 V gives $\frac{100\cdot50}{2}(0.2)^2$ = 100 µA and $\frac{50\cdot100}{2}(0.2)^2$ = 100 µA, consistent with $v_{OUT}$ = 0.

## Grading notes

+2: $R_{out}$ = 500 Ω and $A_v$ = 0.5 with $R_L$ (the unloaded value 1 may be mentioned). +1: $R_{out}$ right and gain given as 1 (unloaded) without addressing $R_L$, or one transconductance slipped. 0: correct method with both numbers wrong by a slip. −2 (asserted as fact): only one transistor's $g_m$ used (1 kΩ), gain > 1, or the stage treated as an inverting common-source amplifier.

# Golden Solution - R256

## Reference answer

- Small $I_{REF}$ (including zero): the loop $M_3 \to M_2 \to M_1 \to R_1$ is a negative-feedback loop that conducts on its own. $M_3$ supplies $I_{D3} = I_{D1} - I_{REF}$, and $V_Y \approx V_X + V_{GS3}$. At $I_{REF} = 0$ the current $I_0$ satisfies $V_{DD} - R_1I_0 = V_{GS2}(I_0) + V_{GS3}(I_0)$, with $V_{TH3}$ raised by the body effect ($V_{SB3} = V_X$). As $I_{REF}$ increases, $V_X$ rises slightly and $V_Y$ decreases slowly while $M_3$'s share shrinks.
- At $I_{REF}^*$ given by $V_{DD} - R_1I_{REF}^* = V_{GS}(I_{REF}^*) + V_{TH3}(V_X)$, $M_3$ turns off. Beyond it, $V_X = V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$ (slow rise) and $V_Y = V_{DD} - R_1I_{REF}$ (linear fall, slope $-R_1$).
- When $V_Y$ falls below $V_X - 0.7$ V, $M_1$ enters triode and $V_Y$ flattens near zero.
- Example (W/L = 10/0.5 with $\mu_nC_{ox}$ = 134 μA/V², i.e. β = 2.68 mA/V², $R_1$ = 10 kΩ; square-law simulation): $I_{REF}$ = 0 → $V_X$ ≈ 0.96 V, $V_Y$ ≈ 2.10 V (≈ 90 μA loop current); $M_3$ off from ≈ 110 μA ($V_Y$ ≈ 1.9 V); $M_1$ in triode beyond ≈ 255 μA; at 1 mA, $V_X$ ≈ 1.56 V, $V_Y$ ≈ 0.13 V.

## Grading notes

+2: self-biased conduction at small $I_{REF}$ via $M_3$ with $V_Y \approx V_X + V_{GS3}$, $M_3$ turning off at a finite $I_{REF}$, then $V_X = V_{GS}(I_{REF})$ and $V_Y = V_{DD} - R_1I_{REF}$, and $M_1$ entering triode at large $I_{REF}$. +1: the $M_3$-on and $M_3$-off regions identified but the triode limit missing, or the breakpoint not characterized. 0: only the $M_3$-off behaviour ($V_Y = V_{DD} - R_1I_{REF}$) given, with $M_3$ assumed off throughout. -2 (asserted as fact): $M_3$ conducting at large $I_{REF}$ and pulling $V_X$ toward $V_{DD}$, $V_Y$ increasing with $I_{REF}$, or $M_3$ treated as a PMOS/diode load.

# Golden Solution - A205

## Reference answer

$A_v = \dfrac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}} \approx 0.906$ V/V and $R_{out} = \dfrac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}} \approx 6.1$ kΩ.

- $g_{m1} = \sqrt{2\cdot110\cdot2\cdot50}$ µS = 148.3 µS.
- $V_{SB1}$ = 1 − (−5) = 6 V: $g_{mbs1} = g_{m1}\gamma/(2\sqrt{2|\phi_F|+V_{SB1}}) = 148.3\cdot0.4/(2\sqrt{6.7})$ µS = 11.5 µS.
- $g_{ds1} = g_{ds2} = 0.04\cdot50$ µA = 2 µS.
- Total conductance 163.8 µS: $A_v$ = 148.3/163.8 = 0.906, $R_{out}$ = 6.11 kΩ. (Without the body effect the gain would be 0.974.)
- If the $(1+\lambda V_{DS})$ factor is kept in the bias ($V_{DS1}$ = 4 V, $V_{OV1}$ = 0.626 V), $g_{m1} = 2I_D/V_{OV1}$ = 159.7 µS and $g_{mbs1}$ = 12.3 µS, giving $A_v$ ≈ 0.907–0.911 and $R_{out}$ ≈ 5.7 kΩ; this is equally correct.

## Grading notes

+2: $A_v$ 0.90–0.915 and $R_{out}$ 5.6–6.2 kΩ with the body effect at $V_{SB}$ = 6 V (6.1 kΩ with $g_m = \sqrt{2K'(W/L)I_D}$; about 5.7 kΩ if the $(1+\lambda V_{DS})$ factor is kept in the bias, giving $g_{m1}$ ≈ 160 µS; both are correct). +1: $g_{ds}$ terms omitted (0.928, 6.26 kΩ) or another small slip. 0: body effect neglected (0.974, 6.6 kΩ) with otherwise correct method; a critical error confined to one of the two quantities (e.g. $g_{mbs}$ added to the numerator of $A_v$, or $R_{out}$ of order $r_{ds}$ with the gain right) also caps the score at 0. −2 (asserted as fact): the follower misread so that both results are wrong (e.g. a common-source gain, negative or > 1, with $R_{out}$ of order $r_{ds}$, hundreds of kΩ).

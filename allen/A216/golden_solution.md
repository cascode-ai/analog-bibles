# Golden Solution - A216

## Reference answer

$A_v = \dfrac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}} \approx 0.903$ V/V; $R_{out} = \dfrac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}} \approx 1.36$ kΩ.

- $g_{m1} = \sqrt{2\cdot110\cdot10\cdot200}$ µS = 663 µS.
- $V_{SB1}$ = 0 − (−5) = 5 V: $g_{mbs1} = 663\cdot0.4/(2\sqrt{5.7})$ µS = 55.6 µS.
- $g_{ds1} = g_{ds2} = 0.04\cdot200$ µA = 8 µS.
- Sum 735 µS: $A_v$ = 0.9026, $R_{out}$ = 1361 Ω.
- If the $(1+\lambda V_{DS})$ factor is kept in the bias ($V_{DS1}$ = 5 V, $V_{OV1}$ = 0.550 V), $g_{m1} = 2I_D/V_{OV1}$ = 726.7 µS and $g_{mbs1}$ = 60.9 µS, giving $A_v$ ≈ 0.904 and $R_{out}$ ≈ 1.24–1.25 kΩ; this is equally correct.

## Grading notes

+2: $A_v$ 0.895–0.91 and $R_{out}$ 1.22–1.39 kΩ with the body effect at $V_{SB}$ = 5 V (1.36 kΩ with $g_m = \sqrt{2K'(W/L)I_D}$; about 1.24–1.25 kΩ if the $(1+\lambda V_{DS})$ factor is kept in the bias, giving $g_{m1}$ ≈ 727 µS; both are correct). +1: a small slip that leaves one quantity just outside these ranges, or $g_{ds}$ terms omitted (0.923, 1.39 kΩ). 0: body effect neglected (0.977, 1.47 kΩ); one quantity wrong by a computational slip with the right method; or a critical error confined to one of the two quantities (e.g. $R_{out}$ ≈ $r_{ds}$ with the gain right). −2 (asserted as fact): the follower misread so that both results are wrong (e.g. a common-source gain, or a gain > 1 together with $R_{out}$ ≈ $r_{ds}$).

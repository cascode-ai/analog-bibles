# Golden Solution - A204

## Reference answer

$W_1/L_1 \approx 6.85$ (≈ 7 µm/1 µm).

- At $V_{OUT}$ = 1 V the diode M2 has $V_{GS2}$ = 1 − (−5) = 6 V (no body effect, source at bulk): $I_{D2} = 55\ \mu\mathrm{A/V^2}(6-0.7)^2$ = 1.545 mA. M1 must supply this plus the 1 mA output current: $I_{D1}$ = 2.545 mA.
- M1 with $v_{IN} = V_{DD}$: $V_{GS1}$ = 5 − 1 = 4 V, $V_{SB1}$ = 1 − (−5) = 6 V → $V_{T1} = 0.7 + 0.4(\sqrt{6.7}-\sqrt{0.7})$ = 1.40 V. $V_{DS1}$ = 4 V > $V_{GS1}-V_{T1}$ = 2.6 V, so M1 is saturated.
- $2.545\ \mathrm{mA} = 55\ \mu\mathrm{A/V^2}(W_1/L_1)(4-1.40)^2$ → $W_1/L_1$ = 6.85.

## Grading notes

+2: $W_1/L_1$ 6.7–7.0 (rounding up to 7 is fine) with the M2 current (≈ 1.55 mA) added to the 1 mA and the body-effect threshold ≈ 1.40 V. +1: 8.6 obtained with the cruder approximation $V_T \approx V_{T0}+\gamma\sqrt{V_{SB}}$ = 1.68 V (stated), or a slip of a few percent. 0: correct method but the body effect neglected (≈ 4.3) or the M2 current omitted, with the omission acknowledged. −2 (asserted as fact): M2's current not added (W/L ≈ 2.7) or body effect ignored without comment, M2 treated as a constant-current sink of unknown value, or M1 placed in nonsaturation with $V_{GS1}$ = 10 V.

# Golden Solution - alsim-03-6-02

## Reference answer

(a) $v_{OUT}$ ≈ 5 V for $v_{IN}$ < 0.7 V (M1 off), then a gradual inverting fall: ≈ 4.92 V at $v_{IN}$ = 1 V, 4.25 V at 1.5 V, 2.5 V at $v_{IN}$ ≈ 1.68 V (small-signal gain there ≈ −25 V/V), 0.55 V at 2 V, 0.27 V at 3 V and 0.14 V at 5 V.
- Bias: M3 and R set $V_{SG3}$ ≈ 2.14 V and a reference current ≈ 57 µA, mirrored by M2.
- High output: M2 in nonsaturation, M1 nearly off. Transition (both saturated): $55\ \mu\mathrm{A/V^2}(v_{IN} - 0.7)^2(1 + 0.04v_{OUT}) = 25\ \mu\mathrm{A/V^2}(1.44\ \mathrm{V})^2[1 + 0.05(5 - v_{OUT})]$. Low output: M1 in nonsaturation.
- Gain at $v_{OUT}$ = 2.5 V: $-g_{m1}/(g_{ds1} + g_{ds2})$ ≈ −118 µS/4.7 µS ≈ −25.

(b) Input voltage at which $v_{OUT}$ = 2.5 V (nominal 1.68 V): $K'_N$ +10% → 1.63 V; $K'_P$ +10% → 1.69 V; $V_{TN}$ +10% (0.77 V) → 1.75 V; $|V_{TP}|$ +10% (0.77 V) → 1.67 V. The curves keep their shape and shift sideways. The n-channel parameters move the transition most (the $V_{TN}$ change shifts it by about its own 70 mV); the p-channel parameters change the reference current by only ≈ ±2% and shift it by ≈ 10 mV.

## Grading notes

A correct simulation shows an inverting transfer curve from ≈ 5 V down to ≈ 0.1 V with $v_{OUT}$ = 2.5 V at $v_{IN}$ ≈ 1.68 V (±0.05 V) and a peak slope magnitude of about 20–30, and in (b) four curves whose 2.5 V crossings shift by about −0.05 V ($K'_N$), +0.01 V ($K'_P$), +0.07 V ($V_{TN}$) and −0.01 V ($|V_{TP}|$) (±0.02 V). Interpreting (b) as two runs (both $K'$ together, both $V_T$ together) is acceptable if stated. A sharp switch right at $v_{IN}$ ≈ 0.7 V, a non-inverting curve, or a nominal 2.5 V crossing below 1.4 V or above 2 V indicates a wrong circuit or model.

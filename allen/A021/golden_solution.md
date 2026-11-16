# Golden Solution - A021

## Reference answer

The curve stays at 1 for most of the range and then rises steeply, going to infinity at $v_R = BV = 12$ V (a vertical asymptote).

$M = 1/[1 - (v_R/12)^6]$: 1.000 at 0–2 V, 1.001 at 4 V, 1.016 at 6 V, 1.096 at 8 V, 1.22 at 9 V, 1.50 at 10 V, 1.81 at 10.5 V, 2.46 at 11 V, 4.44 at 11.5 V, 10.4 at 11.8 V, 20.4 at 11.9 V, → ∞ at 12 V.

The knee is around 9–10 V (M exceeds 1.2 at 9 V and reaches 2 at ≈ 10.7 V). Beyond 12 V the expression is not valid: the junction is in breakdown and the current is limited only by the external circuit.

## Grading notes

+2: flat at ≈ 1 up to roughly 7–8 V, a sharp rise with values close to the table (±5%, e.g. ≈ 1.5 at 10 V, ≈ 2.5 at 11 V) and a vertical asymptote at 12 V. A linear or logarithmic vertical axis is fine. +1: correct shape and asymptote with one or two values off. 0: correct shape described in words without any values. −2 (asserted as fact): the multiplication factor decreasing with voltage, an asymptote at a voltage other than 12 V, or values clearly computed with a wrong exponent (e.g. $(v_R/BV)^{1/6}$).

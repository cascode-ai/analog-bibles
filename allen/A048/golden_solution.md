# Golden Solution - A048

## Reference answer

With $K'W/(2L) = 500\ \mu\mathrm{A}/(5 - 0.7)^2 = 27.04\ \mu\mathrm{A/V^2}$ ($K'W/L = 54.1\ \mu\mathrm{A/V^2}$), the curves lie in the third quadrant ($v_{DS} < 0$, $i_D < 0$; equivalently $-i_D$ against $-v_{DS}$). Each starts at the origin, rises parabolically (nonsaturation) and becomes horizontal (λ = 0) at $v_{DS}(\text{sat}) = V_{GS} - V_T$:

- $V_{GS}$ = −1 V: $v_{DS}(\text{sat})$ = −0.3 V, $i_D$ = −2.4 µA
- $V_{GS}$ = −2 V: −1.3 V, −45.7 µA
- $V_{GS}$ = −3 V: −2.3 V, −143 µA
- $V_{GS}$ = −4 V: −3.3 V, −294 µA
- $V_{GS}$ = −6 V: −5.3 V, −760 µA

Construction:
- Nonsaturation ($|v_{DS}| < |V_{GS}| - 0.7$ V): $|i_D| = 54.1\ \mu\mathrm{A/V^2}\,[(|V_{GS}| - 0.7)|v_{DS}| - v_{DS}^2/2]$; saturation: $|i_D| = 27.04\ \mu\mathrm{A/V^2}\,(|V_{GS}| - 0.7)^2$.
- Example points on the −6 V curve: $i_D$ ≈ −260, −465, −617, −714, −757 µA at $v_{DS}$ = −1, −2, −3, −4, −5 V, then −760 µA from −5.3 V on.
- The boundary between the regions is the parabola $|i_D| = 27.04\ \mu\mathrm{A/V^2}\,v_{DS}^2$. The given reference point (−500 µA at $V_{GS} = -5$ V, saturated beyond $v_{DS} = -4.3$ V) lies between the −4 V and −6 V curves.

## Grading notes

+2: curves in the correct quadrant (or clearly labelled as magnitudes), each starting at the origin, saturating at $|v_{DS}| = |V_{GS}| - 0.7$ V and flat beyond, with saturated currents within ±5% of 2.4, 45.7, 143, 294 and 760 µA in magnitude. An additional −5 V curve (500 µA) is fine. +1: correct construction with one curve wrong, or the −6 V curve drawn as the 500 µA curve (−6 read as −5) with everything else right. 0: correct saturation currents but wrong saturation voltages or no nonsaturation region, or the saturation values listed with no curves. −2 (asserted as fact): currents proportional to $|V_{GS}|$, saturation placed at $|v_{DS}| = |V_{GS}|$, positive currents for positive $v_{DS}$ claimed for the p-channel device, or $K'W/L$ taken as 27 µA/V² in the nonsaturation equation (factor-2 error).

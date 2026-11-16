# Golden Solution - A184

## Reference answer

Inverter: $v_{OUT}(\min)$ ≈ −4.85 V. Cascode: $v_{OUT}(\min)$ ≈ −4.92 V. Both pull to within about 0.1–0.15 V of $V_{SS}$; the cascode is even slightly lower because its load current is much smaller (81 µA versus 462 µA), and with $v_{IN} = V_{DD}$ both M1 and M2 are in deep nonsaturation, so the extra series device costs very little.

- Inverter: M2 saturated with $V_{SG2}$ = 5 V: $I = \frac{50}{2}(5-0.7)^2$ µA = 462 µA. M1 nonsaturated with $V_{GS1}$ = 10 V: $462\ \mu\mathrm{A} = 330\ \mu\mathrm{A/V^2}[(9.3)v_{DS1} - v_{DS1}^2/2]$ → $v_{DS1}$ = 0.152 V, i.e. $v_{OUT}(\min) = V_{SS} + (V_{DD}-V_{SS}-V_{T1})\{1-\sqrt{1-(\beta_2/\beta_1)[(V_{DD}-V_{GG2}-|V_{T2}|)/(V_{DD}-V_{SS}-V_{T1})]^2}\}$ = −4.85 V.
- Cascode: M3 saturated with $V_{SG3}$ = 2.5 V: $I = \frac{50}{2}(1.8)^2$ µA = 81 µA. M1 ($V_{GS1}$ = 10 V) and M2 ($V_{GS2} = 5\ \mathrm{V} - v_{DS1}$) nonsaturated: $v_{DS1} \approx I/[\beta_1(9.3)]$ = 0.026 V, $v_{DS2} \approx I/[\beta_2(4.3)]$ = 0.058 V, so $v_{OUT}(\min) \approx V_{SS} + \frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left[\frac{1}{V_{GG2}-V_{SS}-V_{T2}}+\frac{1}{V_{DD}-V_{SS}-V_{T1}}\right]$ = −5 + 0.083 = −4.92 V (the exact nonsaturation equations give the same to 1 mV).
- For context, the lowest output with all transistors still saturated is $V_{SS}+V_{DS1(sat)}$ = −3.33 V for the inverter (at its 462 µA) and $V_{SS}+V_{DS1(sat)}+V_{DS2(sat)}$ = −3.60 V for the cascode at 81 µA, although with $V_{GG2}$ = 0 V M2 actually leaves saturation already at $v_{OUT} = V_{GG2}-V_{T2}$ = −0.7 V.

## Grading notes

+2: inverter −4.85 V and cascode −4.92 V (each ±0.03 V) with M1/M2 in nonsaturation and the load currents 462 µA and 81 µA, plus a comparison noting both are close to $V_{SS}$ (cascode marginally lower because of its smaller current). +1: correct values with an incomplete comparison, or one value off by a slip. 0: correct method for one amplifier only. −2 (asserted as fact): under the stated definition, the cascode's value given as −3.6 V (all-saturated limit) or the inverter's as −3.3 V, M1 treated as saturated with $v_{IN} = V_{DD}$, or the load currents interchanged (e.g. using $V_{GG3}$ = 2.5 V for the inverter load).

# Golden Solution - G080

## Reference answer

$I_{OUT} \approx 2.12$ mA at $V_{CE} = V_{BE}$; with the Early effect $I_{OUT} \approx 2.13$ mA at $V_{OUT} = 1$ V, 2.19 mA at 5 V and 2.60 mA at 30 V. Output resistance $R_o = r_{o3}\|r_{o4}\|r_{o5} = V_A/I_{OUT} \approx 61$ kΩ.

- Q1 and Q2 are diode-connected in parallel (input), Q3–Q5 in parallel (output), all with the same $V_{BE}$: ideal gain 3/2.
- $I_{IN} = (15 - V_{BE})/10\ \mathrm{k\Omega}$ with $V_{BE} = V_T\ln(I_C/I_S) \approx 0.668$ V: $I_{IN} \approx 1.433$ mA.
- KCL at the input node: $I_{IN} = 2I_C + 5I_C/\beta_F$, so $I_C = I_{IN}/(2 + 5/\beta_F) = 0.708$ mA and $I_{OUT} = 3I_C = \dfrac{1.5\,I_{IN}}{1 + 2.5/\beta_F} = 2.123$ mA (1.2 % below the 2.150 mA obtained without base currents).
- Early effect: $I_{OUT} = 3I_C\,[1 + (V_{OUT} - V_{BE})/V_A]$: 2.129 mA (1 V), 2.194 mA (5 V), 2.602 mA (30 V).
- Each output transistor has $r_o = V_A/I_C \approx 184$ kΩ; three in parallel give $R_o = V_A/I_{OUT} \approx 61$ kΩ. (With $I_C = I_Se^{V_{BE}/V_T}(1 + V_{CE}/V_A)$ the exact slope gives $R_o = (V_A + V_{OUT})/I_{OUT}(V_{OUT}) = V_A/(3I_Se^{V_{BE}/V_T}) \approx 61.5$ kΩ, independent of $V_{OUT}$.)

## Grading notes

+2: mirror ratio 3/2 with the base-current correction $1/(1 + 2.5/\beta_F)$ (or the equivalent KCL $I_{IN} = I_C(2 + 5/\beta_F)$), the three currents within ±1.5 % of 2.13, 2.19 and 2.60 mA, and $R_o$ ≈ 61 kΩ (59–64 kΩ). Using $V_{BE} = 0.7$ V, or the form $(1 + V_{CE2}/V_A)/(1 + V_{CE1}/V_A)$, is fine. +1: correct method with one arithmetic slip, or the base-current correction approximated as $(1 - 2.5/\beta_F)$, or the ≈ 61 kΩ result accompanied by $V_A/I_{OUT}$ evaluated at each $V_{OUT}$ (≈ 59 kΩ at 5 V, ≈ 50 kΩ at 30 V) as if $R_o$ varied with $V_{OUT}$, everything else right. 0: base currents ignored (2.155, 2.221, 2.635 mA) with everything else right, or the Early effect omitted so that the three currents are equal. -2 (asserted as fact): wrong mirror ratio (1:1, 3:1, 2:3 from misreading the figure), base currents increasing the output current, a correction factor like $2/\beta_F$ instead of the five-base count, or $R_o$ taken as the $r_o$ of a single transistor (≈ 180 kΩ) or as $\beta_0 r_o$.

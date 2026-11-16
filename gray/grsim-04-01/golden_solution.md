# Golden Solution - grsim-04-01

## Reference answer

Hand analysis (base currents ignored): $I_{IN} = (15 - V_{BE})/10\ \mathrm{k\Omega} \approx 1.433$ mA ($V_{BE} \approx 0.668$ V at ≈ 0.72 mA per device); mirror ratio 3/2 (Q1, Q2 diode-connected input; Q3–Q5 output) → $I_{OUT} = 2.150$ mA at $V_{CE} = V_{BE}$. With the Early effect, $I_{OUT} = 2.150\ \mathrm{mA}\times[1 + (V_{OUT} - V_{BE})/V_A]$: 2.155 mA (1 V), 2.221 mA (5 V), 2.635 mA (30 V). $R_o = r_{o3}\|r_{o4}\|r_{o5} = V_A/I_{OUT} \approx 60.5$ kΩ.

Expected simulation (Gummel-Poon model with IS = 5e-15, BF = 200, VAF = 130): the simulator includes the base currents, so its currents are about 1.2 % lower (≈ 2.13, 2.19, 2.60 mA; factor $1/(1 + 2.5/\beta_F)$), and its Early model $I_C \propto (1 + V_{CE}/V_A)$ gives the ratio form $(1 + V_{OUT}/V_A)/(1 + V_{BE}/V_A)$ (≈ 0.1 % difference). The simulated slope of $I_{OUT}$ vs $V_{OUT}$ is ≈ 16.5 µA/V (≈ 61 kΩ).

## Grading notes

A correct result gives the hand values (2.155, 2.221, 2.635 mA within ±1.5 %, $R_o$ ≈ 60–62 kΩ, mirror ratio 3/2) and a simulation (if reported) that agrees within ≈ 2 % once the base-current effect (≈ −1.2 %) is accounted for. A 1:1 or 3:1 ratio, or $R_o$ equal to a single transistor's $r_o$ (≈ 180 kΩ), is wrong.

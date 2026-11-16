# Golden Solution - A406

## Reference answer

Gain ≈ 6.6 V/V (6.4 including output conductances); $f_{-3dB} \approx 5.1$–5.3 MHz.
- Each branch carries 25 µA. $g_{m1} = \sqrt{2\cdot110\cdot40\cdot25}\ \mu\mathrm{S} = 469\ \mu$S, $g_{m3} = \sqrt{2\cdot50\cdot2\cdot25}\ \mu\mathrm{S} = 70.7\ \mu$S.
- Gain: $A_v = g_{m1}/g_{m3} = \sqrt{(110\cdot40)/(50\cdot2)} = 6.63$; with $g_{ds1}+g_{ds3} = 1+1.25\ \mu$S added to $g_{m3}$, 6.43.
- Capacitance per output node (differential half circuit: the floating $C_L$ appears as $2C_L$ = 2 pF to ground): $C_{bd1} = 770\ \mu\mathrm{F/m^2}\times200\ \mu\mathrm{m^2} = 154$ fF, $C_{gd1} = 220\ \mathrm{pF/m}\times40\ \mu\mathrm{m} = 8.8$ fF, $C_{bd3} = 560\times10\ \mu\mathrm{m^2} = 5.6$ fF, $C_{gs3} = \tfrac23(2)(1)(2.47) + 0.44 = 3.7$ fF → $C \approx 2.17$ pF (≈ 2.21 pF with junction sidewalls).
- $f_{-3dB} = g_{m3}/(2\pi C) = 70.7\ \mu\mathrm{S}/(2\pi\cdot2.17\ \mathrm{pF}) \approx 5.2$ MHz (5.1 MHz with sidewalls; 5.3 MHz if the output conductances are added to $g_{m3}$).

## Grading notes

+2: gain 6.4–6.7 and bandwidth 5.0–5.4 MHz with the $2C_L$ (differential) loading and the main parasitic ($C_{bd1}$ ≈ 0.15 pF) included. Small differences in the parasitic estimate (junction sidewalls in or out, $C_{ox}WL$ instead of $\tfrac23C_{ox}WL$ for $C_{gs3}$) that keep the bandwidth within 5.0–5.4 MHz are not errors. +1: parasitics ignored (5.6 MHz) with everything else right, or one slip. 0: gain right but bandwidth computed with $C_L$ instead of $2C_L$ (≈ 10 MHz) or in rad/s unlabelled. −2 (asserted as fact): gain computed as $g_{m1}r_{ds}$ (diode loads ignored), M3–M4 treated as current sources, or the pole computed with $g_{m1}$.

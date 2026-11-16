# Golden Solution - A407

## Reference answer

Gain ≈ 6.9 V/V (7.4 without output conductances); $f_{-3dB} \approx 2.6$ MHz.
- Currents: M1, M2 carry 25 µA each; M5, M6 supply 20 µA, so the diode loads M3, M4 carry only 5 µA.
- $g_{m1} = \sqrt{2\cdot110\cdot10\cdot25}\ \mu\mathrm{S} = 234.5\ \mu$S; $g_{m3} = \sqrt{2\cdot50\cdot2\cdot5}\ \mu\mathrm{S} = 31.6\ \mu$S.
- Node conductance: $g_{m3}+g_{ds3}+g_{ds5}+g_{ds1} = 31.62+0.25+1.0+1.0 = 33.9\ \mu$S → $A_v = 234.5/33.9 = 6.92$ (ideal $g_{m1}/g_{m3} = 7.42$): the current injection raises the gain from $\sqrt{(110\cdot10)/(50\cdot2)} = 3.3$ to ≈ 7 with a small M1.
- Capacitance per node: $2C_L = 2$ pF plus $C_{bd1}$ (38.5 fF), $C_{gd1}$ (2.2 fF), $C_{bd3}$, $C_{bd5}$ (5.6 fF each), $C_{gs3}$ (3.7 fF), $C_{gd5}$ (0.4 fF) ≈ 2.06 pF (≈ 2.08 pF with sidewalls).
- $f_{-3dB} = 33.9\ \mu\mathrm{S}/(2\pi\cdot2.06\ \mathrm{pF}) \approx 2.6$ MHz (≈ 2.4–2.5 MHz if only $g_{m3}$ is used).

## Grading notes

+2: the 5 µA load current identified, gain 6.8–7.5, bandwidth 2.4–2.7 MHz with $2C_L$ loading and the junction and overlap parasitics included. +1: parasitics ignored (≈ 2.5–2.7 MHz) with everything else right, or one small numerical slip that leaves both final values close to 6.9 V/V and 2.6 MHz. 0: gain right but the final bandwidth wrong because of a computational or unit slip (e.g. 2.6 GHz from a power-of-ten error, or rad/s given as Hz), or currents misread (e.g., loads taken at 25 µA → gain ≈ 3.3) but the method otherwise right. −2 (asserted as fact): M5/M6 assumed to sink current from the outputs, gain computed as $g_{m1}r_{ds}$, or $C_L$ used instead of $2C_L$ with a claim of ≈ 5 MHz.

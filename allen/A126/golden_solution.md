# Golden Solution - A126

## Reference answer

$f_{-3\,\mathrm{dB}} \approx 1.39$ MHz.

- M1 and M2 carry 100 µA, so $g_{ds1} + g_{ds2} = (0.04 + 0.05) \cdot 100\ \mu = 9\ \mu$S ($R_{out} = 111$ kΩ, gain $-g_{m1}/9\ \mu\mathrm{S} = -52$).
- Output node capacitance: $C_{gdn}$ (M1, to the ideal-source input), $C_{gdp}$ (M2, to its gate, which sits on the low-impedance diode node of M3, ≈ ac ground), $C_{bdn}$, $C_{bdp}$, $C_L$: 5 + 5 + 10 + 10 + 1000 = 1030 fF. $C_{gsn}$ is across the input source, and $C_{gsp}$ (M2, M3) sits at the mirror node, whose pole ($\approx g_{m3}/(2C_{gsp})$, GHz range) is far away.
- $f_{-3\,\mathrm{dB}} = 9\ \mu\mathrm{S}/(2\pi \cdot 1.03\ \mathrm{pF}) = 1.39$ MHz. The RHP zero $g_{m1}/C_{gdn} = 469\ \mu/5\ \mathrm{fF}$ is at ≈ 15 GHz.

## Grading notes

+2: 1.35–1.42 MHz (including or omitting the 10 fF $C_{gdp}$, $C_{gs}$ terms correctly excluded). +1: a small capacitance misallocation that changes the result by < 5 %. 0: the right conductance but a wrong capacitance set (5–20 % off). −2 (asserted as fact): $C_{gdn}$ Miller-multiplied by the gain at the output (≈ 1.1 MHz), the mirror node taken as dominant, $R_{out} = 1/g_{m2}$, or rad/s reported as Hz.

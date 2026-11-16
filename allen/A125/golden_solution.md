# Golden Solution - A125

## Reference answer

$f_{-3\,\mathrm{dB}} \approx 2.51$ MHz.

- Output conductance: $g_{ds1} + g_{ds2} = 5 + 4 = 9\ \mu$S ($R_{out} = 111$ kΩ).
- Capacitance at the output: $C_{gd1}$ (to the input, which is an ideal source), $C_{gd2}$ (M2's gate at ac ground), $C_{bd1}$, $C_{bd2}$, $C_L$: total 5 + 5 + 30 + 30 + 500 = 570 fF.
- $f_{-3\,\mathrm{dB}} = 9\ \mu\mathrm{S}/(2\pi \cdot 570\ \mathrm{fF}) = 2.51$ MHz. The RHP zero $g_{m1}/C_{gd1} = 223.6\ \mu/5\ \mathrm{fF}$ is at 7.1 GHz.

## Grading notes

+2: 2.45–2.58 MHz (leaving out the two 5 fF $C_{gd}$ terms gives 2.56 MHz, fine). +1: a larger capacitance missing or a small slip. 0: the right method but the conductance or capacitance sum wrong in a way that changes the result by > 15 %, or the correct pole with rad/s reported as Hz (15.8 "MHz"; a unit slip). −2 (asserted as fact): $C_{gd1}$ Miller-multiplied by the gain at the output (≈ 2.1 MHz), or $R_{out} = r_{ds1}$ alone. An answer that boxes the Miller-multiplied ≈ 2.1 MHz as its result (e.g. as "the intended answer") and mentions the exact 2.51 MHz only as a side remark has chosen the wrong value: −2; it is not a hedged choice between alternatives.

# Golden Solution - A300

## Reference answer

One design: $W_1 = W_2 = 90\ \mu$m; $W_3 = W_4 = W_6 = W_7 = W_8 = 40\ \mu$m; $W_9 = W_{10} = W_{11} = 18\ \mu$m (19 µm for margin); $W_5 = 11\ \mu$m; $I_5 = 250\ \mu$A; $P_{diss} = 2.5$ mW; $A_{vd} \approx 1.7\times10^4$ V/V; $V_{BP} = 3.3$ V; $V_{BN} = 1.7$ V.

- Topology: diode loads M3, M4 with 1:1 mirrors M8 and M6; M8's current is turned around by M9/M10; M7 and M11 are output cascodes. Gain $A_{vd} = g_{m1}R_{out}$ (mirror gain 1).
- Slew rate: when the input is overdriven all of $I_5$ flows in one diode and is mirrored 1:1 to the output, so $I_5 = SR\cdot C_L = 10\ \mathrm{V/\mu s}\times25$ pF = 250 µA; quiescent 125 µA in every branch.
- $V_{out}(\max) = 4$ V: $V_{SD6}(\mathrm{sat}) + V_{SD7}(\mathrm{sat}) = 1$ V, 0.5 V each at the maximum (slewing) current 250 µA: $S = 2(250)/(50\cdot0.25) = 40$ → $W_6 = W_7 = 40$ µm, and $W_3 = W_4 = W_8 = 40$ µm for 1:1 mirrors.
- $V_{out}(\min) = 1$ V: $V_{DS10}(\mathrm{sat}) + V_{DS11}(\mathrm{sat}) = 1$ V: $S = 2(250)/(110\cdot0.25) = 18.2$ → 18–19 µm for M9, M10, M11.
- $GB = g_{m1}/C_L$: $g_{m1} = 2\pi(10\ \mathrm{MHz})(25\ \mathrm{pF}) = 1.571$ mS at 125 µA → $S_1 = g_{m1}^2/(2K'_N\cdot125\,\mu) = 89.7$ → 90 µm.
- $V_{ic}(\max) = V_{DD} - V_{SG3} + V_{TN} = 5 - (0.7 + \sqrt{2\cdot125/(50\cdot40)}) + 0.7 = 4.65$ V ≥ 4 V ✓.
- $V_{ic}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = V_{DS5}(\mathrm{sat}) + 0.7 + 0.159 = 1.5$ V → $V_{DS5}(\mathrm{sat}) = 0.64$ V → $S_5 = 2(250)/(110\cdot0.641^2) = 11.1$ → 11 µm.
- Bias voltages: $V_{BP} = V_{DD} - V_{SD6}(\mathrm{sat}) - V_{SG7} = 5 - 0.5 - 1.2 = 3.3$ V; $V_{BN} = V_{DS10}(\mathrm{sat}) + V_{GS11} = 0.5 + 1.2 = 1.7$ V.
- Power: $5\ \mathrm{V}\times(I_5 + I_9 + I_{10}) = 5\times(250+125+125)\ \mu\mathrm{A} = 2.5$ mW.
- Gain at 125 µA: $g_{m1} = 1.573$ mS; $R_{out} = (g_{m11}r_{ds11}r_{ds10})\,\|\,(g_{m7}r_{ds7}r_{ds6}) = (704\,\mu\cdot200\,\mathrm{k}\cdot200\,\mathrm{k} = 28.1\ \mathrm{M\Omega})\,\|\,(707\,\mu\cdot160\,\mathrm{k}\cdot160\,\mathrm{k} = 18.1\ \mathrm{M\Omega}) = 11.0$ MΩ → $A_{vd} \approx 1.73\times10^4$.

## Grading notes

Design problem: accept any design that meets every specification with correct supporting calculations (slew rate from the current available to $C_L$, output swing from the saturation voltages of the series devices, $GB = g_{m1}/C_L$ with the mirror gain used, ICMR limits from M5 and the diode loads), and correct reporting of $I_5$, $P_{diss}$, $A_{vd}$, $V_{BP}$, $V_{BN}$ for that design. The reference values (90/40/18/11 µm, 250 µA, 2.5 mW, ≈ 1.7×10⁴, 3.3 V, 1.7 V) are typical; designs that size the output devices for the 125-µA quiescent current, or use $I_5$ = 500 µA (more power, still meeting specs), are acceptable if consistent. +1: valid design with one wrong derived quantity (e.g. the gain or one bias voltage). 0: several W values right but a specification left unchecked or violated by a slip. −2 (asserted as fact): a design that violates a specification while claiming to meet it (e.g. $V_{out}(\max)$ or $V_{ic}(\min)$ not achieved), $GB$ computed as $g_{m1}/(2C_L)$ or with $C_L$ omitted, or the slew rate taken as $I_5/(2C_L)$ while claiming 10 V/µs with $I_5$ = 250 µA.

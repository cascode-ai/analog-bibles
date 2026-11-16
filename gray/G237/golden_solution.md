# Golden Solution - G237

## Reference answer

$T_0 \approx 2.05$ ns → $f_{-3\text{dB}} \approx 78$ MHz (gain −9.68).

- $M_1$: $I_D = 10\ \mu$A, $g_{m1} = 0.274$ mA/V ($1/g_{m1} = 3.65\ \mathrm{k\Omega}$), $V_{ov1} = 0.073$ V → source at −1.073 V. $M_2$: $I_D = 0.5$ mA, $g_{m2} = 1.94$ mA/V, $V_{ov2} = 0.516$ V → source at −2.59 V; drain at 6 − 2.5 = 3.5 V.
- $C_{gs} = 74.7 + 15 = 89.7$ fF, $C_{gd} = 15$ fF; $C_{sb0} = C_{db0} = 240$ fF; $C_{sb1}$ ($V_{SB} = 4.93$ V) = 79.1 fF; $C_{db2}$ ($V_{DB} = 9.5$ V) = 58.5 fF. In the DM half-circuit $M_2$'s source is ac ground ($C_{sb2}$ shorted) and $M_1$'s drain is at ac ground ($C_{db1}$ shorted).
- Time constants: $C_{gs1}$ (unloaded follower, gate to source): $1/g_{m1}$ → 0.33 ns; $C_{gd1}$ (gate to ground): 10 kΩ → 0.15 ns; $C_{sb1} + C_{gs2}$ (node to ground): $1/g_{m1}$ → 0.29 + 0.33 ns; $C_{gd2}$: $3.65\ \mathrm{k} + 5\ \mathrm{k} + g_{m2}(5\ \mathrm{k})(3.65\ \mathrm{k}) = 44.0\ \mathrm{k\Omega}$ → 0.66 ns; $C_{db2}$: 5 kΩ → 0.29 ns.
- $T_0 = 2.05$ ns → 77.8 MHz (exact half-circuit analysis: ≈ 123 MHz, complex poles).

## Grading notes

+2: $f_{-3\text{dB}}$ ≈ 70–86 MHz from the zero-value sum (or a derived exact value ≈ 120 MHz), with the follower resistance $1/g_{m1}$ (not the 10-kΩ resistor) seen at the intermediate node and $C_{sb1}$, $C_{db2}$ evaluated at their bias voltages. +1: junction capacitances taken at zero bias or overlap omitted (result within ±25%). 0: method right but one dominant resistance wrong by > 2× (e.g., $R_S$ used at the follower output). −2 (asserted as fact): bipolar-style $r_\pi$ terms, the gate resistor seen by $C_{gs2}$, or a bandwidth below 20 MHz presented as the answer.

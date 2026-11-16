# Golden Solution - A084

## Reference answer

$W_1/L_1 \approx 1/22$ (≈ 0.045), for example $W_1 = 1\ \mu$m, $L_1 = 22\ \mu$m.

- Output resistance of either circuit: $r_{out} = r_{ds2}(1 + g_{m2}R_S) + R_S$, where $R_S$ is the resistance from M2's source to ground. The same $r_{out}$ (≈ 19 MΩ) requires the diode-connected M1 to present $R_S = 100$ kΩ.
- A diode-connected transistor has $R_S = 1/(g_{m1} + g_{ds1}) \approx 1/g_{m1}$, so $g_{m1} = 10\ \mu\mathrm{A/V}$.
- $g_{m1} = \sqrt{2K'(W/L)_1I}$ → $(W/L)_1 = g_{m1}^2/(2K'I) = (10\ \mu)^2/(2\times110\ \mu\times10\ \mu) = 0.0455 = 1/22$. (Keeping $g_{ds1}$ = 0.4 µA/V gives $g_{m1}$ = 9.6 µA/V and $W/L$ ≈ 1/24. Using the given saturation equation exactly, with $(1+\lambda V_{GS1})$ in the bias equation and $g_{ds1} = \lambda I/(1+\lambda V_{DS1})$, gives $V_{ON1}$ = 2.07 V and $(W/L)_1$ ≈ 0.038 ≈ 1/26. All three are correct to the precision of the model.)
- Consequence: $V_{ON1} = \sqrt{2I/(K'(W/L)_1)} = 2.0$ V, so $V_{GS1} = 2.7$ V, a large voltage drop.

## Grading notes

+2: $(W/L)_1$ between 1/20 and 1/27 (≈ 0.037–0.050), from requiring $1/g_{m1}$ (or $1/(g_{m1} + g_{ds1})$) = 100 kΩ. All of these are correct: 1/22 neglecting $g_{ds1}$; ≈ 1/24 keeping $g_{ds1} = \lambda I$; ≈ 0.038 (1/26) when the $(1+\lambda v_{DS})$ factor of the given saturation equation is also kept in the dc bias equation of M1. +1: correct condition with an arithmetic slip. 0: correct idea (the diode's small-signal resistance must equal 100 kΩ) with no or a wrong size. −2 (asserted as fact): $W/L$ = 22 (ratio inverted), $W/L$ chosen so that the diode's large-signal $V_{GS}/I$ equals 100 kΩ (giving a different size), or the diode resistance taken as $r_{ds1}$.

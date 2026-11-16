# Golden Solution - A211

## Reference answer

$v_{OUT}(\max)$ ≈ +1.55 V.

At $v_{IN}$ = +2.5 V M1 is saturated ($V_{DS1} = V_{GS1}$) and supplies the sink current plus the resistor current: $5.5\ \mathrm{mA/V^2}(2.5 - v_{OUT} - 0.7)^2 = 200\ \mu\mathrm{A} + v_{OUT}/10\ \mathrm{k\Omega}$ → $v_{OUT}$ = 1.546 V (M1 carries 355 µA).

## Grading notes

+2: 1.52–1.57 V from the KCL equation. +1: ≈ 1.55 V via an approximation, or a slip. 0: 1.8 V ($v_{IN}-V_T$) with sound reasoning otherwise. −2 (asserted as fact): +2.0 V (the value of the p-channel version), +2.5 V, or M1 assumed off at the maximum.

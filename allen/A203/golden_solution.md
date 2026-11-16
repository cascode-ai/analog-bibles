# Golden Solution - A203

## Reference answer

One design: $W_2/L_2$ = 38 µm/1 µm and $W_1/L_1$ = 3 µm/1 µm.

- Slew current: $I = C_L\cdot SR$ = 1 nF × 5 V/µs = 5 mA (the load-resistor current is zero at $v_{OUT}$ = 0).
- Positive slew is limited by the fixed current of M2 ($V_{SG2}$ = 5 − 2 = 3 V, saturated at $v_{OUT}$ = 0): $I_Q = \frac{K'_P}{2}\frac{W_2}{L_2}(3-0.7)^2 \ge 5$ mA → $W_2/L_2 \ge 37.8$ → 38 ($I_Q$ = 5.03 mA).
- Negative slew: M1 must sink $I_Q$ + 5 mA ≈ 10 mA with $v_{IN} = V_{DD}$ ($V_{GS1}$ = 10 V). At $v_{OUT}$ = 0, $V_{DS1}$ = 5 V < $V_{GS1}-V_T$ = 9.3 V, so M1 is in nonsaturation: $110\ \mu\mathrm{A/V^2}(W_1/L_1)[9.3\cdot5 - 5^2/2] = 3.74\ \mathrm{mA}\cdot(W_1/L_1) \ge 10$ mA → $W_1/L_1 \ge 2.7$ → 3 (sinks 11.2 mA, SR⁻ ≈ 6.2 V/µs).
- Swing check, +3 V: M2 is then in nonsaturation ($V_{SD2}$ = 2 V) but can still supply $1.9\ \mathrm{mA/V^2}(2.3\cdot2 - 2) $ = 4.9 mA ≫ the 0.3 mA needed by $R_L$, with M1 nearly off. −3 V: M1 ($V_{DS1}$ = 2 V) can sink $330\ \mu\mathrm{A/V^2}(9.3\cdot2-2)$ = 5.48 mA ≥ $I_Q$ + 0.3 mA = 5.33 mA. So ±3 V is reached.
- (Using the saturation-region expression for M1 instead gives $W_1/L_1 \ge 2.1$, which is optimistic: with 2.1 M1 sinks only ≈ 7.9 mA at $v_{OUT}$ = 0. If the slew rate had to hold over the entire ±3 V range, roughly $W_1/L_1$ ≈ 6 and $W_2/L_2$ ≈ 41 would be needed.)

## Grading notes

This is a design problem: accept any design that meets every stated specification with correct supporting calculations. +2: $W_2/L_2 \gtrsim 38$ from $I_Q \ge$ 5 mA, $W_1/L_1$ large enough that M1 (checked in nonsaturation, or with a larger margin) sinks ≥ $I_Q$ + 5 mA at $v_{OUT}$ = 0, and the ±3 V swing checked (or a design with comfortably larger ratios and correct checks). +1: the book-style design (38 and 3) obtained with the saturation formula for M1 and rounding up, without noticing M1's nonsaturation, or a sound design with the swing check missing. 0: only one transistor sized correctly. −2 (asserted as fact): a design that fails a specification presented as meeting it (e.g. $W_1/L_1$ ≈ 2 claimed sufficient, or $I_Q$ chosen from the 0.3-mA load current alone), or $V_{GG2}$ = 2 V taken as the source–gate voltage.

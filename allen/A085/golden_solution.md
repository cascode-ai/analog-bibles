# Golden Solution - A085

## Reference answer

(1) $v_{OUT}(\min) \approx 1.30$ V. (2) The diode-loaded cascode needs ≈ 3.0 V. For the same output resistance, the resistor-degenerated sink of [Fig. 1] needs 1.7 V less headroom and is the better choice where voltage swing matters, as it usually does.

- (1) $V_{ON} = \sqrt{2I/(K'W/L)} = \sqrt{2\times10\ \mu/(110\ \mu\times2)} = 0.302$ V. The source sits at $IR = 10\ \mu\mathrm{A}\times100\ \mathrm{k\Omega} = 1.0$ V ($V_{GG}$ = 1.0 + 0.7 + 0.302 = 2.0 V). Saturation needs $v_{OUT} \ge V_S + V_{ON} = 1.30$ V.
- (2) M1: $V_{GS1} = 0.7 + \sqrt{2\times10\ \mu\times22/110\ \mu} = 0.7 + 2.0 = 2.7$ V, so M2's source is at 2.7 V and $v_{OUT}(\min) = 2.7 + 0.302 = 3.0$ V.
- The diode needs a tiny $W/L$ to present 100 kΩ, which forces a 2-V overdrive; the resistor drops only 1 V. The diode version saves the area of a 100-kΩ resistor, but it needs a 22-µm-long device and costs ≈ 1.7 V of output swing.

## Grading notes

+2: 1.30 V (±0.03) for the resistor sink and ≈ 3.0 V (2.95–3.05) for the diode-loaded cascode, with the conclusion that the resistor version (lower minimum voltage) is better for swing. +1: correct numbers with the diode version preferred for a stated, valid reason (no large resistor) while acknowledging its higher minimum voltage, or correct numbers with no clear choice. 0: one of the two minimum voltages right. −2 (asserted as fact): the diode-loaded cascode claimed to have the lower minimum output voltage, $v_{OUT}(\min)$ taken as $V_{GG} - V_T$ with a wrong $V_{GG}$, or the minimum voltage of [Fig. 1] given as $V_{ON}$ alone (0.30 V).

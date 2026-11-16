# Golden Solution - G139

## Reference answer

$V_o^+ = +14.1$ V and $V_o^- = -14.1$ V.
- Positive: $Q_7$ (pnp current source) saturates, so the base of $Q_2$ reaches $V_{CC} - V_{CE7(\text{sat})} = 14.8$ V and $V_o^+ = 14.8 - 0.7 = 14.1$ V. Drive check: $Q_2$ needs $I_B = 14.1\ \mathrm{mA}/151 = 93\ \mu$A < 0.15 mA, so $Q_7$ can indeed saturate. $Q_2$ itself cannot saturate (collector at $V_{CC}$).
- Negative: $Q_1$ saturates, the base of $Q_3$ is at $-15 + 0.2 = -14.8$ V, and $V_o^- = -14.8 + |V_{BE3}| = -14.1$ V. Equivalently, the composite $Q_3$–$Q_4$ pnp saturates at $|V_{CE3(\text{sat})}| + V_{BE4} = 0.9$ V above $-V_{CC}$: also −14.1 V, so both conditions coincide.

## Grading notes

+2: ±14.1 V (±0.1 V) with the correct limiting mechanisms ($Q_7$ saturation for the positive side; $Q_1$ saturation / composite saturation $|V_{CE3(\text{sat})}| + V_{BE4}$ for the negative side). +1: correct values with one mechanism misidentified or misdescribed (e.g. a wording slip about which terminal of $Q_3$ is which, when the relation actually used is right), or negative limit −14.3 V/−14.6 V from a junction slip. 0: exactly one limit right and the other wrong (e.g. +14.1 V with −14.8 V from $Q_4$ saturation alone, or −14.1 V with a positive limit claimed to be drive-limited for this load). −2 (asserted as fact): both limits wrong, e.g. ±14.8 V from the output transistors saturating.

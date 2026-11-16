# Golden Solution - G140

## Reference answer

$Q_7$: 0.15 mA; $Q_5$, $Q_6$: ≈ 0.146 mA; $Q_2$: ≈ 0.566 mA; $Q_3$: ≈ 3.8 µA; $Q_4$: ≈ 0.566 mA; $Q_1$: ≈ 0.146 mA.
- Loop from the base of $Q_2$ to the base of $Q_3$: $V_{BE6} + V_{BE5} = V_{BE2} + |V_{BE3}|$, so $I_D^2/I_{Sn}^2 = I_{C2}|I_{C3}|/(I_{Sn}I_{Sp})$, i.e. $I_{C2}|I_{C3}| = I_D^2(I_{Sp}/I_{Sn}) = I_D^2/10$.
- Composite pnp: $Q_3$'s collector current is $Q_4$'s base current, $I_{C4} = 150|I_{C3}|$. With $V_o = 0$ the current from $Q_2$'s emitter equals the composite's emitter current: $I_{C2}(151/150) = |I_{C3}|(31/30) + 150|I_{C3}|$, so $|I_{C3}| \approx I_{C2}/150$.
- Then $I_{C2}^2/150 = I_D^2/10$ → $I_{C2} = \sqrt{15}\,I_D = 3.873I_D$; with $I_D = 0.15\ \mathrm{mA} - I_{C2}/150$: $I_D = 0.1462$ mA, $I_{C2} = 0.566$ mA, $|I_{C3}| = 3.78\ \mu$A, $I_{C4} = 0.566$ mA.
- $Q_1$ sinks the diode current plus $Q_3$'s base current (0.13 µA): $I_{C1} \approx 0.146$ mA.

## Grading notes

+2: $Q_2$ and $Q_4$ ≈ 0.57 mA (0.53–0.60), $Q_3$ ≈ 3.8 µA (≈ $I_{C2}/150$), diodes and $Q_1$ ≈ 0.146 mA (0.14–0.15), $Q_7$ 0.15 mA, using the $I_S$ ratio of the pnp and the composite current gain. +1: same structure but $Q_2$'s base current neglected (diodes 0.15 mA, $Q_2$ ≈ 0.58 mA) or a small slip. 0: output currents taken equal to the diode current (0.15 mA, ignoring the $I_S$ and composite scaling) with the rest consistent. −2 (asserted as fact): $Q_4$ current equal to $Q_3$'s current, the composite treated as a single pnp with $I_S = 10^{-15}$ A giving $Q_2$ and $Q_4$ currents off by more than a factor 3, or $Q_1$ carrying the output-stage current.

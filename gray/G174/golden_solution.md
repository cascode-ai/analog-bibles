# Golden Solution - G174

## Reference answer

$I_{C75(max)} \approx 16$ mA ($I_{C71} \approx 0.56$ mA at the limit).

- $Q_{70}$ has its base and collector both tied to the collector of $Q_{71}$ (bottom of $R_{70}$), so it acts as a diode from node 18 to that node. It turns on when $V_{18} - V_{C71} = V_{EB70(on)}$.
- $V_{18} = V_{CC} - |I_{C18}|R_{18} = V_{CC} - 21\ \mu\mathrm{A}\times9.3\ \mathrm{k\Omega} = V_{CC} - 0.195$ V and $V_{C71} = V_{CC} - I_{C71}R_{70}$. Turn-on: $I_{C71}R_{70} = 0.7 + 0.195$ V, so $I_{C71} = 0.895\ \mathrm{V}/1.6\ \mathrm{k\Omega} = 0.56$ mA.
- Once $Q_{70}$ conducts, it draws current out of node 18. That lowers $V_{18}$ and cuts $|I_{C18}|$, the current that pulls node 26 up and drives $Q_{68}$/$Q_{75}$. Further increase of $I_{C75}$ is therefore prevented: a current limit.
- Relating $I_{C75}$ to $I_{C71}$ (same base voltage, $R_{71}$ in $Q_{71}$'s emitter): $V_{BE75} = V_{BE71} + I_{C71}R_{71}$, so
  $I_{C75} = \dfrac{I_{S75}}{I_{S71}}I_{C71}\exp\!\left(\dfrac{I_{C71}R_{71}}{V_T}\right) = 10\times0.56\ \mathrm{mA}\times e^{28\,\mathrm{mV}/26\,\mathrm{mV}} = 5.6\ \mathrm{mA}\times2.93 \approx 16$ mA.
- (Equivalently $V_{BE71} = V_T\ln(0.56\ \mathrm{mA}/6\times10^{-18}\ \mathrm{A}) = 0.837$ V, $V_{BE75} = 0.865$ V, $I_{C75} = I_{S75}e^{V_{BE75}/V_T} = 16$ mA.) This roughly matches the ≈16-mA limit on the sourcing side and covers a 10-mA output requirement.

## Grading notes

+2: about 16 mA (15–18 mA; counting the ≈21 µA that $Q_{70}$ diverts into $I_{C71}$, giving ≈17.7 mA, also earns +2), using both the $R_{18}$ drop (node 18 at $V_{CC} - 0.195$ V) and the emitter degeneration $R_{71}$ (exponential factor ≈ 2.9 on top of the area ratio 10), with $Q_{70}$ recognized as a diode that turns on at $I_{C71}R_{70} \approx 0.9$ V. +1: the $R_{18}$ drop neglected (node 18 taken as $V_{CC}$), giving ≈ 10 mA, with the rest correct. 0: $R_{71}$'s effect neglected but otherwise correct (≈ 5.6 mA), with the reasoning clearly set out; or the right method with an arithmetic slip. -2 (asserted as fact): $I_{C75} = 10\,I_{C71}$ with $I_{C71} = 0.7/1.6$ kΩ (4.4 mA) presented as exact while ignoring both effects, $Q_{70}$ treated as a normal transistor amplifying the current, or a limit set by $\beta$ (e.g. $\beta^2\times21\ \mu$A ≈ 34 mA) claimed as the answer.

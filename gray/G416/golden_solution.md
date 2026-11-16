# Golden Solution - G416

## Reference answer

$a_{cmc} = -g_{m7}(r_{o6}\|r_{o7}) \approx -66.7$.

- $M_7$ and $M_9$ each carry 100 μA at $V_{ov} = 0.2$ V: $g_{m7} = 1$ mA/V.
- With the tail fixed, the mirrored PMOS currents in $M_6$, $M_8$ do not change; $M_7$ ($M_9$) acts as a common-source amplifier whose load is $r_{o6}\|r_{o7} = 200\|100 = 66.7$ kΩ.
- Raising the NMOS gates increases their current and pulls both outputs down: $a_{cmc} \approx -66.7$.

## Grading notes

+2: ≈ −66.7 (±5%) with negative sign. +1: magnitude right, sign missing or wrong. 0: correct method with a numerical slip. −2 (asserted as fact): positive gain, or load taken as only $r_{o7}$ or as $r_{o6}$ alone without justification (e.g. −100 or −200).

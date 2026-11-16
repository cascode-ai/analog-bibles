# Golden Solution - G384

## Reference answer

$Z_{id}$ is a capacitor of about 1.43 pF and $Z_{ic}$ a capacitor of about 60 fF.
- T-network: each series element $Z_{id}/2$ is a 2.87-pF capacitor; the shunt element $Z_{ic}/2 - Z_{id}/4$ is about 124 fF.
- π-network: each shunt $Z_{ic}$ is about 60 fF; the bridging element $Z_{id}\|(-2Z_{ic})$ is about 1.40 pF.

Derivation ($g_{m1} = 1$ mA/V, $r_{o5h} = 200$ kΩ, $a_{dm} = -133.3$, $a_{cm} \approx -1.98$):
- DM: $C_{idh} = C_{gs} + C_{gd}(1 - a_{dm}) = 180 + 20(134.3) = 2867$ fF; $Z_{id}$ ↔ $C_{idh}/2 = 1.43$ pF.
- CM: $C_{ich} = C_{gs}/(1 + g_{m1}r_{o5h}) + C_{gd}(1 - a_{cm}) = 0.9 + 59.6 \approx 60.5$ fF. (An exact CM half-circuit analysis including $r_{o1}$ gives $v_s/v_{ic} = 0.980$, $a_{cm} = -1.96$, so $C_{ich} = 180(0.020) + 20(2.96) \approx 62.7$ fF.)
- T shunt: $1/C = 1/(2C_{ich}) - 1/(2C_{idh})$ → $C \approx 124$ fF (128 fF with $C_{ich} = 62.7$ fF). π bridge: $C_{idh}/2 - C_{ich}/2 \approx 1.40$ pF.

## Grading notes

+2: $C_{idh}$ ≈ 2.87 pF ($Z_{id}$ ↔ 1.43 pF), $C_{ich}$ ≈ 55–65 fF, and the network elements consistent with them (±10%): T series 2.87 pF, T shunt ≈ 120–130 fF (124 fF with $a_{cm} ≈ -1.98$; the exact analysis including $r_{o1}$ gives $C_{ich} ≈ 62.7$ fF and 128 fF), π shunt ≈ 60 fF, π bridge ≈ 1.40 pF. +1: $C_{idh}$ and $C_{ich}$ right with a slip in one network element. 0: DM side right but the CM capacitance wrong (e.g. full $C_{gs}$ in the CM capacitance, or a wrong CM gain in the $C_{gd}$ Miller factor such as a mirror-load CM gain ≈ 0), so that only the CM-dependent elements are wrong; or no network elements. −2 (asserted as fact): no Miller multiplication of $C_{gd}$ in the DM capacitance, a wrong DM gain in the Miller factor (e.g. the old-bias −66.7, giving 1.53 pF), or most of the six element values wrong.

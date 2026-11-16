# Golden Solution - G382

## Reference answer

$Z_{id}$ is a capacitor of about 0.77 pF and $Z_{ic}$ a capacitor of about 65 fF (≈ 61 fF if $r_{o1}$ is neglected in the CM half-circuit).
- T-network: each series element $Z_{id}/2$ is a 1.53-pF capacitor; the shunt element $Z_{ic}/2 - Z_{id}/4$ is a capacitor of about 137 fF (≈ 128 fF with the approximate $C_{ich}$).
- π-network: each shunt element $Z_{ic}$ is about 65 fF; the bridging element $Z_{id}\|(-2Z_{ic})$ is a capacitor of about 0.73–0.74 pF.

Derivation ($g_{m1} = 1$ mA/V, $r_{o1} = 100$ kΩ, $r_{o3} = 200$ kΩ, $r_{o5h} = 100$ kΩ, DM gain $a_{dm} = -66.7$, CM gain $a_{cm} = -25/13 = -1.92$ from the half-circuits):
- DM half-circuit: source at ac ground, gate-to-drain gain −66.7. $C_{idh} = C_{gs} + C_{gd}(1 - a_{dm}) = 180 + 20(67.7) = 1533$ fF. The half-circuit sees $Z_{id}/2 = 1/(sC_{idh})$, so $Z_{id}$ corresponds to $C_{idh}/2 = 0.767$ pF.
- CM half-circuit (gate at $v_{ic}$, source to ground through $r_{o5h}$, drain load $r_{o3}$, with $r_{o1}$ kept): the drain and source currents are equal, so $v_s = -v_{oc}\,r_{o5h}/r_{o3} = -v_{oc}/2$, and KCL at the source gives $v_s/v_{ic} = 25/26 = 0.962$, $v_{oc}/v_{ic} = -25/13 = -1.92$. Then $C_{ich} = C_{gs}(1 - 25/26) + C_{gd}(1 + 25/13) = 6.9 + 58.5 = 65.4$ fF and $Z_{ic} = 1/(sC_{ich})$. (Neglecting $r_{o1}$: $v_s/v_{ic} = g_{m1}r_{o5h}/(1 + g_{m1}r_{o5h}) \approx 0.99$, gain ≈ −1.98, $C_{ich} \approx 1.8 + 59.6 \approx 61$ fF.)
- T shunt element: $1/C = 1/(2C_{ich}) - 1/(2C_{idh})$ → $C = 1/(1/130.8\ \text{fF} - 1/3067\ \text{fF}) \approx 137$ fF (≈ 128 fF with $C_{ich} = 61$ fF).
- π bridging element: $C = C_{idh}/2 - C_{ich}/2 = 767 - 33 \approx 734$ fF (≈ 736 fF with $C_{ich} = 61$ fF).

## Grading notes

+2: $C_{idh}$ ≈ 1.53 pF (Zid ↔ 0.77 pF), $C_{ich}$ ≈ 55–66 fF (65.4 fF exact, ≈ 61 fF with $r_{o1}$ neglected, with or without the small bootstrapped $C_{gs}$ term), and the four network elements consistent with these values (±10%): T series 1.53 pF, T shunt ≈ 120–140 fF, π shunt ≈ 55–66 fF (equal to $C_{ich}$), π bridge ≈ 0.73–0.74 pF. +1: $C_{idh}$ and $C_{ich}$ right but a slip in converting to the network elements (e.g. impedance halving applied as capacitance halving in one element). 0: DM side right, CM side wrong (e.g. $C_{gs}$ counted fully in the CM capacitance, giving ≈ 240 fF), or no network elements given. −2 (asserted as fact): Miller effect ignored ($C_{idh}$ = 200 fF), Miller factor taken as $(1 + |a_{cm}|)$ for the DM input or $(1 + |a_{dm}|)$ for the CM input, or capacitors and impedances confused so that the T series elements come out as ≈ 0.38 pF.

# Golden Solution - G383

## Reference answer

$a_{dm} \approx -133$, $R_{od} \approx 267$ kΩ, $a_{cm} \approx -1.98$, $R_{oc} \approx 396$ kΩ, $G_{md} = 0.5$ mA/V, $G_{mc} \approx 5\ \mu$A/V.
- T-network: series $R_{od}/2 \approx 133$ kΩ, sources $a_{dm}v_{id}/2$ with $a_{dm} = -133$, shunt $R_{oc}/2 - R_{od}/4 \approx 198 - 66.7 \approx 131$ kΩ, source $a_{cm}v_{ic}$ with $a_{cm} \approx -1.98$.
- π-network: $R_{oc} \approx 396$ kΩ and $G_{mc} \approx 5\ \mu$A/V at each output; bridging $R_{od}\|(-2R_{oc}) \approx 267\|(-792) \approx 402$ kΩ in parallel with $G_{md}v_{id}$, $G_{md} = 0.5$ mA/V.

Derivation: $g_{m1} = 2(50\ \mu\text{A})/0.1\ \text{V} = 1$ mA/V, $r_{o1} = 10/50\ \mu\text{A} = 200$ kΩ, $r_{o3} = 20/50\ \mu\text{A} = 400$ kΩ, $r_{o5} = 100$ kΩ, $r_{o5h} = 200$ kΩ.
- DM: $R_{od}/2 = r_{o1}\|r_{o3} = 133$ kΩ, $a_{dm} = -g_{m1}(r_{o1}\|r_{o3}) = -133$, $G_{md} = g_{m1}/2$.
- CM: $R_{o(\text{down})} \approx r_{o1}g_{m1}r_{o5h} = 40$ MΩ, $R_{oc} = 40\ \text{M}\|400\ \text{k} \approx 396$ kΩ; $G_{mc} \approx 1/r_{o5h} = 5\ \mu$A/V (4.95 exact); $a_{cm} \approx -R_{oc}/r_{o5h} = -1.98$ (−1.96 with the exact $G_{mc}$).

## Grading notes

+2: $a_{dm}$ ≈ −133, $R_{od}$ ≈ 267 kΩ, $a_{cm}$ ≈ −1.95 to −2.0, $R_{oc}$ ≈ 390–400 kΩ, $G_{md}$ = 0.5 mA/V, $G_{mc}$ ≈ 5 μA/V and the derived network elements (T shunt ≈ 131 kΩ, π bridge ≈ 400 kΩ) within ±5%. +1: all model parameters right with one network element missing or slipped. 0: DM side right and CM side wrong, or vice versa. −2 (asserted as fact): $g_{m1}$ wrong by using the old bias (e.g. 0.5 mA/V), $G_{md} = g_{m1}$, $a_{cm}$ without tail degeneration, or $R_{oc} = r_{o1}\|r_{o3}$.

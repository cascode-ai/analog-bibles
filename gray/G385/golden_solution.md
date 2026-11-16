# Golden Solution - G385

## Reference answer

$a_{cmc} \approx -396$ (the exact nodal solution of the half-circuit gives −394; the simple estimate $-g_{m5h}r_{o3} = -400$ is equally acceptable).

- CM half-circuit: split $M_5$ into two halves, each with half the width and current: $g_{m5h} = 2(50\ \mu\text{A})/0.1\ \text{V} = 1$ mA/V, $r_{o5h} = 2(10\ \text{V}/100\ \mu\text{A}) = 200$ kΩ.
- $M_{5h}$ is a common-source stage whose current flows through common-gate $M_1$ to the output node: $a_{cmc} = -g_{m5h}(R_{o(\text{down})}\|r_{o3})$.
- $R_{o(\text{down})} = r_{o1}(1 + g_{m1}r_{o5h}) \approx (200\ \text{k})(1)(200\ \text{k})/1\ \text{k} = 40$ MΩ (with $g_{m1} = 1$ mA/V, $r_{o1} = 200$ kΩ); $r_{o3} = 400$ kΩ; $R_{o(\text{down})}\|r_{o3} \approx 396$ kΩ.
- $a_{cmc} = -(1\ \text{mA/V})(396\ \text{k}\Omega) \approx -396$. The sign is negative: raising the gate of $M_5$ increases the tail current and pulls both outputs down.

## Grading notes

+2: −396 (±3%; the exact nodal value −394 and the simplified $-g_{m5}(r_{o3}\|r_{o4}) = -g_{m5h}r_{o3} = -400$ both qualify), with the negative sign and the correct structure ($g_{m5h}$ = half of $g_{m5}$, output resistance ≈ $r_{o3}$ in parallel with the cascoded $M_1$). +1: magnitude right with sign missing or unclear. 0: right method with a numerical slip (e.g. wrong $r_{o5h}$). −2 (asserted as fact): full $g_{m5}$ = 2 mA/V used without halving the output resistance correspondingly (giving −792), a positive gain asserted, or the gain computed as $-g_{m5}(r_{o1}\|r_{o3})$.

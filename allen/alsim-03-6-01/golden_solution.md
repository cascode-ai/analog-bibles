# Golden Solution - alsim-03-6-01

## Reference answer

(a)
```
Circuit (a)
M1 2 1 0 0 NCH W=1U L=1U
M2 2 3 4 4 PCH W=1U L=1U
M3 3 3 4 4 PCH W=1U L=1U
R1 3 0 50K
VIN 1 0 DC 1
VDD 4 0 DC 5
.MODEL NCH NMOS VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
.MODEL PCH PMOS VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.OP
.END
```
(b) The same file with `M2 2 3 4 4 PCH W=1U L=1U M=2`: two unit 1 µm/1 µm devices in parallel, which is how a 1:2 ratio-matched pair is made.

Expected operating point (hand analysis with the same level-1 equations):
- M3 is diode-connected: $(5 - V_{SG3})/50\ \mathrm{k\Omega} = 25\ \mu\mathrm{A/V^2}(V_{SG3} - 0.7)^2(1 + 0.05V_{SG3})$ → $V_{SG3}$ ≈ 2.14 V, V(3) ≈ 2.86 V, reference current ≈ 57 µA.
- M2 copies this current (×1 in (a), ×2 in (b)) when saturated. With $v_{IN}$ = 1 V, M1 can sink only ≈ 5 µA ($55\ \mu\mathrm{A/V^2}\times(0.3)^2(1 + 0.04v_{OUT})$), so M2 is in nonsaturation and V(2) ≈ 4.92 V in (a), ≈ 4.96 V in (b).
- For reference, $v_{OUT}$ = 2.5 V would need $v_{IN}$ ≈ 1.68 V in (a) and ≈ 2.09 V in (b).

## Grading notes

A correct netlist has M1 with drain 2, gate 1, source and bulk 0 (n-channel); M2 with drain 2, gate 3, source and bulk 4; M3 with drain and gate 3, source and bulk 4 (p-channel, diode-connected); R from 3 to 0 = 50 kΩ; VDD from 4 to 0 = 5 V; a dc source on node 1; the two model cards with the stated parameters; an analysis statement (.OP or a sweep) and .END. The MOS terminal order (D G S B) must be right. In (b), M2 should be two unit devices (M=2 or two parallel instances); W=2U alone gives the same level-1 result but is not ratio matched (minor). A correct simulation gives V(3) ≈ 2.86 V (±0.05 V) and a reference current ≈ 57 µA, and with $v_{IN}$ = 1 V an output near 4.9 V. Swapped source/drain or wrong bulk connections on the p-channel devices, the PMOS bulks tied to ground, or M3 not diode-connected are errors.

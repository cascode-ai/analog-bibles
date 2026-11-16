# Golden Solution - A171

## Reference answer

$A_v \approx -1.85\times10^3$ V/V and $R_{out} \approx 4.1$ MΩ (the usual approximations give −1.84×10³ V/V and 3.9 MΩ).

- The circuit is a folded cascode: M1's drain current is folded at node A (drains of M1, M2, M3 and source of M4) into the p-channel cascode M4; M5–M6 form an n-channel cascode current sink.
- Small-signal parameters: $g_{mN} = \sqrt{2\cdot110\cdot10\cdot100}$ µS = 469 µS, $g_{mP} = \sqrt{2\cdot50\cdot10\cdot100}$ µS = 316 µS, $r_{dsN}$ = 1/(0.04·100 µA) = 250 kΩ, $r_{dsP}$ = 200 kΩ.
- Resistance at node A: $R_A = r_{ds1}\|r_{ds2}\|r_{ds3}$ = 71.4 kΩ.
- Looking up into M4: $R_{up} = r_{ds4} + R_A + g_{m4}r_{ds4}R_A$ ≈ 4.79 MΩ (≈ $g_{m4}r_{ds4}R_A$ = 4.52 MΩ). Looking down into M5–M6: $R_{dn} = r_{ds5}+r_{ds6}+g_{m5}r_{ds5}r_{ds6}$ ≈ 29.8 MΩ (≈ 29.3 MΩ).
- $R_{out} = R_{up}\|R_{dn}$ = 4.13 MΩ (3.91 MΩ with the approximate terms).
- Gain: with the output shorted, nearly all of $g_{m1}v_{in}$ flows into the low resistance of M4's source (≈ $1/g_{m4}$ ≈ 3.2 kΩ ≪ $R_A$), so $G_m \approx 0.96g_{m1}$ and $A_v = -G_mR_{out}$ ≈ −1.85×10³ (exact nodal analysis −1855; $-g_{m1}R_{out}$ with the approximate $R_{out}$ gives −1836).

## Grading notes

+2: folded-cascode structure recognized, $R_{out}$ in 3.8–4.3 MΩ and $A_v$ between −1.7×10³ and −2.0×10³ V/V (negative). +1: correct method and $R_{out}$ with a slip in the gain (or vice versa), or node A taken as $r_{ds1}\|r_{ds2}$ only (≈ 6% higher $R_{out}$). 0: correct identification of the up/down resistances without numbers, or one of the two quantities missing. −2 (asserted as fact): circuit treated as a simple (unfolded) cascode or common-source stage, $R_{out}$ of order $r_{ds}$ (hundreds of kΩ), or a gain of a few hundred.

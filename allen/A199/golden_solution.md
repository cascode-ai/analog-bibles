# Golden Solution - A199

## Reference answer

$A_i$ = −10 A/A, $R_{in}$ ≈ 1.8 kΩ, $R_{out}$ ≈ 22.2 kΩ.

- Bias: the diode M3 (50 µA) sets the gate of M1 so that M1 (same W/L) carries 50 µA when the input node is at 0 V; likewise M4/M2 for the p-channel side. M1's current flows through the diode M5 and is mirrored 10× by M7 (100/1 vs 10/1); M2's current flows through M6 and is mirrored 10× by M8. Quiescent: M7 sources and M8 sinks 500 µA.
- Input resistance: the input node is the source of M1 and of M2 with both gates at fixed voltages: $R_{in} = 1/(g_{m1}+g_{m2})$, $g_{m1} = \sqrt{2\cdot110\cdot10\cdot50}$ µS = 332 µS, $g_{m2} = \sqrt{2\cdot50\cdot10\cdot50}$ µS = 224 µS → $R_{in}$ = 1.80 kΩ.
- Current gain: $v_{in} = i_{in}R_{in}$; M1's current falls by $g_{m1}v_{in}$ and M2's rises by $g_{m2}v_{in}$, so M7 sources $10g_{m1}v_{in}$ less and M8 sinks $10g_{m2}v_{in}$ more: $i_{out} = -10(g_{m1}+g_{m2})v_{in} = -10i_{in}$ ($i_{out}$ in the arrow direction, out of the amplifier).
- Output resistance: the gates of M7 and M8 sit on the diode nodes of M5 and M6, which the output voltage does not disturb (the output node connects only to the drains of M7 and M8, so the stated condition on $g_{ds2}/g_{m6}$ and $g_{ds1}/g_{m5}$ is not needed), so $R_{out} = r_{ds7}\|r_{ds8} = 1/[(0.05+0.04)\cdot500\ \mu\mathrm{A}]$ = 22.2 kΩ.
- These are the usual hand values (nominal bias with λ neglected in the dc currents). Keeping the full $(1+\lambda V_{DS})$ dc model (ngspice level 1) gives $I_{D1} = I_{D2}$ ≈ 49.7 µA, $I_{D7}$ ≈ 518 µA, $I_{D8}$ ≈ 516 µA (the output devices see $|V_{DS}|$ = 2 V, their diode masters ≈ 1.0–1.1 V), and $A_i$ ≈ −10.3, $R_{in}$ ≈ 1.77 kΩ, $R_{out}$ ≈ 23.4 kΩ; keeping the $g_{ds}$ terms at the nominal bias gives $A_i$ ≈ −9.9. All are equally correct.

## Grading notes

+2: $A_i$ = −10 (sign per the arrows; magnitude 9.8–10.4), $R_{in}$ 1.75–1.85 kΩ, $R_{out}$ 21.5–24 kΩ (the upper parts of these ranges come from keeping λ in the dc bias, which is a self-consistent alternative, not an error). +1: one value off by a computational slip, or $|A_i|$ = 10 with the sign unstated. 0: correct mirror ratios, bias point and structure but two values wrong by computational slips; or one value wrong from one of the critical errors below with the other two right. −2 (asserted as fact): critical errors that make two or more of the three values wrong. Critical errors: a current gain of 1 or 100 (wrong mirror ratio); $R_{in}$ taken as $1/g_{m1}$ or $1/g_{m2}$ alone (≈ 3 or 4.5 kΩ) with the other branch ignored; $R_{out}$ computed at 50 µA (≈ 220 kΩ); a wrong bias point (M1, M2 not at ≈ 50 µA or M7, M8 not at ≈ 500 µA; the few-percent shifts from keeping λ in the dc model are not errors; e.g. by imposing $I_{D7} = I_{D8}$ because the output is shorted, which makes both $R_{in}$ and $R_{out}$ wrong). The condition on $g_{ds2}/g_{m6}$ and $g_{ds1}/g_{m5}$ is not needed for $R_{out}$; an answer that says so loses nothing.

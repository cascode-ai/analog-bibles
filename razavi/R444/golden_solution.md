# Golden Solution - R444

## Reference answer

Gain $A_v \approx -g_{m1}(r_{OP2}\|R_{up}) \approx -g_{m1}r_{OP2} \approx -52$; input noise $\overline{V^2_{n,in}} \approx 4kT\cdot\tfrac23(1/g_{m1} + g_{mP2}/g_{m1}^2) \approx 2.9\times10^{-18}\ \mathrm{V^2/Hz}$, i.e. ≈ 1.7 nV/√Hz.

- $g_{m1} = g_{m2} = \sqrt{2(134\ \mu)(200)(0.5\ \mathrm{m})} = 5.18$ mS; $r_{O1} = r_{O2} = 20$ kΩ; $g_{mb2} \approx 0.17g_{m2}$.
- Auxiliary amplifier: $g_{m3} = \sqrt{2(134\ \mu)(200)(100\ \mu)} = 2.32$ mS, $r_{O3} = 100$ kΩ, $r_{OP1} = 50$ kΩ → $A_3 = g_{m3}(r_{O3}\|r_{OP1}) \approx 77$.
- Looking down into $M_2$: $R_{up} \approx [g_{m2}(1 + A_3) + g_{mb2}]r_{O2}r_{O1} \approx 160$ MΩ, far above the PMOS load $r_{OP2} = 1/(0.2 \times 0.5\ \mathrm{mA}) = 10$ kΩ. So $R_{out} \approx 10$ kΩ and $|A_v| \approx 5.18\ \mathrm{mS} \times 10\ \mathrm{k\Omega} \approx 52$ (inverting). The gain boosting is wasted because the simple PMOS load dominates.
- Noise: $g_{mP2} = 2(0.5\ \mathrm{mA})/0.510\ \mathrm{V} = 1.96$ mS. $1/g_{m1} = 193\ \Omega$, $g_{mP2}/g_{m1}^2 = 73\ \Omega$; $4kT\cdot\tfrac23 = 1.10\times10^{-20}$ → $2.94\times10^{-18}\ \mathrm{V^2/Hz}$ → 1.71 nV/√Hz. $M_2$, $M_3$ and $I_1$ contribute negligibly.

## Grading notes

Credit split: gain 50%, noise 50%. +2: |gain| ≈ 52 (48–55) recognizing that $R_{out}$ is set by the PMOS load, and noise ≈ 1.7 nV/√Hz (1.6–1.85; or ≈ 2.9 × 10⁻¹⁸ V²/Hz) with the dominant terms $M_1$ and the $I_2$ device. +1: one of the two with a small slip, or a correct gain with the regulated-cascode resistance only estimated. 0: one of the two right, the other wrong (e.g., a correct gain with the noise claimed to be dominated by $M_3$/$I_1$). -2 (asserted as fact): both parts wrong, e.g., the gain given as the regulated-cascode value $g_{m1}R_{up}$ (thousands or more) ignoring the PMOS load, or computed with $r_{O1}$ alone, together with a wrong noise result (such as noise dominated by $M_3$/$I_1$).

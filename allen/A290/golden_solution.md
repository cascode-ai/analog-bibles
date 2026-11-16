# Golden Solution - A290

## Reference answer

$W_1 = W_2 \approx 14.5\ \mu$m (W/L ≈ 14.5); load capacitance ≈ 6.4 pF.

- Output resistance (unchanged by $W_1$, $W_2$, since $r_{ds2}$ depends only on the current and MC2 is unchanged): $g_{mC2} = \sqrt{2(110\,\mu)(10)(50\,\mu)} = 331.7\ \mu$S, $g_{mC4} = \sqrt{2(50\,\mu)(10)(50\,\mu)} = 223.6\ \mu$S, $r_{dsN} = 1/(0.04\cdot50\,\mu) = 0.5$ MΩ, $r_{dsP} = 0.4$ MΩ; $R_{out} = (g_{mC2}r_{dsC2}r_{ds2})\,\|\,(g_{mC4}r_{dsC4}r_{ds4}) = 82.9\,\|\,35.8 = 25.0$ MΩ (original gain $331.7\,\mu\times25.0$ M ≈ 8.3×10³).
- Gain $= g_{m1}R_{out} = 10^4$ → $g_{m1} = 400\ \mu$S → $(W/L)_1 = g_{m1}^2/(2K'_NI_D) = (400\,\mu)^2/(2\cdot110\,\mu\cdot50\,\mu) = 14.5$ → $W_1 = W_2 \approx 14.5\ \mu$m.
- $GB = g_{m1}/C$ → $C = 400\ \mu\mathrm{S}/(2\pi\cdot10\ \mathrm{MHz}) = 6.37$ pF.

## Grading notes

+2: $W_1 = W_2$ ≈ 14–15 µm with the argument that $R_{out}$ is unchanged so gain ∝ $\sqrt{W_1}$, and C ≈ 6.4 pF (±5%). +1: correct W with C missing or slightly off, or correct method with one numerical slip. 0: correct $R_{out}$ ≈ 25 MΩ but a wrong W from an arithmetic error. −2 (asserted as fact): W scaled linearly with the gain (W ≈ 12 µm), $R_{out}$ assumed to change with $W_1$, or a single $r_{ds}$ used as $R_{out}$.

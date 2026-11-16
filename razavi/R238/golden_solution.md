# Golden Solution - R238

## Reference answer

The nominal $I_{out}$ is $I_{REF} = 100\ \mu$A (the output branch replicates the reference branch exactly when $M_3$'s drain is at $V_X$). With the drain 1 V higher, $I_{out}$ rises by only ≈ 0.04–0.05 μA (≈ 45–55 nA from the small-signal estimate, ≈ 40 nA from an exact large-signal solution; about 0.04–0.05%).

- $\Delta I_{out} \approx \Delta V/R_{out}$, $R_{out} \approx [1 + (g_{m3}+g_{mb3})r_{O3}]r_{O2} + r_{O3}$.
- $g_{m3} = \sqrt{2(134\ \mu)(120)(100\ \mu)} = 1.79$ mS; $r_{O2} = r_{O3} = 1/(0.1\times100\ \mu\mathrm{A}) = 100$ kΩ; $g_{m3}r_{O3} = 179$.
- Without $g_{mb}$: $R_{out} \approx 18.1$ MΩ → $\Delta I_{out} \approx 55$ nA. With $g_{mb3} \approx 0.22g_{m3}$ (source of $M_3$ at ≈ 0.2 V): $R_{out} \approx 22$ MΩ → ≈ 46 nA.
- An exact large-signal square-law solution with $(1+\lambda V_{DS})$ and body effect ($V_b$ anywhere from 1.2 to 1.6 V) gives $\Delta I_{out} \approx$ 38–40 nA, slightly less, because in that model $r_O = (1+\lambda V_{DS})/(\lambda I_D)$ and $g_m$ are somewhat larger.

## Grading notes

+2: $\Delta I_{out}$ of order 0.035–0.06 μA (≈ 0.035–0.06%), either from $\Delta V/R_{out}$ with $R_{out} \approx (g_{m3}+g_{mb3})r_{O3}r_{O2}$ ($g_m \approx 1.8$ mS, $r_O \approx 100$ kΩ; with or without $g_{mb}$) or from an exact large-signal square-law solution including $(1+\lambda V_{DS})$, which gives ≈ 0.038–0.040 μA. +1: correct cascode output-resistance method with one parameter off by up to a factor of 2. 0: correct idea but a numerical error larger than that, or nominal current taken as 300 μA with otherwise consistent cascode analysis. -2 (asserted as fact): deviation computed as for a simple mirror ($\lambda\Delta V$ ≈ 10 μA), a claim of exactly zero deviation, or a deviation of several percent.

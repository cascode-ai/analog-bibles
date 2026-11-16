# Golden Solution - A090

## Reference answer

$R_{in} \approx 15.9$ kΩ, $i_{out}/i_{in} = 10$, $R_{out} \approx 8.3$ MΩ, $V_{MIN}(\text{in}) \approx 1.65$ V, $V_{MIN}(\text{out}) \approx 0.95$ V.

- Topology: the input node (top of $R$) drives the gates of the cascodes M3 and M4; the bottom of $R$ (drain of M3) drives the gates of M1 and M2. This is a self-biased cascode mirror.
- Bias: $V_{ON1} = \sqrt{2\times50\ \mu/(110\ \mu\times10)} = 0.302$ V, $V_{GS1} = 1.002$ V; $IR = 50\ \mu\times12.9\ \mathrm{k} = 0.645$ V; the input node is at $V_{GS1} + IR = 1.647$ V. M3 (same size and current) has $V_{GS3} = 1.002$ V, so $V_{DS1} = 1.647 - 1.002 = 0.645$ V and $V_{DS3} = 1.002 - 0.645 = 0.357$ V; both exceed $V_{ON}$ = 0.302 V.
- $i_{out}/i_{in}$: M2/M1 and M4/M3 are 10:1 with equal current densities and equal $V_{DS}$ ($V_{DS2} = V_{DS1}$ = 0.645 V), so $i_{out}/i_{in} = (W/L)_2/(W/L)_1 = 10$ (500 µA dc).
- $R_{in}$: the input current flows through $R$ into the M3 drain/M1 gate node, so $i_{in} = g_{m1}v_{G1}$ and $R_{in} \approx R + 1/g_{m1} = 12.9 + 3.02 = 15.9$ kΩ ($g_{m1} = 2I/V_{ON}$ = 332 µA/V; with $g_{ds}$ included, 15.8 kΩ).
- $R_{out} \approx r_{ds2} + r_{ds4} + g_{m4}r_{ds4}r_{ds2}$ with $g_{m4} = \sqrt{2\times110\ \mu\times100\times500\ \mu} = 3.32$ mS and $r_{ds} = 1/(0.04\times500\ \mu) = 50$ kΩ: $3.32\ \mathrm{m}\times50\ \mathrm{k}\times50\ \mathrm{k} = 8.29$ MΩ (8.39 MΩ with the $r_{ds}$ terms). Keeping the $(1+\lambda v_{DS})$ factor of the given model in the bias and in $r_{ds} = (1+\lambda V_{DS})/(\lambda I_D)$ gives ≈ 8.8 MΩ (ngspice level 1: 8.79 MΩ, with $R_{in}$ = 15.80 kΩ and the input node at 1.643 V); both levels of approximation are correct.
- $V_{MIN}(\text{in}) = V_{GS1} + IR = 1.65$ V. $V_{MIN}(\text{out}) = V_{G4} - V_T = 1.647 - 0.7 = 0.95$ V ($= V_{DS2} + V_{ON4}$ = 0.645 + 0.302). Since $IR$ (0.645 V) is larger than $V_{ON}$, this exceeds the ideal $2V_{ON}$ ≈ 0.60 V.

## Grading notes

Five quantities, roughly equal weight. +2: $R_{in}$ 15–16.5 kΩ, ratio 10 (the dc ratio, or the small-signal current gain with the output ac-shorted, ≈ 10), $R_{out}$ 8–8.9 MΩ (8.3–8.4 MΩ with $r_{ds} = 1/\lambda I_D$, ≈ 8.8 MΩ with the full $\lambda$ model), $V_{MIN}(\text{in})$ 1.6–1.7 V, $V_{MIN}(\text{out})$ 0.92–0.98 V. +1: four of the five right, or all right in method with one slip. 0: about half right. −2 (asserted as fact): ratio 1 or 0.1, $R_{in} = 1/g_{m1}$ only (≈ 3 kΩ) together with other wrong results, $R_{out} = r_{ds}$ (50 kΩ), the cascode gates assigned to the wrong end of $R$, or $V_{MIN}(\text{out})$ given as $2V_T + 2V_{ON}$.

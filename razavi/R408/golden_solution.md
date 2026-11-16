# Golden Solution - R408

## Reference answer

$V_{in} \approx 2.74$ V (with body effect; 2.47 V without).

- $M_3$ delivers 0.5 mA into the output node and $M_1$ delivers 0.5 mA into the source node. KCL: $0.5\ \mathrm{mA} = V_{out}/3\mathrm{k} + (V_{out} - V_S)/3\mathrm{k}$ and $V_S/3\mathrm{k} = 0.5\ \mathrm{mA} + (V_{out} - V_S)/3\mathrm{k}$ → $V_{out} = V_S = 1.5$ V, no current in $R_F$.
- $V_{SB1} = 1.5$ V: $V_{TH1} = 0.7 + 0.45(\sqrt{2.4} - \sqrt{0.9}) = 0.970$ V; overdrive $\sqrt{2(0.5\ \mathrm{mA})/(134\ \mu \times 100)} = 0.273$ V; $V_{GS1} = 1.243$ V.
- $V_{in} = 1.5 + 1.243 = 2.743$ V.
- Remark: $V_X = 3 - |V_{GS3}| = 3 - 1.31 = 1.69$ V, so $V_{DS1} \approx 0.19$ V is slightly below the 0.27-V overdrive: $M_1$ is in fact at the edge of the triode region; the stated saturation assumption is kept.

## Grading notes

+2: $V_S = V_{out} = 1.5$ V with no current in $R_F$, body effect included, $V_{in} \approx 2.74$ V (±0.03 V). Noting that $M_1$ is marginal (VDS1 ≈ 0.19 V) is a plus, not required. +1: body effect neglected (≈ 2.47 V), otherwise right. 0: correct $V_S$ but $V_{GS1}$ wrong through a slip. -2 (asserted as fact): a wrong source voltage from a misread network (current assumed in $R_F$), the source of $M_1$ taken at ground ($V_{in}$ ≈ 1 V), or $V_{in}$ computed from $M_3$'s gate voltage.

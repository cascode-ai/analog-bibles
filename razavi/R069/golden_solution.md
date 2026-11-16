# Golden Solution - R069

## Reference answer

$V_{in} \approx 1.144$ V ($V_{out} \approx 0.394$ V, $I_D \approx 1.30$ mA); $A_v \approx -4.5$.

- Triode: $V_{out} = V_{DD} - R_D\beta[(V_{in}-V_{TH})V_{out} - V_{out}^2/2]$ with $V_{out} = V_{in} - V_{TH} - 0.05$ V and $\beta = 13.4\ \mathrm{mA/V^2}$ → overdrive 0.444 V, $V_{out} = 0.394$ V.
- Small-signal in triode: $g_m = \beta V_{DS} = 5.28$ mS, output conductance $g_{ds} = \beta(V_{ov} - V_{DS}) = 13.4\ \mathrm{mA/V^2} \times 0.05\ \mathrm{V} = 0.67$ mS.
- $A_v = -g_m(R_D \| 1/g_{ds}) = -5.28/(0.67 + 0.5) \approx -4.5$. An input only ≈ 7 mV above the edge value cuts the gain by more than half.

## Grading notes

+2: $V_{in}$ ≈ 1.144 V (±0.01 V) and gain ≈ −4.5 (±5%), with the triode output conductance included. +1: correct method with one slip. 0: $V_{in}$ right but the gain computed as $-\beta V_{DS}R_D \approx -10.6$ (triode output conductance ignored). -2 (asserted as fact): the saturation gain (≈ −11.7 or larger) kept in triode, or the input found by simply adding 50 mV to the edge input (1.187 V) contrary to the stated definition.

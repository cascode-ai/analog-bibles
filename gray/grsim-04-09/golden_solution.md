# Golden Solution - grsim-04-09

## Reference answer

$I_{IN} = (15 - 2V_{BE})/13.7\ \mathrm{k\Omega} \approx 0.996$ mA, $I_{OUT} \approx I_{IN}[1 - 2/(\beta_F^2 + 2\beta_F + 2)] \approx 0.996$ mA.

Output resistance: $R_o \approx r_{o2}\left[1 + \dfrac{\beta_0}{2 + r_{\pi2}/(R\|r_{o1})}\right] \approx 130\ \mathrm{k}\times(1 + 82.6) \approx 10.9$ MΩ (with $r_{\pi2} = 5.2$ kΩ, $R\|r_{o1} = 12.4$ kΩ); with an ideal current source feeding the input node this becomes the familiar $\beta_0r_{o2}/2 \approx 13$ MΩ.

Percentage change for ΔV = 5 V: $5\ \mathrm{V}/(10.9\ \mathrm{M\Omega}\times0.996\ \mathrm{mA}) \approx 0.046\%$ (≈ 0.038 % with 13 MΩ).

$\beta_F$ sensitivity: the gain error $-2/(\beta^2 + 2\beta + 2)$ goes from −0.005 % (β = 200) to −0.020 % (β = 100): $I_{OUT}$ drops by only ≈ 0.015 %.

$I_{OUT}$–$V_{OUT}$: rises from zero, knee at about $V_{BE} + V_{CE(\text{sat})}$ ≈ 0.9 V, then flat at ≈ 1.0 mA with a slope of ≈ 0.09 µA/V up to 15 V.

## Grading notes

A correct answer gives $R_o$ of order $\beta_0r_o/2$ (≈ 10–13 MΩ; 10.9 MΩ when the 13.7-kΩ resistor at the input node is included), a change of ≈ 0.04–0.05 % for 5 V, a very small (≈ 0.01–0.02 %) $\beta_F$ sensitivity, and a flat characteristic above ≈ 0.9 V. A simulation agreeing within ≈ 20 % in $R_o$ is correct. $R_o \approx r_o$ or $\beta_0r_o$, or a β sensitivity of order 1 %, is wrong.

# Golden Solution - grsim-03-12

## Reference answer

Original data: $I_{C2} \approx 0.255$ mA, $I_{D1} \approx 0.745$ mA, $V_B \approx 2.30$ V, $v_o/v_i \approx -6.25$. New data (bias readjusted for $V_O = 2$ V): $V_B \approx 2.27$ V, currents nearly unchanged, $v_o/v_i \approx -5.45$.

- Bias: 1 mA flows in $R_L$. $I_{C2} + I_{D1} = 1$ mA with $I_{D1} = V_{BE2}/R_B + I_{C2}/\beta_F$ and $V_{BE2} = V_T\ln(I_{C2}/I_S)$ → $V_{BE2} = 0.743$ V, $I_{C2} = 0.255$ mA, $I_{D1} = 0.745$ mA. $V_{SB1} = 0.743$ V → $V_t = 0.696$ V, overdrive $\sqrt{2I_{D1}/(k'W/L)} = 0.863$ V, $V_B = 0.743 + 0.696 + 0.863 = 2.30$ V. $M_1$ is saturated ($V_{DS} = 1.26$ V > 0.86 V).
- Small signal: $g_{m1} = 1.73$ mA/V, $\chi = \gamma/(2\sqrt{2\phi_f + V_{SB}}) = 0.108$, $g_{mb1} = 0.186$ mA/V; $g_{m2} = 9.80$ mA/V, $r_{\pi2} = 10.2$ kΩ; $R_s = R_B\|r_{\pi2} = 911\ \Omega$.
- Source-follower gain to $Q_2$'s base: $v_{b2}/v_i = g_{m1}R_s/[1 + (g_{m1} + g_{mb1})R_s] = 0.574$. Both $M_1$'s drain current ($v_{b2}/R_s$) and $Q_2$'s collector current ($g_{m2}v_{b2}$) flow through $R_L$: $v_o/v_i = -R_L(1/R_s + g_{m2})\,v_{b2}/v_i = -6.25$.
- New data: $r_{o1} = 1/(\lambda I_{D1}) \approx 27$ kΩ, $r_{o2} = V_A/I_{C2} \approx 78$ kΩ, $r_b = 100\ \Omega$. Full nodal solution: $v_o/v_i \approx -5.45$ (about 13% lower), mainly because $r_{o1}$ feeds the output swing back to the source of $M_1$, plus $R_L\|r_{o2}$ and the $r_b$ divider.
- DC transfer characteristic ($v_o$ versus the gate voltage $V_I$ from 0 to 3 V, original data): $v_o = 3$ V while $M_1$ is off ($V_I < 0.6$ V); for $0.6 < V_I \lesssim 2.1$ V $M_1$ conducts only into $R_B$ and $v_o$ falls slowly (≈ 2.4 V at $V_I = 2.1$ V); $Q_2$ turns on around $V_I \approx 2.2$ V and $v_o$ drops steeply through 2 V at $V_I \approx 2.30$ V (slope ≈ −6.3); $M_1$ enters the triode region near $V_I \approx 2.35$ V ($v_o \approx 1.6$ V) and the curve flattens, reaching $v_o \approx 1.1$ V at $V_I = 3$ V. $Q_2$ does not saturate, because $M_1$ keeps its base below its collector.

## Grading notes

Hand part: +2 requires bias currents within ±3% ($I_{C2} \approx 0.255$ mA, $I_{D1} \approx 0.745$ mA, $V_B \approx 2.30$ V), gain −6.0 to −6.5, and a correct qualitative and approximate quantitative effect of the new data (gain magnitude reduced to ≈ 5.3–5.6). A correct simulation reproduces the bias and gain within a few percent with the stated models, shows the reduction with $\lambda$, $r_b$, $V_A$, and a transfer curve with the features listed (flat at 3 V, slow fall, steep region around $V_I \approx 2.2$–2.4 V, flattening near 1.1 V). −2 (asserted as fact): $M_1$ treated as a common-source stage driving $R_L$ alone (ignoring $Q_2$), the body effect of $M_1$ ignored in $V_B$ while claiming exactness, or a positive gain.

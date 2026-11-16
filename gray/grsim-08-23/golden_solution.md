# Golden Solution - grsim-08-23

## Reference answer

- Bias: $M_2$ with $R_1$: $300\ \mu(V_{SG2} - 0.8)^2 = (5 - V_{SG2})/10\text{k}$ → $V_{SG2} = 1.83$ V, $I = 317$ μA. $M_3$, $M_5$ mirror it (same $W/L$, $\lambda = 0$): $I_{D3} = I_{D5} = 317$ μA, so $I_{D1} = I_{D6} = 317$ μA; $M_4$ has $V_{DS} = 0$ ($V_{GD6} = 0$ means the drain of $M_1$ equals $V_o$) and carries no dc current. $V_{GS6} = V_{GS1} = 0.8 + \sqrt{317/600} = 1.53$ V, so $V_o = V_i = 1.53$ V.
- $M_4$ is a triode resistor at $V_{DS} = 0$: $R_4 = 1/[\mu_nC_{ox}(W/L)_4(V_{GS4} - V_{t4})]$ with body effect $V_{t4} = 0.8 + 0.5(\sqrt{0.6 + 1.53} - \sqrt{0.6}) = 1.14$ V. $V_c = 3$ V: $V_{GS4} - V_{t4} = 0.33$ V, $R_4 = 20.1$ kΩ. $V_c = 4$ V: 1.33 V, $R_4 = 5.0$ kΩ.
- Small signal ($g_{m1} = g_{m6} = 2I/V_{ov} = 0.872$ mS): node equations give $v_o/v_i = g_{m1}(R_4 - 1/g_{m6}) = g_{m1}R_4 - 1$ (non-inverting): ≈ 16.6 for $V_c = 3$ V and ≈ 3.4 for $V_c = 4$ V. Output resistance $= 1/g_{m6} \approx 1.15$ kΩ, independent of $V_c$ (with the input shorted the gate of $M_6$ follows the output through $M_4$).
- Large signal: $V_o$ is low (≈ 0.1–0.2 V, $M_6$ driven hard) for $V_i$ well below 1.5 V, rises through the operating point $V_i = V_o = 1.53$ V with slope ≈ 16.6 ($V_c = 3$ V) or ≈ 3.4 ($V_c = 4$ V), and saturates high (toward $V_{DD}$, $M_5$ in triode) for larger $V_i$; the higher-gain setting has the narrower linear input range.

## Grading notes

A correct result shows: all bias currents ≈ 317 μA (except $M_4$, ≈ 0), $V_o = V_i \approx 1.53$ V; gain ≈ 16–17 at $V_c = 3$ V and ≈ 3.3–3.4 at $V_c = 4$ V; output resistance ≈ 1.1–1.2 kΩ in both cases; a monotonic, non-inverting transfer characteristic whose slope at the operating point matches the gains. Neglecting body effect in $M_4$ (giving gains ≈ 7.6 and 2.5) is a modelling error since γ is given.

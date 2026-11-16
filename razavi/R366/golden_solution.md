# Golden Solution - R366

## Reference answer

The design is infeasible: the noise requirement forces $g_{m2} = 60\ \mu$S, i.e. an overdrive $V_{ov2} = 2I_D/g_{m2} \approx 16.7$ V, so $V_{b,min} = V_{ov2} + V_{GS1} \approx 17.6$ V without body effect (≈ 19.1 V with $V_{TH1}$ ≈ 2.16 V at $V_{SB}$ ≈ 16.7 V), far above $V_{DD}$. The output would have to stay above $V_b - V_{TH1} = V_{ov2} + V_{ov1} \approx 16.9$ V, which is impossible with a 3-V supply: there is no allowable output swing.

- Noise condition: $4kT\gamma g_{m2} = \tfrac{1}{25}\cdot 4kT/R_D$, so $g_{m2} = 1/(25\gamma R_D) = 60\ \mu$S and $(W/L)_2 \approx 0.027$.
- $M_2$ at the edge of saturation: its drain (the input node) at $V_{ov2} = 16.7$ V; $V_{ov1} = \sqrt{2I_D/(\mu_nC_{ox}(W/L)_1)} = 0.273$ V; $V_b = V_{ov2} + V_{TH1} + V_{ov1}$.
- Allowed output range: $V_b - V_{TH1} \le V_{out} \le V_{DD}$, i.e., width $V_{DD} - V_{ov1} - V_{ov2} \approx -13.9$ V < 0.
- For a positive swing, $V_{ov2} < V_{DD} - V_{ov1}$, i.e., $g_{m2} > 2I_D/(V_{DD} - V_{ov1}) \approx 0.37$ mS, which contradicts the noise requirement (60 μS).

## Grading notes

+2: $V_{ov2} \approx 16.7$ V from $g_{m2} = 60\ \mu$S, $V_{b,min} = V_{ov2} + V_{GS1}$ (≈ 17.6 V, or ≈ 19.1 V with body effect), and the clear conclusion that no output swing is available with $V_{DD} = 3$ V (the specification cannot be met). An error only in the body-effect term (e.g., $-\sqrt{2|\phi_F|}$ omitted, giving $V_{TH1} \approx 2.6$ V and $V_b \approx 19.5$ V) with everything else right is +1: it does not affect the infeasibility conclusion. +1: correct numbers and the general swing expression $V_{DD} - V_{ov1} - V_{ov2}$ with the negative value, but infeasibility not stated in words. 0: correct method with a numerical error that still leads to infeasibility, or correct $V_b$ but swing missing. -2 (asserted as fact): a positive swing reported (e.g., from an invented smaller overdrive or a recomputed $M_2$), $V_b$ below 3 V claimed, or the swing computed ignoring $M_2$'s overdrive.

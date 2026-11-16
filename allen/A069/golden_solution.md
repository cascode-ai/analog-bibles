# Golden Solution - A069

## Reference answer

| $V_S$ | $R$ |
|---|---|
| 1.0 V | ≈ 1.46 kΩ |
| 3.0 V | ≈ 5.25 kΩ |
| 5.0 V | ∞ (switch off) |

- With $I = 0$ both channel terminals sit at $V_S$, so $V_{DS} = 0$, $V_{GS} = 5 - V_S$ and $V_{SB} = V_S$.
- $r_{ON} = \dfrac{1}{\partial i_D/\partial v_{DS}}\Big|_{v_{DS}=0} = \dfrac{1}{K'(W/L)(V_{GS} - V_T)}$, with $K'W/L = 220\ \mu\mathrm{A/V^2}$.
- $V_S = 1$ V: $V_T = 0.7 + 0.4(\sqrt{1.7} - \sqrt{0.7}) = 0.887$ V, $V_{GS} - V_T = 3.113$ V, $r_{ON} = 1/(220\ \mu \times 3.113) = 1460\ \Omega$.
- $V_S = 3$ V: $V_T = 0.7 + 0.4(\sqrt{3.7} - \sqrt{0.7}) = 1.135$ V, $V_{GS} - V_T = 0.865$ V, $r_{ON} = 5253\ \Omega$.
- $V_S = 5$ V: $V_{GS} = 0 < V_T$, the transistor is off: $R \to \infty$ (only leakage).

## Grading notes

+2: all three entries right: ≈ 1.46 kΩ and ≈ 5.25 kΩ (±3%) with the body effect included ($V_{SB} = V_S$), and an open switch (infinite resistance) at $V_S = 5$ V. +1: one value off by an arithmetic slip, the others right. 0: body effect ignored (giving ≈ 1.38 kΩ and ≈ 3.50 kΩ) with otherwise correct method, or only two of the three entries right. −2 (asserted as fact): a finite resistance at $V_S = 5$ V, the saturation-region formula used for the ON resistance, $V_{GS}$ taken as 5 V for every $V_S$, or the factor $(V_{GS} - V_T)$ replaced by $V_{GS}$.

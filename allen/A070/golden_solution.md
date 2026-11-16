# Golden Solution - A070

## Reference answer

| $V_S$ | $R$ |
|---|---|
| 1.0 V | ∞ (switch off) |
| 3.0 V | ≈ 2.69 kΩ |
| 5.0 V | ≈ 1.16 kΩ |

- With $I = 0$, $V_{SD} = 0$, $V_{SG} = V_S$ and the source–bulk reverse bias is $V_{BS} = 5 - V_S$.
- $r_{ON} = 1/[K'(W/L)(V_{SG} - |V_T|)]$ with $K'W/L = 200\ \mu\mathrm{A/V^2}$.
- $V_S = 1$ V: $|V_T| = 0.7 + 0.57(\sqrt{4.8} - \sqrt{0.8}) = 1.439$ V > $V_{SG} = 1$ V: off, $R \to \infty$.
- $V_S = 3$ V: $|V_T| = 0.7 + 0.57(\sqrt{2.8} - \sqrt{0.8}) = 1.144$ V, $V_{SG} - |V_T| = 1.856$ V, $r_{ON} = 1/(200\ \mu \times 1.856) = 2694\ \Omega$.
- $V_S = 5$ V: no body effect, $|V_T| = 0.7$ V, $r_{ON} = 1/(200\ \mu \times 4.3) = 1163\ \Omega$.

## Grading notes

+2: off (infinite) at 1 V because the body effect raises $|V_T|$ to ≈ 1.44 V, and ≈ 2.69 kΩ and ≈ 1.16 kΩ (±3%) at 3 V and 5 V. +1: one value off by an arithmetic slip. 0: body effect ignored (giving 16.7 kΩ at 1 V and 2.17 kΩ at 3 V) with otherwise correct method. −2 (asserted as fact): the switch said to conduct best at $V_S = 1$ V, n-channel parameters used, the saturation formula used, or the bulk taken at the source for every $V_S$ while claiming a finite resistance at 1 V from a wrong threshold.

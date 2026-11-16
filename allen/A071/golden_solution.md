# Golden Solution - A071

## Reference answer

| $V_S$ | $R$ (parallel) |
|---|---|
| 1.0 V | ≈ 1.46 kΩ (n-channel only) |
| 3.0 V | ≈ 1.78 kΩ |
| 5.0 V | ≈ 1.16 kΩ (p-channel only) |

- With $I = 0$, $V_{DS} = 0$ for both devices, and each has $r_{ON} = 1/[K'(W/L)(|V_{GS}| - |V_T|)]$.
- n-channel ($V_{GS} = 5 - V_S$, $V_{SB} = V_S$): 1460 Ω at 1 V ($V_T$ = 0.887 V), 5253 Ω at 3 V ($V_T$ = 1.135 V), off at 5 V.
- p-channel ($V_{SG} = V_S$, $V_{BS} = 5 - V_S$): off at 1 V ($|V_T|$ = 1.439 V > 1 V), 2694 Ω at 3 V ($|V_T|$ = 1.144 V), 1163 Ω at 5 V.
- Parallel: 1460 Ω; $5253 \| 2694 = 1781\ \Omega$; 1163 Ω. The CMOS pair stays on over the whole 1–5 V range, unlike either single device.

## Grading notes

+2: 1.46 kΩ, 1.78 kΩ and 1.16 kΩ (±3%), with the recognition that only one device conducts at 1 V and at 5 V. +1: one value off by an arithmetic slip. 0: body effect ignored (giving ≈ 1.38 kΩ, ≈ 1.39 kΩ, ≈ 1.16 kΩ) with the parallel combination otherwise right. −2 (asserted as fact): resistances added in series, an infinite resistance claimed at any of the three voltages, or the gate connections of the two devices interchanged.

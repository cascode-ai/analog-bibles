# Golden Solution - R432

## Reference answer

About $1.04\ \mathrm{V} \le V_{b2} \le 1.48$ V (a window of $|V_{THP}| - |V_{OD}| \approx 0.44$ V).

- PMOS devices at 0.5 mA, $W/L = 200$: $|V_{OD}| = 0.361$ V, $|V_{GS}| = 1.161$ V. $V_X = V_{DD} - |V_{GS7}| = 1.839$ V.
- Source of $M_5$ (= drain of $M_7$): $V_{b2} + |V_{GS5}| = V_{b2} + 1.161$ V.
- $M_7$ saturated: $V_{DD} - (V_{b2} + 1.161) \ge 0.361$ → $V_{b2} \le 3 - 0.361 - 1.161 = 1.478$ V.
- $M_5$ saturated (drain at $V_X$): $V_X \le V_{b2} + |V_{TH5}|$ → $V_{b2} \ge 1.839 - 0.8 = 1.039$ V.
- The same conditions hold for $M_8$/$M_6$ (for $M_6$, also $V_{out} \le V_{b2} + 0.8$ V, not binding for normal output levels).

## Grading notes

+2: lower bound ≈ 1.04 V ($V_X - |V_{THP}|$) and upper bound ≈ 1.48 V ($V_{DD} - |V_{OD7}| - |V_{GS5}|$), each ±0.03 V. +1: correct symbolic bounds with a numerical slip (e.g., W/L = 100: 0.89–1.18 V). 0: one bound right. -2 (asserted as fact): a single value given as the only acceptable $V_{b2}$, bounds reversed, or bounds derived as for a diode-connected cascode mirror.

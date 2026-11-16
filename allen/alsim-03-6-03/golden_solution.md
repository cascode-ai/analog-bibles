# Golden Solution - alsim-03-6-03

## Reference answer

Seven curves, each rising steeply from the origin (M2 in nonsaturation) up to $v_2 = V_{GS} - V_T$, then almost flat, crossing $i_2 = i_1$ at $v_2 = V_{GS1}$ and rising with slope ≈ λ$i_1$.

- $V_{GS1} = 0.7 + \sqrt{2i_1/(K'W/L)}$ = 0.89, 0.97, 1.03, 1.08, 1.12, 1.16, 1.20 V for $i_1$ = 10 … 70 µA (a few mV lower with λ = 0.04), so the knees are at $v_2$ ≈ 0.19 … 0.50 V.
- Saturation: $i_2 = i_1(1 + \lambda v_2)/(1 + \lambda V_{GS1})$.
- λ = 0.01 V⁻¹: $i_2(5\ \mathrm{V}) ≈ 1.04\,i_1$ = 10.4, 20.8, 31.2, 41.6, 51.9, 62.3, 72.6 µA; output resistance ≈ 1/(λ$i_1$) = 10 MΩ … 1.4 MΩ.
- λ = 0.04 V⁻¹: $i_2(5\ \mathrm{V}) ≈ 1.15\,i_1$ = 11.6, 23.1, 34.6, 46.0, 57.4, 68.8, 80.2 µA; output resistance 2.6 MΩ … 0.37 MΩ.
- One run can produce the family with a nested sweep, e.g. `I1 0 1 DC 10U` feeding the diode node and `.DC V2 0 5 0.1 I1 10U 70U 10U`.

## Grading notes

A correct result shows, for each $i_1$, a knee at $v_2$ ≈ $V_{GS} - V_T$ (0.19–0.50 V), $i_2 = i_1$ near $v_2 = V_{GS1}$, and at $v_2$ = 5 V a current about 4% above $i_1$ for λ = 0.01 V⁻¹ and about 15% above for λ = 0.04 V⁻¹ (±1.5 percentage points). Flat curves (no λ effect), knees at $V_{GS}$ instead of $V_{GS} - V_T$, or $i_2$ differing from $i_1$ by more than the λ effect (mirror ratio misread) are wrong.

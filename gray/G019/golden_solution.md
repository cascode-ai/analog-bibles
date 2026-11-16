# Golden Solution - G019

## Reference answer

- $V_{GS} = 0.5$ V: below $V_t$, $I_D = 0$ for all $V_{DS}$ (the curve lies on the axis).
- $V_{GS} = 1.5$ V ($V_{ov} = 0.9$ V): triode for $V_{DS} < 0.9$ V, $I_D = k'(W/L)[V_{ov}V_{DS} - V_{DS}^2/2]$, a parabola from the origin with initial slope 1.75 mS ($R_{on}$ ≈ 573 Ω): 0.38 mA at 0.25 V, 0.63 mA at 0.5 V, 0.79 mA at 0.9 V. Active for $V_{DS} > 0.9$ V: $I_D = \tfrac12k'(W/L)V_{ov}^2(1+\lambda V_{DS}) = 0.786\ \mathrm{mA}\,(1+0.024V_{DS})$, rising slowly from 0.80 mA at 0.9 V to 0.84 mA at 3 V (slope ≈ 19 µA/V, $r_o$ ≈ 53 kΩ).
- $V_{GS} = 3$ V ($V_{ov} = 2.4$ V): triode up to $V_{DS} = 2.4$ V: 1.10 mA at 0.25 V, 2.09 mA at 0.5 V, 3.69 mA at 1 V, 4.80 mA at 1.5 V, 5.43 mA at 2 V, 5.59 mA at 2.4 V (initial slope 4.66 mS). Active above 2.4 V: $5.59\ \mathrm{mA}\,(1+0.024V_{DS})$ = 5.91 mA at 2.4 V to 5.99 mA at 3 V.
- The triode/active boundary is the parabola $I_D = \tfrac12k'(W/L)V_{DS}^2 = 0.97\ \mathrm{mA/V^2}\times V_{DS}^2$. (Applying $(1+\lambda V_{DS})$ only in the active region leaves a small step of 2–6% at the boundary; including it in the triode expression as well removes it. Either is fine.)

## Grading notes

+2: zero current at $V_{GS} = 0.5$ V; triode-to-active transitions at $V_{DS}$ = 0.9 V and 2.4 V; active-region currents ≈ 0.79–0.84 mA and ≈ 5.6–6.0 mA with a small positive slope from λ; triode parabolas with correct shape. +1: everything right except one value slip, or λ ignored (flat 0.786 and 5.59 mA) with that stated. 0: one of the two conducting curves wrong (e.g. the 3-V curve drawn saturating at 0.9 V), or no current values. -2 (asserted as fact): a nonzero current for $V_{GS} = 0.5$ V, saturation placed at $V_{DS} = V_{GS}$ instead of $V_{GS}-V_t$, the factor 1/2 dropped (currents doubled), or the 3-V curve called saturated over the whole range.

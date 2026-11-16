# Golden Solution - R424

## Reference answer

$W_{min} \approx 106\ \mu$m ($W/L \approx 213$).

- The drain of $M_3$ sits two diode drops below $V_{DD}$: $V_{D3} = V_{DD} - |V_{GS7}| - |V_{GS5}|$, with $|V_{GS5}| = |V_{GS7}|$ (identical devices, 0.5 mA each, γ = 0).
- $M_3$ saturated: $V_{D3} \ge V_b - V_{TH3} = 1.4 - 0.7 = 0.7$ V → $2|V_{GS5}| \le 2.3$ V → $|V_{GS5}| \le 1.15$ V → $|V_{OD5}| \le 0.35$ V.
- $0.5\ \mathrm{mA} = \tfrac12(38.4\ \mu\mathrm{A/V^2})(W/L)(0.35)^2$ → $W/L \ge 212.6$ → $W \ge 106\ \mu$m with $L = 0.5\ \mu$m.

## Grading notes

+2: $W \approx 106\ \mu$m (±3%), from $V_{DD} - 2|V_{GS}| \ge V_b - V_{TH}$. +1: right method with a small slip (e.g., only W/L ≈ 213 given without converting to the width). 0: right condition, arithmetic error changing the value. -2 (asserted as fact): saturation condition taken as $V_{D3} \ge V_b - V_{GS3}$ or $V_{D3} \ge V_b$, only one PMOS drop counted, or $\mu_nC_{ox}$ used for the PMOS.

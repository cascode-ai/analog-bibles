# Golden Solution - R454

## Reference answer

$(W/L)_5 \approx 239$, $(W/L)_6 \approx 833$ (with $L = 0.5\ \mu$m: $W_5 \approx 119\ \mu$m, $W_6 \approx 417\ \mu$m).

- The output swings between $V_{OD5}$ and $V_{DD} - |V_{OD6}|$, so a 2.5-V swing requires $V_{OD5} + |V_{OD6}| \le 0.5$ V; equal overdrives: 0.25 V each.
- $(W/L)_5 = 2(1\ \mathrm{mA})/[134\ \mu\mathrm{A/V^2}\times(0.25)^2] = 239$; $(W/L)_6 = 2(1\ \mathrm{mA})/[38.4\ \mu\mathrm{A/V^2}\times(0.25)^2] = 833$.

## Grading notes

+2: overdrives of ≈ 0.25 V each from the 0.5-V budget and $(W/L)_5 \approx 239$, $(W/L)_6 \approx 833$ (±5%). +1: correct budget and method with a slip in one ratio. 0: budget miscounted (e.g., 2.5 V treated as ±2.5 V or the full $V_{GS}$ used) but sizes computed consistently. -2 (asserted as fact): $\mu_nC_{ox}$ used for $M_6$ or vice versa, swing limits set by $V_{GS}$ rather than overdrive, or sizes off by a formula error.

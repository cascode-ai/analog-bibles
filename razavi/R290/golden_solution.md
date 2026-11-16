# Golden Solution - R290

## Reference answer

$(W/L)_P \approx 326$ (e.g., $163\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$); maximum swing ≈ 2.2 V peak-to-peak (output between ≈ 0.39 V and 2.6 V).
- The PMOS stays saturated while $V_{SD} \ge |V_{GS}| - |V_{TH}|$, so $V_{out,max} = V_{DD} - |V_{GS,P} - V_{TH,P}|$; $V_{out,max} = 2.6$ V requires an overdrive of 0.4 V.
- $1\ \mathrm{mA} = \tfrac12(38.4\ \mu\mathrm{A/V^2})(W/L)_P(0.4)^2 \Rightarrow (W/L)_P = 325.5$.
- Lower limit: $M_1$ saturated requires $V_{out} \ge V_{GS1} - V_{TH1} = \sqrt{2I_D/[\mu_nC_{ox}(W/L)_1]} = \sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.386$ V (small input signal).
- Swing: $2.6 - 0.386 \approx 2.21$ V peak-to-peak.
(Including $(1 + \lambda_P V_{SD})$ at $V_{SD} = 0.4$ V would lower the aspect ratio to ≈ 301.)

## Grading notes

+2: PMOS overdrive 0.4 V, $(W/L)_P$ within ±8% of 326 (≈ 300–350, e.g., if CLM is included), and swing ≈ 2.2 V (2.1–2.3 V) obtained from the $M_1$ overdrive ≈ 0.39 V. +1: aspect ratio right, swing given as 2.6 V minus a slightly different lower limit with a stated reason (e.g., including a few tenths of a volt of margin), or a single slip. 0: aspect ratio right but swing wrong (e.g., 2.6 V from a lower limit of 0 V, or a lower limit of $V_{TH}$), or swing right with a wrong aspect ratio from a formula slip. -2 (asserted as fact): both results wrong through a model error, e.g. overdrive taken as $V_{DD} - 2.6 - |V_{TH}|$ or a similar threshold error giving a different sizing, or μnCox used for the PMOS.

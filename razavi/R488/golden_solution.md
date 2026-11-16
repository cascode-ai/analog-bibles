# Golden Solution - R488

## Reference answer

$V_X = V_Y \approx 1.54$ V.
- X and Y drive the gates of $M_5$ and $M_6$, whose sources (and bulks) are at $V_{DD}$ and which must carry the 1 mA set by $M_7$, $M_8$.
- $|V_{GS5}| = |V_{TH}| + \sqrt{\dfrac{2I_D}{\mu_pC_{ox}(W/L)_5}} = 0.8 + \sqrt{\dfrac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(120)}} = 0.8 + 0.659 = 1.459$ V (no body effect; λ neglected for the bias).
- $V_X = V_Y = V_{DD} - |V_{GS5}| \approx 3 - 1.46 = 1.54$ V.

## Grading notes

+2: 1.53–1.55 V via $|V_{GS5}|$ at 1 mA with W/L = 60/0.5. +1: right method, small arithmetic slip (within ±0.03 V). 0: right method, larger slip. -2 (asserted as fact): W/L = 50/0.5 used for $M_5$ (≈ 1.48 V), NMOS data used, the level derived from the first-stage NMOS devices, or $V_X = V_{DD} - |V_{TH}|$.

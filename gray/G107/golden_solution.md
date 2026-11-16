# Golden Solution - G107

## Reference answer

$|V_{OS}| \approx 6$ mV (≈ $0.233V_T$ = 6.1 mV with all terms linearized; 5.85 mV if the β term is kept as $\ln(1+2/\beta_F)$; 5.78 mV with every term kept as an exact logarithm, $V_T\ln[1.05(1+1.95/15)/0.95]$, where the $Q_4$ base current is $I_{C4}/\beta_F$ with $I_{C4} = 0.95I_{C3}$).

- With the output at $V_{SUP} - |V_{BE}|$, the load transistors have equal $V_{CE}$, so KVL in the mirror gives $I_{C4} = I_{C3}(I_{S4}/I_{S3})$, and KCL at the collector of $Q_3$ gives $I_{C1} = I_{C3}(1 + 2/\beta_F)$; $I_{C2} = I_{C4}$.
- $V_{OS} = V_{BE1} - V_{BE2} = V_T\ln\left(\dfrac{I_{C1}I_{S2}}{I_{C2}I_{S1}}\right) = V_T\ln\left[\dfrac{I_{S3}}{I_{S4}}\dfrac{I_{S2}}{I_{S1}}\left(1 + \dfrac{2}{\beta_F}\right)\right] \approx V_T\left(\dfrac{\Delta I_{SP}}{I_{SP}} - \dfrac{\Delta I_{SN}}{I_{SN}} + \dfrac{2}{\beta_F}\right)$.
- Worst case (random mismatch terms added in magnitude, systematic β term always present): $V_T(0.05 + 0.05 + 2/15) = 26\ \mathrm{mV}\times0.233 \approx 6.1$ mV.

## Grading notes

+2: 5.7–6.2 mV (linearized 6.1 mV, exact logarithms 5.78 mV), with both ±5 % terms added in magnitude and the $2/\beta_F$ = 0.133 systematic term from the load's base currents. +1: correct terms with a small slip, or the two random terms combined by root-sum-square with that choice stated (≈ 5.3 mV). 0: the β term or one of the mismatch terms omitted (≈ 2.6 or ≈ 4.8 mV) with sound reasoning otherwise. -2 (asserted as fact): β term taken as $1/\beta_F$ or computed with the npn β, offset multiplied by a gain, or the mismatch terms claimed to cancel.

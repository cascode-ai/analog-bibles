# Golden Solution - R546

## Reference answer

The TC is negative throughout and becomes more negative as $T$ rises, almost linearly but with a slowly decreasing slope (a $-\ln T$ dependence):
≈ −1.36 mV/K at 200 K, −1.41 at 250 K, −1.45 at 300 K, −1.48 at 350 K, −1.51 mV/K at 400 K. Its slope is $d(\mathrm{TC})/dT = -(4+m)k/(qT)$: −1.08 μV/K² at 200 K, −0.72 at 300 K, −0.54 at 400 K. The curve is concave up.

Derivation:
- The formula is a differential equation for $V_{BE}(T)$. Its solution (equivalently, stepping $V_{BE}(T + \Delta T) = V_{BE}(T) + \mathrm{TC}\cdot\Delta T$ iteratively) is $V_{BE}(T) = E_g/q + (T/T_0)(V_{BE0} - E_g/q) - (4+m)(kT/q)\ln(T/T_0)$, with $T_0 = 300$ K and $V_{BE0} = 0.75$ V.
- $V_{BE}$ ≈ 0.891 V at 200 K, 0.750 V at 300 K, 0.602 V at 400 K.
- Substituting: $\mathrm{TC}(T) = [V_{BE0} - (4+m)V_{T0} - E_g/q]/T_0 - (4+m)(k/q)\ln(T/T_0)$, i.e. $-1.449\ \mathrm{mV/K} - 0.215\ \mathrm{mV/K}\cdot\ln(T/300\ \mathrm{K})$.
- Holding $V_{BE}$ at 750 mV would wrongly give a TC of −2.07 mV/K at 200 K and −1.14 mV/K at 400 K (opposite trend); this is why $V_{BE}$ must be updated.

## Grading notes

+2: TC negative, ≈ −1.45 mV/K at 300 K, magnitude increasing with temperature to ≈ −1.51 mV/K at 400 K and ≈ −1.36 mV/K at 200 K (±0.03 mV/K), obtained with $V_{BE}$ updated as $T$ changes; the gentle concave-up shape described. +1: correct trend and room-temperature value with endpoint values outside the tolerance, or the correct shape described without numbers. 0: right method (iteration) with a slip that distorts the values but not the trend. -2 (asserted as fact): $V_{BE}$ held constant, giving a TC whose magnitude decreases with temperature (e.g., −2.1 mV/K at 200 K to −1.1 mV/K at 400 K), a positive TC, or a TC independent of temperature.

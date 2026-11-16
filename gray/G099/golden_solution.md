# Golden Solution - G099

## Reference answer

$dV_{OUT}/dT = -(k/q)\ln2 \approx -60\ \mu\mathrm{V/°C}$ (≈ −0.06 mV/°C, about −47 ppm/°C), independent of γ and $V_{G0}$.

- With $V_{OS} = 0$ the op amp makes the voltages across $R_1$ and $R_2$ equal, so $I_1/I_2 = R_2/R_1$ and $V_{R3} = V_{EB1} - V_{EB2} = V_T\ln\left(\dfrac{I_1}{I_2}\dfrac{I_{S2}}{I_{S1}}\right)$, $V_{OUT} = V_{EB2} + (1 + R_2/R_3)\Delta V_{EB}$.
- Doubling both saturation currents leaves $\Delta V_{EB}$, the currents and the PTAT term unchanged, but lowers $V_{EB2}$ by $V_T\ln2$ (≈ 17.8 mV) at every temperature.
- So $V_{OUT}(T) = V_{OUT,\text{nom}}(T) - (kT/q)\ln2$, and since $dV_{OUT,\text{nom}}/dT = 0$ at 25 °C, $dV_{OUT}/dT = -(k/q)\ln2 = -59.7\ \mu\mathrm{V/K}$. (Equivalently, the output is 17.8 mV below the target, and $dV/dT \approx \Delta V/T = -17.8\ \mathrm{mV}/298\ \mathrm{K}$.)

## Grading notes

+2: −55 to −62 µV/°C (negative), with the reasoning that the PTAT term is unchanged while $V_{EB}$ drops by $V_T\ln2$. A wording slip that contradicts the answer's own correct derivation (e.g. "the CTAT term is unaffected" where the PTAT term is meant, followed by the correct $V_T\ln2$ drop of $V_{EB}$) is trivial and does not lower +2. +1: correct sign and mechanism with a small numerical slip. 0: correct mechanism but magnitude off by a factor from a slip (e.g. using the γ-dependent slope incorrectly). -2 (asserted as fact): positive slope, a claim that the TC stays zero because the ratio of saturation currents is unchanged, or a value of order mV/°C.

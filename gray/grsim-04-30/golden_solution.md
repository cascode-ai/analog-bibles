# Golden Solution - grsim-04-30

## Reference answer

Target: with PTAT currents the zero-TC output is $V_{OUT} = V_{G0} + (\gamma - 1)V_T \approx 1.205 + 2.2(0.0257) \approx 1.26$ V with the stated model. A simulator's default bipolar temperature model (EG = 1.11 eV, XTI = 3) plays the same role with $V_{G0} \to$ EG and $\gamma \to$ XTI, giving ≈ $1.11 + 2(0.0257) \approx 1.16$ V. The open-loop gain of 10⁴ changes these by well under 1 mV. Example resistor choice: $R_1 = R_2$, so $\Delta V_{EB} = V_T\ln8 = 53.4$ mV (PTAT), with $R_2/R_3$ trimmed until $dV_{OUT}/dT = 0$ at 25 °C; the required ratio depends on the chosen current level, but the resulting output is the target above.

After doubling both $I_S$ and retrimming the gain so that $V_{OUT}$ returns to the target at 25 °C: $dV_{OUT}/dT \approx 0$. Doubling $I_S$ lowers $V_{EB}$ by $(kT/q)\ln2$, an exactly PTAT amount; restoring $V_{OUT}$ at 25 °C adds exactly that PTAT amount back through the gain, so the whole curve returns to the nominal one. Without retrimming, $dV_{OUT}/dT = -(k/q)\ln2 \approx -60\ \mu\mathrm{V/°C}$, so trimming to the target voltage removes the $I_S$-induced TC error.

## Grading notes

A correct result gives a target ≈ 1.26 V for the stated model (≈ 1.15–1.20 V is acceptable if the simulator's EG = 1.11 eV/XTI = 3 defaults are used and stated), and $dV_{OUT}/dT$ ≈ 0 (|dV/dT| ≲ 5 µV/°C) after retrimming, contrasted with ≈ −60 µV/°C without retrimming. Claiming that the retrimmed circuit still has ≈ −60 µV/°C, or a target near 0.6 V or 2.4 V, is wrong.

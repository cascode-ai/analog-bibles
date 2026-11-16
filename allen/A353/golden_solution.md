# Golden Solution - A353

## Reference answer

$W_2/L_2 = 100$; $V_{DS2} \approx 6.9$ mV for $i_2 = 10$ µA.

- M1: $V_{GS} - V_T = \sqrt{2i_1/(K'S_1)} = \sqrt{20/(110\cdot10)} = 0.1348$ V (shared by M2).
- M2 saturated: $i_2/i_1 = S_2/S_1$ → $S_2 = 10\times(100/10) = 100$.
- Active region: $10\ \mu\mathrm{A} = 110\ \mu\mathrm{A/V^2}\times100\,[0.1348\,V_{DS} - V_{DS}^2/2]$ → $V_{DS}^2 - 0.2697V_{DS} + 1.818\times10^{-3} = 0$ → $V_{DS2} = 0.1348 - \sqrt{0.1348^2 - 2(9.09\times10^{-4})} = 6.9$ mV (the other root exceeds $V_{GS} - V_T$ and is not valid).
- So with $V_{DS2}$ ≈ 7 mV the mirror is 1:1, and once $V_{DS2}$ rises above ≈ 0.135 V the output becomes 100 µA (boost factor 10).

## Grading notes

+2: $W_2/L_2$ = 100 and $V_{DS2}$ = 6.5–7.5 mV from the triode equation, with the shared overdrive ≈ 0.135 V. +1: one of the two correct and the other off through an arithmetic slip (or the quadratic's root chosen correctly but slightly miscomputed). 0: correct $W_2/L_2$ only, with $V_{DS2}$ missing. −2 (asserted as fact): $W_2/L_2$ = 10 (ignoring the required gain), $V_{DS2}$ from the saturation equation, the larger quadratic root (≈ 0.26 V, not in triode) chosen, or the deep-triode resistor form used so as to give a wrong value by more than ±20 %.

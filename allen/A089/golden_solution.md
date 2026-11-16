# Golden Solution - A089

## Reference answer

$i_O(\min) \approx 13.9\ \mu$A and $i_O(\max) \approx 28.5\ \mu$A (nominal 20 µA).

- Nominal: $V_{GS} = 0.7 + \sqrt{2\times20\ \mu/(110\ \mu\times3)} = 1.048$ V.
- Maximum: M1 weak and M2 strong. M1 with $K'$ −5%, $W$ −5%, $L$ +5%, $V_T$ +5 mV: $\beta_1 = 110\times0.95\times3\times0.95/1.05 = 283.6\ \mu\mathrm{A/V^2}$, so $V_{GS} = 0.705 + \sqrt{40/283.6} = 1.0806$ V. M2 with $K'$ +5%, $W$ +5%, $L$ −5%, $V_T$ −5 mV: $\beta_2 = 383.0\ \mu\mathrm{A/V^2}$, $i_O = \tfrac12\times383.0\ \mu\times(1.0806 - 0.695)^2 = 28.5\ \mu$A.
- Minimum: the reverse. $\beta_1 = 383.0$: $V_{GS} = 0.695 + \sqrt{40/383.0} = 1.0182$ V; $\beta_2 = 283.6$, $V_T = 0.705$ V: $i_O = \tfrac12\times283.6\ \mu\times(0.3132)^2 = 13.9\ \mu$A.
- First-order check: $i_O/i_I \approx 1 + \Delta K'/K' + \Delta(W/L)/(W/L) - 2\Delta V_T/(V_{GS} - V_T)$ ≈ 1 ± (0.10 + 0.20 + 0.057), i.e. ±36%, consistent with the exact −30%/+42%.
- If the variations were common to both transistors (fully correlated), the mirror ratio would not change and $i_O$ would stay 20 µA.

## Grading notes

+2: $i_O(\min)$ ≈ 13–15 µA and $i_O(\max)$ ≈ 27.5–29.5 µA from a worst-case combination in which M1 and M2 deviate in opposite directions (exact square-law or first-order sensitivity analysis). +1: correct worst-case method with a slip in one bound, or only $W$/$L$ and $K'$ combined correctly with the $V_T$ term mishandled. 0: only M2 varied with $V_{GS}$ fixed at the nominal value (≈ 16.7 and ≈ 23.9 µA), or a correct method with no numbers. −2 (asserted as fact): bounds above about 35 µA (e.g. ≈ 28 µA and ≈ 57 µA from a factor-2 error), variations treated as common so that $i_O$ = 20 µA despite the stated independence, or the ±5% tolerances simply added to give 19–21 µA.

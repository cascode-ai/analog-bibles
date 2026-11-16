# Golden Solution - grsim-09-21

## Reference answer

Hand analysis: open-loop gain ≈ 4.3 × 10⁴ (≈ 92.7 dB), unity-gain bandwidth ≈ 3.1 MHz (19.4 Mrad/s), slew rate 4 V/μs.

- $L_{\text{eff}} = 8 - 0.6 - 1 = 6.4$ μm; $\lambda_n = 0.031$ V⁻¹, $\lambda_p = 0.0156$ V⁻¹; $W/L_{\text{eff}}$ = 15.6 for the 100/8 devices.
- Currents: $M_5$, $M_7$ = 20 μA (mirrors of $M_8$); $M_1$, $M_2$ = 10 μA; $M_6$ = 20 μA (twice $M_4$'s size and current).
- $g_{m1} = \sqrt{2 \times 30.2 \times 15.6 \times 10}$ μA/V = 97 μA/V; $R_1 = r_{o2}\|r_{o4} = 6.4\text{ MΩ}\|3.2\text{ MΩ} = 2.13$ MΩ; $g_{m1}R_1 = 207$.
- $g_{m6} = 194$ μA/V; $R_2 = r_{o6}\|r_{o7} = 1.6\text{ MΩ}\|3.2\text{ MΩ} = 1.07$ MΩ; $g_{m6}R_2 = 207$.
- $a_0 = 207^2 ≈ 4.3 \times 10^4$; dominant pole $1/(g_{m6}R_1R_2C_c)$ ≈ 452 rad/s (72 Hz); $\omega_u = g_{m1}/C_c = 19.4$ Mrad/s → 3.1 MHz; SR $= I_5/C_c = 20\text{ μA}/5\text{ pF} = 4$ V/μs.
- For the simulation, $M_9$ must have an on-resistance $1/g_{m6}$ ≈ 5.1 kΩ with its gate at +5 V: $V_{GS9} ≈ 10 - V_{GS6} ≈ 9.1$ V and, with body effect ($\gamma_n ≈ 0.21$ V^½, $V_{SB} ≈ 0.9$ V), $V_{t9} ≈ 0.8$ V, so $(W/L)_{9,\text{eff}} ≈ 1/[5.1\text{ kΩ} \times 60.4\text{ μA/V}^2 \times 8.3\text{ V}] ≈ 0.39$ (a long, narrow device).

## Grading notes

Hand results: gain ≈ 4.3 × 10⁴ (accept 3.5–5 × 10⁴ depending on λ and $(1+\lambda V_{DS})$ details), unity-gain bandwidth ≈ 3.1 MHz (±10%), SR = 4 V/μs. A correct simulation (level-1 type models with the given data) shows a dc gain of ≈ 90–94 dB, a dominant pole near 50–100 Hz, a unity-gain frequency ≈ 3 MHz (±15%) with a phase margin well above 45° (no right-half-plane-zero phase lag), and slew rates ≈ ±4 V/μs. Large discrepancies point to wrong λ (e.g. using 0.2 V⁻¹), wrong bias currents, or an $M_9$ that does not give ≈ 5 kΩ.

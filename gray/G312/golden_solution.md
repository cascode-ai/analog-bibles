# Golden Solution - G312

## Reference answer

Open-loop gain ≈ 3.9 × 10⁴ (≈ 92 dB); unity-gain bandwidth ≈ 3.3 × 10⁸ rad/s ≈ 52 MHz; slew rate = 40 V/μs.

- $L_{\text{eff}} = 1 - 0.18 - 0.1 = 0.72$ μm; $\lambda_n = 0.02/0.72 = 0.0278$ V⁻¹, $\lambda_p = 0.04/0.72 = 0.0556$ V⁻¹.
- Currents: $M_5$ and $M_7$ mirror $M_8$ (same size): 200 μA each; $M_1$, $M_2$: 100 μA each; $M_6$ (100/1, twice $M_4$) carries 200 μA, matching $M_7$.
- $g_{m1} = \sqrt{2k'_p(W/L)_1 I_{D1}} = \sqrt{2 \times 64.7\text{ μA/V}^2 \times 208.3 \times 100\text{ μA}} = 1.64$ mA/V ($|V_{ov}|$ = 0.12 V).
- $R_1 = r_{o2}\|r_{o4} = 180\text{ kΩ}\|360\text{ kΩ} = 120$ kΩ; first-stage gain $g_{m1}R_1 = 197$.
- $g_{m6} = \sqrt{2 \times 194\text{ μA/V}^2 \times 138.9 \times 200\text{ μA}} = 3.28$ mA/V; $R_2 = r_{o6}\|r_{o7} = 180\text{ kΩ}\|90\text{ kΩ} = 60$ kΩ; second-stage gain 197.
- $a_0 = 197 \times 197 ≈ 38{,}800$ (91.8 dB). (Only the magnitude is asked; from the input marked + in the figure, which drives $M_1$ on the diode side of the mirror, the first stage is non-inverting and $M_6$ inverts, so the overall gain from that input is negative.)
- With the zero cancelled, unity-gain bandwidth $= g_{m1}/C_c = 1.64\text{ mA/V}/5\text{ pF} = 3.28 \times 10^8$ rad/s → 52 MHz.
- Slew rate $= I_{D5}/C_c = 200\text{ μA}/5\text{ pF} = 40$ V/μs.

## Grading notes

+2: gain ≈ 3.9 × 10⁴ (accept 3.3–4.5 × 10⁴, e.g. with $(1+\lambda V_{DS})$ factors or slightly different $L_{\text{eff}}$), unity-gain bandwidth ≈ 52 MHz (±10%; 3.3 × 10⁸ rad/s), slew rate 40 V/μs. +1: two of the three right and the third off by a slip, or values in rad/s vs Hz mislabelled once. 0: correct method but $L_{\text{eff}}$ or λ wrong (e.g. λ taken as $dX_d/dV_{DS}$ itself), changing the gain substantially, with bandwidth and slew rate right. −2 (asserted as fact): slew rate from the 100-μA branch current (20 V/μs), bandwidth $g_{m6}/C_c$, wrong current distribution (e.g. $M_6$ at 100 μA), or the gain computed as a single stage. Side remarks that leave the three values unchanged, such as the 40 V/μs attributed to the output-stage current instead of the tail current $I_{D5}$ (both 200 μA here) or a wrong overall sign of the gain, are minor false claims: with all three values right such an answer is +1, and answers that make the same remarks get the same score.

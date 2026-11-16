# Golden Solution - R457

## Reference answer

$(W/L)_{1,2} \approx 206$ (W ≈ 103 μm), giving $g_{m1} \approx 2.81$ mS and $|V_{OD1}| \approx 0.36$ V.

- Output stage: $A_2 = g_{m5}(r_{O5}\|r_{O6}) = 8\ \mathrm{mS} \times 3.33\ \mathrm{k\Omega} = 26.7$, so the first stage must give $A_1 = 500/26.7 = 18.75$.
- First stage: $A_1 = g_{m1}(r_{O2}\|r_{O4})$, with $r_{O2} = 1/(0.2 \times 0.5\ \mathrm{mA}) = 10$ kΩ (PMOS) and $r_{O4} = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ → 6.67 kΩ; $g_{m1} = 18.75/6.67\ \mathrm{k\Omega} = 2.81$ mS.
- $(W/L)_1 = g_{m1}^2/(2\mu_pC_{ox}I_D) = (2.81\ \mathrm{mS})^2/(2 \times 38.4\ \mu \times 0.5\ \mathrm{m}) = 206$.

## Grading notes

+2: $(W/L)_{1,2} \approx 206$ (195–215), with $A_2 = 26.7$, $A_1 = 18.75$, $r_{O2}\|r_{O4} = 6.67$ kΩ, and PMOS $\mu_pC_{ox}$. +1: correct method with a small slip (e.g., rounding $A_2$ differently), within ±10%. 0: right method but the first-stage output resistance wrong by a slip (e.g., λ values swapped giving a different size). -2 (asserted as fact): $\mu_nC_{ox}$ used for the PMOS input pair, the first-stage gain set to 500 alone (ignoring $A_2$), or $g_m$ formula errors.

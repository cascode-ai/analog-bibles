# Golden Solution - grsim-07-47

## Reference answer

- Short-circuit time constants are all zero: shorting any two of $C$, $C_{\text{in}}$, $C_L$ (which form a loop: inverting node–output–ground) also shorts the third, so each sees zero resistance.
- Zero-value time constants: $C$: $R + R_o + a_vR = 20.0$ MΩ → 1.001 ms; $C_{\text{in}}$: $R$ → 4 ns; $C_L$: $R_o$ → 2.5 ns. $C$ dominates by ≈ 2.5×10⁵, giving $|p_1| \approx 999$ rad/s.
- Short $C$: $C_{\text{in}}$ and $C_L$ are in parallel (0.7 pF) between the merged node and ground, which sees $R\|[R_o/(1 + a_v)] = 4.99\ \Omega$ → τ = 3.5 ps → $|p_2| \approx 2.86\times10^{11}$ rad/s (45.5 GHz).
- Simulation (linear model): poles at −999 rad/s and $-2.85\times10^{11}$ rad/s; the estimate is within ≈ 0.2%. The load capacitor lowers the nondominant pole from ≈ 10¹² rad/s (without $C_L$) by the ratio $(C_{\text{in}} + C_L)/C_{\text{in}}$.

## Grading notes

Hand part: +2 needs the verification that every short-circuit time constant is zero (capacitor loop), the zero-value time constants with $C$ dominant (≈ 1 ms), and $|p_2| \approx 2.9\times10^{11}$ rad/s from $(C_{\text{in}} + C_L)\cdot4.99\ \Omega$ (±5%). A correct simulation shows ≈ −2.85×10¹¹ rad/s. −2 (asserted as fact): a finite nonzero short-circuit time constant claimed for each capacitor, or $C_L$ alone used with $R_o$ (≈ 4×10⁸ rad/s) as the nondominant pole.

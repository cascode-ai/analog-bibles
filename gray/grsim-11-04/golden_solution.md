# Golden Solution - grsim-11-04

## Reference answer

$\overline{v_o^2}/\Delta f \approx 1.12\times10^{-12}$ V²/Hz (≈ 1.06 µV/√Hz); output noise in 2 MHz ≈ 1.5 mV rms; MDS ≈ 6.9 nA rms.

- $g_m = 38.5$ mS, $r_\pi = 1.3$ kΩ, $I_B = 20\ \mu$A; base node impedance $R_S\parallel r_\pi = 565\ \Omega$.
- Base-node noise currents: $4kT/R_S = 1.66\times10^{-23}$ and $2qI_B = 6.4\times10^{-24}$ A²/Hz → $v_{be}^2 = 2.30\times10^{-23}\times565^2 = 7.35\times10^{-18}$ V²/Hz, amplified by $(g_mR_L)^2 = 384.6^2$: $1.087\times10^{-12}$ V²/Hz.
- Output-node noise: $(2qI_C + 4kT/R_L)R_L^2 = 3.2\times10^{-14} + 1.7\times10^{-16}$ V²/Hz.
- Total $1.119\times10^{-12}$ V²/Hz; × 2 MHz → $2.24\times10^{-6}$ V² → 1.50 mV rms.
- Transimpedance $v_o/i_S = g_mR_L(R_S\parallel r_\pi) = 217$ kΩ → equivalent input noise $2.37\times10^{-23}$ A²/Hz → MDS = 1.50 mV/217 kΩ ≈ 6.9 nA rms. The source resistor dominates (≈ 70%), then base-current shot noise (≈ 27%).

## Grading notes

A correct answer shows ≈ $1.1\times10^{-12}$ V²/Hz at the output, ≈ 1.5 mV rms in 2 MHz and an MDS ≈ 6.9 nA rms, and a simulation (with a noiseless bias, e.g., ideal current-source bias or large reactive decoupling, and $r_b = 0$, $V_A = \infty$) reproducing the output density within ±10%. +2: hand values within 10% and a matching simulation. +1: correct hand analysis with the simulation missing or with an explained discrepancy (e.g., bias resistors adding noise). 0: one of the three results wrong through a slip. −2: base-current noise multiplied by β², the source resistor treated as noiseless, or the MDS defined as a voltage at the output.

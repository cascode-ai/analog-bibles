# Golden Solution - grsim-11-24

## Reference answer

Low frequency: ≈ $5.5\times10^{-25}$ A²/Hz (≈ 0.74 pA/√Hz), set by the 30-kΩ feedback resistor. At the −3-dB frequency (≈ 650 MHz): ≈ $2.1\times10^{-23}$ A²/Hz (≈ 4.6 pA/√Hz), set by $M_1$'s channel noise acting on $C_S + C_{gs1}$. Adding $r_b = 200\ \Omega$ changes both by only a percent or two.

- DC (from the stated models): bias branch $(5 - V_{BE2} - V_{GS2})/10\text{ k} \approx 0.33$ mA, $Q_1$ base at 1.75 V, $Q_1$ emitter ≈ 1.0 V, so $R_{L1}$ carries ≈ 4.0 mA; $V_o = V_{GS1} \approx 0.98$ V (no dc current in the 30-kΩ resistor), $I_{D1} \approx 4.31$ mA ($g_{m1} = 22.8$ mS), $I_{C1} \approx 0.31$ mA, $I_{C3} \approx 0.97$ mA.
- Small signal: gate-to-output gain ≈ −183 (with the 30-kΩ loading); open-loop input pole $1/(2\pi\cdot30\text{ k}\cdot1.5\text{ pF}) = 3.5$ MHz; closed-loop transimpedance ≈ 29.8 kΩ with −3 dB at ≈ (1 + 183)·3.5 MHz ≈ 650 MHz.
- Shunt-feedback input noise: $\overline{i_i^2} = 4kT/R_F + \overline{v_{ia}^2}\,\left|1/R_F + j\omega(C_S + C_{gs1})\right|^2$, with $\overline{v_{ia}^2} \approx 4kT\left(\frac{2}{3g_{m1}} + \frac{1}{g_{m1}^2R_{L1}} + \dots\right) \approx 4kT(31\ \Omega)$ ($Q_1$, $R_{L2}$, bias-chain and $Q_3$ terms are smaller).
- Low frequency: $1.66\times10^{-20}/30\text{ k} = 5.53\times10^{-25}$ plus negligible $\overline{v_{ia}^2}/R_F^2$ → $5.54\times10^{-25}$ A²/Hz.
- At 650 MHz: $\omega(C_S + C_{gs1}) = 6.1$ mS → $4kT(31)\times3.8\times10^{-5} \approx 2.0\times10^{-23}$, plus $5.5\times10^{-25}$ → ≈ $2.1\times10^{-23}$ A²/Hz.

## Grading notes

A correct answer shows a low-frequency density ≈ $5.5\times10^{-25}$ A²/Hz dominated by $4kT/30$ kΩ, a −3-dB frequency of several hundred MHz (≈ 0.5–0.8 GHz) from the loop gain times the 3.5-MHz input pole, and a density there of ≈ $1.5$–$3\times10^{-23}$ A²/Hz dominated by $\overline{v_{ia}^2}\omega^2(C_S + C_{gs1})^2$; the simulation agrees within ±20% and shows $r_b = 200\ \Omega$ has little effect. +2: these features with consistent numbers. +1: correct low-frequency value and mechanism at high frequency but the −3-dB frequency or high-frequency value off by up to 2×. 0: low-frequency part right, high-frequency part missing or wrong. −2: the feedback treated as positive or the forward path as non-inverting (latch-up claimed), input noise current claimed to fall at high frequency, or the feedback resistor treated as noiseless.

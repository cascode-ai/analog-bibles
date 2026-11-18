# Golden Solution - G224

## Reference answer

$v_o/v_i \approx -1.3\times10^3$; $T_0 \approx 12.4\ \mu$s → $f_{-3\text{dB}} \approx 13$ kHz.

- Bias: $I_{\text{REF}} = (10 - 0.7)/20\ \mathrm{k\Omega} = 0.465$ mA in $Q_6$; $Q_5$ is a Widlar source: $V_T\ln(I_{\text{REF}}/I_{C5}) = I_{C5}R_{B1}$ → $I_{C5} \approx 10\ \mu$A, so $I_{C1} = I_{C2} = 5\ \mu$A.
- $g_{m1} = 0.192$ mA/V, $r_{\pi1} = 521\ \mathrm{k\Omega}$, $r_{o1} = 120/5\ \mu = 24$ MΩ, $r_{o3} = 50/5\ \mu = 10$ MΩ, load $R_L = r_{o1}\|r_{o3} = 7.07$ MΩ.
- DM gain (the input $v_i$ on one side is purely differential for the differential output): $v_o/v_i = -g_{m1}R_L\,r_{\pi1}/(r_{\pi1} + 20\ \mathrm{k\Omega}) = -1359\times0.963 = -1307$.
- Capacitances: $C_{\pi1} = \tau_Fg_m + C_{je} = 222\ \mathrm{ps}\times0.192\ \mathrm{mA/V} + 3\ \mathrm{pF} = 3.04$ pF; $C_{\mu1}$ ($V_{CB} = 5$ V) = 0.220 pF; $C_{cs1}$ (15 V) = 0.376 pF; $C_{\mu3}$ ($Q_3$ base at $V_B \approx 9.3$ V, collector at 5 V) = 0.337 pF, from the output to ac ground. ($C_{\pi3}$ and $C_{bs3}$ are shorted, so the lateral-pnp $f_T$ (which gives $\tau_F \approx 39.6$ ns) is not needed.)
- Half-circuit time constants: $C_{\pi1}$: $20\ \mathrm{k}\|r_{\pi1} = 19.3\ \mathrm{k\Omega}$ → 58.6 ns; $C_{\mu1}$: $R_{\pi0} + R_L + g_mR_LR_{\pi0} = 33.2$ MΩ → 7.32 µs; $C_{cs1}$ and $C_{\mu3}$: $R_L = 7.07$ MΩ → 2.66 µs and 2.38 µs.
- $T_0 = 12.42\ \mu$s → 12.8 kHz (exact half-circuit analysis: 12.8 kHz).

## Grading notes

+2: tail current ≈ 10 µA from the Widlar relation $V_T\ln(I_{\text{REF}}/I_{C5}) = I_{C5}R_{B1}$, gain ≈ −1.3×10³ (±10%), and $f_{-3\text{dB}}$ ≈ 11–15 kHz with $C_{\mu1}$ (Miller) and the output-node capacitances ($C_{cs1}$, $C_{\mu3}$) as the main terms. +1: bias slightly off (e.g., Widlar solved approximately) with consistent results within ±20%. 0: gain right but the bandwidth uses a wrong output-node resistance or omits one of the output-node capacitances. −2 (asserted as fact): $Q_5$ treated as a 1:1 mirror (tail ≈ 0.465 mA) or any other misreading of the $Q_5$/$Q_6$ bias network, output resistance infinite (infinite gain), or Miller multiplication of $C_{\mu1}$ omitted. The lateral-pnp $f_T$ data (giving $\tau_F \approx 39.6$ ns) are not needed, since $C_{\pi3}$ is shorted in the DM half-circuit.

# Golden Solution - G223

## Reference answer

$v_o/i_i \approx 0.71$ MΩ (unchanged); $T_0 \approx 28.7\ \mu$s → $f_{-3\text{dB}} \approx 5.5$ kHz.

- Bias and small-signal values as without the capacitor: $I_D = 46.8\ \mu$A, $g_{m1} = 0.790$ mA/V, $1/g_{m1} = 1.27\ \mathrm{k\Omega}$, $R_{\text{out}} = 0.713$ MΩ.
- The 20 pF adds to $C_{gd1}$ (28 fF) and sees $1/g_{m1} + R_{\text{out}} + g_{m1}R_{\text{out}}(1/g_{m1}) = 1.43$ MΩ → 28.57 µs.
- Other time constants (≈ 0.17 µs total) are negligible: $T_0 = 28.74\ \mu$s → 5.5 kHz (exact: 5.5 kHz).
- Compared with the bipolar version the bandwidth is ≈ 4 times higher because the resistance driving the gate is only $1/g_{m1}$ rather than $r_\pi$.

## Grading notes

+2: transresistance ≈ 0.71 MΩ and $f_{-3\text{dB}}$ ≈ 5–6 kHz with the 20 pF Miller-multiplied (≈ 1.43 MΩ). +1: small slip (within ±15%). 0: method right, resistance seen by the 20 pF wrong by > 30%. −2 (asserted as fact): the capacitor treated as grounded, the $1/g_{m1}$ resistor ignored (infinite gate resistance), or a bandwidth above 50 kHz presented.

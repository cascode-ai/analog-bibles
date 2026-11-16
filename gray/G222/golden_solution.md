# Golden Solution - G222

## Reference answer

$v_o/i_i = r_{o1}\|r_{o2} \approx 0.71$ MΩ; $T_0 \approx 0.21\ \mu$s → $f_{-3\text{dB}} \approx 0.76$ MHz.

- Bias: $(2.5 - V_{GS3})/30\ \mathrm{k\Omega} = \tfrac{60\ \mu}{2}\tfrac{100}{0.6}(V_{GS3} - 1)^2$ → $V_{GS3} = 1.097$ V, $I_D = 46.8\ \mu$A in all transistors.
- $g_{m2} = g_{m3} = \sqrt{2(60\ \mu)(166.7)(46.8\ \mu)} = 0.967$ mA/V; $g_{m1} = \sqrt{2(20\ \mu)(333.3)(46.8\ \mu)} = 0.790$ mA/V, so the added resistor is $1/g_{m1} = 1.27\ \mathrm{k\Omega}$. $r_{o1} = 50/I_D = 1.07$ MΩ, $r_{o2} = 100/I_D = 2.14$ MΩ, $R_{\text{out}} = 0.713$ MΩ.
- Transresistance: $i_i$ flows through $1/g_{m1}$, so $v_{sg1} = i_i/g_{m1}$ and $i_{d1} = i_i$ (unity current gain): $v_o/i_i = R_{\text{out}} = 0.713$ MΩ.
- Capacitances: $C_{gs1} = 84$ fF, $C_{gd1} = 28$ fF, $C_{gs2} = C_{gs3} = 42$ fF, $C_{gd2} = 14$ fF; $C_{db1}$ (PMOS, 2.5 V) = 106 fF, $C_{db2}$ (2.5 V) = 106 fF, $C_{db3}$ (1.1 V) = 143 fF; source–body capacitances are shorted.
- Time constants: $C_{gd1}$: $R + R_{\text{out}} + g_{m1}R_{\text{out}}R$ with $R = 1/g_{m1}$ → 1.43 MΩ → 39.9 ns; $C_{db1}$ and $C_{db2}$: $R_{\text{out}}$ → 75.2 ns each; $C_{gd2}$: ≈ 1.40 MΩ → 19.6 ns; $C_{gs1}$: 1.27 kΩ → 0.11 ns; $C_{gs2}$, $C_{gs3}$, $C_{db3}$ at the mirror node (≈ 1 kΩ) → 0.23 ns.
- $T_0 = 210$ ns → $f_{-3\text{dB}} = 0.76$ MHz (exact: 0.76 MHz).

## Grading notes

+2: bias current ≈ 47 µA, transresistance ≈ 0.71 MΩ (±10%), and $f_{-3\text{dB}}$ ≈ 0.65–0.85 MHz with the output-node capacitances and the Miller term of $C_{gd1}$ included. +1: one capacitance or the overlap terms omitted (result within ±25%), or λ included in the bias with small differences. 0: transresistance right, bandwidth wrong by > 2× (e.g., $L_{\text{eff}} = 1.6\ \mu$m used), or vice versa. −2 (asserted as fact): transresistance taken as $g_{m1}R_{\text{out}}\times$(something with β), the added $1/g_{m1}$ resistor ignored, or a bipolar $r_\pi$ used for the MOS gate. If the drawn length (2 µm) is used instead of $L_{\text{eff}}$ = 0.6 µm in the bias/$g_m$ calculation but the transresistance and $f_{-3\text{dB}}$ still fall within the +2 ranges (≈ 44 µA, ≈ 0.75 MΩ, ≈ 0.72 MHz, because $v_o/i_i = r_{o1}\|r_{o2}$ does not depend on $g_{m1}$ and the bandwidth is set mainly by $C_{db}R_{\text{out}}$), it is a minor error: +1.

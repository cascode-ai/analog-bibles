# Golden Solution - G278

## Reference answer

$T \approx 838$, $v_o/v_i \approx 0.9988$, $R_{in} \approx 839$ MΩ, $R_{out} \approx 0.235$ Ω.

- $g_m = \sqrt{2\cdot180\mu\cdot100\cdot0.5\text{m}} = 4.243$ mS; $g_{mb} = g_m\,\gamma/(2\sqrt{2|\phi_f| + V_{SB}}) = 4.243\text{m}\times0.3/(2\sqrt{0.6}) = 0.822$ mS; $1/(g_m+g_{mb}) = 197.5$ Ω.
- The feedback network is the wire from output to inverting input: $f = 1$, $h_{11f} = 0$, $h_{22f} = 0$ (no loading).
- Basic amplifier: no current flows in $R_o$ (MOS gate), so $a = a_v\cdot g_m/(g_m+g_{mb}) = 1000\times0.838 = 837.8$; $T = af = 837.8$.
- $A = 837.8/838.8 = 0.99881$.
- $R_{in} = R_i(1+T) = 1\text{ M}\times838.8 = 839$ MΩ; $R_{out} = 197.5/838.8 = 0.2354$ Ω.

## Grading notes

Four quantities. +2: $T$ 820–855, gain 0.9987–0.9989 (or "≈ 0.999, error ≈ 0.12%"), $R_{in}$ ≈ 0.82–0.86 GΩ, $R_{out}$ 0.230–0.240 Ω, with the body effect included. +1: body effect neglected ($T = 1000$, $R_{out} \approx 0.236$ Ω, gain 0.999) with an otherwise correct method, or one value slipped. 0: two of four right. −2 (asserted as fact): output resistance $1/g_m$ without feedback reduction, $R_{in}$ divided by $(1+T)$, or a voltage drop across $R_o$ assumed (gate current).

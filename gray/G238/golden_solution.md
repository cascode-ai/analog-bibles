# Golden Solution - G238

## Reference answer

$i_o/i_i = 4$; $T_0 = 0.194$ ns → $f_{-3\text{dB}} \approx 823$ MHz; $t_r = 2.2T_0 \approx 0.43$ ns.

- $g_{m1} = 2I_{D1}/V_{ov} = 6.67$ mA/V, $g_{m2} = 26.7$ mA/V; $i_o/i_i = g_{m2}/g_{m1} = 4$.
- Only the gate node has a non-zero resistance, $1/g_{m1} = 150\ \Omega$. Capacitance at that node: $C_{gs1} + C_{db1} + C_{gs2} + C_{gd2} = 0.2 + 0.09 + 0.8 + 0.2 = 1.29$ pF ($C_{gd1}$ is shorted by the diode connection; $C_{sb1}$, $C_{sb2}$, $C_{db2}$ have both ends at ac ground).
- $T_0 = 150\ \Omega\times1.29\ \mathrm{pF} = 0.194$ ns → $\omega_{-3\text{dB}} = 5.17\times10^9$ rad/s, 823 MHz (a single pole, so this is exact apart from a negligible right-half-plane zero at $g_{m2}/C_{gd2}$).
- $t_r = 2.2\times0.194\ \mathrm{ns} = 0.43$ ns.

## Grading notes

+2: gain 4, $f_{-3\text{dB}}$ ≈ 780–860 MHz with the correct set of node capacitances (including $C_{gd2}$ and $C_{db1}$), and $t_r$ ≈ 0.4–0.45 ns. +1: one capacitance omitted (e.g., $C_{gd2}$ or $C_{db1}$, giving ≈ 0.9–1 GHz) with the rest right. 0: gain right but resistance at the node wrong (e.g., $1/g_{m2}$) or rise time missing. −2 (asserted as fact): gain of 1 or 16, $C_{gd2}$ Miller-multiplied by a voltage gain, or a −3-dB frequency set by the output node. Writing the response as $4/(1 + s\tau)$ without mentioning the right-half-plane zero at $g_{m2}/C_{gd2}$ (≈ 21 GHz, about 26 times the pole frequency) is an acceptable approximation and does not lower +2.

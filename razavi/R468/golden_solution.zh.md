1. 节点 X 和 Y（第一级的输出端）：$\omega_X \approx \dfrac{1}{(r_{O1}\|r_{O3})\,C_X}$，其中 $C_X \approx C_{GS5} + C_{GS10} + C_{DB1} + C_{GD1} + C_{DB3} + C_{GD3} + (1 + A_2)C_{GD5} + C_{GD10}(1 + g_{m10}/g_{m12})$，$A_2 = (g_{m5}+Kg_{m9})(r_{O5}\|r_{O7})$，$C_{GD5}$ 存在密勒倍增（Miller multiplication）。由于 $r_{O1}\|r_{O3}$ 很大，这一极点通常较低。
2. 输出节点：$\omega_{out} \approx \dfrac{1}{(r_{O5}\|r_{O7})(C_L + C_{DB5} + C_{GD5} + C_{DB7} + C_{GD7})}$。
3. 电流镜节点（$M_{11}$/$M_7$ 和 $M_{12}$/$M_8$ 的栅极）：$\omega_m \approx \dfrac{g_{m11}}{C_{GS11} + C_{GS7} + C_{DB11} + C_{DB9} + C_{GD9} + C_{GD7}(1 + \dots)}$，由于该节点的阻抗只有 ≈ $1/g_{m11}$，这一极点通常位于高频。

- 电流镜极点只影响 $M_9$–$M_{11}$–$M_7$ 这条通路，因此它伴随着一个零点（两条通路贡献相等时 ≈ $2\omega_m$），这与以有源电流镜（active current mirror）为负载的差分对相同。
- 未补偿时，$\omega_X$ 与 $\omega_{out}$ 彼此接近且都比较低，因此该运放在用于反馈之前需要进行频率补偿（frequency compensation），例如在 $M_5$/$M_6$ 两端跨接密勒电容。

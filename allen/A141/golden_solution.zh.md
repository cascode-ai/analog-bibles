$I_{SS} = 10\ \mu$A：$g_{md} = 22.4\ \mu\mathrm{S}\cdot\sqrt{W_1/L_1}$，$A_v = 49.7\sqrt{W_1/L_1}$（$W_1/L_1 = 1$ 时为 22.4 µS 和 49.7 V/V）。
$I_{SS} = 1\ \mu$A：$g_{md} = 7.07\ \mu\mathrm{S}\cdot\sqrt{W_1/L_1}$，$A_v = 157\sqrt{W_1/L_1}$（$W_1/L_1 = 1$ 时为 7.07 µS 和 157 V/V）。

- $g_{md} = \sqrt{K'_P I_{SS}(W_1/L_1)}$：$\sqrt{50\ \mu \cdot 10\ \mu} = 22.4\ \mu$S 和 $\sqrt{50\ \mu \cdot 1\ \mu} = 7.07\ \mu$S（再乘以 $\sqrt{W_1/L_1}$）。
- $R_{out} = 1/[(\lambda_P + \lambda_N)I_{SS}/2]$：10 µA 时为 2.22 MΩ，1 µA 时为 22.2 MΩ。
- $A_v = g_{md}R_{out}$：49.7 和 157。增益按 $1/\sqrt{I_{SS}}$ 增大；负载的 W/L 不出现在结果中。对 $v_{out}/(v_{G1} - v_{G2})$ 而言增益为正：$v_{G1}$ 升高使 M1 的电流减小，因此 M4 吸收的电流减少，而 M2 提供的电流增加。

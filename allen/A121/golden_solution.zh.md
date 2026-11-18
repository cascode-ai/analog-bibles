0.1 µA 时 $A_v \approx -171$ V/V，5 µA 时为 −70.3 V/V，100 µA 时为 −15.7 V/V。

- $A_v = -g_{m1}/(g_{ds1} + g_{ds2})$，在两种工作区中都有 $g_{ds1} + g_{ds2} = (\lambda_P + \lambda_N)I_D = 0.09\,I_D$（来自因子 $(1+\lambda v_{DS})$）。
- 强反型，$g_{m1} = \sqrt{2K'_P(W_1/L_1)I_D}$（M1 为 p 沟道器件）：5 µA 时 $g_{m1} = 31.6\ \mu$S，$g_{ds} = 0.45\ \mu$S，$A_v = -70.3$。100 µA 时 $g_{m1} = 141.4\ \mu$S，$g_{ds} = 9\ \mu$S，$A_v = -15.7$。此时 $|A_v| \propto 1/\sqrt{I_D}$。
- 弱反型：$g_{m1} = I_D/(n_p\,kT/q) = 0.1\ \mu/(2.5 \cdot 0.026) = 1.54\ \mu$S，$g_{ds} = 9$ nS，故 $A_v = -1/[n_p (kT/q)(\lambda_P + \lambda_N)] = -171$，与电流无关。若套用强反型公式，在 0.1 µA 时会错误地得到 ≈ −497。

# 详细步骤 - A141

对电流镜负载的 p 沟道差分对，单位差分输入产生的短路输出电流等于一个输入管的跨导，空载增益等于它乘以输出电阻 $1/(g_{ds2}+g_{ds4})$。把两者都用尾电流表示，即可看出各自的变化规律：$g_{md}\propto\sqrt{I_{SS}}$，$R_{out}\propto1/I_{SS}$，因此 $A_v\propto1/\sqrt{I_{SS}}$。

### 第 1 步 — 差分跨导

平衡时每个输入管流过 $I_{SS}/2$。$v_{G1}$ 升高使 $v_{SG1}$ 减小，M1 电流减小 $g_{m1}v_{id}/2$，M2 电流增大同样的量；n 沟道电流镜把 M1 的减小复制到 M4，于是 M4 吸收的电流减少而 M2 提供的电流增加。由 [图 1] 中 $i_{OUT}=i_{D2}-i_{D4}$，短路输出电流为 $g_{m1}v_{id}$，对 $v_{id}=v_{G1}-v_{G2}$ 为正：

$$
g_{md}=g_{m1}=\sqrt{2K'_P\frac{W_1}{L_1}\frac{I_{SS}}{2}}=\sqrt{K'_PI_{SS}\frac{W_1}{L_1}} .
$$

### 第 2 步 — 输出电阻与增益

尾电流源理想时，一阶近似下输出电导等于 M2 与 M4 漏极电导之和，两管各工作在 $I_{SS}/2$：

$$
R_{out}=\frac{1}{(\lambda_P+\lambda_N)I_{SS}/2},\qquad
A_v=g_{md}R_{out}=\frac{\sqrt{K'_PI_{SS}(W_1/L_1)}}{(\lambda_P+\lambda_N)I_{SS}/2}
=\frac{2}{\lambda_P+\lambda_N}\sqrt{\frac{K'_P(W_1/L_1)}{I_{SS}}} .
$$

负载的 $W/L$ 不出现在结果中。

### 第 3 步 — 数值

$I_{SS}=10$ µA 时：

$$
g_{md}=\sqrt{(50\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)}\sqrt{W_1/L_1}=22.4\ \mu\mathrm S\cdot\sqrt{W_1/L_1},\qquad
R_{out}=\frac1{(0.09\ \mathrm{V^{-1}})(5\ \mu\mathrm A)}=2.22\ \mathrm{M\Omega},
$$

$$
A_v=(22.4\ \mu\mathrm S)(2.22\ \mathrm{M\Omega})\sqrt{W_1/L_1}=49.7\sqrt{W_1/L_1}.
$$

| $I_{SS}$ | $g_{md}$ | $R_{out}$ | $A_v$ | $W_1/L_1=1$ 时的值 |
|---|---|---|---|---|
| 10 µA | $22.4\ \mu\mathrm S\cdot\sqrt{W_1/L_1}$ | 2.22 MΩ | $49.7\sqrt{W_1/L_1}$ | 22.4 µS，49.7 V/V |
| 1 µA | $7.07\ \mu\mathrm S\cdot\sqrt{W_1/L_1}$ | 22.2 MΩ | $157\sqrt{W_1/L_1}$ | 7.07 µS，157 V/V |

尾电流减小到十分之一时，$g_{md}$ 降低 $\sqrt{10}$ 倍，而 $R_{out}$ 增大 10 倍，所以只要器件仍处于强反型，增益就提高 $\sqrt{10}=3.16$ 倍。

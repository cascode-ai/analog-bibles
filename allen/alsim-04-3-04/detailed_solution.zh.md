# 详细步骤 - alsim-04-3-04

先用平方律模型求出共源共栅电流镜的节点电压，由此得到最小输出电压，以及共源共栅输出电阻 $r_{ds1}+r_{ds2}+g_{m2}r_{ds1}r_{ds2}$。再用 LEVEL-3 模型仿真：工作点和 $v_{OUT}$ 的直流扫描给出 $i_{OUT}$，交流测试源给出 $r_{OUT}$。结果表明，仿真输出电阻由模型中漏致阈值偏移决定，而手算模型不含这一效应。

### 第 1 步 — 手算：节点电压

四个器件都流过 10 µA，且 $K'W/(2L)=275\ \mu\mathrm{A/V^2}$，偏置计算中忽略 λ：

$$
V_{ON}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(5)}}=0.191\ \mathrm V,\qquad V_{GS}=V_T+V_{ON}=0.891\ \mathrm V .
$$

M3 把 M3 和 M1 的栅极设在 0.891 V，M1 复制该电压，因此 M1 的漏极（M2 的源极）约为 $V_{GS}=0.891$ V。M4 叠在 M3 之上，所以 M2 的栅极为 $2V_{GS}=1.78$ V。只要 $v_{OUT}\ge V_{G2}-V_{T}$，M2 就保持饱和：

$$
V_{OUT}(\min)=2V_{GS}-V_T=V_T+2V_{ON}=0.7+2(0.191)=1.08\ \mathrm V .
$$

计入体效应后，M4 和 M2 的 $V_{SB}\approx0.89$ V，$V_T\approx0.87$ V。M2 的栅极电压和所需的最小漏极电压升高同样的量，结果仍为 1.08 V。

### 第 2 步 — 手算：输出电阻

在 10 µA 下，

$$
g_m=\sqrt{2K'\frac WL I_D}=\sqrt{2(110\ \mu)(5)(10\ \mu)}=105\ \mu\mathrm S,\qquad r_{ds}=\frac{1}{\lambda I_D}=\frac{1}{(0.04)(10\ \mu\mathrm A)}=2.5\ \mathrm{M\Omega}.
$$

M1 相当于共栅器件 M2 源极上的电阻 $r_{ds1}$：

$$
r_{out}=r_{ds1}+r_{ds2}+g_{m2}r_{ds1}r_{ds2}=5\ \mathrm{M\Omega}+(105\ \mu\mathrm S)(2.5\ \mathrm{M\Omega})^2=0.66\ \mathrm{G\Omega}.
$$

计入 $g_{mbs2}=\eta g_{m2}$，其中 $\eta=\gamma/(2\sqrt{0.7+0.89})=0.16$，结果升至约 0.76 GΩ。

### 第 3 步 — 仿真网表

```spice
* alsim-04-3-04 cascode current mirror, LEVEL 3
IIN 0 4 DC 10U
M4 4 4 3 0 N3 W=5U L=1U
M3 3 3 0 0 N3 W=5U L=1U
M2 2 4 1 0 N3 W=5U L=1U
M1 1 3 0 0 N3 W=5U L=1U
VOUT 2 0 DC 2 AC 1
.MODEL N3 NMOS LEVEL=3 VTO=0.7 UO=660 DELTA=2.4 ETA=0.1 KAPPA=0.15
+ THETA=0.1 NSUB=3E16 TOX=140E-10 XJ=0.2U LD=0.016U NFS=7E11
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38
.OP
.DC VOUT 0 5 1M
.AC DEC 1 1 1K
.PRINT DC I(VOUT)
.PRINT AC I(VOUT)
.END
```

所有衬底均接地。VOUT 把输出固定在 2 V，处于饱和范围之内，$i_{OUT}=-I(\mathrm{VOUT})$。交流源为 1 V 时，低频下 $r_{OUT}=1/|I(\mathrm{VOUT})|$。

### 第 4 步 — 仿真得到的电流与输出电阻

工作点为 V(3) = 0.805 V，V(4) = 1.740 V，V(1) = 0.814 V，并有

$$
i_{OUT}=10.04\ \mu\mathrm A\quad(v_{OUT}=2\ \mathrm V),\qquad r_{OUT}=6.04\ \mathrm{M\Omega}\ (\text{ac}).
$$

![题给 LEVEL-3 模型下以及作为对比将 ETA 设为零时 iOUT 随 vOUT 变化的仿真曲线，标出手算的最小输出电压](/q/alsim-04-3-04/solution-iout.zh.svg)

| $v_{OUT}$ | 1.0 V | 1.5 V | 2.0 V | 3.0 V | 5.0 V |
|---|---|---|---|---|---|
| $i_{OUT}$（µA） | 9.87 | 9.96 | 10.04 | 10.21 | 10.53 |

- **输出电流。** 在 2 V 处 $i_{OUT}$ 与 10 µA 相差不到 0.5%。它在 $V_{DS1}\approx V_{DS3}$ 处等于 10 µA，并随 $v_{OUT}$ 增大。
- **输出电阻。** 拐点以上的直流斜率给出 6.0–6.1 MΩ，与交流值一致。
- **拐点。** 曲线在 $v_{OUT}=V(1)+V_{DSAT2}=0.81+0.14=0.96$ V 附近弯折，略低于手算估计，因为 LEVEL 3 给出的 $V_{DSAT}$ 比平方律小。

### 第 5 步 — 仿真 $r_{OUT}$ 远低于手算值的原因

该偏置下 LEVEL-3 的输出电导为 $g_{ds1}=5.06\ \mu$S、$g_{ds2}=5.08\ \mu$S，即 $r_{ds}\approx0.2$ MΩ 而不是 2.5 MΩ（等效 λ 约为 0.5 V⁻¹）。由 $g_{m2}=127\ \mu$S 和 $g_{mbs2}=18\ \mu$S，共源共栅公式可以重现仿真结果：

$$
r_{out}\approx(g_{m2}+g_{mbs2})r_{ds1}r_{ds2}+r_{ds1}+r_{ds2}=\frac{145\ \mu\mathrm S}{(5.06\ \mu\mathrm S)(5.08\ \mu\mathrm S)}+0.4\ \mathrm{M\Omega}=6.0\ \mathrm{M\Omega}.
$$

这一电导几乎全部来自 ETA，即 LEVEL 3 的静态反馈（DIBL）项。它使阈值降低 $\sigma V_{DS}$，其中

$$
\sigma=\frac{\mathrm{ETA}\cdot8.15\times10^{-22}}{C_{ox}L_{eff}^3}=\frac{0.1\cdot8.15\times10^{-22}}{(2.47\times10^{-3}\ \mathrm{F/m^2})(0.968\ \mu\mathrm m)^3}=0.036,
$$

故 $g_{ds}\approx\sigma g_m\approx(0.036)(127\ \mu\mathrm S)=4.6\ \mu$S。用同一网表把 ETA 改为 0 重新仿真，$i_{OUT}=10.00$ µA 不变，而 2 V 处的 $r_{OUT}$ 升至 0.62 GΩ。这正是 λ = 0.04 手算估计的量级，此时仅由 KAPPA 给出 $g_{ds}\approx0.5\ \mu$S。

共源共栅结构仍把 $r_{ds}$ 放大了 $g_mr_{ds}\approx25$ 倍，但在该模型的短沟道输出电导下，实际输出电阻约为 6 MΩ，而不是用 λ = 0.04 V⁻¹ 预测的 0.66 GΩ。

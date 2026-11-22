# 详细步骤 - alsim-04-3-05

在高摆幅共源共栅结构中，窄的二极管连接管 M4（1/1）把共源共栅管 M2 的栅极偏置得恰好使 M1 处于饱和区边缘，因此输出可以低至 $2V_{ON}$，而不是 $V_T+2V_{ON}$。先用平方律手算节点电压和 $r_{out}$，再用 LEVEL-3 模型仿真得到实际的 $i_{OUT}$。仿真电流低于 10 µA，原因是 M3 和 M1 的漏源电压相差很大。

### 第 1 步 — 手算：偏置电压

对于 10 µA 下的 4/1 器件，

$$
V_{ON}=\sqrt{\frac{2I}{K'(W/L)}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(4)}}=0.213\ \mathrm V .
$$

M4 的宽度是其四分之一，过驱动电压为两倍，即 $2V_{ON}=0.426$ V。两个二极管连接管的源极都接地：

$$
V_{G1}=V_{GS3}=V_T+V_{ON}=0.913\ \mathrm V,\qquad V_{G2}=V_{GS4}=V_T+2V_{ON}=1.126\ \mathrm V .
$$

### 第 2 步 — 手算：最小输出电压

M2 流过 10 µA，$V_{GS2}=V_T+V_{ON}$（忽略体效应），因此其源极即 M1 的漏极电压为

$$
V_{DS1}=V_{G2}-V_{GS2}=(V_T+2V_{ON})-(V_T+V_{ON})=V_{ON}=0.213\ \mathrm V ,
$$

恰好处于 M1 的饱和区边缘。只要 $v_{OUT}\ge V_{DS1}+V_{ON}$，M2 就保持饱和：

$$
V_{OUT}(\min)=2V_{ON}=0.426\ \mathrm V .
$$

计入体效应后，M2 的 $V_{SB2}=V_{DS1}\approx0.17$ V，使 $V_{T2}$ 升高到约 0.74 V。于是 $V_{DS1}$ 降到约 0.17–0.18 V，M1 刚好进入线性区，而 M2 在 $v_{OUT}\ge V_{G2}-V_{T2}\approx0.39$ V 时饱和。

### 第 3 步 — 手算：输出电阻

把 M1 视为饱和，$g_{m2}=\sqrt{2K'(W/L)I}=\sqrt{2(110\ \mu)(4)(10\ \mu)}=93.8\ \mu$S，$r_{ds}=1/(\lambda I)=2.5$ MΩ：

$$
r_{out}=r_{ds1}+r_{ds2}+g_{m2}r_{ds1}r_{ds2}=5\ \mathrm{M\Omega}+(93.8\ \mu\mathrm S)(2.5\ \mathrm{M\Omega})^2=0.59\ \mathrm{G\Omega},
$$

计入 $g_{mbs2}$ 后约为 0.72 GΩ。若 M1 滑入线性区，其 $r_{ds1}$ 减小，$r_{out}$ 也随之减小。

### 第 4 步 — 仿真网表

```spice
* alsim-04-3-05 high-swing cascode sink, LEVEL 3
I4 0 4 DC 10U
I3 0 3 DC 10U
M4 4 4 0 0 N3 W=1U L=1U
M3 3 3 0 0 N3 W=4U L=1U
M1 1 3 0 0 N3 W=4U L=1U
M2 2 4 1 0 N3 W=4U L=1U
VOUT 2 0 DC 2
.MODEL N3 NMOS LEVEL=3 VTO=0.7 UO=660 DELTA=2.4 ETA=0.1 KAPPA=0.15
+ THETA=0.1 NSUB=3E16 TOX=140E-10 XJ=0.2U LD=0.016U NFS=7E11
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38
.OP
.DC VOUT 0 5 1M
.PRINT DC I(VOUT)
.END
```

所有衬底均接地，$i_{OUT}=-I(\mathrm{VOUT})$。

### 第 5 步 — 仿真输出电流

在 $v_{OUT}=2$ V 处，工作点为 V(4) = 1.109 V，V(3) = 0.830 V，V(1) = 0.282 V，且

$$
i_{OUT}=7.62\ \mu\mathrm A .
$$

![高摆幅共源共栅电流沉在 LEVEL-3 模型和 LEVEL-1 手算参数下的 iOUT 随 vOUT 变化仿真曲线，标出 2VON 和 10 µA 输入电流](/q/alsim-04-3-05/solution-iout.zh.svg)

| $v_{OUT}$ | 0.3 V | 0.5 V | 1 V | 2 V | 5 V |
|---|---|---|---|---|---|
| $i_{OUT}$，LEVEL 3（µA） | 7.32 | 7.41 | 7.48 | 7.62 | 8.01 |
| $i_{OUT}$，LEVEL 1（µA） | 9.20 | 9.42 | 9.44 | 9.48 | 9.58 |

如第 2 步所预测，曲线在约 0.4 V 以上变平，但其电平明显低于 10 µA。原因是两个镜像器件的漏源电压不匹配：M3 为二极管连接，$V_{DS3}=0.83$ V，而 M1 处于 $V_{DS1}=0.28$ V。
- 在 LEVEL 3 中，静态反馈项（ETA）使阈值降低 $\sigma V_{DS}$，$\sigma\approx0.036$。因此 M1 的阈值比 M3 高约 $0.036(0.83-0.28)=20$ mV。这在约 0.14 V 的饱和电压中占了很大比例，所以 M1 的电流约少 25%。
- KAPPA（沟道长度调制）带来较小的额外不足。把 ETA 设为 0，同一网表给出 9.56 µA。
- 用手算参数的 LEVEL-1 仿真表现出同一效应的平方律版本。此时 $V_{DS1}=0.177$ V 低于 $V_{ON}$，M1 略处于线性区，而 λ 项又偏向二极管连接的 M3；二者合起来得到 9.48 µA。

2 V 处仿真的小信号输出电阻为 7.6 MΩ，同样受 LEVEL-3 输出电导（每个器件约 4 µS）限制，而不是由 λ = 0.04 V⁻¹ 决定。高摆幅接法以电流精度换取摆幅，这正是需要改进该电路以恢复电流精度的原因。

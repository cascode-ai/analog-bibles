# 详细步骤 - grsim-03-04

由平方律写出电阻负载共源级的大信号传输特性 $V_o(V_i)$，对其求导得到小信号增益，并确定线性区边缘和单位增益点。然后用 ngspice 对同一电路做直流扫描加以验证。

### 第 1 步 — 有源区的传输特性

当 $V_{ov}=V_i-V_t>0$ 且 $V_o\ge V_{ov}$ 时，晶体管处于有源区，$I_D=\tfrac12k'(W/L)V_{ov}^2$，其中 $k'(W/L)=(200\ \mu\mathrm{A/V^2})(10)=2\ \mathrm{mA/V^2}$。对 $R_D$ 列 KVL：

$$
V_o=V_{DD}-I_DR_D=3\ \mathrm V-\tfrac12(2\ \mathrm{mA/V^2})(5\ \mathrm{k\Omega})V_{ov}^2=3\ \mathrm V-(5\ \mathrm{V^{-1}})V_{ov}^2 .
$$

求导得小信号增益

$$
A_v=\frac{dV_o}{dV_i}=-g_mR_D=-k'\frac WL V_{ov}R_D=-(10\ \mathrm{V^{-1}})V_{ov}.
$$

当 $V_i<V_t=0.6$ V 时器件截止，$V_o=3$ V，$A_v=0$。

### 第 2 步 — 线性区边缘

当 $V_o=V_{ov}$ 时有源区结束：

$$
3-5V_{ov}^2=V_{ov}\;\Rightarrow\;5V_{ov}^2+V_{ov}-3=0\;\Rightarrow\;
V_{ov}=\frac{-1+\sqrt{1+60}}{10}=0.681\ \mathrm V .
$$

因此 $V_i=0.6+0.681=1.281$ V，$V_o=0.681$ V，$A_v=-(10\ \mathrm{V^{-1}})(0.681\ \mathrm V)=-6.81$。

### 第 3 步 — 有源区内的单位增益点

$|A_v|=1$ 要求 $(10\ \mathrm{V^{-1}})V_{ov}=1$，即 $V_{ov}=0.1$ V：

$$
V_i=0.70\ \mathrm V,\qquad V_o=3-5(0.1)^2=2.95\ \mathrm V .
$$

$V_o=2.95$ V 远高于 $V_{ov}=0.1$ V，器件确实处于有源区。

### 第 4 步 — 最大增益

在有源区中 $|A_v|$ 随 $V_{ov}$ 线性增大。在线性区，对 $V_o=V_{DD}-R_Dk'(W/L)[V_{ov}V_o-V_o^2/2]$ 求导得

$$
\frac{dV_o}{dV_i}=-\frac{R_Dk'(W/L)\,V_o}{1+R_Dk'(W/L)(V_{ov}-V_o)},
$$

由于 $V_o$ 下降、$V_{ov}-V_o$ 增大，其幅值随 $V_i$ 升高而减小。在边缘处（$V_{ov}=V_o$）两个表达式都给出 $-6.81$，因此最大增益幅值为

$$
|A_v|_{\max}=6.81\quad\text{at } V_i=1.281\ \mathrm V,\ V_o=0.681\ \mathrm V .
$$

### 第 5 步 — SPICE 验证

该网表以 1 mV 步长把 $V_i$ 从 0 扫到 3 V，使用 level-1 模型，并以 $V_o$ 的数值导数计算增益：

```spice
* grsim-03-04 common-source amplifier, dc sweep
VDD vdd 0 3
VI  vi  0 0
RD  vdd vo 5k
M1  vo vi 0 0 nch W=10u L=1u
.model nch nmos level=1 kp=200u vto=0.6 lambda=0
.control
dc VI 0 3 1m
let av = deriv(v(vo))
wrdata out.txt v(vo) av
.endc
.end
```

另在 1.27 V 与 1.29 V 之间以 10 μV 步长再扫描一次，以分辨增益峰值。

| 工作点 | 手算：$V_i$、$V_o$、$A_v$ | ngspice：$V_i$、$V_o$、$A_v$ |
|---|---|---|
| 单位增益 | 0.70 V，2.95 V，−1 | 0.700 V，2.950 V，−1.000 |
| 线性区边缘 / 最大增益 | 1.281 V，0.681 V，−6.81 | 1.281 V，0.681 V，−6.810 |
| $V_i=1.0$ V | 2.20 V，−4.0 | 2.200 V，−4.000 |
| $V_i=1.5$ V（线性区） | — | 0.368 V，−0.58 |

![共源级的 ngspice 传输曲线 Vo(Vi) 与增益幅值 −Av，标出单位增益点和线性区边缘](/q/grsim-03-04/solution-transfer.zh.svg)

仿真曲线在 $V_i=0.6$ V 以下平坦地保持在 3 V，随后按抛物线下降，在 0.70 V 处斜率为 −1，在线性区边缘最陡（$V_i=1.281$ V、$V_o=0.681$ V 处 $A_v=-6.81$），进入线性区后逐渐变平。由于 $\lambda=0$ 且平方律参数相同，仿真与手算在扫描分辨率内一致。

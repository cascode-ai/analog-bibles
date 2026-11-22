# 详细步骤 - grsim-04-10

增益为 $A_v=-g_{m1}(r_{o1}\parallel r_{o2})$。两个输出电阻都按 $1/I$ 变化，因此增益取决于 $g_{m1}$ 随电流的变化规律：强反型时按 $\sqrt I$ 变化（增益 $\propto1/\sqrt I$），弱反型时按 $I$ 变化（增益与 $I$ 无关）。在四个电流下分别计算两种模型，应用弱反型判据，并用 ngspice 验证。

### 第 1 步 — 输出电阻

$T_1$ 与 $T_2$ 都流过 $I=I_{REF}$（$T_2$ 镜像二极管连接的 $T_3$）。由 $r_o=1/(\lambda I)$，

$$
r_{o1}\parallel r_{o2}=\frac1{(\lambda_n+\lambda_p)I}=\frac1{(0.0244+0.0488)\ \mathrm{V^{-1}}\,I}=\frac{13.67\ \mathrm V}{I}.
$$

### 第 2 步 — (a) 强反型

$W/L_{\mathrm{eff}}=100/0.82=122$，由平方律得 $g_{m1}=\sqrt{2k'_n(W/L)I}$、$V_{ov}=\sqrt{2I/[k'_n(W/L)]}$，故

$$
A_v=-\sqrt{2k'_n\frac WLI}\cdot\frac{13.67\ \mathrm V}{I}=-\frac{13.67\ \mathrm V\sqrt{2k'_n(W/L)}}{\sqrt I}\propto\frac1{\sqrt I}.
$$

1 mA 时：$g_{m1}=\sqrt{2(194\ \mu\mathrm{A/V^2})(122)(1\ \mathrm{mA})}=6.88\ \mathrm{mA/V}$，$A_v=-(6.88\ \mathrm{mA/V})(13.67\ \mathrm{k\Omega})=-94$。

| $I_{REF}$ | $V_{ov}$ | $g_{m1}$（平方律） | $A_v$ (a) |
|---|---|---|---|
| 1 mA | 0.291 V | 6.88 mA/V | −94 |
| 100 μA | 0.092 V | 2.18 mA/V | −297 |
| 10 μA | 0.029 V | 0.688 mA/V | −940 |
| 1 μA | 0.0092 V | 0.218 mA/V | −2970 |

### 第 3 步 — (b) 计入弱反型

当 $V_{ov}<2nV_T=2(1.5)(26\ \mathrm{mV})=78$ mV 时认为器件处于弱反型。由上表，1 mA 与 100 μA（0.29 V、0.092 V）仍为强反型，而 10 μA 与 1 μA（29 mV、9.2 mV）处于弱反型。此时指数律给出 $g_{m1}=I/(nV_T)$，故

$$
A_v=-\frac{I}{nV_T}\cdot\frac{13.67\ \mathrm V}{I}=-\frac{1}{nV_T(\lambda_n+\lambda_p)}=-\frac{13.67\ \mathrm V}{(1.5)(26\ \mathrm{mV})}=-350,
$$

与电流无关。因此 (b) 的结果为 −94、−297、−350、−350。弱反型时 $g_m/I$ 达到其最大值 $1/(nV_T)$，所以电流减小时本征增益不再增大；平方律预测 $V_{ov}\to0$ 时 $g_m/I$ 无限增大，因而在 10 μA 和 1 μA 处把增益分别高估约 2.7 倍和 8.5 倍。

### 第 4 步 — (c) SPICE 设置

$T_3$ 由理想电流源提供 $I_{REF}$；$T_1$ 的栅压由一个缓慢的直流伺服环路（E 源加 1 GΩ、1 F 低通滤波器）设定，使 $V_{OUT}=1.5$ V，从而所有器件都处于有源区。在 1 Hz 的分析频率下伺服环路相当于断开，交流输入看到的是开环增益。

```spice
* grsim-04-10 CS amplifier with active load (IREF = 1m, 100u, 10u, 1u)
VDD  vdd 0 3
IREF g3 0 100u
M3   g3 g3 vdd vdd pch W=100u L=0.82u
M2   out g3 vdd vdd pch W=100u L=0.82u
M1   out g 0 0 nch W=100u L=0.82u
VREF ref 0 1.5
E1   x 0 out ref 1000
RF   x y 1G
CF   y 0 1
VAC  g y dc 0 ac 1
.model nch nmos level=1 kp=194u vto=0.6 lambda=0.0244
.model pch pmos level=1 kp=64.7u vto=-0.8 lambda=0.0488
.control
op
print @m1[id] @m1[gm] @m1[gds] @m2[gds]
ac lin 1 1 1
print v(out)
.endc
.end
```

对 (b) 部分，用包含亚阈值导电的模型运行同一电路：BSIM3（`level=8`），除 `tox=8n` 以及按工艺数值设置的 `vth0` 和 `u0` 外均取默认参数。

### 第 5 步 — 仿真结果与比较

| $I_{REF}$ | 手算 (a) | Level 1 | 手算 (b) | BSIM3：$g_{m1}/I_D$ | BSIM3：$(g_{m1}/I_D)(13.67\ \mathrm V)$ | BSIM3：$A_v$ |
|---|---|---|---|---|---|---|
| 1 mA | −94 | −101 | −94 | 4.3 V⁻¹ | −59 | −57 |
| 100 μA | −297 | −317 | −297 | 14.4 V⁻¹ | −196 | −113 |
| 10 μA | −940 | −1000 | −350 | 23.3 V⁻¹ | −318 | −129 |
| 1 μA | −2970 | −3151 | −350 | 26.4 V⁻¹ | −361 | −132 |

level-1（平方律）仿真重现了 (a)：增益按 $1/\sqrt I$ 无限增大。它在每个电流下都大约高 7%，因为 level-1 采用 $r_o=(1+\lambda V_{DS})/(\lambda I_D)$，且 $g_m$ 中包含 $(1+\lambda V_{DS})$，在 $V_{DS}=1.5$ V 时这一点不可忽略。

BSIM3 的结果证实了 (b) 的物理图像。1 μA 时 $g_{m1}/I_D=26.4\ \mathrm{V^{-1}}$，即 $1/(nV_T)$ 中 $n=1.45$，接近假设的 1.5。与 λ 模型的输出电阻相结合，在 1 μA 时得到 −361，在 10 μA 时得到 −318，趋于 (b) 的 −350，而不是升到 −3000。BSIM3 自身的输出电导比 λ 模型大，其强反型 $g_m$ 又因迁移率退化而减小，所以其绝对增益较低（低电流时约 −130）。但趋势相同：器件一旦进入弱反型，增益就趋于饱和。

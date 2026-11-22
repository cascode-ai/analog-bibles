# 详细步骤 - grsim-09-29

该拓扑是一个电压串联反馈放大器。带单端 PMOS 电流源负载的 NMOS 差分对驱动 NMOS 源极跟随器，分压器 $R_1$–$R_2$ 把 $v_o/(1+R_1/R_2)$ 送回 $M_2$ 的栅极。输入端是 MOS 栅极，所以自然有 $R_i=\infty$。其余指标按以下顺序决定设计：

- 1 kΩ 负载上的 ±1 V 摆幅决定跟随器的吸收电流；
- 输出电阻决定所需的环路增益；
- 环路增益决定第一级增益；
- 带宽和无峰值要求限制器件尺寸；
- 电源电流限制总偏置。

下面选定一个设计并手算检验，再用 ngspice 验证全部指标。

### 第 1 步 — 设计选择

| 器件 | 绘制 $W/L$（µm） | $L_{\text{eff}}$ | 作用 | 电流 |
|---|---|---|---|---|
| $I_1$ | — | — | 参考电流 | 100 µA |
| $M_4$、$M_3$（PMOS） | 60/10 | 8.9 µm | 参考二极管、有源负载 | 100 µA |
| $M_5$（NMOS） | 20/10 | 8.9 µm | 参考二极管 | 100 µA |
| $M_6$ | 40/10 | 8.9 µm | 尾电流（×2） | 200 µA |
| $M_7$ | 260/10 | 8.9 µm | 输出吸收电流（×13） | 1.3 mA |
| $M_1$、$M_2$ | 400/10 | 8.9 µm | 输入对 | 各 100 µA |
| $M_8$ | 400/3 | 1.9 µm | 源极跟随器 | ≈ 1.3 mA |
| $R_1$、$R_2$ | 9.09 kΩ、0.914 kΩ | — | 反馈分压器 | — |

由 $L_{\text{eff}}=L_{\text{drwn}}-2L_d-X_d$，$L=10\ \mu$m 时为 8.9 µm，最小值 3 µm 时为 1.9 µm。因此长器件的 $\lambda_n=0.2/8.9=0.0225\ \mathrm{V^{-1}}$、$\lambda_p=0.1/8.9=0.0112\ \mathrm{V^{-1}}$，$M_8$ 的 $\lambda_n=0.2/1.9=0.105\ \mathrm{V^{-1}}$。长器件使节点 $X$ 具有高输出电阻，从而获得环路增益；短而宽的 $M_8$ 提供大的 $g_m$，从而获得低输出电阻。

- **电源电流。** $I_1+I_{D6}+I_{D7}=0.1+0.2+1.3=1.6$ mA（每个电源），低于 2 mA。在 $\pm1$ V 时分压器只取 0.1 mA。
- **负向摆幅。** $V_o=-1$ V 时，负载和分压器从地向输出端吸取 $1\ \mathrm{mA}+0.1\ \mathrm{mA}$，所以 $M_7$ 必须在 $M_8$ 仍导通的情况下吸收至少 1.1 mA。1.3 mA 使 $M_8$ 中还剩约 0.2 mA。
- **理想增益。** $1+R_1/R_2=10.94$，略高于 10，以补偿有限的环路增益（第 3 步）。

### 第 2 步 — 偏置与小信号参数

所有电流都由电流镜决定（$M_6$、$M_7$ 镜像 $M_5$；$M_3$ 镜像 $M_4$）。$M_2$ 流过 $M_3$ 的 100 µA 时差分对平衡，所以 $I_{D1}=I_{D2}=100\ \mu$A。由 $g_m=\sqrt{2k'(W/L)I_D}$、$r_o=1/(\lambda I_D)$ 和 $g_{mb}=\gamma g_m/(2\sqrt{2\phi_f+V_{SB}})$：

| 量 | 数值 |
|---|---|
| $g_{m1}=g_{m2}$（$V_{ov}=0.27$ V） | 0.737 mA/V |
| $r_{o2}$ / $r_{o3}$ | 445 kΩ / 890 kΩ |
| $g_{m8}$（$I_D=1.3$ mA，$V_{ov}=0.45$ V） | 5.75 mA/V |
| $g_{mb8}$（$V_{SB}=5$ V） | 0.61 mA/V |
| $r_{o8}$ / $r_{o7}$ | 7.3 kΩ / 34 kΩ |

### 第 3 步 — 开环增益、环路增益与闭环增益

- **第一级。** $M_2$ 的漏极电流约为 $g_{m2}v_{id}/2$。节点 $X$ 看到 $r_{o3}$ 与 $M_2$ 输出电阻的并联，后者由 $M_1$ 的源极提供负反馈（$\approx2r_{o2}$）：$R_X=890\ \mathrm{k\Omega}\parallel890\ \mathrm{k\Omega}=445\ \mathrm{k\Omega}$。增益为 $(g_{m2}/2)R_X=(0.368\ \mathrm{mA/V})(445\ \mathrm{k\Omega})=164$。
- **跟随器。** 其负载为 $R_L\parallel(R_1+R_2)\parallel r_{o7}\parallel r_{o8}=790\ \Omega$，计入体效应
$$
\frac{v_o}{v_x}=\frac{g_{m8}R'_L}{1+(g_{m8}+g_{mb8})R'_L}=\frac{(5.75\ \mathrm{mA/V})(790\ \Omega)}{1+(6.36\ \mathrm{mA/V})(790\ \Omega)}=0.755 .
$$

$$
a=(164)(0.755)=124,\qquad \beta=\frac{R_2}{R_1+R_2}=0.0914,\qquad T=a\beta=11.3,\qquad A_v=\frac{a}{1+T}=\frac{124}{12.3}=10.1 .
$$

### 第 4 步 — 输出电阻

无反馈时，输出电阻是跟随器的 $1/(g_{m8}+g_{mb8})=157\ \Omega$ 与 $r_{o7}\parallel r_{o8}$、分压器和 $R_L$ 的并联：$z_{oa}=133\ \Omega$。并联取样使其除以 $1+T$：

$$
R_o=\frac{133\ \Omega}{12.3}=10.8\ \Omega<30\ \Omega .
$$

这一数值包含 $R_L$；不含 $R_L$ 时仍约为 11 Ω。

### 第 5 步 — 带宽与峰值

主极点位于节点 $X$。其电容约为 $M_2$、$M_3$ 的 0.5 pF 漏结电容和交叠电容，再加上 $C_{gs8}\approx0.58$ pF；后者被跟随器自举为 $(1-0.755)C_{gs8}=0.14$ pF：

$$
f_{p1}\approx\frac{1}{2\pi(445\ \mathrm{k\Omega})(0.64\ \mathrm{pF})}=0.56\ \mathrm{MHz},\qquad f_{-3\mathrm{dB}}\approx(1+T)f_{p1}=6.9\ \mathrm{MHz}.
$$

输出节点的电阻只有约 0.13 kΩ，配合约 0.5 pF 电容，极点约在 2 GHz；差分对的源极公共节点（约 $1/(2g_{m1})=680\ \Omega$，配合两个 2.2 pF 的栅源电容）约在 50 MHz。它们都远高于环路穿越频率（约 6–7 MHz），所以环路基本上是单极点的，相位裕度很大，响应不会出现峰值。更大的差分对或更强的环路增益会使穿越频率向这些极点靠近，这正是没有进一步加大尺寸的原因。

### 第 6 步 — 摆幅检验

- **$V_o=+1$ V。** $I_{D8}\approx1.3\ \mathrm{mA}+1.1\ \mathrm{mA}=2.4$ mA，$V_{SB}=6$ V 时体效应使 $V_{t8}$ 升高到约 1.2 V，所以 $V_{GS8}\approx2.2$ V，节点 $X$ 约为 3.2 V。此时 $M_3$ 的 $|V_{DS3}|\approx1.8$ V，大于其约 1.0 V 的过驱动电压，保持饱和。
- **$V_o=-1$ V。** $M_7$ 的 $V_{DS7}=4$ V，大于其 1.2 V 的过驱动电压，$M_8$ 仍流过约 0.2 mA。

### 第 7 步 — SPICE 验证

网表采用题给数据的 level-1 模型：由于 $\lambda$ 取决于 $L_{\text{eff}}$，8.9 µm 和 1.9 µm 器件使用不同的模型；$\gamma_n=0.5\ \mathrm{V^{1/2}}$，$2\phi_f=0.58$ V，包括交叠电容和结电容，扩散区宽 9 µm（$A_D=A_S=9W$，$P_D=P_S=2(W+9\ \mu\mathrm{m})$）。NMOS 衬底接 −5 V，PMOS 衬底接 +5 V。

```spice
* grsim-09-29 feedback amplifier design (effective lengths)
.model nm10 nmos level=1 kp=60.4u vto=0.7 lambda=0.02247 gamma=0.5 phi=0.58 cj=0.08m cjsw=0.5n
+ tox=40n cgso=0.35n cgdo=0.35n mj=0.5 mjsw=0.5 pb=0.65
.model nm3 nmos level=1 kp=60.4u vto=0.7 lambda=0.1053 gamma=0.5 phi=0.58 cj=0.08m cjsw=0.5n
+ tox=40n cgso=0.35n cgdo=0.35n mj=0.5 mjsw=0.5 pb=0.65
.model pm10 pmos level=1 kp=30.2u vto=-0.7 lambda=0.01124 gamma=0 phi=0.65 cj=0.20m cjsw=1.5n
+ tox=40n cgso=0.35n cgdo=0.35n mj=0.5 mjsw=0.5 pb=0.65
VDD vdd 0 5
VSS vss 0 -5
I1 g4 g5 100u
M4 g4 g4 vdd vdd pm10 w=60u l=8.9u ad=540p as=540p pd=138u ps=138u
M3 x g4 vdd vdd pm10 w=60u l=8.9u ad=540p as=540p pd=138u ps=138u
M5 g5 g5 vss vss nm10 w=20u l=8.9u ad=180p as=180p pd=58u ps=58u
M6 t g5 vss vss nm10 w=40u l=8.9u ad=360p as=360p pd=98u ps=98u
M7 o g5 vss vss nm10 w=260u l=8.9u ad=2340p as=2340p pd=538u ps=538u
M1 vdd in t vss nm10 w=400u l=8.9u ad=3600p as=3600p pd=818u ps=818u
M2 x fb t vss nm10 w=400u l=8.9u ad=3600p as=3600p pd=818u ps=818u
M8 vdd x o vss nm3 w=400u l=1.9u ad=3600p as=3600p pd=818u ps=818u
R1 o fb 9.09k
R2 fb 0 0.914k
RL o 0 1k
Vi in 0 dc 0 ac 1
.op
.ac dec 100 1k 1g
.dc Vi -0.2 0.2 1m
.end
```

| 指标 | 要求 | 手算 | ngspice |
|---|---|---|---|
| 输入电阻 | ∞ | ∞（栅极） | ∞ |
| 增益 $v_o/v_i$ | 10 | 10.1 | 10.12（±1 V 范围内斜率 9.99–10.15） |
| 输出电阻 | < 30 Ω | 10.8 Ω | 7.6 Ω |
| $f_{-3\mathrm{dB}}$ | > 2 MHz | ≈ 6.9 MHz | 5.55 MHz |
| 峰值 | 无 | 无 | 无（最大增益在低频） |
| 电源电流 | 每个 < 2 mA | 1.6 mA | 1.74 mA（$V_{DD}$），1.69 mA（$V_{SS}$） |
| 1 kΩ 负载上的摆幅 | ±1 V | 满足 | 线性范围至 −1.2 V，正向超过 +1.8 V |
| $V_o=+1$ V 时 | $M_3$ 饱和 | $\lvert V_{DS3}\rvert\approx1.8$ V | $\lvert V_{DS3}\rvert=1.82$ V > 0.98 V |
| $V_o=-1$ V 时 | $M_8$ 导通，$M_7$ 饱和 | 0.2 mA | $I_{D8}=0.30$ mA，$V_{DS7}=4.04$ V > 1.19 V |

![RL = 1 kΩ 时闭环增益幅值随频率的变化：平坦于 20.1 dB，单调下降，−3 dB 点在 5.55 MHz，远高于 2 MHz 的指标](/q/grsim-09-29/solution-magnitude.zh.svg)

仿真满足全部指标。由于 level-1 模型把 $I_D$ 乘以 $1+\lambda V_{DS}$，仿真的电流和跨导略高于手算值（例如 $I_{D7}=1.39$ mA，$g_{m8}=7.4$ mA/V）。这提高了环路增益，所以闭环增益为 10.12，比 10 高 1.2 %，输出电阻也更低。把 $R_1$ 微调到约 8.98 kΩ 可使增益恰为 10.0。幅频响应单调下降，证实非主极点远高于环路穿越频率。

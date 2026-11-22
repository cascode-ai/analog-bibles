# 详细步骤 - A387

指标对速度和功耗要求宽松，但要求在 3 V 电源下增益超过 2200，因此自然选用无补偿的两级比较器：带有源负载的差分级，后接共源级。每级增益随偏置电流减小而增大（$g_m/g_{ds}\propto1/\sqrt{I}$），所以电流取小值，宽松的延迟要求事后核验。输入共模范围决定负载管和尾电流管的尺寸，增益决定输入对管的尺寸，输出级的尺寸则使其静态工作点与电流镜相匹配。

### 第 1 步 — 电路与偏置电流

<!-- diagram: diagram-01.cir -->

输入对管 M1–M2（NMOS）带尾电流管 M5 和电流镜负载 M3–M4（PMOS）；第一级输出 $v_{o1}$（M2 与 M4 的漏极）驱动 PMOS 共源管 M6，M6 的负载是 NMOS 电流沉 M7 以及 $v_{out}$ 处的 $C_{load}=3$ pF。M8 为二极管连接管，把 20 µA 基准电流转换为 M5 和 M7 的栅极偏置。所有 $L=1\ \mu$m。

取 $I_{ref}=I_5=20\ \mu$A（每个输入管 10 µA），$I_6=I_7=100\ \mu$A。总电源电流为 140 µA，远小于允许的 $2\ \mathrm{mW}/3\ \mathrm V=667\ \mu$A；第六步表明这些电流已使延迟远低于 1 µs。

### 第 2 步 — 由共模上限确定 M3–M4

在 $V_{icm}=2.5$ V 时，M1 保持饱和要求其漏极电压 $V_{DD}-V_{SG3}$ 不低于 $V_{icm}-V_{TN}$：

$$
V_{SG3}\le V_{DD}-V_{icm}^++V_{TN}=3-2.5+0.7=1.2\ \mathrm V,
\qquad
\left(\frac WL\right)_3\ge\frac{2I_{D3}}{K'_P(V_{SG3}-|V_{TP}|)^2}=\frac{2(10\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=1.6 .
$$

取 $(W/L)_3=(W/L)_4=2$，得 $V_{SG3}=0.7+\sqrt{2(10)/(50\cdot2)}=1.147$ V。

### 第 3 步 — 由增益和共模下限确定输入对管与尾电流管

取 $(W/L)_1=(W/L)_2=4$。由 $g_m=\sqrt{2K'(W/L)I_D}$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(4)(10\ \mu\mathrm A)}=93.8\ \mu\mathrm S,\qquad
V_{GS1}=0.7+\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(4)}}=0.913\ \mathrm V .
$$

在 $V_{icm}=1.5$ V 时尾节点电压为 $1.5-0.913=0.587$ V，它必须不低于 $V_{DS5}(\mathrm{sat})$：

$$
\left(\frac WL\right)_5\ge\frac{2I_5}{K'_N(0.587\ \mathrm V)^2}=\frac{2(20\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.587\ \mathrm V)^2}=1.06 .
$$

为留裕量取 $(W/L)_5=(W/L)_8=4$：$V_{DS5}(\mathrm{sat})=\sqrt{2(20)/(110\cdot4)}=0.30$ V。

### 第 4 步 — 输出级

平衡状态下 $v_{o1}=V_{DD}-V_{SG4}$，故 M6 的 $V_{SG6}=V_{SG4}=1.147$ V。要使 M6 在此栅压下恰好流过 $I_7$，其宽长比须按相对于 M4 的电流比例放大：

$$
\left(\frac WL\right)_6=\frac{I_6}{I_4}\left(\frac WL\right)_4=\frac{100\ \mu\mathrm A}{10\ \mu\mathrm A}(2)=20 .
$$

M7 以 5:1 的比例镜像 M8，$(W/L)_7=5(W/L)_8=20$，故 $I_7=5(20\ \mu\mathrm A)=100\ \mu$A，$V_{DS7}(\mathrm{sat})=0.30$ V。输出管跨导为 $g_{m6}=\sqrt{2(50)(20)(100)}\ \mu\mathrm S=447\ \mu$S。

### 第 5 步 — 核验功耗、增益、输入范围与摆幅

**功耗：** $P=V_{DD}(I_{ref}+I_5+I_7)=(3\ \mathrm V)(140\ \mu\mathrm A)=0.42\ \mathrm{mW}<2$ mW。

**增益：** 取 $g_{ds}=\lambda I_D$，

$$
A_{v0}=\frac{g_{m1}}{(\lambda_N+\lambda_P)I_{D2}}\cdot\frac{g_{m6}}{(\lambda_N+\lambda_P)I_6}
=\frac{93.8\ \mu\mathrm S}{0.9\ \mu\mathrm S}\cdot\frac{447\ \mu\mathrm S}{9\ \mu\mathrm S}=104\times49.7=5180>2200 .
$$

**输入共模范围：**

$$
V_{icm}(\max)=V_{DD}-V_{SG3}+V_{TN}=3-1.147+0.7=2.55\ \mathrm V\ge2.5\ \mathrm V,
$$
$$
V_{icm}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=0.30+0.913=1.21\ \mathrm V\le1.5\ \mathrm V .
$$

**输出摆幅。** $v_{o1}$ 为高时 M6 截止，M7 把 $v_{out}$ 拉到 $V_{OL}=0$ V。$v_{o1}$ 为低时稳定在尾节点 $V_{icm}-V_{GS1}$ 附近，$V_{icm}=2$ V 时约为 1.09 V；此时 M6 的 $V_{SG6}-|V_{TP}|=1.21$ V，在线性区提供 100 µA，$V_{SD6}=0.085$ V，故 $V_{OH}=2.91$ V（$V_{icm}=2.5$ V 时为 2.84 V）。两个电平都远离相对一侧电源轨 1.5 V 以上。

### 第 6 步 — 传播延迟

题目没有给出输入阶跃，因此分别对大阶跃和 10 倍分辨率的线性阶跃估算延迟。取比较器所驱动的电路在电源中点 1.5 V 处翻转；第二级翻转点为 M6 流过 100 µA 之处：$V_{TRP2}=V_{DD}-V_{SG6}=1.853$ V。

$C_I$ 主要来自 $C_{gs6}=\tfrac23C_{ox}W_6L+C_{GSO}W_6=\tfrac23(20)(2.47\ \mathrm{fF})+4.4\ \mathrm{fF}=37$ fF；再加上交叠电容和结电容（题目未给结电容数据），保守地取 $C_I=0.1$ pF。第一级的压摆率为 $I_5/C_I=200\ \mathrm{V/\mu s}$。

**输出上升沿。** $v_{o1}$ 从约 $V_{DD}$ 降到 $V_{TRP2}$，用时 $(0.1\ \mathrm{pF})(1.147\ \mathrm V)/(20\ \mu\mathrm A)=5.7$ ns。它继续下降到 1.09 V 的下限，M6 的过驱动电压从 0.447 V 增大到 1.21 V，电流从 100 µA 增大到 $\tfrac12(1000\ \mu\mathrm{A/V^2})(1.21\ \mathrm V)^2=0.74$ mA。对 $I_6(t)-I_7$ 积分，直到输送的电荷等于 $C_{load}(1.5\ \mathrm V)=4.5$ pC，得 9.3 ns，故 $t_{PLH}=5.7+9.3=15.0$ ns。

**输出下降沿。** $v_{o1}$ 从 1.09 V 升到 $V_{TRP2}$，用时 $(0.1\ \mathrm{pF})(0.766\ \mathrm V)/(20\ \mu\mathrm A)=3.8$ ns；随后 M6 截止，M7 把负载从 2.91 V 放电到 1.5 V，用时 $(3\ \mathrm{pF})(1.41\ \mathrm V)/(100\ \mu\mathrm A)=42.4$ ns，故 $t_{PHL}=46.3$ ns。

大信号延迟为 $(15.0+46.3)/2=31$ ns。

**线性响应。** 两极点为 $p_I=0.9\ \mu\mathrm S/0.1\ \mathrm{pF}=9\times10^6$ rad/s、$p_{II}=9\ \mu\mathrm S/3\ \mathrm{pF}=3\times10^6$ rad/s。对 10 倍分辨率的阶跃，抛物线近似给出 $t_p=1/\sqrt{10p_Ip_{II}}=61$ ns，精确两极点响应（输出达到其未限幅最终变化量的 $1/(2k)=5\,\%$）给出 70 ns。

| 指标 | 要求 | 设计值 |
|---|---|---|
| 功耗 | < 2 mW | 0.42 mW |
| 增益 | > 2200 | 5180 |
| 输入共模范围 | 1.5–2.5 V | 1.21–2.55 V |
| 输出电平 | ≥ 1.5 V，≤ 1.5 V | 2.84–2.91 V，0 V |
| 传播延迟 | < 1 µs | 31 ns（大阶跃），70 ns（10 倍过驱动） |

在 $V_{icm}=2$ V、±0.1 V 输入阶跃下对该设计做 level-1 ngspice 瞬态仿真（只含栅交叠电容和本征电容），得 $t_{PLH}=14.1$ ns、$t_{PHL}=44.9$ ns、$V_{OH}=2.90$ V，电源电流 141 µA；在 $V_{icm}=1.5$ V 和 2.5 V 的工作点上所有器件都保持饱和。

| 器件 | M1、M2 | M3、M4 | M5、M8 | M6 | M7 |
|---|---|---|---|---|---|
| $W/L$（µm/µm） | 4/1 | 2/1 | 4/1 | 20/1 | 20/1 |
| 电流 | 各 10 µA | 各 10 µA | 各 20 µA | 100 µA | 100 µA |

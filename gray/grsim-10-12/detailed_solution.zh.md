# 详细步骤 - grsim-10-12

该电路采用与 AB 类跨导器相同的互补电平移动思路，但把两个支路电流相加而不是相减。每个输入驱动一个源极跟随电平移动器（$M_1$–$M_5$ 和 $M_4$–$M_8$，由 $I_1$ 偏置）。每个移位后的栅极电压驱动两个交叉耦合的 NMOS–PMOS 串联支路之一，即 $M_3$–$M_6$ 和 $M_2$–$M_7$。两个支路电流在 $M_9$ 中相加，经 $M_{10}$ 镜像到输出端，$M_1$ 和 $M_4$ 在那里取回 $2I_1$。对平方律器件，两个支路电流的线性项在求和中抵消，只剩下纯粹的 $V_i^2$ 项。下面推导这一规律及其适用范围，再用 ngspice 验证直流特性和正弦响应。

### 第 1 步 — 器件常数

两种器件的 $\beta=\mu C_{ox}(W/L)$ 相同：

$$
\beta_n=(60\ \mu\mathrm{A/V^2})(20)=1200\ \mu\mathrm{A/V^2}=\beta_p=(20\ \mu\mathrm{A/V^2})(60).
$$

流过电流 $I$ 的器件的过驱动电压为 $\sqrt{2I/\beta}$。电平移动器流过 $I_1=50\ \mu$A，所以

$$
V_{GS1}+|V_{GS5}|=2V_t+2\sqrt{\frac{2I_1}{\beta}}=1.4\ \mathrm{V}+2(0.2887\ \mathrm{V})=1.977\ \mathrm{V},
$$

$M_4$–$M_8$ 同样如此。

### 第 2 步 — 支路电流

令 $V_i=V_+-V_-$。

- **支路 $M_3$–$M_6$**（电流 $I_A$）。$M_3$ 的栅极位于 $V_-$，$M_6$ 的栅极与 $M_5$ 的栅极相连，位于 $V_+-(V_{GS1}+|V_{GS5}|)$。因此串联管对的总栅极驱动为
$$
V_{GS3}+|V_{GS6}|=V_--V_++V_{GS1}+|V_{GS5}|\ \Rightarrow\ 2\sqrt{\frac{2I_A}{\beta}}=2\sqrt{\frac{2I_1}{\beta}}-V_i .
$$
- **支路 $M_2$–$M_7$**（电流 $I_B$）。由对称性，$M_2$ 的栅极位于 $V_+$，$M_7$ 的栅极跟随 $V_-$：
$$
2\sqrt{\frac{2I_B}{\beta}}=2\sqrt{\frac{2I_1}{\beta}}+V_i .
$$

分别平方：

$$
I_{A,B}=\left(\sqrt{I_1}\mp V_i\sqrt{\frac{\beta}{8}}\right)^2=I_1\mp V_i\sqrt{\frac{\beta I_1}{2}}+\frac{\beta}{8}V_i^2 .
$$

### 第 3 步 — 输出电流

$M_9$ 流过 $I_A+I_B$，$M_{10}$ 把它镜像到输出节点，$M_1$ 和 $M_4$ 在该节点各吸收 $I_1$。因此

$$
I_o=I_A+I_B-2I_1=\frac{\beta}{4}V_i^2=(300\ \mu\mathrm{A/V^2})\,V_i^2 .
$$

线性项恰好抵消，结果与 $I_1$ 和 $V_t$ 无关：对平方律器件，该电路是精确的平方器。

### 第 4 步 — 适用范围

该规律要求两个支路都导通，即 $I_A\ge0$ 且 $I_B\ge0$：

$$
|V_i|\le2\sqrt{\frac{2I_1}{\beta}}=\sqrt{\frac{8I_1}{\beta}}=\sqrt{\frac{8(50\ \mu\mathrm{A})}{1200\ \mu\mathrm{A/V^2}}}=0.577\ \mathrm{V},
$$

此处 $I_o=2I_1=100\ \mu$A。超出此范围后一个支路截止，

$$
I_o=\frac{\beta}{8}\left(|V_i|+0.577\ \mathrm{V}\right)^2-2I_1=(150\ \mu\mathrm{A/V^2})(|V_i|+0.577\ \mathrm{V})^2-100\ \mu\mathrm{A},
$$

其增长慢于平方律（$|V_i|=1$ V 时为 273 µA，而不是 300 µA）。

**饱和检验**（采用建议的偏置：$V_-=3$ V，输出端 3.5 V）。$M_1$ 和 $M_4$ 的栅极最高为 3.577 V，漏极为 3.5 V，所以 $V_{GD}<V_t$。$M_2$ 和 $M_3$ 的漏极位于 $M_9$ 的栅极，约 4 V，高于其栅极。PMOS 器件 $M_6$、$M_7$ 的源极约 2 V，漏极接地。因此在该范围内所有器件都保持饱和。

### 第 5 步 — SPICE 验证

```spice
* grsim-10-12 CMOS squarer
.options reltol=1e-7 abstol=1e-15 vntol=1e-9
.model nm nmos level=1 kp=60u vto=0.7 gamma=0 lambda=0
.model pm pmos level=1 kp=20u vto=-0.7 gamma=0 lambda=0
VDD vdd 0 5
Vm inm 0 3
Vi inp inm dc 0 sin(0 0.5 1k)
Vo out 0 3.5
M9 g9 g9 vdd vdd pm w=60u l=1u
M10 out g9 vdd vdd pm w=60u l=1u
M1 out inp s1 0 nm w=20u l=1u
M5 g5 g5 s1 vdd pm w=60u l=1u
I1a g5 0 50u
M4 out inm s4 0 nm w=20u l=1u
M8 g8 g8 s4 vdd pm w=60u l=1u
I1b g8 0 50u
M2 g9 inp s2 0 nm w=20u l=1u
M7 0 g8 s2 vdd pm w=60u l=1u
M3 g9 inm s3 0 nm w=20u l=1u
M6 0 g5 s3 vdd pm w=60u l=1u
.dc Vi -1 1 1m
.tran 1u 10m 0 1u
.four 1k i(Vo)
.end
```

$I_o$ 为从输出节点流入 `Vo` 的电流。

| $V_i$ | ±0.289 V | ±0.5 V | ±0.577 V | ±0.7 V | ±1 V |
|---|---|---|---|---|---|
| $300\ \mu\mathrm{A/V^2}\cdot V_i^2$ 或第 4 步的规律 | 25.06 µA | 75.00 µA | 99.88 µA | 144.74 µA | 273.21 µA |
| ngspice | 25.06 µA | 75.00 µA | 99.88 µA | 144.74 µA | 273.21 µA |

![输出电流随输入电压（−1 V 至 1 V）变化的曲线：在 ±0.577 V 以内为精确的抛物线 300 µA/V²·Vi²，端点为 100 µA，之后增长变慢，±1 V 时为 273 µA 而不是 300 µA](/q/grsim-10-12/solution-transfer.zh.svg)

在 $|V_i|\le0.577$ V 内，仿真特性与 $300\ \mu\mathrm{A/V^2}\cdot V_i^2$ 的偏差小于 $10^{-5}$ µA，且关于 $V_i$ 对称。范围之外则遵循第 4 步的单支路规律。

### 第 6 步 — 正弦驱动

对平方律范围内的 $V_i=V_a\sin\omega t$，

$$
I_o=\frac{\beta}{4}V_a^2\sin^2\omega t=\frac{\beta}{8}V_a^2\left(1-\cos2\omega t\right).
$$

$V_a=0.5$ V 时，$\beta V_a^2/8=(150\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V^2})=37.5\ \mu$A。对仿真 $I_o$ 做傅里叶分析得：

| 分量 | ngspice |
|---|---|
| 直流 | 37.50 µA |
| 基波（1 kHz） | $1.4\times10^{-18}$ A（零） |
| 二次谐波（2 kHz） | 37.50 µA，相位 −90°（余弦项） |
| 三次和四次谐波 | 低于 $10^{-14}$ A |

![0.5 V、1 kHz 正弦输入下的输入和输出波形：Io 是在 0 与 75 µA 之间、频率为 2 kHz（输入频率的两倍）的升余弦](/q/grsim-10-12/solution-waveform.zh.svg)

输出只含直流项和二次谐波，两者幅值相等，均为 $\beta V_a^2/8$，没有基波。因此该电路是平方器，也是倍频器。只有器件失配或在 $V_i$ 上叠加直流失调 $V_0$ 时才会出现基波（幅值为 $(\beta/2)V_0V_a$）。驱动超出 ±0.577 V 会在峰值处破坏平方律，并增加四次及更高的偶次谐波。

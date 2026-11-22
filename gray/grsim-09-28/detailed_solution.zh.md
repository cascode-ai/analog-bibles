# 详细步骤 - grsim-09-28

输入级是一个 AB 类跨导器。源极跟随器 $M_1$–$M_5$ 和 $M_4$–$M_8$（各由 $I_1$ 偏置）对两个输入电压做电平移动。每个移位后的电压驱动一个互补串联管对 $M_3$–$M_6$ 或 $M_2$–$M_7$ 的栅极，它们的电流 $i_{d3}$ 和 $i_{d7}$ 经共源共栅电流镜镜像到输出端相减。由于每个串联管对随输入增大而导通得更强，输出电流不受偏置电流限制。先求偏置以及小信号跨导、增益和带宽；再由平方律推导大信号 $I_o(V_i)$，计算跟随器的阶跃响应，并与 ngspice 比较。

### 第 1 步 — (a) 偏置电流

从 $M_3$ 的栅极到 $M_6$ 的栅极，再经电平移动支路返回，得到回路方程

$$
V_{\text{in}+}-V_{GS3}-V_{SG6}=V_{\text{in}-}-V_{GS1}-V_{SG5}\ \Rightarrow\ V_{GS3}+V_{SG6}=V_i+V_{GS1}+V_{SG5},\qquad V_i=V_{\text{in}+}-V_{\text{in}-}.
$$

$M_3$ 与 $M_1$ 匹配（NMOS 20/1），$M_6$ 与 $M_5$ 匹配（PMOS 60/1）。因此 $V_i=0$ 时串联管对的总栅极驱动与电平移动支路相同，流过相同的电流：$I_{D3}=I_{D6}=I_1=20\ \mu$A。同理 $I_{D2}=I_{D7}=20\ \mu$A。共源共栅电流镜（1:1，所有 PMOS 为 300/1，所有 NMOS 为 60/1）把这些电流复制到 $M_{13}$–$M_{14}$ 和 $M_{15}$–$M_{16}$，所以每条输出支路流过 20 µA，$I_o=0$。

### 第 2 步 — (a) 小信号增益与带宽

$\beta_n=\mu_nC_{ox}(W/L)_{1\text{–}4}=(60\ \mu\mathrm{A/V^2})(20)=1.2\ \mathrm{mA/V^2}$，$\beta_p=\mu_pC_{ox}(W/L)_{5\text{–}8}=(20\ \mu\mathrm{A/V^2})(60)=1.2\ \mathrm{mA/V^2}$：

$$
g_{m3}=g_{m6}=\sqrt{2\beta I_D}=\sqrt{2(1.2\ \mathrm{mA/V^2})(20\ \mu\mathrm{A})}=0.219\ \mathrm{mA/V}.
$$

变化量 $v_i$ 加在串联管对 $M_3$–$M_6$ 两端（$M_6$ 移位后的栅极电压固定），该管对相当于一个跨导为 $g_{m3}g_{m6}/(g_{m3}+g_{m6})$ 的器件。相反的变化加在 $M_2$–$M_7$ 上。输出电流是两个镜像电流之差：

$$
G_m=\frac{i_o}{v_i}=\frac{2g_{m3}g_{m6}}{g_{m3}+g_{m6}}=g_{m3}=0.219\ \mathrm{mA/V}.
$$

输出电阻是两个共源共栅结构的并联，$r_o=1/(\lambda I_D)=1/[(0.05\ \mathrm{V^{-1}})(20\ \mu\mathrm{A})]=1\ \mathrm{M\Omega}$，$g_{m14}=\sqrt{2(6\ \mathrm{mA/V^2})(20\ \mu\mathrm{A})}=0.49$ mA/V，$g_{m15}=\sqrt{2(3.6\ \mathrm{mA/V^2})(20\ \mu\mathrm{A})}=0.38$ mA/V：

$$
R_o=(g_{m14}r_{o14}r_{o13})\parallel(g_{m15}r_{o15}r_{o16})=490\ \mathrm{M\Omega}\parallel380\ \mathrm{M\Omega}=214\ \mathrm{M\Omega},
$$

$$
a_0=G_mR_o=(0.219\ \mathrm{mA/V})(214\ \mathrm{M\Omega})=4.7\times10^{4}\ (93\ \mathrm{dB}),\qquad \omega_u=\frac{G_m}{C_L}=\frac{0.219\ \mathrm{mA/V}}{10\ \mathrm{pF}}=2.19\times10^{7}\ \mathrm{rad/s}\ (3.5\ \mathrm{MHz}).
$$

唯一的高阻节点是输出端，所以 $C_L$ 决定主极点，同时起补偿作用。

### 第 3 步 — (a) 大信号传输特性

一个 NMOS 和一个 PMOS 串联、流过相同电流 $I$ 时，所需的总栅极驱动为 $(V_{GS}-V_t)+(V_{SG}-|V_t|)=\sqrt{2I/\beta_n}+\sqrt{2I/\beta_p}=\sqrt{2I/\beta_s}$，其中

$$
\frac{1}{\sqrt{\beta_s}}=\frac{1}{\sqrt{\beta_n}}+\frac{1}{\sqrt{\beta_p}}\ \Rightarrow\ \beta_s=\frac{1.2\ \mathrm{mA/V^2}}{4}=0.3\ \mathrm{mA/V^2}.
$$

电平移动支路流过 $I_1$，所以其过驱动电压之和为 $V_0=\sqrt{2I_1/\beta_s}=\sqrt{2(20\ \mu\mathrm{A})/(0.3\ \mathrm{mA/V^2})}=0.365$ V。由第 1 步的回路（以及 $M_2$–$M_7$ 的镜像回路）得

$$
I_{D3}=\frac{\beta_s}{2}(V_0+V_i)^2,\qquad I_{D7}=\frac{\beta_s}{2}(V_0-V_i)^2 .
$$

- **四个器件都导通**（$|V_i|<V_0$）：
$$
I_o=I_{D3}-I_{D7}=2\beta_sV_0V_i=2\sqrt{2\beta_sI_1}\,V_i=(0.219\ \mathrm{mA/V})\,V_i,
$$
由于平方项相互抵消，这是严格线性的。
- **$V_i>V_0$：** $M_2$ 和 $M_7$ 截止（$I_{D7}=0$），
$$
I_o=\frac{\beta_s}{2}(V_i+V_0)^2=(0.15\ \mathrm{mA/V^2})(V_i+0.365\ \mathrm{V})^2 ,
$$
$V_i<-V_0$ 时（$M_3$、$M_6$ 截止）为镜像关系 $I_o=-(\beta_s/2)(V_0-V_i)^2$。

转折点在 $|V_i|=V_0=\sqrt{2I_1/\beta_s}=0.365$ V，此处 $|I_o|=2\beta_sV_0^2=4I_1=80\ \mu$A。超过该点后电流继续按平方律增大。不存在由偏置电流决定的压摆率限制。

### 第 4 步 — (b) 阶跃响应：线性模型

单位增益反馈（$V_o$ 接 in−）时，环路只有一个极点 $G_m/C_L$，所以输出按指数趋近输入：

$$
\tau=\frac{C_L}{G_m}=\frac{10\ \mathrm{pF}}{0.219\ \mathrm{mA/V}}=45.6\ \mathrm{ns},\qquad V_o(t)=-1.5\ \mathrm{V}+3\ \mathrm{V}\left(1-e^{-t/\tau}\right).
$$

它在 $\tau\ln2=31.6$ ns 处穿过 0 V，在 45.6 ns 处达到 63 %，在 $\tau\ln100=210$ ns 处进入 1 %（30 mV）以内。该模型中的初始负载电流为 $G_m\times3\ \mathrm{V}=0.66$ mA。

实际的初始差分输入为 3 V，远大于 $V_0$，所以应使用大信号关系：$I_o(0^+)=(0.15\ \mathrm{mA/V^2})(3.365\ \mathrm{V})^2=1.70$ mA，约为线性值的 2.6 倍。因此实际输出起始时比指数快得多，误差降到 $V_0$ 以下后才变慢。

### 第 5 步 — 与 SPICE 比较

网表采用 level-1 模型（$\gamma=0$，$|\lambda|=0.05\ \mathrm{V^{-1}}$，题给的 $\mu C_{ox}$ 和 $V_t$），宽度按题给值，$L=1\ \mu$m。

```spice
* grsim-09-28 class-AB CMOS op amp
.model nm nmos level=1 kp=60u vto=0.7 lambda=0.05 gamma=0
.model pm pmos level=1 kp=20u vto=-0.7 lambda=0.05 gamma=0
VDD vdd 0 5
VSS vss 0 -5
M1 vdd inm a a nm w=20u l=1u
M5 b b a a pm w=60u l=1u
I1a b vss 20u
M4 vdd inp c c nm w=20u l=1u
M8 dd dd c c pm w=60u l=1u
I1b dd vss 20u
M2 vdd inm x2 x2 nm w=20u l=1u
M7 d7 dd x2 x2 pm w=60u l=1u
M3 d3 inp x3 x3 nm w=20u l=1u
M6 vss b x3 x3 pm w=60u l=1u
M10 d3 d3 g9 vdd pm w=300u l=1u
M9 g9 g9 vdd vdd pm w=300u l=1u
M14 o d3 s13 vdd pm w=300u l=1u
M13 s13 g9 vdd vdd pm w=300u l=1u
M11 d7 d7 g12 vss nm w=60u l=1u
M12 g12 g12 vss vss nm w=60u l=1u
M15 o d7 s16 vss nm w=60u l=1u
M16 s16 g12 vss vss nm w=60u l=1u
CL o 0 10p
Vfb inm o 0
Vp inp 0 pulse(-1.5 1.5 0 0.1n 0.1n 2u 4u)
.tran 0.1n 400n 0 0.1n
.end
```

开环响应仿真时，输出经 1 GH 电感接回 in−。求 $I_o(V_i)$ 时，用一个电压源把输出固定在 0 V（其电流即 $I_o$），in− 接地，扫描 in+。

| 量 | 手算（电流中忽略 $\lambda$） | ngspice |
|---|---|---|
| $I_{D2}$、$I_{D3}$、$I_{D14}$、$I_{D15}$ | 20 µA | 20.86 µA |
| $G_m$ | 0.219 mA/V | 0.246 mA/V |
| 开环增益 | $4.7\times10^{4}$（93 dB） | $6.8\times10^{4}$（96.7 dB） |
| 单位增益频率 | 3.5 MHz | 3.90 MHz，相位 −90° |
| $I_o$–$V_i$ 转折点 | ±0.365 V（80 µA） | ±0.37 V（90 µA） |
| $V_i=1.5$ V 时的 $I_o$ | 0.52 mA | 0.61 mA |
| $C_L$ 峰值电流 | 1.70 mA（线性模型 0.66 mA） | $t=0^+$ 时 1.96 mA |
| 20 ns 时的 $V_o$ | −0.43 V（线性模型） | +0.31 V |
| 进入 +1.5 V 的 1 % 以内 | 210 ns（线性模型） | 163 ns |

![输出短路电流随差分输入（−1.5 V 至 1.5 V）变化的曲线：±0.365 V 之间为过原点的直线，之外按平方律增大，仿真曲线略高于手算曲线](/q/grsim-09-28/solution-io.zh.svg)

![−1.5 V 到 +1.5 V 阶跃下的跟随器输出：仿真输出起始上升比 45.6 ns 的线性指数快得多，负载电流在阶跃时达到约 1.95 mA 的峰值，并随输出稳定而衰减](/q/grsim-09-28/solution-step.zh.svg)

仿真证实了 AB 类行为。$I_o$–$V_i$ 曲线在约 ±0.37 V 以内是直线，之外按平方律增长，跟随器的输出电流峰值约为 2 mA。这是 20 µA 偏置电流的 100 倍，所以不会出现 $2I_1/C_L=4$ V/µs 的压摆受限斜坡。相反，响应在开始时最快，当误差降到约 0.37 V 以下后变为线性指数；163 ns 内稳定到 1 %。

仿真得到的 $G_m$、增益和峰值电流比手算值高 10–20 %。level-1 模型把每个漏极电流乘以 $1+\lambda V_{DS}$，而 $M_2$、$M_3$、$M_6$、$M_7$ 的 $V_{DS}$ 有几伏。这使偏置电流略有增大，并降低了给定电流所需的过驱动电压，因此 $g_m=2I_D/V_{ov}$ 增大约 12 %。输出共源共栅的电阻也采用 $r_o=(1+\lambda V_{DS})/(\lambda I_D)$，高于 $1/(\lambda I_D)$。

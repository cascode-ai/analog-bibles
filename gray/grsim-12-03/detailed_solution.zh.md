# 详细步骤 - grsim-12-03

先用对称性论证预测结果，再在开环条件下用两个 SPICE 实验加以验证：$V_{od}$ 随 $V_{id}$ 变化的直流扫描，以及带傅里叶分析的低频瞬态仿真。开环增益达数千，因此输入必须限制在 $V_{od}=0$ 点附近零点几毫伏以内。存在失配时，该点移到输入失调电压处，输入也以该点为中心。

### 第 1 步 — 平衡电路为何是奇函数

在输入共模电平固定的条件下，令 $V_{od}=f(V_{id})$。若两半完全相同，交换 $V_{i1}$ 与 $V_{i2}$ 后电路成为自身的镜像，因而 $V_{o1}$ 与 $V_{o2}$ 互换。交换输入使 $V_{id}$ 变为 $-V_{id}$，交换输出使 $V_{od}$ 变为 $-V_{od}$。因此

$$
f(-V_{id})=-f(V_{id}),
$$

于是 $f$ 的幂级数只含奇次项，差分正弦输入在 $V_{od}$ 中只产生奇次谐波。共模反馈电路（$M_{21}$–$M_{24}$、$M_{25}$）同样对称，不会破坏这一论证。单端输出不必是奇函数：任何偶次项都是共模的，在 $V_{o1}$ 和 $V_{o2}$ 中相同，在 $V_{od}$ 中相互抵消。

### 第 2 步 — 开环增益与扫描范围

取 $L_{\text{eff}}=0.82\ \mu$m、$\lambda_n=0.024$、$\lambda_p=0.049\ \mathrm{V^{-1}}$，由平方律得 $g_{m1}=\sqrt{2(64.7\ \mu\mathrm{A/V^2})(77)(100\ \mu\mathrm A)}=1.0$ mS，$g_{m6}=\sqrt{2(194\ \mu\mathrm{A/V^2})(16)(400\ \mu\mathrm A)}=1.58$ mS。输出电阻为 $r_{o2}=1/(\lambda_pI_D)=204$ kΩ，$r_{o4}=417$ kΩ，$r_{o6}=104$ kΩ，$r_{o7}=51$ kΩ。因此

$$
|a_{dm0}|=g_{m1}(r_{o2}\parallel r_{o4})\cdot g_{m6}(r_{o6}\parallel r_{o7})\approx(1.0\ \mathrm{mS})(137\ \mathrm{k\Omega})\cdot(1.58\ \mathrm{mS})(34\ \mathrm{k\Omega})\approx137\times54\approx7400.
$$

差分输出被限制在约 ±1.6 V，输入端的线性范围只有约 $\pm0.2$ mV，所以开环扫描必须限制在这一范围内。

### 第 3 步 — SPICE 设置

采用 level-1 模型，取题给的 $k'$、$V_t$、$t_{ox}=80$ Å、LD $=0.09\ \mu$m（版图 $L=1\ \mu$m 得 $L_{\text{eff}}=0.82\ \mu$m）、题给 $\lambda$，以及 CGSO $=$ CGDO $=0.35$ fF/µm。宽度取 $W=(W/L)\cdot0.82\ \mu$m。$V_{B1}$、$V_{B2}$、$V_{B3}$ 由 $M_7$、$M_3$ 和 $M_{26}$ 的二极管连接复制管产生，分别流过 400、100 和 200 µA。输入以 0 V 为中心差分驱动，$V_{i1}=+V_{id}/2$，$V_{i2}=-V_{id}/2$，$V_{CM}=0$。

```spice
* grsim-12-03 fully differential op amp (matched: W1 = W2 = 63.14u)
VDD vdd 0 1.65
VSS vss 0 -1.65
IB1 vb1 vss 400u
MB1 vb1 vb1 vdd vdd pm W=41u L=1u
IB2 vdd vb2 100u
MB2 vb2 vb2 vss vss nm W=3.28u L=1u
IB3 vdd vb3 200u
MB3 vb3 vb3 vss vss nm W=11.48u L=1u
M5 t cmc vdd vdd pm W=20.5u L=1u
M1 x1 vi1 t vdd pm W=63.14u L=1u
M2 x2 vi2 t vdd pm W=63.14u L=1u
M3 x1 vb2 vss vss nm W=3.28u L=1u
M4 x2 vb2 vss vss nm W=3.28u L=1u
M6 vo1 x2 vss vss nm W=13.12u L=1u
M7 vo1 vb1 vdd vdd pm W=41u L=1u
M9 vo2 x1 vss vss nm W=13.12u L=1u
M10 vo2 vb1 vdd vdd pm W=41u L=1u
RZ1 x2 z1 758
C1 z1 vo1 1.39p
RZ2 x1 z2 758
C2 z2 vo2 1.39p
M25 cmc cmc vdd vdd pm W=20.5u L=1u
M21 cmc vo1 s1 vss nm W=6.888u L=1u
M22 vdd vcm s1 vss nm W=6.888u L=1u
M23 vdd vcm s2 vss nm W=6.888u L=1u
M24 cmc vo2 s2 vss nm W=6.888u L=1u
M26 s1 vb3 vss vss nm W=11.48u L=1u
M27 s2 vb3 vss vss nm W=11.48u L=1u
VCMS vcm 0 0
VI1 vi1 0 dc 0 sin(0 50u 10)
EI2 vi2 0 vi1 0 -1
.model nm nmos level=1 vto=0.6 kp=194u ld=0.09u lambda=0.024 tox=80e-10 cgso=0.35n cgdo=0.35n
.model pm pmos level=1 vto=-0.8 kp=64.7u ld=0.09u lambda=0.049 tox=80e-10 cgso=0.35n cgdo=0.35n
.options reltol=1e-7 method=gear
.dc VI1 -0.25m 0.75m 0.5u
.tran 20u 0.4 0.2 20u
.four 10 v(vo1,vo2) v(vo1)
.end
```

工作点为 $|I_{D1}|=100\ \mu$A，$|I_{D5}|=200\ \mu$A，$I_{D6}=406\ \mu$A，两个输出均为 17 mV，即共模反馈环路把输出共模电平保持在 $V_{CM}=0$ 附近。(b) 小题取 $W_1=63.46\ \mu$m、$W_2=62.82\ \mu$m（相差 1%）。

### 第 4 步 — (a) 匹配情形：直流特性

仿真得原点处斜率为 $-8740$ V/V；符号为负，是因为标为 $V_{i1}$ 的输入经同相通路 $M_1\to M_9$ 驱动 $V_{o2}$。特性曲线精确通过原点，并在整个扫描范围（包括饱和区）内为奇函数：

| $V_{id}$（mV） | $V_{od}(+V_{id})$（V） | $V_{od}(-V_{id})$（V） |
|---|---|---|
| 0.1 | −0.874631 | +0.874631 |
| 0.2 | −1.632311 | +1.632311 |
| 0.5 | −1.795631 | +1.795631 |

在 $|V_{id}|\le0.15$ mV 内，$|V_{od}(V_{id})+V_{od}(-V_{id})|\le2\times10^{-8}$ V，已达仿真器的数值分辨率水平。

![仿真得到的开环 Vod–Vid 特性：匹配曲线关于原点奇对称，1% 失配曲线平移了 0.97 mV 的失调且不再是奇函数](/q/grsim-12-03/solution-curves.zh.svg)

### 第 5 步 — (a) 匹配情形：正弦输入的谐波

10 Hz、峰值 100 µV 的差分正弦（每个输入 50 µV）得到 0.874 V 的输出基波。对稳态波形做傅里叶分析，得：

| 输出 | $HD_2$ | $HD_3$ | $HD_4$ |
|---|---|---|---|
| $V_{od}$ | $1.2\times10^{-13}$ | $1.0\times10^{-4}$ | $1.0\times10^{-13}$ |
| 单独的 $V_{o1}$ | $3.0\times10^{-2}$ | $1.0\times10^{-4}$ | $1.2\times10^{-2}$ |

$V_{od}$ 中的偶次谐波处于数值噪声底，比三次谐波低约 180 dB。单端输出含有很大的二次谐波和 27 mV 的直流偏移。它们主要来自共模反馈差分对：±0.44 V 的输出摆幅使这些差分对（$|V_{ov}|\approx0.35$ V）工作在非线性状态。这些分量是纯共模的，在 $V_{od}$ 中抵消，与第 1 步的预测一致。

### 第 6 步 — (b) $W_1$ 与 $W_2$ 失配 1%

此时对称性论证不再成立。首先出现输入失调。对于平方律差分对，宽度失配等效于

$$
V_{OS}\approx\frac{|V_{ov1}|}{2}\frac{\Delta W}{W}=\frac{0.2\ \mathrm V}{2}(0.01)=1\ \mathrm{mV};
$$

仿真得 $V_{od}=0$ 出现在 $V_{id}=0.967$ mV 处。由于 $0.967\ \mathrm{mV}\times8740\gg1.65$ V，$V_{id}=0$ 时开环输出已饱和，所以扫描和正弦输入都以失调点为中心。

围绕该中心，特性不再是奇函数：$V_{od}(V_{OS}+0.1\ \mathrm{mV})=-0.87477$ V，而 $V_{od}(V_{OS}-0.1\ \mathrm{mV})=+0.87447$ V，不对称量为 0.30 mV，而匹配时仅 $10^{-8}$ V（上图虚线）。在失调上叠加同样的 100 µV 正弦：

| 失配 | $V_{OS}$ | $V_{od}$ 的 $HD_2$ | $V_{od}$ 的 $HD_3$ | $V_{od}$ 的 $HD_4$ |
|---|---|---|---|---|
| 0 | 0 | $1.2\times10^{-13}$ | $1.0\times10^{-4}$ | $1.0\times10^{-13}$ |
| 1% | 0.97 mV | $7.1\times10^{-5}$ | $1.0\times10^{-4}$ | $3.0\times10^{-5}$ |
| 2% | 1.93 mV | $1.4\times10^{-4}$ | $1.0\times10^{-4}$ | $6.0\times10^{-5}$ |

$V_{od}$ 中出现了偶次失真，且与失配量成正比，而 $HD_3$ 不变。失配使两半不平衡，第 5 步中很大的共模偶次谐波在 $V_{o1}$ 和 $V_{o2}$ 中不再完全相等，其中一部分转换为差分输出。输入对本身也会增加一个较小的偶次项：对 $\beta_{1,2}=\beta(1\pm\delta)$，其平方律电流满足 $|a_2/a_1|\approx\delta/(2|V_{ov}|)=0.0125\ \mathrm{V^{-1}}$（$\delta=0.005$），匹配时为零。

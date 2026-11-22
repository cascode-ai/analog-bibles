# 详细步骤 - grsim-12-22

把共模检测输出写成两个输出的加权平均，并分解为共模和差模两部分。运放本身是平衡的，其差模与共模半边电路互不耦合。唯一的耦合来自检测电阻：共模反馈环路驱动 $v_{oc}$ 去抵消 $v_{cms}$，而它此时含有差模项。由两个环路方程即可求出四个增益。最后用理想跟随器和理想检测放大器做交流仿真加以核对。

### 第 1 步 — (a) 共模检测增益

跟随器为理想单位增益时，电阻中点是两个输出的加权平均，每个输出的权重是对侧的电阻：

$$
v_m=\frac{R_{cs2}v_{o1}+R_{cs1}v_{o2}}{R_{cs1}+R_{cs2}}=\frac{9.9v_{o1}+10.1v_{o2}}{20}.
$$

代入 $v_{o1}=v_{oc}+v_{od}/2$、$v_{o2}=v_{oc}-v_{od}/2$：

$$
v_m=v_{oc}+\frac{R_{cs2}-R_{cs1}}{2(R_{cs1}+R_{cs2})}v_{od}=v_{oc}+\frac{9.9-10.1}{40}v_{od}=v_{oc}-0.005\,v_{od}.
$$

检测放大器为单位增益，故 $v_{cms}=v_m$：

$$
a_{cms}=1,\qquad a_{dm\text{-}cms}=-0.005.
$$

### 第 2 步 — 无共模反馈时的运放增益

$|V_{ov}|=0.2$ V，$r_o=|V_A|/|I_D|$：$g_{m1}=2(100\ \mu\mathrm A)/0.2\ \mathrm V=1$ mA/V，$r_{o1}=100$ kΩ，$r_{o3}=200$ kΩ。共模半边电路中把 $M_5$ 一分为二，$g_{m5h}=g_{m5}/2=1$ mA/V，$r_{o5h}=2r_{o5}=2(10\ \mathrm V/200\ \mu\mathrm A)=100$ kΩ。

- 差模半边电路（尾节点为交流地）：$a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-(1\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})=-66.7$。
- 共模半边电路：$M_1$ 以 $r_{o5h}$ 为源极负反馈，从其漏极向下看的电阻为 $R_{o(\text{down})}\approx r_{o1}(1+g_{m1}r_{o5h})=10.1$ MΩ，输出端看到 $R_{o(\text{down})}\parallel r_{o3}=196$ kΩ。于是

$$
a_{cm}\approx-\frac{R_{o(\text{down})}\parallel r_{o3}}{r_{o5h}}=-1.96,\qquad
a_{cmc}\approx-g_{m5h}\left(R_{o(\text{down})}\parallel r_{o3}\right)=-196.
$$

由于运放是平衡的，共模输入不产生差模输出，差模输入也不产生共模输出。

### 第 3 步 — 共模反馈闭合后的环路方程

共模反馈只作用于 $M_5$ 的栅极，即只作用于共模半边电路，且 $v_{cmc}=v_{cms}$：

$$
\begin{aligned}
v_{od}&=a_{dm}v_{id},\\
v_{oc}&=a_{cm}v_{ic}+a_{cmc}\left(a_{cms}v_{oc}+a_{dm\text{-}cms}v_{od}\right).
\end{aligned}
$$

$v_{oc}$ 升高使 $v_{cmc}$ 升高，经 $a_{cmc}<0$ 又把 $v_{oc}$ 拉低，所以环路增益为 $T=-a_{cmc}a_{cms}=196$（负反馈）。解第二个方程：

$$
v_{oc}=\frac{a_{cm}v_{ic}+a_{cmc}a_{dm\text{-}cms}a_{dm}v_{id}}{1-a_{cmc}a_{cms}}.
$$

### 第 4 步 — (b) 四个增益

$$
\begin{aligned}
\frac{v_{od}}{v_{id}}&=a_{dm}=-66.7,\qquad \frac{v_{od}}{v_{ic}}=0,\\
\frac{v_{oc}}{v_{ic}}&=\frac{a_{cm}}{1-a_{cmc}a_{cms}}=\frac{-1.96}{1+196}=-0.0100,\\
\frac{v_{oc}}{v_{id}}&=\frac{a_{cmc}a_{dm\text{-}cms}a_{dm}}{1-a_{cmc}a_{cms}}=\frac{(-196)(-0.005)(-66.7)}{197}=-0.33.
\end{aligned}
$$

最后一个结果是失配的主要影响。检测电路把差模输出读成 $-0.005\,v_{od}$ 的共模误差，高增益的共模反馈环路为了消除它，几乎把真实的 $v_{oc}$ 移动了等量的反向值：$v_{oc}\approx-a_{dm\text{-}cms}v_{od}\cdot T/(1+T)$。因此差模输入会产生 $-0.33\,v_{id}$ 的共模输出，远大于共模增益本身。差模通路不受影响，因为运放是平衡的，而共模反馈只驱动尾电流管。

### 第 5 步 — (c) SPICE 设置

采用 level-1 模型：$\mu_nC_{ox}=127$、$\mu_pC_{ox}=57.5\ \mu$A/V²，$V_t=\pm0.7$ V，$\lambda_n=0.1$、$\lambda_p=0.05\ \mathrm{V^{-1}}$，$L=0.8\ \mu$m。宽度使设计电流下 $|V_{ov}|=0.2$ V：$(W/L)_{1,2}=39.4$，$(W/L)_{3,4}=87$，$(W/L)_5=78.7$。跟随器为单位增益 VCVS，驱动实际的 10.1-kΩ 和 9.9-kΩ 电阻。检测放大器为 VCVS，令 $v_{cmc}=V_{SS}+0.9\ \mathrm V+v_m$，即单位增益且 $V_{CM}=0$。$V_{BIAS}$ 的取值使工作点处 $|I_{D3}|=100\ \mu$A。一次交流仿真加 $v_{id}=1$（两个输入各 $\pm0.5$），另一次加 $v_{ic}=1$。

```spice
* grsim-12-22 DM run (for the CM run: VI1 and VI2 both ac 1)
VDD vdd 0 2.5
VSS vss 0 -2.5
VI1 vi1 0 dc 0 ac 0.5
VI2 vi2 0 dc 0 ac 0.5 180
VB vbias 0 1.6114
M1 vo1 vi1 t vss nm W=31.5u L=0.8u
M2 vo2 vi2 t vss nm W=31.5u L=0.8u
M3 vo1 vbias vdd vdd pm W=69.6u L=0.8u
M4 vo2 vbias vdd vdd pm W=69.6u L=0.8u
M5 t cmc vss vss nm W=63.0u L=0.8u
EF1 f1 0 vo1 0 1
EF2 f2 0 vo2 0 1
RCS1 f1 m 10.1k
RCS2 f2 m 9.9k
ECMC cmc vss value={0.9 + v(m) - 0}
.model nm nmos level=1 vto=0.7 kp=127u lambda=0.1
.model pm pmos level=1 vto=-0.7 kp=57.5u lambda=0.05
.ac lin 1 10 10
.print ac v(vo1,vo2) v(vo1) v(vo2)
.end
```

工作点为 $I_{D1}=100.2\ \mu$A，$I_{D5}=200.3\ \mu$A，输出为 −14 mV。

### 第 6 步 — (c) 仿真增益

| 增益 | 手算 | SPICE | 用仿真器的 $g_m$、$r_o$ 代入手算公式 |
|---|---|---|---|
| $v_{od}/v_{id}$ | −66.7 | −76.4 | $-g_{m1}(r_{o1}\parallel r_{o3})=-76.4$ |
| $v_{oc}/v_{ic}$ | −0.0100 | −0.0079 | $\approx-1/(g_{m5}r_{o5})=-0.0080$ |
| $v_{od}/v_{ic}$ | 0 | 0（精确） | 0 |
| $v_{oc}/v_{id}$ | −0.33 | −0.381 | $0.005\,a_{dm}\,T/(1+T)=-0.380$ |

四个增益的符号和结构都与预测一致：没有共模到差模的转换，差模到共模的增益等于电阻失配系数乘以差模增益。幅值与手算相差 15–21%，原因仅在于 level-1 模型的小信号参数与理想化参数不同。该模型的输出电导为 $\lambda I_D/(1+\lambda V_{DS})$ 而非 $|I_D/V_A|$，其过驱动电压也按同一因子减小，得到 $g_{m1}=1.04$ mS，$r_{o1}\parallel r_{o3}=73.2$ kΩ，$g_{m5}=2.16$ mS，$r_{o5}=58$ kΩ。用这些数值，手算公式重现了仿真增益（最后一列）。特别地，比值 $(v_{oc}/v_{id})/(v_{od}/v_{id})=0.381/76.4=0.0050$ 正好等于电阻失配系数 $|a_{dm\text{-}cms}|$，与模型无关。

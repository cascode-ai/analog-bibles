# 详细步骤 - G045

电流源从源极节点恒定地抽走 10 µA，因此每个节点电压都按线性斜坡变化，斜率等于电流除以被放电的电容。晶体管决定放电的是哪个电容：截止时只有源极电容；饱和时源极被钳在栅极以下一个 $V_{GS}$ 处，电流取自漏极电容；线性区时沟道把两个节点连在一起，共同放电。先求节点电容，再分析三个阶段。

### 第 1 步 — 节点电容

按零偏值，每个扩散区的底面积为 $1\times10=10\ \mu$m²，与场氧相邻的周长为 $10+1+1=12\ \mu$m，并与接地的栅极交叠宽度 $W$：

$$
C_S=C_D=(10\ \mu\mathrm m^2)(0.2\ \mathrm{fF/\mu m^2})+(12\ \mu\mathrm m)(1.2\ \mathrm{fF/\mu m})+(10\ \mu\mathrm m)(0.35\ \mathrm{fF/\mu m})=2+14.4+3.5=19.9\ \mathrm{fF}.
$$

衬底和栅极电压固定，对这些电容来说都是交流地。按题目的简化，不计栅极与沟道之间的电容。

### 第 2 步 — 阶段 1：晶体管截止

栅极为 0 V、源极为 +1.5 V 时，$V_{GS}=-1.5\ \mathrm V<V_t$，器件截止，漏极悬空保持 +1.5 V。10 µA 只对 $C_S$ 放电：

$$
\frac{dV_S}{dt}=-\frac{10\ \mu\mathrm A}{19.9\ \mathrm{fF}}=-0.50\ \mathrm{V/ns}.
$$

当 $V_{GS}=-V_S=V_t$，即 $V_S=-0.6$ V 时器件导通，用时 $(1.5+0.6)\ \mathrm V/(0.50\ \mathrm{V/ns})=4.2$ ns。

### 第 3 步 — 阶段 2：饱和区

导通后，晶体管从漏极提供 10 µA。$V_{DS}$ 很大，器件处于饱和区，源极稳定在 $I_D=10\ \mu$A 处：

$$
V_{ov}=\sqrt{\frac{2I_D}{k'(W/L_{\text{eff}})}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(10/0.82)}}=0.09\ \mathrm V,\qquad V_S=-(V_t+V_{ov})=-0.69\ \mathrm V,
$$

其中 $L_{\text{eff}}=1-2(0.09)=0.82\ \mu$m。此后源极几乎不变，漏极电流以同样的 0.50 V/ns 对 $C_D$ 放电。饱和区持续到 $V_{DS}=V_{ov}$，即 $V_D=V_G-V_t=-0.6$ V，又用时 $2.1\ \mathrm V/(0.50\ \mathrm{V/ns})=4.2$ ns，到约 8.4 ns。

### 第 4 步 — 阶段 3：线性区

当 $V_D=-0.6$ V 以下时，沟道相当于连接两个节点的电阻，$V_{DS}$ 缩小到几毫伏，10 µA 对 $C_S+C_D$ 共同放电：

$$
\frac{dV}{dt}=-\frac{10\ \mu\mathrm A}{39.8\ \mathrm{fF}}=-0.25\ \mathrm{V/ns}.
$$

约 3.3 ns 后漏极到达 −1.5 V，即 $t\approx12$ ns，源极略低于漏极。

### 第 5 步 — 仿真与波形草图

用同一模型进行 level-1 ngspice 仿真，验证了手算结果：源极在 4.18 ns 到达 −0.6 V，漏极在 8.54 ns 到达 −0.6 V、在 11.9 ns 到达 −1.5 V，饱和期间源极保持在 −0.692 V。

```spice
* G045 source/drain discharge
M1 d 0 s b nch W=10u L=0.82u
Vb b 0 -1.5
CS s 0 19.9f
CD d 0 19.9f
I1 s nm 0 PWL(0 0 1p 10u)
Vm nm 0 -1.5
.model nch nmos level=1 vto=0.6 kp=194u gamma=0 lambda=0
.ic v(s)=1.5 v(d)=1.5
.tran 10p 14n uic
.end
```

![源极和漏极电压随时间的变化：源极在 4.2 ns 内下降到 −0.6 V，随后保持在约 −0.69 V，同时漏极在 8.5 ns 前下降到 −0.6 V，之后两者以一半的速率共同下降，在 11.9 ns 到达 −1.5 V](/q/G045/solution-waveforms.zh.svg)

若计入栅极与沟道之间的电容 $WL_{\text{eff}}C_{ox}\approx35$ fF（沟道形成时需对其充电，且在线性区随节点一起变化），最后阶段将减慢到约 0.13 V/ns，结束时间推迟到约 15 ns；波形形状不变。

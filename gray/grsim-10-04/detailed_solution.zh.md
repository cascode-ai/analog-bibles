# 详细步骤 - grsim-10-04

每个运放迫使其晶体管的发射极跟随运放的 + 输入端，所以输入电压恰好加在 10 kΩ 电阻上，其电流 $V_{\text{in}}/10\ \mathrm{k\Omega}$ 加到一个偏置电流上，并从另一个偏置电流中减去。因此输入晶体管及其 $I_S$ 都不起作用。失调只来自两个偏置电流的失配，而偏置电流由带发射极负反馈的镜像管决定。先计算该失配，并换算为输入电压，再仿真转换器的失真。

### 第 1 步 — (a) 输出电流

设 $Q_1$、$Q_2$ 为输入晶体管，发射极为 $E_1$、$E_2$；$Q_A$、$Q_B$ 为镜像管，分别从 $E_1$ 和 $E_2$ 吸收 $I_A$ 和 $I_B$。运放理想时，$V_{E1}$ 和 $V_{E2}$ 等于各自的 + 输入，所以 $V_{E1}-V_{E2}=V_{\text{in}}$，10 kΩ 电阻中有从 $E_1$ 流向 $E_2$ 的电流 $V_{\text{in}}/R$。忽略基极电流，对两个发射极节点列 KCL：

$$
I_1=I_A+\frac{V_{\text{in}}}{R},\qquad I_2=I_B-\frac{V_{\text{in}}}{R},\qquad I_1-I_2=(I_A-I_B)+\frac{2V_{\text{in}}}{R}.
$$

因此失调电压，即使 $I_1=I_2$ 所需的输入，为

$$
V_{OS}=-\frac{R}{2}(I_A-I_B),\qquad |V_{OS}|=(5\ \mathrm{k\Omega})\,|\Delta I|.
$$

$Q_1$ 与 $Q_2$ 的 $I_S$ 失配只改变驱动它们所需的运放输出电压，不改变任何电流。

### 第 2 步 — (a) 偏置电流的失配

$Q_A$ 和 $Q_B$ 共用参考支路的基极电压 $V_B$，各有一个 1 kΩ 发射极电阻：

$$
V_B+V_{EE}=I_CR_E+V_T\ln\frac{I_C}{I_S}.
$$

在 $V_B$ 固定的条件下，对 $R_E$ 和 $I_S$ 的小变化求微分：

$$
\frac{\Delta I}{I}\left(IR_E+V_T\right)=-IR_E\frac{\Delta R_E}{R_E}+V_T\frac{\Delta I_S}{I_S}
\ \Rightarrow\
\left|\frac{\Delta I}{I}\right|_{\max}=\frac{IR_E(0.003)+V_T(0.02)}{IR_E+V_T}.
$$

取 $I=1$ mA，$IR_E=1$ V：

$$
\left|\frac{\Delta I}{I}\right|=\frac{(1\ \mathrm{V})(0.003)+(0.026\ \mathrm{V})(0.02)}{1.026\ \mathrm{V}}=3.43\times10^{-3},\qquad \Delta I=3.43\ \mu\mathrm{A},
$$

$$
|V_{OS}|_{\max}=(5\ \mathrm{k\Omega})(3.43\ \mu\mathrm{A})=17.2\ \mathrm{mV}.
$$

最坏情况是电流较大的器件同时具有较小的发射极电阻和较大的 $I_S$。发射极负反馈使 2 % $I_S$ 失配的影响减小为原来的 $V_T/(IR_E+V_T)=0.025$，所以 0.3 % 的电阻失配占主导。参考管及其电阻使两个偏置电流同等变化，不产生贡献；10 kΩ 电阻只影响跨导 $2/R$。若 ±0.3 % 和 ±2 % 是每个元件相对标称值的偏差，则成对差值加倍，$|V_{OS}|\approx34$ mV。

### 第 3 步 — (b) 仿真设置

运放用增益为 $10^4$ 的压控电压源驱动基极。晶体管取 $I_S=10^{-16}$ A、$\beta=100$，温度设为 $V_T=26$ mV 对应的值。电源为 ±15 V，集电极经 0 V 源接回 +15 V，输入为 1 kHz 的 ±5 V 正弦（差分 20 V 峰峰值）。行为源构成 $I_1-I_2$ 供傅里叶分析使用，并采用严格的容差以分辨极小的谐波。

```spice
* grsim-10-04 voltage-to-current converter
.options temp=28.57 tnom=28.57 reltol=1e-7 abstol=1e-15 vntol=1e-9
.model qn npn is=1e-16 bf=100
VCC vcc 0 15
VEE vee 0 -15
Iref vcc r 1m
Qh vcc r bl qn
Qr r bl er qn
Rr er vee 1k
QA e1 bl ea qn
RA ea vee 1k
QB e2 bl eb qn
RB eb vee 1k
V1 vcc c1 0
V2 vcc c2 0
Q1 c1 b1 e1 qn
Q2 c2 b2 e2 qn
EL b1 0 inL e1 1e4
ER b2 0 inR e2 1e4
R10 e1 e2 10k
VinL inL 0 sin(0 5 1k)
VinR inR 0 sin(0 -5 1k)
Bout out 0 v=i(V1)-i(V2)
Rout out 0 1
.tran 1u 10m 0 1u
.four 1k v(out)
.end
```

作为对 (a) 的检验，把同一电路改为 $R_A=1.0015$ kΩ、$R_B=0.9985$ kΩ，$Q_A$、$Q_B$ 的面积分别取 0.99 和 1.01（最坏情况方向），得到 $I_A-I_B=-3.43\ \mu$A，使 $I_1=I_2$ 需要 $V_{\text{in}}=17.13$ mV，与 17.2 mV 的手算结果一致。

### 第 4 步 — (b) 失真结果

| 谐波 | $I_1-I_2$ 的幅值 | 相对基波 |
|---|---|---|
| 基波 | 1.980 mA | — |
| 二次 | $1.8\times10^{-14}$ A | $\approx10^{-11}$（零） |
| 三次 | 8.2 nA | $4.2\times10^{-6}$（0.0004 %） |
| 五次 | 7.9 nA | $4.0\times10^{-6}$ |

基波为 $\alpha\cdot2(10\ \mathrm{V})/(10\ \mathrm{k\Omega})=1.98$ mA，与预期相符。失真极小：

- **二次谐波。** 对匹配器件，由对称性二次谐波为零。
- **基射结非线性。** 唯一固有的非线性是有限运放增益在每个发射极留下的残余 $V_{BE}(I)/A$。其差分效应约为 $(2V_T/A)\tanh^{-1}(V_{\text{in}}/10\ \mathrm{V})$，相对 10 V 的信号，三次谐波量级为 $10^{-7}$。
- **峰值截止。** 20 V 驱动使电阻电流在峰值处达到 ±1 mA，而仿真的偏置电流为 0.9997 mA（由于基极电流而略低于 1 mA）。因此在每个峰值处，有一个输入晶体管会非常短暂地截止。这就是上面看到的 $10^{-6}$ 量级的奇次谐波。

更大的驱动或更小的偏置电流都会使 $I_1$ 或 $I_2$ 在零处被削波，失真将急剧增大。在这一范围内，转换器基本上是线性的，因为电流由运放环路和电阻决定。若偏置电流失配（如第 3 步），截止变得不对称：此时仿真得到的二次和三次谐波各为 $4.8\times10^{-5}$（0.005 %），仍可忽略。

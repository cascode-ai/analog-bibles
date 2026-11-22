# 详细步骤 - alsim-06-6-07

PSRR 是差模增益与从某个电源到输出的增益之比，$\mathrm{PSRR}^+=A_v/A_{dd}$，$\mathrm{PSRR}^-=A_v/A_{ss}$。由同一交流源驱动的两个相同运放分别以节点电压的形式给出分子和分母，再由后处理求比值。两个运放都由相同的仅在直流时起作用的反馈网络保持在线性工作点上。这里用一个两级运放（负载 20 pF）演示该方法。

### 第 1 步 — 运放 1：差模增益

交流源 $v$（1 V）驱动同相输入端，电源保持安静。反相输入端经一个很大的 $C_F$ 接地，并用一个很大的 $L_F$ 从输出接到反相输入端，仅在直流时闭合环路。在分析频率上反相输入端为交流地，因此

$$
v_{o1}=A_v(j\omega)\,v .
$$

### 第 2 步 — 运放 2：电源增益

使用相同的运放，接相同的负载和相同的 $L_F$/$C_F$ 网络，两个输入端都接交流地。把同一信号源 $v$ 串联在其 $V_{DD}$ 中（求 PSRR⁺），或串联在其 $V_{SS}$ 中（求 PSRR⁻）：

$$
v_{o2}=A_{dd}(j\omega)\,v\quad\text{or}\quad v_{o2}=A_{ss}(j\omega)\,v .
$$

两个直流稳定网络必须相同，使它们在比较中相互抵消，而且两个运放都必须处于线性区。

### 第 3 步 — 取比值

$$
\frac{v_{o1}}{v_{o2}}=\frac{A_v(j\omega)}{A_{dd}(j\omega)}=\mathrm{PSRR}^+(j\omega)\qquad\left(\text{or }\frac{A_v}{A_{ss}}=\mathrm{PSRR}^-\right).
$$

画出 `V(o1)/V(o2)` 或 `VDB(o1) - VDB(o2)`，就得到与 PSRR 成正比的量（当 $v=1$ V 时与之相等）。下面的网表用第三个运放同时构造两种情形，并加入常规的直接（跟随器）测量电路作为比较。

```spice
* alsim-06-6-07 PSRR as a ratio of two outputs
.include opamp.sub
VDD vdd 0 DC 2.5
VSS vss 0 DC -2.5
VS s 0 DC 0 AC 1
* op amp 1: differential gain, quiet supplies
X1 s n1 o1 vdd vss OPAMP
LF1 o1 n1 1G
CF1 n1 0 1
CL1 o1 0 20P
* op amp 2: inputs at ac ground, ripple v in series with its VDD (PSRR+)
VR2 vdd2 vdd DC 0 AC 1
X2 0 n2 o2 vdd2 vss OPAMP
LF2 o2 n2 1G
CF2 n2 0 1
CL2 o2 0 20P
* op amp 3: same with the ripple in series with VSS (PSRR-)
VR3 vss3 vss DC 0 AC 1
X3 0 n3 o3 vdd vss3 OPAMP
LF3 o3 n3 1G
CF3 n3 0 1
CL3 o3 0 20P
* direct (follower) references
X4 0 o4 o4 vdd2 vss OPAMP
CL4 o4 0 20P
X5 0 o5 o5 vdd vss3 OPAMP
CL5 o5 0 20P
.control
ac dec 20 1 100meg
let psrrp = db(v(o1))-db(v(o2))
let psrrm = db(v(o1))-db(v(o3))
let dirp = -db(v(o4))
let dirm = -db(v(o5))
.endc
.END
```

`opamp.sub` 把该两级运放定义为子电路 `OPAMP`（引脚依次为同相输入、反相输入、输出、$V_{DD}$、$V_{SS}$）。网表中交流源 VS、VR2 和 VR3 的幅度都为 1。每个运放只受各自信号源的激励，因此一次分析即可求出各比值。

### 第 4 步 — 结果

![用比值法和直接跟随器法取倒数得到的 PSRR⁺ 与 PSRR⁻ 随频率变化曲线](/q/alsim-06-6-07/solution-psrr.zh.svg)

| 频率 | 10 Hz | 1 kHz | 10 kHz | 100 kHz | 1 MHz | 10 MHz |
|---|---|---|---|---|---|---|
| PSRR⁺，比值法（dB） | 69.9 | 69.9 | 67.4 | 51.0 | 31.1 | 11.2 |
| PSRR⁺，1/直接法（dB） | 69.9 | 69.9 | 67.4 | 51.0 | 31.2 | 36.7 |
| PSRR⁻，比值法（dB） | 81.4 | 64.7 | 44.8 | 24.8 | 4.8 | −15.1 |
| PSRR⁻，1/直接法（dB） | 81.4 | 64.7 | 44.8 | 24.8 | 5.0 | 10.5 |

在约 1 MHz 以下，比值法与直接测量结果的倒数相差不超过 0.2 dB。直流值 69.9 dB 和 81.4 dB 与该运放手算的直流 PSRR（约 70 dB 和 82 dB）一致。超过运放的 GB（约 1.5 MHz）后，直接跟随器的结果不再等于 $1/\mathrm{PSRR}$，因为它假定 $|A_v|\gg1$，曲线转而上升。比值法则仍然有效。

频率特性可由电路解释。该运放的第二级是以 $V_{SS}$ 为参考的 n 沟道管。在主极点（几百赫）以上 $C_c$ 开始起作用，把 M6 的栅极与漏极连在一起，使 M6 相当于一个接 $V_{SS}$ 的二极管，输出于是跟随 $V_{SS}$。因此 PSRR⁻ 约从 160 Hz 开始以 20 dB/十倍频程下降。PSRR⁺ 则平坦地保持到约 12 kHz。这与常见的 n 沟道输入、p 沟道第二级的运放正好相反，后者是 PSRR⁺ 先劣化。

# 详细步骤 - alsim-06-6-06

CMRR 是比值 $A_v/A_c$。与其测量它的倒数，不如让一个运放对交流信号做差模放大，再让一个相同的运放对同一信号做共模放大。两路输出之比就是 CMRR 本身。两个运放都需要确定的直流工作点，这由一条在直流时闭合、在分析频率上断开的反馈通路提供。比值通过后处理得到。这里用 alsim-06-3-07 的两级运放（负载 20 pF）来检验该方法。

### 第 1 步 — 运放 1：差模增益

用交流源 $v$（1 V）驱动同相输入端。反相输入端经一个很大的电容 $C_F$ 接地，并从输出经一个很大的电感 $L_F$（或很大的电阻配合该电容）到反相输入端闭合直流反馈通路。在直流时运放是一个跟随器，输出处于范围中部。在任何分析频率上，$L_F$ 相当于开路，$C_F$ 相当于短路，因此反相输入端为交流地，

$$
v_{o1}=A_v(j\omega)\,v .
$$

### 第 2 步 — 运放 2：共模增益

使用相同的运放，接相同的负载和相同的直流稳定网络，但把 $C_F$ 接回信号源 $v$ 而不是接地。这样在分析频率上两个输入端都承载同一信号 $v$，

$$
v_{o2}=A_c(j\omega)\,v .
$$

两个直流稳定网络完全相同，保证它们不会使比较产生偏差。

### 第 3 步 — 取比值

同一信号源驱动两个运放，

$$
\frac{v_{o1}}{v_{o2}}=\frac{A_v(j\omega)}{A_c(j\omega)}=\mathrm{CMRR}(j\omega),
$$

因此后处理得到的 `V(o1)/V(o2)`（或以分贝表示的 `VDB(o1) - VDB(o2)`）与 CMRR 成正比（当 $v=1$ V 时与之相等），并包含其相位和频率特性。用行为源计算 $v_{o1}/v_{o2}$，可得到同样的结果作为一个节点电压。把 1/CMRR 网络放进另一个相同运放的反馈环路则不太有用：环路增益只有约 $A_v/\mathrm{CMRR}=|A_c|$，太小，无法保证结果准确。

### 第 4 步 — 网表

```spice
* alsim-06-6-06 CMRR as a ratio of two outputs
.include opamp.sub
VDD vdd 0 DC 2.5
VSS vss 0 DC -2.5
VS s 0 DC 0 AC 1
* op amp 1: differential gain, dc-stabilized by LF1/CF1
X1 s n1 o1 vdd vss OPAMP
LF1 o1 n1 1G
CF1 n1 0 1
CL1 o1 0 20P
* op amp 2: common-mode gain, same stabilization, CF2 returned to the source
X2 s n2 o2 vdd vss OPAMP
LF2 o2 n2 1G
CF2 n2 s 1
CL2 o2 0 20P
* reference: direct configuration (follower with Vcm in series with both inputs)
X3 s n3 o3 vdd vss OPAMP
VC3 n3 o3 DC 0 AC 1
CL3 o3 0 20P
.control
ac dec 20 1 100meg
let cmrr = db(v(o1))-db(v(o2))
let direct = -db(v(o3))
.endc
.END
```

`opamp.sub` 把 alsim-06-3-07 的运放定义为子电路 `OPAMP`（引脚依次为同相输入、反相输入、输出、$V_{DD}$、$V_{SS}$）。第三个运放是常规的直接测量电路，留作比较。

### 第 5 步 — 结果

低频时 $A_v=70.47$ dB，$A_c=-13.32$ dB，因此比值法给出

$$
\mathrm{CMRR}=70.47\ \mathrm{dB}-(-13.32\ \mathrm{dB})=83.8\ \mathrm{dB}\;(1.55\times10^4).
$$

![alsim-06-3-07 的运放在 20 pF 负载下，用比值法和直接法取倒数得到的 CMRR 随频率变化曲线](/q/alsim-06-6-06/solution-cmrr.zh.svg)

| 频率 | 10 Hz | 10 kHz | 100 kHz | 1 MHz | 10 MHz |
|---|---|---|---|---|---|
| 比值法（dB） | 83.78 | 83.78 | 83.77 | 82.70 | 61.33 |
| 1/（直接法结果）（dB） | 83.79 | 83.78 | 83.75 | 81.01 | 77.20 |

在几百千赫以下，两种方法相差不超过 0.02 dB，因此该比值确实是直接测量结果的倒数。该运放的 CMRR 平坦地保持在 83.8 dB，约在 1.8 MHz 处下降 3 dB。超过运放的 GB（接 20 pF 时约 1.5 MHz）后，直接法失效。它假定 $v_{out}/v_{cm}=A_c/(1+A_v)\approx A_c/A_v$，这需要 $|A_v|\gg1$，因此它给出的 CMRR 在约 77 dB 处趋于平坦。比值法则在所有频率上都正确地测出 $A_v/A_c$。

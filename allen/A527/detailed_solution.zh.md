# 详细步骤 - A527

即使共模项把输出往错误方向推，比较器也必须在输入离阈值仅半个 LSB 时完全摆动。把这两项要求都折算到输入端并相加，求出半个 LSB 仍能覆盖它们的最大 $N$。

### 第 1 步 — 正确判决的条件

取 $V_{OS}=0$、$A_{cm}=1$，

$$
v_o=1000\,v_{id}+A_{cm}v_{cm},\qquad 0\le v_o\le5\ \mathrm V .
$$

对比阈值高 $0.5$ LSB 的输入，$v_{id}=+0.5$ LSB，$v_o$ 必须达到 5 V。最坏情况下共模项以最大幅值阻碍判决；$v_{cm}$ 跟随 1 到 4 V 的输入范围，故 $A_{cm}v_{cm,max}=(1)(4\ \mathrm V)=4$ V：

$$
1000\,(0.5\ \text{LSB})-4\ \mathrm V\ge5\ \mathrm V .
$$

对比阈值低 $0.5$ LSB 的输入，必须克服反向的 4 V 共模项把输出驱动到 0 V，得到同样的界限。

### 第 2 步 — 折算到输入端的预算

两边除以增益 1000：

$$
0.5\ \text{LSB}\ge\frac{5\ \mathrm V}{1000}+\frac{4\ \mathrm V}{1000}=5\ \mathrm{mV}+4\ \mathrm{mV}=9\ \mathrm{mV}
\;\Longrightarrow\;
1\ \text{LSB}\ge18\ \mathrm{mV}.
$$

第一项是 5 V 满摆幅所需的过驱动，第二项是折算到输入端的共模误差。

### 第 3 步 — 位数

输入范围为 3 V，

$$
\frac{3\ \mathrm V}{2^N}\ge18\ \mathrm{mV}
\;\Longrightarrow\;
2^N\le166.7
\;\Longrightarrow\;
N=7 .
$$

7 位时 1 LSB $=3\ \mathrm V/128=23.4$ mV，满足界限；8 位时 $11.7$ mV 则不满足。

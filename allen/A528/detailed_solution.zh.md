# 详细步骤 - A528

即使失调阻碍判决，比较器也必须在输入离阈值仅半个 LSB 时完全摆动。把摆幅要求折算到输入端，再加上失调，求出半个 LSB 能同时覆盖两者的最大 $N$。

### 第 1 步 — 正确判决的条件

取 $A_{cm}=0$，

$$
v_o=1000\,(v_{id}+V_{OS}),\qquad 0\le v_o\le5\ \mathrm V .
$$

对比阈值高 $0.5$ LSB 的输入，即使 40 mV 失调的符号与判决相反，输出也必须达到 5 V：

$$
1000\,(0.5\ \text{LSB}-40\ \mathrm{mV})\ge5\ \mathrm V
\;\Longrightarrow\;
0.5\ \text{LSB}\ge40\ \mathrm{mV}+5\ \mathrm{mV}=45\ \mathrm{mV},
$$

故 $1$ LSB $\ge90$ mV。对比阈值低 $0.5$ LSB、输出须为 0 V 的输入，得到同样的界限。

### 第 2 步 — 位数

输入范围为 3 V，

$$
\frac{3\ \mathrm V}{2^N}\ge90\ \mathrm{mV}
\;\Longrightarrow\;
2^N\le33.3
\;\Longrightarrow\;
N=5 .
$$

5 位时 1 LSB $=3\ \mathrm V/32=93.75$ mV，满足界限；6 位时 $46.9$ mV 则不满足。

失调起主导作用：只要求 $40\ \mathrm{mV}\le0.5$ LSB（忽略 5 mV 摆幅项）得 1 LSB $\ge80$ mV，结果同样是 $N=5$。

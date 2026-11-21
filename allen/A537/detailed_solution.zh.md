# 详细步骤 - A537

第一级 DAC 基准的误差不会移动第一级的判决（它们使用理想 ADC），但会从输入中减去错误的量。于是余量的误差与子区间序号成正比，该子区间内第二级的每个跳变点都移动同样的量。求出最大移动量（在最高子区间），并将其限制在半个 LSB 以内。

### 第 1 步 — 含 DAC 误差的余量

第一级是理想的，因此子区间 $m=b_0b_1=0,\dots,3$ 覆盖 $mV_{REF}/4$ 到 $(m+1)V_{REF}/4$。DAC 输出

$$
v_{out}(1)=\frac m4\left(V_{REF}\pm\Delta V_{REF}\right)
$$

而不是 $mV_{REF}/4$，因此送到第二级的余量为

$$
v_{in}(2)=v_{in}(1)-\frac{mV_{REF}}4\mp\frac{m\,\Delta V_{REF}}4 ,
$$

偏小（或偏大）$m\Delta V_{REF}/4$。

### 第 2 步 — 跳变点的移动

第二级在 $v_{in}(2)$ 达到 $V_{REF}/16$、$V_{REF}/8$、$3V_{REF}/16$ 时切换。由于余量偏移了 $\mp m\Delta V_{REF}/4$，这三个跳变（到码 $4m+1$、$4m+2$、$4m+3$）所对应的输入都移动

$$
\Delta v_{in}(1)=\pm\frac{m\,\Delta V_{REF}}4 .
$$

第一级的跳变不受影响。$m=0$ 时移动量为零，$m=3$ 时最大：

$$
\Delta v_{in,max}=\frac{3\,\Delta V_{REF}}4=\frac{3\,\Delta V_{REF}/4}{V_{REF}/16}\ \text{LSB}=12\,\frac{\Delta V_{REF}}{V_{REF}}\ \text{LSB}.
$$

### 第 3 步 — INL 限制

要求每个跳变点都在其理想位置的 $\pm0.5$ LSB 以内：

$$
12\,\frac{|\Delta V_{REF}|}{V_{REF}}\le0.5
\;\Longrightarrow\;
|\Delta V_{REF}|\le\frac{V_{REF}}{24}\approx0.0417\,V_{REF}.
$$

等价地，$3\Delta V_{REF}/4\le V_{REF}/32$。DAC 的全部误差 $\Delta V_{REF}$ 不会出现在输出中，因为最多只有其四分之三被减去（在最高子区间）。

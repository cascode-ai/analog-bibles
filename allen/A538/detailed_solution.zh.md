# 详细步骤 - A538

第一级 DAC 的误差不改变第一级的判决，但会从输入中减去错误的量，因此子区间 $m$ 中的余量误差与 $m$ 成正比，该子区间内第二级的每个跳变点都移动同样的量。把最大移动量（在最高子区间）限制在一个 LSB 以内。

### 第 1 步 — 第二级跳变点的移动

第一级是理想的，因此子区间 $m=0,\dots,3$ 覆盖 $mV_{REF}/4$ 到 $(m+1)V_{REF}/4$。DAC 输出

$$
v_{out}(1)=\frac m4\left(V_{REF}\pm\Delta V_{REF}\right),
$$

与理想值 $mV_{REF}/4$ 相差 $\pm m\Delta V_{REF}/4$。余量 $v_{in}(2)=v_{in}(1)-v_{out}(1)$ 有相反的偏差，因此第二级到达各阈值 $V_{REF}/16$、$V_{REF}/8$、$3V_{REF}/16$ 时所对应的输入移动

$$
\Delta v_{in}(1)=\pm\frac{m\,\Delta V_{REF}}4 .
$$

第一级的跳变点不移动。

### 第 2 步 — 最坏情况

在最高子区间 $m=3$ 中移动量最大：

$$
\Delta v_{in,max}=\frac{3\,\Delta V_{REF}}4=\frac{3\,\Delta V_{REF}/4}{V_{REF}/16}\ \text{LSB}=12\,\frac{\Delta V_{REF}}{V_{REF}}\ \text{LSB}.
$$

### 第 3 步 — INL 在 ±1 LSB 以内

$$
12\,\frac{|\Delta V_{REF}|}{V_{REF}}\le1
\;\Longrightarrow\;
|\Delta V_{REF}|\le\frac{V_{REF}}{12}\approx0.083\,V_{REF}.
$$

在此极限下，最高子区间中第二级的三个跳变点已移动整整一个 LSB，因此该子区间开始丢失一个码：$+\Delta V_{REF}$ 时丢失码 1111（最后一个跳变移到满量程处），$-\Delta V_{REF}$ 时丢失码 1100（第一个跳变移到第一级的跳变点上）。把 INL 限制从 $\pm0.5$ 放宽到 $\pm1$ LSB，允许误差加倍，从 $V_{REF}/24$ 增至 $V_{REF}/12$。

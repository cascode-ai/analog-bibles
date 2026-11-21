# 详细步骤 - A489

沿流水线跟踪各位，得到每一位的权重为各级增益之积；计算 16 个输出电平，并与无限分辨率直线 $v_{OUT}=(\text{code}/16)V_{REF}$ 比较。INL 是到该直线的竖直距离，DNL 是每个台阶减去 1 LSB（$V_{REF}/16$）。

### 第 1 步 — 输出表达式

位 $b_3$ 最先进入，经过全部四个求和器增益（从左到右为 $\tfrac12$、$\tfrac58$、$\tfrac38$、$\tfrac12$），$b_2$ 经过后三个，依此类推；延迟只使结果在时间上平移。最终输出为

$$
v_{OUT}=\frac12\left[b_0+\frac38\left(b_1+\frac58\left(b_2+\frac12b_3\right)\right)\right]V_{REF}
=\left(\frac{b_0}{2}+\frac{3}{16}b_1+\frac{15}{128}b_2+\frac{15}{256}b_3\right)V_{REF}.
$$

理想权重为 $\tfrac12,\ \tfrac14,\ \tfrac18,\ \tfrac1{16}$；以 $V_{REF}/256$ 为单位，实际权重为 128、48、30、15，而不是 128、64、32、16。

### 第 2 步 — 输出电平与 INL

以 $V_{REF}/256$ 为单位（每 LSB 为 16），码字 0000 到 1111 的电平为

$$
0,\ 15,\ 30,\ 45,\ 48,\ 63,\ 78,\ 93,\ 128,\ 143,\ 158,\ 173,\ 176,\ 191,\ 206,\ 221,
$$

理想值为 $16\times\text{code}$。偏差为

$$
\mathrm{INL}=\frac{(48-64)b_1+(30-32)b_2+(15-16)b_3}{16}=-\frac{16b_1+2b_2+b_3}{16}\ \ \mathrm{LSB},
$$

它从不为正：在 0000 和 1000 处为 0，在 0111 和 1111 处达到 $-19/16=-1.1875$ LSB。

### 第 3 步 — 台阶与 DNL

$$
\begin{aligned}
\text{inside a group of four }(b_2b_3:\ 00\to01\to10\to11):&\quad 15/16\ \mathrm{LSB},\quad \mathrm{DNL}=-0.0625\ \mathrm{LSB},\\
0011\to0100,\ 1011\to1100:&\quad (48-45)/16=3/16\ \mathrm{LSB},\quad \mathrm{DNL}=-0.8125\ \mathrm{LSB},\\
0111\to1000:&\quad (128-93)/16=35/16\ \mathrm{LSB},\quad \mathrm{DNL}=+1.1875\ \mathrm{LSB}.
\end{aligned}
$$

所有台阶都为正，因此该 DAC 仍然单调。

### 第 4 步 — 特性曲线

![存在增益误差的 4 位流水线 DAC 的转换特性，与无限分辨率直线对比](/q/A489/solution-curves.zh.svg)

阶梯位于无限分辨率直线上或其下方。每组四个码字内逐渐落后（台阶为 15/16 LSB），在 $b_1$ 跳变处几乎持平（3/16 LSB），在 MSB 跳变处跃升 35/16 LSB 回到直线上。

### 第 5 步 — 结果

$$
+\mathrm{INL}=0\ \mathrm{LSB},\quad -\mathrm{INL}=-1.1875\ \mathrm{LSB};\qquad
+\mathrm{DNL}=+1.1875\ \mathrm{LSB},\quad -\mathrm{DNL}=-0.8125\ \mathrm{LSB}.
$$

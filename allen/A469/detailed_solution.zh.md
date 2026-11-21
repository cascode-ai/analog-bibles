# 详细步骤 - A469

电路由三个理想的反相运放级构成。用虚地求和规则写出每一级的输出，合成 $v_{out}$，再选择 $R_9$ 和 $R_{10}$，使两组 4 位得到 8 位 DAC 的二进制权重。

### 第 1 步 — 左上求和器（位 $b_4$–$b_7$）

每个闭合的开关把 $V_{REF}$ 经其电阻接到虚地，各电流在反馈电阻 $R$ 中相加：

$$
V_A=-R\,V_{REF}\left(\frac{b_4}{2R}+\frac{b_5}{4R}+\frac{b_6}{8R}+\frac{b_7}{16R}\right)
=-V_{REF}\left(\frac{b_4}{2}+\frac{b_5}{4}+\frac{b_6}{8}+\frac{b_7}{16}\right).
$$

### 第 2 步 — 下方反相放大器

输入电阻 $R_{10}$ 接 $V_{REF}$，反馈电阻为 $R$：

$$
V_B=-\frac{R}{R_{10}}V_{REF},
$$

该电压驱动开关 $b_0$–$b_3$ 和电阻 $R_1$–$R_4$。

### 第 3 步 — 输出求和器

右侧运放把经 $R_9$ 的 $V_A$ 与经所选 $R_1$–$R_4$ 的 $V_B$ 相加，反馈电阻为 $R$：

$$
\begin{aligned}
v_{out}&=-R\left[\frac{V_A}{R_9}+V_B\left(\frac{b_0}{2R}+\frac{b_1}{4R}+\frac{b_2}{8R}+\frac{b_3}{16R}\right)\right]\\
&=\frac{R}{R_{10}}V_{REF}\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}+\frac{b_3}{16}\right)+\frac{R}{R_9}V_{REF}\left(\frac{b_4}{2}+\frac{b_5}{4}+\frac{b_6}{8}+\frac{b_7}{16}\right).
\end{aligned}
$$

### 第 4 步 — 理想 8 位 DAC 的取值

理想 8 位 DAC 要求 $v_{out}=V_{REF}\sum_{i=0}^{7}b_i/2^{i+1}$，即

$$
\frac{R}{R_{10}}=1,\qquad \frac{R}{R_9}=\frac1{16}
\quad\Longrightarrow\quad
R_{10}=R,\qquad R_9=16R .
$$

仅二进制加权本身只要求低 4 位的权重为高 4 位的 $1/16$，即 $R_9=16R_{10}$；取 $R_{10}=R$ 使满量程范围等于 $V_{REF}$。

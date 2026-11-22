# 详细步骤 - G432

与闪烁噪声的处理完全相同，通过差模半边电路把每个器件的热噪声（thermal noise）折算到差模输入：把输出短路，把送到输出的噪声电流相加，除以 $g_{m1}^2$，再因两个半边电路互不相关而乘以 2。在电流固定时，输入对管 $W/L$ 加倍使 $g_{m1}$ 增大到 $\sqrt2$ 倍，既减小了 $M_1$ 自身的噪声，又减小了负载器件噪声的权重。

### 第 1 步 — 新的输入对管跨导

饱和区 $g_m=\sqrt{2k'(W/L)I_D}$，$W/L=133.3m$：

$$
g_{m1}=\sqrt{2(170\ \mu\mathrm{A/V^2})(20\times133.3)(2.0\ \mathrm{mA})}=42.6\ \mathrm{mA/V},
$$

是原来 30 mA/V 的 $\sqrt2$ 倍。$g_{m3}=36$ mA/V 和 $g_{m11}=48$ mA/V 不变。

### 第 2 步 — 差模半边电路的输出噪声电流

输出短路且 $r_o\to\infty$ 时，只有 $M_1$、$M_{11}$ 和 $M_3$ 向输出送出噪声电流：共源共栅管 $M_{1A}$、$M_{3A}$ 只传递其源极电流，尾电流管的噪声是共模的。栅极噪声电压 $\overline{v_i^2}/\Delta f=4kT\cdot\tfrac23/g_{mi}$ 产生漏极噪声电流 $g_{mi}^2\overline{v_i^2}=4kT\cdot\tfrac23g_{mi}$，故

$$
\frac{\overline{i_o^2}}{\Delta f}=4kT\cdot\tfrac23\left(g_{m1}+g_{m11}+g_{m3}\right)
=(1.107\times10^{-20}\ \mathrm J)(42.6+48+36)\ \mathrm{mA/V}=1.40\times10^{-21}\ \mathrm{A^2/Hz}.
$$

### 第 3 步 — 输入参考噪声

除以 $g_{m1}^2$ 得到半边电路的值，两个互不相关的半边在差模输入中相加：

$$
\frac{\overline{v_{eqH}^2}}{\Delta f}=\frac{1.40\times10^{-21}\ \mathrm{A^2/Hz}}{(42.6\ \mathrm{mA/V})^2}=7.7\times10^{-19}\ \mathrm{V^2/Hz},
\qquad
\frac{\overline{v_{eq}^2}}{\Delta f}=2\,\frac{\overline{v_{eqH}^2}}{\Delta f}=1.55\times10^{-18}\ \mathrm{V^2/Hz},
$$

即 $\sqrt{1.55\times10^{-18}}=1.25\ \mathrm{nV/\sqrt{Hz}}$。

### 第 4 步 — 与原设计比较

$g_{m1}=30$ mA/V 时，同样的步骤给出 $2.8\times10^{-18}$ V²/Hz（1.67 nV/√Hz）。等价地，

$$
\frac{\overline{v_{eq}^2}}{\Delta f}=2\cdot\frac{4kT\cdot\tfrac23}{g_{m1}}\left(1+\frac{g_{m11}+g_{m3}}{g_{m1}}\right),
$$

括号内的值从 3.8 降到 2.97，同时前面的系数降低 $\sqrt2$ 倍。因此加宽输入对管使热噪声功率降低 1.8 倍。

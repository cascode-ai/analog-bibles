# 详细步骤 - G431

通过差模半边电路把每个器件的噪声折算到差模输入。输出短路时，每个器件的噪声在输出端产生一个电流；除以输入对管的跨导即得等效栅极电压。$r_o\to\infty$ 时只有 $M_1$、$M_{11}$ 和 $M_3$ 有贡献：共源共栅管把其源极电流原样传递，尾电流管的噪声是共模的。最后把两个互不相关的半边电路相加。

### 第 1 步 — 差模半边电路中哪些器件有贡献

把输出短路，考察送到输出的电流。
- $M_1$：其栅极噪声 $\overline{v_1^2}$ 在折叠节点产生 $g_{m1}v_1$，由 $M_{1A}$ 传到输出。
- $M_{11}$：向折叠节点注入噪声电流 $g_{m11}v_{11}$；$r_o\to\infty$ 时它同样经 $M_{1A}$ 流到输出。
- $M_3$：噪声电流 $g_{m3}v_3$ 由 $M_{3A}$ 传到输出。
- 共源共栅管 $M_{1A}$、$M_{3A}$：$r_o\to\infty$ 时其源极只连接电流源，自身的噪声电压不改变任何电流，因此没有贡献。
- 尾电流管 $M_5$、$M_6$：其噪声在两半之间平分，是共模的，不出现在 $v_{od}$ 中。

### 第 2 步 — 半边电路的输入参考噪声

三个互不相关的输出电流按功率相加。除以 $g_{m1}^2$：

$$
\frac{\overline{v_{eqH}^2}}{\Delta f}=\frac{\overline{v_1^2}}{\Delta f}+\left(\frac{g_{m11}}{g_{m1}}\right)^2\frac{\overline{v_{11}^2}}{\Delta f}+\left(\frac{g_{m3}}{g_{m1}}\right)^2\frac{\overline{v_3^2}}{\Delta f},
\qquad \frac{g_{m11}}{g_{m1}}=1.6,\quad \frac{g_{m3}}{g_{m1}}=1.2 .
$$

### 第 3 步 — 各器件的闪烁噪声

每个器件的闪烁噪声（flicker noise）项为 $\overline{v_i^2}/\Delta f=K_f/(WLC_{ox}f)$，栅面积 $WL=m(40\ \mu\mathrm m)(0.3\ \mu\mathrm m)=12m\ \mu\mathrm m^2$。对 $M_1$（$m=10$，$WL=120\ \mu\mathrm m^2$）：

$$
\frac{\overline{v_1^2}}{\Delta f}=\frac{4.8\times10^{-25}\ \mathrm{V^2F}}{(6.9\times10^{-15}\ \mathrm{F/\mu m^2})(120\ \mu\mathrm m^2)f}=\frac{5.80\times10^{-13}}{f}\ \mathrm{V^2/Hz}.
$$

| 器件 | 类型 | $WL$ (μm²) | $\overline{v_i^2}/\Delta f$ (V²/Hz) | 权重 | 贡献 (V²/Hz) |
|---|---|---|---|---|---|
| $M_1$ | NMOS | 120 | $5.80\times10^{-13}/f$ | 1 | $5.80\times10^{-13}/f$ |
| $M_{11}$ | PMOS | 528 | $2.28\times10^{-14}/f$ | $1.6^2=2.56$ | $0.58\times10^{-13}/f$ |
| $M_3$ | NMOS | 144 | $4.83\times10^{-13}/f$ | $1.2^2=1.44$ | $6.96\times10^{-13}/f$ |

求和得

$$
\frac{\overline{v_{eqH}^2}}{\Delta f}=\frac{(5.80+0.58+6.96)\times10^{-13}}{f}=\frac{1.33\times10^{-12}}{f}\ \mathrm{V^2/Hz}.
$$

### 第 4 步 — 总差模输入参考噪声

两个半边电路包含不同的晶体管，其噪声互不相关，因此差模输入噪声是半边电路值的两倍：

$$
\frac{\overline{v_{eq}^2}}{\Delta f}=2\,\frac{\overline{v_{eqH}^2}}{\Delta f}=\frac{2.67\times10^{-12}}{f}\ \mathrm{V^2/Hz}\quad(f\ \text{in Hz}).
$$

在 1 kHz 处为 $2.7\times10^{-15}$ V²/Hz，即 52 nV/√Hz。NMOS 电流源 $M_3$、$M_4$ 的贡献超过输入对管：它们的 $g_m$ 比 $M_1$ 大，且 NMOS 的 $K_f$ 约为 PMOS 的六倍。尺寸很大的 PMOS 管 $M_{11}$ 贡献很小。

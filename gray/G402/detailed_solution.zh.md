# 详细步骤 - G402

只有受 CMC 输入驱动的那部分尾电流管对 CMC 跨导有贡献。将 CMC 单位增益频率用 $g_{m52}$ 表示，令其等于差模单位增益频率，再在给定的过驱动电压下把所需的 $g_{m52}$ 换算成电流。

### 第 1 步 — 差模单位增益频率（目标值）

拆分尾电流管不改变差模半边电路（half circuit），因为对差模信号而言尾节点是交流地。由 $g_{m1}=2I_{D1}/V_{ov}=2(100\ \mu\mathrm A)/0.25\ \mathrm V=0.8\ \mathrm{mA/V}$，

$$
\omega_{u,dm}=\frac{g_{m1}}{C_{Ld}}=\frac{0.8\ \mathrm{mA/V}}{4\ \mathrm{pF}}=2.0\times10^{8}\ \mathrm{rad/s}.
$$

不拆分时，$\omega_{u,cmc}=g_{m5h}/C_{Lc}=(0.8\ \mathrm{mA/V})/(2\ \mathrm{pF})=4.0\times10^{8}$ rad/s，是该值的两倍。

### 第 2 步 — 拆分尾电流管后的 CMC 单位增益频率

$M_{51}$ 的栅极接固定偏置，它只向尾节点提供输出电阻，不提供信号电流。在共模半边电路中，只有半个 $M_{52}$ 把 $v_{cmc}$ 转换为电流，该电流经过起共源共栅作用的 $M_1$ 流到负载为 $C_{Lc}$ 的输出节点。与前面一样，CMC 直流增益远大于 1，因此

$$
\omega_{u,cmc}\approx\frac{g_{m52h}}{C_{Lc}}=\frac{g_{m52}/2}{C_{Lc}}.
$$

### 第 3 步 — $M_{52}$ 所需的跨导与电流

令 $\omega_{u,cmc}=\omega_{u,dm}$：

$$
\frac{g_{m52}}{2C_{Lc}}=\frac{g_{m1}}{C_{Ld}}
\;\Rightarrow\;
g_{m52}=2g_{m1}\frac{C_{Lc}}{C_{Ld}}=2(0.8\ \mathrm{mA/V})\frac{2\ \mathrm{pF}}{4\ \mathrm{pF}}=0.8\ \mathrm{mA/V}.
$$

饱和区中 $g_{m52}=2I_{D52}/V_{ov52}$，故

$$
I_{D52}=\frac{g_{m52}V_{ov52}}{2}=\frac{(0.8\ \mathrm{mA/V})(0.25\ \mathrm V)}{2}=100\ \mu\mathrm A,
\qquad I_{D51}=200\ \mu\mathrm A-100\ \mu\mathrm A=100\ \mu\mathrm A.
$$

### 第 4 步 — 结果及其代价

尾电流平分：$I_{D51}=I_{D52}=100\ \mu\mathrm A$。两半都保持 $V_{ov}=0.25$ V，总尾电流不变，因此偏置点和共模输入范围不受影响。由于现在只有一半尾电流管响应 $v_{cmc}$，而输出电阻不变，低频 CMC 增益减半（约为 $-99$）。

# 详细步骤 - G075

写出平方律源极耦合对的大信号传输特性，用归一化变量表示 85% 条件，再与平衡点处的小信号跨导联立；两个指标给出关于 $k'(W/L_{\text{eff}})$ 和 $I_{\text{TAIL}}$ 的两个方程。

### 第 1 步 — 大信号特性

令 $k=k'(W/L_{\text{eff}})$。两个器件都处于饱和区且阈值相同（无体效应、无沟道长度调制），故 $\sqrt{2I_{d1}/k}-\sqrt{2I_{d2}/k}=V_{GS1}-V_{GS2}=V_{id}$，且 $I_{d1}+I_{d2}=I_{\text{TAIL}}$。将第一个关系式平方并消去乘积 $I_{d1}I_{d2}$，得

$$
\Delta I_d=I_{d1}-I_{d2}=\frac k2V_{id}\sqrt{\frac{4I_{\text{TAIL}}}{k}-V_{id}^2},
\qquad |V_{id}|\le\sqrt{\frac{2I_{\text{TAIL}}}{k}} ,
$$

超出此范围时一个器件截止，$|\Delta I_d|=I_{\text{TAIL}}$，即最大值。

### 第 2 步 — 85% 条件的归一化形式

定义 $u=kV_{id}^2/(4I_{\text{TAIL}})$，则

$$
\frac{\Delta I_d}{I_{\text{TAIL}}}=2\sqrt{u(1-u)},
$$

它在 $u=1/2$ 处升到 1，即公式适用范围的边界。令其等于 0.85：

$$
4u(1-u)=0.7225\quad\Rightarrow\quad u=\frac{1-\sqrt{1-0.7225}}{2}=0.23661 ,
$$

取小于 $1/2$ 的根（另一个根在适用范围之外）。代入 $V_{id}=0.2$ V，

$$
\frac{k}{I_{\text{TAIL}}}=\frac{4u}{V_{id}^2}=\frac{4(0.23661)}{(0.2\ \mathrm V)^2}=23.66\ \mathrm{V^{-2}} .
$$

### 第 3 步 — 平衡点处的跨导

在 $V_{id}=0$ 处对第 1 步求导：

$$
\left.\frac{d\Delta I_d}{dV_{id}}\right|_{V_{id}=0}=\frac k2\sqrt{\frac{4I_{\text{TAIL}}}{k}}=\sqrt{kI_{\text{TAIL}}}=1\ \mathrm{mA/V}
\quad\Rightarrow\quad kI_{\text{TAIL}}=10^{-6}\ \mathrm{A^2/V^2} .
$$

它等于单管在 $I_{\text{TAIL}}/2$ 下的 $g_m$：每个栅极变化 $V_{id}/2$ 时，$\Delta I_d$ 的变化为 $g_m$ 乘以整个 $V_{id}$。

### 第 4 步 — 求解 $k$ 和 $I_{\text{TAIL}}$

将第 2、3 步的结果相乘、相除：

$$
k=\sqrt{(23.66\ \mathrm{V^{-2}})(10^{-6}\ \mathrm{A^2/V^2})}=4.864\ \mathrm{mA/V^2},\qquad
I_{\text{TAIL}}=\frac{4.864\ \mathrm{mA/V^2}}{23.66\ \mathrm{V^{-2}}}=205.6\ \mu\mathrm A .
$$

### 第 5 步 — 器件尺寸

$$
\frac W{L_{\text{eff}}}=\frac{k}{k'_n}=\frac{4.864\ \mathrm{mA/V^2}}{194\ \mu\mathrm{A/V^2}}=25.07,\qquad
L_{\text{eff}}=1\ \mu\mathrm m-2(0.09\ \mu\mathrm m)=0.82\ \mu\mathrm m ,
$$

$$
W=25.07\times0.82\ \mu\mathrm m=20.6\ \mu\mathrm m\quad(L_{\text{drwn}}=1\ \mu\mathrm m).
$$

### 第 6 步 — 验算

平衡时每个器件流过 102.8 µA，$V_{ov}=\sqrt{I_{\text{TAIL}}/k}=0.206$ V，故 $g_m=2(I_{\text{TAIL}}/2)/V_{ov}=1.0$ mA/V。差分对在 $\sqrt2V_{ov}=0.291$ V 处完全切换，大于 0.2 V；把 $V_{id}=0.2$ V 代入第 1 步得 $\Delta I_d=0.850\,I_{\text{TAIL}}$。设计结果为 $I_{\text{TAIL}}\approx206\ \mu$A，$W/L_{\text{eff}}\approx25$，即版图长度 1 µm 时 $W\approx20.5\ \mu$m。

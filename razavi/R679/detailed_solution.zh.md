# 详细步骤 - R679

**思路。** 该电路是一个带二极管连接 NMOS 负载的差分对（differential pair）。由差模半边电路得 $A_v = -g_{m1}/g_{m3}$，再对两个器件都代入速度饱和下的跨导（transconductance）$g_m = WC_{ox}v_{sat}$，最后只剩下宽度。

### 第 1 步 — 半边电路

把 $M_1$ 和 $M_2$ 的漏极分别记为 X 和 Y，它们的公共源极节点记为 P。$M_3$ 和 $M_4$ 的**栅极和漏极都接 $V_{DD}$**，源极分别接 X 和 Y，因此各自都是二极管连接负载。由对称性，每条支路流过 $I_{SS}/2$。对于差分输入（两个栅极上分别为 $\pm v_{in}/2$），P 是虚地（virtual ground），每一半都是一个共源级（common-source stage）：$M_1$ 驱动节点 X，其负载是 $M_3$ 的源极。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 半边电路的增益

$M_3$ 的栅极和漏极都处于交流地，因此 $v_{gs3} = 0 - v_X = -v_X$；由于 $\lambda = 0$ 时没有 $r_{O3}$，$\gamma = 0$ 时没有体效应受控源，$M_3$ 从 X 抽出 $g_{m3}v_X$：相当于负载

$$R_{load} = \frac{v_X}{g_{m3}v_X} = \frac{1}{g_{m3}} .$$

$M_1$ 从 X 向地抽取 $g_{m1}(v_{in}/2)$。

<!-- diagram: diagram-02.cir -->

在节点 X 应用基尔霍夫电流定律（KCL）：

$$
\begin{aligned}
g_{m3}(0 - v_X) &= g_{m1}\,\frac{v_{in}}{2}\\
v_X &= -\frac{g_{m1}}{g_{m3}}\cdot\frac{v_{in}}{2}.
\end{aligned}
$$

由对称性，$v_Y = +\dfrac{g_{m1}}{g_{m3}}\cdot\dfrac{v_{in}}{2}$，因此

$$v_{out} = v_X - v_Y = -\frac{g_{m1}}{g_{m3}}\cdot\frac{v_{in}}{2} - \frac{g_{m1}}{g_{m3}}\cdot\frac{v_{in}}{2} = -\frac{g_{m1}}{g_{m3}}\,v_{in},$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m3}} .$$

### 第 3 步 — 完全速度饱和下的跨导

整个沟道中的载流子速度都为 $v_{sat}$，因此电流等于沟道单位长度的电荷乘以 $v_{sat}$：

$$I_D = WC_{ox}\,(V_{GS} - V_{TH})\,v_{sat} \quad\Rightarrow\quad g_m = \frac{\partial I_D}{\partial V_{GS}} = WC_{ox}\,v_{sat},$$

它与 $L$ 和偏置电流无关。四个器件都是同一工艺的 NMOS，$C_{ox}$ 和 $v_{sat}$ 都相同：

$$g_{m1} = W_1C_{ox}v_{sat}, \qquad g_{m3} = W_3C_{ox}v_{sat}.$$

### 第 4 步 — 增益

$$A_v = -\frac{g_{m1}}{g_{m3}} = -\frac{W_1C_{ox}v_{sat}}{W_3C_{ox}v_{sat}} = -\frac{W_1}{W_3} .$$

$C_{ox}$、$v_{sat}$、沟道长度和 $I_{SS}$ 都被消去了。（若饱和速度不同，结果将为 $-W_1v_{sat,1}/(W_3v_{sat,3})$。）例如，$W_1 = 40\ \mu$m、$W_3 = 10\ \mu$m 给出 $A_v = -4$。

对于电流相等（$M_1$ 和 $M_3$ 中都是 $I_{SS}/2$）的长沟道器件，由 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ 得

$$A_v = -\sqrt{\frac{(W/L)_1}{(W/L)_3}},$$

因此要得到同样为 4 的增益，需要 16:1 的宽长比（aspect ratio）之比。在速度饱和下，$g_m$ 正比于 $W$ 而不是 $\sqrt{W}$，因此增益直接等于宽度之比；在两种情况下，增益都是同类量之比，因此能很好地抵抗工艺和温度的影响。

### 结果

$$A_v = \frac{V_{out}}{V_{in}} = -\frac{g_{m1}}{g_{m3}} = -\frac{W_1C_{ox}v_{sat}}{W_3C_{ox}v_{sat}} = -\frac{W_1}{W_3},$$

它与 $v_{sat}$、$C_{ox}$、$L$ 和 $I_{SS}$ 都无关。二极管连接的 NMOS 负载在每个输出端呈现 $1/g_{m3}$，而在完全速度饱和下，每个器件都有 $g_m = WC_{ox}v_{sat}$。

**常见错误。** 把 $M_3$ 和 $M_4$ 当作理想电流源（增益无穷大）或阻值未知的电阻。它们的栅极与漏极相连（都接 $V_{DD}$），因此每个器件在其源极呈现 $1/g_{m3}$。

**常见错误。** 给出平方律的答案 $-\sqrt{(W/L)_1/(W/L)_3}$，它依赖于 $g_m \propto \sqrt{(W/L)I_D}$；而在完全速度饱和下，$g_m = WC_{ox}v_{sat}$。

**常见错误。** 让增益依赖于 $I_{SS}$。在速度饱和下，$g_m$ 不依赖于电流；况且 $g_{m1}$ 和 $g_{m3}$ 本来就由同一支路电流决定。

# 详细步骤 - G160

第二级为单端输入、单端输出，它以相同的增益放大第一级的差模与共模输出，因此 CMRR 就是第一级的 CMRR。求第一级的差模增益和共模增益（后者来自尾电流源的有限输出电阻 $r_{o5}$），再取二者之比。忽略体效应。

### 第 1 步 — CMRR 由第一级决定

记第二级增益为 $A_{v2}$，

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=\left|\frac{A_{dm1}A_{v2}}{A_{cm1}A_{v2}}\right|=\left|\frac{A_{dm1}}{A_{cm1}}\right|,\qquad A_{dm1}=g_{m1}\left(r_{o2}\parallel r_{o4}\right),
$$

其中电流镜把两半电路的电流变化相加，第一级跨导为完整的 $g_{m1}$。

### 第 2 步 — 第一级的共模增益

在两个栅极上加 $v_{ic}$。公共源极节点跟随栅极，尾电流约变化 $v_{ic}/r_{o5}$（$g_{m1}r_{o5}\gg1$），每侧电流变化

$$
i\approx\frac{v_{ic}}{2r_{o5}} .
$$

该电流流入二极管连接的 $M_3$，其小信号电阻为 $1/g_{m3}\parallel r_{o3}\approx1/g_{m3}$，二极管节点变化 $v_{d3}\approx-i/g_{m3}$。完全匹配时，若输出节点与二极管节点电压相同，两半电路完全一致，所有电流都平衡：

$$
v_{o1}=v_{d3}\approx-\frac{i}{g_{m3}}\ \Rightarrow\ A_{cm1}=\frac{v_{o1}}{v_{ic}}\approx-\frac{1}{2g_{m3}r_{o5}} .
$$

电流镜抵消了两侧相等的电流变化；只有这一由二极管有限电阻 $1/g_{m3}$ 决定的小残余到达输出。

### 第 3 步 — 用小信号参数表示 CMRR

$$
\mathrm{CMRR}=\frac{g_{m1}\left(r_{o2}\parallel r_{o4}\right)}{1/\left(2g_{m3}r_{o5}\right)}=\left(2g_{m1}r_{o5}\right)g_{m3}\left(r_{o1}\parallel r_{o3}\right),
$$

这里利用了匹配器件的 $r_{o1}=r_{o2}$、$r_{o3}=r_{o4}$。

### 第 4 步 — 用过驱动电压和厄利电压表示

代入 $g_m=2|I_D|/|V_{ov}|$、$r_o=|V_A|/|I_D|$，并利用 $I_{D5}=2I_{D1}$、$|I_{D3}|=I_{D1}$：

$$
2g_{m1}r_{o5}=2\cdot\frac{2I_{D1}}{V_{ov1}}\cdot\frac{V_{A5}}{2I_{D1}}=\frac{2V_{A5}}{V_{ov1}},\qquad
g_{m3}\left(r_{o1}\parallel r_{o3}\right)=\frac{2}{|V_{ov3}|}\cdot\frac{V_{A1}|V_{A3}|}{V_{A1}+|V_{A3}|},
$$
$$
\mathrm{CMRR}\simeq\frac{2V_{A5}}{V_{ov1}}\cdot\frac{2}{|V_{ov3}|}\cdot\frac{V_{A1}|V_{A3}|}{V_{A1}+|V_{A3}|}.
$$

CMRR 是两个 $g_mr_o$ 型因子之积，因而很大。较小的过驱动电压和较长的沟道使其增大；输出电阻更高的尾电流源（例如共源共栅结构）可进一步提高它，代价是输入共模范围减小。若计入 $M_1$、$M_2$ 的体效应，$2g_{m1}r_{o5}$ 换成 $2(g_{m1}+g_{mb1})r_{o5}$，CMRR 略有增大。

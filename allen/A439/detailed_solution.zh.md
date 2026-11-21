# 详细步骤 - A439

在低频下，唯一的非理想因素是运放有限的直流增益。用诺顿等效（Norton equivalent）替代梯形网络，求出电流-电压转换由此产生的相对增益误差，并要求最坏情况码字处的绝对误差小于 0.5 LSB。

### 第 1 步 — 运放低频增益

当 $s\to0$ 时，

$$
A_0=A_{vd}(0)=\frac{10^6\ \mathrm{rad/s}}{100\ \mathrm{rad/s}}=10^4 .
$$

### 第 2 步 — 求和节点处梯形网络的诺顿等效

从反相输入端看，理想电流沉相当于开路，梯形网络等效为串联 $R$ 加上节点 1，而节点 1 的对地电阻为 $2R\parallel2R=R$（每个节点向远离运放一侧看去都是 $2R$）：

$$
R_S=R+R=2R .
$$

与码字有关的短路电流 $i_\Sigma=I\sum b_i2^{-i}$（从求和节点抽出）与 $R_S$ 并联。

<!-- diagram: diagram-01.cir -->

等效电路为：节点 $v_-$ 上接电流源 $i_\Sigma$，把电流从该节点抽到地；$R_S=2R$ 从 $v_-$ 接地；反馈电阻 $R$ 接在 $v_-$ 与 $v_{OUT}$ 之间；运放输出 $v_{OUT}=-A_0v_-$。

### 第 3 步 — 有限 $A_0$ 引起的增益误差

在 $v_-$ 处列 KCL，并利用 $v_-=-v_{OUT}/A_0$：

$$
\frac{v_{OUT}-v_-}{R}=i_\Sigma+\frac{v_-}{2R}
\;\Longrightarrow\;
v_{OUT}\left(1+\frac{1}{A_0}+\frac{1}{2A_0}\right)=Ri_\Sigma
\;\Longrightarrow\;
v_{OUT}=\frac{Ri_\Sigma}{1+\dfrac{1}{A_0\beta}},\qquad
\beta=\frac{R_S}{R_S+R}=\frac{2}{3}.
$$

由 $A_0\beta=6667$，输出比理想值偏低的比例为

$$
\varepsilon=\frac{1}{1+A_0\beta}=\frac{1}{6668}=1.50\times10^{-4}
$$

### 第 4 步 — 最坏情况码字与最大 $N$

误差 $\varepsilon\,v_{OUT,ideal}$ 在全 1 码字处最大，此时 $v_{OUT,ideal}=RI(1-2^{-N})$。由 $1\,\mathrm{LSB}=RI/2^N$，以 LSB 计的误差为 $\varepsilon(2^N-1)$，要求

$$
\varepsilon\left(2^N-1\right)\le0.5
\quad\Longrightarrow\quad
2^N\le1+\frac{0.5}{1.50\times10^{-4}}=3335 .
$$

| $N$ | 满量程处误差 |
|---|---|
| 11 | $2047\times1.50\times10^{-4}=0.31$ LSB |
| 12 | $4095\times1.50\times10^{-4}=0.61$ LSB |

因此该转换器最多只能分辨 $N=11$ 位；若忽略梯形网络（$\beta=1$），环路增益会被高估 50%。

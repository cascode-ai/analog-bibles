# 详细步骤 - G316

零点被消除、第三个极点很远时，单位增益反馈下的环路增益是双极点函数。其主极点来自 $C$ 的密勒倍增，第二极点 $p_2$ 由 $g_{m6}$ 和节点电容决定。60° 相位裕度要求第二极点在穿越频率处只贡献 30° 相移。把 $\omega_u$ 和 $|p_2|$ 都用 $C$ 表示后求解。

### 第 1 步 — 极点与单位增益频率

对 $R_Z=1/g_{m6}$ 的两级模型，
$$
p_1\approx-\frac{1}{g_{m6}R_1R_2C},\qquad
p_2\approx-\frac{g_{m6}C}{C_1C_2+C(C_1+C_2)}\approx-\frac{g_{m6}}{C_1+C_2},
$$
最后一式在 $C\gg C_1$ 时成立（此时 $C_1C_2$ 远小于 $C(C_1+C_2)$）。在 $|p_1|$ 以上，环路增益 $a(s)$ 从 $a_0=g_{m1}R_1g_{m6}R_2$ 起以 $-20$ dB/dec 下降，忽略 $p_2$ 时其幅值在下式处降到 1：
$$
\omega_u\approx a_0|p_1|=\frac{g_{m1}}{C}.
$$

### 第 2 步 — 60° 相位裕度的条件

在 $|p_1|$ 以上，环路增益的相位为 $-90^\circ-\tan^{-1}(\omega/|p_2|)$。穿越频率处 60° 相位裕度意味着
$$
\tan^{-1}\frac{\omega_u}{|p_2|}=30^\circ\quad\Rightarrow\quad |p_2|=\sqrt3\,\omega_u .
$$

### 第 3 步 — 求解 $C$

代入两个表达式：
$$
\frac{g_{m6}}{C_1+C_2}=\sqrt3\,\frac{g_{m1}}{C}
\quad\Rightarrow\quad
C=\sqrt3\,\frac{g_{m1}}{g_{m6}}\,(C_1+C_2)=1.732\times\frac{1\ \mathrm{mA/V}}{1.55\ \mathrm{mA/V}}\times5.12\ \mathrm{pF}=5.7\ \mathrm{pF}.
$$
同一准则的几种变形结果相差很小：

| $p_2$ 的形式 | $C$ |
|---|---|
| $g_{m6}/(C_1+C_2)$ | 5.72 pF |
| $g_{m6}/C_2$（忽略 $C_1$） | 5.59 pF |
| 完整表达式 | 5.84 pF |

采用完整表达式时，$|p_2|=\sqrt3\,g_{m1}/C$ 化为二次方程 $C^2-5.72C-0.67=0$（单位 pF），其正根为 5.84 pF。

### 第 4 步 — 精确的双极点穿越频率

由于第二极点也会降低幅值，实际穿越频率低于 $\omega_u$。60° 裕度要求穿越频率位于 $\omega_c=|p_2|/\sqrt3$，此处环路增益幅值为
$$
|T(j\omega_c)|=\frac{g_{m1}}{C\,\omega_c}\cdot\frac{1}{\sqrt{1+1/3}}=1
\quad\Rightarrow\quad
\frac{g_{m1}}{C}=\frac{2}{\sqrt3}\,\omega_c=\frac23\,|p_2| .
$$
于是 $C=1.5\,(g_{m1}/g_{m6})(C_1+C_2)=4.95$ pF。因此按常用的 $\omega_u\approx g_{m1}/C$ 准则 $C\approx5.7$ pF，按精确穿越条件约为 5.0 pF。作为比较，45° 裕度（$|p_2|=\omega_u$）只需 3.3 pF：多出的 15° 裕度要多付出约 70% 的电容。

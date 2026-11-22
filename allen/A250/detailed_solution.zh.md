# 详细步骤 - A250

把相位裕度写成 $180°$ 减去各奇点在 $\omega=GB$ 处的相位滞后。右半平面零点与左半平面极点一样产生滞后，所以要减去。令裕度为 45°，求第二极点。

### 第 1 步 — 环路增益在 GB 处的相位

$F=1$ 时环路增益为

$$
L(s)=\frac{A_v(0)\,(1-s/z)}{(1-s/p_1)(1-s/p_2)},\qquad z>0 .
$$

在 $s=j\omega$ 处，因子 $1-j\omega/z$ 的相位为 $-\arctan(\omega/z)$：是滞后。每个极点贡献 $-\arctan(\omega/|p_i|)$。在单位增益频率 GB 处，

$$
\Phi_M=180°-\arctan\frac{GB}{|p_1|}-\arctan\frac{GB}{|p_2|}-\arctan\frac{GB}{z}.
$$

### 第 2 步 — 主极点与零点的贡献

对主极点型放大器 $GB=A_v(0)|p_1|$，故 $GB/|p_1|=A_v(0)$ 很大，

$$
\arctan\frac{GB}{|p_1|}\approx90° .
$$

当 $z=10\,GB$ 时：

$$
\arctan\frac{GB}{z}=\arctan0.1=5.71° .
$$

### 第 3 步 — 所需的第二极点

令 $\Phi_M=45°$：

$$
45°=90°-\arctan\frac{GB}{|p_2|}-5.71°\quad\Rightarrow\quad\arctan\frac{GB}{|p_2|}=39.29°,
$$

$$
\frac{GB}{|p_2|}=\tan39.29°=0.818\quad\Rightarrow\quad|p_2|=1.22\,GB .
$$

（精确地，$\tan(45°-\arctan0.1)=(1-0.1)/(1+0.1)=9/11$，故 $|p_2|=11GB/9$。）

### 第 4 步 — “至少”

$|p_2|$ 增大时 $\arctan(GB/|p_2|)$ 减小，$\Phi_M$ 单调增大。因此 45° 的裕度要求

$$
|p_2|\ge1.22\,GB .
$$

若没有零点，$|p_2|=GB$ 即可；右半平面零点的 5.7° 滞后使第二极点必须再高约 22%。

# 详细步骤 - A251

把相位裕度写成 $180°$ 减去三个极点在 $\omega=GB$ 处的滞后，令其为 60°，在第三极点位于 $10\,GB$ 的条件下求第二极点。

### 第 1 步 — 环路增益在 GB 处的相位

$F=1$、三个左半平面极点时，

$$
L(s)=\frac{A_v(0)}{(1-s/p_1)(1-s/p_2)(1-s/p_3)},
$$

每个极点贡献滞后 $\arctan(\omega/|p_i|)$。在 $\omega=GB$ 处，

$$
\Phi_M=180°-\arctan\frac{GB}{|p_1|}-\arctan\frac{GB}{|p_2|}-\arctan\frac{GB}{|p_3|}.
$$

### 第 2 步 — 主极点与第三极点

对主极点型放大器，$GB/|p_1|=A_v(0)$ 很大，故 $\arctan(GB/|p_1|)\approx90°$。当 $|p_3|=10\,GB$ 时：

$$
\arctan\frac{GB}{|p_3|}=\arctan0.1=5.71° .
$$

### 第 3 步 — 所需的第二极点

令 $\Phi_M=60°$：

$$
60°=90°-\arctan\frac{GB}{|p_2|}-5.71°\quad\Rightarrow\quad\arctan\frac{GB}{|p_2|}=24.29°,
$$

$$
\frac{GB}{|p_2|}=\tan24.29°=0.451\quad\Rightarrow\quad|p_2|=2.22\,GB .
$$

### 第 4 步 — “至少”

提高 $|p_2|$ 会减小其滞后 $\arctan(GB/|p_2|)$，所以 $\Phi_M$ 随 $|p_2|$ 单调增大。因此 60° 的裕度要求

$$
|p_2|\ge2.2\,GB .
$$

若没有第三极点，$|p_2|=\sqrt3\,GB=1.73\,GB$ 即可；$p_3$ 的 5.7° 滞后把要求提高到 $2.2\,GB$。

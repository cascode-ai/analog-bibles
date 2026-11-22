# 详细步骤 - A422

把量化误差建模为在一个量化台阶内均匀分布的随机变量，由概率密度求其均方值。对斜坡输入做时域计算得到同样的结果，并使这一假设更加具体。

### 第 1 步 — 量化误差及其范围

舍入量化器把输入 $x$ 映射到最近的电平 $Q(x)$，各电平间隔为 $\Delta$。误差

$$
e=x-Q(x)
$$

因此始终位于 $[-\Delta/2,\,+\Delta/2]$ 内。

### 第 2 步 — 统计模型

若输入足够“繁忙”，即跨越许多电平且与台阶图样不相关，则 $e$ 在该区间内的每个值出现的可能性相同。于是误差服从均匀分布，概率密度为

$$
p(e)=\frac1\Delta\quad\text{for }|e|\le\frac\Delta2,\qquad p(e)=0\ \text{otherwise},
$$

其积分为 1，且由对称性均值为零。

### 第 3 步 — 均方值

$$
e_{rms}^2=\int_{-\Delta/2}^{\Delta/2}e^2\,p(e)\,de
=\frac1\Delta\left[\frac{e^3}3\right]_{-\Delta/2}^{\Delta/2}
=\frac1\Delta\cdot\frac23\Bigl(\frac\Delta2\Bigr)^3
=\frac{\Delta^2}{12},
$$

$$
e_{rms}=\frac\Delta{\sqrt{12}}\approx0.289\,\Delta .
$$

由于均值为零，该有效值也就是标准差，即噪声功率。

### 第 4 步 — 用斜坡输入做时域验证

对每经过周期 $T$ 越过一个电平的缓慢上升斜坡输入，误差是以 $T$ 为周期重复的锯齿波：

$$
e(t)=\Delta\Bigl(\frac tT-\frac12\Bigr),\qquad 0\le t<T .
$$

其平方的时间平均为

$$
\frac1T\int_0^T\Delta^2\Bigl(\frac tT-\frac12\Bigr)^2dt
=\Delta^2\int_{-1/2}^{1/2}u^2\,du=\frac{\Delta^2}{12},
$$

结果相同，因为锯齿波在 $[-\Delta/2,\Delta/2]$ 内的每个误差值上停留的时间相等。

对截断量化器，误差改为在 $[0,\Delta]$ 上均匀分布；它有 $\Delta/2$ 的直流偏移，其交流部分的有效值仍为 $\Delta/\sqrt{12}$。

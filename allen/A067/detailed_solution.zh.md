# 详细步骤 - A067

小信号跨导是大信号漏极电流在工作点处对 $v_{GS}$ 的导数。对指数函数求导，再用直流电流本身表示结果。

### 第 1 步 — 对弱反型电流求导

$i_D=(W/L)I_{D0}\exp[v_{GS}/(nkT/q)]$，指数函数的导数等于该指数函数乘以其指数的导数：

$$
g_m=\left.\frac{\partial i_D}{\partial v_{GS}}\right|_{V_{GS}}
=\frac WL\,\frac{I_{D0}}{n(kT/q)}\exp\!\left(\frac{V_{GS}}{n(kT/q)}\right).
$$

### 第 2 步 — 用漏极电流表示 $g_m$

因子 $(W/L)I_{D0}\exp[V_{GS}/(nkT/q)]$ 就是直流漏极电流 $I_D$，因此

$$
g_m=\frac{I_D}{n(kT/q)} .
$$

### 第 3 步 — 解释

弱反型区中 $g_m$ 与 $I_D$ 本身成正比，而不像强反型那样与 $\sqrt{I_D}$ 成正比。在给定电流下，它与 $W/L$ 和 $K'$ 无关；几何尺寸只决定产生该电流所需的栅压。比值

$$
\frac{g_m}{I_D}=\frac{1}{n\,kT/q}
$$

是 MOS 晶体管所能达到的最大值；$n=1.5$、300 K 时为 $1/(38.8\ \mathrm{mV})=25.8\ \mathrm{V^{-1}}$。例如 $I_D=1\ \mu$A 时，$g_m=1\ \mu\mathrm A/38.8\ \mathrm{mV}=25.8\ \mu$S。

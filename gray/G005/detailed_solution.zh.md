# 详细步骤 - G005

对于单边突变结，耗尽区几乎全部位于轻掺杂一侧，因此平面结电场中只出现该侧的掺杂浓度 $N$。结弯曲使峰值电场乘以 1.5，所以当平面结电场达到 $\mathcal E_{crit}/1.5$ 时即发生击穿；据此求出在 150 V 处击穿所需的掺杂浓度。

### 第 1 步 — 单边结的平面结峰值电场

重掺杂一侧的耗尽宽度可忽略，对宽度为 $W$、电荷密度为 $qN$ 的均匀电荷区应用泊松方程（Poisson's equation），得 $|\mathcal E_{max}|=qNW/\epsilon$ 和 $V_R=\tfrac12|\mathcal E_{max}|W$（取 $V_R\gg\psi_0$）。消去 $W$：

$$
|\mathcal E_{max}|=\sqrt{\frac{2qNV_R}{\epsilon}} .
$$

### 第 2 步 — 计入结弯曲的击穿条件

实际结的峰值电场为 $1.5|\mathcal E_{max}|$，当它等于 $\mathcal E_{crit}$ 时击穿：

$$
1.5\sqrt{\frac{2qN\,BV}{\epsilon}}=\mathcal E_{crit}
\quad\Rightarrow\quad
N=\frac{\epsilon\left(\mathcal E_{crit}/1.5\right)^2}{2q\,BV}.
$$

被放大的是电场而不是电压，因此在掺杂固定时，击穿电压按 $1.5^2=2.25$ 的倍数降低。

### 第 3 步 — 所需掺杂浓度

取 $\mathcal E_{crit}/1.5=2\times10^5$ V/cm、$BV=150$ V：

$$
N=\frac{(1.04\times10^{-12}\ \mathrm{F/cm})(2\times10^5\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)(150\ \mathrm V)}=\frac{4.16\times10^{-2}\ \mathrm{C/cm^3}}{4.8\times10^{-17}\ \mathrm C}=8.67\times10^{14}\ \mathrm{cm^{-3}}.
$$

这是轻掺杂一侧的掺杂浓度；更低的掺杂会给出更高的击穿电压。作为对比，同样掺杂的平面结将在 $2.25\times150\ \mathrm V=337$ V 处击穿。

结果：轻掺杂一侧 $N\approx8.7\times10^{14}$ atoms/cm³（或更低）。

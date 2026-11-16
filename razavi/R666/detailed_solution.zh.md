# 详细步骤 - R666

**思路。** 在动态范围不变的条件下，允许的摆幅减半就要求均方根（rms）噪声电压减半。对于 $kT/C$ 噪声，均方根噪声**电压**按 $1/\sqrt C$ 变化，因此要使其减半，需要四倍的电容。

### 第 1 步 — 动态范围及需要改变的量

把动态范围定义为最大均方根信号与均方根噪声之比，

$$DR = \frac{V_{sig,max}}{v_{n,rms}} ,$$

摆幅减半，即 $V_{sig,max} \to V_{sig,max}/2$，要求

$$v_{n,rms} \to \frac{v_{n,rms}}{2}, \qquad\text{i.e.}\qquad \overline{v_n^2} \to \frac{\overline{v_n^2}}{4}.$$

### 第 2 步 — 采样电容上的 $kT/C$ 噪声

开关的热噪声（thermal noise）$4kTR$ 经 RC 网络滤波并被冻结在电容上，得到

$$\overline{v_n^2} = \frac{kT}{C}, \qquad v_{n,rms} = \sqrt{\frac{kT}{C}} ,$$

它与开关电阻无关（$R$ 越大，噪声密度越大，但带宽按比例变窄）。均方根噪声**电压**与电容的**平方根**成反比。

### 第 3 步 — 所需的电容缩放

设新电容为 $C' = mC$：

$$
\begin{aligned}
\sqrt{\frac{kT}{C'}} &= \frac12\sqrt{\frac{kT}{C}}\\
\frac{kT}{C'} &= \frac14\cdot\frac{kT}{C}\\
C' &= 4C ,
\end{aligned}
$$

因此 $m = 4$。

**数值验证**：取 $T = 300$ K，$kT = (1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K}) = 4.14\times10^{-21}$ J：

$$
\begin{aligned}
C = 1\ \mathrm{pF}: &\quad v_{n,rms} = \sqrt{\frac{4.14\times10^{-21}\ \mathrm{J}}{1\times10^{-12}\ \mathrm{F}}} = \sqrt{4.14\times10^{-9}}\ \mathrm{V} = 64.3\ \mu\mathrm{V},\\
C = 4\ \mathrm{pF}: &\quad v_{n,rms} = \sqrt{\frac{4.14\times10^{-21}\ \mathrm{J}}{4\times10^{-12}\ \mathrm{F}}} = \sqrt{1.035\times10^{-9}}\ \mathrm{V} = 32.2\ \mu\mathrm{V},
\end{aligned}
$$

恰好减半，符合要求。

### 第 4 步 — 哪些电容要缩放，哪些量保持不变

**所有电容**（采样、反馈、负载）都带有 $kT/C$ 噪声，因此都要乘以 4。这样每个**电容比值**都保持不变，于是闭环增益（例如 $C_S/C_F$）和反馈系数（feedback factor）也保持不变。

等价地，

$$DR^2 = \frac{V_{sig,max}^2}{kT/C} = \frac{C\,V_{sig,max}^2}{kT},$$

因此 DR 不变意味着储存的信号能量 $CV_{sig,max}^2$ 不变：$4C\,(V/2)^2 = CV^2$。代价是电容面积变为四倍，而且在速度不变的情况下，运算放大器（op amp）需要充电的电容也变为四倍。

### 结果

所有电容都必须**增大到原来的 4 倍**。由于 $v_{n,rms} = \sqrt{kT/C}$，要使噪声电压减半，就必须使 $\overline{v_n^2} = kT/C$ 减小 4 倍，即 $C \to 4C$。电容比值以及放大器的增益都保持不变。

**常见错误。** 把电容加倍。噪声**功率** $\overline{v_n^2}$ 按 $1/C$ 变化，因此均方根电压按 $1/\sqrt C$ 变化：把 $C$ 加倍只能使噪声减小 $\sqrt2$ 倍，动态范围会下降 $\sqrt2$ 倍（3 dB）。

**常见错误。** 以“电压更低就需要更小的电容”为由减小电容。$C$ 越小，$kT/C$ 噪声反而**越大**。

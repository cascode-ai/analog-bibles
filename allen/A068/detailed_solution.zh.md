# 详细步骤 - A068

把两种模型的跨导都写成漏极电流的函数，令二者相等并解出电流，再检查该电流对应的过驱动电压。

### 第 1 步 — 各区的跨导

弱反型（指数模型）：对 $i_D=(W/L)I_{D0}\exp[v_{GS}/(nkT/q)]$ 求导得

$$
g_{m,\text{weak}}=\frac{I_D}{n(kT/q)} .
$$

强反型（饱和区平方律）：由 $i_D=\tfrac{K'W}{2L}(v_{GS}-V_T)^2$ 得 $g_m=K'(W/L)(V_{GS}-V_T)$；消去 $V_{GS}-V_T=\sqrt{2I_D/(K'W/L)}$，得

$$
g_{m,\text{strong}}=\sqrt{2K'\frac WL I_D} .
$$

### 第 2 步 — 令二者相等并解出电流

$$
\frac{I_D}{n(kT/q)}=\sqrt{2K'\frac WL I_D}
\quad\Rightarrow\quad
\frac{I_D^2}{(nkT/q)^2}=2K'\frac WL I_D
\quad\Rightarrow\quad
I_D=2K'\frac WL\left(n\frac{kT}{q}\right)^2 .
$$

该电流与 $W/L$ 和 $K'$ 成正比，并与 $nkT/q$ 的平方成正比。

### 第 3 步 — 解释与算例

在此电流下，平方律所需的过驱动电压（overdrive voltage）为

$$
V_{GS}-V_T=\sqrt{\frac{2I_D}{K'W/L}}=2n\frac{kT}{q},
$$

$n=1.5$、300 K 时约为 78 mV。由于 $g_{m,\text{weak}}\propto I_D$、$g_{m,\text{strong}}\propto\sqrt{I_D}$，低于转变电流时，平方律给出的跨导将大于弱反型值，而后者是物理上限，因此此时应采用指数模型；高于转变电流时，平方律的值较小，应采用平方律。

例如，取 $K'=110\ \mu\mathrm{A/V^2}$、$W/L=1$、$n=1.5$、$T=300$ K（$nkT/q=38.8$ mV）：

$$
I_D=2(110\ \mu\mathrm{A/V^2})(1)(38.8\ \mathrm{mV})^2=0.33\ \mu\mathrm A .
$$

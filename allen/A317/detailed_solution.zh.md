# 详细步骤 - A317

射极跟随器的输出电阻等于 $1/g_m$ 加上从基极看出去的电阻除以 $1+\beta_F$。有 MOS 跟随器时，基极看到约 $1/g_{m9}$；基极直接接第二级输出时，看到该节点的电阻 $r_{ds6}\parallel r_{ds7}$，大得多。分别计算两项并比较。

### 第 1 步 — 输出电阻表达式

基极由源电阻 $R_B$ 驱动时，从 Q10 的发射极看进去：

$$
R_{out}=\frac{r_{\pi10}+R_B}{1+\beta_F}\approx\frac1{g_{m10}}+\frac{R_B}{1+\beta_F},
$$

其中利用了 $r_{\pi10}/(1+\beta_F)\approx1/g_{m10}$。去掉 M8 和 M9 后，$R_B$ 就是第二级的输出电阻：

$$
R_{out}\approx\frac1{g_{m10}}+\frac{r_{ds6}\parallel r_{ds7}}{1+\beta_F} .
$$

与题给表达式相比，$1/g_{m9}$ 被 $r_{ds6}\parallel r_{ds7}$ 代替。

### 第 2 步 — 数值

M6 为 n 沟道（$\lambda_N$），M7 为 p 沟道（$\lambda_P$）：

$$
\frac1{g_{m10}}=\frac{kT/q}{I_C}=\frac{25.9\ \mathrm{mV}}{0.5\ \mathrm{mA}}=51.8\ \Omega,
$$
$$
r_{ds6}=\frac1{(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=250\ \mathrm{k\Omega},\qquad
r_{ds7}=\frac1{(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=200\ \mathrm{k\Omega},
$$
$$
\frac{r_{ds6}\parallel r_{ds7}}{1+\beta_F}=\frac{111.1\ \mathrm{k\Omega}}{101}=1100\ \Omega,\qquad
R_{out}\approx51.8+1100\approx1.15\ \mathrm{k\Omega}.
$$

### 第 3 步 — 比较

有跟随器时，第二项为 $1/[g_{m9}(1+\beta_F)]$，只有几欧（$g_{m9}\approx1.5$ mS 时约 7 Ω），因此 $R_{out}\approx1/g_{m10}$，为几十欧。没有跟随器时，基极侧项占主导，$R_{out}$ 约增大 20 倍。直接驱动 Q10 还会用 $r_\pi+(1+\beta_F)R_L$ 加载第二级的高阻输出节点，降低运放增益；这正是插入 MOS 跟随器的原因。

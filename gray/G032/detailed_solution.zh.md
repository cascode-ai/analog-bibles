# 详细步骤 - G032

结位于扩散施主浓度降到背景受主浓度之处。结以上的 $n$ 层掺杂不均匀，因此其方块电阻需对电导率沿深度积分求得，这相当于计算单位面积的净施主数。

### 第 1 步 — 结深

施主分布为 $N_D(x)=N_0e^{-x/\ell}$，其中 $N_0=10^{17}\ \mathrm{cm^{-3}}$，$\ell=0.5\ \mu$m。冶金结位于净掺杂变号之处，即 $N_D(x_j)=N_A=10^{15}\ \mathrm{cm^{-3}}$：

$$
x_j=\ell\ln\frac{N_0}{N_A}=(0.5\ \mu\mathrm m)\ln100=2.30\ \mu\mathrm m .
$$

### 第 2 步 — 非均匀层的方块电阻

深度 $x$ 处厚 $dx$ 的薄片的方块电导为 $q\mu_nn(x)\,dx$，各薄片并联导电。忽略耗尽层宽度，在 $n$ 区内 $n(x)=N_D(x)-N_A$，故

$$
\frac1{R_\square}=q\mu_n\int_0^{x_j}\left[N_D(x)-N_A\right]dx .
$$

该积分即净施主剂量：

$$
\int_0^{x_j}\left[N_D-N_A\right]dx=N_0\ell\left(1-\frac{N_A}{N_0}\right)-N_Ax_j
=(10^{17})(0.5\times10^{-4})(0.99)-(10^{15})(2.30\times10^{-4})=4.72\times10^{12}\ \mathrm{cm^{-2}}.
$$

### 第 3 步 — 数值结果

$$
R_\square=\frac1{(1.6\times10^{-19}\ \mathrm C)(800\ \mathrm{cm^2/V\,s})(4.72\times10^{12}\ \mathrm{cm^{-2}})}=1.66\ \mathrm{k\Omega}/\square .
$$

若忽略背景受主（剂量为 $N_0\ell(0.99)=4.95\times10^{12}\ \mathrm{cm^{-2}}$），得 1.58 kΩ/□；若把施主分布积分到无穷远，得 1.56 kΩ/□。背景掺杂的补偿只使结果改变约 5%。

结果：$x_j=2.3\ \mu$m，$R_\square\approx1.66$ kΩ/□。

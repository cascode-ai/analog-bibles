# 详细步骤 - G030

非本征样品的电阻率由多数载流子决定，$\rho=1/(q\mu N)$；但迁移率本身因电离杂质散射（ionized-impurity scattering）而随掺杂增大而下降。因此用迭代法求 $N$：先估计一个掺杂浓度，读出该掺杂下的迁移率，重新计算 $N$，反复进行直到两者一致。

### 第 1 步 — 掺杂样品的电阻率

室温下杂质全部电离，少数载流子密度可以忽略，因此对 $p$ 型硅 $p\approx N_A$，

$$
\rho=\frac1{q\mu_pN_A}\quad\Rightarrow\quad N_A=\frac1{q\mu_p\rho},
$$

对 $n$ 型硅同样有 $N_D=1/(q\mu_n\rho)$。

### 第 2 步 — $p$ 型硅

先取低掺杂时的空穴迁移率 $\mu_p\approx480\ \mathrm{cm^2/V\,s}$：$N_A=1/[(1.6\times10^{-19}\ \mathrm C)(480\ \mathrm{cm^2/V\,s})(1\ \Omega\,\mathrm{cm})]=1.3\times10^{16}\ \mathrm{cm^{-3}}$。由标准的迁移率-掺杂数据，该掺杂下的空穴迁移率约为 410 cm²/V·s，故

$$
N_A=\frac1{(1.6\times10^{-19}\ \mathrm C)(410\ \mathrm{cm^2/V\,s})(1\ \Omega\,\mathrm{cm})}=1.5\times10^{16}\ \mathrm{cm^{-3}},
$$

在此掺杂下迁移率仍约为 400–420 cm²/V·s，迭代已经收敛。

### 第 3 步 — $n$ 型硅

取低掺杂时的电子迁移率 $\mu_n\approx1350\ \mathrm{cm^2/V\,s}$，第一次估计为 $N_D=4.6\times10^{15}\ \mathrm{cm^{-3}}$。该掺杂下 $\mu_n\approx1250$–1300 cm²/V·s，得

$$
N_D=\frac1{(1.6\times10^{-19}\ \mathrm C)(1280\ \mathrm{cm^2/V\,s})(1\ \Omega\,\mathrm{cm})}=4.9\times10^{15}\ \mathrm{cm^{-3}}\approx5\times10^{15}\ \mathrm{cm^{-3}}.
$$

这与硅的 Irvin 电阻率-掺杂曲线一致，后者在 1 Ω·cm 处给出约 $1.5\times10^{16}$ 和 $(4.6$–$5)\times10^{15}\ \mathrm{cm^{-3}}$。用经验迁移率拟合式（Caughey–Thomas 形式）得到 $1.7\times10^{16}$ 和 $5.3\times10^{15}\ \mathrm{cm^{-3}}$，在数据的分散范围之内。

### 第 4 步 — 比较

$p$ 型：$N_A\approx1.5\times10^{16}\ \mathrm{cm^{-3}}$；$n$ 型：$N_D\approx5\times10^{15}\ \mathrm{cm^{-3}}$。由于电子迁移率约为空穴的三倍，$n$ 型样品只需约三分之一的掺杂浓度。

# 详细步骤 - G039

衬底 $pnp$ 管是纵向结构：从 $p$ 型发射区底部注入的空穴穿过均匀掺杂的 $n$ 型外延层（基区）到达 $p$ 型衬底（集电区）。对于均匀基区，$I_S$ 和 $\tau_F$ 由基区宽度求得；零偏电容由结面积乘以单边阶跃结的单位面积电容求得。

### 第 1 步 — 基区宽度与 Gummel 数

忽略耗尽层宽度，基区从 3 µm 深的发射结延伸到 17 µm 处的外延层-衬底结：

$$
W_B=17\ \mu\mathrm m-3\ \mu\mathrm m=14\ \mu\mathrm m,\qquad
Q_B=N_DW_B=(10^{15}\ \mathrm{cm^{-3}})(14\times10^{-4}\ \mathrm{cm})=1.4\times10^{12}\ \mathrm{cm^{-2}}.
$$

### 第 2 步 — 饱和电流

对于纵向流动的均匀基区，$I_S=qAD_pn_i^2/Q_B$。取 $A=5100\ \mu\mathrm m^2=5.1\times10^{-5}\ \mathrm{cm^2}$：

$$
I_S=\frac{(1.6\times10^{-19}\ \mathrm C)(5.1\times10^{-5}\ \mathrm{cm^2})(10\ \mathrm{cm^2/s})(2.25\times10^{20}\ \mathrm{cm^{-6}})}{1.4\times10^{12}\ \mathrm{cm^{-2}}}=1.3\times10^{-14}\ \mathrm A .
$$

### 第 3 步 — 正向渡越时间

对均匀基区中线性分布的少数载流子，

$$
\tau_F=\frac{W_B^2}{2D_p}=\frac{(14\times10^{-4}\ \mathrm{cm})^2}{2(10\ \mathrm{cm^2/s})}=9.8\times10^{-8}\ \mathrm s\approx100\ \mathrm{ns}.
$$

极宽的基区使衬底 $pnp$ 管速度很慢。

### 第 4 步 — 发射结电容 $C_{je0}$

$p$ 型发射区在底面和外侧壁与 $10^{15}$ 的外延层相接，外延层为轻掺杂侧：

$$
\frac{C_{j0}}A=\sqrt{\frac{q\epsilon N_D}{2\psi_0}}=\sqrt{\frac{(1.6\times10^{-19}\ \mathrm C)(1.04\times10^{-12}\ \mathrm{F/cm})(10^{15}\ \mathrm{cm^{-3}})}{2(0.55\ \mathrm V)}}=1.23\times10^{-4}\ \mathrm{pF/\mu m^2}.
$$

- 底面：$(5100\ \mu\mathrm m^2)(1.23\times10^{-4}\ \mathrm{pF/\mu m^2})=0.63$ pF。
- 外侧壁：按竖直壁为 $2(90+75)(3)=990\ \mu$m²，按四分之一圆柱面为 1555 µm²：0.12–0.19 pF。

故 $C_{je0}\approx0.75$–0.82 pF。发射区内边缘与 $n^+$ 基极接触扩散相接；这个 $p$–$n^+$ 结的轻掺杂侧是基区扩散（$\approx10^{17}\ \mathrm{cm^{-3}}$），单位面积电容为 $1.23\times10^{-3}\ \mathrm{pF/\mu m^2}$，面积约 $170\ \mu\mathrm m\times2.5\ \mu\mathrm m=425\ \mu$m²（计入 $\pi/2$ 因子为 670 µm²），增加 0.52–0.82 pF，总计约 1.3–1.6 pF。

### 第 5 步 — 集电结电容 $C_{\mu0}$

集电结是整个外延岛与衬底之间的结。底面两侧都是轻掺杂，$N_{eff}=N_DN_A/(N_D+N_A)=9.1\times10^{14}\ \mathrm{cm^{-3}}$，在 $\psi_0=0.52$ V 下为 $1.21\times10^{-4}\ \mathrm{pF/\mu m^2}$：

$$
C_{bottom}=(143\times128\ \mu\mathrm m^2)(1.21\times10^{-4}\ \mathrm{pF/\mu m^2})=(18{,}300)(1.21\times10^{-4})\ \mathrm{pF}=2.2\ \mathrm{pF}.
$$

隔离侧壁面积为 $17\times2(143+128)=9214\ \mu$m²（计入 $\pi/2$ 因子为 14,500 µm²），以外延层为轻掺杂侧，$1.26\times10^{-4}\ \mathrm{pF/\mu m^2}$，增加 1.2–1.8 pF。因此仅底面时 $C_{\mu0}\approx2.2$ pF，总计 3.4–4.1 pF。

### 第 6 步 — 小结

| 物理量 | 数值 |
|---|---|
| $I_S$ | $1.3\times10^{-14}$ A |
| $\tau_F$ | ≈ 100 ns |
| $C_{je0}$ | 0.63 pF（底面）；计入外侧壁为 0.75–0.82 pF；计入 $n^+$ 边缘为 1.3–1.6 pF |
| $C_{\mu0}$ | 2.2 pF（底面）；计入隔离侧壁为 3.4–4.1 pF |

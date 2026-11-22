# 详细步骤 - A049

用栅氧电容和沟道下方体区的掺杂浓度表示体效应参数，指出 n 阱工艺中每种晶体管的体区是哪一区域，再估算每个 $\gamma$ 值对应的掺杂浓度。

### 第 1 步 — $\gamma$ 取决于什么

体效应来源于沟道下方的耗尽电荷。对均匀掺杂的体区，阈值电压为 $V_T=V_{T0}+\gamma\big(\sqrt{|2\phi_F|+|v_{SB}|}-\sqrt{|2\phi_F|}\big)$，其中

$$
\gamma=\frac{\sqrt{2q\varepsilon_{Si}N_{SUB}}}{C_{ox}},\qquad C_{ox}=\frac{\varepsilon_{ox}}{t_{ox}},
$$

$N_{SUB}$ 为沟道下方体区（衬底或阱）的掺杂浓度。两种晶体管的 $t_{ox}=140$ Å 相同，因此 $C_{ox}$ 相同；迁移率、载流子类型和功函数都不出现在 $\gamma$ 中。唯一可能不同的量是 $N_{SUB}$，且 $\gamma\propto\sqrt{N_{SUB}}$。

### 第 2 步 — 每种晶体管所在的体区

在 n 阱工艺中，n 沟道晶体管直接做在原始的轻掺杂（受主）p 型衬底上；p 沟道晶体管做在 n 阱中，而 n 阱是向该衬底注入并扩散施主形成的。要使该区域反型为 n 型，施主浓度必须超过（过补偿）衬底受主浓度；实际工艺中阱的净掺杂浓度通常是衬底的数倍，以降低阱电阻（防止闩锁）、控制穿通并实现阱隔离。因此 PMOS 的体区比 NMOS 的体区掺杂更重，于是 $\gamma_P>\gamma_N$。

### 第 3 步 — 给定数值对应的掺杂浓度

取 $\varepsilon_{ox}=3.9\varepsilon_0$、$\varepsilon_{Si}=11.7\varepsilon_0$（$\varepsilon_0=8.854\times10^{-14}$ F/cm）：

$$
C_{ox}=\frac{3.9(8.854\times10^{-14}\ \mathrm{F/cm})}{140\times10^{-8}\ \mathrm{cm}}=2.466\times10^{-7}\ \mathrm{F/cm^2},
\qquad N_{SUB}=\frac{(\gamma C_{ox})^2}{2q\varepsilon_{Si}}.
$$

| 晶体管 | 体区 | $\gamma$ ($\mathrm{V^{1/2}}$) | $N_{SUB}$ ($\mathrm{cm^{-3}}$) |
|---|---|---|---|
| n 沟道 | p 型衬底 | 0.40 | $2.9\times10^{16}$ |
| p 沟道 | n 阱 | 0.57 | $6.0\times10^{16}$ |

比值可直接由 $\gamma\propto\sqrt{N_{SUB}}$ 得到：

$$
\frac{N_{well}}{N_{substrate}}=\Big(\frac{\gamma_P}{\gamma_N}\Big)^2=\Big(\frac{0.57}{0.4}\Big)^2=2.03 .
$$

因此 $\gamma_P$ 较大，是因为 p 沟道晶体管的体区 n 阱，其掺杂浓度约为 n 沟道晶体管所在 p 型衬底的两倍。

# 详细步骤 - G040

在已知 $I_C$ 下测得的 $V_{BE}$ 给出饱和电流，从而求出基区 Gummel 数 $Q_B$。同一个 $Q_B$ 决定了有源基区的方块电阻，并且由电荷中性决定了基区完全耗尽（穿通）时集电区一侧的耗尽宽度。

### 第 1 步 — 由 $V_{BE}$ 求 $Q_B$

基区复合可以忽略时，$I_C=I_Se^{V_{BE}/V_T}$，$I_S=qA\bar D_nn_i^2/Q_B$，故

$$
Q_B=\frac{qA\bar D_nn_i^2}{I_C}e^{V_{BE}/V_T},\qquad
\frac{qA\bar D_nn_i^2}{I_C}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{-4}\ \mathrm{cm^2})(13\ \mathrm{cm^2/s})(2.25\times10^{20}\ \mathrm{cm^{-6}})}{10\ \mu\mathrm A}=4680\ \mathrm{cm^{-2}}.
$$

对超 β 器件，$e^{480/26}=e^{18.46}=1.04\times10^8$，故 $Q_B=4.88\times10^{11}\ \mathrm{cm^{-2}}$。

### 第 2 步 — 有源基区的方块电阻

有源基区由空穴导电，单位面积受主数为 $Q_B$：

$$
R_\square=\frac1{q\bar\mu_pQ_B}=\frac1{(1.6\times10^{-19}\ \mathrm C)(150\ \mathrm{cm^2/V\,s})(4.88\times10^{11}\ \mathrm{cm^{-2}})}=85\ \mathrm{k\Omega}/\square .
$$

### 第 3 步 — 穿通电压

穿通时基区完全耗尽，由电荷中性，集电区耗尽区内单位面积含 $Q_B$ 个施主。集电区掺杂为 $N_D=10^{15}\ \mathrm{cm^{-3}}$，其宽度为

$$
x_d=\frac{Q_B}{N_D}=\frac{4.88\times10^{11}\ \mathrm{cm^{-2}}}{10^{15}\ \mathrm{cm^{-3}}}=4.88\ \mu\mathrm m .
$$

对于单边结（$N_A\gg N_D$），$x_d=\sqrt{2\epsilon(\psi_0+V_R)/(qN_D)}$，故

$$
\psi_0+V_R=\frac{qN_Dx_d^2}{2\epsilon}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{15}\ \mathrm{cm^{-3}})(4.88\times10^{-4}\ \mathrm{cm})^2}{2(1.04\times10^{-12}\ \mathrm{F/cm})}=18.3\ \mathrm V,
\qquad V_R=18.3-0.55=17.7\ \mathrm V .
$$

### 第 4 步 — 标准器件及比较

对 $V_{BE}=560$ mV 作同样计算，$e^{21.54}=2.26\times10^9$：

| 器件 | $V_{BE}$ (mV) | $Q_B$ (cm⁻²) | $R_\square$ (kΩ/□) | 穿通时 $x_d$ (µm) | $V_{PT}$ |
|---|---|---|---|---|---|
| 超 β | 480 | $4.88\times10^{11}$ | 85 | 4.9 | ≈ 18 V |
| 标准 | 560 | $1.06\times10^{13}$ | 3.9 | 106 | ≈ 8.6 kV |

超 β 晶体管的高增益来自很薄、电荷很少的基区，代价是穿通电压只有约 18 V。对标准器件，所需的集电区耗尽宽度 106 µm 超过了整个外延层，形式上的 8.6 kV 意味着不可能发生穿通；其集电结击穿由雪崩决定。

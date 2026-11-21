# 详细步骤 - G028

对于平方律器件，$\sqrt{I_D}$ 是 $V_{GS}$ 的直线，这正是 [图 1] 采用这种画法的原因。由计入速度饱和的缓变沟道模型计算 1 µm 器件的饱和区电流，在扫描范围内取其平方根，并与相同 $k'$ 和 $V_t$ 在不计速度饱和时得到的直线比较。

### 第 1 步 — 含速度饱和的饱和区电流

用 $v_d=\mu_n\mathcal E/(1+\mathcal E/\mathcal E_c)$ 进行缓变沟道分析，得线性区电流 $I_D=\tfrac12k'(W/L)(2V_{ov}V_{DS}-V_{DS}^2)/[1+V_{DS}/(\mathcal E_cL)]$，其最大值（即 $\lambda=0$ 时的饱和区电流）出现在

$$
V_{DS(act)}=\mathcal E_cL\left(\sqrt{1+\frac{2V_{ov}}{\mathcal E_cL}}-1\right),\qquad
I_D=\frac{k'}2\frac WLV_{DS(act)}^2 .
$$

此处 $\mathcal E_cL=(1.5\times10^6\ \mathrm{V/m})(1\ \mu\mathrm m)=1.5$ V。最大值出现在 $V_{GS}=5$ V（$V_{ov}=4.3$ V），此时 $V_{DS(act)}=2.39$ V，小于 $V_{DS}=5$ V，因此器件只要导通就处于饱和区。$V_t=0.7$ V 以下电流为零（忽略亚阈值导电）。

### 第 2 步 — 两种模型下的 $\sqrt{I_D}$

$\tfrac12k'(W/L)=27\ \mu\mathrm{A/V^2}$，$\sqrt{27\ \mu\mathrm{A/V^2}}=5.20\ \sqrt{\mu\mathrm A}/\mathrm V$，故

$$
\sqrt{I_D}=\left(5.20\ \frac{\sqrt{\mu\mathrm A}}{\mathrm V}\right)V_{DS(act)}\quad\text{(velocity saturation)},\qquad
\sqrt{I_D}=\left(5.20\ \frac{\sqrt{\mu\mathrm A}}{\mathrm V}\right)V_{ov}\quad\text{(square law)}.
$$

平方律直线就是 [图 1] 的长沟道特性：那里 $\mathcal E_cL=30$ V，速度饱和可以忽略。$V_{GS}=3$ V（$V_{ov}=2.3$ V）时：$V_{DS(act)}=(1.5\ \mathrm V)(\sqrt{1+4.6/1.5}-1)=1.525$ V，故 $\sqrt{I_D}=7.92\ \sqrt{\mu\mathrm A}$（$I_D=62.8\ \mu$A），而直线上为 11.95。

| $V_{GS}$ (V) | 1 | 1.5 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $\sqrt{I_D}$，1 µm 器件 ($\sqrt{\mu\mathrm A}$) | 1.43 | 3.41 | 5.09 | 7.92 | 10.3 | 12.4 |
| $\sqrt{I_D}$，平方律直线 ($\sqrt{\mu\mathrm A}$) | 1.56 | 4.16 | 6.76 | 11.95 | 17.1 | 22.3 |
| $I_D$，1 µm 器件 (µA) | 2.0 | 11.6 | 25.9 | 62.8 | 106 | 155 |

### 第 3 步 — 短沟道曲线的斜率

由于 $dV_{DS(act)}/dV_{ov}=1/\sqrt{1+2V_{ov}/(\mathcal E_cL)}$，

$$
\frac{d\sqrt{I_D}}{dV_{GS}}=\frac{5.20\ \sqrt{\mu\mathrm A}/\mathrm V}{\sqrt{1+2V_{ov}/(\mathcal E_cL)}},
$$

在阈值处等于长沟道斜率，在 $V_{ov}=1$ V 处降到 3.4，在 $V_{ov}=4.3$ V 处降到 2.0 $\sqrt{\mu\mathrm A}/\mathrm V$。因此曲线向下弯曲（$d^2\sqrt{I_D}/dV_{GS}^2<0$）。

### 第 4 步 — 曲线与比较

![1 µm 器件计入速度饱和的 √ID–VGS 曲线，弯曲落在长沟道器件的平方律直线之下](/q/G028/solution-curves.zh.svg)

两条曲线都从 $V_t=0.7$ V 以相同斜率开始，但在 $V_{GS}$ 较大时，短沟道曲线远低于直线：5 V 处为 12.4 对 22.3 $\sqrt{\mu\mathrm A}$，即 155 µA 对 499 µA。差别来自速度饱和。$\mathcal E_cL=1.5$ V 与过驱动电压相当，漏端附近的载流子接近饱和速度，电流的增长慢于 $V_{ov}^2$，趋于与 $V_{ov}$ 成线性关系（因而 $\sqrt{I_D}$ 趋于 $\sqrt{V_{ov}}$）。若对短沟道曲线作直线拟合，会低估 $k'$ 并使外推阈值偏离。

# 详细步骤 - A271

两级运放的低频增益等于第一级（带电流镜负载的输入对管）增益与第二级（以电流沉 M7 为负载的共源管 M6）增益之积。每级增益等于其跨导乘以输出节点上的并联输出电阻。所有器件都饱和；$g_m=\sqrt{2K'(W/L)I_D}$，$g_{ds}=\lambda I_D$。

### 第 1 步 — 第一级

有电流镜负载时，完整的差模电流 $g_{m1}v_{id}$ 送到第一级输出节点，由 $r_{ds2}\parallel r_{ds4}$ 承接。每个输入管流过 $I_5/2=22.8$ µA：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(22.8\ \mu\mathrm A)}=224\ \mu\mathrm S,\qquad
g_{ds2}+g_{ds4}=(\lambda_N+\lambda_P)\frac{I_5}{2}=(0.09\ \mathrm{V^{-1}})(22.8\ \mu\mathrm A)=2.06\ \mu\mathrm S,
$$
$$
A_{v1}=\frac{g_{m1}}{g_{ds2}+g_{ds4}}=\frac{224\ \mu\mathrm S}{2.06\ \mu\mathrm S}=109 .
$$

### 第 2 步 — 第二级

M6（p 沟道）和 M7（n 沟道）都流过 228 µA：

$$
g_{m6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(100)(228\ \mu\mathrm A)}=1.51\ \mathrm{mS},\qquad
g_{ds6}+g_{ds7}=(0.05+0.04)(228\ \mu\mathrm A)=20.6\ \mu\mathrm S,
$$
$$
A_{v2}=\frac{g_{m6}}{g_{ds6}+g_{ds7}}=\frac{1.51\ \mathrm{mS}}{20.6\ \mu\mathrm S}=73.6 .
$$

### 第 3 步 — 总增益

$$
A_{vd}(0)=A_{v1}A_{v2}=\frac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})}=109\times73.6=8.0\times10^3\ \mathrm{V/V}\ (78\ \mathrm{dB}).
$$

# 详细步骤 - G065

$R=10\ \mathrm{k\Omega}$ 时电阻分走了相当大的一部分漏极电流，因此偏置点必须同时计入负载电流和体效应求解，增益也必须计入 $g_{mb}$ 以及源极节点的电导 $1/R$。

### 第 1 步 — 偏置方程

源极节点的 KCL 给出漏极电流；饱和区关系与体效应阈值（衬底接地，$V_{SB}=V_O$）给出输出电压：

$$
I_D=200\ \mu\mathrm A+\frac{V_O}{R},\qquad
V_O=3\ \mathrm V-V_t-\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}},\qquad
V_t=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_O}-\sqrt{2\phi_f}\right),
$$

其中 $\mu_nC_{ox}(W/L)=900\ \mu\mathrm{A/V^2}$，$\gamma=0.19\ \mathrm{V^{1/2}}$，$2\phi_f=0.61$ V。

### 第 2 步 — 不动点迭代求解

由于 $R$ 较小，$V_O$ 会明显低于 $R\to\infty$ 时的 1.505 V；从 $V_O=1.30$ V 出发。此时 $I_D=200\ \mu\mathrm A+1.30\ \mathrm V/10\ \mathrm{k\Omega}=330\ \mu$A，且

$$
V_t=0.7+0.19\left(\sqrt{0.61+1.30}-\sqrt{0.61}\right)=0.8142\ \mathrm V,\qquad
\sqrt{\frac{2(330\ \mu\mathrm A)}{900\ \mu\mathrm{A/V^2}}}=0.8563\ \mathrm V,
$$

$$
V_O=3-0.8142-0.8563=1.3295\ \mathrm V .
$$

继续迭代：

| 轮次 | $I_D$ (µA) | $V_t$ (V) | $V_{GS}-V_t$ (V) | 新 $V_O$ (V) |
|---|---|---|---|---|
| 1 | 330.0 | 0.8142 | 0.8563 | 1.3295 |
| 2 | 332.9 | 0.8162 | 0.8602 | 1.3236 |
| 3 | 332.4 | 0.8158 | 0.8594 | 1.3248 |
| 4 | 332.5 | 0.8159 | 0.8596 | 1.3246 |

所以 $V_O=1.325$ V，$I_D=332.5\ \mu$A（其中 $132.5\ \mu$A 流过 $R$），$V_t=0.816$ V，过驱动电压（overdrive voltage）为 0.860 V。器件处于饱和区：$V_{DS}=5-1.325=3.68$ V $>0.860$ V。

### 第 3 步 — 小信号参数

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(900\ \mu\mathrm{A/V^2})(332.5\ \mu\mathrm A)}=0.774\ \mathrm{mA/V},
$$

$$
\chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.19\ \mathrm{V^{1/2}}}{2\sqrt{0.61\ \mathrm V+1.325\ \mathrm V}}=0.0683,
\qquad g_{mb}=\chi g_m=52.8\ \mu\mathrm{A/V}.
$$

### 第 4 步 — 增益

由 $v_{gs}=v_i-v_o$、$v_{bs}=-v_o$，在源极列 KCL（电流源理想且 $\lambda=0$，只有 $R$ 把小信号电流导到地）：

$$
g_m(v_i-v_o)-g_{mb}v_o=\frac{v_o}{R}
\quad\Rightarrow\quad
\frac{v_o}{v_i}=\frac{g_mR}{1+(g_m+g_{mb})R}.
$$

$$
\frac{v_o}{v_i}=\frac{(0.774\ \mathrm{mA/V})(10\ \mathrm{k\Omega})}{1+(0.826\ \mathrm{mA/V})(10\ \mathrm{k\Omega})}=\frac{7.74}{9.26}=0.835 .
$$

若不计体效应，同一偏置下 $g_mR/(1+g_mR)=0.886$；此时增益损失主要来自较小的负载电阻（分母中的 1），而不是 $g_{mb}$。答案为 $V_O=1.32$ V，$v_o/v_i=0.835$。

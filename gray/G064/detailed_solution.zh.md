# 详细步骤 - G064

此时 $R=100\ \mathrm{k\Omega}$ 从源极节点额外吸取电流，因此过驱动电压（overdrive voltage）和阈值都依赖于 $V_O$。先迭代求解偏置方程，再在源极列出计入 $g_{mb}$ 和电导 $1/R$ 的 KCL。

### 第 1 步 — 偏置方程

源极节点的 KCL：晶体管提供 200 µA 电流源的电流，再加上 $R$ 中的电流，

$$
I_D=200\ \mu\mathrm A+\frac{V_O}{R}.
$$

饱和区中栅源电压等于阈值加过驱动电压；衬底接地，故 $V_{SB}=V_O$：

$$
V_O=3\ \mathrm V-V_t-\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}},\qquad
V_t=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_O}-\sqrt{2\phi_f}\right),
$$

其中 $\mu_nC_{ox}(W/L)=900\ \mu\mathrm{A/V^2}$，$\gamma=0.19\ \mathrm{V^{1/2}}$，$2\phi_f=0.61$ V。

### 第 2 步 — 不动点迭代求解

从 $R\to\infty$ 的解 $V_O=1.505$ V 出发。以第一轮为例：$I_D=200\ \mu\mathrm A+1.505\ \mathrm V/100\ \mathrm{k\Omega}=215.05\ \mu$A，然后

$$
V_t=0.7+0.19\left(\sqrt{0.61+1.505}-\sqrt{0.61}\right)=0.8279\ \mathrm V,\qquad
\sqrt{\frac{2(215.05\ \mu\mathrm A)}{900\ \mu\mathrm{A/V^2}}}=0.6913\ \mathrm V,
$$

$$
V_O=3-0.8279-0.6913=1.4808\ \mathrm V .
$$

重复迭代很快收敛：

| 轮次 | $I_D$ (µA) | $V_t$ (V) | $V_{GS}-V_t$ (V) | 新 $V_O$ (V) |
|---|---|---|---|---|
| 1 | 215.05 | 0.8279 | 0.6913 | 1.4808 |
| 2 | 214.81 | 0.8263 | 0.6909 | 1.4828 |
| 3 | 214.83 | 0.8265 | 0.6909 | 1.4826 |

所以 $V_O=1.483$ V，$I_D=214.8\ \mu$A，$V_t=0.826$ V。$R$ 中额外的 14.8 µA 使过驱动电压增大，$V_O$ 比 $R\to\infty$ 时低约 22 mV。$V_{DS}=5-1.483=3.52$ V 大于 $V_{GS}-V_t=0.691$ V，器件处于饱和区。

### 第 3 步 — 小信号参数

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(900\ \mu\mathrm{A/V^2})(214.8\ \mu\mathrm A)}=0.622\ \mathrm{mA/V},
$$

$$
\chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.19\ \mathrm{V^{1/2}}}{2\sqrt{0.61\ \mathrm V+1.483\ \mathrm V}}=0.0657,
\qquad g_{mb}=\chi g_m=40.8\ \mu\mathrm{A/V}.
$$

### 第 4 步 — 增益

由 $v_{gs}=v_i-v_o$、$v_{bs}=-v_o$，小信号漏极电流 $g_m(v_i-v_o)-g_{mb}v_o$ 必须经 $R$ 流出源极节点（理想电流源和 $\lambda=0$ 不增加电导）：

$$
g_m(v_i-v_o)-g_{mb}v_o=\frac{v_o}{R}
\quad\Rightarrow\quad
\frac{v_o}{v_i}=\frac{g_mR}{1+(g_m+g_{mb})R}.
$$

$$
\frac{v_o}{v_i}=\frac{(0.622\ \mathrm{mA/V})(100\ \mathrm{k\Omega})}{1+(0.663\ \mathrm{mA/V})(100\ \mathrm{k\Omega})}=\frac{62.2}{67.3}=0.924 .
$$

体效应（$g_{mb}R$ 项，约 6% 的损失）和有限负载（分母中的 1，约 1.5%）都使增益低于 1。答案为 $V_O=1.48$ V，$v_o/v_i=0.924$。

# 详细步骤 - G108

失调的组成与不加电阻时相同。$V_{OS}=V_{BE1}-V_{BE2}$ 由三部分构成：npn 的 $I_S$ 失配、pnp 电流镜产生的电流失配，以及系统性的基极电流项 $2/\beta_F$。只有电流镜一项发生变化。发射极负反馈使 pnp 的 $I_S$ 失配除以 $1+g_mR/\alpha_F$，但以 $(g_mR/\alpha_F)/(1+g_mR/\alpha_F)$ 的权重引入电阻失配和 $\alpha_F$ 失配。将电流镜的 KVL 线性化，求出各权重，再把所有项按最坏情况方向相加。

### 第 1 步 — 偏置值

每一侧流过 $I_C=50\ \mu\mathrm A$，pnp 器件的 $\alpha_F=\beta_F/(1+\beta_F)=15/16=0.9375$：

$$
g_m=\frac{50\ \mu\mathrm A}{26\ \mathrm{mV}}=1.92\ \mathrm{mA/V},\qquad
\frac{g_mR}{\alpha_F}=\frac{(1.92\ \mathrm{mA/V})(2\ \mathrm{k\Omega})}{0.9375}=4.10 .
$$

发射极电阻上的压降为 $I_ER=(53.3\ \mu\mathrm A)(2\ \mathrm{k\Omega})=107$ mV。

### 第 2 步 — 带负反馈电流镜的失配

$Q_3$ 与 $Q_4$ 共用基极节点，发射极分别经 $R_3$、$R_4$ 接电源，所以由 KVL 得

$$
\frac{I_{C3}}{\alpha_{F3}}R_3+V_T\ln\frac{I_{C3}}{I_{S3}}=\frac{I_{C4}}{\alpha_{F4}}R_4+V_T\ln\frac{I_{C4}}{I_{S4}} .
$$

把每个量写成平均值加差值（$\Delta x=x_4-x_3$），展开到一阶，

$$
\frac{\Delta I_C}{I_C}=\frac1{1+g_mR/\alpha_F}\frac{\Delta I_S}{I_S}+\frac{g_mR/\alpha_F}{1+g_mR/\alpha_F}\left(-\frac{\Delta R}R+\frac{\Delta\alpha_F}{\alpha_F}\right).
$$

$\beta_F$ 失配通过 $\alpha_F$ 进入：$\dfrac{\Delta\alpha_F}{\alpha_F}=\dfrac1{1+\beta_F}\dfrac{\Delta\beta_F}{\beta_F}=\dfrac{0.10}{16}=0.00625$。

### 第 3 步 — 电流镜项的最坏情况

三种负载失配都取最坏情况的幅度，且符号相加：

$$
\left|\frac{\Delta I_C}{I_C}\right|_{\text{load}}=\frac{0.05}{5.10}+\frac{4.10}{5.10}(0.005+0.00625)=0.0098+0.0090=0.0188 .
$$

不加电阻时这一项为 0.05。负反馈使 $I_S$ 部分减小到五分之一，但电阻失配和 $\alpha_F$ 失配又加回了几乎同样多。

### 第 4 步 — 总失调

另外两项不变。npn 对贡献 $\Delta I_{SN}/I_{SN}=0.05$。在二极管节点列 KCL 仍得 $I_{C1}\approx I_{C3}(1+2/\beta_F)$，所以基极电流项仍为 $2/\beta_F=2/15=0.133$：

$$
|V_{OS}|=V_T\left(0.05+0.0188+0.133\right)=(26\ \mathrm{mV})(0.202)=5.3\ \mathrm{mV}.
$$

在最坏角（$I_{S1}<I_{S2}$，$I_{S3}>I_{S4}$，$R_3<R_4$，$\beta_3>\beta_4$）精确求解非线性电路方程，得 5.03 mV。失调只从约 6.1 mV 降到 5.0–5.3 mV，因为起主导作用的贡献，即低 $\beta$ 的 pnp 电流镜的 $2/\beta_F$ 损失（单独就有 3.3 mV），不受发射极负反馈的影响。

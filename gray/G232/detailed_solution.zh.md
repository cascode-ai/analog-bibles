# 详细步骤 - G232

把 $Q_1$ 看作带输入分压的共射跨导器，把 $Q_2$ 看作共基电流缓冲器（current buffer），它唯一的损失是基极电流，即电流增益为 $\alpha$。

### 第 1 步 — 小信号参数

两管都在 1 mA 下工作于正向放大区（forward-active region），故 $g_m=I_C/V_T$，$r_\pi=\beta/g_m$：

$$
g_m=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.46\ \mathrm{mA/V},\qquad r_\pi=\frac{100}{38.46\ \mathrm{mA/V}}=2.6\ \mathrm{k\Omega},\qquad \alpha=\frac{\beta}{\beta+1}=0.990 .
$$

### 第 2 步 — $Q_1$ 的信号电流

$Q_1$ 的基极经 $r_\pi$ 吸取电流，因此 $R_S$ 与 $r_\pi$ 对输入分压：

$$
v_{be1}=v_i\,\frac{r_\pi}{R_S+r_\pi}=v_i\,\frac{2.6\ \mathrm{k\Omega}}{7.6\ \mathrm{k\Omega}}=0.342\,v_i,\qquad i_{c1}=g_mv_{be1}.
$$

由于 $r_o=\infty$，$i_{c1}$ 与 $Q_1$ 的集电极电压无关。

### 第 3 步 — 共基管的电流传递

$Q_2$ 的基极接交流地，发射极由 $i_{c1}$ 馈入。在 $Q_2$ 发射极列 KCL，其发射极电流等于 $i_{c1}$；其中 $1/(\beta+1)$ 的部分经基极流到地，其余到达集电极：

$$
i_{c2}=\alpha\,i_{c1}=\frac{\beta}{\beta+1}\,i_{c1}.
$$

### 第 4 步 — 电压增益

$Q_2$ 的集电极电流从输出节点抽取，故 $v_o=-i_{c2}R_L$：

$$
\frac{v_o}{v_i}=-\alpha\,g_mR_L\,\frac{r_\pi}{R_S+r_\pi}=-(0.990)(38.46\ \mathrm{mA/V})(3\ \mathrm{k\Omega})(0.342)=-0.990\times39.5=-39.1 .
$$

共射–共基结构使增益基本等于单个共射级的增益（−39.5），只减小了因子 $\alpha$。

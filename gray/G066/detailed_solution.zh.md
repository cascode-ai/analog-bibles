# 详细步骤 - G066

用含 $r_o$ 的混合 π 模型（hybrid-π model）代替两个晶体管（不计 $r_b$、$r_\mu$），$Q_1$ 基极接交流地，在公共集电极加测试电压 $v_x$，求解唯一的内部节点 $b_2$（$Q_1$ 发射极 = $Q_2$ 基极）。偏置电流 $I_{\text{BIAS}}$ 只通过 $Q_1$ 的集电极电流起作用，后者决定 $g_{m1}$、$r_{\pi1}$ 和 $r_{o1}$。

### 第 1 步 — $Q_1$ 的偏置随 $I_{\text{BIAS}}$ 的变化

$Q_1$ 的发射极既要提供理想电流源的电流，又要提供 $Q_2$ 的基极电流 $I_{C2}/\beta_F$。因此

$$
I_{E1}=I_{\text{BIAS}}+\frac{I_{C2}}{\beta_F},\qquad
I_{C1}=\frac{\beta_0}{\beta_0+1}\left(I_{\text{BIAS}}+\frac{I_{C2}}{\beta_F}\right).
$$

每个器件有 $g_m=I_C/V_T$、$r_\pi=\beta_0/g_m$ 和 $r_o=V_A/I_C$。定义 $n=I_{C2}/I_{C1}$，则 $r_{\pi1}=nr_{\pi2}$，$r_{o1}=nr_{o2}$。

### 第 2 步 — 节点 $b_2$ 的方程

设节点 $b_2$ 的电压为 $v$。$Q_1$ 基极接地，故 $v_{be1}=-v$，$v_{be2}=v$。$Q_1$ 注入节点 $b_2$ 的电流是其受控源、经 $r_{\pi1}$ 的基极电流与经 $r_{o1}$ 的电流之和；这些电流经 $r_{\pi2}$ 流出（理想电流源不携带信号）：

$$
-g_{m1}v-\frac{v}{r_{\pi1}}+\frac{v_x-v}{r_{o1}}=\frac{v}{r_{\pi2}}
\quad\Rightarrow\quad
v=\frac{v_x/r_{o1}}{1/r_{o1}+1/r_{\pi1}+1/r_{\pi2}+g_{m1}} .
$$

### 第 3 步 — 测试电流与一般结果

测试电流是两个集电极电流之和：

$$
i_x=\left[-g_{m1}v+\frac{v_x-v}{r_{o1}}\right]+g_{m2}v+\frac{v_x}{r_{o2}} .
$$

由第 2 步，方括号等于 $v(1/r_{\pi1}+1/r_{\pi2})$，故 $i_x=v_x/r_{o2}+v\,(1/r_{\pi1}+1/r_{\pi2}+g_{m2})$。代入 $v$ 并同乘 $r_{\pi1}r_{\pi2}$：

$$
\frac1{r_o^c}=\frac1{r_{o2}}+\frac{r_{\pi1}+r_{\pi2}+g_{m2}r_{\pi1}r_{\pi2}}{r_{o1}\left(r_{\pi1}+r_{\pi2}+g_{m1}r_{\pi1}r_{\pi2}\right)+r_{\pi1}r_{\pi2}} .
$$

利用 $g_mr_\pi=\beta_0$ 以及 $r_{\pi1}r_{\pi2}\ll r_{o1}(\cdots)$，

$$
\frac1{r_o^c}\approx\frac1{r_{o2}}+\frac{(\beta_0+1)r_{\pi1}+r_{\pi2}}{r_{o1}\left[r_{\pi1}+(\beta_0+1)r_{\pi2}\right]},
\qquad
r_o^c\approx r_{o2}\,\Big\|\,r_{o2}\,\frac{n(n+\beta_0+1)}{(\beta_0+1)n+1}.
$$

第二条支路并不就是 $r_{o1}$：流过 $r_{o1}$ 的电流到达 $b_2$ 后，在 $Q_1$ 的发射极（电阻约 $r_{\pi1}/(\beta_0+1)$）与 $Q_2$ 的基极（$r_{\pi2}$）之间分流，进入 $Q_2$ 的部分被放大 $\beta_0$ 倍。

### 第 4 步 — $I_{\text{BIAS}}=1$ mA

$I_{C1}=(200/201)(1\ \mathrm{mA}+5\ \mu\mathrm A)=1.00$ mA，故 $n=1$，两个器件都有 $g_m=38.5$ mA/V、$r_\pi=5.2\ \mathrm{k\Omega}$、$r_o=130\ \mathrm{V}/1\ \mathrm{mA}=130\ \mathrm{k\Omega}$。因子 $n(n+\beta_0+1)/[(\beta_0+1)n+1]=202/202=1$，第二条支路就等于 $r_{o1}$：

$$
r_o^c\approx r_{o1}\,\|\,r_{o2}=130\ \mathrm{k\Omega}\,\|\,130\ \mathrm{k\Omega}=65.0\ \mathrm{k\Omega}.
$$

### 第 5 步 — $I_{\text{BIAS}}=0$

此时 $Q_1$ 只流过 $Q_2$ 的基极电流：

$$
I_{C1}=\frac{200}{201}\cdot\frac{1\ \mathrm{mA}}{200}=4.975\ \mu\mathrm A,\qquad
r_{\pi1}=\frac{\beta_0V_T}{I_{C1}}=1.045\ \mathrm{M\Omega},\qquad
r_{o1}=\frac{130\ \mathrm V}{4.975\ \mu\mathrm A}=26.13\ \mathrm{M\Omega},
$$

故 $n=\beta_0+1=201$，$r_{\pi1}=(\beta_0+1)r_{\pi2}$。此时从 $Q_1$ 发射极看进去的电阻等于 $r_{\pi2}$，$r_{o1}$ 的电流对半分流，进入 $Q_2$ 的一半被放大 $\beta_0$ 倍。第二条支路为

$$
r_{o2}\,\frac{201(201+201)}{201\times201+1}=1.9999\,r_{o2}=260\ \mathrm{k\Omega},
\qquad
r_o^c\approx130\ \mathrm{k\Omega}\,\|\,260\ \mathrm{k\Omega}=86.7\ \mathrm{k\Omega}\approx\tfrac23r_{o2}.
$$

第 3 步的精确表达式给出相同的三位有效数字。

### 第 6 步 — 随 $I_{\text{BIAS}}$ 的变化

对其他偏置电流计算精确表达式（$I_{C2}=1$ mA）：

| $I_{\text{BIAS}}$ | $I_{C1}$ | $r_{o1}$ | 第二条支路 | $r_o^c$ |
|---|---|---|---|---|
| 0 | 4.98 µA | 26.1 MΩ | 260 kΩ | 86.7 kΩ |
| 10 µA | 14.9 µA | 8.71 MΩ | 173 kΩ | 74.3 kΩ |
| 100 µA | 104 µA | 1.24 MΩ | 136 kΩ | 66.5 kΩ |
| 1 mA | 1.00 mA | 130 kΩ | 130 kΩ | 65.0 kΩ |
| 10 mA | 9.96 mA | 13.1 kΩ | 124 kΩ | 63.5 kΩ |

$r_o^c$ 随 $I_{\text{BIAS}}$ 单调下降：从 $I_{\text{BIAS}}=0$ 时的约 $\tfrac23r_{o2}=86.7\ \mathrm{k\Omega}$，降到 $I_{C1}=I_{C2}$ 时的 $r_{o1}\|r_{o2}=65\ \mathrm{k\Omega}$，此后下降很慢，因为在 $I_{C1}$ 接近 $(\beta_0+1)I_{C2}$ 之前，第二条支路一直接近 $r_{o2}$。它永远不会超过 $r_{o2}$，因为经 $r_{o1}$ 的路径总是与 $r_{o2}$ 并联增加一条导电支路。

# 详细步骤 - A228

在输入的每个极端处只有一只晶体管导通，其全部电流流过 $R_L$。令该器件的饱和平方律电流等于负载电流，解所得二次方程求 $v_{OUT}$，并注意阈值本身通过体效应依赖于 $v_{OUT}$。

### 第 1 步 — 最大值：$v_{IN}=V_{DD}$，M1 导通

$v_{IN}=V_{DD}$ 时，M1 的栅极为 $V_{DD}+V_{BIAS}$，M2 截止。M1 处于饱和区，因为

$$
V_{DS1}=V_{DD}-v_{OUT}\ \ge\ V_{GS1}-V_{T1}=V_{DD}+V_{BIAS}-v_{OUT}-V_{T1}
\iff V_{BIAS}\le V_{T1}.
$$

输出节点 KCL：M1 的漏极电流全部流入 $R_L$，

$$
\frac{\beta_1}{2}\big(V_{DD}+V_{BIAS}-v_{OUT}-V_{T1}\big)^2=\frac{v_{OUT}}{R_L}.
$$

### 第 2 步 — 求 $v_{OUT}(\max)$

令 $A=V_{DD}+V_{BIAS}-V_{T1}$，$u=A-v_{OUT}\ge0$（M1 的过驱动电压）。方程化为关于 $u$ 的二次方程：

$$
\frac{\beta_1R_L}{2}u^2+u-A=0\quad\Rightarrow\quad
u=\frac{-1+\sqrt{1+2\beta_1R_LA}}{\beta_1R_L},
$$

取正根。于是 $v_{OUT}=A-u$：

$$
v_{OUT}(\max)=(V_{DD}+V_{BIAS}-V_{T1})+\frac{1}{\beta_1R_L}-\sqrt{\frac{1}{(\beta_1R_L)^2}+\frac{2(V_{DD}+V_{BIAS}-V_{T1})}{\beta_1R_L}} .
$$

### 第 3 步 — 最小值：$v_{IN}=V_{SS}$，M2 导通

$v_{IN}=V_{SS}$ 时，M2 的栅极为 $V_{SS}-V_{BIAS}$，M1 截止。同理 M2 处于饱和区（$V_{BIAS}\le|V_{T2}|$），其源极电流就是从 $R_L$ 抽出的电流 $-v_{OUT}/R_L$：

$$
\frac{\beta_2}{2}\big(v_{OUT}-V_{SS}+V_{BIAS}-|V_{T2}|\big)^2=-\frac{v_{OUT}}{R_L}.
$$

令 $B=|V_{SS}|+V_{BIAS}-|V_{T2}|$，$w=v_{OUT}+B\ge0$，得 $\tfrac{\beta_2R_L}{2}w^2+w-B=0$，故 $w=\big(-1+\sqrt{1+2\beta_2R_LB}\big)/(\beta_2R_L)$，$v_{OUT}=w-B$：

$$
v_{OUT}(\min)=-(|V_{SS}|+V_{BIAS}-|V_{T2}|)-\frac{1}{\beta_2R_L}+\sqrt{\frac{1}{(\beta_2R_L)^2}+\frac{2(|V_{SS}|+V_{BIAS}-|V_{T2}|)}{\beta_2R_L}} .
$$

### 第 4 步 — 体效应与极限情况

阈值在输出的极端电压处计算：M1 的源极比其衬底高 $v_{OUT}(\max)-V_{SS}$，M2 的源极比其衬底低 $V_{DD}-v_{OUT}(\min)$：

$$
V_{T1}=V_{T0N}+\gamma_N\left(\sqrt{2|\phi_{FN}|+v_{OUT}(\max)-V_{SS}}-\sqrt{2|\phi_{FN}|}\right),
$$

$$
|V_{T2}|=|V_{T0P}|+\gamma_P\left(\sqrt{2|\phi_{FP}|+V_{DD}-v_{OUT}(\min)}-\sqrt{2|\phi_{FP}|}\right).
$$

由于每个阈值都依赖于结果，需迭代求解：先猜 $v_{OUT}$，算出阈值，再重新计算 $v_{OUT}$，如此反复。

当 $R_L\to\infty$ 时，平方根项化为 $A$ 和 $B$，负载电流趋于零：

$$
v_{OUT}(\max)\to V_{DD}+V_{BIAS}-V_{T1},\qquad v_{OUT}(\min)\to V_{SS}-V_{BIAS}+|V_{T2}| .
$$

示例：$V_{DD}=-V_{SS}=2.5$ V，$V_{BIAS}=0.7$ V，采用书中参数（$\gamma_N=0.4\ \mathrm{V^{1/2}}$，$2|\phi_{FN}|=0.7$ V；$\gamma_P=0.57\ \mathrm{V^{1/2}}$，$2|\phi_{FP}|=0.8$ V）。对空载极限迭代，收敛到 $V_{T1}=1.27$ V、$v_{OUT}(\max)=1.93$ V，以及 $|V_{T2}|=1.47$ V、$v_{OUT}(\min)=-1.73$ V。即使空载，体效应在每一端也要损失约 0.6–0.8 V，摆幅远达不到轨到轨（rail-to-rail）。任何有限的 $R_L$ 都会使摆幅进一步减小。若栅极不能被驱动到电源轨之外，则应把 $V_{DD}+V_{BIAS}$ 和 $|V_{SS}|+V_{BIAS}$ 换成 $V_{DD}$ 和 $|V_{SS}|$。

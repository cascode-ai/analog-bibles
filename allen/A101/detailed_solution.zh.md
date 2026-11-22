# 详细步骤 - A101

用混合 π 模型（hybrid-π model）代替 pnp 管，令 $V_{DD}$ 交流接地，在 $V_{REF}$ 处加测试电压 $v_{out}$，求它提供的电流。$R$ 只是与晶体管–分压器组合并联，而后者的电阻由基极处的一个 KCL 方程求得。

### 第 1 步 — 小信号电路

$V_{DD}$ 交流接地后，$R$ 接在 $V_{REF}$ 与地之间。pnp 管工作在正向放大区；其集电极接地，故可用基极–发射极之间的 $r_\pi$ 和从发射极流向集电极的受控电流 $g_mv_{eb}$ 描述，其中 $v_{eb}$ 为发射结信号电压（忽略 $r_o$）。

在输出节点上，$R_1$ 和 $r_\pi$ 都接在发射极（$v_{out}$）与基极之间，两端电压均为 $v_{eb}$；$R_2$ 接在基极（电位 $v_{out}-v_{eb}$）与地之间。

### 第 2 步 — 由基极节点求发射结电压

对基极列 KCL：经 $R_1$ 和 $r_\pi$ 流入的电流从 $R_2$ 流出，

$$
\frac{v_{eb}}{R_1}+\frac{v_{eb}}{r_\pi}=\frac{v_{out}-v_{eb}}{R_2}
\quad\Rightarrow\quad
v_{eb}=\frac{v_{out}}{R_2\left(\dfrac1{R_1}+\dfrac1{r_\pi}+\dfrac1{R_2}\right)} .
$$

### 第 3 步 — 晶体管与分压器吸取的电流

测试源提供流入 $R_1$ 的电流和发射极电流。发射极电流等于集电极电流加上流过 $r_\pi$ 的基极电流，即 $g_mv_{eb}+v_{eb}/r_\pi=g_m(1+1/\beta)v_{eb}$，其中 $\beta=g_mr_\pi$：

$$
i_t=\left[\frac1{R_1}+g_m\left(1+\frac1\beta\right)\right]v_{eb} .
$$

代入 $v_{eb}$，分子分母同乘 $R_1$：

$$
\frac{v_{out}}{i_t}=\frac{R_2\left(\dfrac1{R_1}+\dfrac1{r_\pi}+\dfrac1{R_2}\right)}{\dfrac1{R_1}+g_m\left(1+\dfrac1\beta\right)}
=\frac{R_1+R_2+R_1R_2/r_\pi}{1+g_mR_1(1+1/\beta)} .
$$

### 第 4 步 — 输出电阻及其近似

再并上 $R$：

$$
r_{out}=R\,\Big\|\,\frac{R_1+R_2+R_1R_2/r_\pi}{1+g_mR_1(1+1/\beta)} .
$$

当 $\beta$ 较大（$r_\pi\gg R_2$ 且 $1/\beta\ll1$）时，基极电流不再对分压器形成负载，$v_{eb}=v_{out}R_1/(R_1+R_2)$。若同时 $g_mR_1\gg1$，则

$$
r_{out}\approx R\,\Big\|\,\frac{R_1+R_2}{1+g_mR_1}\approx\frac1{g_m}\left(1+\frac{R_2}{R_1}\right)=\frac1{g_m}\frac{V_{REF}}{V_{EB}} ,
$$

因为分压器使 $V_{REF}=V_{EB}(1+R_2/R_1)$。这就是“$V_{BE}$ 倍增器”的结果：二极管电阻 $1/g_m$ 乘以与电压相同的倍数。$R$ 通常大得多，影响很小。$\beta$ 较小时，$R_1R_2/r_\pi$ 项使 $r_{out}$ 增大，因为 $r_\pi$ 对基极节点形成负载，在给定 $v_{out}$ 下减小了 $v_{eb}$。

# 详细步骤 - A121

输入器件是 p 沟道的 M1；n 沟道的 M2 栅极接直流电压，是只提供输出电导的电流沉。因此在任何工作区增益都是 $A_v=-g_{m1}/(g_{ds1}+g_{ds2})$。随电流变化的是 $g_{m1}$ 与 $I_D$ 的关系：强反型（strong inversion）时为平方根关系，弱反型时为线性关系。由各自的大信号模型求出 $g_m$ 和 $g_{ds}$，再代入三个电流。

### 第 1 步 — 增益表达式

在输出端，M1 提供 $g_{m1}v_{sg1}=-g_{m1}v_{in}$（其源极接 $V_{DD}$，为交流地）。M2 的 $v_{gs2}=0$，只剩下 $g_{ds2}$，由 KCL 得

$$
-g_{m1}v_{in}=(g_{ds1}+g_{ds2})v_{out}
\quad\Rightarrow\quad
A_v=-\frac{g_{m1}}{g_{ds1}+g_{ds2}} .
$$

### 第 2 步 — 输出电导

两种模型都含因子 $(1+\lambda v_{DS})$，所以在任一工作区

$$
g_{ds}=\frac{\partial i_D}{\partial v_{DS}}=\frac{\lambda I_D}{1+\lambda V_{DS}}\approx\lambda I_D,
\qquad g_{ds1}+g_{ds2}=(\lambda_P+\lambda_N)I_D=(0.09\ \mathrm{V^{-1}})\,I_D .
$$

### 第 3 步 — 强反型：5 µA 和 100 µA

对平方律关于 $v_{SG}$ 求导得 $g_{m1}=\sqrt{2K'_P(W_1/L_1)I_D}$，其中 $K'_P(W_1/L_1)=(50\ \mu\mathrm{A/V^2})(2)=100\ \mu\mathrm{A/V^2}$。5 µA 时：

$$
g_{m1}=\sqrt{2(100\ \mu\mathrm{A/V^2})(5\ \mu\mathrm A)}=31.6\ \mu\mathrm S,\qquad
A_v=-\frac{31.6\ \mu\mathrm S}{(0.09\ \mathrm{V^{-1}})(5\ \mu\mathrm A)}=-\frac{31.6}{0.45}=-70.3\ \mathrm{V/V}.
$$

一般地，$A_v=-\sqrt{2K'_P(W_1/L_1)}\,/\left[(\lambda_P+\lambda_N)\sqrt{I_D}\right]\propto1/\sqrt{I_D}$；100 µA 时 $g_{m1}=141.4$ µS，$g_{ds1}+g_{ds2}=9$ µS，$A_v=-15.7$ V/V。

### 第 4 步 — 弱反型：0.1 µA

p 沟道器件有 $i_D=(W/L)I_{D0}\exp[v_{SG}/(n_pkT/q)](1+\lambda v_{SD})$。对指数项求导：

$$
g_{m1}=\frac{\partial i_D}{\partial v_{SG}}=\frac{I_D}{n_p\,kT/q}=\frac{0.1\ \mu\mathrm A}{2.5(26\ \mathrm{mV})}=1.54\ \mu\mathrm S .
$$

由 $g_{ds1}+g_{ds2}=(0.09\ \mathrm{V^{-1}})(0.1\ \mu\mathrm A)=9$ nS，

$$
A_v=-\frac{I_D/(n_pkT/q)}{(\lambda_P+\lambda_N)I_D}=-\frac{1}{n_p(kT/q)(\lambda_P+\lambda_N)}=-\frac{1}{(2.5)(0.026\ \mathrm V)(0.09\ \mathrm{V^{-1}})}=-171\ \mathrm{V/V}.
$$

电流相消：在弱反型区，电流减小时增益不再增大。若在 0.1 µA 时套用平方律公式，会错误地得到约 $-497$。

### 第 5 步 — 汇总

| $I_D$ | 工作区 | $g_{m1}$ | $g_{ds1}+g_{ds2}$ | $A_v$ |
|---|---|---|---|---|
| 0.1 µA | 弱反型 | 1.54 µS | 9 nS | −171 V/V |
| 5 µA | 强反型 | 31.6 µS | 0.45 µS | −70.3 V/V |
| 100 µA | 强反型 | 141.4 µS | 9 µS | −15.7 V/V |

器件处于强反型时，增益幅值按 $1/\sqrt{I_D}$ 增大；进入弱反型后稳定在 $-171$ V/V，此时 $g_m/I_D$ 达到最大值 $1/(n_pkT/q)$。

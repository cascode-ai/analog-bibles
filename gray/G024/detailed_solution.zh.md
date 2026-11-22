# 详细步骤 - G024

由缓变沟道分析和题给的速度-电场关系推导漏极电流，求出电流停止上升的位置，并与平方律比较。关键参数是 $\mathcal E_cL$，即在整个沟道上产生临界电场所需的漏源电压：只有当过驱动电压与它可比时，速度饱和才显著。

### 第 1 步 — 含速度饱和的线性区电流

在缓变沟道近似下，单位长度沟道电荷为 $Q(y)=WC_{ox}[V_{GS}-V(y)-V_t]$，$I_D=Q(y)v_d(y)$，且 $\mathcal E=dV/dy$。代入 $v_d=\mu_n\mathcal E/(1+\mathcal E/\mathcal E_c)$ 并整理：

$$
I_D\left(1+\frac1{\mathcal E_c}\frac{dV}{dy}\right)=\mu_nC_{ox}W\,[V_{ov}-V]\frac{dV}{dy}.
$$

从 $y=0$（$V=0$）积分到 $y=L$（$V=V_{DS}$）：

$$
I_D=\frac{\dfrac{k'}2\dfrac WL\left(2V_{ov}V_{DS}-V_{DS}^2\right)}{1+V_{DS}/(\mathcal E_cL)} .
$$

分子就是平方律线性区电流；速度饱和使它除以 $1+V_{DS}/(\mathcal E_cL)$。

### 第 2 步 — 电流停止上升的位置

令 $dI_D/dV_{DS}=0$，得 $V_{DS}^2/(\mathcal E_cL)+2V_{DS}-2V_{ov}=0$，故

$$
V_{DS(act)}=\mathcal E_cL\left(\sqrt{1+\frac{2V_{ov}}{\mathcal E_cL}}-1\right),\qquad
I_{D(act)}=\frac{k'}2\frac WL\,V_{DS(act)}^2 ,
$$

第二式由把该二次方程代回线性区表达式得到。$V_{DS}$ 更大时电流保持此值（$\lambda=0$）。若无速度饱和（$\mathcal E_c\to\infty$），则 $V_{DS(act)}\to V_{ov}$，$I_{D(act)}\to\tfrac12k'(W/L)V_{ov}^2$。

### 第 3 步 — 数值结果

此处 $W/L=10$，故 $\tfrac12k'(W/L)=0.97\ \mathrm{mA/V^2}$，且 $\mathcal E_cL=(1.5\times10^6\ \mathrm{V/m})(1\ \mu\mathrm m)=1.5$ V。$V_{GS}=3$ V（$V_{ov}=2.4$ V）时：

$$
V_{DS(act)}=(1.5\ \mathrm V)\left(\sqrt{1+\frac{4.8}{1.5}}-1\right)=1.57\ \mathrm V,\qquad
I_{D(act)}=(0.97\ \mathrm{mA/V^2})(1.57\ \mathrm V)^2=2.40\ \mathrm{mA}.
$$

| $V_{GS}$ (V) | $V_{ov}$ (V) | 平方律：$V_{DS}\ge V_{ov}$ 时 $I_D$ (mA) | 含速度饱和：$V_{DS(act)}$ (V) | 含速度饱和：$I_D$ (mA) | 比值 |
|---|---|---|---|---|---|
| 1 | 0.4 | 0.155 | 0.357 | 0.124 | 0.80 |
| 2 | 1.4 | 1.90 | 1.04 | 1.05 | 0.55 |
| 3 | 2.4 | 5.59 | 1.57 | 2.40 | 0.43 |

$V_{GS}=3$ V 时线性区内的降低已经明显：$V_{DS}=0.25$ V 处为 0.95 mA 对 1.10 mA，1 V 处为 2.21 mA 对 3.69 mA。

### 第 4 步 — 曲线

![10/1 器件在 VGS = 1、2、3 V 时含与不含速度饱和的 ID–VDS 曲线，含速度饱和的电流明显较低](/q/G024/solution-curves.zh.svg)

$\mathcal E_cL=1.5$ V 与过驱动电压相当，速度饱和使电流显著降低：$V_{GS}$ = 1、2、3 V 时分别降低 20%、45% 和 57%，曲线也在较低的 $V_{DS}$ 处变平（0.36、1.04 和 1.57 V，而不是 0.4、1.4 和 2.4 V）。含速度饱和的电流间隔也更均匀，比平方律更接近与 $V_{ov}$ 成线性关系。在 $L=1\ \mu$m 时，速度饱和是一个强效应。

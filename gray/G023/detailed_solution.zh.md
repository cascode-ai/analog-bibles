# 详细步骤 - G023

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

此处 $W/L=10$，故 $\tfrac12k'(W/L)=0.97\ \mathrm{mA/V^2}$，且 $\mathcal E_cL=(1.5\times10^6\ \mathrm{V/m})(10\ \mu\mathrm m)=15$ V。$V_{GS}=3$ V（$V_{ov}=2.4$ V）时：

$$
V_{DS(act)}=(15\ \mathrm V)\left(\sqrt{1+\frac{4.8}{15}}-1\right)=2.23\ \mathrm V,\qquad
I_{D(act)}=(0.97\ \mathrm{mA/V^2})(2.23\ \mathrm V)^2=4.84\ \mathrm{mA}.
$$

| $V_{GS}$ (V) | $V_{ov}$ (V) | 平方律：$V_{DS}\ge V_{ov}$ 时 $I_D$ (mA) | 含速度饱和：$V_{DS(act)}$ (V) | 含速度饱和：$I_D$ (mA) | 比值 |
|---|---|---|---|---|---|
| 1 | 0.4 | 0.155 | 0.395 | 0.151 | 0.97 |
| 2 | 1.4 | 1.90 | 1.34 | 1.74 | 0.92 |
| 3 | 2.4 | 5.59 | 2.23 | 4.84 | 0.87 |

$V_{GS}=3$ V 时线性区内的降低较小：$V_{DS}=0.25$ V 处为 1.09 mA 对 1.10 mA，1 V 处为 3.46 mA 对 3.69 mA，2 V 处为 4.79 mA 对 5.43 mA。

### 第 4 步 — 曲线

![100/10 器件在 VGS = 1、2、3 V 时含与不含速度饱和的 ID–VDS 曲线，两组曲线几乎重合](/q/G023/solution-curves.zh.svg)

由于 $\mathcal E_cL=15$ V 远大于所有过驱动电压，横向电场始终远低于 $\mathcal E_c$，两组曲线几乎重合。差别随 $V_{ov}$ 和 $V_{DS}$ 增大，从 $V_{GS}=1$ V 时的 3% 增至 3 V 时的 13%，含速度饱和的曲线在稍低的 $V_{DS}$ 处变平。对于 10 µm 沟道，平方律模型已足够。

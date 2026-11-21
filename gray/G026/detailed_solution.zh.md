# 详细步骤 - G026

用两种方法计算漏极电流：一是由计入速度饱和的缓变沟道结果直接计算，二是对 [图 1] 的模型，联立求解平方律晶体管及其源极电阻。把两者都用 $\mathcal E_cL$ 表示后，它们化为同一个二次方程，因此对于这一速度-电场关系，该模型是精确的。模型不包含内部晶体管的体效应，计算中忽略之，$\lambda$ 也取零。

### 第 1 步 — 参数

$$
K=\frac{k'}2\frac WL=\frac{194\ \mu\mathrm{A/V^2}}2\cdot\frac{2}{0.5}=388\ \mu\mathrm{A/V^2},\qquad
\mathcal E_cL=(1.5\times10^6\ \mathrm{V/m})(0.5\ \mu\mathrm m)=0.75\ \mathrm V,
$$
$$
R_{SX}=\frac1{\mathcal E_ck'W}=\frac1{(1.5\times10^6\ \mathrm{V/m})(194\ \mu\mathrm{A/V^2})(2\ \mu\mathrm m)}=1.72\ \mathrm{k\Omega}=\frac1{2K\mathcal E_cL}.
$$

### 第 2 步 — 由缓变沟道方程直接计算

沿沟道对 $I_D=WC_{ox}[V_{ov}-V(y)]\,v_d$ 积分，并代入 $v_d=\mu_n\mathcal E/(1+\mathcal E/\mathcal E_c)$，得线性区电流

$$
I_D=\frac{K\left(2V_{ov}V_{DS}-V_{DS}^2\right)}{1+V_{DS}/(\mathcal E_cL)} .
$$

它在 $dI_D/dV_{DS}=0$ 处取最大值，即方程 $V_{DS}^2/(\mathcal E_cL)+2V_{DS}-2V_{ov}=0$ 的根处：

$$
V_{DS(act)}=\mathcal E_cL\left(\sqrt{1+\frac{2V_{ov}}{\mathcal E_cL}}-1\right),\qquad I_D=K\,V_{DS(act)}^2 .
$$

最大值出现在 $V_{GS}=3$ V，此时 $V_{DS(act)}=1.29$ V，小于 $V_{DS}=3$ V，因此整个扫描范围内器件都处于饱和区。$V_{GS}\le V_t=0.6$ V 时 $I_D=0$。

### 第 3 步 — 求解模型电路

设内部平方律器件的过驱动电压为 $V'_{ov}=V'_{GS}-V_t$，则

$$
I_D=K{V'_{ov}}^2,\qquad V_{GS}=V'_{GS}+I_DR_{SX}\ \Rightarrow\ V_{ov}=V'_{ov}+I_DR_{SX}.
$$

由于 $R_{SX}=1/(2K\mathcal E_cL)$，电阻压降为 $I_DR_{SX}={V'_{ov}}^2/(2\mathcal E_cL)$，故

$$
V_{ov}=V'_{ov}+\frac{{V'_{ov}}^2}{2\mathcal E_cL}
\quad\Longleftrightarrow\quad
\frac{{V'_{ov}}^2}{\mathcal E_cL}+2V'_{ov}-2V_{ov}=0 .
$$

这与第 2 步是同一个二次方程，因此 $V'_{ov}=V_{DS(act)}$，模型电流 $K{V'_{ov}}^2$ 与直接计算结果完全相等。内部器件处于饱和区，因为其漏源电压 $3\ \mathrm V-I_DR_{SX}\ge1.89$ V 大于 $V'_{ov}\le1.29$ V。

### 第 4 步 — 比较与精度范围

$V_{GS}=2$ V（$V_{ov}=1.4$ V）时：$V'_{ov}=(0.75\ \mathrm V)\left(\sqrt{1+2.8/0.75}-1\right)=0.882$ V，$I_D=(388\ \mu\mathrm{A/V^2})(0.882\ \mathrm V)^2=0.302$ mA；验算：$0.882\ \mathrm V+(0.302\ \mathrm{mA})(1.72\ \mathrm{k\Omega})=1.40$ V。

| $V_{GS}$ (V) | 1 | 1.5 | 2 | 2.5 | 3 |
|---|---|---|---|---|---|
| 直接计算，含速度饱和 (mA) | 0.0418 | 0.155 | 0.302 | 0.467 | 0.646 |
| [图 1] 模型 (mA) | 0.0418 | 0.155 | 0.302 | 0.467 | 0.646 |
| 平方律，无速度饱和 (mA) | 0.062 | 0.314 | 0.760 | 1.40 | 2.23 |
| 一阶近似 $KV_{ov}^2/(1+V_{ov}/\mathcal E_cL)$ (mA) | 0.0405 | 0.143 | 0.265 | 0.396 | 0.532 |

因此在 $V_{GS}$ 从 0 到 3 V 的整个范围内，模型与直接计算的偏差都在 10% 以内，实际上完全相等。有两种近似并不精确。略去 $(I_DR_{SX})^2$ 项得到最后一行的闭式解，它在 1.5 V 处偏低 8%，2 V 处偏低 12%，3 V 处偏低 18%，即只在 $V_{GS}\lesssim1.7$ V 时误差在 10% 以内。若像教材推导那样，把 $V_{DS}=V_{ov}$ 代入线性区表达式来取饱和区电流，而不是取其最大值，直接计算也会给出同一个闭式解；与之相比，模型在 2 V 处偏高 14%，3 V 处偏高 21%，只在 $V_{GS}\lesssim1.6$–1.7 V 时误差在 10% 以内。

# 详细步骤 - G055

用混合 π 模型写出增益，把 $g_m$、$r_\pi$ 和 $r_o$ 用 $I_C$ 表示，再对 $I_C$ 求增益幅值的最大值。增益是两部分的乘积：一是在大电流下变差的输入分压，二是跨导乘负载，其中两个因子相互制约。

### 第 1 步 — 增益表达式

$r_b=0$ 时，$R_S$ 和 $r_\pi$ 在基极构成分压器，集电极节点看到 $R_C\parallel r_o$：

$$
\frac{v_o}{v_i}=-\frac{r_\pi}{R_S+r_\pi}\,g_m\,(R_C\parallel r_o)=-\frac{\beta_0\,(R_C\parallel r_o)}{R_S+r_\pi},
$$

其中利用了 $g_mr_\pi=\beta_0$。代入 $g_m=I_C/V_T$、$r_\pi=\beta_0V_T/I_C$ 和 $r_o=V_A/I_C$：

$$
\frac{v_o}{v_i}=-\frac{\beta_0R_CV_AI_C}{(V_A+I_CR_C)(I_CR_S+\beta_0V_T)} .
$$

### 第 2 步 — 最优集电极电流

记 $|A_v|=\beta_0R_CV_A\,I_C/D$，其中

$$
D(I_C)=(V_A+I_CR_C)(I_CR_S+\beta_0V_T)=R_CR_SI_C^2+(V_AR_S+\beta_0V_TR_C)I_C+\beta_0V_TV_A .
$$

$d(I_C/D)/dI_C=0$ 要求 $D=I_CD'$，即 $R_CR_SI_C^2+(\ldots)I_C+\beta_0V_TV_A=2R_CR_SI_C^2+(\ldots)I_C$，故

$$
R_CR_SI_C^2=\beta_0V_TV_A\quad\Rightarrow\quad I_{C,\text{opt}}=\sqrt{\frac{\beta_0V_TV_A}{R_SR_C}} .
$$

在该电流下 $R_C/r_o=r_\pi/R_S$：输出端的负载效应与输入端的衰减达到平衡。

### 第 3 步 — 最优点的增益

代入 $I_{C,\text{opt}}$（$I_CR_C=\sqrt{\beta_0V_TV_AR_C/R_S}$，$I_CR_S=\sqrt{\beta_0V_TV_AR_S/R_C}$）并化简：

$$
\left|\frac{v_o}{v_i}\right|_{\max}=\frac{\beta_0V_AR_C}{\left(\sqrt{\beta_0V_TR_C}+\sqrt{V_AR_S}\right)^2}=\frac{V_A}{V_T}\,\frac{x^2}{(1+x)^2},\qquad x=\frac{I_{C,\text{opt}}R_C}{V_A}=\sqrt{\frac{\beta_0V_TR_C}{V_AR_S}} .
$$

增益为反相。它永远不超过本征增益 $V_A/V_T=g_mr_o$，只有在 $x\gg1$ 时才接近该值。

### 第 4 步 — 增益在两端下降的原因

- **$I_C$ 很小时**：$r_\pi\gg R_S$，$r_o\gg R_C$，故 $A_v\approx-g_mR_C=-I_CR_C/V_T$，与 $I_C$ 成正比，跨导太小。
- **$I_C$ 很大时**：$r_\pi=\beta_0V_T/I_C$ 远小于 $R_S$，只有 $r_\pi/(R_S+r_\pi)\propto1/I_C$ 的一部分 $v_i$ 到达基极；该级趋于电流增益极限 $-\beta_0(R_C\parallel r_o)/R_S$。同时 $r_o=V_A/I_C$ 降到 $R_C$ 以下，负载也按 $1/I_C$ 减小。两种效应都使增益下降。

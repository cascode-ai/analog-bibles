# 详细步骤 - G191

用测试电压 $v_x$ 驱动源极，栅极经 $R_S$ 接地，漏极和衬底处于交流地。求 $v_x$ 提供的电流 $i_x$，再把导纳 $Y_o=i_x/v_x$ 拆分为一个恒定电导加上一条串联 $R$–$L$ 支路。

### 第 1 步 — 栅源电压

忽略 $C_{gd}$、$C_{gb}$ 后，源极到栅极的唯一通路是 $C_{gs}$，它与 $R_S$ 构成分压器：

$$
v_g=v_x\frac{sC_{gs}R_S}{1+sC_{gs}R_S},\qquad
v_{gs}=v_g-v_x=-\frac{v_x}{1+sR_SC_{gs}} .
$$

衬底接交流地，故 $v_{bs}=-v_x$。

### 第 2 步 — 测试电流

从漏极流向源极的沟道电流为 $g_mv_{gs}+g_{mb}v_{bs}$，$C_{gs}$ 从栅极向源极节点输送 $sC_{gs}v_{gs}$。因此在源极列 KCL 得

$$
i_x=-(g_mv_{gs}+g_{mb}v_{bs})-sC_{gs}v_{gs}
=v_x\left[g_{mb}+\frac{g_m+sC_{gs}}{1+sR_SC_{gs}}\right].
$$

### 第 3 步 — 拆分为等效电路

将分式拆开，$\dfrac{g_m+sC_{gs}}{1+sR_SC_{gs}}=\dfrac1{R_S}+\dfrac{g_m-1/R_S}{1+sR_SC_{gs}}$，故

$$
Y_o=\left(g_{mb}+\frac1{R_S}\right)+\frac{1}{\dfrac{1}{g_m-1/R_S}+s\,\dfrac{R_SC_{gs}}{g_m-1/R_S}} .
$$

第一项是电导；第二项是电阻与电感的串联。与 $R_2\parallel(R_1+sL)$ 对比：

$$
R_2=R_S\parallel\frac1{g_{mb}},\qquad
R_1=\frac1{g_m-1/R_S}\approx\frac1{g_m},\qquad
L=\frac{R_SC_{gs}}{g_m-1/R_S}\approx\frac{R_SC_{gs}}{g_m},
$$

其中近似利用了 $R_S\gg1/g_m$。该条件使 $R_1$ 和 $L$ 为正，因此该支路是真实的电感，输出阻抗随频率升高。

### 第 4 步 — 校验

$s=0$ 时，$Y_o=g_{mb}+1/R_S+g_m-1/R_S=g_m+g_{mb}$，故 $z_o(0)=R_1\parallel R_2=1/(g_m+g_{mb})$，即熟知的跟随器输出电阻。当 $s\to\infty$ 时电感支路开路，$z_o(\infty)=R_2=R_S\parallel(1/g_{mb})$：此时 $C_{gs}$ 把栅极与源极短接，源极向回看到 $R_S$，而受输出电压本身控制的 $g_{mb}$ 受控源相当于一个对地电阻 $1/g_{mb}$。因此体效应只改变 $R_2$。

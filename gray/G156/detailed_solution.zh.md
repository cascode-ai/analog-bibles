# 详细步骤 - G156

求同一电路的三个低频小信号增益，每次只让一个源起作用：从栅极输入、从 $v_{dd}$、从 $v_{ss}$。晶体管用饱和区小信号模型（衬底接源极，无 $g_{mb}$）：漏极到源极的电流 $g_mv_{gs}$ 与 $r_o$ 并联。关键区别在于：$v_{dd}$ 只经无源分压器 $R$–$r_o$ 到达输出，而 $v_{ss}$ 移动源极，因而与输入一样改变 $v_{gs}$。

### 第 1 步 — 信号增益

$v_{dd}=v_{ss}=0$ 时源极交流接地，$v_{gs}=v_i$；输出端 $R$ 与 $r_o$ 并联：

$$
A_{dm}=\frac{v_o}{v_i}=-g_m\left(R\parallel r_o\right).
$$

### 第 2 步 — 从 $v_{dd}$ 的增益

$v_i=v_{ss}=0$ 时栅极和源极都交流接地，$v_{gs}=0$，受控源不起作用。$R$（接 $v_{dd}$）与 $r_o$（接地）构成分压器：

$$
A^+=\frac{v_o}{v_{dd}}=\frac{r_o}{R+r_o},\qquad
PSRR^+=\frac{A_{dm}}{A^+}=\frac{-g_m\dfrac{Rr_o}{R+r_o}}{\dfrac{r_o}{R+r_o}}=-g_mR .
$$

### 第 3 步 — 从 $v_{ss}$ 的增益

$v_i=v_{dd}=0$ 时栅极接地，源极随 $v_{ss}$ 变化，$v_{gs}=-v_{ss}$。对输出节点列 KCL，把经 $R$、受控源和 $r_o$ 流出节点的电流相加：

$$
\frac{v_o}{R}+g_m\left(-v_{ss}\right)+\frac{v_o-v_{ss}}{r_o}=0
\ \Rightarrow\
A^-=\frac{v_o}{v_{ss}}=\left(1+g_mr_o\right)\frac{R}{R+r_o}.
$$

当 $g_mr_o\gg1$ 时，它约为 $g_m(R\parallel r_o)$，与信号增益一样大。因此

$$
PSRR^-=\frac{A_{dm}}{A^-}=\frac{-g_m\dfrac{Rr_o}{R+r_o}}{\left(1+g_mr_o\right)\dfrac{R}{R+r_o}}=-\frac{g_mr_o}{1+g_mr_o}\approx-1 .
$$

### 第 4 步 — 解释

- $|PSRR^+|=g_mR$，当 $r_o\gg R$ 时约等于放大器自身的增益大小：$V_{DD}$ 上的纹波以约为单位增益到达输出，而信号被放大 $g_mR$ 倍。
- $|PSRR^-|\approx1$（0 dB）：完全没有抑制。$V_{SS}$ 的变化就是符号相反的 $v_{gs}$ 变化，晶体管像放大输入一样放大它。

$r_o\to\infty$ 时：$A^+=1$，$PSRR^+=-g_mR$；$A^-=g_mR$，$|PSRR^-|=1$。

# 详细步骤 - A168

重复串联电阻的分析，但让饱和的负载管 M3 带上 $(1+\lambda v_{SD})$ 因子。M1 和 M2 仍处于深度非饱和区，线性模型中没有 λ 项，而且它们很小的漏源电压会使任何此类因子都 ≈ 1，因此沟道长度调制只通过 M3 设定的电流起作用。

### 第 1 步 — 计入沟道长度调制的串联电流

M3 的源极接 $V_{DD}$，漏极接 $v_{OUT}$，故 $v_{SD3}=V_{DD}-v_{OUT}$，饱和区中

$$
I=\frac{\beta_3}2(V_{DD}-V_{GG3}-|V_{T3}|)^2\left[1+\lambda_3(V_{DD}-v_{OUT})\right].
$$

M1 和 M2 流过同一电流。

### 第 2 步 — 与前面相同的输出电压关系

线性化的非饱和区电流不变，$I\cong\beta_1(V_{DD}-V_{T1})v_{DS1}$，$I\cong\beta_2(V_{GG2}-V_{T2})v_{DS2}$，因此

$$
v_{OUT}=v_{DS1}+v_{DS2}=I\left[\frac1{\beta_1(V_{DD}-V_{T1})}+\frac1{\beta_2(V_{GG2}-V_{T2})}\right].
$$

取 $\beta_1=\beta_2$ 并代入第 1 步的 $I$：

$$
v_{OUT}(\min)=\frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\frac1{V_{GG2}-V_{T2}}+\frac1{V_{DD}-V_{T1}}\right)\left[1+\lambda_3\bigl(V_{DD}-v_{OUT}(\min)\bigr)\right].
$$

### 第 3 步 — 求解 $v_{OUT}(\min)$

记 $A$ 为 λ = 0 时的结果，$A=\frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\frac1{V_{GG2}-V_{T2}}+\frac1{V_{DD}-V_{T1}}\right)$。方程 $v_{OUT}=A[1+\lambda_3(V_{DD}-v_{OUT})]$ 对 $v_{OUT}$ 是线性的：

$$
v_{OUT}(\min)=\frac{A(1+\lambda_3V_{DD})}{1+\lambda_3A}\approx A(1+\lambda_3V_{DD}),
$$

近似成立是因为 $v_{OUT}(\min)=A$ 很小，故 $\lambda_3A\ll1$，几乎全部 $V_{DD}$ 都加在 M3 上。

### 第 4 步 — 影响

沟道长度调制使 M3 的电流增大到 $1+\lambda_3V_{DD}$ 倍，$v_{OUT}(\min)$ 也随之增大同样的倍数。例如 $\lambda_3=0.05\ \mathrm{V^{-1}}$、$V_{DD}=5$ V 时，最低输出电压增大到 1.25 倍。

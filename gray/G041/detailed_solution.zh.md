# 详细步骤 - G041

有源区平方律上的两个点确定了其中两个未知量。取两个电流之比消去 $\mu_nC_{ox}(W/L)$，得到只含 $V_t$ 的方程；再由任一电流求出跨导参数。

### 第 1 步 — 模型

迁移率恒定时，有源区中

$$
I_D=\frac12\mu_nC_{ox}\frac WL(V_{GS}-V_t)^2 .
$$

若两点在相同的 $V_{DS}$ 下测得，沟道长度调制因子在比值中相消。

### 第 2 步 — 阈值电压

两次测量相除并开方：

$$
\sqrt{\frac{100\ \mu\mathrm A}{10\ \mu\mathrm A}}=\frac{1.5\ \mathrm V-V_t}{0.8\ \mathrm V-V_t}
\quad\Rightarrow\quad 3.162(0.8-V_t)=1.5-V_t ,
$$

$$
V_t=\frac{3.162(0.8)-1.5}{3.162-1}\ \mathrm V=\frac{2.530-1.5}{2.162}\ \mathrm V=0.476\ \mathrm V .
$$

取正平方根，因为器件导通时两个过驱动电压都必须为正。

### 第 3 步 — 跨导参数

由 100 µA 的点，$V_{ov}=1.5-0.476=1.024$ V：

$$
\mu_nC_{ox}\frac WL=\frac{2I_D}{V_{ov}^2}=\frac{2(100\ \mu\mathrm A)}{(1.024\ \mathrm V)^2}=191\ \mu\mathrm{A/V^2}.
$$

用另一点验算：$\tfrac12(191\ \mu\mathrm{A/V^2})(0.8-0.476)^2\ \mathrm{V^2}=\tfrac12(191)(0.324)^2\ \mu\mathrm A=10\ \mu$A。

结果：$V_t\approx0.476$ V，$\mu_nC_{ox}(W/L)\approx191\ \mu\mathrm{A/V^2}$。

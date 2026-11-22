# 详细步骤 - G060

先用平方律（square law）模型求出给定偏置下的 $g_m$ 和 $r_o$，再在共栅小信号电路的源极列 KCL；由于 $r_o$ 把负载耦合回输入端，必须保留漏极负载。

### 第 1 步 — 小信号参数

在有源区（饱和区），$I_D=\tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$，因此

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(200\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm A)}=2\ \mathrm{mA/V},
$$

$$
r_o=\frac1{\lambda I_D}=\frac1{(0.01\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=1\ \mathrm{M\Omega},\qquad g_mr_o=2000 .
$$

忽略体效应，因此没有 $g_{mb}$ 项。

### 第 2 步 — 有漏极负载时的输入电阻

栅极为交流地，故 $v_{gs}=-v_i$，其中 $v_i$ 为源极电压。加 $v_i$，令 $i_i$ 流入源极。在源极与漏极之间它分成两条支路：受控源 $g_mv_{gs}$（方向由漏极指向源极），在 $v_{gs}=-v_i$ 时它从源极向漏极输送 $g_mv_i$；另一条是 $r_o$：

$$
i_i=g_mv_i+\frac{v_i-v_o}{r_o}.
$$

同一电流经负载流出漏极节点，故 $v_o=i_iR_D$。代入得

$$
i_i\left(1+\frac{R_D}{r_o}\right)=v_i\left(g_m+\frac1{r_o}\right)
\quad\Rightarrow\quad
R_i=\frac{v_i}{i_i}=\frac{r_o+R_D}{1+g_mr_o}.
$$

$R_D\ll r_o$ 时它约为 $1/g_m$；$R_D$ 与 $r_o$ 相当时，$v_o$ 的上升减小了 $r_o$ 中的电流，使 $R_i$ 增大。

### 第 3 步 — $R_D=10\ \mathrm{k\Omega}$

$$
R_i=\frac{1\ \mathrm{M\Omega}+10\ \mathrm{k\Omega}}{1+2000}=\frac{1.01\ \mathrm{M\Omega}}{2001}=504.7\ \Omega ,
$$

接近 $1/g_m=500\ \Omega$。

### 第 4 步 — $R_D=1\ \mathrm{M\Omega}$ 并联电流源

理想 100 µA 电流源提供直流漏极电流，小信号电阻为无穷大，因此小信号负载仍为 $R_D=1\ \mathrm{M\Omega}$：

$$
R_i=\frac{1\ \mathrm{M\Omega}+1\ \mathrm{M\Omega}}{2001}=999.5\ \Omega\approx1.0\ \mathrm{k\Omega}.
$$

由于漏极负载此时等于 $r_o$，输入电阻约增大一倍，达到约 $2/g_m$；若 $R_D$ 继续增大到超过 $r_o$，它还会进一步增大，趋向 $R_D/(g_mr_o)$。

# 详细步骤 - G277

以受控源 $g_mv_{be}$ 为参考元件。在输入电流源开路时求其回归比，再求渐近增益和直接馈通，然后用布莱克曼公式求端口电阻。由于 $r_\pi$ 把基极接到地，即使输入开路 $R_F$ 中也有电流，因此在求回归比时它构成集电极负载。

### 第 1 步 — 小信号参数

$g_m=I_C/V_T=38.46$ mA/V，$r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$，$r_o=V_A/I_C=100\ \mathrm{k\Omega}$；记 $R'_L=R_L\parallel r_o=1961\ \Omega$。

### 第 2 步 — 回归比

令 $i_i=0$，用从集电极节点抽出的测试电流 $i_t$ 代替 $g_mv_{be}$。该节点看到 $R'_L$ 与对地支路 $R_F+r_\pi$ 的并联，$r_\pi$ 把集电极电压的一部分送回基极：

$$
R_c=R'_L\parallel(R_F+r_\pi)=1961\ \Omega\parallel7.2\ \mathrm{k\Omega}=1541\ \Omega,\qquad
\frac{v_{be}}{v_c}=\frac{r_\pi}{r_\pi+R_F}=0.722 .
$$

由 $v_c=-i_tR_c$，返回电流为 $g_mv_{be}=-g_m(0.722)R_c\,i_t$：

$$
\mathcal R=g_m R_c\,(0.722)=(38.46\ \mathrm{mA/V})(1541\ \Omega)(0.722)=42.8 .
$$

### 第 3 步 — 跨阻

当 $g_m\to\infty$ 时 $v_{be}\to0$；$r_\pi$ 中没有电流，$i_i$ 全部流过 $R_F$，$A_\infty=-R_F=-2\ \mathrm{k\Omega}$。

当 $g_m=0$ 时，$i_i$ 看到 $r_\pi\parallel(R_F+R'_L)=2248\ \Omega$，$R_F$ 与 $R'_L$ 把该电压分压到输出端：

$$
d=2248\ \Omega\cdot\frac{1961\ \Omega}{2\ \mathrm{k\Omega}+1961\ \Omega}=1113\ \Omega .
$$

$$
\frac{v_o}{i_i}=(-2000\ \Omega)\frac{42.8}{43.8}+\frac{1113\ \Omega}{43.8}=-1954\ \Omega+25.4\ \Omega=-1929\ \Omega\approx-1.93\ \mathrm{k\Omega}.
$$

馈通项约占结果的 1.3%。

### 第 4 步 — 输入电阻与输出电阻（布莱克曼公式）

两种情况下端口短路都会使 $v_{be}=0$（输入）或 $v_c=0$（输出），故 $\mathcal R(\text{short})=0$；端口开路时 $\mathcal R(\text{open})=42.8$。

$$
R_{in}=\frac{r_\pi\parallel(R_F+R'_L)}{1+\mathcal R}=\frac{2248\ \Omega}{43.8}=51.3\ \Omega,\qquad
R_{out}=\frac{R'_L\parallel(R_F+r_\pi)}{1+\mathcal R}=\frac{1541\ \Omega}{43.8}=35.2\ \Omega .
$$

这些结果是精确的（与直接节点分析一致）；二端口方法给出的值略有不同（50.7 Ω、34.7 Ω），因为它忽略了经 $R_F$ 的前馈。

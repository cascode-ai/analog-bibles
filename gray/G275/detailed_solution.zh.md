# 详细步骤 - G275

以受控源 $g_mv_{gs}$ 为参考元件。在输入电流源置零（开路）时求其回归比，再求渐近增益 $A_\infty$（$g_m\to\infty$）和馈通 $d$（$g_m=0$），并用布莱克曼公式求两个端口的电阻。由于栅极不取电流且 $r_o=\infty$，每个量都有简单的闭式表达，结果都是精确的。

### 第 1 步 — 跨导

$$
g_m=\sqrt{2k'(W/L)I_D}=\sqrt{2\left(180\ \mu\mathrm{A/V^2}\right)(100)(0.5\ \mathrm{mA})}=4.243\ \mathrm{mA/V}.
$$

### 第 2 步 — 回归比

$i_i=0$ 时栅极节点只与 $R_F$ 相连，因此 $R_F$ 中没有电流：$v_g=v_d$。用从漏极节点抽出的测试电流 $i_t$ 代替 $g_mv_{gs}$，它只流过 $R_L$，故 $v_d=-i_tR_L$，$v_{gs}=v_d$。返回电流为 $g_mv_{gs}=-g_mR_L\,i_t$：

$$
\mathcal R=g_mR_L=(4.243\ \mathrm{mA/V})(15\ \mathrm{k\Omega})=63.6 .
$$

它大于二端口环路增益（55.3），因为输入开路时 $R_F$ 不构成漏极负载。

### 第 3 步 — 渐近增益、馈通与跨阻

当 $g_m\to\infty$ 时 $v_{gs}\to0$，栅极为虚地，$i_i$ 全部流过 $R_F$：$A_\infty=-R_F=-100\ \mathrm{k\Omega}$。

当 $g_m=0$ 时，$i_i$ 经 $R_F$ 流入 $R_L$，故 $d=v_o/i_i=+R_L=15\ \mathrm{k\Omega}$。

$$
\frac{v_o}{i_i}=(-100\ \mathrm{k\Omega})\frac{63.64}{64.64}+\frac{15\ \mathrm{k\Omega}}{64.64}=-98{,}453\ \Omega+232\ \Omega=-98.2\ \mathrm{k\Omega},
$$

与精确闭式 $R_L(1-g_mR_F)/(1+g_mR_L)$ 相等。

### 第 4 步 — 输入电阻与输出电阻（布莱克曼公式）

- 输入端：$g_m=0$ 时，$i_i$ 看到 $R_F+R_L=115\ \mathrm{k\Omega}$。输入短路迫使 $v_{gs}=0$，故 $\mathcal R(\text{short})=0$；输入开路时 $\mathcal R(\text{open})=63.6$。

$$
R_{in}=\frac{115\ \mathrm{k\Omega}}{1+63.64}=1.78\ \mathrm{k\Omega}.
$$

- 输出端：$g_m=0$ 时输出端看到 $R_L$（$R_F$ 只通向开路的栅极）。输出短路使 $v_g=v_d=0$，故 $\mathcal R(\text{short})=0$；否则 $\mathcal R=63.6$。

$$
R_{out}=\frac{15\ \mathrm{k\Omega}}{1+63.64}=232\ \Omega .
$$

四个结果都与直接节点分析一致；回归比方法计入了经 $R_F$ 的前馈（即 $d$ 项），而二端口方法忽略了它。

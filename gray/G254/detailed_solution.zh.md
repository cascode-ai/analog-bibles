# 详细步骤 - G254

1 kΩ 源电阻 $R_S$ 与输入节点并联，会分走大部分反馈电流，从而减小环路增益。把 $R_S$ 计入基本放大器的输入端，重复二端口电压并联分析；计入负载后的放大器输出电阻不变，因此只有 $1+T$ 发生变化。

### 第 1 步 — 器件参数与各级增益

由平方律和 $\lambda$：$g_m=\sqrt{2k'(W/L)I_D}=3.464$ mA/V，$r_o=1/(\lambda I_D)=50\ \mathrm{k\Omega}$。反馈电阻 $R_F$ 作为输出端负载（来自 $y_{22f}=1/R_F$）时：

| 级 | 漏极负载 | 增益 |
|---|---|---|
| $M_1$、$M_2$ | $5\ \mathrm{k\Omega}\parallel50\ \mathrm{k\Omega}=4545\ \Omega$ | $-g_m(4545\ \Omega)=-15.75$ |
| $M_3$ | $5\ \mathrm{k\Omega}\parallel50\ \mathrm{k\Omega}\parallel10\ \mathrm{k\Omega}=3125\ \Omega$ | $-g_m(3125\ \Omega)=-10.83$ |

### 第 2 步 — 计入源电阻的环路增益

在输入端，负载项 $y_{11f}$ 使 $R_F$ 与 $R_S$ 并联，因此流入输入节点的电流 $i$ 产生

$$
v_{g1}=i\,(R_S\parallel R_F)=i\,(1\ \mathrm{k\Omega}\parallel10\ \mathrm{k\Omega})=(909\ \Omega)\,i .
$$

$$
a=(909\ \Omega)(-15.75)^2(-10.83)=-2.44\ \mathrm{M\Omega},\qquad
T=af=(-2.44\ \mathrm{M\Omega})\left(-\frac1{10\ \mathrm{k\Omega}}\right)=244 .
$$

用理想电流源驱动时输入电阻为 $R_F=10\ \mathrm{k\Omega}$，$T=2684$；1 kΩ 源电阻使 $T$ 缩小 11 倍。

### 第 3 步 — 输出电阻

计入负载的基本放大器输出电阻不变，$z_{oa}=5\ \mathrm{k\Omega}\parallel r_o\parallel R_F=3125\ \Omega$，并联采样使其除以 $1+T$：

$$
Z_{out}=\frac{3125\ \Omega}{1+244}=12.8\ \Omega .
$$

由于环路增益减小约十一倍，输出电阻由 1.16 Ω（理想电流源驱动）升高到 12.8 Ω。

用 $M_1$ 受控源的回归比验算：在 $g_{m1}$ 处断开环路，返回的栅极电压给出 $\mathcal R=251$，且 $R_{out}(g_{m1}{=}0)=4545\ \Omega\parallel(R_F+R_S)=3216\ \Omega$；由布莱克曼公式（输出短路时回归为零，比值为 $1/(1+\mathcal R)$）得 $3216/252=12.8\ \Omega$，与直接节点分析一致。

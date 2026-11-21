# 详细步骤 - G228

对两个电路都使用零值时间常数法：对每个电容，求其余电容全部开路、独立源置零时它看到的电阻，把各乘积 $R_{j0}C_j$ 相加得到 $T_0$，取 $f_{-3\mathrm{dB}}\approx1/(2\pi T_0)$。比较的关键在于 $C_{gd1}$ 看到的电阻。

### 第 1 步 — 器件参数

所有器件都在饱和区工作，电流 0.5 mA，$W/L=100/1.6=62.5$。由平方律，$g_m=\sqrt{2k_n'(W/L)I_D}$：

$$
g_m=\sqrt{2\left(60\ \mu\mathrm{A/V^2}\right)(62.5)(0.5\ \mathrm{mA})}=1.936\ \mathrm{mA/V},\qquad \frac1{g_m}=516\ \Omega .
$$

$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

两级的低频增益相同，均为 $-g_mR_L=-38.7$，因为 $\lambda=0$ 时共栅管把信号电流原样传递。

### 第 2 步 — 共源级

- $C_{gs}$ 看到信号源电阻：$R_{gs0}=R_S=10\ \mathrm{k\Omega}$。
- $C_{gd}$：从栅极向漏极注入测试电流 $i_x$，栅极电位升高 $i_xR_S$；漏极电位下降 $i_xR_L$，受控源又使其再下降 $g_m(i_xR_S)R_L$。因此

$$
R_{gd0}=R_S+R_L+g_mR_LR_S=10\ \mathrm{k\Omega}+20\ \mathrm{k\Omega}+(1.936\ \mathrm{mA/V})(20\ \mathrm{k\Omega})(10\ \mathrm{k\Omega})=417\ \mathrm{k\Omega}.
$$

$$
T_0=(10\ \mathrm{k\Omega})(74.7\ \mathrm{fF})+(417\ \mathrm{k\Omega})(14\ \mathrm{fF})=0.747\ \mathrm{ns}+5.84\ \mathrm{ns}=6.59\ \mathrm{ns},
\qquad f_{-3\mathrm{dB}}\approx\frac1{2\pi T_0}=24.2\ \mathrm{MHz}.
$$

密勒项（$g_mR_L=38.7$ 倍的 $R_S$）使 $C_{gd}$ 占主导。

### 第 3 步 — 共源共栅级

此时 $M_1$ 的漏极就是 $M_2$ 的源极，记为节点 $x$。所有电容开路时 $v_{gs1}=0$（$R_S$ 中无电流），从 $M_2$ 源极看进去的电阻（栅极接地，$\lambda=\gamma=0$）为 $R_x=1/g_{m2}=516\ \Omega$。

- $C_{gs1}$：与前相同，为 $R_S=10\ \mathrm{k\Omega}$。
- $C_{gd1}$：用同样的测试电流方法，以 $R_x$ 代替 $R_L$：

$$
R_{gd1,0}=R_S+R_x+g_{m1}R_xR_S=10\ \mathrm{k\Omega}+516\ \Omega+\frac{g_{m1}}{g_{m2}}(10\ \mathrm{k\Omega})=20.5\ \mathrm{k\Omega}.
$$

- $C_{gs2}$ 接在 $x$ 与交流地之间：$R_{gs2,0}=1/g_{m2}=516\ \Omega$。
- $C_{gd2}$ 接在输出与交流地之间；由于 $\lambda=0$，从 $M_2$ 漏极看进去的电阻为无穷大，因此它看到 $R_L=20\ \mathrm{k\Omega}$。

| 电容 | $C$ (fF) | $R_{j0}$ | $R_{j0}C_j$ (ns) |
|---|---|---|---|
| $C_{gs1}$ | 74.7 | 10 kΩ | 0.747 |
| $C_{gd1}$ | 14 | 20.5 kΩ | 0.287 |
| $C_{gs2}$ | 74.7 | 516 Ω | 0.039 |
| $C_{gd2}$ | 14 | 20 kΩ | 0.280 |
| 总和 $T_0$ | | | 1.35 |

$$
f_{-3\mathrm{dB}}\approx\frac1{2\pi(1.35\ \mathrm{ns})}=118\ \mathrm{MHz}.
$$

### 第 4 步 — 比较

在相同增益 −38.7 下，共源共栅级约快 $6.59/1.35\approx4.9$ 倍。从 $M_1$ 栅极到漏极的增益由 $-g_mR_L=-38.7$ 降为 $-g_{m1}/g_{m2}=-1$，因此 $C_{gd1}$ 的密勒倍增（Miller multiplication）消失，其时间常数由 5.84 ns 降到 0.287 ns。$C_{gd2}$ 仍看到 $R_L$，但由于 $M_2$ 栅极接地，它不被倍增。

精确求解电路得到：共源级 24.3 MHz，共源共栅级 144 MHz。对共源共栅级的估计偏保守，因为其各时间常数大小相近，极点分得不开。

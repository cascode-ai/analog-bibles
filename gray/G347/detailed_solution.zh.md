# 详细步骤 - G347

未旁路的发射极电阻构成串联反馈。从单个晶体管的等效输入噪声源出发，再加入 $R_E$ 的影响：它自身的热噪声，以及输入短路时输入电流噪声源在其上产生的电压。最后通过降低后的电压增益估算负载的贡献。

### 第 1 步 — 小信号参数与输入电阻

在 $I_C=0.5$ mA 时，

$$
g_m=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mS},\qquad
\frac{1}{2g_m}=26\ \Omega,\qquad
r_\pi=5.2\ \mathrm{k\Omega},\qquad I_B=5\ \mu\mathrm A,
$$

输入电阻为 $r_b+r_\pi+(\beta+1)R_E\approx0.1+5.2+101\ \mathrm{k\Omega}\approx106\ \mathrm{k\Omega}$，符合设计意图。

### 第 2 步 — 晶体管本身的噪声源

对于发射极接地的晶体管（暂不计很小的负载项），

$$
\frac{\overline{v_{ia}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_{ia}^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)\approx2qI_B .
$$

### 第 3 步 — 加入发射极电阻

把晶体管噪声源放在其基极处，$R_E$ 留在发射极，其热噪声电压 $\overline{v_{RE}^2}=4kTR_E\Delta f$ 与之串联。输入短路时，电流噪声源 $i_{ia}$ 从基极节点流出，并经 $R_E$ 返回（与 $r_\pi$ 以及基极处看到的大电阻 $\beta R_E$ 相比，这是低阻通路），在基极-发射极回路中产生电压 $i_{ia}R_E$。一个等于晶体管电压噪声源、$v_{RE}$ 与 $i_{ia}R_E$ 之和的源电压可以产生相同的输出。输入开路时，电流噪声源仍由输入端提供，因此保持不变：

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}+R_E\right)+2qI_BR_E^2,\qquad
\frac{\overline{i_i^2}}{\Delta f}\approx2qI_B .
$$

该电阻并不会把输入噪声电压除以 $1+g_mR_E$：反馈使信号增益和噪声增益同等降低，因此折算到输入的噪声只是增加了新的项。

### 第 4 步 — 数值

$$
\begin{aligned}
4kT\left(r_b+\frac{1}{2g_m}+R_E\right)&=(1.66\times10^{-20}\ \mathrm{V\cdot C})(100+26+1000)\ \Omega=1.87\times10^{-17}\ \mathrm{V^2/Hz},\\
2qI_BR_E^2&=2(1.6\times10^{-19}\ \mathrm C)(5\ \mu\mathrm A)(1\ \mathrm{k\Omega})^2=1.6\times10^{-18}\ \mathrm{V^2/Hz},\\
\frac{\overline{v_i^2}}{\Delta f}&\approx2.0\times10^{-17}\ \mathrm{V^2/Hz}\quad(\approx4.5\ \mathrm{nV/\sqrt{Hz}}),\\
\frac{\overline{i_i^2}}{\Delta f}&\approx2(1.6\times10^{-19}\ \mathrm C)(5\ \mu\mathrm A)=1.6\times10^{-24}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

$R_E$ 的热噪声是最大的单项，约占 $\overline{v_i^2}$ 的 80%。

### 第 5 步 — 负载贡献与精确验证

发射极负反馈把电压增益降到 $|A_v|\approx R_L/(R_E+1/g_m)=10\ \mathrm{k\Omega}/1.052\ \mathrm{k\Omega}=9.5$，因此 10 kΩ 负载噪声折算到输入为 $4kTR_L/A_v^2=4kT(111\ \Omega)=1.8\times10^{-18}$ V²/Hz，约增加 9%。计入后 $\overline{v_i^2}/\Delta f\approx2.2\times10^{-17}$ V²/Hz。在输入短路条件下计入全部噪声源精确求解小信号电路，得到 $2.27\times10^{-17}$ V²/Hz；剩余差别主要来自两个噪声源中集电极散粒噪声项之间的相关性。因此等效输入噪声电压约为 $2.0$–$2.3\times10^{-17}$ V²/Hz，约为无负反馈晶体管 $4kT(126\ \Omega)=2.1\times10^{-18}$ V²/Hz 的十倍，而噪声电流仍为基极散粒噪声。

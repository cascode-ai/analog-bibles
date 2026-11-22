# 详细步骤 - grsim-11-05

把每个噪声源看作独立的谱密度，各自经过自身的传递函数折算到输出端，再按功率相加。输入参考（input-referred）值等于同一频率下的输出总噪声除以从 $v_i$ 起的增益的平方。在 1 GHz 处 $R_S$–$C_{gs}$ 低通网络起作用：它滤除位于栅极的噪声源，但不影响漏极热噪声。最后用 ngspice 的 `.noise` 分析核对手算结果。

### 第 1 步 — 偏置点、增益与栅极电容

饱和区平方律 $I_D=\tfrac12k'(W/L)V_{ov}^2$ 给出

$$
V_{ov}=\sqrt{\frac{2I_D}{k'(W/L)}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(100)}}=0.1015\ \mathrm V,
\qquad g_m=\sqrt{2k'(W/L)I_D}=1.970\ \mathrm{mS}.
$$

栅极无电流，低频电压增益为 $|A_v|=g_mR_L=19.70$，故 $A_v^2=388.0$。唯一保留的电容为

$$
C_{gs}=\tfrac23WLC_{ox}=\tfrac23(100\ \mu\mathrm m^2)(4.31\ \mathrm{fF/\mu m^2})=0.2873\ \mathrm{pF}.
$$

SPICE 网表需要一个与 $v_i$ 串联的 $V_t+V_{ov}=0.7015$ V 栅极偏置，以及给 $R_L$ 供电的电源；二者都是交流地。

### 第 2 步 — 各噪声源的谱密度

取 $4kT=1.66\times10^{-20}$ V·C，四个噪声源为：

$$
\begin{aligned}
\overline{v_{RS}^2}/\Delta f&=4kTR_S=1.66\times10^{-15}\ \mathrm{V^2/Hz},\\
\overline{i_d^2}/\Delta f&=4kT\tfrac23g_m=2.180\times10^{-23}\ \mathrm{A^2/Hz}
\;\Rightarrow\;\frac{\overline{i_d^2}}{g_m^2\Delta f}=\frac{4kT\cdot\tfrac23}{g_m}=5.62\times10^{-18}\ \mathrm{V^2/Hz},\\
\overline{v_f^2}/\Delta f&=\frac{K_f}{WLC_{ox}f}=\frac{3\times10^{-24}\ \mathrm{F\,V^2}}{(100\ \mu\mathrm m^2)(4.31\ \mathrm{fF/\mu m^2})f}=\frac{6.96\times10^{-12}\ \mathrm{V^2}}{f},\\
\overline{v_{RL}^2}/\Delta f&=4kTR_L=1.66\times10^{-16}\ \mathrm{V^2/Hz}\ \text{(directly at the output)}.
\end{aligned}
$$

$R_L$ 的噪声折算到输入端为 $1.66\times10^{-16}/388=4.28\times10^{-19}$ V²/Hz。

### 第 3 步 — 到输出端的传递函数

$v_i$、$v_{RS}$ 和闪烁噪声源 $v_f$ 都与栅极串联，因此经由 $R_S$ 与 $C_{gs}$ 构成的分压网络到达栅极：

$$
H(j\omega)=\frac{1}{1+j\omega R_SC_{gs}},\qquad
f_p=\frac{1}{2\pi R_SC_{gs}}=\frac{1}{2\pi(100\ \mathrm{k\Omega})(0.2873\ \mathrm{pF})}=5.54\ \mathrm{MHz}.
$$

漏极热噪声电流直接流入 $R_L$，$R_L$ 自身的噪声本来就是输出电压，二者都不受滤波。由于 $C_{gd}=0$，输出节点没有极点。因此

$$
\frac{\overline{v_o^2}}{\Delta f}=|H|^2g_m^2R_L^2\left(4kTR_S+\frac{K_f}{WLC_{ox}f}\right)+4kT\tfrac23g_mR_L^2+4kTR_L,
\qquad
\frac{\overline{v_{i,eq}^2}}{\Delta f}=\frac{\overline{v_o^2}/\Delta f}{|H|^2g_m^2R_L^2}.
$$

在 10 Hz 和 100 kHz 处 $|H|^2\approx1$；在 1 GHz 处 $|H|^2=1/[1+(10^9/5.54\times10^6)^2]=3.07\times10^{-5}$。

### 第 4 步 — 10 Hz 与 100 kHz 的点频值

10 Hz 时闪烁噪声项为 $6.96\times10^{-13}$ V²/Hz，约为 $R_S$ 项的 400 倍，闪烁噪声占主导：

$$
\frac{\overline{v_{i,eq}^2}}{\Delta f}=6.96\times10^{-13}+1.66\times10^{-15}+5.6\times10^{-18}+4.3\times10^{-19}=6.98\times10^{-13}\ \mathrm{V^2/Hz},
$$

输出为 $388\times(6.98\times10^{-13}-4.3\times10^{-19})+1.66\times10^{-16}=2.71\times10^{-10}$ V²/Hz。

100 kHz 时闪烁噪声项降到 $6.96\times10^{-17}$ V²/Hz，$R_S$ 占主导：

$$
\frac{\overline{v_{i,eq}^2}}{\Delta f}=1.66\times10^{-15}+6.96\times10^{-17}+5.6\times10^{-18}+4.3\times10^{-19}=1.74\times10^{-15}\ \mathrm{V^2/Hz},
$$

输出为 $388\times1.74\times10^{-15}=6.73\times10^{-13}$ V²/Hz。

### 第 5 步 — 1 GHz 的点频值

远高于 $f_p$ 时，$C_{gs}$ 把与栅极串联的所有噪声源短路。各输出项为

$$
\begin{aligned}
\text{drain thermal: }&4kT\tfrac23g_mR_L^2=2.18\times10^{-15}\ \mathrm{V^2/Hz},\\
R_L:\ &1.66\times10^{-16}\ \mathrm{V^2/Hz},\\
R_S:\ &|H|^2(388)(1.66\times10^{-15})=1.98\times10^{-17}\ \mathrm{V^2/Hz},
\end{aligned}
$$

闪烁噪声可以忽略，故 $\overline{v_o^2}/\Delta f=2.37\times10^{-15}$ V²/Hz，以漏极热噪声为主。信号增益已降为 $|H|g_mR_L=\sqrt{3.07\times10^{-5}\cdot388}=0.109$，因此输入参考值升高到

$$
\frac{\overline{v_{i,eq}^2}}{\Delta f}=\frac{2.37\times10^{-15}}{0.109^2}=1.99\times10^{-13}\ \mathrm{V^2/Hz}.
$$

若忽略 $C_{gs}$，1 GHz 的结果将与去掉闪烁噪声项的 100 kHz 相同：输入 $1.67\times10^{-15}$ V²/Hz，输出 $6.46\times10^{-13}$ V²/Hz。

### 第 6 步 — SPICE 验证

网表采用 level-1 NMOS：$V_{TO}=0.6$ V，$K_P=194\ \mu$A/V²，$t_{ox}=80$ Å，无交叠电容和结电容（因此饱和区 $C_{gs}=\tfrac23WLC_{ox}$），$\lambda=0$，并设定温度使 $4kT=1.66\times10^{-20}$ V·C。经典 SPICE 的闪烁噪声项为 $\mathrm{KF}\,I_D^{\mathrm{AF}}/(C_{ox}L^2f)$；令其等于 $g_m^2K_f/(WLC_{ox}f)=2k'K_fI_D/(C_{ox}L^2f)$，得 AF $=1$，KF $=2k'K_f=1.16\times10^{-27}$。这里使用的 ngspice-46 level-1 模型在该项上额外乘了 $2K_P$（通过扫描 $W$、$L$、$t_{ox}$ 和 $K_P$ 验证），所以在这个仿真器中用 KF $=K_f=3\times10^{-24}$ 得到同样的物理结果。

```spice
* grsim-11-05 CS amplifier noise
VDD vdd 0 5
RL vdd out 10k
VI in 0 dc 0 ac 1
VB g1 in dc 0.701534
RS g1 g 100k
M1 out g 0 0 nm W=100u L=1u
.model nm nmos level=1 vto=0.6 kp=194u tox=80e-10 lambda=0 kf=3e-24 af=1
.temp 27.4
.noise v(out) VI dec 1 10 1e9
.end
```

工作点为 $I_D=100.6\ \mu$A，$g_m=1.973$ mS，$C_{gs}=0.288$ pF，$C_{gd}=0$。噪声谱密度与手算一致：

| $f$ | 输入，手算（V²/Hz） | 输入，SPICE | 输出，手算（V²/Hz） | 输出，SPICE | 主导噪声源 |
|---|---|---|---|---|---|
| 10 Hz | $6.98\times10^{-13}$（0.84 µV/√Hz） | $6.97\times10^{-13}$ | $2.71\times10^{-10}$（16 µV/√Hz） | $2.71\times10^{-10}$ | 闪烁噪声 |
| 100 kHz | $1.74\times10^{-15}$（42 nV/√Hz） | $1.74\times10^{-15}$ | $6.73\times10^{-13}$（0.82 µV/√Hz） | $6.76\times10^{-13}$ | $R_S$ |
| 1 GHz | $1.99\times10^{-13}$（0.45 µV/√Hz） | $1.99\times10^{-13}$ | $2.37\times10^{-15}$（49 nV/√Hz） | $2.37\times10^{-15}$ | 漏极热噪声 |

100 kHz 处 0.4% 的差别来自仿真中的 $I_D$ 略高于 100 µA。

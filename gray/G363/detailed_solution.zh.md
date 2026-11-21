# 详细步骤 - G363

基极电流闪烁噪声在 1 kHz 转折频率处等于散粒噪声，在 500 Hz 处只增大等效输入噪声电流。求出这一增量，再应用不相关噪声源下点噪声系数最小值的闭式解。

### 第 1 步 — 500 Hz 处的基极电流噪声

转折频率 $f_c=1$ kHz，故 $K_1I_B=2qI_Bf_c$，

$$
\frac{\overline{i_b^2}}{\Delta f}=2qI_B\left(1+\frac{f_c}{f}\right)=2qI_B\left(1+\frac{1000\ \mathrm{Hz}}{500\ \mathrm{Hz}}\right)=3\cdot2qI_B,\qquad I_B=\frac{10\ \mu\mathrm A}{100}=0.1\ \mu\mathrm A .
$$

因此

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(300+1300)\ \Omega,\qquad
\frac{\overline{i_i^2}}{\Delta f}=3\cdot2qI_B ,
$$

其中 $g_m=10\ \mu\mathrm A/26\ \mathrm{mV}=0.385$ mS，$1/2g_m=1.3$ kΩ。

### 第 2 步 — 不相关噪声源下的最佳值

点噪声系数 $F=1+(\overline{v_i^2}+\overline{i_i^2}R_S^2)/(4kTR_S\Delta f)$ 在 $R_S^2=\overline{v_i^2}/\overline{i_i^2}$ 处最小，此时 $F_{\mathrm{opt}}=1+2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}/(4kT\Delta f)$。不计闪烁噪声时，该器件有 $R_{S(\mathrm{opt})}=(\sqrt{\beta_F}/g_m)\sqrt{1+2g_mr_b}=28.8$ kΩ、$F_{\mathrm{opt}}-1=\sqrt{1.231/100}=0.111$。$\overline{i_i^2}$ 变为三倍，使 $R_{S(\mathrm{opt})}$ 除以 $\sqrt3$，$F_{\mathrm{opt}}-1$ 乘以 $\sqrt3$。

### 第 3 步 — 500 Hz 处的数值

$$
R_{S(\mathrm{opt})}=\frac{28.8\ \mathrm{k\Omega}}{\sqrt3}=16.6\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\sqrt3\,(0.111)=1.192,\qquad
10\log_{10}1.192=0.76\ \mathrm{dB},
$$

而在远高于闪烁噪声转折频率处为 0.46 dB。保留相关性的完整计算（基极电流噪声流经 $r_b+R_S$，两个噪声源中都含集电极散粒噪声）给出约 16.6 kΩ 和 0.82 dB。

### 第 4 步 — 解释

由于闪烁噪声只增大电流噪声源，最佳源电阻下移，最小噪声系数升高。小电流器件即使在 500 Hz 处仍保持低噪声系数，仍远低于 1 dB，但只在源电阻接近 17 kΩ 时成立。

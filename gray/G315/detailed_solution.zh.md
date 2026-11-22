# 详细步骤 - G315

零点移到无穷远后，环路增益只有密勒主极点和一个由 $g_{m6}$ 与输出电容决定的次极点。单位增益反馈中环路增益就是 $a(s)$，45° 相位裕度要求次极点位于穿越频率处，即约在 $\omega_u=g_{m1}/C_c$ 处。先求两个跨导，解出 $C_L$，再检查 $M_6$ 栅极电容对结果的影响。

### 第 1 步 — 偏置电流与跨导

饱和器件的 $L_{\text{eff}}=1-2(0.09)-0.1=0.72$ μm。各电流由 $M_8$ 栅极线上的电流镜决定：

- $M_5$、$M_7$ 与 $M_8$ 尺寸相同，故 $I_{D5}=I_{D7}=200$ μA；
- 尾电流平分为 $I_{D1}=I_{D2}=100$ μA；
- $M_6$（100/1）是 $M_3$（50/1）的两倍，且平衡时 $V_{GS6}=V_{GS3}$，故 $I_{D6}=200$ μA。

由 $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$：
$$
g_{m1}=\sqrt{2\left(64.7\ \mu\mathrm{A/V^2}\right)\left(\frac{150}{0.72}\right)(100\ \mu\mathrm A)}=1.642\ \mathrm{mA/V},
$$
$$
g_{m6}=\sqrt{2\left(194\ \mu\mathrm{A/V^2}\right)\left(\frac{100}{0.72}\right)(200\ \mu\mathrm A)}=3.283\ \mathrm{mA/V},\qquad \frac{g_{m6}}{g_{m1}}=2.00 .
$$
两管恰好都有 $|V_{ov}|=0.122$ V，因此该比值就是 $I_{D6}/I_{D1}=2$。

### 第 2 步 — $R_Z=1/g_{m6}$ 时的极点

对补偿后的两级放大器，记 $M_6$ 栅极处电容为 $C_1$、输出端电容为 $C_2$：
$$
p_1\approx-\frac{1}{g_{m6}R_1R_2C_c},\qquad
|p_2|\approx\frac{g_{m6}C_c}{C_1C_2+C_c(C_1+C_2)} .
$$
零点位于无穷远，结电容忽略不计。若再忽略 $C_1$，次极点由负载决定，$|p_2|\approx g_{m6}/C_L$。在 $|p_1|$ 以上，$a(j\omega)\approx g_{m1}/(j\omega C_c)$，因此
$$
\omega_u=\frac{g_{m1}}{C_c}=\frac{1.642\ \mathrm{mA/V}}{5\ \mathrm{pF}}=3.28\times10^8\ \mathrm{rad/s}\quad(52.3\ \mathrm{MHz}).
$$

### 第 3 步 — 最大负载电容

在 $|p_1|$ 以上，$a(j\omega)$ 的相位为 $-90^\circ-\tan^{-1}(\omega/|p_2|)$，因此 45° 相位裕度要求 $|p_2|$ 等于穿越频率。以 $\omega_u$ 近似穿越频率：
$$
\frac{g_{m6}}{C_L}=\frac{g_{m1}}{C_c}\quad\Rightarrow\quad C_{L,\max}=C_c\,\frac{g_{m6}}{g_{m1}}=5\ \mathrm{pF}\times2.00=10\ \mathrm{pF}.
$$
若对两极点响应精确计算穿越频率，在 $\omega=|p_2|$ 处的幅值为 $\omega_u/(\sqrt2\,|p_2|)=1$。由此得 $|p_2|=\omega_u/\sqrt2$，$C_{L,\max}=\sqrt2\times10\ \mathrm{pF}=14.1$ pF。

### 第 4 步 — $M_6$ 栅极电容的影响

结电容忽略不计，但栅极电容仍然存在。$M_6$ 栅极处，饱和区中：
$$
C_{gs6}=\tfrac23WL_{\text{eff}}C_{ox}+C_{ol}W=\tfrac23(100)(0.72)(4.32\ \mathrm{fF})+(0.35\ \mathrm{fF})(100)=0.242\ \mathrm{pF}.
$$
再加上 $M_2$、$M_4$ 的栅漏交叠电容 $0.35\ \mathrm{fF/\mu m}\times(150+50)\ \mu\mathrm m=0.070$ pF，得 $C_1\approx0.24$–$0.31$ pF。令完整的 $|p_2|$ 表达式等于 $\omega_u$：
$$
g_{m6}C_c^2/g_{m1}=C_1C_L+C_c(C_1+C_L)\quad\Rightarrow\quad C_L=\frac{C_c\,(C_cg_{m6}/g_{m1}-C_1)}{C_1+C_c}.
$$

| $C_1$（pF） | $C_{L,\max}$（pF） |
|---|---|
| 0 | 10.0 |
| 0.242 | 9.30 |
| 0.312 | 9.12 |

例如 $C_1=0.242$ pF 时，$C_L=5(10-0.242)/(5.242)=9.30$ pF。较粗略的 $|p_2|\approx g_{m6}/(C_1+C_2)$ 给出约 9.7 pF。因此栅极电容只使上限降低 7–9%，答案约为 10 pF（$|p_2|=\omega_u$ 准则），按精确穿越条件约为 14 pF。

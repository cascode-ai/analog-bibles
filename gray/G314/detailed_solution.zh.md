# 详细步骤 - G314

零点位于无穷远且忽略器件寄生电容时，环路增益只有密勒主极点和一个由 $g_{m6}$ 与负载电容决定的次极点。单位增益反馈中，环路增益就是 $a(s)$ 本身。45° 相位裕度要求次极点位于穿越频率处，即约在 $\omega_u=g_{m1}/C_c$ 处。先求偏置电流和两个跨导，再解出 $C_L$。

### 第 1 步 — 器件尺寸与偏置电流

所有晶体管 $L_{\text{drwn}}=8$ μm，因此
$$
L_{\text{eff}}=8-2(0.3)-1=6.4\ \mu\mathrm m,\qquad \frac{W}{L_{\text{eff}}}=\frac{100}{6.4}=15.6
$$
适用于每个 100/8 器件。$M_5$、$M_7$ 与 $M_8$ 尺寸相同并共用栅极，各流过 20 μA 参考电流。尾电流平分为 $I_{D1}=I_{D2}=10$ μA。平衡时 $V_{GS6}=V_{GS3}$，而 $M_6$（100/8）是 $M_3$（50/8）的两倍，因此 $I_{D6}=20$ μA，与 $M_7$ 一致。

### 第 2 步 — 跨导

由 $I_D=\frac{k'}{2}\frac{W}{L_{\text{eff}}}V_{ov}^2$，跨导为 $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$：
$$
g_{m1}=\sqrt{2\left(30.2\ \mu\mathrm{A/V^2}\right)(15.6)(10\ \mu\mathrm A)}=97.1\ \mu\mathrm{A/V},
$$
$$
g_{m6}=\sqrt{2\left(60.4\ \mu\mathrm{A/V^2}\right)(15.6)(20\ \mu\mathrm A)}=194\ \mu\mathrm{A/V},\qquad \frac{g_{m6}}{g_{m1}}=2.00 .
$$
由于 $k'_n=2k'_p$、$I_{D6}=2I_{D1}$ 且宽长比相同，该比值恰为 2。

### 第 3 步 — 补偿后放大器的极点

对 $C_c$ 串联 $R_Z=1/g_{m6}$ 的两级放大器，标准的极点结果为
$$
p_1\approx-\frac{1}{g_{m6}R_1R_2C_c},\qquad
p_2\approx-\frac{g_{m6}C_c}{C_1C_2+C_c(C_1+C_2)},
$$
其中 $C_1$ 为 $M_6$ 栅极处的电容，$C_2=C_L$ 为输出端电容。忽略 $C_1$ 时，$R_Z$ 引入的附加极点 $-1/(R_ZC_1)$ 也被推到无穷远。按题意令 $C_1\to0$，次极点化为
$$
p_2\approx-\frac{g_{m6}}{C_L}.
$$
在该极点处 $C_c$ 相当于短路，$M_6$ 经它接成二极管，输出节点看到 $1/g_{m6}$ 与 $C_L$ 并联。在 $|p_1|$ 以上，增益为 $a(j\omega)\approx g_{m1}/(j\omega C_c)\cdot1/(1+j\omega/|p_2|)$，忽略 $p_2$ 时的单位增益频率为
$$
\omega_u=\frac{g_{m1}}{C_c}=\frac{97.1\ \mu\mathrm{A/V}}{5\ \mathrm{pF}}=1.94\times10^7\ \mathrm{rad/s}.
$$

### 第 4 步 — 45° 时的最大负载电容

在远高于 $|p_1|$ 处，$a(j\omega)$ 的相位为 $-90^\circ-\tan^{-1}(\omega/|p_2|)$。因此 45° 相位裕度意味着在穿越频率处 $\omega/|p_2|=1$。采用穿越频率仍为 $\omega_u$ 的常用近似：
$$
|p_2|=\omega_u\quad\Rightarrow\quad\frac{g_{m6}}{C_L}=\frac{g_{m1}}{C_c}
\quad\Rightarrow\quad
C_{L,\max}=C_c\,\frac{g_{m6}}{g_{m1}}=5\ \mathrm{pF}\times2.00=10\ \mathrm{pF}.
$$
若精确处理，两极点响应在 $\omega=|p_2|$ 处的幅值为 $\omega_u/(\omega\sqrt2)$。令其等于 1，得 $|p_2|=\omega_u/\sqrt2$，因此
$$
C_{L,\max}=\sqrt2\,C_c\,\frac{g_{m6}}{g_{m1}}=14.1\ \mathrm{pF}.
$$
按设计准则 $|p_2|=\omega_u$ 得 10 pF；精确的穿越条件允许 14 pF。负载再大会使 $|p_2|$ 低于穿越频率，相位裕度低于 45°。

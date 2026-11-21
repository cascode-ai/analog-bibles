# 详细步骤 - G291

相位裕度等于在环路增益幅值为单位值的频率 $f_c$ 处求得的 $180^\circ+\angle T$。先由所需的闭环增益求出低频环路增益，再由三极点幅值确定 $f_c$，最后把三个极点在 $f_c$ 处的相位相加。

### 第 1 步 — 低频环路增益

对负反馈，$A_0=a_0/(1+T_0)$，$T_0=a_0f$。$a_0=40{,}000$、$A_0=400$ 时：
$$
T_0=\frac{a_0}{A_0}-1=\frac{40{,}000}{400}-1=99,\qquad f=\frac{T_0}{a_0}=0.0025 .
$$
由于 $f$ 与频率无关，$T(j\omega)=f\,a(j\omega)$ 与 $a$ 具有相同的极点：
$$
T(jf_\mathrm{s})=\frac{99}{\left(1+j\dfrac{f_\mathrm{s}}{2\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{200\ \mathrm{kHz}}\right)\left(1+j\dfrac{f_\mathrm{s}}{4\ \mathrm{MHz}}\right)},
$$
其中 $f_\mathrm{s}$ 表示信号频率。

### 第 2 步 — 单位环路增益频率

第一个极点远低于交点频率，仅考虑它时 $|T|=1$ 约在 $T_0\times2\ \mathrm{kHz}\approx200$ kHz 处。而这正是第二个极点的位置，它也会造成衰减，因此交点频率略低。数值求解 $|T|=1$ 得 $f_c\approx156$ kHz，此处三个极点因子为
$$
\sqrt{1+\left(\tfrac{156}{2}\right)^2}=78.0,\qquad
\sqrt{1+\left(\tfrac{156}{200}\right)^2}=1.27,\qquad
\sqrt{1+\left(\tfrac{156}{4000}\right)^2}=1.00,
$$
且 $99/(78.0\times1.27\times1.00)=1.00$，符合要求。

### 第 3 步 — 相位裕度

每个极点贡献 $-\tan^{-1}(f_c/f_p)$：
$$
\angle T(f_c)=-\tan^{-1}78-\tan^{-1}0.78-\tan^{-1}0.039=-89.3^\circ-38.0^\circ-2.2^\circ=-129.5^\circ .
$$
因此
$$
\mathrm{PM}=180^\circ+\angle T(f_c)\approx50^\circ .
$$
较粗略的估算只用 $-20$ dB/dec 渐近线确定交点（$f_c\approx198$ kHz），会高估 $f_c$，得到 $\mathrm{PM}\approx43^\circ$；计入第二个极点的衰减后得到更准确的值，约为 $50^\circ$。
